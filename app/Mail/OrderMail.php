<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Model\Restaurant;
use App\Model\SettingOption;


class OrderMail extends Mailable
{
    use Queueable, SerializesModels;
    public $order,$restaurant,$order_status,$reject_reason;
    public function __construct($order,$restaurant,$order_status='received',$reject_reason='')
    {
        $this->order = $order;
        $this->restaurant=$restaurant;
        $this->order_status=$order_status;
        $this->reject_reason=$reject_reason;
    }
    public function build()
    {
        $restaurant=$this->restaurant;
        $subject='';
        if($this->order->order_status=='received')
            $subject="Order Notification";
        $temps=SettingOption::where([['restaurant_id','=',$restaurant->id],['option_name','=','logo']])->get();
        if($temps->first()){
            $restaurant->logo=url('public/Images/Icons/'.$temps->first()->option_value);
            $this->restaurant=$restaurant;
        }
        return $this->from("ask@ohmani.com")
            ->subject($subject)
            ->view('mails.OrderMail');
    }
}
