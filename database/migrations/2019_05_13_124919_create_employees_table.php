<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->nullable();
            $table->string('email')->unique();;
            $table->timestamp('email_verified_at')->nullable();
            $table->string('job');
            $table->string('phone_number')->nullable();
            $table->string('profile_picture')->nullable();
            $table->string('birthday')->nullable();
            $table->string('gender')->default('male')->nullable();
            $table->double('hourly_rate')->nullable();
            $table->string('state')->default('active')->nullable();
            $table->string('password')->nullable();
            $table->rememberToken();
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
        Schema::dropIfExists('employees');
    }
}
