<template>
    <!--<b-card header="Site Logo and title" header-tag="h4" class="bg-success-card">-->
    <div id="logo-edit">
        <div :class="{'alert alert-success site-setting-alert':true,'show':succes_alert_show}">Site Setting successfully updated</div>
        <h3 class="logo-page-title">Logo</h3>
        <div class="logo-image-part-holder">
            <div class="image-base-holder">
                <clipper-upload v-model="logoURL" class="uploadButton">
                    <img src="public/Images/Icons/imageUpload.png">
                </clipper-upload>
                <clipper-basic  class="logo-image-origin" ref="clipper" :src="logoURL" shadow="rgba(0,0,0,0.4)" bgColor="null" @load="logoImgLoad" :ratio="1">
                    <div class="placeholder" slot="placeholder">No image</div>
                </clipper-basic>
            </div>
        </div>
        <button class="btn btn-success submit-button" @click="submit">Submit</button>
    </div>
    <!--</b-card>-->
</template>
<script>
    import Vue from 'vue';
    import VueForm from "vue-form";
    import options from "src/validations/validations.js";
    import ApiService from "restaurant_resources/common/api.service";
    import AdminApiService from "common/api.service";
    import ClipperBasic from "vuejs-clipper/src/components/clipper-basic";

    import 'vuejs-clipper/dist/vuejs-clipper.css';

    export default {
        name: "LogoTitle",
        props: {},
        components: {ClipperBasic},

        data() {
            return {
                logoURL:'',
                resultLogoURL:'',
                succes_alert_show:false,
                api_service:ApiService,
                restaurant_id:0
            }
        },

        methods: {
            upload: function(e){
                if (e.target.files.length !== 0) {
                    if(this.logoURL) URL.revokeObjectURL(this.logoURL)
                    this.logoURL = window.URL.createObjectURL(e.target.files[0]);
                }
            },
            getResult: function () {
                const canvas = this.$refs.clipper.clip();//call component's clip method
                this.resultLogoURL = canvas.toDataURL("image/jpg", 1);//canvas->image
            },
            logoImgLoad(){
                this.$refs.clipper.setTL$.next({"top":0,"left":0});
                this.$refs.clipper.setWH$.next({"width":100,"height":100});
            },
            submit(){
                this.getResult();
                let data={};
                data.logo_image=this.resultLogoURL;
                this.api_service.post(`restaurant/add_logo/${this.restaurant_id!=0 ? this.restaurant_id : ''}`, data).
                    then(
                        result => {
                            this.succes_alert_show=true;
                            setTimeout(()=>{
                                this.succes_alert_show=false;
                                if(this.restaurant_id!=0)
                                    this.$router.push('/restaurant_list')
                            },2000);

                        },
                        error => {
                            console.log(error.response);
                        }
                    );
            }
        },
        beforeMount() {
            var add_restaurant_id='';
            let api_service=ApiService;
            if(this.$route.params.restaurant_id)
            {
                this.restaurant_id=this.$route.params.restaurant_id;
                add_restaurant_id="/"+this.restaurant_id;
                api_service=AdminApiService;
                this.api_service=api_service;
            }
            this.api_service.get('restaurant/get_logo'+add_restaurant_id).
            then(
                result => {
                    let data=result.data;
                    if(data.logo){
                        fetch(data.logo)
                            .then(res => res.blob()) // Gets the response and returns it as a blob
                            .then(blob => {
                                let objectURL = URL.createObjectURL(blob);
                                this.logoURL=objectURL;
                            });
                    }
                },
                error=>{
                    console.log(error.response)
                }
            )
        }
    }
</script>
<style lang="scss">
    #logo-edit {
        .zoom-area.shadow {
            box-shadow: 0px 0px 0px 100vw !important;
        }
    }

</style>
<style lang="scss" scoped>
    #logo-edit {
        width: 100%;
        background: white;
        padding: 20px 30px;

        .logo-image-part-holder {
            display:grid;
            grid-template-columns:auto 1fr;
            grid-column-gap: 20px;
            max-width:800px;
        }

        .logo-image-origin {
            width:400px;
            /*height:300px;*/
        }


        .logo-image-part-holder .placeholder{
            height:300px;
            text-align: center;
            padding: 20px;
            font-size: 20px;
            background-color: lightgray;
            padding-top: 140px;
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

        .preview-title {
            font-size: 20px;
            margin-top: 30px;
            margin-bottom:10px;
        }

        .preview-holder {
            margin-left: 40px;
        }
        .logo-page-title{
            font-size:20px;
            margin-bottom:30px;
            font-weight: bold;
        }

        .site-title-input{
            padding:5px 10px;
            min-width:250px;
        }
        .submit-button{
            padding: 5px 10px;
            width: 100px;
            font-weight: bold;
            font-size: 16px;
            margin-top:15px;
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


