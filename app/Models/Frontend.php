<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Frontend extends Model
{
    protected $table = 'frontend_homepage';
    use HasFactory;

    protected $fillable = [
        'hero_text',
        'hero_img',
        'section_1_title',
        'section_2_title',
        'section_2_text',
        'section_3_title',
        'section_3_1_title',
        'section_3_1_text',
        'section_3_2_title',
        'section_3_2_text',
        'section_3_3_title',
        'section_3_3_text',
        'section_3_4_title',
        'section_3_4_text',

        'section_4_title',
        'section_4_1_title',
        'section_4_1_text',
        'section_4_2_title',
        'section_4_2_text',
        'section_4_3_title',
        'section_4_3_text',
        'section_4_4_title',
        'section_4_4_text',
        'section_4_5_title',
        'section_4_5_text',

        'section_5_title',
        'section_5_text',
        'section_6_title',
        'section_7_title',

        'section_8_title',
        'section_8_1_title',
        'section_8_1_text',
        'section_8_2_title',
        'section_8_2_text',
        'section_8_3_title',
        'section_8_3_text',
        'section_8_4_title',
        'section_8_4_text',
    ];
}
