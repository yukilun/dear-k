<?php

namespace App\Console;

use App\Enums\OrderStatus;
use App\Enums\PaymentStatus;
use App\Models\Order;
use App\Models\Payment;
use Carbon\Carbon;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule): void
    {
        // $schedule->command('inspire')->hourly();
        $schedule->call(function () {
            $orders = Order::where('status', OrderStatus::Unpaid)
                            ->where('created_at' , '<', Carbon::now()->subHours(3))
                            ->get();
            foreach($orders as &$order) {
                $orderItems = $order->orderItems;
                foreach($orderItems as &$orderItem) {
                    $inventory = $orderItem->inventory;
                    $inventory->stock_quantity += $orderItem->quantity;
                    $inventory->sold_quantity -= $orderItem->quantity;
                    $inventory->save();
                }
                $payment = $order->payment;
                $payment->status = PaymentStatus::Failed->value;
                $payment->save();
                $order->status = OrderStatus::Cancelled->value;
                $order->save();
            }
        })->everyMinute();
    }

    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
