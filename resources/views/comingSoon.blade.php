<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta content='width=device-width, initial-scale=1.0, shrink-to-fit=no' name='viewport' />

        <link rel="icon" type="image/png" href="{{asset('img/favicon/5.png')}}">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <script> window.laravel = { csrfToken: '{{ csrf_token() }}' } </script>
        <title>UpWrit Solutions</title>
        
        <!-- Font Awesome icons (free version)-->
        <script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" crossorigin="anonymous"></script>
        
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Concert+One&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        
    </head>

    
    <body class="d-flex flex-column">
        <div id="app">
            <comingsoon></comingsoon>
        </div>
        <script src="{{ asset('js/app.js') }}" defer></script>
    </body>
</html>
