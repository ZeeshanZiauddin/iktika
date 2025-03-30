<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('web_works', function (Blueprint $table) {
            $table->id();
            $table->longText('images')->nullable(); // Image can be null
            $table->string('title')->nullable();
            $table->date('date')->nullable();
            $table->text('short_description')->nullable(); // Added short description
            $table->longText('description')->nullable(); // Long description
            $table->text('for')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('web_works');
    }
};