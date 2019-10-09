(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/vue-loading-button/dist/vue-loading-button.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/vue-loading-button/dist/vue-loading-button.esm.js ***!
  \************************************************************************/
/*! exports provided: default, install */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
  name: "VueLoadingButton",
  props: {
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    styled: {
      type: Boolean,
      required: false,
      default: true
    }
  }
};

function normalizeComponent(compiledTemplate, injectStyle, defaultExport, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, isShadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof isShadowMode === 'function') {
        createInjectorSSR = createInjector;
        createInjector = isShadowMode;
        isShadowMode = false;
    }
    // Vue.extend constructor export interop
    var options = typeof defaultExport === 'function' ? defaultExport.options : defaultExport;
    // render functions
    if (compiledTemplate && compiledTemplate.render) {
        options.render = compiledTemplate.render;
        options.staticRenderFns = compiledTemplate.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (injectStyle) {
                injectStyle.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (injectStyle) {
        hook = isShadowMode
            ? function () {
                injectStyle.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
            }
            : function (context) {
                injectStyle.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return defaultExport;
}

var isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return function (id, style) { return addStyle(id, style); };
}
var HEAD = document.head || document.getElementsByTagName('head')[0];
var styles = {};
function addStyle(id, css) {
    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        var code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                { style.element.setAttribute('media', css.media); }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            var index = style.ids.size - 1;
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index])
                { style.element.removeChild(nodes[index]); }
            if (nodes.length)
                { style.element.insertBefore(textNode, nodes[index]); }
            else
                { style.element.appendChild(textNode); }
        }
    }
}

/* script */
var __vue_script__ = script;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script.__file = "C:\\Users\\shwilliam\\GitHub\\vue-loading-button\\src\\vue-loading-button.vue";

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "button",
    {
      class: {
        "vue-loading-button": true,
        "default-styles": _vm.styled,
        loading: _vm.loading
      },
      attrs: { disabled: _vm.loading, type: "button" }
    },
    [_vm._t("default", [_vm._v("Submit")]), _vm._v(" "), _vm._m(0)],
    2
  )
};
var __vue_staticRenderFns__ = [
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("span", { staticClass: "spinner" }, [
      _c("span"),
      _vm._v(" "),
      _c("span"),
      _vm._v(" "),
      _c("span"),
      _vm._v(" "),
      _c("span")
    ])
  }
];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-1d441d3c_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* reset */\nbutton[data-v-1d441d3c] {\r\n  font-family: inherit;\r\n  font-size: 100%;\r\n  font-size: 1.4rem;\r\n  line-height: 1.15;\r\n  margin: 0;\r\n  overflow: visible;\r\n  text-transform: none;\r\n  -webkit-appearance: button;\n}\nbutton[data-v-1d441d3c]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\n}\nbutton[data-v-1d441d3c]:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\n}\r\n\r\n/* loading styles */\nbutton[data-v-1d441d3c] {\r\n  position: relative;\r\n  -webkit-transition: all 0.2s;\r\n  transition: all 0.2s;\r\n  transition-timing-function: ease-in;\n}\n.spinner[data-v-1d441d3c] {\r\n  line-height: 1.15;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: auto;\r\n  right: 1.7rem;\r\n  margin: -0.5em;\r\n  opacity: 0;\r\n  transition-property: padding, opacity;\r\n  transition-duration: 0.2s, 0.2s;\r\n  transition-timing-function: ease-in, ease;\r\n  transition-delay: 0s, 0.2s;\n}\n.spinner span[data-v-1d441d3c] {\r\n  box-sizing: border-box;\r\n  display: inline-block;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0.15rem;\r\n  width: 1rem;\r\n  height: 1rem;\r\n  opacity: 1;\r\n  border: 3.4px solid #888;\r\n  border-radius: 50%;\r\n  animation: spinner-data-v-1d441d3c 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n  border-color: #888 transparent transparent transparent;\n}\n.spinner span[data-v-1d441d3c]:nth-child(1) {\r\n  animation-delay: 0.45s;\n}\n.spinner span[data-v-1d441d3c]:nth-child(2) {\r\n  animation-delay: 0.3s;\n}\n.spinner span[data-v-1d441d3c]:nth-child(3) {\r\n  animation-delay: 0.15s;\n}\n.loading[data-v-1d441d3c] {\r\n  padding-right: 3rem !important;\n}\n.loading .spinner[data-v-1d441d3c] {\r\n  opacity: 1;\n}\n.loading .spinner span[data-v-1d441d3c] {\r\n  opacity: 1;\n}\nbutton[data-v-1d441d3c]:not(:disabled) {\r\n  transition-delay: 0.2s;\n}\nbutton:not(:disabled) .spinner span[data-v-1d441d3c] {\r\n  box-shadow: 0 0 0 0.2rem #888 inset;\r\n  border: 7.4px solid transparent;\r\n  -webkit-transition: all 0.4s;\r\n  transition: all 0.4s;\n}\nbutton:not(:disabled) .spinner span[data-v-1d441d3c]:nth-child(1) {\r\n  transform: rotate(0deg) !important;\n}\nbutton:not(:disabled) .spinner span[data-v-1d441d3c]:nth-child(2) {\r\n  transform: rotate(90deg) !important;\n}\nbutton:not(:disabled) .spinner span[data-v-1d441d3c]:nth-child(3) {\r\n  transform: rotate(180deg) !important;\n}\nbutton:not(:disabled) .spinner span[data-v-1d441d3c]:nth-child(4) {\r\n  transform: rotate(270deg) !important;\n}\n@keyframes spinner-data-v-1d441d3c {\n0% {\r\n    transform: rotate(0deg);\n}\n100% {\r\n    transform: rotate(360deg);\n}\n}\r\n\r\n/* default styles */\n.default-styles[data-v-1d441d3c] {\r\n  color: white;\r\n  background-color: blue;\r\n  border: solid 1px transparent;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  padding: 8px 16.5px 8px 16px;\r\n  line-height: 1.9rem;\n}\n.default-styles[data-v-1d441d3c]:disabled {\r\n  pointer-events: stroke;\r\n  cursor: not-allowed;\n}\n.default-styles[data-v-1d441d3c]:focus {\r\n  outline: none;\r\n  box-shadow: 0 0 0 3px lightblue, 0 0 0 1.5px lightblue;\n}\n.default-styles .spinner span[data-v-1d441d3c] {\r\n  top: 0rem;\r\n  width: 1.2rem;\r\n  height: 1.2rem;\r\n  border: 3.4px solid #fff;\r\n  border-color: #fff transparent transparent transparent;\n}\n.default-styles:not(:disabled) .spinner span[data-v-1d441d3c] {\r\n  border: 8.4px solid transparent;\r\n  box-shadow: 0 0 0 0.1rem #fff inset;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\shwilliam\\GitHub\\vue-loading-button/C:\\Users\\shwilliam\\GitHub\\vue-loading-button\\src\\vue-loading-button.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAuCA,UAAA;AACA;EACA,oBAAA;EACA,eAAA;EACA,iBAAA;EACA,iBAAA;EACA,SAAA;EACA,iBAAA;EACA,oBAAA;EACA,0BAAA;AACA;AACA;EACA,kBAAA;EACA,UAAA;AACA;AACA;EACA,8BAAA;AACA;;AAEA,mBAAA;AACA;EACA,kBAAA;EACA,4BAAA;EACA,oBAAA;EACA,mCAAA;AACA;AACA;EACA,iBAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,aAAA;EACA,cAAA;EACA,UAAA;EACA,qCAAA;EACA,+BAAA;EACA,yCAAA;EACA,0BAAA;AACA;AACA;EACA,sBAAA;EACA,qBAAA;EACA,kBAAA;EACA,QAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,wBAAA;EACA,kBAAA;EACA,6EAAA;EACA,sDAAA;AACA;AACA;EACA,sBAAA;AACA;AACA;EACA,qBAAA;AACA;AACA;EACA,sBAAA;AACA;AACA;EACA,8BAAA;AACA;AACA;EACA,UAAA;AACA;AACA;EACA,UAAA;AACA;AACA;EACA,sBAAA;AACA;AACA;EACA,mCAAA;EACA,+BAAA;EACA,4BAAA;EACA,oBAAA;AACA;AACA;EACA,kCAAA;AACA;AACA;EACA,mCAAA;AACA;AACA;EACA,oCAAA;AACA;AACA;EACA,oCAAA;AACA;AACA;AACA;IACA,uBAAA;AACA;AACA;IACA,yBAAA;AACA;AACA;;AAEA,mBAAA;AACA;EACA,YAAA;EACA,sBAAA;EACA,6BAAA;EACA,kBAAA;EACA,eAAA;EACA,4BAAA;EACA,mBAAA;AACA;AACA;EACA,sBAAA;EACA,mBAAA;AACA;AACA;EACA,aAAA;EACA,sDAAA;AACA;AACA;EACA,SAAA;EACA,aAAA;EACA,cAAA;EACA,wBAAA;EACA,sDAAA;AACA;AACA;EACA,+BAAA;EACA,mCAAA;AACA","file":"vue-loading-button.vue","sourcesContent":["<template>\r\n  <button\r\n    :class=\"{\r\n      'vue-loading-button': true,\r\n      'default-styles': styled,\r\n      'loading': loading,\r\n    }\"\r\n    :disabled=\"loading\"\r\n    type=\"button\"\r\n  >\r\n    <slot>Submit</slot>\r\n    <span class=\"spinner\">\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n    </span>\r\n  </button>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  name: \"VueLoadingButton\",\r\n  props: {\r\n    loading: {\r\n      type: Boolean,\r\n      required: false,\r\n      default: false\r\n    },\r\n    styled: {\r\n      type: Boolean,\r\n      required: false,\r\n      default: true\r\n    }\r\n  }\r\n};\r\n</script>\r\n\r\n<style scoped>\r\n/* reset */\r\nbutton {\r\n  font-family: inherit;\r\n  font-size: 100%;\r\n  font-size: 1.4rem;\r\n  line-height: 1.15;\r\n  margin: 0;\r\n  overflow: visible;\r\n  text-transform: none;\r\n  -webkit-appearance: button;\r\n}\r\nbutton::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\nbutton:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/* loading styles */\r\nbutton {\r\n  position: relative;\r\n  -webkit-transition: all 0.2s;\r\n  transition: all 0.2s;\r\n  transition-timing-function: ease-in;\r\n}\r\n.spinner {\r\n  line-height: 1.15;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: auto;\r\n  right: 1.7rem;\r\n  margin: -0.5em;\r\n  opacity: 0;\r\n  transition-property: padding, opacity;\r\n  transition-duration: 0.2s, 0.2s;\r\n  transition-timing-function: ease-in, ease;\r\n  transition-delay: 0s, 0.2s;\r\n}\r\n.spinner span {\r\n  box-sizing: border-box;\r\n  display: inline-block;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0.15rem;\r\n  width: 1rem;\r\n  height: 1rem;\r\n  opacity: 1;\r\n  border: 3.4px solid #888;\r\n  border-radius: 50%;\r\n  animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n  border-color: #888 transparent transparent transparent;\r\n}\r\n.spinner span:nth-child(1) {\r\n  animation-delay: 0.45s;\r\n}\r\n.spinner span:nth-child(2) {\r\n  animation-delay: 0.3s;\r\n}\r\n.spinner span:nth-child(3) {\r\n  animation-delay: 0.15s;\r\n}\r\n.loading {\r\n  padding-right: 3rem !important;\r\n}\r\n.loading .spinner {\r\n  opacity: 1;\r\n}\r\n.loading .spinner span {\r\n  opacity: 1;\r\n}\r\nbutton:not(:disabled) {\r\n  transition-delay: 0.2s;\r\n}\r\nbutton:not(:disabled) .spinner span {\r\n  box-shadow: 0 0 0 0.2rem #888 inset;\r\n  border: 7.4px solid transparent;\r\n  -webkit-transition: all 0.4s;\r\n  transition: all 0.4s;\r\n}\r\nbutton:not(:disabled) .spinner span:nth-child(1) {\r\n  transform: rotate(0deg) !important;\r\n}\r\nbutton:not(:disabled) .spinner span:nth-child(2) {\r\n  transform: rotate(90deg) !important;\r\n}\r\nbutton:not(:disabled) .spinner span:nth-child(3) {\r\n  transform: rotate(180deg) !important;\r\n}\r\nbutton:not(:disabled) .spinner span:nth-child(4) {\r\n  transform: rotate(270deg) !important;\r\n}\r\n@keyframes spinner {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/* default styles */\r\n.default-styles {\r\n  color: white;\r\n  background-color: blue;\r\n  border: solid 1px transparent;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  padding: 8px 16.5px 8px 16px;\r\n  line-height: 1.9rem;\r\n}\r\n.default-styles:disabled {\r\n  pointer-events: stroke;\r\n  cursor: not-allowed;\r\n}\r\n.default-styles:focus {\r\n  outline: none;\r\n  box-shadow: 0 0 0 3px lightblue, 0 0 0 1.5px lightblue;\r\n}\r\n.default-styles .spinner span {\r\n  top: 0rem;\r\n  width: 1.2rem;\r\n  height: 1.2rem;\r\n  border: 3.4px solid #fff;\r\n  border-color: #fff transparent transparent transparent;\r\n}\r\n.default-styles:not(:disabled) .spinner span {\r\n  border: 8.4px solid transparent;\r\n  box-shadow: 0 0 0 0.1rem #fff inset;\r\n}\r\n</style>\r\n"]}, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = "data-v-1d441d3c";
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject SSR */
  

  
  var component = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    createInjector,
    undefined
  )

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) { return; }
  install.installed = true;
  Vue.component("VueLoadingButton", component);
}

// create module definition for Vue.use()
var plugin = {
  install: install
};

// auto-install when vue is found
var GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

/* harmony default export */ __webpack_exports__["default"] = (component);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);