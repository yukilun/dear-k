<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inventory extends Model
{
    use HasFactory;

    //RELATIONSHIP WITH PRODUCT
    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

    //RELATIONSHIP WITH COLOR
    public function color()
    {
        return $this->belongsTo(Color::class, 'color_id');
    }

    //RELATIONSHIP WITH SIZE
    public function size()
    {
        return $this->belongsTo(Size::class, 'size_id');
    }

    //RELATIONSHIP WITH CART ITEM
    public function cartItems()
    {
        return $this->hasMany(CartItem::class, 'inventory_id');
    }

    //RELATIONSHIP WITH ORDER ITEM
    public function orderItems()
    {
        return $this->hasMany(OrderItem::class, 'inventory_id');
    }
}
