<?php

namespace App\Http\Controllers\Admin;

use App\Models\Tag;
use App\Models\Video;
use App\Models\Series;
use App\Traits\HasImage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\SeriesStoreRequest;
use App\Http\Requests\SeriesUpdateRequest;

class SeriesController extends Controller
{
    use HasImage;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // series with search and paginate
        $series = Series::with('tags')->search('name')->paginate(10);

        // return view with series
        return view('admin.series.index', compact('series'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // get all tags
        $tags = Tag::get();

        // return view with tags
        return view('admin.series.create', compact('tags'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SeriesStoreRequest $request)
    {
        // get request data from input
        $data = $request->all();

        // create new series
        $series = Auth::user()->series()->create($data);

        $path = 'covers';
        $cover_file_ext = $request->cover->getClientOriginalExtension();
        // $cover_file_name = $request->cover->getClientOriginalName();
        $cover_file_name = $series->id . '.' . $cover_file_ext;
        $cover =  Storage::disk('public')->putFileAs($path, $request->cover, $cover_file_name);
        $series->update([
            'cover' => $cover_file_name
        ]);

        // create series with tags by request
        $series->tags()->sync($request->tags);

        // redirect to series inedex with toastr
        return redirect(route('admin.series.index'))->with('toast_success', 'Series created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Series  $series
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        // get series by slug
        $series = Series::where('slug', $slug)->first();

        // get videos by series order by episode
        $videos = Video::where('series_id', $series->id)->orderBy('episode')->paginate(10);

        // return view
        return view('admin.series.show', compact('series', 'videos'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Series  $series
     * @return \Illuminate\Http\Response
     */
    public function edit($slug)
    {
        // get series by slug
        $series = Series::where('slug', $slug)->first();

        // get all tags
        $tags = Tag::get();

        // return view with series and tags
        return view('admin.series.edit', compact('series', 'tags'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Series  $series
     * @return \Illuminate\Http\Response
     */
    public function update(SeriesUpdateRequest $request, $slug)
    {
        // call method uploadCover from trait hasCover

        // get series by slug
        $series = Series::where('slug', $slug)->first();

        // get request data from input except cover
        $data = $request->except('cover');

        // update series
        $series->update($data);
        // check if user upload new cover
        if ($request->cover) {
            $path = 'covers';

            // delete old cover
            $x = Storage::disk('public')->delete($path . basename($series->cover));

            $cover_file_ext = $request->cover->getClientOriginalExtension();
            $cover_file_name = $series->id . '.' . $cover_file_ext;

            // dd($path . basename($series->cover));
            $cover =  Storage::disk('public')->putFileAs($path, $request->cover, $cover_file_name);
            // update series cover
            $series->update([
                'cover' => $cover_file_name
            ]);
        }
        // dd('stop');

        // update series with tags by request
        $series->tags()->sync($request->tags);

        // redirect to series inedex with toastr
        return redirect(route('admin.series.index'))->with('toast_success', 'Series updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Series  $series
     * @return \Illuminate\Http\Response
     */
    public function destroy(Series $series)
    {
        // delete series with relationship tags
        $series->tags()->detach();

        // delete series by id
        $series->delete();

        // delete series cover by id
        Storage::disk('local')->delete('public/covers/' . basename($series->cover));

        // return redirect back with toastr
        return back()->with('toast_success', 'Series deleted successfully');
    }
}
