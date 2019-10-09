<template>
    <!--<b-card header="Site Logo and title" header-tag="h4" class="bg-success-card">-->
    <div id="subscription-page">
        <div class="clearfix"></div>
        <template v-for="(plan_item, index) in plans">
            <div class="subscription-holder">
                <h4 :class="{'plan-name':true,'active':plan_item.id==plan.plan_id}">{{plan_item.name}}</h4>
                <h4 class="plan-price">${{plan_item.price}}</h4>
                <h6 class="plan-interval">Per Month</h6>
                <router-link :to="`/subscription/checkout/${plan_item.id}`"
                        v-if="plan_item.id!=plan.plan_id && plan.plan_id==-1">
                    <button class="btn btn-success start-btn">Start</button>
                </router-link>
                <button class="btn btn-success start-btn" v-if="plan_item.id!=plan.plan_id && plan.plan_id!=-1"
                        @click="updateSubscription(plan.plan_id,plan_item.id)"
                >Update</button>
                <button class="btn btn-warning start-btn" v-if="plan_item.id==plan.plan_id"
                        @click="cancelSubscription(plan_item.id)"
                >Cancel</button>
            </div>
        </template>
        <div class="clearfix"></div>
    </div>
    <!--</b-card>-->
</template>
<script>
    import Vue from 'vue';
    import VueForm from "vue-form";
    import options from "restaurant_src/validations/validations";
    import ApiService from "restaurant_resources/common/api.service";

    Vue.use(VueForm, options);

    export default {
        name: "EditSlider",
        props: {},

        data() {
            return {
                model:{
                },
                plans:[],
                plan:{
                    plan_id:-1
                },
                success_alert_show:false,
            }
        },
        methods: {
            updateSubscription(id){

            },
            cancelSubscription(id){
                ApiService.get(`restaurant/cancel_subscription/${id}`).then(
                    res=>{
                        this.plan.plan_id=-1;
                    },
                )
            },
            updateSubscription(current_id, update_id){
                ApiService.get(`restaurant/update_subscription/${current_id}/${update_id}`).then(
                    res=>{
                        this.plan.plan_id=update_id;
                    },
                )
            }


        },
        beforeMount() {
            this.model.slider_id=this.$route.params.slider_id;
            ApiService.get(`restaurant/get_subscription_plans`).then(response => {
                    let data=response.data;
                    this.plans=data.plans;
                    if(data.plan!=null && data.plan!=='null' && data.plan!=='')
                        this.plan=data.plan;
                },error=>{
                    console.log(error.response);
                }
            )
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
    #subscription-page{
        width: 100%;
        background: white;
        padding: 20px 30px;
        display:flex;
        .subscription-holder {
            width: 300px;
            margin-top: 20px;
            background: #eee;
            padding: 20px;
            border-radius: 5px;
            border:1px solid #ccc;
            margin-right: 20px;
            box-shadow: 5px 5px 2px 0px rgba(0,0,0,0.2);
            text-align: center;
        }
        .plan-name{
            text-align: center;
            background: #ca882a;
            padding: 15px;
            border-radius: 5px;
            color: #fff;
            font-weight: bold;
            font-size: 18px;
        }
        .plan-name.active{
            background: #05861b;
        }
        .plan-price{
            text-align: center;
            font-weight: bold;
            font-size:28px;
            margin-top:20px;
        }
        .plan-interval{
            text-align: center;
            color: #d45c07;
            font-size: 18px;
            font-weight: bold;
        }
        .start-btn{
            width:100px;

        }

    }
</style>

