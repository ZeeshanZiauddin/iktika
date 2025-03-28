<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    <head>
        <x-head-tags/>
    </head>

<body class="antialiased relative">

    
    @yield('body')

    <!-- JAVASCRIPTS -->
   <x-foot-tags/>
    <!-- JAVASCRIPTS END-->

</body>

</html>