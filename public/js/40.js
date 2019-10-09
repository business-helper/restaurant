(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/header/fixed-header.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/header/fixed-header.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "vueadmin_header",
  data: function data() {
    return {
      name: "",
      user: {}
    };
  },
  methods: {
    toggle_menu: function toggle_menu() {
      this.$store.commit('left_menu', "toggle");
    },
    fullscreen: function fullscreen() {
      if (screenfull__WEBPACK_IMPORTED_MODULE_0___default.a.enabled) {
        screenfull__WEBPACK_IMPORTED_MODULE_0___default.a.toggle();
      }
    },
    toggle_right: function toggle_right() {
      this.$store.commit('rightside_bar', "toggle");
    },
    logout: function logout() {
      window.localStorage.removeItem('admin_token');
      window.localStorage.removeItem('admin');
      delete axios.defaults.headers.common['Authorization'];
      this.$router.push({
        name: "login"
      });
    }
  },
  beforeMount: function beforeMount() {
    this.user = window.localStorage.getItem('user');

    if (this.user != null) {
      this.name = JSON.parse(this.user)['name'];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/default/left-side.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/left-side/default/left-side.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./resources/assets/admin/components/layouts/left-side/default/menu/index.js");
/* harmony import */ var _left_profile_user_profile2_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../left-profile/user_profile2.vue */ "./resources/assets/admin/components/layouts/left-side/left-profile/user_profile2.vue");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../menu.js */ "./resources/assets/admin/menu.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "left-side",
  components: {
    vmenu: _menu__WEBPACK_IMPORTED_MODULE_0__["vmenu"],
    vsubMenu: _menu__WEBPACK_IMPORTED_MODULE_0__["vsubMenu"],
    vmenuItem: _menu__WEBPACK_IMPORTED_MODULE_0__["vmenuItem"],
    profile: _left_profile_user_profile2_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      menuitems: _menu_js__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
  },
  mounted: function mounted() {// console.log(this.components.vmenu);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/default/menu/MenuItem.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/left-side/default/menu/MenuItem.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["link", "icon"],
  methods: {
    calcActiveClass: function calcActiveClass() {
      var class_name = 'menu-item ';
      var this_link = this.link.replace('/', '');
      class_name += this_link;
      var path = this.$route.path;

      if (this.link.includes('list')) {
        if (path.includes('edit_')) {
          var path_array = path.split('/');
          var edit_path = path_array[path_array.length - 2];
          var link_name = edit_path.split('_');
          var link_name_object = link_name[link_name.length - 1];
          if (link_name_object + '_list' == this_link) class_name += ' active';
        }
      }

      return class_name;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/default/menu/subMenu.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/left-side/default/menu/subMenu.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/anime.min.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
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
    selected: Boolean,
    icon: String,
    title: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      isActived: this.selected
    };
  },
  computed: {
    index: function index() {
      return this.$parent.$collapseItems.indexOf(this);
    }
  },
  created: function created() {
    this._isCollapseItem = true;
  },
  mounted: function mounted() {
    var _this = this;

    function activate(self) {
      if (self.$refs.box) {
        self.isActived = self.$refs.box.querySelectorAll("a.active").length >= 1 ? true : false;
      }
    } //change when route changes


    this.$store.subscribe(function (mutation, state) {
      if (mutation.type == "routeChange" && mutation.payload == "end") {
        setTimeout(function () {
          activate(_this);
        }, 0);
      }
    });
    activate(this);
  },
  methods: {
    toggle: function toggle() {
      this.$parent.$emit('closeall', this.index);
      this.isActived = !this.isActived;
    },
    cancel: function cancel() {
      this.anime.pause();
    },
    before: function before(targets) {
      targets.removeAttribute('style');
    },
    enter: function enter(targets, done) {
      var height = targets.scrollHeight;
      targets.style.height = 0;
      targets.style.opacity = 0;
      animejs__WEBPACK_IMPORTED_MODULE_0___default()({
        targets: targets,
        duration: 377,
        easing: 'easeOutExpo',
        opacity: [0, 1],
        height: height,
        complete: function complete() {
          targets.removeAttribute('style');
          done();
        }
      });
    },
    leave: function leave(targets, complete) {
      animejs__WEBPACK_IMPORTED_MODULE_0___default()({
        targets: targets,
        duration: 377,
        easing: 'easeOutExpo',
        opacity: [1, 0],
        height: 0
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/default/menu/vueMenu.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/left-side/default/menu/vueMenu.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    $collapseItems: function $collapseItems() {
      return this.$children.filter(function (child) {
        return child._isCollapseItem;
      });
    }
  },
  methods: {
    openByIndex: function openByIndex(index) {
      this.$collapseItems.forEach(function (item, i) {
        if (i !== index) {
          item.isActived = false;
        }
      });
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$on("closeall", function (index) {
      _this.openByIndex(index);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/left-profile/user_profile2.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/left-side/left-profile/user_profile2.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
//
//
//
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
  data: function data() {
    return {
      user: {},
      email: "",
      name: ""
    };
  },
  beforeMount: function beforeMount() {
    this.user = window.localStorage.getItem('user');

    if (this.user != null) {
      this.name = JSON.parse(this.user)['name'];
      this.email = JSON.parse(this.user)['email'];
    }
  },
  mounted: function mounted() {},
  destroyed: function destroyed() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/right-side-bar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/right-side-bar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_right_side_bar_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sass/_right_side_bar.scss */ "./resources/assets/admin/sass/_right_side_bar.scss");
/* harmony import */ var _sass_right_side_bar_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_right_side_bar_scss__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "right_side_bar",
  mounted: function mounted() {},
  destroyed: function destroyed() {},
  methods: {
    change_skin: function change_skin() {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/right-side.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/right-side.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _right_side_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./right-side-bar */ "./resources/assets/admin/components/layouts/right-side-bar.vue");
//
//
//
//
//
//
//
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
  name: "right-side",
  components: {
    rightSideBar: _right_side_bar__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/layout.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/layout.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_layouts_preloader_preloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/layouts/preloader/preloader */ "./resources/assets/admin/components/layouts/preloader/preloader.vue");
/* harmony import */ var components_layouts_right_side__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/layouts/right-side */ "./resources/assets/admin/components/layouts/right-side.vue");
/* harmony import */ var components_layouts_left_side_default_left_side__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/layouts/left-side/default/left-side */ "./resources/assets/admin/components/layouts/left-side/default/left-side.vue");
/* harmony import */ var components_layouts_header_fixed_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/layouts/header/fixed-header */ "./resources/assets/admin/components/layouts/header/fixed-header.vue");
/* harmony import */ var resources_sass_custom_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! resources/sass/custom.scss */ "./resources/assets/admin/sass/custom.scss");
/* harmony import */ var resources_sass_custom_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(resources_sass_custom_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_layouts_css_fixed_menu_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/layouts/css/fixed-menu.scss */ "./resources/assets/admin/components/layouts/css/fixed-menu.scss");
/* harmony import */ var components_layouts_css_fixed_menu_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(components_layouts_css_fixed_menu_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/anime.min.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_6__);
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * These are the files that enable you to change layouts and other options
 */

/**
 * import preloader
 * choose from preloader and bounce
 */

/**
 * The right side content
 */


/**
 * import left-side from default or horizontal-menu or mini-menu
 * eg: import left_side from 'components/layouts/left-side/horizontal-menu/left-side'
 */
// import left_side from 'components/layouts/left-side/horizontal-menu/left-side'
// import left_side from 'components/layouts/left-side/mini-menu/left-side'


/**
 * import from header or fixed-header or no-header
 */


/**
 * Styles
 */

/**
 * Main stylesheet for the layout
 */


/**
 * Style required for a boxed layout
 */
// import 'components/layouts/css/boxed.scss'

/**
 * Style required for a fixed-menu layout
 */


/**
 * Style required for a compact-menu layout
 */
//     import 'components/layouts/css/compact-menu.scss'

/**
 * Style required for a centered-logo layout
 */
// import 'components/layouts/css/centered-logo.scss'

/**
 * Style required for a content-menu layout
 */
// import 'components/layouts/css/content_menu.scss'

/**
 * import animejs for the menu transition effects
 */


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'layout',
  components: {
    preloader: components_layouts_preloader_preloader__WEBPACK_IMPORTED_MODULE_0__["default"],
    vueadmin_header: components_layouts_header_fixed_header__WEBPACK_IMPORTED_MODULE_3__["default"],
    left_side: components_layouts_left_side_default_left_side__WEBPACK_IMPORTED_MODULE_2__["default"],
    right_side: components_layouts_right_side__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      showtopbtn: false
    };
  },
  methods: {
    right_close: function right_close() {
      this.$store.commit('rightside_bar', "close");
    }
  },
  mounted: function mounted() {
    if (window.innerWidth <= 992) {
      this.$store.commit('left_menu', 'close');
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/assets/admin/sass/_right_side_bar.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./resources/assets/admin/sass/_right_side_bar.scss ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* right side bar css start */\n#right {\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  width: 270px;\n  z-index: 999;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  overflow-y: auto;\n  right: -270px;\n  box-shadow: 0 0 15px #CCC;\n  background: #FAFAFA;\n}\n#right.open {\n  right: 0;\n}\n#right .nav-tabs > li > a:hover {\n  border: 1px solid transparent;\n}\n#right .card-body {\n  padding: 0;\n}\n\n.rightsidebar-right {\n  padding-top: 50px;\n}\n@media (min-width: 320px) and (max-width: 560px) {\n  .rightsidebar-right {\n    padding-top: 100px !important;\n  }\n}\n.rightsidebar-right .nav-tabs {\n  border-bottom: 0;\n}\n.rightsidebar-right .text-muted {\n  color: #555;\n}\n.rightsidebar-right .rightsidebar-right-heading, .rightsidebar-right .rightside-right-heading {\n  background: #FFF;\n  color: #555;\n  border-bottom: 1px solid #DDD;\n  border-top: 1px solid #DDD;\n  margin: 0px -20px 0;\n  font-size: 15px;\n  padding: 15px 20px 15px 15px;\n}\n.rightsidebar-right .rightside-right-heading {\n  border-bottom: 3px solid #6699cc;\n}\n\n.rightslider-p-t {\n  padding-top: 0 !important;\n}\n\n.margin-none {\n  margin: 0;\n}\n\n.rightsidebar-contact-wrapper {\n  margin: 1px -20px;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n\n.rightsidebar-contact-wrapper:hover {\n  background: rgba(0, 0, 0, 0.04);\n}\n.rightsidebar-contact-wrapper:hover .rightsidebar-contact {\n  margin-left: 12px;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n\n.rightsidebar-contact-wrapper .rightsidebar-contact {\n  padding: 15px 20px;\n  display: block;\n  color: #2E576B;\n}\n\n.rightsidebar-contact-wrapper .rightsidebar-contact:hover {\n  text-decoration: none;\n}\n\n.rightsidebar-notification {\n  margin: 1px 0;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n\n.rightsidebar-notification a {\n  padding: 15px 0;\n  display: block;\n  color: #2E576B;\n}\n\n.sidebar-right-opened {\n  right: 250px;\n}\n\n.sidebar-right-opened #right {\n  right: 0;\n}\n\n.sidebar-right-opened .background-overlay {\n  position: fixed;\n  display: block;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: #212121;\n  opacity: 0.46;\n  z-index: 998;\n  -webkit-transition: background-color 0.3s;\n  transition: background-color 0.3s;\n}\n\n.scrollable-content {\n  height: 100%;\n}\n\n/*rightside bar tabs*/\n#right .nav-tabs > li > a {\n  padding: 10px 19px 4px 19px;\n  font-size: 23px;\n}\n\n#right .nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  border: 1px solid #DDD;\n  color: #555;\n  background-color: #FFF;\n  border-bottom-color: transparent;\n  margin-top: -2px;\n}\n\n#slim_t1,\n#slim_t2 {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n#right #slim_t1 img {\n  width: 30px;\n  height: 30px;\n}\n\n/*tab 3 settings*/\n/*to hide default skin picker*/\n#slim_t3 ul {\n  padding: 0;\n}\n\n.setting-color {\n  padding: 0 2px;\n  margin-bottom: 5px;\n}\n\n.setting-color > label {\n  display: block;\n  position: relative;\n  margin: 10px;\n  padding: 0;\n  border-radius: 3px;\n  overflow: hidden;\n  border: 0;\n  box-shadow: 2px 4px 5px #CCC;\n  cursor: pointer;\n  width: 53px;\n  float: left;\n}\n\n.setting-color > label.active-color .split .bg-default-clear:after,\n.setting-color > label.active-color .split .bg-mint:after,\n.setting-color > label.active-color .split .bg-grape:after,\n.setting-color > label.active-color .split .bg-lavender:after,\n.setting-color > label.active-color .split .bg-pink:after,\n.setting-color > label.active-color .split .bg-sunflower:after {\n  content: \"\";\n  position: absolute;\n  top: 12px;\n  left: 14px;\n  height: 22px;\n  width: 26px;\n  border-radius: 16px;\n  border-top: 13px solid #fafafa;\n}\n\n.setting-color > label.active-color .split .bg-default-clear:after {\n  border-bottom: 13px solid #2E576B;\n}\n\n.setting-color > label.active-color .split .bg-mint:after {\n  border-bottom: 13px solid #37BC9B;\n}\n\n.setting-color > label.active-color .split .bg-grape:after {\n  border-bottom: 13px solid #E76F7C;\n}\n\n.setting-color > label.active-color .split .bg-lavender:after {\n  border-bottom: 13px solid #AC92EC;\n}\n\n.setting-color > label.active-color .split .bg-pink:after {\n  border-bottom: 13px solid #EC87C0;\n}\n\n.setting-color > label.active-color .split .bg-sunflower:after {\n  border-bottom: 13px solid #FFCE54;\n}\n\n.setting-color > label:first-child {\n  margin-left: 10px;\n}\n\n.setting-color > label:last-child {\n  margin-right: 0;\n}\n\n.setting-color > label > .color {\n  display: block;\n  height: 18px;\n}\n\n.setting-color > label > .split {\n  display: block;\n}\n\n.setting-color > label > .split:after,\n.setting-color > label > .split:before {\n  content: \" \";\n  display: table;\n}\n\n.setting-color > label > .split:after {\n  clear: both;\n}\n\n.setting-color > label > .split > .color {\n  display: block;\n  height: 25.5px;\n}\n\n.setting-color > label > .split > .color:first-child {\n  float: left;\n  width: 70%;\n}\n\n.setting-color > label > .split > .color:last-child {\n  float: right;\n  width: 30%;\n}\n\n.setting-color > label > input[type=radio] {\n  position: absolute;\n  opacity: 0;\n  visibility: hidden;\n}\n\n.bg-default-light {\n  background-color: #2E576B;\n  color: #FFF;\n}\n\n.bg-default-clear {\n  background-color: #2E576B;\n  color: #EBF4E4;\n}\n\n.bg-mint-light {\n  background-color: #56CCAE;\n  color: #FFF;\n}\n\n.bg-mint {\n  background-color: #37BC9B;\n  color: #EBF4E4;\n}\n\n.bg-grape-light {\n  background-color: #F4929D;\n  color: #FFF;\n}\n\n.bg-grape {\n  background-color: #E76F7C;\n  color: #EBF4E4;\n}\n\n.bg-lavender-light {\n  background-color: #B6A0EC;\n  color: #FFF;\n}\n\n.bg-lavender {\n  background-color: #AC92EC;\n  color: #EBF4E4;\n}\n\n.bg-pink-light {\n  background-color: #EE98C8;\n  color: #FFF;\n}\n\n.bg-pink {\n  background-color: #EC87C0;\n  color: #EBF4E4;\n}\n\n.bg-gray {\n  background-color: #2E576B;\n}\n\n.bg-gray-light {\n  background-color: #EFEFEF;\n}\n\n.bg-sunflower {\n  background-color: #FFCE54;\n}\n\n.bg-sunflower-light {\n  background-color: #FFDD87;\n}\n\n/*rightside bar tabs ends*/\n#slim_t1 .fa, #slim_t2 .fa {\n  font-size: 15px;\n}\n\n.right-active {\n  background-color: #EEEEEE;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/header/fixed-header.vue?vue&type=style&index=0&id=619ed3e6&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/header/fixed-header.vue?vue&type=style&index=0&id=619ed3e6&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header[data-v-619ed3e6] {\n  z-index: 1030;\n}\n.header nav[data-v-619ed3e6] {\n  margin-bottom: 0;\n  height: 50px;\n  background: #fff;\n  background-size: 100% 100%;\n  box-shadow: 0px 0px 10px #ccc;\n}\n.header .navbar-right[data-v-619ed3e6] {\n  float: right;\n  margin-right: 15px;\n}\n.header .logo[data-v-619ed3e6] {\n  display: block;\n  float: left;\n  height: 50px;\n  line-height: 41px;\n  padding: 3px 10px;\n  text-align: center;\n  width: 250px;\n  background: #fff;\n}\n.header .logo img[data-v-619ed3e6] {\n  max-height: 100%;\n  width: auto;\n}\n.header .navbar-right .dropdown-item[data-v-619ed3e6] {\n  padding: 0;\n  width: 100%;\n  outline: none;\n}\n.header .navbar-right div.dropdown > a[data-v-619ed3e6] {\n  color: #000;\n}\n.header .navbar-right div.dropdown .dropdown-menu > button[data-v-619ed3e6] {\n  padding: 10px 15px;\n}\n.header .navbar-right div.dropdown.notifications-menu[data-v-619ed3e6] {\n  height: 50px;\n}\n.header .navbar-right div.dropdown.notifications-menu .noti-icon[data-v-619ed3e6] {\n  font-size: 18px;\n}\n.header .navbar-right div.dropdown > a > i[data-v-619ed3e6] {\n  font-size: 23px;\n}\n.header .navbar-right div.dropdown > a[data-v-619ed3e6] {\n  display: block;\n  padding: 12px;\n}\n.header .navbar-right div.dropdown:hover > a[data-v-619ed3e6] {\n  background-color: #ededed;\n  color: #000;\n}\n.header .navbar-right div.dropdown > a.padding-user[data-v-619ed3e6] {\n  padding-top: 8px;\n  padding-bottom: 6px;\n}\n.header nav .sidebar-toggle[data-v-619ed3e6] {\n  float: left;\n  color: #000;\n  font-size: 19px;\n  padding-top: 10px;\n}\n.user_name_max[data-v-619ed3e6] {\n  display: inline-block;\n  max-width: 180px;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n  margin: 0 0 -4px;\n}\n.noti_msg[data-v-619ed3e6] {\n  font-size: 16px;\n  padding: 10px;\n  border: 1px solid #4f90c1;\n  border-radius: 50px;\n  margin-top: 10px;\n}\n.user.user-menu > button img[data-v-619ed3e6] {\n  width: 35px;\n  height: 35px;\n}\n\n/**** END HEADER RIGHT SIDE DROPDOWNS ****/\n@media screen and (max-width: 767px) {\n.dropdown.open .dropdown-menu[data-v-619ed3e6] {\n    position: absolute;\n}\n.navbar-right > li > a[data-v-619ed3e6] {\n    padding: 10px 12px;\n}\n}\n/* Fix menu positions on xs screens to appear correctly and fully */\n@media (max-width: 560px) {\nbody .header .logo[data-v-619ed3e6],\nbody .header nav[data-v-619ed3e6] {\n    width: 100%;\n}\nbody .header nav .sidebar-toggle[data-v-619ed3e6] {\n    padding-left: 15px;\n}\nnav[data-v-619ed3e6] {\n    height: 100px !important;\n}\n}\n.notifications_badge_top[data-v-619ed3e6] {\n  margin-top: -28px;\n  margin-left: 10px;\n  position: absolute;\n}\n.notifications_badge_top span[data-v-619ed3e6] {\n  top: 1px;\n  left: 2px;\n  border-radius: 50%;\n  font-size: 9px;\n  padding: 0.23em 0.45em;\n}\n.notifications-menu .dropdown-item[data-v-619ed3e6] {\n  width: 100%;\n  display: block;\n}\n.dropdown-footer[data-v-619ed3e6] {\n  padding: 10px !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/header/fixed-header.vue?vue&type=style&index=1&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/header/fixed-header.vue?vue&type=style&index=1&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  margin-top: 50px;\n}\n@media screen and (max-width: 560px) {\n.wrapper {\n    margin-top: 100px;\n}\n}\n.sidebar-toggle {\n  margin-left: 10px;\n}\n.bell_bg button.btn-secondary {\n  background-color: #fff;\n  border: none;\n  border-radius: 0;\n  box-shadow: none !important;\n}\n.bell_bg button.btn-secondary:hover {\n  background-color: #ededed !important;\n}\n.bell_bg button.btn-secondary:active {\n  color: #000 !important;\n}\n.bell_bg.show button {\n  background-color: #edede !important;\n}\n.bell_bg.user_btn .dropdown-toggle {\n  padding: 7px 9px;\n}\n.tabs_cont,\n.event_date {\n  background-color: #fff !important;\n}\nbody.left-hidden aside.right-aside {\n  margin-left: 0;\n}\nbody.left-hidden .header.fixed-top {\n  padding-right: 0 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/default/left-side.vue?vue&type=style&index=0&id=795babbc&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/left-side/default/left-side.vue?vue&type=style&index=0&id=795babbc&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".left-aside[data-v-795babbc] {\n  width: 250px;\n  background: #fff;\n  background-repeat: repeat-y;\n}\n.navigation[data-v-795babbc] {\n  padding: 0;\n}\n.divider[data-v-795babbc] {\n  margin-top: 10px;\n  list-style-type: none;\n  border-bottom: 1px solid #ececec;\n  padding-bottom: 6px;\n}\n.divider span[data-v-795babbc] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #fff;\n  margin: 20px 20px -15px 20px;\n}\n.sidebar[data-v-795babbc] {\n  display: block;\n  font-size: 14px;\n  letter-spacing: 1px;\n}\n.content[data-v-795babbc] {\n  display: block;\n  width: auto;\n  overflow-x: hidden;\n  padding: 0 15px;\n}\n.badge-success[data-v-795babbc] {\n  background-color: #22d69d;\n}\n.badge[data-v-795babbc] {\n  padding: 0.6em 0.7em;\n  border-radius: 0.75rem;\n}\n.nav_profile[data-v-795babbc] {\n  border-bottom: 1px solid #eee;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/default/menu/MenuItem.vue?vue&type=style&index=0&id=7c5304b2&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/left-side/default/menu/MenuItem.vue?vue&type=style&index=0&id=7c5304b2&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a[data-v-7c5304b2] {\n  color: #3e6174;\n  position: relative;\n  display: block;\n  line-height: 21px;\n  padding: 10px 30px;\n}\na[data-v-7c5304b2]:hover {\n  color: #5e7b85;\n}\na.active[data-v-7c5304b2] {\n  color: #3e6174;\n  background-color: #e6e6e6;\n}\na.active i[data-v-7c5304b2] {\n  color: #3e6174 !important;\n}\n\n/*.submenu-content-box .listbrdr::after{\n    content: \"\";\n   display: block;\n   position: absolute;\n   width: 11px;\n   left: 25px;\n   margin-top: -21px;\n   border-top: 2px solid #888585;\n   }*/\n.submenu-content-box .listbrdr[data-v-7c5304b2]:active {\n  color: #000;\n}\n.submenu-content a[data-v-7c5304b2] {\n  padding: 11px 20px 10px 45px;\n  position: relative;\n}\n.submenu-content .leftmenu_icon[data-v-7c5304b2] {\n  font-size: 14px;\n  color: inherit;\n}\n.name[data-v-7c5304b2] {\n  vertical-align: text-bottom;\n}\n.collapse-item .card-content .card-content-box div a[data-v-7c5304b2] {\n  padding-left: 43px;\n}\n.leftmenu_icon[data-v-7c5304b2] {\n  margin-right: 1px;\n  line-height: 22px;\n  height: 23px;\n  width: 20px;\n  text-align: center;\n  font-size: 16px;\n  color: #3e6174;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/default/menu/subMenu.vue?vue&type=style&index=0&id=fafeff4c&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/left-side/default/menu/subMenu.vue?vue&type=style&index=0&id=fafeff4c&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".collapse-item .submenu-header[data-v-fafeff4c] {\n  cursor: pointer;\n  color: #3e6174;\n  padding: 11px 10px 11px 30px;\n}\n.collapse-item .submenu-header[data-v-fafeff4c]:hover {\n  color: #5e7b85;\n}\n.collapse-item .submenu-header .submenu-header-title[data-v-fafeff4c] {\n  vertical-align: text-bottom;\n}\n.collapse-item .submenu-header .active .submenu-header-title[data-v-fafeff4c] {\n  font-weight: 600;\n}\n.collapse-item .submenu-content[data-v-fafeff4c] {\n  background-color: #F8F7F6;\n  overflow-y: hidden;\n  position: relative;\n}\n.collapse-item .submenu-content-box[data-v-fafeff4c]:active {\n  color: #000;\n}\n.collapse-item .submenu_icon[data-v-fafeff4c] {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  font-size: 16px;\n  margin-top: -2px;\n  color: #3e6174;\n}\n.collapse-item.active > .submenu-header[data-v-fafeff4c] {\n  background-color: #e6e6e6;\n  color: #3e6174;\n  font-weight: 500;\n}\n.collapse-item.active > .submenu-header > .submenu_icon[data-v-fafeff4c] {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.collapse-item.active > .submenu-header i[data-v-fafeff4c] {\n  color: #3e6174 !important;\n}\n.leftmenu_icon[data-v-fafeff4c] {\n  margin-right: 6px;\n  line-height: 20px;\n  height: 22px;\n  width: 20px;\n  text-align: center;\n  font-size: 16px;\n  color: #3e6174;\n}\n.leftmenu_icon:hover .submenu-header-title[data-v-fafeff4c], .leftmenu_icon:hover .submenu_icon[data-v-fafeff4c] {\n  padding-left: 50px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/left-profile/user_profile2.vue?vue&type=style&index=0&id=2bdb3624&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/left-side/left-profile/user_profile2.vue?vue&type=style&index=0&id=2bdb3624&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*user section*/\n.user_section[data-v-2bdb3624] {\n  height: 188px;\n  padding: 15px 20px;\n}\n.user_section .img-wrapper[data-v-2bdb3624] {\n  width: 100px;\n  border-radius: 50%;\n  padding: 7px;\n  margin: auto;\n}\n.user_section img[data-v-2bdb3624] {\n  width: 84px;\n  border: 2px solid #ccc;\n}\n.user_section p[data-v-2bdb3624] {\n  font-size: 15px;\n}\n.user_section .leftuser_icons .logout_padd[data-v-2bdb3624] {\n  padding: 1px !important;\n}\n.user_name_max[data-v-2bdb3624] {\n  text-transform: uppercase;\n  font-weight: 700;\n  max-width: 210px;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n  margin: 0 0 -4px;\n  padding-top: 2px;\n  padding-bottom: 5px;\n}\n.leftuser_icons div[data-v-2bdb3624] {\n  cursor: pointer;\n  padding: 1px 12px;\n  font-size: 18px;\n  background-color: transparent;\n  margin-right: 3px;\n  border-radius: 50px;\n  margin: auto;\n  width: 100%;\n  display: inline;\n}\n.user_name_max[data-v-2bdb3624],\n.leftuser_icons i[data-v-2bdb3624] {\n  color: #3e6174;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/preloader/preloader.vue?vue&type=style&index=0&id=6995e33c&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/preloader/preloader.vue?vue&type=style&index=0&id=6995e33c&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cssload-aim[data-v-6995e33c] {\n  position: fixed;\n  z-index: 1500;\n  left: calc(100% - 42px);\n  top: 60px;\n  border-radius: 20px;\n  background-color: transparent;\n  border-width: 15px;\n  border-style: double;\n  border-color: transparent #428bca;\n  -webkit-animation: cssload-anim-data-v-6995e33c 0.7s linear infinite;\n          animation: cssload-anim-data-v-6995e33c 0.7s linear infinite;\n}\n@media screen and (max-width: 560px) {\n.cssload-aim[data-v-6995e33c] {\n    top: 106px;\n}\n}\n@-webkit-keyframes cssload-anim-data-v-6995e33c {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes cssload-anim-data-v-6995e33c {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/right-side.vue?vue&type=style&index=0&id=3cf6c633&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/right-side.vue?vue&type=style&index=0&id=3cf6c633&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".right-aside[data-v-3cf6c633] {\n  padding: 0 20px 10px 20px !important;\n  width: 100%;\n  max-width: 100%;\n  min-height: 100vh;\n}\n.right-aside .content-header > h1[data-v-3cf6c633] {\n  margin: 2px;\n  padding-left: 13px;\n  padding-top: 12px;\n  font-size: 20px;\n  line-height: 1.5;\n}\n.right-aside .content-header[data-v-3cf6c633] {\n  margin: -2px -20px 25px -20px;\n  height: 55px;\n  background: #f9fafb;\n  box-shadow: 3px 1px 5px #ccc;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/layout.vue?vue&type=style&index=0&id=1973c96e&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/layout.vue?vue&type=style&index=0&id=1973c96e&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper[data-v-1973c96e]:before,\n.wrapper[data-v-1973c96e]:after {\n  display: table;\n  content: \" \";\n}\n.wrapper[data-v-1973c96e]:after {\n  clear: both;\n}\n.wrapper[data-v-1973c96e] {\n  display: table;\n  overflow-x: hidden;\n  width: 100%;\n  max-width: 100%;\n  table-layout: fixed;\n}\n.right-aside[data-v-1973c96e],\n.left-aside[data-v-1973c96e] {\n  padding: 0;\n  display: table-cell;\n  vertical-align: top;\n}\n.right-aside[data-v-1973c96e] {\n  background-color: #ebf2f6 !important;\n}\n@media (max-width: 992px) {\n.wrapper > .right-aside[data-v-1973c96e] {\n    width: 100vw;\n    min-width: 100vw;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/header/fixed-header.vue?vue&type=style&index=0&id=619ed3e6&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/header/fixed-header.vue?vue&type=style&index=0&id=619ed3e6&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./fixed-header.vue?vue&type=style&index=0&id=619ed3e6&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/header/fixed-header.vue?vue&type=style&index=0&id=619ed3e6&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/header/fixed-header.vue?vue&type=style&index=1&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/header/fixed-header.vue?vue&type=style&index=1&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./fixed-header.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/header/fixed-header.vue?vue&type=style&index=1&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/default/left-side.vue?vue&type=style&index=0&id=795babbc&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/left-side/default/left-side.vue?vue&type=style&index=0&id=795babbc&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./left-side.vue?vue&type=style&index=0&id=795babbc&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/default/left-side.vue?vue&type=style&index=0&id=795babbc&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/default/menu/MenuItem.vue?vue&type=style&index=0&id=7c5304b2&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/left-side/default/menu/MenuItem.vue?vue&type=style&index=0&id=7c5304b2&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuItem.vue?vue&type=style&index=0&id=7c5304b2&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/default/menu/MenuItem.vue?vue&type=style&index=0&id=7c5304b2&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/default/menu/subMenu.vue?vue&type=style&index=0&id=fafeff4c&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/left-side/default/menu/subMenu.vue?vue&type=style&index=0&id=fafeff4c&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./subMenu.vue?vue&type=style&index=0&id=fafeff4c&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/default/menu/subMenu.vue?vue&type=style&index=0&id=fafeff4c&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/left-profile/user_profile2.vue?vue&type=style&index=0&id=2bdb3624&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/left-side/left-profile/user_profile2.vue?vue&type=style&index=0&id=2bdb3624&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./user_profile2.vue?vue&type=style&index=0&id=2bdb3624&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/left-profile/user_profile2.vue?vue&type=style&index=0&id=2bdb3624&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/preloader/preloader.vue?vue&type=style&index=0&id=6995e33c&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/preloader/preloader.vue?vue&type=style&index=0&id=6995e33c&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./preloader.vue?vue&type=style&index=0&id=6995e33c&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/preloader/preloader.vue?vue&type=style&index=0&id=6995e33c&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/right-side.vue?vue&type=style&index=0&id=3cf6c633&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/right-side.vue?vue&type=style&index=0&id=3cf6c633&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./right-side.vue?vue&type=style&index=0&id=3cf6c633&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/right-side.vue?vue&type=style&index=0&id=3cf6c633&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/layout.vue?vue&type=style&index=0&id=1973c96e&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/layout.vue?vue&type=style&index=0&id=1973c96e&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./layout.vue?vue&type=style&index=0&id=1973c96e&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/layout.vue?vue&type=style&index=0&id=1973c96e&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/header/fixed-header.vue?vue&type=template&id=619ed3e6&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/header/fixed-header.vue?vue&type=template&id=619ed3e6&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
  return _c("header", { staticClass: "header fixed-top" }, [
    _c(
      "nav",
      [
        _c("router-link", { staticClass: "logo", attrs: { to: "/" } }, [
          _c("img", {
            attrs: { src: __webpack_require__(/*! img/logo_black.png */ "./resources/assets/admin/img/logo_black.png"), alt: "logo" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "float-left" }, [
          _c(
            "a",
            {
              staticClass: "sidebar-toggle",
              attrs: { href: "javascript:void(0)" },
              on: { click: _vm.toggle_menu }
            },
            [_c("i", { staticClass: "fa fa-bars" })]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "navbar-right" }, [
          _c(
            "div",
            [
              _c(
                "b-dropdown",
                {
                  staticClass: "user user-menu bell_bg user_btn",
                  attrs: { right: "", link: "" }
                },
                [
                  _c("span", { attrs: { slot: "text" }, slot: "text" }, [
                    _c("img", {
                      staticClass: "rounded-circle",
                      attrs: {
                        src: this.$store.state.user.picture,
                        alt: "User Image"
                      }
                    }),
                    _vm._v(" "),
                    _c("p", { staticClass: "user_name_max" }, [
                      _vm._v(_vm._s(_vm.name))
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { staticClass: "dropdown_content", attrs: { exact: "" } },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "drpodowtext",
                          attrs: { to: "/user_profile", exact: "" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-user-o" }),
                          _vm._v(" Profile\n                        ")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { staticClass: "dropdown_content", attrs: { exact: "" } },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "drpodowtext",
                          attrs: { to: "/edit_user", exact: "" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-cog" }),
                          _vm._v(" Settings\n                        ")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { staticClass: "dropdown_content", attrs: { exact: "" } },
                    [
                      _c(
                        "router-link",
                        { staticClass: "drpodowtext", attrs: { to: "/" } },
                        [
                          _c("div", { on: { click: _vm.logout } }, [
                            _c("i", { staticClass: "fa fa-sign-out" }),
                            _vm._v(" Logout")
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/default/left-side.vue?vue&type=template&id=795babbc&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/left-side/default/left-side.vue?vue&type=template&id=795babbc&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("aside", { staticClass: "left-aside sidebar-offcanvas" }, [
    _c("section", { staticClass: "sidebar" }, [
      _c(
        "div",
        { attrs: { id: "menu", role: "navigation" } },
        [
          _c("div", { staticClass: "nav_profile" }, [_c("profile")], 1),
          _vm._v(" "),
          _c(
            "vmenu",
            [
              _vm._l(_vm.menuitems, function(item) {
                return [
                  item.title
                    ? _c("li", { staticClass: "divider mt-3 " }, [
                        _c("span", [_vm._v(_vm._s(item.name))])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  item.child
                    ? _c(
                        "vsub-menu",
                        { attrs: { title: item.name, icon: item.icon } },
                        _vm._l(item.child, function(child) {
                          return _c(
                            "vmenu-item",
                            {
                              key: child.name,
                              attrs: { link: child.link, icon: child.icon }
                            },
                            [
                              _vm._v(
                                _vm._s(child.name) +
                                  "\n                        "
                              )
                            ]
                          )
                        }),
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  item.link
                    ? _c(
                        "vmenu-item",
                        { attrs: { link: item.link, icon: item.icon } },
                        [_vm._v(_vm._s(item.name) + "\n                    ")]
                      )
                    : _vm._e()
                ]
              })
            ],
            2
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/default/menu/MenuItem.vue?vue&type=template&id=7c5304b2&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/left-side/default/menu/MenuItem.vue?vue&type=template&id=7c5304b2&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "listbrdr" },
    [
      _c(
        "router-link",
        { class: _vm.calcActiveClass(), attrs: { to: _vm.link, exact: "" } },
        [
          _c("i", { staticClass: "leftmenu_icon", class: _vm.icon }),
          _vm._v(" "),
          _c("span", { staticClass: "name" }, [_vm._t("default")], 2)
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/default/menu/subMenu.vue?vue&type=template&id=fafeff4c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/left-side/default/menu/subMenu.vue?vue&type=template&id=fafeff4c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "submenu collapse-item", class: { active: _vm.isActived } },
    [
      _c(
        "div",
        {
          staticClass: "submenu-header touchable",
          attrs: {
            role: "tab",
            "aria-expanded": _vm.selected ? "true" : "fase"
          },
          on: { click: _vm.toggle }
        },
        [
          _c("i", { staticClass: "leftmenu_icon\n", class: _vm.icon }),
          _vm._v(" "),
          _c("span", { staticClass: "submenu-header-title" }, [
            _vm._v(_vm._s(_vm.title))
          ]),
          _vm._v(" "),
          _vm._m(0)
        ]
      ),
      _vm._v(" "),
      _c(
        "transition",
        {
          attrs: { name: "collapsed-fade", css: false },
          on: {
            "before-appear": _vm.before,
            appear: _vm.enter,
            "appear-cancel": _vm.cancel,
            "before-enter": _vm.before,
            enter: _vm.enter,
            "enter-cancel": _vm.cancel,
            leave: _vm.leave,
            "leave-cancel": _vm.cancel
          }
        },
        [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.isActived,
                  expression: "isActived"
                }
              ],
              staticClass: "submenu-content"
            },
            [
              _c(
                "div",
                { ref: "box", staticClass: "submenu-content-box" },
                [_vm._t("default")],
                2
              )
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "submenu_icon float-right" }, [
      _c("i", { staticClass: "fas fa-angle-right" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/default/menu/vueMenu.vue?vue&type=template&id=040834c0&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/left-side/default/menu/vueMenu.vue?vue&type=template&id=040834c0& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "vuemenu navigation" },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/left-profile/user_profile2.vue?vue&type=template&id=2bdb3624&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/left-side/left-profile/user_profile2.vue?vue&type=template&id=2bdb3624&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "user_section" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "img-wrapper" }, [
            _c("img", {
              staticClass: "rounded-circle",
              attrs: {
                src: this.$store.state.user.picture,
                alt: "user not found"
              }
            })
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mt-2 mb-1 user_name_max text-center" }, [
            _vm._v(_vm._s(_vm.name))
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/preloader/preloader.vue?vue&type=template&id=6995e33c&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/preloader/preloader.vue?vue&type=template&id=6995e33c&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "cssload-aim" })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/right-side-bar.vue?vue&type=template&id=0fc19e79&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/right-side-bar.vue?vue&type=template&id=0fc19e79& ***!
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
    { class: { open: this.$store.state.right_open }, attrs: { id: "right" } },
    [
      _c("div", { attrs: { id: "right-slim" } }, [
        _c(
          "div",
          { staticClass: "rightsidebar-right" },
          [
            _c(
              "b-tabs",
              { ref: "tabs", attrs: { card: "" } },
              [
                _c(
                  "b-tab",
                  { attrs: { active: "" } },
                  [
                    _c("template", { slot: "title" }, [
                      _c("i", { staticClass: "fa fa-user-o text-success" })
                    ]),
                    _vm._v(" "),
                    _c("div", { attrs: { id: "slim_t1" } }, [
                      _c("div", [
                        _c(
                          "h5",
                          {
                            staticClass:
                              "rightsidebar-right-heading text-uppercase text-xs bg-success text-white"
                          },
                          [
                            _vm._v(
                              "\n                                Recent Chats\n                            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("ul", { staticClass: "list-unstyled margin-none" }, [
                          _c(
                            "li",
                            { staticClass: "rightsidebar-contact-wrapper" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "rightsidebar-contact",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle ",
                                    attrs: {
                                      src: __webpack_require__(/*! ../../img/authors/avatar6.jpg */ "./resources/assets/admin/img/authors/avatar6.jpg"),
                                      alt: "avatar-image"
                                    }
                                  }),
                                  _vm._v(
                                    " Annette\n                                        "
                                  ),
                                  _c("i", {
                                    staticClass:
                                      "fa fa-comment float-right text-success",
                                    attrs: { "aria-hidden": "true" }
                                  })
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "rightsidebar-contact-wrapper" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "rightsidebar-contact",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle ",
                                    attrs: {
                                      src: __webpack_require__(/*! ../../img/authors/avatar.jpg */ "./resources/assets/admin/img/authors/avatar.jpg"),
                                      alt: "avatar-image"
                                    }
                                  }),
                                  _vm._v(
                                    " Jordan\n                                        "
                                  ),
                                  _c("i", {
                                    staticClass:
                                      "fa fa-comment float-right text-success",
                                    attrs: { "aria-hidden": "true" }
                                  })
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "rightsidebar-contact-wrapper" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "rightsidebar-contact",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle",
                                    attrs: {
                                      src: __webpack_require__(/*! ../../img/authors/avatar2.jpg */ "./resources/assets/admin/img/authors/avatar2.jpg"),
                                      alt: "avatar-image"
                                    }
                                  }),
                                  _vm._v(
                                    " Stewart\n                                        "
                                  ),
                                  _c("i", {
                                    staticClass:
                                      "fa fa-comment float-right text-secondary",
                                    attrs: { "aria-hidden": "true" }
                                  })
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "rightsidebar-contact-wrapper" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "rightsidebar-contact",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle",
                                    attrs: {
                                      src: __webpack_require__(/*! ../../img/authors/avatar3.jpg */ "./resources/assets/admin/img/authors/avatar3.jpg"),
                                      alt: "avatar-image"
                                    }
                                  }),
                                  _vm._v(
                                    " Alfred\n                                        "
                                  ),
                                  _c("i", {
                                    staticClass:
                                      "fa fa-comment float-right text-secondary",
                                    attrs: { "aria-hidden": "true" }
                                  })
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "rightsidebar-contact-wrapper" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "rightsidebar-contact",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle",
                                    attrs: {
                                      src: __webpack_require__(/*! ../../img/authors/avatar4.jpg */ "./resources/assets/admin/img/authors/avatar4.jpg"),
                                      alt: "avatar-image"
                                    }
                                  }),
                                  _vm._v(
                                    " Eileen\n                                        "
                                  ),
                                  _c("i", {
                                    staticClass:
                                      "fa fa-comment float-right text-secondary",
                                    attrs: { "aria-hidden": "true" }
                                  })
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "rightsidebar-contact-wrapper" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "rightsidebar-contact",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle",
                                    attrs: {
                                      src: __webpack_require__(/*! ../../img/authors/avatar5.jpg */ "./resources/assets/admin/img/authors/avatar5.jpg"),
                                      alt: "avatar-image"
                                    }
                                  }),
                                  _vm._v(
                                    " Robert\n                                        "
                                  ),
                                  _c("i", {
                                    staticClass:
                                      "fa fa-comment float-right text-secondary",
                                    attrs: { "aria-hidden": "true" }
                                  })
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "rightsidebar-contact-wrapper" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "rightsidebar-contact",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle",
                                    attrs: {
                                      src: __webpack_require__(/*! ../../img/authors/avatar7.jpg */ "./resources/assets/admin/img/authors/avatar7.jpg"),
                                      alt: "avatar-image"
                                    }
                                  }),
                                  _vm._v(
                                    " Cassandra\n                                        "
                                  ),
                                  _c("i", {
                                    staticClass:
                                      "fa fa-comment float-right text-secondary",
                                    attrs: { "aria-hidden": "true" }
                                  })
                                ]
                              )
                            ]
                          )
                        ])
                      ])
                    ])
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "b-tab",
                  [
                    _c("template", { slot: "title" }, [
                      _c("i", {
                        staticClass: "fa fa-upload text-danger",
                        attrs: { "aria-hidden": "true" }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { attrs: { id: "slim_t2" } }, [
                      _c(
                        "h5",
                        {
                          staticClass:
                            "rightsidebar-right-heading text-uppercase text-xs bg-danger text-white"
                        },
                        [
                          _vm._v(
                            "\n                            Recent Updates\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", [
                        _c("ul", { staticClass: "list-unstyled" }, [
                          _c(
                            "li",
                            { staticClass: "rightsidebar-contact-wrapper" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "rightsidebar-contact",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fa fa-smile-o  text-primary"
                                  }),
                                  _vm._v(
                                    " New Comment\n                        "
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "rightsidebar-contact-wrapper" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "rightsidebar-contact",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _c("i", {
                                    staticClass: " fa fa-twitter  text-success"
                                  }),
                                  _vm._v(
                                    " 3 New Followers\n                        "
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "rightsidebar-contact-wrapper" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "rightsidebar-contact",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _c("i", {
                                    staticClass: " fa fa-inbox  text-info"
                                  }),
                                  _vm._v(
                                    " Message Sent\n                        "
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "rightsidebar-contact-wrapper" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "rightsidebar-contact",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      " fa fa-file-text-o  text-warning"
                                  }),
                                  _vm._v(" New Task\n                        ")
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "rightsidebar-contact-wrapper" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "rightsidebar-contact",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _c("i", {
                                    staticClass: " fa fa-upload  text-danger"
                                  }),
                                  _vm._v(
                                    " Server Rebooted\n                        "
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "rightsidebar-contact-wrapper" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "rightsidebar-contact",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      " fa fa-info-circle  text-primary"
                                  }),
                                  _vm._v(
                                    " Server Not Responding\n                        "
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "rightsidebar-contact-wrapper" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "rightsidebar-contact",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      " fa fa-shopping-cart  text-success"
                                  }),
                                  _vm._v(
                                    " New Order Placed\n                        "
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "rightsidebar-contact-wrapper" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "rightsidebar-contact",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _c("i", {
                                    staticClass: " fa fa-usd  text-info"
                                  }),
                                  _vm._v(
                                    " Payment Received\n                        "
                                  )
                                ]
                              )
                            ]
                          )
                        ])
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/right-side.vue?vue&type=template&id=3cf6c633&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/layouts/right-side.vue?vue&type=template&id=3cf6c633&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _c("aside", { staticClass: "right-aside" }, [
    _c("section", { staticClass: "content-header " }, [
      _c("h1", [
        _vm._v(
          _vm._s(
            this.$store.state.page_title
              ? this.$store.state.page_title
              : this.$route.meta.title
          )
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "section",
      { staticClass: "content" },
      [_vm._t("default"), _vm._v(" "), _c("right-side-bar")],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/layout.vue?vue&type=template&id=1973c96e&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/layout.vue?vue&type=template&id=1973c96e&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
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
      _c("preloader", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: this.$store.state.preloader,
            expression: "this.$store.state.preloader"
          }
        ]
      }),
      _vm._v(" "),
      _c("vueadmin_header"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "wrapper row-offcanvas" },
        [
          _c("left_side", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: this.$store.state.left_open,
                expression: "this.$store.state.left_open"
              }
            ]
          }),
          _vm._v(" "),
          _c("right_side", [_c("router-view")], 1)
        ],
        1
      ),
      _vm._v(" "),
      _c("div", {
        staticClass: "background-overlay",
        on: { click: _vm.right_close }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/admin/components/layouts/header/fixed-header.vue":
/*!***************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/header/fixed-header.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fixed_header_vue_vue_type_template_id_619ed3e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fixed-header.vue?vue&type=template&id=619ed3e6&scoped=true& */ "./resources/assets/admin/components/layouts/header/fixed-header.vue?vue&type=template&id=619ed3e6&scoped=true&");
/* harmony import */ var _fixed_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fixed-header.vue?vue&type=script&lang=js& */ "./resources/assets/admin/components/layouts/header/fixed-header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _fixed_header_vue_vue_type_style_index_0_id_619ed3e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fixed-header.vue?vue&type=style&index=0&id=619ed3e6&lang=scss&scoped=true& */ "./resources/assets/admin/components/layouts/header/fixed-header.vue?vue&type=style&index=0&id=619ed3e6&lang=scss&scoped=true&");
/* harmony import */ var _fixed_header_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fixed-header.vue?vue&type=style&index=1&lang=scss& */ "./resources/assets/admin/components/layouts/header/fixed-header.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _fixed_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _fixed_header_vue_vue_type_template_id_619ed3e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _fixed_header_vue_vue_type_template_id_619ed3e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "619ed3e6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/admin/components/layouts/header/fixed-header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/admin/components/layouts/header/fixed-header.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/header/fixed-header.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fixed_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./fixed-header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/header/fixed-header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fixed_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/admin/components/layouts/header/fixed-header.vue?vue&type=style&index=0&id=619ed3e6&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/header/fixed-header.vue?vue&type=style&index=0&id=619ed3e6&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_fixed_header_vue_vue_type_style_index_0_id_619ed3e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./fixed-header.vue?vue&type=style&index=0&id=619ed3e6&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/header/fixed-header.vue?vue&type=style&index=0&id=619ed3e6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_fixed_header_vue_vue_type_style_index_0_id_619ed3e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_fixed_header_vue_vue_type_style_index_0_id_619ed3e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_fixed_header_vue_vue_type_style_index_0_id_619ed3e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_fixed_header_vue_vue_type_style_index_0_id_619ed3e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_fixed_header_vue_vue_type_style_index_0_id_619ed3e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/admin/components/layouts/header/fixed-header.vue?vue&type=style&index=1&lang=scss&":
/*!*************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/header/fixed-header.vue?vue&type=style&index=1&lang=scss& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_fixed_header_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./fixed-header.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/header/fixed-header.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_fixed_header_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_fixed_header_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_fixed_header_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_fixed_header_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_fixed_header_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/admin/components/layouts/header/fixed-header.vue?vue&type=template&id=619ed3e6&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/header/fixed-header.vue?vue&type=template&id=619ed3e6&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fixed_header_vue_vue_type_template_id_619ed3e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./fixed-header.vue?vue&type=template&id=619ed3e6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/header/fixed-header.vue?vue&type=template&id=619ed3e6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fixed_header_vue_vue_type_template_id_619ed3e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fixed_header_vue_vue_type_template_id_619ed3e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/admin/components/layouts/left-side/default/left-side.vue":
/*!***********************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/left-side/default/left-side.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _left_side_vue_vue_type_template_id_795babbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./left-side.vue?vue&type=template&id=795babbc&scoped=true& */ "./resources/assets/admin/components/layouts/left-side/default/left-side.vue?vue&type=template&id=795babbc&scoped=true&");
/* harmony import */ var _left_side_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./left-side.vue?vue&type=script&lang=js& */ "./resources/assets/admin/components/layouts/left-side/default/left-side.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _left_side_vue_vue_type_style_index_0_id_795babbc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./left-side.vue?vue&type=style&index=0&id=795babbc&scoped=true&lang=scss& */ "./resources/assets/admin/components/layouts/left-side/default/left-side.vue?vue&type=style&index=0&id=795babbc&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _left_side_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _left_side_vue_vue_type_template_id_795babbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _left_side_vue_vue_type_template_id_795babbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "795babbc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/admin/components/layouts/left-side/default/left-side.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/admin/components/layouts/left-side/default/left-side.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/left-side/default/left-side.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_left_side_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./left-side.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/default/left-side.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_left_side_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/admin/components/layouts/left-side/default/left-side.vue?vue&type=style&index=0&id=795babbc&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/left-side/default/left-side.vue?vue&type=style&index=0&id=795babbc&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_left_side_vue_vue_type_style_index_0_id_795babbc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./left-side.vue?vue&type=style&index=0&id=795babbc&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/default/left-side.vue?vue&type=style&index=0&id=795babbc&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_left_side_vue_vue_type_style_index_0_id_795babbc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_left_side_vue_vue_type_style_index_0_id_795babbc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_left_side_vue_vue_type_style_index_0_id_795babbc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_left_side_vue_vue_type_style_index_0_id_795babbc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_left_side_vue_vue_type_style_index_0_id_795babbc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/admin/components/layouts/left-side/default/left-side.vue?vue&type=template&id=795babbc&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/left-side/default/left-side.vue?vue&type=template&id=795babbc&scoped=true& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_left_side_vue_vue_type_template_id_795babbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./left-side.vue?vue&type=template&id=795babbc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/default/left-side.vue?vue&type=template&id=795babbc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_left_side_vue_vue_type_template_id_795babbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_left_side_vue_vue_type_template_id_795babbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/admin/components/layouts/left-side/default/menu/MenuItem.vue":
/*!***************************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/left-side/default/menu/MenuItem.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuItem_vue_vue_type_template_id_7c5304b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuItem.vue?vue&type=template&id=7c5304b2&scoped=true& */ "./resources/assets/admin/components/layouts/left-side/default/menu/MenuItem.vue?vue&type=template&id=7c5304b2&scoped=true&");
/* harmony import */ var _MenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItem.vue?vue&type=script&lang=js& */ "./resources/assets/admin/components/layouts/left-side/default/menu/MenuItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MenuItem_vue_vue_type_style_index_0_id_7c5304b2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuItem.vue?vue&type=style&index=0&id=7c5304b2&scoped=true&lang=scss& */ "./resources/assets/admin/components/layouts/left-side/default/menu/MenuItem.vue?vue&type=style&index=0&id=7c5304b2&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MenuItem_vue_vue_type_template_id_7c5304b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MenuItem_vue_vue_type_template_id_7c5304b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7c5304b2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/admin/components/layouts/left-side/default/menu/MenuItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/admin/components/layouts/left-side/default/menu/MenuItem.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/left-side/default/menu/MenuItem.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/default/menu/MenuItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/admin/components/layouts/left-side/default/menu/MenuItem.vue?vue&type=style&index=0&id=7c5304b2&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/left-side/default/menu/MenuItem.vue?vue&type=style&index=0&id=7c5304b2&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuItem_vue_vue_type_style_index_0_id_7c5304b2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuItem.vue?vue&type=style&index=0&id=7c5304b2&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/default/menu/MenuItem.vue?vue&type=style&index=0&id=7c5304b2&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuItem_vue_vue_type_style_index_0_id_7c5304b2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuItem_vue_vue_type_style_index_0_id_7c5304b2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuItem_vue_vue_type_style_index_0_id_7c5304b2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuItem_vue_vue_type_style_index_0_id_7c5304b2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuItem_vue_vue_type_style_index_0_id_7c5304b2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/admin/components/layouts/left-side/default/menu/MenuItem.vue?vue&type=template&id=7c5304b2&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/left-side/default/menu/MenuItem.vue?vue&type=template&id=7c5304b2&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuItem_vue_vue_type_template_id_7c5304b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuItem.vue?vue&type=template&id=7c5304b2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/default/menu/MenuItem.vue?vue&type=template&id=7c5304b2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuItem_vue_vue_type_template_id_7c5304b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuItem_vue_vue_type_template_id_7c5304b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/admin/components/layouts/left-side/default/menu/index.js":
/*!***********************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/left-side/default/menu/index.js ***!
  \***********************************************************************************/
/*! exports provided: vmenu, vsubMenu, vmenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vueMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vueMenu */ "./resources/assets/admin/components/layouts/left-side/default/menu/vueMenu.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vmenu", function() { return _vueMenu__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _subMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subMenu */ "./resources/assets/admin/components/layouts/left-side/default/menu/subMenu.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vsubMenu", function() { return _subMenu__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuItem */ "./resources/assets/admin/components/layouts/left-side/default/menu/MenuItem.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vmenuItem", function() { return _MenuItem__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./resources/assets/admin/components/layouts/left-side/default/menu/subMenu.vue":
/*!**************************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/left-side/default/menu/subMenu.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subMenu_vue_vue_type_template_id_fafeff4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subMenu.vue?vue&type=template&id=fafeff4c&scoped=true& */ "./resources/assets/admin/components/layouts/left-side/default/menu/subMenu.vue?vue&type=template&id=fafeff4c&scoped=true&");
/* harmony import */ var _subMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subMenu.vue?vue&type=script&lang=js& */ "./resources/assets/admin/components/layouts/left-side/default/menu/subMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _subMenu_vue_vue_type_style_index_0_id_fafeff4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subMenu.vue?vue&type=style&index=0&id=fafeff4c&lang=scss&scoped=true& */ "./resources/assets/admin/components/layouts/left-side/default/menu/subMenu.vue?vue&type=style&index=0&id=fafeff4c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _subMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _subMenu_vue_vue_type_template_id_fafeff4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _subMenu_vue_vue_type_template_id_fafeff4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fafeff4c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/admin/components/layouts/left-side/default/menu/subMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/admin/components/layouts/left-side/default/menu/subMenu.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/left-side/default/menu/subMenu.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_subMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./subMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/default/menu/subMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_subMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/admin/components/layouts/left-side/default/menu/subMenu.vue?vue&type=style&index=0&id=fafeff4c&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/left-side/default/menu/subMenu.vue?vue&type=style&index=0&id=fafeff4c&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_subMenu_vue_vue_type_style_index_0_id_fafeff4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./subMenu.vue?vue&type=style&index=0&id=fafeff4c&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/default/menu/subMenu.vue?vue&type=style&index=0&id=fafeff4c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_subMenu_vue_vue_type_style_index_0_id_fafeff4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_subMenu_vue_vue_type_style_index_0_id_fafeff4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_subMenu_vue_vue_type_style_index_0_id_fafeff4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_subMenu_vue_vue_type_style_index_0_id_fafeff4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_subMenu_vue_vue_type_style_index_0_id_fafeff4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/admin/components/layouts/left-side/default/menu/subMenu.vue?vue&type=template&id=fafeff4c&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/left-side/default/menu/subMenu.vue?vue&type=template&id=fafeff4c&scoped=true& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_subMenu_vue_vue_type_template_id_fafeff4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./subMenu.vue?vue&type=template&id=fafeff4c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/default/menu/subMenu.vue?vue&type=template&id=fafeff4c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_subMenu_vue_vue_type_template_id_fafeff4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_subMenu_vue_vue_type_template_id_fafeff4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/admin/components/layouts/left-side/default/menu/vueMenu.vue":
/*!**************************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/left-side/default/menu/vueMenu.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vueMenu_vue_vue_type_template_id_040834c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vueMenu.vue?vue&type=template&id=040834c0& */ "./resources/assets/admin/components/layouts/left-side/default/menu/vueMenu.vue?vue&type=template&id=040834c0&");
/* harmony import */ var _vueMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vueMenu.vue?vue&type=script&lang=js& */ "./resources/assets/admin/components/layouts/left-side/default/menu/vueMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vueMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vueMenu_vue_vue_type_template_id_040834c0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vueMenu_vue_vue_type_template_id_040834c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/admin/components/layouts/left-side/default/menu/vueMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/admin/components/layouts/left-side/default/menu/vueMenu.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/left-side/default/menu/vueMenu.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vueMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./vueMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/default/menu/vueMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vueMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/admin/components/layouts/left-side/default/menu/vueMenu.vue?vue&type=template&id=040834c0&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/left-side/default/menu/vueMenu.vue?vue&type=template&id=040834c0& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vueMenu_vue_vue_type_template_id_040834c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./vueMenu.vue?vue&type=template&id=040834c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/default/menu/vueMenu.vue?vue&type=template&id=040834c0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vueMenu_vue_vue_type_template_id_040834c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vueMenu_vue_vue_type_template_id_040834c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/admin/components/layouts/left-side/left-profile/user_profile2.vue":
/*!********************************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/left-side/left-profile/user_profile2.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_profile2_vue_vue_type_template_id_2bdb3624_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user_profile2.vue?vue&type=template&id=2bdb3624&scoped=true& */ "./resources/assets/admin/components/layouts/left-side/left-profile/user_profile2.vue?vue&type=template&id=2bdb3624&scoped=true&");
/* harmony import */ var _user_profile2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user_profile2.vue?vue&type=script&lang=js& */ "./resources/assets/admin/components/layouts/left-side/left-profile/user_profile2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _user_profile2_vue_vue_type_style_index_0_id_2bdb3624_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user_profile2.vue?vue&type=style&index=0&id=2bdb3624&scoped=true&lang=scss& */ "./resources/assets/admin/components/layouts/left-side/left-profile/user_profile2.vue?vue&type=style&index=0&id=2bdb3624&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _user_profile2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_profile2_vue_vue_type_template_id_2bdb3624_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _user_profile2_vue_vue_type_template_id_2bdb3624_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2bdb3624",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/admin/components/layouts/left-side/left-profile/user_profile2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/admin/components/layouts/left-side/left-profile/user_profile2.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/left-side/left-profile/user_profile2.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_profile2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./user_profile2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/left-profile/user_profile2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_profile2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/admin/components/layouts/left-side/left-profile/user_profile2.vue?vue&type=style&index=0&id=2bdb3624&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/left-side/left-profile/user_profile2.vue?vue&type=style&index=0&id=2bdb3624&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_user_profile2_vue_vue_type_style_index_0_id_2bdb3624_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./user_profile2.vue?vue&type=style&index=0&id=2bdb3624&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/left-profile/user_profile2.vue?vue&type=style&index=0&id=2bdb3624&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_user_profile2_vue_vue_type_style_index_0_id_2bdb3624_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_user_profile2_vue_vue_type_style_index_0_id_2bdb3624_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_user_profile2_vue_vue_type_style_index_0_id_2bdb3624_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_user_profile2_vue_vue_type_style_index_0_id_2bdb3624_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_user_profile2_vue_vue_type_style_index_0_id_2bdb3624_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/admin/components/layouts/left-side/left-profile/user_profile2.vue?vue&type=template&id=2bdb3624&scoped=true&":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/left-side/left-profile/user_profile2.vue?vue&type=template&id=2bdb3624&scoped=true& ***!
  \***************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_profile2_vue_vue_type_template_id_2bdb3624_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./user_profile2.vue?vue&type=template&id=2bdb3624&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/left-side/left-profile/user_profile2.vue?vue&type=template&id=2bdb3624&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_profile2_vue_vue_type_template_id_2bdb3624_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_profile2_vue_vue_type_template_id_2bdb3624_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/admin/components/layouts/preloader/preloader.vue":
/*!***************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/preloader/preloader.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _preloader_vue_vue_type_template_id_6995e33c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preloader.vue?vue&type=template&id=6995e33c&scoped=true& */ "./resources/assets/admin/components/layouts/preloader/preloader.vue?vue&type=template&id=6995e33c&scoped=true&");
/* harmony import */ var _preloader_vue_vue_type_style_index_0_id_6995e33c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preloader.vue?vue&type=style&index=0&id=6995e33c&scoped=true&lang=scss& */ "./resources/assets/admin/components/layouts/preloader/preloader.vue?vue&type=style&index=0&id=6995e33c&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}



/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _preloader_vue_vue_type_template_id_6995e33c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _preloader_vue_vue_type_template_id_6995e33c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6995e33c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/admin/components/layouts/preloader/preloader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/admin/components/layouts/preloader/preloader.vue?vue&type=style&index=0&id=6995e33c&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/preloader/preloader.vue?vue&type=style&index=0&id=6995e33c&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_preloader_vue_vue_type_style_index_0_id_6995e33c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./preloader.vue?vue&type=style&index=0&id=6995e33c&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/preloader/preloader.vue?vue&type=style&index=0&id=6995e33c&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_preloader_vue_vue_type_style_index_0_id_6995e33c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_preloader_vue_vue_type_style_index_0_id_6995e33c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_preloader_vue_vue_type_style_index_0_id_6995e33c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_preloader_vue_vue_type_style_index_0_id_6995e33c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_preloader_vue_vue_type_style_index_0_id_6995e33c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/admin/components/layouts/preloader/preloader.vue?vue&type=template&id=6995e33c&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/preloader/preloader.vue?vue&type=template&id=6995e33c&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_preloader_vue_vue_type_template_id_6995e33c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./preloader.vue?vue&type=template&id=6995e33c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/preloader/preloader.vue?vue&type=template&id=6995e33c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_preloader_vue_vue_type_template_id_6995e33c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_preloader_vue_vue_type_template_id_6995e33c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/admin/components/layouts/right-side-bar.vue":
/*!**********************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/right-side-bar.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _right_side_bar_vue_vue_type_template_id_0fc19e79___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./right-side-bar.vue?vue&type=template&id=0fc19e79& */ "./resources/assets/admin/components/layouts/right-side-bar.vue?vue&type=template&id=0fc19e79&");
/* harmony import */ var _right_side_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./right-side-bar.vue?vue&type=script&lang=js& */ "./resources/assets/admin/components/layouts/right-side-bar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _right_side_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _right_side_bar_vue_vue_type_template_id_0fc19e79___WEBPACK_IMPORTED_MODULE_0__["render"],
  _right_side_bar_vue_vue_type_template_id_0fc19e79___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/admin/components/layouts/right-side-bar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/admin/components/layouts/right-side-bar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/right-side-bar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_right_side_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./right-side-bar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/right-side-bar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_right_side_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/admin/components/layouts/right-side-bar.vue?vue&type=template&id=0fc19e79&":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/right-side-bar.vue?vue&type=template&id=0fc19e79& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_right_side_bar_vue_vue_type_template_id_0fc19e79___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./right-side-bar.vue?vue&type=template&id=0fc19e79& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/right-side-bar.vue?vue&type=template&id=0fc19e79&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_right_side_bar_vue_vue_type_template_id_0fc19e79___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_right_side_bar_vue_vue_type_template_id_0fc19e79___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/admin/components/layouts/right-side.vue":
/*!******************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/right-side.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _right_side_vue_vue_type_template_id_3cf6c633_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./right-side.vue?vue&type=template&id=3cf6c633&scoped=true& */ "./resources/assets/admin/components/layouts/right-side.vue?vue&type=template&id=3cf6c633&scoped=true&");
/* harmony import */ var _right_side_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./right-side.vue?vue&type=script&lang=js& */ "./resources/assets/admin/components/layouts/right-side.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _right_side_vue_vue_type_style_index_0_id_3cf6c633_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./right-side.vue?vue&type=style&index=0&id=3cf6c633&lang=scss&scoped=true& */ "./resources/assets/admin/components/layouts/right-side.vue?vue&type=style&index=0&id=3cf6c633&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _right_side_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _right_side_vue_vue_type_template_id_3cf6c633_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _right_side_vue_vue_type_template_id_3cf6c633_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3cf6c633",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/admin/components/layouts/right-side.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/admin/components/layouts/right-side.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/right-side.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_right_side_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./right-side.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/right-side.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_right_side_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/admin/components/layouts/right-side.vue?vue&type=style&index=0&id=3cf6c633&lang=scss&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/right-side.vue?vue&type=style&index=0&id=3cf6c633&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_right_side_vue_vue_type_style_index_0_id_3cf6c633_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./right-side.vue?vue&type=style&index=0&id=3cf6c633&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/right-side.vue?vue&type=style&index=0&id=3cf6c633&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_right_side_vue_vue_type_style_index_0_id_3cf6c633_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_right_side_vue_vue_type_style_index_0_id_3cf6c633_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_right_side_vue_vue_type_style_index_0_id_3cf6c633_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_right_side_vue_vue_type_style_index_0_id_3cf6c633_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_right_side_vue_vue_type_style_index_0_id_3cf6c633_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/admin/components/layouts/right-side.vue?vue&type=template&id=3cf6c633&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/layouts/right-side.vue?vue&type=template&id=3cf6c633&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_right_side_vue_vue_type_template_id_3cf6c633_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./right-side.vue?vue&type=template&id=3cf6c633&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/layouts/right-side.vue?vue&type=template&id=3cf6c633&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_right_side_vue_vue_type_template_id_3cf6c633_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_right_side_vue_vue_type_template_id_3cf6c633_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/assets/admin/img/authors/avatar7.jpg":
/*!********************************************************!*\
  !*** ./resources/assets/admin/img/authors/avatar7.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "public/images/avatar7.jpg?04ff9c2c9f351c174dbda11b39f386a7";

/***/ }),

/***/ "./resources/assets/admin/layout.vue":
/*!*******************************************!*\
  !*** ./resources/assets/admin/layout.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_vue_vue_type_template_id_1973c96e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.vue?vue&type=template&id=1973c96e&scoped=true& */ "./resources/assets/admin/layout.vue?vue&type=template&id=1973c96e&scoped=true&");
/* harmony import */ var _layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.vue?vue&type=script&lang=js& */ "./resources/assets/admin/layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _layout_vue_vue_type_style_index_0_id_1973c96e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.vue?vue&type=style&index=0&id=1973c96e&lang=scss&scoped=true& */ "./resources/assets/admin/layout.vue?vue&type=style&index=0&id=1973c96e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _layout_vue_vue_type_template_id_1973c96e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _layout_vue_vue_type_template_id_1973c96e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1973c96e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/admin/layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/admin/layout.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/assets/admin/layout.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/admin/layout.vue?vue&type=style&index=0&id=1973c96e&lang=scss&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/admin/layout.vue?vue&type=style&index=0&id=1973c96e&lang=scss&scoped=true& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_style_index_0_id_1973c96e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./layout.vue?vue&type=style&index=0&id=1973c96e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/layout.vue?vue&type=style&index=0&id=1973c96e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_style_index_0_id_1973c96e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_style_index_0_id_1973c96e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_style_index_0_id_1973c96e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_style_index_0_id_1973c96e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_style_index_0_id_1973c96e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/admin/layout.vue?vue&type=template&id=1973c96e&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/admin/layout.vue?vue&type=template&id=1973c96e&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_1973c96e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./layout.vue?vue&type=template&id=1973c96e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/layout.vue?vue&type=template&id=1973c96e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_1973c96e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_1973c96e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/admin/menu.js":
/*!****************************************!*\
  !*** ./resources/assets/admin/menu.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var menu_items = [{
  name: 'Dashboard',
  link: '/',
  icon: ' fas fa-home'
}, {
  name: "Restaurants",
  icon: "fas fa-users",
  child: [{
    name: 'Add Restaurant',
    link: '/add_restaurant',
    icon: 'fas fa-plus-square'
  }, {
    name: 'Restaurant Lists',
    link: '/restaurant_list',
    icon: 'fas fa-list-ul'
  }]
}, {
  name: "Settings",
  icon: "fas fa-cog",
  child: [{
    name: "Credit Card Setting",
    icon: "fas fa-angle-double-right",
    link: '/card_setting'
  }, {
    name: "Sales Tax",
    icon: "fas fa-angle-double-right",
    link: '/sales_tax'
  }, // {
  //     name: "Subscription Product",
  //     icon: "fas fa-angle-double-right",
  //     link: '/subscription_product',
  // },
  {
    name: "Subscription Plan",
    icon: "fas fa-angle-double-right",
    link: '/subscription_plan'
  }]
} // {
//     name: "Food Categories",
//     icon: "fa fa-tags",
//     child: [
//         {
//             name: 'Add Category',
//             link: '/add_category',
//             icon: 'fa fa-plus-square'
//
//         },
//         // {
//         //     name: 'Edit Category',
//         //     link: '/edit_category',
//         //     icon: 'fa fa-edit'
//         // },
//         {
//             name: 'Category Lists',
//             link: '/category_list',
//             icon: 'fa fa-list-ul'
//
//         }
//     ]
// },
// {
//     name: "Food Sizes",
//     icon: "fas fa-weight",
//     child: [
//         {
//             name: 'Add Size',
//             link: '/add_size',
//             icon: 'fas fa-plus-square'
//         },
//         {
//             name: 'Size Lists',
//             link: '/size_list',
//             icon: 'fa fa-list-ul'
//         }
//     ]
// },
// {
//     name: "Food Options",
//     icon: "fas fa-weight-hanging",
//     child: [
//         {
//             name: 'Add Option',
//             link: '/add_option',
//             icon: 'fas fa-plus-square'
//
//         },
//         {
//             name: 'Option Lists',
//             link: '/option_list',
//             icon: 'fa fa-list-ul'
//         }
//     ]
// },
// {
//     name: 'Contacts',
//     link: '/contacts',
//     icon: ' fa fa-address-book-o'
// },
// {
//     name: 'Tasks',
//     link: '/tasks',
//     icon: ' fa fa-list'
// },
// {
//     name: 'E-Commerce',
//     icon: 'fa fa-shopping-cart',
//     child: [
//         {
//             name: 'E Dashboard',
//             link: '/e_dashboard',
//             icon: 'fa fa-angle-double-right'
//         },
//         {
//             name: 'Cart Details',
//             link: '/cart_details',
//             icon: 'fa fa-angle-double-right'
//         },
//         {
//             name: 'Product details',
//             link: '/product_details',
//             icon: 'fa fa-angle-double-right'
//         },
//         {
//             name: 'Product Edit ',
//             link: '/product_edit',
//             icon: 'fa fa-angle-double-right'
//         },
//         {
//             name: 'Product gallery ',
//             link: '/product_gallery',
//             icon: 'fa fa-angle-double-right'
//         }
//     ]
//
// },
// {
//     name: 'Forms',
//     icon: 'fa fa-pencil-square-o',
//     child: [
//         {
//             name: 'Form elements',
//             link: '/form_elements',
//             icon: 'fa fa-angle-double-right'
//
//         },
//         {
//             name: 'Form validations',
//             link: '/form_validations',
//             icon: 'fa fa-angle-double-right'
//         },
//         {
//             name: 'Form editors',
//             link: '/form_editors',
//             icon: 'fa fa-angle-double-right'
//         },
//         {
//             name: 'Form wizards',
//             link: '/form_wizards',
//             icon: 'fa fa-angle-double-right'
//         },
//         {
//             name: 'Dropdowns',
//             link: '/dropdowns',
//             icon: 'fa fa-angle-double-right'
//         },
//         {
//             name: 'Radios & Checkboxes',
//             link: '/radios_checkboxes',
//             icon: 'fa fa-angle-double-right'
//         }
//     ]
// },
// {
//     name: 'Typography',
//     link: '/typography',
//     icon: 'fa fa-text-height'
// },
// {
//     name: 'API',
//     link: '/api',
//     icon: 'fa fa-clone'
// },
// {
//     name: 'UI Components',
//     title: ""
// },
// {
//     name: 'Components',
//     icon: 'fa fa-globe',
//     child: [
//         {
//             name: 'UI elements',
//             link: '/ui_elements',
//             icon: 'fa fa-angle-double-right'
//
//         },
//         {
//             name: 'Cards',
//             link: '/cards',
//             icon: 'fa fa-angle-double-right'
//
//         },
//         {
//             name: 'Buttons',
//             link: '/buttons',
//             icon: 'fa fa-angle-double-right'
//
//         },
//         {
//             name: 'Vscroll',
//             link: '/vscroll',
//             icon: 'fa fa-angle-double-right'
//
//         },
//         {
//             name: 'Chat',
//             link: '/chat',
//             icon: 'fa fa-angle-double-right'
//
//         },
//         {
//             name: 'Modals',
//             link: '/modals',
//             icon: 'fa fa-angle-double-right'
//
//         },
//         {
//             name: 'Vue-Datepicker',
//             link: '/vue-datepicker',
//             icon: 'fa fa-angle-double-right'
//
//         },
//         {
//             name: 'Vue slider',
//             link: '/vue-slider',
//             icon: 'fa fa-angle-double-right'
//
//         },
//         {
//             name: 'Notifications',
//             link: '/notifications',
//             icon: 'fa fa-angle-double-right'
//
//         },
//         {
//             name: 'Timeline',
//             link: '/timeline',
//             icon: 'fa fa-angle-double-right'
//
//         },
//         {
//             name: 'Transitions',
//             link: '/transitions',
//             icon: 'fa fa-angle-double-right'
//
//         }
//     ]
//
// },
// {
//     name: ' Widgets',
//     link: '/widgets',
//     icon: 'fa fa-sticky-note-o'
// },
// {
//     name: 'Calendar', // <span class="badge-success badge pull-right">{{this.$store.state.cal_events.length}}</span>
//     link: '/calendar',
//     icon: 'fa fa-calendar'
// },
// {
//     name: 'Charts',
//     title: ""
// },
// {
//     name: ' Charts',
//     icon: 'fa fa-bar-chart',
//     child: [
//         {
//             name: 'Chartist charts',
//             link: '/chartist',
//             icon: 'fa fa-angle-double-right'
//
//         },
//         {
//             name: 'Frappe Charts',
//             link: '/frappe-charts',
//             icon: 'fa fa-angle-double-right'
//
//         },
//         {
//             name: 'Echarts - Line',
//             link: '/e_linecharts',
//             icon: 'fa fa-angle-double-right'
//
//         },
//         {
//             name: 'Echarts - Bar',
//             link: '/e_barcharts',
//             icon: 'fa fa-angle-double-right'
//
//         },
//         {
//             name: 'Echarts - Pie',
//             link: '/e_piecharts',
//             icon: 'fa fa-angle-double-right'
//
//         },
//         {
//             name: 'Vue Trend/Bar',
//             link: '/trend_bar',
//             icon: 'fa fa-angle-double-right'
//
//         }
//     ]
//
// },
// {
//     name: 'Tables',
//     icon: 'fa fa-table',
//     child: [
//         {
//             name: 'Simple tables',
//             link: '/simple_tables',
//             icon: 'fa fa-angle-double-right'
//
//         },
//         {
//             name: 'Advanced tables',
//             link: '/advanced_tables',
//             icon: 'fa fa-angle-double-right'
//
//         }
//     ]
//
// },
// {
//     name: 'Files & Gallery',
//     title: ""
// },
// {
//     name: "Files",
//     icon: "fa fa-file-o",
//     child: [
//         {
//             name: 'Multi file upload',
//             link: '/multi_file_upload',
//             icon: 'fa fa-angle-double-right'
//
//         },
//         {
//             name: 'Vue dropzone',
//             link: '/vue_dropzone',
//             icon: 'fa fa-angle-double-right'
//
//         },
//         {
//             name: 'Gallery',
//             link: '/gallery',
//             icon: 'fa fa-angle-double-right'
//
//         },
//         {
//             name: 'Vue Draggable',
//             link: '/vue_draggable',
//             icon: 'fa fa-angle-double-right'
//
//         },
//         {
//             name: 'Image Cropper',
//             link: '/image_cropper',
//             icon: 'fa fa-angle-double-right'
//
//         }]
//
// },
// {
//     name: 'Maps',
//     link: '/gmaps',
//     icon: 'fa fa-map-marker'
// },
//
// {
//     name: 'Pages',
//     title: ""
// },
// {
//     name: "Pages",
//     icon: "fa fa-files-o",
//     child: [
//         {
//             name: 'Lockscreen',
//             link: '/lockscreen',
//             icon: 'fa fa-angle-double-right'
//         }
//     ]
// },
// {
//     name: "Extra Pages",
//     icon: "fa fa-files-o",
//     child: [
//         {
//             name: 'Blank',
//             link: '/blank',
//             icon: 'fa fa-angle-double-right'
//
//         },
//         {
//             name: 'Invoice',
//             link: '/invoice',
//             icon: 'fa fa-angle-double-right'
//
//         },
//         {
//             name: 'Contact us',
//             link: '/contact_us',
//             icon: 'fa fa-angle-double-right'
//
//         },
//         {
//             name: 'Pricing',
//             link: '/pricing',
//             icon: 'fa fa-angle-double-right'
//
//         },
//         {
//             name: '404',
//             link: '/404',
//             icon: 'fa fa-angle-double-right'
//
//         },
//         {
//             name: '500',
//             link: '/500',
//             icon: 'fa fa-angle-double-right'
//
//         }
//     ]
// }
];
/* harmony default export */ __webpack_exports__["default"] = (menu_items);

/***/ }),

/***/ "./resources/assets/admin/sass/_right_side_bar.scss":
/*!**********************************************************!*\
  !*** ./resources/assets/admin/sass/_right_side_bar.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!./_right_side_bar.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/assets/admin/sass/_right_side_bar.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);