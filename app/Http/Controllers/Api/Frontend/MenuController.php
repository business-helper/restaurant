<?php

namespace App\Http\Controllers\Api\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\FoodMenu;
use App\Model\FoodSize;
use App\Model\OptionItem;
use App\Model\MenuSize;
use App\Model\MenuOptionItem;
use App\Model\MenuOptionTag;
use App\Model\FoodCategory;
use DB;
use App\Traits\ImageOperation;



class MenuController extends Controller
{
    use ImageOperation;
    public static  function getFoodMenus(){
        $menu_controller=new MenuController();
        $result=Array();
        $categories=FoodCategory::get()->toArray();
        $i=0;
        foreach ($categories as $category){
            $result['categories'][$i]['id']=$category['id'];
            $result['categories'][$i]['name']=$category['name'];
            if (!is_null($category['image']))
                $result['categories'][$i]['image']=url('public/Images/FoodCategories/'.$category['image']);
            $result['categories'][$i]['menus']=Array();
            $result['categories'][$i]['menus']=$menu_controller->getMenus($category['id']);
            $i++;
        }
        return $categories;
    }


    public function getMenus($category_id){
        $result['menu']=Array();
        $menus=FoodMenu::where('category_id',$category_id)->get();
        $i=0;
        foreach ($menus as $menu){
            $result['menu'][$i]=$menu->toArray();
            $result['menu'][$i]['size']=Array();
            if ($menu->image)
                $result['menu'][$i]['image']=url('/public/Images/FoodMenus/'.$menu->image);

            $menu_option_item_idss=MenuOptionItem::where('menu_id',$menu->id)->get()->pluck('option_id')->toArray();
            $menu_sizes=DB::table('menu_sizes')->
            join('food_sizes','menu_sizes.size_id','=','food_sizes.id')->
            where('menu_sizes.menu_id','=',$menu->id)->get();
            $j=0;
            if (count($menu_sizes)>1){
                foreach($menu_sizes as $menu_size){
                    $result['menu'][$i]['size'][$j]['name']=$menu_size->name;
                    $result['menu'][$i]['size'][$j]['price']=$menu_size->price;
                    $result['menu'][$i]['size'][$j]['is_default']=$menu_size->is_default;
                    $result['menu'][$i]['size'][$j]['enabled']=$menu_size->enabled;
                    if ($menu_size->image)
                        $result['menu'][$i]['size'][$j]['image']=url('/public/Images/FoodMenus/'.$menu_size->image);
                    else
                        $result['menu'][$i]['size'][$j]['image']=$result['menu'][$i]['image'];
                    $j++;
                }
            }

            $result['menu'][$i]['option_tags']=Array();
            $result['menu'][$i]['has_option']=false;
            $menu_option_tags=DB::table('menu_option_tags')->join('option_tags as option_tags','menu_option_tags.option_tag_id','=','option_tags.id')->
            where('menu_option_tags.menu_id','=',$menu->id)->select('menu_option_tags.*','option_tags.title')->get();
            $j=0;
            foreach ($menu_option_tags as $menu_option_tag){
                $result['menu'][$i]['option_tags'][$j]['title']=$menu_option_tag->title;
                $result['menu'][$i]['option_tags'][$j]['id']=$menu_option_tag->option_tag_id;
                $result['menu'][$i]['option_tags'][$j]['min']=$menu_option_tag->min;
                $result['menu'][$i]['option_tags'][$j]['max']=$menu_option_tag->max;

                $result['menu'][$i]['option_tags'][$j]['selected_item_index']=-1;
                $size_min_max=json_decode($menu_option_tag->size_min_max,true);
                $result['menu'][$i]['option_tags'][$j]['size']=Array();
                if (count($menu_sizes)>1){
                    $k=0;
                    foreach ($menu_sizes as $menu_size){
                        $result['menu'][$i]['option_tags'][$j]['size'][$k]['min']=$menu_option_tag->min;
                        $result['menu'][$i]['option_tags'][$j]['size'][$k]['max']=$menu_option_tag->max;
                        $result['menu'][$i]['option_tags'][$j]['size'][$k]['count']=0;
                        if (!is_null($size_min_max)){
                            for ($l=count($size_min_max)-1;$l>=0;$l--){
                                if ($menu_size->size_id==$size_min_max[$l]['size_id']){
                                    $result['menu'][$i]['option_tags'][$j]['size'][$k]['min']=$size_min_max[$l]['min'];
                                    $result['menu'][$i]['option_tags'][$j]['size'][$k]['max']=$size_min_max[$l]['max'];
                                    array_splice($size_min_max,$l,1);
                                }
                            }
                        }

                        $k++;
                    }
                }

                $result['menu'][$i]['option_tags'][$j]['show']=false;
                $result['menu'][$i]['option_tags'][$j]['items']=Array();
                $result['menu'][$i]['option_tags'][$j]['count']=0;
                $menu_option_items=DB::table('option_items')
                    ->join('menu_option_items','option_items.id','=','menu_option_items.option_id')
                    ->whereIn('option_items.id',$menu_option_item_idss)->where('option_items.tag_id','=',$menu_option_tag->option_tag_id)->select('menu_option_items.*','option_items.name')->get();
                if (count($menu_option_items)>0){
                    $result['menu'][$i]['option_tags'][$j]['show']=true;
                    $result['menu'][$i]['has_option']=true;
                    $k=0;
                    foreach ($menu_option_items as $menu_option_item){
                        $result['menu'][$i]['option_tags'][$j]['items'][$k]['name']=$menu_option_item->name;
                        $result['menu'][$i]['option_tags'][$j]['items'][$k]['price']=$menu_option_item->price;
                        $result['menu'][$i]['option_tags'][$j]['items'][$k]['max']=$menu_option_item->max;
                        $result['menu'][$i]['option_tags'][$j]['items'][$k]['checked']=false;
                        $result['menu'][$i]['option_tags'][$j]['items'][$k]['count']=0;
                        $k++;
                    }
                }
                $j++;
            }
            $i++;
        }
        return $result['menu'];
    }

}
