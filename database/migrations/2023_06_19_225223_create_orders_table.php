<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->references('id')->on('users')->onDelete('set null');
            $table->decimal('subtotal', 20, 2);
            $table->decimal('sales_tax', 20, 2);
            $table->decimal('shipping_fee', 20, 2);
            $table->decimal('total', 20, 2);
            $table->string('status', 50);
            $table->foreignId('shipper_id')->nullable()->default(null)->references('id')->on('shippers');
            $table->timestamp('shipped_at')->nullable()->default(null);
            $table->string('tracking_number', 50)->nullable()->default(null);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
