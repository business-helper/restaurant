<?php

namespace App\Http\Controllers\Api\Restaurant;

use App\Model\DeliverySetting;
use App\Model\Restaurant;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Traits\CurlOperation;
use Cartalyst\Stripe\Stripe;
use App\Model\Orders;
use App\Model\SubscriptionPlan;
use App\Model\Admin;
use App\Model\Subscription;
use App\Traits\ImageOperation;
use App\Model\SettingOption;
use Illuminate\Support\Facades\File;



class RestaurantController extends Controller
{
    use CurlOperation;
    use ImageOperation;
    public function getDetail($restaurant_id=null){
        if(!is_null($restaurant_id))
            $user=Restaurant::find($restaurant_id);
        else
            $user=Auth::guard('restaurant-api')->user();
        return response()->json($user);
    }

    public function getDeliverySetting($restaurant_id=null){
        if(is_null($restaurant_id))
            $restaurant_id=Auth::guard('restaurant-api')->user()->id;
        $deliverySetting=DeliverySetting::where('restaurant_id',$restaurant_id)->get();
        return response()->json(
            [
                'deliverySetting'=>$deliverySetting,
                'restaurant_id'=>$restaurant_id
            ]
        );
    }

    public function updateDeliverySetting(Request $request, $restaurant_id){
        $input=$request->all();
        $base_price=$input['base_price'];
        $free_distance=$input['free_distance'] ? $input['free_distance'] : 0;
        $max_distance=$input['max_distance'];
        $extra_price_per_km=$input['extra_price_per_km'];
        $min_amount=$input['min_amount'];
        $free_amount=$input['free_amount'];
        $setting_id=$input['setting_id'];
        if($setting_id==-1)
            $deliverySetting=new DeliverySetting;
        else
            $deliverySetting=DeliverySetting::find($setting_id);
            $deliverySetting->base_price=$base_price;
            $deliverySetting->free_distance=$free_distance;
            $deliverySetting->max_distance=$max_distance;
            $deliverySetting->extra_price_per_km=$extra_price_per_km;
            $deliverySetting->min_amount=$min_amount;
            $deliverySetting->free_amount=$free_amount;
            $deliverySetting->restaurant_id=$restaurant_id;
            $deliverySetting->save();
            return response()->json($deliverySetting);

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
        $payment_option=$input['payment_option'];

        $restaurant=Auth::guard('restaurant-api')->user();
        if(!is_null($restaurant)){
            $restaurant->restaurant_name=$restaurant_name;
            $restaurant->owner_name=$owner_name;
            $restaurant->email=$email;
            $restaurant->phone_number=$phone;
            $restaurant->lat=$lat;
            $restaurant->lng=$lng;
            $restaurant->address=$restaurant_address;
            $restaurant->theme=$input['theme'];
            $restaurant->payment_option=$payment_option;
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

    public function updateOpeningHours(Request $request,$restaurant_id=null){
        if(!is_null($restaurant_id))
            $restaurant=Restaurant::find($restaurant_id);
        else
            $restaurant=Auth::guard('restaurant-api')->user();
        $input=$request->all();
        $restaurant->opening_hours=$input['opening_hours'];
        $restaurant->save();
        return response()->json(['status'=>'success']);
    }

    public function getCardToken($id){
        $restaurant=Restaurant::find($id);
        $secret_token=$restaurant->stripe_secret_key;
        $token=$this->getResponse('https://api.stripe.com/v1/terminal/connection_tokens',
            "Authorization:bearer $secret_token");
        return response()->json(['token'=>$token]);
    }

    public function getDashboardOrders(Request $request,$order_status){
        $restaurant=Auth::guard('restaurant-api')->user();
        $orders=Orders::where([['restaurant_id','=',$restaurant->id],['order_status','=',$order_status]])->get();
        return response()->json($orders);
    }

    public function getSubscriptionPlans(){
        $plans=SubscriptionPlan::get();
        $restaurant=Auth::guard('restaurant-api')->user();
        $plan=null;
        $temps=Subscription::where([['restaurant_id','=',$restaurant->id], ['status','=',1]])->get();
        if($temps->first())
            $plan=$temps->first();
        return response()->json(
            [
                'plans'=>$plans,
                'plan'=>$plan
            ]
        );
    }

    public function getAdminStripeKey(){
        $public_key='';
        $temps=Admin::get();
        if($temps->first())
            $public_key=$temps->first()->stripe_public_key;
        return $public_key;

    }

    public function getStripe(){
        $temps=Admin::get();
        $stripe=null;
        if($temps->first()) {
            $admin = $temps->first();
            $stripe_key = $admin->stripe_secret_key;
            $stripe = Stripe::make($stripe_key);
        }
        return $stripe;
    }

    public function createCustomer(Request $request){
        $restaurant=Auth::guard('restaurant-api')->user();
        $temps=Admin::get();
        if($temps->first()){
            $stripe=$this->getStripe();
            $input=$request->all();
            $customer = $stripe->customers()->create([
                'email' => $restaurant->email,
                'payment_method'=>$input['payment_id'],
            ]);
            return $customer['id'];
        }
    }

    public function createSubscription(Request $request){
        $input=$request->all();
        $stripe=$this->getStripe();
        $restaurant=Auth::guard('restaurant-api')->user();
        $plan=SubscriptionPlan::find($input['plan_id']);
        $stripe_subscription=$stripe->subscriptions()->create(
            $input['customer_id'],
            [
                'plan'=>$plan->plan_id,
                'source'=>$input['token']
            ]
        );

        $subscription= new Subscription;
        $subscription->subscription_id=$stripe_subscription['id'];
        $subscription->restaurant_id=$restaurant->id;
        $subscription->customer_id=$input['customer_id'];
        $subscription->payment_method_id=$input['payment_id'];
        $subscription->plan_id=$input['plan_id'];
        $subscription->status=1;
        $subscription->save();
        return response()->json([
            'status'=>'success',
        ]);
    }

    public function cancelSubscription($id){
        $plan=Subscription::find($id);
        $restaurant=Auth::guard('restaurant-api')->user();
        $subscription=Subscription::where([['restaurant_id','=',$restaurant->id],['plan_id','=',$id]])->get()->first();
        $stripe=$this->getStripe();
        $stripe_subscription = $stripe->subscriptions()->cancel($subscription->customer_id, $subscription->subscription_id);
        $subscription->status=0;
        $subscription->delete();
        return "success";
    }

    public function updateSubscription($current_id,$update_id){
        $restaurant=Auth::guard('restaurant-api')->user();
        $current_plan=SubscriptionPlan::find($current_id);
        $update_plan=SubscriptionPlan::find($update_id);
        $subscription=Subscription::where([['plan_id','=',$current_plan->id],['restaurant_id','=',$restaurant->id]])->get()->first();
        $stripe=$this->getStripe();
        $stripe_subscription = $stripe->subscriptions()->update($subscription->customer_id,
            $subscription->subscription_id,
            [
                'plan' => $update_plan->plan_id,
            ]
        );
        $subscription->plan_id=$update_plan->id;
        $subscription->subscription_id=$stripe_subscription['id'];
        $subscription->save();
        return "success";
    }

    public function addLogo(Request $request,$restaurant_id=null){
        if(is_null($restaurant_id))
            $restaurant_id=Auth::guard('restaurant-api')->user()->id;
        $temps=SettingOption::where([['restaurant_id','=',$restaurant_id],['option_name','=','logo']])->get();
        if ($temps->first())
            $option=$temps->first();
        else
            $option=new SettingOption;

        if ($request->get('logo_image')){
            if (!is_null($option->option_value))
                File::delete('public/Images/Icons/'.$option->option_value);
            $file=$request->get('logo_image');
            $file_name = 'logo'.time().'.' . explode('/', explode(':', substr($file, 0, strpos($file, ';')))[1])[1];
            \Image::make($request->get('logo_image'))->save(public_path('Images/Icons/').$file_name);
            $option->option_value=$file_name;
        }
        $option->option_name='logo';
        $option->restaurant_id=$restaurant_id;
        $option->save();
        return response()->json($option);
    }

    public function getLogo($restaurant_id=null){
        $result=Array();
        if(is_null($restaurant_id))
            $restaurant_id=Auth::guard('restaurant-api')->user()->id;
        $temps=SettingOption::where([['restaurant_id','=',$restaurant_id],['option_name','=','logo']])->get();
        if ($temps->first()){
            $setting=$temps->first();
            if ($setting->option_value)
                $result['logo']=url('public/Images/Icons/'.$setting->option_value);
            return response()->json($result);
        }
    }


}
