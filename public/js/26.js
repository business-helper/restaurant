(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/restaurant_list.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/restaurant_list.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_plugins_DataTable_DataTable_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/plugins/DataTable/DataTable.vue */ "./resources/assets/admin/components/plugins/DataTable/DataTable.vue");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/api.service */ "./resources/assets/admin/common/api.service.js");
//
//
//
//
//
//
//
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
  name: "restaurant_list",
  id: "restaurant_list",
  components: {
    datatable: components_plugins_DataTable_DataTable_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {},
  data: function data() {
    return {
      windowText: null,
      someValueSetOnClick: null,
      action: {},
      tableData: [],
      columndata: [{
        label: 'No',
        field: 'no',
        numeric: true,
        html: false
      }, {
        label: 'Owner Name',
        field: 'owner_name',
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
        label: 'Restaurant Name',
        field: 'restaurant_name',
        numeric: false,
        html: false
      }, {
        label: 'Website Link',
        field: 'website_link',
        numeric: false,
        html: false
      }, {
        label: 'Logo',
        field: 'logo',
        numeric: false,
        html: true
      }, {
        label: 'State',
        field: 'active',
        numeric: false,
        html: true
      }, {
        label: 'Actions',
        field: 'action',
        numeric: false,
        html: true
      }]
    };
  },
  methods: {},
  created: function created() {
    var _this = this;

    _common_api_service__WEBPACK_IMPORTED_MODULE_1__["default"].get('admin/restaurant/get_restaurants').then(function (response) {
      _this.tableData = response.data;

      _this.tableData.forEach(function (item, index) {
        _this.$set(item, 'no', index + 1);

        var temp = '';
        if (item.active == 1) temp = "<button class=\"btn btn-danger action-button\" target_id=\"".concat(item.id, "\" action=\"deactivate\">Deactivate</button>");else temp = "<button class=\"btn btn-success action-button\" target_id=\"".concat(item.id, "\" action=\"activate\">Activate</button>");

        _this.$set(item, 'active', temp);

        var logo_image = "<h5 style=\"margin-bottom: 0\">No Image</h5>"; // if(item.logo!=null && item.logo!=='' && item.logo!=='null')

        logo_image = "<a href=\"#/logo/".concat(item.id, "\"><img class=\"logo-image\" src=\"").concat(item.logo, "\" alt=\"No Image\"></a>");

        _this.$set(item, "website_link", "https://order.ohmani.com/#/pick-up?restaurant=".concat(item.restaurant_name));

        _this.$set(item, "action", "\n                        <a class=\"clickable edit btn btn-sm btn-primary\"\n                            href=\"#/edit_restaurant/".concat(item.id, "\">Edit\n                        </a>\n                        <a class=\"clickable delete btn btn-danger btn-sm\" href=\"javascript:void(0)\" target_id=\"").concat(item.id, "\" action=\"delete\">\n                            Delete\n                        </a>\n                        <a class=\"clickable edit btn btn-sm btn-primary\"\n                            href=\"#/menu_list/").concat(item.id, "\">View Menus\n                        </a>\n                        <a class=\"clickable edit btn btn-sm btn-primary\"\n                            href=\"#/category_list/").concat(item.id, "\">View Categories\n                        </a>\n                        <a class=\"clickable edit btn btn-sm btn-primary\"\n                            href=\"#/option_list/").concat(item.id, "\">View Options\n                        </a>\n                        <a class=\"clickable edit btn btn-sm btn-primary\"\n                            href=\"#/size_list/").concat(item.id, "\">View Sizes\n                        </a>\n                        <a class=\"clickable edit btn btn-sm btn-primary\"\n                            href=\"#/opening_hours/").concat(item.id, "\">Opening Hours\n                        </a>\n                        <a class=\"clickable edit btn btn-sm btn-primary\"\n                            href=\"#/logo/").concat(item.id, "\">View Logo\n                        </a>\n                    "));

        _this.$set(item, "logo", logo_image);
      });
    })["catch"](function (error) {});
  },
  watch: {
    action: function action(newVal) {
      var _this2 = this;

      if (newVal.id != null) {
        var id = newVal.id;
        var action = newVal.action;
        var target = newVal.target;

        if (id && action) {
          // if there is id and action
          if (action === 'delete') {
            var deleteIndex;

            for (var i = 0; i < this.tableData.length; i++) {
              if (id == this.tableData[i].id) deleteIndex = i;
            }

            this.tableData.splice(deleteIndex, 1);
            _common_api_service__WEBPACK_IMPORTED_MODULE_1__["default"].get("admin/restaurant/delete/".concat(id)).then(function (response) {});
          } else if (action === 'activate') {
            _common_api_service__WEBPACK_IMPORTED_MODULE_1__["default"].get("admin/restaurant/activate/".concat(id)).then(function (response) {
              var tableData = _this2.tableData;
              tableData.map(function (item) {
                if (item.id == id) item.active = "<button class=\"btn btn-danger action-button\" target_id=\"".concat(item.id, "\" action=\"deactivate\">Deactivate</button>");
              });
              _this2.tableData = tableData;
            });
          } else if (action === 'deactivate') {
            _common_api_service__WEBPACK_IMPORTED_MODULE_1__["default"].get("admin/restaurant/deactivate/".concat(id)).then(function (response) {
              var tableData = _this2.tableData;
              tableData.map(function (item) {
                if (item.id == id) item.active = "<button class=\"btn btn-success action-button\" target_id=\"".concat(item.id, "\" action=\"activate\">Activate</button>");
              });
              _this2.tableData = tableData;
            });
          }
        }

        this.action.action = null;
        this.action.id = null;
        this.action.target = null;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/restaurant_list.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/restaurant_list.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.democlass {\n    color: red;\n}\ntd,th{\n    text-align:center;\n}\ntd img{\n    width:80px;\n    height:80px;\n}\ntd btn{\n    width:70px;\n}\na.delete i,a.edit i{\n    font-size:20px;\n    margin-right:0px;\n    cursor:pointer;\n}\na.edit i{\n    color:#207909;\n}\na.delete i{\n    color:#d0280d;\n}\n.action-button{\n    width:90px;\n}\n.clickable{\n    display: inline-block;\n    margin-top: 2px;\n    margin-bottom: 2px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/restaurant_list.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/restaurant_list.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./restaurant_list.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/restaurant_list.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/restaurant_list.vue?vue&type=template&id=1db94fc0&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/restaurant_list.vue?vue&type=template&id=1db94fc0& ***!
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
  return _c("div", { staticClass: "row", attrs: { id: "user_list" } }, [
    _c(
      "div",
      { staticClass: "col-lg-12" },
      [
        _c(
          "div",
          { staticStyle: { "text-align": "right", "margin-bottom": "5px" } },
          [
            _c("router-link", { attrs: { to: "add_restaurant" } }, [
              _c("button", { staticClass: "btn btn-secondary" }, [
                _vm._v("Add Restaurants")
              ])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "b-card",
          {
            staticClass: "bg-primary-card",
            attrs: { header: "Restaurant Lists", "header-tag": "h4" }
          },
          [
            _c(
              "div",
              { staticClass: "table-responsive" },
              [
                _c("datatable", {
                  attrs: {
                    title: "Registered Restaurants",
                    rows: _vm.tableData,
                    columns: _vm.columndata
                  },
                  model: {
                    value: _vm.action,
                    callback: function($$v) {
                      _vm.action = $$v
                    },
                    expression: "action"
                  }
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

/***/ "./resources/assets/admin/components/pages/restaurant_list.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/admin/components/pages/restaurant_list.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restaurant_list_vue_vue_type_template_id_1db94fc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant_list.vue?vue&type=template&id=1db94fc0& */ "./resources/assets/admin/components/pages/restaurant_list.vue?vue&type=template&id=1db94fc0&");
/* harmony import */ var _restaurant_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurant_list.vue?vue&type=script&lang=js& */ "./resources/assets/admin/components/pages/restaurant_list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _restaurant_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurant_list.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/admin/components/pages/restaurant_list.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _restaurant_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _restaurant_list_vue_vue_type_template_id_1db94fc0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _restaurant_list_vue_vue_type_template_id_1db94fc0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/admin/components/pages/restaurant_list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/admin/components/pages/restaurant_list.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/restaurant_list.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_restaurant_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./restaurant_list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/restaurant_list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_restaurant_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/admin/components/pages/restaurant_list.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/restaurant_list.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_restaurant_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./restaurant_list.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/restaurant_list.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_restaurant_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_restaurant_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_restaurant_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_restaurant_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_restaurant_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/admin/components/pages/restaurant_list.vue?vue&type=template&id=1db94fc0&":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/restaurant_list.vue?vue&type=template&id=1db94fc0& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_restaurant_list_vue_vue_type_template_id_1db94fc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./restaurant_list.vue?vue&type=template&id=1db94fc0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/restaurant_list.vue?vue&type=template&id=1db94fc0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_restaurant_list_vue_vue_type_template_id_1db94fc0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_restaurant_list_vue_vue_type_template_id_1db94fc0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);