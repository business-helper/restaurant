import mutations from "./mutations";
import ApiService from '../../common/api.service';

let actions = {
    getFrontendData(store,restaurant_name){
        ApiService.post(`customer/get_frontend_data?restaurant_name=${restaurant_name}`,
            {restaurant_name:restaurant_name})
            .then(
                response=>{
                    store.commit('updateFrontendData', response.data)
                },
                error=>{
                    console.log(error.response);
                }
            );
    },
}
export default actions
