(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[88],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/image_cropper.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/image_cropper.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_croppa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-croppa */ "./node_modules/vue-croppa/dist/vue-croppa.js");
/* harmony import */ var vue_croppa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_croppa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_croppa_dist_vue_croppa_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-croppa/dist/vue-croppa.css */ "./node_modules/vue-croppa/dist/vue-croppa.css");
/* harmony import */ var vue_croppa_dist_vue_croppa_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_croppa_dist_vue_croppa_css__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_croppa__WEBPACK_IMPORTED_MODULE_1___default.a); // If your build tool supports css module



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      myCroppa: null,
      imgUrl: '',
      resizing: false,
      resizableW: 200,
      resizableH: 200,
      croppa2: {},
      croppa: {},
      sliderVal: 0,
      sliderMin: 0,
      sliderMax: 0
    };
  },
  mounted: function mounted() {
    var _this = this;

    document.documentElement.addEventListener('mousemove', function (evt) {
      evt.preventDefault();

      _this.onResizeTouchMove(evt);
    });
    document.documentElement.addEventListener('mouseup', function (evt) {
      evt.preventDefault();

      _this.onResizeTouchEnd(evt);
    });
  },
  methods: {
    onNewImage: function onNewImage() {
      this.sliderVal = this.croppa.scaleRatio;
      this.sliderMin = this.croppa.scaleRatio / 2;
      this.sliderMax = this.croppa.scaleRatio * 2;
    },
    onSliderChange: function onSliderChange(evt) {
      var increment = evt.target.value;
      this.croppa.scaleRatio = +increment;
    },
    onZoom: function onZoom() {
      this.sliderVal = this.croppa.scaleRatio;
    },
    rotate: function rotate() {
      this.croppa2.rotate();
    },
    flipX: function flipX() {
      this.croppa2.flipX();
    },
    flipY: function flipY() {
      this.croppa2.flipY();
    },
    onResizeTouchStart: function onResizeTouchStart(evt) {
      this.resizing = true;
    },
    onResizeTouchMove: function onResizeTouchMove(evt) {
      if (!this.resizing) return;
      document.documentElement.style.cursor = 'nwse-resize';
      var croppa = document.querySelector('.resizable-croppa');
      this.resizableW = evt.clientX - croppa.getBoundingClientRect().left;
      this.resizableH = evt.clientY - croppa.getBoundingClientRect().top;
    },
    onResizeTouchEnd: function onResizeTouchEnd(evt) {
      this.resizing = false;
      document.documentElement.style.cursor = 'default';
    },
    generateImage: function generateImage() {
      var url = this.myCroppa.generateDataUrl();

      if (!url) {
        alert('no image');
        return;
      }

      this.imgUrl = url;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/image_cropper.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/image_cropper.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.croppa-container {\n    background-color: white;\n    border: 3px solid black\n}\n.wrapper-image{\n    position: relative;\n    display: inline-block;\n    /*font-size: 0;*/\n    margin-top:0;\n    min-height:auto !important;\n}\n.icon-resize {\n    position: absolute;\n    right: 4px;\n    bottom: 4px;\n    font-size: 16px;\n    width: 2em;\n    cursor: nwse-resize;\n}\n.resizable-croppa canvas{\n    max-width:100%;\n}\ninput[type=range] {\n    width: 500px;\n}\n@media(max-width:767px){\ninput[type=range] {\n        width: 250px;\n}\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/image_cropper.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/image_cropper.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./image_cropper.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/image_cropper.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/image_cropper.vue?vue&type=template&id=c9b1ea2e&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/image_cropper.vue?vue&type=template&id=c9b1ea2e& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      { staticClass: "col-12" },
      [
        _c(
          "b-card",
          {
            staticClass: "mb-5 bg-default-card",
            attrs: { header: "Image Cropper", "header-tag": "h4" }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-6" },
                [
                  _c("croppa", {
                    attrs: { "canvas-color": "transparent" },
                    model: {
                      value: _vm.myCroppa,
                      callback: function($$v) {
                        _vm.myCroppa = $$v
                      },
                      expression: "myCroppa"
                    }
                  }),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success mt-4",
                      on: { click: _vm.generateImage }
                    },
                    [_vm._v("Generate")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-6" }, [
                _c("img", { staticClass: "output", attrs: { src: _vm.imgUrl } })
              ])
            ])
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-12" },
      [
        _c(
          "b-card",
          {
            staticClass: "mb-5 bg-default-card",
            attrs: { header: "Image Resizable", "header-tag": "h4" }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12" }, [
                _c(
                  "div",
                  { staticClass: "wrapper-image" },
                  [
                    _c("croppa", {
                      staticClass: "resizable-croppa",
                      attrs: { height: _vm.resizableH, width: _vm.resizableW }
                    }),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "icon-resize",
                      attrs: {
                        src: __webpack_require__(/*! ../../img/pages/resize-bottom-right.svg */ "./resources/assets/admin/img/pages/resize-bottom-right.svg")
                      },
                      on: {
                        mousedown: function($event) {
                          $event.stopPropagation()
                          $event.preventDefault()
                          return _vm.onResizeTouchStart($event)
                        }
                      }
                    })
                  ],
                  1
                )
              ])
            ])
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-12" },
      [
        _c(
          "b-card",
          {
            staticClass: "mb-5 bg-default-card",
            attrs: { header: "Image Rotation", "header-tag": "h4" }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-12" },
                [
                  _c("croppa", {
                    attrs: { width: 200, height: 200 },
                    model: {
                      value: _vm.croppa2,
                      callback: function($$v) {
                        _vm.croppa2 = $$v
                      },
                      expression: "croppa2"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12 mt-4" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          on: { click: _vm.rotate }
                        },
                        [_vm._v("ROTATE")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary ml-2",
                          on: { click: _vm.flipX }
                        },
                        [_vm._v("FLIP-X")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary  ml-2",
                          on: { click: _vm.flipY }
                        },
                        [_vm._v("FLIP-Y")]
                      )
                    ])
                  ])
                ],
                1
              )
            ])
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-12" },
      [
        _c(
          "b-card",
          {
            staticClass: "mb-5 bg-default-card",
            attrs: { header: "Zoom Slider", "header-tag": "h4" }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-12" },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.sliderVal,
                        expression: "sliderVal"
                      }
                    ],
                    attrs: {
                      type: "range",
                      min: _vm.sliderMin,
                      max: _vm.sliderMax,
                      step: ".001"
                    },
                    domProps: { value: _vm.sliderVal },
                    on: {
                      input: _vm.onSliderChange,
                      __r: function($event) {
                        _vm.sliderVal = $event.target.value
                      }
                    }
                  }),
                  _vm._v(
                    " " + _vm._s(_vm.sliderVal) + "\n                    "
                  ),
                  _c("br"),
                  _c("br"),
                  _vm._v(" "),
                  _c("croppa", {
                    staticClass: "mt-3",
                    on: { "new-image-drawn": _vm.onNewImage, zoom: _vm.onZoom },
                    model: {
                      value: _vm.croppa,
                      callback: function($$v) {
                        _vm.croppa = $$v
                      },
                      expression: "croppa"
                    }
                  })
                ],
                1
              )
            ])
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

/***/ "./resources/assets/admin/components/pages/image_cropper.vue":
/*!*******************************************************************!*\
  !*** ./resources/assets/admin/components/pages/image_cropper.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image_cropper_vue_vue_type_template_id_c9b1ea2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image_cropper.vue?vue&type=template&id=c9b1ea2e& */ "./resources/assets/admin/components/pages/image_cropper.vue?vue&type=template&id=c9b1ea2e&");
/* harmony import */ var _image_cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image_cropper.vue?vue&type=script&lang=js& */ "./resources/assets/admin/components/pages/image_cropper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _image_cropper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image_cropper.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/admin/components/pages/image_cropper.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _image_cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _image_cropper_vue_vue_type_template_id_c9b1ea2e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _image_cropper_vue_vue_type_template_id_c9b1ea2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/admin/components/pages/image_cropper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/admin/components/pages/image_cropper.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/image_cropper.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./image_cropper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/image_cropper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/admin/components/pages/image_cropper.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/image_cropper.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_image_cropper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./image_cropper.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/image_cropper.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_image_cropper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_image_cropper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_image_cropper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_image_cropper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_image_cropper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/admin/components/pages/image_cropper.vue?vue&type=template&id=c9b1ea2e&":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/image_cropper.vue?vue&type=template&id=c9b1ea2e& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_image_cropper_vue_vue_type_template_id_c9b1ea2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./image_cropper.vue?vue&type=template&id=c9b1ea2e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/image_cropper.vue?vue&type=template&id=c9b1ea2e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_image_cropper_vue_vue_type_template_id_c9b1ea2e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_image_cropper_vue_vue_type_template_id_c9b1ea2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/admin/img/pages/resize-bottom-right.svg":
/*!******************************************************************!*\
  !*** ./resources/assets/admin/img/pages/resize-bottom-right.svg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "public/images/resize-bottom-right.svg?c208ea81efa44fc63eebe061b4f8eb33";

/***/ })

}]);