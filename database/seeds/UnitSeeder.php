<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Insert some stuff
        DB::table('units')->insert(
            array(
                'id'      => 1,
                'ShortName' => 'Pics',
                'name'    => 'Pieces',
            )
        );
    }
}
