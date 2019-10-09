(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[93],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/api.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/api.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_widgets_weather_weather_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/widgets/weather/weather.vue */ "./resources/assets/admin/components/widgets/weather/weather.vue");
/* harmony import */ var vue_echarts_v3_src_full_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-echarts-v3/src/full.js */ "./node_modules/vue-echarts-v3/src/full.js");
/* harmony import */ var zrender_lib_vml_vml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! zrender/lib/vml/vml */ "./node_modules/zrender/lib/vml/vml.js");
/* harmony import */ var zrender_lib_vml_vml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(zrender_lib_vml_vml__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var zrender_lib_graphic_LinearGradient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zrender/lib/graphic/LinearGradient */ "./node_modules/zrender/lib/graphic/LinearGradient.js");
/* harmony import */ var zrender_lib_graphic_LinearGradient__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(zrender_lib_graphic_LinearGradient__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_plugins_DataTable_DataTable_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/plugins/DataTable/DataTable.vue */ "./resources/assets/admin/components/plugins/DataTable/DataTable.vue");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/api.service */ "./resources/assets/admin/common/api.service.js");
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




 //data tables
//    import Vue from 'vue';



var unsub;
/* harmony default export */ __webpack_exports__["default"] = ({
  // ===Component name
  name: "API",
  // ===Props passed to component
  props: {},
  // ===Components used by this component
  components: {
    weather: components_widgets_weather_weather_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    IEcharts: vue_echarts_v3_src_full_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    datatable: components_plugins_DataTable_DataTable_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      serverdata: [],
      instances: [],
      loading: false,
      ajaxloading: false,
      //=========AJAX linechart start=======
      serverline: {
        tooltip: {},
        grid: {
          top: 10,
          bottom: 35,
          right: '7%'
        },
        xAxis: {
          axisLine: {
            lineStyle: {
              color: '#46a092'
            }
          },
          data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: '#46a092'
            }
          },
          axisTick: {
            show: true,
            alignWithLabel: false,
            interval: 'auto',
            inside: false,
            length: 5
          }
        },
        series: [{
          name: 'item 1',
          type: 'line',
          symbolSize: 5,
          data: [],
          color: '#46a092'
        }, {
          name: 'item 2',
          type: 'line',
          symbolSize: 5,
          data: [],
          color: '#46a092'
        }]
      },
      //=========AJAX linechart end=========
      //===========user_list data table======
      tableData: [],
      columndata: [{
        label: 'ID',
        field: 'id',
        numeric: true,
        html: false
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
        label: 'Actions',
        field: 'action',
        numeric: false,
        html: true
      }],
      //===========AJAX chart data start=========
      ajaxbar: {
        grid: {
          top: 25,
          bottom: 40,
          right: '7%'
        },
        xAxis: {
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          axisLabel: {
            inside: false,
            textStyle: {
              color: '#000'
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 10
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#999'
            }
          }
        },
        series: [{
          type: 'bar',
          itemStyle: {
            normal: {
              color: '#6f8dd5'
            }
          },
          data: []
        }]
      },
      //===========AJAX chart data end=========
      //==========AJAX pie chart data start=====
      ajaxpie: {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: []
        },
        series: [{
          name: 'Source',
          type: 'pie',
          radius: '80%',
          center: ['50%', '50%'],
          data: [],
          color: ['#d69292', '#8599c1', '#4f699c', '#8fa9dc', '#d4ab6e']
        }]
      } //==========AJAX pie chart data end=====

    };
  },
  // ===Code to be executed when Component is mounted
  mounted: function mounted() {
    var _this = this;

    unsub = this.$store.subscribe(function (mutation, state) {
      if (mutation.type == "left_menu") {
        _this.instances.forEach(function (item, index) {
          setTimeout(function () {
            item.resize();
          });
        });
      }
    });
    axios.get("http://www.filltext.com/?rows=2&chartdata={numberArray|7,50}").then(function (response) {
      for (var i = 0; i < response.data.length; i++) {
        _this.serverline.series[i].data = response.data[i].chartdata;
      }

      _this.ajaxloading = false;
    })["catch"](function (error) {});
    _common_api_service__WEBPACK_IMPORTED_MODULE_6__["default"].get('auth/user_list').then(function (response) {
      _this.tableData = response.data.users;

      _this.tableData.forEach(function (item, index) {
        _this.$set(item, "action", "<a class='btn btn-info clickable' href='#/edit_user_api/" + item.id + "'>Edit</a> " + "<a class='btn btn-warning clickable' href='#/view_user_api/" + item.id + "'>View</a>");
      });
    })["catch"](function (error) {}); // axios.get("http://www.filltext.com/?rows=20&id={index}&name={firstName}~{lastName}&village={firstName}&email={email}&age={numberRange|20,60}&status=[%22Activated%22,%22Deactivated%22]").then(response => {
    //     this.tableData = response.data;
    //     this.tableData.forEach((item, index) => {
    //         this.$set(item, "action", "<a class='btn btn-info text-white' href='#/edit_user?" + index + "'>Edit</a>");
    //     });
    // })
    //     .catch(function (error) {
    //     });

    axios.get("http://www.filltext.com/?rows=1&chartdata={numberArray|12,100}").then(function (response) {
      _this.ajaxbar.series[0].data = response.data[0].chartdata;
      _this.ajaxloading = false;
    })["catch"](function (error) {});
    axios.get("http://www.filltext.com/?rows=5&value={number|50}&name={usState|abbr}").then(function (response) {
      _this.ajaxpie.series[0].data = response.data;
      response.data.forEach(function (item, index) {
        _this.ajaxpie.legend.data.push(item.name);
      });
      _this.ajaxloading = false;
    })["catch"](function (error) {});
  },
  // ===Computed properties for the component
  computed: {},
  // ===Component methods
  methods: {
    onReady: function onReady(instance) {
      this.instances.push(instance);
    }
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    unsub();
    next();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/api.vue?vue&type=style&index=0&id=2f8f764c&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/api.vue?vue&type=style&index=0&id=2f8f764c&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.link_font[data-v-2f8f764c] {\n    font-size: 14px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/api.vue?vue&type=style&index=0&id=2f8f764c&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/api.vue?vue&type=style&index=0&id=2f8f764c&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./api.vue?vue&type=style&index=0&id=2f8f764c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/api.vue?vue&type=style&index=0&id=2f8f764c&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/api.vue?vue&type=template&id=2f8f764c&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/api.vue?vue&type=template&id=2f8f764c&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "col-lg-12 m-bt-remv" },
      [
        _c(
          "b-card",
          {
            staticClass: "bg-primary-card",
            attrs: { header: "Weather", "header-tag": "h4" }
          },
          [
            _c("div", { staticClass: "mb-3 link_font" }, [
              _vm._v("\n                API Served from"),
              _c(
                "a",
                { attrs: { href: "//openweathermap.org/api?ref=jyostna" } },
                [_vm._v(" openweathermap.org")]
              )
            ]),
            _vm._v(" "),
            _c("weather", { attrs: { id: "5128638" } })
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-lg-12" },
      [
        _c(
          "b-card",
          {
            staticClass: "bg-primary-card",
            attrs: { header: "Basic Client Table", "header-tag": "h4" }
          },
          [
            _c(
              "div",
              { staticClass: "table-responsive" },
              [
                _c("datatable", {
                  attrs: {
                    title: "Registered Users",
                    rows: _vm.tableData,
                    columns: _vm.columndata
                  }
                })
              ],
              1
            )
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-lg-12" },
      [
        _c(
          "b-card",
          {
            staticClass: "bg-info-card",
            attrs: { header: "AJAX Bar chart", "header-tag": "h4" }
          },
          [
            _c("div", { staticClass: "mb-3 link_font" }, [
              _vm._v("\n                API Served from"),
              _c("a", { attrs: { href: "http://www.filltext.com/" } }, [
                _vm._v(" filltext.com")
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticStyle: { height: "350px" } },
              [
                _c("IEcharts", {
                  attrs: { option: _vm.ajaxbar, loading: _vm.ajaxloading },
                  on: { ready: _vm.onReady }
                })
              ],
              1
            )
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-lg-6 col-xs-12" },
      [
        _c(
          "b-card",
          {
            staticClass: "bg-success-card",
            attrs: { header: "AJAX Line chart", "header-tag": "h4" }
          },
          [
            _c("div", { staticClass: "mb-3 link_font" }, [
              _vm._v("\n                API Served from"),
              _c("a", { attrs: { href: "http://www.filltext.com/" } }, [
                _vm._v(" filltext.com")
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticStyle: { height: "350px" } },
              [
                _c("IEcharts", {
                  attrs: { option: _vm.serverline, loading: _vm.ajaxloading },
                  on: { ready: _vm.onReady }
                })
              ],
              1
            )
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-lg-6 col-xs-12" },
      [
        _c(
          "b-card",
          {
            staticClass: "bg-warning-card",
            attrs: { header: "AJAX Pie chart", "header-tag": "h4" }
          },
          [
            _c("h3", { staticClass: "card-title" }),
            _vm._v(" "),
            _c("div", { staticClass: "mb-3 link_font" }, [
              _vm._v("\n                API Served from"),
              _c("a", { attrs: { href: "http://www.filltext.com/" } }, [
                _vm._v(" filltext.com")
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticStyle: { height: "350px" } },
              [
                _c("IEcharts", {
                  attrs: { option: _vm.ajaxpie, loading: _vm.ajaxloading },
                  on: { ready: _vm.onReady }
                })
              ],
              1
            )
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/admin/components/pages/api.vue":
/*!*********************************************************!*\
  !*** ./resources/assets/admin/components/pages/api.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_vue_vue_type_template_id_2f8f764c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.vue?vue&type=template&id=2f8f764c&scoped=true& */ "./resources/assets/admin/components/pages/api.vue?vue&type=template&id=2f8f764c&scoped=true&");
/* harmony import */ var _api_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.vue?vue&type=script&lang=js& */ "./resources/assets/admin/components/pages/api.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _api_vue_vue_type_style_index_0_id_2f8f764c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.vue?vue&type=style&index=0&id=2f8f764c&scoped=true&lang=css& */ "./resources/assets/admin/components/pages/api.vue?vue&type=style&index=0&id=2f8f764c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _api_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _api_vue_vue_type_template_id_2f8f764c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _api_vue_vue_type_template_id_2f8f764c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2f8f764c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/admin/components/pages/api.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/admin/components/pages/api.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/api.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_api_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./api.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/api.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_api_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/admin/components/pages/api.vue?vue&type=style&index=0&id=2f8f764c&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/api.vue?vue&type=style&index=0&id=2f8f764c&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_api_vue_vue_type_style_index_0_id_2f8f764c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./api.vue?vue&type=style&index=0&id=2f8f764c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/api.vue?vue&type=style&index=0&id=2f8f764c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_api_vue_vue_type_style_index_0_id_2f8f764c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_api_vue_vue_type_style_index_0_id_2f8f764c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_api_vue_vue_type_style_index_0_id_2f8f764c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_api_vue_vue_type_style_index_0_id_2f8f764c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_api_vue_vue_type_style_index_0_id_2f8f764c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/admin/components/pages/api.vue?vue&type=template&id=2f8f764c&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/api.vue?vue&type=template&id=2f8f764c&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_api_vue_vue_type_template_id_2f8f764c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./api.vue?vue&type=template&id=2f8f764c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/api.vue?vue&type=template&id=2f8f764c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_api_vue_vue_type_template_id_2f8f764c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_api_vue_vue_type_template_id_2f8f764c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);