<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class TransactionDetail extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'transaction_id', 'series_id', 'grand_total', 'user_id'
    ];

    public function transaction()
    {
        return $this->belongsTo(Transaction::class);
    }

    public function series()
    {
        return $this->belongsTo(Series::class);
    }

    public function affiliate()
    {
        return $this->belongsTo(User::class);
    }

    // public function user()
    // {
    //     return $this->belongsTo(User::class);
    // }
}
