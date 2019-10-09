<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/png" href="/favicon.png"/>
    <title>Best Restaurant</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <script>var site_url="{{url('/')}}";</script>
    <link rel="stylesheet" href="{{asset('library/fontawesome5.7.2/css/fontawesome.css')}}">
    <!-- Fonts -->
    <link rel="stylesheet" href="{{asset('library/bootstrap4.2.1.css')}}">
    <link href="//fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link href="{{asset('/library/themify-icons/themify-icons.css')}}" rel="stylesheet">

    <link rel="stylesheet" href="{{asset('Customer/css/general.css')}}">
    <script src="//js.stripe.com/v3/"></script>

    <style>
        .order-notification{
            top:150px !important;
        }
    </style>

</head>
<body>
    <div id="app">
        <modals-container></modals-container>
{{--        <header1></header1>--}}
        <div id="content-outer-wrapper">
            <router-view></router-view>
        </div>
{{--        <footer1></footer1>--}}
        <product-modal></product-modal>
        <order-modal></order-modal>
        <notifications group="foo" classes="vue-notification order-notification" />
    </div>
    <script src="{{asset('manifest.js')}}"></script>
    <script src="{{asset('js/vendor.js')}}"></script>
    <script src="{{asset('js/app.js')}}"></script>
</body>
</html>

