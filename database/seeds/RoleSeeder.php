<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Role;
use App\Models\Permission;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Insert some stuff
        DB::table('roles')->insert(
            array(
                [
                    'id'    => 1,
                    'name'  => 'Owner',
                    'label' => 'Owner',
                    'status' => 1,
                    'description' => 'Owner',
                ],
                // [
                //     'id'    => 2,
                //     'name'  => 'Warehouse_Stock_Updater',
                //     'label' => 'Warehouse Stock Updater',
                //     'status' => 1,
                //     'description' => 'A user with this role can update the stock of the warehouse especially after they use items from it.',
                // ]
            )
        );
    }
}
