<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public function scopeFilter($query, array $filters) {
        if($filters['category'] ?? false) {
            $category = Category::where('category_name', $filters['category'])->get()->first();
            $query->where('category_id', $category->id);
        }
    }

    //RELATIONSHIP WITH INVENTORY
    public function inventories()
    {
        return $this->hasMany(Inventory::class, 'product_id');
    }

    //RELATIONSHIP WITH IMAGE
    public function images()
    {
        return $this->hasMany(Image::class, 'product_id');
    }

    //RELATIONSHIP WITH CATEGORY
    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    //RELATIONSHIP WITH PRODUCT
    public function batch()
    {
        return $this->belongsTo(Batch::class, 'batch_id');
    }
}
