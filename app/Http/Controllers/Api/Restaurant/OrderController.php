<?php

namespace App\Http\Controllers\Api\Restaurant;
use App\Model\Transaction;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Orders;
use Stripe\Error\Card;

use App\Events\OrderEvent;
use App\Traits\CurlOperation;
use Cartalyst\Stripe\Stripe;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Mail\OrderMail;
use Illuminate\Support\Facades\Log;



class OrderController extends Controller
{
    use CurlOperation;
    public function getOrders($restaurant_id){
        $result=Array();
        $result['orders']=Array();
        $today=(new \DateTime())->format('Y-m-d');
        $today=$today." 00:00";
        $orders=Orders::where('restaurant_id',$restaurant_id)->where('order_time','>=',$today)->whereNotIn('order_status',['closed','cancelled','rejected'])->orderBy('order_time')->get()->toArray();
        $result['orders']=$orders;
        return response()->json($result);
    }
    public function getAcceptedOrders($restaurant_id){
        $result=Array();
        $result['orders']=Array();
        $today=(new \DateTime())->format('Y-m-d');
        $today=$today." 00:00";
        $orders=Orders::where([['restaurant_id','=',$restaurant_id],['order_time','>=',$today]])->whereIn('order_status',['accepted','preparing'])->orderBy('order_time','desc')->get()->toArray();
        $result['orders']=$orders;
        return response()->json($result);
    }
    public function readOrders(Request $request){
        $unread_ids=$request->input('unread_ids');
        $temps=Orders::whereIn('id',$unread_ids)->get();
        foreach ($temps as $temp){
            $temp->cashier_read_state=1;
            $temp->save();
        }
    }
    public function kitchenReadOrders(Request $request){
        $unread_ids=$request->input('unread_ids');
        $temps=Orders::whereIn('id',$unread_ids)->get();
        foreach ($temps as $temp){
            $temp->kitchen_read_state=1;
            $temp->save();
        }
    }
    public function prepareOrder($order_id){
        $order=Orders::find($order_id);
        if($order){
            $order->order_status='preparing';
            $order->cashier_read_state=1;
            $order_data=Array();
            $order_data['restaurant_id']=$order->restaurant_id;
            $order_data['order_id']=$order->id;
            event(new OrderEvent('order-prepare',$order_data));
            $order->save();
        }
        return "success";
    }

    public function completeOrder(Request $request){
        $order_id=$request->input('order_id');
        $order=Orders::find($order_id);
        if ($order){
            $order->order_status='completed';
            $order->cashier_read_state=0;
            $order->save();
            $order_data=Array();
            $order_data['restaurant_id']=$order->restaurant_id;
            $order_data['order_id']=$order->id;
            event(new OrderEvent('order-complete',$order_data));
            $restaurant=Auth::guard('restaurant-api')->user();
            Mail::to($order->customer_email)->send(new OrderMail($order,$restaurant,'completed'));
        }
        return 'success';
    }

    public function acceptOrder($id){
        $order=Orders::find($id);
        if($order){
            $order->order_status='accepted';
            $order->customer_read_state=0;
            $order->cashier_read_state=1;
            $order->kitchen_read_state=0;
            $order->save();
        }

        // Broadcast Events;
        $order_data=Array();
        $order_data['restaurant_id']=$order->restaurant_id;
        $order_data['order_id']=$order->id;
        event(new OrderEvent('order-accepted',$order_data));
        $restaurant=Auth::guard('restaurant-api')->user();
        Mail::to($order->customer_email)->send(new OrderMail($order,$restaurant,'accepted'));
    }


    public function rejectOrder(Request $request){
        $data=$request->all();
        $order_id=$data['order_id'];
        $reason=$data['reason'];
        $order=Orders::find($order_id);

        $order->order_status='rejected';
        $order->refuse_reason=$reason;
        $order->customer_read_state=0;
        $order->cashier_read_state=1;
        $order->save();

        $stripe=$this->getStripe();
        $transaction=Transaction::find($order->transaction_id);
        try{
            $stripe->refunds()->create($transaction->charge_id);
            $transaction->is_captured=-1;
            $transaction->save();
        }catch(\Cartalyst\Stripe\Exception\CardErrorException $e){
            return response()->json(
            );
        }


        // Broadcast Events;
        $order_data=Array();
        $order_data['restaurant_id']=$order->restaurant_id;
        $order_data['order_id']=$order->id;
        event(new OrderEvent('order-rejected',$order_data));

        $restaurant=Auth::guard('restaurant-api')->user();
        Mail::to($order->customer_email)->send(new OrderMail($order,$restaurant,'rejected',$data['reason']));

    }

    public function getStripe(){
        $restaurant=Auth::guard('restaurant-api')->user();
        $stripe=null;
        $stripe_key = $restaurant->stripe_secret_key;
        $stripe = Stripe::make($stripe_key);
        return $stripe;
    }

    public function closeOrder(Request $request){
        $order_id=$request->input('order_id');
        $order=Orders::find($order_id);
        if ($order){
            $order->order_status='closed';
            $order->customer_read_state=1;
            $order->cashier_read_state=1;
            $order->save();
            $order_data=Array();
            $order_data['restaurant_id']=$order->restaurant_id;
            $order_data['order_id']=$order->id;
            event(new OrderEvent('order-close',$order_data));

            $order_type=$order->order_type;
            $stripe=$this->getStripe();
            $transaction=Transaction::find($order->transaction_id);
                try{
                    if($order_type=='online'){
                        $stripe->charges()->capture($transaction->charge_id);
                        $transaction->is_captured=1;
                    }else{
                        $stripe->paymentIntents()->capture($transaction->charge_id);
                        $transaction->is_captured=1;
                    }
                    $transaction->save();
                }catch(\Cartalyst\Stripe\Exception\CardErrorException $e){
                    return response()->json(
                        [
                            'status'=>'error',
                            'error'=>$e
                        ]
                    );
                }
            }

        return 'success';
    }

    public function getNewOrder($order_id){
        $order=Orders::find($order_id);
        return response()->json($order);
    }

    public function getStripeSecretToken(){
        $token=$this->getResponse('//api.stripe.com/v1/terminal/connection_tokens',
            'Authorization:Bearer sk_test_mJ6vHqXnzCMku0KOJEOGtHKw00K5D8KOPv');
        return response()->json(['token'=>$token]);
    }

    //Order Dispatcher through Orderlord service
    public function dispatchOrder(Request $request){
        $input=$request->all();
        $restaurant=Auth::guard('restaurant-api')->user();
        $url="http://delivery.ohmani.com/api/dispatch";

        $order_id=$input['order_id'];
        $order=Orders::find($order_id);
        $body=Array();
        $body['external_order_id']=$order_id;
        $body['cust_name']=$order->customer_name;
        $body['cust_email']=$order->customer_email;
        $body['cust_phone']=$order->customer_phone_number;
        $body['content']=$input['content'];

        $body['cust_lat']=$order->lat;
        $body['cust_lng']=$order->lng;
        $body['cust_address']=$order->address;
        $body['cust_unit']=$order->unit;
        $body['shop_name']=$restaurant->restaurant_name;
        $body['shop_address']=$restaurant->address;
        $body['shop_lat']=$restaurant->lat;
        $body['shop_lng']=$order->lng;
        $body['distance']=$order->distance;
        $body['delivery_price']=$order->delivery_price;
        $body['delivery_instruction']=$order->delivery_instruction;
        $body['schedule_time']=$order->order_time;
        $body['status_webhook']=url('/api/restaurant/feedbackOrder');

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
        curl_setopt($ch, CURLOPT_HEADER, FALSE);

        curl_setopt($ch, CURLOPT_POST, TRUE);

        curl_setopt($ch, CURLOPT_POSTFIELDS,json_encode($body));
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            "Content-Type: application/json"
        ));


        $result = json_decode(curl_exec($ch), true);
        Log::debug(json_encode($result));

        curl_close($ch);
//        print_r($result);
//        exit;
        if($result['status']=="success"){
            $order->delivery_status="assigned";
            $order->delivery_content=$input['content'];
            $order_data=Array();
            $order_data['restaurant_id']=$order->restaurant_id;
            $order_data['order_id']=$order->id;
            $order_data['delivery_service_id']=$result['order_id'];
            $order_data['delivery_status']='assigned';
            event(new OrderEvent('order-delivery',$order_data));
            $order->delivery_service_id=$result['order_id'];
            $order->save();
        }
        else{
            return response()->json(['status'=>'error','result'=>$result['message']]);
        }
            return response()->json(['status'=>'success','result'=>$order_data]);
    }

    public function feedbackOrder(Request $request){
          $order_id =$request->input('order_id');
          $delivery_status =$request->input('status');
          $order=Orders::find($order_id);
          $order_maps=[
              '1'=>'assigned',
              '2'=>'accepted',
              '3'=>'picked',
              '4'=>'completed'
          ];

          $order->delivery_status=$order_maps[strval($delivery_status)];
          $order->save();
          $order_data=Array();
          $order_data['restaurant_id']=$order->restaurant_id;
          $order_data['order_id']=$order->id;
          $order_data['status']=$order->delivery_status;
          event(new OrderEvent('order-status-change-event',$order_data));
          return response()->json(['status'=>'success','result'=>"Finished order successfully!"]);
    }
}
