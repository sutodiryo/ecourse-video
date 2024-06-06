@extends('layouts.backend.master')

@section('title', 'Dashboard')

@section('content')
    <div class="container-xl">
        <div class="row">
            <div class="col-md-6 col-lg-3">
                <x-utilities.widget title="Members" subTitle="{{ $members }}" class="bg-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users" width="24"
                        height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                    </svg>
                </x-utilities.widget>
            </div>
            <div class="col-md-6 col-lg-3">
                <x-utilities.widget title="Series" subTitle="{{ $series }}" class="bg-azure">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-playlist" width="24"
                        height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <circle cx="14" cy="17" r="3"></circle>
                        <path d="M17 17v-13h4"></path>
                        <path d="M13 5h-10"></path>
                        <line x1="3" y1="9" x2="13" y2="9"></line>
                        <path d="M9 13h-6"></path>
                    </svg>
                </x-utilities.widget>
            </div>
            <div class="col-md-6 col-lg-3">
                <x-utilities.widget title="Affiliate Active" subTitle="{{ $affilates }}" class="bg-success">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-affiliate">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275" />
                        <path d="M11.683 12.317l5.759 -5.759" />
                        <path d="M5.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
                        <path d="M18.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
                        <path d="M18.5 18.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
                        <path d="M8.5 15.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0" />
                    </svg>
                </x-utilities.widget>
            </div>
            <div class="col-md-6 col-lg-3">
                <x-utilities.widget title="Income" subTitle="Rp. {{ number_format($income) }}" class="bg-teal">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-coin" width="24"
                        height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1"></path>
                        <path d="M12 6v2m0 8v2"></path>
                    </svg>
                </x-utilities.widget>
            </div>
            <div class="col-12">
                <div class="alert alert-info" role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-circle mr-1"
                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <circle cx="12" cy="12" r="9"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    You have <span class="text-danger">{{ $transactionVerified }}</span> payment transactions that must
                    be verified — <a href="{{ route('admin.transactions.index') }}">check it out!</a>
                </div>
            </div>
            <div class="col-12">
                <x-card.card title="Most Popular Series" class="p-0">
                    <x-table.table-responsive>
                        <thead>
                            <tr>
                                <th class="col-1">#</th>
                                <th>Name</th>
                                <th>Members</th>
                                <th>Author</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($bestSeries as $i => $data)
                                <tr>
                                    <td>{{ $i + $bestSeries->firstItem() }}</td>
                                    <td>{{ $data->name }}</td>
                                    <td>{{ $data->total }}</td>
                                    <td>{{ $data->author }}</td>
                                </tr>
                            @endforeach
                        </tbody>
                    </x-table.table-responsive>
                    <div class="d-flex justify-content-end mt-1">
                        {{ $bestSeries->links() }}
                    </div>
                </x-card.card>
            </div>
        </div>
    </div>
@endsection
