<template>
    <div class="row">
        <div class="col-lg-12">
            <b-card header="Add Food Category" header-tag="h4" class="bg-success-card">
                <div class="row">
                    <div class="col-lg-12 col-12 mb-3">
                        <vue-form class="form-horizontal form-validation" :state="formstate" @submit.prevent="onSubmit">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <validate tag="div">
                                        <label for="name">Category Name</label>
                                        <input v-model="model.name" id="name" name="name" type="text"
                                               required autofocus placeholder="Category Name" class="form-control"/>
                                        <field-messages name="name" show="$invalid && $submitted"
                                                        class="text-danger">
                                            <div slot="required">Category Name is required</div>
                                        </field-messages>
                                    </validate>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label> Category Sequence</label>
                                    <input type="number" v-model="model.sequence" name="sequence" placeholder="Category Sequency" class="form-control" rows="8">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label for="name">Has Item Image ?</label>
                                    <select class="form-control" v-model="model.has_item_image">
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>

                                </div>
                            </div>

                            <div class="col-lg-12 col-12 mt-4">
                                <div class="background-image-part-holder">
                                    <h5 class="category-image-title">Category Image<span class="recommended-image-title">(800 x 250px recommended)</span></h5>
                                    <div class="image-base-holder">
                                        <clipper-upload  v-model="model.background_image" ref="clipper_background" class="uploadButton">
                                            <img src="public/Images/Icons/imageUpload.png">
                                        </clipper-upload>
                                        <clipper-basic   class="background-image" ref="clipper_background" :src="model.background_image" shadow="rgba(0,0,0,0.4)" :grid="false" bgColor="transparent" @load="imgLoad">
                                            <div class="placeholder" slot="placeholder">No image</div>
                                        </clipper-basic>
                                        <div class="text-danger" v-if="model.background_image=='' && formstate.$submitted">Background Image is required</div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-12" v-show="show_error">
                                    <ul>
                                        <li v-for="error in validationErrors" class="text-danger">{{error[0]}}</li>
                                    </ul>
                                </div>
                                <div class="col-sm-12" v-show="show_success">
                                    <ul>
                                        <li class="text-success">Food Category added successfully</li>
                                    </ul>
                                </div>

                                <div class="col-lg-12">
                                    <div class="col-md-offset-4 col-md-8 m-t-25">
                                        <button type="submit" class="btn btn-primary">Submit</button>
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
    import options from "restaurant_src/validations/validations";
    import ApiService from "restaurant_resources/common/api.service";
    import AdminApiService from "common/api.service";

    // My own made elements.
    import ImageInput from 'pages/ImageInput';
    import ClipperBasic from "vuejs-clipper/src/components/clipper-basic";
    import 'vuejs-clipper/dist/vuejs-clipper.css';
    import VueLoadingButton from 'vue-loading-button'


    Vue.use(VueForm, options);
    export default {
        name: "add_user",
        data() {
            return {
                formstate: {},
                model: {
                    name: "",
                    description: "",
                    background_image:"",
                    resultImageURL:'',
                    category_id:-1,
                    sequence:null,
                    has_item_image:1
                },
                show_error:false,
                show_success:false,
                validationErrors:[],
                button_loading:false,
                restaurant_id:0,
                api_service:ApiService
            }
        },
        methods: {
            imgLoad:function(){
                this.$refs.clipper_background.setTL$.next({"top":0,"left":0});
                this.$refs.clipper_background.setWH$.next({"width":100,"height":100});
            },
            getResult: function () {
                const canvas = this.$refs.clipper_background.clip();//call component's clip method
                this.model.resultImageURL = canvas.toDataURL("image/png", 1);//canvas->image
            },

            onSubmit: function () {
                if (this.formstate.$invalid) {
                    return;
                } else {
                    this.getResult();
                    let add_restaurant_id=this.restaurant_id!=0 ? "/"+this.restaurant_id : '';
                    let api_service=this.api_service;
                    api_service.post('restaurant/add_category'+add_restaurant_id, this.model)
                        .then(data => {
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
                        error =>{
                            console.log(error.response);
                        }
                        )
                        .then(() => {
                            setTimeout(()=>{
                                this.$router.push("/category_list"+add_restaurant_id)
                            },500);
                        })
                        .catch(error => {

                        })
                }
            },
            form_reset() {
                this.model = {
                    name: "",
                    description: "",
                };
            }
        },
        components: {
            ImageInput:ImageInput,
            ClipperBasic,
            VueLoadingButton
        },
        beforeMount() {
            let api_service=this.api_service;
            let add_restaurant_id='';
            if(this.$route.params.restaurant_id)
            {
                this.restaurant_id=this.$route.params.restaurant_id;
                add_restaurant_id="/"+this.restaurant_id;
                api_service=AdminApiService;
                this.api_service=api_service;
            }
            if(this.$route.params.category_id){
                this.model.category_id=this.$route.params.category_id;
                api_service.get('restaurant/get_category/' + this.model.category_id)
                    .then(response => {
                        this.model.name = response.data.name;
                        this.model.description = response.data.description;
                        this.model.sequence=response.data.sequence;
                        this.model.has_item_image=response.data.has_item_image;
                        if(response.data.image){
                            fetch(response.data.image)
                                .then(res => res.blob()) // Gets the response and returns it as a blob
                                .then(blob => {
                                    let objectURL = URL.createObjectURL(blob);
                                    this.model.background_image=objectURL;
                            });
                        }

                    })
            }
            else{
                api_service.get('restaurant/get_category_data'+add_restaurant_id)
                    .then(
                        response => {
                            let data=response.data;
                            this.model.sequence=data.result.max_sequence;
                        },
                        error=>{
                            console.log(error.response);
                        }
                    );
            }
        }

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
    .uploadButton img{
        width:50px;
    }
    .background-image {
        max-width:800px;
        /*height:250px;*/
        margin-top:20px;
        margin-bottom:20px;
    }
    .background-image-part-holder .placeholder,.bottom-image-part-holder .placeholder{
        text-align: center;
        padding: 20px;
        font-size: 20px;
        background-color: lightgray;
        margin-top:20px;
        margin-bottom:20px;
    }
    .recommended-image-title{
        margin-left:10px;
        color:red;
        font-size:15px;
    }
    .uploadButton{
        width:fit-content;
        cursor: pointer;
    }
</style>
