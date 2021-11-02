<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <script> window.laravel = { csrfToken: '{{ csrf_token() }}' } </script>
        <meta content='width=device-width, initial-scale=1.0, shrink-to-fit=no' name='viewport' />

        <title>UpWrit Solutions</title>

        <!-- Fonts -->
        <link rel="preconnect" href="{{ ('//fonts.googleapis.com') }}">
        <link rel="preconnect" href="{{ ('//fonts.gstatic.com') }}" crossorigin>
        <link href="{{ ('//fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap') }}" rel="stylesheet">
        <link href="{{ ('//fonts.googleapis.com/css2?family=Dancing+Script&display=swap') }}" rel="stylesheet"> 
        <link href="{{ ('//fonts.googleapis.com/css2?family=Caveat&display=swap') }}" rel="stylesheet"> 
        <link href="{{ ('//fonts.googleapis.com/css?family=Nunito:200,600') }}" rel="stylesheet">
        <link href="{{ ('//fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap') }}" rel="stylesheet"> 
        <link href="{{ ('//fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700&display=swap') }}" rel="stylesheet">
        
        <link rel="stylesheet" type="text/css" href="{{ asset('owlcarousel/assets/owl.carousel.min.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('owlcarousel/assets/owl.theme.default.min.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ ('https://unpkg.com/aos@next/dist/aos.css') }}" />
        
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

        <style>
           
        </style>
    </head>
    <body>
        <div id="app" class="">
            <index></index>
        </div>
        <script src="{{ asset('js/app.js') }}" defer></script>
        <script src="{{ asset('owlcarousel/jquery.min.js') }}"></script>
        <script src="{{ asset('owlcarousel/owl.carousel.min.js') }}"></script>
        <script src="{{ ('https://use.fontawesome.com/releases/v5.15.3/js/all.js') }}" crossorigin="anonymous"></script>
        <script src="{{ ('https://kit.fontawesome.com/11e38db15a.js') }}" crossorigin="anonymous"></script>
        <script src="{{ ('https://unpkg.com/aos@next/dist/aos.js') }}"></script>
        <script>
          AOS.init();
        </script>
    </body>
</html>
