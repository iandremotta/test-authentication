<?php

namespace App\Http\Controllers;

use App\Http\Requests\ChangePasswordRequest;
use App\Models\User;
use Illuminate\Http\Client\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class UpdateController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        $userEmail = auth()->user()->email;
        return User::where('email', $userEmail)->get();
    }
   
    public function password(ChangePasswordRequest $request)
    {
        // $userEmail = auth()->user()->email;
        // User::where('email', $userEmail)->update(['password' => bcrypt($request->password)]);
        $user = User::whereEmail(auth()->user()->email)->first();
        $user->update(['password' => $request->password]);
        return response()->json(['data'=> 'Senha alterada com sucesso'], Response::HTTP_OK);
    }

    
}
