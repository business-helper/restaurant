<template>
    <div>
        <div class="row mb-4">
            <div class="col-lg-3  col-sm-6 mb-3">
                <div class="text-center p-3 widget_social_icons box_shadow">
                    <div class="widget_social_inner1">
                        <i class="fa fa-user-o fb_text"></i>
                    </div>
                    <div class="text-ash">
                        <h4 class="mt-2 text_size">{{customer_number}}</h4>
                        <p class="m-0 mt-2">Customers</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3  col-sm-6 mb-3">
                <div class="text-center p-3 widget_social_icons box_shadow ">
                    <div class="widget_social_inner1">
                        <!--<i class="fa fa-link fb_text"></i>-->
                        <img class="icon-image" src="public/Images/Dashboard/order.png"/>
                    </div>
                    <div class="text-ash">
                        <h4 class="mb-0 mt-2 text_size">{{completed_orders}}</h4>
                        <p class="m-0 mt-2">Completed Orders</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-3">
                <div class="text-center p-3 widget_social_icons box_shadow">
                    <div class=" widget_social_inner1">
                       <img class="icon-image" src="public/Images/Dashboard/employee.png"/>
                    </div>
                    <div class="text-ash">
                        <h4 class="mb-0 mt-2 text_size">{{employee_number}}</h4>
                        <p class="m-0 mt-2">Employees</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3  col-md-6 mb-3">
                <div class="text-center p-3 widget_social_icons box_shadow">
                    <div class=" widget_social_inner1">
                        <img class="icon-image" src="public/Images/Dashboard/sales.jpg">
                    </div>
                    <div class="text-ash">
                        <h4 class="mb-0 mt-2 text_size">{{today_sales}}</h4>
                        <p class="m-0 mt-2">Sales</p>
                    </div>
                </div>
            </div>
        </div>
        <!--========================Annual Stats===========================-->
        <div class="row">
            <div class="col-lg-12 col-xl-12">
                <b-card>
                    <h5 class="ml-3 head_color">Daily Sales Report</h5>
                    <div class="date-range-holder">
                        <div class="form-group">
                            <label class="label_font">From: </label>
                            <datepicker v-model="sales_graph_begin_date"></datepicker>
                        </div>
                        <div class="form-group">
                            <label class="label_font">To: </label>
                            <datepicker v-model="sales_graph_end_date"></datepicker>
                        </div>
                    </div>

                    <div style="height: 305px;margin-top:30px;">
                        <IEcharts :option="area_chart" :loading="ajaxloading" @ready="onReady"
                                  ref="ajaxbar_chart"></IEcharts>
                    </div>
                </b-card>
            </div>
        </div>


        <!--======================Menu Sales========================-->
        <div class="row">
            <div class="col-12 index2_table">
                <b-card no-block>
                    <h5 class="head_color mt-4 ml-3 mb-2">Menu Sales</h5>

                    <div class="table-responsive">
                        <datatable :rows="menuSalesTableData" :columns="menuSalesColumnData" :sortable="false">
                        </datatable>
                    </div>
                </b-card>
            </div>
        </div>

        <!--======================registered Customers========================-->
        <div class="row">
            <div class="col-12 index2_table">
                <b-card no-block>
                    <h5 class="head_color mt-4 ml-3 mb-2">Registered Customers</h5>

                    <div class="table-responsive">
                        <datatable :rows="customerTableData" :columns="columndata" v-model="customer_action">
                        </datatable>
                    </div>
                </b-card>
            </div>
        </div>


        <!--======================Orders========================-->
        <div class="row">
            <div class="col-12 index2_table">
                <b-card no-block>
                    <h5 class="head_color mt-4 ml-3 mb-2">Orders</h5>

                    <div class="table-responsive">
                        <datatable :rows="orderTableData" :columns="orderColumndata" :sortable="false">
                        </datatable>
                    </div>
                </b-card>
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

                customer_action:{},
                order_action:{},

                customer_number:0,
                today_sales:0,
                employee_number:0,
                completed_orders:0,

                sales_graph_begin_date:'',
                sales_graph_end_date:'',

                sales_graph_dates:[],

                graph_styles:[
                    {
                        areaStyle: {
                            type: 'default',
                            color: '#00adf0'
                        },
                        lineStyle: {
                            color: "#006df0",
                        },
                    },
                    {
                        areaStyle: {
                            type: 'default',
                            color: '#CB48FF'
                        },
                        lineStyle: {
                            color: "#933ec5",
                        },
                    },
                    {
                        areaStyle: {
                            type: 'default',
                            color: '#88ED3C'
                        },
                        lineStyle: {
                            color: "#65b12d",
                        },
                    },
                    {
                        areaStyle: {
                            type: 'default',
                            color: '#D3F6F6'
                        },
                        lineStyle: {
                            color: "#95EAEA",
                        },
                    }

                ],


                //===========AJAX chart data start=========
                area_chart: {
                    title: {
                        text: '',
                        subtext: ''
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        show: true,
                        data: ['sales', 'sales1', ]
                    },
                    color:['#006df0', '#933ec5','#65b12d'],


                    calculable: true,
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        data: this.sales_graph_dates,
                    }],
                    yAxis: [{
                        type: 'value',
                        name: 'Currency ( $ )',
                    }],
                    series: [
                        {
                            name: 'sales',
                            type: 'line',
                            smooth: true,
                            itemStyle: {
                                normal: {
                                    areaStyle: {
                                        type: 'default',
                                        color: '#D3F6F6'
                                    },
                                    lineStyle: {
                                        color: "#95EAEA",
                                    },
                                }
                            },
                            data: []
                        },
                        {
                            name: 'sales1',
                            type: 'line',
                            smooth: true,
                            itemStyle: {
                                normal: {
                                    areaStyle: {
                                        type: 'default',
                                        color: '#D3F6F6'

                                    },
                                    lineStyle: {
                                        color: "#f5EA0A",
                                    },
                                }
                            },
                            data: []
                        }
                    ]
                },
                //===========AJAX chart data end=========\

                // ===tabledata
                customerTableData: [],
                columndata: [
                    {
                        label: 'Profile Image',
                        field: 'profile',
                        numeric: false,
                        html: true,
                    },
                    {
                        label: 'Name',
                        field: 'name',
                        numeric: false,
                        html: false,
                    },
                    {
                        label: 'Email',
                        field: 'email',
                        numeric: false,
                        html: false,
                    },
                    {
                        label: 'Phone Number',
                        field: 'phone_number',
                        numeric: false,
                        html: false,
                    },
                    {
                        label: 'Birthday',
                        field: 'birthday',
                        numeric: false,
                        html: false,
                    },
                    {
                        label: 'Total Orders',
                        field: 'total_orders',
                        numeric: false,
                        html: false,
                    },
                    {
                        label: 'Total Amount',
                        field: 'total_amount',
                        numeric: false,
                        html: false,
                    },
                    {
                        label: 'Actions',
                        field: 'action',
                        numeric: false,
                        html: true,
                    }
                ],

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

                menuSalesTableData:[],
                menuSalesColumnData:[
                    {
                        label:'Menu Image',
                        field:'image',
                        numeric:false,
                        html:true

                    },
                    {
                        label: 'Menu Name',
                        field: 'name',
                        numeric: false,
                        html: false,
                    },
                    {
                        label: 'Price ($)',
                        field: 'price',
                        numeric: false,
                        html: false,
                    },
                    {
                        label: 'Total Sales ($)',
                        field: 'sales',
                        numeric: false,
                        html: false,
                    },


                ]

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
            this.sales_graph_begin_date=begin_day;
            this.sales_graph_end_date=today;


            ApiService.get('admin/get_dashboard_data').then(
                response =>{
                    let data=response.data;
                    this.customerTableData=data.customerData;

                    this.customer_number=data.customer_number;
                    this.completed_orders=data.completed_orders;
                    this.employee_number=data.employee_number;
                    this.today_sales=data.today_sales;

                    this.customerTableData=data.customerData;
                    let that=this;
                    this.customerTableData.forEach((item, index) => {
                        that.$set(item, "action",
                            `<a class="clickable delete" href="javascript:void(0)"><i class="fas fa-trash" target_id="${item.id}" action="delete"></i> </a>`);
                        if (item.profile_picture)
                            that.$set(item, "profile",
                                `<img class="profile-image" src="public/Images/ProfileImages/Customer/${item.profile_picture}">`);
                        else
                            that.$set(item, "profile",
                                `<img class="profile-image" src="public/Images/ProfileImages/avatar.jpg">`);
                        if (item.birthday)
                            that.$set(item,"birthday",item.birthday.substring(0,10));
                        if (!item.total_amount)
                            that.$set(item,"total_amount",0);
                    });

                    this.orderTableData=data.orders;
                    this.orderTableData.forEach((item,index) =>{
                        if(item.order_status=='pending')
                            that.$set(item,'order_status',
                                `<span class='order-status-background pending_background'>${item.order_status}</span>`
                            );
                        if(item.order_status=='placed')
                            that.$set(item,'order_status',
                                `<span class='order-status-background placed_background'>${item.order_status}</span>`
                            );
                        if(item.order_status=='preparing')
                            that.$set(item,'order_status',
                                `<span class='preparing_background order-status-background'>${item.order_status}</span>`
                            );
                        if(item.order_status=='completed')
                            that.$set(item,'order_status',
                                `<span class='completed_background order-status-background'>${item.order_status}</span>`
                            );
                        if(item.order_status=='closed')
                            that.$set(item,'order_status',
                                `<span class='closed_background order-status-background'>${item.order_status}</span>`
                            );
                        if(item.order_status=='cancelled')
                            that.$set(item,'order_status',
                                `<span class='cancelled_background order-status-background'>${item.order_status}</span>`
                            );

                    })

                    this.menuSalesTableData=data.menu_sales;
                    this.menuSalesTableData.forEach((item,index) =>{
                        if (!item['sales'])
                            that.$set(item,'sales',0);
                        that.$set(item,'sales',parseFloat(Math.round(item.sales * 100) / 100).toFixed(2));

                        that.$set(item,'image',
                            `<img class='menu-image' src="public/Images/FoodMenus/${item.image}">`
                        );

                    })


                    this.updateGraphData(data.sales_data);
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

            // ===chart animation===
            // update_chart() {
            //     setInterval(() => {
            //         for (var i = 0; i < this.ajaxbar_chart.series.length; i++) {
            //             this.ajaxbar_chart.series[i].data.shift();
            //             this.ajaxbar_chart.series[i].data.push(Math.floor((Math.random() * (1000 - 90) + 90) +
            //                 1));
            //         }
            //     }, 4000);
            // },
            updateChart(){
                let begin_date=(new Date(this.sales_graph_begin_date)).toISOString().substring(0,10);
                let end_date=(new Date(this.sales_graph_end_date)).toISOString().substring(0,10);
                if (begin_date>end_date){
                    let temp=begin_date;
                    begin_date=end_date;
                    end_date=temp;
                }
                let data={};
                data.begin_date=begin_date;
                data.end_date=end_date;


                this.ajaxloading=true;
                ApiService.post('admin/update_sales_graph',data).then(
                    response =>{
                        this.ajaxloading=false;
                        let data=response.data;
                        this.updateGraphData(data);
                    },
                    error =>{
                        console.log(error.response);
                    }
                )


            },
            updateGraphData(data){
                this.area_chart.xAxis[0].data=data.dates;
                this.sales_graph_dates=data.dates;
                this.area_chart.series=[];
                this.area_chart.legend.data=[];
                let graph_styles=this.graph_styles;
                let graph_data=data.graph_data;
                let that = this;
                let i=0;
                $.each(graph_data,function (key,value) {
                    let temp={};
                    temp.name=key;
                    temp.type='line';
                    temp.smooth=true;
                    temp.itemStyle={};
                    temp.itemStyle.normal=graph_styles[i];
                    temp.data=[];
                    temp.data=value;
                    that.area_chart.series.push(temp);
                    that.area_chart.legend.data.push(key);
                    i++;
                })
                this.ajaxloading=false;

            }

        },
        watch:{
            sales_graph_begin_date(newValue,oldValue){
                if(newValue!=oldValue){
                    this.updateChart();
                }
            },
            sales_graph_end_date(newValue,oldValue){
                if(newValue!=oldValue){
                    this.updateChart();
                }
            },

            customer_action: function (newVal) {
                if (newVal.id != null){
                    let id=newVal.id;
                    let action=newVal.action;
                    if (id && action){  // if there is id and action
                        let deleteIndex;
                        for (let i=0;i<this.customerTableData.length;i++){
                            if (id==this.customerTableData[i].id)
                                deleteIndex=i;
                        }
                        this.customerTableData.splice(deleteIndex,1);
                        ApiService.get(`admin/delete_customer/${id}`)
                            .then(response => {
                            })
                    }
                    this.customer_action.action=null;
                    this.customer_action.id=null;
                }

            }


        }
    }
</script>
<!-- styles -->
<!-- adding scoped attribute will apply the css to this component only -->
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
        font-size: 25px;
        color: #797f82;
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
</style>
<style src="chartist/dist/chartist.css"></style>
