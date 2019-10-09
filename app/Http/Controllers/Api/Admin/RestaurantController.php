<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Restaurant;
use App\Model\SettingOption;

class RestaurantController extends Controller
{
    public function getRestaurants(){
        $restaurants=Restaurant::get()->toArray();
        for($i=0;$i<count($restaurants);$i++){
            $restaurants[$i]['logo']=null;
            $temps=SettingOption::where([['restaurant_id','=',$restaurants[$i]['id']],['option_name','=','logo']])->get();
            if($temps->first()){
                $restaurants[$i]['logo']=url('public/Images/Icons/'.$temps->first()->option_value);
            }
        }
        return response()->json($restaurants);
    }
    public function deleteRestaurant($id){
        Restaurant::where('id',$id)->delete();
        return response()->json(['status'=>'success','msg'=>'Restaurant removed successfully']);
    }
    public function activateRestaurant($id){
        $restaurant=Restaurant::find($id);
        $restaurant->active=1;
        $restaurant->save();
        return response()->json(['status'=>'success','msg'=>'Restaurant activated successfully']);
    }
    public function deActivateRestaurant($id){
        $restaurant=Restaurant::find($id);
        $restaurant->active=0;
        $restaurant->save();
        return response()->json(['status'=>'success','msg'=>'Restaurant deactivated successfully']);
    }

    public function getDetail($id){
        $restaurant=Restaurant::find($id);
        return response()->json($restaurant);
    }


}
