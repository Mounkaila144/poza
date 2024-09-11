<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;

use Illuminate\Database\Seeder;

class StockSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        // Insert some stuff



        DB::transaction(function () {

            // DB::table("users")->insert([
            //     array(
            //         'id' => 2,
            //         'firstname' => 'William',
            //         'lastname' => 'Castillo',
            //         'username' => 'William Castillo',
            //         'email' => 'admin@example.com',
            //         'password' => '$2y$10$IFj6SwqC0Sxrsiv4YkCt.OJv1UV4mZrWuyLoRG7qt47mseP9mJ58u',
            //         'avatar' => 'no_avatar.png',
            //         'phone' => '0123456789',
            //         'role_id' => 1,
            //         'statut' => 1,
            //         'is_all_warehouses' => 1,
            //     )
            // ]);


            DB::table("roles")->insert([
                [
                    'id'    => 2,
                    'name'  => 'Warehouse_Stock_Updater',
                    'label' => 'Warehouse Stock Updater',
                    'status' => 1,
                    'description' => 'A user with this role can update the stock of the warehouse especially after they use items from it.',
                ]
            ]);

            DB::table('permissions')->insert(
                [
                    // ------------- PERMISSIONS --------
                    [
                        'id' => 141,
                        'name' => 'stock_view',
                    ],
                    [
                        'id' => 142,
                        'name' => 'stock_update',
                    ],
                ]
            );


            //  -------- 
            DB::table('permission_role')->insert(
                [
                    // ---------- ROLE PERMISSIONS ----------
                    [
                        'id'            => 143,
                        'permission_id' => 11, // Products_view
                        'role_id'       => 2, // STOCK_UPDATER
                    ],

                    // [
                    //     'id'            => 143,
                    //     'permission_id' => 27, // Sales_edit
                    //     'role_id'       => 2, // STOCK_UPDATER
                    // ],


                    // [
                    //     'id'            => 143,
                    //     'permission_id' => 28, // Sales_view
                    //     'role_id'       => 2, // STOCK_UPDATER
                    // ],



                    // [
                    //     'id'            => 144,
                    //     'permission_id' => 30, // Sales_add
                    //     'role_id'       => 2, // STOCK_UPDATER
                    // ],


                    // [
                    //     'id'            => 145,
                    //     'permission_id' => 30, // Sales_add
                    //     'role_id'       => 2, // STOCK_UPDATER
                    // ],


                    // ---------- ROLE PERMISSIONS ----------
                    [
                        'id'            => 146,
                        'permission_id' => 141, // stock_view
                        'role_id'       => 1, // OWNER
                    ],
                    [
                        'id'            => 147,
                        'permission_id' => 142, // stock_update
                        'role_id'       => 1, // OWNER
                    ],
                    // 

                    // ---------- ROLE PERMISSIONS ----------
                    [
                        'id'            => 148,
                        'permission_id' => 141, // stock_view
                        'role_id'       => 2, // STOCK_UPDATER
                    ],
                    [
                        'id'            => 149,
                        'permission_id' => 142, // stock_update
                        'role_id'       => 2, // STOCK_UPDATER
                    ],
                ]
            );
        });
    }
}
