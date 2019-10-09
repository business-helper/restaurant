<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Offers extends Model
{
    protected $casts=[
        'items'=>'array'
    ];
}
