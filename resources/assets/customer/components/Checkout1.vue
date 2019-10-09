<template>
    <div id="checkout-page">
         <div class="page-title bg-dark dark">
            <div class="bg-image bg-parallax" style="background-image: url('public/Images/bg-croissant.jpg');"><img src="public/Images/bg-croissant.jpg" alt=""></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 push-lg-4">
                        <h1 class="mb-0">Checkout</h1>
                        <h4 class="text-muted mb-0">Some informations about our restaurant</h4>
                    </div>
                </div>
            </div>
        </div>
        <section class="section">
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
                                <div class="text-lg card-container" v-if="stripe!=''">
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
                            </div>
                            <div class="text-center">
                                <VueLoadingButton type="submit" aria-label='Order now!' class="btn btn-primary btn-lg btn-order" :loading="button_loading" :disabled="cart_data.length==0">
                                    <span>Order now!</span>
                                </VueLoadingButton>
                                <!--<button type="submit" class="btn btn-primary btn-lg" :disabled="cart_data.length==0"><span>Order now!</span></button>-->
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

    import VueLoadingButton from 'vue-loading-button'

    import JQuery from 'jquery';
    let $ = JQuery;



    Vue.use(VueForm,options);

    export default {
        name: "Checkout",
        computed:{
            cart_data() {
                return this.$store.getters.get_cart_data(this.location_id);
            },
            sub_total(){
                return this.$store.getters.sub_total(this.location_id);
            },
            sub_tax(){
                return this.$store.getters.sub_tax(this.location_id);
            },
            total_price(){
                return this.$store.getters.total_price(this.location_id);
            },
            customer(){
                return this.$store.state.customer;
            },
            tax(){
                return this.$store.getters.tax;
            },
            // day_lists(){
            //     return this.$store.getters.getDayLists;
            // },
            locations(){
                return this.$store.state.locations.information;
            }
        },
        data(){
            return {
                model:{
                    phone:'',
                    name:'',
                    email:'',
                    order_type:"online",
                    order_date:-1,
                    order_full_date:'',
                    order_time:'',
                    order_table:-1,
                    token_id:'',
                    amount:0,
                    cart_data:[],
                    table_number:null,
                    location_id:''

                },
                restaurant:'',
                location_id:-1,
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

                stripe: "",
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
                button_styled:true
            }
        },
        methods:{
            onInput({ number, isValid, country }) {
                this.model.phone = number;
                this.phone.isValid = isValid;
                this.phone.country = country && country.name;
            },
            onSubmit(){
                if (this.formstate.$invalid || !this.complete) {  //check name, email, phone, and credit card information
                    return;
                }
                // else{
                    // if(this.model.order_type=="online"){  // will check the validate of order time, and ...
                    //     if(this.model.order_date<0){
                    //         return;
                    //     }
                    //     if (this.model.order_time==''){
                    //         return;
                    //     }
                    // }
                // }

                if (this.location_id!=-1){  // if checkout carts for all locations
                    this.checkOutCart(this.location_id,true);
                }
                else{
                    let locations=this.locations;
                    for (let i=0;i<locations.length;i++) {
                        if (i==locations.length-1)
                            this.checkOutCart(locations[i].id,true);
                        else
                            this.checkOutCart(locations[i].id);
                    }
                }

                // this.$router.push('/myorders');

            },

            gotoMenu(){
                this.$router.push(`pick-up?restaurant=${this.restaurant}`);
            },
            clearCart(){
                this.$store.commit('clearCart');
                this.$router.push(`pick-up?restaurant=${this.restaurant}`);
            },

            checkOutCart(location_id,is_last=false){
                this.button_loading=true;
                let cart_data=this.$store.getters.get_cart_data(location_id);
                if (cart_data.length>0){
                    createToken().then(   // get stripe token
                        data => {
                            console.log(data);
                            this.model.token_id=data.token.id;
                            this.model.cart_data=cart_data;

                            this.model.sub_total=this.$store.getters.sub_total(location_id);
                            this.model.sub_tax=this.$store.getters.sub_tax(location_id);
                            this.model.total_price=this.$store.getters.total_price(location_id);
                            console.log(this.model.total_price);
                            this.model.customer=this.customer;
                            this.model.location_id=location_id;

                            ApiService.post('customer/checkout',this.model)
                                .then(
                                    response =>{
                                        let data=response.data;
                                        if (data.status=="succeed"){
                                            let order_id=data.order_id;
                                            let
                                                order_time=data.order_time;
                                            let order_data={};
                                            order_data.order_id=order_id;
                                            order_data.order_type=this.model.order_type;
                                            order_data.order_time=order_time;
                                            order_data.table_number=this.model.table_number;
                                            order_data.read_state=1;
                                            order_data.cart_data=cart_data;
                                            order_data.cook_time="unknown";
                                            order_data.refuse_reason="unknown";
                                            order_data.location_id=location_id;
                                            this.$store.commit('add_order',order_data);
                                            this.$store.commit('empty_cart',location_id);
                                            this.button_loading=false;
                                            this.$store.commit()
                                            if (is_last)
                                                this.$router.push(`pick-up?restaurant=${this.restaurant}`);
                                        }
                                    },
                                    error =>{
                                        console.log(error.response);
                                    }
                                )
                        }
                    )
                }
                else{
                    if (is_last)
                        this.$router.push(`pick-up?restaurant=${this.restaurant}`);
                }

            },

            update () {
                this.complete = this.number && this.expiry && this.cvc

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
                this.$modal.show('product-modal',{productData:menu.productData,price:menu.price,qty:menu.qty,selected_size_index:menu.selected_size_index,instruction:menu.instruction,order_index:index,location_id:this.location_id});
            },
            deleteOrder(index){
                let data={};
                data.order_index=index;
                data.location_id=this.location_id;
                this.$store.commit('deleteCart',data);
            },
        },
        mounted(){
            this.model.order_date=0;
            this.model.name='';
            this.model.email='';
            this.model.phone_number='';


        },
        beforeCreate(){
            ApiService.get('customer/get_card_setting')
                .then(
                    response=>{
                        if(response.data.public_key)
                            this.stripe=response.data.public_key;
                    }
                );
        },
        beforeMount(){
            let location_name=this.$route.query.restaurant;
            this.restaurant=location_name;
            this.location_id=this.$store.getters.get_location_id(location_name);
        },
        watch: {
            number () { this.update() },
            expiry () { this.update() },
            cvc () { this.update() },
            // 'model.order_date':function (newValue) {
            //     if (newValue>=0){
            //         this.model.order_full_date=this.day_lists[newValue].full_date;
            //     }
            //     if (newValue==0){
            //         this.getOrderTimeRangeToday();
            //     }else{
            //         if (this.timer)
            //             clearInterval(this.timer);
            //         this.start_hour=this.day_lists[newValue].begin_time_hour;
            //         this.start_minute=this.day_lists[newValue].begin_time_minute;
            //         this.end_hour=this.day_lists[newValue].end_time_hour;
            //         this.end_minute=this.day_lists[newValue].end_time_minute;
            //     }
            // }
        },
        components:{
            'vue-tel-input':VueTelInput,
            'card-number':CardNumber,
            'card-expiry':CardExpiry,
            'card-cvc':CardCvc,
            'time-picker':VueTimepicker,
            VueLoadingButton
        }
    }

    // JQuery('input[autofill="off"]').disableAutofill();
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
            outline: none;
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
            max-width:300px;
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


    }



</style>
