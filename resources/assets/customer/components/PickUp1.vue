<template>
    <div id="pick-up-page">
        <div class="page-content">
            <div class="menu-container">
                <div class="my-order-container">
                    <div class="my-order-content-holder">
                        <nav id="menu-navigation" class="stick-to-content" data-local-scroll="" v-if="food_menus.length>0">
                            <ul class="nav nav-menu bg-dark dark">
                                <li v-for="(food_category, category_index) in food_menus">
                                    <a href="#" v-scroll-to="'#category-'+food_category.category_id">{{food_category.category_name}}</a>
                                </li>
                            </ul>
                        </nav>
                        <div :class="{'my-order-content-holder-2':true,'hide':cart_data.length==0}">
                            <h4 class="my-order-title">Your Carts</h4>
                            <!--<div class="order-content-summary-wrapper">-->
                                <div v-for="(menu,index) in cart_data" class="my-order-content">
                                    <div class="menu-name-content">
                                        <h6 class="menu-qty">{{menu.qty}}x</h6>
                                        <h6 class="menu-name">{{menu.productData.name}}</h6>
                                        <h6 class="menu-operation">
                                            <span class="menu-price">{{menu.price}}</span>
                                            <span class="menu-operation-icon" @click="editOrder(menu,index)"><i class="ti ti-pencil"></i></span>
                                            <span class="menu-operation-icon" @click="deleteOrder(index)"><i class="ti ti-close"></i></span>
                                        </h6>
                                    </div>
                                    <div class="menu-option-item-holder">
                                        <h6 class="option-item">
                                            <span class="option-item-label">Price{{menu.selected_size_index>-1 ? ` (${menu.productData.size[menu.selected_size_index].name}) ` : ''}}: </span>
                                            <strong>{{menu.selected_size_index>-1 ? `${menu.productData.size[menu.selected_size_index].price}` : `${menu.productData.price}`}}</strong>
                                        </h6>
                                        <div v-for="(option_tag,tag_index) in menu.productData.option_tags">
                                            <h6 class="option-item"  v-for="(option_item,item_index) in option_tag.items" v-if="option_item.checked">
                                                <span class="option-item-label">{{option_item.count>1 ? `${option_item.count}x  ` : ''}}{{option_tag.title}}: </span>
                                                {{option_item.name}}<strong>{{option_item.price>0 ? `(+${option_item.price})` : ''}}</strong>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            <!--</div>-->

                            <div class="price-summary-holder" v-if="cart_data.length>0">
                                <div class="sub-total-holder"><h6 class="sub-total-label">Sub Total</h6><h6 class="sub-total-price">${{sub_total}}</h6></div>
                                <div class="sub-total-holder"><h6 class="sub-total-label">Sales Tax({{tax}}%)</h6 ><h6 class="sub-total-price">${{sub_tax}}</h6></div>
                                <div class="total-holder">
                                    <div class="total-price-holder">
                                        <h6 class="total-label">Total</h6 >
                                        <h6 class="total-price">${{this.total_price}}</h6>
                                    </div>
                                    <hr style="background:#aaa"/>

                                    <router-link :to="`/checkout?restaurant=${restaurant}`"><button class="confirm-order">Confirm Order</button></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="menu-category-content padded">
                        <div v-for="(food_category,category_index) in food_menus" class="category-container" :id="'category-'+food_category.category_id">
                            <div class="category-wrapper" :style="{'background-image':`url('${food_category.image}')`}"></div>
                            <div class="row gutters-sm menu-wrapper" v-if="food_category.has_item_image==1" >
                                <div class="col-lg-4 col-6" v-for="(item,index) in food_category.menus">
                                    <div class="menu-item menu-grid-item">
                                        <img class="mb-4" :src="item.image" alt="">
                                        <h6 class="mb-0 food-menu-name">{{item.name}}</h6>
                                        <span class="text-muted text-sm food-description">{{item.description}}</span>
                                        <div class="row align-items-center mt-4 price-holder">
                                            <div class="col-sm-6"><span class="text-md mr-4"><span class="text-muted">Price: </span><strong> ${{get2digit(item.price)}}</strong></span></div>
                                            <div class="col-sm-6 text-sm-right mt-2 mt-sm-0"><button class="btn btn-outline-secondary btn-sm" @click="viewProduct(item)"><span>Add to cart</span></button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="menu-wrapper-list" v-else>
                                <div  v-for="(item,index) in food_category.menus">
                                    <div class="menu-item menu-list-item">
                                        <div class="food-name-wrapper">
                                            <h6 class="mb-0 food-menu-name food-menu-name-list">{{item.name}}</h6>
                                            <span class="text-muted text-sm food-description food-description-list">{{item.description}}</span>
                                        </div>
                                        <div class="price-holder-list">
                                            <div class="price-wrapper-list"><span class="text-md mr-4"><span class="text-muted">Price: </span><strong> ${{get2digit(item.price)}}</strong></span></div>
                                            <div class="price-button-wrapper-list"><button class="btn btn-outline-secondary btn-sm" @click="viewProduct(item)"><span>Add to cart</span></button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
            </div>
        </div>
        <footer id="footer">
            <div class="footer-container">
                <div class="start-order-btn-wrapper">
                    <button class="order-operation-btn btn btn-primary" @click="clearCart">Start Over</button>
                </div>
                <div class="start-order-btn-wrapper">
                    <!--<router-link :to="`/checkout?restaurant=${restaurant}`">-->
                        <button class="order-operation-btn btn btn-success" :disabled="this.cart_data.length==0" @click="checkout">Checkout</button>
                    <!--</router-link>-->
                </div>
                <div class="cancel-order-btn-wrapper">
                    <button class="btn btn-danger order-operation-btn" @click="clearCart">Cancel Order</button>
                </div>
            </div>
        </footer>
    </div>


</template>


<script>
    import Slick from 'vue-slick';
    import 'slick-carousel/slick/slick.scss';
    import '../../../../public/css/themes/theme-beige.css';
    import 'bootstrap-vue/dist/bootstrap-vue.css';
    import productModal from './productModal';

    import VueScrollTo from 'vue-scrollto';


    export default{
        data(){
            return {
                location_id:-1,
                restaurant:'',
            }
        },
        computed: {
            food_menus(){
                return this.$store.getters.get_menu(this.location_id);
            },

            cart_data() {
                return this.$store.getters.get_cart_data(this.location_id);
            },
            sub_total(){
                return this.$store.getters.sub_total(this.location_id);
            },
            sub_tax(){
                return this.$store.getters.sub_tax(this.location_id);
            },
            total_price(){
                return this.$store.getters.total_price(this.location_id);
            },
            checkLogged(){
                return this.$store.getters.checkLogged;
            },
            tax(){
                return this.$store.getters.tax;
            }

        },
        methods: {
            viewProduct(item){
                console.log(item);
                this.$modal.show('product-modal',{productData:item,price:null,qty:1,selected_size_index:-1,instruction:'',order_index:-1,location_id:this.location_id});
            },
            editOrder(menu,index){
                this.$modal.show('product-modal',{productData:menu.productData,price:menu.price,qty:menu.qty,selected_size_index:menu.selected_size_index,instruction:menu.instruction,order_index:index,location_id:this.location_id});
            },
            deleteOrder(index){
                let data={};
                data.order_index=index;
                data.location_id=this.location_id;
                this.$store.commit('deleteCart',data);
            },
            clearCart(){
                this.$store.commit('clearCart');
            },
            checkout(){
                this.$router.push(`/checkout?restaurant=${this.restaurant}`);
            },
            get2digit(price){
                console.log(parseFloat(Math.round(price * 100) / 100).toFixed(2));
                return parseFloat(Math.round(price * 100) / 100).toFixed(2);
            }
        },
        beforeMount(){
            let location_name=this.$route.query.restaurant;
            this.restaurant=location_name;
            this.location_id=this.$store.getters.get_location_id(location_name);
        },
        components: {
            Slick,
            productModal,
            // VueScrollTo
        },

        mounted(){
            var stickableNavOffset=$('.my-order-content-holder').offset().top
            $(window).on('scroll', function () {
                var scrolled = $(window).scrollTop();
                let window_width=$(window).width();
                if(window_width>868){
                    if(scrolled>stickableNavOffset){
                        $('.my-order-content-holder').addClass('nav-fixed');
                    }else{
                        $('.my-order-content-holder').removeClass('nav-fixed');
                    }
                }
            });
        }
    }





</script>

<style lang="scss" scoped>
    #pick-up-page{
        font-family: "Helvetica Neue","Raleway",sans-serif;
        color: #383c40;
        font-weight: 400;

        .menu-container{
            max-width:1500px;
            padding:0 20px;
            display:grid;
            grid-template-columns: 300px 1fr;
            grid-column-gap: 20px;
            margin:0 auto;
        }
        .my-order-content-holder{
            width:100%;
            height:calc(100% - 100px);
        }

        .my-order-content-holder::-webkit-scrollbar {
            background: 0 0;
            width: 5px;
        }

        .my-order-content-holder::-webkit-scrollbar-thumb {
            border-radius: 5px;
            background: rgba(18, 14, 239, 0.38);
        }

        .category-wrapper{
            width: 100%;
            height: 300px;
            background-position: center center;
            background-size: cover;
        }

        .menu-wrapper {
            border: 1px solid #ccc;
            margin-left: 0 !important;
            margin-right: 0 !important;
            padding: 15px 10px;
            margin-bottom: 20px;
        }

        .nav-menu {
            -webkit-flex-direction: column;
            flex-direction: column;
            padding: 1.5rem 2.5rem;
            font-family: "Oswald",sans-serif;
            text-transform: uppercase;
        }
        .nav-menu li a {
            padding: 0.5rem 0;
            font-size: 18px;
            color:white;
            display: block;
            transition: all 0.2s ease-in-out;
        }
        .nav-menu li a:hover,.nav-menu li a:focus {
            text-decoration: none;
             color: #ddae71;
        }
        .my-order-content-holder-2{
            width:100%;
            height:auto;
            border:1px solid #999;
            position:relative;
        }
        .order-content-summary-wrapper{
            max-height:calc(100vh - 200px);
            overflow:scroll;
        }

        .hide{
            display:none !important;
        }
        .my-order-title{
            padding: 20px;
            width: 100%;
            text-align: center;
            color: #444;
            font-weight: bold;
            font-size:24px;
        }

        .my-order-content-holder.nav-fixed{
            position:fixed;
            top:0;
            width:300px;
            z-index:10;
            overflow-y:scroll;
            background:white;
        }


        @media screen and (max-width: 870px){
            .menu-container{
                /*display:block;*/
                grid-template-columns: 1fr;
                grid-gap:20px;
            }
            .my-order-content-holder{
                /*display:none;*/
            }
        }


        h1, h2, h3, h4{
            font-weight:lighter;
        }

        .bg-light {
            background-color: #f3f4f4 !important;
        }

        .menu-item img{
            width:100%;
        }

        .food-menu-name{
            height:35px;
        }

        .btn-sm, .btn-group-sm > .btn {
            padding: 0.7rem 1rem;
            font-size: 0.875rem;
            line-height: 1.5;
            border-radius: 0rem;
            border: 2px solid #383434;
        }

        .my-order-content{
            border-bottom: 1px solid #999;
            margin-bottom: 10px;
        }
        .my-order-content-holder-2 div:nth-last-child(2){
            border-bottom:none;
        }
        .menu-option-item-holder{
            margin-left:30px;
            margin-right:20px;
            margin-top:5px;
        }
        .price-summary-holder{
            border-top:1px solid #999;
            padding:20px;
            padding-bottom:50px;
            background:black;
            position:relative;
        }
        .sub-total-label{
            text-align:left;
        }
        .sub-total-price{
            text-align:right;
        }
        .sub-total-holder{
            display:grid;
            grid-template-columns: 1fr 1fr;
            color:white;
        }
        .total-holder{
            position:absolute;
            width:200px;
            padding:25px;
            top: 80px;
            left:50%;
            transform:translateX(-50%);
            background:#ea1b25;
            border-radius:3px;
        }
        .total-price-holder{
            display:grid;
            grid-template-columns: 1fr 1fr;
        }
        .total-label,.total-price{
            font-size:17px;
            font-weight:bold;
            color:white;
        }
        .total-label{
            text-align:left;
        }
        .total-price{
            text-align:right;
        }
        .confirm-order{
            display: block;
            margin: 0 auto;
            padding: 5px 25px;
            border-radius: 3px;
            border-width: thin;
            background: #272626;
            color: #eee;
            border-color: #272626;

        }

        .price-holder{
            margin-top:0.5rem !important;
        }


        .menu-name-content{
            display:grid;
            grid-template-columns:25px 1fr auto;
            padding:0 10px;
            font-weight:bold;
        }
        .menu-name{
            font-size:13px;
            font-weight:bold;
        }
        .menu-qty{
            font-weight:bold;
        }
        .menu-price{
            font-weight:bold;
            padding-left:10px;
            padding-right:5px;
        }
        .menu-operation-icon{
            cursor: pointer;
            color:#333;
        }
        .menu-operation-icon .fas-open{
            font-size:11px;
        }
        .food-description{
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            line-height: 15px;
            height: 30px;
        }


        .menu-item.menu-list-item {
            display: grid;
            grid-template-columns: 1fr 220px;
            border-bottom: 1px solid #ccc;
        }

        .food-name-wrapper {
            padding-right: 20px;
        }

        .menu-wrapper-list {
            border: 1px solid #ccc;
            border-top: none;
            border-bottom:none;
        }
        .food-menu-name.food-menu-name-list {
            height: auto !important;
            margin-bottom: 10px !important;
        }

        .price-holder-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-content: flex-end;
            padding-right: 0;
        }

        @media screen and (max-width:578px){
            .menu-item.menu-list-item {
                display:block;
            }
            .price-holder-list{
                max-width:180px;
                margin-top:10px;
            }
        }

        .price-button-wrapper-list{
            text-align:right;
        }
        .price-wrapper-list{
            margin-top:15px;
        }


    }
</style>
