<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    // NOTE: ONLY PUBLISHED PRODUCTS WILL BE DISPLAYED FOR CUSTOMERS

    // DISPLAY ALL PRODUCTS (PUBLISHED) WITH IMAGES AND COLOR OPTION (WITH CATEGORY FILTER)
    public function index()
    {
        $productsPage = Product::whereNull('deleted_at')
            ->whereRelation('batch', 'published_at', '<=', Carbon::now())
            ->withSum('inventories', 'sold_quantity')
            ->orderBy(request()->query('sort_by', 'created_at'), request()->query('order_by', 'desc'))
            ->orderBy('id', 'desc')
            ->with(['inventories' => ['color']])
            ->with('images')
            ->filter(request(['category']))
            ->paginate(12)
            ->withQueryString();

        return Inertia::render('Product/Products', [
            'productsPage' => $productsPage,
            'category' => request()->query('category'),
            'sortBy' => request()->query('sort_by'),
            'orderBy' => request()->query('order_by'),
        ]);
    }

    // DISPLAY SINGLE PRODUCT
    public function show(String $id)
    {
        $product = Product::whereNull('deleted_at')
            ->findOrFail($id)
            ->where('id', $id)
            ->whereRelation('batch', 'published_at', '<=', Carbon::now())
            ->with(['inventories' => ['color', 'size']])
            ->with('images')
            ->get();

        $exploreProducts = Product::whereNull('deleted_at')
            ->whereRelation('batch', 'published_at', '<=', Carbon::now())
            ->where('id', '<>', $id)
            ->inRandomOrder()
            ->take(4)
            ->with(['inventories' => ['color']])
            ->with('images')
            ->get();

        return Inertia::render('Product/Product', [
            'product' => $product,
            'exploreProducts' => $exploreProducts
        ]);
    }
}
