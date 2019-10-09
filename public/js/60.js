(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/dashboard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/dashboard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/api.service */ "./resources/assets/restaurant/common/api.service.js");
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
      customer_action: {},
      order_action: {},
      customer_number: 0,
      today_sales: 0,
      employee_number: 0,
      completed_orders: 0,
      sales_graph_begin_date: '',
      sales_graph_end_date: '',
      sales_graph_dates: [],
      graph_styles: [{
        areaStyle: {
          type: 'default',
          color: '#00adf0'
        },
        lineStyle: {
          color: "#006df0"
        }
      }, {
        areaStyle: {
          type: 'default',
          color: '#CB48FF'
        },
        lineStyle: {
          color: "#933ec5"
        }
      }, {
        areaStyle: {
          type: 'default',
          color: '#88ED3C'
        },
        lineStyle: {
          color: "#65b12d"
        }
      }, {
        areaStyle: {
          type: 'default',
          color: '#D3F6F6'
        },
        lineStyle: {
          color: "#95EAEA"
        }
      }],
      //===========AJAX chart data start=========
      area_chart: {
        title: {
          text: '',
          subtext: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          show: true,
          data: ['sales', 'sales1']
        },
        color: ['#006df0', '#933ec5', '#65b12d'],
        calculable: true,
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          data: this.sales_graph_dates
        }],
        yAxis: [{
          type: 'value',
          name: 'Currency ( $ )'
        }],
        series: [{
          name: 'sales',
          type: 'line',
          smooth: true,
          itemStyle: {
            normal: {
              areaStyle: {
                type: 'default',
                color: '#D3F6F6'
              },
              lineStyle: {
                color: "#95EAEA"
              }
            }
          },
          data: []
        }, {
          name: 'sales1',
          type: 'line',
          smooth: true,
          itemStyle: {
            normal: {
              areaStyle: {
                type: 'default',
                color: '#D3F6F6'
              },
              lineStyle: {
                color: "#f5EA0A"
              }
            }
          },
          data: []
        }]
      },
      //===========AJAX chart data end=========\
      // ===tabledata
      customerTableData: [],
      columndata: [{
        label: 'Profile Image',
        field: 'profile',
        numeric: false,
        html: true
      }, {
        label: 'Name',
        field: 'name',
        numeric: false,
        html: false
      }, {
        label: 'Email',
        field: 'email',
        numeric: false,
        html: false
      }, {
        label: 'Phone Number',
        field: 'phone_number',
        numeric: false,
        html: false
      }, {
        label: 'Birthday',
        field: 'birthday',
        numeric: false,
        html: false
      }, {
        label: 'Total Orders',
        field: 'total_orders',
        numeric: false,
        html: false
      }, {
        label: 'Total Amount',
        field: 'total_amount',
        numeric: false,
        html: false
      }, {
        label: 'Actions',
        field: 'action',
        numeric: false,
        html: true
      }],
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
      }],
      menuSalesTableData: [],
      menuSalesColumnData: [{
        label: 'Menu Image',
        field: 'image',
        numeric: false,
        html: true
      }, {
        label: 'Menu Name',
        field: 'name',
        numeric: false,
        html: false
      }, {
        label: 'Price ($)',
        field: 'price',
        numeric: false,
        html: false
      }, {
        label: 'Total Sales ($)',
        field: 'sales',
        numeric: false,
        html: false
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
    this.sales_graph_begin_date = begin_day;
    this.sales_graph_end_date = today;
    _common_api_service__WEBPACK_IMPORTED_MODULE_9__["default"].get('admin/get_dashboard_data').then(function (response) {
      var data = response.data;
      _this2.customerTableData = data.customerData;
      _this2.customer_number = data.customer_number;
      _this2.completed_orders = data.completed_orders;
      _this2.employee_number = data.employee_number;
      _this2.today_sales = data.today_sales;
      _this2.customerTableData = data.customerData;
      var that = _this2;

      _this2.customerTableData.forEach(function (item, index) {
        that.$set(item, "action", "<a class=\"clickable delete\" href=\"javascript:void(0)\"><i class=\"fas fa-trash\" target_id=\"".concat(item.id, "\" action=\"delete\"></i> </a>"));
        if (item.profile_picture) that.$set(item, "profile", "<img class=\"profile-image\" src=\"public/Images/ProfileImages/Customer/".concat(item.profile_picture, "\">"));else that.$set(item, "profile", "<img class=\"profile-image\" src=\"public/Images/ProfileImages/avatar.jpg\">");
        if (item.birthday) that.$set(item, "birthday", item.birthday.substring(0, 10));
        if (!item.total_amount) that.$set(item, "total_amount", 0);
      });

      _this2.orderTableData = data.orders;

      _this2.orderTableData.forEach(function (item, index) {
        if (item.order_status == 'pending') that.$set(item, 'order_status', "<span class='order-status-background pending_background'>".concat(item.order_status, "</span>"));
        if (item.order_status == 'placed') that.$set(item, 'order_status', "<span class='order-status-background placed_background'>".concat(item.order_status, "</span>"));
        if (item.order_status == 'preparing') that.$set(item, 'order_status', "<span class='preparing_background order-status-background'>".concat(item.order_status, "</span>"));
        if (item.order_status == 'completed') that.$set(item, 'order_status', "<span class='completed_background order-status-background'>".concat(item.order_status, "</span>"));
        if (item.order_status == 'closed') that.$set(item, 'order_status', "<span class='closed_background order-status-background'>".concat(item.order_status, "</span>"));
        if (item.order_status == 'cancelled') that.$set(item, 'order_status', "<span class='cancelled_background order-status-background'>".concat(item.order_status, "</span>"));
      });

      _this2.menuSalesTableData = data.menu_sales;

      _this2.menuSalesTableData.forEach(function (item, index) {
        if (!item['sales']) that.$set(item, 'sales', 0);
        that.$set(item, 'sales', parseFloat(Math.round(item.sales * 100) / 100).toFixed(2));
        that.$set(item, 'image', "<img class='menu-image' src=\"public/Images/FoodMenus/".concat(item.image, "\">"));
      });

      _this2.updateGraphData(data.sales_data);
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
    },
    // ===chart animation===
    // update_chart() {
    //     setInterval(() => {
    //         for (var i = 0; i < this.ajaxbar_chart.series.length; i++) {
    //             this.ajaxbar_chart.series[i].data.shift();
    //             this.ajaxbar_chart.series[i].data.push(Math.floor((Math.random() * (1000 - 90) + 90) +
    //                 1));
    //         }
    //     }, 4000);
    // },
    updateChart: function updateChart() {
      var _this3 = this;

      var begin_date = new Date(this.sales_graph_begin_date).toISOString().substring(0, 10);
      var end_date = new Date(this.sales_graph_end_date).toISOString().substring(0, 10);

      if (begin_date > end_date) {
        var temp = begin_date;
        begin_date = end_date;
        end_date = temp;
      }

      var data = {};
      data.begin_date = begin_date;
      data.end_date = end_date;
      this.ajaxloading = true;
      _common_api_service__WEBPACK_IMPORTED_MODULE_9__["default"].post('admin/update_sales_graph', data).then(function (response) {
        _this3.ajaxloading = false;
        var data = response.data;

        _this3.updateGraphData(data);
      }, function (error) {
        console.log(error.response);
      });
    },
    updateGraphData: function updateGraphData(data) {
      this.area_chart.xAxis[0].data = data.dates;
      this.sales_graph_dates = data.dates;
      this.area_chart.series = [];
      this.area_chart.legend.data = [];
      var graph_styles = this.graph_styles;
      var graph_data = data.graph_data;
      var that = this;
      var i = 0;
      $.each(graph_data, function (key, value) {
        var temp = {};
        temp.name = key;
        temp.type = 'line';
        temp.smooth = true;
        temp.itemStyle = {};
        temp.itemStyle.normal = graph_styles[i];
        temp.data = [];
        temp.data = value;
        that.area_chart.series.push(temp);
        that.area_chart.legend.data.push(key);
        i++;
      });
      this.ajaxloading = false;
    }
  },
  watch: {
    sales_graph_begin_date: function sales_graph_begin_date(newValue, oldValue) {
      if (newValue != oldValue) {
        this.updateChart();
      }
    },
    sales_graph_end_date: function sales_graph_end_date(newValue, oldValue) {
      if (newValue != oldValue) {
        this.updateChart();
      }
    },
    customer_action: function customer_action(newVal) {
      if (newVal.id != null) {
        var id = newVal.id;
        var action = newVal.action;

        if (id && action) {
          // if there is id and action
          var deleteIndex;

          for (var i = 0; i < this.customerTableData.length; i++) {
            if (id == this.customerTableData[i].id) deleteIndex = i;
          }

          this.customerTableData.splice(deleteIndex, 1);
          _common_api_service__WEBPACK_IMPORTED_MODULE_9__["default"].get("admin/delete_customer/".concat(id)).then(function (response) {});
        }

        this.customer_action.action = null;
        this.customer_action.id = null;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/dashboard.vue?vue&type=style&index=2&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/dashboard.vue?vue&type=style&index=2&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".index2_table .table-responsive .card {\n  border: none;\n  box-shadow: none;\n  margin-bottom: 0;\n}\n.index2_swiper .swiper-pagination-bullet-active {\n  background: #08aa80;\n}\n\n/*===============================notes========*/\n.notes {\n  line-height: 22px;\n  font-size: 13px;\n  padding: 0 15px 0 36px;\n  position: relative;\n  outline: none;\n  background: #fff;\n  background-size: 100% 30px;\n}\n.notes p {\n  border-bottom: 1px solid #dfe8ec;\n}\n.notes::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  top: 0;\n  left: 25px;\n  bottom: 0;\n  border-left: 1px solid #0fd1c1;\n}\n.social .bg-default-card .info {\n  font-size: 12px;\n}\n.social .bg-default-card span {\n  display: block;\n  text-transform: uppercase;\n}\n.social .bg-default-card .value {\n  font-size: 40px;\n  line-height: normal;\n}\n.social .bg-default-card i {\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.social .bg-default-card:hover i {\n  font-size: 45px;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.social_cuntdata {\n  font-weight: bold;\n  font-size: 18px;\n}\n.subscribe_btn {\n  background-color: transparent;\n  border: 0;\n  outline: none;\n}\n.widget_social_icons {\n  background-color: #fff;\n}\n.fb_text {\n  color: #215fe2;\n  font-size: 28px;\n}\n.box_shadow {\n  box-shadow: 2px 2px 15px 0px #ccc;\n}\n.head_color {\n  color: #686868;\n}\n.text_size {\n  font-size: 25px;\n  color: #797f82;\n}\n.text-ash {\n  color: #575f65;\n}\n.text_color {\n  color: #646161 !important;\n}\n.swiper-pagination {\n  margin: 0 !important;\n}\n.text-blue {\n  color: #215fe2;\n}\n.progress_color2 .progress-bar {\n  background-color: #7FAFF7;\n}\n.icon_color {\n  font-size: 27px;\n  color: #828686;\n}\n.icon_color1 {\n  font-size: 25px;\n  color: #6e8dce;\n}\n.line {\n  border-top: 1px solid #ccc;\n}\n.text_head_Color {\n  color: #707373;\n}\n.below_text {\n  color: #a2a1a1;\n}\n.index2_table th {\n  color: #686868;\n}\n.index2_table td {\n  color: #686868;\n}\n.user_color {\n  color: #8e8c8e;\n}\n.count1 {\n  font-size: 18px;\n  color: #686868;\n}\n.ti_color {\n  color: #215fe2;\n}\n.fb_color {\n  font-size: 18px;\n  color: #3B5998;\n}\n.twi_color {\n  color: #00aced;\n  font-size: 18px;\n}\n.gi_color {\n  color: red;\n  font-size: 18px;\n}\n.pin_color {\n  color: red;\n}\n.cam_color {\n  color: green;\n}\n.events1 {\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  margin-top: 15px;\n  margin-right: -20px;\n  font-size: 18px;\n  color: #555;\n}\n.online_dot img {\n  position: relative;\n}\n.online_dot::after {\n  content: \"\";\n  position: absolute;\n  margin-top: -28px;\n  height: 11px;\n  width: 11px;\n  border: 2px solid #FFF;\n  border-radius: 50%;\n  background-color: green;\n  margin-left: -13px;\n}\n.conversation-list .ctext-wrap p {\n  margin: 0;\n  padding-top: 3px;\n}\n.conversation-list .odd .ctext-wrap:after {\n  border-color: rgba(238, 238, 242, 0);\n  left: 99%;\n  margin-right: -1px;\n  border-top: 0 solid #D8F1E4;\n  border-left: 12px solid #D8F1E4;\n  border-bottom: 14px solid transparent;\n}\n.conversation-list .ctext-wrap p {\n  margin: 0;\n  /*padding-top: 3px;*/\n}\n.ctext-wrap p {\n  margin-bottom: 10px;\n}\n.conversation-list .odd .conversation-text {\n  float: right;\n  margin-right: 25px;\n  text-align: right;\n  width: 95%;\n}\n.conversation-list .ctext-wrap i {\n  color: #777;\n  display: block;\n  font-size: 11px;\n  font-style: normal;\n  position: relative;\n}\n.conversation-list .conversers1 .ctext-wrap {\n  background: #D8F1E4;\n}\n.conversation-list .ctext-wrap {\n  border-radius: 3px;\n  display: inline-block;\n  padding: 5px 10px;\n  position: relative;\n  box-shadow: 2px -2px 4px 0px rgba(0, 0, 0, 0.1);\n}\n.text-field {\n  padding: 6px 10px;\n}\n.conversation-list .odd .ctext-wrap:after {\n  border-color: rgba(238, 238, 242, 0);\n  left: 99%;\n  margin-right: -1px;\n  border-top: 0 solid #D8F1E4;\n  border-left: 12px solid #D8F1E4;\n  border-bottom: 14px solid transparent;\n}\n.conversation-list .ctext-wrap:after {\n  right: 100%;\n  top: 0;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  margin-left: -1px;\n  border-top: 0 solid #fff;\n  border-right: 12px solid #e9f9ff;\n  border-bottom: 14px solid transparent;\n}\n.clearfix:after {\n  clear: both;\n}\n.back_color1 {\n  width: auto;\n  height: 274px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.conversation-list .conversation-text {\n  float: left;\n  font-size: 13px;\n  width: 70%;\n}\n.clearfix:before,\n.clearfix:after {\n  content: \" \";\n  display: table;\n}\n.conversation-list .conversers2 .ctext-wrap {\n  background: #e9f9ff;\n}\n.m-t-10 {\n  margin-top: 10px !important;\n}\n.conversation-list {\n  width: auto;\n  height: 340px;\n  padding-left: 27px;\n}\n.profile-img {\n  background-color: #fff;\n}\n.chat-conversation {\n  width: 100%;\n}\n.top_border1 {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  line-height: 4.1;\n  font-size: 15px;\n  color: #fff;\n  box-shadow: 1px 1px 20px rgba(75, 156, 228, 0.88);\n}\n.top_border2 {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  line-height: 4.1;\n  font-size: 15px;\n  color: #fff;\n  box-shadow: 1px 1px 20px rgba(82, 162, 185, 0.86);\n}\n.top_border3 {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  line-height: 4.1;\n  font-size: 15px;\n  color: #fff;\n  box-shadow: 1px 1px 22px #13bfd2;\n}\n.top_border4 {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  line-height: 4.1;\n  font-size: 15px;\n  color: #fff;\n  box-shadow: 1px 1px 20px rgba(23, 96, 160, 0.89);\n}\n.bg_color1 {\n  background-color: #4b9ce4;\n}\n.bg_color2 {\n  background-color: #328ba7;\n}\n.bg_color3 {\n  background-color: #13bfd2;\n}\n.bg_color4 {\n  background-color: #1760a0;\n}\n.circle_round {\n  font-size: 20px;\n}\n.circle_round1 {\n  font-size: 22px;\n}\n.icon-image {\n  width: 30px;\n  height: 30px;\n}\n.date-range-holder {\n  margin-top: 10px;\n  padding: 0 20px;\n  display: grid;\n  grid-template-columns: 300px 300px auto;\n  grid-gap: 20px;\n}\n.profile-image {\n  width: 100px;\n  height: 100px;\n  border-radius: 100px;\n}\na.delete i {\n  color: #d0280d;\n  font-size: 20px;\n}\n.order-status-background {\n  color: white;\n  padding: 10px;\n  display: block;\n  text-align: center;\n  border-radius: 3px;\n  max-width: 100px;\n}\n.pending_background {\n  background: #FEA115;\n}\n.closed_background {\n  background: #1da50e;\n}\n.cancelled_background {\n  background: #d21717;\n}\n.placed_background {\n  background: #337ab7;\n}\n.preparing_background {\n  background: #19d27e;\n}\n.completed_background {\n  background: #4dca3f;\n}\nimg.menu-image {\n  width: 100px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/dashboard.vue?vue&type=style&index=1&id=49cfff64&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/dashboard.vue?vue&type=style&index=1&id=49cfff64&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.swiper-pagination[data-v-49cfff64] {\n    position: relative;\n}\n.swiper-pagination-fraction[data-v-49cfff64],\n.swiper-pagination-custom[data-v-49cfff64],\n.swiper-container-horizontal > .swiper-pagination-bullets[data-v-49cfff64] {\n    top: 5px;\n}\n.swiper-container[data-v-49cfff64] {\n    margin-top: 0px !important;\n}\n.delete i[data-v-49cfff64]{\n    color:red;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/assets/restaurant/css/widgets.css?vue&type=style&index=0&id=49cfff64&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./resources/assets/restaurant/css/widgets.css?vue&type=style&index=0&id=49cfff64&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*tabs styles*/\n.tab-pane .card[data-v-49cfff64] {\n    margin: 0;\n    border: none;\n}\n.name_center[data-v-49cfff64]{\n    margin-left: 12px;\n    margin-top: 5px;\n}\n.name_font[data-v-49cfff64]{\n    font-size: 16px;\n    color: #7B7B7B;\n}\n.number_font[data-v-49cfff64]{\n    font-size: 15px;\n}\n.text_color[data-v-49cfff64]{\n    color: #ccc;\n}\n/*panel style*/\n.panel[data-v-49cfff64] {\n    border: 1px solid #e5e5e5;\n    border-radius: 0;\n    box-shadow: 0 1px 30px rgba(0, 0, 0, .1);\n}\n\n\n/*user-profile*/\n.user-profile[data-v-49cfff64] {\n    color: #777;\n}\n.user-profile .profile-img[data-v-49cfff64] {\n    width: 110px;\n    margin-right: 25px;\n}\n.user-profile .profile-details[data-v-49cfff64] {\n    padding: 10px 0;\n}\n.user-profile .table.account-details > tbody > tr > td[data-v-49cfff64] {\n    padding: 17px 16px;\n}\n.account-details tbody tr[data-v-49cfff64]:hover {\n    background-color: #EEE;\n}\n\n\n/*twitter profile*/\n.tweet-profile .card-header[data-v-49cfff64] {\n    padding-bottom: 45px;\n    background-color: #4cb6e5;\n    color: #FFF;\n}\n.tweet-profile .profile-img img[data-v-49cfff64] {\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    border: 5px solid #fff;\n    margin-top: -50px;\n}\n.tweet-profile .tweet-details[data-v-49cfff64] {\n    font-size: 14px;\n    color: #555;\n    margin-bottom: 15px;\n}\n.tweet-profile .tweet-details .count[data-v-49cfff64] {\n    margin: 0;\n    font-size: 22px;\n}\n.tweet-profile .tweet-details .row div[data-v-49cfff64]:not(:last-child) {\n    border-right: 1px solid #ccc;\n}\n.tweet-profile .events[data-v-49cfff64] {\n    border: 1px solid #bbb;\n    padding-top: 2px;\n    padding-bottom: 2px;\n    margin-top: 15px;\n    margin-right: -20px;\n    font-size: 18px;\n    color: #555;\n}\n.tweet-profile .btn-tweet[data-v-49cfff64] {\n    padding: 5px;\n    margin-top: 14px;\n}\n\n\n/*user page*/\n.m-0[data-v-49cfff64] {\n    margin: 0;\n}\n.user-page .cover-image[data-v-49cfff64] {\n    height: 220px;\n    width: 100%;\n}\n.user-page .user-pic[data-v-49cfff64] {\n    width: 90px;\n    padding: 10px;\n}\n.user-page .post-details[data-v-49cfff64] {\n    display: block;\n    padding-top: 25px;\n    font-size: 14px;\n    color: #777;\n}\n.user-page .views[data-v-49cfff64] {\n    background-color: #e5e5e5;\n    padding-top: 12px;\n    padding-bottom: 12px;\n    color: #555;\n}\n.user-page .views[data-v-49cfff64]:not(:last-child) {\n    border-right: 1px solid #FFF;\n}\n\n\n/*top tabbed panel*/\n.tabbbed-bg[data-v-49cfff64] {\n    padding: 0;\n    background-color: #418AC9;\n    border-bottom: 0;\n}\n.tabbbed-bg a[data-v-49cfff64] {\n    color: #FFF;\n}\n.tabbbed-bg + .panel-body[data-v-49cfff64] {\n    min-height: 313px;\n}\n.desc-img img[data-v-49cfff64] {\n    width: 50px;\n    height: 50px;\n    border-radius: 22px;\n    margin-right: 13px;\n}\n.nav-tabs.nav-justified > li > a[data-v-49cfff64] {\n    border-bottom: 0;\n}\n.panel-heading .nav > li.active > a[data-v-49cfff64],\n.panel-heading .nav > li > a[data-v-49cfff64]:hover {\n    color: #777;\n    background: #fff;\n    border-bottom: 1px solid #fff;\n}\n.tab-pane .d-head[data-v-49cfff64] {\n    font-size: 14px;\n    color: #337ab7;\n    font-weight: bold;\n}\n.tab-pane .c-head[data-v-49cfff64] {\n    font-size: 14px;\n}\n.tab-content .media[data-v-49cfff64] {\n    padding-top: 5px;\n    padding-bottom: 5px;\n}\n\n\n/*weekly data line chart*/\n.stats-chart[data-v-49cfff64] {\n    height: 244px;\n    background-color: #3399ff;\n    font-size: 22px;\n}\n\n\n/*echart*/\n.echarts[data-v-49cfff64] {\n    width: 100%;\n    height: 100%;\n}\n.weekly-stats .shots-likes[data-v-49cfff64] {\n    font-weight: bold;\n    font-size: 24px;\n    padding-top: 15px;\n}\n.weekly-stats .weekly-shots[data-v-49cfff64]:after {\n    content: '';\n    width: 1px;\n    height: 75px;\n    position: absolute;\n    right: 0;\n    top: 10px;\n    border-right: 2px solid #ddd;\n}\n.email-tabs[data-v-49cfff64] {\n    background-color: #efefef;\n    border-bottom: 0;\n}\ntextarea[data-v-49cfff64] {\n    resize: vertical;\n}\nul.mail-list[data-v-49cfff64] {\n    padding: 0;\n}\n.table.mail-list[data-v-49cfff64] {\n    margin: 0;\n    table-layout: fixed;\n    width: 100%;\n}\n.mail-list tbody tr[data-v-49cfff64] {\n    height: 45px\n}\n.mail-list tbody tr[data-v-49cfff64]:hover {\n    background-color: #EEE;\n}\n.mail-list td[data-v-49cfff64]:nth-child(1),\n.mail-list td[data-v-49cfff64]:nth-child(2) {\n    width: 10%;\n}\n.mail-list td[data-v-49cfff64]:nth-child(4) {\n    width: 40%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.mail-list .custom-checkbox[data-v-49cfff64]{\n    margin-bottom: 0;\n    margin-top: 7px;\n}\n\n\n/*contact widget*/\n.contact-cover[data-v-49cfff64] {\n    height: 175px;\n    width: 100%;\n    background-image: url(" + escape(__webpack_require__(/*! img/pages/profile-coverbg.jpeg */ "./resources/assets/admin/img/pages/profile-coverbg.jpeg")) + ");\n    background-size: cover;\n    color: #FFF;\n}\n.contact-widget i[data-v-49cfff64] {\n    cursor: pointer;\n}\n.contact-cover .profile-img[data-v-49cfff64] {\n    width: 60%;\n    height: 100%;\n    padding-top: 37px;\n    padding-left: 6%;\n}\n.contact-cover .profile-img .follow[data-v-49cfff64] {\n    position: absolute;\n    top: 110px;\n    left: 35%;\n    font-size: 16px;\n}\n.contact-cover .profile-img img[data-v-49cfff64] {\n    width: 90px;\n    border-radius: 50px;\n    border: 3px solid white;\n}\n.contact-cover .group-icon[data-v-49cfff64] {\n    width: 20%;\n    height: 100%;\n    background-color: rgba(255, 255, 255, 0.19);\n    font-size: 24px;\n    line-height: 180px;\n}\n.contact-cover .search-icon[data-v-49cfff64] {\n    width: 20%;\n    height: 100%;\n    background-color: rgba(255, 255, 255, 0.31);\n    font-size: 24px;\n    line-height: 180px;\n}\n.contact-widget .contact-details[data-v-49cfff64] {\n    font-size: 18px;\n}\n.contact-widget .contact-details h4[data-v-49cfff64] {\n    font-size: 16px;\n    color: #777;\n}\n\n\n/*weather widget*/\n.weather-widget .card-header[data-v-49cfff64] {\n    background-color: #3AAB88;\n    color: #FFF;\n}\n.weather-widget .location i[data-v-49cfff64] {\n    font-size: 60px;\n}\n.weather-widget .location span[data-v-49cfff64] {\n    font-size: 16px;\n}\n.weather-widget .temperature[data-v-49cfff64] {\n    font-size: 54px;\n}\n.weather-widget .details[data-v-49cfff64] {\n    color: #666;\n    font-size: 14px;\n}\n.weather-widget .details[data-v-49cfff64]:not(:last-child) {\n    border-right: 1px solid #CCC;\n}\n\n\n/*profile 2*/\n.profile-2[data-v-49cfff64] {\n    background-color: #7D5BAA;\n    border-color: #ccc;\n}\n.profile-2 .head[data-v-49cfff64] {\n    padding-top: 14px;\n    padding-bottom: 5px;\n    font-size: 18px;\n    background-color: #FFF;\n}\n.profile-2 .data[data-v-49cfff64] {\n    font-size: 15px;\n    padding-top: 7px;\n    padding-bottom: 6px;\n    color: #FFF;\n}\n.border-right[data-v-49cfff64]:after {\n    content: '';\n    width: 1px;\n    height: 64px;\n    position: absolute;\n    right: 0;\n    top: 0;\n    border-right: 1px solid #FFF;\n}\n.profile-2 .border-bottom[data-v-49cfff64]:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    border-bottom: 1px solid #FFF;\n}\n.card-body .form-control[data-v-49cfff64]{\n    -webkit-transition: initial;\n    transition: initial;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/dashboard.vue?vue&type=style&index=2&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/dashboard.vue?vue&type=style&index=2&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=style&index=2&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/dashboard.vue?vue&type=style&index=2&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/dashboard.vue?vue&type=style&index=1&id=49cfff64&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/dashboard.vue?vue&type=style&index=1&id=49cfff64&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=style&index=1&id=49cfff64&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/dashboard.vue?vue&type=style&index=1&id=49cfff64&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/assets/restaurant/css/widgets.css?vue&type=style&index=0&id=49cfff64&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./resources/assets/restaurant/css/widgets.css?vue&type=style&index=0&id=49cfff64&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!./widgets.css?vue&type=style&index=0&id=49cfff64&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/assets/restaurant/css/widgets.css?vue&type=style&index=0&id=49cfff64&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/dashboard.vue?vue&type=template&id=49cfff64&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/dashboard.vue?vue&type=template&id=49cfff64&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "col-lg-3  col-sm-6 mb-3" }, [
        _c(
          "div",
          { staticClass: "text-center p-3 widget_social_icons box_shadow" },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "text-ash" }, [
              _c("h4", { staticClass: "mt-2 text_size" }, [
                _vm._v(_vm._s(_vm.customer_number))
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "m-0 mt-2" }, [_vm._v("Customers")])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-3  col-sm-6 mb-3" }, [
        _c(
          "div",
          { staticClass: "text-center p-3 widget_social_icons box_shadow " },
          [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "text-ash" }, [
              _c("h4", { staticClass: "mb-0 mt-2 text_size" }, [
                _vm._v(_vm._s(_vm.completed_orders))
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "m-0 mt-2" }, [_vm._v("Completed Orders")])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-3 col-md-6 mb-3" }, [
        _c(
          "div",
          { staticClass: "text-center p-3 widget_social_icons box_shadow" },
          [
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "text-ash" }, [
              _c("h4", { staticClass: "mb-0 mt-2 text_size" }, [
                _vm._v(_vm._s(_vm.employee_number))
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "m-0 mt-2" }, [_vm._v("Employees")])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-3  col-md-6 mb-3" }, [
        _c(
          "div",
          { staticClass: "text-center p-3 widget_social_icons box_shadow" },
          [
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "text-ash" }, [
              _c("h4", { staticClass: "mb-0 mt-2 text_size" }, [
                _vm._v(_vm._s(_vm.today_sales))
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "m-0 mt-2" }, [_vm._v("Sales")])
            ])
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-lg-12 col-xl-12" },
        [
          _c("b-card", [
            _c("h5", { staticClass: "ml-3 head_color" }, [
              _vm._v("Daily Sales Report")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "date-range-holder" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { staticClass: "label_font" }, [
                    _vm._v("From: ")
                  ]),
                  _vm._v(" "),
                  _c("datepicker", {
                    model: {
                      value: _vm.sales_graph_begin_date,
                      callback: function($$v) {
                        _vm.sales_graph_begin_date = $$v
                      },
                      expression: "sales_graph_begin_date"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { staticClass: "label_font" }, [_vm._v("To: ")]),
                  _vm._v(" "),
                  _c("datepicker", {
                    model: {
                      value: _vm.sales_graph_end_date,
                      callback: function($$v) {
                        _vm.sales_graph_end_date = $$v
                      },
                      expression: "sales_graph_end_date"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticStyle: { height: "305px", "margin-top": "30px" } },
              [
                _c("IEcharts", {
                  ref: "ajaxbar_chart",
                  attrs: { option: _vm.area_chart, loading: _vm.ajaxloading },
                  on: { ready: _vm.onReady }
                })
              ],
              1
            )
          ])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-12 index2_table" },
        [
          _c("b-card", { attrs: { "no-block": "" } }, [
            _c("h5", { staticClass: "head_color mt-4 ml-3 mb-2" }, [
              _vm._v("Menu Sales")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "table-responsive" },
              [
                _c("datatable", {
                  attrs: {
                    rows: _vm.menuSalesTableData,
                    columns: _vm.menuSalesColumnData,
                    sortable: false
                  }
                })
              ],
              1
            )
          ])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-12 index2_table" },
        [
          _c("b-card", { attrs: { "no-block": "" } }, [
            _c("h5", { staticClass: "head_color mt-4 ml-3 mb-2" }, [
              _vm._v("Registered Customers")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "table-responsive" },
              [
                _c("datatable", {
                  attrs: {
                    rows: _vm.customerTableData,
                    columns: _vm.columndata
                  },
                  model: {
                    value: _vm.customer_action,
                    callback: function($$v) {
                      _vm.customer_action = $$v
                    },
                    expression: "customer_action"
                  }
                })
              ],
              1
            )
          ])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-12 index2_table" },
        [
          _c("b-card", { attrs: { "no-block": "" } }, [
            _c("h5", { staticClass: "head_color mt-4 ml-3 mb-2" }, [
              _vm._v("Orders")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "table-responsive" },
              [
                _c("datatable", {
                  attrs: {
                    rows: _vm.orderTableData,
                    columns: _vm.orderColumndata,
                    sortable: false
                  }
                })
              ],
              1
            )
          ])
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "widget_social_inner1" }, [
      _c("i", { staticClass: "fa fa-user-o fb_text" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "widget_social_inner1" }, [
      _c("img", {
        staticClass: "icon-image",
        attrs: { src: "public/Images/Dashboard/order.png" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: " widget_social_inner1" }, [
      _c("img", {
        staticClass: "icon-image",
        attrs: { src: "public/Images/Dashboard/employee.png" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: " widget_social_inner1" }, [
      _c("img", {
        staticClass: "icon-image",
        attrs: { src: "public/Images/Dashboard/sales.jpg" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/restaurant/components/pages/dashboard.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/dashboard.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_vue_vue_type_template_id_49cfff64_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=49cfff64&scoped=true& */ "./resources/assets/restaurant/components/pages/dashboard.vue?vue&type=template&id=49cfff64&scoped=true&");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js& */ "./resources/assets/restaurant/components/pages/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _css_widgets_css_vue_type_style_index_0_id_49cfff64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/widgets.css?vue&type=style&index=0&id=49cfff64&scoped=true&lang=css& */ "./resources/assets/restaurant/css/widgets.css?vue&type=style&index=0&id=49cfff64&scoped=true&lang=css&");
/* harmony import */ var _dashboard_vue_vue_type_style_index_1_id_49cfff64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.vue?vue&type=style&index=1&id=49cfff64&scoped=true&lang=css& */ "./resources/assets/restaurant/components/pages/dashboard.vue?vue&type=style&index=1&id=49cfff64&scoped=true&lang=css&");
/* harmony import */ var _dashboard_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.vue?vue&type=style&index=2&lang=scss& */ "./resources/assets/restaurant/components/pages/dashboard.vue?vue&type=style&index=2&lang=scss&");
/* harmony import */ var chartist_dist_chartist_css_vue_type_style_index_3_lang_css___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chartist/dist/chartist.css?vue&type=style&index=3&lang=css& */ "./node_modules/chartist/dist/chartist.css?vue&type=style&index=3&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");









/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_6__["default"])(
  _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dashboard_vue_vue_type_template_id_49cfff64_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dashboard_vue_vue_type_template_id_49cfff64_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "49cfff64",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/restaurant/components/pages/dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/dashboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/dashboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/dashboard.vue?vue&type=style&index=1&id=49cfff64&scoped=true&lang=css&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/dashboard.vue?vue&type=style&index=1&id=49cfff64&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_1_id_49cfff64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=style&index=1&id=49cfff64&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/dashboard.vue?vue&type=style&index=1&id=49cfff64&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_1_id_49cfff64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_1_id_49cfff64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_1_id_49cfff64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_1_id_49cfff64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_1_id_49cfff64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/dashboard.vue?vue&type=style&index=2&lang=scss&":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/dashboard.vue?vue&type=style&index=2&lang=scss& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=style&index=2&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/dashboard.vue?vue&type=style&index=2&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/dashboard.vue?vue&type=template&id=49cfff64&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/dashboard.vue?vue&type=template&id=49cfff64&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_49cfff64_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=template&id=49cfff64&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/dashboard.vue?vue&type=template&id=49cfff64&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_49cfff64_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_49cfff64_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/restaurant/css/widgets.css?vue&type=style&index=0&id=49cfff64&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/assets/restaurant/css/widgets.css?vue&type=style&index=0&id=49cfff64&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_widgets_css_vue_type_style_index_0_id_49cfff64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!./widgets.css?vue&type=style&index=0&id=49cfff64&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/assets/restaurant/css/widgets.css?vue&type=style&index=0&id=49cfff64&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_widgets_css_vue_type_style_index_0_id_49cfff64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_widgets_css_vue_type_style_index_0_id_49cfff64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_widgets_css_vue_type_style_index_0_id_49cfff64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_widgets_css_vue_type_style_index_0_id_49cfff64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_widgets_css_vue_type_style_index_0_id_49cfff64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);