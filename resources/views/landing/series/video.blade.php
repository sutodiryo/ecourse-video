@extends('layouts.frontend.master')

@section('title')
    {{ $series->name }}
@endsection

@section('content')
    <div class="container-xl">
        <div class="row">
            <div class="col-12">
                <x-card.card title="Eps {{ $video->episode }} : {{ $video->name }}">
                    <div class="embed-responsive embed-responsive-16by9">
                        {{-- <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/{{ $video->video_code }}"
                            frameborder="0" allowfullscreen>
                        </iframe> --}}
                        <iframe
                            src="https://www.youtube-nocookie.com/embed/{{ $video->video_code }}?rel=0&iv_load_policy=3&fs=0&color=white&controls=0&disablekb=1"
                            title="Eps {{ $video->episode }} : {{ $video->name }}" frameborder="0">
                        </iframe>
                    </div>
                </x-card.card>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <x-card.card title="Episode - {{ $video->episode }} {{ $video->name }}">
                        <div class="list-group list-group-flush">
                            @foreach ($videos as $data)
                                <a href="{{ route('series.video', [$series->slug, $data->episode]) }}"
                                    class="list-group-item list-group-item-action {{ request()->segment(3) == $data->episode ? 'active' : '' }}"
                                    aria-current="true">
                                    Eps - {{ $data->episode }} {{ $data->name }}
                                    <span class="badge bg-{{ $data->intro == 1 ? 'azure' : 'red' }} ml-1">
                                        {{ $data->intro == 1 ? 'free' : 'pro' }}
                                    </span>
                                </a>

                                <div class="accordion mt-3" id="accordion-{{ $data->video_code }}">
                                    {{-- <div class="row">
                                        <div class="col-sm-9"> --}}
                                            <x-form.input type="text" title="" name="comment" value=""
                                                placeholder="Add a comment..." />
                                        {{-- </div>
                                        <div class="col-sm-3">
                                            <x-button.button-save title="Comment" icon="comment" class="btn btn-primary" />
                                        </div>
                                    </div> --}}
                                    <div class="card">
                                        <div class="card-header" id="headingOne">
                                            <h2 class="mb-0">
                                                <button class="btn btn-link btn-block text-left" type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapse-{{ $data->video_code }}One" aria-expanded="true"
                                                    aria-controls="collapse-{{ $data->video_code }}One">
                                                    Contoh komentar {{ $data->video_code }}
                                                </button>
                                            </h2>
                                        </div>

                                        <div id="collapse-{{ $data->video_code }}One" class="collapse"
                                            aria-labelledby="headingOne" data-parent="#accordion-{{ $data->video_code }}">
                                            <div class="card-body">
                                                Contoh reply comment{{ $data->video_code }} 1
                                                <br>
                                                Contoh reply comment{{ $data->video_code }} 2
                                            </div>
                                        </div>
                                    </div>
                                    {{-- <div class="card">
                                        <div class="card-header" id="headingTwo">
                                            <h2 class="mb-0">
                                                <button class="btn btn-link btn-block text-left collapsed" type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapse-{{ $data->video_code }}Two"
                                                    aria-expanded="false"
                                                    aria-controls="collapse-{{ $data->video_code }}Two">
                                                    Collapsible Group Item #2
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapse-{{ $data->video_code }}Two" class="collapse"
                                            aria-labelledby="headingTwo" data-parent="#accordion-{{ $data->video_code }}">
                                            <div class="card-body">
                                                Some placeholder content for the second accordion panel. This panel is
                                                hidden by default.
                                            </div>
                                        </div>
                                    </div> --}}
                                    {{-- <div class="card">
                                        <div class="card-header" id="headingThree">
                                            <h2 class="mb-0">
                                                <button class="btn btn-link btn-block text-left collapsed" type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapse-{{ $data->video_code }}Three"
                                                    aria-expanded="false"
                                                    aria-controls="collapse-{{ $data->video_code }}Three">
                                                    Collapsible Group Item #3
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapse-{{ $data->video_code }}Three" class="collapse"
                                            aria-labelledby="headingThree"
                                            data-parent="#accordion-{{ $data->video_code }}">
                                            <div class="card-body">
                                                And lastly, the placeholder content for the third and final accordion panel.
                                                This panel is hidden by default.
                                            </div>
                                        </div>
                                    </div> --}}
                                </div>
                                <hr>
                            @endforeach
                        </div>
                    </x-card.card>
                </div>
                <div class="col-md-6">
                    <div class="card rounded-lg">
                        <div class="card-body">
                            <h3 class="card-title">{{ $series->name }}</h3>
                            @foreach ($series->tags as $tag)
                                <span class="badge bg-{{ $tag->color }}">{{ $tag->name }}</span>
                            @endforeach
                            <p class="text-muted">{!! $series->description !!}</p>
                            <p class="text-muted">{{ $series->videos->count() }} Episodes </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
