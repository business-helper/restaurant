(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[87],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/form_validations.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/form_validations.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form */ "./node_modules/vue-form/dist/vue-form.js");
/* harmony import */ var vue_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_validations_validations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/validations/validations.js */ "./resources/assets/admin/validations/validations.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_form__WEBPACK_IMPORTED_MODULE_1___default.a, src_validations_validations_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "formfeatures",
  data: function data() {
    return {
      username: "",
      mail: "",
      password: '',
      repeatPassword: '',
      confirm_field: '',
      address: "",
      terms: false,
      formstate: {},
      model: {
        username: "",
        email: "",
        password: '',
        repeatPassword: '',
        gender: 0,
        address: "",
        terms: false
      }
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      if (this.formstate.$invalid) {
        return;
      } else {
        this.$router.push("/form_validations");
      }
    }
  },
  mounted: function mounted() {},
  destroyed: function destroyed() {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/form_validations.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/form_validations.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.form-control{\n    -webkit-transition: initial;\n    transition: initial;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/form_validations.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/form_validations.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form_validations.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/form_validations.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/form_validations.vue?vue&type=template&id=7989a30f&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/form_validations.vue?vue&type=template&id=7989a30f& ***!
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
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "col-lg-12" },
      [
        _c(
          "b-card",
          {
            staticClass: "bg-default-card",
            attrs: { header: "vue-form Validation", "header-tag": "h4" }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-12" },
                [
                  _c(
                    "vue-form",
                    {
                      attrs: { state: _vm.formstate },
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.onSubmit($event)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-sm-12" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "validate",
                                { attrs: { tag: "div" } },
                                [
                                  _c("label", { attrs: { for: "email" } }, [
                                    _vm._v(" User Name")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.model.username,
                                        expression: "model.username"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      name: "username",
                                      type: "text",
                                      required: "",
                                      autofocus: "",
                                      placeholder: "User Name",
                                      id: "email"
                                    },
                                    domProps: { value: _vm.model.username },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.model,
                                          "username",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "field-messages",
                                    {
                                      staticClass: "text-danger",
                                      attrs: {
                                        name: "username",
                                        show: "$invalid && $submitted"
                                      }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          attrs: { slot: "required" },
                                          slot: "required"
                                        },
                                        [_vm._v("Username is a required field")]
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-12" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "validate",
                                { attrs: { tag: "div" } },
                                [
                                  _c(
                                    "label",
                                    { attrs: { for: "email_input" } },
                                    [_vm._v(" E-mail")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.model.email,
                                        expression: "model.email"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      name: "email",
                                      type: "email",
                                      required: "",
                                      placeholder: "E-mail",
                                      id: "email_input"
                                    },
                                    domProps: { value: _vm.model.email },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.model,
                                          "email",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "field-messages",
                                    {
                                      staticClass: "text-danger",
                                      attrs: {
                                        name: "email",
                                        show: "$invalid && $submitted"
                                      }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          attrs: { slot: "required" },
                                          slot: "required"
                                        },
                                        [_vm._v("Email is a required field")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          attrs: { slot: "email" },
                                          slot: "email"
                                        },
                                        [_vm._v("Email is not valid")]
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "validate",
                                { attrs: { tag: "div" } },
                                [
                                  _c(
                                    "label",
                                    { attrs: { for: "email_password" } },
                                    [_vm._v(" Password")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.model.password,
                                        expression: "model.password"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      name: "password",
                                      type: "password",
                                      required: "",
                                      placeholder: "Password",
                                      minlength: "4",
                                      maxlength: "10",
                                      id: "email_password"
                                    },
                                    domProps: { value: _vm.model.password },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.model,
                                          "password",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "field-messages",
                                    {
                                      staticClass: "text-danger",
                                      attrs: {
                                        name: "password",
                                        show: "$invalid && $submitted"
                                      }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          attrs: { slot: "required" },
                                          slot: "required"
                                        },
                                        [_vm._v("Password is required")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          attrs: { slot: "minlength" },
                                          slot: "minlength"
                                        },
                                        [
                                          _vm._v(
                                            "Password should be atleast 4 characters long"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          attrs: { slot: "maxlength" },
                                          slot: "maxlength"
                                        },
                                        [
                                          _vm._v(
                                            "Password should be atmost 10 characters long"
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "validate",
                                { attrs: { tag: "div" } },
                                [
                                  _c(
                                    "label",
                                    { attrs: { for: "email_confirm" } },
                                    [_vm._v(" Confirm Password")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.model.repeatPassword,
                                        expression: "model.repeatPassword"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      name: "repeatpassword",
                                      type: "password",
                                      required: "",
                                      placeholder: "Confirm Password",
                                      sameas: _vm.model.password,
                                      id: "email_confirm"
                                    },
                                    domProps: {
                                      value: _vm.model.repeatPassword
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.model,
                                          "repeatPassword",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "field-messages",
                                    {
                                      staticClass: "text-danger",
                                      attrs: {
                                        name: "repeatpassword",
                                        show: "$invalid && $submitted"
                                      }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          attrs: { slot: "required" },
                                          slot: "required"
                                        },
                                        [
                                          _vm._v(
                                            "Password confirmatoin is required"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          attrs: { slot: "sameas" },
                                          slot: "sameas"
                                        },
                                        [
                                          _vm._v(
                                            "Password and Confirm password should match"
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-12" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "validate",
                                { attrs: { tag: "div" } },
                                [
                                  _c("label", { attrs: { for: "name_gen" } }, [
                                    _vm._v("Gender")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.model.gender,
                                          expression: "model.gender"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        id: "name_gen",
                                        name: "gender",
                                        size: "1",
                                        required: "",
                                        checkbox: ""
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.model,
                                            "gender",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "option",
                                        {
                                          attrs: {
                                            value: "0",
                                            selected: "",
                                            disabled: ""
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                Please select\n                                            "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("option", { attrs: { value: "1" } }, [
                                        _vm._v("Male")
                                      ]),
                                      _vm._v(" "),
                                      _c("option", { attrs: { value: "2" } }, [
                                        _vm._v("Female")
                                      ]),
                                      _vm._v(" "),
                                      _c("option", { attrs: { value: "3" } }, [
                                        _vm._v("Other")
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "field-messages",
                                    {
                                      staticClass: "text-danger",
                                      attrs: {
                                        name: "gender",
                                        show: "$invalid && $submitted"
                                      }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          attrs: { slot: "checkbox" },
                                          slot: "checkbox"
                                        },
                                        [_vm._v("Gender is required")]
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-12" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "validate",
                                { attrs: { tag: "div" } },
                                [
                                  _c("label", { attrs: { for: "address" } }, [
                                    _vm._v("Address")
                                  ]),
                                  _vm._v(" "),
                                  _c("textarea", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.model.address,
                                        expression: "model.address"
                                      }
                                    ],
                                    staticClass: "form-control resize_vertical",
                                    attrs: {
                                      rows: "5",
                                      name: "address",
                                      id: "address",
                                      placeholder: "Enter your Address",
                                      required: ""
                                    },
                                    domProps: { value: _vm.model.address },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.model,
                                          "address",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "field-messages",
                                    {
                                      staticClass: "text-danger",
                                      attrs: {
                                        name: "address",
                                        show: "$invalid && $submitted"
                                      }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          attrs: { slot: "required" },
                                          slot: "required"
                                        },
                                        [_vm._v("Address is required")]
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-sm-12" },
                          [
                            _c(
                              "validate",
                              { attrs: { tag: "label" } },
                              [
                                _c("b-form-checkbox", [
                                  _vm._v(
                                    "I agree the\n                            "
                                  ),
                                  _c(
                                    "span",
                                    [
                                      _c(
                                        "router-link",
                                        { attrs: { to: "/" } },
                                        [_vm._v("terms & conditions")]
                                      )
                                    ],
                                    1
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "field-messages",
                                  {
                                    staticClass: "text-danger",
                                    attrs: {
                                      name: "terms",
                                      show: "$invalid && $submitted"
                                    }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        attrs: { slot: "checkbox" },
                                        slot: "checkbox"
                                      },
                                      [_vm._v("Terms must be accepted")]
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-12" }, [
                          _c("div", { staticClass: "form-group float-right" }, [
                            _c("input", {
                              staticClass: "btn btn-success",
                              attrs: { type: "submit", value: "Sign Up" }
                            })
                          ])
                        ])
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/admin/components/pages/form_validations.vue":
/*!**********************************************************************!*\
  !*** ./resources/assets/admin/components/pages/form_validations.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_validations_vue_vue_type_template_id_7989a30f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form_validations.vue?vue&type=template&id=7989a30f& */ "./resources/assets/admin/components/pages/form_validations.vue?vue&type=template&id=7989a30f&");
/* harmony import */ var _form_validations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form_validations.vue?vue&type=script&lang=js& */ "./resources/assets/admin/components/pages/form_validations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _form_validations_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form_validations.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/admin/components/pages/form_validations.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _form_validations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_validations_vue_vue_type_template_id_7989a30f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_validations_vue_vue_type_template_id_7989a30f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/admin/components/pages/form_validations.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/admin/components/pages/form_validations.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/form_validations.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_validations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form_validations.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/form_validations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_validations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/admin/components/pages/form_validations.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/form_validations.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_validations_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form_validations.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/form_validations.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_validations_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_validations_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_validations_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_validations_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_validations_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/admin/components/pages/form_validations.vue?vue&type=template&id=7989a30f&":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/form_validations.vue?vue&type=template&id=7989a30f& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_validations_vue_vue_type_template_id_7989a30f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form_validations.vue?vue&type=template&id=7989a30f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/form_validations.vue?vue&type=template&id=7989a30f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_validations_vue_vue_type_template_id_7989a30f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_validations_vue_vue_type_template_id_7989a30f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/admin/validations/validations.js":
/*!***********************************************************!*\
  !*** ./resources/assets/admin/validations/validations.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var options = {
  validators: {
    checkbox: function checkbox(value, attrValue, vnode) {
      // return true to set input as $valid, false to set as $invalid
      return value;
    },
    sameas: function sameas(value, attrValue, vnode) {
      return value == attrValue;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (options);

/***/ })

}]);