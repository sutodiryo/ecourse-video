@extends('layouts.frontend.master')

@section('title', 'Checkout')

@section('content')
    <div class="container-xl">
        <div class="row">
            <div class="col-12">
                <div class="alert alert-info " role="alert">
                    <i class="fas fa-info-circle mr-2"></i>
                    Please transfer first before you confirm your payment.
                </div>
            </div>
            <div class="col-8">
                <x-card.card title="Checkout" class="p-0">
                    <x-table.table-responsive>
                        <thead>
                            <tr>
                                <th>Series Name</th>
                                <th class="text-end" style="">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {{-- @foreach ($carts as $cart) --}}
                            <tr>
                                <td>
                                    <p class="strong mb-1">{{ $series->name }}</p>
                                </td>
                                <td class="text-end">
                                    <div class="text-dark">
                                        Rp. {{ number_format($series->price) }}
                                    </div>
                                </td>
                            </tr>
                            {{-- @endforeach --}}
                            <tr>
                                <td colspan="1" class="font-weight-bold text-uppercase text-end">
                                    Grand Total
                                </td>
                                <td class="font-weight-bold text-end text-primary">
                                    Rp. {{ number_format($series->price) }}
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
            <div class="col-4">
                <x-card.card title="Payment Confirmation">
                    <form action="{{ route('transactions.store_affiliates') }}?id={{ $user->uu_id }}&sid={{ $series->id }}" method="POST">
                        @csrf
                        <div class="mb-3">
                            <label class="form-label">Bank Transfer</label>
                            <select type="text" class="form-select tomselected ts-hidden-accessible" id="banks"
                                name="method_of_payment" tabindex="-1">

                                @foreach ($banks as $b)
                                    <option value="{{ $b['name'] }}">{{ $b['name'] }}</option>
                                @endforeach

                            </select>
                        </div>
                        <x-form.input title="Nomor Rekening" name="bank_transfer" value=""
                            placeholder="Nomor Rekening Anda" type="text" />

                        <x-form.input title="Nama Lengkap Rekening Bank" name="name_of_bank" value=""
                            placeholder="Nama Lengkap Rekening Bank" type="text" />

                        <div class="mb-3">
                            <label class="form-label">Alamat Email</label>
                            <input type="email" class="form-control @error('email') is-invalid @enderror"
                                placeholder="Enter email" name="email">
                            @error('email')
                                <div class="invalid-feedback">
                                    {{ $message }}
                                </div>
                            @enderror
                        </div>


                        {{-- <x-form.select title="Bank Transfer" name="method_of_payment">
                            <option value="BCA">Bank BCA</option> --}}
                        {{-- <option value="gopay">Gopay</option>
                            <option value="ovo">Ovo</option> --}}
                        {{-- </x-form.select> --}}
                        <x-form.input title="Tanggal Transfer" name="date_transfer" value="" placeholder=""
                            type="date" />
                        <x-form.input title="Total Price" name="" value="Rp. {{ number_format($series->price) }}"
                            placeholder="" type="text" disabled />
                        <x-button.button-save icon="check" title="Confirmation"
                            class="btn btn-primary w-full font-weight-bold text-uppercase" />
                    </form>
                </x-card.card>
            </div>
        </div>
    </div>
@endsection
