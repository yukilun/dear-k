<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::get('register', [RegisteredUserController::class, 'create'])->name('register');
    Route::post('register', [RegisteredUserController::class, 'store']);
    Route::get('login', [AuthenticatedSessionController::class, 'create'])->name('login');
    Route::post('login', [AuthenticatedSessionController::class, 'store']);
    
    // display the forget password page (ask user to input email)
    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])->name('password.request');
    // validate whether the email exist, send the reset link and back with status   
    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])->name('password.email');
    // allow user to reset password if the token is valid (which is the link send to user email)
    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])->name('password.reset');
    // reset password for the user
    Route::post('reset-password', [NewPasswordController::class, 'store'])->name('password.store');
});

Route::middleware('auth')->group(function () {
    // display verify Email prompt (ask user to check email)
    Route::get('verify-email', EmailVerificationPromptController::class)->name('verification.notice');
    // make user email as verfied and redirect them when they clicked on the link sent to their email
    Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)->middleware(['signed', 'throttle:6,1'])->name('verification.verify');
    // send verification email on reset request and back with status
    Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])->middleware('throttle:6,1')->name('verification.send');
    // reset password after logged-in
    Route::put('password', [PasswordController::class, 'update'])->name('password.update');
    
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
});

