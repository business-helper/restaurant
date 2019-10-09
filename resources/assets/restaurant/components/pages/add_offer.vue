<template>
    <!--<b-card header="Site Logo and title" header-tag="h4" class="bg-success-card">-->
    <div id="logo-edit">
        <vue-form class="form-horizontal form-validation" :state="formstate" @submit.prevent="onSubmit">
            <div :class="{'alert alert-success site-setting-alert':true,'show':success_alert_show}">Site Setting successfully updated</div>
            <div class="row">
                <div class="col-8 col-md-6">
                    <div class="form-group">
                        <validate tag="div">
                            <label>Title</label>
                            <input type="text" v-model="model.title" class="form-control" name="title" required autofocus>
                            <field-messages name="title" show="$invalid && $submitted" class="text-danger">
                                <div slot="required">Title is required</div>
                            </field-messages>
                        </validate>
                    </div>
                    <div class="form-group">
                        <validate tag="div">
                            <label>Description</label>
                            <textarea type="text" v-model="model.description" name="description" autofocus required class="form-control"></textarea>
                            <field-messages name="description" show="$invalid && $submitted" class="text-danger">
                                <div slot="required">Description is required</div>
                            </field-messages>
                        </validate>
                    </div>
                    <div class="form-group">
                        <label>Order</label>
                        <input type="number" v-model="model.order" class="form-control">
                    </div>

                </div>
            </div>

            <h3 class="logo-page-title">Offer Image</h3>
            <div class="logo-image-part-holder">
                <div class="image-base-holder">
                    <clipper-upload  v-model="model.imageURL" class="uploadButton">
                        <img src="public/Images/Icons/imageUpload.png">
                    </clipper-upload>
                    <clipper-basic  class="logo-image-origin" ref="clipper" :src="model.imageURL"
                            shadow="rgba(0,0,0,0.4)" :ratio="1.43" @load="imgLoad">
                        <div class="placeholder" slot="placeholder">No image</div>
                    </clipper-basic>
                </div>
                <!--<div class="image-preview-holder">-->
                    <!--<h5 class="preview-title">Preview</h5>-->
                    <!--<clipper-preview name="my-preview" class="my-clipper">-->
                        <!--<div class="placeholder" slot="placeholder">preview area</div>-->
                    <!--</clipper-preview>-->
                <!--</div>-->
            </div>
            <div class="items-holder">
                <div v-for="(item,index) in model.items" class="sub-item">
                    <div class="close-btn" @click="deleteItem(index)"><i class="fa fa-close"></i></div>
                    <div class="form-group">
                        <validate tag="div">
                            <label>Title</label>
                            <input type="text" v-model="item.title" class="form-control" :name="`title-${index}`" required autofocus>
                            <field-messages :name="`title-${index}`" show="$invalid && $submitted" class="text-danger">
                                <div slot="required">Title is required</div>
                            </field-messages>
                        </validate>
                    </div>
                    <div class="form-group">
                        <label>Item State</label>
                        <toggle-button v-model="item.enabled" :labels="{checked: 'Yes', unchecked: 'No'}" :value="item.enabled" :sync="true" :color="{checked: '#09BD8F', unchecked: '#dc6460'}"/>
                    </div>

                </div>
                <div class="clearfix"></div>
                <button class="add-new" @click.prevent.stop="add_new_item">Add New</button>
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
                    title:'',
                    description:'',
                    order:0,
                    items:[]
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
            deleteItem(index){
                this.model.items.splice(index,1);
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
            add_new_item(){
                let temp={};
                temp.title="";
                temp.enabled=true;
                this.model.items.push(temp);

            },
            onSubmit(){
                if (this.formstate.$invalid) {
                    this.form_valid=false;
                    return;
                }

                this.getResult();
                ApiService.post('admin/add_offer', this.model).
                    then(
                        result => {
                            console.log(result)
                            this.success_alert_show=true;
                            this.$router.push("/offer_list")
                        },
                        error => {
                            console.log(error.response);
                        }
                    );
            }
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
<style lang="scss" scoped>
    #logo-edit {
        width: 100%;
        background: white;
        padding: 20px 30px;

        .logo-image-origin {
            height:420px;
            width:600px;
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

        .sub-items-holder{
            margin-top:20px;
        }

        .sub-item{
            max-width:300px;
            margin-right:20px;
            float:left;
            padding:20px;
            border:2px solid #ddd;
            position:relative;
            padding-top:30px;
            margin-top:20px;
        }
        .close-btn{
            position:absolute;
            top:10px;
            right:10px;
            font-size:20px;
            cursor:pointer;
        }

        .add-new{
            display:block;
            margin-top:20px;
            padding: 5px 10px;
            background: #bab7ca;
            font-size: 14px;
        }



    }


</style>


