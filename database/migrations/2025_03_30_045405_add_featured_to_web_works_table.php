<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('web_works', function (Blueprint $table) {
            $table->boolean('featured')->default(false)->after('for'); // Adding 'featured' column
        });
    }

    public function down(): void
    {
        Schema::table('web_works', function (Blueprint $table) {
            $table->dropColumn('featured');
        });
    }
};