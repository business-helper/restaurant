(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[207],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/transitions.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/transitions.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
__webpack_require__(/*! vue2-animate/dist/vue2-animate.min.css */ "./node_modules/vue2-animate/dist/vue2-animate.min.css");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ContactUs",
  mounted: function mounted() {
    this.fill_word();
  },
  data: function data() {
    return {
      lorem: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Duis vestibulum tincidunt turpis Etiam eget eleifend elit In et vestibulum ipsum Donec eu convallis urna Pellentesque sit amet accumsan leo Aliquam elementum justo turpis mollis maximus libero faucibus non Vivamus et eros libero',
      words: [],
      items: ['Sakura', 'Sunflower', 'Rose'],
      input: 'Hello',
      effect: 'bounceDown'
    };
  },
  methods: {
    fill_word: function fill_word() {
      this.words = this.lorem.split(' ');
    },
    addItem: function addItem() {
      if (!this.input) {
        return;
      }

      this.items.splice(0, 0, this.input);
      this.input = this.words.shift();

      if (!this.words.length) {
        this.words = this.lorem.split(' ');
      }
    },
    reset: function reset() {
      this.items = [];
    }
  },
  destroyed: function destroyed() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/transitions.vue?vue&type=template&id=9c222410&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/transitions.vue?vue&type=template&id=9c222410& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "col-md-12" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-primary-card",
              attrs: { header: "Select an effect", "header-tag": "h4" }
            },
            [
              _c("div", { staticClass: "row", attrs: { id: "demo" } }, [
                _c("div", { staticClass: "col-lg-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.effect,
                            expression: "effect"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { name: "effect" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.effect = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      [
                        _c("optgroup", { attrs: { label: "Bounce" } }, [
                          _c("option", { attrs: { value: "bounce" } }, [
                            _vm._v("bounce")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "bounceDown" } }, [
                            _vm._v("bounceDown")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "bounceLeft" } }, [
                            _vm._v("bounceLeft")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "bounceRight" } }, [
                            _vm._v("bounceRight")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "bounceUp" } }, [
                            _vm._v("bounceUp")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("optgroup", { attrs: { label: "Fade" } }, [
                          _c("option", { attrs: { value: "fade" } }, [
                            _vm._v("fade")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "fadeDown" } }, [
                            _vm._v("fadeDown")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "fadeDownBig" } }, [
                            _vm._v("fadeDownBig")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "fadeLeft" } }, [
                            _vm._v("fadeLeft")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "fadeLeftBig" } }, [
                            _vm._v("fadeLeftBig")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "fadeRight" } }, [
                            _vm._v("fadeRight")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "fadeRightBig" } }, [
                            _vm._v("fadeRightBig")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "fadeUp" } }, [
                            _vm._v("fadeUp")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "fadeUpBig" } }, [
                            _vm._v("fadeUpBig")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("optgroup", { attrs: { label: "Rotate" } }, [
                          _c("option", { attrs: { value: "rotate" } }, [
                            _vm._v("rotate")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "rotateDownLeft" } }, [
                            _vm._v("rotateDownLeft")
                          ]),
                          _vm._v(" "),
                          _c(
                            "option",
                            { attrs: { value: "rotateDownRight" } },
                            [_vm._v("rotateDownRight")]
                          ),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "rotateUpLeft" } }, [
                            _vm._v("rotateUpLeft")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "rotateUpRight" } }, [
                            _vm._v("rotateUpRight")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("optgroup", { attrs: { label: "Slide" } }, [
                          _c("option", { attrs: { value: "slideDown" } }, [
                            _vm._v("slideDown")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "slideLeft" } }, [
                            _vm._v("slideLeft")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "slideRight" } }, [
                            _vm._v("slideRight")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "slideUp" } }, [
                            _vm._v("slideUp")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("optgroup", { attrs: { label: "Zoom" } }, [
                          _c("option", { attrs: { value: "zoom" } }, [
                            _vm._v("zoom")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "zoomDown" } }, [
                            _vm._v("zoomDown")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "zoomLeft" } }, [
                            _vm._v("zoomLeft")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "zoomRight" } }, [
                            _vm._v("zoomRight")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "zoomUp" } }, [
                            _vm._v("zoomUp")
                          ])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "code-sample" }, [
                    _c("pre", [
                      _c("code", [
                        _vm._v(
                          '<transition-group name="' +
                            _vm._s(_vm.effect) +
                            '" tag="ul" class="list-group">\n    <li v-for="(item, i) in items" class="list-group-item" v-bind:key="i">'
                        ),
                        _c("span", { pre: true }, [_vm._v("{{ item }}")]),
                        _vm._v("</li>\n</transition-group>")
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  {
                    staticClass: "col-lg-12 mt-5",
                    attrs: { id: "demo-component" }
                  },
                  [
                    _c("h4", [_vm._v("Add some input")]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "text-toolbar" },
                      [
                        _c(
                          "b-input-group",
                          [
                            _c("b-form-input", {
                              attrs: { type: "text", min: "0.00" }
                            }),
                            _vm._v(" "),
                            _c(
                              "b-input-group-append",
                              [
                                _c(
                                  "b-btn",
                                  {
                                    attrs: { variant: "success" },
                                    on: { click: _vm.addItem }
                                  },
                                  [_vm._v("Add")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-btn",
                                  {
                                    staticClass: "text-white",
                                    attrs: { variant: "danger" },
                                    on: { click: _vm.reset }
                                  },
                                  [_vm._v("Reset")]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "list-box mt-5" },
                      [
                        _c(
                          "transition-group",
                          {
                            staticClass: "list-group",
                            attrs: { name: _vm.effect, tag: "ul" }
                          },
                          _vm._l(_vm.items, function(item, i) {
                            return _c(
                              "li",
                              { key: item, staticClass: "list-group-item" },
                              [_vm._v(_vm._s(item))]
                            )
                          }),
                          0
                        )
                      ],
                      1
                    )
                  ]
                )
              ])
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

/***/ "./resources/assets/restaurant/components/pages/transitions.vue":
/*!**********************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/transitions.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transitions_vue_vue_type_template_id_9c222410___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transitions.vue?vue&type=template&id=9c222410& */ "./resources/assets/restaurant/components/pages/transitions.vue?vue&type=template&id=9c222410&");
/* harmony import */ var _transitions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitions.vue?vue&type=script&lang=js& */ "./resources/assets/restaurant/components/pages/transitions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _transitions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _transitions_vue_vue_type_template_id_9c222410___WEBPACK_IMPORTED_MODULE_0__["render"],
  _transitions_vue_vue_type_template_id_9c222410___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/restaurant/components/pages/transitions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/transitions.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/transitions.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_transitions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./transitions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/transitions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_transitions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/transitions.vue?vue&type=template&id=9c222410&":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/transitions.vue?vue&type=template&id=9c222410& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_transitions_vue_vue_type_template_id_9c222410___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./transitions.vue?vue&type=template&id=9c222410& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/transitions.vue?vue&type=template&id=9c222410&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_transitions_vue_vue_type_template_id_9c222410___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_transitions_vue_vue_type_template_id_9c222410___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);