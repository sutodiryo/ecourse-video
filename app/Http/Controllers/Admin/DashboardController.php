<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use App\Models\Series;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Models\TransactionDetail;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Traits\HasSeries;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    use HasSeries;
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        // count all transactions where status false
        $transactionVerified = Transaction::where('status', false)->count();
        // count all users where role is member
        $members = User::with('roles')->role('member')->count();
        // count all series
        $series = Series::count();

        $affilates = User::whereHas('affiliate')->count();
        // sum all transaction
        $income = TransactionDetail::whereHas('transaction', function ($q) {
            $q->where('status', 1);
        })->sum('grand_total');

        $expense = 0;
        $profits = $income - $expense;
        // call method bestSeries from Trait HasSeries
        $bestSeries = $this->bestSeries();

        // return view
        return view('admin.dashboard', compact('transactionVerified', 'members', 'series', 'affilates', 'income', 'bestSeries'));
    }
}
