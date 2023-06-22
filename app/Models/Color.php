<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Color extends Model
{
    use HasFactory;

    //RELATIONSHIP WITH INVENTORY
    public function inventories() {
        return $this->hasMany(Inventory::class, 'color_id');
    }
}
