<template>
    <div id="customer-login">
        <div class="container">
            <vue-form :state="formstate" @submit.prevent="onSubmit">
                <h5 class="header-title">Welcome to register our website</h5>
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
                    <button type="submit" id="register-button">Login</button>
                    <h6 id="already-account">Don't you have account yet?<span><router-link to="/register">Register</router-link></span></h6>
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
                    email:'',
                    password:'',
                },
                error:[]
            }
        },

        methods:{

            onSubmit(){
                if (this.formstate.$invalid) {
                    return;
                } else {
                    ApiService.post('customer/login',this.model)
                        .then(
                            response => {
                                console.log(response);
                                let data=response.data.data;
                                if (response.data.status=="success"){
                                    this.$store.commit('saveCustomer', data);
                                    this.$router.push('/');
                                }
                                else{
                                    this.error.push(data);
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
        }
    }
</script>

<style scoped lang="scss">
    #customer-login {
        padding: 20px;
        min-height: calc(100vh - 400px);
        background: #eee;
        margin: auto;
        margin-bottom: 30px;
        .container {
            margin: auto;
            max-width: 600px;
            background: white;
            padding: 30px;
            margin-top: 50px;
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