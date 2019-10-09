<template>
    <!--<b-card header="Site Logo and title" header-tag="h4" class="bg-success-card">-->
    <div id="plans-page">

                <div :class="{'alert alert-success site-setting-alert':true,'show':success_alert_show}">Site Setting successfully updated</div>
                <button class="btn btn-secondary add-plan-btn" @click.stop.prevent="addPlan">Add Plan</button>
                <div class="clearfix"></div>
        <template  v-for="(plan,index) in model.plans">
            <vue-form class="form-horizontal form-validation" :state="formstate[index]" @submit.prevent="onSubmit(index)">
                <div class="plan-holder">
                    <div class="plan-close">
                        <i class="fas fa-close" @click="closeplan(index)"></i>
                    </div>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" v-model="plan.name" name="restaurant_name" autofocus class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Price</label>
                        <input type="number" v-model="plan.price" name="restaurant_name" autofocus class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Interval</label>
                        <select v-model="plan.interval" class="form-control">
                            <option v-for="interval in intervals" :value="interval.value">{{interval.label}}</option>
                        </select>
                    </div>
                    <button class="btn btn-success submit-button" type="submit">Submit</button>
                </div>
            </vue-form>
        </template>
        <div class="clearfix"></div>
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
                    plans:[
                        {
                            id:0,
                            name:'',
                            interval:'',
                            price:null,
                        }
                    ]
                },
                formstate: [{}],
                products:[],
                intervals:[
                    {
                        label:'Monthly',
                        value:1
                    },
                    {
                        label:'Every 3 months',
                        value:3
                    },
                    {
                        label:'Every 6 months',
                        value:6
                    },
                ],
                success_alert_show:false,
            }
        },
        methods: {
            addPlan(){
                let temp={};
                temp.name='';
                temp.price=null;
                temp.id=0;
                temp.interval='';
                this.model.plans.push(temp);
                let formstate=this.formstate;
                formstate.push({});
                this.formstate=formstate;
            },
            closeplan(index){
                this.model.plans.splice(index,1);
            },
            onSubmit(index){
                if (this.formstate.$invalid)
                    return;
                let plan=this.model.plans[index];
                ApiService.post('admin/add_plan', plan).
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
            ApiService.get(`admin/get_plan`).then(response => {
                    let data=response.data;
                    if (data.plans){
                        let plans=[];
                        let formstate=[];
                        data.plans.map(plan=>{
                            plans.push({
                                'id':plan.id,
                                'name':plan.name,
                                'price':plan.price,
                                'interval':plan.interval,
                            });
                            formstate.push({});
                        })
                        this.model.plans=data.plans;
                        this.formstate=formstate;
                    }
                    // this.products=data.products;
                    // if(data.plans.length==0){
                    //     this.addPlan();
                    // }
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
    #plans-page{
        width: 100%;
        background: white;
        padding: 20px 30px;

        .plan-holder {
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
        .plan-close {
            font-size: 20px;
            margin-top: -10px;
            text-align: right;
        }
        .plan-close i{
            cursor: pointer;
        }
        .add-plan-btn{
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

