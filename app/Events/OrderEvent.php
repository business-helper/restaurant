<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;


class OrderEvent implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $event_type, $event_data;

    public function __construct($event_type,$event_data)
    {
        $this->event_type=$event_type;
        $this->event_data=$event_data;
    }

    public function broadcastAs()
    {
        return 'order-event';
    }

    public function broadcastOn()
    {
        return new Channel('order-event');
    }
}
