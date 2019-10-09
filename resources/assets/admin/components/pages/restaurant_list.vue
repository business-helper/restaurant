<template>
    <div class="row" id="user_list">
        <div class="col-lg-12">
            <div style="text-align:right; margin-bottom:5px;">
                <router-link to="add_restaurant"><button class="btn btn-secondary">Add Restaurants</button></router-link>
            </div>
            <b-card header="Restaurant Lists" header-tag="h4" class="bg-primary-card">
                <div class="table-responsive">
                    <datatable title="Registered Restaurants" :rows="tableData" :columns="columndata" v-model="action">

                    </datatable>
                </div>
            </b-card>
        </div>
    </div>
</template>
<script type="text/javascript">
    import datatable from "components/plugins/DataTable/DataTable.vue";
    import ApiService from "../../common/api.service";


    export default {
        name: "restaurant_list",
        id: "restaurant_list",
        components: {
            datatable
        },
        computed:{

        },
        data() {
            return {
                windowText: null,
                someValueSetOnClick: null,
                action:{},
                tableData: [],

                columndata: [
                    {
                        label: 'No',
                        field: 'no',
                        numeric: true,
                        html: false,
                    },
                    {
                        label: 'Owner Name',
                        field: 'owner_name',
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
                        label: 'Restaurant Name',
                        field: 'restaurant_name',
                        numeric: false,
                        html: false,
                    },
                    {
                        label: 'Website Link',
                        field: 'website_link',
                        numeric: false,
                        html: false,
                    },
                    {
                        label: 'Logo',
                        field: 'logo',
                        numeric: false,
                        html: true,
                    },
                    {
                        label: 'State',
                        field: 'active',
                        numeric: false,
                        html: true,
                    },
                    {
                        label: 'Actions',
                        field: 'action',
                        numeric: false,
                        html: true,
                    }
                ]
            }
        },
        methods: {

        },
        created() {
            ApiService.get('admin/restaurant/get_restaurants').then(response => {
                this.tableData = response.data;
                this.tableData.forEach((item, index) => {
                    this.$set(item,'no',index+1);
                    let temp='';
                    if(item.active==1)
                        temp=`<button class="btn btn-danger action-button" target_id="${item.id}" action="deactivate">Deactivate</button>`;
                    else
                        temp=`<button class="btn btn-success action-button" target_id="${item.id}" action="activate">Activate</button>`;
                    this.$set(item,'active',temp);

                    var logo_image=`<h5 style="margin-bottom: 0">No Image</h5>`;
                    // if(item.logo!=null && item.logo!=='' && item.logo!=='null')
                        logo_image=`<a href="#/logo/${item.id}"><img class="logo-image" src="${item.logo}" alt="No Image"></a>`;

                    this.$set(item, "website_link",`https://order.ohmani.com/#/pick-up?restaurant=${item.restaurant_name}`);

                    this.$set(item, "action",
                        `
                            <a class="clickable edit btn btn-sm btn-primary"
                                href="#/edit_restaurant/${item.id}">Edit
                            </a>
                            <a class="clickable delete btn btn-danger btn-sm" href="javascript:void(0)" target_id="${item.id}" action="delete">
                                Delete
                            </a>
                            <a class="clickable edit btn btn-sm btn-primary"
                                href="#/menu_list/${item.id}">View Menus
                            </a>
                            <a class="clickable edit btn btn-sm btn-primary"
                                href="#/category_list/${item.id}">View Categories
                            </a>
                            <a class="clickable edit btn btn-sm btn-primary"
                                href="#/option_list/${item.id}">View Options
                            </a>
                            <a class="clickable edit btn btn-sm btn-primary"
                                href="#/size_list/${item.id}">View Sizes
                            </a>
                            <a class="clickable edit btn btn-sm btn-primary"
                                href="#/opening_hours/${item.id}">Opening Hours
                            </a>
                            <a class="clickable edit btn btn-sm btn-primary"
                                href="#/logo/${item.id}">View Logo
                            </a>
                        `
                    );
                    this.$set(item, "logo",logo_image);
                });
            })
            .catch(function (error) {
            });
        },
        watch:{
            action: function (newVal) {
                if (newVal.id != null){
                    let id=newVal.id;
                    let action=newVal.action;
                    let target=newVal.target;
                    if (id && action){  // if there is id and action
                        if(action==='delete'){
                            let deleteIndex;
                            for (let i=0;i<this.tableData.length;i++){
                                if (id==this.tableData[i].id)
                                    deleteIndex=i;
                            }
                            this.tableData.splice(deleteIndex,1);
                            ApiService.get(`admin/restaurant/delete/${id}`)
                                .then(response => {

                                })
                        }else if(action==='activate'){
                            ApiService.get(`admin/restaurant/activate/${id}`)
                                .then(response => {
                                    let tableData=this.tableData;
                                    tableData.map(item=>{
                                        if(item.id==id)
                                            item.active=`<button class="btn btn-danger action-button" target_id="${item.id}" action="deactivate">Deactivate</button>`
                                    });
                                    this.tableData=tableData;
                                }
                            )
                        }else if(action==='deactivate'){
                            ApiService.get(`admin/restaurant/deactivate/${id}`)
                                .then(response => {
                                        let tableData=this.tableData;
                                        tableData.map(item=>{
                                            if(item.id==id)
                                                item.active=`<button class="btn btn-success action-button" target_id="${item.id}" action="activate">Activate</button>`
                                        });
                                        this.tableData=tableData;
                                    }
                                )
                        }
                    }
                    this.action.action=null;
                    this.action.id=null;
                    this.action.target=null;
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
        cursor:pointer;
    }
    a.edit i{
        color:#207909;
    }
    a.delete i{
        color:#d0280d;
    }
    .action-button{
        width:90px;
    }
    .clickable{
        display: inline-block;
        margin-top: 2px;
        margin-bottom: 2px;
    }

</style>

