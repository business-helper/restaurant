<?php

namespace App\Http\Controllers\Api;

use App\Model\Restaurant;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class RestaurantController extends Controller
{
    public function getDetail(){
        $user=Auth::guard('restaurant-api')->user();
        return response()->json($user);
    }

    public function updateAccount(Request $request){
        $input=$request->all();
        $owner_name=$input['owner_name'];
        $email=$input['email'];
        $lat=$input['lat'];
        $lng=$input['lng'];
        $phone=$input['phone'];
        $restaurant_address=$input['restaurant_address'];
        $restaurant_name=$input['restaurant_name'];
        $password=$input['password'];

        $restaurant=Auth::guard('restaurant-api')->user();
        if(!is_null($restaurant)){
            $restaurant->restaurant_name=$restaurant_name;
            $restaurant->owner_name=$owner_name;
            $restaurant->email=$email;
            $restaurant->phone_number=$phone;
            $restaurant->lat=$lat;
            $restaurant->lng=$lng;
            $restaurant->address=$restaurant_address;
            if(!is_null($password) && $password!='')
                $restaurant->password=bcrypt($password);
            $restaurant->save();
            return response()->json($restaurant);
        }
    }

    public function addCardSetting(Request $request){
        $restaurant=Auth::guard('restaurant-api')->user();
        $input=$request->all();
        $restaurant->stripe_public_key=$input['public_key'];
        $restaurant->stripe_secret_key=$input['secret_key'];
        $restaurant->save();
        return response()->json(['status'=>'success']);
    }

    public function updateTax(Request $request){
        $restaurant=Auth::guard('restaurant-api')->user();
        $input=$request->all();
        $tax=$input['tax'];
        $restaurant->sales_tax=$tax/100;
        $restaurant->save();
        return response()->json(['status'=>'success']);
    }

    public function updateOpeningHours(Request $request){
        $restaurant=Auth::guard('restaurant-api')->user();
        $input=$request->all();
        $restaurant->opening_hours=$input['opening_hours'];
        $restaurant->save();
        return response()->json(['status'=>'success']);
    }






}
