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
                        <label>Marks</label>
                        <select v-model="model.mark" class="form-control">
                            <option value="0" disabled>Please Select Marks</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
            </div>

            <h3 class="logo-page-title">Slider Image</h3>
            <div class="logo-image-part-holder">
                <div class="image-base-holder">
                    <clipper-upload  v-model="model.imageURL" ref="clipper" class="uploadButton">
                        <img src="public/Images/Icons/imageUpload.png">
                    </clipper-upload>
                    <clipper-basic   class="logo-image-origin" ref="clipper" :src="model.imageURL" shadow="rgba(0,0,0,0.4)" :grid="false" :ratio="0.848" @load="imgLoad">
                        <div class="placeholder" slot="placeholder">No image</div>
                    </clipper-basic>
                </div>
            </div>
            <div class="sub-items-holder">
                <div v-for="(item,index) in model.subreview" class="sub-item">
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
                        <label>Review Marks</label>
                        <select v-model="item.mark" class="form-control">
                            <option value="0" disabled>Please select Mark</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <validate tag="div">
                            <label>User Name</label>
                            <input type="text" v-model="item.user_name" class="form-control" required autofocus :name="`user_name-${index}`">
                            <field-messages :name="`user_name-${index}`" show="$invalid && $submitted" class="text-danger">
                                <div slot="required">Title is required</div>
                            </field-messages>
                        </validate>
                    </div>
                    <div class="form-group">
                        <clipper-upload  v-model="item.imageURL" class="uploadButton">
                            <img src="public/Images/Icons/imageUpload.png">
                        </clipper-upload>
                        <clipper-basic  class="profile-image" :ref="`profile-${index}`" :src="item.imageURL" shadow="rgba(0,0,0,0.4)" :ratio="1" @load="profileImageLoad(index)">
                            <div class="placeholder" slot="placeholder">No image</div>
                        </clipper-basic>
                    </div>

                </div>
                <div class="clearfix"></div>
                <button class="add-new" @click.prevent.stop="add_new_item()">Add New</button>
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
                    imageURL:'',
                    resultImageURL:'',
                    title:'',
                    description:'',
                    mark:5,
                    subreview:[]
                },
                formstate: {},
                success_alert_show:false,
            }
        },
        methods: {
            deleteItem(index){
                this.model.subreview.splice(index,1);
            },
            imgLoad:function(){
                this.$refs.clipper.setTL$.next({"top":0,"left":0});
                this.$refs.clipper.setWH$.next({"width":100,"height":100});
            },
            profileImageLoad:function(index){
                this.$refs['profile-'+index][0].setTL$.next({"top":0,"left":0})
                this.$refs['profile-'+index][0].setWH$.next({"width":100,"height":100})

            },
            getResult: function () {
                const canvas = this.$refs.clipper.clip();//call component's clip method
                this.model.resultImageURL = canvas.toDataURL("image/jpg", 1);//canvas->image

                for (let i=0;i<this.model.subreview.length;i++){
                    if (this.$refs['profile-'+i]){
                        let canvas=this.$refs['profile-'+i][0].clip();
                        this.model.subreview[i]['profile_image']=canvas.toDataURL("image/jpg",1);
                    }
                }
            },
            add_new_item(){
                let temp={};
                temp.title="";
                temp.mark=5;
                temp.user_name="";
                temp.imageURL='';
                this.model.subreview.push(temp);

            },
            onSubmit(){
                if (this.formstate.$invalid) {
                    return;
                }

                this.getResult();
                ApiService.post('admin/add_review_section', this.model).
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
            ApiService.get(`admin/get_review_section`).then(response => {
                console.log(response)
                    let data=response.data;
                    this.model.title = data.title;
                    this.model.description = data.description;
                    this.model.mark=data.mark;
                    let that = this;
                    if (data.image){
                        fetch(data.image)
                            .then(res => res.blob()) // Gets the response and returns it as a blob
                            .then(blob => {
                                let objectURL = URL.createObjectURL(blob);
                                this.model.imageURL=objectURL;
                            });

                    }
                    let subreview=data.subreview;
                    if (subreview.length>0){
                        console.log('greater');
                        subreview.forEach(function(item,index){
                            let temp={};
                            temp.mark=item.mark;
                            temp.title=item.title;
                            temp.user_name=item.user_name;
                            temp.imageURL='';
                            that.model.subreview.push(temp);
                            if (item.profile_image){
                                fetch(item.profile_image)
                                    .then(res => res.blob()) // Gets the response and returns it as a blob
                                    .then(blob => {
                                        let objectURL = URL.createObjectURL(blob);
                                        that.model.subreview[index]['imageURL']=objectURL;
                                    });
                            }
                        })
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
<style lang="scss" scoped>
    #logo-edit {
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
            width:424px;
            height:500px;
            /*height:280px;*/
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
            max-width:800px;

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
        .profile-image{
            width:150px;
            height:150px;
        }

        .sub-items-holder .placeholder{
            height:150px;
            background:#ccc;
            text-align:center;
            padding-top:50px;
            font-size:20px;
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

