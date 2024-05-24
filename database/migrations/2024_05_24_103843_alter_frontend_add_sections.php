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
        Schema::table('frontend_homepage', function (Blueprint $table) {
            $table->string('section_1_title')->nullable()->after('hero_img');

            $table->string('section_2_title')->nullable()->after('section_1_text');
            $table->string('section_2_text')->nullable()->after('section_2_title');


            $table->string('section_3_title')->nullable()->after('section_2_text');

            $table->string('section_3_1_title')->nullable()->after('section_3_title');
            $table->string('section_3_1_text')->nullable()->after('section_3_1_title');

            $table->string('section_3_2_title')->nullable()->after('section_3_1_text');
            $table->string('section_3_2_text')->nullable()->after('section_3_2_title');

            $table->string('section_3_3_title')->nullable()->after('section_3_2_text');
            $table->string('section_3_3_text')->nullable()->after('section_3_3_title');

            $table->string('section_3_4_title')->nullable()->after('section_3_3_text');
            $table->string('section_3_4_text')->nullable()->after('section_3_4_title');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
