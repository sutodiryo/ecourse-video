<?php

namespace App\Http\Controllers\Admin;

use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\TransactionDetail;
use Illuminate\Support\Facades\Auth;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // get all transactions
        $transactions = Transaction::with('details')->search('status')->latest()->paginate(10);
        // return view
        return view('admin.transaction.index', compact('transactions'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Transaction $transaction)
    {
        // update transaction
        $transaction->update([
            'status' => 1
        ]);

        // return back with toastr
        return back()->with('toast_success', 'Transaction has been verified');
    }


    public function show($invoice)
    {
        // get user logged in
        $user = Auth::id();

        // get transaction by user id and invoice
        $transaction = Transaction::with('user')->where('invoice', $invoice)->first();

        // get all transaction detail by transaction id
        $transactionDetails = TransactionDetail::where('transaction_id', $transaction->id)->get();

        // sum grand total from transaction detail
        $grandTotal = $transactionDetails->sum('grand_total');

        // return to view
        return view('member.transaction.show', compact('transaction', 'transactionDetails', 'grandTotal'));
    }
}
