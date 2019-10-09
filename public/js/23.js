(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/add_option.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/add_option.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form */ "./node_modules/vue-form/dist/vue-form.js");
/* harmony import */ var vue_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var restaurant_src_validations_validations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! restaurant_src/validations/validations */ "./resources/assets/restaurant/validations/validations.js");
/* harmony import */ var restaurant_resources_common_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! restaurant_resources/common/api.service */ "./resources/assets/restaurant/common/api.service.js");
/* harmony import */ var common_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/api.service */ "./resources/assets/admin/common/api.service.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






__webpack_require__(/*! checkbox.css/dist/css/checkbox.min.css */ "./node_modules/checkbox.css/dist/css/checkbox.min.css");

__webpack_require__(/*! radiobox.css/dist/css/radiobox.min.css */ "./node_modules/radiobox.css/dist/css/radiobox.min.css");

vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_form__WEBPACK_IMPORTED_MODULE_1___default.a, restaurant_src_validations_validations__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "add_option",
  data: function data() {
    return {
      formstate: {},
      model: {
        title: "",
        selection_type: "one",
        mandatory: false,
        option_items: [],
        min_number: 0,
        max_number: null,
        sizes: []
      },
      show_error: false,
      show_success: false,
      validationErrors: [],
      restaurant_id: 0,
      api_service: restaurant_resources_common_api_service__WEBPACK_IMPORTED_MODULE_3__["default"]
    };
  },
  methods: {
    sizeEnableStateChange: function sizeEnableStateChange(index) {
      var sizes = this.model.sizes;
      console.log(sizes[index].enabled);

      if (!sizes[index].enabled) {
        sizes[index]['min'] = this.model.min_number;
        sizes[index]['max'] = this.model.max_number;
      }
    },
    onSubmit: function onSubmit() {
      var _this = this;

      if (this.formstate.$invalid) {
        return;
      } else {
        var add_restaurant_id = this.restaurant_id != 0 ? "/" + this.restaurant_id : '';
        this.api_service.post('restaurant/add_option' + add_restaurant_id, this.model).then(function (data) {
          console.log(data);

          if (!data.data.error) {
            // if category added
            _this.show_error = false;
            _this.show_success = true;
          } else {
            _this.validationErrors = data.data.error;
            _this.show_error = true;
            _this.show_success = false;
            throw new Error('handled');
          }
        }, function (data) {
          console.log(data.response);
          throw new handle('error');
        }).then(function () {
          setTimeout(function () {
            _this.$router.push("/option_list" + add_restaurant_id);
          }, 500);
        });
      }
    },
    addItem: function addItem(evt) {
      var temp = {};
      temp['name'] = '';
      temp['price'] = 0;
      temp['max'] = null;
      temp['sizes'] = [];
      var sizes = this.model.sizes;

      for (var i = 0; i < sizes.length; i++) {
        if (sizes[i].enabled) {
          var size_item = {};
          size_item['id'] = sizes[i]['id'];
          size_item['enabled'] = true;
          size_item['name'] = sizes[i]['name'];
          temp['sizes'].push(size_item);
        }
      }

      this.model.option_items.push(temp);
      evt.preventDefault();
    },
    deleteItem: function deleteItem(index) {
      this.model.option_items.splice(index, 1);
    },
    form_reset: function form_reset() {
      this.model = {
        name: "",
        description: ""
      };
    }
  },
  beforeMount: function beforeMount() {
    var _this2 = this;

    var add_restaurant_id = '';
    var api_service = restaurant_resources_common_api_service__WEBPACK_IMPORTED_MODULE_3__["default"];

    if (this.$route.params.restaurant_id) {
      this.restaurant_id = this.$route.params.restaurant_id;
      add_restaurant_id = "/" + this.restaurant_id;
      api_service = common_api_service__WEBPACK_IMPORTED_MODULE_4__["default"];
      this.api_service = api_service;
    }

    api_service.get('restaurant/get_information_for_option' + add_restaurant_id).then(function (response) {
      _this2.model.sizes = response.data.size;
    }, function (error) {
      console.log(error.response);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/add_option.vue?vue&type=style&index=0&id=2ba6a3ee&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/add_option.vue?vue&type=style&index=0&id=2ba6a3ee&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#add-food-option .dropzone_wrapper[data-v-2ba6a3ee] {\n  width: 100%;\n}\n#add-food-option .align-left[data-v-2ba6a3ee] {\n  float: left;\n}\n#add-food-option .align-right[data-v-2ba6a3ee] {\n  float: right;\n}\n#add-food-option .category-option[data-v-2ba6a3ee] {\n  width: 200px;\n  float: left;\n  margin-right: 20px;\n}\n#add-food-option .category-img[data-v-2ba6a3ee] {\n  width: 100%;\n  height: 150px;\n}\n#add-food-option .category-name[data-v-2ba6a3ee] {\n  font-weight: bold;\n  margin-bottom: 0;\n}\n#add-food-option .option-item[data-v-2ba6a3ee] {\n  width: 300px;\n  float: left;\n  margin-right: 20px;\n  margin-bottom: 20px;\n  border: 1px solid #bbb;\n  padding: 20px;\n}\n#add-food-option .close-button[data-v-2ba6a3ee] {\n  text-align: right;\n  font-size: 25px;\n  color: #777;\n  margin-top: -20px;\n  margin-right: -15px;\n  cursor: pointer;\n}\n#add-food-option .custom-control-label[data-v-2ba6a3ee]::before {\n  width: 1.5rem;\n  height: 1.5rem;\n  top: 0rem;\n}\n#add-food-option .custom-control-label[data-v-2ba6a3ee]::after {\n  width: 1.5rem;\n  height: 1.5rem;\n  top: 0rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/add_option.vue?vue&type=style&index=1&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/add_option.vue?vue&type=style&index=1&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.custom-control-label::before {\n    width: 1.5rem;\n    height: 1.5rem;\n    top: 0rem;\n}\n.custom-control-label::after {\n    width: 1.5rem;\n    height: 1.5rem;\n    top: 0rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/add_option.vue?vue&type=style&index=0&id=2ba6a3ee&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/add_option.vue?vue&type=style&index=0&id=2ba6a3ee&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add_option.vue?vue&type=style&index=0&id=2ba6a3ee&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/add_option.vue?vue&type=style&index=0&id=2ba6a3ee&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/add_option.vue?vue&type=style&index=1&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/add_option.vue?vue&type=style&index=1&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add_option.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/add_option.vue?vue&type=style&index=1&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/add_option.vue?vue&type=template&id=2ba6a3ee&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/add_option.vue?vue&type=template&id=2ba6a3ee&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row", attrs: { id: "add-food-option" } }, [
    _c(
      "div",
      { staticClass: "col-lg-12" },
      [
        _c(
          "b-card",
          {
            staticClass: "bg-success-card",
            attrs: { header: "Add Option Items", "header-tag": "h4" }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-lg-12 col-12 mb-3" },
                [
                  _c(
                    "vue-form",
                    {
                      staticClass: "form-horizontal form-validation",
                      attrs: { state: _vm.formstate },
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.onSubmit($event)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "col-lg-12" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c(
                              "validate",
                              { attrs: { tag: "div" } },
                              [
                                _c("label", { attrs: { for: "title" } }, [
                                  _vm._v("Option Title")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.model.title,
                                      expression: "model.title"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    id: "title",
                                    name: "title",
                                    type: "text",
                                    required: "",
                                    autofocus: "",
                                    placeholder: "Option Title"
                                  },
                                  domProps: { value: _vm.model.title },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.model,
                                        "title",
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
                                      name: "title",
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
                                      [_vm._v("Option Title is required")]
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
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticStyle: { display: "block" } }, [
                            _c("strong", [_vm._v("Selectable Item Numbers")])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "row",
                              staticStyle: { "margin-left": "0" }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "validate",
                                    { attrs: { tag: "div" } },
                                    [
                                      _c("label", { attrs: { for: "title" } }, [
                                        _vm._v("At Least")
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.model.min_number,
                                            expression: "model.min_number"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          id: "min",
                                          name: "min",
                                          type: "number",
                                          required: "",
                                          autofocus: "",
                                          placeholder: "0"
                                        },
                                        domProps: {
                                          value: _vm.model.min_number
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.model,
                                              "min_number",
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
                                            name: "min",
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
                                                "Minimum Number is required"
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
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "form-group",
                                  staticStyle: { "margin-left": "15px" }
                                },
                                [
                                  _c("label", { attrs: { for: "title" } }, [
                                    _vm._v("Upto")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.model.max_number,
                                        expression: "model.max_number"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      id: "max",
                                      name: "max",
                                      type: "number",
                                      autofocus: "",
                                      placeholder: "No Limit"
                                    },
                                    domProps: { value: _vm.model.max_number },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.model,
                                          "max_number",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ]
                              )
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-12" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { staticStyle: { display: "block" } }, [
                              _c("strong", [
                                _vm._v("Alternative Item Numbers Due to Size")
                              ])
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.model.sizes, function(item, index) {
                              return _c(
                                "div",
                                {
                                  staticClass: "form-group",
                                  staticStyle: { "margin-left": "20px" }
                                },
                                [
                                  _c(
                                    "b-form-checkbox",
                                    {
                                      staticClass: "primarycheck",
                                      on: {
                                        change: function($event) {
                                          return _vm.sizeEnableStateChange(
                                            index
                                          )
                                        }
                                      },
                                      model: {
                                        value: item.enabled,
                                        callback: function($$v) {
                                          _vm.$set(item, "enabled", $$v)
                                        },
                                        expression: "item.enabled"
                                      }
                                    },
                                    [_vm._v(_vm._s(item.name))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "row",
                                      staticStyle: { "margin-left": "30px" }
                                    },
                                    [
                                      _c("div", { staticClass: "form-group" }, [
                                        _c("label", [_vm._v("At Least")]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: item.min,
                                              expression: "item.min"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            name: "min",
                                            type: "number",
                                            required: "",
                                            autofocus: "",
                                            placeholder: "0",
                                            disabled: !item.enabled
                                          },
                                          domProps: { value: item.min },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                item,
                                                "min",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        })
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "form-group",
                                          staticStyle: { "margin-left": "15px" }
                                        },
                                        [
                                          _c("label", [_vm._v("Upto")]),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: item.max,
                                                expression: "item.max"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "number",
                                              autofocus: "",
                                              placeholder: "No Limit",
                                              disabled: !item.enabled
                                            },
                                            domProps: { value: item.max },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  item,
                                                  "max",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            })
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-12 mt-4" },
                        [
                          _c(
                            "b-card",
                            {
                              staticClass: "option-item-holder",
                              attrs: {
                                header: "Add Option Item",
                                "header-tag": "h4"
                              }
                            },
                            [
                              _vm._l(_vm.model.option_items, function(
                                item,
                                index
                              ) {
                                return _c(
                                  "div",
                                  { staticClass: "option-item" },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "close-button",
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteItem(index)
                                          }
                                        }
                                      },
                                      [_c("i", { staticClass: "fas fa-close" })]
                                    ),
                                    _vm._v(" "),
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
                                              { attrs: { for: "title" } },
                                              [_vm._v("Item Name")]
                                            ),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: item.name,
                                                  expression: "item.name"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                name: "item-name-" + index,
                                                type: "text",
                                                required: "",
                                                autofocus: "",
                                                placeholder: "Item Name"
                                              },
                                              domProps: { value: item.name },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    item,
                                                    "name",
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
                                                  name: "item-name-" + index,
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
                                                      "Item name is required"
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
                                    ),
                                    _vm._v(" "),
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
                                              { attrs: { for: "title" } },
                                              [_vm._v("Item Price")]
                                            ),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: item.price,
                                                  expression: "item.price"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                name: "item-price-" + index,
                                                type: "number",
                                                required: "",
                                                autofocus: "",
                                                placeholder: "Item Price"
                                              },
                                              domProps: { value: item.price },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    item,
                                                    "price",
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
                                                  name: "item-price-" + index,
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
                                                      "Item price is required"
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
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c("label", { attrs: { for: "title" } }, [
                                        _vm._v("Upto")
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: item.max,
                                            expression: "item.max"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          name: "item-max-" + index,
                                          type: "number",
                                          required: "",
                                          autofocus: "",
                                          placeholder: "No Limit"
                                        },
                                        domProps: { value: item.max },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              item,
                                              "max",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ])
                                  ]
                                )
                              }),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-primary add-item-button",
                                  on: { click: _vm.addItem }
                                },
                                [_vm._v("Add Item")]
                              )
                            ],
                            2
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
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
                              _vm._l(_vm.validationErrors, function(error) {
                                return _c(
                                  "li",
                                  { staticClass: "text-danger" },
                                  [_vm._v(_vm._s(error[0]))]
                                )
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
                            _c("ul", [
                              _c("li", { staticClass: "text-success" }, [
                                _vm._v("Amount Option added successfully")
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-12" }, [
                          _c(
                            "div",
                            { staticClass: "col-md-offset-4 col-md-8 m-t-25" },
                            [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  attrs: { type: "submit" }
                                },
                                [
                                  _vm._v(
                                    "Submit\n                                    "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-effect-ripple btn-secondary  reset_btn1",
                                  attrs: { type: "reset" },
                                  on: { click: _vm.form_reset }
                                },
                                [
                                  _vm._v(
                                    "\n                                        Reset\n                                    "
                                  )
                                ]
                              )
                            ]
                          )
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

/***/ "./resources/assets/restaurant/components/pages/add_option.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/add_option.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_option_vue_vue_type_template_id_2ba6a3ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add_option.vue?vue&type=template&id=2ba6a3ee&scoped=true& */ "./resources/assets/restaurant/components/pages/add_option.vue?vue&type=template&id=2ba6a3ee&scoped=true&");
/* harmony import */ var _add_option_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add_option.vue?vue&type=script&lang=js& */ "./resources/assets/restaurant/components/pages/add_option.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _add_option_vue_vue_type_style_index_0_id_2ba6a3ee_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add_option.vue?vue&type=style&index=0&id=2ba6a3ee&scoped=true&lang=scss& */ "./resources/assets/restaurant/components/pages/add_option.vue?vue&type=style&index=0&id=2ba6a3ee&scoped=true&lang=scss&");
/* harmony import */ var _add_option_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add_option.vue?vue&type=style&index=1&lang=css& */ "./resources/assets/restaurant/components/pages/add_option.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _add_option_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_option_vue_vue_type_template_id_2ba6a3ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_option_vue_vue_type_template_id_2ba6a3ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2ba6a3ee",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/restaurant/components/pages/add_option.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/add_option.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/add_option.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_option_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add_option.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/add_option.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_option_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/add_option.vue?vue&type=style&index=0&id=2ba6a3ee&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/add_option.vue?vue&type=style&index=0&id=2ba6a3ee&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_add_option_vue_vue_type_style_index_0_id_2ba6a3ee_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add_option.vue?vue&type=style&index=0&id=2ba6a3ee&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/add_option.vue?vue&type=style&index=0&id=2ba6a3ee&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_add_option_vue_vue_type_style_index_0_id_2ba6a3ee_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_add_option_vue_vue_type_style_index_0_id_2ba6a3ee_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_add_option_vue_vue_type_style_index_0_id_2ba6a3ee_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_add_option_vue_vue_type_style_index_0_id_2ba6a3ee_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_add_option_vue_vue_type_style_index_0_id_2ba6a3ee_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/add_option.vue?vue&type=style&index=1&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/add_option.vue?vue&type=style&index=1&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_option_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add_option.vue?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/add_option.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_option_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_option_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_option_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_option_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_option_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/add_option.vue?vue&type=template&id=2ba6a3ee&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/add_option.vue?vue&type=template&id=2ba6a3ee&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_option_vue_vue_type_template_id_2ba6a3ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add_option.vue?vue&type=template&id=2ba6a3ee&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/add_option.vue?vue&type=template&id=2ba6a3ee&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_option_vue_vue_type_template_id_2ba6a3ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_option_vue_vue_type_template_id_2ba6a3ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/restaurant/validations/validations.js":
/*!****************************************************************!*\
  !*** ./resources/assets/restaurant/validations/validations.js ***!
  \****************************************************************/
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