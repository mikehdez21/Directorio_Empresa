<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth; // Import Auth Facade
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // Validation
        $response = ["success" => false];

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            $response = ["error" => $validator->errors()];
            return response()->json($response, 200);
        }

        $input = $request->all();
        $input["password"] = bcrypt($input['password']);

        $user = User::create($input);
        $user->assignRole('cliente');
        $response["success"] = true;

        return response()->json($response, 200);
    }

    public function login(Request $request)
    {
        $response = ["success" => false];

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            $response = ["error" => $validator->errors()];
            return response()->json($response, 200);
        }

        // Use Auth facade instead of auth() helper
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            $request->user()->hasRole('cliente');
            $response['token'] = $request->user()->createToken("Mike")->plainTextToken;
            $response['user'] = $user;
            $response['message'] = 'Login Exitoso!';
            $response['success'] = true;
        }

        return response()->json($response, 200);
    }

    public function logout(Request $request)
    {
        $response = ["success" => false];
        $user = Auth::user();


        if ($user) {
            // Delete all tokens for the authenticated user
            $request->user()->tokens()->delete();

            $response = [
                "success" => true,
                "message" => "Session closed."
            ];
        } else {
            $response['error'] = 'No authenticated user found.';
        }

        return response()->json($response, 200);
    }
}
