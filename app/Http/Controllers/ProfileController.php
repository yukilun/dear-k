<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Province;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ProfileController extends Controller
{
    // DISPLAY CUSTOMER PROFILE WITH EDITTING FEATURES
    public function edit(Request $request) {
        $user = $request->user();
        $user->load('customer');
        $provinces = Province::get();
        return Inertia::render('Profile/ProfileEdit', [
            'user' => $user,
            'provinces' => $provinces,
            'message' => session('message')
        ]);
    }

    // UPDATE CUSTOMER (USER) & REQUIRE THEM TO VERIFY ANY UPDATED EMAIL 
    public function store(Request $request) {
        $user = $request->user();
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => ['required','string','email','max:255',Rule::unique(User::class)->ignore($user->id)],
            'phone' => 'required|string|size:10',
            'street_address' => 'required|string|max:100',
            'city' => 'required|string|max:50',
            'province_code' => 'required|string|size:2|exists:provinces,code',
            'postal_code' => 'required|string|size:6',
            'country' => ['required', 'string', Rule::in(['Canada'])]
        ]);

        $user->fill([
            'name' => $request->name,
            'email' => $request->email,
        ]);

        if ($user->isDirty('email')) {
            $user->email_verified_at = null;
            $user->sendEmailVerificationNotification();
        }
        
        $user->save();

        $customer = $user->customer;

        if($customer) {
            $customer->fill([
                'phone' => $request->phone,
                'street_address' => $request->street_address,
                'city' => $request->city,
                'province_code' => $request->province_code,
                'postal_code' => $request->postal_code,
            ]);
        }
        else {
            $customer = new Customer([
                'phone' => $request->phone,
                'street_address' => $request->street_address,
                'city' => $request->city,
                'province_code' => $request->province_code,
                'postal_code' => $request->postal_code,
            ]);
            $customer->user_id = $user->id;
        }

        $customer->save();

        return redirect()->route('profile.edit')
                        ->with('message', [
                            'type'=> 'success',
                            'message' => 'Profile has been updated!'
                        ]);
    }

    // DELETE CUSTOMER (USER)
    public function destroy(Request $request) {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();
        // customer will be deleted (on delete casade)

        auth()->logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }

}
