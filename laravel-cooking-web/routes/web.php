<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [HomeController::class,'welcome']);
Route::get('/team', [HomeController::class,'team']);
Route::get('/login', [HomeController::class,'login']);
Route::get('/signup', [HomeController::class,'signup']);
Route::get('/welcomeuser', [HomeController::class,'welcomeuser']);