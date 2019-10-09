<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMenuOptionItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('menu_option_items', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('option_id');
            $table->integer('menu_id');
            $table->double('price');
            $table->boolean('is_enabled')->default(true);
            $table->string('selection_number');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('menu_option_items');
    }
}
