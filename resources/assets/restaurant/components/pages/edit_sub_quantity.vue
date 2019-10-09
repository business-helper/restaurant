<template>
    <div class="row">
        <div class="col-lg-12">
            <b-card header="Add Sub Quantity Option" header-tag="h4" class="bg-success-card">
                <div class="row">
                    <div class="col-lg-12 col-12 mb-3">
                        <vue-form class="form-horizontal form-validation" :state="formstate" @submit.prevent="onSubmit">

                            <div class="col-lg-12">
                                <div class="form-group">
                                    <validate tag="div">
                                        <label for="name">Amount Name</label>
                                        <input v-model="model.name" id="name" name="name" type="text"
                                               required autofocus placeholder="Amount Name" class="form-control"/>
                                        <field-messages name="name" show="$invalid && $submitted"
                                                        class="text-danger">
                                            <div slot="required">Amount Name is required</div>
                                        </field-messages>
                                    </validate>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <validate tag="div">
                                        <label for="multiple">Multiply Value </label>
                                        <input v-model="model.multiple" name="multiple" id="multiple"
                                               required placeholder="Multiply value for amount" class="form-control" />

                                        <field-messages name="description" show="$invalid && $submitted"
                                                        class="text-danger">
                                            <div slot="required">Multiply value is a required field</div>
                                            <div slot="description">Multiply value  is not valid</div>
                                        </field-messages>
                                    </validate>
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

    // My own made elements.
    import ImageInput from 'pages/ImageInput';


    Vue.use(VueForm, options);
    export default {
        name: "edit_sub_quantity",
        data() {
            return {
                formstate: {},

                model: {
                    name: "",
                    multiple: "",
                    type:"sub",
                    quantity_id:""
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
                    ApiService.post('admin/update_quantity', this.model)
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
                                this.$router.push("/sub_quantity_list")
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
            getQuantityInfo() {
                ApiService.get('admin/get_quantity/sub/' + this.model.quantity_id)
                    .then(response => {
                        console.log(response);
                        this.model.name = response.data.name;
                        this.model.multiple = response.data.multiple;
                    })
            },

        },
        components: {
            ImageInput:ImageInput
        },
        beforeMount() {
            this.model.quantity_id = this.$route.params.quantity_id;
            this.getQuantityInfo();
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
