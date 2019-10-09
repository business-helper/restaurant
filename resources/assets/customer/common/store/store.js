import 'es6-promise/auto'
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions';

Vue.use(Vuex)

//=======vuex store start===========
const store = new Vuex.Store({
    state: {
        cart_data:{},
        restaurant:{},
        food_menus:[],
        initialized:false,
        order_notification:[],
        order_info:{}
    },
    mutations: mutations,
    actions:actions,
    getters:{
        get_menu:(state)=>{
            let all_menus=state.food_menus;
            return all_menus;
        },
        get_stripe:(state)=>{
            let stripe="";
            let restaurant=state.restaurant;
            if(typeof restaurant.stripe_public_key !='undefined')
                stripe=restaurant.stripe_public_key;
            return stripe;
        },
        get_rest_location:(state)=>{
            let position={}
            let restaurant=state.restaurant;
            if(typeof restaurant.lat!="undefined" && restaurant.lat!=null && restaurant.lat!='null')
                position.lat=restaurant.lat;
            if(typeof restaurant.lng!="undefined" && restaurant.lng!=null && restaurant.lng!='null')
                position.lng=restaurant.lng;
            return position;
        },
        get_payment_option:(state)=>{
            let payment_option=['Before Order'];
            let restaurant=state.restaurant;
            if(typeof restaurant.payment_option!='undefined')
                payment_option=restaurant.payment_option;
            return payment_option;
        },
        theme:(state)=>{
            let theme="white";
            let restaurant=state.restaurant;
            if(typeof restaurant.theme !='undefined')
                theme=restaurant.theme;
            return theme;
        },
        get_tax:(state) =>{
            let restaurant=state.restaurant;
            let tax=restaurant.sales_tax;
            return parseInt(tax*100);
        },
        get_opening_hours:(state)=>{
            let opening_hours=[];
            let restaurant=state.restaurant;
            if(typeof restaurant.opening_hours!='undefined')
                opening_hours=restaurant.opening_hours;
            return opening_hours;
        },
        get_restaurant_id:(state) => {
            let restaurant_id=-1;
            let restaurant=state.restaurant;
            if(typeof restaurant.id!='undefined')
                restaurant_id=restaurant.id;
            return restaurant_id;
        },
        get_delivery_setting:(state) => {
            let delivery_setting= {
                min_amount:0,
                free_amount:'',
                max_distance:'',
                free_distance:'',
                extra_price_per_km:1
            };
            let restaurant=state.restaurant;
            if(typeof restaurant.delivery_setting!='undefined' && restaurant.delivery_setting.length>0)
                delivery_setting=restaurant.delivery_setting[0]
            return delivery_setting;
        },
        get_order_info:(state, getters)=>{
            let restaurant_id=getters.get_restaurant_id;
            let order_info={};
            let total_order_info=state.order_info;
            if(typeof total_order_info[restaurant_id.toString()]!='undefined')
                order_info=total_order_info[restaurant_id.toString()];
            return order_info;
        },
        get_cart_data:(state,getters) => {
            let restaurant_id=getters.get_restaurant_id;
            let cart_data=[];
            let total_cart_data=state.cart_data;
            if(typeof total_cart_data[restaurant_id.toString()]!='undefined')
                cart_data=total_cart_data[restaurant_id.toString()];
            return cart_data;
        },
        sub_total:(state,getters) =>{
            let restaurant_id=getters.get_restaurant_id;
            let sub_total=0;
            let cart_data;
            cart_data=typeof state.cart_data[restaurant_id.toString()]!='undefined' ? state.cart_data[restaurant_id.toString()] : [];
            cart_data.forEach(function (item) {
                sub_total+=item.price;
            })
            sub_total=parseFloat(sub_total.toFixed(2));
            return sub_total;
        },
        total_price:(state,getters)=>{
            return parseFloat((getters.sub_total+getters.sub_tax).toFixed(2));
        },
        cart_count:(state, getters)=>{
            let cart_data=getters.get_cart_data;
            return cart_data.length;
        },
        customer:state => {
            return state.customer;
        },
    }
});

//=======vuex store end===========
export default store
