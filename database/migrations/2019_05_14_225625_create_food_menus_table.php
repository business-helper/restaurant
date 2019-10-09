<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFoodMenusTable extends Migration
{
    public function up()
    {
        Schema::create('food_menus', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('category_id');
            $table->string('name');
            $table->double('price');
            $table->string('image')->nullable();
            $table->text('description')->nullable();
            $table->string('cook_time');
            $table->string('min_qty')->default(1)->nullable();
            $table->text('location_ids')->nullable();
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('food_menus');
    }
}
