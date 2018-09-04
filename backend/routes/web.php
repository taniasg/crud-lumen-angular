<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});


$router->get('/usuarios', ['uses' => 'UsersController@index']);
$router->get('/usuarios/{id}', ['uses' => 'UsersController@getUser']);
$router->post('/usuarios/crear', ['uses' => 'UsersController@createUser']);
$router->put('usuarios/{id}',['uses' => 'UsersController@updateUser']);
$router->delete('/usuarios/{id}', ['uses' => 'UsersController@deleteUser']);