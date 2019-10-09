<template>
    <div id="contact-us-page">
        <div class="page-title bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 push-lg-4">
                        <h1 class="mb-0">Contact Us</h1>
                        <h4 class="text-muted mb-0">Some informations about our restaurant</h4>
                    </div>
                </div>
            </div>
        </div>

        <!-- Section -->
        <section class="section">
            <div class="container locations-container">
                <div v-for="(location,location_item) in locations.information" class="location-holder">
                    <div class="google-map">
                        <GmapMap
                                :center="{lat:parseFloat(location.lat),lng:parseFloat(location.lng)}"
                                :zoom="7"
                                style="height: 400px"
                        >
                            <GmapMarker
                                    :position="{lat:parseFloat(location.lat), lng:parseFloat(location.lng)}"
                                    :clickable="true"
                                    :draggable="false"
                                    :icon="{url:locations.map_key.mark_image,scaledSize:{width:46,height:46,f:'px',b:'px'}}"
                            >
                            </GmapMarker>
                        </GmapMap>
                    </div>
                    <div class="information-holder">
                        <h4 class="location-name">{{location.name}}</h4>
                        <h6 class="location-address">{{location.address}}</h6>
                        <h6 class="contact-information"><span class="information-label">Phone:</span><span class="information-text">{{location.phone}}</span></h6>
                        <h6 class="contact-information"><span class="information-label">E-mail:</span><span class="information-text"><a href="#" class="information-text">{{location.email}}</a></span></h6>
                    </div>


                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import '../../../../public/css/themes/theme-beige.css';
    import 'bootstrap-vue/dist/bootstrap-vue.css';

    import Vue from 'vue';

    // import * as VueGoogleMaps from 'vue2-google-maps';
    // Vue.use(VueGoogleMaps, {
    //     load: {
    //         key: 'AIzaSyDevDlcD-iiGG4qOs1OE8ZKsi11HTODjtA',
    //         libraries: 'places', // This is required if you use the Autocomplete plugin
    //     },
    // })


    export default{
        data(){
            return {

            }
        },
        computed: {
            logo(){
                return this.$store.state.logo;
            },
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
    #contact-us-page{
        font-family: "Helvetica Neue","Raleway",sans-serif;
        color: #383c40;
        font-weight: 400;

        .locations-container{
            display:grid;
            grid-template-columns:1fr 1fr;
            grid-gap:20px;
            margin:0 auto;
        }
        .location-holder{
            box-shadow: 2px 2px 5px 5px rgba(0,0,0,.2), 0 2px 4px 0 rgba(0,0,0,.2);
        }
        .information-holder {
            padding: 20px 20px 20px 20px;
            background: #252323fc;
        }
        .location-name{
            color:white;
            text-align:center;
            margin-bottom:2px;
            font-weight:bold;
        }
        .location-address{
            color:white;
            text-align:center;
        }
        .information-label{
            color:#dedede;
            margin-right:20px;
            width:50px;
            display:inline-block;
        }
        .information-text{
            color:#fff;
            width:150px;
            display:inline-block;
        }
        .contact-information{
            margin-top:10px;
            text-align:center;
            margin-bottom:0;
        }
        @media screen and (max-width:767px){
            .locations-container{
                grid-template-columns:1fr;
            }

        }



        h1, h2, h3, h4{
            font-weight:lighter;
        }

        .bg-light {
            background-color: #f3f4f4 !important;
        }

        .btn-sm, .btn-group-sm > .btn {
            padding: 0.7rem 1rem;
            font-size: 0.875rem;
            line-height: 1.5;
            border-radius: 0rem;
            border: 2px solid #383434;
        }

        h4, .h4 {
            font-size: 1.75rem;
        }

        h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 {
            margin-top: 0;
            margin-bottom: 2rem;
            font-weight: 200;
        }
        h6, .h6 {
            font-size: 1.1rem;
            font-weight: 500;
        }

        a {
            color: inherit;
            -webkit-transition: all .2s ease-in-out;
            -moz-transition: all .2s ease-in-out;
            -o-transition: all .2s ease-in-out;
            transition: all 0.2s ease-in-out;
        }
        a:hover, a:focus {
            text-decoration: none;
            color: #ddae71;
        }
    }
</style>
