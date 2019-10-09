<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\OrderMail;
use App\Model\Orders;
use App\Model\Restaurant;
use Illuminate\Support\Facades\Mail;

class HomeController extends Controller
{
    public function __construct()
    {
//        $this->middleware('auth');
    }

    public function index()
    {
        return view('spa');
    }
    public function textOrderMail(){
        $order=Orders::orderBy('id','desc')->get()->first();
        $restaurant=Restaurant::get()->first();
        Mail::to('baimaoli9@gmail.com')->send(new OrderMail($order,$restaurant));
        Mail::to('pc61300811@gmail.com')->send(new OrderMail($order,$restaurant));
        return new OrderMail($order,$restaurant);

    }

}
