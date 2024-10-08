<?php

use Database\Seeders\TodoSeeder;
use Database\Seeders\StockSeeder;
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

        $this->call([
            ClientSeeder::class,
            CurrencySeeder::class,
            SettingSeeder::class,
            ServerSeeder::class,
            PermissionsSeeder::class,
            RoleSeeder::class,
            UserSeeder::class,
            UserRoleSeeder::class,
            PermissionRoleSeeder::class,
            Warehouse::class,
            // 
            UnitSeeder::class,
            TodoSeeder::class,
            StockSeeder::class,
            // ProductSeeder::class,
        ]);
        
    }
}
