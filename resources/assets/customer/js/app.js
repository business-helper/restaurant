
require('./bootstrap');

import Vue from "vue";
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';

window.axios = require('axios');

Vue.use(BootstrapVue);
Vue.use(VueRouter);

import Home from '../components/Home';
import Menu from '../components/Menu';
import Register from '../components/Register';
import Login from '../components/Login';
import Checkout from '../components/Checkout';
import MyOrders from '../components/MyOrders';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import OrderOnline from '../components/OrderOnline';
import PickUp from '../components/PickUp';

import ApiService from "../common/api.service";
import store from "../common/store/store.js";
import _ from 'lodash';

import VueWorker from 'vue-worker';
Vue.use(VueWorker);

import VueScrollTo from 'vue-scrollto';
Vue.use(VueScrollTo);
import Notifications from 'vue-notification';

Vue.use(Notifications);

Vue.component('footer1', require('../components/SiteFooter.vue').default);
Vue.component('header1',require('../components/SiteHeader').default)

import VuejsClipper from 'vuejs-clipper';
Vue.use(VuejsClipper ,{
    components: {
        clipperBasic: true,
        clipperPreview: true,
        clipperUpload:true,
        clipperFixed:true,
    }
})

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps,
    {
        load: {
            key: 'AIzaSyDMrIaIY6QY_kiOz0VSZkN36HBd4cnfkH8',
            libraries: 'places', // This is required if you use the Autocomplete plugin
        },
    }
)

import VueGeolocation from 'vue-browser-geolocation';
Vue.use(VueGeolocation);


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import VModal from 'vue-js-modal';
Vue.use(VModal, { dynamic: true, dynamicDefaults: { clickToClose: false } });
import productModal from '../components/productModal.vue';
import orderModal from '../components/orderModal.vue';

ApiService.init();
const router = new VueRouter({
    mode: 'hash',
    base: window.location.pathname,
    linkActiveClass: "active",
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/pick-up',
            name: 'pick-up',
            component: PickUp,
        },
        {
            path: '/menus',
            name: 'menus',
            component: Menu,
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/checkout',
            name: 'checkout',
            component: Checkout,
        },
        {
            path: '/myorders',
            name: 'myorders',
            component: MyOrders,
        },
        {
            path: '/contactus',
            name: 'contactus',
            component: ContactUs,
        },
        {
            path: '/aboutus',
            name: 'aboutus',
            component: AboutUs,
        },
        {
            path: '/order-online',
            name: 'order-online',
            component: OrderOnline,
        },
    ],
});

Vue.use(_);
const app = new Vue({
    el: '#app',
    router,
    store,
    components:{
        productModal,
        orderModal
    },
    beforeMount(){
        this.$store.commit('initialize_store');
    }
});
