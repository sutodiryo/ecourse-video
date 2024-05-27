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
            $table->longText('footer_1_title')->nullable()->after('section_8_4_text');
            $table->longText('footer_1_text')->nullable()->after('footer_1_title');

            $table->longText('footer_2_title')->nullable()->after('footer_1_text');
            $table->longText('footer_2_1_text')->nullable()->after('footer_2_title');
            $table->longText('footer_2_2_text')->nullable()->after('footer_2_1_text');

            $table->longText('footer_3_title')->nullable()->after('footer_2_2_text');
            $table->string('footer_3_1_text')->nullable()->after('footer_3_title');
            $table->string('footer_3_2_text')->nullable()->after('footer_3_1_text');
            $table->string('footer_3_3_text')->nullable()->after('footer_3_2_text');
            $table->string('footer_3_4_text')->nullable()->after('footer_3_3_text');

            $table->longText('footer_copyright')->nullable()->after('footer_3_4_text');
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
