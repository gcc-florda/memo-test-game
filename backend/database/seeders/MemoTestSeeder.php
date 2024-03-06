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
        $images1 = [
            'animal1.png',
            'animal2.png',
            'animal3.png',
            'animal4.png'
        ];

        $images2 = [
            'fruit1.png',
            'fruit2.png',
            'fruit3.png',
            'fruit4.png'
        ];

        DB::table('memo_tests')->insert([
            'id' => 1,
            'name' => 'animals',
            'images' => json_encode($images1)
        ]);

        DB::table('memo_tests')->insert([
            'id' => 2,
            'name' => 'fruits',
            'images' => json_encode($images2)
        ]);
    }
}
