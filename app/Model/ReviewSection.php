<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ReviewSection extends Model
{
    protected $casts=[
        'sub_review'=>'array'
    ];
}
