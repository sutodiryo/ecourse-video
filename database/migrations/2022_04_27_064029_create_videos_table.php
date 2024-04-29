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
        Schema::create('videos', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('series_id')
                ->nullable()
                ->references('id')
                ->on('series')
                ->cascadeOnUpdate()
                ->nullOnDelete();
            $table->string('name');
            $table->string('slug');
            $table->integer('episode');
            $table->boolean('intro')->default(0);
            $table->time('duration');
            $table->string('video_code');
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
        Schema::dropIfExists('videos');
    }
};
