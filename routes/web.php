<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
})->name('home');

Route::get('/contact-us', function () {
    return view('contact');
})->name('contact');


Route::get('/our-work', function () {
    return view('work');
})->name('work');