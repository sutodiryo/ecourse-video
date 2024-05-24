<header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl position-relative d-flex align-items-center">

        <a href="{{ route('landing') }}" class="logo d-flex align-items-center me-auto">
            <!-- Uncomment the line below if you also wish to use an image logo -->
            <img src="{{ asset('arsha-assets/img/mbc-logo.png') }}" alt="">
            {{-- <h1 class="sitename">MBC</h1> --}}
        </a>

        <nav id="navmenu" class="navmenu">
            <ul>
                <li><a href="#hero" class="">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#join">How to Join?</a></li>
                {{-- <li><a href="#portfolio">Portfolio</a></li> --}}
                {{-- <li><a href="#team">Team</a></li> --}}
                <li><a href="#series">Series</a></li>
                {{-- <li class="dropdown"><a href="#"><span>Dropdown</span> <i
                            class="bi bi-chevron-down toggle-dropdown"></i></a>
                    <ul>
                        <li><a href="#">Dropdown 1</a></li>
                        <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i
                                    class="bi bi-chevron-down toggle-dropdown"></i></a>
                            <ul>
                                <li><a href="#">Deep Dropdown 1</a></li>
                                <li><a href="#">Deep Dropdown 2</a></li>
                                <li><a href="#">Deep Dropdown 3</a></li>
                                <li><a href="#">Deep Dropdown 4</a></li>
                                <li><a href="#">Deep Dropdown 5</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Dropdown 2</a></li>
                        <li><a href="#">Dropdown 3</a></li>
                        <li><a href="#">Dropdown 4</a></li>
                    </ul>
                </li>
                <li><a href="#contact">Contact</a></li> --}}
                <li><a href="{{ route('register') }}">Daftar</a></li>
            </ul>
            <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        {{-- <a class="btn-getstarted" href="#about">Log In</a> --}}
        @guest
            <a href="{{ route('login') }}" class="btn btn-getstarted">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-login-2">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
                    <path d="M3 12h13l-3 -3" />
                    <path d="M13 15l3 -3" />
                </svg>
                Masuk
            </a>
        @endguest

        @auth

            <a href="{{ route('member.dashboard') }}" class="btn btn-getstarted">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-dashboard">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M13.45 11.55l2.05 -2.05" />
                    <path d="M6.4 20a9 9 0 1 1 11.2 0z" />
                </svg>
                Dashboard
            </a>
        @endauth
    </div>
</header>
