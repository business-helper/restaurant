<template>
    <div class="row" id="user_list">
        <div class="col-lg-12">
            <b-card header="Home Slider List" header-tag="h4" class="bg-primary-card">
                <router-link :to="{path:'add_slider'}"><button class="btn btn-success add-new-button">Add New</button></router-link>
                <div class="table-responsive">
                    <datatable title="Home Sliders" :rows="tableData" :columns="columndata" v-model="action">
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
        name: "slider_list",
        id: "slider_list",
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
                        label: 'Image',
                        field: 'image',
                        numeric: false,
                        html: true,
                    },
                    {
                        label: 'Menu Title',
                        field: 'name',
                        numeric: false,
                        html: false,
                    },
                    {
                        label: 'Description',
                        field: 'description',
                        numeric: false,
                        html: true,
                    },
                    {
                        label: 'Slider Type',
                        field: 'type',
                        numeric: false,
                        html: false,
                    },
                    {
                        label: 'Order',
                        field: 'order',
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
        methods: {},
        mounted() {
            ApiService.get('admin/get_home_slider_list').then(response => {
                console.log(response.data);
                this.tableData = response.data;

                this.tableData.forEach((item, index) => {
                    this.$set(item, "action",
                        `<a class='clickable edit' href='#/edit_slider/${item.id}'><i class='fas fa-edit'></i> </a>
                        <a class='clickable delete' href="javascript:void(0)"><i class='fas fa-trash' action="delete" target_id="${item.id}"></i> </a>`);
                    if (item.image)
                        this.$set(item, "image",`<img src=${item.image}>`);
                    else
                        this.$set(item, "image",'No Image');
                });
            },error=>{
                console.log(error.response);
                }
            )
            .catch(function (error) {
                console.log(error);
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
                            {
                                deleteIndex=i;
                                break;
                            }
                        }
                        this.tableData.splice(deleteIndex,1);
                        for (let i=deleteIndex;i<this.tableData.length;i++){
                            this.tableData[i]['order']--;
                        }
                        ApiService.get(`admin/delete_slider/${id}`)
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

<style type="text/css">
    .democlass {
        color: red;
    }
    td,th{
        text-align:center;
    }
    td img{
        height:50px;
        height:100px;
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

    .add-new-button{
        display: block;
        float: right;
        margin-bottom: 10px;
        font-size: 16px;
    }




</style>
