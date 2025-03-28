<?php

namespace App\Filament\Resources\WebWorkResource\Pages;

use App\Filament\Resources\WebWorkResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditWebWork extends EditRecord
{
    protected static string $resource = WebWorkResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
