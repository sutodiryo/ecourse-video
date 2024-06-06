@extends('layouts.frontend.master')

@section('title', 'Carts')

@section('content')
    <div class="container-xl">
        <div class="row">
            <div class="col-12">
                <div class="alert alert-info " role="alert">
                    <i class="fas fa-info-circle mr-2"></i>
                    Please transfer first before you confirm your payment.
                </div>
            </div>
            <div class="col-md-8">
                <x-card.card title="Carts" class="p-0">
                    <x-table.table-responsive>
                        <thead>
                            <tr>
                                <th class="text-center" style="width: 1%"></th>
                                <th>Series Name</th>
                                <th class="text-end" style="">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($carts as $cart)
                                <tr>
                                    <td>
                                        <x-button.button-delete id="{{ $cart->id }}"
                                            url="{{ route('carts.destroy', $cart->id) }}" title="" />
                                            {{-- <a href="{{ route('carts.destroy', $cart->id) }}"><i class="fas fa-eraser mr-2"></i></a> --}}
                                    <td>
                                        <p class="strong mb-1">{{ $cart->series->name }}</p>
                                    </td>
                                    <td class="text-end">
                                        <div class="text-dark">
                                            Rp. {{ number_format($cart->price) }}
                                        </div>
                                    </td>
                                </tr>
                            @endforeach
                            <tr>
                                <td colspan="2" class="font-weight-bold text-uppercase text-end">
                                    Grand Total
                                </td>
                                <td class="font-weight-bold text-end text-primary">
                                    Rp. {{ number_format($grandTotal) }}
                                </td>
                            </tr>
                        </tbody>
                    </x-table.table-responsive>
                </x-card.card>
                <x-card.card title="All Transactions">
                    <div class="list-group">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h3 class="text-uppercase">BCA</h3>
                                <div>
                                    <h4>0154652431</h4>
                                    <h4>An. PT FJS Corp International</h4>
                                </div>
                            </div>
                            <div class="avatar">
                                <img src="{{ asset('dist/img/payments/bca.png') }}" />
                            </div>
                        </div>
                        <hr class="mt-2 mb-2" />
                        {{-- <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h3 class="text-uppercase">Gopay</h3>
                                <div>
                                    <h4>082251415053</h4>
                                </div>
                            </div>
                            <span class="avatar">
                                <img src="{{ asset('dist/img/payments/gopay.png') }}" />
                            </span>
                        </div>
                        <hr class="mt-2 mb-2" />
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h3 class="text-uppercase">Ovo</h3>
                                <div>
                                    <h4>082251415053</h4>
                                </div>
                            </div>
                            <span class="avatar">
                                <img src="{{ asset('dist/img/payments/ovo.png') }}" />
                            </span>
                        </div> --}}
                    </div>
                </x-card.card>
            </div>
            <div class="col-md-4">
                <x-card.card title="Payment Confirmation">
                    <form action="{{ route('transactions.store') }}" method="POST">
                        @csrf
                        <x-form.input title="Tanggal Transfer" name="date_transfer" value="" placeholder="" type="date" />
                        <x-form.input title="Total Price" name="" value="Rp. {{ number_format($grandTotal) }}"
                            placeholder="" type="text" disabled />

                            <script>
                                CountDownTimer('{{ Carbon\Carbon::now("GMT+7") }}', 'countdown');

                                function CountDownTimer(dt, id) {
                                    var end = new Date('{{ Carbon\Carbon::now("GMT+7")->addMinutess(30) }}');
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
                                            return;
                                        }
                                        var days = Math.floor(distance / _day);
                                        var hours = Math.floor((distance % _day) / _hour);
                                        var minutes = Math.floor((distance % _hour) / _minute);
                                        var seconds = Math.floor((distance % _minute) / _second);
                                        document.getElementById(id).innerHTML = minutes + ' menit ';
                                        document.getElementById(id).innerHTML += seconds + ' detik';
                                        document.getElementById(id).innerHTML += '';
                                        // document.getElementById(id).innerHTML += '<h2>SEGERA APA?</h2>';
                                    }
                                    timer = setInterval(showRemaining, 1000);
                                }
                            </script>
                            <div id="countdown">
                                <br>
                        <x-button.button-save icon="check" title="Saya sudah transfer"
                            class="btn btn-primary w-full font-weight-bold text-uppercase" />
                    </form>
                </x-card.card>
            </div>
        </div>
    </div>
@endsection
