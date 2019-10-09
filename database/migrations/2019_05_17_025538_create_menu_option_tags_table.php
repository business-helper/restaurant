<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMenuOptionTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('menu_option_tags', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('option_tag_id');
            $table->integer('menu_id');
            $table->string('selection_type');
            $table->boolean('is_required')->false();
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
        Schema::dropIfExists('menu_option_tags');
    }
}
