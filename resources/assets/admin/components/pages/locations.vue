<template>
    <!--<b-card header="Site Logo and title" header-tag="h4" class="bg-success-card">-->
    <div id="locations-page">
        <vue-form class="form-horizontal form-validation" :state="formstate" @submit.prevent="onSubmit">
            <div :class="{'alert alert-success site-setting-alert':true,'show':success_alert_show}">Site Setting successfully updated</div>

            <button class="btn btn-secondary add-location-btn" @click.stop.prevent="addLocation">Add Location</button>
            <div class="clearfix"></div>

            <div class="location-holder" v-for="(location,index) in model.locations">
                <div class="location-close">
                    <i class="fas fa-close" @click="closeLocation(index)"></i>
                </div>
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" v-model="location.restaurant_name" name="restaurant_name" autofocus class="form-control">
                </div>
                <div class="form-group">
                    <label>Address</label>
                    <input type="text" v-model="location.restaurant_address" name="restaurant_address" autofocus class="form-control">
                </div>
                <div class="form-group">
                    <label>Coordination Lat: </label>
                    <input type="number" v-model="location.lat" name="lat" autofocus class="form-control">
                </div>
                <div class="form-group">
                    <label>Coordination Lng: </label>
                    <input type="number" v-model="location.lng" name="lng" autofocus class="form-control">
                </div>
                <div class="form-group">
                    <label>Phone: </label>
                    <input type="text" v-model="location.phone" name="phone" autofocus class="form-control">
                </div>
                <div class="form-group">
                    <label>Email: </label>
                    <input type="email" v-model="location.email" name="email" autofocus class="form-control">
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
                    locations:[
                        {
                            restaurant_name:'',
                            restaurant_address:'',
                            lat:0,
                            lng:0,
                            phone:'',
                            email:'',
                            id:''
                        }
                    ]
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
            addLocation(){
                let temp={};
                temp.restaurant_name='';
                temp.restaurant_address='';
                temp.lat='';
                temp.lng='';
                temp.phone='';
                temp.id='';
                temp.email='';
                this.model.locations.push(temp);
            },
            closeLocation(index){
                this.model.locations.splice(index,1);
            },
            onSubmit(){
                if (this.formstate.$invalid)
                    return;

                this.getResult();
                ApiService.post('admin/add_locations', this.model).
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
            ApiService.get(`admin/get_location`).then(response => {
                    let data=response.data;
                    this.model.map_key = data.map_key;
                    let that = this;
                    if (data.marker_image){
                        fetch(data.marker_image)
                            .then(res => res.blob()) // Gets the response and returns it as a blob
                            .then(blob => {
                                let objectURL = URL.createObjectURL(blob);
                                this.model.marker_image=objectURL;
                            });
                    };
                    if (data.locations){
                        this.model.locations=data.locations;
                    }
                    if(data.locations.length==0){
                        this.addLocation();
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
            width: 300px;
            margin-top: 20px;
            background: #eee;
            padding: 20px;
            border: 1px solid #555;
            border-radius: 3px;
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

