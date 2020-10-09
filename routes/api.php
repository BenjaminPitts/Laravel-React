<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('people', function () {
    $users = DB::select('SELECT * FROM people');
    return $users;
});

Route::post('people', function (Request $request) {
    DB::insert('INSERT INTO people (name, age) VALUES (?, ?)', [$request->name, $request->age]);
    $users = DB::select('SELECT * FROM people');
    return $users;
});

Route::delete('people/{id}', function ($id) {
    DB::delete('DELETE FROM people WHERE id = ?', [$id]);
    $users = DB::select('SELECT * FROM people');
    return $users;
});
