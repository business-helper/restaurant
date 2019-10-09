<template>
    <div class="row">
        <div class="col-lg-12">
            <b-card header="Edit Food Menu" header-tag="h4" class="bg-success-card">
                <div class="row">
                    <div class="col-lg-12 col-12 mb-3">
                        <vue-form class="form-horizontal form-validation" :state="formstate" @submit.prevent="onSubmit">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="name">Food Name</label>
                                                <input v-model="model.name" id="name" name="name" type="text"
                                                       required autofocus placeholder="Food Name" class="form-control"/>
                                                <field-messages name="name" show="$invalid && $submitted"
                                                                class="text-danger">
                                                    <div slot="required">Food name is required</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="name">Price</label>
                                                <input v-model="model.price" id="price" name="price" type="number"
                                                       required autofocus placeholder="Food Price" class="form-control"/>
                                                <field-messages name="name" show="$invalid && $submitted"
                                                                class="text-danger">
                                                    <div slot="required">Food price is required</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                        <div class="form-group">
                                            <label for="name">Cook time</label>
                                            <input v-model="model.cook_time" name="cook_time" type="number"
                                                   autofocus placeholder="Cook Time" class="form-control"/>
                                        </div>

                                        <div class="form-group">
                                            <label for="description"> Food Description</label>
                                            <textarea v-model="model.description" name="description" id="description"
                                                      required placeholder="Brief description of Food" class="form-control" rows="8">
                                            </textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="col-lg-12 col-12 mt-4">
                                        <div class="form-group">
                                            <label>Food Picture</label>
                                            <image-input :file="model.image" v-model="model.image"></image-input>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 mt-4">
                                <b-card header="Food Size Options" class="bg-primary-card" header-tag="h4">
                                    <div class="food-quantity-option" v-for="(item,index) in model.menu_size">
                                        <b-card class="b-card-primary"  show-footer>
                                            <h6 slot="header" class="size-name">{{item.name}}</h6>
                                            <div class="form-group">
                                                <!--<image-input :file="model.image" v-model="model.image"  v-if="item.is_default==true && item.enabled==true"></image-input>-->
                                                <!--<image-input :file="item.image" v-model="item.image"  v-else></image-input>-->
                                                <div v-if="item.is_default==true && item.enabled==true"
                                                        class="base-image-input"
                                                        :style="{ 'background-image': `url(${model.image})` }"
                                                        @click="chooseImage(index)"
                                                >
                                                    <span
                                                            v-if="!model.image"
                                                            class="placeholder"
                                                    >
                                                            Choose an Image
                                                    </span>
                                                    <input
                                                            class="file-input"
                                                            :ref="`fileInput${index}`"
                                                            type="file"
                                                            @input="onSelectFile(index)"
                                                    >
                                                </div>
                                                <div v-else
                                                     class="base-image-input"
                                                     :style="{ 'background-image': `url(${item.image})` }"
                                                     @click="chooseImage(index)"
                                                >
                                                    <span
                                                            v-if="!item.image"
                                                            class="placeholder"
                                                    >
                                                            Choose an Image
                                                    </span>
                                                    <input
                                                            class="file-input"
                                                            :ref="`fileInput${index}`"
                                                            type="file"
                                                            @input="onSelectFile(index)"
                                                    >
                                                </div>
                                            </div>

                                            <div class="form-group quantity-option-input" v-if="item['enabled']">
                                                <validate tag="div">
                                                    <label>Price</label>
                                                    <input v-model="model.price" :name="`size_price-${index}`"  v-if="item.is_default==true && item.enabled==true" type="number"
                                                           autofocus placeholder="Price for Size" class="form-control"/>
                                                    <input v-model="item['price']" :name="`size_price-${index}`"  v-else type="number"
                                                           autofocus placeholder="Price for Size" class="form-control"/>
                                                    <field-messages :name="`size_price-${index}`" show="$invalid && $submitted"
                                                                    class="text-danger">
                                                        <div slot="required">Size Price is required</div>
                                                    </field-messages>
                                                </validate>
                                            </div>
                                            <div class="form-group quantity-option-input" v-else>
                                                <label>Price</label>
                                                <input v-model="item['price']" :name="`size_price-${index}`"  type="number"
                                                       autofocus placeholder="Price for Size" class="form-control" disabled/>
                                            </div>
                                            <div slot="footer" class="form-group quantity-option-input">
                                                <label>Use this Size ?</label>
                                                <toggle-button v-model="item['enabled']" :labels="{checked: 'Yes', unchecked: 'No'}" :value="item['enabled']" :sync="true" :color="{checked: '#09BD8F', unchecked: '#dc6460'}" />
                                                <label tabindex="0">
                                                    <input class="radiobox-tremolo" type="radio" name="selection_type" :value="index" v-model="selected_default_size_index" :disabled="!item['enabled']">Is Default Size?
                                                </label>
                                            </div>
                                        </b-card>
                                    </div>
                                    <div class="clearfix"></div>
                                </b-card>
                            </div>

                            <div class="col-12 mt-4">
                                <b-card class="food-option-holder bg-primary-card" header="Food Options" header-tag="h4">
                                    <div class="food-option" v-for="(option_tag,index) in model.option_tags">
                                        <b-card show-footer>
                                            <h5 slot="header">{{option_tag.title}}</h5>

                                            <div class="col-lg-12">
                                                <div class="row">
                                                    <div class="form-group" style="margin-right:20px;">
                                                        <label style="display:block">Use this Option ?</label>
                                                        <toggle-button v-model="option_tag.is_enabled" :labels="{checked: 'Yes', unchecked: 'No'}" :sync="true" :color="{checked: '#09BD8F', unchecked: '#dc6460'}" />
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label style="display:block"><strong>Selectable Item Numbers</strong></label>
                                                    <div class="row" style="margin-left:0">
                                                        <div class="form-group">
                                                            <validate tag="div">
                                                                <label>At Least</label>
                                                                <input v-model="option_tag.min" id="min" name="min" type="number"
                                                                       required autofocus placeholder="0" class="form-control" :disabled="!option_tag.is_enabled"/>
                                                                <field-messages name="min" show="$invalid && $submitted"
                                                                                class="text-danger">
                                                                    <div slot="required">Minimum Number is required</div>
                                                                </field-messages>
                                                            </validate>
                                                        </div>
                                                        <div class="form-group" style="margin-left:15px">
                                                            <label>Upto</label>
                                                            <input v-model="option_tag.max" id="max" name="max" type="number" autofocus placeholder="No Limit" class="form-control" :disabled="!option_tag.is_enabled"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label style="display:block"><strong>Alternative Item Numbers Due to Size</strong></label>
                                                    <div class="form-group" v-for="(item,index) in option_tag.sizes" style="margin-left:20px">
                                                        <b-form-checkbox class="primarycheck" v-model="item.enabled" v-if="model.menu_size[index].enabled" :disabled="!option_tag.is_enabled">{{item.name}}</b-form-checkbox>
                                                        <div class="row" style="margin-left:30px" v-if="model.menu_size[index].enabled">
                                                            <div class="form-group">
                                                                <label>At Least</label>
                                                                <input v-model="item.min" type="number" v-if="model.menu_size[parseInt(selected_default_size_index)]['id']!=item.id"
                                                                       autofocus placeholder="0" class="form-control"  :disabled="!option_tag.is_enabled || !item.enabled"/>
                                                                <input v-model="option_tag.min" type="number" v-else
                                                                       autofocus placeholder="0" class="form-control"  :disabled="!option_tag.is_enabled || !item.enabled"/>
                                                            </div>
                                                            <div class="form-group" style="margin-left:15px">
                                                                <label>Upto</label>
                                                                <input v-model="item.max" type="number" autofocus placeholder="No Limit" class="form-control" :disabled="!option_tag.is_enabled || !item.enabled" v-if="model.menu_size[selected_default_size_index]['id']!=item.id"/>
                                                                <input v-model="option_tag.max" type="number" autofocus placeholder="No Limit" class="form-control" :disabled="!option_tag.is_enabled || !item.enabled" v-else/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="option-item-holder">
                                                <h3 class="option-item-header-title">Option Items</h3>
                                                <div v-for="(option_item,index2) in option_tag.option_items">
                                                    <b-card show-footer class="option-item">
                                                        <h6 slot="header" class="option-item-name">{{option_item.name}}</h6>
                                                        <div class="form-group">
                                                            <label>Price</label>
                                                            <input type="number" v-model="option_item.price" :disabled="!option_tag.is_enabled || !option_item.is_enabled">
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Upto</label>
                                                            <input type="number" v-model="option_item.max" :disabled="!option_tag.is_enabled || !option_item.is_enabled" placeholder="No Limit">
                                                        </div>
                                                        <div class="col-lg-12">
                                                            <div class="row">
                                                                <div class="form-group" style="margin-top:10px;">
                                                                    <label>Use this Item ?</label>
                                                                    <toggle-button v-model="option_item.is_enabled" :labels="{checked: 'Yes', unchecked: 'No'}" :sync="true" :color="{checked: '#09BD8F', unchecked: '#dc6460'}" :disabled="!option_tag.is_enabled"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </b-card>
                                                </div>
                                            </div>
                                        </b-card>
                                    </div>
                                    <div class="clearfix"></div>
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
                                        <li class="text-success">Food Menu added successfully</li>
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

    // My own made elements.
    import ImageInput from 'pages/ImageInput';

    require("checkbox.css/dist/css/checkbox.min.css");
    require("radiobox.css/dist/css/radiobox.min.css");


    Vue.use(VueForm, options);
    export default {
        name: "add_user",
        data() {
            return {
                formstate: {},
                model: {
                    name: "",
                    description: "",
                    image:"",
                    price:0,
                    cook_time:0,
                    menu_id:"",

                    selected_options:[],
                    selected_sizes:[],
                    new_sizes:[],
                    new_options:[],
                },

                option_tags:[],
                menu_size:[],
                show_error:false,
                show_success:false,
                validationErrors:[],
            }
        },
        methods: {
            onSubmit: function () {
                if (this.formstate.$invalid) {
                    return;
                } else {
                    ApiService.post('admin/update_menu', this.model)
                        .then(data => {
                            console.log(data);
                            if (!data.data.error) {  // if category added
                                this.show_error = false;
                                this.show_success = true;
                            } else {
                                this.validationErrors = data.data.error;
                                this.show_error = true;
                                this.show_success = false;
                                throw new Error('handled');

                            }
                        },error=>{
                            console.log(error.response);
                            throw new Error('handled');

                            }
                        )
                        .then(() => {
                            setTimeout(() => {
                                this.$router.push("/menu_list")
                            }, 500);
                        })
                        .catch(error => {

                        })
                }
            },

            form_reset() {
                this.model = {
                    name: "",
                    description: "",
                    price: 0
                };
            },
            chooseImage(index) {
                if(this.model.menu_size[index].enabled==true)
                    this.$refs[`fileInput${index}`][0].click();
            },
            onSelectFile (index){
                const input = this.$refs[`fileInput${index}`][0]
                const files = input.files;

                if (files && files[0]) {
                    const reader = new FileReader;
                    reader.onload = e => {
                        this.model.menu_size[index].image=e.target.result;
                        if (this.model.menu_size[index].is_default==true)
                            this.model.image = e.target.result;
                    }
                    reader.readAsDataURL(files[0])
                }
            }
        },
        components: {
            ImageInput:ImageInput
        },

        beforeMount() {
            this.model.menu_id=this.$route.params.menu_id;
            ApiService.get(`admin/get_menu/${this.model.menu_id}`)
                .then(response => {
                    let data=response.data;
                    this.model.option_tags=data.option_tags;
                    this.model.menu_size=data.size;
                    this.model.name=data.menu.name;
                    this.model.price=data.menu.price;
                    this.model.description=data.menu.description;
                    this.model.cook_time=data.menu.cook_time;
                    this.model.image=data.menu.image;
                    let that = this;
                    this.model.menu_size.forEach(function (item,index) {
                        that.$set(item,'image',item.image);
                    })
                },
                data => {
                    console.log(data.response);
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
    .food-quantity-option{
        float:left;
        margin-right:20px;
    }
    toggle-button{
        margin-top:5px;
    }
    .quantity-option-input{
        margin-top:5px;
        max-width:200px;
    }

    .size-name{
        margin-bottom:0;
    }

    .option-item-holder{

    }

    .option-item{
        width:250px;
        float:left;
        margin-right:20px;
        margin-bottom:20px;
    }

    .option-item-header-title{
        margin-top:20px;
    }

    .option-item-name{
        font-weight:bold;
        margin-bottom:0;
    }



    .base-image-input {
        display: block;
        width: 200px;
        height: 200px;
        cursor: pointer;
        background-size: 100% 100%;
        background-position: center center;
    }
    .placeholder {
        background: #F0F0F0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #333;
        font-size: 18px;
        font-family: Helvetica;
    }
    .placeholder:hover {
        background: #E0E0E0;
    }
    .file-input {
        display: none;
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