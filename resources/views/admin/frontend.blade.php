@extends('layouts.backend.master')

@section('title', 'Dashboard')

@section('content')

    <div class="container-xl">
        <div class="row">
            <div class="col-12">
                <x-card.card title="Update Homepage">
                    <form action="{{ route('admin.frontend.update', [$data->id]) }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')

                        <x-form.tinymce title="Hero Text" placeholder="Input hero text" name="hero_text">{!! $data->hero_text !!}</x-form.tinymce>

                        <img src="{{ $data->hero_img }}" alt="{{ $data->hero_img }}" class="img-fluid mb-3 " width="20%" />
                        <x-form.input type="file" title="Hero Image" name="hero_img" value="{{ $data->hero_img }}"
                            placeholder="" />

                        <x-button.button-save title="Save" icon="save" class="btn btn-primary" />
                        {{-- <x-button.button-link class="btn btn-dark text-white" title="Go Back" icon="arrow-left"
                            url="{{ route('admin.series.index') }}">
                        </x-button.button-link> --}}
                    </form>
                </x-card.card>
            </div>
        </div>
    </div>



@endsection
