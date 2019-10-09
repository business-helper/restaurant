<?php

namespace App\Events\Kitchen;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;

class kitchenOrderAction implements ShouldBroadcastNow
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
        return 'kitchenOrderAction';
    }

    public function broadcastOn()
    {
        return new Channel('kitchen-order-action');
    }
}
