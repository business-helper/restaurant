<template>

</template>
<script>
    import ApiService from '../common/api.service';

    export default{
        data(){
            return {

            }
        },
        beforeMount(){
            let that=this;
            ApiService.get("customer/get_one_restaurant").then(
                data=>{
                    that.$router.push(`/pick-up?restaurant=${data.data.restaurant_name}`)
                },
                error=>{
                    console.log(error);
                }
            )
        },
        computed:{

        },
        methods: {


        },
    }

</script>


