<?php

namespace App\Http\Controllers\Api\Admin;

use App\Models\Categoria;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoriaController extends Controller
{
    public function index()
    {
        $data = Categoria::orderBy("orden")->get(["id", "orden", "nombre"]);
        return response()->json($data, 200);
    }

    public function store(Request $request)
    {
        // Validaciones

        $data = new Categoria($request->all());

        // Upload Image base64
        if ($request->urlfoto) {
            $img = $request->urlfoto;
            // Process
            $folderPath = "/img/categoria/";
            $image_parts = explode(";base64,", $img);
            $image_type_aux = explode("image/", $image_parts[0]);
            $image_type = $image_type_aux[1];
            $image_base64 = base64_decode($image_parts[1]);
            $file = $folderPath . Str::slug($request->nombre) . '.' . $image_type;
            file_put_contents(public_path($file), $image_base64);

            $data->urlfoto = Str::slug($request->nombre) . '.' . $image_type;
        }
        $data->slug = Str::slug($request->nombre);

        $data->save();

        return response()->json($data, 200);
    }

    public function show($id)
    {
        $data = Categoria::find($id);

        return response()->json($data, 200);
    }

    public function update(Request $request, $id)
    {
        // Validaciones

        $data = Categoria::find($id);
        //$data->fill($request->all());
        $data->nombre = $request->nombre;
        $data->descripcion = $request->descripcion;
        $data->orden = $request->orden;
        $data->slug = Str::slug($request->nombre);
        $data->menu = $request->menu ? 1 : 0;

        // Upload Image base64
        if ($request->file) {
            $img = $request->file;
            // Process
            $folderPath = "/img/categoria/";
            $image_parts = explode(";base64,", $img);
            $image_type_aux = explode("image/", $image_parts[0]);
            $image_type = $image_type_aux[1];
            $image_base64 = base64_decode($image_parts[1]);
            $file = $folderPath . Str::slug($request->nombre) . '.' . $image_type;
            file_put_contents(public_path($file), $image_base64);

            $data->urlfoto = Str::slug($request->nombre) . '.' . $image_type;
        }

        $data->save();

        return response()->json($data, 200);
    }

    public function destroy($id)
    {
        $data = Categoria::find($id);
        $data->delete();

        return response()->json("Categoria Eliminada!", 200);
    }
}
