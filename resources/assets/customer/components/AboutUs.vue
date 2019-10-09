<template>
    <div id="about-us-page">

        <!-- Page Title -->
        <div class="page-title border-top">
            <div class="container">
                <div class="row">
                    <div class="col-12" style="text-align:center">
                        <h1 class="mb-0">About Us</h1>
                        <h4 class="text-muted mb-0">Some informations about our restaurant</h4>
                    </div>
                </div>
            </div>
        </div>

        <!-- Section -->
        <section class="section section-bg-edge">
            <div class="image left bottom col-md-7">
                <div class="bg-image top-bg-image" :style="{'background-image':`url('${about_us_information.background_image}')`}">
                </div>
            </div>

            <div class="container">
                <div class="col-lg-5 push-lg-5 col-md-9 push-md-3">
                    <div class="rate mb-5 rate-lg">
                        <i class="fa fa-star active"></i>
                        <i class="fa fa-star active"></i>
                        <i class="fa fa-star active"></i>
                        <i class="fa fa-star active"></i>
                        <i class="fa fa-star active"></i>
                    </div>
                    <h2>{{about_us_information.review_title}}</h2>
                    <p class="lead">{{about_us_information.review_content}} </p>
                    <h6>{{about_us_information.review_user_name}}</h6>
                    <img src="assets/img/svg/sign.svg" alt="" class="mb-5">
                    <!--<h4>What people say about Us?</h4>-->
                    <!--<router-link to="/" class="btn btn-outline-primary"><span>Check our reviews</span></router-link>-->
                </div>
            </div>
        </section>

        <!-- Section -->
        <section class="section section-lg dark bg-dark">

            <!-- BG Image -->
            <div class="bg-image bg-parallax" :style="{'background-image':`url('${about_us_information.bottom_image}')`}"></div>


            <div class="container text-center">
                <div class="col-lg-8 push-lg-2">
                    <h2 class="mb-3">Would you like to visit Us?</h2>
                    <h5 class="text-muted">Please order our food</h5>
                    <router-link to="/order-online" class="btn btn-outline-primary"><span>Order Food</span></router-link>
                </div>
            </div>

        </section>
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
            about_us_information(){
                return this.$store.state.about_us_information;
            },


        },

        components: {
            Slick,
            productModal
        },
    }
</script>

<style lang="scss" scoped>
    #about-us-page{
        font-family: "Helvetica Neue","Raleway",sans-serif;
        color: #383c40;
        font-weight: 400;


        .section-bg-edge .bg-image{
            background-color: rgba(255, 255, 255, 0.8);
            background-blend-mode: overlay;
        }

        h1, h2, h3, h4{
            font-weight:lighter;
        }

        h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 {
            margin-top: 0;
            margin-bottom: 2rem;
            font-weight: 200;
        }
        h1, .h1 {
            font-size: 4.5rem;
            font-weight: 100;
        }

        h2, .h2 {
            font-size: 3.5rem;
            font-weight: 100;
        }

        p {
            font-size: 1rem;
            font-weight: 400;
            margin-bottom: 2rem;
        }

        p {
            margin-top: 0;
            margin-bottom: 1rem;
        }

        p.lead {
            font-size: 1.2rem;
            font-weight: 400;
        }

        h6, .h6 {
            font-size: 1.1rem;
            font-weight: 500;
        }
        h4, .h4 {
            font-size: 1.75rem;
        }
        @media only screen and (max-width: 1500px){
            h4, .h4 {
                font-size: 1.6rem;
            }
        }


        .bg-light {
            background-color: #f3f4f4 !important;
        }

        .btn {
            position: relative;
            font-family: "Oswald",sans-serif;
            font-weight: 400;
            text-transform: uppercase;
            -webkit-border-radius: 0;
            -moz-border-radius: 0;
            -ms-border-radius: 0;
            -o-border-radius: 0;
            border-radius: 0;
            padding: 0.75rem 2rem 1rem;
            -webkit-transition: all .25s ease-out;
            -moz-transition: all .25s ease-out;
            -o-transition: all .25s ease-out;
            transition: all 0.25s ease-out;
            outline: none;
            background: transparent;
            border-width: 2px;
            -webkit-backface-visibility: hidden;
            -moz-backface-visibility: hidden;
            -ms-backface-visibility: hidden;
            -o-backface-visibility: hidden;
            backface-visibility: hidden;
            cursor: pointer;
        }

        .btn-outline-primary {
            border-color: #ddae71;
            color: inherit;
        }

        .btn-outline-primary:hover, .btn-outline-primary:focus, .btn-outline-primary:active, .btn-outline-primary:focus:active {
            border-color: #ddae71;
            background: transparent;
            color: #fff;
        }


        .btn-sm, .btn-group-sm > .btn {
            padding: 0.7rem 1rem;
            font-size: 0.875rem;
            line-height: 1.5;
            border-radius: 0rem;
            border: 2px solid #383434;
        }

        .bg-dark .bg-image{
            background-color: rgba(0, 0, 0, 0.5);
            background-blend-mode: overlay;
        }


    }
</style>
