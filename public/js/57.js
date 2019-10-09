(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/subscription_product.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/subscription_product.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form */ "./node_modules/vue-form/dist/vue-form.js");
/* harmony import */ var vue_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_validations_validations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/validations/validations.js */ "./resources/assets/admin/validations/validations.js");
/* harmony import */ var resources_common_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! resources/common/api.service */ "./resources/assets/admin/common/api.service.js");
/* harmony import */ var vuejs_clipper_src_components_clipper_basic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuejs-clipper/src/components/clipper-basic */ "./node_modules/vuejs-clipper/src/components/clipper-basic.vue");
/* harmony import */ var vuejs_clipper_dist_vuejs_clipper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuejs-clipper/dist/vuejs-clipper.css */ "./node_modules/vuejs-clipper/dist/vuejs-clipper.css");
/* harmony import */ var vuejs_clipper_dist_vuejs_clipper_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vuejs_clipper_dist_vuejs_clipper_css__WEBPACK_IMPORTED_MODULE_5__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Subscription Plan",
  props: {},
  components: {
    ClipperBasic: vuejs_clipper_src_components_clipper_basic__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      model: {
        products: [{
          id: 0,
          name: '',
          description: ''
        }]
      },
      formstate: [{}],
      success_alert_show: false
    };
  },
  methods: {
    addproduct: function addproduct() {
      var temp = {};
      temp.name = '';
      temp.is_edit = false;
      this.model.products.push(temp);
      var formstate = this.formstate;
      formstate.push({});
      this.formstate = formstate;
    },
    closeproduct: function closeproduct(index) {
      this.model.products.splice(index, 1);
    },
    onSubmit: function onSubmit(index) {
      var _this = this;

      if (this.formstate.$invalid) return;
      var product = this.model.products[index];
      resources_common_api_service__WEBPACK_IMPORTED_MODULE_3__["default"].post('admin/add_product', product).then(function (result) {
        _this.success_alert_show = true;
        setTimeout(function () {
          _this.success_alert_show = false;
        }, 2000);
      }, function (error) {
        console.log(error.response);
      });
    }
  },
  beforeMount: function beforeMount() {
    var _this2 = this;

    this.model.slider_id = this.$route.params.slider_id;
    resources_common_api_service__WEBPACK_IMPORTED_MODULE_3__["default"].get("admin/get_product").then(function (response) {
      var data = response.data;

      if (data.length != 0) {
        var products = [];
        data.map(function (item) {
          products.push({
            name: item.name,
            id: item.id,
            description: item.description
          });
        });
        _this2.model.products = products;
      }
    }, function (error) {
      console.log(error.response);
    })["catch"](function (error) {
      console.log(error);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/subscription_product.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/subscription_product.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#logo-edit .zoom-area.shadow {\n  box-shadow: 0px 0px 0px 100vw !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/subscription_product.vue?vue&type=style&index=1&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/subscription_product.vue?vue&type=style&index=1&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#products-page {\n  width: 100%;\n  background: white;\n  padding: 20px 30px;\n}\n#products-page .product-holder {\n  width: 300px;\n  margin-top: 20px;\n  background: #eee;\n  padding: 20px;\n  border: 1px solid #555;\n  border-radius: 3px;\n  float: left;\n  margin-right: 20px;\n  box-shadow: 5px 5px 2px 0px rgba(0, 0, 0, 0.2);\n}\n#products-page .product-close {\n  font-size: 20px;\n  margin-top: -10px;\n  text-align: right;\n}\n#products-page .product-close i {\n  cursor: pointer;\n}\n#products-page .add-product-btn {\n  display: block;\n  margin-top: 20px;\n  float: right;\n}\n#products-page .logo-image-origin {\n  max-width: 200px;\n  max-height: 200px;\n}\n#products-page .logo-image-part-holder .placeholder {\n  text-align: center;\n  padding: 20px;\n  font-size: 20px;\n  background-color: lightgray;\n}\n#products-page .uploadButton {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  cursor: pointer;\n  margin-bottom: 10px;\n}\n#products-page .uploadButton img {\n  width: auto;\n  height: 40px;\n  margin: 0 auto;\n}\n#products-page .preview-title {\n  font-size: 20px;\n  margin-top: 30px;\n  margin-bottom: 10px;\n}\n#products-page .preview-holder {\n  margin-left: 40px;\n}\n#products-page .logo-page-title {\n  font-size: 18px;\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n#products-page .site-title-input {\n  padding: 5px 10px;\n  min-width: 250px;\n}\n#products-page .submit-button {\n  display: block;\n  margin-top: 20px;\n  padding: 5px 10px;\n  width: 100px;\n  font-weight: bold;\n  font-size: 16px;\n}\n#products-page .site-setting-alert {\n  visibility: hidden;\n  opacity: 0;\n  height: 0;\n  -webkit-transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n#products-page .site-setting-alert.show {\n  visibility: visible;\n  opacity: 1;\n  height: auto;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vuejs-clipper/dist/vuejs-clipper.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vuejs-clipper/dist/vuejs-clipper.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrap[data-v-4e4fd9af]{width:100%;position:relative;overflow:hidden}.shim[data-v-4e4fd9af]{display:block;width:100%;position:relative;top:0;left:0}.img-pos[data-v-4e4fd9af]{position:absolute;top:0;left:0;width:100%;-webkit-transform-origin:0 0;transform-origin:0 0}.img-rotate[data-v-4e4fd9af]{position:relative;top:0;left:0;width:100%;-webkit-transform-origin:50% 50%;transform-origin:50% 50%}.img[data-v-4e4fd9af]{left:0;top:0;position:relative;width:100%;display:block}.clipper-range[data-v-3766ed33]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:10px}.wrap[data-v-3766ed33]{position:relative;height:25px;width:100%}.stick[data-v-3766ed33]{position:absolute;width:100%;height:2px;background-color:grey;top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.bar[data-v-3766ed33]{position:absolute;cursor:pointer;width:12px;height:100%;background-color:#fff;-webkit-box-shadow:1px 1px 4px rgba(0,0,0,.5);box-shadow:1px 1px 4px rgba(0,0,0,.5);top:0;left:0}.vertical.clip-area .img-scale[data-v-b88921f2],.vertical.clip-area .img[data-v-b88921f2],.vertical.clip-area[data-v-b88921f2]{width:auto!important;height:100%!important}.clip-area[data-v-b88921f2]{position:relative!important;width:100%!important;overflow:hidden!important;-webkit-box-sizing:border-box!important;box-sizing:border-box!important;cursor:crosshair}.clip-area .img[data-v-b88921f2]{position:relative!important}.clip-area .img[data-v-b88921f2],.stem-canvas[data-v-b88921f2]{width:100%!important;display:block!important;pointer-events:none!important}.in-pad[data-v-b88921f2]{pointer-events:none!important;position:absolute!important;top:0!important;left:0!important;width:100%!important;height:100%!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;-webkit-box-sizing:border-box!important;box-sizing:border-box!important}.img-scale[data-v-b88921f2]{pointer-events:none!important;position:relative!important;width:100%!important}.zoom-area[data-v-b88921f2]{position:absolute!important;-webkit-box-sizing:border-box!important;box-sizing:border-box!important;border-style:solid;border-color:#1baae8;overflow:visible!important}.corner[data-v-b88921f2]{position:absolute;border-color:#fff;border-style:solid;width:10px;height:10px;opacity:.7}.corner[data-v-b88921f2]:hover{opacity:1}.corner1[data-v-b88921f2]{top:0;left:0;border-width:3px 0 0 3px;cursor:nwse-resize}.corner2[data-v-b88921f2]{top:0;right:0;border-width:3px 3px 0 0;cursor:nesw-resize}.corner3[data-v-b88921f2]{bottom:0;right:0;border-width:0 3px 3px 0;cursor:nwse-resize}.corner4[data-v-b88921f2]{bottom:0;left:0;border-width:0 0 3px 3px;cursor:nesw-resize}.extend[data-v-b88921f2]{color:#fff;top:0;left:0;width:100%;height:100%;cursor:move}.extend.outer[data-v-b88921f2]{width:100%;height:100%;position:absolute;border-style:solid;-webkit-box-sizing:content-box;box-sizing:content-box;opacity:0;-webkit-transition:opacity .5s;transition:opacity .5s}.extend.outer[data-v-b88921f2]:hover{opacity:.3}.extend.inner[data-v-b88921f2]{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.extend.inner:hover .drag-inset[data-v-b88921f2]{opacity:.3}.extend.inner:hover .drag-inset:hover.drag-inset[data-v-b88921f2]{opacity:0}.drag-inset[data-v-b88921f2]{position:relative;-webkit-box-shadow:0 0 0 4080px #fff;box-shadow:0 0 0 4080px #fff;top:0;left:0;width:100%;height:100%;cursor:-webkit-grab;cursor:grab;opacity:0;-webkit-transition:opacity .5s;transition:opacity .5s}.grid[data-v-b88921f2]{width:100%;height:100%;position:absolute;top:0;left:0;pointer-events:none}.grid-item[data-v-b88921f2]{position:absolute;border-color:hsla(0,0%,100%,.7);border-style:dashed;width:50%;height:50%;-webkit-box-sizing:border-box;box-sizing:border-box}.grid-item[data-v-b88921f2]:first-child{top:0;left:0;border-width:0 1px 1px 0;-webkit-transform:translate(.5px,.5px);transform:translate(.5px,.5px)}.grid-item[data-v-b88921f2]:nth-child(2){top:0;right:0;border-width:0 0 1px 0;-webkit-transform:translate(-.5px,.5px);transform:translate(-.5px,.5px)}.grid-item[data-v-b88921f2]:nth-child(3){bottom:0;left:0;border-width:0 1px 0 0;-webkit-transform:translate(.5px,-.5px);transform:translate(.5px,-.5px)}.grid-item[data-v-b88921f2]:nth-child(4){bottom:0;right:0;border-width:0;-webkit-transform:translate(-.5px,-.5px);transform:translate(-.5px,-.5px)}.wrap[data-v-c8cd3b90]{position:relative!important;overflow:hidden!important;width:100%!important;height:100%!important;cursor:-webkit-grab;cursor:grab}.stem-outer[data-v-c8cd3b90]{display:block!important}.stem-bg[data-v-c8cd3b90],.stem-outer[data-v-c8cd3b90]{position:relative!important;top:0!important;left:0!important;width:100%!important}.img-center[data-v-c8cd3b90]{width:100%!important;position:absolute!important;top:50%!important;left:50%!important;-webkit-transform:translate(-50%,-50%)!important;transform:translate(-50%,-50%)!important}.img-scale[data-v-c8cd3b90],.img-translate[data-v-c8cd3b90]{position:absolute!important;top:0!important;left:0!important;width:100%!important;height:100%!important}.img[data-v-c8cd3b90]{display:block!important}.cover[data-v-c8cd3b90],.img[data-v-c8cd3b90]{position:absolute!important;top:0!important;left:0!important;width:100%!important}.cover[data-v-c8cd3b90]{pointer-events:none!important;height:100%!important;overflow:hidden!important}.area[data-v-c8cd3b90]{position:absolute!important;top:50%!important;left:50%!important;-webkit-transform:translate(-50%,-50%)!important;transform:translate(-50%,-50%)!important;border-style:solid}.stem-area[data-v-c8cd3b90]{display:block!important;position:relative!important}.grid[data-v-c8cd3b90]{width:100%;height:100%;position:absolute;top:0;left:0;pointer-events:none}.grid-item[data-v-c8cd3b90]{position:absolute;border-color:hsla(0,0%,100%,.7);border-style:dashed;width:50%;height:50%;-webkit-box-sizing:border-box;box-sizing:border-box}.grid-item[data-v-c8cd3b90]:first-child{top:0;left:0;border-width:0 1px 1px 0;-webkit-transform:translate(.5px,.5px);transform:translate(.5px,.5px)}.grid-item[data-v-c8cd3b90]:nth-child(2){top:0;right:0;border-width:0 0 1px 0;-webkit-transform:translate(-.5px,.5px);transform:translate(-.5px,.5px)}.grid-item[data-v-c8cd3b90]:nth-child(3){bottom:0;left:0;border-width:0 1px 0 0;-webkit-transform:translate(.5px,-.5px);transform:translate(.5px,-.5px)}.grid-item[data-v-c8cd3b90]:nth-child(4){bottom:0;right:0;border-width:0;-webkit-transform:translate(-.5px,-.5px);transform:translate(-.5px,-.5px)}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/subscription_product.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/subscription_product.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./subscription_product.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/subscription_product.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/subscription_product.vue?vue&type=style&index=1&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/subscription_product.vue?vue&type=style&index=1&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./subscription_product.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/subscription_product.vue?vue&type=style&index=1&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/subscription_product.vue?vue&type=template&id=56d0a3bd&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/subscription_product.vue?vue&type=template&id=56d0a3bd& ***!
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
  return _c(
    "div",
    { attrs: { id: "products-page" } },
    [
      _c(
        "div",
        {
          class: {
            "alert alert-success site-setting-alert": true,
            show: _vm.success_alert_show
          }
        },
        [_vm._v("Site Setting successfully updated")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-secondary add-product-btn",
          on: {
            click: function($event) {
              $event.stopPropagation()
              $event.preventDefault()
              return _vm.addproduct($event)
            }
          }
        },
        [_vm._v("Add Product")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "clearfix" }),
      _vm._v(" "),
      _vm._l(_vm.model.products, function(product, index) {
        return [
          _c(
            "vue-form",
            {
              staticClass: "form-horizontal form-validation",
              attrs: { state: _vm.formstate[index] },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.onSubmit(index)
                }
              }
            },
            [
              _c("div", { staticClass: "product-holder" }, [
                _c("div", { staticClass: "product-close" }, [
                  _c("i", {
                    staticClass: "fas fa-close",
                    on: {
                      click: function($event) {
                        return _vm.closeproduct(index)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Name")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: product.name,
                        expression: "product.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "name", autofocus: "" },
                    domProps: { value: product.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(product, "name", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Description (optional)")]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: product.description,
                        expression: "product.description"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "description", autofocus: "" },
                    domProps: { value: product.description },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(product, "description", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success submit-button",
                    attrs: { type: "submit" }
                  },
                  [_vm._v(_vm._s(product.id == 0 ? "Submit" : "Update"))]
                )
              ])
            ]
          )
        ]
      }),
      _vm._v(" "),
      _c("div", { staticClass: "clearfix" })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuejs-clipper/dist/vuejs-clipper.css":
/*!***********************************************************!*\
  !*** ./node_modules/vuejs-clipper/dist/vuejs-clipper.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--7-1!../../postcss-loader/src??ref--7-2!./vuejs-clipper.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vuejs-clipper/dist/vuejs-clipper.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/assets/admin/components/pages/subscription_product.vue":
/*!**************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/subscription_product.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subscription_product_vue_vue_type_template_id_56d0a3bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscription_product.vue?vue&type=template&id=56d0a3bd& */ "./resources/assets/admin/components/pages/subscription_product.vue?vue&type=template&id=56d0a3bd&");
/* harmony import */ var _subscription_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscription_product.vue?vue&type=script&lang=js& */ "./resources/assets/admin/components/pages/subscription_product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _subscription_product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscription_product.vue?vue&type=style&index=0&lang=scss& */ "./resources/assets/admin/components/pages/subscription_product.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _subscription_product_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscription_product.vue?vue&type=style&index=1&lang=scss& */ "./resources/assets/admin/components/pages/subscription_product.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _subscription_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _subscription_product_vue_vue_type_template_id_56d0a3bd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _subscription_product_vue_vue_type_template_id_56d0a3bd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/admin/components/pages/subscription_product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/admin/components/pages/subscription_product.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/subscription_product.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_subscription_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./subscription_product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/subscription_product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_subscription_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/admin/components/pages/subscription_product.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/subscription_product.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_subscription_product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./subscription_product.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/subscription_product.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_subscription_product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_subscription_product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_subscription_product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_subscription_product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_subscription_product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/admin/components/pages/subscription_product.vue?vue&type=style&index=1&lang=scss&":
/*!************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/subscription_product.vue?vue&type=style&index=1&lang=scss& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_subscription_product_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./subscription_product.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/subscription_product.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_subscription_product_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_subscription_product_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_subscription_product_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_subscription_product_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_subscription_product_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/admin/components/pages/subscription_product.vue?vue&type=template&id=56d0a3bd&":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/subscription_product.vue?vue&type=template&id=56d0a3bd& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_subscription_product_vue_vue_type_template_id_56d0a3bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./subscription_product.vue?vue&type=template&id=56d0a3bd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/subscription_product.vue?vue&type=template&id=56d0a3bd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_subscription_product_vue_vue_type_template_id_56d0a3bd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_subscription_product_vue_vue_type_template_id_56d0a3bd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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