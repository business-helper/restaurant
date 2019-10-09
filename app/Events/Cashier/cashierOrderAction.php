<?php

namespace App\Events\Cashier;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;

class cashierOrderAction implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $data,$action_type;
    public function __construct($action_type,$data)
    {
        $this->data=$data;
        $this->action_type=$action_type;
    }

    public function broadcastAs()
    {
        return 'cashierOrderAction';
    }

    public function broadcastOn()
    {
        return new Channel('cashier-order-action');
    }
}
