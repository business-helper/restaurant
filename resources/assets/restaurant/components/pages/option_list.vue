<template>
    <div class="row" id="user_list">
        <div class="col-lg-12">
            <div style="text-align:right; margin-bottom:5px;">
                <router-link :to="'/add_option/'+(restaurant_id!=0 ? restaurant_id : '')"><button class="btn btn-secondary">Add Option</button></router-link>
            </div>
            <b-card header="Food Option Table" header-tag="h4" class="bg-primary-card">
                <div class="table-responsive">
                    <datatable title="Food Option Lists" :rows="tableData" :columns="columndata" v-model="action">
                    </datatable>
                </div>
            </b-card>
        </div>
    </div>
</template>
<script type="text/javascript">
    import datatable from "restaurant_components/plugins/DataTable/DataTable.vue";
    import ApiService from "restaurant_resources/common/api.service";
    import AdminApiService from "common/api.service";
    export default {
        name: "option_list",
        id: "option_list",
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
                        label: 'No',
                        field: 'no',
                        numeric: false,
                        html: false,
                    },
                    {
                        label: 'Option Title',
                        field: 'title',
                        numeric: false,
                        html: false,
                    },
                    {
                        label:'Registered Item Numbers',
                        field:'item_number',
                        numerice:true,
                        html:false
                    },
                    {
                        label:'Min Selectable',
                        field:'min',
                        numerice:true,
                        html:false

                    },
                    {
                        label:'Max Selectable',
                        field:'max',
                        numerice:true,
                        html:false

                    },

                    {
                        label: 'Actions',
                        field: 'action',
                        numeric: false,
                        html: true,
                    },
                ],
                restaurant_id:0,
                api_service:ApiService
            }
        },
        methods: {},
        mounted() {
            var add_restaurant_id='';
            let api_service=ApiService;
            if(this.$route.params.restaurant_id)
            {
                this.restaurant_id=this.$route.params.restaurant_id;
                add_restaurant_id="/"+this.restaurant_id;
                api_service=AdminApiService;
                this.api_service=api_service;
            }
            api_service.get('restaurant/get_option_list'+add_restaurant_id).then(response => {
                this.tableData = response.data;
                this.tableData.forEach((item, index) => {
                    this.$set(item, "action",
                        `<a class='clickable edit' href='#/edit_option/${item.id}${add_restaurant_id}'><i class='fas fa-edit'></i> </a>
                        <a class='clickable delete' href="javascript:void(0)"><i class='fas fa-trash' action="delete" target_id="${item.id}"></i> </a>`);
                });
            })
            .catch(function (error) {
                console.log(error.response);
            });
        },
        watch:{
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
                        this.api_service.get(`restaurant/delete_option/${id}`)
                            .then(()=>{
                            }
                        )
                    }
                    this.action.action=null;
                    this.action.id=null;
                }

            }
        }

    }
</script>

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

</style>
