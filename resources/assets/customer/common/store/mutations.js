import ApiService from '../../common/api.service';

let mutations = {
    initialize_store(state){
        let str_carts=localStorage.getItem('cart_data');
        let cart_data;
        if(str_carts!=null && str_carts!=='' && str_carts!=='null'){
            cart_data=JSON.parse(str_carts);
            state.cart_data=cart_data;
        }
        let str_orders=localStorage.getItem('orders');
        let orders;
        if(str_orders!=null && str_orders!=='' && str_orders!=='null'){
            orders=JSON.parse(str_orders);
            state.orders=orders;
        }
        state.initialized=true;
    },
    addToCart(state,new_cart){
        let total_cart_data=JSON.parse(JSON.stringify(state.cart_data));
        let restaurant_id=state.restaurant.id;
        let cart_data=typeof total_cart_data[restaurant_id.toString()]!='undefined' ? total_cart_data[restaurant_id.toString()] : [];
        cart_data.push(new_cart);
        total_cart_data[restaurant_id.toString()]=cart_data;
        state.cart_data=total_cart_data;
        localStorage.setItem('cart_data',JSON.stringify(total_cart_data));
    },
    updateCart(state,new_cart){
        let total_cart_data=JSON.parse(JSON.stringify(state.cart_data));
        let restaurant_id=state.restaurant.id;
        let cart_data=total_cart_data[restaurant_id.toString()];
        let order_data=new_cart.cart_data;
        let order_index=new_cart.order_index;
        let temp=-1;
        cart_data[order_index]=order_data;
        total_cart_data[restaurant_id.toString()]=cart_data;
        state.cart_data=total_cart_data;
        localStorage.setItem('cart_data',JSON.stringify(total_cart_data));
    },
    deleteCart(state,data){
        let order_index=data.order_index;
        let total_cart_data=state.cart_data;
        let restaurant_id=state.restaurant.id;
        let cart_data=total_cart_data[restaurant_id.toString()];
        cart_data.splice(order_index,1);
        total_cart_data[restaurant_id.toString()]=cart_data;
        state.cart_data=total_cart_data;
        localStorage.setItem('cart_data',JSON.stringify(total_cart_data));
    },
    clearCart(state){
        let restaurant_id=state.restaurant.id;
        let total_cart_data=state.cart_data;
        let cart_data=total_cart_data[restaurant_id.toString()];
        cart_data=[];
        total_cart_data[restaurant_id.toString()]=cart_data;
        state.cart_data=total_cart_data;
        localStorage.setItem('cart_data',JSON.stringify(total_cart_data));
    },

    updateFrontendData(state,frontendData){
        if (frontendData.food_menus)
        {
            state.food_menus=frontendData.food_menus;
        }
        if (frontendData.restaurant)
        {
            let restaurant=frontendData.restaurant;
            if(restaurant.payment_option==null || restaurant.payment_option==='null')
                restaurant.payment_option=['Before Order'];
            state.restaurant=restaurant;
        }
        if(frontendData.orders){
            let server_orders=frontendData.orders;
            let orders=state.orders;
            let restaurant=state.restaurant;
            if(typeof restaurant.id!='undefined')
                orders[restaurant.id.toString()]=server_orders;
        }
    },

    changeOrderType(state,order_type){
        let restaurant_id=state.restaurant.id;
        let total_order_info=state.order_info;
        let order_info=typeof total_order_info[restaurant_id.toString()]!='undefined' ? total_order_info[restaurant_id.toString()] : {};
        order_info.order_type=order_type;
        total_order_info[restaurant_id.toString()]=order_info;
        localStorage.setItem('order_info',JSON.stringify(total_order_info));
    },

    changeDeliveryAddress(state, data){
        let restaurant_id=state.restaurant.id;
        let total_order_info=state.order_info;
        let order_info=typeof total_order_info[restaurant_id.toString()]!='undefined' ? total_order_info[restaurant_id.toString()] : {};
        let {address, distance, price, instruction, unit, location}=data;
        order_info.delivery_address=address;
        order_info.delivery_location=location;
        order_info.delivery_distance=distance;
        order_info.delivery_instruction=instruction;
        order_info.delivery_price=price;
        order_info.delivery_unit=unit;
        total_order_info[restaurant_id.toString()]=order_info;
        localStorage.setItem('order_info',JSON.stringify(total_order_info));
    },

}
export default mutations

