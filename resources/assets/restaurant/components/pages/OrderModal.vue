<template>
    <modal name="order-modal" transition="nice-modal-fade" id="order-modal"
           :height="'auto'" :adaptive="true" :maxWidth="500" :maxHeight="600"
       >
        <div class="modal-container">
            <h3 class="order-modal-icon"><i class="ti-check"></i></h3>
            <h3 class="order-modal-title">Your order placed successfully</h3>
        </div>
    </modal>
</template>

<script>
    import vmodal from 'vue-js-modal';

    export default {
        name: "orderModal",
        data(){
            return {
                productData:{},
                selected_size_index:-1,
                selected_option_index:-1,
                size_show:false,
                qty:1,
                price:0,
                cart_enabled:true,
                instruction:'',
                order_index:-1, // if this is greater than -1, then it means the update of existing ith cart data
            }
        },
        components:{
            vmodal
        },
    }
</script>

<style lang="scss">
    #order-modal{
        overflow-y: scroll;
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
            background: #bbb;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #aaa;
        }

        .v--modal-background-click{
            background:#1b1919a6;
        }

        color: #383c40;
        font-family: "Helvetica Neue","Raleway",sans-serif;
        font-weight: 400;
        line-height: 1.6;

        .v--modal{
            /*top:50px !important;*/
            /*overflow:visible !important;*/
            /*background-color: #f7f7f7;*/
            background:none;
            border-radius:25px;
        }

        .modal-container{
            background:#fff;
            width:100%;
            height:300px;
            padding:20px;
            text-align:center;
            vertical-align:middle;
            border-radius:25px;
        }

        .order-modal-icon {
            margin-top:50px;
            margin-bottom:20px;
            i{
                font-size:40px;
                background:#00CF92;
                color:#fff;
                border:2px solid #00CF92;
                padding:15px;
                border-radius:50px;
            }
        }

        .order-modal-title{
            margin-top:50px;
        }

    }
</style>
