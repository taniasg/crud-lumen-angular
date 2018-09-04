<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UsersController extends Controller
{
    public function index() {
        $usuarios = User::all();
        return response()->json($usuarios, 200);
    }

    public function getUser($id) {
        $usuario = User::findOrFail($id);
        return response()->json($usuario, 200);
    }

    public function createUser(Request $request) {
        $data = $request->json()->all();

        $usuario = User::create([
            'nombre' => $data['nombre'],
            'apellido' => $data['apellido'],
            'edad' => $data['edad']
        ]);

        return response()->json($usuario, 201);
    }

    public function updateUser($id, Request $request) {
        $usuario = User::find($id);

        if ($usuario) {
            $data = $request->json()->all();

            if(isset($data['nombre'])){
                $usuario->nombre = $data['nombre'];
            }
            if(isset($data['apellido'])){
                $usuario->apellido = $data['apellido'];
            }
            if(isset($data['edad'])){
                $usuario->edad = $data['edad'];
            }
            
            $usuario->save();
                
            return response()->json($usuario, 200);   

        }

        return response()->json(['error' => 'Usuario no encontrado'], 401);
    }

    public function deleteUser($id) {
        $usuario = User::find($id);
        if ($usuario) {
            $usuario->delete();

            return response()->json('Usuario eliminado', 200);
        }

        return response()->json(['error' => 'Usuario no encontrado'], 401);
    }

}
