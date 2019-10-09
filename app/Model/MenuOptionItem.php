<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class MenuOptionItem extends Model
{
    protected $casts=[
        'sizes'=>'array'
    ];
}
