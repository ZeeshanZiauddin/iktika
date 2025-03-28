@extends('layouts.base')
@section('body')

    <x-navbar/>
    @yield('content')

    <x-footer/>

    @isset($slot)
        {{ $slot }}
    @endisset
@endsection
