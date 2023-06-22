<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'inventory_id',
        'quantity',
        'unit_price'
    ];

    protected $appends = [
        'subtotal',
    ];

    // RELATIONSHIP WITH ORDER
    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id');
    }

    //RELATIONSHIP WITH INVENTORY
    public function inventory()
    {
        return $this->belongsTo(Inventory::class, 'inventory_id');
    }

    // COMPUTE SUBTOTAL
    protected function getSubtotalAttribute()
    {
        return number_format($this->unit_price * $this->quantity, 2, '.', '');
    }
}
