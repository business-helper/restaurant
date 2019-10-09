<template>
    <!--<b-card header="Site Logo and title" header-tag="h4" class="bg-success-card">-->
    <div id="locations-page">
        <vue-form class="form-horizontal form-validation" :state="formstate" @submit.prevent="onSubmit">
            <div :class="{'alert alert-success site-setting-alert':true,'show':success_alert_show}">Site Setting successfully updated</div>
            <div class="clearfix"></div>
            <div class="location-holder">
                <div class="form-group">
                    <label>Owner Name</label>
                    <input type="text" v-model="model.owner_name" name="restaurant_name" autofocus class="form-control">
                </div>
                <div class="form-group">
                    <label>Phone: </label>
                    <input type="text" v-model="model.phone" name="phone" autofocus class="form-control">
                </div>
                <div class="form-group">
                    <label>Email: </label>
                    <input type="email" v-model="model.email" name="email" autofocus class="form-control">
                </div>
                <div class="form-group">
                    <label>Restaurant Name</label>
                    <input type="text" v-model="model.restaurant_name" name="restaurant_name" autofocus class="form-control">
                </div>
                <div class="form-group">
                    <label>Address</label>
                    <input type="text" v-model="model.restaurant_address" name="restaurant_address" autofocus class="form-control">
                </div>
                <div class="form-group">
                    <label>Order Page Theme</label>
                    <select v-model="model.theme" class="form-control">
                        <option value="white">White</option>
                        <option value="black">Black</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Coordination Lat: </label>
                    <input type="number" v-model="model.lat" name="lat" autofocus class="form-control">
                </div>
                <div class="form-group">
                    <label>Coordination Lng: </label>
                    <input type="number" v-model="model.lng" name="lng" autofocus class="form-control">
                </div>
                <div class="form-group">
                    <label>Payment Options: </label>
                    <multiselect v-model="model.payment_option" :options="payment_options" :multiple="true" :close-on-select="true" :clear-on-select="false" :hide-selected="true" placeholder="Payment Options">
                    </multiselect>
                </div>
                <div class="form-group">
                    <validate tag="div">
                        <label>Password: </label>
                        <input type="password" v-model="model.password" name="password" autofocus class="form-control"
                            placeholder="Password" autocomplete="new-password" >
                        <field-messages name="password" show="$invalid && $submitted"
                                        class="text-danger">
                            <div slot="required">Password is required</div>
                            <div slot="minlength">Password should be at least 4 characters long
                            </div>
                        </field-messages>
                    </validate>
                </div>
                <div class="form-group">
                    <validate tag="div">
                        <label>Password Confirmation: </label>
                        <input type="password" v-model="model.password_confirmation" name="password_confirmation" autocomplete="new-password"
                               placeholder="Confirm Password" class="form-control" :sameas="model.password">
                        <field-messages name="password_confirmation" show="$invalid && $submitted"
                                        class="text-danger">
                            <div slot="required">Confirm password is required</div>
                            <div slot="sameas">Password and Confirm password should match</div>
                        </field-messages>
                    </validate>
                </div>
            </div>
            <div class="clearfix"></div>

            <button class="btn btn-success submit-button" type="submit">Submit</button>
        </vue-form>
    </div>
    <!--</b-card>-->
</template>
<script>
    import Vue from 'vue';
    import VueForm from "vue-form";
    import options from "restaurant_src/validations/validations";
    import ApiService from "restaurant_resources/common/api.service";

    import ClipperBasic from "vuejs-clipper/src/components/clipper-basic";
    // import ClipperFixed from "vuejs-clipper/src/components/clipper-fixed";

    import 'vuejs-clipper/dist/vuejs-clipper.css';
    import Multiselect from 'vue-multiselect';
    require("vue-multiselect/dist/vue-multiselect.min.css");

    Vue.use(VueForm, options);

    export default {
        name: "EditSlider",
        props: {},
        components: {
            ClipperBasic,
            Multiselect
        },
        data() {
            return {
                model:{
                    owner_name:'',
                    restaurant_name:'',
                    restaurant_address:'',
                    lat:0,
                    lng:0,
                    phone:'',
                    email:'',
                    id:'',
                    password:'',
                    password_confirmation:'',
                    theme:'white',
                    payment_option:[]
                },
                formstate: {},
                success_alert_show:false,
                payment_options:["Before Order","On Arrival"]
            }
        },
        methods: {
            onSubmit(){
                if (this.formstate.$invalid)
                {
                    return;
                }
                ApiService.post('restaurant/update_account', this.model).
                    then(
                        result => {
                            this.success_alert_show=true;
                            setTimeout(()=>{
                                this.success_alert_show=false;
                            },2000)
                        },
                        error => {
                            console.log(error.response);
                        }
                    );
            }

        },
        beforeMount() {
            this.model.slider_id=this.$route.params.slider_id;
            ApiService.get(`restaurant/get_detail`).then(response => {
                    let data=response.data;
                    this.model.owner_name=data.owner_name;
                    this.model={
                        owner_name:data.owner_name,
                        phone:data.phone_number,
                        email:data.email,
                        lat:data.lat,
                        lng:data.lng,
                        restaurant_name:data.restaurant_name,
                        restaurant_address:data.address,
                        password:'',
                        password_confirmation:'',
                        theme:data.theme,
                        payment_option:data.payment_option
                    }
                },error=>{
                    console.log(error.response);
                }
            )
            .catch(function (error) {
                console.log(error);
            });
        },
    }
</script>
<style lang="scss">
    #logo-edit {
        .zoom-area.shadow {
            box-shadow: 0px 0px 0px 100vw !important;
        }
    }

</style>
<style lang="scss">
    #locations-page{
        width: 100%;
        background: white;
        padding: 20px 30px;

        .location-holder {
            width: 400px;
            margin-top: 20px;
            background: #eee;
            padding: 20px;
            border-radius: 5px;
            border:1px solid #ccc;
            float: left;
            margin-right: 20px;
            box-shadow: 5px 5px 2px 0px rgba(0,0,0,0.2);
        }
        .location-close {
            font-size: 20px;
            margin-top: -10px;
            text-align: right;
        }
        .location-close i{
            cursor: pointer;
        }
        .add-location-btn{
            display: block;
            margin-top: 20px;
            float: right;
        }
        .logo-image-origin {
            max-width:200px;
            max-height:200px;
        }
        .logo-image-part-holder .placeholder{
            text-align: center;
            padding: 20px;
            font-size: 20px;
            background-color: lightgray;
        }
        .uploadButton {
            width: fit-content;
            cursor: pointer;
            margin-bottom:10px;
        }
        .uploadButton img {
            width: auto;
            height: 40px;
            margin: 0 auto;
        }
        .preview-title {
            font-size: 20px;
            margin-top: 30px;
            margin-bottom:10px;
        }
        .preview-holder {
            margin-left: 40px;
        }
        .logo-page-title{
            font-size:18px;
            margin-bottom:10px;
            font-weight: bold;
        }
        .site-title-input{
            padding:5px 10px;
            min-width:250px;
        }
        .submit-button{
            display:block;
            margin-top:20px;
            padding: 5px 10px;
            width: 100px;
            font-weight: bold;
            font-size: 16px;
        }
        .site-setting-alert{
            visibility: hidden;
            opacity: 0;
            height:0;
            transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        .site-setting-alert.show{
            visibility: visible;
            opacity:1;
            height:auto;
        }
    }
</style>

