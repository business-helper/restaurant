(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/chat.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/chat.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_widgets_chat_component_chat_large_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/widgets/chat_component/chat-large.vue */ "./resources/assets/admin/components/widgets/chat_component/chat-large.vue");
/* harmony import */ var _js_chat_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../js/chat_data */ "./resources/assets/admin/js/chat_data.js");
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  // ===Component name
  name: "chat_page",
  // ===Props passed to component
  props: {},
  // ===Components used by this component
  components: {
    chat: components_widgets_chat_component_chat_large_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  // ===component Data properties
  data: function data() {
    return {
      chat: _js_chat_data__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
  },
  // ===Code to be executed when Component is mounted
  mounted: function mounted() {},
  // ===Computed properties for the component
  computed: {},
  // ===Component methods
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/widgets/chat_component/chat-large.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/widgets/chat_component/chat-large.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_scroll_vScroll_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../plugins/scroll/vScroll.vue */ "./resources/assets/admin/components/plugins/scroll/vScroll.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    list: {
      "default": []
    }
  },
  components: {
    vScroll: _plugins_scroll_vScroll_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {},
  data: function data() {
    return {
      images: ['~img/pages/chat_background.png', '~img/pages/chat_background.png', '~img/pages/chat_background.png'],
      bgColor: __webpack_require__(/*! img/pages/chat_background.png */ "./resources/assets/admin/img/pages/chat_background.png"),
      className: '',
      newmessage: '',
      selected_user_index: 0
    };
  },
  methods: {
    send_message: function send_message() {
      if (this.newmessage.trim() != "") {
        this.list[this.selected_user_index].messages.push({
          msg: this.newmessage,
          from: "me"
        });
        this.newmessage = "";
        this.$refs.message_scroller.scrolltobottom();
      }
    },
    show_chat: function show_chat(user, index) {
      var _this = this;

      this.selected_user_index = index;
      setTimeout(function () {
        _this.$refs.input.focus();
      }, 20);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/chat.vue?vue&type=style&index=0&id=3d73c9c8&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/chat.vue?vue&type=style&index=0&id=3d73c9c8&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat[data-v-3d73c9c8] {\n  min-height: calc(100vh - 140px);\n  height: calc(100vh - 140px);\n  overflow: auto;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/widgets/chat_component/chat-large.vue?vue&type=style&index=0&id=61e9968a&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/widgets/chat_component/chat-large.vue?vue&type=style&index=0&id=61e9968a&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.desc-img[data-v-61e9968a] {\n  height: 40px;\n  width: 40px;\n}\n.chat_block[data-v-61e9968a] {\n  border-bottom: 1px solid #f4f2f2;\n}\n.chatalign[data-v-61e9968a] {\n  background-color: #fff !important;\n  height: 100%;\n}\n.chatalign ul[data-v-61e9968a] {\n  padding: 0;\n}\n.chatalign .ss-container[data-v-61e9968a] {\n  padding-right: 10px;\n}\n.converstion_back[data-v-61e9968a] {\n  height: 100%;\n  overflow: hidden;\n  background: #fff !important;\n  border: 1px solid #d8d6d6;\n}\n.converstion_back ul[data-v-61e9968a] {\n  padding: 0;\n}\n.converstion_back > .chat_header[data-v-61e9968a] {\n  background-color: #eaf5ff;\n  padding: 4px;\n  font-size: 20px;\n  font-weight: 500;\n}\n.converstion_back > .chat_header label[data-v-61e9968a] {\n  width: 25px;\n  height: 25px;\n}\n.converstion_back > .chat_header .bg1[data-v-61e9968a] {\n  background-image: url(" + escape(__webpack_require__(/*! img/pages/chat_background.png */ "./resources/assets/admin/img/pages/chat_background.png")) + ");\n}\n.converstion_back > .chat_header .bg2[data-v-61e9968a] {\n  background-image: url(" + escape(__webpack_require__(/*! img/pages/chat_background2.jpg */ "./resources/assets/admin/img/pages/chat_background2.jpg")) + ");\n}\n.converstion_back > .chat_header .bg3[data-v-61e9968a] {\n  background-image: url(" + escape(__webpack_require__(/*! img/pages/chat_background3.jpg */ "./resources/assets/admin/img/pages/chat_background3.jpg")) + ");\n}\n.converstion_back .ss-wrapper[data-v-61e9968a] {\n  height: 90%;\n}\n.received div p[data-v-61e9968a],\n.sent div p[data-v-61e9968a] {\n  border-radius: 7px;\n  display: inline-block;\n  padding: 7px 12px;\n  position: relative;\n  border: 1px solid #d4d2d2;\n}\n.received div p[data-v-61e9968a]::after {\n  content: \" \";\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: -12px;\n  right: auto;\n  top: 0px;\n  bottom: auto;\n  border: 12px solid;\n  border-color: #dbf2fa transparent transparent transparent;\n}\n.received div p[data-v-61e9968a]::before {\n  content: \" \";\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: -12px;\n  right: auto;\n  top: -1px;\n  bottom: auto;\n  border: 12px solid;\n  border-color: #d4d2d2 transparent transparent transparent;\n}\n.sent div p[data-v-61e9968a]::before {\n  content: \" \";\n  position: absolute;\n  width: 0;\n  height: 0;\n  right: -13px;\n  top: -1px;\n  bottom: auto;\n  border: 12px solid;\n  border-color: #d4d2d2 transparent transparent transparent;\n}\n.sent div p[data-v-61e9968a]::after {\n  content: \" \";\n  position: absolute;\n  width: 0;\n  height: 0;\n  right: -12px;\n  top: 0;\n  bottom: auto;\n  border: 12px solid;\n  border-color: #fff transparent transparent transparent;\n}\n.self[data-v-61e9968a] {\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n.self .msg[data-v-61e9968a] {\n  -webkit-box-ordinal-group: 2;\n          order: 1;\n  border-bottom-right-radius: 0px;\n  box-shadow: 1px 2px 0px #D4D4D4;\n}\n.sent > div[data-v-61e9968a] {\n  text-align: right;\n  padding: 0 17px 0 17px;\n}\n.sent > div .msg_time[data-v-61e9968a] {\n  font-size: 9px;\n}\n.sent > div p[data-v-61e9968a] {\n  background-color: #fff;\n}\n.received > div[data-v-61e9968a] {\n  text-align: left;\n  padding: 0 17px 0 17px;\n}\n.received > div .msg_time[data-v-61e9968a] {\n  font-size: 9px;\n}\n.received > div p[data-v-61e9968a] {\n  background-color: #dbf2fa;\n}\n.chat_content[data-v-61e9968a] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.send-btn[data-v-61e9968a] {\n  border-radius: 0;\n}\n.status-online[data-v-61e9968a] {\n  width: 12px;\n  height: 12px;\n  border-radius: 6px;\n  background-color: #63c17f;\n  position: relative;\n  top: 40px;\n  left: -8px;\n  border: 2px solid #fff;\n}\n.person_name[data-v-61e9968a]:before {\n  content: \" \\25CF\";\n  font-size: 21px;\n  position: relative;\n  top: -11px;\n  left: -27px;\n  color: #63c17f;\n}\n.profile[data-v-61e9968a] {\n  padding-bottom: 15px;\n  border: none;\n  height: 100%;\n  overflow-y: auto;\n  background-color: #FFFFFF;\n}\n.wrapper .converstion_back .ss-container[data-v-61e9968a] {\n  background-image: url(" + escape(__webpack_require__(/*! img/pages/chat_background.png */ "./resources/assets/admin/img/pages/chat_background.png")) + ");\n}\n.bgcolor[data-v-61e9968a] {\n  border: 2px solid #fff;\n  height: 10px;\n  width: 10px;\n}\n.colors[data-v-61e9968a] {\n  line-height: 1rem;\n  margin-top: 2px;\n}\n.colors span[data-v-61e9968a] {\n  font-size: 10px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/chat.vue?vue&type=style&index=0&id=3d73c9c8&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/chat.vue?vue&type=style&index=0&id=3d73c9c8&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./chat.vue?vue&type=style&index=0&id=3d73c9c8&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/chat.vue?vue&type=style&index=0&id=3d73c9c8&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/widgets/chat_component/chat-large.vue?vue&type=style&index=0&id=61e9968a&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/widgets/chat_component/chat-large.vue?vue&type=style&index=0&id=61e9968a&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./chat-large.vue?vue&type=style&index=0&id=61e9968a&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/widgets/chat_component/chat-large.vue?vue&type=style&index=0&id=61e9968a&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/chat.vue?vue&type=template&id=3d73c9c8&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/chat.vue?vue&type=template&id=3d73c9c8&scoped=true& ***!
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
  return _c("chat", { staticClass: "chat", attrs: { list: _vm.chat } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/widgets/chat_component/chat-large.vue?vue&type=template&id=61e9968a&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/widgets/chat_component/chat-large.vue?vue&type=template&id=61e9968a&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "col-sm-4 col-md-4 mt-3" }, [
      _c(
        "div",
        { staticClass: "chatalign" },
        [
          _c(
            "v-scroll",
            { attrs: { height: "100%", color: "#ccc", "bar-width": "3px" } },
            [
              _c(
                "ul",
                _vm._l(_vm.list, function(user, index) {
                  return _c("li", { key: index, staticClass: "chat_block" }, [
                    _c(
                      "a",
                      {
                        attrs: { href: user.user },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.show_chat(user, index)
                          }
                        }
                      },
                      [
                        _c("article", { staticClass: "media" }, [
                          _c("a", { staticClass: "float-left desc-img mt-3" }, [
                            _c("img", {
                              staticClass: "img-fluid rounded-circle",
                              attrs: { src: user.image }
                            })
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "status-online  m-t-10" }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "media-body pl-3 mb-1 mt-3 chat_content"
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "c-head text-success ",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [_vm._v(_vm._s(user.user))]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-muted" }, [
                                _c("span", [_vm._v(_vm._s(user.status))])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "mt-4 text-muted" }, [
                            _vm._v("12.54")
                          ])
                        ])
                      ]
                    )
                  ])
                }),
                0
              )
            ]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-sm-4 col-md-5 mt-3" }, [
      _c(
        "div",
        { staticClass: "converstion_back" },
        [
          _c("div", { staticClass: "chat_header", class: _vm.bgColor }, [
            _c("span", { staticClass: "pl-4" }, [
              _c("img", {
                staticClass: "img-fluid rounded-circle desc-img ",
                attrs: { src: _vm.list[_vm.selected_user_index].image }
              })
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "pl-3 person_name text_dark" }, [
              _vm._v(_vm._s(_vm.list[_vm.selected_user_index].user) + " ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "float-right" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("label", { staticClass: "bg1" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.bgColor,
                      expression: "bgColor"
                    }
                  ],
                  staticClass: "d-none",
                  attrs: { type: "radio" },
                  domProps: {
                    value: __webpack_require__(/*! img/pages/chat_background.png */ "./resources/assets/admin/img/pages/chat_background.png"),
                    checked: _vm._q(
                      _vm.bgColor,
                      __webpack_require__(/*! img/pages/chat_background.png */ "./resources/assets/admin/img/pages/chat_background.png")
                    )
                  },
                  on: {
                    change: function($event) {
                      _vm.bgColor = __webpack_require__(/*! img/pages/chat_background.png */ "./resources/assets/admin/img/pages/chat_background.png")
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("label", { staticClass: "bg2" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.bgColor,
                      expression: "bgColor"
                    }
                  ],
                  staticClass: "d-none",
                  attrs: { type: "radio" },
                  domProps: {
                    value: __webpack_require__(/*! img/pages/chat_background2.jpg */ "./resources/assets/admin/img/pages/chat_background2.jpg"),
                    checked: _vm._q(
                      _vm.bgColor,
                      __webpack_require__(/*! img/pages/chat_background2.jpg */ "./resources/assets/admin/img/pages/chat_background2.jpg")
                    )
                  },
                  on: {
                    change: function($event) {
                      _vm.bgColor = __webpack_require__(/*! img/pages/chat_background2.jpg */ "./resources/assets/admin/img/pages/chat_background2.jpg")
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("label", { staticClass: "bg3" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.bgColor,
                      expression: "bgColor"
                    }
                  ],
                  staticClass: "d-none",
                  attrs: { type: "radio" },
                  domProps: {
                    value: __webpack_require__(/*! img/pages/chat_background3.jpg */ "./resources/assets/admin/img/pages/chat_background3.jpg"),
                    checked: _vm._q(
                      _vm.bgColor,
                      __webpack_require__(/*! img/pages/chat_background3.jpg */ "./resources/assets/admin/img/pages/chat_background3.jpg")
                    )
                  },
                  on: {
                    change: function($event) {
                      _vm.bgColor = __webpack_require__(/*! img/pages/chat_background3.jpg */ "./resources/assets/admin/img/pages/chat_background3.jpg")
                    }
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "v-scroll",
            {
              ref: "message_scroller",
              style: { backgroundImage: "url(" + _vm.bgColor + ")" },
              attrs: {
                height: "calc(100% - 79px)",
                color: "#ccc",
                "bar-width": "3px"
              }
            },
            [
              _c(
                "ul",
                _vm._l(_vm.list[_vm.selected_user_index].messages, function(
                  item,
                  index
                ) {
                  return _c(
                    "li",
                    {
                      key: index,
                      class: [
                        { sent: item.from == "me" },
                        { received: item.from !== "me" }
                      ]
                    },
                    [
                      _c("div", [
                        _c("div", { staticClass: "msg_time" }, [
                          _vm._v(_vm._s(item.time))
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(item.msg))])
                      ])
                    ]
                  )
                }),
                0
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "input-group" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.newmessage,
                  expression: "newmessage"
                }
              ],
              ref: "input",
              staticClass: " form-control",
              attrs: { type: "text", placeholder: "New Message" },
              domProps: { value: _vm.newmessage },
              on: {
                keyup: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.send_message($event)
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.newmessage = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "input-group-append" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-success send-btn",
                  attrs: { type: "submit" },
                  on: { click: _vm.send_message }
                },
                [
                  _c("i", {
                    staticClass: "fa fa-paper-plane-o text-white",
                    attrs: { "aria-hidden": "true" }
                  })
                ]
              )
            ])
          ])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-sm-4 col-md-3 mt-3" }, [
      _c("div", { staticClass: "profile text-center pt-3" }, [
        _c("img", {
          staticClass: "rounded-circle img-fluid profile-thumb mb-3",
          attrs: {
            src: _vm.list[_vm.selected_user_index].image,
            alt: "User Image"
          }
        }),
        _vm._v(" "),
        _c("h4", { staticClass: "text-gray" }, [
          _vm._v(_vm._s(_vm.list[_vm.selected_user_index].user))
        ]),
        _vm._v(" "),
        _c("p", [_vm._v(_vm._s(_vm.list[_vm.selected_user_index].status))]),
        _vm._v(" "),
        _c("p", [
          _vm._v("Mobile Number: "),
          _c("span", [
            _c("b", [_vm._v(_vm._s(_vm.list[_vm.selected_user_index].mbl_num))])
          ])
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v("Organisation: "),
          _c("span", [
            _c("b", [_vm._v(_vm._s(_vm.list[_vm.selected_user_index].work))])
          ])
        ]),
        _vm._v(" "),
        _vm._m(1)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "colors" }, [
      _c("span", [_vm._v("Select Image")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "attachments text-left p-4" }, [
      _c("h5", [_vm._v("Attachments")]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-4 mt-2" }, [
          _c("img", {
            staticClass: "img-fluid",
            attrs: { src: __webpack_require__(/*! img/pages/14.jpg */ "./resources/assets/admin/img/pages/14.jpg"), alt: "" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-4 mt-2" }, [
          _c("img", {
            staticClass: "img-fluid",
            attrs: { src: __webpack_require__(/*! img/pages/15.jpg */ "./resources/assets/admin/img/pages/15.jpg"), alt: "" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-4 mt-2" }, [
          _c("img", {
            staticClass: "img-fluid",
            attrs: { src: __webpack_require__(/*! img/pages/16.jpg */ "./resources/assets/admin/img/pages/16.jpg"), alt: "" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-4 mt-2" }, [
          _c("img", {
            staticClass: "img-fluid",
            attrs: { src: __webpack_require__(/*! img/pages/17.jpg */ "./resources/assets/admin/img/pages/17.jpg"), alt: "" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-4 mt-2" }, [
          _c("img", {
            staticClass: "img-fluid",
            attrs: { src: __webpack_require__(/*! img/pages/18.jpg */ "./resources/assets/admin/img/pages/18.jpg"), alt: "" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-4 mt-2" }, [
          _c("img", {
            staticClass: "img-fluid",
            attrs: { src: __webpack_require__(/*! img/pages/20.jpg */ "./resources/assets/admin/img/pages/20.jpg"), alt: "" }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/admin/components/pages/chat.vue":
/*!**********************************************************!*\
  !*** ./resources/assets/admin/components/pages/chat.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_vue_vue_type_template_id_3d73c9c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.vue?vue&type=template&id=3d73c9c8&scoped=true& */ "./resources/assets/admin/components/pages/chat.vue?vue&type=template&id=3d73c9c8&scoped=true&");
/* harmony import */ var _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.vue?vue&type=script&lang=js& */ "./resources/assets/admin/components/pages/chat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _chat_vue_vue_type_style_index_0_id_3d73c9c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.vue?vue&type=style&index=0&id=3d73c9c8&lang=scss&scoped=true& */ "./resources/assets/admin/components/pages/chat.vue?vue&type=style&index=0&id=3d73c9c8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chat_vue_vue_type_template_id_3d73c9c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chat_vue_vue_type_template_id_3d73c9c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3d73c9c8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/admin/components/pages/chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/admin/components/pages/chat.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/chat.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./chat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/chat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/admin/components/pages/chat.vue?vue&type=style&index=0&id=3d73c9c8&lang=scss&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/chat.vue?vue&type=style&index=0&id=3d73c9c8&lang=scss&scoped=true& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_0_id_3d73c9c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./chat.vue?vue&type=style&index=0&id=3d73c9c8&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/chat.vue?vue&type=style&index=0&id=3d73c9c8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_0_id_3d73c9c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_0_id_3d73c9c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_0_id_3d73c9c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_0_id_3d73c9c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_0_id_3d73c9c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/admin/components/pages/chat.vue?vue&type=template&id=3d73c9c8&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/chat.vue?vue&type=template&id=3d73c9c8&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_3d73c9c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./chat.vue?vue&type=template&id=3d73c9c8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/chat.vue?vue&type=template&id=3d73c9c8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_3d73c9c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_3d73c9c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/admin/components/widgets/chat_component/chat-large.vue":
/*!*********************************************************************************!*\
  !*** ./resources/assets/admin/components/widgets/chat_component/chat-large.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_large_vue_vue_type_template_id_61e9968a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-large.vue?vue&type=template&id=61e9968a&scoped=true& */ "./resources/assets/admin/components/widgets/chat_component/chat-large.vue?vue&type=template&id=61e9968a&scoped=true&");
/* harmony import */ var _chat_large_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-large.vue?vue&type=script&lang=js& */ "./resources/assets/admin/components/widgets/chat_component/chat-large.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _chat_large_vue_vue_type_style_index_0_id_61e9968a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-large.vue?vue&type=style&index=0&id=61e9968a&scoped=true&lang=scss& */ "./resources/assets/admin/components/widgets/chat_component/chat-large.vue?vue&type=style&index=0&id=61e9968a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _chat_large_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chat_large_vue_vue_type_template_id_61e9968a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chat_large_vue_vue_type_template_id_61e9968a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "61e9968a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/admin/components/widgets/chat_component/chat-large.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/admin/components/widgets/chat_component/chat-large.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/assets/admin/components/widgets/chat_component/chat-large.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_large_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./chat-large.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/widgets/chat_component/chat-large.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_large_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/admin/components/widgets/chat_component/chat-large.vue?vue&type=style&index=0&id=61e9968a&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/widgets/chat_component/chat-large.vue?vue&type=style&index=0&id=61e9968a&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_large_vue_vue_type_style_index_0_id_61e9968a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./chat-large.vue?vue&type=style&index=0&id=61e9968a&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/widgets/chat_component/chat-large.vue?vue&type=style&index=0&id=61e9968a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_large_vue_vue_type_style_index_0_id_61e9968a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_large_vue_vue_type_style_index_0_id_61e9968a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_large_vue_vue_type_style_index_0_id_61e9968a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_large_vue_vue_type_style_index_0_id_61e9968a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_large_vue_vue_type_style_index_0_id_61e9968a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/admin/components/widgets/chat_component/chat-large.vue?vue&type=template&id=61e9968a&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/widgets/chat_component/chat-large.vue?vue&type=template&id=61e9968a&scoped=true& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_large_vue_vue_type_template_id_61e9968a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./chat-large.vue?vue&type=template&id=61e9968a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/widgets/chat_component/chat-large.vue?vue&type=template&id=61e9968a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_large_vue_vue_type_template_id_61e9968a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_large_vue_vue_type_template_id_61e9968a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/admin/img/pages/14.jpg":
/*!*************************************************!*\
  !*** ./resources/assets/admin/img/pages/14.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "public/images/14.jpg?8b9595054cc5c5989dbace43efe09e78";

/***/ }),

/***/ "./resources/assets/admin/img/pages/15.jpg":
/*!*************************************************!*\
  !*** ./resources/assets/admin/img/pages/15.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "public/images/15.jpg?664edafb4afcb01a87a2b719e9969db8";

/***/ }),

/***/ "./resources/assets/admin/img/pages/16.jpg":
/*!*************************************************!*\
  !*** ./resources/assets/admin/img/pages/16.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "public/images/16.jpg?5811c7a22de40813ab85d1730fecfacb";

/***/ }),

/***/ "./resources/assets/admin/img/pages/17.jpg":
/*!*************************************************!*\
  !*** ./resources/assets/admin/img/pages/17.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "public/images/17.jpg?f0f9158dd80ee33093a548d66c81e5cc";

/***/ }),

/***/ "./resources/assets/admin/img/pages/18.jpg":
/*!*************************************************!*\
  !*** ./resources/assets/admin/img/pages/18.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "public/images/18.jpg?318962c2569a5d219972d232c7553fad";

/***/ }),

/***/ "./resources/assets/admin/img/pages/20.jpg":
/*!*************************************************!*\
  !*** ./resources/assets/admin/img/pages/20.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "public/images/20.jpg?d1ea2fce56cf9269c77610cd04bbddc2";

/***/ }),

/***/ "./resources/assets/admin/img/pages/chat_background.png":
/*!**************************************************************!*\
  !*** ./resources/assets/admin/img/pages/chat_background.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "public/images/chat_background.png?43832ad56f84e37348a04973c4977af2";

/***/ }),

/***/ "./resources/assets/admin/img/pages/chat_background2.jpg":
/*!***************************************************************!*\
  !*** ./resources/assets/admin/img/pages/chat_background2.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "public/images/chat_background2.jpg?7ef0d5f54a1e706071d96e179f086f6e";

/***/ }),

/***/ "./resources/assets/admin/img/pages/chat_background3.jpg":
/*!***************************************************************!*\
  !*** ./resources/assets/admin/img/pages/chat_background3.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "public/images/chat_background3.jpg?5e4f394c357c2550b46126586071ddd0";

/***/ })

}]);