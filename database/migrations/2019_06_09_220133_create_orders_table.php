<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('transaction_id')->nullable();
            $table->string('order_type')->nullable();
            $table->string('table_number')->nullable();
            $table->string('customer_name')->nullable();
            $table->string('customer_phone_number')->nullable();
            $table->string('customer_email')->nullable();
            $table->integer('customer_id')->nullable();
            $table->text('order_content')->nullable();
            $table->double('amount');
            $table->double('sales_tax');
            $table->integer('restaurant_id')->nullable();
            $table->string('pay_type')->nullable();
            $table->string('address')->nullable();
            $table->string('unit')->nullable();
            $table->double('lat')->nullable();
            $table->double('lng')->nullable();
            $table->string('delivery_instruction')->nullable();
            $table->double('delivery_price')->nullable();
            $table->text('tip')->nullable();
            $table->string('order_status')->default('pending')->nullable();
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
        Schema::dropIfExists('orders');
    }
}
