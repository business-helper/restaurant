<template>
    <modal name="product-modal" transition="nice-modal-fade" id="product-modal"
           :height="'auto'" :adaptive="true" :maxWidth="500" :maxHeight="600"
           @before-open="beforeOpen" @before-close="beforeClose">
        <div class="modal-header modal-header-lg dark bg-dark">
            <div class="bg-image" :style="{'background-image': `url('${getHeaderImage()}')`}"></div>
            <h4 class="modal-title">Specify your dish</h4>
            <button type="button" class="close" @click="closeByEvent" id="product-modal-close"><i class="ti-close"></i></button>
        </div>
        <div class="modal-product-details">
            <div class="row align-items-center">
                <div class="col-9">
                    <h6 class="mb-0 menu-name">{{productData.name}}</h6>
                    <span class="text-muted">{{productData.description}}</span>
                </div>
                <div class="col-3 text-lg text-right">${{current_price}}</div>
            </div>
        </div>
        <div class="modal-body panel-details-container">
            <div class="panel-details" v-if="size_show">
                <h5 class="panel-details-title">
                    <a href="#panelDetailsSize" data-toggle="collapse">Size</a>
                </h5>
                <div id="panelDetailsSize" class="collapse show">
                    <div class="panel-details-content">
                        <div v-for="(item,index) in productData.size" :class="{'form-group':true,'selected':selected_size_index==index}">
                            <label class="custom-control custom-radio">
                                <input name="radio_size" type="radio" class="custom-control-input" :value="index" v-model="selected_size_index">
                                <span class="custom-control-indicator">
                                    <svg class="icon" x="0px" y="0px" viewBox="0 0 32 32"><path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="square" stroke-miterlimit="10" d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11"></path></svg>
                                </span>
                                <div class="item-holder">
                                    <h6 class="option-item-name">{{item.name}}</h6>
                                    <div  class="item-price-holder">
                                        <h6 class="option-item-price">{{item.price>0 ? `$ ${item.price}` : ""}}</h6>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="panel-details" v-if="productData.has_option">
                <h5 class="panel-details-title">
                    <a href="#panelDetailsAdditions" data-toggle="collapse">Options</a>
                </h5>
                <div id="panelDetailsAdditions" class="collapse show">
                    <div v-for="(option_tag,index) in productData.option_tags" :class="{'panel-details-content':true,'hide-option':index>enabledOptionIndex+1}">
                        <h5 class="option-title">{{option_tag.title}}<span class="additional-option-title">{{getAdditionalTitle(option_tag)}}</span></h5>
                        <span :class="{'option-tag-exceed-warning':true,'show':option_tag.is_error && !cart_enabled}">{{option_tag.error_message}}</span>
                        <div :class="{'form-group':true,'validation_error':option_tag.is_error}" v-for="(option_item,item_index) in option_tag.items">
                            <label class="custom-control custom-checkbox" v-if="checkOptiontagType(option_tag)" v-on:click.stop.prevent="itemCheckedChange(option_tag,option_item)">
                                <input type="checkbox" class="custom-control-input" v-model="option_item.checked">
                                <span class="custom-control-indicator">
                                    <svg class="icon" x="0px" y="0px" viewBox="0 0 32 32"><path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="square" stroke-miterlimit="10" d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11"></path></svg>
                                </span>
                                <div class="item-holder">
                                    <h6 class="option-item-name">{{option_item.name}}</h6>
                                    <div  class="item-price-holder">
                                        <h6 class="option-item-price" v-if="option_item.count<=1">{{option_item.price>0 ? `+ ${option_item.price}` : ""}}</h6>
                                        <h6 class="option-item-price" style="margin-right:10px;" v-if="option_item.count>1">{{`x ${option_item.count}`}}</h6>
                                        <div class="item_plus_minus_button_holder">
                                            <span  :class="{'item_plus_minus_button':true,'show':option_item.count>1 && option_item.checked}" v-on:click.stop.prevent="decreaseItemNumber(option_tag,option_item)"><i class="ti ti-minus"></i></span>
                                            <span  :class="{'item_plus_minus_button':true,'show':option_item.checked}" v-on:click.stop.prevent="increaseItemNumber(option_tag,option_item)"><i class="ti ti-plus"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </label>

                            <label class="custom-control custom-radio" v-else>
                                <input type="radio" :name="`'option-tag-'${index}`" class="custom-control-input" :value="item_index" v-model="option_tag.selected_item_index" @change="selectedItemChange(option_tag,item_index)">
                                <span class="custom-control-indicator">
                                    <svg class="icon" x="0px" y="0px" viewBox="0 0 32 32"><path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="square" stroke-miterlimit="10" d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11"></path></svg>
                                </span>
                                <div class="item-holder">
                                    <h6 class="option-item-name">{{option_item.name}}</h6>
                                    <h6 class="option-item-price" v-if="option_item.count<=1">{{option_item.price>0 ? `+ ${option_item.price}` : ""}}</h6>
                                    <h6 class="option-item-price" v-if="option_item.count>1">{{`x ${option_item.count}`}}</h6>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="panel-details">
                <h5 class="panel-details-title">
                    <a href="#panelDetailsOther" data-toggle="collapse">Special Instructions</a>
                </h5>
                <div id="panelDetailsOther" class="collapse show">
                    <textarea cols="30" rows="4" class="form-control" placeholder="Put this any other informations..." v-model="instruction"></textarea>
                </div>
            </div>
            <div :class="{'quantity-holder':true,'validation_error':parseInt(productData.min_qty)>parseInt(qty)}">
                <label class="qty-label">Quantity {{parseInt(productData.min_qty)>1 ? `(Minimum ${productData.min_qty} quantities required)` : ''}}</label>
                <input type="number" min="1" class="qty-input" v-model="qty">
                <div class="qty_plus_minus_button_holder">
                    <span :class="{'qty-input-button':true,'show':qty>1}" @click="decreaseQty"><i class="ti ti-minus"></i></span>
                    <span :class="{'qty-input-button':true,'show':true}" @click="increaseQty"><i class="ti ti-plus"></i></span>
                </div>
            </div>
        </div>
        <div class="add-to-cart-button-holder">
            <button type="button" class="modal-btn btn btn-secondary btn-block btn-lg" data-dismiss="modal" id="add-to-cart-button" :disabled="!cart_enabled" @click="addToCart()"><span>Add to Cart</span></button>
        </div>
    </modal>
</template>

<script>
    import vmodal from 'vue-js-modal';
    import '../../../../public/plugins/bootstrap/scss/bootstrap.scss';
    import '../../../../public/css/themes/theme-beige.min.css';

    export default {
        name: "productModal",
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
        computed:{
            current_price(){
                let price=0;
                if (this.productData){
                    let qty=parseFloat(this.qty);
                        price=parseFloat(this.productData.price);
                    if (this.selected_size_index>-1)
                        price=parseFloat(this.productData.size[this.selected_size_index].price);

                    let option_tags=this.productData.option_tags;
                    if(option_tags){
                        option_tags.forEach(function(option_tag){
                            if(option_tag.items){
                                option_tag.items.forEach(function(option_item){
                                    if(option_item.checked){
                                        price+=parseFloat(option_item.price)*parseFloat(option_item.count);
                                    }
                                });
                            }
                        });
                        price*=qty;
                        price=parseFloat(price.toFixed(2))
                    }

                }

                return price;
            },
            enabledOptionIndex(){
                let option_index=-1;
                let option_tags=this.productData.option_tags;
                for(let i=0;i<option_tags.length;i++){
                    let min_count=this.getOptionTagMinCount(option_tags[i]);
                    let max_count=this.getOptionTagMaxCount(option_tags[i]);
                    if(max_count==null)
                        max_count=10000;
                    if (option_tags[i].count>=min_count && option_tags[i].count<=max_count){
                        option_index=i;
                    }
                    else{
                        break;
                    }
                }
                this.checkValidation();
                return option_index;
            }
        },

        methods:{
            getHeaderImage(){
                let background=this.productData.image;
                if (this.selected_size_index>=0)
                {
                    if (this.productData['size'][this.selected_size_index]['image'])
                        background=this.productData['size'][this.selected_size_index]['image'];
                }
                return background;
            },
            getAdditionalTitle(option_tag){
                let additional_title='';
                if(option_tag.size.length>0){
                    if (this.selected_size_index>=0){
                        if (option_tag.size[this.selected_size_index]['min']>0 && option_tag.size[this.selected_size_index]['max']>0){
                            if (option_tag.size[this.selected_size_index]['min']  == option_tag.size[this.selected_size_index]['max']){
                                additional_title=`(${option_tag.size[this.selected_size_index]['min']} items, ${this.productData.size[this.selected_size_index]['name']} )`;
                            }else{
                                additional_title=`(${option_tag.size[this.selected_size_index]['min']} ~ ${option_tag.size[this.selected_size_index]['max']} items, ${this.productData.size[this.selected_size_index]['name']} )`;
                            }
                        }
                    }
                }else{
                    if(option_tag.min>0){
                        if(option_tag.min==option_tag.max)
                            additional_title=`(${option_tag.min} items)`;
                        if(option_tag.min<option_tag.max)
                            additional_title=`(${option_tag.min} ~ ${option_tag.max} items)`;
                    }
                    else{
                        if(option_tag.max>0){
                            additional_title=`(up to ${option_tag.max} items)`;
                        }
                    }
                }
                return additional_title;
            },
            checkOptiontagType(option_tag){
                let multiple_selection=false;
                if(option_tag.size.length>1){
                    if (option_tag.size[this.selected_size_index]){
                        if (option_tag.size[this.selected_size_index]['max']>1 || option_tag.size[this.selected_size_index]['max']==null)
                            multiple_selection=true;
                    }
                }else{
                    if (option_tag.max>1 || option_tag.max==null)
                        multiple_selection=true;
                }
                // if(option_tag.items.length==1 && option_tag.min==0)
                //     multiple_selection=true;
                return multiple_selection;
            },
            getMenuPrice(){
                let menu_price=this.productData.price;
                if (this.selected_size_index>-1)
                    menu_price=this.productData.size[this.selected_size_index].price;
                return menu_price;
            },
            itemCheckedChange(option_tag,option_item){
                option_item.checked=!option_item.checked;
                if (!option_item.checked){
                    option_tag.count-=option_item.count;
                    option_item.count=0;
                }
                else{
                    option_item.count=1;
                    option_tag.count+=1;
                }
                let min_count=this.getOptionTagMinCount(option_tag);
                let max_count=this.getOptionTagMaxCount(option_tag);
                if(max_count==null)
                    max_count=10000;

                if (option_tag.count>=min_count && option_tag.count<=max_count){
                    option_tag.is_error=false;
                }else{
                    option_tag.is_error=true;
                }
                if(!this.cart_enabled)
                    this.checkValidation();

            },
            decreaseItemNumber(option_tag,option_item){
                option_item.count--;
                option_tag.count--;
                let min_count=this.getOptionTagMinCount(option_tag);
                let max_count=this.getOptionTagMaxCount(option_tag);
                if(max_count==null)
                    max_count=1000;

                if (option_tag.count>=min_count && option_tag.count<=max_count){
                    option_tag.is_error=false;
                }else{
                    option_tag.is_error=true;
                }
                if(!this.cart_enabled)
                    this.checkValidation();
            },
            getOptionTagMaxCount(option_tag){
                let max_count=option_tag.max;
                if (option_tag.size.length>0){
                    if (this.selected_size_index>-1)
                        max_count=option_tag.size[this.selected_size_index]['max'];
                }
                if(max_count==null)
                    max_count=1000;
                return max_count;
            },
            getOptionTagMinCount(option_tag){
                let min_count=option_tag.min;
                if (option_tag.size.length>0){
                    if (this.selected_size_index>-1)
                        min_count=option_tag.size[this.selected_size_index]['min'];
                }
                if(min_count==null)
                    min_count=0;
                return min_count;
            },
            increaseItemNumber(option_tag,option_item){
                option_item.count++;
                option_tag.count++;
                let min_count=this.getOptionTagMinCount(option_tag);
                let max_count=this.getOptionTagMaxCount(option_tag);

                if (option_tag.count>=min_count && option_tag.count<=max_count){
                    option_tag.is_error=false;
                }else{
                    option_tag.is_error=true;
                }
                if(!this.cart_enabled)
                    this.checkValidation();
            },
            increaseQty(){
                this.qty++;
                this.checkValidation();
            },
            decreaseQty(){
                if(this.qty>1){
                    this.qty--;
                    this.checkValidation();
                }

            },
            selectedItemChange(option_tag,item_index){
                let items=option_tag.items;
                let previous_selected_index=-1;
                for(let i=0;i<items.length;i++){
                    if (items[i].checked){  // if previously checked
                        previous_selected_index=i;
                        items[i].count=0;
                        items[i].checked=false;
                        break;
                    }
                }
                option_tag.count=1;
                option_tag.items[item_index].checked=true;
                option_tag.items[item_index].count=1;
                let min_count=this.getOptionTagMinCount(option_tag);
                let max_count=this.getOptionTagMaxCount(option_tag);

                if (option_tag.count>=min_count && option_tag.count<=max_count){
                    option_tag.is_error=false;
                }else{
                    option_tag.is_error=true;
                }
                if(!this.cart_enabled)
                    this.checkValidation();

            },

            checkValidation(){
                let validation=true;
                let option_tags=this.productData.option_tags;
                for(let i=0;i<option_tags.length;i++){
                    let min_count=this.getOptionTagMinCount(option_tags[i]);
                    let max_count=this.getOptionTagMaxCount(option_tags[i]);
                    if(max_count===null)
                        max_count=10000;
                    if (option_tags[i].count<min_count){
                        option_tags[i].error_message=`At least ${min_count} has to be selected`;
                        option_tags[i].is_error=true;
                        validation=false;
                    }
                    if (option_tags[i].count>max_count){
                        option_tags[i].error_message=`At most ${max_count} can be selected`;
                        option_tags[i].is_error=true;
                        validation=false;
                    }
                }
                if(this.qty<this.productData.min_qty)
                    validation=false;
                this.cart_enabled=validation;
            },

            addToCart(){
                this.checkValidation();
                if (this.cart_enabled){
                    let data={};
                    data.productData=this.productData;
                    data.price=this.current_price;
                    data.selected_size_index=this.selected_size_index;
                    data.qty=this.qty;
                    data.instruction=this.instruction;
                    if(this.order_index==-1)
                        this.$store.commit('addToCart',data);
                    else{
                        let data1={};
                        data1.order_index=this.order_index;
                        data1.cart_data=data;
                        this.$store.commit('updateCart',data1);
                    }
                    this.closeByEvent();
                }
            },
            closeByEvent(){
                this.$modal.hide('product-modal');
                let body = document.body;
                $(body).removeClass('modal-opened');
            },

            beforeOpen(event){
                this.productData=JSON.parse(JSON.stringify(event.params.productData));
                if (this.productData.size.length>1)
                    this.size_show=true;
                if (event.params.selected_size_index>0)
                {
                    this.selected_size_index=event.params.selected_size_index;

                }else{
                    if(this.productData.size.length>0)
                        this.selected_size_index=0;
                }

                if(event.params.price){
                    this.price=event.params.price;
                }else{
                    if (this.selected_size_index>-1)
                        this.price=this.productData.size[this.selected_size_index].price;
                    else
                        this.price=this.productData.price;
                }
                this.qty=event.params.qty;
                this.instruction=event.params.instruction;
                this.order_index=event.params.order_index;

                let body = document.body;
                $(body).addClass('modal-opened');
            },
            beforeClose(){
                let body = document.body;
                $(body).removeClass('modal-opened');
                this.size_show=false;
                this.selected_size_index=-1;
                this.qty=1;
                this.cart_enabled=true;
                this.productData={};
                this.instruction='';
                this.order_index=-1;
            }
        },
        watch:{
            selected_size_index(new_value,old_value){
                if (new_value!=old_value){
                    if (old_value>-1 && new_value>-1){
                        let option_tags=this.productData.option_tags;
                        for (let i=0;i<option_tags.length;i++){
                            if(option_tags[i].size[new_value].max==1 && option_tags[i].size[old_value].max>1){
                                option_tags[i].count=0;
                                option_tags[i].selected_item_index=-1;
                                let option_items=option_tags[i].items;
                                for (let j=0;j<option_items.length;j++){
                                    if(option_items[j].checked){
                                        option_items[j].checked=false;
                                        option_items[j].count=0;
                                    }
                                }
                            }
                        }
                    }
                }
            },
        }
    }
</script>

<style lang="scss">
    #product-modal{
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

        color: #383c40;
        font-family: "Helvetica Neue","Raleway",sans-serif;
        font-weight: 400;
        line-height: 1.6;

        .close{
            font-size:1.2rem;
            font-weight: 400;
        }

        .modal-title {
            margin-bottom: 0;
            line-height: 1.5;
        }
        .panel-details .panel-details-title {
            margin: 0;
            padding: 1.25rem 0;
        }

        .v--modal{
            top:50px !important;
            overflow:visible !important;
            background-color: #f7f7f7;
        }

        .modal-body.panel-details-container{
            max-height:400px;
            overflow-y:scroll;
            margin-right:5px;
        }

        .custom-control{
            padding-left:2.3rem;
            margin-bottom:0;
        }
        h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 {
            margin-top: 0;
            margin-bottom: 2rem;
            font-weight: 200;
        }
        h5, .h5 {
            font-size: 1.4rem;
            font-weight: 400;
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

        .custom-control-input:checked~.custom-control-indicator {
            color: #fff;
        }
        .custom-radio .custom-control-input:checked~.custom-control-indicator {
            background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E");
        }

        .btn-secondary {
            border-color: #25282a;
            background-color: #25282a;
            color: #fff;
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

        .menu-name{
            font-weight: bold;
        }

        .add-to-cart-button-holder{
            padding:20px 0;
            box-shadow: 0 2px 10px rgba(0,0,0,.5);
            margin-top:10px;

        }

        #add-to-cart-button{
            width: 90%;
            margin: 0 auto;
            border-radius: 10px;
            /*background-color: #f08b18;*/
            background-color: #222;
            border: none;
            margin-top:10px;
        }
        #product-modal-close{
            opacity: 1;
            top: -8px;
            right: -5px;
            background: white;
            color: black;
            border: 1px solid #333;
            border-radius: 100px;
            padding: 10px;
            font-size: 15px;
            width: 40px;
            height: 40px;
            text-align: center;
        }
        .modal-product-details{
            border-bottom: 1px solid #ccc;
            margin-bottom: 10px;
        }

        .form-group {
            background: white;
            padding: 5px 1px;
            border: 1px solid #b9b5b5;
            margin-top: 0;
            margin-bottom: 0;
            border-bottom: none;
            padding: 10px;
            position:relative;
            opacity: 1;
        }
        .panel-details-content .form-group:last-child{
            border-bottom: 1px solid #b9b5b5;
        }

        @media screen and (max-width:500px){
            .v--modal{
                top:40px !important;
                width:calc(100vw - 20px) !important;
                left:10px !important;
            }
        }

        .form-group.validation_error{
            background-color: #ffeded;
            border-left:1px solid #ef4e4b;
            border-right:1px solid #ef4e4b;
        }
        .form-group.validation_error:first-of-type{
            border-top:1px solid #ef4e4b;
        }
        .form-group.validation_error:last-child{
            border-bottom:1px solid #ef4e4b;
        }
        .form-group.selected{
            background:#e1eef5;
        }
        .form-group{
            padding:0px 0 0px 10px;
        }
        .custom-checkbox .custom-control-input+.custom-control-indicator,.custom-radio .custom-control-input+.custom-control-indicator{
            top:10px;
        }

        .option-title{
            margin-left: -10px;
            font-size: 16px;
            margin-bottom: 10px;
        }
        .option-tag-exceed-warning{
            display: block;
            margin-top: -10px;
            margin-bottom: 10px;
            color: #ea0909;
            font-size: 14px;
            display:none;
        }
        .option-tag-exceed-warning.show{
            display:block;
        }
        .item-holder{
            display:grid;
            grid-template-columns: 1fr 1fr;
            padding-top:10px;
            padding-bottom:10px;
        }
        .option-item-name,.option-item-price{
            margin-bottom:0;
        }
        .option-item-name{
            color:#333;
            font-weight:normal;
        }
        .item-price-holder{
            display:grid;
            grid-template-columns:1fr auto;
            margin-right:-10px;
        }
        .option-item-price{
            text-align:right;
            font-family: Arial,Helvetica,sans-serif;
        }
        .item_plus_minus_button{
            background: #716d6d;
            color: white;
            padding: 5px 6px;
            display:none;
        }
        .item_plus_minus_button.show{
            display:inline;
        }
        .additional-option-title{
            font-size: 15px;
            margin-left: 10px;
            color: #777575;
        }
        .quantity-holder{
            margin-top:10px;
            position:relative;
        }
        .qty-label{
            display: block;
        }
        .qty-input{
            display: block;
            width: 100%;
            padding: 3px 10px;
            border: 1px solid #aaa;
            outline: none;
            border-radius:3px;
            font-size:25px;
        }
        .qty_plus_minus_button_holder{
            width: fit-content;
            position: absolute;
            top: 40px;
            right: 10px;
        }
        .qty-input-button {
            background: #666;
            color: white;
            padding: 10px;
            border-radius: 3px;
            cursor:pointer;
            visibility: hidden;
        }
        .qty-input-button.show {
            visibility: visible;
        }

        .qty-input::-webkit-inner-spin-button,
        .qty-input::-webkit-outer-spin-button {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            margin: 0;
        }

        .hide-option div{
            display:none;
        }
        .hide-option .option-title {
            color: #888 !important;
        }
        .hide-option .option-tag-exceed-warning.show {
            display: none;
        }

        .quantity-holder.validation_error{
            .qty-label{
                color: #ef4e4b;
            }
        }
    }
</style>
