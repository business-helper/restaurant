<template>
    <header class="site-header sticky" id="header">
        <div class="header-container">
            <div class="header-inner">
                <div class="toggle-menu" v-on:click="show_mobile_menu_panel()">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
                <div class="site-logo">
                    <router-link :to="{path:'/'}">
                        <img :src="logo">
                    </router-link>
                </div>
                <nav class="site-nav">
                    <ul class="site-main-menu">
                        <li><router-link :to="{path:'/'}" exact>Home</router-link></li>
                        <li><router-link to="/aboutus" exact>About Us</router-link></li>
                        <li><router-link to="/contactus" exact>Contact Us</router-link></li>
                        <li class="menu-item-has-children">
                            <a href="javascript:void(0)" :class="{'active':$route.name=='menus'}">
                                Menu
                            </a>
                            <ul class="sub-menu">
                                <li v-for="location in locations">
                                    <router-link :to="`/menus?restaurant=${location.name}`">{{location.name}}</router-link>
                                </li>

                            </ul>
                        </li>
                        <li><router-link :to="{path:'/order-online'}" @click="hide_mobile_menu_panel()" exact>Order Online</router-link></li>
                        <li v-if="orders.length>0"><router-link to="/myorders" exact>My Orders</router-link></li>
                    </ul>
                </nav>
                <nav class="mobile-site-nav" :class="{show:show_mobile_menu}">
                    <div class="close-btn" v-on:click="hide_mobile_menu_panel()">×</div>
                    <ul class="site-main-menu">
                        <li><router-link :to="{name:'home'}">Home</router-link></li>
                        <li><router-link to="/aboutus" v-on:click.native="hide_mobile_menu_panel()">About Us</router-link></li>
                        <li><router-link to="/contactus" v-on:click.native="hide_mobile_menu_panel()">Contact Us</router-link></li>
                        <li>
                            <router-link :to="{path:'order-online'}" v-on:click.native="hide_mobile_menu_panel()">Order Online</router-link>
                        </li>
                        <li v-if="orders.length>0"><router-link to="/" v-on:click.native="hide_mobile_menu_panel()">My Orders</router-link></li>
                        <li v-if="!checkLogged"><router-link to="/" v-on:click.native="hide_mobile_menu_panel()">register</router-link></li>
                    </ul>
                </nav>
                <div :class="{'right-menu':true,'no-cart':cart_count===0}" v-on:click="show_cart_panel()">
                    <a href="javascript:void(0)" :class="{'module module-cart right':true,'no-cart':cart_count===0}" data-toggle="panel-cart">
                            <span :class="{'cart-icon':true,'no-cart':cart_count===0}">
                                <i class="fas fa-shopping-cart"></i>
                                <span class="notification">{{cart_count>0 ? `${cart_count}` : ''}}</span>
                            </span>
                        <span :class="{'cart-value':true,'no-cart':cart_count===0}">${{total_price}}</span>
                    </a>
                </div>
                <div class="site-main-menu user-part">
                    <li v-if="checkLogged" class="menu-item-has-children">
                        <a href="javascript:void(0)">
                            <img class="profile-image" :src="customer.profile_picture">
                        </a>
                        <ul class="sub-menu">
                            <li><router-link to="/news">Profile</router-link></li>
                            <li><a href="javascript:void(0)" @click.stop="logout">Log Out</a></li>
                        </ul>
                    </li>
                    <li v-else class="login-link"><router-link to="/login">Login</router-link></li>
                </div>
            </div>
        </div>

        <div class="body-overlay" :class="{show:show_overlay_panel}" @click.prevent.stop="close_all_sub_panels()"></div>
        <div id="panel-cart" :class="{show:show_cart && cart_count>0 }" >
            <div class="panel-cart-container">
                <div class="panel-cart-title">
                    <h5 class="title">Your Cart</h5>
                    <button class="close" data-toggle="panel-cart" v-on:click.prevent.stop="hide_cart_panel()"><i class="ti ti-close"></i></button>
                </div>
                <div class="panel-cart-content">
                    <table class="table-cart">
                        <!--<p-check class="p-default p-thick p-pulse" color="warning-o">Occasionally</p-check>-->
                        <tbody>
                            <tr v-for="(menu,index) in cart_data">
                                <td class="title">
                                    <div class="qty-name-container">
                                        <span class="qty">
                                            {{menu.qty}}x
                                        </span>
                                        <span class="name">
                                            {{menu.productData.name}}
                                        </span>
                                    </div>
                                    <span class="option-item">Price{{menu.selected_size_index>-1 ? ` (${menu.productData.size[menu.selected_size_index].name}) ` : ''}}: </span>
                                    <strong class="option-item">{{menu.selected_size_index>-1 ? `${menu.productData.size[menu.selected_size_index].price}` : `${menu.productData.price}`}}</strong>
                                    <div v-for="(option_tag,tag_index) in menu.productData.option_tags">
                                        <h6 class="caption option-item"  v-for="(option_item,item_index) in option_tag.items" v-if="option_item.checked">
                                            <span class="option-item-label">{{option_item.count>1 ? `${option_item.count}x  ` : ''}}{{option_tag.title}}: </span>
                                            {{option_item.name}}<strong>{{option_item.price>0 ? `(+${option_item.price})` : ''}}</strong>
                                        </h6>
                                    </div>
                                </td>
                                <td class="price">$ {{menu.price}}</td>
                                <td class="actions">
                                    <a href="javascript:void(0)" class="action-icon" @click="editOrder(menu,index)"><i class="ti ti-pencil"></i></a>
                                    <a href="javascript:void(0)" class="action-icon" @click="deleteOrder(index)"><i class="ti ti-close"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="cart-summary">
                        <div class="row">
                            <div class="col-7 text-right">Sub total:</div>
                            <div class="col-5"><strong>$ {{sub_total}}</strong></div>
                        </div>
                        <div class="row">
                            <div class="col-7 text-right">Sales Tax({{tax}}%):</div>
                            <div class="col-5"><strong>$ {{sub_tax}}</strong></div>
                        </div>
                        <hr class="hr-sm">
                        <div class="row text-lg">
                            <div class="col-7 text-right">Total:</div>
                            <div class="col-5"><strong>${{total_price}}</strong></div>
                        </div>
                    </div>
                </div>
            </div>
            <router-link to="/checkout" class="panel-cart-action btn btn-secondary btn-block btn-lg" v-on:click.native="hide_mobile_menu_panel()"><span>Go to checkout</span></router-link>
        </div>

    </header>
</template>

<script>
    import ApiService from '../common/api.service';
    import Vue from 'vue';
    import PrettyCheckbox from 'pretty-checkbox-vue';
    Vue.use(PrettyCheckbox);

    export default {
        name: "SiteHeader",
        menu_hovered_index:-1,
        computed:{
            orders() {
                let orders = this.$store.state.orders;
                return orders;
            },
            logo(){
                return this.$store.state.logo;
            },
            locations(){
                return this.$store.state.locations.information;
            },
            cart_data() {
                return this.$store.state.cart_data;
            },
            total_price(){
                return this.$store.getters.total_price(-1);
            },
            sub_total(){
                return this.$store.getters.sub_total(-1);
            },
            sub_tax(){
                return this.$store.getters.sub_tax(-1);
            },
            cart_count(){
                return this.$store.getters.cart_count;
            },
            checkLogged(){
                return this.$store.getters.checkLogged;
            },
            customer(){
                return this.$store.state.customer;
            },
            tax(){
                return this.$store.getters.tax;
            }
        },
        methods:{
            editOrder(menu,index){
                this.$modal.show('product-modal',{productData:menu.productData,price:menu.price,qty:menu.qty,selected_size_index:menu.selected_size_index,instruction:menu.instruction,order_index:index});
            },
            deleteOrder(index){
                let data={};
                data.order_index=index;
                data.location_id=-1;
                this.$store.commit('deleteCart',data);

                if (this.cart_count==0)
                {
                    this.show_overlay_panel=false;
                    this.showBodyScroll();
                }
            },
            close_all_sub_panels(){
                this.show_overlay_panel=false;
                this.show_mobile_menu=false;
                this.show_cart=false;
                this.showBodyScroll();
            },
            show_cart_panel(){
                this.show_cart=true;
                this.show_overlay_panel=true;
                this.hideBodyScroll();
            },
            hide_cart_panel() {
                this.show_cart = false;
                this.show_overlay_panel = false;
                this.showBodyScroll();
            },
            show_mobile_menu_panel(){
                this.show_mobile_menu=true;
                this.show_overlay_panel=true;
                this.hideBodyScroll();
            },
            hide_mobile_menu_panel(){
                this.show_mobile_menu=false;
                this.show_overlay_panel=false;
                this.show_cart=false;
                this.showBodyScroll();
            },
            showBodyScroll(){
                let body = document.body;
                $(body).removeClass('modal-opened');
            },
            hideBodyScroll(){
                let body = document.body;
                $(body).addClass('modal-opened');
            },
            logout(){
                // ApiService.get('customer/logout',{
                //     'headers': { 'Authorization': this.customer.token}
                // }).then(
                //     response =>{
                //         console.log(response);
                        this.$store.commit('logout')
                    // },
                    // error =>{
                    //     console.log(error.response);
                    // }
                // )

            }


        },

        data(){
            return {
                show_cart:false,
                show_overlay_panel:false,
                show_mobile_menu:false,
            }
        }
    }
</script>

<style lang="scss">
    @import '~pretty-checkbox/src/pretty-checkbox.scss';
</style>


<style lang="scss" scoped>
    @import url("//use.fontawesome.com/releases/v5.8.1/css/all.css");

    .right{
        padding-top:0 !important;
        padding-bottom:0 !important;
    }

    .site-header {
        width: 100%;
        top: 0;
        left: 0;
        z-index: 9999;
        -webkit-transition: all 0.5s ease-in-out;
        -o-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
        font-family: "Oswald",sans-serif;
        display:block !important;
    }

    .container{
        max-width:1170px;
    }
    .toggle-menu{
        display:none;
        cursor:pointer;
        z-index:3;
    }
    .no-cart {
        border-left:none;
        visibility: hidden;
        transition: none !important;
    }

    .user-part{
        position:absolute;
        height:80px;
        padding:0;
        right:0;
    }
    .profile-image{
        height: 50px;
        width: 50px;
        display: block;
        margin-top: 15px;
        border-radius: 100px;
    }



    @media (min-width: 992px){
        .site-header .header-inner {
            display:flex;
            align-items: center;
            position:relative;
        }

        .close-btn{
            display:none;
        }

        .site-header .header-inner .site-logo {
            padding: 1.4375rem 0;
            transition: all 0.3s ease-in-out;
        }

        .site-header .header-inner .site-logo a {
            display: block;
            max-width: 150px;
        }

        .site-header .header-inner .site-logo a img {
            width: 100%;
        }

        .site-header .header-inner .site-nav {
            margin-left: auto;
        }

        .mobile-site-nav{
            display:none !important;
        }

        .site-header .site-nav {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
        }

        .site-header .site-main-menu {
            margin: 0;
            padding: 0;
            list-style: none;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
        }

        .site-header .site-main-menu li {
            margin: 0 1.3125rem;
            position: relative;
            padding: 3rem 0;
            border: 0 !important;
            -webkit-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
        }

        .site-header .site-main-menu.user-part li {
            padding:0;
            margin:0;
        }
        .site-header .site-main-menu.user-part li.login-link {
            margin-top:25px;
        }

        .site-header .site-main-menu li > a {
            font-size: 18px;
            color:#333;
            text-transform: uppercase;
            position: relative;
        }
        .site-header .site-main-menu li > a:after{
            position: absolute;
            content: '';
            display: block;
            bottom: 0;
            height: 1px;
            left: 0;
            width: 100%;
            background: #c59d5f;
            -webkit-transform-origin: right center;
            -ms-transform-origin: right center;
            transform-origin: right center;
            -webkit-transform: scale(0, 1);
            -ms-transform: scale(0, 1);
            transform: scale(0, 1);
            transition: transform 0.25s cubic-bezier(0.37, 0.31, 0.2, 0.85), -webkit-transform 0.25s cubic-bezier(0.37, 0.31, 0.2, 0.85);
        }

        .site-header .site-main-menu li > a:hover, .site-header .site-main-menu li > a.current_page {
            color: #c59d5f;
        }

        .site-header .site-main-menu li > a:hover:after, .site-header .site-main-menu li > a.current_page:after {
             -webkit-transform-origin: left center;
            -ms-transform-origin: left center;
             transform-origin: left center;
            -webkit-transform: scale(1, 1);
            -ms-transform: scale(1, 1);
             transform: scale(1, 1);
        }

        .site-header .site-main-menu li .sub-menu {
            display: block;
            margin: 0;
            padding: 0.9375rem 0;
            list-style: none;
            background: #fff;
            -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
            position: absolute;
            top: 110%;
            left: 0;
            min-width: 200px;
            visibility: hidden;
            opacity: 0;
            -webkit-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
            z-index: 999999;
        }
        .site-header .site-main-menu.user-part li .sub-menu {
            right:0;
            left:auto;
            text-align:right;
            min-width:120px;
        }


        .site-header .site-main-menu li .sub-menu li {
            display: block;
            margin: 0;
            padding: 0 1.5625rem;
        }

        .site-header .site-main-menu li .sub-menu li a {
            display: block;
            padding: 0.3125rem 0;
            color: #333;
            font-size: 0.875rem;
        }
        .site-header .site-main-menu li .sub-menu li a:after {
            display: none;
        }
        .site-header .site-main-menu li .sub-menu li a:hover {
            color: #c59d5f;
        }

        .site-header .site-main-menu li:hover .sub-menu {
            opacity: 1;
            visibility: visible;
            top: 100%;
        }

        .site-header .site-main-menu li .sub-menu li.menu-item-has-children:hover .sub-menu {
            top: -0.9375rem;
            visibility: visible;
            opacity: 1;
        }

        .site-header .site-main-menu li .sub-menu li:last-child a {
            border-bottom: 0;
        }

        .site-header .site-nav .right-menu {
            margin-left: 20px;
            padding-left: 20px;
            position: relative;
        }

        .no-cart {
            border-left:none;
            visibility: hidden;
            transition: none !important;
        }

        .module-cart .cart-icon {
            position: relative;
        }

        .right-menu .module{
            display: inline-block;
            color:#444;
            font-size:20px;
            margin-right:90px;
            margin-left:50px;
        }

        .module-cart .cart-icon .notification {
            position: absolute;
            top: -7px;
            right: -5px;
            width:20px;
            height:20px;
            text-align:center;
            background-color: #4aa36b;
            color: #fff;
            font-weight: 600;
            font-size: 10px;
            display: inline-block;
            -webkit-border-radius: 30px;
            -moz-border-radius: 30px;
            -ms-border-radius: 30px;
            -o-border-radius: 30px;
            border-radius: 30px;
            padding: 0.35rem 0.3rem 0.2rem 0.35rem !important;
            line-height: 1.5;
            font-family:inherit;
        }

        .module-cart .cart-value {
            font-size: 23px;
            font-family: "Oswald",sans-serif;
            border-left: 1px solid #969090;
            margin-left: 15px;
            padding-left: 15px;
            -webkit-transition: all .25s ease-out;
            -moz-transition: all .25s ease-out;
            -o-transition: all .25s ease-out;
            transition: all 0.25s ease-out;
            padding-top: 2px;
            padding-bottom: 2px;
        }

        div.right-menu a.module-cart:hover {
            color: #c59d5f;
        }
    }

    @media (min-width: 992px) and (max-width: 1200px) {
        .site-header .site-main-menu li {
            margin: 0 12px;
        }
        .site-header .site-main-menu li > a {
            font-size: 15px;
        }
        .site-header .site-nav .right-menu {
            padding-left: 15px;
        }

    }


    @media (max-width: 992px){
        .site-nav{
            display:none;
        }
        .mobile-site-nav {
            position: fixed;
            left: 0;
            top: 0;
            height: 100vh;
            background: white;
            z-index: 9999;
            padding: 0px;
            width: 350px;
            -webkit-transition: all 0.5s ease-in-out;
            -o-transition: all 0.5s ease-in-out;
            transition: all 0.5s ease-in-out;
            transform:translateX(-100%);
            visibility:hidden;
        }
        .mobile-site-nav.show {
            transform:translateX(0%);
            visibility: visible;
        }

        .header-inner{
            padding:40px;
        }

        .close-btn{
            color:#ddd;
            text-align:right;
            font-size:40px;
            cursor:pointer;
            margin-top: -5px;
            padding-right: 15px;
            background:#111;
        }
        .close-btn:hover{
            color:#fff;
        }
        .site-main-menu{
            padding:20px;
        }
        .site-main-menu li{
            position:relative;
            border-bottom:1px solid #aaa;
        }
        .site-header .site-main-menu li > a {
            color:#333;
            text-transform: uppercase;
            position: relative;
        }
        .site-header .site-main-menu li a{
            display:block;
            width:100%;
            padding: 3px 0;
            font-size:18px;
        }

        .site-main-menu li.menu-item-has-children a::after{
            position: absolute;
            content: "\e64b";
            font-family: 'themify';
            top: 0px;
            right: 5px;
            font-size: 12px;
        }
        .site-main-menu li{
            margin:12px 0;
        }
        li.menu-item-has-children .sub-menu li a:after{
            display:none;
        }
        .sub-menu li{
            border-bottom:none;
            margin:5px 0;
        }
        .sub-menu li a{
            font-size:15px !important;
        }

        .sub-menu{
            display:none;
        }

        .site-main-menu li a:hover{
            color: #c59d5f;
        }

        .site-main-menu.user-part{
            padding:0 20px;
            top:0px;
        }
        .site-main-menu.user-part li{
            border-bottom:none;
            margin:0;
        }
        .site-header .site-main-menu.user-part li.login-link{
            margin-top:25px;
        }
        .site-main-menu.user-part li.menu-item-has-children a::after{
            display:none;
        }

        .site-header .site-main-menu.user-part li .sub-menu {
            display: block;
            margin: 0;
            padding: 0.9375rem 0;
            list-style: none;
            background: #fff;
            -webkit-box-shadow: 0 2px 25px rgba(0, 0, 0, 0.05);
            box-shadow: 0 2px 25px rgba(0, 0, 0, 0.05);
            position: absolute;
            top: 110%;
            left: 0;
            min-width: 200px;
            visibility: hidden;
            opacity: 0;
            -webkit-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
            z-index: 999999;
            padding-right:20px;
        }
        .site-header .site-main-menu.user-part li .sub-menu {
            right:0;
            left:auto;
            text-align:right;
            min-width:120px;
            display:block;
            position:absolute;
            z-index:3;
        }
        .site-header .site-main-menu.user-part li:hover .sub-menu {
            opacity: 1;
            visibility: visible;
            top: 100%;
        }

        .toggle-menu {
            position: absolute;
            left: 30px;
            width: 26px;
            top: 25px;
            display: block;
            height: 24px;
        }

        .toggle-menu .bar {
            width: 100%;
            height: 2px;
            display: block;
            margin-bottom: 7px;
            background: #333;
        }

        .site-logo{
            position:absolute;
            top:10px;
            left:50%;
            height:60px;
            transform:translateX(-50%);
        }
        .site-logo img{
            height:100%;
            width:auto;
        }

        .right-menu{
            position:absolute;
            right:90px;
            top:25px;
            color:#444;
            z-index:3;
        }

        .right-menu .module{
            color:#444;
            font-size:20px;
        }

        .right-menu .module .cart-icon{
            position:relative;
        }

        .right-menu .module .cart-icon .notification{
            position:absolute;
            left:13px;
            top:-10px;
            width:20px;
            height:20px;
            text-align:center;
            background-color: #4aa36b;
            color: #fff;
            font-weight: 600;
            font-size: 10px;
            border-radius: 30px;
            padding: 0.35rem 0.3rem 0.2rem 0.35rem !important;
            line-height: 1.5;
            font-family:inherit;
        }
        .right-menu .module .cart-value{
            display:none;
        }

    }

    .body-overlay{
        position:fixed;
        width:100%;
        height:100vh;
        z-index:8;
        background:black;
        opacity: 0;
        top:0;
        left:0;
        -webkit-transition: opacity 0.6s ease-in-out;
        -moz-transition: opacity 0.6s ease-in-out;
        -ms-transition: opacity 0.6s ease-in-out;
        -o-transition: opacity 0.6s ease-in-out;
        transition: opacity 0.6s ease-in-out;
        visibility:hidden;
    }
    .body-overlay.show{
        opacity:0.5;
        visibility: visible;
    }

    @media (max-width: 550px){
        .site-nav {
            width:100%;
        }
    }

    #panel-cart {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        width: 370px;
        z-index: 950;
        -webkit-box-shadow: 0 0 30px 0 rgba(0,0,0,0.1);
        -moz-box-shadow: 0 0 30px 0 rgba(0,0,0,0.1);
        box-shadow: 0 0 30px 0 rgba(0,0,0,0.1);
        font-size: 0.95rem;
        /*<!-- -webkit-transform: translateX(-100%);-->*/
        /*<!-- -moz-transform: translateX(100%);-->*/
        /*<!-- -ms-transform: translateX(100%);-->*/
        /*<!-- -o-transform: translateX(100%);-->*/
        transform: translateX(100%);
        -webkit-transition: all .6s cubic-bezier(0.215, 0.61, 0.355, 1);
        -moz-transition: all .6s cubic-bezier(0.215, 0.61, 0.355, 1);
        -o-transition: all .6s cubic-bezier(0.215, 0.61, 0.355, 1);
        transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
        visibility:hidden;
    }
    #panel-cart.show{
        visibility: visible;
        -webkit-transform: translateX(0);
        -moz-transform: translateX(0);
        -ms-transform: translateX(0);
        -o-transform: translateX(0);
         transform: translateX(0);
    }

    #panel-cart .panel-cart-container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding-bottom: 90px;
        overflow: auto;
        z-index: 2;
        background-color: #fff;
    }

    #panel-cart .panel-cart-title {
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        padding:20px;
        background-color: #f3f4f4;
    }
    #panel-cart .panel-cart-title .title {
        margin-bottom: 0;
    }
    #panel-cart .panel-cart-title .close {
        margin-left: auto;
    }
    button.close {
        padding: 0;
        cursor: pointer;
        background: 0 0;
        border: 0;
        -webkit-appearance: none;
    }
    .close {
        color: inherit;
        text-shadow: none;
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=60);
        opacity: .6;
        font-size: 14px;
        -webkit-transition: all .25s ease-out;
        -moz-transition: all .25s ease-out;
        -o-transition: all .25s ease-out;
        transition: all 0.25s ease-out;
    }
    .close {
        float: right;
        font-size: 18px;

        font-weight: 700;
        line-height: 1;
        color: #000;
        text-shadow: 0 1px 0 #fff;
        opacity: .5;
    }
    .table-cart {
        line-height: 1.25;
        width: 100%;
    }
    .table-cart a{
        color:#222;
    }

    .table-cart th, .table-cart td {
        vertical-align: middle;
        padding: 1rem 1.5rem;
        border-bottom: 1px solid #e0e0e0;
    }
    .table-cart td {
        padding: 1rem 0.5rem 1rem 1rem;

    }
    td.price {
        padding:0;
        width:50px;
        font-weight:bold;
    }

    .qty-name-container{
        display:grid;
        grid-template-columns:30px 1fr;
    }

    .qty{
        margin-right:10px;
        display:block;
        font-weight:bold;
    }

    .table-cart .title .name {
        font-weight: 500;
        display: block;
        font-size:16px;
    }
    .text-muted {
        color: #a4a7a9 !important;
    }
    .table-cart .price {
        font-weight: 500;
    }
    .table-cart .actions {
        white-space: nowrap;
    }
    .action-icon {
        color: #a4a7a9;
        margin: 0 0.1em;
    }
    .cart-summary {
        padding: 1.5rem;
    }
    .text-right {
        text-align: right!important;
    }
    .text-lg {
        font-size: 1.35rem;
    }
    .option-item{
        font-weight:normal;
        padding-left:1rem;
        font-family: "Helvetica Neue","Raleway",sans-serif;
        margin-left:15px;
    }
    strong.option-item{
        font-weight:bold;
    }
    strong.option-item{
        font-weight:bold;
    }
    .btn:before {
        position: absolute;
        top: -2px;
        left: -2px;
        bottom: -2px;
        right: -2px;
        -webkit-transform-origin: center bottom;
        -moz-transform-origin: center bottom;
        -ms-transform-origin: center bottom;
        -o-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-transition: all .25s ease-out;
        -moz-transition: all .25s ease-out;
        -o-transition: all .25s ease-out;
        transition: all 0.25s ease-out;
        content: ' ';
        visibility: hidden;
        -webkit-transform: scaleY(0);
        -moz-transform: scaleY(0);
        -ms-transform: scaleY(0);
        -o-transform: scaleY(0);
        transform: scaleY(0);
    }
    .btn:hover:before, .btn:focus:before, .btn:active:before, .btn:focus:active:before {
        visibility: visible;
        -webkit-transform: scaleY(1);
        -moz-transform: scaleY(1);
        -ms-transform: scaleY(1);
        -o-transform: scaleY(1);
        transform: scaleY(1);
    }
    .btn-secondary:before {
        background-color: #ddae71;
    }
    .btn>span {
        position: relative;
        z-index: 2;
    }

    #panel-cart .panel-cart-action {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        white-space: nowrap;
        z-index: 3;
        border-radius: 0;
        padding: 20px;
        border-color: #25282a;
        background-color: #25282a;
        color: #fff;
    }
    #panel-cart .panel-cart-action:hover, #panel-cart .panel-cart-action:focus {
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        -o-transform: translateY(0);
        transform: translateY(0);
    }


    .btn-secondary {
        color: #fff;
        background-color: #6c757d;
        border-color: #6c757d;
    }

    .site-main-menu li a:active{
        color: #c59d5f !important;
    }

    .site-main-menu .active{
        color:#c59d5f !important;
    }
    .site-main-menu .active:after {
        position: absolute;
        content: "";
        display: block;
        bottom: 0;
        height: 1px;
        left: 0;
        width: 100%;
        background: #c59d5f;
        -webkit-transform-origin: right center !important;
        transform-origin: right center;
        -webkit-transform: scale(0, 1);
        transform: scale(0, 1);
        transition: transform 0.25s cubic-bezier(0.37, 0.31, 0.2, 0.85), -webkit-transform 0.25s cubic-bezier(0.37, 0.31, 0.2, 0.85);
    }

</style>
