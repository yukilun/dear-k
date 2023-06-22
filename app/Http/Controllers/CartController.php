<?php

namespace App\Http\Controllers;

use App\Models\CartItem;
use App\Models\Inventory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Inertia\Inertia;

class CartController extends Controller
{
    // DISPLAY　ALL CART ITEMS
    public function index(Request $request)
    {
        $user = $request->user();
        $cartItems = [];
        $canCheckout = true;
        $total = 0;

        if ($user) {
            $cartItems = $user->CartItems;
            foreach ($cartItems as $cartItem) {
                $total += $cartItem->subtotal;
                if ($cartItem->availability !== 'available') {
                    $canCheckout = false;
                }
                $cartItem->load('inventory', 'inventory.color', 'inventory.size', 'inventory.product.images');
            }
        } else {
            $cookieCartItems = json_decode($request->cookie('cart_items', '[]'), true);
            foreach ($cookieCartItems as $index => $cartItem) {
                $inventory = Inventory::find($cartItem['inventory_id']);
                if ($inventory) {
                    $cartItem['subtotal'] = number_format($inventory->product->price * $cartItem['quantity'], 2, '.', '');
                    $total += $cartItem['subtotal'];

                    if ($cartItem['quantity'] <= $inventory->stock_quantity) {
                        $cartItem['availability'] = 'available';
                    } else if ($inventory->stock_quantity <= 0) {
                        $cartItem['availability'] = 'out of stock';
                        $canCheckout = false;
                    } else {
                        $cartItem['availability'] = 'only ' . $inventory->stock_quantity . ' in stock';
                        $canCheckout = false;
                    }

                    $inventory->load('color', 'size', 'product.images');
                    $cartItem['inventory'] = $inventory->toArray();
                    $cartItems[] = $cartItem;
                } else {
                    unset($cookieCartItems[$index]);
                }
            };
            $minutes = 60 * 24 * 30; // store for 30 days
            Cookie::queue('cart_items', json_encode(array_values($cookieCartItems)), $minutes);
        }

        return Inertia::render('Cart/Cart', [
            'cartItems' => $cartItems,
            'canCheckout' => $canCheckout,
            'total' => number_format($total, 2, '.', '')
        ]);
    }

    // ADD CART ITEM TO CART
    public function add(Request $request)
    {

        $fields = $request->validate([
            'inventory_id' => 'required|exists:inventories,id',
            'quantity' => 'required|integer|min:1',
        ]);

        $user = $request->user();

        if ($user) {
            $cartItem = $user->cartItems->where('inventory_id', $fields['inventory_id'])->first();
            if ($cartItem) {
                $cartItem->quantity = $cartItem->quantity + $fields['quantity'];
                $cartItem->save();
            } else {
                $cartItem = CartItem::create([...$fields, 'user_id' => $user->id]);
            }
            return back();
        } else {
            $cartItems = json_decode($request->cookie('cart_items', '[]'), true);
            $cartItemFound = false;
            foreach ($cartItems as &$cartItem) { //& for passing as reference (so that we can update it)
                if($cartItem['inventory_id'] == $fields['inventory_id']) {
                    $cartItem['quantity'] =  $cartItem['quantity'] + $fields['quantity'];
                    $cartItemFound = true;
                    break;
                }
            }
        }
        if (!$cartItemFound) {
            $cartItems[] = $fields; // work like array_push, but array_push return a new array
        }
        $minutes = 60 * 24 * 30; // store for 30 days
        return back()->withCookie(cookie('cart_items', json_encode($cartItems), $minutes));
    }

    // REMOVE CART ITEM
    public function remove(Request $request)
    {
        $user = $request->user();
        if ($user) {
            $cartItem = $user->cartItems->where('inventory_id', $request->inventory_id)->first();
            if ($cartItem) {
                $cartItem->delete();
            }
        } else {
            $cartItems = json_decode($request->cookie('cart_items', '[]'), true);
            $cartItems = array_filter($cartItems, fn ($cartItem) => $cartItem['inventory_id'] !== $request->inventory_id);
            $minutes = 60 * 24 * 30; // store for 30 days
            Cookie::queue('cart_items', json_encode($cartItems), $minutes);
        }
        return redirect('/cart');
    }

    // UPDATE QUANTITY FROM THE CART ITEM
    public function updateQuantity(Request $request)
    {
        // dd($request);
        $user = $request->user();
        $newQuantity = (int)$request->quantity;
        if ($newQuantity > 0) {
            if ($user) {
                $cartItem = $user->cartItems->where('inventory_id', $request->inventory_id)->first();
                if ($cartItem) {
                    $cartItem->quantity = $newQuantity;
                    $cartItem->save();
                }
            } else {
                $cartItems = json_decode($request->cookie('cart_items', '[]'), true);
                foreach ($cartItems as &$cartItem) {
                    if ($cartItem['inventory_id'] == $request->inventory_id) {
                            $cartItem['quantity'] = $newQuantity;
                    }
                }
                $minutes = 60 * 24 * 30; // store for 30 days
                Cookie::queue('cart_items', json_encode($cartItems), $minutes);
            }
        }
        return redirect('/cart');
    }
}
