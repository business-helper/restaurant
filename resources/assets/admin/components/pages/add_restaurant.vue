<template>
    <div class="row">
        <div class="col-lg-12">
            <b-card header="Add Restaurant" header-tag="h4" class="bg-success-card">
                <div class="row">
                    <div class="col-lg-12 col-12 mb-3">
                        <vue-form class="form-horizontal form-validation" :state="formstate" @submit.prevent="onSubmit">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="name">Owner Name</label>
                                                <input v-model="model.name" id="name" name="name" type="text"
                                                       required autofocus placeholder="User Name" class="form-control"/>
                                                <field-messages name="name" show="$invalid && $submitted"
                                                                class="text-danger">
                                                    <div slot="required">Owner Name is a required field</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="email">Owner Email</label>
                                                <input v-model="model.email" name="email" id="email" type="email"
                                                       required placeholder="Email" class="form-control"/>
                                                <field-messages name="email" show="$invalid && $submitted"
                                                                class="text-danger">
                                                    <div slot="required">Email is a required field</div>
                                                    <div slot="email">Email is not valid</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label for="phone_number"> Phone Number</label>
                                            <input v-model="model.phone_number" name="phone_number" id="phone_number" type="phone_number" required placeholder="Phone Number" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="name">Restaurant Name</label>
                                                <input v-model="model.restaurant_name" id="restaurant_name" name="name" type="text"
                                                       required autofocus placeholder="Restaurant Name" class="form-control"/>
                                                <field-messages name="name" show="$invalid && $submitted"
                                                                class="text-danger">
                                                    <div slot="required">Restaurant is a required field</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label for="restaurant_address">Address(optional)</label>
                                            <input name="restaurant_address" id="restaurant_address" type="text" required placeholder="Restaurant Address" class="form-control" v-model="model.restaurant_address" />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label for="restaurant_address">Order Page Theme</label>
                                            <select id="theme" type="text" class="form-control" v-model="model.theme" >
                                                <option value="white">White</option>
                                                <option value="black">Black</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="lat">Location Latitude</label>
                                                <input name="lat" id="lat" type="text" placeholder="Location Latitude" class="form-control" v-model="model.latitude"/>
                                            </validate>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="lng">Location Longitude</label>
                                                <input name="lng" id="lng" type="text" placeholder="Location Longitude" class="form-control" v-model="model.longitude" />
                                            </validate>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="public_key">Stripe Public Key</label>
                                                <input name="public_key" id="public_key" type="text" placeholder="Public Key" class="form-control" v-model="model.public_key"/>
                                            </validate>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="private_key">Stripe Private Key</label>
                                                <input name="private_key" id="private_key" type="text" placeholder="Private Key" class="form-control" v-model="model.private_key"/>
                                            </validate>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="state">Restaurant State</label>
                                                <select id="state" name="state" size="1" class="form-control" v-model="model.state">
                                                    <option value="1">Active</option>
                                                    <option value="0">Inactive</option>
                                                </select>
                                                <field-messages name="gender" show="$invalid && $submitted" class="text-danger">
                                                    <div slot="checkbox">Gender is required</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="password"> Password</label>
                                                <input v-model="model.password" id="password" name="password"
                                                       type="password" placeholder="Password"
                                                       class="form-control" minlength="4" maxlength="10" autocomplete="new-password"/>
                                                <field-messages name="password" show="$invalid && $submitted"
                                                                class="text-danger">
                                                    <div slot="required">Password is required</div>
                                                    <div slot="minlength">Password should be atleast 4 characters long
                                                    </div>
                                                    <div slot="maxlength">Password should be atmost 10 characters long
                                                    </div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="password_confirmation"> Confirm Password</label>
                                                <input v-model="model.password_confirmation" id="password_confirmation"
                                                       name="password_confirmation" type="password"
                                                       placeholder="Confirm Password" class="form-control"
                                                       :sameas="model.password">
                                                <field-messages name="password_confirmation" show="$invalid && $submitted"
                                                                class="text-danger">
                                                    <div slot="required">Confirm password is required</div>
                                                    <div slot="sameas">Password and Confirm password should match</div>
                                                </field-messages>
                                            </validate>
                                        </div>
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
                                        <li class="text-success">Your user record has been inserted successfully</li>
                                    </ul>
                                </div>
                                <div class="col-lg-12">
                                    <div class="col-md-offset-4 col-md-8 m-t-25">
                                        <button type="submit" class="btn btn-primary">Submit
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
        name: "add_restaurant",
        data() {
            return {
                formstate: {},
                model: {
                    name: "",
                    email: "",
                    address:"",
                    restaurant_name:"",
                    restaurant_address:"",
                    public_key:"",
                    private_key:"",
                    phone_number:"",
                    state:1,
                    password: "",
                    password_confirmation: "",
                    restaurant_id:null,
                    theme:'white'
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
                    ApiService.post('restaurant/register', this.model)
                        .then(data => {
                            this.show_error = false;
                            this.show_success = true;
                        })
                        .then(() => {
                            setTimeout(()=>{
                                this.$router.push("/restaurant_list")
                            },500);
                        })
                        .catch(error => {
                            if (error.response.status == 422) {
                                this.validationErrors = error.response.data.errors;
                                this.show_error = true;
                                this.show_success = false;
                            }
                        })
                }
            },
            form_reset() {
                this.model = {
                    username: "",
                    email: "",
                    password: "",
                    location_id:-1,
                    repeatPassword: "",
                };
            }
        },
        components: {
            ImageInput:ImageInput
        },
        beforeMount(){
            if(typeof this.$route.params.restaurant_id!="undefined"){
                let restaurant_id=this.$route.params.restaurant_id;
                ApiService.get(`admin/restaurant/get_detail/${restaurant_id}`)
                    .then(
                        response => {
                            let data=response.data;
                            this.model={
                                name:data.owner_name,
                                email:data.email,
                                phone_number:data.phone_number,
                                restaurant_address:data.address,
                                restaurant_name:data.restaurant_name,
                                state:data.active,
                                latitude:data.lat,
                                longitude:data.lng,
                                public_key:data.stripe_public_key,
                                private_key:data.stripe_secret_key,
                                restaurant_id:restaurant_id,
                                theme:data.theme
                            }
                        },
                        error =>{
                            console.log(error.response);
                        }
                    )
            }

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
