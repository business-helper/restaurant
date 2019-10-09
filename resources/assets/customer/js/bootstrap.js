window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */
// window.Popper = require('popper.js').default;
// window.$ = window.jQuery = require('jquery');
// require('bootstrap');
try {
    //
    // window.Popper = require('popper.js').default;
    // window.$ = window.jQuery = require('jquery');
    // require('bootstrap');




    window.Popper = require('../../../../public/library/popper1.14.6.min.js').default;
    window.$ = window.jQuery = require('../../../../public/library/jquery.3.3.1.js');
    require('../../../../public/library/bootstrap4.2.1.js');
    // require('../../public/library/bootstrap4.2.1.css');
} catch (e) {
    console.log(e);
}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: //laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

import Echo from 'laravel-echo'
//
window.Pusher = require('pusher-js');
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    encrypted: true
});
window.Vuemit = require('vuemit');


window.GOOGLE_AUTOCOMPLETE = {
    // 'domain': 'https://maps.googleapis.com/maps/api/js',
    // 'key': 'AIzaSyDMrIaIY6QY_kiOz0VSZkN36HBd4cnfkH8',
    // 'library': 'places',

    // google inputs retrieved.
    'inputs': {
        administrative_area_level_1: 'long_name',
        street_number: 'short_name',
        postal_code: 'short_name',
        locality: 'long_name',
        country: 'long_name',
        route: 'long_name'
    }
}


//
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });
