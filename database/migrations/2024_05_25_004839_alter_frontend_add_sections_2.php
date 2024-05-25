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
            $table->string('section_4_title')->nullable()->after('section_3_4_text');

            $table->string('section_4_1_title')->nullable()->after('section_4_title');
            $table->longText('section_4_1_text')->nullable()->after('section_4_1_title');

            $table->string('section_4_2_title')->nullable()->after('section_4_1_text');
            $table->longText('section_4_2_text')->nullable()->after('section_4_2_title');

            $table->string('section_4_3_title')->nullable()->after('section_4_2_text');
            $table->longText('section_4_3_text')->nullable()->after('section_4_3_title');

            $table->string('section_4_4_title')->nullable()->after('section_4_3_text');
            $table->longText('section_4_4_text')->nullable()->after('section_4_4_title');

            $table->string('section_4_5_title')->nullable()->after('section_4_4_text');
            $table->longText('section_4_5_text')->nullable()->after('section_4_5_title');

            $table->string('section_5_title')->nullable()->after('section_4_5_text');
            $table->longText('section_5_text')->nullable()->after('section_5_title');

            $table->string('section_6_title')->nullable()->after('section_5_text');

            $table->string('section_7_title')->nullable()->after('section_6_title');

            $table->string('section_8_title')->nullable()->after('section_7_title');

            $table->string('section_8_1_title')->nullable()->after('section_8_title');
            $table->longText('section_8_1_text')->nullable()->after('section_8_1_title');

            $table->string('section_8_2_title')->nullable()->after('section_8_1_text');
            $table->longText('section_8_2_text')->nullable()->after('section_8_2_title');

            $table->string('section_8_3_title')->nullable()->after('section_8_2_text');
            $table->longText('section_8_3_text')->nullable()->after('section_8_3_title');

            $table->string('section_8_4_title')->nullable()->after('section_8_3_text');
            $table->longText('section_8_4_text')->nullable()->after('section_8_4_title');
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
