<template>
    <div class="row" id="order_list">
        <div class="col-lg-12">
            <b-card header="Order Lists" header-tag="h4" class="bg-primary-card">
                <div class="table-responsive">
                    <datatable title="" :rows="tableData" :columns="columndata" v-model="action">
                    </datatable>
                </div>
            </b-card>
        </div>
    </div>
</template>
<script type="text/javascript">
    import datatable from "restaurant_components/plugins/DataTable/DataTable.vue";
    import ApiService from "restaurant_resources/common/api.service";

    export default {
        name: "menu_list",
        id: "menu_list",
        components: {
            datatable
        },
        data() {
            return {
                windowText: null,
                someValueSetOnClick: null,
                tableData: [],
                action:{},
                columndata: [
                    {
                        label: 'Order Id',
                        field: 'id',
                        numeric: false,
                        html: false,
                    },
                    {
                        label: 'Customer Data',
                        field: 'customer_data',
                        numeric: false,
                        html: true,
                    },
                    {
                        label: 'Price',
                        field: 'price',
                        numeric: false,
                        html: true,
                    },
                    {
                        label: 'Order Type',
                        field: 'order_type',
                        numeric: false,
                        html: false,
                    },
                    {
                        label: 'Actions',
                        field: 'action',
                        numeric: false,
                        html: true,
                    },
                ]
            }
        },
        methods: {
            fetch_orders(){
                let order_status=this.$route.params.order_status;
                if(order_status==='ongoing')
                    order_status='received';
                ApiService.get(`restaurant/get_dashboard_orders/${order_status}`).then(response => {
                        this.tableData = response.data;
                        this.tableData.forEach((item, index) => {
                            this.$set(item, "action",
                                `<a class='clickable edit' href='#/order_detail/${item.id}'><i class='fas fa-eye'></i> </a>`);
                            let customer_data=``;
                            if(item.customer_name!=null)
                                customer_data+=`<h6 class="item-content"><span class="label">Name: </span> ${item.customer_name}</h6>`
                            if(item.customer_email!=null)
                                customer_data+=`<h6 class="item-content"><span class="label">Email: </span> ${item.customer_email}</h6>`
                            if(item.customer_phone_number!=null)
                                customer_data+=`<h6 class="item-content"><span class="label">Phone Number: </span> ${item.customer_phone_number}</h6>`
                            this.$set(item, "customer_data",customer_data);

                            let price='';
                            price+=`<h6 class="item-content"><span class="label">Sub Total: </span> ${item.amount-item.sales_tax}</h6>`
                            price+=`<h6 class="item-content"><span class="label">Sales Tax: </span> ${item.sales_tax}</h6>`
                            price+=`<h6 class="item-content"><span class="label">Total: </span> ${item.amount}</h6>`
                            this.$set(item, "price",price);

                            let order_type='';
                            if(item.order_type==='online')
                                order_type='Online';
                            else
                                order_type='Pick up';
                            this.$set(item, "order_type",order_type);
                        });
                    },error=>{
                        console.log(error.response);
                    }
                )
                    .catch(function (error) {
                        console.log(error);
                    });

            }
        },

        mounted() {
            this.fetch_orders();

        },
        watch:{
            '$route.params.order_status': {
                handler: function() {
                    this.fetch_orders();
                },
                deep: true,
                immediate: true
            },
            action: function (newVal) {
                if (newVal.id != null){
                    let id=newVal.id;
                    let action=newVal.action;
                    if (id && action){  // if there is id and action
                        let deleteIndex;
                        for (let i=0;i<this.tableData.length;i++){
                            if (id==this.tableData[i].id)
                                deleteIndex=i;
                        }
                        this.tableData.splice(deleteIndex,1);
                        ApiService.get(`restaurant/delete_menu/${id}`)
                            .then(response => {

                            })
                    }
                    this.action.action=null;
                    this.action.id=null;
                }

            }
        }

    }
</script>
<style lang="scss">
    #order_list{
        td{
            vertical-align: middle;
        }
        .item-content{
            color:#444
        }
        .label{
            color:#000;
            font-weight: bold;
        }
    }


</style>

<style type="text/css">
    .democlass {
        color: red;
    }
    td,th{
        text-align:center;
    }
    td img{
        width:80px;
        height:80px;
    }
    td btn{
        width:70px;
    }
    a.delete i,a.edit i{
        font-size:20px;
        margin-right:0px;
    }
    a.edit i{
        color:#207909;
    }
    a.delete i{
        color:#d0280d;
    }
    .menu-price{
        text-align:left;
        font-weight:bold;
    }
    .menu-price span{
        font-weight:normal;
        text-align:left;
    }

</style>
