<template>
    <div id="myorder-page">
        <div class="order-item-holder">
            <div class="order-item-title-holder">
                <div class="order-item-title">Foods</div>
                <div class="order-item-title">Order Information</div>
            </div>
            <div v-for="(order,order_index) in orders" class="order-item bg-white">
                <div class="order-food-display-container border-right">
                    <!--<h3 class="order-item-title">Foods</h3>-->
                    <div v-for="(food_menu,food_index) in order.cart_data" class="order-menu-item-container">
                        <div class="food-image-container">
                            <img class="food-image" :src="getFoodImage(food_menu)">
                        </div>
                        <div class="food-menu-information d-flex align-items-center">
                            <div class="food-menu-information-text-holder">
                                <h6 class="food-information-text bold">{{food_menu.productData.name}}</h6>
                                <div v-if="food_menu.productData.option_tags" class="menu-option-item-holder">
                                    <div v-for="(food_option,option_index) in food_menu.productData.option_tags">
                                        <h6 v-for="(option_item,option_item_index) in  food_option.items" v-if="option_item.checked" class="option-item">
                                            {{food_option.title}}: {{option_item.name}} {{option_item.count>1 ? `(count: ${option_item.count})` : ''}}
                                        </h6>
                                    </div>
                                </div>
                                <h6  v-if="food_menu.instruction != ''" class="food-information-text food-instruction">{{food_menu.instruction}}</h6>
                                <h6 class="food-information-text food-qty">Qty: {{food_menu.qty}}</h6>
                            </div>

                        </div>

                    </div>

                </div>
                <div class="order-status-display-container border-right d-flex align-items-center">
                    <div class="order-status-display">

                        <h6 class="order-status">
                            <span class="order-status-label">Order Id: </span>
                            <span class="order-status-text">{{order.order_id}}</span>
                        </h6>

                        <h6 class="order-status">
                            <span class="order-status-label" v-if="order.order_type=='online'">Order Type: </span>
                            <span class="order-status-text" v-if="order.order_type=='online'">{{order.order_type}}</span>
                        </h6>

                        <h6 class="order-status">
                            <span class="order-status-label" v-if="order.order_type=='table'">Table Number: </span>
                            <span class="order-status-text" v-if="order.order_type=='table'">{{order.table_number}}</span>
                        </h6>

                        <h6 class="order-status">
                            <span class="order-status-label">Cook Time(min): </span>
                            <span class="order-status-text">{{order.cook_time}}</span>
                        </h6>

                        <h6 class="order-status">
                            <span class="order-status-label">Order Status</span>
                            <span :class="{'order-status-text':true,'text-danger':order.order_status=='pending','text-secondary':order.order_status=='placed','text-primary':order.order_status=='preparing','text-success':order.order_status=='completed'}">{{order.order_status}}</span>
                        </h6>

                        <label class="order-status-label">Location Name: </label>
                        <h6 class="order-status-text">{{$store.getters.get_location_name(order.location_id)}}</h6>

                        <button class="btn btn-danger" v-if="order.order_status=='placed' || order.order_status=='pending'" @click="cancelOrder(order)"><span>Cancel Order</span></button>

                    </div>

                </div>
            </div>
        </div>




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

    import VueTimepicker from '../../globalComponents/vue2-timepicker/vue-timepicker';


    Vue.use(VueForm,options);

    export default {
        name: "MyOrder",
        computed:{
            orders() {
                let orders=this.$store.state.orders;
                let buzz=0;
                let unread_ids=[];
                for (let i=0;i<orders.length;i++){
                    var title='';
                    var text='';
                    var noty_type='';
                    if (orders[i].read_state==0){
                        buzz=1;
                        unread_ids.push(orders[i].order_id);
                        if (orders[i].order_status=='placed'){
                            title='Your order placed successfully';
                            text='';
                            noty_type='primary';
                        }
                        if (orders[i].order_status=='complete'){
                            title='Cook finish now';
                            text='We will deliver soon';
                            noty_type='success';
                        }

                        if (orders[i].order_status=='refused'){
                            title='Unfortunatly your order refused';
                            text='Reason: '+orders[i].refuse_reason+'<br> We refuned your money';
                            noty_type='warn';
                        }
                        this.show_notify(noty_type,title,text);
                    }
                }
                if (buzz==1){
                    this.play_audio();
                    this.$store.commit('read_orders',unread_ids);
                }
                return orders;
            },

            customer(){
                return this.$store.state.customer;
            },
            // day_lists(){
            //     return this.$store.getters.getDayLists;
            // }

        },
        data(){
            return {
                model: {},
                audio:"public/Alarms/alarm-kitchen.mp3"
            }
        },
        methods:{
            getFoodImage(food_menu){
                let image="";
                image=food_menu.productData.image;

                if(food_menu.selected_size_index>=0){
                    if (food_menu.productData.size[food_menu.selected_size_index].image)
                        image=food_menu.productData.size[food_menu.selected_size_index].image;
                }
                return image;
            },
            getTimeString(order_time){
                console.log(order_time);
                let result_text="";
                let order_date_object=new Date(order_time);
                let now=new Date();
                let order_date=order_date_object.getDate();
                let order_time1=order_date_object.toLocaleTimeString('en-us', {hour: '2-digit', minute:'2-digit'});
                let today=now.getDate();

                result_text=order_date_object.toLocaleString('en-us',{weekday:'long',month:'long', day:'numeric'});
                if(order_date==today)
                    result_text="Today";
                else if(order_date==today+1)
                    result_text="Tomorrow";
                else if(order_date_object.getMonth()==now.getMonth()+1){
                    let temp_date=(new Date(now.getFullYear(), now.getMonth() +1, 0)).getDate();
                    if (order_date==1)
                        result_text="Tomorrow";
                }
                result_text+=". "+order_time1;
                return result_text;
            },
            cancelOrder(order){
                let order_id=order.order_id;
                this.$store.commit('cancel_order',order_id);
            },
            play_audio(){
                var audio = new Audio(this.audio) // path to file
                audio.play()
            },
            show_notify(noty_type,title,text=''){
                Vue.notify({
                    group: 'foo',
                    type: noty_type,
                    title: title,
                    text: text,
                    classes:"vue-notification order-notification",
                    duration:5000
                })

            }


        },
        components:{


        }
    }
</script>

<style lang="scss">
    #myorder-page{
        min-height: calc(100vh - 500px);
        background: #eee;
        margin-bottom: 20px;

        font-family: "Helvetica Neue","Raleway",sans-serif;
        h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 {
            margin-top: 0;
            margin-bottom: 2rem;
            font-weight: 200;
        }
        h1,.h1{
            font-weight:100;
        }

        .order-item-holder{
            max-width:1000px;
            margin:0 auto;
            padding:20px 0;
        }
        .order-item{
            display:grid;
            grid-template-columns: 1fr 200px;
            border-bottom:1px solid #aaa;
            font-weight: 500;
        }
        .order-menu-item-container{
            display: grid;
            grid-template-columns: 150px 1fr;
            grid-gap:20px;
            padding:10px;
            border-bottom:1px solid #ddd;
        }

        @media screen and  (max-width:600px){
            .order-menu-item-container {
                display: block;
            }
            .food-image-container{
                margin-bottom:10px;
            }

        }

        .order-food-display-container div:last-child{
            border-bottom: none;
        }
        div.order-item-holder div.order-item:last-child{
            border-bottom:none;
        }

        .vertical-middle{
            position:absolute;
            top:50%;
            transform: translateY(-50%);
        }

        .food-information-text{
            margin-bottom:5px;
        }

        .food-image{
            max-width:150px;
        }

        .bold{
            font-weight:bold;
        }

        .menu-option-item-holder{
            margin-left:20px;
            margin-top:10px;
            margin-bottom: 15px;
        }

        .option-item{
            margin-bottom:5px;
        }

        .food-instruction,.food-qty{
            margin-left:20px;
            font-weight: 500;
        }

        .order-item-title-holder{
            display:grid;
            grid-template-columns:1fr 200px;
            background:#333;
            color:white;
            text-align:center;
            vertical-align:middle;
        }
        @media screen and  (max-width:470px){
            .order-item-title-holder, .order-item{
                grid-template-columns:1fr 170px;
            }

        }
        .order-item-title{
            text-align:center;
            padding: 15px 10px;
            border-left: 1px solid #efe9e9;
        }

        .order-status-display-container{
            padding:10px;
        }

        .order-status{
            margin-bottom:0;
        }
        .order-status .order-status-text{
            margin-left:5px;
        }
        .order-status-label{
            display:inline-block;
            font-weight:400;
            margin-bottom: 0.5rem;
        }
        .order-status-text{
            margin-left:20px;
            font-weight:700;
            margin-bottom:10px;
        }

        .order-action-button{
            display:block;
            width: 120px;
            padding: 10px;
            margin: 10px auto;
        }

        .btn{
            border-radius:0;
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

        .notifications{
            top:180px !important;
        }






    }
</style>
