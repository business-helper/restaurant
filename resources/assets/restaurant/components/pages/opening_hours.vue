<template>
    <!--<b-card header="Site Logo and title" header-tag="h4" class="bg-success-card">-->
    <div id="openning-time">
        <div :class="{'alert alert-success site-setting-alert':true,'show':succes_alert_show}">Openning Hours successfully updated</div>
        <vue-form :state="formstate" @submit.prevent="submit">
            <div class="location-holder">
                <div v-for="(item,index) in opening_hours" class="day-item">
                    <b-card show-footer class="bg-primary-card">
                        <h5 slot="header">{{item.day}}</h5>
                        <div class="row default-time-container" >
                            <div class="form-group">
                                <label>Begginging Time</label>
                                <time-picker v-model="item.begin_time" :value="item.begin_time" :format="format" :minute-interval="30" ></time-picker>
                            </div>
                            <div class="form-group" style="margin-left:20px;">
                                <label>Ending Time</label>
                                <time-picker v-model="item.end_time" :value="item.end_time" :format="format" :minute-interval="30"></time-picker>
                            </div>
                        </div>
                        <div slot="footer">
                            <toggle-button v-model="item.opening_state" :labels="{checked: 'Open', unchecked: 'Closed'}" :sync="true" :color="{checked: '#09BD8F', unchecked: '#dc6460'}" :width="100" :font-size="16"/>
                        </div>
                    </b-card>
                </div>
            </div>
            <div class="clearfix"></div>
            <button type="submit" class="btn btn-success submit-button">Submit</button>
        </vue-form>
    </div>
    <!--</b-card>-->
</template>
<script>
    import Vue from 'vue';
    import VueForm from "vue-form";
    import options from "restaurant_src/validations/validations.js";
    import ApiService from "restaurant_resources/common/api.service";
    import ClipperBasic from "vuejs-clipper/src/components/clipper-basic";
    import VueTimepicker from '../../../globalComponents/vue2-timepicker/vue-timepicker';
    import 'vuejs-clipper/dist/vuejs-clipper.css';
    import AdminApiService from "common/api.service";
    Vue.use(VueForm, options);

    export default {
        name: "opening_hours",
        props: {},
        components: {
            ClipperBasic,
            'time-picker':VueTimepicker
        },

        data() {
            return {
                opening_hours:[],
                formstate:{},
                format:"A",
                days_template:
                    [
                        {
                            day:'Sun',
                            begin_time:'',
                            end_time:'',
                            opening_state:1
                        },
                        {
                            day:'Mon',
                            begin_time:'',
                            end_time:'',
                            opening_state:1
                        },
                        {
                            day:'Tue',
                            begin_time:'',
                            end_time:'',
                            opening_state:1
                        },
                        {
                            day:'Wed',
                            begin_time:'',
                            end_time:'',
                            opening_state:1
                        },
                        {
                            day:'Thu',
                            begin_time:'',
                            end_time:'',
                            opening_state:1
                        },
                        {
                            day:'Fri',
                            begin_time:'',
                            end_time:'',
                            opening_state:1
                        },
                        {
                            day:'Sat',
                            begin_time:'',
                            end_time:'',
                            opening_state:1
                        },
                    ],
                succes_alert_show:false,
                test_data:'',
                restaurant_id:0,
                api_service:ApiService
            }
        },
        methods: {
            submit(){
                if (this.formstate.$invalid) {
                    return;
                }
                this.api_service.post(`restaurant/update_opening_hours/${this.restaurant_id!=0 ? this.restaurant_id : ''}`,{opening_hours:this.opening_hours}).
                    then(
                        result => {
                            this.succes_alert_show=true;
                            setTimeout(()=>{
                                this.succes_alert_show=false;
                                if(this.restaurant_id!=0){
                                    this.$router.push('/restaurant_list');
                                }
                            },2000);
                        },
                        error => {
                            console.log(error.response);
                        }
                    );
            }
        },
        watch:{

        },
        beforeMount(){
            this.opening_hours=this.days_template;
        },
        mounted(){
            var add_restaurant_id='';
            let api_service=ApiService;
            if(this.$route.params.restaurant_id)
            {
                this.restaurant_id=this.$route.params.restaurant_id;
                add_restaurant_id="/"+this.restaurant_id;
                api_service=AdminApiService;
                this.api_service=api_service;
            }
            api_service.get('restaurant/get_detail'+add_restaurant_id).
            then(
                result => {
                    let data=result.data;
                    if(data.opening_hours!=null && data.opening_hours!=='' && data.opening_hours!=='null'){
                        this.opening_hours=data.opening_hours;
                    }else{
                        this.opening_hours=this.days_template;
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
<style lang="scss">
    #openning-time {
        width: 100%;
        background: white;
        padding: 20px 30px;

        .location-holder {
            width: fit-content;
            border: 1px solid #bbb;
            padding: 10px;
            box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.52), 0 4px 8px 0 rgba(0, 0, 0, 0.42);
            background:#eee;
            float:left;
            margin-right:20px;
            margin-bottom:20px;
        }

        .default-time-container{
            margin-left:0;
            margin-top:10px;
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
        .vtimeselector__input{
            padding:5px 10px;
            cursor:default;
        }
        input.vtimeselector__input:placeholder-shown{
            color:#888;
        }
        .day-item{
            max-width:540px;
        }
        .day-item .card-footer{
            padding-bottom:3px;
        }
        .location-title {
            background: #1d7521;
            padding: 10px 5px;
            color: white;
            margin-bottom: 25px;
        }
    }


</style>


