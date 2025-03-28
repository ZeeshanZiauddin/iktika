<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WebWork extends Model
{
    use HasFactory;

    protected $fillable = ['image', 'title', 'date', 'short_description', 'description', 'for'];
}