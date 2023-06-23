<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CartItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'inventory_id',
        'quantity',
    ];
    protected $appends = [
        'subtotal',
        'availability'
    ];

    //RELATIONSHIP WITH USER
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    //RELATIONSHIP WITH INVENTORY
    public function inventory()
    {
        return $this->belongsTo(Inventory::class, 'inventory_id');
    }

    // COMPUTE SUBTOTAL
    protected function getSubtotalAttribute() {
        $inventory = Inventory::find($this->inventory_id);
        $price = $inventory->product->price;
        return number_format($price * $this->quantity, 2, '.', '');
    }

    // COMPUTE AVAILABILITY
    protected function getAvailabilityAttribute()
    {
        $inventory = Inventory::find($this->inventory_id);
        if ($this->quantity <= $inventory->stock_quantity) {
            return 'available';
        } else if ($inventory->stock_quantity <= 0) {
            return 'out of stock';
        } else {
            return 'only ' . $inventory->stock_quantity . ' in stock';
        }
    }
}
