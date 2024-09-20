<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Api/Controllers
use App\Http\Controllers\Api\FrontController;
use App\Http\Controllers\Api\AuthController;

// Cliente/Controllers
use App\Http\Controllers\Api\Cliente\EmpresaController as EmpresaCliente;

// Admin/Controllers 
use App\Http\Controllers\Api\Admin\UserController;
use App\Http\Controllers\Api\Admin\CategoriaController;
use App\Http\Controllers\Api\Cliente\EmpresaController;


Route::prefix('v1')->group(function () {

    // Rutas Publicas ::public
    Route::get('/public/{slug}', [FrontController::class, 'categoria']);

    // ::auth (Register y Login)
    Route::post('/auth/register', [AuthController::class, 'register']);
    Route::post('/auth/login', [AuthController::class, 'login']);


    // Rutas Privadas ::private
    Route::group(['middleware' => 'auth:sanctum'], function () {

        //::auth
        Route::post('/auth/logout', [AuthController::class, 'logout']);

        // Rutas Cliente ::rol
        Route::apiResource('/cliente/empresa', EmpresaCliente::class);

        // Rutas Admin ::rol
        Route::apiResource('/admin/user', UserController::class);
        Route::apiResource('/admin/categorias', CategoriaController::class);
        Route::apiResource('/admin/empresa', EmpresaController::class);


        // Rutas Empresa ::rol

    });
});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
