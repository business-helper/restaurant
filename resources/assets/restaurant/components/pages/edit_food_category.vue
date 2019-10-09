<template>
    <div class="row">
        <div class="col-lg-12">
            <b-card header="Edit Food Category" header-tag="h4" class="bg-success-card">
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
                                    <validate tag="div">
                                        <label for="description"> Category Description</label>
                                        <textarea v-model="model.description" name="description" id="description"
                                               required placeholder="Brief Discription of Category" class="form-control" rows="8">
                                        </textarea>

                                        <field-messages name="description" show="$invalid && $submitted"
                                                        class="text-danger">
                                            <div slot="required">Category Description is a required field</div>
                                            <div slot="description">Category Description is not valid</div>
                                        </field-messages>
                                    </validate>
                                </div>
                            </div>

                            <div class="col-lg-12 col-12 mt-4">
                                <div class="form-group">
                                    <label>Category Picture</label>
                                    <image-input :file="model.imageFile" v-model="model.image"></image-input>
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
                    imageFile:"",
                    category_id:""
                },
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
                    ApiService.post('admin/update_category', this.model)
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
                        })
                        .then(() => {
                            setTimeout(()=>{
                                this.$router.push("/category_list")
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
            },
            getCategoryInfo() {
                ApiService.get('admin/get_category/' + this.model.category_id)
                    .then(response => {
                        console.log(response);
                        this.model.name = response.data.name;
                        this.model.description = response.data.description;
                        this.model.imageFile = response.data.image;
                    })
            },
        },

        beforeMount() {
            console.log(this.$route.params.category_id);
            this.model.category_id = this.$route.params.category_id;
            this.getCategoryInfo();
        },
        components: {
            ImageInput:ImageInput
        },
        mounted: function () {

        },
        destroyed: function () {

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
</style>
