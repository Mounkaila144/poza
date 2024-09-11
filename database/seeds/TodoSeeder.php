<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;

use Illuminate\Database\Seeder;

class TodoSeeder extends Seeder
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


        DB::table('permissions')->insert(
            [
                // ------------- PERMISSIONS --------
                [
                    'id' => 137,
                    'name' => 'todo_task_view',
                ],
                [
                    'id' => 138,
                    'name' => 'todo_task_add',
                ],
                [
                    'id' => 139,
                    'name' => 'todo_task_update',
                ],
                [
                    'id' => 140,
                    'name' => 'todo_task_delete',
                ],
            ]
        );
        DB::table('permission_role')->insert(
            [
                // ---------- ROLE PERMISSIONS ----------
                [
                    'id'            => 137,
                    'permission_id' => 137, // todo_task_view
                    'role_id'       => 1, // OWNER
                ],
                [
                    'id'            => 138,
                    'permission_id' => 138, // todo_task_add
                    'role_id'       => 1, // OWNER
                ],
                // 
                [
                    'id'            => 139,
                    'permission_id' => 139, // todo_task_update
                    'role_id'       => 1, // OWNER
                ],
                [
                    'id'            => 140,
                    'permission_id' => 140, // todo_task_delete
                    'role_id'       => 1, // OWNER
                ],
            ]
        );
    }
}
