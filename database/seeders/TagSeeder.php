<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $colorData = Collect([
            'azure' , 'blue', 'indigo', 'purple', 'pink', 'red', 'orange', 'yellow', 'lime',
            'green', 'teal', 'cyan', 'gray'
        ]);

        $tagName = Collect(['Bisnis', 'Manajemen', 'Keuangan', 'Pembukuan', 'Digitalisasi', 'Marketing', 'Penjualan']);

        $tagName->each(function ($name) use ($colorData) {
            Tag::firstOrCreate([
                'name' => $name,
                'color' => $colorData->random()
            ]);
        });
    }
}
