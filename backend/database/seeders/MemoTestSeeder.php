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
        ];

        $images2 = [
            'fruit1.png',
            'fruit2.png',
            'fruit3.png',
        ];

        $images3 = [
            'halloween1.png',
            'halloween2.png',
            'halloween3.png',
        ];

        $images4 = [
            'christmas1.png',
            'christmas2.png',
            'christmas3.png',
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

        DB::table('memo_tests')->insert([
            'id' => 3,
            'name' => 'halloween',
            'images' => json_encode($images3)
        ]);

        DB::table('memo_tests')->insert([
            'id' => 4,
            'name' => 'christmas',
            'images' => json_encode($images4)
        ]);
    }
}
