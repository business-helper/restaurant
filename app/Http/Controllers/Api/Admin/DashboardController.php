<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

use App\Model\Orders;
use App\Model\Restaurant;
use App\Model\FoodMenu;
use App\Model\MenuSales;
use App\Traits\ImageOperation;




class DashboardController extends Controller
{
    public function getDashboardData(){
        $result=Array();

        $result['restaurant_number']=Restaurant::get()->count();
        $result['inactive_restaurant_number']=Restaurant::where('active',0)->get()->count();
        $result['active_restaurant_number']=Restaurant::where('active',1)->get()->count();

        $today=(new \DateTime())->format("Y-m-d");
        $result['order_number']=Orders::where('order_time','like',"$today%")->get()->count();
        $result['completed_order_number']=Orders::where('order_time','like',"$today%")->where('order_status','closed')->get()->count();
        $result['pending_order_number']=Orders::where('order_time','like',"$today%")->where('order_status','received')->get()->count();
        $result['online_order_number']=Orders::where('order_time','like',"$today%")->where('order_type','online')->get()->count();
        $result['pickup_order_number']=Orders::where('order_time','like',"$today%")->where('order_type','pick-up')->get()->count();
        $result['rejected_order_number']=Orders::where('order_time','like',"$today%")->where('order_status','rejected')->get()->count();
        $result['inprogress_order_number']=Orders::where('order_time','like',"$today%")->where(function ($query){
            $query->where('order_status','accepted')->orWhere('order_status','preparing')->orWhere('order_status','completed');
        })->get()->count();

        $today_sales_orders=DB::table('orders')->join('transactions','orders.transaction_id','=','transactions.id')
                    ->where('orders.order_status','closed')->where('transactions.is_captured',1)->select('transactions.total_amount')->get();
        $result['today_sales']=$today_sales_orders->sum('total_amount');
        $result['sales_orders']=$today_sales_orders;
        return response()->json($result);
    }
}

?>
