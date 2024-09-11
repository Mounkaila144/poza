<?php


use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Insert some stuff
        DB::table('clients')->insert(
            [
                array(
                    'id'     => 1,
                    'name'   => 'walk-in-customer',
                    'code' => 1,
                    'email' => 'walk-in-customer@example.com',
                    'country' => 'bangladesh',
                    'city' => 'dhaka',
                    'phone' => '123456780',
                    'adresse' => 'N45 , Dhaka',
                    'tax_number' => NULL,
                ),

                // array(
                //     'id'     => 2,
                //     'name'   => 'Stock_Remove',
                //     'code' => 1,
                //     'email' => 'stock_remove@example.com',
                //     'country' => 'bangladesh',
                //     'city' => 'dhaka',
                //     'phone' => '123456780',
                //     'adresse' => 'N45 , Dhaka',
                //     'tax_number' => NULL,
                // )
            ]

        );
    }
}
