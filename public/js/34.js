(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./resources/assets/admin/common/api.service.js":
/*!******************************************************!*\
  !*** ./resources/assets/admin/common/api.service.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-axios */ "./node_modules/vue-axios/dist/vue-axios.min.js");
/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jwt.service */ "./resources/assets/admin/common/jwt.service.js");




var ApiService = {
  init: function init() {
    vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_axios__WEBPACK_IMPORTED_MODULE_2___default.a, axios__WEBPACK_IMPORTED_MODULE_1___default.a);
    vue__WEBPACK_IMPORTED_MODULE_0___default.a.axios.defaults.baseURL = 'api/';
    vue__WEBPACK_IMPORTED_MODULE_0___default.a.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  },
  setHeader: function setHeader() {
    vue__WEBPACK_IMPORTED_MODULE_0___default.a.axios.defaults.headers.common["Authorization"] = "".concat(_jwt_service__WEBPACK_IMPORTED_MODULE_3__["default"].getToken());
  },
  query: function query(resource, params) {
    return vue__WEBPACK_IMPORTED_MODULE_0___default.a.axios.get(resource, params)["catch"](function (error) {
      throw new Error("[RWV] ApiService ".concat(error));
    });
  },
  get: function get(resource) {
    var slug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

    if (_jwt_service__WEBPACK_IMPORTED_MODULE_3__["default"].getToken() !== null) {
      this.setHeader();
    } else {}

    var params = '';

    if (!_.isNaN(slug)) {
      params = '?' + slug;
    }

    if (_.isObject(slug)) {
      params = '?' + _.keys(slug).filter(function (key) {
        return slug[key] != null && slug[key] !== 'null';
      }).map(function (key) {
        return key + '=' + slug[key];
      }).join('&');
    }

    return vue__WEBPACK_IMPORTED_MODULE_0___default.a.axios.get("".concat(resource).concat(params))["catch"](function (error) {
      throw new Error("[RWV] ApiService ".concat(error));
    });
  },
  post: function post(resource, params) {
    if (_jwt_service__WEBPACK_IMPORTED_MODULE_3__["default"].getToken() !== null) {
      this.setHeader();
    } else {}

    console.log(resource);
    return vue__WEBPACK_IMPORTED_MODULE_0___default.a.axios.post("".concat(resource), params);
  },
  update: function update(resource, slug, params) {
    return vue__WEBPACK_IMPORTED_MODULE_0___default.a.axios.put("".concat(resource, "/").concat(slug), params);
  },
  put: function put(resource, params) {
    return vue__WEBPACK_IMPORTED_MODULE_0___default.a.axios.put("".concat(resource), params);
  },
  "delete": function _delete(resource) {
    return vue__WEBPACK_IMPORTED_MODULE_0___default.a.axios["delete"](resource)["catch"](function (error) {
      throw new Error("[RWV] ApiService ".concat(error));
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ApiService);

/***/ }),

/***/ "./resources/assets/admin/common/jwt.service.js":
/*!******************************************************!*\
  !*** ./resources/assets/admin/common/jwt.service.js ***!
  \******************************************************/
/*! exports provided: getToken, saveToken, destroyToken, getUser, saveUser, destroyUser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveToken", function() { return saveToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyToken", function() { return destroyToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveUser", function() { return saveUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyUser", function() { return destroyUser; });
var TOKEN_KEY = "admin_token";
var USER_KEY = "admin";
var getToken = function getToken() {
  return window.localStorage.getItem(TOKEN_KEY);
};
var saveToken = function saveToken(token) {
  window.localStorage.setItem(TOKEN_KEY, token);
};
var destroyToken = function destroyToken() {
  window.localStorage.removeItem(TOKEN_KEY);
};
var getUser = function getUser() {
  return window.localStorage.getItem(USER_KEY);
};
var saveUser = function saveUser(user) {
  window.localStorage.setItem(USER_KEY, JSON.stringify(user));
};
var destroyUser = function destroyUser() {
  window.localStorage.removeItem(USER_KEY);
};
/* harmony default export */ __webpack_exports__["default"] = ({
  getToken: getToken,
  saveToken: saveToken,
  destroyToken: destroyToken,
  getUser: getUser,
  saveUser: saveUser,
  destroyUser: destroyUser
});

/***/ })

}]);