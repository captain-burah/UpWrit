<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>UpWrit Solutions</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700&display=swap" rel="stylesheet">
        <script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" crossorigin="anonymous"></script>
        
        <link rel="stylesheet" type="text/css" href="{{ asset('owlcarousel/assets/owl.carousel.min.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('owlcarousel/assets/owl.theme.default.min.css') }}">
        
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <script src="{{ asset('js/app.js') }}" defer></script>

        <style>
           
        </style>
    </head>
    <body>
        <div id="app" class="container">
            <index></index>
        </div>
        
        <script src="{{ asset('owlcarousel/jquery.min.js') }}"></script>
        <script src="{{ asset('owlcarousel/owl.carousel.min.js') }}"></script>
    </body>
</html>
