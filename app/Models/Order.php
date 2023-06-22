<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'subtotal',
        'sales_tax',
        'shipping_fee',
        'total',
        'status'
    ];

    // RELATIONSHIP WITH USER
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    // RELATIONSHIP WITH ORDER BILLING DETAIL
    public function orderBillingDetail()
    {
        return $this->hasOne(OrderBillingDetail::class, 'order_id');
    }

    // RELATIONSHIP WITH ORDER SHIPPING DETAIL
    public function orderShippingDetail()
    {
        return $this->hasOne(OrderShippingDetail::class, 'order_id');
    }

    // RELATIONSHIP WITH ORDER ITEM
    public function orderItems()
    {
        return $this->hasMany(OrderItem::class, 'order_id');
    }

    // RELATIONSHIP WITH PAYMENT
    public function payment()
    {
        return $this->hasOne(Payment::class, 'order_id');
    }

    // RELATIONSHIP WITH SHIPPER
    public function shipper() {
        return $this->belongsTo(Shipper::class, 'shipper_id');
    }
}
