(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/gallery.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/gallery.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vueisotope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vueisotope */ "./node_modules/vueisotope/dist/vue_isotope.min.js");
/* harmony import */ var vueisotope__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vueisotope__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_images_loaded__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-images-loaded */ "./node_modules/vue-images-loaded/dist/vueimagesloaded.js");
/* harmony import */ var vue_images_loaded__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_images_loaded__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var baguettebox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! baguettebox.js */ "./node_modules/baguettebox.js/dist/baguetteBox.min.js");
/* harmony import */ var baguettebox_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(baguettebox_js__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var unsub;




__webpack_require__(/*! baguettebox.js/dist/baguetteBox.min.css */ "./node_modules/baguettebox.js/dist/baguetteBox.min.css");

/* harmony default export */ __webpack_exports__["default"] = ({
  directives: {
    imagesLoaded: vue_images_loaded__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  components: {
    isotope: vueisotope__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      list: [{
        src: __webpack_require__(/*! img/pages/blog1.jpeg */ "./resources/assets/admin/img/pages/blog1.jpeg"),
        filter: "Landscape"
      }, {
        src: __webpack_require__(/*! img/pages/blog2.png */ "./resources/assets/admin/img/pages/blog2.png"),
        filter: "Studio"
      }, {
        src: __webpack_require__(/*! img/pages/timeline1.jpeg */ "./resources/assets/admin/img/pages/timeline1.jpeg"),
        filter: "Studio"
      }, {
        src: __webpack_require__(/*! img/pages/blog3.jpeg */ "./resources/assets/admin/img/pages/blog3.jpeg"),
        filter: "Landscape"
      }, {
        src: __webpack_require__(/*! img/pages/blog1.jpeg */ "./resources/assets/admin/img/pages/blog1.jpeg"),
        filter: "Studio"
      }, {
        src: __webpack_require__(/*! img/pages/profile-coverbg.jpeg */ "./resources/assets/admin/img/pages/profile-coverbg.jpeg"),
        filter: "Landscape"
      }, {
        src: __webpack_require__(/*! img/pages/blog2.png */ "./resources/assets/admin/img/pages/blog2.png"),
        filter: "Studio"
      }, {
        src: __webpack_require__(/*! img/pages/timeline.jpeg */ "./resources/assets/admin/img/pages/timeline.jpeg"),
        filter: "Studio"
      }, {
        src: __webpack_require__(/*! img/pages/blog3.jpeg */ "./resources/assets/admin/img/pages/blog3.jpeg"),
        filter: "Studio"
      }, {
        src: __webpack_require__(/*! img/pages/blog1.jpeg */ "./resources/assets/admin/img/pages/blog1.jpeg"),
        filter: "Studio"
      }],
      filterOption: "All",
      option: {
        itemSelector: ".element-item",
        getFilterData: {
          All: function All() {
            return true;
          },
          Landscape: function Landscape(el) {
            return el.filter === "Landscape";
          },
          Studio: function Studio(el) {
            return el.filter === "Studio";
          }
        }
      }
    };
  },
  methods: {
    filter: function filter(key) {
      this.$refs.cpt.filter(key);
    },
    layout: function layout() {
      this.$refs.cpt.layout('masonry');
    }
  },
  mounted: function mounted() {
    var _this = this;

    unsub = this.$store.subscribe(function (mutation, state) {
      if (mutation.type == "left_menu") {
        setTimeout(function () {
          _this.$refs.cpt.layout('masonry');

          setTimeout(function () {
            _this.$refs.cpt.layout('masonry');
          }, 600);
        });
      }
    });
    baguettebox_js__WEBPACK_IMPORTED_MODULE_2___default.a.run('#isotope');
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    unsub();
    next();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/gallery.vue?vue&type=style&index=0&id=61a31212&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/gallery.vue?vue&type=style&index=0&id=61a31212&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.element-item[data-v-61a31212] {\n    padding: 7px;\n}\n.element-item img[data-v-61a31212] {\n    width: 300px;\n}\n@media screen and (max-width: 1250px)and (min-width: 1100px) {\n.element-item img[data-v-61a31212] {\n        width: 400px;\n}\n}\n@media screen and (max-width: 991px) and (min-width: 900px) {\n.element-item img[data-v-61a31212] {\n        width: 270px;\n}\n}\n@media screen and (max-width: 899px) and (min-width: 775px) {\n.element-item img[data-v-61a31212] {\n        width: 350px;\n}\n}\n@media screen and (max-width: 670px) and (min-width: 400px) {\n.element-item img[data-v-61a31212] {\n        width: 270px;\n}\n}\nbutton.is-checked[data-v-61a31212] {\n    background-color: #428bca;\n    color: #fff;\n}\nbutton.btn[data-v-61a31212] {\n    cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/gallery.vue?vue&type=style&index=0&id=61a31212&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/gallery.vue?vue&type=style&index=0&id=61a31212&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./gallery.vue?vue&type=style&index=0&id=61a31212&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/gallery.vue?vue&type=style&index=0&id=61a31212&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/gallery.vue?vue&type=template&id=61a31212&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/gallery.vue?vue&type=template&id=61a31212&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-6 col-xs-12" }, [
          _c("h3", [_vm._v(_vm._s(_vm.filterOption) + " Gallery")])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "col-lg-6 col-md-6 col-sm-6 col-xs-12 text-lg-right text-md-right  text-sm-right"
          },
          [
            _c(
              "div",
              { staticClass: "btn-group" },
              _vm._l(_vm.option.getFilterData, function(val, key) {
                return _c(
                  "button",
                  {
                    key: key,
                    staticClass: "btn",
                    class: [key === _vm.filterOption ? "is-checked" : ""],
                    on: {
                      click: function($event) {
                        return _vm.filter(key)
                      }
                    }
                  },
                  [_vm._v(_vm._s(key) + "\n                ")]
                )
              }),
              0
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "isotope",
        {
          directives: [
            {
              name: "images-loaded",
              rawName: "v-images-loaded:on.progress",
              value: _vm.layout,
              expression: "layout",
              arg: "on",
              modifiers: { progress: true }
            }
          ],
          ref: "cpt",
          staticClass: "center-block",
          attrs: {
            id: "isotope",
            "item-selector": "element-item",
            list: _vm.list,
            options: _vm.option
          },
          on: {
            filter: function($event) {
              _vm.filterOption = arguments[0]
            }
          }
        },
        _vm._l(_vm.list, function(element, index) {
          return _c("div", { key: index, class: element.filter }, [
            _c("a", { attrs: { href: element.src } }, [
              _c("img", {
                staticClass: "img-fluid",
                attrs: { src: element.src }
              })
            ])
          ])
        }),
        0
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/admin/components/pages/gallery.vue":
/*!*************************************************************!*\
  !*** ./resources/assets/admin/components/pages/gallery.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gallery_vue_vue_type_template_id_61a31212_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery.vue?vue&type=template&id=61a31212&scoped=true& */ "./resources/assets/admin/components/pages/gallery.vue?vue&type=template&id=61a31212&scoped=true&");
/* harmony import */ var _gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.vue?vue&type=script&lang=js& */ "./resources/assets/admin/components/pages/gallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _gallery_vue_vue_type_style_index_0_id_61a31212_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery.vue?vue&type=style&index=0&id=61a31212&scoped=true&lang=css& */ "./resources/assets/admin/components/pages/gallery.vue?vue&type=style&index=0&id=61a31212&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _gallery_vue_vue_type_template_id_61a31212_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _gallery_vue_vue_type_template_id_61a31212_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "61a31212",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/admin/components/pages/gallery.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/admin/components/pages/gallery.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/gallery.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./gallery.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/gallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/admin/components/pages/gallery.vue?vue&type=style&index=0&id=61a31212&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/gallery.vue?vue&type=style&index=0&id=61a31212&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_style_index_0_id_61a31212_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./gallery.vue?vue&type=style&index=0&id=61a31212&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/gallery.vue?vue&type=style&index=0&id=61a31212&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_style_index_0_id_61a31212_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_style_index_0_id_61a31212_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_style_index_0_id_61a31212_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_style_index_0_id_61a31212_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_style_index_0_id_61a31212_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/admin/components/pages/gallery.vue?vue&type=template&id=61a31212&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/gallery.vue?vue&type=template&id=61a31212&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_template_id_61a31212_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./gallery.vue?vue&type=template&id=61a31212&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/gallery.vue?vue&type=template&id=61a31212&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_template_id_61a31212_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_template_id_61a31212_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/admin/img/pages/blog1.jpeg":
/*!*****************************************************!*\
  !*** ./resources/assets/admin/img/pages/blog1.jpeg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "public/images/blog1.jpeg?268a25065ae1e5f6959d600881a02725";

/***/ }),

/***/ "./resources/assets/admin/img/pages/blog2.png":
/*!****************************************************!*\
  !*** ./resources/assets/admin/img/pages/blog2.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "public/images/blog2.png?11cc4ae38f2dbd677ce0583ef90b4c9c";

/***/ }),

/***/ "./resources/assets/admin/img/pages/blog3.jpeg":
/*!*****************************************************!*\
  !*** ./resources/assets/admin/img/pages/blog3.jpeg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "public/images/blog3.jpeg?ab2846f387caff1a54a2cc6729bf1a34";

/***/ }),

/***/ "./resources/assets/admin/img/pages/profile-coverbg.jpeg":
/*!***************************************************************!*\
  !*** ./resources/assets/admin/img/pages/profile-coverbg.jpeg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "public/images/profile-coverbg.jpeg?07354e69f42b03afab7a3241be08cd62";

/***/ }),

/***/ "./resources/assets/admin/img/pages/timeline.jpeg":
/*!********************************************************!*\
  !*** ./resources/assets/admin/img/pages/timeline.jpeg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "public/images/timeline.jpeg?b3e58577d60e7548f8ce5882c98d9f93";

/***/ }),

/***/ "./resources/assets/admin/img/pages/timeline1.jpeg":
/*!*********************************************************!*\
  !*** ./resources/assets/admin/img/pages/timeline1.jpeg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "public/images/timeline1.jpeg?2a29e4edd9500826957f24906b77ab98";

/***/ })

}]);