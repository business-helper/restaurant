(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[182],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/card.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/card.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "cards",
  components: {},
  data: function data() {
    return {
      tabIndex: null,
      tabs: [],
      tabCounter: 0
    };
  },
  methods: {
    closeTab: function closeTab(x) {
      for (var i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i] === x) {
          this.tabs.splice(i, 1);
        }
      }
    },
    newTab: function newTab() {
      if (this.tabCounter < 4) {
        this.tabs.push(this.tabCounter++);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/card.vue?vue&type=template&id=66542b46&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/card.vue?vue&type=template&id=66542b46& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-lg-6" },
          [
            _c(
              "b-card",
              {
                staticClass: "mb-1 mt-4 pt-1 bg-primary",
                attrs: { variant: "primary" }
              },
              [
                _c("h5", { staticClass: "text-white" }, [
                  _vm._v(" Card Primary")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "b-card",
              {
                staticClass: "mb-1 pt-2 bg-danger",
                attrs: { variant: "danger" }
              },
              [_c("h5", { staticClass: "text-white" }, [_vm._v("Card Danger")])]
            ),
            _vm._v(" "),
            _c(
              "b-card",
              {
                staticClass: "mb-1 pt-2 bg-warning",
                attrs: { variant: "warning" }
              },
              [
                _c("h5", { staticClass: "text-white" }, [
                  _vm._v("Card Warning")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "b-card",
              {
                staticClass: "mb-5 pt-2 bg-success",
                attrs: { variant: "success" }
              },
              [
                _c("h5", { staticClass: "text-white" }, [
                  _vm._v("Card Success")
                ])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-lg-6" },
          [
            _c(
              "b-card",
              {
                staticClass: " bg-success-card mb-3 mt-4",
                attrs: {
                  header: "Card Header & Footer",
                  "header-tag": "h4",
                  title: "Main Title",
                  "sub-title": "Card subtitle",
                  "show-footer": ""
                }
              },
              [
                _c("p", [
                  _vm._v(
                    "\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum.\n                "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    staticClass: "mt-2",
                    attrs: { slot: "footer" },
                    slot: "footer"
                  },
                  [
                    _vm._v(
                      "\n                    Last updated 3 mins ago\n                "
                    )
                  ]
                )
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-lg-12" },
          [
            _c(
              "b-card",
              {
                staticClass: "bg-info-card",
                attrs: { header: "Card Alignments", "header-tag": "h4" }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-lg-4" },
                    [
                      _c(
                        "b-card",
                        {
                          staticClass: "mb-2 mt-2 bg-primary-card",
                          attrs: {
                            header: "Card Left",
                            "header-tag": "h4",
                            align: "left"
                          }
                        },
                        [
                          _c("p", [
                            _vm._v(
                              "\n                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy\n                            "
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
                    { staticClass: "col-lg-4" },
                    [
                      _c(
                        "b-card",
                        {
                          staticClass: "mb-2 mt-2 bg-danger-card",
                          attrs: {
                            header: "Card center",
                            "header-tag": "h4",
                            align: "center"
                          }
                        },
                        [
                          _c("p", [
                            _vm._v(
                              "\n                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Ipsum.\n                            "
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
                    { staticClass: "col-lg-4" },
                    [
                      _c(
                        "b-card",
                        {
                          staticClass: "mb-2 mt-2 bg-warning-card",
                          attrs: {
                            header: "Card Right",
                            "header-tag": "h4",
                            align: "right"
                          }
                        },
                        [
                          _c("p", [
                            _vm._v(
                              "\n                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Ipsum.\n                            "
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ])
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "b-card",
        {
          staticClass: "bg-danger-card",
          attrs: { "header-tag": "h4", header: "Cards with Different Tabs" }
        },
        [
          _c("div", { staticClass: "row " }, [
            _c(
              "div",
              { staticClass: "col-lg-12" },
              [
                _c(
                  "b-tabs",
                  [
                    _c("b-tab", { attrs: { title: "First tab", active: "" } }, [
                      _c("p", { staticClass: "mt-4" }, [
                        _vm._v(
                          " I'm the first fading tab Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n                        "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("b-tab", { attrs: { title: "Second tab" } }, [
                      _c("p", { staticClass: "mt-4" }, [
                        _vm._v(
                          " I'm the Second fading tab Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n                        "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("b-tab", { attrs: { title: "Third tab" } }, [
                      _c("p", { staticClass: "mt-4" }, [
                        _vm._v(
                          " I'm the Third fading tab Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n                        "
                        )
                      ])
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-lg-12" },
          [
            _c(
              "b-card",
              {
                staticClass: "mb-5 mt-2 bg-info-card",
                attrs: { header: "Cards With Content", "header-tag": "h4" }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-lg-6" },
                    [
                      _c(
                        "b-card",
                        {
                          staticClass: "mb-5 mt-4",
                          attrs: {
                            header: "Card Header",
                            "header-tag": "h4",
                            title: "Main Title"
                          }
                        },
                        [
                          _c("p", [
                            _vm._v(
                              "\n                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum.\n                            "
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
                    { staticClass: "col-lg-6" },
                    [
                      _c(
                        "b-card",
                        {
                          staticClass: "mb-3 mt-4",
                          attrs: { title: "Main Title", "show-footer": "" }
                        },
                        [
                          _c("p", [
                            _vm._v(
                              "\n                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum.\n                            "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "mt-3",
                              attrs: { slot: "footer" },
                              slot: "footer"
                            },
                            [
                              _vm._v(
                                "\n                    Last updated 3 mins ago\n               "
                              )
                            ]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ])
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-lg-6" },
          [
            _c(
              "b-card",
              {
                staticClass: "mb-5  bg-success-card",
                attrs: {
                  "show-footer": "",
                  header: "Card With image",
                  "header-tag": "h4"
                }
              },
              [
                _c("img", {
                  staticClass: "img-fluid ",
                  attrs: { src: __webpack_require__(/*! img/pages/headsset.jpg */ "./resources/assets/admin/img/pages/headsset.jpg") }
                }),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    staticClass: "pt-3",
                    attrs: { slot: "footer" },
                    slot: "footer"
                  },
                  [
                    _vm._v(
                      "\n                    Lorem Ipsum is simply dummy text of the printing and typesetting\n                "
                    )
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
          { staticClass: "col-lg-6" },
          [
            _c(
              "b-card",
              {
                staticClass: "mb-5 bg-info text-white",
                attrs: {
                  header: "Card",
                  "header-tag": "h4",
                  variant: "info",
                  title: "Main Title"
                }
              },
              [
                _c("p", { staticClass: "text-white" }, [
                  _vm._v(
                    "\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum.\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-white" }, [
                  _vm._v(
                    "\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum.\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-white" }, [
                  _vm._v(
                    "\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum.\n                "
                  )
                ])
              ]
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/admin/img/pages/headsset.jpg":
/*!*******************************************************!*\
  !*** ./resources/assets/admin/img/pages/headsset.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "public/images/headsset.jpg?de2882cf13cf950c6b7157d9dd8debea";

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/card.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/card.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card_vue_vue_type_template_id_66542b46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.vue?vue&type=template&id=66542b46& */ "./resources/assets/restaurant/components/pages/card.vue?vue&type=template&id=66542b46&");
/* harmony import */ var _card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.vue?vue&type=script&lang=js& */ "./resources/assets/restaurant/components/pages/card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _card_vue_vue_type_template_id_66542b46___WEBPACK_IMPORTED_MODULE_0__["render"],
  _card_vue_vue_type_template_id_66542b46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/restaurant/components/pages/card.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/card.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/card.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./card.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/card.vue?vue&type=template&id=66542b46&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/card.vue?vue&type=template&id=66542b46& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_template_id_66542b46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./card.vue?vue&type=template&id=66542b46& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/card.vue?vue&type=template&id=66542b46&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_template_id_66542b46___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_template_id_66542b46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);