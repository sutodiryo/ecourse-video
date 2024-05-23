<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Frontend;

class FrontendSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()

    {
        Frontend::create([

            'hero_text' => 'Sekolah Bisnis “Muslim Bisnis Comunity” <br> Nikmati kemudahan akses belajar bisnis melalui paket video ecourse Sekolah Bisnis yang disampaikan langsung oleh Coach Fitra Jaya Saleh',

            'hero_img' => '',

        ]);
    }
}
