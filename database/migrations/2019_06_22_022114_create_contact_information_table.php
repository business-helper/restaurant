<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContactInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contact_information', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('map_key');
            $table->string('restaurant_name')->nullable();
            $table->string('address')->nullable();
            $table->double('lat')->default(0)->nullable();
            $table->double('lng')->default(0)->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->string('marker_image')->nullable();

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
        Schema::dropIfExists('contact_information');
    }
}
