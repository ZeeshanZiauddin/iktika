@extends('layouts.app')

@section('content')


    <div id="content">
        <main class="bg-primary-green-600">


            <section class="main-content-container">

                <section class="px-7 py-10 work-section" data-header-color="green" data-animation="fade-in">
                    <div class="py-16">

                        <div class="mx-auto mb-5 rounded-xl overflow-hidden" style="max-width: 650px">
                            <img src="{{asset('storage/' . $marketing['images'])}}" alt="">
                        </div>
                        <div class="mx-auto" style="max-width: 650px">
                            <h1 class="text-4xl  font-bold">{{$marketing['long_title']}}</h1>
                            <div class="text-lg  mt-8">
                                {!! $marketing['description'] !!}
                            </div>
                        </div>

                    </div>

                </section>


            </section>
        </main>
    </div>

@endsection