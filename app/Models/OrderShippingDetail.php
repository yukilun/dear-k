<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderShippingDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'name',
        'phone',
        'street_address',
        'city',
        'province_code',
        'postal_code'
    ];

    // RELATIONSHIP WITH ORDER
    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id');
    }

    // RELATIONSHIP WITH PROVINCE
    public function province() {
        return $this->belongsTo(Province::class, 'province_code');
    }
}
