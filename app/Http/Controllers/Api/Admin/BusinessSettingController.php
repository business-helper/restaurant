<?php

namespace App\Http\Controllers\Api\Admin;

use App\Model\Locations;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\OpenningHours;
use App\Model\MaxOrderDay;
use App\Model\SubscriptionProduct;
use App\Model\SubscriptionPlan;

use Cartalyst\Stripe\Stripe;
use Illuminate\Support\Facades\Auth;


class BusinessSettingController extends Controller
{
    public function addCardSetting(Request $request){
        $admin=Auth::guard('admin-api')->user();
        $admin->stripe_public_key=$request->input('public_key');
        $admin->stripe_private_key=$request->input('secret_key');
        $admin->save();
        return 'success';
    }

    public function getCardSetting(){
        $result=Array();
        $admin=Auth::guard('admin-api')->user();
        if($admin){
            $result['public_key']=$admin->stripe_public_key;
            $result['secret_key']=$admin->stripe_private_key;
        }
        return response()->json($result);
    }

    public function addTax(Request $request){
        $admin=Auth::guard('admin-api')->user();
        $admin->sales_tax=$request->input('tax')/100;
        $admin->save();
        return 'success';
    }

    public function getTax(){
        $result=Array();
        $result['tax']=6;
        $admin=Auth::guard('admin-api')->user();
        $result['tax']=$admin->sales_tax*100;
        return $result;
    }

    public function addProduct(Request $request){
        $admin=Auth::guard('admin-api')->user();
        $stripe_key=$admin->stripe_secret_key;
        $stripe=Stripe::make($stripe_key);
        $input=$request->all();
        $name=$input['name'];
        $description=$input['description'];
        $id=$input['id'];
        try{
            if($id==0){
                $product=new SubscriptionProduct;
                $stripe_product = $stripe->products()->create([
                    'name'        => $name,
                    'description' => $description
                ]);
            }else{
                $product=SubscriptionProduct::find($id);
                $product_id=$product->product_id;
                $stripe_product = $stripe->products()->update($product_id, [
                    'name'=>$name,
                    'description' => $description,
                ]);
            }
            $product->name=$name;
            $product->product_id=$stripe_product['id'];
            $product->description=$description;
            $product->save();
            return response()->json(['status'=>'success']);
        }catch(\Cartalyst\Stripe\Exception\CardErrorException $e){
            return response()->json($e->getMessage());
        }

    }

    public function getProduct(){
        $products=SubscriptionProduct::get();
        return response()->json($products);
    }

    public function getPlan(){
        $result=Array();
        $products=SubscriptionProduct::get();
        $plans=SubscriptionPlan::get();
//        $result['products']=$products;
        $result['plans']=$plans;
        return response()->json($result);
    }

    public function addPlan(Request $request){
        $admin=Auth::guard('admin-api')->user();
        $stripe_key=$admin->stripe_secret_key;
        $stripe=Stripe::make($stripe_key);
        $input=$request->all();
        $name=$input['name'];
        $price=$input['price'];
        $interval=$input['interval'];
        $id=$input['id'];
        if($id==0){
            $plan=new SubscriptionPlan;
            $stripe_plan = $stripe->plans()->create([
                'name'                 => $name,
                'amount'               => $price,
                'currency'             => 'USD',
                'interval'             => 'month',
                'interval_count'       =>$interval,
            ]);
            $plan->price=$price;
        }else{
            $plan=SubscriptionPlan::find($id);
            $stripe_plan = $stripe->plans()->update($plan->plan_id,[
                'name' => $name,
            ]);
        }
        $plan->plan_id=$stripe_plan['id'];
        $plan->name=$name;
        $plan->save();
        return 'success';
    }



}
