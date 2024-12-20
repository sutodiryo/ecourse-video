<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Cart extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = ['user_id', 'series_id', 'price'];

    // relationship with user
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // relationship with series
    public function series()
    {
        return $this->belongsTo(Series::class);
    }
}
