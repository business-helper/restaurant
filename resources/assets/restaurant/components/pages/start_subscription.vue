<template>
    <!--<b-card header="Site Logo and title" header-tag="h4" class="bg-success-card">-->
    <div id="subscription-checkout-page">
        <vue-form :state="formstate" @submit.prevent="onSubmit">
            <div class="card-container mb-3" v-if="stripe!=''">
                <card-number class='stripe-element card-number'
                     ref='cardNumber'
                     :stripe='stripe'
                     :options='options'
                         @change='number = $event.complete'
                />
                <card-expiry class='stripe-element card-expiry'
                     ref='cardExpiry'
                     :stripe='stripe'
                     :options='options'
                     @change='expiry = $event.complete'
                />
                <card-cvc class='stripe-element card-cvc'
                      ref='cardCvc'
                      :stripe='stripe'
                      :options='options'
                      @change='cvc = $event.complete'
                />
                <div class="clearfix"></div>
                <div class="text-danger" v-if="!complete && formstate.$submitted">Card data is incorrect</div>
            </div>
            <div class="text-center">
                <VueLoadingButton type="submit" aria-label='Order now!' class="btn btn-primary btn-lg btn-order" :loading="button_loading">
                    <span>Order now!</span>
                </VueLoadingButton>
            </div>
        </vue-form>
        <b-modal id="bv-success-modal" centered  hide-footer hide-header hide-header-close>
            <div class="modal-container">
                <h3 class="order-modal-icon">
                    <i class="ti-check"></i></h3>
                <h3 class="order-modal-title">Your order placed successfully</h3>
            </div>
        </b-modal>

    </div>
    <!--</b-card>-->
</template>
<script>
    import Vue from 'vue';
    import VueForm from "vue-form";
    import options from "restaurant_src/validations/validations";
    import ApiService from "restaurant_resources/common/api.service";

    import { createPaymentMethod, createToken } from 'vue-stripe-elements-plus';
    import { CardNumber, CardExpiry, CardCvc, Card} from 'vue-stripe-elements-plus';

    import VueLoadingButton from 'vue-loading-button';
    Vue.use(VueForm, options);
    export default {
        name: "EditSlider",
        props: {},
        data() {
            return {
                model:{
                },
                success_alert_show:false,
                options: {
                    style: {
                        base: {
                            color: '#303238',
                            fontSize: '16px',
                            fontFamily: '"Open Sans", sans-serif',
                            fontSmoothing: 'antialiased',
                            '::placeholder': {
                                color: '#CFD7DF',
                            },
                        },
                        invalid: {
                            color: '#e5424d',
                            ':focus': {
                                color: '#303238',
                            },
                        },
                        padding:'5px'
                    },
                    hidePostalCode: true,
                },
                complete: false,
                number: false,
                expiry: false,
                cvc: false,
                button_loading:false,
                button_styled:true,
                stripe:'',
                formstate:{},
            }
        },
        methods: {
            update () {
                this.complete = this.number && this.expiry && this.cvc
                if (this.number) {
                    if (!this.expiry) {
                        this.$refs.cardExpiry.focus()
                    } else if (!this.cvc) {
                        this.$refs.cardCvc.focus()
                    }
                } else if (this.expiry) {
                    if (!this.cvc) {
                        this.$refs.cardCvc.focus()
                    } else if (!this.number) {
                        this.$refs.cardNumber.focus()
                    }
                }
            },
            updateCard(event){
                console.log(event);

            },
            onSubmit(){
                if (this.formstate.$invalid || !this.complete)
                {
                    return;
                }
                if(!this.button_loading){
                    this.button_loading=true;
                    createToken().then(
                        data=>{
                            let token=data.token.id;
                            createPaymentMethod({
                                type:'card',
                                card: {token: token}
                            })
                                .then(
                                    data1=>{
                                        let paymentMethod=data1.paymentMethod;
                                        let plan_id=this.$route.params.plan_id;
                                        ApiService.post('restaurant/create_customer', {
                                            payment_id:paymentMethod.id,
                                            plan_id:plan_id,
                                        }).
                                        then(
                                            result2 => {
                                                let customer_id=result2.data;
                                                createToken().then(
                                                    data2=>{
                                                        token=data2.token.id;
                                                        ApiService.post('restaurant/create_subscription', {
                                                            payment_id:paymentMethod.id,
                                                            plan_id:plan_id,
                                                            customer_id:customer_id,
                                                            token:token
                                                        }).
                                                        then(
                                                            result3=>{
                                                                this.$bvModal.show('bv-success-modal')
                                                                setTimeout(()=>{
                                                                    this.$bvModal.hide('bv-success-modal');
                                                                    this.$router.push(`/subscription`);
                                                                },3000);
                                                                this.button_loading=false;
                                                            },
                                                            error3=>{
                                                                this.button_loading=false;
                                                            }
                                                        )
                                                    },
                                                    error=>{
                                                        console.log(error);
                                                    }
                                                )
                                            },
                                            error2 => {
                                                console.log(error2.response);
                                                this.button_loading=false;
                                            }
                                        );
                                    },
                                    error1=>{
                                        console.log(error1);
                                    }
                                )
                        },
                        error=>{
                            this.button_loading=false;

                        }
                    )
                }
            }
        },
        watch: {
            number () { this.update() },
            expiry () { this.update() },
            cvc () { this.update() },
        },
        mounted(){
            // this.$bvModal.show('bv-success-modal')
        },
        beforeMount() {
            this.model.slider_id=this.$route.params.slider_id;
            ApiService.get(`restaurant/get_admin_stripe_key`).then(response => {
                    let data=response.data;
                    this.stripe=data;
                },error=>{
                    console.log(error.response);
                }
            )
            .catch(function (error) {
                console.log(error);
            });
        },
        components:{
            'card-number':CardNumber,
            'card-expiry':CardExpiry,
            'card-cvc':CardCvc,
            VueLoadingButton
        }
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
    #subscription-checkout-page{
        width: 100%;
        max-width:800px;
        background: white;
        padding: 20px 30px;

        .start-btn{
            width:100px;
        }

        .card-container{


        }

        .btn-order{
            position:relative;
            .spinner{
                width:20px;
                height:20px;
            }
        }

        .stripe-element {
            border: 1px solid #888;
            padding: 10px;
        }
        .stripe-element.card-number{
            width: 100%;
        }
        .stripe-element.card-expiry,.stripe-element.card-cvc{
            float: left;
            width: 50%;
            margin-top: 10px;
        }
        .stripe-element.card-cvc{
            border-left:none;
        }
    }
    #bv-success-modal{
        text-align: center;
        .order-modal-title{
            color: #48a03e;
            font-size:35px;
        }
        .modal-body{
            padding: 80px;

        }
    }
</style>

