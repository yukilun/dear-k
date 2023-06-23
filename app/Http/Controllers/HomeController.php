<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Batch;
use App\Models\Product;
use Carbon\Carbon;
use Inertia\Inertia;

class HomeController extends Controller
{
    // DISPLAY ALL HOME RELATED STUFF (BANNERS, PRODUCTS - LATEST BATCH, PRODUCTS - BEST 5 )
    public function index()
    {
        $latestBatch = Batch::orderBy('published_at', 'desc')
                        ->take(1)
                        ->get();

        $newProducts = Product::whereNull('deleted_at')
                        ->latest()
                        ->where('batch_id', $latestBatch->first()->id)
                        ->with(['inventories' => ['color']])
                        ->with('images')
                        ->get();

        $bestProducts = Product::whereNull('deleted_at')
                        ->whereRelation('batch', 'published_at', '<=', Carbon::now())
                        ->withSum('inventories', 'sold_quantity')
                        ->orderBy('inventories_sum_sold_quantity', 'desc')
                        ->take(7)
                        ->with(['inventories' => ['color']])
                        ->with('images')
                        ->get();
        
        $banners = Banner::get();

        return Inertia::render('Home', [
            'newProducts' => $newProducts,
            'bestProducts' => $bestProducts,
            'banners' => $banners,
        ]);
    }

    public function about() {
        return Inertia::render('Support/About'); 
    }
    
    public function faq() {
        return Inertia::render('Support/Faq'); 
    }

    public function shipping() {
        return Inertia::render('Support/Shipping'); 
    }

    public function return() {
        return Inertia::render('Support/Return'); 
    }
}
