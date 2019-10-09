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

            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 push-lg-1 col-md-6">
                        <img :src="logo" alt="" class="mb-5" width="130">
                        <h4 class="mb-0">{{contact_information.restaurant_name}}</h4>
                        <span class="text-muted">{{contact_information.address}}</span>
                        <hr class="hr-md">
                        <div class="row">
                            <div class="col-sm-6 mb-3 mb-sm-0">
                                <h6 class="mb-1 text-muted">Phone:</h6>
                                {{contact_information.phone}}
                            </div>
                            <div class="col-sm-6">
                                <h6 class="mb-1 text-muted">E-mail:</h6>
                                <a href="#">{{contact_information.email}}</a>
                            </div>
                        </div>
                        <hr class="hr-md">
                        <h6 class="mb-3 text-muted">Follow Us!</h6>
                        <a href="#" class="icon icon-social icon-circle icon-sm icon-facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="icon icon-social icon-circle icon-sm icon-instagram"><i class="fab fa-instagram"></i></a>
                    </div>
                    <div class="col-lg-5 push-lg-2 col-md-6">
                        <div id="google-map-1" class="h-500 shadow">
                            <GmapMap
                                    :center="{lat:contact_information.lat,lng:contact_information.lng}"
                                    :zoom="7"
                                    style="height: 500px"
                            >
                                <GmapMarker
                                    :position="{lat:contact_information.lat, lng:contact_information.lng}"
                                    :clickable="true"
                                    :draggable="false"
                                    :icon="{url:contact_information.marker_image,scaledSize:{width:46,height:46,f:'px',b:'px'}}"
                                >
                                </GmapMarker>
                            </GmapMap>

                        </div>
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

    import * as VueGoogleMaps from 'vue2-google-maps';
    Vue.use(VueGoogleMaps, {
        load: {
            key: 'AIzaSyDevDlcD-iiGG4qOs1OE8ZKsi11HTODjtA',
            libraries: 'places', // This is required if you use the Autocomplete plugin
        },
    })


    export default{
        data(){
            return {

            }
        },
        computed: {
            logo(){
                return this.$store.state.logo;
            },
            contact_information(){
                return this.$store.state.contact_information;
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

        @media screen and (max-width: 768px){
            .menu-container{
                display:block;
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
