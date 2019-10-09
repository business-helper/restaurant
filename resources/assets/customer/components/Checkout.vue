<template>
    <div id="checkout-page">
        <modal name="address-modal" transition="nice-modal-fade" id="address-modal"
               :height="'auto'" :adaptive="true" :maxWidth="500" :maxHeight="600">
            <div class="modal-header">
                <h4 class="modal-title">Select You address</h4>
                <button type="button" class="close" id="address-modal-close" @click="$modal.hide('address-modal')"><i class="ti-close"></i></button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label>Address</label>
                    <google-autocomplete
                        class = "input form-control"
                        input_id = "address"
                        :config = "{type: ['geocode']}"
                        placeholder = "Your address here"
                    >
                    </google-autocomplete>
                </div>
                <GmapMap
                    ref="mapRef"
                    :center="mapCenterLocation"
                    :zoom="7"
                    map-type-id="terrain"
                    style="width: 100%; height: 300px"
                    :animation="3"
                    :options="{
                       zoomControl: true,
                       mapTypeControl: true,
                       scaleControl: true,
                       streetViewControl: true,
                       rotateControl: true,
                       fullscreenControl: true,
                       disableDefaultUi: false
                     }"
                >
                    <GmapMarker v-if="Object.keys(rest_location).length>0"
                        :position="rest_location",
                        :icon="{
                            url: require('../img/restaurant_location.png'),
                            size: {width: 60, height: 90, f: 'px', b: 'px',},
                            scaledSize: {width: 30, height: 45, f: 'px', b: 'px'}
                        }"
                        :clickable="false"
                        :draggable="false"
                        @click="clickMarker($event)"
                        @dragend="dragEnded($event)"
                    />
                    <GmapMarker v-if="Object.keys(temp_myLocation).length>0"
                        :position="temp_myLocation"
                        :clickable="true"
                        :draggable="false"
                        @click="clickMarker($event)"
                        @dragend="dragEnded($event)"
                    />
                </GmapMap>
                <h5 style="color: #111; margin-top:30px;margin-bottom:0px;font-weight:normal; text-align:right">
                    <span>Distance: </span>{{temp_distance!='' ? temp_distance.toFixed(2)+'Km' : ''}} ({{temp_delivery_price}}$)
                </h5>
                <div class="form-group" style="margin-top:0px; margin-bottom:10px">
                    <label>Unit</label>
                    <input class="form-control" v-model="temp_unit">
                </div>
                <div class="form-group">
                    <label>Delivery Instruction</label>
                    <input class="form-control" v-model="temp_delivery_instruction">
                </div>
            </div>
            <div class="modal-footer">
                <div class="text-danger text-right" style="display: block;width: 100%;margin-top: -10px;"
                    v-if="temp_address==='' || temp_distance==='' || temp_distance>delivery_setting.max_distance"
                >
                    {{temp_address==='' ? "Address can not be null" : ""}}
                    {{temp_address!=='' && temp_distance==='' ? "We can not calculate route to your address" : ""}}
                    {{temp_distance!=='' && temp_distance>delivery_setting.max_distance ? "Desitination place should be in "+delivery_setting.max_distance+"Km range" : ""}}
                </div>
                <button class="btn btn-danger" @click="$modal.hide('address-modal')">Cancel</button>
                <button class="btn btn-success"
                    :disabled="temp_address==='' || temp_distance==='' || temp_distance>delivery_setting.max_distance"
                    @click="saveAddress"
                >
                    Confirm
                </button>
            </div>
        </modal>

        <div class="page-title bg-dark dark">
            <div class="bg-image bg-parallax" style="background-image: url('public/Images/bg-croissant.jpg');"><img src="public/Images/bg-croissant.jpg" alt=""></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 push-lg-4">
                        <h1 class="mb-0">Checkout</h1>
                        <h4 class="text-muted mb-0">Please checkout and enjoy our food.</h4>
                    </div>
                </div>
            </div>
        </div>
        <section class="section bg-light">
            <div class="container">
                <vue-form :state="formstate" @submit.prevent="onSubmit">
                    <div class="row">
                        <div class="col-xl-4 push-xl-8 col-lg-5 push-lg-7">
                            <div class="shadow bg-white stick-to-content mb-4">
                                <div class="bg-dark dark p-4"><h5 class="mb-0">You Cart</h5></div>
                                <table class="table-cart">
                                    <tr v-for="(menu,index) in cart_data">
                                        <td class="title">
                                            <div class="qty-name-container">
                                                <span class="qty">
                                                        {{menu.qty}}x
                                                </span>
                                                <span class="name">
                                                    {{menu.productData.name}}
                                                </span>
                                            </div>
                                            <span class="option-item">Price{{menu.selected_size_index>-1 ? ` (${menu.productData.size[menu.selected_size_index].name}) ` : ''}}: </span>
                                            <strong class="option-item">{{menu.selected_size_index>-1 ? `${menu.productData.size[menu.selected_size_index].price}` : `${menu.productData.price}`}}</strong>
                                            <div v-for="(option_tag,tag_index) in menu.productData.option_tags">
                                                <h6 class="caption option-item"  v-for="(option_item,item_index) in option_tag.items" v-if="option_item.checked">
                                                    <span class="option-item-label">{{option_item.count>1 ? `${option_item.count}x  ` : ''}}{{option_tag.title}}: </span>
                                                    {{option_item.name}}<strong>{{option_item.price>0 ? `(+${option_item.price})` : ''}}</strong>
                                                </h6>
                                            </div>
                                        </td>
                                        <td class="price">$ {{menu.price}}</td>
                                        <td class="actions">
                                            <a href="javascript:void(0)" class="action-icon" @click="editOrder(menu,index)"><i class="ti ti-pencil"></i></a>
                                            <a href="javascript:void(0)" class="action-icon" @click="deleteOrder(index)"><i class="ti ti-close"></i></a>
                                        </td>
                                    </tr>
                                </table>
                                <div class="cart-summary">
                                    <div class="row">
                                        <div class="col-7 text-right">Sub total:</div>
                                        <div class="col-5"><strong>$ {{sub_total}}</strong></div>
                                    </div>
                                    <div class="row" v-if="model.order_type==='delivery' && model.delivery_price>0">
                                        <div class="col-7 text-right">Delivery Fee:</div>
                                        <div class="col-5"><strong>$ {{model.delivery_price!='' ? model.delivery_price : ''}}</strong></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-7 text-right">Sales Tax({{tax}}%):</div>
                                        <div class="col-5"><strong>$ {{sub_tax}}</strong></div>
                                    </div>
                                    <hr class="hr-sm">
                                    <div class="row text-lg">
                                        <div class="col-7 text-right">Total:</div>
                                        <div class="col-5"><strong>${{total_price}}</strong></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-8 pull-xl-4 col-lg-7 pull-lg-5">
                            <div class="bg-white p-4 p-md-5 mb-4">
                                <h4 class="border-bottom pb-4"><i class="ti ti-user mr-3 text-primary"></i>Basic informations</h4>
                                <div class="row mb-5">
                                    <div class="form-group col-sm-6">
                                        <validate tag="div">
                                            <label>Name:</label>
                                            <input type="text" name="name" v-model="model.name" class="form-control" required autofocus autocomplete="none">
                                            <field-messages name="name" show="$invalid && $submitted"
                                                            class="text-danger">
                                                <div slot="required">Name is a required</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                    <div class="form-group col-sm-6">
                                        <label>Phone number:</label>
                                        <vue-tel-input :onlyCountries="['US']" :enabledCountryCode="false" :required="true" autocomplete="off" @onInput="onInput" :class="{'phone_number':true,'error':true}" name="phone_number" v-model="phone.number" autocomplte="none"></vue-tel-input>
                                        <div class="text-danger" v-if="!phone.isValid">
                                            Phone Number is invalid
                                        </div>
                                        <div class="text-danger" v-if="model.phone=='' && formstate.$submitted">
                                            Phone Number is required
                                        </div>
                                    </div>
                                    <div class="form-group col-sm-6">
                                        <validate tag="div">
                                            <label>E-mail address:</label>
                                            <input type="email" name="email" v-model="model.email" class="form-control" required autofocus autocomplete="none">
                                            <field-messages name="email" show="$invalid && $submitted"
                                                            class="text-danger">
                                                <div slot="required">Email is a required field</div>
                                                <div slot="email">Email is not valid</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>
                                <h4 class="border-bottom pb-4"><i class="ti ti-wallet mr-3 text-primary"></i>Payment</h4>
                                <div class="payment-option-selector-container">
                                    <div v-for="payment_option_item in payment_options"
                                         :class="{'payment-option-select-item':true,'active':model.selected_payment_option===payment_option_item}"
                                         @click="changePaymentOption(payment_option_item)"
                                    >
                                        {{payment_option_item=='On Arrival' ?  payment_option_item : 'Pay Now'}}
                                    </div>
                                </div>
                                <div class="text-lg card-container mb-5" v-if="stripe!=='' && model.selected_payment_option==='Before Order'">
                                    <card-number class='stripe-element card-number'
                                         ref='cardNumber'
                                         :stripe='stripe'
                                         :options='options'
                                         @change='number = $event.complete'
                                    />
                                    <card-expiry class='stripe-element card-expiry'
                                                 ref='cardExpiry'
                                                 :stripe='stripe'
                                                 :options='options'
                                                 @change='expiry = $event.complete'
                                    />
                                    <card-cvc class='stripe-element card-cvc'
                                              ref='cardCvc'
                                              :stripe='stripe'
                                              :options='options'
                                              @change='cvc = $event.complete'
                                    />
                                    <div class="text-danger" v-if="!complete && formstate.$submitted">Card data is incorrect</div>
                                </div>

                                <h4 class="border-bottom pb-2" style="margin-top:100px !important"><i class="ti ti-package mr-3 text-primary"></i>Order</h4>
                                <div class="order-content-holder">
                                    <div class="row mb-2">
                                        <div class="form-group col-sm-6">
                                            <label>Select Date:</label>
                                            <div class="select-container">
                                                <select class="form-control" v-model="model.order_date" @change="changeOrderDate">
                                                    <option v-for="(day,index) in day_lists" :value="day.date"
                                                            :disabled="!day.day_enabled">{{day.date_string}}
                                                    </option>
                                                </select>
                                                <div class="text-danger" v-if="model.order_date==='' && formstate.$submitted">Order Date is needed</div>
                                            </div>
                                        </div>
                                        <div class="form-group col-sm-6 order-time-selector">
                                            <label style="display:block">Select Time:</label>
                                            <div class="select-container">
                                                <time-picker v-if="model.order_date!==''" v-model="model.order_time"
                                                     format="A" :minute-interval="15" :value="model.order_time"
                                                     :start_time="start_hour" :start_minute="start_minute"
                                                     :end_time="end_hour"
                                                     :end_minute="end_minute"></time-picker>
                                                <select class="form-control" v-else disabled></select>
                                                <div v-if="model.order_time==='' && formstate.$submitted"
                                                     class="text-danger">Order time is required
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <label style="display:block">Select Order Type:</label>
                                    <div class="order-type-selection-container">
                                        <div :class="{'order-type-item':true,'active':model.order_type==='pick-up'}" @click="changeOrderType('pick-up')">Pick Up</div>
                                        <div :class="{'order-type-item':true,'active':model.order_type==='delivery'}" @click="changeOrderType('delivery')">Delivery</div>
                                    </div>
                                    <div class="form-group" v-if="model.order_type==='delivery'">
                                        <label>Address:</label>
                                        <input class="form-control" autocomplete="off" :value="model.address" autocomplte="none" readonly style="background: white !important;" @click="showAddressModal">
                                        <div class="text-danger" v-if="model.address=='' && formstate.$submitted">
                                            Address is required
                                        </div>
                                        <h5 class="text-right" v-if="model.distance!='' && model.distance!=0">
                                            <span>{{model.distance}}Km, ${{model.delivery_price}}</span>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center">
                                <VueLoadingButton type="submit" aria-label='Order now!' class="btn btn-primary btn-lg btn-order" :loading="button_loading" :disabled="cart_data.length==0">
                                    <span>Order now!</span>
                                </VueLoadingButton>
                            </div>
                        </div>
                    </div>
                </vue-form>
            </div>
        </section>
        <footer id="footer">
            <div class="footer-container">
                <div class="start-order-btn-wrapper">
                    <button class="order-operation-btn btn btn-primary" @click="gotoMenu">GO TO MENU </button>
                </div>
                <div class="cancel-order-btn-wrapper">
                    <button class="btn btn-danger order-operation-btn" @click="clearCart">Cancel Order</button>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    import '../../../../public/css/themes/theme-beige.css';
    import 'vue-tel-input/dist/vue-tel-input.css';
    import VueTelInput from 'vue-tel-input';
    import Vue from 'vue';
    import VueForm from "vue-form";
    import options from "../common/validation";

    import DatePicker from 'vuejs-datepicker';
    import ApiService from '../common/api.service';
    import { createToken } from 'vue-stripe-elements-plus'
    import { CardNumber, CardExpiry, CardCvc } from 'vue-stripe-elements-plus';
    import VueTimepicker from '../../globalComponents/vue2-timepicker/vue-timepicker';
    import GoogleAutocomplete from 'google-autocomplete-vue';


    import VueLoadingButton from 'vue-loading-button';
    import XDate from "xdate";
    import JQuery from 'jquery';
    let $ = JQuery;

    Vue.use(VueForm,options);

    export default {
        name: "Checkout",
        data(){
            return {
                model:{
                    phone:'',
                    name:'',
                    email:'',
                    order_full_date:'',
                    order_date:"",
                    order_time:'',
                    order_table:-1,
                    token_id:'',
                    order_type:'pick-up',
                    amount:0,
                    cart_data:[],
                    table_number:null,
                    restaurant_id:'',
                    selected_payment_option:"",
                    delivery_unit:'',
                    address:'',
                    distance:'',
                    delivery_instruction:'',
                    delivery_price:0,
                    myLocation:{

                    },
                },
                restaurant_name:'',
                start_hour:0,
                end_hour:0,
                start_minute:0,
                end_minute:0,
                timer:'',
                phone:{
                    number: '',
                    isValid: true,
                    country: undefined,
                },
                formstate: {},
                options: {
                    style: {
                        base: {
                            color: '#303238',
                            fontSize: '16px',
                            fontFamily: '"Open Sans", sans-serif',
                            fontSmoothing: 'antialiased',
                            '::placeholder': {
                                color: '#CFD7DF',
                            },
                        },
                        invalid: {
                            color: '#e5424d',
                            ':focus': {
                                color: '#303238',
                            },
                        },
                        padding:'5px'
                    },
                    hidePostalCode: true,
                },
                complete: false,
                number: false,
                expiry: false,
                cvc: false,
                button_loading:false,
                button_styled:true,
                output: {}, address: {}, sent: false, response: {}, config: {},
                center: {
                    lat: 41.6005450,
                    lng: -93.609
                },
                temp_unit:'',
                temp_address:'',
                temp_delivery_instruction:'',
                temp_distance:'',
                temp_myLocation:{
                },
                directionsService: null,
                directionsDisplay: null,
            }
        },

        computed:{
            stripe(){
                return this.$store.getters.get_stripe
            },
            cart_data() {
                return this.$store.getters.get_cart_data;
            },
            sub_total(){
                return this.$store.getters.sub_total;
            },
            sub_tax(){
                var sub_total=this.sub_total;
                var delivery_price=0;
                var tax=this.tax;
                if(this.model.order_type==='delivery'){
                    if(this.model.delivery_price!='')
                        delivery_price=this.model.delivery_price;
                }
                return parseFloat(((delivery_price+sub_total)*tax/100).toFixed(2));
            },
            total_price(){
                var delivery_price=0;
                if(this.model.order_type=='delivery')
                    delivery_price=this.model.delivery_price;
                return parseFloat((this.sub_total+delivery_price+this.sub_tax).toFixed(2));
            },
            tax(){
                return this.$store.getters.get_tax;
            },

            day_lists(){
                let opening_hours=this.$store.getters.get_opening_hours;
                let day_lists=[];
                if(typeof opening_hours!="undefined"){
                    let today=new XDate();
                    for(let i=0;i<4;i++){
                        let new_date=today.addDays(i);
                        let day_number=new_date.getDay();
                        let date_string="";
                        let date="", day, day_enabled;
                        if(typeof opening_hours[day_number]!='undefined' && typeof opening_hours[day_number]['opening_state']!='undefined' )
                            day_enabled=opening_hours[day_number].opening_state;
                        if(i==0)
                            date_string="Today";
                        else if(i==1)
                            date_string="Tomorrow";
                        else
                            date_string=new_date.toString("MMM dd, yyyy");
                        date=new_date.toString("yyyy-MM-dd");
                        day=new_date.toString("dddd");
                        day_lists.push({
                            date_string:date_string,
                            date:date,
                            day:day,
                            day_enabled:day_enabled
                        });
                    }

                }
                return day_lists;
            },

            payment_options(){
                return this.$store.getters.get_payment_option;
            },
            rest_location(){
                return this.$store.getters.get_rest_location;
            },
            mapCenterLocation(){
                let myLocation=this.temp_myLocation;
                let rest_location=this.rest_location;
                let center={
                    lat: 41.6005450,
                    lng: -93.609
                }
                if(Object.keys(myLocation).length>0){
                    center=myLocation;
                }
                else{
                    if(Object.keys(rest_location).length>0)
                        center=rest_location;
                }
                return center;
            },

            delivery_setting(){
                return this.$store.getters.get_delivery_setting;
            },

            temp_delivery_price(){
                let delivery_price=0;
                let sub_total=this.sub_total;
                let delivery_setting=this.delivery_setting;
                let base_price=parseFloat(delivery_setting.base_price);
                let temp_distance=this.temp_distance;
                let free_distance=delivery_setting.free_distance ? parseFloat(delivery_setting.free_distance) : 10000;
                let free_amount=delivery_setting.free_amount ? parseFloat(delivery_setting.free_amount) : 100000;
                if(temp_distance==='')
                    return '';
                if(sub_total>=free_amount){
                    return 0;
                }
                else{
                    if(temp_distance<=free_distance)
                        return parseFloat(delivery_setting.base_price);
                    else{
                        let extra_price_per_km=parseFloat(delivery_setting.extra_price_per_km);
                        delivery_price=base_price+(extra_price_per_km*temp_distance-free_distance);
                        return parseFloat(delivery_price.toFixed(2));
                    }
                }
            }
        },

        methods:{
            onInput({ number, isValid, country }) {
                this.model.phone = number;
                this.phone.isValid = isValid;
                this.phone.country = country && country.name;
            },

            onSubmit(){
                if (this.formstate.$invalid ||!this.model.order_date==="" || this.model.order_time==="") {  //check name, email, phone, and credit card information
                    return;
                }
                if(this.model.selected_payment_option==='Before Order' && !this.complete)
                    return;
                if(this.model.order_type==="delivery" && this.model.address==='')
                    return;
                this.checkOutCart();
            },

            gotoMenu(){
                this.$router.push(`pick-up?restaurant=${this.restaurant_name}`);
            },

            clearCart(){
                this.$store.commit('clearCart');
                this.$router.push(`pick-up?restaurant=${this.restaurant}`);
            },

            changeOrderDate(){
                let order_date=this.model.order_date;
                let opening_hours=this.$store.getters.get_opening_hours;
                let order_date_obj=new XDate(order_date);
                let order_day=order_date_obj.getDay();
                let temp=getHourAndMinute(opening_hours[order_day].begin_time);
                let start_hour=temp.hour, start_minute=temp.minute;
                temp=getHourAndMinute(opening_hours[order_day].end_time);
                let end_hour=temp.hour, end_minute=temp.minute;
                this.start_hour=start_hour;
                this.start_minute=start_minute;
                this.end_hour=end_hour;
                this.end_minute=end_minute;
            },

            async checkOutCart(){
                this.button_loading=true;
                let restaurant_id=this.$store.getters.get_restaurant_id;
                let cart_data=this.$store.getters.get_cart_data;
                if (cart_data.length>0){
                    var token_id="";
                    if(this.model.selected_payment_option==='Before Order'){
                        try {
                                var data=await createToken();
                                token_id=data.token.id;
                            }
                            catch(e) {

                            }
                    }
                    this.model.token_id=token_id;
                    this.model.cart_data=cart_data;
                    this.model.sub_total=this.sub_total;
                    this.model.sub_tax=this.sub_tax;
                    this.model.total_price=this.total_price;
                    this.model.customer=this.customer;
                    ApiService.post(`customer/checkout/${restaurant_id}`,this.model)
                        .then(
                            response =>{
                                let data=response.data;
                                if (data.status==="success"){
                                    this.$store.commit('clearCart');
                                    this.button_loading=false;
                                    this.$modal.show('order-modal');
                                    setTimeout(()=>{
                                        this.$modal.hide('order-modal');
                                        this.$router.push(`pick-up?restaurant=${this.restaurant_name}`);
                                    },3000);
                                }
                            },
                            error =>{
                                console.log(error.response);
                            }
                        )
                }
            },
            update () {
                this.complete = this.number && this.expiry && this.cvc;
                if (this.number) {
                    if (!this.expiry) {
                        this.$refs.cardExpiry.focus()
                    } else if (!this.cvc) {
                        this.$refs.cardCvc.focus()
                    }
                } else if (this.expiry) {
                    if (!this.cvc) {
                        this.$refs.cardCvc.focus()
                    } else if (!this.number) {
                        this.$refs.cardNumber.focus()
                    }
                }
            },
            editOrder(menu,index){
                this.$modal.show('product-modal',{productData:menu.productData,price:menu.price,qty:menu.qty,selected_size_index:menu.selected_size_index,instruction:menu.instruction,order_index:index});
            },
            deleteOrder(index){
                let data={};
                data.order_index=index;
                this.$store.commit('deleteCart',data);
            },

            changePaymentOption(payment_option_item){
                this.model.selected_payment_option=payment_option_item;
            },

            changeOrderType(order_type){
                this.model.order_type=order_type;
                this.$store.commit('changeOrderType', order_type);
            },

            showAddressModal(){
                this.$modal.show('address-modal')
                if(this.directionsService==null)
                    this.directionsService = new google.maps.DirectionsService();
                if(this.directionsDisplay==null)
                {
                    this.directionsDisplay = new google.maps.DirectionsRenderer({
                        draggable: false,
                    });
                    this.directionsDisplay.addListener('directions_changed', function() {
                        console.log("Direction changed");
                    });
                }
                let that=this;
                setTimeout(()=>{
                    $('#address').val(that.temp_address);
                    that.displayDirection();
                    $('#address').on('blur', function() {
                        if($(this).val()==''){
                            that.temp_distance='';
                            that.temp_address='';
                            that.temp_myLocation={}
                            that.displayDirection();
                        }
                    });
                },1000)
            },

            displayDirection(){
                var storehouse = new google.maps.LatLng(this.rest_location);
                var myLocation=new google.maps.LatLng(this.temp_myLocation);
                let that=this;
                this.directionsDisplay.setMap(this.$refs.mapRef.$mapObject);
                this.directionsDisplay.set('directions', null);
                this.directionsService.route({
                    origin: storehouse,
                    destination: myLocation,
                    travelMode: 'DRIVING',
                    optimizeWaypoints: true
                }, function(result, status) {
                    if(status == 'OK') {
                        that.directionsDisplay.setDirections(result);
                        var total = 0;
                        var myroute = result.routes[0];  // get distance between two points
                        for (var i = 0; i < myroute.legs.length; i++) {
                            total += myroute.legs[i].distance.value;
                        }
                        total = total / 1000;
                        that.temp_distance=total;
                    }
                });
            },

            onAddressChanged(payload){
                if (Object.keys(payload.place).length > 0) {
                    let that=this;
                    let response=payload.response;
                    let lat=response.geometry.location.lat();
                    let lng=response.geometry.location.lng();
                    that.temp_address=response.formatted_address;
                    setTimeout(()=>{
                        that.$refs.mapRef.panTo({lat: lat, lng: lng})
                        that.temp_myLocation={
                            lat:lat,
                            lng:lng
                        }
                        that.displayDirection();
                    },300)
                }
            },
            onAddressCleared(){
                console.log("Address cleared")

            },

            clickMarker(event){
                console.log(event.latLng.lat(),event.latLng.lng())
            },
            dragEnded(event){
                let lat=event.latLng.lat();
                let lng=event.latLng.lng();
                let that=this;
                setTimeout(()=>{
                    that.$refs.mapRef.panTo({lat: lat, lng: lng})
                    that.temp_myLocation={
                        lat:event.latLng.lat(),
                        lng:event.latLng.lng()
                    }
                    var geocoder = new google.maps.Geocoder();
                    geocoder.geocode({'location': that.temp_myLocation }, function(results, status){
                        if (status === 'OK') {
                            if (results[0]) {
                                that.temp_address=results[0].formatted_address;
                                $('#address').val(results[0].formatted_address);
                                that.displayDirection();
                            } else {
                                window.alert('No results found');
                            }
                        }
                    })
                },300);
            },
            saveAddress(){
                this.model.address=this.temp_address;
                this.model.myLocation=this.temp_myLocation;
                this.model.delivery_unit=this.temp_unit;
                this.model.delivery_instruction=this.temp_delivery_instruction;
                this.model.distance=this.temp_distance;
                this.model.delivery_price=this.temp_delivery_price;
                this.$modal.hide('address-modal');
                this.$store.commit('changeDeliveryAddress',{
                    address:this.model.address,
                    distance:this.model.distance,
                    price:this.model.delivery_price,
                    instruction:this.model.delivery_instruction,
                    unit:this.model.delivery_unit,
                    location:this.model.myLocation
                })
            },
        },
        mounted(){
            this.model.order_date=0;
            Vuemit.listen('setAddress', this.onAddressChanged);
            Vuemit.listen('addressWasCleared', this.onAddressCleared);
            let that=this;
            this.$getLocation(options)
                .then(coordinates => {
                    var temp={
                        lat:coordinates.lat,
                        lng:coordinates.lng
                    }
                    that.temp_myLocation=temp;
                    var geocoder = new google.maps.Geocoder();
                    geocoder.geocode({'location': that.temp_myLocation }, function(results, status){
                        if (status === 'OK') {
                            if (results[0]) {
                                that.temp_address=results[0].formatted_address;
                                console.log(results[0].formatted_address);
                                $('#address').val(results[0].formatted_address);
                            } else {
                                window.alert('No results found');
                            }
                        }
                    })
                }
            );
        },

        beforeMount(){
            let restaurant_name=this.$route.query.restaurant;
            this.restaurant_name=restaurant_name;
            this.$store.dispatch("getFrontendData",restaurant_name);
            this.$store.commit('initialize_store');
        },

        watch: {
            number () { this.update() },
            expiry () { this.update() },
            cvc () { this.update() },
            payment_options(data){
                if(data.length>0 && this.model.selected_payment_option==='')
                    this.model.selected_payment_option=data[0];
            }
        },

        components:{
            'vue-tel-input':VueTelInput,
            'card-number':CardNumber,
            'card-expiry':CardExpiry,
            'card-cvc':CardCvc,
            'time-picker':VueTimepicker,
            VueLoadingButton,
            Vue
        }
    }

    function getHourAndMinute(hour_string) {
        let hour=0, minute=0;
        if(hour_string!=null && hour_string!==''){
            let temp_array=hour_string.split(" ");
            let ap=temp_array[1];
            let hour_array=temp_array[0].split(":");
            hour=parseInt(hour_array[0]);
            minute=parseInt(hour_array[1]);
            if(ap==='PM' || ap==='pm'){
                if(hour<12)
                    hour+=12;
            }
        }
        return {
            hour:hour,
            minute:minute
        }
    }

</script>

<style lang="scss">
    #checkout-page{
        .section{
            backgroundColor:#111 !important;
        }

        font-family: "Helvetica Neue","Raleway",sans-serif;
        h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 {
            margin-top: 0;
            margin-bottom: 2rem;
            font-weight: 200;
        }
        h1,.h1{
            font-weight:100;
        }
        .page-title h1 {
            font-size: 5.5rem;
        }

        .bg-light {
            background-color: #f0f1f3 !important;
        }
        .bg-white{
            box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.15) !important;
        }
        .text-primary {
            color: #ddae71 !important;
        }
        .btn.btn-order {
            position: relative;
            font-family: "Oswald",sans-serif;
            font-weight: 400;
            text-transform: uppercase;
            -webkit-border-radius: 0;
            -moz-border-radius: 0;
            -ms-border-radius: 0;
            -o-border-radius: 0;
            border-radius: 0;
            padding: 0.75rem 2rem 1rem;
            -webkit-transition: all .25s ease-out;
            -moz-transition: all .25s ease-out;
            -o-transition: all .25s ease-out;
            transition: all 0.25s ease-out;
            background: transparent;
            border-width: 2px;
            -webkit-backface-visibility: hidden;
            -moz-backface-visibility: hidden;
            -ms-backface-visibility: hidden;
            -o-backface-visibility: hidden;
            backface-visibility: hidden;
            cursor: pointer;
            border-color: #ddae71;
            background-color: #ddae71;
            color: #fff;
        }
        .btn-lg {
            padding: 1.5rem 3rem 1.75rem;
            font-size: 1.2rem;
            -webkit-border-radius: 0;
            -moz-border-radius: 0;
            -ms-border-radius: 0;
            -o-border-radius: 0;
            border-radius: 0;
        }
        .btn-primary {

        }
        button:disabled{
            cursor: not-allowed !important;
        }
        .order-type-selection-holder{
            display:grid;
            grid-template-columns:1fr 1fr;
            grid-column-gap:20px;
            padding:0 20px;
            margin-bottom:20px;
        }
        .order-type-selection-item{
            border:1px solid;
            height: 100px;
            text-align: center;
            vertical-align: middle;
            padding-top: 40px;
            font-size: 20px;
            border: 1px solid #ded7c5;
            box-shadow: 0 0 10px rgba(76,51,39,.3);
            font-weight: bold;
            cursor:pointer;
            color: #dab7a8;
            margin-bottom:10px;
        }

        @media screen and (max-width:550px){
            .order-type-selection-holder{
                display:block;

            }

        }

        .order-type-selection-item.selected{
            color: #af5027;
            background: #e4fbd8;
        }
        .order-type-selection-item:hover{
            color: #af5027;
            background: #e4fbd8;
        }

        h3.order-type-selection-title {

            margin-left:20px;
        }
        .order-content-holder{
            margin-left:20px;
        }

        .card-container{
            margin-left:20px;
            margin-bottom:30px;
            /*max-width:300px;*/
        }

        .stripe-element {
            border: 1px solid #888;
            padding: 10px;
        }
        .stripe-element.card-number{
            width: 100%;
        }
        .stripe-element.card-expiry,.stripe-element.card-cvc{
            float: left;
            width: 50%;
            margin-top: 10px;
        }
        .stripe-element.card-cvc{
            border-left:none;
        }

        .table-cart {
            line-height: 1.25;
            width: 100%;
        }
        .table-cart a{
            color:#222;
        }

        .table-cart th, .table-cart td {
            vertical-align: middle;
            padding: 1rem 1.5rem;
            border-bottom: 1px solid #e0e0e0;
        }
        .table-cart td {
            padding: 1rem 0.5rem 1rem 1rem;

        }
        td.price {
            padding:0;
            width:50px;
            font-weight:bold;
        }

        .qty-name-container{
            display:grid;
            grid-template-columns:30px 1fr;
        }

        .qty{
            margin-right:10px;
            font-weight:bold;
            display:block
        }
        td.price,td.actions{
            vertical-align: top;
            padding-top:15px;
        }

        .table-cart .title .name {
            font-weight: bold;
            display: block;
            font-size:16px;
        }
        .text-muted {
            color: #a4a7a9 !important;
        }
        .table-cart .price {
            font-weight: bold;
        }
        .table-cart .actions {
            white-space: nowrap;
        }
        .action-icon {
            color: #a4a7a9;
            margin: 0 0.1em;
        }
        .cart-summary {
            padding: 1.5rem;
        }
        .text-right {
            text-align: right!important;
        }
        .text-lg {
            font-size: 1.35rem;
        }
        .option-item{
            font-weight:normal;
            padding-left:1rem;
            font-family: "Helvetica Neue","Raleway",sans-serif;
            margin-bottom: 5px;
            margin-left: 15px;
        }
        strong.option-item{
            font-weight:bold;
        }

        .order-time-selector{
            span.time-picker{
                width:100%;
            }
            .time-picker input.display-time{
                width:100%;
                height: calc(3.25rem + 4px);
                cursor: default;
            }

            div.dropdown{
                width:100%;
                top:50px;
            }
            div.select-list{
                width: 100%;
                text-align: left;
            }
            .time-picker .dropdown ul li{
                text-align:left;
                padding:12px;
            }
        }

        .payment-option-selector-container{
            display: flex;
            margin-left: 10px;
            margin-bottom: 10px;

        }

        .payment-option-select-item{
            margin-left:10px;
            height:50px;
            width:120px;
            background:#eae9e9;;
            border-radius: 10px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            flex-direction: column;
            text-align: center;
            transition: all 0.6s;
            font-size:16px;
        }

        .payment-option-select-item:hover, .payment-option-select-item.active{
            background: #088a24;
            color: #fff;
        }

        .order-type-selection-container {
            display: flex;
            margin-bottom: 20px;
        }

        .order-type-item {
            display: flex;
            margin-right: 10px;
            height: 50px;
            width: 100px;
            background: #eae9e9;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            border-radius: 5px;
            cursor:pointer;
            transition:0.5s;
            font-size:16px;
        }
        .order-type-item:hover, .order-type-item.active{
            background: #088a24;
            color: #fff;
        }

        #footer{
            position: fixed;
            left:0;
            bottom:0;
            width:100%;
            z-index: 2;
            .footer-container{
                display:grid;
                grid-template-columns: 1fr 1fr

            }
            .order-operation-btn{
                width:100%;
                padding: 10px 0;
                text-align: center;
                font-size:18px;
                font-weight:bold;
            }

            .btn:before {
                display:none !important;

            }

            .item-number{
                text-align: left;
                font-size:16px;
                padding-left:10px;
            }
            .total-price{
                text-align: right;
                font-size:16px;
                padding-right:10px;
            }
        }

        .btn-danger:before,.btn-success:before {
            display:none !important;
        }


    }



</style>
