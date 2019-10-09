<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class OptionItem extends Model
{
    protected $casts=[
        'sizes'=>'array'
    ];
}
