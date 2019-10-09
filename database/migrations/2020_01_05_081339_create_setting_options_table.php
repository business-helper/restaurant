<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSettingOptionsTable extends Migration
{

    public function up()
    {
        Schema::create('setting_options', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('option_name');
            $table->string('option_value')->nullable();
            $table->integer('restaurant_id');
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
        Schema::dropIfExists('setting_options');
    }
}
