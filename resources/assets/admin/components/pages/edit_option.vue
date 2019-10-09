<template>
    <div class="row">
        <div class="col-lg-12">
            <b-card header="Add Option Items" header-tag="h4" class="bg-success-card">
                <div class="row">
                    <div class="col-lg-12 col-12 mb-3">
                        <vue-form class="form-horizontal form-validation" :state="formstate" @submit.prevent="onSubmit">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <validate tag="div">
                                        <label for="title">Option Title</label>
                                        <input v-model="model.title" id="title" name="title" type="text"
                                               required autofocus placeholder="Option Title" class="form-control"/>
                                        <field-messages name="title" show="$invalid && $submitted"
                                                        class="text-danger">
                                            <div slot="required">Option Title is required</div>
                                        </field-messages>
                                    </validate>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label style="display:block"><strong>Selectable Item Numbers</strong></label>
                                    <div class="row" style="margin-left:0">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="title">At Least</label>
                                                <input v-model="model.min_number" id="min" name="min" type="number"
                                                       required autofocus placeholder="0" class="form-control"/>
                                                <field-messages name="min" show="$invalid && $submitted"
                                                                class="text-danger">
                                                    <div slot="required">Minimum Number is required</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                        <div class="form-group" style="margin-left:15px">
                                            <label for="title">Upto</label>
                                            <input v-model="model.max_number" id="max" name="max" type="number" autofocus placeholder="No Limit" class="form-control"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label style="display:block"><strong>Alternative Item Numbers Due to Size</strong></label>
                                    <div class="form-group" v-for="(item,index) in model.sizes" style="margin-left:20px">
                                        <b-form-checkbox class="primarycheck" v-model="item.enabled" v-on:change="sizeEnableStateChange(index)">{{item.name}}</b-form-checkbox>
                                        <div class="row" style="margin-left:30px">
                                            <div class="form-group">
                                                <label>At Least</label>
                                                <input v-model="item.min"name="min" type="number"
                                                       required autofocus placeholder="0" class="form-control"  :disabled="!item.enabled"/>
                                            </div>
                                            <div class="form-group" style="margin-left:15px">
                                                <label>Upto</label>
                                                <input v-model="item.max" type="number" autofocus placeholder="No Limit" class="form-control" :disabled="!item.enabled"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="col-12 mt-4">
                                <b-card class="option-item-holder" header="Add Option Item" header-tag="h4">
                                    <div class="option-item" v-for="(item, index) in model.option_items">
                                        <div class="close-button" @click="deleteItem(index)"><i class="fa fa-window-close"></i></div>
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="title">Item Name</label>
                                                <input v-model="item.name" :name="`item-name-${index}`" type="text"
                                                       required autofocus placeholder="Item Name" class="form-control"/>
                                                <field-messages :name="`item-name-${index}`" show="$invalid && $submitted"
                                                                class="text-danger">
                                                    <div slot="required">Item name is required</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="title">Item Price</label>
                                                <input v-model="item.price" :name="`item-price-${index}`" type="number"
                                                       required autofocus placeholder="Item Price" class="form-control"/>
                                                <field-messages :name="`item-price-${index}`" show="$invalid && $submitted"
                                                                class="text-danger">
                                                    <div slot="required">Item price is required</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                        <div class="form-group">
                                            <label for="title">Upto</label>
                                            <input v-model="item.max" :name="`item-max-${index}`" type="number"
                                                   required autofocus placeholder="No Limit" class="form-control"/>
                                        </div>
                                    </div>
                                    <button class="btn btn-primary add-item-button" @click="addItem">Add Item</button>
                                </b-card>
                            </div>

                            <div class="row">
                                <div class="col-sm-12" v-show="show_error">
                                    <ul>
                                        <li v-for="error in validationErrors" class="text-danger">{{error[0]}}</li>
                                    </ul>
                                </div>
                                <div class="col-sm-12" v-show="show_success">
                                    <ul>
                                        <li class="text-success">Amount Option added successfully</li>
                                    </ul>
                                </div>

                                <div class="col-lg-12">
                                    <div class="col-md-offset-4 col-md-8 m-t-25">
                                        <button type="submit" class="btn btn-primary">Submit
                                        </button>
                                        <button type="reset" class="btn btn-effect-ripple btn-secondary  reset_btn1"
                                                @click="form_reset">
                                            Reset
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </vue-form>
                    </div>
                </div>
            </b-card>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import VueForm from "vue-form";
    import options from "src/validations/validations.js";
    import ApiService from "resources/common/api.service";

    require("checkbox.css/dist/css/checkbox.min.css");
    require("radiobox.css/dist/css/radiobox.min.css");

    Vue.use(VueForm, options);
    export default {
        name: "add_option",
        data() {
            return {
                formstate: {},

                model: {
                    title: "",
                    selection_type:"one",
                    mandatory:false,
                    option_items:[],
                    tag_id:0,
                    sizes:[],

                },
                show_error:false,
                show_success:false,
                validationErrors:[],
            }
        },
        methods: {
            sizeEnableStateChange(index) {
                let sizes = this.model.sizes;
                console.log(sizes[index].enabled);
                if (!sizes[index].enabled) {
                    sizes[index]['min'] = this.model.min_number;
                    sizes[index]['max'] = this.model.max_number;
                }
            },
            onSubmit: function () {
                if (this.formstate.$invalid) {
                    return;
                } else {
                    ApiService.post('admin/update_option', this.model)
                        .then(data => {
                            console.log(data);
                            if (!data.data.error){  // if category added
                                this.show_error = false;
                                this.show_success = true;
                            }
                            else{
                                this.validationErrors = data.data.error;
                                this.show_error = true;
                                this.show_success = false;
                                throw new Error('handled');
                            }
                        },
                        data => {
                            console.log(data.response);
                            throw new handle('error');
                        })
                        .then(() => {
                            setTimeout(()=>{
                                this.$router.push("/option_list")
                            },500);
                        })
                    }
                },

            addItem:function(evt){
                let temp={};
                temp['name']='';
                temp['price']=0;
                temp['item_id']=-1;
                temp['max']=null;
                this.model.option_items.push(temp);
                evt.preventDefault();
            },
            deleteItem(index){
                this.model.option_items.splice(index,1);

            },
            form_reset() {
                this.model = {
                    name: "",
                    description: "",
                };
            }
        },
        beforeMount() {
            this.model.tag_id=this.$route.params.option_id;
            ApiService.get(`admin/get_option/${this.model.tag_id}`)
                .then(
                    response => {
                        console.log(response);
                        let data=response.data;
                        this.model.option_items=data.option_items;
                        let option_tag=data.option_tag;
                        this.model.title=option_tag.title;
                        this.model.min_number=option_tag.min_number;
                        this.model.max_number=option_tag.max_number;
                        this.model.sizes=option_tag.sizes;
                    },
                    error => {
                        console.log(error);

                    }
                )
        },

    }
</script>
<style scoped>
    .dropzone_wrapper {
        width: 100%;
    }

    .align-left {
        float: left;
    }

    .align-right {
        float: right;
    }
    .category-option{
        width:200px;
        float:left;
        margin-right:20px;
    }
    .category-img{
        width:100%;
        height:150px;
    }
    .category-name{
        font-weight: bold;
        margin-bottom:0;
    }
    .option-item{
        width:300px;
        float:left;
        margin-right:20px;
        margin-bottom:20px;
        border:1px solid #bbb;
        padding:20px;
    }
    .close-button {
        text-align: right;
        font-size: 25px;
        color: #777;
        margin-top: -20px;
        margin-right: -15px;
        cursor:pointer;
    }
</style>
<style>
    .custom-control-label::before {
        width: 1.5rem;
        height: 1.5rem;
        top: 0rem;
    }
    .custom-control-label::after {
        width: 1.5rem;
        height: 1.5rem;
        top: 0rem;
    }
</style>
