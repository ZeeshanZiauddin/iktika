<?php

namespace App\Filament\Resources;

use App\Filament\Resources\MarketingResource\Pages;
use App\Filament\Resources\MarketingResource\RelationManagers;
use App\Models\Marketing;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class MarketingResource extends Resource
{
    protected static ?string $model = Marketing::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Hidden::make('user_id')->default(auth()->user()->id),

                TextInput::make('short_title')->default('')->required(),

                TextInput::make('long_title')
                    ->required()
                    ->maxLength(255),

                Select::make('type')
                    ->options([
                        'facebook' => 'Facebook Page',
                        'instagram' => 'Instagram',
                    ])
                    ->default('facebook')
                    ->required(),
                TextInput::make('page_username')
                    ->label('Username')
                    ->unique('marketings', 'page_username')
                    ->rules('unique:marketings,page_username')
                    ->required(),
                FileUpload::make('images')
                    ->disk('public')
                    ->directory('socials')
                    ->imageResizeMode('cover')
                    ->imageCropAspectRatio('16:9')
                    ->imageResizeTargetWidth('1920')
                    ->imageResizeTargetHeight('1080')->columnSpanFull(),
                RichEditor::make('description')
                    ->nullable()->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('images')->height('80px')->disk('public')->label('Image'),
                TextColumn::make('user.name')->label('User'),
                TextColumn::make('short_title')->searchable(),
                TextColumn::make('type')->sortable(),
                TextColumn::make('page_username'),
                ToggleColumn::make('featured') // Added toggle switch in table
                    ->label('Featured')
                    ->sortable(),
                TextColumn::make('created_at')->since(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListMarketings::route('/'),
            // 'create' => Pages\CreateMarketing::route('/create'),
            // 'edit' => Pages\EditMarketing::route('/{record}/edit'),
        ];
    }
}