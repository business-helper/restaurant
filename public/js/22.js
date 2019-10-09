(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/logo.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/logo.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form */ "./node_modules/vue-form/dist/vue-form.js");
/* harmony import */ var vue_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_validations_validations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/validations/validations.js */ "./resources/assets/admin/validations/validations.js");
/* harmony import */ var restaurant_resources_common_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! restaurant_resources/common/api.service */ "./resources/assets/restaurant/common/api.service.js");
/* harmony import */ var common_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/api.service */ "./resources/assets/admin/common/api.service.js");
/* harmony import */ var vuejs_clipper_src_components_clipper_basic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuejs-clipper/src/components/clipper-basic */ "./node_modules/vuejs-clipper/src/components/clipper-basic.vue");
/* harmony import */ var vuejs_clipper_dist_vuejs_clipper_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuejs-clipper/dist/vuejs-clipper.css */ "./node_modules/vuejs-clipper/dist/vuejs-clipper.css");
/* harmony import */ var vuejs_clipper_dist_vuejs_clipper_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vuejs_clipper_dist_vuejs_clipper_css__WEBPACK_IMPORTED_MODULE_6__);
//
//
//
//
//
//
//
//
//
//
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
  name: "LogoTitle",
  props: {},
  components: {
    ClipperBasic: vuejs_clipper_src_components_clipper_basic__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      logoURL: '',
      resultLogoURL: '',
      succes_alert_show: false,
      api_service: restaurant_resources_common_api_service__WEBPACK_IMPORTED_MODULE_3__["default"],
      restaurant_id: 0
    };
  },
  methods: {
    upload: function upload(e) {
      if (e.target.files.length !== 0) {
        if (this.logoURL) URL.revokeObjectURL(this.logoURL);
        this.logoURL = window.URL.createObjectURL(e.target.files[0]);
      }
    },
    getResult: function getResult() {
      var canvas = this.$refs.clipper.clip(); //call component's clip method

      this.resultLogoURL = canvas.toDataURL("image/jpg", 1); //canvas->image
    },
    logoImgLoad: function logoImgLoad() {
      this.$refs.clipper.setTL$.next({
        "top": 0,
        "left": 0
      });
      this.$refs.clipper.setWH$.next({
        "width": 100,
        "height": 100
      });
    },
    submit: function submit() {
      var _this = this;

      this.getResult();
      var data = {};
      data.logo_image = this.resultLogoURL;
      this.api_service.post("restaurant/add_logo/".concat(this.restaurant_id != 0 ? this.restaurant_id : ''), data).then(function (result) {
        _this.succes_alert_show = true;
        setTimeout(function () {
          _this.succes_alert_show = false;
          if (_this.restaurant_id != 0) _this.$router.push('/restaurant_list');
        }, 2000);
      }, function (error) {
        console.log(error.response);
      });
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

    this.api_service.get('restaurant/get_logo' + add_restaurant_id).then(function (result) {
      var data = result.data;

      if (data.logo) {
        fetch(data.logo).then(function (res) {
          return res.blob();
        }) // Gets the response and returns it as a blob
        .then(function (blob) {
          var objectURL = URL.createObjectURL(blob);
          _this2.logoURL = objectURL;
        });
      }
    }, function (error) {
      console.log(error.response);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/logo.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/logo.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#logo-edit .zoom-area.shadow {\n  box-shadow: 0px 0px 0px 100vw !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/logo.vue?vue&type=style&index=1&id=40a89f3e&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/logo.vue?vue&type=style&index=1&id=40a89f3e&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#logo-edit[data-v-40a89f3e] {\n  width: 100%;\n  background: white;\n  padding: 20px 30px;\n}\n#logo-edit .logo-image-part-holder[data-v-40a89f3e] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-column-gap: 20px;\n  max-width: 800px;\n}\n#logo-edit .logo-image-origin[data-v-40a89f3e] {\n  width: 400px;\n  /*height:300px;*/\n}\n#logo-edit .logo-image-part-holder .placeholder[data-v-40a89f3e] {\n  height: 300px;\n  text-align: center;\n  padding: 20px;\n  font-size: 20px;\n  background-color: lightgray;\n  padding-top: 140px;\n}\n#logo-edit .uploadButton[data-v-40a89f3e] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  cursor: pointer;\n  margin-bottom: 10px;\n}\n#logo-edit .uploadButton img[data-v-40a89f3e] {\n  width: auto;\n  height: 50px;\n  margin: 0 auto;\n}\n#logo-edit .preview-title[data-v-40a89f3e] {\n  font-size: 20px;\n  margin-top: 30px;\n  margin-bottom: 10px;\n}\n#logo-edit .preview-holder[data-v-40a89f3e] {\n  margin-left: 40px;\n}\n#logo-edit .logo-page-title[data-v-40a89f3e] {\n  font-size: 20px;\n  margin-bottom: 30px;\n  font-weight: bold;\n}\n#logo-edit .site-title-input[data-v-40a89f3e] {\n  padding: 5px 10px;\n  min-width: 250px;\n}\n#logo-edit .submit-button[data-v-40a89f3e] {\n  padding: 5px 10px;\n  width: 100px;\n  font-weight: bold;\n  font-size: 16px;\n  margin-top: 15px;\n}\n#logo-edit .site-setting-alert[data-v-40a89f3e] {\n  visibility: hidden;\n  opacity: 0;\n  height: 0;\n  -webkit-transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n#logo-edit .site-setting-alert.show[data-v-40a89f3e] {\n  visibility: visible;\n  opacity: 1;\n  height: auto;\n}", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/logo.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/logo.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./logo.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/logo.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/logo.vue?vue&type=style&index=1&id=40a89f3e&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/logo.vue?vue&type=style&index=1&id=40a89f3e&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./logo.vue?vue&type=style&index=1&id=40a89f3e&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/logo.vue?vue&type=style&index=1&id=40a89f3e&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/logo.vue?vue&type=template&id=40a89f3e&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/logo.vue?vue&type=template&id=40a89f3e&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "logo-edit" } }, [
    _c(
      "div",
      {
        class: {
          "alert alert-success site-setting-alert": true,
          show: _vm.succes_alert_show
        }
      },
      [_vm._v("Site Setting successfully updated")]
    ),
    _vm._v(" "),
    _c("h3", { staticClass: "logo-page-title" }, [_vm._v("Logo")]),
    _vm._v(" "),
    _c("div", { staticClass: "logo-image-part-holder" }, [
      _c(
        "div",
        { staticClass: "image-base-holder" },
        [
          _c(
            "clipper-upload",
            {
              staticClass: "uploadButton",
              model: {
                value: _vm.logoURL,
                callback: function($$v) {
                  _vm.logoURL = $$v
                },
                expression: "logoURL"
              }
            },
            [
              _c("img", {
                attrs: { src: "public/Images/Icons/imageUpload.png" }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "clipper-basic",
            {
              ref: "clipper",
              staticClass: "logo-image-origin",
              attrs: {
                src: _vm.logoURL,
                shadow: "rgba(0,0,0,0.4)",
                bgColor: "null",
                ratio: 1
              },
              on: { load: _vm.logoImgLoad }
            },
            [
              _c(
                "div",
                {
                  staticClass: "placeholder",
                  attrs: { slot: "placeholder" },
                  slot: "placeholder"
                },
                [_vm._v("No image")]
              )
            ]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "btn btn-success submit-button",
        on: { click: _vm.submit }
      },
      [_vm._v("Submit")]
    )
  ])
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

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/logo.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/logo.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logo_vue_vue_type_template_id_40a89f3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.vue?vue&type=template&id=40a89f3e&scoped=true& */ "./resources/assets/restaurant/components/pages/logo.vue?vue&type=template&id=40a89f3e&scoped=true&");
/* harmony import */ var _logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.vue?vue&type=script&lang=js& */ "./resources/assets/restaurant/components/pages/logo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _logo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo.vue?vue&type=style&index=0&lang=scss& */ "./resources/assets/restaurant/components/pages/logo.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _logo_vue_vue_type_style_index_1_id_40a89f3e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo.vue?vue&type=style&index=1&id=40a89f3e&lang=scss&scoped=true& */ "./resources/assets/restaurant/components/pages/logo.vue?vue&type=style&index=1&id=40a89f3e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _logo_vue_vue_type_template_id_40a89f3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _logo_vue_vue_type_template_id_40a89f3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "40a89f3e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/restaurant/components/pages/logo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/logo.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/logo.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./logo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/logo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/logo.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/logo.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./logo.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/logo.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/logo.vue?vue&type=style&index=1&id=40a89f3e&lang=scss&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/logo.vue?vue&type=style&index=1&id=40a89f3e&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_style_index_1_id_40a89f3e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./logo.vue?vue&type=style&index=1&id=40a89f3e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/logo.vue?vue&type=style&index=1&id=40a89f3e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_style_index_1_id_40a89f3e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_style_index_1_id_40a89f3e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_style_index_1_id_40a89f3e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_style_index_1_id_40a89f3e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_style_index_1_id_40a89f3e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/logo.vue?vue&type=template&id=40a89f3e&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/logo.vue?vue&type=template&id=40a89f3e&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_template_id_40a89f3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./logo.vue?vue&type=template&id=40a89f3e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/logo.vue?vue&type=template&id=40a89f3e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_template_id_40a89f3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_template_id_40a89f3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);