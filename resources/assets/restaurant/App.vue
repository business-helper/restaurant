<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
import Vue from "vue";
import BootstrapVue from 'bootstrap-vue';
import ToggleButton from 'vue-js-toggle-button'
import VueRx from 'vue-rx'
Vue.use(VueRx)
import VueCollapse from 'vue2-collapse'
Vue.use(VueCollapse);


import VuejsClipper from 'vuejs-clipper';
Vue.use(VuejsClipper ,{
    components: {
        clipperBasic: true,
        clipperPreview: true,
        clipperUpload:true,
        clipperFixed:true,
    }
})
Vue.use(ToggleButton)
Vue.use(BootstrapVue);
export default {
    name: 'app'
}
</script>
<style lang="scss" src="resources/sass/bootstrap/bootstrap.scss"></style>
<style src="font-awesome/css/font-awesome.css"></style>
<style src="bootstrap-vue/dist/bootstrap-vue.css"></style>
