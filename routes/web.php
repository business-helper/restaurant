<?php



Route::get('/admin',function (){
   return view('admin.index');
});

Route::get('/restaurant',function (){
    return view('restaurant.index');
});

Route::get('test/order-email','HomeController@textOrderMail');



Route::get('/kitchen',function (){
    $data=Array();
    $data['fav_icon']=null;
    $data['site_title']=null;
    return view('kitchen.index',compact('data'));
});

Route::get('/cashier',function (){
    $data=Array();
    $data['fav_icon']=null;
    $data['site_title']=null;
    return view('cashier.index',compact('data'));
});


Route::get('/{any?}', function () {
    $data=Array();
    return view('customer.index',compact('data'));
})->where('any', '.*');

//Auth::routes();

//Route::get('/{any}', 'HomeController@index')->where('any', '.*');

