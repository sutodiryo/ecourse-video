<footer id="footer" class="footer">

    {{-- <div class="footer-newsletter">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-lg-6">
                    <h4>Join Our Newsletter</h4>
                    <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
                    <form action="forms/newsletter.php" method="post" class="php-email-form">
                        <div class="newsletter-form"><input type="email" name="email"><input type="submit"
                                value="Subscribe"></div>
                        <div class="loading">Loading</div>
                        <div class="error-message"></div>
                        <div class="sent-message">Your subscription request has been sent. Thank you!</div>
                    </form>
                </div>
            </div>
        </div>
    </div> --}}

    <div class="container footer-top">
        <div class="row gy-4">
            <div class="col-lg-4 col-md-6 footer-about">
                <h4>{!! $data->footer_1_title !!}</h4>
                {{-- <h4>Sekolah Bisnis<br>“Muslim Bisnis Comunity”</h4> --}}
                <div class="footer-contact mt-3">
                    <p>{!! $data->footer_1_text !!}</p>
                    {{-- <p>Gg Guruh 3, Ngasinan</p>
                    <p>Jebres, Surakarta 57122</p> --}}
                </div>
            </div>


            <div class="col-lg-4 col-md-3 footer-links">
                <h4>{!! $data->footer_2_title !!}</h4>
                {{-- <h4>Contact</h4> --}}
                <ul>
                    <p class="mt-3">
                        {!! $data->footer_2_1_text !!}
                        {{-- <strong>Admin : </strong><span href="https://api.whatsapp.com/send/?phone=6285865580653&text"> +62 858 6558 0653</span> --}}
                    </p>
                    <p>
                        {!! $data->footer_2_2_text !!}
                        {{-- <strong>Email : </strong><span> mentoringinsentif@gmail.com</span> --}}
                    </p>
                    {{-- <li><i class="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">Product Management</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">Marketing</a></li> --}}
                </ul>
            </div>

            <div class="col-lg-4 col-md-12">
                <h4>{!! $data->footer_3_title !!}</h4>
                {{-- <h4>Find Us</h4> --}}
                {{-- <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p> --}}
                <div class="social-links d-flex">
                    {{-- <a href=""><i class="bi bi-twitter-x"></i></a> --}}
                    <a href="https://www.facebook.com/{{ $data->footer_3_1_text }}"><i class="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/{{ $data->footer_3_1_text }}"><i class="bi bi-instagram"></i></a>
                    <a href="https://api.whatsapp.com/send/?phone={{ $data->footer_3_1_text }}&text"><i class="bi bi-whatsapp"></i></a>
                    <a href="mailto:{{ $data->footer_3_1_text }}"><i class="bi bi-envelope"></i></a>

                    {{-- <a href="https://www.facebook.com/m1t.fjs/"><i class="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/m1t.fjs"><i class="bi bi-instagram"></i></a>
                    <a href="https://api.whatsapp.com/send/?phone=6285865580653&text"><i class="bi bi-whatsapp"></i></a>
                    <a href="mailto:mentoringinsentif@gmail.com"><i class="bi bi-envelope"></i></a> --}}
                    {{-- <a href=""><i class="bi bi-linkedin"></i></a> --}}
                </div>
            </div>

        </div>
    </div>

    <div class="container copyright text-center mt-4">
        <p>{!! $data->footer_copyright !!}</p>
        {{-- <p>© <span>Copyright</span> <strong class="px-1 sitename">Sekolah Bisnis “Muslim Bisnis Comunity”</strong> <span>All Rights Reserved</span>
            <br>
            Designed by <a href="{{ route('landing') }}">Sekolah Bisnis “Muslim Bisnis Comunity”</a>
        </p> --}}
    </div>

</footer>

<!-- Scroll Top -->
<a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

<!-- Preloader -->
{{-- <div id="preloader"></div> --}}
