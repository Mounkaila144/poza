<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPurchaseIdToPurchaseShipmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('purchase_shipments', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->integer('purchase_id')->nullable()->after('date');
            $table->foreign('purchase_id', 'purchase_id_purchase_shipments')->references('id')->on('purchases')->onUpdate('RESTRICT')->onDelete('RESTRICT');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('purchase_shipments', function (Blueprint $table) {
            $table->dropForeign('purchase_id_purchase_shipments');
        });
    }
}
