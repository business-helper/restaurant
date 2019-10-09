<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOpenningHoursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('openning_hours', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('day');
            $table->string('begin_time')->nullable();
            $table->string('end_time')->nullable();
            $table->boolean('openning_state')->default(true);

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
        Schema::dropIfExists('openning_hours');
    }
}
