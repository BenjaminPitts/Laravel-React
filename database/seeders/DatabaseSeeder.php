<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
    }
}

CREATE TABLE reviews (id SERIAL, name VARCHAR(26), comments VARCHAR(500), pics VARCHAR(100), created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP);
INSERT INTO reviews ( name, comments, pics ) VALUES ( 'Morgan', 'Super professional and fast. Great quality work!', 'https://i.imgur.com/gtqR72E.jpg' );
INSERT INTO reviews ( name, comments, pics ) VALUES ( 'Sarah', 'Really friendly and helpful. Some of the best prices in Denver hands down.', 'https://i.imgur.com/fz978py.jpeg' );
INSERT INTO reviews ( name, comments, pics ) VALUES ( 'Buddy', 'I love tripleJ, 10/10 would recommend to anyone!', 'https://i.imgur.com/p2Q9iTV.jpeg' );
