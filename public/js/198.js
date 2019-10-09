(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[198],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/vue_slider.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/vue_slider.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_slider_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-slider-component */ "./node_modules/vue-slider-component/dist/index.js");
/* harmony import */ var vue_slider_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_slider_component__WEBPACK_IMPORTED_MODULE_0__);
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "vue_slider",
  components: {
    vueSlider: vue_slider_component__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      value: 15,
      value1: 35,
      value2: [20, 50],
      value3: "jul"
    };
  },
  mounted: function mounted() {},
  destroyed: function destroyed() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/vue_slider.vue?vue&type=template&id=3fd32670&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/vue_slider.vue?vue&type=template&id=3fd32670& ***!
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
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-lg-12 mb-2" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-default-card",
              attrs: { header: " Basic", "header-tag": "h4" }
            },
            [
              _c("h5", [_vm._v("The value of slider is " + _vm._s(_vm.value))]),
              _vm._v(" "),
              _c("vue-slider", {
                staticClass: "mt-5",
                model: {
                  value: _vm.value,
                  callback: function($$v) {
                    _vm.value = $$v
                  },
                  expression: "value"
                }
              }),
              _vm._v(" "),
              _c("vue-slider", {
                staticClass: "mt-5 text-center",
                attrs: {
                  direction: "vertical",
                  reverse: true,
                  height: "300px",
                  width: "5"
                },
                model: {
                  value: _vm.value,
                  callback: function($$v) {
                    _vm.value = $$v
                  },
                  expression: "value"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-12 mb-2" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-warning-card",
              attrs: { header: "Options", "header-tag": "h4" }
            },
            [
              _c("ul", [
                _c("li", [_vm._v("min : 20")]),
                _vm._v(" "),
                _c("li", [_vm._v("max : 90")]),
                _vm._v(" "),
                _c("li", [_vm._v("reverse : true")]),
                _vm._v(" "),
                _c("li", [_vm._v("tooltip-dir : left")]),
                _vm._v(" "),
                _c("li", [_vm._v("interval : 5")]),
                _vm._v(" "),
                _c("li", [_vm._v("piecewise : true")]),
                _vm._v(" "),
                _c("li", [_vm._v("value : " + _vm._s(_vm.value1))])
              ]),
              _vm._v(" "),
              _c("vue-slider", {
                staticClass: "m-t-25",
                attrs: {
                  "tooltip-dir": "left",
                  reverse: true,
                  min: 20,
                  max: 90,
                  interval: 5,
                  piecewise: true
                },
                model: {
                  value: _vm.value1,
                  callback: function($$v) {
                    _vm.value1 = $$v
                  },
                  expression: "value1"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-12 mb-2" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-info-card",
              attrs: { header: " Range", "header-tag": "h4" }
            },
            [
              _c("h5", [
                _vm._v("The value of slider is " + _vm._s(_vm.value2))
              ]),
              _vm._v(" "),
              _c("vue-slider", {
                staticClass: "mt-5",
                attrs: { range: true },
                model: {
                  value: _vm.value2,
                  callback: function($$v) {
                    _vm.value2 = $$v
                  },
                  expression: "value2"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-12 mb-2" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-danger-card",
              attrs: { header: "Custom Data", "header-tag": "h4" }
            },
            [
              _c("h5", [
                _vm._v("The value of slider is " + _vm._s(_vm.value3))
              ]),
              _vm._v(" "),
              _c("vue-slider", {
                staticClass: "mt-5",
                attrs: {
                  data: [
                    "jan",
                    "feb",
                    "mar",
                    "apr",
                    "jun",
                    "jul",
                    "aug",
                    "sept",
                    "oct",
                    "nov",
                    "dec"
                  ],
                  piecewise: true,
                  piecewiseStyle: { backgroundColor: "#000" }
                },
                model: {
                  value: _vm.value3,
                  callback: function($$v) {
                    _vm.value3 = $$v
                  },
                  expression: "value3"
                }
              })
            ],
            1
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

/***/ "./resources/assets/restaurant/components/pages/vue_slider.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/vue_slider.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_slider_vue_vue_type_template_id_3fd32670___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vue_slider.vue?vue&type=template&id=3fd32670& */ "./resources/assets/restaurant/components/pages/vue_slider.vue?vue&type=template&id=3fd32670&");
/* harmony import */ var _vue_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vue_slider.vue?vue&type=script&lang=js& */ "./resources/assets/restaurant/components/pages/vue_slider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vue_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vue_slider_vue_vue_type_template_id_3fd32670___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vue_slider_vue_vue_type_template_id_3fd32670___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/restaurant/components/pages/vue_slider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/vue_slider.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/vue_slider.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vue_slider.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/vue_slider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/vue_slider.vue?vue&type=template&id=3fd32670&":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/vue_slider.vue?vue&type=template&id=3fd32670& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_slider_vue_vue_type_template_id_3fd32670___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vue_slider.vue?vue&type=template&id=3fd32670& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/vue_slider.vue?vue&type=template&id=3fd32670&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_slider_vue_vue_type_template_id_3fd32670___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_slider_vue_vue_type_template_id_3fd32670___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);