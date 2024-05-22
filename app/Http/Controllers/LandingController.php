<?php

namespace App\Http\Controllers;

use App\Models\Series;
use App\Models\Frontend;
use Carbon\CarbonImmutable;
use Illuminate\Http\Request;

class LandingController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, Series $series)
    {
        $data = Frontend::where('status', 1)->first();
        // get all series
        $series = Series::with('videos')->orderBy('created_at', 'asc')->take(4)->get();

        // return to landing page
        return view('landing.index', compact('series', 'data'));
    }
}
