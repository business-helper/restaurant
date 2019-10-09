<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('payment_type')->default('cash');
            $table->double('total_amount')->nullable();
            $table->double('price');
            $table->double('real_amount');
            $table->double('sales_tax');
            $table->double('card_fee')->nullable();
            $table->string('card_id')->nullable();
            $table->string('stripe_id')->nullable();
            $table->integer('is_captured')->default(0)->nullable();
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
        Schema::dropIfExists('transactions');
    }
}
