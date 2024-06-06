<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use DB;
use App\Traits\HasSeries;
use App\Models\Series;
use Illuminate\Support\Facades\Hash;
use App\Models\Transaction;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Validator;

class TransactionController extends Controller
{
    use HasSeries, RegistersUsers;

    protected $redirectTo = 'account\dashboard';

    public function __construct()
    {
        $this->middleware('guest');
    }

    public function store(Request $request)
    {
        // define variables
        $length = 10;
        $random = '';
        // do loop until $i have 10 character
        for ($i = 0; $i < $length; $i++) {
            // get random character from string and number
            $random .= rand(0, 1) ? rand(0, 9) : chr(rand(ord('a'), ord('z')));
        }
        // get invoice code
        $invoice = 'INV-' . Str::upper($random);

        // create new transaction
        $transaction = Transaction::create([
            'invoice' => $invoice,
            'name_of_bank' => $request->name_of_bank,
            'user_id' => Auth::id(),
            'bank_transfer' => $request->bank_transfer,
            'method_of_payment' => $request->method_of_payment,
            'date_transfer' => $request->date_transfer,
            'status' => false,
        ]);

        // get cart by user
        $carts = Cart::where('user_id', Auth::id())->get();

        // looping carts
        foreach ($carts as $cart) {
            // create new transaction detail
            $transaction->details()->create([
                'transaction_id' => $transaction->id,
                'series_id' => $cart->series_id,
                'grand_total' => $cart->price,
            ]);
        }

        // delete all cart by user
        Cart::where('user_id', Auth::id())->delete();

        // return to landing page
        return redirect(route('landing'))->with('success', 'Thank you for your purchase!');
    }

    public function store_affiliates(Request $request)
    {
        if (!$request->name_of_bank) {
            return Redirect::back()->with(['toast_error' => 'Nama Lengkap Rekening Bank tidak boleh kosong']);
        }

        $affilate_id = $request->id;
        $series_id = $request->sid;
        $series = Series::find($series_id);
        $invoice = $this->generate_inv_number();

        // Check user email
        $affiliate = User::where('uu_id', $affilate_id)->first();
        $user = User::where('email', $request->email);

        if ($user->count()) {

            // get transaction by user id
            $transaction = Transaction::with('details')->where('user_id', $user->first()->id)->where('status', 1)
                ->whereHas('details', function ($query) use ($series) {
                    $query->where('series_id', $series->id);
                })->get();

            // define variable $purchased
            $purchased = null;

            // if transaction is not empty
            if ($transaction->count() > 0) {
                // get all userSeries, call from method userSeries, trait hasSeries
                // $purchased = $this->userSeries($user->first()->id)->get();
                return redirect(route('login'))->with('toast_success', 'Email yang anda masukkan sudah terdaftar & memiliki lisensi untuk series terkait. Untuk mengakses series, silakan login terlebih dahulu');
            } else {
                return redirect(route('login'))->with('toast_success', 'Email yang anda masukkan sudah terdaftar, silakan login terlebih dahulu & melanjutkan transaksi');
            }

            dd($transaction->count());
        } else {
            DB::beginTransaction();
            // Create new User
            $role = Role::where('name', 'member')->first();
            $user = User::create([
                'uu_id' => Str::orderedUuid(),
                'name' => $request->name_of_bank,
                'email' => $request->email,
                'password' => Hash::make(123123123),
            ]);
            $user->assignRole($role);

            // create new transaction
            $transaction = Transaction::create([
                'invoice' => $invoice,
                'name_of_bank' => $request->name_of_bank,
                'bank_transfer' => $request->bank_transfer,
                'method_of_payment' => $request->method_of_payment,
                'date_transfer' => $request->date_transfer,
                'status' => false,
            ]);

            // create new transaction detail
            $transaction->details()->create([
                'transaction_id' => $transaction->id,
                'user_id' => $affiliate->id,
                'series_id' => $series_id,
                'grand_total' => $series->price,
            ]);
            // dd($transaction->details);

            DB::commit();

            // return to landing page
            return redirect(route('landing'))->with('success', 'Thank you for your purchase! <br> sss');
        }
    }

    public function generate_inv_number()
    {
        // define variables
        $length = 10;
        $random = '';
        // do loop until $i have 10 character
        for ($i = 0; $i < $length; $i++) {
            // get random character from string and number
            $random .= rand(0, 1) ? rand(0, 9) : chr(rand(ord('a'), ord('z')));
        }
        // get invoice code
        return 'INV-' . Str::upper($random);
    }
}
