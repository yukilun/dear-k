<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\CartItem;
use App\Models\Customer;
use App\Models\Province;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        $provinces = Province::get();
        return Inertia::render('Auth/Register', [
            'provinces'=> $provinces
        ]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Password::min(8)],
            'phone' => 'required|string|size:10',
            'street_address' => 'required|string|max:100',
            'city' => 'required|string|max:50',
            'province_code' => 'required|string|size:2|exists:provinces,code',
            'postal_code' => 'required|string|size:6',
            'country' => ['required', 'string', Rule::in(['Canada'])]
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        $customer = new Customer([
            'phone' => $request->phone,
            'street_address' => $request->street_address,
            'city' => $request->city,
            'province_code' => $request->province_code,
            'postal_code' => $request->postal_code,
        ]);
        $customer->user_id = $user->id;
        $customer->save();

        Auth::login($user);
        $this->mergeCarts($user, $request);

        return redirect(RouteServiceProvider::HOME);
    }

    private function mergeCarts($user, Request $request) {
        $cookieCartItems = json_decode($request->cookie('cart_items', '[]'), true);
        foreach($cookieCartItems as $cookieCartItem) {
            $dbCartItem = $user->cartItems->where('inventory_id', $cookieCartItem['inventory_id'])->first();
            if($dbCartItem) {
                $newQuantity = $dbCartItem->quantity + $cookieCartItem['quantity'];
                $dbCartItem->quantity = $newQuantity <= 50 ? $newQuantity : 50;
                $dbCartItem->save();
            }
            else {
                $dbCartItem = CartItem::create([...$cookieCartItem, 'user_id'=> $user->id]);
            }
        }
        Cookie::queue(Cookie::forget('cart_items'));
    }
}
