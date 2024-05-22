<!doctype html>
<html lang="en">

<head>
    <title>@yield('title') - {{ config('app.name', 'MBC') }}</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="shortcut icon" href="{{ asset('front-end/img/favicons/favicon.ico') }}">
    <link rel="apple-touch-icon" sizes="120x120" href="{{ asset('front-end/img/favicons/favicon-120.png') }}">
    <link rel="apple-touch-icon" sizes="152x152" href="{{ asset('front-end/img/favicons/favicon-152.png') }}"><!-- Mobile Specific Metas
 ================================================== -->
    <meta name="viewport" content="width=device-width,initial-scale=1"><!-- Google Web Fonts
 ================================================== -->
    <link href="https://fonts.googleapis.com/css?family=Rajdhani:300,400,500,600,700" rel="stylesheet"><!-- CSS
 ================================================== --><!-- Vendor CSS -->
    <link href="{{ asset('front-end/vendor/magnific-popup/css/magnific-popup.css" rel="stylesheet') }}">
    <link href="{{ asset('front-end/vendor/slick/css/slick.css" rel="stylesheet') }}">
    <link href="{{ asset('front-end/vendor/nanoscroller/css/nanoscroller.css" rel="stylesheet') }}">
    <link href="{{ asset('front-end/vendor/fontawesome/css/brands.css" rel="stylesheet') }}"><!-- Template CSS-->
    <link href="{{ asset('front-end/css/style.css" rel="stylesheet') }}"><!-- Custom CSS-->
    <link href="{{ asset('front-end/css/custom.css" rel="stylesheet') }}">

    @stack('css')
</head>

<body class="site-layout--horizontal preloader-is--active">
    <div class="site-wrapper">
        <!-- Navbar -->
        @include('layouts.front-end._header')

        <!-- Content -->
        @yield('content')

        <!-- Footer -->
        @include('layouts.front-end._footer')
        <!-- alert -->
        @include('sweetalert::alert')
    </div>


    <script src="{{ asset('front-end/vendor/jquery/jquery.min.js') }}"></script>
    <script src="{{ asset('front-end/vendor/jquery/jquery-migrate.min.js') }}"></script>
    <script src="{{ asset('front-end/vendor/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('front-end/js/core.js') }}"></script><!-- Vendor JS --><!-- Template JS -->
    <script src="{{ asset('front-end/js/init.js') }}"></script>
    <script src="{{ asset('front-end/js/custom.js') }}"></script><!-- Duotone SVG color filter -->
    <svg xmlns="http://www.w3.org/2000/svg" class="svg-filters">
        <filter id="duotone_base">
            <feColorMatrix type="matrix" result="grayscale"
                values="1 0 0 0 0
                                        1 0 0 0 0
                                        1 0 0 0 0
                                        0 0 0 1 0" />
            <feComponentTransfer color-interpolation-filters="sRGB" result="duotone_base_filter">
                <feFuncR type="table" tableValues="0.082352941176471 0.419607843137255"></feFuncR>
                <feFuncG type="table" tableValues="0.090196078431373 0.443137254901961"></feFuncG>
                <feFuncB type="table" tableValues="0.125490196078431 0.6"></feFuncB>
                <feFuncA type="table" tableValues="0 1"></feFuncA>
            </feComponentTransfer>
        </filter>
    </svg>

    @stack('js')
</body>

</html>
