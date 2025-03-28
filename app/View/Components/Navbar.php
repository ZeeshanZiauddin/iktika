<?php

namespace App\View\Components;

use Illuminate\View\Component;
use App\Models\GeneralSetting;

class Navbar extends Component
{
    public $settings;

    public function __construct()
    {
        $this->settings = \Joaopaulolndev\FilamentGeneralSettings\Models\GeneralSetting::first();
    }

    public function render()
    {
        return view('components.navbar');
    }
}