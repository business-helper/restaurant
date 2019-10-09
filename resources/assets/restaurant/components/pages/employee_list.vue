<template>
    <div class="row" id="user_list">
        <div class="col-lg-12">
            <b-card header="Employee Table" header-tag="h4" class="bg-primary-card">
                <div class="table-responsive">
                    <datatable title="Registered Employees" :rows="tableData" :columns="columndata" v-model="action">

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
        name: "employee_list",
        id: "employee_list",
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
                        numeric: false,
                        html: false,
                    },
                    {
                        label: 'Profile Picture',
                        field: 'profile_picture',
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
                        label: 'Job',
                        field: 'job',
                        numeric: false,
                        html: false,
                    },
                    {
                        label: 'State',
                        field: 'state',
                        numeric: false,
                        html: false,
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
            ApiService.get('admin/employee_list').then(response => {
                console.log(response);
                this.tableData = response.data;
                this.tableData.forEach((item, index) => {
                    this.$set(item, "action",
                        `
                            <a class="clickable edit" href="#/edit_employee/${item.id}"><i class="fas fa-edit"></i></a>
                            <a class="clickable delete" href="javascript:void(0)"><i class="fas fa-trash" target_id="${item.id}" action="delete"></i> </a>
                        `
                       );
                    this.$set(item, "profile_picture",`<img src=${item.profile_picture}>`);
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
                    if (id && action){  // if there is id and action
                        let deleteIndex;
                        for (let i=0;i<this.tableData.length;i++){
                            if (id==this.tableData[i].id)
                                deleteIndex=i;
                        }
                        this.tableData.splice(deleteIndex,1);
                        ApiService.get(`admin/delete_employee/${id}`)
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
        width:80px;
        height:80px;
        border-radius:100px;
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


</style>
