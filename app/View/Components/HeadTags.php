<?php

namespace App\View\Components;

use Illuminate\View\Component;
use App\Models\GeneralSetting;

class HeadTags extends Component
{
    public $settings;

    public function __construct()
    {
        // Fetch the first row from the general_settings table
        $this->settings = \Joaopaulolndev\FilamentGeneralSettings\Models\GeneralSetting::first();
    }

    public function render()
    {
        return view('components.head-tags');
    }
}