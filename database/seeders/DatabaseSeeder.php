<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Banner;
use App\Models\Batch;
use App\Models\Category;
use App\Models\Color;
use App\Models\Image;
use App\Models\Inventory;
use App\Models\Product;
use App\Models\Province;
use App\Models\Shipper;
use App\Models\Size;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        // INSERT BATCHES
        $batches = [['batch_name' => 'April 2023', 'published_at' => Carbon::create(2023, 4, 1, 0, 0, 0, 'America/Vancouver')->utc()], ['batch_name' => 'May 2023', 'published_at' => Carbon::create(2023, 5, 1, 0, 0, 0, 'America/Vancouver')->utc()]];
        collect($batches)->each(function($batch) {Batch::create($batch); });

        // INSERT COLORS
        $colors = [['color_hex' => 'FFFFFF', 'color_name' => 'White'], ['color_hex' => '000000', 'color_name' => 'Black'], ['color_hex' => 'E3E1D3', 'color_name' => 'Cream'], ['color_hex' => '242467', 'color_name' => 'Navy'], ['color_hex' => '808080', 'color_name' => 'Gray'], ['color_hex' => 'BCBCBC', 'color_name' => 'Light gray'], ['color_hex' => '5B5B5B', 'color_name' => 'Dark gray'], ['color_hex' => '92933C', 'color_name' => 'Olive Green'], ['color_hex' => 'B0CFEB', 'color_name' => 'Sky Blue'], ['color_hex' => '6B879C', 'color_name' => 'Mid Blue Denim'], ['color_hex' => '2E2F31', 'color_name' => 'Black Denim']];
        collect($colors)->each(function ($color) { Color::create($color); });

        // INSERT SIZES
        $sizes = [['size_name' => 'XS'], ['size_name' => 'S'], ['size_name' => 'M'], ['size_name' => 'L'], ['size_name' => 'XL'], ['size_name' => 'Free']];
        collect($sizes)->each(function ($size) { Size::create($size); });

        //INSERT CATEGORY
        $categories = [['category_name' => 'Top'], ['category_name' => 'Pants'], ['category_name' => 'Skirts'], ['category_name' => 'Outer'], ['category_name' => 'Dress']];
        collect($categories)->each(function ($category) { Category::create($category); });

        //INSERT PRODUCTS
        $products = [['product_name' => 'Cool-Tight-Fit Stretch Tank Top', 'category_id' => 1, 'batch_id' => 1, 'description' => 'Stay cool and comfortable in our Cool-Tight-Fit Stretch Tank Top. Designed with a breathable fabric that provides a cooling effect, this tank top offers a snug and flattering fit, perfect for your active lifestyle.', 'price' => 20.5], ['product_name' => 'Eyelet Button Lace Tank Top', 'category_id' => 1, 'batch_id' => 1, 'description' => 'Elevate your summer style with our Eyelet Button Lace Tank Top. Featuring delicate lace details and charming eyelet buttons, this tank top adds a touch of elegance to any outfit. Embrace effortless femininity and embrace the warm weather with this beautiful piece.', 'price' => 15.8], ['product_name' => 'Color-Blocked Ribbed Short Sleeve T-shirt', 'category_id' => 1, 'batch_id' => 2, 'description' => 'Make a bold statement with our Color-Blocked Ribbed Short Sleeve T-shirt. With its eye-catching color-blocking design and ribbed texture, this t-shirt offers a trendy and stylish look. Perfect for casual outings or everyday wear, this t-shirt is a must-have addition to your wardrobe.', 'price' => 18.3], ['product_name' => 'Solid-Toned Straight Cut Slacks', 'category_id' => 2, 'batch_id' => 1, 'description' => 'Elevate your professional attire with our Solid-Toned Straight Cut Slacks. These slacks feature a timeless straight cut design that offers a polished and sophisticated look. Made with high-quality fabric and attention to detail, they provide a comfortable fit and are perfect for both formal and casual settings.', 'price' => 25.5], ['product_name' => 'Summer-Washed Wide-Leg Long Denim', 'category_id' => 2, 'batch_id' => 2, 'description' => 'Embrace a relaxed and chic style with our Summer-Washed Wide-Leg Long Denim. Designed with a flattering wide-leg cut and a summery washed finish, these jeans offer both comfort and fashion-forward appeal. Elevate your summer wardrobe with this versatile and trendy denim piece.', 'price' => 27.4]];
        collect($products)->each(function ($product) { Product::create($product); });

        //INSERT INVENTORIES
        $inventories = [['product_id' => 1, 'color_id' => 1, 'size_id' => 6, 'stock_quantity' => 22, 'sold_quantity' => 30], ['product_id' => 1, 'color_id' => 2, 'size_id' => 6, 'stock_quantity' => 37, 'sold_quantity' => 12], ['product_id' => 2, 'color_id' => 1, 'size_id' => 2, 'stock_quantity' => 9, 'sold_quantity' => 22], ['product_id' => 2, 'color_id' => 8, 'size_id' => 2, 'stock_quantity' => 21, 'sold_quantity' => 2], ['product_id' => 2, 'color_id' => 1, 'size_id' => 3, 'stock_quantity' => 50, 'sold_quantity' => 1], ['product_id' => 2, 'color_id' => 8, 'size_id' => 3, 'stock_quantity' => 44, 'sold_quantity' => 18], ['product_id' => 2, 'color_id' => 1, 'size_id' => 4, 'stock_quantity' => 17, 'sold_quantity' => 21], ['product_id' => 2, 'color_id' => 8, 'size_id' => 4, 'stock_quantity' => 60, 'sold_quantity' => 26], ['product_id' => 3, 'color_id' => 1, 'size_id' => 2, 'stock_quantity' => 41, 'sold_quantity' => 9], ['product_id' => 3, 'color_id' => 3, 'size_id' => 2, 'stock_quantity' => 39, 'sold_quantity' => 1], ['product_id' => 3, 'color_id' => 4, 'size_id' => 2, 'stock_quantity' => 34, 'sold_quantity' => 3], ['product_id' => 3, 'color_id' => 9, 'size_id' => 2, 'stock_quantity' => 30, 'sold_quantity' => 3], ['product_id' => 3, 'color_id' => 1, 'size_id' => 3, 'stock_quantity' => 18, 'sold_quantity' => 7], ['product_id' => 3, 'color_id' => 3, 'size_id' => 3, 'stock_quantity' => 36, 'sold_quantity' => 2], ['product_id' => 3, 'color_id' => 4, 'size_id' => 3, 'stock_quantity' => 0, 'sold_quantity' => 5], ['product_id' => 3, 'color_id' => 9, 'size_id' => 3, 'stock_quantity' => 43, 'sold_quantity' => 7], ['product_id' => 4, 'color_id' => 2, 'size_id' => 6, 'stock_quantity' => 58, 'sold_quantity' => 0], ['product_id' => 4, 'color_id' => 3, 'size_id' => 6, 'stock_quantity' => 0, 'sold_quantity' => 24], ['product_id' => 4, 'color_id' => 6, 'size_id' => 6, 'stock_quantity' => 30, 'sold_quantity' => 11], ['product_id' => 5, 'color_id' => 10, 'size_id' => 2, 'stock_quantity' => 28, 'sold_quantity' => 0], ['product_id' => 5, 'color_id' => 11, 'size_id' => 2, 'stock_quantity' => 47, 'sold_quantity' => 5], ['product_id' => 5, 'color_id' => 10, 'size_id' => 3, 'stock_quantity' => 43, 'sold_quantity' => 10], ['product_id' => 5, 'color_id' => 11, 'size_id' => 3, 'stock_quantity' => 0, 'sold_quantity' => 6], ['product_id' => 5, 'color_id' => 10, 'size_id' => 4, 'stock_quantity' => 16, 'sold_quantity' => 21], ['product_id' => 5, 'color_id' => 11, 'size_id' => 4, 'stock_quantity' => 47, 'sold_quantity' => 12], ['product_id' => 5, 'color_id' => 10, 'size_id' => 5, 'stock_quantity' => 25, 'sold_quantity' => 7], ['product_id' => 5, 'color_id' => 11, 'size_id' => 5, 'stock_quantity' => 5, 'sold_quantity' => 21]];
        collect($inventories)->each(function ($inventory) { Inventory::create($inventory); });
        
        //INSERT IMAGES
        $images = [['product_id' => 1, 'image_url' => 'images/1_1.png', 'is_main_image' => true], ['product_id' => 1, 'image_url' => 'images/1_2.png', 'is_main_image' => true], ['product_id' => 1, 'image_url' => 'images/1_3.png', 'is_main_image' => false], ['product_id' => 2, 'image_url' => 'images/2_1.png', 'is_main_image' => true], ['product_id' => 2, 'image_url' => 'images/2_2.png', 'is_main_image' => true], ['product_id' => 2, 'image_url' => 'images/2_3.png', 'is_main_image' => false], ['product_id' => 3, 'image_url' => 'images/3_1.png', 'is_main_image' => true], ['product_id' => 3, 'image_url' => 'images/3_2.png', 'is_main_image' => true], ['product_id' => 3, 'image_url' => 'images/3_3.png', 'is_main_image' => false], ['product_id' => 4, 'image_url' => 'images/4_1.png', 'is_main_image' => true], ['product_id' => 4, 'image_url' => 'images/4_2.png', 'is_main_image' => true], ['product_id' => 4, 'image_url' => 'images/4_3.png', 'is_main_image' => false], ['product_id' => 5, 'image_url' => 'images/5_1.png', 'is_main_image' => true], ['product_id' => 5, 'image_url' => 'images/5_2.png', 'is_main_image' => true], ['product_id' => 5, 'image_url' => 'images/5_3.png', 'is_main_image' => false]];
        collect($images)->each(function ($image) { Image::create($image); });

        //INSERT BANNERS
        $banners = [['banner_url' =>'banners/1.png'], ['banner_url' =>'banners/2.png']];
        collect($banners)->each(function ($banner) { Banner::create($banner); });

        //INSERT PROVINCES
        $provinces = [['code' =>'AB', 'province_name' =>'Alberta', 'sales_tax_type' =>'GST', 'sales_tax_rate' =>0.05], ['code' =>'BC', 'province_name' =>'British Columbia', 'sales_tax_type' =>'GST + PST', 'sales_tax_rate' =>0.12], ['code' =>'MB', 'province_name' =>'Manitoba', 'sales_tax_type' =>'GST + PST', 'sales_tax_rate' =>0.12], ['code' =>'NB', 'province_name' =>'New Brunswick', 'sales_tax_type' =>'HST', 'sales_tax_rate' =>0.15], ['code' =>'NL', 'province_name' =>'Newfoundland and Labrador', 'sales_tax_type' =>'HST', 'sales_tax_rate' =>0.15], ['code' =>'NT', 'province_name' =>'Northwest Territories', 'sales_tax_type' =>'GST', 'sales_tax_rate' =>0.05], ['code' =>'NS', 'province_name' =>'Nova Scotia', 'sales_tax_type' =>'HST', 'sales_tax_rate' =>0.15], ['code' =>'NU', 'province_name' =>'Nunavut', 'sales_tax_type' =>'GST', 'sales_tax_rate' =>0.05], ['code' =>'ON', 'province_name' =>'Ontario', 'sales_tax_type' =>'HST', 'sales_tax_rate' =>0.13], ['code' =>'PE', 'province_name' =>'Prince Edward Island', 'sales_tax_type' =>'HST', 'sales_tax_rate' =>0.15], ['code' =>'QC', 'province_name' =>'Quebec', 'sales_tax_type' =>'GST + QST', 'sales_tax_rate' =>0.14975], ['code' =>'SK', 'province_name' =>'Saskatchewan', 'sales_tax_type' =>'GST + PST', 'sales_tax_rate' =>0.11], ['code' =>'YT', 'province_name' =>'Yukon', 'sales_tax_type' =>'GST', 'sales_tax_rate' =>0.05]];
        collect($provinces)->each(function($province) { Province::create($province); });        
    
        //INSERT SHIPPERS
        $shippers = [['shipper_name' => 'DHL', 'tracking_url' => 'http://www.dhl.com/en/express/tracking.html?AWB='], ['shipper_name' => 'FedEx', 'tracking_url' => 'https://www.fedex.com/fedextrack/?trknbr=']];
        collect($shippers)->each(function($shipper) { Shipper::create($shipper); });
    }
}
