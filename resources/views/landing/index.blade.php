@extends('layouts.arsha.master')

@section('title', 'Homepage')

@section('content')

    <div class="main">

        <!-- Hero Section -->
        <section id="hero" class="hero section">

            <div class="container">
                <div class="row gy-4">
                    <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="zoom-out">
                        {{-- <h1>{{ (50000*12) + ((50000*(11/100) )*12) }}</h1> --}}
                        {{-- <h1>{{ (87000*12) + ((87000*(11/100) )*12) }}</h1> --}}
                        <h1>{!! $data->hero_text !!}</h1>
                        {{-- <h1>Sekolah Bisnis “Muslim Bisnis Comunity”</h1>
                        <p>Nikmati kemudahan akses belajar bisnis melalui paket video ecourse Sekolah Bisnis
                            yang disampaikan langsung oleh <b>Coach Fitra Jaya Saleh</b></p> --}}
                        {{-- <p class="">adalah kelas ecourse bisnis yang akan membantu Anda untuk mendapatkan berbagai solusi mulai dari strategi, ilmu dan BEST PRACTICE untuk membangun bisnis Anda</p> --}}
                        <div class="d-flex">
                            <a href="#about" class="btn-get-started">Daftar Sekarang</a>
                            <a href="https://www.youtube.com/watch?v=H2dklT4M8VA"
                                class="glightbox btn-watch-video d-flex align-items-center"><i
                                    class="bi bi-play-circle"></i><span>Watch Video</span></a>
                        </div>
                    </div>
                    <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="200">
                        <img src="{{ asset('arsha-assets/img/fjs-no-background.png') }}" class="img-fluid animated"
                            alt="">
                    </div>
                </div>
            </div>

        </section><!-- /Hero Section -->

        <!-- Clients Section -->
        {{-- <section id="clients" class="clients section">

            <div class="container" data-aos="zoom-in">

                <div class="swiper">
                    <script type="application/json" class="swiper-config">
            {
              "loop": true,
              "speed": 600,
              "autoplay": {
                "delay": 5000
              },
              "slidesPerView": "auto",
              "pagination": {
                "el": ".swiper-pagination",
                "type": "bullets",
                "clickable": true
              },
              "breakpoints": {
                "320": {
                  "slidesPerView": 2,
                  "spaceBetween": 40
                },
                "480": {
                  "slidesPerView": 3,
                  "spaceBetween": 60
                },
                "640": {
                  "slidesPerView": 4,
                  "spaceBetween": 80
                },
                "992": {
                  "slidesPerView": 5,
                  "spaceBetween": 120
                },
                "1200": {
                  "slidesPerView": 6,
                  "spaceBetween": 120
                }
              }
            }
          </script>
                    <div class="swiper-wrapper align-items-center">
                        <div class="swiper-slide"><img src="{{ asset('arsha-assets/img/clients/client-1.png') }}"
                                class="img-fluid" alt=""></div>
                        <div class="swiper-slide"><img src="{{ asset('arsha-assets/img/clients/client-2.png') }}"
                                class="img-fluid" alt=""></div>
                        <div class="swiper-slide"><img src="{{ asset('arsha-assets/img/clients/client-3.png') }}"
                                class="img-fluid" alt=""></div>
                        <div class="swiper-slide"><img src="{{ asset('arsha-assets/img/clients/client-4.png') }}"
                                class="img-fluid" alt=""></div>
                        <div class="swiper-slide"><img src="{{ asset('arsha-assets/img/clients/client-5.png') }}"
                                class="img-fluid" alt=""></div>
                        <div class="swiper-slide"><img src="{{ asset('arsha-assets/img/clients/client-6.png') }}"
                                class="img-fluid" alt=""></div>
                        <div class="swiper-slide"><img src="{{ asset('arsha-assets/img/clients/client-7.png') }}"
                                class="img-fluid" alt=""></div>
                        <div class="swiper-slide"><img src="{{ asset('arsha-assets/img/clients/client-8.png') }}"
                                class="img-fluid" alt=""></div>
                    </div>
                </div>

            </div>

        </section> --}}
        <!-- /Clients Section -->

        <!-- About Section -->
        <section id="about" class="about section">

            <!-- Section Title -->
            <div class="container section-title" data-aos="fade-up">
                <h2>{!! $data->section_2_title !!}</h2>
                {{-- <h2>Tentang Sekolah Bisnis “Muslim Bisnis Comunity”</h2> --}}
            </div><!-- End Section Title -->

            <div class="container">

                <div class="row gy-4">

                    <div class="col-lg-12 content text-center" data-aos="fade-up" data-aos-delay="100">
                        <h4 class="text-black">
                            {!! $data->section_2_text !!}
                            {{-- Sekolah Bisnis “Muslim Bisnis Comunity” adalah ecourse bisnis yang akan membantu Anda
                            untuk mendapatkan berbagai solusi mulai dari strategi, ilmu dan BEST PRACTICE untuk membangun
                            bisnis Anda.
                            <br>
                            <br>
                            Setiap series berisi ratusan video panduan yang menjelaskan secara detil untuk memudahkan
                            peserta memahami setiap materi yg disampikan. --}}
                        </h4>
                        {{-- <ul>
                            <li><i class="bi bi-check2-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat.</span></li>
                            <li><i class="bi bi-check2-circle"></i> <span>Duis aute irure dolor in reprehenderit in
                                    voluptate velit.</span></li>
                            <li><i class="bi bi-check2-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea
                                    commodo</span></li>
                        </ul> --}}
                    </div>

                    {{-- <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum. </p>
                        <a href="#" class="read-more"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
                    </div> --}}

                </div>

            </div>

        </section>
        <!-- /About Section -->

        <!-- Services Section -->
        <section id="services" class="services section">

            <!-- Section Title -->
            <div class="container section-title" data-aos="fade-up">
                <h2>{!! $data->section_3_title !!}</h2>
                {{-- <h2>Services</h2> --}}
                {{-- <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p> --}}
            </div><!-- End Section Title -->

            <div class="container">

                <div class="row gy-4">

                    <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div class="service-item position-relative">
                            {{-- <div class="icon"><i class="bi bi-chat icon"></i></div> --}}
                            <h4>
                                <a class="stretched-link">Sales</a>
                            </h4>
                            <i class="bi bi-check2-circle"></i> <span>Teknik Penjualan Efektif</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Strategi Negosiasi</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Psikologi Pembelian</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Proses Penjualan Langkah-demi-Langkah</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Penjualan B2B vs. B2C</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Penjualan Online dan Offline</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Manajemen Pipeline Penjualan</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Teknik Cold Calling dan Emailing</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Penjualan Berbasis Nilai</span>
                        </div>
                    </div>

                    <div class="col-xl-4 col-md-6 " data-aos="fade-up" data-aos-delay="100">
                        <div class="service-item position-relative">
                            {{-- <div class="icon"><i class="bi bi-chat icon"></i></div> --}}
                            <h4><a class="stretched-link">Customer Relationship</a>
                            </h4>
                            <i class="bi bi-check2-circle"></i> <span>Management (CRM)</span>
                        </div>
                    </div>

                    <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div class="service-item position-relative">
                            {{-- <div class="icon"><i class="bi bi-chat icon"></i></div> --}}
                            <h4>
                                <a class="stretched-link">Marketing</a>
                            </h4>
                            <i class="bi bi-check2-circle"></i> <span>Dasar-dasar Pemasaran</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Strategi Pemasaran Digital</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Branding dan Identitas Merek</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Content Marketing</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Pemasaran Media Sosial</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Email Marketing</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Pemasaran Influencer</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Analisis Pasar dan Riset Konsumen</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Pemasaran Berbasis Data</span>
                        </div>
                    </div>

                    <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div class="service-item position-relative">
                            {{-- <div class="icon"><i class="bi bi-chat icon"></i></div> --}}
                            <h4>
                                <a class="stretched-link">Service Excellent</a>
                            </h4>
                            <i class="bi bi-check2-circle"></i> <span>Customer Journey Mapping</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Pelayanan Pelanggan yang Luar Biasa</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Manajemen Keluhan Pelanggan</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Meningkatkan Loyalitas Pelanggan</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Penggunaan Teknologi dalam Layanan Pelanggan</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Membangun Budaya Layanan Pelanggan</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Keterampilan Komunikasi untuk Layanan Pelanggan</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Personalisasi Layanan</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Menyediakan Layanan Multi-Channel</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Pelatihan Staf Layanan Pelanggan</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Mengukur Kepuasan Pelanggan</span>
                        </div>
                    </div>

                    <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div class="service-item position-relative">
                            {{-- <div class="icon"><i class="bi bi-chat icon"></i></div> --}}
                            <h4>
                                <a class="stretched-link">Operasional</a>
                            </h4>
                            <i class="bi bi-check2-circle"></i> <span>Manajemen Operasional</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Optimasi Proses Bisnis</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Lean Management</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Manajemen Rantai Pasokan</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Quality Control dan Quality Assurance</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Penggunaan Teknologi dalam Operasional</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Manajemen Risiko Operasional</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Logistik dan Distribusi</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Manajemen Proyek</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Sistem dan Prosedur Operasional Standar (SOP)</span>
                        </div>
                    </div>

                    <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div class="service-item position-relative">
                            {{-- <div class="icon"><i class="bi bi-chat icon"></i></div> --}}
                            <h4>
                                <a class="stretched-link">Omset</a>
                            </h4>
                            <i class="bi bi-check2-circle"></i> <span>Strategi Peningkatan Omset</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Analisis Penjualan</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Upselling dan Cross-Selling</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Pengembangan Produk Baru</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Strategi Harga</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Program Loyalitas Pelanggan</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Ekspansi Pasar</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Diversifikasi Produk</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Mengelola Penjualan Musiman</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Analisis Biaya dan Keuntungan</span>
                        </div>
                    </div>

                    <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div class="service-item position-relative">
                            {{-- <div class="icon"><i class="bi bi-chat icon"></i></div> --}}
                            <h4>
                                <a class="stretched-link">Leadership</a>
                            </h4>
                            <i class="bi bi-check2-circle"></i> <span>Gaya Kepemimpinan</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Kepemimpinan yang Efektif</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Menginspirasi dan Memotivasi Tim</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Pengambilan Keputusan Strategis</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Mengelola Perubahan</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Kepemimpinan dalam Krisis</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Komunikasi Kepemimpinan</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Pengembangan Tim</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Etika dan Integritas dalam Kepemimpinan</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Membangun Budaya Kerja yang Positif</span>
                        </div>
                    </div>

                    <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div class="service-item position-relative">
                            {{-- <div class="icon"><i class="bi bi-chat icon"></i></div> --}}
                            <h4>
                                <a class="stretched-link">Membangun Sistem Karyawan</a>
                            </h4>
                            <i class="bi bi-check2-circle"></i> <span>Rekrutmen dan Seleksi</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Onboarding Karyawan Baru</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Manajemen Kinerja Karyawan</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Pengembangan Karir</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Pelatihan dan Pengembangan</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Kompensasi dan Benefit</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Retensi Karyawan</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Budaya Kerja dan Keterlibatan Karyawan</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Kesehatan dan Keselamatan Kerja</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Pengelolaan Konflik Karyawan</span>
                        </div>
                    </div>

                    <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div class="service-item position-relative">
                            {{-- <div class="icon"><i class="bi bi-chat icon"></i></div> --}}
                            <h4>
                                <a class="stretched-link">Keuangan</a>
                            </h4>
                            <i class="bi bi-check2-circle"></i> <span>Dasar-dasar Keuangan Bisnis</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Manajemen Arus Kas</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Analisis Laporan Keuangan</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Perencanaan Anggaran</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Pembiayaan Bisnis</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Pengendalian Biaya</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Pengelolaan Utang dan Piutang</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Investasi Bisnis</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Perencanaan Pajak</span>
                            <br>
                            <i class="bi bi-check2-circle"></i> <span>Manajemen Risiko Keuangan</span>
                        </div>
                    </div>


                    {{-- <div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
                        <div class="service-item position-relative">
                            <div class="icon"><i class="bi bi-chat icon"></i></div>
                            <h4><a class="stretched-link">{!! $data->section_3_1_title !!}</a>
                            </h4>
                            <p>{!! $data->section_3_1_text !!}</p>
                        </div>
                    </div>

                    <div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
                        <div class="service-item position-relative">
                            <div class="icon"><i class="bi bi-camera-video icon"></i></div>
                            <h4><a class="stretched-link">⁠{!! $data->section_3_2_title !!}</a></h4>
                            <p>{!! $data->section_3_2_text !!}</p>
                        </div>
                    </div>

                    <div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
                        <div class="service-item position-relative">
                            <div class="icon"><i class="bi bi-book icon"></i></div>
                            <h4><a class="stretched-link">
                                    {!! $data->section_3_3_title !!}
                                </a>
                            </h4>
                            <p>{!! $data->section_3_3_text !!}</p>
                        </div>
                    </div>

                    <div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
                        <div class="service-item position-relative">
                            <div class="icon"><i class="bi bi-box2-heart icon"></i></div>
                            <h4><a class="stretched-link">{!! $data->section_3_4_title !!}</a></h4>
                            <p>{!! $data->section_3_4_text !!}</p>
                        </div>
                    </div> --}}

                </div>

            </div>

        </section>
        <!-- /Services Section -->

        <!-- Why Us Section -->
        <section id="join" class="bg-white mt-5 section why-us" data-builder="section">

            <!-- Section Title -->
            <div class="container section-title" data-aos="fade-up">
                <br>
                <br>
                <h2 class="">{!! $data->section_4_title !!}</h2>
            </div><!-- End Section Title -->

            {{-- <div class="container section-title" data-aos="fade-up">
                <h2 class="">How To Join</h2>
            </div><!-- End Section Title --> --}}

            <div class="container mb-5">

                <div class="row gy-4">

                    <div class="col-lg-12 d-flex flex-column justify-content-center order-2 order-lg-1">

                        {{-- <div class="content px-xl-5" data-aos="fade-up" data-aos-delay="100"> --}}
                        {{-- <h3 class=""><span class=""></span><strong>{!! $data->section_4_title !!}</strong></h3> --}}
                        {{-- <h3 class=""><span class=""></span><strong>Cara mengakses E-Course : </strong></h3> --}}
                        {{-- <p class="">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                            </p> --}}

                        {{-- <h3 class=""><span class="">Eum ipsam laborum deleniti </span><strong>velit
                                    pariatur architecto aut nihil</strong></h3>
                            <p class="">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                            </p> --}}
                        {{-- </div> --}}

                        <div class="faq-container" data-aos="fade-up" data-aos-delay="200">

                            <div class="faq-item faq-active">

                                <h3><span>01</span> {!! $data->section_4_1_title !!}</h3>
                                {{-- <h3><span>01</span> Registrasi Akun (WAJIB)</h3> --}}
                                <div class="faq-content">
                                    <p>{!! $data->section_4_1_text !!}</p>
                                    {{-- <p>Silahkan buat akun terlebih dahulu. Sebelum membeli akses E-Course kamu WAJIB membuat
                                        akun terlebih dahulu. Klik <a href="{{ route('register') }}">disini</a> untuk
                                        membuat akun.</p> --}}
                                </div>
                                <i class="faq-toggle bi bi-chevron-right"></i>
                            </div><!-- End Faq item-->

                            <div class="faq-item">
                                <h3><span>02</span> {!! $data->section_4_2_title !!}</h3>
                                {{-- <h3><span>02</span> Pilih E-Course</h3> --}}
                                <div class="faq-content">
                                    <p>{!! $data->section_4_2_text !!}</p>
                                    {{-- <p>Setelah membuat akun, silahkan pilih E-Course yang akan kamu ikuti. Silahkan pilih
                                        e-coursenya <a href="{{ route('series.index') }}">disini</a>.</p> --}}
                                </div>
                                <i class="faq-toggle bi bi-chevron-right"></i>
                            </div><!-- End Faq item-->

                            <div class="faq-item">
                                <h3><span>03</span> {!! $data->section_4_3_title !!}</h3>
                                {{-- <h3><span>03</span> Checkout & Payment</h3> --}}
                                <div class="faq-content">
                                    <p>{!! $data->section_4_3_text !!}</p>
                                    {{-- <p>Lakukan Pembayaran sesuai dengan nominal harga yang tertera. Pastikan pembayaran
                                        hanya ke Rekening Resmi Sekolah Bisnis “Muslim Bisnis Comunity”.</p> --}}
                                </div>
                                <i class="faq-toggle bi bi-chevron-right"></i>
                            </div><!-- End Faq item-->

                            <div class="faq-item">
                                <h3><span>04</span> {!! $data->section_4_4_title !!}</h3>
                                {{-- <h3><span>04</span> Konfirmasi Pembayaran</h3> --}}
                                <div class="faq-content">
                                    <p>{!! $data->section_4_4_text !!}</p>
                                    {{-- <p>Setelah melakukan pembayaran silahkan konfirmasi kepada Admin Sekolah Bisnis “Muslim
                                        Bisnis Comunity” dan lampirkan Bukti
                                        Transfernya. Klik <a
                                            href="https://api.whatsapp.com/send/?phone=6285865580653&text">disini</a> untuk
                                        konfirmasi pembayaran.</p> --}}
                                </div>
                                <i class="faq-toggle bi bi-chevron-right"></i>
                            </div><!-- End Faq item-->

                            <div class="faq-item">
                                <h3><span>05</span> {!! $data->section_4_5_title !!}</h3>
                                {{-- <h3><span>05</span> Akses E-Course di Dashboard</h3> --}}
                                <div class="faq-content">
                                    <p>{!! $data->section_4_5_text !!}</p>
                                    {{-- <p>Silahkan Akses E-Course yang telah kamu beli di bagian menu Dashboard atau klik
                                        <a href="{{ route('series.index') }}">disini</a> untuk menuju ke E-Course.
                                    </p> --}}
                                </div>
                                <i class="faq-toggle bi bi-chevron-right"></i>
                            </div><!-- End Faq item-->

                        </div>

                    </div>

                    {{-- <div class="col-lg-5 order-1 order-lg-2 why-us-img">
                        <img src="{{ asset('arsha-assets/img/why-us.png') }}" class="img-fluid" alt=""
                            data-aos="zoom-in" data-aos-delay="100">
                    </div> --}}
                </div>

            </div>

        </section>
        <!-- /Why Us Section -->

        <!-- Skills Section -->
        {{-- <section id="skills" class="skills section">

            <div class="container" data-aos="fade-up" data-aos-delay="100">

                <div class="row">

                    <div class="col-lg-6 d-flex align-items-center">
                        <img src="{{ asset('arsha-assets/img/skills.png') }}" class="img-fluid" alt="">
                    </div>

                    <div class="col-lg-6 pt-4 pt-lg-0 content">

                        <h3>Voluptatem dignissimos provident quasi corporis voluptas</h3>
                        <p class="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>

                        <div class="skills-content skills-animation">

                            <div class="progress">
                                <span class="skill"><span>HTML</span> <i class="val">100%</i></span>
                                <div class="progress-bar-wrap">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0"
                                        aria-valuemax="100"></div>
                                </div>
                            </div><!-- End Skills Item -->

                            <div class="progress">
                                <span class="skill"><span>CSS</span> <i class="val">90%</i></span>
                                <div class="progress-bar-wrap">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0"
                                        aria-valuemax="100"></div>
                                </div>
                            </div><!-- End Skills Item -->

                            <div class="progress">
                                <span class="skill"><span>JavaScript</span> <i class="val">75%</i></span>
                                <div class="progress-bar-wrap">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                                        aria-valuemax="100"></div>
                                </div>
                            </div><!-- End Skills Item -->

                            <div class="progress">
                                <span class="skill"><span>Photoshop</span> <i class="val">55%</i></span>
                                <div class="progress-bar-wrap">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0"
                                        aria-valuemax="100"></div>
                                </div>
                            </div><!-- End Skills Item -->

                        </div>

                    </div>
                </div>

            </div>

        </section> --}}
        <!-- /Skills Section -->


        <!-- Call To Action Section -->
        <section id="call-to-action" class="call-to-action section">

            <img src="{{ asset('arsha-assets/img/cta-bg.jpg') }}" alt="">

            <div class="container">

                <div class="row" data-aos="zoom-in" data-aos-delay="100">
                    <div class="col-xl-9 text-center text-xl-start">
                        <h3>{!! $data->section_5_title !!}</h3>
                        {{-- <h3>Mengapa Harus Bergabung Sekarang?</h3> --}}
                        <p>{!! $data->section_5_text !!}</p>
                        {{-- <h3>
                            <table>
                                <tr>
                                    <td>
                                        <script>
                                            CountDownTimer('{{ Carbon\Carbon::now('GMT+7') }}', 'countdown');

                                            function CountDownTimer(dt, id) {
                                                var end = new Date('{{ Carbon\Carbon::now('GMT+7')->addMinutess(30) }}');
                                                // var end = new Date('{{ Carbon\Carbon::now()->addHours(12) }}');
                                                // var end = new Date('{{ Carbon\Carbon::now()->addDays(1) }}');
                                                var _second = 1000;
                                                var _minute = _second * 60;
                                                var _hour = _minute * 60;
                                                var _day = _hour * 24;
                                                var timer;

                                                function showRemaining() {
                                                    var now = new Date();
                                                    var distance = end - now;
                                                    if (distance < 0) {

                                                        clearInterval(timer);
                                                        document.getElementById(id).innerHTML = '';
                                                        // document.getElementById(id).innerHTML = '<b>TUGAS SUDAH BERAKHIR</b> ';
                                                        return;
                                                    }
                                                    var days = Math.floor(distance / _day);
                                                    var hours = Math.floor((distance % _day) / _hour);
                                                    var minutes = Math.floor((distance % _hour) / _minute);
                                                    var seconds = Math.floor((distance % _minute) / _second);

                                                    // document.getElementById(id).innerHTML = days + ' hari ';
                                                    // document.getElementById(id).innerHTML += hours + ' jam ';
                                                    // document.getElementById(id).innerHTML += minutes + ' menit ';

                                                    document.getElementById(id).innerHTML = minutes + ' menit ';
                                                    document.getElementById(id).innerHTML += seconds + ' detik';
                                                    document.getElementById(id).innerHTML += '<h2>SEGERA APA?</h2>';
                                                }
                                                timer = setInterval(showRemaining, 1000);
                                            }
                                        </script>
                                        <div id="countdown">
                                    </td>
                                </tr>
                            </table>
                        </h3> --}}
                        {{-- <p>Semakin cepat anda mendaftar semakin cepat mengikuti semakin cepat mendapatkan ilmu dan perubahan
                            dalam bisnisnya akan semakin besar ...</p> --}}
                    </div>
                    <div class="col-xl-3 cta-btn-container text-center">
                        <a class="cta-btn align-middle" href="{{ route('register') }}">Daftar Sekarang</a>
                    </div>
                </div>

            </div>

        </section><!-- /Call To Action Section -->

        <!-- Portfolio Section -->
        {{-- <section id="portfolio" class="portfolio section">

            <!-- Section Title -->
            <div class="container section-title" data-aos="fade-up">
                <h2>Portfolio</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div><!-- End Section Title -->

            <div class="container">

                <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

                    <ul class="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                        <li data-filter="*" class="filter-active">All</li>
                        <li data-filter=".filter-app">App</li>
                        <li data-filter=".filter-product">Card</li>
                        <li data-filter=".filter-branding">Web</li>
                    </ul><!-- End Portfolio Filters -->

                    <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

                        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                            <img src="{{ asset('arsha-assets/img/masonry-portfolio/masonry-portfolio-1.jpg') }}"
                                class="img-fluid" alt="">
                            <div class="portfolio-info">
                                <h4>App 1</h4>
                                <p>Lorem ipsum, dolor sit</p>
                                <a href="{{ asset('arsha-assets/img/masonry-portfolio/masonry-portfolio-1.jpg') }}"
                                    title="App 1" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i
                                        class="bi bi-zoom-in"></i></a>
                                <a href="portfolio-details.html" title="More Details" class="details-link"><i
                                        class="bi bi-link-45deg"></i></a>
                            </div>
                        </div><!-- End Portfolio Item -->

                        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                            <img src="{{ asset('arsha-assets/img/masonry-portfolio/masonry-portfolio-2.jpg') }}"
                                class="img-fluid" alt="">
                            <div class="portfolio-info">
                                <h4>Product 1</h4>
                                <p>Lorem ipsum, dolor sit</p>
                                <a href="{{ asset('arsha-assets/img/masonry-portfolio/masonry-portfolio-2.jpg') }}"
                                    title="Product 1" data-gallery="portfolio-gallery-product"
                                    class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                <a href="portfolio-details.html" title="More Details" class="details-link"><i
                                        class="bi bi-link-45deg"></i></a>
                            </div>
                        </div><!-- End Portfolio Item -->

                        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                            <img src="{{ asset('arsha-assets/img/masonry-portfolio/masonry-portfolio-3.jpg') }}"
                                class="img-fluid" alt="">
                            <div class="portfolio-info">
                                <h4>Branding 1</h4>
                                <p>Lorem ipsum, dolor sit</p>
                                <a href="{{ asset('arsha-assets/img/masonry-portfolio/masonry-portfolio-3.jpg') }}"
                                    title="Branding 1" data-gallery="portfolio-gallery-branding"
                                    class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                <a href="portfolio-details.html" title="More Details" class="details-link"><i
                                        class="bi bi-link-45deg"></i></a>
                            </div>
                        </div><!-- End Portfolio Item -->

                        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                            <img src="{{ asset('arsha-assets/img/masonry-portfolio/masonry-portfolio-4.jpg') }}"
                                class="img-fluid" alt="">
                            <div class="portfolio-info">
                                <h4>App 2</h4>
                                <p>Lorem ipsum, dolor sit</p>
                                <a href="{{ asset('arsha-assets/img/masonry-portfolio/masonry-portfolio-4.jpg') }}"
                                    title="App 2" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i
                                        class="bi bi-zoom-in"></i></a>
                                <a href="portfolio-details.html" title="More Details" class="details-link"><i
                                        class="bi bi-link-45deg"></i></a>
                            </div>
                        </div><!-- End Portfolio Item -->

                        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                            <img src="{{ asset('arsha-assets/img/masonry-portfolio/masonry-portfolio-5.jpg') }}"
                                class="img-fluid" alt="">
                            <div class="portfolio-info">
                                <h4>Product 2</h4>
                                <p>Lorem ipsum, dolor sit</p>
                                <a href="{{ asset('arsha-assets/img/masonry-portfolio/masonry-portfolio-5.jpg') }}"
                                    title="Product 2" data-gallery="portfolio-gallery-product"
                                    class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                <a href="portfolio-details.html" title="More Details" class="details-link"><i
                                        class="bi bi-link-45deg"></i></a>
                            </div>
                        </div><!-- End Portfolio Item -->

                        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                            <img src="{{ asset('arsha-assets/img/masonry-portfolio/masonry-portfolio-6.jpg') }}"
                                class="img-fluid" alt="">
                            <div class="portfolio-info">
                                <h4>Branding 2</h4>
                                <p>Lorem ipsum, dolor sit</p>
                                <a href="{{ asset('arsha-assets/img/masonry-portfolio/masonry-portfolio-6.jpg') }}"
                                    title="Branding 2" data-gallery="portfolio-gallery-branding"
                                    class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                <a href="portfolio-details.html" title="More Details" class="details-link"><i
                                        class="bi bi-link-45deg"></i></a>
                            </div>
                        </div><!-- End Portfolio Item -->

                        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                            <img src="{{ asset('arsha-assets/img/masonry-portfolio/masonry-portfolio-7.jpg') }}"
                                class="img-fluid" alt="">
                            <div class="portfolio-info">
                                <h4>App 3</h4>
                                <p>Lorem ipsum, dolor sit</p>
                                <a href="{{ asset('arsha-assets/img/masonry-portfolio/masonry-portfolio-7.jpg') }}"
                                    title="App 3" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i
                                        class="bi bi-zoom-in"></i></a>
                                <a href="portfolio-details.html" title="More Details" class="details-link"><i
                                        class="bi bi-link-45deg"></i></a>
                            </div>
                        </div><!-- End Portfolio Item -->

                        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                            <img src="{{ asset('arsha-assets/img/masonry-portfolio/masonry-portfolio-8.jpg') }}"
                                class="img-fluid" alt="">
                            <div class="portfolio-info">
                                <h4>Product 3</h4>
                                <p>Lorem ipsum, dolor sit</p>
                                <a href="{{ asset('arsha-assets/img/masonry-portfolio/masonry-portfolio-8.jpg') }}"
                                    title="Product 3" data-gallery="portfolio-gallery-product"
                                    class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                <a href="portfolio-details.html" title="More Details" class="details-link"><i
                                        class="bi bi-link-45deg"></i></a>
                            </div>
                        </div><!-- End Portfolio Item -->

                        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                            <img src="{{ asset('arsha-assets/img/masonry-portfolio/masonry-portfolio-9.jpg') }}"
                                class="img-fluid" alt="">
                            <div class="portfolio-info">
                                <h4>Branding 3</h4>
                                <p>Lorem ipsum, dolor sit</p>
                                <a href="{{ asset('arsha-assets/img/masonry-portfolio/masonry-portfolio-9.jpg') }}"
                                    title="Branding 2" data-gallery="portfolio-gallery-branding"
                                    class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                <a href="portfolio-details.html" title="More Details" class="details-link"><i
                                        class="bi bi-link-45deg"></i></a>
                            </div>
                        </div><!-- End Portfolio Item -->

                    </div><!-- End Portfolio Container -->

                </div>

            </div>

        </section> --}}
        <!-- /Portfolio Section -->

        <!-- Team Section -->
        {{-- <section id="team" class="team section">

            <!-- Section Title -->
            <div class="container section-title" data-aos="fade-up">
                <h2>Team</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div><!-- End Section Title -->

            <div class="container">

                <div class="row gy-4">

                    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <div class="team-member d-flex align-items-start">
                            <div class="pic"><img src="{{ asset('arsha-assets/img/team/team-1.jpg') }}"
                                    class="img-fluid" alt=""></div>
                            <div class="member-info">
                                <h4>Walter White</h4>
                                <span>Chief Executive Officer</span>
                                <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                                <div class="social">
                                    <a href=""><i class="bi bi-twitter-x"></i></a>
                                    <a href=""><i class="bi bi-facebook"></i></a>
                                    <a href=""><i class="bi bi-instagram"></i></a>
                                    <a href=""> <i class="bi bi-linkedin"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div><!-- End Team Member -->

                    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <div class="team-member d-flex align-items-start">
                            <div class="pic"><img src="{{ asset('arsha-assets/img/team/team-2.jpg') }}"
                                    class="img-fluid" alt=""></div>
                            <div class="member-info">
                                <h4>Sarah Jhonson</h4>
                                <span>Product Manager</span>
                                <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                                <div class="social">
                                    <a href=""><i class="bi bi-twitter-x"></i></a>
                                    <a href=""><i class="bi bi-facebook"></i></a>
                                    <a href=""><i class="bi bi-instagram"></i></a>
                                    <a href=""> <i class="bi bi-linkedin"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div><!-- End Team Member -->

                    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                        <div class="team-member d-flex align-items-start">
                            <div class="pic"><img src="{{ asset('arsha-assets/img/team/team-3.jpg') }}"
                                    class="img-fluid" alt=""></div>
                            <div class="member-info">
                                <h4>William Anderson</h4>
                                <span>CTO</span>
                                <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                                <div class="social">
                                    <a href=""><i class="bi bi-twitter-x"></i></a>
                                    <a href=""><i class="bi bi-facebook"></i></a>
                                    <a href=""><i class="bi bi-instagram"></i></a>
                                    <a href=""> <i class="bi bi-linkedin"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div><!-- End Team Member -->

                    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                        <div class="team-member d-flex align-items-start">
                            <div class="pic"><img src="{{ asset('arsha-assets/img/team/team-4.jpg') }}"
                                    class="img-fluid" alt=""></div>
                            <div class="member-info">
                                <h4>Amanda Jepson</h4>
                                <span>Accountant</span>
                                <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                                <div class="social">
                                    <a href=""><i class="bi bi-twitter-x"></i></a>
                                    <a href=""><i class="bi bi-facebook"></i></a>
                                    <a href=""><i class="bi bi-instagram"></i></a>
                                    <a href=""> <i class="bi bi-linkedin"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div><!-- End Team Member -->

                </div>

            </div>

        </section> --}}
        <!-- /Team Section -->

        <!-- Pricing Section -->
        <section id="series" class="pricing section">

            <!-- Section Title -->
            <div class="container section-title" data-aos="fade-up">
                <h2>{!! $data->section_6_title !!}</h2>
                {{-- <h2>Series</h2> --}}
                {{-- <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p> --}}
            </div><!-- End Section Title -->

            <div class="container">

                <div class="row gy-4">

                    @foreach ($series as $s)
                        <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="200">
                            <div class="pricing-item featured">
                                <h3 class="text-center">{{ $s->name }}</h3>
                                <div class="mb-3">

                                    <img src="{{ $s->cover }}" class="img-fluid" alt="">
                                </div>
                                @if ($s->status == 1)
                                    <h5><s>Rp{{ number_format($s->price_x) }}</s></h5>
                                    <h4>
                                        <sup>Rp</sup>{{ number_format($s->price) }}
                                        <span>({{ $s->videos->count() }} Episode)</span>
                                    </h4>
                                @else
                                    <h4 class="text-center">The Series is Coming Soon</h4>
                                @endif

                                <p>
                                    {!! $s->description !!}
                                </p>
                                {{-- <ul>
                                    <li><i class="bi bi-check"></i> <span>Quam adipiscing vitae proin</span></li>
                                    <li><i class="bi bi-check"></i> <span>Nec feugiat nisl pretium</span></li>
                                    <li><i class="bi bi-check"></i> <span>Nulla at volutpat diam uteera</span></li>
                                    <li><i class="bi bi-check"></i> <span>Pharetra massa massa ultricies</span></li>
                                    <li><i class="bi bi-check"></i> <span>Massa ultricies mi quis hendrerit</span></li>
                                </ul> --}}
                                <div class="text-center">
                                    @if ($s->status == 1)
                                        <a href="{{ route('series.show', $s->slug) }}" class="buy-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                class="icon icon-tabler icons-tabler-outline icon-tabler-eye">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                                <path
                                                    d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                                            </svg>
                                            Detail
                                        </a>
                                    @else
                                        <a disabled class="buy-btn">
                                            Coming Soon
                                        </a>
                                    @endif
                                </div>
                            </div>
                        </div>
                    @endforeach

                </div>

            </div>

        </section><!-- /Pricing Section -->

        <!-- Testimonials Section -->
        <section id="testimonials" class="testimonials section">

            <!-- Section Title -->
            <div class="container section-title">
                <h2>{{ $data->section_7_title }}</h2>
                {{-- <h2>Testimoni</h2> --}}
                {{-- <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p> --}}
            </div><!-- End Section Title -->

            <div class="container" data-aos="fade-up" data-aos-delay="100">

                <div class="swiper">
                    <script type="application/json" class="swiper-config">
            {
              "loop": true,
              "speed": 600,
              "autoplay": {
                "delay": 5000
              },
              "slidesPerView": "auto",
              "pagination": {
                "el": ".swiper-pagination",
                "type": "bullets",
                "clickable": true
              }
            }
          </script>
                    <div class="swiper-wrapper">

                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <img src="{{ asset('arsha-assets/img/testimonials/testi-1.jpeg') }}" class=""
                                    alt="" height="500">
                            </div>
                        </div><!-- End testimonial item -->

                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <img src="{{ asset('arsha-assets/img/testimonials/testi-2.jpeg') }}" class=""
                                    alt="" height="500">
                            </div>
                        </div><!-- End testimonial item -->

                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <img src="{{ asset('arsha-assets/img/testimonials/testi-3.jpeg') }}" class=""
                                    alt="" height="500">
                            </div>
                        </div><!-- End testimonial item -->

                        {{--
                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <img src="{{ asset('arsha-assets/img/testimonials/testimonials-2.jpg') }}"
                                    class="testimonial-img" alt="">
                                <h3>Sara Wilsson</h3>
                                <h4>Designer</h4>
                                <div class="stars">
                                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                        class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                        class="bi bi-star-fill"></i>
                                </div>
                                <p>
                                    <i class="bi bi-quote quote-icon-left"></i>
                                    <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum
                                        quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat
                                        irure amet legam anim culpa.</span>
                                    <i class="bi bi-quote quote-icon-right"></i>
                                </p>
                            </div>
                        </div><!-- End testimonial item -->

                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <img src="{{ asset('arsha-assets/img/testimonials/testimonials-3.jpg') }}"
                                    class="testimonial-img" alt="">
                                <h3>Jena Karlis</h3>
                                <h4>Store Owner</h4>
                                <div class="stars">
                                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                        class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                        class="bi bi-star-fill"></i>
                                </div>
                                <p>
                                    <i class="bi bi-quote quote-icon-left"></i>
                                    <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla
                                        quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore
                                        quis sint minim.</span>
                                    <i class="bi bi-quote quote-icon-right"></i>
                                </p>
                            </div>
                        </div><!-- End testimonial item -->

                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <img src="{{ asset('arsha-assets/img/testimonials/testimonials-4.jpg') }}"
                                    class="testimonial-img" alt="">
                                <h3>Matt Brandon</h3>
                                <h4>Freelancer</h4>
                                <div class="stars">
                                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                        class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                        class="bi bi-star-fill"></i>
                                </div>
                                <p>
                                    <i class="bi bi-quote quote-icon-left"></i>
                                    <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim
                                        fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore
                                        quem dolore labore illum veniam.</span>
                                    <i class="bi bi-quote quote-icon-right"></i>
                                </p>
                            </div>
                        </div><!-- End testimonial item -->

                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <img src="{{ asset('arsha-assets/img/testimonials/testimonials-5.jpg') }}"
                                    class="testimonial-img" alt="">
                                <h3>John Larson</h3>
                                <h4>Entrepreneur</h4>
                                <div class="stars">
                                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                        class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                        class="bi bi-star-fill"></i>
                                </div>
                                <p>
                                    <i class="bi bi-quote quote-icon-left"></i>
                                    <span>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor
                                        noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam
                                        esse veniam culpa fore nisi cillum quid.</span>
                                    <i class="bi bi-quote quote-icon-right"></i>
                                </p>
                            </div>
                        </div><!-- End testimonial item --> --}}

                    </div>
                    <div class="swiper-pagination"></div>
                </div>

            </div>

        </section><!-- /Testimonials Section -->

        <!-- Faq 2 Section -->
        <section id="faq-2" class="faq-2 section">

            <!-- Section Title -->
            <div class="container section-title" data-aos="fade-up">
                <h2>{!! $data->section_8_title !!}</h2>
                {{-- <h2>Frequently Asked Questions</h2> --}}
                {{-- <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                    consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
                    fugiat sit in iste officiis commodi quidem hic quas.</p> --}}
            </div><!-- End Section Title -->

            <div class="container">

                <div class="row justify-content-center">

                    <div class="col-lg-10">

                        <div class="faq-container">

                            <div class="faq-item faq-active" data-aos="fade-up" data-aos-delay="200">
                                <i class="faq-icon bi bi-question-circle"></i>
                                <h3>{!! $data->section_8_1_title !!}</h3>
                                {{-- <h3>Bagaiamana sistem ecourse Sekolah Bisnis “Muslim Bisnis Comunity”?</h3> --}}
                                <div class="faq-content">
                                    <p>{!! $data->section_8_1_text !!}</p>
                                    {{-- <p>Kelas ecourse Sekolah Bisnis Sekolah Bisnis “Muslim Bisnis Comunity” berisi ratusan
                                        video panduan bisnis untuk setiap
                                        seriesnya</p> --}}
                                </div>
                                <i class="faq-toggle bi bi-chevron-right"></i>
                            </div><!-- End Faq item-->

                            <div class="faq-item" data-aos="fade-up" data-aos-delay="300">
                                <i class="faq-icon bi bi-question-circle"></i>
                                <h3>{!! $data->section_8_2_title !!}</h3>
                                {{-- <h3>Apa saja fasilitas yang di dapat jika bergabung Ecourse Sekolah Bisnis?</h3> --}}
                                <div class="faq-content">
                                    <p>{!! $data->section_8_2_text !!}</p>
                                    {{-- <p>Tanya jawab yang dijawab langsung oleh coach Fitra dan materi yg mudah dipahami</p> --}}
                                </div>
                                <i class="faq-toggle bi bi-chevron-right"></i>
                            </div><!-- End Faq item-->

                            <div class="faq-item" data-aos="fade-up" data-aos-delay="400">
                                <i class="faq-icon bi bi-question-circle"></i>
                                <h3>{!! $data->section_8_3_title !!}</h3>
                                {{-- <h3>Berapa lama akses yg di dapat jika beli ecourse ini?</h3> --}}
                                <div class="faq-content">
                                    <p>{!! $data->section_8_3_text !!}</p>
                                    {{-- <p>Ecourse Sekolah Bisnis bisa diakses selama 1 tahun sejak bergabung</p> --}}
                                </div>
                                <i class="faq-toggle bi bi-chevron-right"></i>
                            </div><!-- End Faq item-->

                            <div class="faq-item" data-aos="fade-up" data-aos-delay="500">
                                <i class="faq-icon bi bi-question-circle"></i>
                                <h3>{!! $data->section_8_4_title !!}</h3>
                                {{-- <h3>Ecourse Sekolah Bisnis cocok untuk pengusaha seperti apa?</h3> --}}
                                <div class="faq-content">
                                    <p>{!! $data->section_8_4_text !!}</p>
                                    {{-- <p>Ecourse ini cocok untuk srmua pengusaha dari semua kalangan</p> --}}
                                </div>
                                <i class="faq-toggle bi bi-chevron-right"></i>
                            </div><!-- End Faq item-->

                        </div>

                    </div>

                </div>

            </div>

        </section><!-- /Faq 2 Section -->

        <!-- Contact Section -->
        {{-- <section id="contact" class="contact section">

            <!-- Section Title -->
            <div class="container section-title" data-aos="fade-up">
                <h2>Contact</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            <!-- End Section Title -->

            <div class="container" data-aos="fade-up" data-aos-delay="100">

                <div class="row gy-4">

                    <div class="col-lg-5">

                        <div class="info-wrap">
                            <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                                <i class="bi bi-geo-alt flex-shrink-0"></i>
                                <div>
                                    <h3>Address</h3>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>
                            </div><!-- End Info Item -->

                            <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                                <i class="bi bi-telephone flex-shrink-0"></i>
                                <div>
                                    <h3>Call Us</h3>
                                    <p>+1 5589 55488 55</p>
                                </div>
                            </div><!-- End Info Item -->

                            <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                                <i class="bi bi-envelope flex-shrink-0"></i>
                                <div>
                                    <h3>Email Us</h3>
                                    <p>info@example.com</p>
                                </div>
                            </div><!-- End Info Item -->

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                                frameborder="0" style="border:0; width: 100%; height: 270px;" allowfullscreen=""
                                loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                    <div class="col-lg-7">
                        <form action="forms/contact.php" method="post" class="php-email-form" data-aos="fade-up"
                            data-aos-delay="200">
                            <div class="row gy-4">

                                <div class="col-md-6">
                                    <label for="name-field" class="pb-2">Your Name</label>
                                    <input type="text" name="name" id="name-field" class="form-control"
                                        required="">
                                </div>

                                <div class="col-md-6">
                                    <label for="email-field" class="pb-2">Your Email</label>
                                    <input type="email" class="form-control" name="email" id="email-field"
                                        required="">
                                </div>

                                <div class="col-md-12">
                                    <label for="subject-field" class="pb-2">Subject</label>
                                    <input type="text" class="form-control" name="subject" id="subject-field"
                                        required="">
                                </div>

                                <div class="col-md-12">
                                    <label for="message-field" class="pb-2">Message</label>
                                    <textarea class="form-control" name="message" rows="10" id="message-field" required=""></textarea>
                                </div>

                                <div class="col-md-12 text-center">
                                    <div class="loading">Loading</div>
                                    <div class="error-message"></div>
                                    <div class="sent-message">Your message has been sent. Thank you!</div>

                                    <button type="submit">Send Message</button>
                                </div>

                            </div>
                        </form>
                    </div><!-- End Contact Form -->

                </div>

            </div>

        </section> --}}
        <!-- /Contact Section -->

    </div>

@endsection
