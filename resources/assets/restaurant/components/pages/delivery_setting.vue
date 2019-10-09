<template>
    <!--<b-card header="Site Logo and title" header-tag="h4" class="bg-success-card">-->
    <div id="locations-page">
        <vue-form class="form-horizontal form-validation" :state="formstate" @submit.prevent="onSubmit">
            <div :class="{'alert alert-success site-setting-alert':true,'show':success_alert_show}">Site Setting successfully updated</div>
            <div class="clearfix"></div>
            <div class="location-holder">
                <div class="form-group">
                    <label>Base Price* </label>
                    <input type="number" v-model="model.base_price" name="base_price" autofocus class="form-control" step="0.01">
                </div>
                <div class="form-group">
                    <label>Free Distance: </label>
                    <input type="number" v-model="model.free_distance" name="free_distance" autofocus class="form-control" step="0.01">
                </div>
                <div class="form-group">
                    <label>Max Distance: </label>
                    <input type="number" v-model="model.max_distance" name="max_distance" autofocus class="form-control" step="0.01">
                </div>
                <div class="form-group">
                    <label>Extra Unit Price</label>
                    <input type="number" v-model="model.extra_price_per_km" name="extra_price_per_km" autofocus class="form-control" step="0.01">
                </div>
                <div class="form-group">
                    <label>Min Order Amount</label>
                    <input type="text" v-model="model.min_amount" name="min_amount" autofocus class="form-control">
                </div>
                <div class="form-group">
                    <label>Free Order Amount</label>
                    <input type="number" v-model="model.free_amount" class="form-control" step="0.01">
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
                    base_price:'',
                    free_distance:'',
                    max_distance:'',
                    extra_price_per_km:0,
                    min_amount:0,
                    free_amount:'',
                    setting_id:-1
                },
                formstate: {},
                restaurant_id:-1,
                success_alert_show:false,
                payment_options:["Before Order","On Arrival"]
            }
        },
        methods: {
            onSubmit(){
                if (this.formstate.$invalid)
                    return;
                ApiService.post('restaurant/updateDeliverySetting/'+this.restaurant_id, this.model).
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
            ApiService.get(`restaurant/get_delivery_setting`).then(response => {
                    let data=response.data;
                    this.restaurant_id=data.restaurant_id;
                    if(data.deliverySetting.length>0){
                        let settings=data.deliverySetting[0];
                        this.model={
                            base_price:settings.base_price,
                            free_distance:settings.free_distance,
                            max_distance:settings.max_distance,
                            extra_price_per_km:settings.extra_price_per_km,
                            min_amount:settings.min_amount,
                            free_amount:settings.free_amount,
                            setting_id:settings.id,
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

