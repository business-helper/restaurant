<template>
    <!--<b-card header="Site Logo and title" header-tag="h4" class="bg-success-card">-->
    <div id="products-page">
            <div :class="{'alert alert-success site-setting-alert':true,'show':success_alert_show}">Site Setting successfully updated</div>
            <button class="btn btn-secondary add-product-btn" @click.stop.prevent="addproduct">Add Product</button>
            <div class="clearfix"></div>
        <template v-for="(product,index) in model.products">
            <vue-form class="form-horizontal form-validation" :state="formstate[index]" @submit.prevent="onSubmit(index)">
                <div class="product-holder">
                    <div class="product-close">
                        <i class="fas fa-close" @click="closeproduct(index)"></i>
                    </div>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" v-model="product.name" name="name" autofocus class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Description (optional)</label>
                        <textarea type="text" v-model="product.description" name="description" autofocus class="form-control"></textarea>
                    </div>
                    <button class="btn btn-success submit-button" type="submit">{{product.id==0 ? 'Submit' : 'Update'}}</button>
                </div>
            </vue-form>
        </template>
        <div class="clearfix"></div>
    </div>
    <!--</b-card>-->
</template>
<script>
    import Vue from 'vue';
    import VueForm from "vue-form";
    import options from "src/validations/validations.js";
    import ApiService from "resources/common/api.service";

    import ClipperBasic from "vuejs-clipper/src/components/clipper-basic";
    import 'vuejs-clipper/dist/vuejs-clipper.css';
    Vue.use(VueForm, options);

    export default {
        name: "Subscription Plan",
        props: {},
        components: {
            ClipperBasic,
        },
        data() {
            return {
                model:{
                    products:[
                        {
                            id:0,
                            name:'',
                            description:''
                        }
                    ]
                },
                formstate: [
                    {}
                ],
                success_alert_show:false,
            }
        },
        methods: {
            addproduct(){
                let temp={};
                temp.name='';
                temp.is_edit=false;
                this.model.products.push(temp);
                let formstate=this.formstate;
                formstate.push({});
                this.formstate=formstate;
            },
            closeproduct(index){
                this.model.products.splice(index,1);
            },
            onSubmit(index){
                if (this.formstate.$invalid)
                    return;
                let product=this.model.products[index];
                ApiService.post('admin/add_product', product).
                    then(
                        result => {
                            this.success_alert_show=true;
                            setTimeout(()=>{
                                this.success_alert_show=false;
                            },2000)
                        },
                        error => {
                            console.log(error.response);
                        }
                    );
            }
        },
        beforeMount() {
            this.model.slider_id=this.$route.params.slider_id;
            ApiService.get(`admin/get_product`).then(
                response => {
                    let data=response.data;
                    if(data.length!=0){
                        let products=[];
                        data.map(item=>{
                            products.push(
                                {
                                    name:item.name,
                                    id:item.id,
                                    description:item.description
                                }
                            )

                        })
                        this.model.products=products;
                    }
                },error=>{
                    console.log(error.response);
                }
            )
            .catch(function (error) {
                console.log(error);
            });
        },
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
    #products-page{
        width: 100%;
        background: white;
        padding: 20px 30px;
        .product-holder {
            width: 300px;
            margin-top: 20px;
            background: #eee;
            padding: 20px;
            border: 1px solid #555;
            border-radius: 3px;
            float: left;
            margin-right: 20px;
            box-shadow: 5px 5px 2px 0px rgba(0,0,0,0.2);
        }
        .product-close {
            font-size: 20px;
            margin-top: -10px;
            text-align: right;
        }
        .product-close i{
            cursor: pointer;
        }
        .add-product-btn{
            display: block;
            margin-top: 20px;
            float: right;
        }
        .logo-image-origin {
            max-width:200px;
            max-height:200px;
        }
        .logo-image-part-holder .placeholder{
            text-align: center;
            padding: 20px;
            font-size: 20px;
            background-color: lightgray;
        }
        .uploadButton {
            width: fit-content;
            cursor: pointer;
            margin-bottom:10px;
        }
        .uploadButton img {
            width: auto;
            height: 40px;
            margin: 0 auto;
        }
        .preview-title {
            font-size: 20px;
            margin-top: 30px;
            margin-bottom:10px;
        }
        .preview-holder {
            margin-left: 40px;
        }
        .logo-page-title{
            font-size:18px;
            margin-bottom:10px;
            font-weight: bold;
        }
        .site-title-input{
            padding:5px 10px;
            min-width:250px;
        }
        .submit-button{
            display:block;
            margin-top:20px;
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
    }
</style>

