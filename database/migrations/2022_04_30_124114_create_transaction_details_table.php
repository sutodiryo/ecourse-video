<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transaction_details', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('transaction_id')
                ->nullable()
                ->references('id')
                ->on('transactions')
                ->cascadeOnUpdate()
                ->nullOnDelete();
            $table->foreignUuid('series_id')
                ->nullable()
                ->references('id')
                ->on('series')
                ->cascadeOnUpdate()
                ->nullOnDelete();
            $table->double('grand_total');
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
        Schema::dropIfExists('transaction_details');
    }
};
