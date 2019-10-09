(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/plugins/scroll/vScroll.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/plugins/scroll/vScroll.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
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
  props: {
    height: null,
    minHeight: null,
    maxHeight: null,
    color: null,
    barWidth: null,
    alwaysvisible: Boolean
  },
  mounted: function mounted() {
    this.dragDealer();
    this.moveBar();
  },
  data: function data() {
    return {
      scrollRatio: 0,
      grabbed: false
    };
  },
  methods: {
    // Mouse drag handler
    dragDealer: function dragDealer() {
      var _this = this;

      var t = this;
      var lastPageY;
      this.$refs.bar.addEventListener('mousedown', function (e) {
        lastPageY = e.pageY;
        _this.grabbed = true;
        document.body.classList.add('ss-grabbed');
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stop);
        return false;

        function drag(e) {
          var delta = e.pageY - lastPageY;
          lastPageY = e.pageY;
          t.$refs.content.scrollTop += delta / t.scrollRatio;
        }

        function stop() {
          t.grabbed = false;
          document.body.classList.remove('ss-grabbed');
          document.removeEventListener('mousemove', drag);
          document.removeEventListener('mouseup', stop);
        }
      });
    },
    moveBar: function moveBar() {
      var content = this.$refs.content;
      var bar = this.$refs.bar;
      var totalHeight = content.scrollHeight,
          ownHeight = content.clientHeight;
      this.scrollRatio = ownHeight / totalHeight; // Hide scrollbar if no scrolling is possible

      if (this.scrollRatio >= 1) {
        bar.classList.add('ss-hidden');
      } else {
        bar.classList.remove('ss-hidden');
        bar.style.cssText = 'height:' + this.scrollRatio * 100 + '%; top:' + content.scrollTop / totalHeight * 100 + '%;right:-' + (this.$refs.vscroll.clientWidth - bar.clientWidth) + 'px;background-color:' + this.color + ';width:' + this.barWidth;
      }
    },
    scrolltotop: function scrolltotop() {
      this.$refs.content.scrollTop = 0;
    },
    scrolltobottom: function scrolltobottom() {
      this.$refs.content.scrollTop = this.$refs.content.scrollHeight;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/plugins/scroll/vScroll.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/plugins/scroll/vScroll.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.ss-wrapper {\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    position: relative;\n    z-index: 1;\n    float: left;\n}\n.ss-content {\n    height: 100%;\n    width: 100%;\n    padding: 0 18px 0 0;\n    position: relative;\n    right: -18px;\n    overflow: auto;\n    box-sizing: border-box;\n}\n.ss-scroll {\n    position: relative;\n    background: rgba(0, 0, 0, 0.1);\n    width: 9px;\n    border-radius: 4px;\n    top: 0;\n    z-index: 2;\n    cursor: pointer;\n    opacity: 0;\n    -webkit-transition: opacity 0.25s linear;\n    transition: opacity 0.25s linear;\n}\n.ss-hidden {\n    display: none;\n}\n.ss-container:hover .ss-scroll,\n.ss-scroll.ss-grabbed,\n.ss-scroll.visible {\n    opacity: 1;\n}\n.ss-grabbed {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/plugins/scroll/vScroll.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/plugins/scroll/vScroll.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./vScroll.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/plugins/scroll/vScroll.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/plugins/scroll/vScroll.vue?vue&type=template&id=78cec0f5&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/plugins/scroll/vScroll.vue?vue&type=template&id=78cec0f5& ***!
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
  return _c(
    "div",
    {
      ref: "vscroll",
      staticClass: "ss-container",
      style: {
        height: _vm.height,
        "min-height": _vm.minHeight,
        "max-height": _vm.maxHeight
      }
    },
    [
      _c("div", { ref: "wrapper", staticClass: "ss-wrapper" }, [
        _c(
          "div",
          {
            ref: "content",
            staticClass: "ss-content",
            on: { scroll: _vm.moveBar, mouseenter: _vm.moveBar }
          },
          [_vm._t("default")],
          2
        )
      ]),
      _vm._v(" "),
      _c("div", {
        ref: "bar",
        staticClass: "ss-scroll",
        class: { "ss-grabbed": _vm.grabbed, visible: _vm.alwaysvisible }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/admin/components/plugins/scroll/vScroll.vue":
/*!**********************************************************************!*\
  !*** ./resources/assets/admin/components/plugins/scroll/vScroll.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vScroll_vue_vue_type_template_id_78cec0f5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vScroll.vue?vue&type=template&id=78cec0f5& */ "./resources/assets/admin/components/plugins/scroll/vScroll.vue?vue&type=template&id=78cec0f5&");
/* harmony import */ var _vScroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vScroll.vue?vue&type=script&lang=js& */ "./resources/assets/admin/components/plugins/scroll/vScroll.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vScroll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vScroll.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/admin/components/plugins/scroll/vScroll.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _vScroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vScroll_vue_vue_type_template_id_78cec0f5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vScroll_vue_vue_type_template_id_78cec0f5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/admin/components/plugins/scroll/vScroll.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/admin/components/plugins/scroll/vScroll.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/admin/components/plugins/scroll/vScroll.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vScroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./vScroll.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/plugins/scroll/vScroll.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vScroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/admin/components/plugins/scroll/vScroll.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/admin/components/plugins/scroll/vScroll.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vScroll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./vScroll.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/plugins/scroll/vScroll.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vScroll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vScroll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vScroll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vScroll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vScroll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/admin/components/plugins/scroll/vScroll.vue?vue&type=template&id=78cec0f5&":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/admin/components/plugins/scroll/vScroll.vue?vue&type=template&id=78cec0f5& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vScroll_vue_vue_type_template_id_78cec0f5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./vScroll.vue?vue&type=template&id=78cec0f5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/plugins/scroll/vScroll.vue?vue&type=template&id=78cec0f5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vScroll_vue_vue_type_template_id_78cec0f5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vScroll_vue_vue_type_template_id_78cec0f5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/admin/img/authors/avatar.jpg":
/*!*******************************************************!*\
  !*** ./resources/assets/admin/img/authors/avatar.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "public/images/avatar.jpg?80cdd9fe2c757269df356b8776f807c0";

/***/ }),

/***/ "./resources/assets/admin/img/authors/avatar2.jpg":
/*!********************************************************!*\
  !*** ./resources/assets/admin/img/authors/avatar2.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "public/images/avatar2.jpg?e89022feb98cc08cf4886a2297f322ee";

/***/ }),

/***/ "./resources/assets/admin/img/authors/avatar3.jpg":
/*!********************************************************!*\
  !*** ./resources/assets/admin/img/authors/avatar3.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "public/images/avatar3.jpg?7e753d7cd80bf265209c7b7e18e36652";

/***/ }),

/***/ "./resources/assets/admin/img/authors/avatar4.jpg":
/*!********************************************************!*\
  !*** ./resources/assets/admin/img/authors/avatar4.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "public/images/avatar4.jpg?6339180afd928ccb36620e08d10918d5";

/***/ }),

/***/ "./resources/assets/admin/img/authors/avatar5.jpg":
/*!********************************************************!*\
  !*** ./resources/assets/admin/img/authors/avatar5.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "public/images/avatar5.jpg?aa74824e8dcbdfa396d34fcba51ec424";

/***/ }),

/***/ "./resources/assets/admin/img/authors/avatar6.jpg":
/*!********************************************************!*\
  !*** ./resources/assets/admin/img/authors/avatar6.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "public/images/avatar6.jpg?ce7f9e23cbeeb2ced933dfe547712b7a";

/***/ }),

/***/ "./resources/assets/admin/js/chat_data.js":
/*!************************************************!*\
  !*** ./resources/assets/admin/js/chat_data.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var chat = [{
  user: "Rickey",
  image: __webpack_require__(/*! img/authors/avatar2.jpg */ "./resources/assets/admin/img/authors/avatar2.jpg"),
  status: "Lorem ipsum dolor sit ametm  elit.",
  mbl_num: "9876543210",
  work: "Google",
  messages: [{
    msg: "Hi",
    from: "me",
    time: "09:10"
  }, {
    msg: "Good Morning",
    from: "me",
    time: "09:11"
  }, {
    msg: "Have a Nice day",
    from: "you",
    time: "09:12"
  }, {
    msg: "Hi ,How are you?",
    from: "me",
    time: "09:13"
  }, {
    msg: " Morning",
    from: "you",
    time: "09:14"
  }, {
    msg: "Have a Nice day",
    from: "me",
    time: "09:15"
  }, {
    msg: "Hi ,How are you?",
    from: "You",
    time: "09:16"
  }, {
    msg: "I am Fine",
    from: "me",
    time: "09:17"
  }, {
    msg: "I am Good",
    from: "you",
    time: "09:18"
  }]
}, {
  user: "Jenny",
  image: __webpack_require__(/*! img/authors/avatar4.jpg */ "./resources/assets/admin/img/authors/avatar4.jpg"),
  status: "Consec  ipsum  adipisicing.Lorem   elit.",
  mbl_num: "8907654231",
  work: "Apple",
  messages: [{
    msg: "Hi,Good Morning",
    from: "me",
    time: "17:23"
  }, {
    msg: "Have a Nice day",
    from: "you",
    time: "17:24"
  }, {
    msg: "Hi ,How are you?",
    from: "me",
    time: "17:25"
  }, {
    msg: " Morning",
    from: "you",
    time: "17:26"
  }, {
    msg: "Have a Nice day",
    from: "me",
    time: "17:27"
  }, {
    msg: "Hi ,How are you?",
    from: "You",
    time: "17:28"
  }, {
    msg: "I am Fine",
    from: "me",
    time: "17:29"
  }, {
    msg: "I am Good",
    from: "you",
    time: "17:30"
  }]
}, {
  user: "David",
  image: __webpack_require__(/*! img/authors/avatar3.jpg */ "./resources/assets/admin/img/authors/avatar3.jpg"),
  status: "Lorem ipsum dolor ipsum dolor  elit",
  mbl_num: "7894561203",
  work: "Microsoft",
  messages: [{
    msg: "Hi",
    from: "me",
    time: "13:49"
  }, {
    msg: "Hello",
    from: "you",
    time: "13:50"
  }, {
    msg: "What Are You Doing",
    from: "me",
    time: "13:51"
  }, {
    msg: "Hello",
    from: "you",
    time: "13:52"
  }, {
    msg: "What Are You Doing",
    from: "me",
    time: "13:53"
  }, {
    msg: "I am Doing Somework",
    from: "you",
    time: "13:54"
  }, {
    msg: "I am Doing Somework",
    from: "me",
    time: "13:55"
  }]
}, {
  user: "Roysingh",
  image: __webpack_require__(/*! img/authors/avatar5.jpg */ "./resources/assets/admin/img/authors/avatar5.jpg"),
  status: "Dolor ipsum amet elitLorem ipsum ",
  mbl_num: "9587643210",
  work: "Yahoo",
  messages: [{
    msg: "Hi",
    from: "me",
    time: "19:17"
  }, {
    msg: "Hello",
    from: "you",
    time: "19:18"
  }, {
    msg: "What Are You Doing",
    from: "me",
    time: "19:19"
  }, {
    msg: "I am Doing Somework",
    from: "you",
    time: "19:20"
  }]
}, {
  user: "Joe",
  image: __webpack_require__(/*! img/authors/avatar6.jpg */ "./resources/assets/admin/img/authors/avatar6.jpg"),
  status: "Dolor ipsum amet elitLorem ipsum ",
  mbl_num: "8974613215",
  work: "Amazon",
  messages: [{
    msg: "Hi",
    from: "me",
    time: "19:17"
  }, {
    msg: "Hello",
    from: "you",
    time: "19:18"
  }, {
    msg: "What Are You Doing",
    from: "me",
    time: "19:19"
  }, {
    msg: "I am Doing Somework",
    from: "you",
    time: "19:20"
  }]
}, {
  user: "Shasla",
  image: __webpack_require__(/*! img/authors/avatar.jpg */ "./resources/assets/admin/img/authors/avatar.jpg"),
  status: "Dolor ipsum dolor dolor elitLorem ",
  mbl_num: "7598642130",
  work: "IBM",
  messages: [{
    msg: "Hi",
    from: "me",
    time: "22:06"
  }, {
    msg: "Hello",
    from: "you",
    time: "22:07"
  }, {
    msg: "What Are You Doing",
    from: "you",
    time: "22:08"
  }, {
    msg: "I am Doing Somework",
    from: "me",
    time: "22:09"
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (chat);

/***/ })

}]);