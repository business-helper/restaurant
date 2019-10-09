<template>
    <div id="customer-register">
        <div class="container">
            <vue-form :state="formstate" @submit.prevent="onSubmit">
                <h5 class="header-title">Welcome to register our website</h5>
                <div class="form-group">
                    <validate tag="div">
                        <label>Name</label>
                        <input type="text" name="name" v-model="model.name" class="form-control" autocomplete="off" required autofocus>
                        <field-messages name="name" show="$invalid && $submitted"
                                        class="text-danger">
                            <div slot="required">Name is a required</div>
                        </field-messages>
                    </validate>
                </div>
                <div class="form-group">
                    <validate tag="div">
                        <label>Email</label>
                        <input type="email" name="email" v-model="model.email" class="form-control" autocomplete="off" required autofocus>
                        <field-messages name="email" show="$invalid && $submitted"
                                        class="text-danger">
                            <div slot="required">Email is a required field</div>
                            <div slot="email">Email is not valid</div>
                        </field-messages>
                    </validate>
                </div>
                <div class="form-group">
                    <label>Phone Number<span class="optional">(Optional)</span></label>
                    <input type="text" v-model="model.phone_number" class="form-control" autocomplete="off">
                </div>
                <div class="form-group">
                    <label>Birthday<span class="optional">(Optional)</span></label>
                    <!--<input type="text" v-model="model.birthday" class="form-control" autocomplete="off">-->
                    <datepicker placeholder="Select Date" v-model="model.birthday" input-class="form-control"></datepicker>
                </div>

                <div class="form-group">
                    <label>Profile Image<span class="optional">(Optional)</span> </label>
                    <clipper-upload  v-model="model.profile_picture" class="uploadButton">
                        <img src="public/Images/Icons/imageUpload.png">
                    </clipper-upload>
                    <clipper-fixed  class="profile-picture" ref="clipper" :src="model.profile_picture" shadow="rgba(0,0,0,0.4)" :round="true" :grid="false">
                        <div class="placeholder" slot="placeholder">No image</div>
                    </clipper-fixed>
                </div>

                <div class="form-group">
                    <validate tag="div">
                        <label>Password</label>
                        <input type="password" name="password" v-model="model.password" class="form-control" required>
                        <field-messages name="password" show="$invalid && $submitted"
                                        class="text-danger">
                            <div slot="required">Password is a required</div>
                        </field-messages>
                    </validate>
                </div>
                <div class="form-group">
                    <validate tag="div">
                        <label>Password Confirmation</label>
                        <input type="password" :matches="model.password" name="password_confirmation" v-model="model.password_confirmation" class="form-control" required>
                        <field-messages auto-label name="password_confirmation" show="$invalid && $submitted" class="text-danger">
                            <div slot="required">Confirm password is a required field</div>
                            <div slot="matches">Passwords do not match</div>
                        </field-messages>
                    </validate>
                </div>
                <div class="form-group">
                    <button type="submit" id="register-button">Register</button>
                    <h6 id="already-account">Already have account?<span><router-link to="/login">Sign In</router-link></span></h6>
                </div>
                <div v-for="(item,index) in error" class="error-messages text-danger">
                    {{item}}
                </div>


            </vue-form>

        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueForm from "vue-form";
    import options from "../common/validation";

    import DatePicker from 'vuejs-datepicker';
    import ApiService from '../common/api.service';

    Vue.use(VueForm,options);




    export default {
        components: {
            'datepicker':DatePicker,
        },

        data(){
            return {
                formstate: {},
                model:{
                    name:'',
                    email:'',
                    phone_number:'',
                    profile_picture:'',
                    birthday:'',
                    card_number:'',
                    expire_date:'',
                    password:'',
                    password_confirmation:'',
                    resultImageURL:''

                },
                error:[]
            }
        },

        methods:{

            onSubmit(){
                if (this.formstate.$invalid) {
                    return;
                } else {
                    this.getResult();
                    ApiService.post('customer/register',this.model)
                        .then(
                            response => {
                                console.log(response);
                                if (response.data.data){
                                    let data=response.data.data;
                                    this.$store.commit('saveCustomer', data);
                                    this.$router.push('/');
                                }
                                if (response.data.error){
                                    let errors=response.data.error;
                                    let that=this;
                                    $.each(errors,function (error) {
                                        $.each(errors[error],function (item) {
                                            that.error.push(errors[error][item]);
                                        })
                                    })
                                }
                            },
                            error => {
                                console.log(error.response);
                            }
                        )
                }
            },
            getResult: function () {
                const canvas = this.$refs.clipper.clip();//call component's clip method
                this.model.resultImageURL = canvas.toDataURL("image/jpg", 1);//canvas->image
            }
        }
    }
</script>

<style scoped lang="scss">
    #customer-register {
        padding: 20px;
        min-height: calc(100vh - 500px);
        background: #eee;
        margin: auto;
        margin-bottom: 20px;

        .container {
            margin: auto;
            max-width: 600px;
            background: white;
            padding: 30px;
            margin-top: 20px;
            box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3), 0 2px 4px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
        }

        .header-title{
            margin-bottom: 20px;
            text-align: center;
            font-size: 22px;
            color: #444;
        }

        #register-button{
            background: black;
            color: #ddd;
            padding: 10px 20px;
            font-size: 18px;
            font-weight: bold;
            border-color: #9a9595;
            border-radius:6px;
        }
        #register-button:hover{
            color:white;
        }
        #already-account{
            float:right;
            margin-top:20px;
            color: #666;
        }
        #already-account span{
            margin-left:20px;
        }

        .uploadButton{
            width:50px;
        }
        .profile-picture{
            border:1px solid #aaa;
            background:#aaa;
            margin-top:10px;
        }

        .placeholder{
            width:100%;
            height:100px;
            padding-top:50px;
        }
        .optional{
            margin-left: 5px;
            font-size: 13px;
            color: #888;
        }

        .form-control:disabled, .form-control[readonly] {
            background-color: #ffffff;
            opacity: 1;
        }


        @media screen and (max-width:450px){
            #already-account{
                float:none;
            }

        }

    }

</style>