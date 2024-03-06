<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GameSession extends Model
{
    use HasFactory;

    public function game(): BelongsTo
    {
        return $this->belongsTo(MemoTest::class, 'memo_test');
    }
}
