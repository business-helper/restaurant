<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

class Restaurant extends Authenticatable
{
    protected $guard = 'restaurant';
    use HasApiTokens, Notifiable;
    protected $casts=[
        'opening_hours'=>'array',
        'payment_option'=>'array'
    ];


}
