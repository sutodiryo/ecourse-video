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
    ];
}
