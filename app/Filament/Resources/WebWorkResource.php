<?php
namespace App\Filament\Resources;

use App\Filament\Resources\WebWorkResource\Pages;
use App\Models\WebWork;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Textarea;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;

class WebWorkResource extends Resource
{
    protected static ?string $model = WebWork::class;
    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Forms\Form $form): Forms\Form
    {
        return $form->schema([
            FileUpload::make('image')
                ->disk('public')
                ->directory('webworks')
                ->image()
                ->imageResizeTargetWidth(1920)
                ->imageResizeTargetHeight(1080)
                ->columnSpanFull()
                ->nullable(),
            Grid::make([
                'default' => 3,
            ])
                ->schema([
                    TextInput::make('title')
                        ->placeholder('Title here ...')
                        ->maxLength(255)
                        ->nullable(),

                    DatePicker::make('date')
                        ->native(false)
                        ->placeholder('Dateof Completion')
                        ->nullable(),

                    TextInput::make('for')
                        ->maxLength(255)
                        ->placeholder('Name of the client')
                        ->nullable(),
                ]),

            Textarea::make('short_description')
                ->rows(3)
                ->maxLength(255)
                ->columnSpanFull()
                ->nullable(),
            RichEditor::make('description')
                ->columnSpanFull()
                ->nullable(),

        ]);

    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table->columns([
            ImageColumn::make('image')
                ->disk('public')
                ->label('Image'),

            TextColumn::make('title')->sortable()->searchable(),
            TextColumn::make('date')->date()->sortable(),
        ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListWebWorks::route('/'),
            //'create' => Pages\CreateWebWork::route('/create'),
            //'edit' => Pages\EditWebWork::route('/{record}/edit'),
        ];
    }
}