<?php

return [
    'defaults' => [
        'guard' => 'admin',
        'passwords' => 'admin',
    ],

    'guards' => [
        'customer-api' => [
            'driver' => 'passport',
            'provider' => 'customer',
        ],
        'customer'=>[
            'driver' => 'session',
            'provider' => 'customer',
        ],

        'admin-api' => [
            'driver' => 'passport',
            'provider' => 'admin',
        ],
        'admin' => [
            'driver' => 'session',
            'provider' => 'admin',
        ],
        'restaurant-api'=>[
            'driver' => 'passport',
            'provider' => 'restaurant',
        ],
        'restaurant' => [
            'driver' => 'session',
            'provider' => 'restaurant',
        ],
        'employee' => [
            'driver' => 'session',
            'provider' => 'employee',
        ],
        'employee-api' => [
            'driver' => 'passport',
            'provider' => 'employee',
        ],
    ],


    'providers' => [
        'customer' => [
            'driver' => 'eloquent',
            'model' => App\Model\Customer::class,
        ],
        'admin' => [
            'driver' => 'eloquent',
            'model' => App\Model\Admin::class,
        ],
        'restaurant' => [
            'driver' => 'eloquent',
            'model' => App\Model\Restaurant::class,
        ],
        'employee' => [
            'driver' => 'eloquent',
            'model' => App\Model\Employee::class,
        ],
    ],

    'passwords' => [
        'customers' => [
            'provider' => 'customer',
            'table' => 'password_resets',
            'expire' => 60,
        ],
        'admin'=>[
            'provider' => 'admin',
            'table' => 'password_resets',
            'expire' => 60,
        ],
        'restaurant'=>[
            'provider' => 'restaurant',
            'table' => 'password_resets',
            'expire' => 60,
        ]
    ],

];
