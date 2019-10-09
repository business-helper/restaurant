<template>
    <!--<b-card header="Site Logo and title" header-tag="h4" class="bg-success-card">-->
    <div id="about-us-page">
        <vue-form class="form-horizontal form-validation" :state="formstate" @submit.prevent="onSubmit">
            <div :class="{'alert alert-success site-setting-alert':true,'show':success_alert_show}">Site Setting successfully updated</div>
            <div class="row">
                <div class="col-8 col-md-6 col-lg-5">
                    <div class="form-group">
                        <validate tag="div">
                            <label>Review Mark</label>
                            <input type="number" v-model="model.review_mark" class="form-control" name="review_mark" required autofocus>
                            <field-messages name="review_mark" show="$invalid && $submitted" class="text-danger">
                                <div slot="required">Review Mark is required</div>
                            </field-messages>
                        </validate>
                    </div>
                    <div class="form-group">
                        <validate tag="div">
                            <label>Review Title</label>
                            <input type="text" v-model="model.review_title" class="form-control" name="review_title" required autofocus>
                            <field-messages name="review_title" show="$invalid && $submitted" class="text-danger">
                                <div slot="required">Review Title is required</div>
                            </field-messages>
                        </validate>
                    </div>
                    <div class="form-group">
                        <validate tag="div">
                            <label>Review Content</label>
                            <textarea v-model="model.review_content" class="form-control" name="review_content" required autofocus rows="6"></textarea>
                            <field-messages name="review_content" show="$invalid && $submitted" class="text-danger">
                                <div slot="required">Review Content is required</div>
                            </field-messages>
                        </validate>
                    </div>
                    <div class="form-group">
                        <validate tag="div">
                            <label>Review User Name</label>
                            <input type="text" v-model="model.review_user_name" class="form-control" name="review_user_name" required autofocus>
                            <field-messages name="review_user_name" show="$invalid && $submitted" class="text-danger">
                                <div slot="required">Review User Name is required</div>
                            </field-messages>
                        </validate>
                    </div>
                </div>
            </div>

            <h3 class="logo-page-title">Background Image<span class="recommended-image-label">(954 x 1125px recommended)</span></h3>
            <div class="background-image-part-holder">
                <div class="image-base-holder">
                    <clipper-upload  v-model="model.background_image" ref="clipper_background" class="uploadButton">
                        <img src="public/Images/Icons/imageUpload.png">
                    </clipper-upload>
                    <clipper-basic   class="background-image" ref="clipper_background" :src="model.background_image" shadow="rgba(0,0,0,0.4)" :grid="false" bgColor="transparent" @load="imgLoad" :ratio="0.848">
                        <div class="placeholder" slot="placeholder">No image</div>
                    </clipper-basic>
                    <div class="text-danger" v-if="model.background_image=='' && formstate.$submitted">Background Image is required</div>
                </div>
            </div>

            <h3 class="lgo-page-title bottom-title">Bottom Image<span class="recommended-image-label">(1920 x 720px recommended)</span> </h3>
            <div class="bottom-image-part-holder">
                <div class="image-base-holder">
                    <clipper-upload  v-model="model.bottom_image" ref="clipper_bottom" class="uploadButton">
                        <img src="public/Images/Icons/imageUpload.png">
                    </clipper-upload>
                    <clipper-basic   class="bottom-image" ref="clipper_bottom" :src="model.bottom_image" shadow="rgba(0,0,0,0.4)" :grid="false" bgColor="transparent" @load="imgLoad">
                        <div class="placeholder" slot="placeholder">No image</div>
                    </clipper-basic>
                    <div class="text-danger" v-if="model.bottom_image=='' && formstate.$submitted">Bottom Image is required</div>
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
                    background_image:'',
                    bottom_image:'',
                    resultBackgroundURL:'',
                    resultBottomURL:'',
                    review_mark:5,
                    review_title:'',
                    review_content:'',
                    review_user_name:'',
                },
                formstate: {},
                success_alert_show:false,
            }
        },
        methods: {
            imgLoad:function(){
                this.$refs.clipper_background.setTL$.next({"top":0,"left":0});
                this.$refs.clipper_background.setWH$.next({"width":100,"height":100});

                this.$refs.clipper_bottom.setTL$.next({"top":0,"left":0});
                this.$refs.clipper_bottom.setWH$.next({"width":100,"height":100});
            },

            getResult: function () {
                const canvas = this.$refs.clipper_background.clip();//call component's clip method
                this.model.resultBackgroundURL = canvas.toDataURL("image/png", 1);//canvas->image

                const canvas1 = this.$refs.clipper_bottom.clip();//call component's clip method
                this.model.resultBottomURL = canvas1.toDataURL("image/png", 1);//canvas->image
            },
            onSubmit(){
                if (this.formstate.$invalid)
                    return;
                if (this.model.background_image=="" || this.model.bottom_image=="")
                    return;

                this.getResult();
                ApiService.post('admin/add_about_us_information', this.model).
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
            ApiService.get(`admin/get_about_us_information`).then(response => {
                console.log(response)
                    let data=response.data;
                    this.model.review_mark = data.review_mark;
                    this.model.review_title = data.review_title;
                    this.model.review_content = data.review_content;
                    this.model.review_user_name = data.review_user_name;

                if (data.bottom_image){
                    fetch(data.bottom_image)
                        .then(res => res.blob()) // Gets the response and returns it as a blob
                        .then(blob => {
                            let objectURL = URL.createObjectURL(blob);
                            this.model.bottom_image=objectURL;
                        });
                }

                if (data.background_image){
                        fetch(data.background_image)
                            .then(res => res.blob()) // Gets the response and returns it as a blob
                            .then(blob => {
                                let objectURL = URL.createObjectURL(blob);
                                this.model.background_image=objectURL;
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
    #about-us-page{
        width: 100%;
        background: white;
        padding: 20px 30px;

        .background-image {
            height:300px;
            width:254px;
        }
        .background-image-part-holder .placeholder,.bottom-image-part-holder .placeholder{
            text-align: center;
            padding: 20px;
            font-size: 20px;
            background-color: lightgray;
        }

        .bottom-image{
            max-width:400px;
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


        .logo-page-title{
            font-size:18px;
            margin-bottom:10px;
        }

        span.recommended-image-label {
            font-size: 15px;
            color: #3a999a;
            margin-left: 10px;
        }

        .bottom-title {
            margin-top: 20px;
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

