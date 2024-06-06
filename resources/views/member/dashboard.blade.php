@extends('layouts.frontend.master')

@section('title', 'Dashboard')

@section('content')


    <!-- Flexbox container for aligning the toasts -->
    <div aria-live="polite" aria-atomic="true" style="position: relative; z-index:999999 !important;">
        <div class="toast" style="position: absolute; top: 0; right: 0;" id="copied_toast">
            <div class="toast-body">
                Link has been copied to the clipboard ...
            </div>
        </div>
    </div>

    <div class="container-xl">
        <div class="row">
            <div class="col-md-6 col-lg-3">
                <a href="{{ route('series.index') }}">
                    <x-utilities.widget title="My Series" subTitle="{{ $series }}" class="bg-primary">
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
                </a>
            </div>

            <div class="col-12">
                <x-card.card-action title="Series" url="{{ route('admin.transactions.index') }}">
                    <x-table.table-responsive>
                        <thead>
                            <tr>
                                <th class="w-1">#</th>
                                <th>Series Name</th>
                                <th>Share Link</th>
                                <th>Affilates Sales</th>
                                <th>Affilates Income</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($products as $i => $p)
                                <tr>
                                    <td class="text-default">{{ $i + 1 }}</td>
                                    <td class="text-default">
                                        {{-- <a href="{{ route('series.show', $p->slug) }}"> --}}
                                        {{ $p->name }}
                                        {{-- </a> --}}
                                    </td>
                                    <td class="text-muted">
                                        <div class="input-group mb-2">
                                            @if (Auth::user()->uu_id && $p->status == 1)
                                                <input type="text" class="form-control" id="copy_{{ $p->slug }}"
                                                    value="{{ route('ref.index', [$p->slug, Auth::user()->uu_id]) }}">
                                                <button class="btn" type="button"
                                                    onclick="copyToClipboard('copy_{{ $p->slug }}')">Copy</button>
                                            @else
                                                -
                                            @endif
                                        </div>
                                    </td>
                                    <td class="text-muted">{{ $p->transaction_count }} Sales</td>
                                    <td class="text-muted">
                                        <sup>Rp</sup>
                                        {{ number_format((20 / 100) * $p->transaction_sum_grand_total, 0, ',', '.') }}
                                    </td>
                                    <td>
                                        <span class="badge bg-{{ $p->status == 0 ? 'warning' : 'success' }}">
                                            {{ $p->status == 0 ? 'Coming Soon' : 'Released' }}
                                        </span>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </x-table.table-responsive>
                </x-card.card-action>
            </div>
        </div>
    </div>

    <script>
        function copyToClipboard(id) {
            document.getElementById(id).select();
            document.execCommand('copy');

            const toastLiveExample = document.getElementById('copied_toast')
            const toast = new bootstrap.Toast(toastLiveExample)

            toast.show()
        }
    </script>
@endsection
