<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index(Request $request) {
        return Inertia::render('Order/Orders',[
            'orders' =>  Order::latest()->where('user_id', $request->user()->id)->get(),
            'payment_url' => session('payment_url'),
        ]);
    }

    public function show(Order $order, Request $request) {
        if($request->user()->id !== $order->user->id) {
            return redirect()->route('orders');
        }
        
        $orderShippingDetail = $order->orderShippingDetail;
        $orderBillingDetail = $order->orderBillingDetail;
        $orderItems = $order->orderItems->load('inventory.color', 'inventory.size', 'inventory.product.images');
        $payment = $order->payment;
        $shipper = $order->shipper;

        return Inertia::render('Order/Order',[
            'order' => $order,
            'orderShippingDetail' => $orderShippingDetail,
            'orderBillingDetail' => $orderBillingDetail,
            'orderItems' => $orderItems,
            'payment' => $payment,
            'shipper' => $shipper,
            'payment_url' => session('payment_url'),
        ]);
    }

}
