<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Marketing extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'short_title',
        'long_title',
        'type',
        'images',
        'page_username',
        'description',
    ];

    /**
     * Relationship: Marketing belongs to a User.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}