@extends('layouts.frontend.master')

@section('title')
    {{ $series->status }}
@endsection

@section('content')
    <div class="container-xl">
        <div class="row">
            <div class="col-12 col-lg-12">
                <x-card.card-description>
                    <div class="row">
                        <div class="col-md-5 mb-4">
                            <img src="{{ $series->cover }}" class="img-fluid" />
                        </div>
                        <div class="col-md-7">
                            <div class="ribbon bg-red">
                                <s>Rp. {{ number_format($series->price_x) }}</s>
                                <br>
                                Rp. {{ number_format($series->price) }}
                            </div>
                            <h3 class="card-title">{{ $series->name }}</h3>
                            <p class="card-text">{!! $series->description !!}</p>
                            <x-utilities.item date="{{ $series->created_at->format('d F Y') }}"
                                episode="{{ $series->videos->count() }} Episode" members="{{ $members }} Members" />
                            <div class="mt-2">
                                @if ($purchased)
                                    <div class="alert alert-success" role="alert">
                                        <i class="fas fa-user-check mr-1"></i>
                                        Licensed to : {{ Auth::user()->name }} ({{ Auth::user()->email }}) —
                                        {{ Carbon\Carbon::parse($transaction[0]->date_transfer)->format('d F Y') }}
                                    </div>
                                @else
                                    @if ($series->status == 1)
                                        <form action="{{ route('carts.store', $series->slug) }}" method="POST">
                                            @csrf
                                            <x-button.button-save icon="shopping-cart" title="Buy Now"
                                                class="btn btn-lg btn-block btn-outline-primary" />
                                        </form>
                                        @else

                                        <x-button.button-save icon="shopping-cart" title="Coming Soon"
                                        class="btn btn-lg btn-block btn-outline-primary" disabled />
                                    @endif
                                @endif
                            </div>
                        </div>
                    </div>
                </x-card.card-description>
            </div>
            <div class="col-12">
                <x-card.card title="List Videos - {{ $series->name }}">
                    <div class="list-group list-group-flush">
                        @foreach ($videos as $video)
                            <a href="{{ route('series.video', [$series->slug, $video->episode]) }}"
                                class="list-group-item list-group-item-action" aria-current="true">
                                Eps - {{ $video->episode }} {{ $video->name }}
                                <span class="badge bg-{{ $video->intro == 1 ? 'azure' : 'red' }} ml-1">
                                    {{ $video->intro == 1 ? 'free' : 'pro' }}
                                </span>
                            </a>
                        @endforeach
                    </div>
                </x-card.card>
            </div>
        </div>
    </div>
@endsection
