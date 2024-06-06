<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class AffiliateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // get all users with affilates stats, search and paginate
        $users = User::withCount([
            'transaction as transaction_count' => function ($query) {
                $query->where('user_id');
            },
        ])
            ->withSum('affiliate', 'grand_total')
            ->whereNot('name', 'Administrator')
            ->when(request()->q, function ($search) {
                $search = $search->where('name', 'like', '%' . request()->q . '%')
                    ->orWhere('email', 'like', '%' . request()->q . '%');
            })
            // ->orderByRaw('SUM(points) DESC')
            // ->when(request()->q, function ($search) {
            //     $search = $search->where('name', 'like', '%' . request()->q . '%')
            //         ->orWhere('email', 'like', '%' . request()->q . '%');
            // })

            ->orderBy('affiliate_sum_grand_total', 'DESC')
            ->orderBy('name', 'ASC')
            ->paginate(10);

        // return view
        return view('admin.affiliate.index', compact('users'));
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
