<template>
    <!--<b-card header="Site Logo and title" header-tag="h4" class="bg-success-card">-->
    <div id="add-slider">
        <vue-form class="form-horizontal form-validation" :state="formstate" @submit.prevent="onSubmit">
            <div :class="{'alert alert-success site-setting-alert':true,'show':success_alert_show}">Site Setting successfully updated</div>
            <div class="row">
                <div class="col-8 col-md-6">
                    <div class="form-group">
                        <label>Select Menu</label>
                        <select v-model="model.menu_index" class="form-control" name="menu_index" required autofocus>
                            <option value="-1" disabled>Please select Menu</option>
                            <option v-for="(menu,index) in menus" :value="index">{{menu.name}}</option>
                        </select>
                        <div class="text-danger" v-if="!menu_enabled && !form_valid">
                            <div slot="required">You should select menu</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <validate tag="div">
                            <label>Menu Title</label>
                            <input type="text" v-model="model.menu_name" class="form-control" name="menu_name" required autofocus>
                            <field-messages name="menu_name" show="$invalid && $submitted" class="text-danger">
                                <div slot="required">Menu title is required</div>
                            </field-messages>
                        </validate>
                    </div>
                    <div class="form-group">
                        <validate tag="div">
                            <label>Description</label>
                            <input type="text" v-model="model.description" name="description" autofocus required class="form-control">
                            <field-messages name="description" show="$invalid && $submitted" class="text-danger">
                                <div slot="required">Description is required</div>
                            </field-messages>
                        </validate>
                    </div>
                    <div class="form-group">
                        <label>Order</label>
                        <input type="number" v-model="model.order" class="form-control">
                    </div>

                    <div class="form-group">
                        <label style="display:block">Select Slider Types</label>
                        <label tabindex="0">
                            <input class="radiobox-tremolo" type="radio" name="slider_type" v-model="model.slider_type" value="0">Type1
                        </label>
                        <label tabindex="0">
                            <input class="radiobox-tremolo" type="radio" name="slider_type" v-model="model.slider_type" value="1">Type2
                        </label>
                        <div class="comment">
                            In type1, title font size is greater than description.
                            In type2, it is opporsite.
                        </div>
                    </div>
                </div>
            </div>

            <h3 class="logo-page-title">Slider Image</h3>
            <div class="logo-image-part-holder">
                <div class="image-base-holder">
                    <clipper-upload  v-model="model.imageURL" class="uploadButton">
                        <img src="public/Images/Icons/imageUpload.png">
                    </clipper-upload>
                    <clipper-basic  class="logo-image-origin" ref="clipper" :src="model.imageURL" shadow="rgba(0,0,0,0.4)"
                                    @load="imgLoad" :ratio="2.18">
                        <!--<div slot="placeholder" class="placeholder"></div>-->
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
                    menu_index:-1,
                    menu_name:'',
                    menu_id:-1,
                    order:0,
                    slider_type:0
                },
                form_valid:true,
                menu_enabled:false,
                formstate: {},
                menus:[],
                success_alert_show:false
            }
        },

        methods: {
            imgLoad(){
                this.$refs.clipper.setTL$.next({"top":0,"left":0});
                this.$refs.clipper.setWH$.next({"width":100,"height":100});
            },
            upload: function(e){
                if (e.target.files.length !== 0) {
                    if(this.imageURL) URL.revokeObjectURL(this.imageURL)
                    this.imageURL = window.URL.createObjectURL(e.target.files[0]);
                }
            },
            getResult: function () {
                const canvas = this.$refs.clipper.clip();//call component's clip method
                this.model.resultImageURL = canvas.toDataURL("image/png", 1);//canvas->image

            },
            onSubmit(){
                if (this.formstate.$invalid) {
                    this.form_valid=false;
                    return;
                }
                if(!this.menu_enabled)
                {
                    this.form_valid=false;
                    return;

                }

                this.getResult();
                ApiService.post('admin/add_slider', this.model).
                    then(
                        result => {
                            console.log(result)
                            this.success_alert_show=true;
                            this.$router.push("/slider_list")
                        },
                        error => {
                            console.log(error.response);
                        }
                    );
            }
        },
        beforeMount() {
            ApiService.get('admin/get_menu_list').then(response => {
                    console.log(response.data);
                    this.menus = response.data;
                },error=>{
                    console.log(error.response);
                }
            )
            .catch(function (error) {
                console.log(error);
            });
        },
        watch:{
            'model.menu_index':function(new_value,old_value){
                this.model.menu_name=this.menus[new_value].name;
                this.model.menu_id=this.menus[new_value].id;
                // fetch(this.menus[new_value].image)
                //     .then(res => res.blob()) // Gets the response and returns it as a blob
                //     .then(blob => {
                //         let objectURL = URL.createObjectURL(blob);
                //         this.model.imageURL=objectURL;
                // });
                if (new_value>-1)
                {
                    this.menu_enabled=true;
                    this.from_valid=true;
                }

            }
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
<style lang="scss">
    #add-slider{
        width: 100%;
        background: white;
        padding: 20px 30px;

        .logo-image-part-holder {
            /*display:grid;*/
            /*grid-template-columns:auto 1fr;*/
            /*grid-column-gap: 20px;*/
            /*max-width:1500px;*/
        }

        .logo-image-origin {
            width:600px;
            height:280px;
        }

        .logo-image-part-holder .placeholder{
            height:280px;
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
            font-size:18px;
            margin-bottom:10px;
            font-weight: bold;
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


