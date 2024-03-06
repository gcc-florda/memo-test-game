<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class MemoTestSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('memo_tests')->insert([
            'id' => 1,
            'name' => 'animals',
            'images' => json_encode([
                '1' => 'animal1.png',
                '2' => 'animal2.png',
                '3' => 'animal3.png',
                '4' => 'animal4.png'
            ])
        ]);

        DB::table('memo_tests')->insert([
            'id' => 2,
            'name' => 'fruits',
            'images' => json_encode([
                '1' => 'fruit1.png',
                '2' => 'fruit2.png',
                '3' => 'fruit3.png',
                '4' => 'fruit4.png',
            ])
        ]);
    }
}
