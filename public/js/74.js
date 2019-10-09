(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/register.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form */ "./node_modules/vue-form/dist/vue-form.js");
/* harmony import */ var vue_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_validations_validations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/validations/validations.js */ "./resources/assets/admin/validations/validations.js");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/api.service */ "./resources/assets/admin/common/api.service.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "register",
  data: function data() {
    return {
      show_error: false,
      show_success: false,
      formstate: {},
      validationErrors: [],
      mail_not_valid: false,
      model: {
        name: "",
        email: "",
        password: '',
        phone_number: '',
        profile_picture: '',
        password_confirmation: '',
        terms: true
      }
    };
  },
  methods: {
    onImageChange: function onImageChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage: function createImage(file) {
      var reader = new FileReader();
      var vm = this.model;

      reader.onload = function (e) {
        vm.profile_picture = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    onSubmit: function onSubmit() {
      var _this = this;

      if (this.formstate.$invalid) {
        return;
      } else {
        _common_api_service__WEBPACK_IMPORTED_MODULE_3__["default"].post('admin/register', this.model).then(function (data) {
          console.log(data);

          if (!data.data.error) // if there is no error
            {
              var user_data = data.data.data;

              _this.$store.dispatch('login', user_data);

              _this.$store.commit('changeUser', user_data.user);

              console.log(user_data.user);
              _this.show_error = false;
              _this.show_success = false;
            } else {
            _this.show_error = true;
            _this.show_success = false;
            _this.validationErrors = data.data.error;
            return false;
          }
        }).then(function () {
          return _this.$router.push({
            name: "dashboard"
          });
        })["catch"](function (error) {
          if (error.response.status == 422) {
            _this.validationErrors = error.response.data.errors;
            _this.show_error = true;
            _this.show_success = false;
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/register.vue?vue&type=style&index=0&id=1b5dc8da&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/register.vue?vue&type=style&index=0&id=1b5dc8da&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.login-content[data-v-1b5dc8da] {\n    margin-top: 6%;\n    margin-bottom: 6%;\n    padding-bottom: 20px;\n    box-shadow: 0 0 30px #ccc;\n    background-size: 100% 100%;\n    border-radius: 7px;\n    background-color: #ffffff;\n}\n.img_backgrond[data-v-1b5dc8da] {\n    background-image: url(" + escape(__webpack_require__(/*! ../../img/pages/Login-03-01.png */ "./resources/assets/admin/img/pages/Login-03-01.png")) + ");\n    background-size: cover;\n    padding: 75px 15px;\n}\n.text_gray[data-v-1b5dc8da] {\n    color: #625e5e;\n}\nlabel[data-v-1b5dc8da] {\n    font-size: 14px !important;\n}\n[data-v-1b5dc8da]::-webkit-input-placeholder {\n    font-size: 14px;\n}\n.img_backgrond .input-group-text[data-v-1b5dc8da]{\n    background-color: white;\n}\n.fa[data-v-1b5dc8da]{\n    color: #ced4da;\n}\n.register-text[data-v-1b5dc8da]{\n    font-size:14px;\n}\n/*.custom-checkbox .custom-control-label::before {*/\n    /*background-color: #ced4da !important;*/\n/*}*/\n.custom-checkbox label[data-v-1b5dc8da]::before {\n    background-color: #ced4da !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/register.vue?vue&type=style&index=0&id=1b5dc8da&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/register.vue?vue&type=style&index=0&id=1b5dc8da&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=style&index=0&id=1b5dc8da&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/register.vue?vue&type=style&index=0&id=1b5dc8da&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/register.vue?vue&type=template&id=1b5dc8da&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/register.vue?vue&type=template&id=1b5dc8da&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container-fluid img_backgrond" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        {
          staticClass:
            "col-lg-4 offset-lg-4 col-sm-6 offset-sm-3 col-xs-10 offset-xs-1 login-content mt-5"
        },
        [
          _vm._m(0),
          _vm._v(" "),
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
              _c("div", { staticClass: "row mx-1" }, [
                _c("div", { staticClass: "col-sm-12 mt-3" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c(
                        "validate",
                        { attrs: { tag: "div" } },
                        [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v(" Name")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "input-group mb-2" }, [
                            _c("div", { staticClass: "input-group-prepend" }, [
                              _c("div", { staticClass: "input-group-text" }, [
                                _c("i", {
                                  staticClass: "fa fa-user",
                                  attrs: { "aria-hidden": "true" }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.model.name,
                                  expression: "model.name"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                id: "name",
                                name: "name",
                                type: "text",
                                required: "",
                                autofocus: "",
                                placeholder: "Name"
                              },
                              domProps: { value: _vm.model.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.model,
                                    "name",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]),
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
                                [_vm._v("Name is a required field")]
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
                          _c("label", { attrs: { for: "email" } }, [
                            _vm._v(" E-mail")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "input-group mb-2" }, [
                            _c("div", { staticClass: "input-group-prepend" }, [
                              _c("div", { staticClass: "input-group-text" }, [
                                _c("i", {
                                  staticClass: "fa fa-envelope",
                                  attrs: { "aria-hidden": "true" }
                                })
                              ])
                            ]),
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
                                id: "email",
                                name: "email",
                                type: "email",
                                required: "",
                                placeholder: "E-mail"
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
                            })
                          ]),
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
                                { attrs: { slot: "email" }, slot: "email" },
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
                _c("div", { staticClass: "col-sm-12 mt-3" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("validate", { attrs: { tag: "div" } }, [
                        _c("label", { attrs: { for: "name" } }, [
                          _vm._v("Phone Number")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group mb-2" }, [
                          _c("div", { staticClass: "input-group-prepend" }, [
                            _c("div", { staticClass: "input-group-text" }, [
                              _c("i", {
                                staticClass: "fa fa-user",
                                attrs: { "aria-hidden": "true" }
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.model.phone_number,
                                expression: "model.phone_number"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              id: "phone_number",
                              name: "phone_number",
                              type: "text",
                              required: "",
                              autofocus: "",
                              placeholder: "Phone Number"
                            },
                            domProps: { value: _vm.model.phone_number },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.model,
                                  "phone_number",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-12 mt-3" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("validate", { attrs: { tag: "div" } }, [
                        _c("label", { attrs: { for: "name" } }, [
                          _vm._v("Upload Picture")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group mb-2" }, [
                          _c("div", { staticClass: "input-group-prepend" }, [
                            _c("div", { staticClass: "input-group-text" }, [
                              _c("i", {
                                staticClass: "fa fa-user",
                                attrs: { "aria-hidden": "true" }
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              id: "profile_picture",
                              name: "profile_picture",
                              type: "file",
                              placeholder: "Profile Picture"
                            },
                            on: { change: _vm.onImageChange }
                          })
                        ])
                      ])
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
                          _c("label", { attrs: { for: "password" } }, [
                            _vm._v(" Password")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "input-group mb-2" }, [
                            _c("div", { staticClass: "input-group-prepend" }, [
                              _c("div", { staticClass: "input-group-text" }, [
                                _c("i", {
                                  staticClass: "fa fa-key",
                                  attrs: { "aria-hidden": "true" }
                                })
                              ])
                            ]),
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
                                id: "password",
                                name: "password",
                                type: "password",
                                required: "",
                                placeholder: "Password",
                                minlength: "4",
                                maxlength: "10"
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
                            })
                          ]),
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
                _c("div", { staticClass: "col-sm-12" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c(
                        "validate",
                        { attrs: { tag: "div" } },
                        [
                          _c("label", { attrs: { for: "confirm_password" } }, [
                            _vm._v(" Confirm Password")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "input-group mb-2" }, [
                            _c("div", { staticClass: "input-group-prepend" }, [
                              _c("div", { staticClass: "input-group-text" }, [
                                _c("i", {
                                  staticClass: "fa fa-key",
                                  attrs: { "aria-hidden": "true" }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.model.password_confirmation,
                                  expression: "model.password_confirmation"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                name: "password_confirmation",
                                id: "confirm_password",
                                type: "password",
                                required: "",
                                placeholder: "Confirm Password",
                                sameas: _vm.model.password
                              },
                              domProps: {
                                value: _vm.model.password_confirmation
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.model,
                                    "password_confirmation",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]),
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
                                [_vm._v("Password confirmatoin is required")]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { attrs: { slot: "sameas" }, slot: "sameas" },
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
                _c("div", { staticClass: "col-sm-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("input", {
                      staticClass: "btn btn-block btn-success",
                      attrs: { type: "submit", value: "Sign Up" }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.show_error,
                        expression: "show_error"
                      }
                    ],
                    staticClass: "col-sm-12"
                  },
                  [
                    _c(
                      "ul",
                      { staticClass: "list-unstyled" },
                      _vm._l(_vm.validationErrors, function(error) {
                        return _c("li", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(error[0]))
                        ])
                      }),
                      0
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.show_success,
                        expression: "show_success"
                      }
                    ],
                    staticClass: "col-sm-12"
                  },
                  [
                    _c("ul", { staticClass: "list-unstyled" }, [
                      _c(
                        "li",
                        { staticClass: "text-success" },
                        [
                          _vm._v(
                            "Your details had registered, you can\n                                "
                          ),
                          _c(
                            "router-link",
                            { attrs: { tag: "a", to: "/login" } },
                            [_vm._v("Login")]
                          )
                        ],
                        1
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-12" }, [
                  _c(
                    "div",
                    { staticClass: "form-group register-text" },
                    [
                      _vm._v(
                        "\n                            Already a member? "
                      ),
                      _c("router-link", { attrs: { tag: "a", to: "/login" } }, [
                        _vm._v("Sign In")
                      ])
                    ],
                    1
                  )
                ])
              ])
            ]
          )
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
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-12 mt-3" }, [
        _c("h2", { staticClass: "text-center" }, [
          _c("img", {
            attrs: { src: __webpack_require__(/*! img/logo_black.png */ "./resources/assets/admin/img/logo_black.png"), alt: "Logo" }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/admin/components/pages/register.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/admin/components/pages/register.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_vue_vue_type_template_id_1b5dc8da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=1b5dc8da&scoped=true& */ "./resources/assets/admin/components/pages/register.vue?vue&type=template&id=1b5dc8da&scoped=true&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./resources/assets/admin/components/pages/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _register_vue_vue_type_style_index_0_id_1b5dc8da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.vue?vue&type=style&index=0&id=1b5dc8da&scoped=true&lang=css& */ "./resources/assets/admin/components/pages/register.vue?vue&type=style&index=0&id=1b5dc8da&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_1b5dc8da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _register_vue_vue_type_template_id_1b5dc8da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1b5dc8da",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/admin/components/pages/register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/admin/components/pages/register.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/register.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/admin/components/pages/register.vue?vue&type=style&index=0&id=1b5dc8da&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/register.vue?vue&type=style&index=0&id=1b5dc8da&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_1b5dc8da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=style&index=0&id=1b5dc8da&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/register.vue?vue&type=style&index=0&id=1b5dc8da&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_1b5dc8da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_1b5dc8da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_1b5dc8da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_1b5dc8da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_1b5dc8da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/admin/components/pages/register.vue?vue&type=template&id=1b5dc8da&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/register.vue?vue&type=template&id=1b5dc8da&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_1b5dc8da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=template&id=1b5dc8da&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/register.vue?vue&type=template&id=1b5dc8da&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_1b5dc8da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_1b5dc8da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/admin/img/logo_black.png":
/*!***************************************************!*\
  !*** ./resources/assets/admin/img/logo_black.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "public/images/logo_black.png?c8baf38aa96fc61452370afbea45204a";

/***/ }),

/***/ "./resources/assets/admin/img/pages/Login-03-01.png":
/*!**********************************************************!*\
  !*** ./resources/assets/admin/img/pages/Login-03-01.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "public/images/Login-03-01.png?d74e560d86ea931916bcf7f875a009be";

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