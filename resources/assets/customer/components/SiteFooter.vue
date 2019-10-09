<template>
    <footer id="footer" class="bg-dark dark">

        <div class="container">
            <!-- Footer 1st Row -->
            <div class="footer-first-row row">
                <div class="col-lg-3 text-center">
                    <router-link to="/"><img src="public/Images/Settings/fav-original.png" alt="" width="120px" class=""></router-link>
                </div>
                <!--<div class="col-lg-4 col-md-6">-->
                <!--<h5 class="text-muted">Openning Hours</h5>-->
                <!--<ul class="list-posts">-->
                <!--<li v-for="openning_hour in openning_hours">-->
                <!--<a href="javascript:void(0)" class="title">-->
                <!--<span class="openning-day">{{openning_hour.day}}</span>-->
                <!--<span class="openning-hour" v-if="openning_hour.openning_state==1">{{openning_hour.begin_time}} &nbsp&nbsp-&nbsp&nbsp {{openning_hour.end_time}}</span>-->
                <!--<span class="openning-hour" v-else>Rest</span>-->
                <!--</a>-->
                <!--</li>-->
                <!--</ul>-->
                <!--</div>-->
                <div class="col-lg-5 col-md-6">
                    <h5 class="text-muted">Subscribe Us!</h5>
                    <!-- MailChimp Form -->
                    <form action="//suelo.us12.list-manage.com/subscribe/post-json?u=ed47dbfe167d906f2bc46a01b&amp;id=24ac8a22ad" id="sign-up-form" class="sign-up-form validate-form mb-3" method="POST">
                        <div class="input-group">
                            <input name="EMAIL" id="mce-EMAIL" type="email" class="form-control" placeholder="Tap your e-mail..." required>
                            <span class="input-group-btn">
                                    <button class="btn btn-primary btn-submit" type="submit">
                                        <span class="description">Subscribe</span>
                                        <span class="success">
                                            <svg x="0px" y="0px" viewBox="0 0 32 32"><path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11"/></svg>
                                        </span>
                                        <span class="error">Try again...</span>
                                    </button>
                                </span>
                        </div>
                    </form>
                    <h5 class="text-muted mb-3">Social Media</h5>
                    <a href="#" class="icon icon-social icon-circle icon-sm icon-facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="icon icon-social icon-circle icon-sm icon-instagram"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <!-- Footer 2nd Row -->
            <div class="footer-second-row">
                <span class="text-muted">Copyright Bowlplay 2019. Made with love by Ohmani.</span>
            </div>
        </div>

        <!-- Back To Top -->
        <a href="javascript:void(0)" v-scroll-to="{el:'#header',duration:1000}" id="back-to-top">
            <i class="ti ti-angle-up"></i>
        </a>

    </footer>
</template>

<script>

    import '../../../../public/css/themes/theme-beige.css';

    export default {
        name:"footer1",
        data() {
            return {

            }
        },
        computed:{
            logo(){
                return this.$store.state.logo;
            },
            // day_lists(){
            //     return this.$store.getters.getDayLists;
            // },
            // openning_hours(){
            //     return this.$store.state.openning_hours;
            // }
        }
    }
</script>
<style lang="scss" scoped>
    .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
        margin-bottom: .5rem;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;
        color: inherit;
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
    .btn-lg {
        padding: 1.5rem 3rem 1.75rem;
        font-size: 1.2rem;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        -ms-border-radius: 0;
        -o-border-radius: 0;
        border-radius: 0;
    }
    .btn-group-vertical>.btn, .btn-group>.btn {
        position: relative;
        -webkit-box-flex: 0;
        -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
        flex: 0 1 auto;
    }
    .btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle) {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
    }
    .btn-group>.btn:first-child {
        margin-left: 0;
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


    .section-main-1>.container .content .content-inner {
        padding: 3rem;
    }
    h4, .h4 {
        font-size: 1.6rem;
    }

    h1, .h1 {
        font-size: 3.5rem;
    }

    h5, .h5 {
        font-size: 1.4rem;
        font-weight: normal;
    }

    button, input {
        font-family: inherit;
    }
    .form-control {
        display: block;
        width: 100%;
        padding: .5rem .75rem;
        font-size: 1rem;
        line-height: 1.25;
        color: #464a4c;
        background-color: #fff;
        background-image: none;
        -webkit-background-clip: padding-box;
        background-clip: padding-box;
        border: 1px solid rgba(0,0,0,.15);
        border-radius: .25rem;
        -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
        -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    }
    .form-control {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border-color: #e0e0e0;
        font-weight: 300;
        padding: 1rem;
        border: 2px solid #e0e0e0;
        -webkit-box-shadow: inset 1px 1px 2px 0 rgba(40,43,46,0.06);
        -moz-box-shadow: inset 1px 1px 2px 0 rgba(40,43,46,0.06);
        box-shadow: inset 1px 1px 2px 0 rgba(40,43,46,0.06);
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        -ms-border-radius: 0;
        -o-border-radius: 0;
        border-radius: 0;
    }

    .input-group .form-control {
        position: relative;
        z-index: 2;
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 auto;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        width: 1%;
        margin-bottom: 0;
    }

    #mce-EMAIL{
        border:none;
    }

    .input-group .form-control, .input-group-addon, .input-group-btn {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    .input-group .form-control, .input-group-addon, .input-group-btn {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    .input-group-btn {
        position: relative;
        font-size: 0;
        white-space: nowrap;
    }
    .input-group-addon, .input-group-btn {
        white-space: nowrap;
        vertical-align: middle;
    }

    .dark .form-control {
        border-color: #fff;
    }

    .input-group .form-control:not(:last-child), .input-group-addon:not(:last-child), .input-group-btn:not(:first-child)>.btn-group:not(:last-child)>.btn, .input-group-btn:not(:first-child)>.btn:not(:last-child):not(.dropdown-toggle), .input-group-btn:not(:last-child)>.btn, .input-group-btn:not(:last-child)>.btn-group>.btn, .input-group-btn:not(:last-child)>.dropdown-toggle {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
    }

    .btn-primary {
        border-color: #ddae71 !important;
        background-color: #ddae71 !important;
        color: #fff !important;
    }

    #mce-EMAIL{
        height:50px;
    }

    .btn-primary{
        height:50px;
    }

    .list-posts>li{
        margin-bottom:10px;
    }
    .openning-day {
        font-weight: normal;
        width: 50px;
        display: inline-block;
        text-align: center;
        color:#fff !important;
    }
    .openning-hour {
        display: inline-block;
        width: 170px;
        text-align: center;
        color:#fff !important;
    }
    .title{
        cursor:default !important;
    }

    #back-to-top{
        visibility: visible !important;
        opacity: 1 !important;
        position: fixed;
        right: 50px;
        bottom: 50px;
        background: white;
        color: black;
        border: 1px solid #888;
        box-shadow: 1px 1px 20px #ea9558;
    }

</style>


