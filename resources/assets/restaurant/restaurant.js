window.axios = require('axios')
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store.js'
import VueAnalytics from 'vue-analytics'
import ApiService from "./common/api.service";
import _ from 'lodash';

import VModal from 'vue-js-modal';
Vue.use(VModal, { dynamic: true, dynamicDefaults: { clickToClose: false } });
import orderModal from 'restaurant_pages/OrderModal.vue';

window.$ = window.jQuery = require('jquery');

// Google Analytics
const google_analytics_key = store.state.google_analytics_key
if (google_analytics_key && google_analytics_key.length) {
    Vue.use(VueAnalytics, {
        id:google_analytics_key,
        router,
        checkDuplicatedScript: true,
        autoTracking: {
            pageviewTemplate(route) {
                return {
                    page: 'default/' + route.path
                }
            }
        }
    })

}



// Remove the productionTip in dev tool console
Vue.config.productionTip = false

Vue.use(_);
ApiService.init();
new Vue({
    el: '#app',
    router,
    store,
    components:{
        orderModal
    },
    render: h => h(App)
})
