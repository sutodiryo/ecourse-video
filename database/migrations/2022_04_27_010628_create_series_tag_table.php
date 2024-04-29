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
        Schema::create('series_tag', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('series_id')
                ->nullable()
                ->references('id')
                ->on('series')
                ->cascadeOnUpdate()
                ->nullOnDelete();
            $table->foreignId('tag_id')->constrained('tags');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('series_tag');
    }
};
