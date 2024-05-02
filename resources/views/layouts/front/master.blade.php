<!doctype html>
<html lang="en">

<head>
    <title>@yield('title') - {{ config('app.name', 'M1T') }}</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link
        href="https://fonts.googleapis.com/css?family=PT+Serif:400,400i,700,700ii%7CRoboto:300,300i,400,400i,500,500i,700,700i,900,900i&amp;subset=cyrillic"
        rel="stylesheet">

    <link rel="stylesheet" href="{{ asset('front-assets/css/font-awesome.min.css') }}">
    <link rel="stylesheet" href="{{ asset('front-assets/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('front-assets/css/ion.rangeSlider.css') }}">
    <link rel="stylesheet" href="{{ asset('front-assets/css/ion.rangeSlider.skinFlat.css') }}">
    <link rel="stylesheet" href="{{ asset('front-assets/css/jquery.bxslider.css') }}">
    <link rel="stylesheet" href="{{ asset('front-assets/css/jquery.fancybox.css') }}">
    <link rel="stylesheet" href="{{ asset('front-assets/css/flexslider.css') }}">
    <link rel="stylesheet" href="{{ asset('front-assets/css/swiper.css') }}">
    <link rel="stylesheet" href="{{ asset('front-assets/css/swiper.css') }}">
    <link rel="stylesheet" href="{{ asset('front-assets/css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('front-assets/css/media.css') }}">

    @stack('css')
</head>

<body>
        <!-- Navbar -->
        @include('layouts.front._header')


            <!-- Content -->
            @yield('content')

            <!-- Footer -->
            @include('layouts.front._footer')
            <!-- alert -->
            @include('sweetalert::alert')



    <!-- jQuery plugins/scripts - start -->
    <script src="{{ asset('front-assets/js/jquery-1.11.2.min.js') }}"></script>
    <script src="{{ asset('front-assets/js/jquery.bxslider.min.js') }}"></script>
    <script src="{{ asset('front-assets/js/fancybox/fancybox.js') }}"></script>
    <script src="{{ asset('front-assets/js/fancybox/helpers/jquery.fancybox-thumbs.js') }}"></script>
    <script src="{{ asset('front-assets/js/jquery.flexslider-min.js') }}"></script>
    <script src="{{ asset('front-assets/js/swiper.jquery.min.js') }}"></script>
    <script src="{{ asset('front-assets/js/jquery.waypoints.min.js') }}"></script>
    <script src="{{ asset('front-assets/js/progressbar.min.js') }}"></script>
    <script src="{{ asset('front-assets/js/ion.rangeSlider.min.js') }}"></script>
    <script src="{{ asset('front-assets/js/chosen.jquery.min.js') }}"></script>
    <script src="{{ asset('front-assets/js/jQuery.Brazzers-Carousel.js') }}"></script>
    <script src="{{ asset('front-assets/js/plugins.js') }}"></script>
    <script src="{{ asset('front-assets/js/main.js') }}"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDhAYvx0GmLyN5hlf6Uv_e9pPvUT3YpozE"></script>
    <script src="{{ asset('front-assets/js/gmap.js') }}"></script>
    <!-- jQuery plugins/scripts - end -->
    @stack('js')
</body>

</html>
