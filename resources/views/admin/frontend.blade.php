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

                        <hr>

                        <x-form.input type="text" title="How to join Title" name="section_4_title"
                            value="{{ $data->section_4_title }}" placeholder="" />

                        <div class="row">
                            <div class="col-md-6">
                                <x-form.input type="text" title="How to join 1 Title" name="section_4_1_title"
                                    value="{{ $data->section_4_1_title }}" placeholder="" />

                                <x-form.tinymce title="How to join 1 Text" placeholder="How to join 1 text"
                                    name="section_4_1_text">{!! $data->section_4_1_text !!}</x-form.tinymce>
                            </div>
                            <div class="col-md-6">
                                <x-form.input type="text" title="How to join 2 Title" name="section_4_2_title"
                                    value="{{ $data->section_4_2_title }}" placeholder="" />

                                <x-form.tinymce title="How to join 2 Text" placeholder="How to join 2 text"
                                    name="section_4_2_text">{!! $data->section_4_2_text !!}</x-form.tinymce>
                            </div>
                            <div class="col-md-6">
                                <x-form.input type="text" title="How to join 3 Title" name="section_4_3_title"
                                    value="{{ $data->section_4_3_title }}" placeholder="" />

                                <x-form.tinymce title="How to join 3 Text" placeholder="How to join 3 text"
                                    name="section_4_3_text">{!! $data->section_4_3_text !!}</x-form.tinymce>
                            </div>
                            <div class="col-md-6">
                                <x-form.input type="text" title="How to join 4 Title" name="section_4_4_title"
                                    value="{{ $data->section_4_4_title }}" placeholder="" />

                                <x-form.tinymce title="How to join 4 Text" placeholder="How to join 4 text"
                                    name="section_4_4_text">{!! $data->section_4_4_text !!}</x-form.tinymce>
                            </div>
                            <div class="col-md-6">
                                <x-form.input type="text" title="How to join 5 Title" name="section_4_5_title"
                                    value="{{ $data->section_4_5_title }}" placeholder="" />

                                <x-form.tinymce title="How to join 5 Text" placeholder="How to join 5 text"
                                    name="section_4_5_text">{!! $data->section_4_5_text !!}</x-form.tinymce>
                            </div>
                        </div>

                        <hr>

                        <x-form.input type="text" title="CTA Title" name="section_5_title"
                            value="{{ $data->section_5_title }}" placeholder="" />

                        <x-form.tinymce title="CTA Text" placeholder="Input CTA text"
                            name="section_5_text">{!! $data->section_5_text !!}</x-form.tinymce>

                        <hr>

                        <x-form.input type="text" title="Series Title" name="section_6_title"
                            value="{{ $data->section_6_title }}" placeholder="" />

                        <hr>

                        <x-form.input type="text" title="Testimoni Title" name="section_7_title"
                            value="{{ $data->section_7_title }}" placeholder="" />

                        <hr>

                        <x-form.input type="text" title="FAQ Title" name="section_8_title"
                            value="{{ $data->section_8_title }}" placeholder="" />

                        <div class="row">
                            <div class="col-md-6">
                                <x-form.input type="text" title="FAQ 1 Title" name="section_8_1_title"
                                    value="{{ $data->section_8_1_title }}" placeholder="" />

                                <x-form.tinymce title="FAQ 1 Text" placeholder="FAQ 1 text"
                                    name="section_8_1_text">{!! $data->section_8_1_text !!}</x-form.tinymce>
                            </div>
                            <div class="col-md-6">
                                <x-form.input type="text" title="FAQ 2 Title" name="section_8_2_title"
                                    value="{{ $data->section_8_2_title }}" placeholder="" />

                                <x-form.tinymce title="FAQ 2 Text" placeholder="FAQ 2 text"
                                    name="section_8_2_text">{!! $data->section_8_2_text !!}</x-form.tinymce>
                            </div>
                            <div class="col-md-6">
                                <x-form.input type="text" title="FAQ 3 Title" name="section_8_3_title"
                                    value="{{ $data->section_8_3_title }}" placeholder="" />

                                <x-form.tinymce title="FAQ 3 Text" placeholder="FAQ 3 text"
                                    name="section_8_3_text">{!! $data->section_8_3_text !!}</x-form.tinymce>
                            </div>
                            <div class="col-md-6">
                                <x-form.input type="text" title="FAQ 4 Title" name="section_8_4_title"
                                    value="{{ $data->section_8_4_title }}" placeholder="" />

                                <x-form.tinymce title="FAQ 4 Text" placeholder="FAQ 4 text"
                                    name="section_8_4_text">{!! $data->section_8_4_text !!}</x-form.tinymce>
                            </div>
                        </div>

                        <hr>

                        <div class="row">
                            <div class="col-md-6">
                                <x-form.input type="text" title="Footer 1 Title" name="footer_1_title"
                                    value="{{ $data->footer_1_title }}" placeholder="" />

                                <x-form.tinymce title="Footer 1 Text" placeholder="Footer 1 text"
                                    name="footer_1_text">{!! $data->footer_1_text !!}</x-form.tinymce>
                            </div>

                            <div class="col-md-6">
                                <x-form.input type="text" title="Footer 2 Title" name="footer_2_title"
                                    value="{{ $data->footer_2_title }}" placeholder="" />

                                <x-form.tinymce title="Footer 2.1 Text" placeholder="Footer 2.1 text"
                                    name="footer_2_1_text">{!! $data->footer_2_1_text !!}</x-form.tinymce>

                                <x-form.tinymce title="Footer 2.2 Text" placeholder="Footer 2.2 text"
                                    name="footer_2_2_text">{!! $data->footer_2_2_text !!}</x-form.tinymce>
                            </div>

                            <div class="col-md-6">
                                <x-form.input type="text" title="Footer 3 Title" name="footer_3_title"
                                    value="{{ $data->footer_3_title }}" placeholder="" />
                                <x-form.input type="text" title="Akun Facebook" name="footer_3_1_text"
                                    value="{{ $data->footer_3_1_text }}" placeholder="facebook.com/..." />
                                <x-form.input type="text" title="Akun Instagram" name="footer_3_2_text"
                                    value="{{ $data->footer_3_2_text }}" placeholder="instagram.com/..." />
                                <x-form.input type="text" title="Nomor wa (pake 62)" name="footer_3_3_text"
                                    value="{{ $data->footer_3_3_text }}" placeholder="wa.me/..." />
                                <x-form.input type="text" title="Email" name="footer_3_4_text"
                                    value="{{ $data->footer_3_4_text }}" placeholder="email" />
                            </div>

                            <div class="col-md-6">
                                <x-form.tinymce title="Copyright" placeholder="Copyright text"
                                    name="footer_copyright">{!! $data->footer_copyright !!}</x-form.tinymce>
                            </div>
                        </div>

                        <x-button.button-save title="Save" icon="save" class="btn btn-primary" />
                    </form>
                </x-card.card>
            </div>
        </div>
    </div>

@endsection
