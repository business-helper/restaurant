<?php

use Illuminate\Http\Request;

Route::Group(['namespace'=>'Api','prefix'=>'admin'],function (){
    Route::post('register','LoginController@adminRegister');
    Route::post('login','LoginController@adminLogin');
    Route::Group(['namespace'=>'Admin','middleware'=>'auth:admin-api'],function (){
        Route::post('restaurant/register', '\Api\LoginController@restaurantRegister');
        Route::get('restaurant/get_restaurants','RestaurantController@getRestaurants');
        Route::get('restaurant/delete/{id}','RestaurantController@deleteRestaurant');
        Route::get('restaurant/activate/{id}','RestaurantController@activateRestaurant');
        Route::get('restaurant/deactivate/{id}','RestaurantController@deActivateRestaurant');
        Route::get('restaurant/get_detail/{id}','RestaurantController@getDetail');


        Route::get('/get_card_setting','BusinessSettingController@getCardSetting');
        Route::post('/add_card_setting','BusinessSettingController@addCardSetting');


        Route::post('/add_tax','BusinessSettingController@addTax');
        Route::get('/get_tax','BusinessSettingController@getTax');

        Route::get('/get_dashboard_data','DashboardController@getDashboardData');
        Route::get('delete_customer/{id}','DashboardController@deleteCustomer');
        Route::post('add_product','BusinessSettingController@addProduct');
        Route::get('get_product','BusinessSettingController@getProduct');

        Route::post('add_plan','BusinessSettingController@addPlan');
        Route::get('get_plan','BusinessSettingController@getPlan');
    });
});

Route::Group(['namespace'=>'Api','prefix'=>'restaurant'],function () {
    Route::post('register', 'LoginController@restaurantRegister');
    Route::post('login', 'LoginController@restaurantLogin');

    Route::post('/feedbackOrder','Restaurant\OrderController@feedbackOrder');

    Route::Group(['namespace'=>'Restaurant','middleware'=>'auth:admin-api,restaurant-api'], function (){
        Route::get('/get_detail/{restaurant_id?}','RestaurantController@getDetail');
        Route::post('/update_account','RestaurantController@updateAccount');

        Route::get('/get_delivery_setting/{restaurant_id?}','RestaurantController@getDeliverySetting');
        Route::post('/updateDeliverySetting/{restaurant_id}','RestaurantController@updateDeliverySetting');


        Route::get('/get_card_setting','RestaurantController@getCardSetting');
        Route::post('/add_card_setting','RestaurantController@addCardSetting');
        Route::post('/updateTax','RestaurantController@updateTax');
        Route::post('update_opening_hours/{restaurant_id?}','RestaurantController@updateOpeningHours');


        Route::post('/add_category/{restaurant_id?}','CategoryController@addCategory');
        Route::get('/get_category_data/{restaurant_id?}','CategoryController@getCategoryData');
        Route::get('/category_list/{restaurant_id?}','CategoryController@getCategoryList');
        Route::get('/get_category/{id}','CategoryController@getCategory');
        Route::get('/delete_category/{id}','CategoryController@deleteCategory');


        Route::post('/add_size/{restaurant_id?}','FoodSizeController@addSize');
        Route::get('/get_size_list/{restaurant_id?}','FoodSizeController@getSizeList');
        Route::get('/get_size/{id}','FoodSizeController@getSize');
        Route::get('/delete_size/{id}','FoodSizeController@deleteSize');
        Route::post('/update_size','FoodSizeController@updateSize');


        Route::post('/add_option/{restaurant_id?}','FoodOptionController@addOption');
        Route::get('/get_information_for_option/{restaurant_id?}','FoodOptionController@getInformationForOption');
        Route::get('/get_option_list/{restaurant_id?}','FoodOptionController@getOptionList');
        Route::get('/delete_option/{id}','FoodOptionController@deleteOption');
        Route::get('/get_option/{id}/{restaurant_id?}','FoodOptionController@getOption');
        Route::post('/update_option','FoodOptionController@updateOption');


        Route::get('/get_information_for_create_menu/{restaurant_id?}','MenuController@getInformationForCreateMenu');
        Route::post('/add_menu/{restaurant_id?}','MenuController@addMenu');
        Route::get('/get_menu_list/{restaurant_id?}','MenuController@getMenuList');
        Route::get('/delete_menu/{id}','MenuController@deleteMenu');
        Route::get('/get_menu/{id}','MenuController@getMenu');

        Route::get('get_orders/{restaurant_id}','OrderController@getOrders');
        Route::get('get_accepted_orders/{restaurant_id}','OrderController@getAcceptedOrders');
        Route::post('read_orders','OrderController@readOrders');
        Route::post('kitchen_read_orders','OrderController@kitchenReadOrders');
        Route::get('prepare_order/{order_id}','OrderController@prepareOrder');
        Route::post('complete_order','OrderController@completeOrder');
        Route::post('close_order','OrderController@closeOrder');
        Route::get('accept_order/{id}','OrderController@acceptOrder');
        Route::post('reject_order','OrderController@rejectOrder');
        Route::get('get_card_token/{id}','RestaurantController@getCardToken');
        Route::get('get_dashboard_orders/{order_status}','RestaurantController@getDashboardOrders');
        Route::get('get_new_order/{order_id}','OrderController@getNewOrder');
        //dispatch order api route
        Route::post('/dispatchOrder','OrderController@dispatchOrder');

        Route::get('get_subscription_plans','RestaurantController@getSubscriptionPlans');
        Route::get('get_admin_stripe_key','RestaurantController@getAdminStripeKey');
        Route::post('create_customer','RestaurantController@createCustomer');
        Route::post('create_subscription','RestaurantController@createSubscription');
        Route::get('cancel_subscription/{id}','RestaurantController@cancelSubscription');
        Route::get('update_subscription/{current_id}/{update_id}','RestaurantController@updateSubscription');

        Route::get('get_logo/{restaurant_id?}','RestaurantController@getLogo');
        Route::post('add_logo/{restaurant_id?}','RestaurantController@addLogo');
    });
});

Route::Group(['namespace'=>'Api','prefix'=>'customer'],function (){
    Route::post('/register','LoginController@customerRegister');
    Route::post('/login','LoginController@customerLogin');
    Route::get('/logout','LoginController@customerLogout')->middleware('auth:customer-api');

    Route::Group(['namespace'=>'Frontend'],function (){
        Route::get('/get_one_restaurant','HomeController@getOneRestaurant');
        Route::get('/get_food_menus/{restaurant_id}','HomeController@getFoodMenus');
        Route::post('/get_frontend_data','HomeController@getFrontendData');
        Route::post('/checkout/{restaurant_id}','OrderController@checkOut');
        Route::post('/checkoutPos/{restaurant_id}','OrderController@checkOutPos');
        Route::get('/get_card_setting','OrderController@getCardSetting');

    });
});

