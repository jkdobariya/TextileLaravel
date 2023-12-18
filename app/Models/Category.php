<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'category_id',
        'name',
        'status',
    ];
    public function category()
    {
        return $this->belongsTo(Category::class, 'name');
    }
}
