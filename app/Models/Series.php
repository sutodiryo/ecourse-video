<?php

namespace App\Models;

use App\Traits\HasScope;
use App\Traits\HasSlug;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Series extends Model
{
    use HasFactory, HasSlug, HasScope, HasUuids;

    protected $fillable = [
        'user_id',
        'series_id',
        'name',
        'slug',
        'cover',
        // 'level',
        'status',
        'description',
        'price',
        'price_x',
    ];

    // generate cover
    public function getCoverAttribute($cover)
    {
        return asset('storage/covers/' . $cover);
    }

    // relationship with tags
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    // relationship with user
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // relationship with videos
    public function videos()
    {
        return $this->hasMany(Video::class);
    }

    // relationship with carts
    public function carts()
    {
        return $this->hasMany(Cart::class);
    }
}
