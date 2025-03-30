@extends('layouts.app')

@section('content')


    <div id="content">
        <main class="bg-primary-green-600">


            <section class="main-content-container">

                <section class="px-7 py-10 work-section" data-header-color="green" data-animation="fade-in">
                    <div class="py-16">
                        <div class="mx-auto mb-5 grid grid-cols-2 gap-4" style="max-width: 650px">
                            @foreach ($webWork['images'] as $index => $image)
                                <img src="{{ asset('storage/' . $image) }}" alt=""
                                    class="rounded-xl border shadow-sm overflow-hidden {{ count($webWork['images']) === 3 && $index === 0 ? 'col-span-2' : '' }}">
                            @endforeach
                        </div>

                        <div class="mx-auto" style="max-width: 650px">
                            <h1 class="text-4xl  font-bold">{{$webWork['title']}}</h1>
                            <div class="text-lg  mt-8">
                                {!! $webWork['description'] !!}
                            </div>
                        </div>

                    </div>

                </section>


            </section>
        </main>
    </div>

@endsection