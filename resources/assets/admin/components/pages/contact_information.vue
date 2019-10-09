<template>
    <!--<b-card header="Site Logo and title" header-tag="h4" class="bg-success-card">-->
    <div id="contact-information-page">
        <vue-form class="form-horizontal form-validation" :state="formstate" @submit.prevent="onSubmit">
            <div :class="{'alert alert-success site-setting-alert':true,'show':success_alert_show}">Site Setting successfully updated</div>
            <div class="row">
                <div class="col-8 col-md-6 col-lg-4">
                    <div class="form-group">
                        <validate tag="div">
                            <label>Map Key</label>
                            <input type="text" v-model="model.map_key" class="form-control" name="map_key" required autofocus>
                            <field-messages name="map_key" show="$invalid && $submitted" class="text-danger">
                                <div slot="required">Map Key is required</div>
                            </field-messages>
                        </validate>
                    </div>
                    <div class="form-group">
                        <label>Restaurant Name</label>
                        <input type="text" v-model="model.restaurant_name" name="restaurant_name" autofocus class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Restaurant Address</label>
                        <input type="text" v-model="model.restaurant_address" name="restaurant_address" autofocus class="form-control">
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
                        <label>Phone: </label>
                        <input type="text" v-model="model.phone" name="phone" autofocus class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Email: </label>
                        <input type="email" v-model="model.email" name="email" autofocus class="form-control">
                    </div>

                </div>
            </div>

            <h3 class="logo-page-title">Map Marker Image</h3>
            <div class="logo-image-part-holder">
                <div class="image-base-holder">
                    <clipper-upload  v-model="model.marker_image" ref="clipper" class="uploadButton">
                        <img src="public/Images/Icons/imageUpload.png">
                    </clipper-upload>
                    <clipper-basic   class="logo-image-origin" ref="clipper" :src="model.marker_image" shadow="rgba(0,0,0,0.4)" :grid="false" bgColor="transparent" @load="imgLoad">
                        <div class="placeholder" slot="placeholder">No image</div>
                    </clipper-basic>
                </div>
            </div>


            <button class="btn btn-success submit-button" type="submit">Submit</button>
        </vue-form>
    </div>
    <!--</b-card>-->
</template>
<script>
    import Vue from 'vue';
    import VueForm from "vue-form";
    import options from "src/validations/validations.js";
    import ApiService from "resources/common/api.service";

    import ClipperBasic from "vuejs-clipper/src/components/clipper-basic";
    // import ClipperFixed from "vuejs-clipper/src/components/clipper-fixed";

    import 'vuejs-clipper/dist/vuejs-clipper.css';

    Vue.use(VueForm, options);

    export default {
        name: "EditSlider",
        props: {},
        components: {
            ClipperBasic,
        },

        data() {
            return {
                model:{
                    marker_image:'',
                    resultImageURL:'',
                    map_key:'',
                    restaurant_name:'',
                    restaurant_address:'',
                    lat:0,
                    lng:0,
                    phone:'',
                    email:''
                },
                formstate: {},
                success_alert_show:false,
            }
        },
        methods: {
            imgLoad:function(){
                this.$refs.clipper.setTL$.next({"top":0,"left":0});
                this.$refs.clipper.setWH$.next({"width":100,"height":100});
            },

            getResult: function () {
                const canvas = this.$refs.clipper.clip();//call component's clip method
                this.model.resultImageURL = canvas.toDataURL("image/png", 1);//canvas->image
            },
            onSubmit(){
                if (this.formstate.$invalid)
                    return;

                this.getResult();
                ApiService.post('admin/add_contact_information', this.model).
                    then(
                        result => {
                            console.log(result)
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
            ApiService.get(`admin/get_contact_information`).then(response => {
                console.log(response)
                    let data=response.data;
                    this.model.map_key = data.map_key;
                    this.model.restaurant_name = data.restaurant_name;
                    this.model.restaurant_address=data.restaurant_address;
                    this.model.lat=data.lat;
                    this.model.lng=data.lng;
                    this.model.phone=data.phone;
                    this.model.email=data.email;
                    let that = this;
                    if (data.marker_image){
                        fetch(data.marker_image)
                            .then(res => res.blob()) // Gets the response and returns it as a blob
                            .then(blob => {
                                let objectURL = URL.createObjectURL(blob);
                                this.model.marker_image=objectURL;
                            });

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
    #contact-information-page{
        width: 100%;
        background: white;
        padding: 20px 30px;

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

