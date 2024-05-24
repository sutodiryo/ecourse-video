@extends('layouts.backend.master')

@section('title', 'Dashboard')

@section('content')

    <div class="container-xl">
        <div class="row">
            <div class="col-12">
                <x-card.card title="Update Homepage">
                    <form action="{{ route('admin.frontend.update', [$data->id]) }}" method="POST"
                        enctype="multipart/form-data">
                        @csrf
                        @method('PUT')

                        <x-form.tinymce title="Hero Text" placeholder="Input hero text"
                            name="hero_text">{!! $data->hero_text !!}</x-form.tinymce>

                        <img src="{{ $data->hero_img }}" alt="{{ $data->hero_img }}" class="img-fluid mb-3 "
                            width="20%" />

                        <x-form.input type="file" title="Hero Image" name="hero_img" value="{{ $data->hero_img }}"
                            placeholder="" />

                        <hr>

                        <x-form.input type="text" title="About Title" name="section_2_title"
                            value="{{ $data->section_2_title }}" placeholder="" />

                        <x-form.tinymce title="About Text" placeholder="Input about text"
                            name="section_2_text">{!! $data->section_2_text !!}</x-form.tinymce>

                        <hr>

                        <x-form.input type="text" title="Services Title" name="section_3_title"
                            value="{{ $data->section_3_title }}" placeholder="" />

                        <div class="row">
                            <div class="col-md-6">
                                <x-form.input type="text" title="Services 1 Title" name="section_3_1_title"
                                    value="{{ $data->section_3_1_title }}" placeholder="" />

                                <x-form.tinymce title="Services 1 Text" placeholder="Services 1 text"
                                    name="section_3_1_text">{!! $data->section_3_1_text !!}</x-form.tinymce>
                            </div>
                            <div class="col-md-6">
                                <x-form.input type="text" title="Services 2 Title" name="section_3_2_title"
                                    value="{{ $data->section_3_2_title }}" placeholder="" />

                                <x-form.tinymce title="Services 2 Text" placeholder="Services 2 text"
                                    name="section_3_2_text">{!! $data->section_3_2_text !!}</x-form.tinymce>
                            </div>
                            <div class="col-md-6">
                                <x-form.input type="text" title="Services 3 Title" name="section_3_3_title"
                                    value="{{ $data->section_3_3_title }}" placeholder="" />

                                <x-form.tinymce title="Services 3 Text" placeholder="Services 3 text"
                                    name="section_3_3_text">{!! $data->section_3_3_text !!}</x-form.tinymce>
                            </div>
                            <div class="col-md-6">
                                <x-form.input type="text" title="Services 4 Title" name="section_3_4_title"
                                    value="{{ $data->section_3_4_title }}" placeholder="" />

                                <x-form.tinymce title="Services 4 Text" placeholder="Services 4 text"
                                    name="section_3_4_text">{!! $data->section_3_4_text !!}</x-form.tinymce>
                            </div>
                        </div>

                        <x-button.button-save title="Save" icon="save" class="btn btn-primary" />
                    </form>
                </x-card.card>
            </div>
        </div>
    </div>



@endsection
