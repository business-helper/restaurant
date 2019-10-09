(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/dashboard.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/dashboard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_echarts_v3_src_full_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-echarts-v3/src/full.js */ "./node_modules/vue-echarts-v3/src/full.js");
/* harmony import */ var zrender_lib_vml_vml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zrender/lib/vml/vml */ "./node_modules/zrender/lib/vml/vml.js");
/* harmony import */ var zrender_lib_vml_vml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zrender_lib_vml_vml__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-awesome-swiper */ "./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_count_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-count-to */ "./node_modules/vue-count-to/dist/vue-count-to.min.js");
/* harmony import */ var vue_count_to__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_count_to__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_plugins_DataTable_DataTable_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/plugins/DataTable/DataTable.vue */ "./resources/assets/admin/components/plugins/DataTable/DataTable.vue");
/* harmony import */ var components_plugins_scroll_vScroll_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/plugins/scroll/vScroll.vue */ "./resources/assets/admin/components/plugins/scroll/vScroll.vue");
/* harmony import */ var components_widgets_portfolio_portfolio_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/widgets/portfolio/portfolio.vue */ "./resources/assets/admin/components/widgets/portfolio/portfolio.vue");
/* harmony import */ var v_chartist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! v-chartist */ "./node_modules/v-chartist/dist/vue-chartist.min.js");
/* harmony import */ var v_chartist__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(v_chartist__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/api.service */ "./resources/assets/admin/common/api.service.js");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/build.js");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker__WEBPACK_IMPORTED_MODULE_10__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




__webpack_require__(/*! swiper/dist/css/swiper.css */ "./node_modules/swiper/dist/css/swiper.css");









vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3___default.a);
var unsub;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "index2",
  components: {
    IEcharts: vue_echarts_v3_src_full_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    datatable: components_plugins_DataTable_DataTable_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    countTo: vue_count_to__WEBPACK_IMPORTED_MODULE_4___default.a,
    vScroll: components_plugins_scroll_vScroll_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    portfolio: components_widgets_portfolio_portfolio_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    VueChartist: v_chartist__WEBPACK_IMPORTED_MODULE_8___default.a,
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_10___default.a
  },
  data: function data() {
    return {
      instances: [],
      ajaxloading: true,
      order_action: {},
      restaurant_number: 0,
      active_restaurant_number: 0,
      inactive_restaurant_number: 0,
      order_number: 0,
      pending_order_number: 0,
      pickup_order_number: 0,
      online_order_number: 0,
      rejected_order_number: 0,
      inprogress_order_number: 0,
      completed_order_number: 0,
      today_sales: 0,
      // ===tabledata
      orderTableData: [],
      orderColumndata: [{
        label: 'ORDER ID',
        field: 'id',
        numeric: false,
        html: false
      }, {
        label: 'ORDER TIME',
        field: 'order_time',
        numeric: false,
        html: false
      }, {
        label: 'Customer Name',
        field: 'customer_name',
        numeric: false,
        html: false
      }, {
        label: 'Customer Email',
        field: 'customer_email',
        numeric: false,
        html: false
      }, {
        label: 'Phone Number',
        field: 'customer_phone_number',
        numeric: false,
        html: false
      }, {
        label: 'Status',
        field: 'order_status',
        numeric: false,
        html: true
      }, {
        label: 'Price ($)',
        field: 'amount',
        numeric: false,
        html: true
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;

    unsub = this.$store.subscribe(function (mutation, state) {
      if (mutation.type == "left_menu") {
        _this.instances.forEach(function (item, index) {
          setTimeout(function () {
            item.resize();
          });
        });

        setTimeout(function () {
          _this.$refs.swiper.swiper.update();
        });
      }
    });
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    unsub();
    next();
  },
  beforeMount: function beforeMount() {
    var _this2 = this;

    var today = new Date();
    var begin_day = this.subtractDate(today, 7);
    _common_api_service__WEBPACK_IMPORTED_MODULE_9__["default"].get('admin/get_dashboard_data').then(function (response) {
      var data = response.data;
      _this2.order_number = data.order_number;
      _this2.pending_order_number = data.pending_order_number;
      _this2.pickup_order_number = data.pickup_order_number;
      _this2.online_order_number = data.online_order_number;
      _this2.rejected_order_number = data.rejected_order_number;
      _this2.inprogress_order_number = data.inprogress_order_number;
      _this2.completed_order_number = data.completed_order_number;
      _this2.restaurant_number = data.restaurant_number;
      _this2.active_restaurant_number = data.active_restaurant_number;
      _this2.inactive_restaurant_number = data.inactive_restaurant_number;
      _this2.today_sales = data.today_sales.toFixed(2);
    }, function (error) {
      console.log(error.response);
    });
  },
  methods: {
    subtractDate: function subtractDate(date, offset_day) {
      var result = new Date(date.getTime() - offset_day * 24 * 3600 * 1000);
      return result;
    },
    onReady: function onReady(instance) {
      this.instances.push(instance);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/dashboard.vue?vue&type=style&index=2&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/dashboard.vue?vue&type=style&index=2&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".index2_table .table-responsive .card {\n  border: none;\n  box-shadow: none;\n  margin-bottom: 0;\n}\n.index2_swiper .swiper-pagination-bullet-active {\n  background: #08aa80;\n}\n\n/*===============================notes========*/\n.notes {\n  line-height: 22px;\n  font-size: 13px;\n  padding: 0 15px 0 36px;\n  position: relative;\n  outline: none;\n  background: #fff;\n  background-size: 100% 30px;\n}\n.notes p {\n  border-bottom: 1px solid #dfe8ec;\n}\n.notes::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  top: 0;\n  left: 25px;\n  bottom: 0;\n  border-left: 1px solid #0fd1c1;\n}\n.social .bg-default-card .info {\n  font-size: 12px;\n}\n.social .bg-default-card span {\n  display: block;\n  text-transform: uppercase;\n}\n.social .bg-default-card .value {\n  font-size: 40px;\n  line-height: normal;\n}\n.social .bg-default-card i {\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.social .bg-default-card:hover i {\n  font-size: 45px;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.social_cuntdata {\n  font-weight: bold;\n  font-size: 18px;\n}\n.subscribe_btn {\n  background-color: transparent;\n  border: 0;\n  outline: none;\n}\n.widget_social_icons {\n  background-color: #fff;\n}\n.fb_text {\n  color: #215fe2;\n  font-size: 28px;\n}\n.box_shadow {\n  box-shadow: 2px 2px 15px 0px #ccc;\n}\n.head_color {\n  color: #686868;\n}\n.text_size {\n  font-size: 18px;\n  color: #797f82;\n}\n.item-number {\n  font-size: 25px;\n  margin-right: 10px;\n  color: #23b61a;\n  font-weight: bold;\n}\n.text-ash {\n  color: #575f65;\n}\n.text_color {\n  color: #646161 !important;\n}\n.swiper-pagination {\n  margin: 0 !important;\n}\n.text-blue {\n  color: #215fe2;\n}\n.progress_color2 .progress-bar {\n  background-color: #7FAFF7;\n}\n.icon_color {\n  font-size: 27px;\n  color: #828686;\n}\n.icon_color1 {\n  font-size: 25px;\n  color: #6e8dce;\n}\n.line {\n  border-top: 1px solid #ccc;\n}\n.text_head_Color {\n  color: #707373;\n}\n.below_text {\n  color: #a2a1a1;\n}\n.index2_table th {\n  color: #686868;\n}\n.index2_table td {\n  color: #686868;\n}\n.user_color {\n  color: #8e8c8e;\n}\n.count1 {\n  font-size: 18px;\n  color: #686868;\n}\n.ti_color {\n  color: #215fe2;\n}\n.fb_color {\n  font-size: 18px;\n  color: #3B5998;\n}\n.twi_color {\n  color: #00aced;\n  font-size: 18px;\n}\n.gi_color {\n  color: red;\n  font-size: 18px;\n}\n.pin_color {\n  color: red;\n}\n.cam_color {\n  color: green;\n}\n.events1 {\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  margin-top: 15px;\n  margin-right: -20px;\n  font-size: 18px;\n  color: #555;\n}\n.online_dot img {\n  position: relative;\n}\n.online_dot::after {\n  content: \"\";\n  position: absolute;\n  margin-top: -28px;\n  height: 11px;\n  width: 11px;\n  border: 2px solid #FFF;\n  border-radius: 50%;\n  background-color: green;\n  margin-left: -13px;\n}\n.conversation-list .ctext-wrap p {\n  margin: 0;\n  padding-top: 3px;\n}\n.conversation-list .odd .ctext-wrap:after {\n  border-color: rgba(238, 238, 242, 0);\n  left: 99%;\n  margin-right: -1px;\n  border-top: 0 solid #D8F1E4;\n  border-left: 12px solid #D8F1E4;\n  border-bottom: 14px solid transparent;\n}\n.conversation-list .ctext-wrap p {\n  margin: 0;\n  /*padding-top: 3px;*/\n}\n.ctext-wrap p {\n  margin-bottom: 10px;\n}\n.conversation-list .odd .conversation-text {\n  float: right;\n  margin-right: 25px;\n  text-align: right;\n  width: 95%;\n}\n.conversation-list .ctext-wrap i {\n  color: #777;\n  display: block;\n  font-size: 11px;\n  font-style: normal;\n  position: relative;\n}\n.conversation-list .conversers1 .ctext-wrap {\n  background: #D8F1E4;\n}\n.conversation-list .ctext-wrap {\n  border-radius: 3px;\n  display: inline-block;\n  padding: 5px 10px;\n  position: relative;\n  box-shadow: 2px -2px 4px 0px rgba(0, 0, 0, 0.1);\n}\n.text-field {\n  padding: 6px 10px;\n}\n.conversation-list .odd .ctext-wrap:after {\n  border-color: rgba(238, 238, 242, 0);\n  left: 99%;\n  margin-right: -1px;\n  border-top: 0 solid #D8F1E4;\n  border-left: 12px solid #D8F1E4;\n  border-bottom: 14px solid transparent;\n}\n.conversation-list .ctext-wrap:after {\n  right: 100%;\n  top: 0;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  margin-left: -1px;\n  border-top: 0 solid #fff;\n  border-right: 12px solid #e9f9ff;\n  border-bottom: 14px solid transparent;\n}\n.clearfix:after {\n  clear: both;\n}\n.back_color1 {\n  width: auto;\n  height: 274px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.conversation-list .conversation-text {\n  float: left;\n  font-size: 13px;\n  width: 70%;\n}\n.clearfix:before,\n.clearfix:after {\n  content: \" \";\n  display: table;\n}\n.conversation-list .conversers2 .ctext-wrap {\n  background: #e9f9ff;\n}\n.m-t-10 {\n  margin-top: 10px !important;\n}\n.conversation-list {\n  width: auto;\n  height: 340px;\n  padding-left: 27px;\n}\n.profile-img {\n  background-color: #fff;\n}\n.chat-conversation {\n  width: 100%;\n}\n.top_border1 {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  line-height: 4.1;\n  font-size: 15px;\n  color: #fff;\n  box-shadow: 1px 1px 20px rgba(75, 156, 228, 0.88);\n}\n.top_border2 {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  line-height: 4.1;\n  font-size: 15px;\n  color: #fff;\n  box-shadow: 1px 1px 20px rgba(82, 162, 185, 0.86);\n}\n.top_border3 {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  line-height: 4.1;\n  font-size: 15px;\n  color: #fff;\n  box-shadow: 1px 1px 22px #13bfd2;\n}\n.top_border4 {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  line-height: 4.1;\n  font-size: 15px;\n  color: #fff;\n  box-shadow: 1px 1px 20px rgba(23, 96, 160, 0.89);\n}\n.bg_color1 {\n  background-color: #4b9ce4;\n}\n.bg_color2 {\n  background-color: #328ba7;\n}\n.bg_color3 {\n  background-color: #13bfd2;\n}\n.bg_color4 {\n  background-color: #1760a0;\n}\n.circle_round {\n  font-size: 20px;\n}\n.circle_round1 {\n  font-size: 22px;\n}\n.icon-image {\n  width: 30px;\n  height: 30px;\n}\n.date-range-holder {\n  margin-top: 10px;\n  padding: 0 20px;\n  display: grid;\n  grid-template-columns: 300px 300px auto;\n  grid-gap: 20px;\n}\n.profile-image {\n  width: 100px;\n  height: 100px;\n  border-radius: 100px;\n}\na.delete i {\n  color: #d0280d;\n  font-size: 20px;\n}\n.order-status-background {\n  color: white;\n  padding: 10px;\n  display: block;\n  text-align: center;\n  border-radius: 3px;\n  max-width: 100px;\n}\n.pending_background {\n  background: #FEA115;\n}\n.closed_background {\n  background: #1da50e;\n}\n.cancelled_background {\n  background: #d21717;\n}\n.placed_background {\n  background: #337ab7;\n}\n.preparing_background {\n  background: #19d27e;\n}\n.completed_background {\n  background: #4dca3f;\n}\nimg.menu-image {\n  width: 100px;\n}\n.dashboard-item-wrapper {\n  height: 100%;\n}\n.sub-detail-container {\n  margin-top: 10px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 10px;\n  grid-row-gap: 5px;\n  color: #666;\n}\n.sub-detail-item-text {\n  font-size: 13px;\n  text-align: left;\n}\n.sub-detail-item-count {\n  font-size: 18px;\n  color: #0505aa;\n  font-weight: bold;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/dashboard.vue?vue&type=style&index=1&id=f8c32b58&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/dashboard.vue?vue&type=style&index=1&id=f8c32b58&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.swiper-pagination[data-v-f8c32b58] {\n    position: relative;\n}\n.swiper-pagination-fraction[data-v-f8c32b58],\n.swiper-pagination-custom[data-v-f8c32b58],\n.swiper-container-horizontal > .swiper-pagination-bullets[data-v-f8c32b58] {\n    top: 5px;\n}\n.swiper-container[data-v-f8c32b58] {\n    margin-top: 0px !important;\n}\n.delete i[data-v-f8c32b58]{\n    color:red;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/assets/admin/css/widgets.css?vue&type=style&index=0&id=f8c32b58&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./resources/assets/admin/css/widgets.css?vue&type=style&index=0&id=f8c32b58&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*tabs styles*/\n.tab-pane .card[data-v-f8c32b58] {\n    margin: 0;\n    border: none;\n}\n.name_center[data-v-f8c32b58]{\n    margin-left: 12px;\n    margin-top: 5px;\n}\n.name_font[data-v-f8c32b58]{\n    font-size: 16px;\n    color: #7B7B7B;\n}\n.number_font[data-v-f8c32b58]{\n    font-size: 15px;\n}\n.text_color[data-v-f8c32b58]{\n    color: #ccc;\n}\n/*panel style*/\n.panel[data-v-f8c32b58] {\n    border: 1px solid #e5e5e5;\n    border-radius: 0;\n    box-shadow: 0 1px 30px rgba(0, 0, 0, .1);\n}\n\n\n/*user-profile*/\n.user-profile[data-v-f8c32b58] {\n    color: #777;\n}\n.user-profile .profile-img[data-v-f8c32b58] {\n    width: 110px;\n    margin-right: 25px;\n}\n.user-profile .profile-details[data-v-f8c32b58] {\n    padding: 10px 0;\n}\n.user-profile .table.account-details > tbody > tr > td[data-v-f8c32b58] {\n    padding: 17px 16px;\n}\n.account-details tbody tr[data-v-f8c32b58]:hover {\n    background-color: #EEE;\n}\n\n\n/*twitter profile*/\n.tweet-profile .card-header[data-v-f8c32b58] {\n    padding-bottom: 45px;\n    background-color: #4cb6e5;\n    color: #FFF;\n}\n.tweet-profile .profile-img img[data-v-f8c32b58] {\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    border: 5px solid #fff;\n    margin-top: -50px;\n}\n.tweet-profile .tweet-details[data-v-f8c32b58] {\n    font-size: 14px;\n    color: #555;\n    margin-bottom: 15px;\n}\n.tweet-profile .tweet-details .count[data-v-f8c32b58] {\n    margin: 0;\n    font-size: 22px;\n}\n.tweet-profile .tweet-details .row div[data-v-f8c32b58]:not(:last-child) {\n    border-right: 1px solid #ccc;\n}\n.tweet-profile .events[data-v-f8c32b58] {\n    border: 1px solid #bbb;\n    padding-top: 2px;\n    padding-bottom: 2px;\n    margin-top: 15px;\n    margin-right: -20px;\n    font-size: 18px;\n    color: #555;\n}\n.tweet-profile .btn-tweet[data-v-f8c32b58] {\n    padding: 5px;\n    margin-top: 14px;\n}\n\n\n/*user page*/\n.m-0[data-v-f8c32b58] {\n    margin: 0;\n}\n.user-page .cover-image[data-v-f8c32b58] {\n    height: 220px;\n    width: 100%;\n}\n.user-page .user-pic[data-v-f8c32b58] {\n    width: 90px;\n    padding: 10px;\n}\n.user-page .post-details[data-v-f8c32b58] {\n    display: block;\n    padding-top: 25px;\n    font-size: 14px;\n    color: #777;\n}\n.user-page .views[data-v-f8c32b58] {\n    background-color: #e5e5e5;\n    padding-top: 12px;\n    padding-bottom: 12px;\n    color: #555;\n}\n.user-page .views[data-v-f8c32b58]:not(:last-child) {\n    border-right: 1px solid #FFF;\n}\n\n\n/*top tabbed panel*/\n.tabbbed-bg[data-v-f8c32b58] {\n    padding: 0;\n    background-color: #418AC9;\n    border-bottom: 0;\n}\n.tabbbed-bg a[data-v-f8c32b58] {\n    color: #FFF;\n}\n.tabbbed-bg + .panel-body[data-v-f8c32b58] {\n    min-height: 313px;\n}\n.desc-img img[data-v-f8c32b58] {\n    width: 50px;\n    height: 50px;\n    border-radius: 22px;\n    margin-right: 13px;\n}\n.nav-tabs.nav-justified > li > a[data-v-f8c32b58] {\n    border-bottom: 0;\n}\n.panel-heading .nav > li.active > a[data-v-f8c32b58],\n.panel-heading .nav > li > a[data-v-f8c32b58]:hover {\n    color: #777;\n    background: #fff;\n    border-bottom: 1px solid #fff;\n}\n.tab-pane .d-head[data-v-f8c32b58] {\n    font-size: 14px;\n    color: #337ab7;\n    font-weight: bold;\n}\n.tab-pane .c-head[data-v-f8c32b58] {\n    font-size: 14px;\n}\n.tab-content .media[data-v-f8c32b58] {\n    padding-top: 5px;\n    padding-bottom: 5px;\n}\n\n\n/*weekly data line chart*/\n.stats-chart[data-v-f8c32b58] {\n    height: 244px;\n    background-color: #3399ff;\n    font-size: 22px;\n}\n\n\n/*echart*/\n.echarts[data-v-f8c32b58] {\n    width: 100%;\n    height: 100%;\n}\n.weekly-stats .shots-likes[data-v-f8c32b58] {\n    font-weight: bold;\n    font-size: 24px;\n    padding-top: 15px;\n}\n.weekly-stats .weekly-shots[data-v-f8c32b58]:after {\n    content: '';\n    width: 1px;\n    height: 75px;\n    position: absolute;\n    right: 0;\n    top: 10px;\n    border-right: 2px solid #ddd;\n}\n.email-tabs[data-v-f8c32b58] {\n    background-color: #efefef;\n    border-bottom: 0;\n}\ntextarea[data-v-f8c32b58] {\n    resize: vertical;\n}\nul.mail-list[data-v-f8c32b58] {\n    padding: 0;\n}\n.table.mail-list[data-v-f8c32b58] {\n    margin: 0;\n    table-layout: fixed;\n    width: 100%;\n}\n.mail-list tbody tr[data-v-f8c32b58] {\n    height: 45px\n}\n.mail-list tbody tr[data-v-f8c32b58]:hover {\n    background-color: #EEE;\n}\n.mail-list td[data-v-f8c32b58]:nth-child(1),\n.mail-list td[data-v-f8c32b58]:nth-child(2) {\n    width: 10%;\n}\n.mail-list td[data-v-f8c32b58]:nth-child(4) {\n    width: 40%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.mail-list .custom-checkbox[data-v-f8c32b58]{\n    margin-bottom: 0;\n    margin-top: 7px;\n}\n\n\n/*contact widget*/\n.contact-cover[data-v-f8c32b58] {\n    height: 175px;\n    width: 100%;\n    background-image: url(" + escape(__webpack_require__(/*! img/pages/profile-coverbg.jpeg */ "./resources/assets/admin/img/pages/profile-coverbg.jpeg")) + ");\n    background-size: cover;\n    color: #FFF;\n}\n.contact-widget i[data-v-f8c32b58] {\n    cursor: pointer;\n}\n.contact-cover .profile-img[data-v-f8c32b58] {\n    width: 60%;\n    height: 100%;\n    padding-top: 37px;\n    padding-left: 6%;\n}\n.contact-cover .profile-img .follow[data-v-f8c32b58] {\n    position: absolute;\n    top: 110px;\n    left: 35%;\n    font-size: 16px;\n}\n.contact-cover .profile-img img[data-v-f8c32b58] {\n    width: 90px;\n    border-radius: 50px;\n    border: 3px solid white;\n}\n.contact-cover .group-icon[data-v-f8c32b58] {\n    width: 20%;\n    height: 100%;\n    background-color: rgba(255, 255, 255, 0.19);\n    font-size: 24px;\n    line-height: 180px;\n}\n.contact-cover .search-icon[data-v-f8c32b58] {\n    width: 20%;\n    height: 100%;\n    background-color: rgba(255, 255, 255, 0.31);\n    font-size: 24px;\n    line-height: 180px;\n}\n.contact-widget .contact-details[data-v-f8c32b58] {\n    font-size: 18px;\n}\n.contact-widget .contact-details h4[data-v-f8c32b58] {\n    font-size: 16px;\n    color: #777;\n}\n\n\n/*weather widget*/\n.weather-widget .card-header[data-v-f8c32b58] {\n    background-color: #3AAB88;\n    color: #FFF;\n}\n.weather-widget .location i[data-v-f8c32b58] {\n    font-size: 60px;\n}\n.weather-widget .location span[data-v-f8c32b58] {\n    font-size: 16px;\n}\n.weather-widget .temperature[data-v-f8c32b58] {\n    font-size: 54px;\n}\n.weather-widget .details[data-v-f8c32b58] {\n    color: #666;\n    font-size: 14px;\n}\n.weather-widget .details[data-v-f8c32b58]:not(:last-child) {\n    border-right: 1px solid #CCC;\n}\n\n\n/*profile 2*/\n.profile-2[data-v-f8c32b58] {\n    background-color: #7D5BAA;\n    border-color: #ccc;\n}\n.profile-2 .head[data-v-f8c32b58] {\n    padding-top: 14px;\n    padding-bottom: 5px;\n    font-size: 18px;\n    background-color: #FFF;\n}\n.profile-2 .data[data-v-f8c32b58] {\n    font-size: 15px;\n    padding-top: 7px;\n    padding-bottom: 6px;\n    color: #FFF;\n}\n.border-right[data-v-f8c32b58]:after {\n    content: '';\n    width: 1px;\n    height: 64px;\n    position: absolute;\n    right: 0;\n    top: 0;\n    border-right: 1px solid #FFF;\n}\n.profile-2 .border-bottom[data-v-f8c32b58]:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    border-bottom: 1px solid #FFF;\n}\n.card-body .form-control[data-v-f8c32b58]{\n    -webkit-transition: initial;\n    transition: initial;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/dashboard.vue?vue&type=style&index=2&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/dashboard.vue?vue&type=style&index=2&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=style&index=2&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/dashboard.vue?vue&type=style&index=2&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/dashboard.vue?vue&type=style&index=1&id=f8c32b58&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/dashboard.vue?vue&type=style&index=1&id=f8c32b58&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=style&index=1&id=f8c32b58&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/dashboard.vue?vue&type=style&index=1&id=f8c32b58&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/assets/admin/css/widgets.css?vue&type=style&index=0&id=f8c32b58&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./resources/assets/admin/css/widgets.css?vue&type=style&index=0&id=f8c32b58&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!./widgets.css?vue&type=style&index=0&id=f8c32b58&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/assets/admin/css/widgets.css?vue&type=style&index=0&id=f8c32b58&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/dashboard.vue?vue&type=template&id=f8c32b58&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/dashboard.vue?vue&type=template&id=f8c32b58&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row mb-4" }, [
      _c(
        "div",
        { staticClass: "col-lg-3  col-sm-6 mb-3" },
        [
          _c(
            "router-link",
            { staticClass: "dashboard-link", attrs: { to: "restaurant_list" } },
            [
              _c(
                "div",
                {
                  staticClass:
                    "text-center p-3 widget_social_icons box_shadow dashboard-item-wrapper"
                },
                [
                  _c("div", { staticClass: "widget_social_inner1" }, [
                    _c("i", { staticClass: "fas fa-utensils fb_text" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-ash" }, [
                    _c("h6", { staticClass: "mt-2 text_size item-text" }, [
                      _c("span", { staticClass: "item-number" }, [
                        _vm._v(_vm._s(_vm.restaurant_number))
                      ]),
                      _vm._v("Restaurants")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "sub-detail-container" }, [
                    _c("div", { staticClass: "sub-detail-item-wrapper" }, [
                      _c("h5", { staticClass: "sub-detail-item-text" }, [
                        _c("span", { staticClass: "sub-detail-item-count" }, [
                          _vm._v(_vm._s(_vm.active_restaurant_number))
                        ]),
                        _vm._v(" Active")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "sub-detail-item-wrapper" }, [
                      _c("h5", { staticClass: "sub-detail-item-text" }, [
                        _c("span", { staticClass: "sub-detail-item-count" }, [
                          _vm._v(_vm._s(_vm.inactive_restaurant_number))
                        ]),
                        _vm._v(" InActive")
                      ])
                    ])
                  ])
                ]
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-3  col-sm-6 mb-3" },
        [
          _c(
            "router-link",
            { staticClass: "dashboard-link", attrs: { to: "restaurant_list" } },
            [
              _c(
                "div",
                {
                  staticClass:
                    "text-center p-3 widget_social_icons box_shadow dashboard-item-wrapper"
                },
                [
                  _c("div", { staticClass: "widget_social_inner1" }, [
                    _c("img", {
                      staticClass: "icon-image",
                      attrs: { src: "public/Images/Dashboard/order.png" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-ash" }, [
                    _c("h6", { staticClass: "mb-0 mt-2 text_size" }, [
                      _c("span", { staticClass: "item-number" }, [
                        _vm._v(_vm._s(_vm.order_number))
                      ]),
                      _vm._v("Orders")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "sub-detail-container" }, [
                    _c("div", { staticClass: "sub-detail-item-wrapper" }, [
                      _c("h5", { staticClass: "sub-detail-item-text" }, [
                        _c("span", { staticClass: "sub-detail-item-count" }, [
                          _vm._v(_vm._s(_vm.online_order_number))
                        ]),
                        _vm._v(" Online")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "sub-detail-item-wrapper" }, [
                      _c("h5", { staticClass: "sub-detail-item-text" }, [
                        _c("span", { staticClass: "sub-detail-item-count" }, [
                          _vm._v(_vm._s(_vm.pickup_order_number))
                        ]),
                        _vm._v(" Pick Up")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "sub-detail-item-wrapper" }, [
                      _c("h5", { staticClass: "sub-detail-item-text" }, [
                        _c("span", { staticClass: "sub-detail-item-count" }, [
                          _vm._v(_vm._s(_vm.pending_order_number))
                        ]),
                        _vm._v(" Pending")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "sub-detail-item-wrapper" }, [
                      _c("h5", { staticClass: "sub-detail-item-text" }, [
                        _c("span", { staticClass: "sub-detail-item-count" }, [
                          _vm._v(_vm._s(_vm.rejected_order_number))
                        ]),
                        _vm._v(" Rejected")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "sub-detail-item-wrapper" }, [
                      _c("h5", { staticClass: "sub-detail-item-text" }, [
                        _c("span", { staticClass: "sub-detail-item-count" }, [
                          _vm._v(_vm._s(_vm.inprogress_order_number))
                        ]),
                        _vm._v(" In Progress")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "sub-detail-item-wrapper" }, [
                      _c("h5", { staticClass: "sub-detail-item-text" }, [
                        _c("span", { staticClass: "sub-detail-item-count" }, [
                          _vm._v(_vm._s(_vm.completed_order_number))
                        ]),
                        _vm._v(" Completed")
                      ])
                    ])
                  ])
                ]
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-3 col-md-6 mb-3" },
        [
          _c(
            "router-link",
            { staticClass: "dashboard-link", attrs: { to: "restaurant_list" } },
            [
              _c(
                "div",
                {
                  staticClass:
                    "text-center p-3 widget_social_icons box_shadow dashboard-item-wrapper"
                },
                [
                  _c("div", { staticClass: " widget_social_inner1" }, [
                    _c("img", {
                      staticClass: "icon-image",
                      attrs: { src: "public/Images/Dashboard/employee.png" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-ash" }, [
                    _c("h6", { staticClass: "mb-0 mt-2 text_size" }, [
                      _c("span", { staticClass: "item-number" }, [
                        _vm._v("$ " + _vm._s(_vm.today_sales))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("h6", { staticClass: "mb-0 mt-2 text_size" }, [
                      _vm._v("Subscriptions")
                    ])
                  ])
                ]
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-3  col-md-6 mb-3" },
        [
          _c(
            "router-link",
            { staticClass: "dashboard-link", attrs: { to: "restaurant_list" } },
            [
              _c(
                "div",
                {
                  staticClass:
                    "text-center p-3 widget_social_icons box_shadow dashboard-item-wrapper"
                },
                [
                  _c("div", { staticClass: " widget_social_inner1" }, [
                    _c("img", {
                      staticClass: "icon-image",
                      attrs: { src: "public/Images/Dashboard/sales.jpg" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-ash" }, [
                    _c("h6", { staticClass: "mb-0 mt-2 text_size" }, [
                      _c("span", { staticClass: "item-number" }, [
                        _vm._v("$ " + _vm._s(_vm.today_sales))
                      ]),
                      _vm._v("Sales")
                    ])
                  ])
                ]
              )
            ]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/admin/components/pages/dashboard.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/admin/components/pages/dashboard.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_vue_vue_type_template_id_f8c32b58_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=f8c32b58&scoped=true& */ "./resources/assets/admin/components/pages/dashboard.vue?vue&type=template&id=f8c32b58&scoped=true&");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js& */ "./resources/assets/admin/components/pages/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _css_widgets_css_vue_type_style_index_0_id_f8c32b58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/widgets.css?vue&type=style&index=0&id=f8c32b58&scoped=true&lang=css& */ "./resources/assets/admin/css/widgets.css?vue&type=style&index=0&id=f8c32b58&scoped=true&lang=css&");
/* harmony import */ var _dashboard_vue_vue_type_style_index_1_id_f8c32b58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.vue?vue&type=style&index=1&id=f8c32b58&scoped=true&lang=css& */ "./resources/assets/admin/components/pages/dashboard.vue?vue&type=style&index=1&id=f8c32b58&scoped=true&lang=css&");
/* harmony import */ var _dashboard_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.vue?vue&type=style&index=2&lang=scss& */ "./resources/assets/admin/components/pages/dashboard.vue?vue&type=style&index=2&lang=scss&");
/* harmony import */ var chartist_dist_chartist_css_vue_type_style_index_3_lang_css___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chartist/dist/chartist.css?vue&type=style&index=3&lang=css& */ "./node_modules/chartist/dist/chartist.css?vue&type=style&index=3&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");









/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_6__["default"])(
  _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dashboard_vue_vue_type_template_id_f8c32b58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dashboard_vue_vue_type_template_id_f8c32b58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f8c32b58",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/admin/components/pages/dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/admin/components/pages/dashboard.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/dashboard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/admin/components/pages/dashboard.vue?vue&type=style&index=1&id=f8c32b58&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/dashboard.vue?vue&type=style&index=1&id=f8c32b58&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_1_id_f8c32b58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=style&index=1&id=f8c32b58&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/dashboard.vue?vue&type=style&index=1&id=f8c32b58&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_1_id_f8c32b58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_1_id_f8c32b58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_1_id_f8c32b58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_1_id_f8c32b58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_1_id_f8c32b58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/admin/components/pages/dashboard.vue?vue&type=style&index=2&lang=scss&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/dashboard.vue?vue&type=style&index=2&lang=scss& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=style&index=2&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/dashboard.vue?vue&type=style&index=2&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/admin/components/pages/dashboard.vue?vue&type=template&id=f8c32b58&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/dashboard.vue?vue&type=template&id=f8c32b58&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_f8c32b58_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=template&id=f8c32b58&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/dashboard.vue?vue&type=template&id=f8c32b58&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_f8c32b58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_f8c32b58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/admin/css/widgets.css?vue&type=style&index=0&id=f8c32b58&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/admin/css/widgets.css?vue&type=style&index=0&id=f8c32b58&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_widgets_css_vue_type_style_index_0_id_f8c32b58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!./widgets.css?vue&type=style&index=0&id=f8c32b58&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/assets/admin/css/widgets.css?vue&type=style&index=0&id=f8c32b58&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_widgets_css_vue_type_style_index_0_id_f8c32b58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_widgets_css_vue_type_style_index_0_id_f8c32b58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_widgets_css_vue_type_style_index_0_id_f8c32b58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_widgets_css_vue_type_style_index_0_id_f8c32b58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_widgets_css_vue_type_style_index_0_id_f8c32b58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);