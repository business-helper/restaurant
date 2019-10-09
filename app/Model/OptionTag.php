<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class OptionTag extends Model
{
    protected $casts=[
        'category_id'=>'array',
        'size_min_max'=>'array'
    ];
}
