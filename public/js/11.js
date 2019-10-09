(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/view_user.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/view_user.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/api.service */ "./resources/assets/admin/common/api.service.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "add_user",
  data: function data() {
    return {
      model: {
        user_id: 0,
        name: "",
        email: ""
      },
      can_delete: false,
      back_url: ""
    };
  },
  methods: {
    getUser: function getUser() {
      var _this = this;

      _common_api_service__WEBPACK_IMPORTED_MODULE_0__["default"].get('auth/get_user/' + this.model.user_id).then(function (response) {
        _this.model.email = response.data.email;
        _this.model.name = response.data.name;

        if (_this.model.user_id == JSON.parse(window.localStorage.getItem('user'))['id']) {
          _this.can_delete = false;
        } else {
          _this.can_delete = true;
        }
      })["catch"](function (error) {});
    },
    deleteItem: function deleteItem() {
      var _this2 = this;

      _common_api_service__WEBPACK_IMPORTED_MODULE_0__["default"].get('auth/delete_user/' + this.model.user_id).then(function (response) {
        if (_this2.$route.name == 'view_user_dashboard') {
          _this2.$router.push("/");
        } else if (_this2.$route.name == 'view_user_api') {
          _this2.$router.push("/api");
        } else {
          _this2.$router.push("/users_list");
        }
      })["catch"](function (error) {});
    },
    back: function back() {
      this.$router.push(this.back_url);
    }
  },
  mounted: function mounted() {},
  beforeMount: function beforeMount() {
    this.model.user_id = this.$route.params.user_id;
    this.getUser();

    if (this.$route.name == 'view_user_dashboard') {
      this.back_url = '/';
    } else if (this.$route.name == 'view_user_api') {
      this.back_url = '/api';
    } else {
      this.back_url = '/users_list';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/view_user.vue?vue&type=template&id=076e1865&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/view_user.vue?vue&type=template&id=076e1865& ***!
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
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "col-lg-12" },
      [
        _c(
          "b-card",
          {
            staticClass: "bg-success-card",
            attrs: { header: "View user", "header-tag": "h4" }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-12 col-12 mb-3" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c("div", { staticClass: "col-lg-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("p", { staticClass: "font-weight-bold" }, [
                          _vm._v("User Name")
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(_vm.model.name))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("p", { staticClass: "font-weight-bold" }, [
                          _vm._v(" E-mail")
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(_vm.model.email))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-offset-4 col-md-8 m-t-25" },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-info",
                            on: { click: _vm.back }
                          },
                          [_vm._v("Back")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-button",
                          {
                            directives: [
                              {
                                name: "b-modal",
                                rawName: "v-b-modal.modal1",
                                modifiers: { modal1: true }
                              },
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.can_delete,
                                expression: "can_delete"
                              }
                            ],
                            staticClass: "btn btn-danger"
                          },
                          [_vm._v("Delete\n                                ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-modal",
                          {
                            attrs: {
                              id: "modal1",
                              title: "Delete user",
                              "ok-title": "Yes",
                              "cancel-title": "No",
                              "ok-variant": "danger"
                            },
                            on: { ok: _vm.deleteItem }
                          },
                          [
                            _c("p", { staticClass: "my-4" }, [
                              _vm._v("Are you sure want to delete this user?")
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ])
                ])
              ])
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

/***/ "./resources/assets/admin/components/pages/view_user.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/admin/components/pages/view_user.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_user_vue_vue_type_template_id_076e1865___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view_user.vue?vue&type=template&id=076e1865& */ "./resources/assets/admin/components/pages/view_user.vue?vue&type=template&id=076e1865&");
/* harmony import */ var _view_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view_user.vue?vue&type=script&lang=js& */ "./resources/assets/admin/components/pages/view_user.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _view_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_user_vue_vue_type_template_id_076e1865___WEBPACK_IMPORTED_MODULE_0__["render"],
  _view_user_vue_vue_type_template_id_076e1865___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/admin/components/pages/view_user.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/admin/components/pages/view_user.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/view_user.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view_user.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/view_user.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/admin/components/pages/view_user.vue?vue&type=template&id=076e1865&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/view_user.vue?vue&type=template&id=076e1865& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_user_vue_vue_type_template_id_076e1865___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view_user.vue?vue&type=template&id=076e1865& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/view_user.vue?vue&type=template&id=076e1865&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_user_vue_vue_type_template_id_076e1865___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_user_vue_vue_type_template_id_076e1865___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);