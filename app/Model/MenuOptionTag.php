<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class MenuOptionTag extends Model
{
    protected $casts=[
        'size_min_max'=>'array'
    ];
}
