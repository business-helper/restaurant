<?php

namespace App\Http\Controllers\Api\Frontend;

use App\Model\ContactInformation;

use App\Model\FoodCategory;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\SalesTax;
use App\Model\Orders;
use App\Model\Restaurant;
use App\Traits\MenuOperation;
use App\Traits\ImageOperation;

use Illuminate\Support\Facades\DB;
use App\Model\DeliverySetting;


class HomeController extends Controller
{
    use ImageOperation;
    use MenuOperation;

    public function getOneRestaurant()
    {
        $restaurant=Restaurant::where('active',1)->get()->first();
        return $restaurant;

    }
    public function getFoodMenus($restaurant_id)
    {
        $result=Array();
        $categories=FoodCategory::where('restaurant_id',$restaurant_id)->orderBy('sequence')->get()->toArray();
        $i=0;
        foreach ($categories as $category){
            $result[$i]=$category;
            if (!is_null($category['image']))
                $result[$i]['image']=url('public/Images/FoodCategories/'.$category['image']);
            $result[$i]['menus']=$this->getMenus($category['id']);
            $i++;
        }
        return $result;
    }

    public function getFrontendData(Request $request){
        $restaurant_name=$request->input('restaurant_name');
        $temps=Restaurant::where('restaurant_name',$restaurant_name)->get();
        if($temps->first()){
            $result=Array();
            $temps->makeHidden(['created_at','updated_at','stripe_secret_key','password','theme']);
            $restaurant=$temps->first();
            $result['restaurant']=$restaurant;
            $menus=$this->getFoodMenus($restaurant->id);
            $result['food_menus']=$menus;
            $delivery_setting=DeliverySetting::where('restaurant_id',$restaurant->id)->get();
            $restaurant['delivery_setting']=$delivery_setting;
            return response()->json($result);
        }else{
            return response()->json(['status'=>'error','msg'=>'This restaurant is not available']);
        }
    }
}
