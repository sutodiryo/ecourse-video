<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Frontend;
use Illuminate\Http\Request;

class FrontendController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Frontend::where('status', 1)
            ->first();
        return view('admin.frontend', compact('data'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Admin\Frontend  $frontend
     * @return \Illuminate\Http\Response
     */
    public function show(Frontend $frontend)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Admin\Frontend  $frontend
     * @return \Illuminate\Http\Response
     */
    public function edit(Frontend $frontend)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Admin\Frontend  $frontend
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $frontend = Frontend::find($id);

        $data = $request->except('hero_img');

        $frontend->update($data);

        // $series->update($data);
        // $data->update([
        //     'hero_text' => $request->hero_text,
        //     'hero_img' => $request->hero_img,
        // ]);

        return redirect(route('admin.frontend.index'))->with('toast_success', 'Homepage updated successfully ');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Admin\Frontend  $frontend
     * @return \Illuminate\Http\Response
     */
    public function destroy(Frontend $frontend)
    {
        //
    }
}
