<?php

namespace App\Http\Controllers\Member;

use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Models\TransactionDetail;
use App\Http\Controllers\Controller;
use App\Traits\HasSeries;
use App\Models\Series;
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
        // get transaction by user id
        $transaction = Transaction::where('user_id', Auth::id())->verified()->get();

        // if transaction is not empty
        if ($transaction->count() > 0) {
            // get all userSeries, call from method userSeries, trait hasSeries
            $series = $this->userSeries()->count();
        } else {
            // return back with toastr
            $series = 0;
        }

        $products = Series::withCount([
            'transaction as transaction_count' => function ($query) {
                $query->where('user_id', Auth::id());
            },
        ])
            ->withSum(
                ['transaction' => fn ($query) => $query->where('user_id', Auth::id())],
                'grand_total'
            )
            ->paginate(10);

        // withCount([
        //     'transaction as transaction_count' => function ($query) {
        //         $query->whereHas('transaction', function ($query) {
        //             $query->where('user_id', Auth::id());
        //         });
        //         // $query->where('user_id', Auth::id());
        //     },
        // ])
        // $products = Series::where('status', 1)->paginate(10);
        // dd($products);

        return view('member.dashboard', compact('series', 'products'));
    }
}
