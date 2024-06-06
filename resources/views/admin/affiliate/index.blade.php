@extends('layouts.backend.master')

@section('title', 'Affiliates')

@section('content')
    <div class="container-xl">
        <div class="row">
            <div class="col-12">
                <x-card.card-action title="List Users" url="{{ route('admin.affiliates.index') }}">
                    <x-table.table-responsive>
                        <thead>
                            <tr>
                                <th class="col-1">#</th>
                                <th class="col-4">Name</th>
                                <th class="col-3">Email</th>
                                <th class="col-1">Sales</th>
                                <th class="col-3">Commision</th>
                                {{-- <th class="col-3">Income</th> --}}
                            </tr>
                        </thead>
                        <tbody>
                            {{-- @foreach (Specialist::all()->sortBy('description') as $oneSpecialist)
                                <option value="{{ $oneSpecialist->specialist_id }}"> {{ $oneSpecialist->description }}
                                </option>
                            @endforeach --}}

                            @foreach ($users as $i => $user)
                                <tr>
                                    <td>{{ $i + $users->firstItem() }}</td>
                                    <td>
                                        <a href="#">
                                            {{ $user->name }}
                                        </a>
                                    </td>
                                    <td>{{ $user->email }}</td>
                                    <td>
                                        {{ $user->affiliate->count() }}
                                    </td>
                                    <td>
                                        <sup>Rp</sup>
                                        {{-- {{ $user->affiliate ? $user->affiliate->sum('grand_total') : '0' }} --}}
                                        {{-- {{ $user->affiliate ? number_format((20 / 100) * $user->affiliate->sum('grand_total'), 0, ',', '.') : '0' }} --}}
                                        {{ $user->affiliate ? number_format((20 / 100) * $user->affiliate_sum_grand_total, 0, ',', '.') : '0' }}
                                    </td>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </x-table.table-responsive>
                    <div class="d-flex justify-content-end mt-1">{{ $users->links() }}</div>
                </x-card.card-action>
            </div>
        </div>
    </div>
@endsection
