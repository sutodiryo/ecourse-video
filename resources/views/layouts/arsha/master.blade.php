<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title>@yield('title') - {{ config('app.name', 'Laravel') }}</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <!-- Favicons -->
    <link href="{{ asset('static/mbc-favicon.ico') }}" rel="icon">
    <link href="{{ asset('static/mbc-favicon.ico') }}" rel="apple-touch-icon">

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com" rel="preconnect">
    <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="{{ asset('arsha-assets/vendor/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('arsha-assets/vendor/bootstrap-icons/bootstrap-icons.css') }}" rel="stylesheet">
    <link href="{{ asset('arsha-assets/vendor/aos/aos.css" rel="stylesheet') }}">
    <link href="{{ asset('arsha-assets/vendor/glightbox/css/glightbox.min.css') }}" rel="stylesheet">
    <link href="{{ asset('arsha-assets/vendor/swiper/swiper-bundle.min.css') }}" rel="stylesheet">

    <!-- Main CSS File -->
    <link href="{{ asset('arsha-assets/css/main.css') }}" rel="stylesheet">

    @stack('css')
</head>

<body class="index-page">
    <!-- Navbar -->
    @include('layouts.arsha._header')

    <!-- Content -->
    @yield('content')

    <!-- Footer -->
    @include('layouts.arsha._footer')
    <!-- alert -->
    @include('sweetalert::alert')


    <!-- Vendor JS Files -->
    <script src="{{ asset('arsha-assets/vendor/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('arsha-assets/vendor/php-email-form/validate.js') }}"></script>
    <script src="{{ asset('arsha-assets/vendor/aos/aos.js') }}"></script>
    <script src="{{ asset('arsha-assets/vendor/glightbox/js/glightbox.min.js') }}"></script>
    <script src="{{ asset('arsha-assets/vendor/swiper/swiper-bundle.min.js') }}"></script>
    <script src="{{ asset('arsha-assets/vendor/waypoints/noframework.waypoints.js') }}"></script>
    <script src="{{ asset('arsha-assets/vendor/imagesloaded/imagesloaded.pkgd.min.js') }}"></script>
    <script src="{{ asset('arsha-assets/vendor/isotope-layout/isotope.pkgd.min.js') }}"></script>

    <!-- Main JS File -->
    <script src="{{ asset('arsha-assets/js/main.js') }}"></script>
    <!-- jQuery plugins/scripts - end -->
    @stack('js')
</body>

</html>
