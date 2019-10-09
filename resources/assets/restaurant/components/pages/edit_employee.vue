<template>
    <div class="row">
        <div class="col-lg-12">
            <b-card header="Edit Employee" header-tag="h4" class="bg-success-card">
                <div class="row">
                    <div class="col-lg-12 col-12 mb-3">
                        <vue-form class="form-horizontal form-validation" :state="formstate" @submit.prevent="onSubmit">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="name"> Employee Name</label>
                                                <input v-model="model.name" id="name" name="name" type="text"
                                                       required autofocus placeholder="User Name" class="form-control"/>
                                                <field-messages name="name" show="$invalid && $submitted"
                                                                class="text-danger">
                                                    <div slot="required">Username is a required field</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="email"> Email</label>
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
                                            <!--<validate tag="div">-->
                                            <label for="phone_number"> Phone Number</label>
                                            <input v-model="model.phone_number" name="phone_number" id="phone_number" type="phone_number" required placeholder="Mobile Number(10 Digits)" class="form-control"/>
                                            <!--<field-messages name="mobile" show="$invalid && $submitted" class="text-danger">-->
                                            <!--<div slot="required">Mobile number is a required field</div>-->
                                            <!--<div slot="pattern">Mobile number is not valid</div>-->
                                            <!--</field-messages>-->
                                            <!--</validate>-->
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <!--<div class="col-lg-12 col-12 mt-4">-->
                                        <!--<form class="form-horizontal form-validation" role="form" method="POST" action="" @submit.prevent="upload_pic">-->
                                            <!--<div class="dropzone_wrapper">-->
                                                <!--<label>Profile Picture</label>-->
                                                <!--<vue-dropzone ref="user_image" id="dropzone" :options="dropzoneOptions" @vdropzone-success="uploaded"  @vdropzone-file-added="clearqueue"></vue-dropzone>-->
                                            <!--</div>-->
                                        <!--</form>-->
                                    <!--</div>-->
                                    <div class="col-lg-12 col-12 mt-4">
                                       <div class="form-group">
                                           <label>
                                               Profile Picture
                                           </label>
                                           <image-input :file="model.previous_file" v-model="model.profile_picture"></image-input>
                                       </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <!--<validate tag="div">-->
                                            <label for="birthday">Date Of Birth(optional)</label>
                                            <input name="birthday" id="birthday" type="date" required placeholder="Date of Birth(optional)" class="form-control" v-model="model.birthday" />
                                            <!--<field-messages name="dob" show="$invalid && $submitted" class="text-danger">-->
                                            <!--<div slot="required">Date of Birth is a required field</div>-->
                                            <!--</field-messages>-->
                                            <!--</validate>-->
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="location">Restaurant Location</label>
                                                <select id="location" name="location" size="1" class="form-control" v-model="model.location_id" checkbox>
                                                    <option value="" disabled>Select Restaurant Location for Employee</option>
                                                    <option v-for="location in locations" :value="location.id">{{location.name}}</option>
                                                </select>
                                            </validate>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="job">Job</label>
                                                <select id="job" name="job" size="1" class="form-control" v-model="model.job" checkbox>
                                                    <option value="kitchen" selected>Kitchen</option>
                                                    <option value="cashier">Cashier</option>
                                                </select>
                                                <!--<field-messages name="gender" show="$invalid && $submitted" class="text-danger">-->
                                                <!--<div slot="checkbox">Gender is required</div>-->
                                                <!--</field-messages>-->
                                            </validate>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="gender">Gender</label>
                                                <select id="gender" name="gender" size="1" class="form-control" v-model="model.gender" checkbox>
                                                    <option value="male" selected="selected">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                                <!--<field-messages name="gender" show="$invalid && $submitted" class="text-danger">-->
                                                <!--<div slot="checkbox">Gender is required</div>-->
                                                <!--</field-messages>-->
                                            </validate>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="state">Employee State</label>
                                                <select id="state" name="state" size="1" class="form-control" v-model="model.state" required checkbox>
                                                    <option value="active" selected="selected">Active</option>
                                                    <option value="pending">Pending</option>
                                                    <option value="vocation">Vocation</option>
                                                </select>
                                                <field-messages name="gender" show="$invalid && $submitted" class="text-danger">
                                                    <div slot="checkbox">Gender is required</div>
                                                </field-messages>
                                            </validate>
                                        </div>

                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <!--<validate tag="div">-->
                                                <label for="password"> Password</label>
                                                <input v-model="model.password" id="password" name="password"
                                                       type="password" required placeholder="Password"
                                                       class="form-control" minlength="4" maxlength="10"/>
                                                <!--<field-messages name="password" show="$invalid && $submitted"-->
                                                                <!--class="text-danger">-->
                                                    <!--<div slot="required">Password is required</div>-->
                                                    <!--<div slot="minlength">Password should be atleast 4 characters long-->
                                                    <!--</div>-->
                                                    <!--<div slot="maxlength">Password should be atmost 10 characters long-->
                                                    <!--</div>-->
                                                <!--</field-messages>-->
                                            <!--</validate>-->
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <!--<validate tag="div">-->
                                                <label for="password_confirmation"> Confirm Password</label>
                                                <input v-model="model.password_confirmation" id="password_confirmation"
                                                       name="password_confirmation" type="password" required
                                                       placeholder="Confirm Password" class="form-control"
                                                       :sameas="model.password">
                                                <!--<field-messages name="repeatpassword" show="$invalid && $submitted"-->
                                                                <!--class="text-danger">-->
                                                    <!--<div slot="required">Confirm password is required</div>-->
                                                    <!--<div slot="sameas">Password and Confirm password should match</div>-->
                                                <!--</field-messages>-->
                                            <!--</validate>-->
                                        </div>
                                    </div>
                                </div>

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
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'
    import VueForm from "vue-form";
    import options from "src/validations/validations.js";
    import ApiService from "resources/common/api.service";
    import JwtService from "resources/common/jwt.service";

    import ImageInput from 'pages/ImageInput';

    Vue.use(VueForm, options);
    export default {
        name: "add_employee",
        data() {
            return {
                formstate: {},
                model: {
                    name: "",
                    email: "",
                    phone_number:"",
                    birthday:"",
                    job:"waitress",
                    state:"active",
                    gender:"male",
                    password: "",
                    password_confirmation: "",
                    previous_file:"",
                    location_id:-1,
                },
                show_error: false,
                show_success: false,
                validationErrors: [],
                locations:[],
            }
        },
        methods: {
            uploaded() {
                console.log("uploaded");
            },

            onSubmit: function () {
                if (this.formstate.$invalid) {
                    return;
                } else {
                    ApiService.post('admin/edit_employee', this.model)
                        .then(data => {
                            console.log(data);
                            if (!data.data.error){
                                this.show_error = false;
                                this.show_success = true;
                            }
                            else
                            {
                                this.validationErrors = data.data.error;
                                this.show_error = true;
                                this.show_success = false;
                                throw new Error('handled');
                            }

                        })
                        .then(() => {
                            setTimeout(()=>{
                                this.user = window.localStorage.getItem('user');
                                if (this.user != null && JSON.parse(this.user)['id'] == this.model.user_id) {
                                    window.localStorage.removeItem('token')
                                    window.localStorage.removeItem('user')
                                    delete axios.defaults.headers.common['Authorization']
                                    this.$router.push({name: "login"})
                                }else{
                                    if(this.$route.name == 'edit_user_dashboard'){
                                        this.$router.push("/")
                                    }
                                    else if(this.$route.name == 'edit_user_api'){
                                        this.$router.push("/api")
                                    }else {
                                        this.$router.push("/employee_list")
                                    }
                                }
                            },500);
                        })
                        .catch(error => {
                            this.show_error = true;
                            this.show_success = false;
                        })
                }
            },
            getUserInfo() {
                ApiService.get('admin/get_employee/' + this.model.user_id)
                    .then(response => {
                        let employee=response.data.employee;
                        let locations=response.data.locations;
                        this.model.email = employee.email;
                        this.model.name = employee.name;
                        this.model.phone_number = employee.phone_number;
                        this.model.birthday = employee.birthday;
                        this.model.job = employee.job;
                        this.model.state = employee.state;
                        this.model.gender = employee.gender;
                        this.model.previous_file = employee.profile_picture;

                        if (employee.location_id)
                            this.model.location_id=employee.location_id;

                        this.locations=locations;
                    })
            },
            form_reset() {
                this.model = {
                    name: "",
                    email: "",
                    phone_number:"",
                    birthday:"",
                    job:"waitress",
                    state:"active",
                    gender:"male",
                    password: "",
                    password_confirmation: "",

                };
            }
        },
        beforeMount() {
            if(this.$route.params.user_id > 0) {
                this.model.user_id = this.$route.params.user_id;
            }else{
                let user = window.localStorage.getItem('admin');
                this.model.user_id = JSON.parse(user)['id'];
            }
            this.getUserInfo();
        },
        destroyed: function () {

        },
        components: {
            ImageInput:ImageInput
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
</style>
