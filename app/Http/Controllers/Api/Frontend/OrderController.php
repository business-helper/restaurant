<?php

namespace App\Http\Controllers\Api\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Stripe\Error\Card;
use Cartalyst\Stripe\Stripe;
use App\Model\CardSetting;
use App\Model\Transaction;
use App\Model\Orders;
use App\Model\MenuSales;
use App\Events\Customer\cancelOrder;
use App\Events\OrderEvent;
use App\Model\Restaurant;
use Illuminate\Support\Facades\Mail;
use App\Mail\OrderMail;



class OrderController extends Controller
{

    public function getCardSetting(){
        $result=Array();
        $temps=CardSetting::all();
        if ($temps->first()){
            $card_setting=$temps->first();
            $result['public_key']=$card_setting->p_key;
        }
        return response()->json($result);
    }

    public function checkOut(Request $request,$restaurant_id){
        $restaurant=Restaurant::find($restaurant_id);
        $stripe_key=$restaurant->stripe_secret_key;
        $stripe=Stripe::make($stripe_key);
        $token_id=$request->input('token_id');
        $amount=$request->input('total_price');
        $sub_total=$request->input('sub_total');
        $sub_tax=$request->input('sub_tax');
        $cart_data=$request->input('cart_data');
        $order_type=$request->input('order_type');
        $payment_option=$request->input('selected_payment_option');
        $transaction_id='';
        $input=$request->all();
        if($payment_option=='Before Order'){
            try{
                $charge=$stripe->charges()->create([
                    'card'=>$token_id,
                    'currency'=>'USD',
                    'amount'=>$amount,
                    'description'=>"Food Order",
                    'capture'=>'false'
                ]);
                if ($charge['status']=='succeeded') {
                    // Creating Transaction
                    $transaction=new Transaction;
                    $transaction->payment_type="card";
                    $transaction->total_amount=$amount;
                    $transaction->price=$sub_total;
                    $transaction->sales_tax=$sub_tax;
                    $transaction->charge_id=$charge['id'];
                    $transaction->save();
                    $transaction_id=$transaction->id;
                }
                else
                {
                    return response()->json(['status' =>'error','charge'=>$charge]);
                }
            } catch(\Cartalyst\Stripe\Exception\CardErrorException $e){
                return response()->json($e->getMessage());
            }
        }

        // Creating Order
            $order=new Orders;
            $order->transaction_id=$transaction_id;
            $order->order_type=$order_type;
            $order_date=$request->input('order_date');
            $order_time=$request->input('order_time');
            if ($order_type!="online")
                $order->table_number=$request->input('table_number');
            $customer=$request->input('customer');
            if(isset($customer['id']))
                $order->customer_id=$customer['id'];
            $order->customer_name=$request->input('name');
            $order->customer_email=$request->input('email');
            $order->customer_phone_number=$request->input('phone');
            $order->order_content=$cart_data;
            $order->restaurant_id=$restaurant_id;
            $order->amount=$amount;
            $order->cashier_read_state=0;
            $order->sales_tax=$sub_tax;
            $order->pay_type=$payment_option;

            if($order_type=='pick-up' || $order_type=='delivery')
                $order->order_status='received';
            else
                $order->order_status='accepted';

            if ($order_type=='pick-up' || $order_type=='delivery')
                $order->order_time=$order_date." ".$order_time;
            else{
                $date=new \DateTime();
                $order->order_time=$date->format('Y-m-d H:i A');
            }

            if($order_type=='delivery'){
                $order->address=$input['address'];
                $order->unit=$input['delivery_unit'];
                $order->lat=$input['myLocation']['lat'];
                $order->lng=$input['myLocation']['lng'];
                $order->delivery_price=$input['delivery_price'];
                $order->delivery_instruction=$input['delivery_instruction'];
                $order->distance=$input['distance'];
            }
            $order->save();
            $order_data=Array();
            $order_data['restaurant_id']=$restaurant_id;
            $order_data['order_id']=$order->id;
            event(new OrderEvent('add-order',$order_data));

        //  Creating Menu Sales
            foreach($cart_data as $item){
                $menu_sales=new MenuSales;
                $menu_sales->transaction_id=$transaction_id;
                $menu_sales->menu_id=$item['productData']['id'];
                $menu_sales->amount=$item['price'];
                $menu_sales->qty=$item['qty'];
                $menu_sales->save();
            }
            if($order_type=='pick-up' || $order_type=='delivery')
            {
                Mail::to($order->customer_email)->send(new OrderMail($order,$restaurant));
                Mail::to('baimaoli9@gmail.com')->send(new OrderMail($order,$restaurant));
            }
        return response()->json(['status' => 'success','order'=>$order]);

    }

    public function checkoutPos(Request $request,$restaurant_id){
        $restaurant=Restaurant::find($restaurant_id);
        $amount=$request->input('total_price');
        $sub_total=$request->input('sub_total');
        $sub_tax=$request->input('sub_tax');
        $cart_data=$request->input('cart_data');
        $stripe_id=$request->input('stripe_id');
//        $order_type='pick-up';
         $order_type = 'inside';

        // Creating Transaction
        $transaction=new Transaction;
        $transaction->payment_type="card_reader";
        $transaction->total_amount=$amount;
        $transaction->price=$sub_total;
        $transaction->sales_tax=$sub_tax;
        $transaction->charge_id=$stripe_id;
        $transaction->save();
        // Creating Order
        $order=new Orders;
        $order->transaction_id=$transaction->id;
        $order->order_type=$order_type;
        $order_date=$request->input('order_date');
        $order_time=$request->input('order_time');
        if ($order_type!="online")
            $order->table_number=$request->input('table_number');
        $customer=$request->input('customer');
        if(isset($customer['id']))
            $order->customer_id=$customer['id'];
        $order->customer_name=$request->input('name');
        $order->customer_email=$request->input('email');
        $order->customer_phone_number=$request->input('phone');
        $order->order_content=$cart_data;
        $order->restaurant_id=$restaurant_id;
        $order->amount=$amount;
        $order->cashier_read_state=0;
        $order->sales_tax=$sub_tax;
        if($order_type=='online')
            $order->order_status='received';
        else
            $order->order_status='accepted';

        if ($order_type=="online")
            $order->order_time=$order_date." ".$order_time;
        else{
            $date=new \DateTime();
            $order->order_time=$date->format('Y-m-d H:i A');
        }
        $order->save();
        $order_data=Array();
        $order_data['restaurant_id']=$restaurant_id;
        $order_data['order_id']=$order->id;
        event(new OrderEvent('add-order',$order_data));
        //  Creating Menu Sales
        foreach($cart_data as $item){
            $menu_sales=new MenuSales;
            $menu_sales->transaction_id=$transaction->id;
            $menu_sales->menu_id=$item['productData']['id'];
            $menu_sales->amount=$item['price'];
            $menu_sales->qty=$item['qty'];
            $menu_sales->save();
        }
        return response()->json(['status' => 'success','order'=>$order]);
    }


    public function readOrders(Request $request){
        $order_ids=$request->input('order_ids');
        $orders=Orders::whereIn('id',$order_ids)->get();
        foreach ($orders as $order){
            $order->customer_read_state=1;
            $order->save();
        }
        return 'success';
    }

    public function cancelOrder(Request $request){
        $order_id=$request->input('order_id');
        $order=Orders::find($order_id);
        if($order){
            $order->order_status='cancelled';
            event(new cancelOrder($order->id));
            $order->save();
        }
    }


}

//MAIL_DRIVER=smtp
//MAIL_HOST=smtp.googlemail.com
//MAIL_PORT=587
//MAIL_USERNAME=baimaoli9@gmail.com
//MAIL_PASSWORD=PaekKumSong
//MAIL_ENCRYPTION=tls

//MAIL_DRIVER=smtp
//MAIL_HOST=mail.ohmani.com
//MAIL_PORT=587
//MAIL_USERNAME=order@ohmani.com
//MAIL_PASSWORD=Ohmani2018$$%
//MAIL_ENCRYPTION=tls

//DHfqZMny9Yqj!Xu
