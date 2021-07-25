<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UpdateController;
use Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => 'api',
], function ($router) {
    Route::get('ping', function(){
        return ['PONG'=>true];
    });
    Route::post('login',  [AuthController::class, 'login']);
    Route::post('signup', [AuthController::class, 'signup']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh',[AuthController::class, 'refresh']);
    Route::post('me',     [AuthController::class, 'me']);
});

Route::group([
    'middleware'=> 'api',
    'prefix'=> 'update'
], function ($router){
    Route::get('index', [UpdateController::class, 'index']);
    Route::update('password', [UpdateController::class, 'password']);
});