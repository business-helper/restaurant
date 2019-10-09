<template>
    <div>
        <div class="row mb-4">
            <div class="col-lg-3  col-sm-6 mb-3">
                <router-link to="restaurant_list" class="dashboard-link">
                    <div class="text-center p-3 widget_social_icons box_shadow dashboard-item-wrapper">
                        <div class="widget_social_inner1">
                            <i class="fas fa-utensils fb_text"></i>
                        </div>
                        <div class="text-ash">
                            <h6 class="mt-2 text_size item-text"><span class="item-number">{{restaurant_number}}</span>Restaurants</h6>
                        </div>
                        <div class="sub-detail-container">
                            <div class="sub-detail-item-wrapper">
                                <h5 class="sub-detail-item-text"><span class="sub-detail-item-count">{{active_restaurant_number}}</span> Active</h5>
                            </div>
                            <div class="sub-detail-item-wrapper">
                                <h5 class="sub-detail-item-text"><span class="sub-detail-item-count">{{inactive_restaurant_number}}</span> InActive</h5>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-lg-3  col-sm-6 mb-3">
                <router-link to="restaurant_list" class="dashboard-link">
                    <div class="text-center p-3 widget_social_icons box_shadow dashboard-item-wrapper">
                        <div class="widget_social_inner1">
                            <img class="icon-image" src="public/Images/Dashboard/order.png"/>
                        </div>
                        <div class="text-ash">
                            <h6 class="mb-0 mt-2 text_size"><span class="item-number">{{order_number}}</span>Orders</h6>
                        </div>
                        <div class="sub-detail-container">
                            <div class="sub-detail-item-wrapper">
                                <h5 class="sub-detail-item-text"><span class="sub-detail-item-count">{{online_order_number}}</span> Online</h5>
                            </div>
                            <div class="sub-detail-item-wrapper">
                                <h5 class="sub-detail-item-text"><span class="sub-detail-item-count">{{pickup_order_number}}</span> Pick Up</h5>
                            </div>
                            <div class="sub-detail-item-wrapper">
                                <h5 class="sub-detail-item-text"><span class="sub-detail-item-count">{{pending_order_number}}</span> Pending</h5>
                            </div>
                            <div class="sub-detail-item-wrapper">
                                <h5 class="sub-detail-item-text"><span class="sub-detail-item-count">{{rejected_order_number}}</span> Rejected</h5>
                            </div>
                            <div class="sub-detail-item-wrapper">
                                <h5 class="sub-detail-item-text"><span class="sub-detail-item-count">{{inprogress_order_number}}</span> In Progress</h5>
                            </div>
                            <div class="sub-detail-item-wrapper">
                                <h5 class="sub-detail-item-text"><span class="sub-detail-item-count">{{completed_order_number}}</span> Completed</h5>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-lg-3 col-md-6 mb-3">
                <router-link to="restaurant_list" class="dashboard-link">
                    <div class="text-center p-3 widget_social_icons box_shadow dashboard-item-wrapper">
                        <div class=" widget_social_inner1">
                           <img class="icon-image" src="public/Images/Dashboard/employee.png"/>
                        </div>
                        <div class="text-ash">
                            <h6 class="mb-0 mt-2 text_size"><span class="item-number">$ {{today_sales}}</span></h6>
                            <h6 class="mb-0 mt-2 text_size">Subscriptions</h6>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-lg-3  col-md-6 mb-3">
                <router-link to="restaurant_list" class="dashboard-link">
                    <div class="text-center p-3 widget_social_icons box_shadow dashboard-item-wrapper">
                        <div class=" widget_social_inner1">
                            <img class="icon-image" src="public/Images/Dashboard/sales.jpg">
                        </div>
                        <div class="text-ash">
                            <h6 class="mb-0 mt-2 text_size"><span class="item-number">$ {{today_sales}}</span>Sales</h6>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';

    import IEcharts from 'vue-echarts-v3/src/full.js';
    import 'zrender/lib/vml/vml';

    require('swiper/dist/css/swiper.css')
    import VueAwesomeSwiper from 'vue-awesome-swiper';
    import countTo from 'vue-count-to';
    import datatable from "components/plugins/DataTable/DataTable.vue";
    import vScroll from "components/plugins/scroll/vScroll.vue";
    import portfolio from "components/widgets/portfolio/portfolio.vue"
    import VueChartist from 'v-chartist'
    import ApiService from "../../common/api.service";

    import Datepicker from 'vuejs-datepicker'


    Vue.use(VueAwesomeSwiper);
    var unsub;
    export default {
        name: "index2",
        components: {
            IEcharts,
            datatable,
            countTo,
            vScroll,
            portfolio,
            VueChartist,
            Datepicker
        },
        data() {
            return {
                instances: [],
                ajaxloading: true,
                order_action:{},
                restaurant_number:0,
                active_restaurant_number:0,
                inactive_restaurant_number:0,
                order_number:0,
                pending_order_number:0,
                pickup_order_number:0,
                online_order_number:0,
                rejected_order_number:0,
                inprogress_order_number:0,
                completed_order_number:0,
                today_sales:0,
                // ===tabledata
                orderTableData:[],
                orderColumndata:[
                    {
                        label: 'ORDER ID',
                        field: 'id',
                        numeric: false,
                        html: false,
                    },
                    {
                        label: 'ORDER TIME',
                        field: 'order_time',
                        numeric: false,
                        html: false,
                    },
                    {
                        label: 'Customer Name',
                        field: 'customer_name',
                        numeric: false,
                        html: false,
                    },
                    {
                        label: 'Customer Email',
                        field: 'customer_email',
                        numeric: false,
                        html: false,
                    },
                    {
                        label: 'Phone Number',
                        field: 'customer_phone_number',
                        numeric: false,
                        html: false,
                    },
                    {
                        label: 'Status',
                        field: 'order_status',
                        numeric: false,
                        html: true,
                    },
                    {
                        label: 'Price ($)',
                        field: 'amount',
                        numeric: false,
                        html: true,
                    },

                ],


            }
        },
        mounted: function () {
            unsub = this.$store.subscribe((mutation, state) => {
                if (mutation.type == "left_menu") {
                    this.instances.forEach(function (item, index) {
                        setTimeout(function () {
                            item.resize();
                        });
                    });
                    setTimeout(() => {
                        this.$refs.swiper.swiper.update();
                    });
                }
            });

        },
        beforeRouteLeave(to, from, next) {
            unsub();
            next();
        },
        beforeMount(){
            var today=new Date();
            var begin_day=this.subtractDate(today,7);
            ApiService.get('admin/get_dashboard_data').then(
                response =>{
                    let data=response.data;
                    this.order_number=data.order_number;
                    this.pending_order_number=data.pending_order_number;
                    this.pickup_order_number=data.pickup_order_number;
                    this.online_order_number=data.online_order_number;
                    this.rejected_order_number=data.rejected_order_number;
                    this.inprogress_order_number=data.inprogress_order_number;
                    this.completed_order_number=data.completed_order_number;

                    this.restaurant_number=data.restaurant_number;
                    this.active_restaurant_number=data.active_restaurant_number;
                    this.inactive_restaurant_number=data.inactive_restaurant_number;
                    this.today_sales=data.today_sales.toFixed(2);
                },
                error =>{
                    console.log(error.response);
                }
            )
        },
        methods: {
            subtractDate(date,offset_day){
                let result=new Date(date.getTime()-(offset_day*24*3600*1000));
                return result;
            },
            onReady(instance) {
                this.instances.push(instance)
            },
        },
    }
</script>
<style src="../../css/widgets.css" scoped></style>
<style scoped>
    .swiper-pagination {
        position: relative;
    }

    .swiper-pagination-fraction,
    .swiper-pagination-custom,
    .swiper-container-horizontal > .swiper-pagination-bullets {
        top: 5px;
    }

    .swiper-container {
        margin-top: 0px !important;
    }
    .delete i{
        color:red;
    }

</style>
<style type="text/css" lang="scss">
    .index2_table .table-responsive .card {
        border: none;
        box-shadow: none;
        margin-bottom: 0;
    }

    .index2_swiper .swiper-pagination-bullet-active {
        background: #08aa80;
    }



    /*===============================notes========*/

    .notes {
        line-height: 22px;
        font-size: 13px;
        padding: 0 15px 0 36px;
        position: relative;
        outline: none;
        background: #fff;
        background-size: 100% 30px;
    }

    .notes p {
        border-bottom: 1px solid #dfe8ec;;
    }

    .notes::after {
        content: '';
        position: absolute;
        width: 0;
        top: 0;
        left: 25px;
        bottom: 0;
        border-left: 1px solid #0fd1c1;
    }

    .social .bg-default-card .info {
        font-size: 12px;
    }

    .social .bg-default-card span {
        display: block;
        text-transform: uppercase;
    }

    .social .bg-default-card .value {
        font-size: 40px;
        line-height: normal;
    }


    .social .bg-default-card {
        i {
            transition: 300ms;
        }

        &:hover {
            i {
                font-size: 45px;
                transition: 300ms;
            }
        }
    }

    .social_cuntdata {
        font-weight: bold;
        font-size: 18px;
    }

    .subscribe_btn {
        background-color: transparent;
        border: 0;
        outline: none;
    }

    .widget_social_icons {
        background-color: #fff;
    }

    .fb_text {
        color: #215fe2;
        font-size: 28px;
    }

    .box_shadow {
        box-shadow: 2px 2px 15px 0px #ccc;
    }

    .head_color {
        color: #686868;
    }

    .text_size {
        font-size:18px;
        color: #797f82;
    }
    .item-number{
        font-size:25px;
        margin-right:10px;
        color: #23b61a;
        font-weight: bold;
    }
    .text-ash {
        color: #575f65;
    }

    .text_color {
        color: #646161 !important;
    }

    .swiper-pagination {
        margin: 0 !important;
    }

    .text-blue {
        color: #215fe2;
    }

    .progress_color2 .progress-bar {
        background-color: #7FAFF7;
    }

    .icon_color {
        font-size: 27px;
        color: #828686;
    }

    .icon_color1 {
        font-size: 25px;
        color: #6e8dce;
    }

    .line {
        border-top: 1px solid #ccc;
    }

    .text_head_Color {
        color: #707373;
    }

    .below_text {
        color: #a2a1a1;
    }

    .index2_table th {
        color: #686868;
    }

    .index2_table td {
        color: #686868;
    }

    .user_color {
        color: #8e8c8e;
    }

    .count1 {
        font-size: 18px;
        color: #686868;
    }

    .ti_color {
        color: #215fe2;
    }

    .fb_color {
        font-size: 18px;
        color: #3B5998;
    }

    .twi_color {
        color: #00aced;
        font-size: 18px;
    }

    .gi_color {
        color: red;
        font-size: 18px;
    }

    .pin_color {
        color: red;
    }

    .cam_color {
        color: green
    }

    .events1 {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding-top: 2px;
        padding-bottom: 2px;
        margin-top: 15px;
        margin-right: -20px;
        font-size: 18px;
        color: #555;
    }

    .online_dot img {
        position: relative;
    }

    .online_dot::after {
        content: "";
        position: absolute;
        margin-top: -28px;
        height: 11px;
        width: 11px;
        border: 2px solid #FFF;
        border-radius: 50%;
        background-color: green;
        margin-left: -13px;
    }

    .conversation-list .ctext-wrap p {
        margin: 0;
        padding-top: 3px;
    }

    .conversation-list .odd .ctext-wrap:after {
        border-color: rgba(238, 238, 242, 0);
        left: 99%;
        margin-right: -1px;
        border-top: 0 solid #D8F1E4;
        border-left: 12px solid #D8F1E4;
        border-bottom: 14px solid transparent;
    }

    .conversation-list .ctext-wrap p {
        margin: 0;
        /*padding-top: 3px;*/
    }

    .ctext-wrap p {
        margin-bottom: 10px;
    }

    .conversation-list .odd .conversation-text {
        float: right;
        margin-right: 25px;
        text-align: right;
        width: 95%;
    }

    .conversation-list .ctext-wrap i {
        color: #777;
        display: block;
        font-size: 11px;
        font-style: normal;
        position: relative;
    }

    .conversation-list .conversers1 .ctext-wrap {
        background: #D8F1E4;
    }

    .conversation-list .ctext-wrap {
        border-radius: 3px;
        display: inline-block;
        padding: 5px 10px;
        position: relative;
        box-shadow: 2px -2px 4px 0px rgba(0, 0, 0, 0.1)
    }

    .text-field {
        padding: 6px 10px;
    }

    .conversation-list .odd .ctext-wrap:after {
        border-color: rgba(238, 238, 242, 0);
        left: 99%;
        margin-right: -1px;
        border-top: 0 solid #D8F1E4;
        border-left: 12px solid #D8F1E4;
        border-bottom: 14px solid transparent;
    }

    .conversation-list .ctext-wrap:after {
        right: 100%;
        top: 0;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        margin-left: -1px;
        border-top: 0 solid #fff;
        border-right: 12px solid #e9f9ff;
        border-bottom: 14px solid transparent;
    }

    .clearfix:after {
        clear: both;
    }

    .back_color1 {
        width: auto;
        height: 274px;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .conversation-list .conversation-text {
        float: left;
        font-size: 13px;
        width: 70%;
    }

    .clearfix:before,
    .clearfix:after {
        content: " ";
        display: table;
    }

    .conversation-list .conversers2 .ctext-wrap {
        background: #e9f9ff;
    }

    .m-t-10 {
        margin-top: 10px !important;
    }

    .conversation-list {
        width: auto;
        height: 340px;
        padding-left: 27px;
    }

    .profile-img {
        background-color: #fff;
    }

    .chat-conversation {
        width: 100%;
    }


    .top_border1 {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        line-height: 4.1;
        font-size: 15px;
        color: #fff;
        box-shadow: 1px 1px 20px rgba(75, 156, 228, 0.88);
    }

    .top_border2 {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        line-height: 4.1;
        font-size: 15px;
        color: #fff;
        box-shadow: 1px 1px 20px rgba(82, 162, 185, 0.86);
    }

    .top_border3 {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        line-height: 4.1;
        font-size: 15px;
        color: #fff;
        box-shadow: 1px 1px 22px rgb(19, 191, 210);
    }

    .top_border4 {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        line-height: 4.1;
        font-size: 15px;
        color: #fff;
        box-shadow: 1px 1px 20px rgba(23, 96, 160, 0.89);
    }


    .bg_color1 {
        background-color: #4b9ce4;
    }

    .bg_color2 {
        background-color: #328ba7;
    }

    .bg_color3 {
        background-color: #13bfd2;
    }

    .bg_color4 {
        background-color: #1760a0;
    }

    .circle_round {
        font-size: 20px;
    }

    .circle_round1 {
        font-size: 22px;
    }
    .icon-image{
        width:30px;
        height:30px;
    }
    .date-range-holder{
        margin-top:10px;
        padding:0 20px;
        display: grid;
        grid-template-columns: 300px 300px auto;
        grid-gap:20px;
    }

    .profile-image{
        width:100px;
        height:100px;
        border-radius: 100px;
    }

    a.delete i {
        color: #d0280d;
        font-size:20px;
    }

    .order-status-background {
        color: white;
        padding: 10px;
        display: block;
        text-align: center;
        border-radius: 3px;
        max-width:100px;
    }

    .pending_background {
        background: #FEA115;
    }
    .closed_background {
        background: #1da50e;
    }
    .cancelled_background{
        background: #d21717;
    }
    .placed_background {
        background: #337ab7;
    }
    .preparing_background {
        background: #19d27e;
    }
    .completed_background {
        background: #4dca3f;
    }
    img.menu-image {
        width: 100px;
    }
    .dashboard-item-wrapper{
        height:100%;
    }
    .sub-detail-container {
        margin-top:10px;
        display:grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 10px;
        grid-row-gap:5px;
        color:#666;
    }
    .sub-detail-item-text{
        font-size:13px;
        text-align: left;
    }
    .sub-detail-item-count{
        font-size:18px;
        color:#0505aa;
        font-weight: bold;
    }


</style>
<style src="chartist/dist/chartist.css"></style>
