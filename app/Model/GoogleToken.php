<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class GoogleToken extends Model
{
    protected $casts=[
        'token'=>'array'

    ];
}
