<?php

// Customer Part //
Broadcast::channel('order-event', function () {
    return true;
});

Broadcast::channel('customer-add-order', function () {
    return true;
});
Broadcast::channel('customer-cancel-order', function () {
    return true;
});

Broadcast::channel('cashier-order-action', function () {
    return true;
});

Broadcast::channel('kitchen-order-action', function () {
    return true;
});




//Cashier Part //



// Kitchen Part //


