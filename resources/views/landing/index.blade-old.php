@extends('layouts.frontend.master')

@section('title', 'Homepage')

@section('hero')
    {{-- @include('layouts.frontend._hero') --}}
@endsection

@section('content')
    {{-- @include('layouts.frontend._arsha') --}}

    <div class="container-xl">

        <section class="p-5 bg-azure">
            <div class="container-xl">
                <div class="text-center text-white">
                    <h1 class="font-bold">
                        Section 1
                    </h1>
                    <h2 class="mt-4"> You guys got lost in the right place, learning to business? start from here !</h2>
                </div>
            </div>
        </section>

        <section class="p-5 bg-blue">
            <div class="container-xl">
                <div class="text-center text-white">
                    <h1 class="font-bold">
                        Section 2
                    </h1>
                    <h2 class="mt-4"> You guys got lost in the right place, learning to business? start from here !</h2>
                </div>
            </div>
        </section>

        <section class="p-5 bg-green">
            <div class="container-xl">
                <div class="text-center text-white">
                    <h1 class="font-bold">
                        Section 3
                    </h1>
                    <h2 class="mt-4"> You guys got lost in the right place, learning to business? start from here !</h2>
                </div>
            </div>
        </section>

        <div class="page-header">
            <div class="row align-items-center">
                <div class="col-auto">
                    <h2 class="page-title font-weight-bold text-uppercase">
                        All New Series
                    </h2>
                </div>
            </div>
        </div>
        <div class="row">
            @foreach ($series as $data)
                <div class="col-12 col-lg-4">
                    <a class="text-dark" href="{{ route('series.show', $data->slug) }}">
                        <div class="card card-stacked">
                            <div class="ribbon bg-primary">New</div>
                            <div class="card-body">
                                <h3 class="card-title">{{ $data->name }}</h3>
                                <p class="text-muted">{{ $data->description }}</p>
                                <div class="d-flex justify-content-between">
                                    <div>
                                        {{ $data->videos->count() }} Episode
                                    </div>
                                    <div>
                                        Rp. {{ number_format($data->price) }}
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="text-dark">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-device-desktop-analytics" width="24"
                                            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <rect x="3" y="4" width="18" height="12" rx="1"></rect>
                                            <path d="M7 20h10"></path>
                                            <path d="M9 16v4"></path>
                                            <path d="M15 16v4"></path>
                                            <path d="M9 12v-4"></path>
                                            <path d="M12 12v-1"></path>
                                            <path d="M15 12v-2"></path>
                                            <path d="M12 12v-1"></path>
                                        </svg>
                                        {{ $data->level }}
                                    </div>
                                    <div class="{{ $data->status == 1 ? 'text-teal' : 'text-danger' }}">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-circle-check" width="24" height="24"
                                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <circle cx="12" cy="12" r="9"></circle>
                                            <path d="M9 12l2 2l4 -4"></path>
                                        </svg>
                                        {{ $data->status == 1 ? 'Released' : 'Coming Soon' }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            @endforeach
            <div class="col-12">
                <div class="d-flex justify-content-center">
                    <x-button.button-link title="See More Series" url="{{ route('series.index') }}" icon="bars"
                        class="btn btn-dark" />
                </div>
            </div>
        </div>
    </div>
@endsection
