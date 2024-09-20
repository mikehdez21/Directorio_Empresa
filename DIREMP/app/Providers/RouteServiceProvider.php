<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * Registra los servicios de ruta para la aplicación.
     *
     * @return void
     */
    public function boot()
    {
        $this->configureRoutes();
    }

    /**
     * Configura las rutas para la aplicación.
     *
     * @return void
     */
    protected function configureRoutes()
    {
        Route::prefix('api')
            ->middleware('api')
            ->group(base_path('routes/api.php'));

        Route::middleware('web')
            ->group(base_path('routes/web.php'));
    }
}
