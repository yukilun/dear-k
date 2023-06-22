<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\CartItem;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        //merge cart items from cookies to database
        $this->mergeCarts($request);

        return redirect()->intended(RouteServiceProvider::HOME);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }

    private function mergeCarts(Request $request) {
        $user = $request->user();
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
