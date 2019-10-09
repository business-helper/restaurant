<template>
    <!--<b-card header="Site Logo and title" header-tag="h4" class="bg-success-card">-->
    <div id="card-setting">
        <div :class="{'alert alert-success site-setting-alert':true,'show':succes_alert_show}">Max Order Day successfully updated</div>
        <h3 class="card-page-title">Max Order Day Setting</h3>
        <vue-form :state="formstate" @submit.prevent="submit">
            <div class="site-title-holder">
                <div class="form-group">
                    <validate tag="div">
                        <label>Max Order Day</label>
                        <input name="max_order_day" type="number" class="form-control" placeholder="please enter your tax value" v-model="model.max_order_day" required autofocus>
                        <field-messages name="max_order_day" show="$invalid && $submitted" class="text-danger">
                            <div slot="required">Order Day is required</div>
                        </field-messages>
                    </validate>

                </div>
            </div>
            <button type="submit" class="btn btn-success submit-button">Submit</button>
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
        name: "CardSetting",
        props: {},
        components: {ClipperBasic},

        data() {
            return {
                model:{
                    max_order_day:'',
                },
                formstate:{},
                succes_alert_show:false
            }
        },

        methods: {

            submit(){
                if (this.formstate.$invalid) {
                    return;
                }
                ApiService.post('admin/add_max_order_day',this.model).
                    then(
                        result => {
                            console.log(result)
                            this.succes_alert_show=true;
                            setTimeout(()=>{
                                this.succes_alert_show=false;
                            },2000);

                        },
                        error => {
                            console.log(error.response);
                        }
                    );
            }
        },
        beforeMount() {
            ApiService.get('admin/get_max_order_day').
            then(
                result => {
                    let data=result.data;
                    if (data.max_order_day)
                        this.model.max_order_day=data.max_order_day;
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
    #card-setting {
        width: 100%;
        background: white;
        padding: 20px 30px;

        .card-page-title{
            margin-bottom:30px;
        }

        .submit-button{
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
        .form-group{
            max-width:400px;
        }
    }


</style>


