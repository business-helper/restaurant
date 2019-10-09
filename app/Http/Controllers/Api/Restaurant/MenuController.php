<?php

namespace App\Http\Controllers\Api\Restaurant;

use App\Model\FoodCategory;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\FoodSize;
use App\Model\MenuOptionTag;
use App\Model\OptionItem;
use App\Model\OptionTag;
use App\Model\MenuSize;
use App\Model\MenuOptionItem;
use App\Model\FoodMenu;
use App\Model\HomeSlider;
use App\Traits\ImageOperation;
use Illuminate\Support\Facades\Auth;
use DB;



class MenuController extends Controller
{
    use ImageOperation;
    public function getInformationForCreateMenu($restaurant_id=null){
        if(is_null($restaurant_id))
            $restaurant_id=Auth::guard('restaurant-api')->user()->id;
        $result=Array();
        $result['size']=Array();
        $food_sizes=FoodSize::where('restaurant_id',$restaurant_id)->get();
        $i=0;
        foreach ($food_sizes as $food_size){
            $result['size'][$i]=$food_size->toArray();
            $result['size'][$i]['image']='';
            $result['size'][$i]['price']=null;
            $i++;
        }
        $option_tags=OptionTag::where('restaurant_id',$restaurant_id)->get();
        $j=0;
        $result['option_tags']=Array();
        foreach ($option_tags as $option_tag) {
            $result['option_tags'][$j] = $option_tag->toArray();
            $result['option_tags'][$j]['selected_sizes']=Array();
            $result['option_tags'][$j]['new_sizes']=Array();
            $option_items = OptionItem::where('tag_id', $option_tag->id)->get();
            $k = 0;
            $result['option_tags'][$j]['option_items'] = Array();
            foreach ($option_items as $option_item) {
                $result['option_tags'][$j]['option_items'][$k] = $option_item->toArray();
                $result['option_tags'][$j]['option_items'][$k]['is_enabled'] = true;
                $k++;
            }
            $result['option_tags'][$j]['new_items']=Array();
            $j++;
        }
        $result['max_sequence']=FoodMenu::where('restaurant_id',$restaurant_id)->max('sequence')+1;
        $result['categories']=FoodCategory::where('restaurant_id',$restaurant_id)->get()->toArray();
        return response()->json($result);
    }


    // Saving Menu //
    public function addMenu(Request $request, $restaurant_id=null){
        if(is_null($restaurant_id))
            $restaurant_id=Auth::guard('restaurant-api')->user()->id;
        $menu_id=$request->input('menu_id');
        if (is_null($menu_id))
            $food_menu=new FoodMenu;
        else
            $food_menu=FoodMenu::find($menu_id);
        $food_menu->name=$request->input('name');
        $food_menu->restaurant_id=$restaurant_id;
        $food_menu->description=$request->input('description');
        $food_menu->min_qty=$request->input('min_qty');
        $food_menu->price=$request->input('price');
        $food_menu->cook_time=$request->input('cook_time');
        $food_menu->sequence=$request->input('sequence');
        $sequence=$request->input('sequence');
        $image=$this->uploadImage($request->get('image'),"FoodMenus");
        if ($image!="No Image")
            $food_menu->image=$image;

        if(!is_null($request->input('category'))){
            $category=$request->input('category');
            $food_menu->category_id=$category['id'];
        }

        $existing_menus=FoodMenu::where('id','!=',$menu_id)->orderBy('sequence')->get();
        $i=1;
        foreach ($existing_menus as $existing_menu){
            if($i<$sequence)
                $existing_menu->sequence=$i;
            if($i>=$sequence)
                $existing_menu->sequence=$i+1;
            $i++;
            $existing_menu->save();
        }


        $food_menu->sequence=$sequence;
        $food_menu->save();

        // Remove all existing sizes, option tag, option item for this menu
        $selected_size_ids=Array();
        $pre_menu_size_ids=MenuSize::where('menu_id',$menu_id)->get()->toArray();

        MenuOptionTag::where('menu_id',$menu_id)->delete();
        MenuOptionItem::where('menu_id',$menu_id)->delete();

        //--- Selected Sizes  ----//
        $selected_sizes=$request->input('selected_sizes');
        foreach ($selected_sizes as $menu_size){
            $selected_size_ids[]=$menu_size['id'];
            $check_result = $this->checkIfContainsId($menu_size['id'], 'size_id', $pre_menu_size_ids);
            if ($check_result){
                $record_menu_size=MenuSize::find($check_result['id']);
                array_splice($pre_menu_size_ids,$check_result['index'],1);
            }
            else
                $record_menu_size=new MenuSize;

            $record_menu_size->menu_id=$food_menu->id;
            $record_menu_size->enabled=true;
            $record_menu_size->size_id=$menu_size['id'];
            if (isset($menu_size['price']) && $menu_size['price']>0)
                $record_menu_size->price=$menu_size['price'];
            else
                $record_menu_size->price=$food_menu->price;
            $image=$this->uploadImage($menu_size['image'],'FoodMenus','FoodSize');

            if ($image!="No Image"){
                $record_menu_size->image=$image;
            }

            $record_menu_size->save();
        }

        if (count($pre_menu_size_ids)>0){  // Removing Menusizes for not exisinng in selected sizes
            $size_ids=Array();
            foreach ($pre_menu_size_ids as $pre_menu_size_id){
                $size_ids[]=$pre_menu_size_id['size_id'];
            }
            MenuSize::where('size_id',$size_ids)->whereNotIn('size_id',$selected_size_ids)->delete();
        }

        //  --- New Added Sizes  ---//
        $new_sizes=$request->input('new_sizes');
        $new_size_ids=Array();
        foreach ($new_sizes as $new_size){
            $record_new_size=new FoodSize;
            $record_new_size->name=$new_size['name'];
            $record_new_size->restaurant_id=$restaurant_id;
            $record_new_size->save();
            $new_size_ids[]=$record_new_size->id;

            $record_menu_size=new MenuSize;
            $record_menu_size->menu_id=$food_menu->id;
            $record_menu_size->enabled=true;
            $record_menu_size->size_id=$record_new_size->id;
            $record_menu_size->image=$this->uploadImage($new_size['image'],'FoodMenus','FoodSize');
            if (!is_null($new_size['price']) && $new_size['price']>0)
                $record_menu_size->price=$new_size['price'];
            else
                $record_menu_size->price=$food_menu->price;
            $record_menu_size->save();
        }

        //Existing Option Tags //
        $option_tags=$request->input('selected_options');
        foreach ($option_tags as $option_tag){
            $menu_option_tag=new MenuOptionTag;
            $menu_option_tag->option_tag_id=$option_tag['id'];
            $menu_option_tag->menu_id=$food_menu->id;
            $menu_option_tag->min=$option_tag['min'];
            $menu_option_tag->max=$option_tag['max'];

            $menu_option_tag->size_min_max=Array();
            // Selected Sizes for Option Tag
            $tag_sizes=$option_tag['selected_sizes'];
            $menu_size_min_max=Array();
            for ($i=0;$i<count($tag_sizes);$i++){
                if ($tag_sizes[$i]['enabled']==true){
                    $temp=Array();
                    $temp['size_id']=$tag_sizes[$i]['id'];
                    $temp['min']=$tag_sizes[$i]['min'];
                    $temp['max']=$tag_sizes[$i]['max'];
                    $menu_size_min_max[]=$temp;
                }
            }
            // New Sizes for Option Tag
            $tag_new_sizes=$option_tag['new_sizes'];
            for($i=0;$i<count($tag_new_sizes);$i++){
                if ($tag_new_sizes[$i]['enabled']==true){
                    $temp=Array();
                    $temp['size_id']=$new_size_ids[$i];
                    $temp['min']=$tag_new_sizes[$i]['min'];
                    $temp['max']=$tag_new_sizes[$i]['max'];
                    $menu_size_min_max[]=$temp;
                }
            }
            $menu_option_tag->size_min_max=$menu_size_min_max;
            $menu_option_tag->save();

            // Existing Option Items //
            $option_items=$option_tag['option_items'];
            foreach ($option_items as $option_item){
                if ($option_item['is_enabled']){
                    $menu_option_item=new MenuOptionItem;
                    $menu_option_item->option_id=$option_item['id'];
                    $menu_option_item->menu_id=$food_menu->id;
                    $menu_option_item->price=$option_item['price'];
                    $menu_option_item->max=$option_item['max'];
                    $menu_option_item->is_enabled=1;
                    $menu_option_item->save();
                }
            }

            // New Added Option Items //
            $new_option_items=$option_tag['new_items'];
            foreach ($new_option_items as $new_option_item){
                //Saving Option Item
                $record_new_option_item=new OptionItem;
                $record_new_option_item->tag_id=$option_tag['id'];
                $record_new_option_item->price=$new_option_item['price'];
                $record_new_option_item->name=$new_option_item['name'];
                $record_new_option_item->max=$new_option_item['max'];
                $record_new_option_item->save();

                // Saving Menu Option Item
                $menu_option_item=new MenuOptionItem;
                $menu_option_item->option_id=$record_new_option_item->id;
                $menu_option_item->menu_id=$food_menu->id;
                $menu_option_item->price=$new_option_item['price'];
                $menu_option_item->max=$new_option_item['max'];
                $menu_option_item->is_enabled=1;
                $menu_option_item->save();
            }
        }


        // New Added Options
        $option_tags=$request->input('new_options');
        foreach ($option_tags as $option_tag) {
            // Saving new option tags
            $record_new_option_tag=new OptionTag;
            $record_new_option_tag->title=$option_tag['title'];
            $record_new_option_tag->min=$option_tag['min'];
            $record_new_option_tag->max=$option_tag['max'];
            $record_new_option_tag->restaurant_id=$restaurant_id;
            $record_new_option_tag->size_min_max = Array();
            $tag_sizes = $option_tag['selected_sizes'];
            $menu_size_min_max = Array();
            for ($i = 0; $i < count($tag_sizes); $i++) {
                if ($tag_sizes[$i]['enabled'] == true) {
                    $temp = Array();
                    $temp['size_id'] = $tag_sizes[$i]['id'];
                    $temp['min'] = $tag_sizes[$i]['min'];
                    $temp['max'] = $tag_sizes[$i]['max'];
                    $menu_size_min_max[] = $temp;
                }
            }
            // New Sizes for Option Tag
            $tag_new_sizes = $option_tag['new_sizes'];
            for ($i = 0; $i < count($tag_new_sizes); $i++) {
                if ($tag_new_sizes[$i]['enabled'] == true) {
                    $temp = Array();
                    $temp['size_id'] = $new_size_ids[$i];
                    $temp['min'] = $tag_new_sizes[$i]['min'];
                    $temp['max'] = $tag_new_sizes[$i]['max'];
                    $menu_size_min_max[] = $temp;
                }
            }
            $record_new_option_tag->size_min_max = $menu_size_min_max;
            $record_new_option_tag->save();

            $menu_option_tag = new MenuOptionTag;
            $menu_option_tag->option_tag_id = $record_new_option_tag->id;
            $menu_option_tag->menu_id = $food_menu->id;
            $menu_option_tag->min = $option_tag['min'];
            $menu_option_tag->max = $option_tag['max'];
            // Selected Sizes for Option Tag
            $menu_option_tag->size_min_max=$record_new_option_tag->size_min_max;
            $menu_option_tag->save();

            // New Added Option Items //
            $new_option_items = $option_tag['new_items'];
            foreach ($new_option_items as $new_option_item) {
                //Saving Option Item
                $record_new_option_item = new OptionItem;
                $record_new_option_item->tag_id = $record_new_option_tag->id;
                $record_new_option_item->price = $new_option_item['price'];
                $record_new_option_item->name = $new_option_item['name'];
                $record_new_option_item->max = $new_option_item['max'];
                $record_new_option_item->save();

                // Saving Menu Option Item
                $menu_option_item = new MenuOptionItem;
                $menu_option_item->option_id = $record_new_option_item->id;
                $menu_option_item->menu_id = $food_menu->id;
                $menu_option_item->price = $new_option_item['price'];
                $menu_option_item->max = $new_option_item['max'];
                $menu_option_item->is_enabled = 1;
                $menu_option_item->save();
            }
        }
    }

    public function getMenu($id){
        $result=Array();
        $result['size']=Array();
        $result['menu']=Array();
        $result['selected_size']=Array();
        $result['selected_options']=Array();

        $menu=FoodMenu::find($id);
        $result['menu']['name']=$menu->name;
        $result['menu']['description']=$menu->description;
        $result['menu']['sequence']=$menu->sequence;
        $result['menu']['image']=null;
        if ($menu->image)
            $result['menu']['image']=url('public/Images/FoodMenus/'.$menu->image);
        $result['menu']['price']=$menu->price;
        $result['menu']['cook_time']=$menu->cook_time;
        $result['menu']['min_qty']=$menu->min_qty;


        $selected_menu_sizes=MenuSize::where('menu_id',$id)->get()->toArray();
        $selected_option_tags=MenuOptionTag::where('menu_id',$id)->get()->toArray();
        $selected_option_items=MenuOptionItem::where('menu_id',$id)->get()->toArray();

        $food_sizes=FoodSize::all();
        $option_tags=OptionTag::all();
        $i=0;
        $j=0;
        foreach ($food_sizes as $food_size){
            $result['size'][$i]=$food_size->toArray();
            $result['size'][$i]['image']='';
            $result['size'][$i]['is_default']=false;
            $check_result = $this->checkIfContainsId($food_size->id, 'size_id', $selected_menu_sizes);
            if ($check_result){
                if ($check_result['image'])
                    $result['size'][$i]['image']=url('public/Images/FoodMenus/'.$check_result['image']);
                $result['size'][$i]['price']=$check_result['price'];
                $result['selected_size'][$j]=$result['size'][$i];
                array_splice($selected_menu_sizes,$check_result['index'],1);
                $j++;
            }
            $i++;
        }

        $j=0;
        $result['option_tags']=Array();
        $k=0;
        foreach ($option_tags as $option_tag){
            $is_used=false;
            $result['option_tags'][$j]=$option_tag->toArray();
            $result['option_tags'][$j]['new_sizes']=Array();
            $result['option_tags'][$j]['new_items']=Array();
            $result['option_tags'][$j]['selected_sizes']=Array();
            $check_result=$this->checkIfContainsId($option_tag->id,'option_tag_id',$selected_option_tags);
            $size_min_max=Array();
            if ($check_result){
                $is_used=true;
                $result['option_tags'][$j]['size_min_max']=$check_result['size_min_max'];
                $size_min_max=$check_result['size_min_max'];
                array_splice($selected_option_tags,$check_result['index'],1);
            }

            $sizes=Array();
            foreach ($result['selected_size'] as $food_size){
                $temp=Array();
                $temp['id']=$food_size['id'];
                $temp['name']=$food_size['name'];
                $temp['min']=0;
                $temp['max']=null;
                $temp['enabled']=false;
                for ($k=count($size_min_max)-1;$k>=0;$k--){
                    if ($food_size['id']==$size_min_max[$k]['size_id']){
                        $temp['min']=$size_min_max[$k]['min'];
                        $temp['max']=$size_min_max[$k]['max'];
                        $temp['enabled']=true;
                        array_splice($size_min_max,$k,1);
                        break;
                    }
                }
                $sizes[]=$temp;
            }
            $result['option_tags'][$j]['selected_sizes']=$sizes;

            $option_items=OptionItem::where('tag_id',$option_tag->id)->get();
            $k=0;
            $result['option_tags'][$j]['option_items']=Array();
            foreach ($option_items as $option_item){
                $result['option_tags'][$j]['option_items'][$k]=$option_item->toArray();
                $result['option_tags'][$j]['option_items'][$k]['is_enabled']=true;
                if ($is_used) {
                    $check_result = $this->checkIfContainsId($option_item->id, 'option_id', $selected_option_items);
                    if ($check_result) {
                        $result['option_tags'][$j]['option_items'][$k]['is_enabled']=true;
                        array_splice($selected_option_items,$check_result['index'],1);
                        $result['option_tags'][$j]['option_items'][$k]['price']=$check_result['price'];
                        $result['option_tags'][$j]['option_items'][$k]['max']=$check_result['max'];
                    }
                    else
                        $result['option_tags'][$j]['option_items'][$k]['is_enabled']=false;
                }
                $k++;
            }
            if ($is_used)
                $result['selected_options'][]=$result['option_tags'][$j];
            $j++;
        }


        $result['categories']=FoodCategory::get()->toArray();
        if(!is_null($menu->category_id))
        {
            $temps=FoodCategory::find($menu->category_id);
            if(!is_null($temps))
                $result['selected_category']=$temps;
        }
        return response()->json($result);
    }


    public function checkIfContainsId($id,$key,$array){
        $result=null;
        for ($i=0;$i<count($array);$i++){
            if ((int)$array[$i][$key]==(int)$id)
            {
                $result=$array[$i];
                $result['index']=$i;
                break;
            }
        }
        return $result;
    }



    public function deleteMenu($id){
        $food_menu=FoodMenu::find($id);
        MenuSize::where('menu_id',$id)->delete();
        MenuOptionTag::where('menu_id',$id)->delete();
        MenuOptionItem::where('menu_id',$id)->delete();
        $food_menu->delete();
    }


    public function getMenuList($restaurant_id=null){
        $result=Array();
        if(is_null($restaurant_id))
        {
            $restaurant=Auth::guard('restaurant-api')->user();
            $restaurant_id=$restaurant->id;
        }else{
            if(!Auth::guard('admin-api')->check()){
                return response()->json(['status'=>'401 error']);
            }
        }
        $menus=DB::table('food_menus')->leftJoin('food_categories','food_menus.category_id','=','food_categories.id')->
                where('food_menus.restaurant_id',$restaurant_id)->
                select('food_menus.*','food_categories.name as category')->orderBy('food_menus.sequence')->get();
        $i=0;
        foreach ($menus as $menu){
            $result[$i]['id']=$menu->id;
            $result[$i]['no']=$i+1;
            $result[$i]['name']=$menu->name;
            $result[$i]['sequence']=$menu->sequence;
            $result[$i]['category']=$menu->category;
            $result[$i]['image']=null;
            if ($menu->image)
                $result[$i]['image']=url('/public/Images/FoodMenus/'.$menu->image);
            $result[$i]['description']=$menu->description;
            if ($menu->cook_time)
                $result[$i]['cook_time']=$menu->cook_time;
            else
                $result[$i]['cook_time']='unknown';
            $result[$i]['price']=$menu->price;

            $result[$i]['size']=Array();
            $menu_sizes=MenuSize::where('menu_id',$menu->id)->get();
            if(count($menu_sizes)>1){
                $j=0;
                foreach ($menu_sizes as $menu_size){
                    $size_id=$menu_size->size_id;
                    $size=FoodSize::find($size_id);
                    $result[$i]['size'][$j]['size_name']=$size->name;
                    $result[$i]['size'][$j]['price']=$menu_size->price;
                    $j++;
                }
            }
            $i++;
        }
        return response()->json($result);
    }


}
