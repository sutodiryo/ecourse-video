<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // get all users with roles, search and paginate
        $users = User::with('roles')
            // ->whereNot('email', 'admin@gmail.com')
            ->when(request()->q, function ($search) {
                $search = $search->where('name', 'like', '%' . request()->q . '%');
            })
            ->paginate(10);

        // get all roles
        $roles = Role::get();

        // return view
        return view('admin.user.index', compact('users', 'roles'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        // update roles for user
        // $user->syncRoles($request->role);

        DB::beginTransaction();
        $data = $request->except('role');

        if ($user->uu_id) {
            $user->update($data);
        } else {
            $data['uu_id'] = Str::orderedUuid();
            $user->update($data);
        }

        if ($request->reset_password) {
            $data['password'] = Hash::make(123123123);
            $user->update($data);
        }
        // dd($data);
        // dd('stop');
        DB::commit();
        // return back with toastr
        return back()->with('toast_success', 'User data updated successfully');
    }
}
