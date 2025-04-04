<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('marketings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('short_title');
            $table->string('long_title');
            $table->enum('type', ['facebook', 'instagram']);
            $table->string('page_username')->unique();
            $table->text('description')->nullable();
            $table->date('completion_date')->nullable();
            $table->longText('images')->nullable(); // Image column
            // New featured column
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('marketings');
    }
};