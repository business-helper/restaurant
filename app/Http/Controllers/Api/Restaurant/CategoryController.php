<?php

namespace App\Http\Controllers\Api\Restaurant;

use App\Model\FoodMenu;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\FoodCategory;
use App\Traits\ImageOperation;
use Illuminate\Support\Facades\Auth;

use Validator;
use DB;

class CategoryController extends Controller
{
    use ImageOperation;
    public function getCategoryData($restaurant_id=null){
        if(is_null($restaurant_id)){
            $restaurant=Auth::guard('restaurant-api')->user();
            $restaurant_id=$restaurant->id;
        }
        $result=Array();
        $result['max_sequence']=FoodCategory::where('restaurant_id',$restaurant_id)->max('sequence')+1;
        return response()->json(['result'=>$result]);
    }


    public function addCategory(Request $request,$restaurant_id=null){
        if(is_null($restaurant_id))
            $restaurant_id=Auth::guard('restaurant-api')->user()->id;
        $category_id=$request->input('category_id');
        if($category_id==-1){
            $category=new FoodCategory;
        }
        else
            $category=FoodCategory::find($category_id);


        $sequence=$request->input('sequence');
        if(!is_null($sequence)){
            $existing_categories=FoodCategory::where([['restaurant_id','=',$restaurant_id],['id','!=',$category_id]])->orderBy('sequence')->get();
            $i=1;
            foreach ($existing_categories as $existing_category){
                if($i<$sequence){
                    $existing_category->sequence=$i;
                }
                if($i>=$sequence)
                    $existing_category->sequence=$i+1;
                $existing_category->save();
                $i++;
            }
            $category->sequence=$sequence;
        }
        else{
            $category->sequence=FoodCategory::max('sequence')+1;
        }

        $category->name=$request->input('name');
        $category->description=$request->input('description');
        $category->has_item_image=$request->input('has_item_image');
        $category->restaurant_id=$restaurant_id;
        if ($request->get('resultImageURL')){
            $file_name=$this->uploadImage($request->get('resultImageURL'),'FoodCategories','category');
            $category->image=$file_name;
        }
        $category->save();
        return response()->json(['success'=>'success']);
    }


    public function getCategoryList($restaurant_id=null){
        if(is_null($restaurant_id))
            $restaurant_id=Auth::guard('restaurant-api')->user()->id;
        $result=Array();
        $categories=FoodCategory::where('restaurant_id',$restaurant_id)->orderBy('sequence')->get();

        $i=0;
        foreach($categories as $category){
            $result[$i]['no']=$i+1;
            $result[$i]['id']=$category->id;
            $result[$i]['name']=$category->name;
            $result[$i]['description']=$category->description;
            $result[$i]['sequence']=$category->sequence;
            $result[$i]['has_item_image']=$category->has_item_image;
            if (!is_null($category->image))
                $result[$i]['image']=$this->getImage($category->image,'FoodCategories');
            $i++;
        }
        return response()->json(['data'=>$result]);
    }

    public function getCategory($id){
        $result=Array();
        $category=FoodCategory::find($id);
        $result['name']=$category->name;
        $result['description']=$category->description;
        $result['sequence']=$category->sequence;
        $result['image']=$category->image;
        $result['has_item_image']=$category->has_item_image;
        if(!is_null($category->image)){
            $result['image']=$this->getImage($category->image,'FoodCategories');
        }
        return response()->json($result);
    }

    public function updateCategory(Request $request){
        $id=$request->input('category_id');
        $category=FoodCategory::find($id);
        $category->name=$request->input('name');
        $category->description=$request->input('description');

        if ($request->get('image')){
            $file=$request->get('image');
            $file_name = time().'.' . explode('/', explode(':', substr($file, 0, strpos($file, ';')))[1])[1];
            \Image::make($request->get('image'))->save(public_path('Images/').$file_name);
            $category->image=$file_name;
        }
        $category->save();
        return response()->json(['success'=>'success']);
    }

    public function deleteCategory($id){
        $food_category=FoodCategory::find($id);
        $sequence=$food_category->sequence;
        FoodCategory::where('id',$id)->delete();
        $food_menus=FoodMenu::where('category_id',$id)->get();
        foreach ($food_menus as $food_menu){
            $food_menu->category_id=null;
            $food_menu->save();
        }
        $other_categories=FoodCategory::where('sequence','>',$sequence)->orderBy('sequence')->get();

        foreach ($other_categories as $other_category){
            $other_category->sequence=$other_category->sequence-1;
            $other_category->save();
        }
        return response()->json(['success'=>'success']);
    }


}
