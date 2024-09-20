<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('empresas', function (Blueprint $table) {
            $table->id();
            $table->string("nombre", 50);
            $table->string("email", 50)->unique();
            $table->string("telefono", 9);
            $table->string("direccion", 50);

            $table->text("website", 50)->nullable();
            $table->text("facebook", 50)->nullable();
            $table->text("youtube", 50)->nullable();
            $table->text("tiktok", 50)->nullable();
            $table->text("descripcion", 50)->nullable();
            $table->text("urlfoto", 50)->nullable();

            $table->text("publicado", 50)->default();
            $table->integer("orden")->default(1);
            $table->integer("visitas")->default(1);

            $table->foreignId("categoria_id")->references('id')->on('categorias')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId("user_id")->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('empresas');
    }
};
