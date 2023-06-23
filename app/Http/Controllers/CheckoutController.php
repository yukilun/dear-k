<?php

namespace App\Http\Controllers;

use App\Enums\OrderStatus;
use App\Enums\PaymentStatus;
use App\Mail\OrderPaid;
use App\Models\CartItem;
use App\Models\Inventory;
use App\Models\Order;
use App\Models\OrderBillingDetail;
use App\Models\OrderItem;
use App\Models\OrderShippingDetail;
use App\Models\Payment;
use App\Models\Province;
use Exception;
// use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class CheckoutController extends Controller
{
    //DISPLAY CHECKOUT PAGE FROM REGISTER USER
    public function index(Request $request)
    {
        $user = $request->user();
        $cartItems = $user->cartItems;
        $canCheckout = true;
        $total = 0;
        foreach ($cartItems as $cartItem) {
            $total += $cartItem->subtotal;
            if ($cartItem->availability !== 'available') {
                $canCheckout = false;
                break;
            }
            $cartItem->load('inventory', 'inventory.color', 'inventory.size', 'inventory.product.images');
        }

        if ((!$canCheckout || count($cartItems) <= 0) && !session('payment_url')) {
            return redirect()->route('cart.index');
        }

        $user->load('customer');
        $provinces = Province::get();

        return Inertia::render('Checkout/Checkout', [
            'cartItems' => $cartItems,
            'canCheckout' => $canCheckout,
            'total' => number_format($total, 2, '.', ''),
            'user' => $user,
            'provinces' => $provinces,
            'payment_url' => session('payment_url'),
        ]);
    }

    // CREATE NEW ORDER AND CHECKOUT
    public function checkout(Request $request)
    {
        $user = $request->user();

        $fields = $request->validate([
            'shipping_name' => 'required|string|max:255',
            'shipping_phone' => 'required|string|size:10',
            'shipping_street_address' => 'required|string|max:100',
            'shipping_city' => 'required|string|max:50',
            'shipping_province_code' => 'required|string|size:2|exists:provinces,code',
            'shipping_postal_code' => 'required|string|size:6',
            'shipping_country' => ['required', 'string', Rule::in(['Canada'])],
            'billing_name' => 'required|string|max:255',
            'billing_street_address' => 'required|string|max:100',
            'billing_city' => 'required|string|max:50',
            'billing_province_code' => 'required|string|size:2|exists:provinces,code',
            'billing_postal_code' => 'required|string|size:6',
            'billing_country' => ['required', 'string', Rule::in(['Canada'])],
        ]);

        $cartItems = $user->cartItems;
        $canCheckout = true;
        $subtotal = 0;
        $orderItems = [];
        $line_items = [];

        foreach ($cartItems as $cartItem) {
            if ($cartItem->availability !== 'available') {
                $canCheckout = false;
                break;
            }
            $subtotal += $cartItem->subtotal;
            $orderItems[] = [
                'inventory_id' => $cartItem->inventory_id,
                'quantity' => $cartItem->quantity,
                'unit_price' => $cartItem->inventory->product->price
            ];
            $line_items[] = [
                'price_data' => [
                    'currency' => 'cad',
                    'unit_amount' => $cartItem->inventory->product->price * 100,
                    'product_data' => [
                        'name' => $cartItem->inventory->product->product_name,
                        'description' => $cartItem->inventory->color->color_name . ' / ' . $cartItem->inventory->size->size_name,
                        // 'images' => [public_path('image/logo.png')],
                    ],
                ],
                'quantity' => $cartItem->quantity,
            ];
        }

        if (!$canCheckout || count($cartItems) <= 0) {
            return redirect()->route('cart.index');
        }

        $shipping_fee = $subtotal >= 100 ? 0 : 15;
        $sales_tax = round($subtotal * Province::where('code', $fields['shipping_province_code'])->first()->sales_tax_rate, 2);
        $total = round($subtotal + $shipping_fee + $sales_tax, 2);

        $line_items[] = [
            'price_data' => [
                'currency' => 'cad',
                'unit_amount' => $shipping_fee * 100,
                'product_data' => [
                    'name' => 'Shipping',
                ],
            ],
            'quantity' => 1,
        ];

        $line_items[] = [
            'price_data' => [
                'currency' => 'cad',
                'unit_amount' => $sales_tax * 100,
                'product_data' => [
                    'name' => 'Sales Tax',
                ],
            ],
            'quantity' => 1,
        ];


        \Stripe\Stripe::setApiKey(getenv('STRIPE_SECRET_KEY'));
        $session = \Stripe\Checkout\Session::create([
            'line_items' => $line_items,
            'mode' => 'payment',
            'success_url' => route('checkout.success').'?session_id={CHECKOUT_SESSION_ID}',
            'cancel_url' => route('checkout.failure'),
        ]);

        $order = Order::create([
            'user_id' => $user->id,
            'subtotal' => $subtotal,
            'sales_tax' => $sales_tax,
            'shipping_fee' => $shipping_fee,
            'total' => $total,
            'status' => OrderStatus::Unpaid->value,
        ]);

        foreach ($orderItems as &$orderItem) {
            $orderItem['order_id'] = $order->id;
            OrderItem::create($orderItem);
            $inventory = Inventory::find($orderItem['inventory_id']);
            $inventory->stock_quantity -= $orderItem['quantity'];
            $inventory->sold_quantity += $orderItem['quantity'];
            $inventory->save();
        }

        OrderShippingDetail::create([
            'order_id' => $order->id,
            'name' => $fields['shipping_name'],
            'phone' => $fields['shipping_phone'],
            'street_address' => $fields['shipping_street_address'],
            'city' => $fields['shipping_city'],
            'province_code' => $fields['shipping_province_code'],
            'postal_code' => $fields['shipping_postal_code'],
        ]);

        OrderBillingDetail::create([
            'order_id' => $order->id,
            'name' => $fields['billing_name'],
            'street_address' => $fields['billing_street_address'],
            'city' => $fields['billing_city'],
            'province_code' => $fields['billing_province_code'],
            'postal_code' => $fields['billing_postal_code'],
        ]);

        Payment::create([
            'order_id' => $order->id,
            'amount' => $total,
            'status' => PaymentStatus::Pending,
            'session_id' => $session->id,
        ]);

        CartItem::where('user_id', $user->id)->delete();

        return back()->with('payment_url', $session->url);
    }

    // CHECKOUT CREATED ORDER
    public function checkoutOrder(Order $order, Request $request) {
        if($request->user()->id !== $order->user->id) {
            return back();
        }

        $subtotal = 0;

        foreach ($order->orderItems as $orderItem) {
            $subtotal += $orderItem->unit_price * $orderItem->quantity;
            $orderItems[] = [
                'inventory_id' => $orderItem->inventory_id,
                'quantity' => $orderItem->quantity,
                'unit_price' => $orderItem->unit_price
            ];
            $line_items[] = [
                'price_data' => [
                    'currency' => 'cad',
                    'unit_amount' => $orderItem->unit_price * 100,
                    'product_data' => [
                        'name' => $orderItem->inventory->product->product_name,
                        'description' => $orderItem->inventory->color->color_name . ' / ' . $orderItem->inventory->size->size_name,
                    ],
                ],
                'quantity' => $orderItem->quantity,
            ];
        }

        $line_items[] = [
            'price_data' => [
                'currency' => 'cad',
                'unit_amount' => $order->shipping_fee * 100,
                'product_data' => [
                    'name' => 'Shipping',
                ],
            ],
            'quantity' => 1,
        ];

        $line_items[] = [
            'price_data' => [
                'currency' => 'cad',
                'unit_amount' => $order->sales_tax * 100,
                'product_data' => [
                    'name' => 'Sales Tax',
                ],
            ],
            'quantity' => 1,
        ];


        \Stripe\Stripe::setApiKey(getenv('STRIPE_SECRET_KEY'));
        $session = \Stripe\Checkout\Session::create([
            'line_items' => $line_items,
            'mode' => 'payment',
            'success_url' => route('checkout.success').'?session_id={CHECKOUT_SESSION_ID}',
            'cancel_url' => route('checkout.failure'),
        ]);

        $payment = $order->payment;
        $payment->session_id = $session->id;
        $payment->save();

        return back()->with('payment_url', $session->url);
    }

    public function success(Request $request)
    {
        try {
            \Stripe\Stripe::setApiKey(getenv('STRIPE_SECRET_KEY'));
            $session_id = $request->get('session_id');
            $session = \Stripe\Checkout\Session::retrieve($session_id);
            if (!$session) {
                return redirect()->route('checkout.failure')->with('message', 'Invalid session');
            }

            $payment = Payment::where('session_id' , $session_id)
                ->whereIn('status', [PaymentStatus::Pending, PaymentStatus::Paid])
                ->first();

            if (!$payment) {
                throw new NotFoundHttpException();
            }
            if ($payment->status === PaymentStatus::Pending->value) {
                $this->updateOrderAndSession($payment);
            }

            return Inertia::render('Checkout/Success', [
                'name' => $payment->order->user->name,
                'order_id' => $payment->order->id
            ]);

        } catch (NotFoundHttpException $error) {
            throw $error;
        } catch (Exception $error) {
            return redirect()->route('checkout.failure')->with('message', $error->getMessage());
        }
    }

    public function failure()
    {
        return Inertia::render('Checkout/Failure', [
            'message' => session('message')
        ]);
    }

    public function webhook()
    {
        \Stripe\Stripe::setApiKey(getenv('STRIPE_SECRET_KEY'));
        $endpoint_secret = env('WEBHOOK_SECRET_KEY');

        $payload = @file_get_contents('php://input');
        $sig_header = $_SERVER['HTTP_STRIPE_SIGNATURE'];
        $event = null;

        try {
            $event = \Stripe\Webhook::constructEvent(
                $payload, $sig_header, $endpoint_secret
            );
        } catch (\UnexpectedValueException $e) {
            // Invalid payload
            return response('invalid payload', 400);
        } catch (\Stripe\Exception\SignatureVerificationException $e) {
            // Invalid signature
            return response($e->getMessage(), 400);
        }

        // Handle the event
        switch ($event->type) {
            case 'checkout.session.completed':
                $paymentIntent = $event->data->object;
                $sessionId = $paymentIntent['id'];

                $payment = Payment::where(['session_id' => $sessionId, 'status' => PaymentStatus::Pending])->first();
                if ($payment) {
                    $this->updateOrderAndSession($payment);
                }
            default:
                echo 'Received unknown event type ' . $event->type;
        }

        return response('', 200);
    }

    private function updateOrderAndSession(Payment $payment) {
        $payment->status = PaymentStatus::Paid->value;
        $payment->save();

        $order = $payment->order;
        $order->status = OrderStatus::Paid->value;
        $order->save();

        Mail::to($order->user)->send(new OrderPaid($order));
    }
}
