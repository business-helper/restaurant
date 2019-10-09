<template>
    <div id="online-order-page">
        <div class="background-part" :style="{'background-image':`url('${locations['brand']['image']}')`}">
            <h1 class="page-title">Order Online</h1>
            <h2 class="page-subtitle">
                {{locations['brand']['text']}}
            </h2>
        </div>
        <div class="restaurants-container">
            <div v-for="(location,location_item) in locations.information" class="restaurant-holder" :style="{'background-image': `url('${location.brand_image}')`}">
                <div class="contact-information-holder">
                    <h4 class="location-name">{{location.name}}</h4>
                    <h5 class="location-address">{{location.address}}</h5>
                    <h5 class="contact-information"><span class="information-label">Phone:</span><span class="information-text">{{location.phone}}</span></h5>
                    <h5 class="contact-information"><span class="information-label">E-mail:</span><span class="information-text">{{location.email}}</span></h5>
                    <router-link class="order-link" :to="`/pick-up?restaurant=${location.name}`"><button>Order Now</button></router-link>
                </div>
                <div>
                    <div v-if="location.openning_hours.length>0" class="openning-hours-holder">
                        <h4 class="openning-hours-title">Openning Hours</h4>
                        <h6 v-for="(day,day_index) in location.openning_hours" class="openning-hour-item"><span class="openning-hour-day">{{day.day}}</span><span class="openning-hour">{{day.openning_state==1 ? `${day.begin_time} - ${day.end_time}`: 'Rest'}}</span> </h6>
                    </div>
                </div>

            </div>
            <div v-if="locations.information.length==1" class="restaurant-holder empty-holder" style="background-image:url(public/Images/Settings/empty_template.jpg)">
                <h4 class="location-name">Openning Soon... </h4>
            </div>
        </div>

    </div>


</template>


<script>
    import Slick from 'vue-slick';
    import 'slick-carousel/slick/slick.scss';
    import '../../../../public/css/themes/theme-beige.css';
    import 'bootstrap-vue/dist/bootstrap-vue.css';
    import productModal from './productModal';

    export default{
        data(){
            return {
                // food_menus:[]
            }
        },
        computed: {
            locations(){
                return this.$store.state.locations;
            }


        },
        methods: {


        },
        components: {

        },
    }
</script>

<style lang="scss" scoped>
    #online-order-page{
        font-family: "Helvetica Neue","Raleway",sans-serif;
        color: #383c40;
        font-weight: 400;
        .background-part{
            margin-top:0;
            padding:150px 30px;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: right center;
            background-color: rgba(0, 0, 0, 0.45);
            background-blend-mode: overlay;

            .page-title {
                color: white;
                text-align: center;
                text-transform: uppercase;
                font-size: 70px;
                font-weight: bold;
                padding: 0;
                margin-bottom: 50px;
                // font-family: "Barlow Condensed";
            }

            .page-subtitle {
                color: white;
                text-align: center;
                font-size: 35px;
                line-height:40px;
                // font-family: "Barlow Condensed";
                max-width:1200px;
                margin:0 auto;
            }

            @media screen and (max-width:1020px){
                .page-title{
                    font-size:calc(70 * 100vw / 1020);
                    margin-bottom:calc(50 * 100vw / 1020);
                }
                .page-subtitle {
                    font-size:calc(40 * 100vw / 1020);
                }
            }
        }

        .restaurants-container{
            margin: 10px auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap:10px;
            padding:0;
            @media screen and (max-width: 767px) {
                grid-template-columns:1fr;
                grid-gap:10px;
                .empty-holder{
                    display:none;
                }

            }
            .restaurant-holder{
                padding: 50px 40px 50px 40px;
                background-position: center center;
                background-repeat: no-repeat;
                background-size: cover;
                min-height: 349.844px;
                height: auto;
                background-color: rgba(0, 0, 0, 0.55);
                background-blend-mode: overlay;
                color: white;
                display:grid;
                grid-template-columns: 1fr 1fr;

                .location-name{
                    font-size: 25px;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .information-label{
                    margin-right:10px;
                }
                .information-text a{
                    color:white;
                }
                .information-text a:hover{
                    color: #c59d5f;
                }
                .order-link{
                    display:block;
                    margin-top:20px;
                    width:120px;
                    button {
                        padding: 10px 10px;
                        color: #eeeeee;
                        background: #f1c31a;
                        border: none;
                        font-weight: bold;
                        font-size: 18px;
                        cursor:pointer;
                    }
                    button:hover{
                        color:#fff;
                    }
                }
            }
        }

        .openning-hours-holder {
            width: fit-content;
            background: #3c393966;
            padding: 20px;
            float:right;
        }
        .openning-hours-title {
            margin-bottom: 15px;
            text-align: center;
        }
        span.openning-hour-day {
            width: 50px;
            display: inline-block;
            text-align: center;
        }
        .openning-hour {
            display: inline-block;
            text-align: center;
            width: 150px;
        }


    }
</style>
