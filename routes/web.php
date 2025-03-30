<?php

use App\Models\Marketing;
use App\Models\WebWork;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $featuredMarketings = Marketing::where('featured', true)
        ->get(['id', 'type', 'images', 'short_title', 'page_username'])->toArray();

    $featuredWebWorks = WebWork::where('featured', true)
        ->get(['id', 'images', 'title', 'short_description', 'date'])->toArray();

    return view('home', compact('featuredMarketings', 'featuredWebWorks'));
})->name('home');

Route::get('/contact-us', function () {
    return view('contact');
})->name('contact');


Route::get('/our-work', function () {
    $featuredMarketings = Marketing::select(['id', 'type', 'images', 'short_title', 'page_username'])->get()->toArray();

    $featuredWebWorks = WebWork::where('featured', true)
        ->get(['id', 'images', 'title', 'short_description', 'date'])->toArray();
    return view('work', compact('featuredMarketings', 'featuredWebWorks'));
})->name('work');

Route::get('/web/{id}', function ($id) {
    $webWork = WebWork::findOrFail($id); // Fetch the specific WebWork item
    return view('web-detail', compact('webWork'));
})->name('web.detail');

Route::get('/marketing/{id}', function ($id) {
    $marketing = Marketing::findOrFail($id); // Fetch the specific WebWork item
    return view('marketing-detail', compact('marketing'));
})->name('marketing.detail');