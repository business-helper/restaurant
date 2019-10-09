<template>
    <!--<b-card header="Site Logo and title" header-tag="h4" class="bg-success-card">-->
    <div id="online-order">
        <vue-form class="form-horizontal form-validation" :state="formstate" @submit.prevent="onSubmit">
            <div :class="{'alert alert-success site-setting-alert':true,'show':success_alert_show}">Site Setting successfully updated</div>
            <div class="row">
                <div class="col-8 col-md-6">
                    <div class="form-group">
                        <validate tag="div">
                            <label>Brand Text</label>
                            <textarea v-model="model.brand_text" class="form-control" name="brand_text" rows="4" required autofocus></textarea>
                            <field-messages name="brand_text" show="$invalid && $submitted" class="text-danger">
                                <div slot="required">Brand text is required</div>
                            </field-messages>
                        </validate>
                    </div>
                </div>
            </div>

            <h3 class="logo-page-title">Page Brand Image<span class="recommended-size-text">(1920 x 630 px recommended)</span></h3>
            <div class="logo-image-part-holder">
                <div class="image-base-holder">
                    <clipper-upload  v-model="model.imageURL" class="uploadButton">
                        <img src="public/Images/Icons/imageUpload.png">
                    </clipper-upload>
                    <clipper-basic  class="logo-image-origin" ref="clipper" :src="model.imageURL" shadow="rgba(0,0,0,0.4)"
                                    @load="imgLoad" :ratio="3.05">
                    </clipper-basic>
                </div>
            </div>


            <h3 class="location-brands-title">Location Brand Images</h3>
            <div class="location-brand-image-holder" v-for="(location,index) in model.locations">
                <h5 class="location-name">{{location.location_name}}<span class="recommended-size-text">(400 x 250px recommended)</span></h5>
                <clipper-upload  v-model="location.imageURL" class="uploadButton">
                    <img src="public/Images/Icons/imageUpload.png">
                </clipper-upload>
                <clipper-basic  class="location-brand-image" :src="location.imageURL" shadow="rgba(0,0,0,0.4)"
                                :ref="`location-brand-${index}`" @load="locationImgLoad(index)" :ratio="1.6">
                </clipper-basic>
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

    import 'vuejs-clipper/dist/vuejs-clipper.css';

    Vue.use(VueForm, options);

    export default {
        name: "AddSlider",
        props: {},
        components: {ClipperBasic},

        data() {
            return {
                model:{
                    imageURL:'',
                    resultImageURL:'',
                    brand_text:'',
                    locations:[]
                },
                form_valid:true,
                formstate: {},
                success_alert_show:false
            }
        },

        methods: {
            imgLoad(){
                this.$refs.clipper.setTL$.next({"top":0,"left":0});
                this.$refs.clipper.setWH$.next({"width":100,"height":100});
            },
            locationImgLoad(index){
                this.$refs['location-brand-'+index][0].setTL$.next({"top":0,"left":0});
                this.$refs['location-brand-'+index][0].setWH$.next({"width":100,"height":100});
            },

            getResult: function () {
                const canvas = this.$refs.clipper.clip();//call component's clip method
                this.model.resultImageURL = canvas.toDataURL("image/png", 1);//canvas->image

                for(let i=0;i<this.model.locations.length;i++){
                    let canvas1 = this.$refs['location-brand-'+i][0].clip();//call component's clip method
                    this.model.locations[i].resultImageURL = canvas1.toDataURL("image/png", 1);//canvas->image
                }
            },
            onSubmit(){
                if (this.formstate.$invalid) {
                    this.form_valid=false;
                    return;
                }

                this.getResult();
                ApiService.post('admin/add_location_brands', this.model).
                    then(
                        result => {
                            this.success_alert_show=true;
                            // this.$router.push("/slider_list")
                        },
                        error => {
                            console.log(error.response);
                        }
                    );
            }
        },
        beforeMount() {
            ApiService.get('admin/get_location_brands').then(response => {
                    let data=response.data;
                    let locations=data.locations;

                    let brand=data.brand;
                    this.model.brand_text=brand.brand_text;
                    if(brand.brand_image){
                        fetch(brand.brand_image)
                            .then(res => res.blob()) // Gets the response and returns it as a blob
                            .then(blob => {
                                let objectURL = URL.createObjectURL(blob);
                                this.model.imageURL=objectURL;
                            });
                    }


                    for(let i=0;i<locations.length;i++){
                        let temp={};
                        temp.location_id=locations[i].id;
                        temp.imageURL="";
                        temp.resultImageURL='';
                        temp.location_name=locations[i].name;
                        this.model.locations.push(temp);
                        if(locations[i].brand_image){
                            fetch(locations[i].brand_image)
                                .then(res => res.blob()) // Gets the response and returns it as a blob
                                .then(blob => {
                                    let objectURL = URL.createObjectURL(blob);
                                    this.model.locations[i].imageURL=objectURL;
                                });

                        }



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
    #online-order{
        width: 100%;
        background: white;
        padding: 20px 30px;

        .logo-image-origin {
            width:600px;
            height:197px;
        }

        .logo-image-part-holder .placeholder{
            text-align: center;
            padding: 20px;
            font-size: 20px;
            background-color: lightgray;
            height:197px;
        }


        .location-brands-title {
            margin-top: 30px;
            margin-bottom: 0px;
            font-weight: bold;
        }
        .location-brand-image-holder {
            margin-bottom: 10px;
            margin-top: 30px;
        }



        .location-brand-image{
            width:400px;
            height:250px;
        }
        .location-brand-image-holder .placeholder{
            width:400px;
            text-align: center;
            background-color: lightgray;
            height:250px;
        }

        .uploadButton {
            width: fit-content;
            cursor: pointer;
            margin-bottom:10px;
        }
        .uploadButton img {
            width: auto;
            height: 50px;
            margin: 0 auto;
        }

        .logo-page-title{
            font-size:18px;
            margin-bottom:10px;
            font-weight: bold;
            margin-top: 10px;
        }

        .preview.my-clipper{
            max-width:1000px;

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

        span.recommended-size-text {
            font-size: 14px;
            font-weight: normal;
            margin-left: 10px;
            color: #e23232;
        }

        .comment{
            color:#219605;
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


