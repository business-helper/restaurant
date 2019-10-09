(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/ImageInput.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/ImageInput.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ImageInput",
  props: ['file'],
  components: {},
  computed: {
    backgroundImage: function backgroundImage() {
      var result = null;
      if (this.file && !this.imageData) result = this.file;
      if (this.imageData) result = this.imageData;
      return result;
    }
  },
  data: function data() {
    return {
      imageData: null
    };
  },
  methods: {
    chooseImage: function chooseImage() {
      this.$refs.fileInput.click();
    },
    onSelectFile: function onSelectFile() {
      var _this = this;

      var input = this.$refs.fileInput;
      var files = input.files;

      if (files && files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          _this.imageData = e.target.result;

          _this.$emit('input', _this.imageData);
        };

        reader.readAsDataURL(files[0]);
      }
    }
  },
  watch: {// file:function(value){
    //     this.imageData = value;
    //     console.log(value);
    // }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/add_food_menu.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/add_food_menu.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue2_collapse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue2-collapse */ "./node_modules/vue2-collapse/dist/vue2-collapse.js");
/* harmony import */ var vue2_collapse__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue2_collapse__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var restaurant_pages_ImageInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! restaurant_pages/ImageInput */ "./resources/assets/restaurant/components/pages/ImageInput.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






 // My own made elements.



__webpack_require__(/*! checkbox.css/dist/css/checkbox.min.css */ "./node_modules/checkbox.css/dist/css/checkbox.min.css");

__webpack_require__(/*! radiobox.css/dist/css/radiobox.min.css */ "./node_modules/radiobox.css/dist/css/radiobox.min.css");

__webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css");

vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_form__WEBPACK_IMPORTED_MODULE_1___default.a, restaurant_src_validations_validations__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "add_user",
  data: function data() {
    return {
      formstate: {},
      model: {
        name: "",
        description: "",
        image: "",
        price: 0,
        cook_time: 0,
        selected_options: [],
        selected_sizes: [],
        new_sizes: [],
        new_options: [],
        menu_id: "",
        category: {},
        min_qty: 1,
        sequence: null
      },
      option_tags: [],
      menu_size: [],
      show_error: false,
      show_success: false,
      validationErrors: [],
      categories: [],
      restaurant_id: 0,
      api_service: restaurant_resources_common_api_service__WEBPACK_IMPORTED_MODULE_3__["default"]
    };
  },
  methods: {
    SizeSelected: function SizeSelected(size) {
      var size_id = size.id;
      var size_name = size.name;

      for (var i = 0; i < this.model.selected_options.length; i++) {
        this.addSelectedSizeToOption(this.model.selected_options[i], size_id, size_name);
      }

      for (var _i = 0; _i < this.option_tags.length; _i++) {
        this.addSelectedSizeToOption(this.option_tags[_i], size_id, size_name);
      }

      for (var _i2 = 0; _i2 < this.model.new_options.length; _i2++) {
        this.addSelectedSizeToOption(this.model.new_options[_i2], size_id, size_name);
      }
    },
    SizeRemoved: function SizeRemoved(size) {
      var size_id = size.id;

      for (var i = 0; i < this.model.selected_options.length; i++) {
        this.deleteSelectedSizeToOption(this.model.selected_options[i], size_id);
      }

      for (var _i3 = 0; _i3 < this.option_tags.length; _i3++) {
        this.deleteSelectedSizeToOption(this.option_tags[_i3], size_id);
      }

      for (var _i4 = 0; _i4 < this.model.new_options.length; _i4++) {
        this.deleteSelectedSizeToOption(this.model.new_options[_i4], size_id);
      }
    },
    removeSize: function removeSize(size) {
      var size_id = size.id;

      for (var i = 0; i < this.model.selected_options.length; i++) {
        this.deleteSelectedSizeToOption(this.model.selected_options[i], size_id);
      }

      for (var _i5 = 0; _i5 < this.option_tags.length; _i5++) {
        this.deleteSelectedSizeToOption(this.option_tags[_i5], size_id);
      }

      for (var _i6 = 0; _i6 < this.model.new_options.length; _i6++) {
        this.deleteSelectedSizeToOption(this.model.new_options[_i6], size_id);
      }

      for (var _i7 = 0; _i7 < this.model.selected_sizes.length; _i7++) {
        if (this.model.selected_sizes[_i7].id == size_id) {
          this.model.selected_sizes.splice(_i7, 1);
        }
      }
    },
    addSelectedSizeToOption: function addSelectedSizeToOption(option_tag, size_id, size_name) {
      var temp = {};
      temp.id = size_id;
      temp.min = 0;
      temp.max = null;
      temp.enabled = false;
      temp.name = size_name;
      var size_min_max = option_tag.size_min_max;

      for (var i = 0; i < size_min_max.length; i++) {
        if (size_min_max[i].size_id == size_id) {
          temp.enabled = true;
          temp.min = size_min_max[i]['min'];
          temp.max = size_min_max[i]['max'];
          break;
        }
      }

      option_tag.selected_sizes.push(temp);
    },
    deleteSelectedSizeToOption: function deleteSelectedSizeToOption(option_tag, size_id) {
      for (var i = 0; i < option_tag.selected_sizes.length; i++) {
        if (option_tag.selected_sizes[i].id == size_id) {
          option_tag.selected_sizes.splice(i, 1);
          break;
        }
      }
    },
    addNewSize: function addNewSize() {
      var temp = {};
      temp.image = "";
      temp.name = "";
      temp.price = null;
      this.model.new_sizes.push(temp);
      temp = {};
      temp.enabled = false;
      temp.min = 0;
      temp.max = null;

      for (var i = 0; i < this.model.selected_options.length; i++) {
        this.model.selected_options[i]['new_sizes'].push(temp);
      }

      for (var _i8 = 0; _i8 < this.option_tags.length; _i8++) {
        this.option_tags[_i8]['new_sizes'].push(temp);
      }

      for (var _i9 = 0; _i9 < this.model.new_options.length; _i9++) {
        this.model.new_options[_i9]['new_sizes'].push(temp);
      }
    },
    removeNewSize: function removeNewSize(index) {
      this.model.new_sizes.splice(index, 1);

      for (var i = 0; i < this.model.selected_options.length; i++) {
        if (this.model.selected_options[i]['new_sizes'][index]) this.model.selected_options[i]['new_sizes'].splice(index, 1);
      }

      for (var _i10 = 0; _i10 < this.option_tags.length; _i10++) {
        if (this.option_tags[_i10]['new_sizes'][index]) this.option_tags[_i10]['new_sizes'].splice(index, 1);
      }

      for (var _i11 = 0; _i11 < this.model.new_options.length; _i11++) {
        this.model.new_options[_i11]['new_sizes'].splice(index, 1);
      }
    },
    unselectOption: function unselectOption(index) {
      this.model.selected_options.splice(index, 1);
    },
    removeNewOptionItem: function removeNewOptionItem(option_tag, new_item_index) {
      option_tag.new_items.splice(new_item_index, 1);
    },
    removeNewOption: function removeNewOption(index) {
      this.model.new_options.splice(index, 1);
    },
    addNewItem: function addNewItem(option_tag) {
      var temp = {};
      temp.is_enabled = true;
      temp.max = null;
      temp.name = "";
      temp.price = 0;
      option_tag.new_items.push(temp);
    },
    addNewOption: function addNewOption() {
      var temp = {};
      temp.min = 0;
      temp.max = null;
      temp.title = "";
      temp.selected_sizes = [];
      temp.new_sizes = [];
      temp.size_min_max = [];
      temp.new_items = [];

      for (var i = 0; i < this.model.selected_sizes.length; i++) {
        var selected_size_temp = {};
        selected_size_temp.id = this.model.selected_sizes[i].id;
        selected_size_temp.size_name = this.model.selected_sizes[i].name;
        selected_size_temp.min = 0;
        selected_size_temp.max = null;
        selected_size_temp.enabled = false;
        temp.selected_sizes.push(selected_size_temp);
      }

      for (var _i12 = 0; _i12 < this.model.new_sizes.length; _i12++) {
        var new_size_temp = {};
        new_size_temp.min = 0;
        new_size_temp.max = null;
        new_size_temp.enabled = false;
        temp.new_sizes.push(new_size_temp);
      }

      this.model.new_options.push(temp);
    },
    onSubmit: function onSubmit() {
      var _this = this;

      if (this.formstate.$invalid) {
        return;
      } else {
        var api_service = this.api_service;
        var restaurant_id = this.restaurant_id;
        var add_restaurant_id = restaurant_id != 0 ? "/" + this.restaurant_id : '';
        api_service.post('restaurant/add_menu' + add_restaurant_id, this.model).then(function (data) {
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
        }, function (error) {
          console.log(error.response);
          throw new Error('handled');
        }).then(function () {
          setTimeout(function () {
            _this.$router.push("/menu_list" + add_restaurant_id);
          }, 100);
        })["catch"](function (error) {});
      }
    },
    form_reset: function form_reset() {
      this.model = {
        name: "",
        description: "",
        price: 0,
        sequence: null
      };
    }
  },
  components: {
    ImageInput: restaurant_pages_ImageInput__WEBPACK_IMPORTED_MODULE_7__["default"],
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_5___default.a
  },
  beforeMount: function beforeMount() {
    var _this2 = this;

    var add_restaurant_id = '';
    var api_service = restaurant_resources_common_api_service__WEBPACK_IMPORTED_MODULE_3__["default"];

    if (this.$route.params.restaurant_id) {
      this.restaurant_id = this.$route.params.restaurant_id;
      add_restaurant_id = "/" + this.restaurant_id;
      api_service = common_api_service__WEBPACK_IMPORTED_MODULE_4__["default"];
    }

    this.api_service = api_service;

    if (!this.$route.params.menu_id) {
      // For adding menu
      api_service.get('restaurant/get_information_for_create_menu' + add_restaurant_id).then(function (response) {
        var data = response.data;
        _this2.option_tags = data.option_tags;
        _this2.menu_size = data.size;
        _this2.categories = data.categories;
        _this2.model.sequence = data.max_sequence;
      });
    } else {
      this.model.menu_id = this.$route.params.menu_id;
      api_service.get("restaurant/get_menu/".concat(this.model.menu_id, "}")).then(function (response) {
        var data = response.data;
        _this2.option_tags = data.option_tags;
        _this2.menu_size = data.size;
        _this2.model.name = data.menu.name;
        _this2.model.price = data.menu.price;
        _this2.model.description = data.menu.description;
        _this2.model.cook_time = data.menu.cook_time;
        _this2.model.image = data.menu.image;
        _this2.model.selected_sizes = data.selected_size;
        _this2.model.selected_options = data.selected_options;
        _this2.model.sequence = data.menu.sequence;
        _this2.model.min_qty = data.menu.min_qty;
        _this2.model.category = data.selected_category;
        _this2.categories = data.categories;
        var that = _this2;

        _this2.model.selected_sizes.forEach(function (item) {
          that.$set(item, 'image', item.image);
        });
      }, function (data) {
        console.log(data.response);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-multiselect/dist/vue-multiselect.min.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-multiselect/dist/vue-multiselect.min.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "fieldset[disabled] .multiselect{pointer-events:none}.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block}.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:\"\";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border-color:#41b883 transparent transparent;border-style:solid;border-width:2px;box-shadow:0 0 0 1px transparent}.multiselect__spinner:before{-webkit-animation:a 2.4s cubic-bezier(.41,.26,.2,.62);animation:a 2.4s cubic-bezier(.41,.26,.2,.62);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__spinner:after{-webkit-animation:a 2.4s cubic-bezier(.51,.09,.21,.8);animation:a 2.4s cubic-bezier(.51,.09,.21,.8);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__loading-enter-active,.multiselect__loading-leave-active{-webkit-transition:opacity .4s ease-in-out;transition:opacity .4s ease-in-out;opacity:1}.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0}.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:14px;touch-action:manipulation}.multiselect{box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e}.multiselect *{box-sizing:border-box}.multiselect:focus{outline:none}.multiselect--disabled{opacity:.6}.multiselect--active{z-index:1}.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0}.multiselect--active .multiselect__select{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0}.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;-webkit-transition:border .1s ease;transition:border .1s ease;box-sizing:border-box;margin-bottom:8px;vertical-align:top}.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto}.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf}.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none}.multiselect__single{padding-left:6px;margin-bottom:8px}.multiselect__tags-wrap{display:inline}.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff}.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis}.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;-webkit-transition:all .2s ease;transition:all .2s ease;border-radius:5px}.multiselect__tag-icon:after{content:\"\\D7\";color:#266d4d;font-size:14px}.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e}.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff}.multiselect__current{min-height:40px;overflow:hidden;padding:8px 12px 0;padding-right:30px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8}.multiselect__current,.multiselect__select{line-height:16px;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer}.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease, -webkit-transform .2s ease}.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:5px 5px 0;border-color:#999 transparent transparent;content:\"\"}.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px}.multiselect--active .multiselect__placeholder{display:none}.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:1;-webkit-overflow-scrolling:touch}.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top}.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8}.multiselect__content::webkit-scrollbar{display:none}.multiselect__element{display:block}.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap}.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px}.multiselect__option--highlight{background:#41b883;outline:none;color:#fff}.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff}.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700}.multiselect__option--selected:after{content:attr(data-selected);color:silver}.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect--disabled{background:#ededed;pointer-events:none}.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select,.multiselect__option--disabled{background:#ededed;color:#a6a6a6}.multiselect__option--disabled{cursor:text;pointer-events:none}.multiselect__option--disabled.multiselect__option--highlight{background:#dedede!important}.multiselect-enter-active,.multiselect-leave-active{-webkit-transition:all .15s ease;transition:all .15s ease}.multiselect-enter,.multiselect-leave-active{opacity:0}.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top}[dir=rtl] .multiselect{text-align:right}[dir=rtl] .multiselect__select{right:auto;left:1px}[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px}[dir=rtl] .multiselect__content{text-align:right}[dir=rtl] .multiselect__option:after{right:auto;left:0}[dir=rtl] .multiselect__clear{right:auto;left:12px}[dir=rtl] .multiselect__spinner{right:auto;left:1px}@-webkit-keyframes a{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(2turn);transform:rotate(2turn)}}@keyframes a{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(2turn);transform:rotate(2turn)}}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/ImageInput.vue?vue&type=style&index=0&id=c74ef4f6&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/ImageInput.vue?vue&type=style&index=0&id=c74ef4f6&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.base-image-input[data-v-c74ef4f6] {\n    display: block;\n    width: 200px;\n    height: 200px;\n    cursor: pointer;\n    background-size: 100% 100%;\n    background-position: center center;\n}\n.placeholder[data-v-c74ef4f6] {\n    background: #F0F0F0;\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    color: #333;\n    font-size: 18px;\n    font-family: Helvetica;\n}\n.placeholder[data-v-c74ef4f6]:hover {\n    background: #E0E0E0;\n}\n.file-input[data-v-c74ef4f6] {\n    display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/add_food_menu.vue?vue&type=style&index=0&id=9e648f88&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/add_food_menu.vue?vue&type=style&index=0&id=9e648f88&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.dropzone_wrapper[data-v-9e648f88] {\n    width: 100%;\n}\n.align-left[data-v-9e648f88] {\n    float: left;\n}\n.align-right[data-v-9e648f88] {\n    float: right;\n}\n.food-quantity-option[data-v-9e648f88]{\n    float:left;\n    margin-right:20px;\n}\ntoggle-button[data-v-9e648f88]{\n    margin-top:5px;\n}\n.quantity-option-input[data-v-9e648f88]{\n    margin-top:5px;\n    max-width:200px;\n}\n.size-name[data-v-9e648f88]{\n    margin-bottom:0;\n}\n.option-item-holder[data-v-9e648f88]{\n}\n.option-item[data-v-9e648f88]{\n    width:250px;\n    float:left;\n    margin-right:20px;\n    margin-bottom:20px;\n}\n.option-item-header-title[data-v-9e648f88]{\n    margin-top:20px;\n}\n.option-item-name[data-v-9e648f88]{\n    font-weight:bold;\n    margin-bottom:0;\n}\n#add-size-button[data-v-9e648f88]{\n    display:block;\n    float:right;\n    margin-bottom:20px;\n}\nh6.size-name[data-v-9e648f88]{\n    min-height:16px;\n}\n.remove-new-size[data-v-9e648f88]{\n    float:right;\n    cursor:pointer;\n    font-size:18px;\n}\n.food-quantity-option .card[data-v-9e648f88]{\n    border:1px solid #666;\n}\n.food-size-holder[data-v-9e648f88],.food-option-holder[data-v-9e648f88]{\n    border:2px solid #596bc3;\n}\n.food-quantity-option .card .card-header[data-v-9e648f88]{\n    background:#e1e1e1;\n}\n.food-option-card[data-v-9e648f88]{\n    border: 1px solid #868080;\n}\n.food-option-card .card-header[data-v-9e648f88]{\n    background:#efe4e4;;\n    min-height:40px;\n}\n.food-option-card .card-header h5[data-v-9e648f88]{\n    margin-bottom:0;\n}\n.food-option[data-v-9e648f88] {\n    padding: 10px;\n    padding-bottom:0;\n}\n.food-option .header.v-collapse-toggler[data-v-9e648f88] {\n    background: #efe4e4;\n    margin-bottom: 0;\n    padding: 10px 15px;\n    border: 1px solid #aaa;\n    border-radius: 5px 5px 0 0;\n}\nh5.option-title[data-v-9e648f88] {\n    margin-bottom: 0;\n    min-height:19px;\n}\nspan.new-option-span[data-v-9e648f88] {\n    margin-left: 5px;\n    color: #c77a17;\n}\n.option-close[data-v-9e648f88]{\n    float:right;\n    cursor:pointer;\n}\n.option-item[data-v-9e648f88]{\n    border: 1px solid #636a80;\n}\n.option-item .card-header[data-v-9e648f88]{\n    background: #e1e1e1;\n    min-height:35.5px;\n}\n.option-item label[data-v-9e648f88] {\n    width: 45px;\n}\n.add-new-option-item[data-v-9e648f88]{\n    float:right;\n    display:block;\n    margin-bottom:20px;\n}\nspan.new-option-item-close[data-v-9e648f88] {\n    float: right;\n    font-size: 18px;\n    margin-top: -2px;\n    margin-bottom: -2px;\n    cursor: pointer;\n}\n.add-new-option[data-v-9e648f88]{\n    float:right;\n    margin-bottom:20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/add_food_menu.vue?vue&type=style&index=1&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/add_food_menu.vue?vue&type=style&index=1&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.custom-control-label::before {\n    width: 1.5rem;\n    height: 1.5rem;\n    top: 0rem;\n}\n.custom-control-label::after {\n    width: 1.5rem;\n    height: 1.5rem;\n    top: 0rem;\n}\n.multiselect {\n    margin-bottom: 20px;\n}\n\n/*Collapse Part*/\n.v-collapse-content {\n    max-height: 0;\n    -webkit-transition: max-height 0.3s ease-out;\n    transition: max-height 0.3s ease-out;\n    overflow: hidden;\n    padding: 0;\n}\n.v-collapse-content-end {\n    -webkit-transition: max-height 0.3s ease-in;\n    transition: max-height 0.3s ease-in;\n    max-height: none;\n}\n.food-option .v-collapse-content-end {\n    border: 1px solid #555;\n    border-top: none;\n    padding: 20px;\n    padding-bottom:0;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/ImageInput.vue?vue&type=style&index=0&id=c74ef4f6&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/ImageInput.vue?vue&type=style&index=0&id=c74ef4f6&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageInput.vue?vue&type=style&index=0&id=c74ef4f6&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/ImageInput.vue?vue&type=style&index=0&id=c74ef4f6&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/add_food_menu.vue?vue&type=style&index=0&id=9e648f88&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/add_food_menu.vue?vue&type=style&index=0&id=9e648f88&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add_food_menu.vue?vue&type=style&index=0&id=9e648f88&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/add_food_menu.vue?vue&type=style&index=0&id=9e648f88&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/add_food_menu.vue?vue&type=style&index=1&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/add_food_menu.vue?vue&type=style&index=1&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add_food_menu.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/add_food_menu.vue?vue&type=style&index=1&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/ImageInput.vue?vue&type=template&id=c74ef4f6&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/ImageInput.vue?vue&type=template&id=c74ef4f6&scoped=true& ***!
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
  return _c(
    "div",
    {
      staticClass: "base-image-input",
      style: { "background-image": "url('" + _vm.backgroundImage + "')" },
      on: { click: _vm.chooseImage }
    },
    [
      !_vm.backgroundImage
        ? _c("span", { staticClass: "placeholder" }, [
            _vm._v("\n  Choose an Image\n")
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("input", {
        ref: "fileInput",
        staticClass: "file-input",
        attrs: { type: "file" },
        on: { input: _vm.onSelectFile }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/add_food_menu.vue?vue&type=template&id=9e648f88&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/restaurant/components/pages/add_food_menu.vue?vue&type=template&id=9e648f88&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "col-lg-12" },
      [
        _c(
          "b-card",
          {
            staticClass: "bg-success-card",
            attrs: { header: "Add Food Menu", "header-tag": "h4" }
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
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-lg-6" }, [
                          _c("div", { staticClass: "col-lg-12" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c(
                                  "validate",
                                  { attrs: { tag: "div" } },
                                  [
                                    _c("label", { attrs: { for: "name" } }, [
                                      _vm._v("Food Name")
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.model.name,
                                          expression: "model.name"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        id: "name",
                                        name: "name",
                                        type: "text",
                                        required: "",
                                        autofocus: "",
                                        placeholder: "Food Name"
                                      },
                                      domProps: { value: _vm.model.name },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.model,
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
                                          name: "name",
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
                                          [_vm._v("Food name is required")]
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
                                    _c("label", { attrs: { for: "name" } }, [
                                      _vm._v("Price")
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.model.price,
                                          expression: "model.price"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        id: "price",
                                        name: "price",
                                        type: "number",
                                        required: "",
                                        autofocus: "",
                                        placeholder: "Food Price"
                                      },
                                      domProps: { value: _vm.model.price },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.model,
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
                                          name: "name",
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
                                          [_vm._v("Food price is required")]
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
                              _c("label", { attrs: { for: "name" } }, [
                                _vm._v("Cook time")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.model.cook_time,
                                    expression: "model.cook_time"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  name: "cook_time",
                                  type: "number",
                                  autofocus: "",
                                  placeholder: "Cook Time"
                                },
                                domProps: { value: _vm.model.cook_time },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.model,
                                      "cook_time",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", { attrs: { for: "name" } }, [
                                _vm._v("Sequence")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.model.sequence,
                                    expression: "model.sequence"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  name: "sequence",
                                  type: "number",
                                  autofocus: "",
                                  placeholder: "Sequence"
                                },
                                domProps: { value: _vm.model.sequence },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.model,
                                      "sequence",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [_vm._v("Min Qty")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.model.min_qty,
                                    expression: "model.min_qty"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  name: "min_qty",
                                  type: "number",
                                  autofocus: "",
                                  placeholder: "Sequence",
                                  step: "1",
                                  min: "1"
                                },
                                domProps: { value: _vm.model.min_qty },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.model,
                                      "min_qty",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", { attrs: { for: "description" } }, [
                                _vm._v(" Food Description")
                              ]),
                              _vm._v(" "),
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.model.description,
                                    expression: "model.description"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  name: "description",
                                  id: "description",
                                  required: "",
                                  placeholder: "Brief description of Food",
                                  rows: "8"
                                },
                                domProps: { value: _vm.model.description },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.model,
                                      "description",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-6" }, [
                          _c("div", { staticClass: "col-lg-12 col-12 mt-4" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", [_vm._v("Food Picture")]),
                                _vm._v(" "),
                                _c("image-input", {
                                  attrs: { file: _vm.model.image },
                                  model: {
                                    value: _vm.model.image,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "image", $$v)
                                    },
                                    expression: "model.image"
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-12 mt-4" },
                        [
                          _c(
                            "b-card",
                            {
                              staticClass: "bg-primary-card food-size-holder",
                              attrs: {
                                header: "Category For Food",
                                "header-tag": "h4"
                              }
                            },
                            [
                              _c("multiselect", {
                                attrs: {
                                  options: _vm.categories,
                                  "close-on-select": true,
                                  "clear-on-select": false,
                                  "hide-selected": true,
                                  placeholder: "Pick Category For food",
                                  "track-by": "name",
                                  label: "name"
                                },
                                model: {
                                  value: _vm.model.category,
                                  callback: function($$v) {
                                    _vm.$set(_vm.model, "category", $$v)
                                  },
                                  expression: "model.category"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-12 mt-4" },
                        [
                          _c(
                            "b-card",
                            {
                              staticClass: "bg-primary-card food-size-holder",
                              attrs: {
                                header: "Food Size Options",
                                "header-tag": "h4"
                              }
                            },
                            [
                              _c("multiselect", {
                                attrs: {
                                  options: _vm.menu_size,
                                  multiple: true,
                                  "close-on-select": true,
                                  "clear-on-select": false,
                                  "hide-selected": true,
                                  placeholder: "Pick Sizes For food",
                                  "track-by": "name",
                                  label: "name"
                                },
                                on: {
                                  select: _vm.SizeSelected,
                                  remove: _vm.SizeRemoved
                                },
                                model: {
                                  value: _vm.model.selected_sizes,
                                  callback: function($$v) {
                                    _vm.$set(_vm.model, "selected_sizes", $$v)
                                  },
                                  expression: "model.selected_sizes"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-secondary",
                                  attrs: { id: "add-size-button" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      $event.stopPropagation()
                                      return _vm.addNewSize($event)
                                    }
                                  }
                                },
                                [_vm._v("Add Size")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.model.selected_sizes, function(
                                item,
                                index
                              ) {
                                return _c(
                                  "div",
                                  { staticClass: "food-quantity-option" },
                                  [
                                    _c(
                                      "b-card",
                                      {
                                        staticClass: "b-card-primary",
                                        attrs: { "show-footer": "" }
                                      },
                                      [
                                        _c(
                                          "h6",
                                          {
                                            staticClass: "size-name",
                                            attrs: { slot: "header" },
                                            slot: "header"
                                          },
                                          [
                                            _vm._v(_vm._s(item.name)),
                                            _c(
                                              "span",
                                              {
                                                staticClass: "remove-new-size"
                                              },
                                              [
                                                _c("i", {
                                                  staticClass: "fas fa-close",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.removeSize(
                                                        item
                                                      )
                                                    }
                                                  }
                                                })
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c("image-input", {
                                              attrs: { file: "" + item.image },
                                              model: {
                                                value: item.image,
                                                callback: function($$v) {
                                                  _vm.$set(item, "image", $$v)
                                                },
                                                expression: "item.image"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "form-group quantity-option-input"
                                          },
                                          [
                                            _c(
                                              "validate",
                                              { attrs: { tag: "div" } },
                                              [
                                                _c("label", [
                                                  _vm._v("Size Name")
                                                ]),
                                                _vm._v(" "),
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: item["name"],
                                                      expression: "item['name']"
                                                    }
                                                  ],
                                                  staticClass: "form-control",
                                                  attrs: {
                                                    name: "size_name-" + index,
                                                    type: "text",
                                                    autofocus: "",
                                                    placeholder: "Size Name",
                                                    disabled: ""
                                                  },
                                                  domProps: {
                                                    value: item["name"]
                                                  },
                                                  on: {
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
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
                                                      name:
                                                        "size_name-" + index,
                                                      show:
                                                        "$invalid && $submitted"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        attrs: {
                                                          slot: "required"
                                                        },
                                                        slot: "required"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Size Name is required"
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
                                            staticClass:
                                              "form-group quantity-option-input"
                                          },
                                          [
                                            _c(
                                              "validate",
                                              { attrs: { tag: "div" } },
                                              [
                                                _c("label", [_vm._v("Price")]),
                                                _vm._v(" "),
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: item["price"],
                                                      expression:
                                                        "item['price']"
                                                    }
                                                  ],
                                                  staticClass: "form-control",
                                                  attrs: {
                                                    name: "size_price-" + index,
                                                    type: "number",
                                                    autofocus: "",
                                                    placeholder:
                                                      "Price for Size"
                                                  },
                                                  domProps: {
                                                    value: item["price"]
                                                  },
                                                  on: {
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
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
                                                      name:
                                                        "size_price-" + index,
                                                      show:
                                                        "$invalid && $submitted"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        attrs: {
                                                          slot: "required"
                                                        },
                                                        slot: "required"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Size Price is required"
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
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              }),
                              _vm._v(" "),
                              _vm._l(_vm.model.new_sizes, function(
                                item,
                                index
                              ) {
                                return _c(
                                  "div",
                                  { staticClass: "food-quantity-option" },
                                  [
                                    _c(
                                      "b-card",
                                      {
                                        staticClass: "b-card-primary",
                                        attrs: { "show-footer": "" }
                                      },
                                      [
                                        _c(
                                          "h6",
                                          {
                                            staticClass: "size-name",
                                            attrs: { slot: "header" },
                                            slot: "header"
                                          },
                                          [
                                            _vm._v(_vm._s(item.name)),
                                            _c(
                                              "span",
                                              {
                                                staticClass: "remove-new-size"
                                              },
                                              [
                                                _c("i", {
                                                  staticClass: "fas fa-close",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.removeNewSize(
                                                        index
                                                      )
                                                    }
                                                  }
                                                })
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c("image-input", {
                                              attrs: { file: item["image"] },
                                              model: {
                                                value: item["image"],
                                                callback: function($$v) {
                                                  _vm.$set(item, "image", $$v)
                                                },
                                                expression: "item['image']"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "form-group quantity-option-input"
                                          },
                                          [
                                            _c(
                                              "validate",
                                              { attrs: { tag: "div" } },
                                              [
                                                _c("label", [
                                                  _vm._v("Size Name")
                                                ]),
                                                _vm._v(" "),
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: item["name"],
                                                      expression: "item['name']"
                                                    }
                                                  ],
                                                  staticClass: "form-control",
                                                  attrs: {
                                                    name:
                                                      "new_size_name-" + index,
                                                    type: "text",
                                                    required: "",
                                                    autofocus: "",
                                                    placeholder:
                                                      "Enter New Size Name"
                                                  },
                                                  domProps: {
                                                    value: item["name"]
                                                  },
                                                  on: {
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
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
                                                      name:
                                                        "new_size_name-" +
                                                        index,
                                                      show:
                                                        "$invalid && $submitted"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        attrs: {
                                                          slot: "required"
                                                        },
                                                        slot: "required"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Size Name is required"
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
                                            staticClass:
                                              "form-group quantity-option-input"
                                          },
                                          [
                                            _c(
                                              "validate",
                                              { attrs: { tag: "div" } },
                                              [
                                                _c("label", [_vm._v("Price")]),
                                                _vm._v(" "),
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: item["price"],
                                                      expression:
                                                        "item['price']"
                                                    }
                                                  ],
                                                  staticClass: "form-control",
                                                  attrs: {
                                                    name: "size_price-" + index,
                                                    type: "number",
                                                    autofocus: "",
                                                    placeholder:
                                                      "Price for Size"
                                                  },
                                                  domProps: {
                                                    value: item["price"]
                                                  },
                                                  on: {
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
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
                                                      name:
                                                        "size_price-" + index,
                                                      show:
                                                        "$invalid && $submitted"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        attrs: {
                                                          slot: "required"
                                                        },
                                                        slot: "required"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Size Price is required"
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
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "clearfix" })
                            ],
                            2
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-12 mt-4" },
                        [
                          _c(
                            "b-card",
                            {
                              staticClass: "food-option-holder bg-primary-card",
                              attrs: {
                                header: "Food Options",
                                "header-tag": "h4"
                              }
                            },
                            [
                              _c("multiselect", {
                                attrs: {
                                  options: _vm.option_tags,
                                  multiple: true,
                                  "close-on-select": true,
                                  "clear-on-select": false,
                                  "hide-selected": true,
                                  placeholder: "Pick Options For food",
                                  "track-by": "title",
                                  label: "title"
                                },
                                model: {
                                  value: _vm.model.selected_options,
                                  callback: function($$v) {
                                    _vm.$set(_vm.model, "selected_options", $$v)
                                  },
                                  expression: "model.selected_options"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-secondary add-new-option",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      $event.stopPropagation()
                                      return _vm.addNewOption($event)
                                    }
                                  }
                                },
                                [_vm._v("Add New Option")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "clearfix" }),
                              _vm._v(" "),
                              _c(
                                "v-collapse-group",
                                { attrs: { onlyOneActive: true } },
                                [
                                  _vm._l(_vm.model.selected_options, function(
                                    option_tag,
                                    index
                                  ) {
                                    return _c(
                                      "div",
                                      { staticClass: "food-option" },
                                      [
                                        _c(
                                          "v-collapse-wrapper",
                                          { attrs: { active: true } },
                                          [
                                            _c(
                                              "div",
                                              {
                                                directives: [
                                                  {
                                                    name: "collapse-toggle",
                                                    rawName: "v-collapse-toggle"
                                                  }
                                                ],
                                                staticClass: "header"
                                              },
                                              [
                                                _c(
                                                  "h5",
                                                  {
                                                    staticClass: "option-title"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(option_tag.title)
                                                    ),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "option-close",
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            $event.preventDefault()
                                                            $event.stopPropagation()
                                                            return _vm.unselectOption(
                                                              index
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fas fa-close"
                                                        })
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                directives: [
                                                  {
                                                    name: "collapse-content",
                                                    rawName:
                                                      "v-collapse-content"
                                                  }
                                                ],
                                                staticClass: "my-content"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "col-lg-12" },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "form-group"
                                                      },
                                                      [
                                                        _c(
                                                          "label",
                                                          {
                                                            staticStyle: {
                                                              display: "block"
                                                            }
                                                          },
                                                          [
                                                            _c("strong", [
                                                              _vm._v(
                                                                "Selectable Item Numbers"
                                                              )
                                                            ])
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass: "row",
                                                            staticStyle: {
                                                              "margin-left": "0"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "form-group"
                                                              },
                                                              [
                                                                _c(
                                                                  "validate",
                                                                  {
                                                                    attrs: {
                                                                      tag: "div"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "label",
                                                                      [
                                                                        _vm._v(
                                                                          "At Least"
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "input",
                                                                      {
                                                                        directives: [
                                                                          {
                                                                            name:
                                                                              "model",
                                                                            rawName:
                                                                              "v-model",
                                                                            value:
                                                                              option_tag.min,
                                                                            expression:
                                                                              "option_tag.min"
                                                                          }
                                                                        ],
                                                                        staticClass:
                                                                          "form-control",
                                                                        attrs: {
                                                                          name:
                                                                            "min",
                                                                          type:
                                                                            "number",
                                                                          required:
                                                                            "",
                                                                          autofocus:
                                                                            "",
                                                                          placeholder:
                                                                            "0"
                                                                        },
                                                                        domProps: {
                                                                          value:
                                                                            option_tag.min
                                                                        },
                                                                        on: {
                                                                          input: function(
                                                                            $event
                                                                          ) {
                                                                            if (
                                                                              $event
                                                                                .target
                                                                                .composing
                                                                            ) {
                                                                              return
                                                                            }
                                                                            _vm.$set(
                                                                              option_tag,
                                                                              "min",
                                                                              $event
                                                                                .target
                                                                                .value
                                                                            )
                                                                          }
                                                                        }
                                                                      }
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "field-messages",
                                                                      {
                                                                        staticClass:
                                                                          "text-danger",
                                                                        attrs: {
                                                                          name:
                                                                            "min",
                                                                          show:
                                                                            "$invalid && $submitted"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "div",
                                                                          {
                                                                            attrs: {
                                                                              slot:
                                                                                "required"
                                                                            },
                                                                            slot:
                                                                              "required"
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
                                                                staticClass:
                                                                  "form-group",
                                                                staticStyle: {
                                                                  "margin-left":
                                                                    "15px"
                                                                }
                                                              },
                                                              [
                                                                _c("label", [
                                                                  _vm._v("Upto")
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("input", {
                                                                  directives: [
                                                                    {
                                                                      name:
                                                                        "model",
                                                                      rawName:
                                                                        "v-model",
                                                                      value:
                                                                        option_tag.max,
                                                                      expression:
                                                                        "option_tag.max"
                                                                    }
                                                                  ],
                                                                  staticClass:
                                                                    "form-control",
                                                                  attrs: {
                                                                    name: "max",
                                                                    type:
                                                                      "number",
                                                                    autofocus:
                                                                      "",
                                                                    placeholder:
                                                                      "No Limit"
                                                                  },
                                                                  domProps: {
                                                                    value:
                                                                      option_tag.max
                                                                  },
                                                                  on: {
                                                                    input: function(
                                                                      $event
                                                                    ) {
                                                                      if (
                                                                        $event
                                                                          .target
                                                                          .composing
                                                                      ) {
                                                                        return
                                                                      }
                                                                      _vm.$set(
                                                                        option_tag,
                                                                        "max",
                                                                        $event
                                                                          .target
                                                                          .value
                                                                      )
                                                                    }
                                                                  }
                                                                })
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "form-group"
                                                      },
                                                      [
                                                        option_tag
                                                          .selected_sizes
                                                          .length > 0 ||
                                                        _vm.model.new_sizes
                                                          .length > 0
                                                          ? _c(
                                                              "label",
                                                              {
                                                                staticStyle: {
                                                                  display:
                                                                    "block"
                                                                }
                                                              },
                                                              [
                                                                _c("strong", [
                                                                  _vm._v(
                                                                    "Alternative Item Numbers Due to Size"
                                                                  )
                                                                ])
                                                              ]
                                                            )
                                                          : _vm._e(),
                                                        _vm._v(" "),
                                                        _vm._l(
                                                          option_tag.selected_sizes,
                                                          function(item) {
                                                            return _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "form-group",
                                                                staticStyle: {
                                                                  "margin-left":
                                                                    "20px"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "b-form-checkbox",
                                                                  {
                                                                    staticClass:
                                                                      "primarycheck",
                                                                    model: {
                                                                      value:
                                                                        item.enabled,
                                                                      callback: function(
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          item,
                                                                          "enabled",
                                                                          $$v
                                                                        )
                                                                      },
                                                                      expression:
                                                                        "item.enabled"
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        item.name
                                                                      )
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "row",
                                                                    staticStyle: {
                                                                      "margin-left":
                                                                        "30px"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "form-group"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "label",
                                                                          [
                                                                            _vm._v(
                                                                              "At Least"
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "input",
                                                                          {
                                                                            directives: [
                                                                              {
                                                                                name:
                                                                                  "model",
                                                                                rawName:
                                                                                  "v-model",
                                                                                value:
                                                                                  item.min,
                                                                                expression:
                                                                                  "item.min"
                                                                              }
                                                                            ],
                                                                            staticClass:
                                                                              "form-control",
                                                                            attrs: {
                                                                              type:
                                                                                "number",
                                                                              autofocus:
                                                                                "",
                                                                              placeholder:
                                                                                "0",
                                                                              disabled: !item.enabled
                                                                            },
                                                                            domProps: {
                                                                              value:
                                                                                item.min
                                                                            },
                                                                            on: {
                                                                              input: function(
                                                                                $event
                                                                              ) {
                                                                                if (
                                                                                  $event
                                                                                    .target
                                                                                    .composing
                                                                                ) {
                                                                                  return
                                                                                }
                                                                                _vm.$set(
                                                                                  item,
                                                                                  "min",
                                                                                  $event
                                                                                    .target
                                                                                    .value
                                                                                )
                                                                              }
                                                                            }
                                                                          }
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "form-group",
                                                                        staticStyle: {
                                                                          "margin-left":
                                                                            "15px"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "label",
                                                                          [
                                                                            _vm._v(
                                                                              "Upto"
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "input",
                                                                          {
                                                                            directives: [
                                                                              {
                                                                                name:
                                                                                  "model",
                                                                                rawName:
                                                                                  "v-model",
                                                                                value:
                                                                                  item.max,
                                                                                expression:
                                                                                  "item.max"
                                                                              }
                                                                            ],
                                                                            staticClass:
                                                                              "form-control",
                                                                            attrs: {
                                                                              type:
                                                                                "number",
                                                                              autofocus:
                                                                                "",
                                                                              placeholder:
                                                                                "No Limit",
                                                                              disabled: !item.enabled
                                                                            },
                                                                            domProps: {
                                                                              value:
                                                                                item.max
                                                                            },
                                                                            on: {
                                                                              input: function(
                                                                                $event
                                                                              ) {
                                                                                if (
                                                                                  $event
                                                                                    .target
                                                                                    .composing
                                                                                ) {
                                                                                  return
                                                                                }
                                                                                _vm.$set(
                                                                                  item,
                                                                                  "max",
                                                                                  $event
                                                                                    .target
                                                                                    .value
                                                                                )
                                                                              }
                                                                            }
                                                                          }
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                )
                                                              ],
                                                              1
                                                            )
                                                          }
                                                        ),
                                                        _vm._v(" "),
                                                        _vm._l(
                                                          _vm.model.new_sizes,
                                                          function(
                                                            item,
                                                            new_size_index
                                                          ) {
                                                            return _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "form-group",
                                                                staticStyle: {
                                                                  "margin-left":
                                                                    "20px"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "b-form-checkbox",
                                                                  {
                                                                    staticClass:
                                                                      "primarycheck",
                                                                    model: {
                                                                      value:
                                                                        option_tag
                                                                          .new_sizes[
                                                                          new_size_index
                                                                        ]
                                                                          .enabled,
                                                                      callback: function(
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          option_tag
                                                                            .new_sizes[
                                                                            new_size_index
                                                                          ],
                                                                          "enabled",
                                                                          $$v
                                                                        )
                                                                      },
                                                                      expression:
                                                                        "option_tag.new_sizes[new_size_index].enabled"
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        item.name
                                                                      )
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "row",
                                                                    staticStyle: {
                                                                      "margin-left":
                                                                        "30px"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "form-group"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "label",
                                                                          [
                                                                            _vm._v(
                                                                              "At Least"
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "input",
                                                                          {
                                                                            directives: [
                                                                              {
                                                                                name:
                                                                                  "model",
                                                                                rawName:
                                                                                  "v-model",
                                                                                value:
                                                                                  option_tag
                                                                                    .new_sizes[
                                                                                    new_size_index
                                                                                  ]
                                                                                    .min,
                                                                                expression:
                                                                                  "option_tag.new_sizes[new_size_index].min"
                                                                              }
                                                                            ],
                                                                            staticClass:
                                                                              "form-control",
                                                                            attrs: {
                                                                              type:
                                                                                "number",
                                                                              autofocus:
                                                                                "",
                                                                              placeholder:
                                                                                "0",
                                                                              disabled: !option_tag
                                                                                .new_sizes[
                                                                                new_size_index
                                                                              ]
                                                                                .enabled
                                                                            },
                                                                            domProps: {
                                                                              value:
                                                                                option_tag
                                                                                  .new_sizes[
                                                                                  new_size_index
                                                                                ]
                                                                                  .min
                                                                            },
                                                                            on: {
                                                                              input: function(
                                                                                $event
                                                                              ) {
                                                                                if (
                                                                                  $event
                                                                                    .target
                                                                                    .composing
                                                                                ) {
                                                                                  return
                                                                                }
                                                                                _vm.$set(
                                                                                  option_tag
                                                                                    .new_sizes[
                                                                                    new_size_index
                                                                                  ],
                                                                                  "min",
                                                                                  $event
                                                                                    .target
                                                                                    .value
                                                                                )
                                                                              }
                                                                            }
                                                                          }
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "form-group",
                                                                        staticStyle: {
                                                                          "margin-left":
                                                                            "15px"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "label",
                                                                          [
                                                                            _vm._v(
                                                                              "Upto"
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "input",
                                                                          {
                                                                            directives: [
                                                                              {
                                                                                name:
                                                                                  "model",
                                                                                rawName:
                                                                                  "v-model",
                                                                                value:
                                                                                  option_tag
                                                                                    .new_sizes[
                                                                                    new_size_index
                                                                                  ]
                                                                                    .max,
                                                                                expression:
                                                                                  "option_tag.new_sizes[new_size_index].max"
                                                                              }
                                                                            ],
                                                                            staticClass:
                                                                              "form-control",
                                                                            attrs: {
                                                                              type:
                                                                                "number",
                                                                              autofocus:
                                                                                "",
                                                                              placeholder:
                                                                                "No Limit",
                                                                              disabled: !option_tag
                                                                                .new_sizes[
                                                                                new_size_index
                                                                              ]
                                                                                .enabled
                                                                            },
                                                                            domProps: {
                                                                              value:
                                                                                option_tag
                                                                                  .new_sizes[
                                                                                  new_size_index
                                                                                ]
                                                                                  .max
                                                                            },
                                                                            on: {
                                                                              input: function(
                                                                                $event
                                                                              ) {
                                                                                if (
                                                                                  $event
                                                                                    .target
                                                                                    .composing
                                                                                ) {
                                                                                  return
                                                                                }
                                                                                _vm.$set(
                                                                                  option_tag
                                                                                    .new_sizes[
                                                                                    new_size_index
                                                                                  ],
                                                                                  "max",
                                                                                  $event
                                                                                    .target
                                                                                    .value
                                                                                )
                                                                              }
                                                                            }
                                                                          }
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                )
                                                              ],
                                                              1
                                                            )
                                                          }
                                                        )
                                                      ],
                                                      2
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "option-item-holder"
                                                  },
                                                  [
                                                    _c(
                                                      "h3",
                                                      {
                                                        staticClass:
                                                          "option-item-header-title"
                                                      },
                                                      [_vm._v("Option Items")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-secondary add-new-option-item",
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            $event.preventDefault()
                                                            $event.stopPropagation()
                                                            return _vm.addNewItem(
                                                              option_tag
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [_vm._v("Add Item")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("div", {
                                                      staticClass: "clearfix"
                                                    }),
                                                    _vm._v(" "),
                                                    _vm._l(
                                                      option_tag.option_items,
                                                      function(
                                                        option_item,
                                                        index2
                                                      ) {
                                                        return _c(
                                                          "div",
                                                          [
                                                            _c(
                                                              "b-card",
                                                              {
                                                                staticClass:
                                                                  "option-item",
                                                                attrs: {
                                                                  "show-footer":
                                                                    ""
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "h6",
                                                                  {
                                                                    staticClass:
                                                                      "option-item-name",
                                                                    attrs: {
                                                                      slot:
                                                                        "header"
                                                                    },
                                                                    slot:
                                                                      "header"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        option_item.name
                                                                      )
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "col-lg-12"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "row"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "form-group",
                                                                            staticStyle: {
                                                                              "margin-top":
                                                                                "10px"
                                                                            }
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "label",
                                                                              {
                                                                                staticStyle: {
                                                                                  width:
                                                                                    "100%"
                                                                                }
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "Use this Item ?"
                                                                                )
                                                                              ]
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "toggle-button",
                                                                              {
                                                                                attrs: {
                                                                                  labels: {
                                                                                    checked:
                                                                                      "Yes",
                                                                                    unchecked:
                                                                                      "No"
                                                                                  },
                                                                                  sync: true,
                                                                                  color: {
                                                                                    checked:
                                                                                      "#09BD8F",
                                                                                    unchecked:
                                                                                      "#dc6460"
                                                                                  }
                                                                                },
                                                                                model: {
                                                                                  value:
                                                                                    option_item.is_enabled,
                                                                                  callback: function(
                                                                                    $$v
                                                                                  ) {
                                                                                    _vm.$set(
                                                                                      option_item,
                                                                                      "is_enabled",
                                                                                      $$v
                                                                                    )
                                                                                  },
                                                                                  expression:
                                                                                    "option_item.is_enabled"
                                                                                }
                                                                              }
                                                                            )
                                                                          ],
                                                                          1
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "form-group"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "label",
                                                                      [
                                                                        _vm._v(
                                                                          "Name"
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "input",
                                                                      {
                                                                        directives: [
                                                                          {
                                                                            name:
                                                                              "model",
                                                                            rawName:
                                                                              "v-model",
                                                                            value:
                                                                              option_item.name,
                                                                            expression:
                                                                              "option_item.name"
                                                                          }
                                                                        ],
                                                                        attrs: {
                                                                          type:
                                                                            "text",
                                                                          disabled:
                                                                            ""
                                                                        },
                                                                        domProps: {
                                                                          value:
                                                                            option_item.name
                                                                        },
                                                                        on: {
                                                                          input: function(
                                                                            $event
                                                                          ) {
                                                                            if (
                                                                              $event
                                                                                .target
                                                                                .composing
                                                                            ) {
                                                                              return
                                                                            }
                                                                            _vm.$set(
                                                                              option_item,
                                                                              "name",
                                                                              $event
                                                                                .target
                                                                                .value
                                                                            )
                                                                          }
                                                                        }
                                                                      }
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "form-group"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "label",
                                                                      [
                                                                        _vm._v(
                                                                          "Price"
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "input",
                                                                      {
                                                                        directives: [
                                                                          {
                                                                            name:
                                                                              "model",
                                                                            rawName:
                                                                              "v-model",
                                                                            value:
                                                                              option_item.price,
                                                                            expression:
                                                                              "option_item.price"
                                                                          }
                                                                        ],
                                                                        attrs: {
                                                                          type:
                                                                            "number",
                                                                          disabled: !option_item.is_enabled
                                                                        },
                                                                        domProps: {
                                                                          value:
                                                                            option_item.price
                                                                        },
                                                                        on: {
                                                                          input: function(
                                                                            $event
                                                                          ) {
                                                                            if (
                                                                              $event
                                                                                .target
                                                                                .composing
                                                                            ) {
                                                                              return
                                                                            }
                                                                            _vm.$set(
                                                                              option_item,
                                                                              "price",
                                                                              $event
                                                                                .target
                                                                                .value
                                                                            )
                                                                          }
                                                                        }
                                                                      }
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "form-group"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "label",
                                                                      [
                                                                        _vm._v(
                                                                          "Upto"
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "input",
                                                                      {
                                                                        directives: [
                                                                          {
                                                                            name:
                                                                              "model",
                                                                            rawName:
                                                                              "v-model",
                                                                            value:
                                                                              option_item.max,
                                                                            expression:
                                                                              "option_item.max"
                                                                          }
                                                                        ],
                                                                        attrs: {
                                                                          type:
                                                                            "number",
                                                                          disabled: !option_item.is_enabled,
                                                                          placeholder:
                                                                            "No Limit"
                                                                        },
                                                                        domProps: {
                                                                          value:
                                                                            option_item.max
                                                                        },
                                                                        on: {
                                                                          input: function(
                                                                            $event
                                                                          ) {
                                                                            if (
                                                                              $event
                                                                                .target
                                                                                .composing
                                                                            ) {
                                                                              return
                                                                            }
                                                                            _vm.$set(
                                                                              option_item,
                                                                              "max",
                                                                              $event
                                                                                .target
                                                                                .value
                                                                            )
                                                                          }
                                                                        }
                                                                      }
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      }
                                                    ),
                                                    _vm._v(" "),
                                                    _vm._l(
                                                      option_tag.new_items,
                                                      function(
                                                        new_item,
                                                        new_item_index
                                                      ) {
                                                        return _c(
                                                          "div",
                                                          [
                                                            _c(
                                                              "b-card",
                                                              {
                                                                staticClass:
                                                                  "option-item",
                                                                attrs: {
                                                                  "show-footer":
                                                                    ""
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "h6",
                                                                  {
                                                                    staticClass:
                                                                      "option-item-name",
                                                                    attrs: {
                                                                      slot:
                                                                        "header"
                                                                    },
                                                                    slot:
                                                                      "header"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        new_item.name
                                                                      )
                                                                    ),
                                                                    _c(
                                                                      "span",
                                                                      {
                                                                        staticClass:
                                                                          "new-option-item-close",
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            $event.preventDefault()
                                                                            $event.stopPropagation()
                                                                            return _vm.removeNewOptionItem(
                                                                              option_tag,
                                                                              new_item_index
                                                                            )
                                                                          }
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "i",
                                                                          {
                                                                            staticClass:
                                                                              "fas fa-close"
                                                                          }
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "col-lg-12"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "row"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "form-group",
                                                                            staticStyle: {
                                                                              "margin-top":
                                                                                "10px"
                                                                            }
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "label",
                                                                              {
                                                                                staticStyle: {
                                                                                  width:
                                                                                    "100%"
                                                                                }
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "Use this Item ?"
                                                                                )
                                                                              ]
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "toggle-button",
                                                                              {
                                                                                attrs: {
                                                                                  labels: {
                                                                                    checked:
                                                                                      "Yes",
                                                                                    unchecked:
                                                                                      "No"
                                                                                  },
                                                                                  sync: true,
                                                                                  color: {
                                                                                    checked:
                                                                                      "#09BD8F",
                                                                                    unchecked:
                                                                                      "#dc6460"
                                                                                  }
                                                                                },
                                                                                model: {
                                                                                  value:
                                                                                    new_item.is_enabled,
                                                                                  callback: function(
                                                                                    $$v
                                                                                  ) {
                                                                                    _vm.$set(
                                                                                      new_item,
                                                                                      "is_enabled",
                                                                                      $$v
                                                                                    )
                                                                                  },
                                                                                  expression:
                                                                                    "new_item.is_enabled"
                                                                                }
                                                                              }
                                                                            )
                                                                          ],
                                                                          1
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "form-group"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "validate",
                                                                      {
                                                                        attrs: {
                                                                          tag:
                                                                            "div"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "label",
                                                                          [
                                                                            _vm._v(
                                                                              "Name"
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "input",
                                                                          {
                                                                            directives: [
                                                                              {
                                                                                name:
                                                                                  "model",
                                                                                rawName:
                                                                                  "v-model",
                                                                                value:
                                                                                  new_item.name,
                                                                                expression:
                                                                                  "new_item.name"
                                                                              }
                                                                            ],
                                                                            attrs: {
                                                                              type:
                                                                                "text",
                                                                              disabled: !new_item.is_enabled,
                                                                              placeholder:
                                                                                "Enter Item Name",
                                                                              required:
                                                                                "",
                                                                              autofocus:
                                                                                "",
                                                                              name:
                                                                                "new-item-" +
                                                                                new_item_index
                                                                            },
                                                                            domProps: {
                                                                              value:
                                                                                new_item.name
                                                                            },
                                                                            on: {
                                                                              input: function(
                                                                                $event
                                                                              ) {
                                                                                if (
                                                                                  $event
                                                                                    .target
                                                                                    .composing
                                                                                ) {
                                                                                  return
                                                                                }
                                                                                _vm.$set(
                                                                                  new_item,
                                                                                  "name",
                                                                                  $event
                                                                                    .target
                                                                                    .value
                                                                                )
                                                                              }
                                                                            }
                                                                          }
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "field-messages",
                                                                          {
                                                                            staticClass:
                                                                              "text-danger",
                                                                            attrs: {
                                                                              name:
                                                                                "new-item-" +
                                                                                index +
                                                                                "-" +
                                                                                new_item_index,
                                                                              show:
                                                                                "$invalid && $submitted"
                                                                            }
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "div",
                                                                              {
                                                                                attrs: {
                                                                                  slot:
                                                                                    "required"
                                                                                },
                                                                                slot:
                                                                                  "required"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "Item Name is required"
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
                                                                    staticClass:
                                                                      "form-group"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "label",
                                                                      [
                                                                        _vm._v(
                                                                          "Price"
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "input",
                                                                      {
                                                                        directives: [
                                                                          {
                                                                            name:
                                                                              "model",
                                                                            rawName:
                                                                              "v-model",
                                                                            value:
                                                                              new_item.price,
                                                                            expression:
                                                                              "new_item.price"
                                                                          }
                                                                        ],
                                                                        attrs: {
                                                                          type:
                                                                            "number",
                                                                          disabled: !new_item.is_enabled
                                                                        },
                                                                        domProps: {
                                                                          value:
                                                                            new_item.price
                                                                        },
                                                                        on: {
                                                                          input: function(
                                                                            $event
                                                                          ) {
                                                                            if (
                                                                              $event
                                                                                .target
                                                                                .composing
                                                                            ) {
                                                                              return
                                                                            }
                                                                            _vm.$set(
                                                                              new_item,
                                                                              "price",
                                                                              $event
                                                                                .target
                                                                                .value
                                                                            )
                                                                          }
                                                                        }
                                                                      }
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "form-group"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "label",
                                                                      [
                                                                        _vm._v(
                                                                          "Upto"
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "input",
                                                                      {
                                                                        directives: [
                                                                          {
                                                                            name:
                                                                              "model",
                                                                            rawName:
                                                                              "v-model",
                                                                            value:
                                                                              new_item.max,
                                                                            expression:
                                                                              "new_item.max"
                                                                          }
                                                                        ],
                                                                        attrs: {
                                                                          type:
                                                                            "number",
                                                                          disabled: !new_item.is_enabled,
                                                                          placeholder:
                                                                            "No Limit"
                                                                        },
                                                                        domProps: {
                                                                          value:
                                                                            new_item.max
                                                                        },
                                                                        on: {
                                                                          input: function(
                                                                            $event
                                                                          ) {
                                                                            if (
                                                                              $event
                                                                                .target
                                                                                .composing
                                                                            ) {
                                                                              return
                                                                            }
                                                                            _vm.$set(
                                                                              new_item,
                                                                              "max",
                                                                              $event
                                                                                .target
                                                                                .value
                                                                            )
                                                                          }
                                                                        }
                                                                      }
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      }
                                                    )
                                                  ],
                                                  2
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  }),
                                  _vm._v(" "),
                                  _vm._l(_vm.model.new_options, function(
                                    option_tag,
                                    index
                                  ) {
                                    return _c(
                                      "div",
                                      { staticClass: "food-option" },
                                      [
                                        _c(
                                          "v-collapse-wrapper",
                                          { attrs: { active: true } },
                                          [
                                            _c(
                                              "div",
                                              {
                                                directives: [
                                                  {
                                                    name: "collapse-toggle",
                                                    rawName: "v-collapse-toggle"
                                                  }
                                                ],
                                                staticClass: "header"
                                              },
                                              [
                                                _c(
                                                  "h5",
                                                  {
                                                    staticClass: "option-title"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(option_tag.title)
                                                    ),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "new-option-span"
                                                      },
                                                      [_vm._v("(new)")]
                                                    ),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "option-close",
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            $event.preventDefault()
                                                            $event.stopPropagation()
                                                            return _vm.removeNewOption(
                                                              index
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fas fa-close"
                                                        })
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                directives: [
                                                  {
                                                    name: "collapse-content",
                                                    rawName:
                                                      "v-collapse-content"
                                                  }
                                                ],
                                                staticClass: "my-content"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "col-lg-12" },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "form-group new-option-title-input"
                                                      },
                                                      [
                                                        _c(
                                                          "validate",
                                                          {
                                                            attrs: {
                                                              tag: "div"
                                                            }
                                                          },
                                                          [
                                                            _c("label", [
                                                              _vm._v(
                                                                "Option Title"
                                                              )
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("input", {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    option_tag.title,
                                                                  expression:
                                                                    "option_tag.title"
                                                                }
                                                              ],
                                                              staticClass:
                                                                "form-control",
                                                              attrs: {
                                                                name:
                                                                  "option-new-title-" +
                                                                  index,
                                                                type: "text",
                                                                required: "",
                                                                autofocus: "",
                                                                placeholder:
                                                                  "Enter option title"
                                                              },
                                                              domProps: {
                                                                value:
                                                                  option_tag.title
                                                              },
                                                              on: {
                                                                input: function(
                                                                  $event
                                                                ) {
                                                                  if (
                                                                    $event
                                                                      .target
                                                                      .composing
                                                                  ) {
                                                                    return
                                                                  }
                                                                  _vm.$set(
                                                                    option_tag,
                                                                    "title",
                                                                    $event
                                                                      .target
                                                                      .value
                                                                  )
                                                                }
                                                              }
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "field-messages",
                                                              {
                                                                staticClass:
                                                                  "text-danger",
                                                                attrs: {
                                                                  name:
                                                                    "option-new-title-" +
                                                                    index,
                                                                  show:
                                                                    "$invalid && $submitted"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    attrs: {
                                                                      slot:
                                                                        "required"
                                                                    },
                                                                    slot:
                                                                      "required"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Option Title is required"
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
                                                        staticClass:
                                                          "form-group"
                                                      },
                                                      [
                                                        _c(
                                                          "label",
                                                          {
                                                            staticStyle: {
                                                              display: "block"
                                                            }
                                                          },
                                                          [
                                                            _c("strong", [
                                                              _vm._v(
                                                                "Selectable Item Numbers"
                                                              )
                                                            ])
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass: "row",
                                                            staticStyle: {
                                                              "margin-left": "0"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "form-group"
                                                              },
                                                              [
                                                                _c(
                                                                  "validate",
                                                                  {
                                                                    attrs: {
                                                                      tag: "div"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "label",
                                                                      [
                                                                        _vm._v(
                                                                          "At Least"
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "input",
                                                                      {
                                                                        directives: [
                                                                          {
                                                                            name:
                                                                              "model",
                                                                            rawName:
                                                                              "v-model",
                                                                            value:
                                                                              option_tag.min,
                                                                            expression:
                                                                              "option_tag.min"
                                                                          }
                                                                        ],
                                                                        staticClass:
                                                                          "form-control",
                                                                        attrs: {
                                                                          name:
                                                                            "min",
                                                                          type:
                                                                            "number",
                                                                          required:
                                                                            "",
                                                                          autofocus:
                                                                            "",
                                                                          placeholder:
                                                                            "0"
                                                                        },
                                                                        domProps: {
                                                                          value:
                                                                            option_tag.min
                                                                        },
                                                                        on: {
                                                                          input: function(
                                                                            $event
                                                                          ) {
                                                                            if (
                                                                              $event
                                                                                .target
                                                                                .composing
                                                                            ) {
                                                                              return
                                                                            }
                                                                            _vm.$set(
                                                                              option_tag,
                                                                              "min",
                                                                              $event
                                                                                .target
                                                                                .value
                                                                            )
                                                                          }
                                                                        }
                                                                      }
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "field-messages",
                                                                      {
                                                                        staticClass:
                                                                          "text-danger",
                                                                        attrs: {
                                                                          name:
                                                                            "min",
                                                                          show:
                                                                            "$invalid && $submitted"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "div",
                                                                          {
                                                                            attrs: {
                                                                              slot:
                                                                                "required"
                                                                            },
                                                                            slot:
                                                                              "required"
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
                                                                staticClass:
                                                                  "form-group",
                                                                staticStyle: {
                                                                  "margin-left":
                                                                    "15px"
                                                                }
                                                              },
                                                              [
                                                                _c("label", [
                                                                  _vm._v("Upto")
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("input", {
                                                                  directives: [
                                                                    {
                                                                      name:
                                                                        "model",
                                                                      rawName:
                                                                        "v-model",
                                                                      value:
                                                                        option_tag.max,
                                                                      expression:
                                                                        "option_tag.max"
                                                                    }
                                                                  ],
                                                                  staticClass:
                                                                    "form-control",
                                                                  attrs: {
                                                                    name: "max",
                                                                    type:
                                                                      "number",
                                                                    autofocus:
                                                                      "",
                                                                    placeholder:
                                                                      "No Limit"
                                                                  },
                                                                  domProps: {
                                                                    value:
                                                                      option_tag.max
                                                                  },
                                                                  on: {
                                                                    input: function(
                                                                      $event
                                                                    ) {
                                                                      if (
                                                                        $event
                                                                          .target
                                                                          .composing
                                                                      ) {
                                                                        return
                                                                      }
                                                                      _vm.$set(
                                                                        option_tag,
                                                                        "max",
                                                                        $event
                                                                          .target
                                                                          .value
                                                                      )
                                                                    }
                                                                  }
                                                                })
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "form-group"
                                                      },
                                                      [
                                                        option_tag
                                                          .selected_sizes
                                                          .length > 0 ||
                                                        _vm.model.new_sizes
                                                          .length > 0
                                                          ? _c(
                                                              "label",
                                                              {
                                                                staticStyle: {
                                                                  display:
                                                                    "block"
                                                                }
                                                              },
                                                              [
                                                                _c("strong", [
                                                                  _vm._v(
                                                                    "Alternative Item Numbers Due to Size"
                                                                  )
                                                                ])
                                                              ]
                                                            )
                                                          : _vm._e(),
                                                        _vm._v(" "),
                                                        _vm._l(
                                                          option_tag.selected_sizes,
                                                          function(
                                                            item,
                                                            index
                                                          ) {
                                                            return _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "form-group",
                                                                staticStyle: {
                                                                  "margin-left":
                                                                    "20px"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "b-form-checkbox",
                                                                  {
                                                                    staticClass:
                                                                      "primarycheck",
                                                                    model: {
                                                                      value:
                                                                        item.enabled,
                                                                      callback: function(
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          item,
                                                                          "enabled",
                                                                          $$v
                                                                        )
                                                                      },
                                                                      expression:
                                                                        "item.enabled"
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        item.name
                                                                      )
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "row",
                                                                    staticStyle: {
                                                                      "margin-left":
                                                                        "30px"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "form-group"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "label",
                                                                          [
                                                                            _vm._v(
                                                                              "At Least"
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "input",
                                                                          {
                                                                            directives: [
                                                                              {
                                                                                name:
                                                                                  "model",
                                                                                rawName:
                                                                                  "v-model",
                                                                                value:
                                                                                  item.min,
                                                                                expression:
                                                                                  "item.min"
                                                                              }
                                                                            ],
                                                                            staticClass:
                                                                              "form-control",
                                                                            attrs: {
                                                                              type:
                                                                                "number",
                                                                              autofocus:
                                                                                "",
                                                                              placeholder:
                                                                                "0",
                                                                              disabled: !item.enabled
                                                                            },
                                                                            domProps: {
                                                                              value:
                                                                                item.min
                                                                            },
                                                                            on: {
                                                                              input: function(
                                                                                $event
                                                                              ) {
                                                                                if (
                                                                                  $event
                                                                                    .target
                                                                                    .composing
                                                                                ) {
                                                                                  return
                                                                                }
                                                                                _vm.$set(
                                                                                  item,
                                                                                  "min",
                                                                                  $event
                                                                                    .target
                                                                                    .value
                                                                                )
                                                                              }
                                                                            }
                                                                          }
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "form-group",
                                                                        staticStyle: {
                                                                          "margin-left":
                                                                            "15px"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "label",
                                                                          [
                                                                            _vm._v(
                                                                              "Upto"
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "input",
                                                                          {
                                                                            directives: [
                                                                              {
                                                                                name:
                                                                                  "model",
                                                                                rawName:
                                                                                  "v-model",
                                                                                value:
                                                                                  item.max,
                                                                                expression:
                                                                                  "item.max"
                                                                              }
                                                                            ],
                                                                            staticClass:
                                                                              "form-control",
                                                                            attrs: {
                                                                              type:
                                                                                "number",
                                                                              autofocus:
                                                                                "",
                                                                              placeholder:
                                                                                "No Limit",
                                                                              disabled: !item.enabled
                                                                            },
                                                                            domProps: {
                                                                              value:
                                                                                item.max
                                                                            },
                                                                            on: {
                                                                              input: function(
                                                                                $event
                                                                              ) {
                                                                                if (
                                                                                  $event
                                                                                    .target
                                                                                    .composing
                                                                                ) {
                                                                                  return
                                                                                }
                                                                                _vm.$set(
                                                                                  item,
                                                                                  "max",
                                                                                  $event
                                                                                    .target
                                                                                    .value
                                                                                )
                                                                              }
                                                                            }
                                                                          }
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                )
                                                              ],
                                                              1
                                                            )
                                                          }
                                                        ),
                                                        _vm._v(" "),
                                                        _vm._l(
                                                          _vm.model.new_sizes,
                                                          function(
                                                            item,
                                                            new_size_index
                                                          ) {
                                                            return _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "form-group",
                                                                staticStyle: {
                                                                  "margin-left":
                                                                    "20px"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "b-form-checkbox",
                                                                  {
                                                                    staticClass:
                                                                      "primarycheck",
                                                                    model: {
                                                                      value:
                                                                        option_tag
                                                                          .new_sizes[
                                                                          new_size_index
                                                                        ]
                                                                          .enabled,
                                                                      callback: function(
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          option_tag
                                                                            .new_sizes[
                                                                            new_size_index
                                                                          ],
                                                                          "enabled",
                                                                          $$v
                                                                        )
                                                                      },
                                                                      expression:
                                                                        "option_tag.new_sizes[new_size_index].enabled"
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        item.name
                                                                      )
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "row",
                                                                    staticStyle: {
                                                                      "margin-left":
                                                                        "30px"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "form-group"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "label",
                                                                          [
                                                                            _vm._v(
                                                                              "At Least"
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "input",
                                                                          {
                                                                            directives: [
                                                                              {
                                                                                name:
                                                                                  "model",
                                                                                rawName:
                                                                                  "v-model",
                                                                                value:
                                                                                  option_tag
                                                                                    .new_sizes[
                                                                                    new_size_index
                                                                                  ]
                                                                                    .min,
                                                                                expression:
                                                                                  "option_tag.new_sizes[new_size_index].min"
                                                                              }
                                                                            ],
                                                                            staticClass:
                                                                              "form-control",
                                                                            attrs: {
                                                                              type:
                                                                                "number",
                                                                              autofocus:
                                                                                "",
                                                                              placeholder:
                                                                                "0",
                                                                              disabled: !option_tag
                                                                                .new_sizes[
                                                                                new_size_index
                                                                              ]
                                                                                .enabled
                                                                            },
                                                                            domProps: {
                                                                              value:
                                                                                option_tag
                                                                                  .new_sizes[
                                                                                  new_size_index
                                                                                ]
                                                                                  .min
                                                                            },
                                                                            on: {
                                                                              input: function(
                                                                                $event
                                                                              ) {
                                                                                if (
                                                                                  $event
                                                                                    .target
                                                                                    .composing
                                                                                ) {
                                                                                  return
                                                                                }
                                                                                _vm.$set(
                                                                                  option_tag
                                                                                    .new_sizes[
                                                                                    new_size_index
                                                                                  ],
                                                                                  "min",
                                                                                  $event
                                                                                    .target
                                                                                    .value
                                                                                )
                                                                              }
                                                                            }
                                                                          }
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "form-group",
                                                                        staticStyle: {
                                                                          "margin-left":
                                                                            "15px"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "label",
                                                                          [
                                                                            _vm._v(
                                                                              "Upto"
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "input",
                                                                          {
                                                                            directives: [
                                                                              {
                                                                                name:
                                                                                  "model",
                                                                                rawName:
                                                                                  "v-model",
                                                                                value:
                                                                                  option_tag
                                                                                    .new_sizes[
                                                                                    new_size_index
                                                                                  ]
                                                                                    .max,
                                                                                expression:
                                                                                  "option_tag.new_sizes[new_size_index].max"
                                                                              }
                                                                            ],
                                                                            staticClass:
                                                                              "form-control",
                                                                            attrs: {
                                                                              type:
                                                                                "number",
                                                                              autofocus:
                                                                                "",
                                                                              placeholder:
                                                                                "No Limit",
                                                                              disabled: !option_tag
                                                                                .new_sizes[
                                                                                new_size_index
                                                                              ]
                                                                                .enabled
                                                                            },
                                                                            domProps: {
                                                                              value:
                                                                                option_tag
                                                                                  .new_sizes[
                                                                                  new_size_index
                                                                                ]
                                                                                  .max
                                                                            },
                                                                            on: {
                                                                              input: function(
                                                                                $event
                                                                              ) {
                                                                                if (
                                                                                  $event
                                                                                    .target
                                                                                    .composing
                                                                                ) {
                                                                                  return
                                                                                }
                                                                                _vm.$set(
                                                                                  option_tag
                                                                                    .new_sizes[
                                                                                    new_size_index
                                                                                  ],
                                                                                  "max",
                                                                                  $event
                                                                                    .target
                                                                                    .value
                                                                                )
                                                                              }
                                                                            }
                                                                          }
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                )
                                                              ],
                                                              1
                                                            )
                                                          }
                                                        )
                                                      ],
                                                      2
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "option-item-holder"
                                                  },
                                                  [
                                                    _c(
                                                      "h3",
                                                      {
                                                        staticClass:
                                                          "option-item-header-title"
                                                      },
                                                      [_vm._v("Option Items")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-secondary add-new-option-item",
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            $event.preventDefault()
                                                            $event.stopPropagation()
                                                            return _vm.addNewItem(
                                                              option_tag
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [_vm._v("Add Item")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("div", {
                                                      staticClass: "clearfix"
                                                    }),
                                                    _vm._v(" "),
                                                    _vm._l(
                                                      option_tag.new_items,
                                                      function(
                                                        option_item,
                                                        index2
                                                      ) {
                                                        return _c(
                                                          "div",
                                                          [
                                                            _c(
                                                              "b-card",
                                                              {
                                                                staticClass:
                                                                  "option-item",
                                                                attrs: {
                                                                  "show-footer":
                                                                    ""
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "h6",
                                                                  {
                                                                    staticClass:
                                                                      "option-item-name",
                                                                    attrs: {
                                                                      slot:
                                                                        "header"
                                                                    },
                                                                    slot:
                                                                      "header"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        option_item.name
                                                                      )
                                                                    ),
                                                                    _c(
                                                                      "span",
                                                                      {
                                                                        staticClass:
                                                                          "new-option-item-close",
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            $event.preventDefault()
                                                                            $event.stopPropagation()
                                                                            return _vm.removeNewOptionItem(
                                                                              option_tag,
                                                                              index2
                                                                            )
                                                                          }
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "i",
                                                                          {
                                                                            staticClass:
                                                                              "fas fa-close"
                                                                          }
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "col-lg-12"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "row"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "form-group",
                                                                            staticStyle: {
                                                                              "margin-top":
                                                                                "10px"
                                                                            }
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "label",
                                                                              {
                                                                                staticStyle: {
                                                                                  width:
                                                                                    "100%"
                                                                                }
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "Use this Item ?"
                                                                                )
                                                                              ]
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "toggle-button",
                                                                              {
                                                                                attrs: {
                                                                                  labels: {
                                                                                    checked:
                                                                                      "Yes",
                                                                                    unchecked:
                                                                                      "No"
                                                                                  },
                                                                                  sync: true,
                                                                                  color: {
                                                                                    checked:
                                                                                      "#09BD8F",
                                                                                    unchecked:
                                                                                      "#dc6460"
                                                                                  }
                                                                                },
                                                                                model: {
                                                                                  value:
                                                                                    option_item.is_enabled,
                                                                                  callback: function(
                                                                                    $$v
                                                                                  ) {
                                                                                    _vm.$set(
                                                                                      option_item,
                                                                                      "is_enabled",
                                                                                      $$v
                                                                                    )
                                                                                  },
                                                                                  expression:
                                                                                    "option_item.is_enabled"
                                                                                }
                                                                              }
                                                                            )
                                                                          ],
                                                                          1
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "form-group"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "validate",
                                                                      {
                                                                        attrs: {
                                                                          tag:
                                                                            "div"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "label",
                                                                          [
                                                                            _vm._v(
                                                                              "Name"
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "input",
                                                                          {
                                                                            directives: [
                                                                              {
                                                                                name:
                                                                                  "model",
                                                                                rawName:
                                                                                  "v-model",
                                                                                value:
                                                                                  option_item.name,
                                                                                expression:
                                                                                  "option_item.name"
                                                                              }
                                                                            ],
                                                                            attrs: {
                                                                              type:
                                                                                "text",
                                                                              name:
                                                                                "new-option-tag-item-name-" +
                                                                                index +
                                                                                "-" +
                                                                                index2,
                                                                              disabled: !option_item.is_enabled,
                                                                              autofocus:
                                                                                "",
                                                                              required:
                                                                                ""
                                                                            },
                                                                            domProps: {
                                                                              value:
                                                                                option_item.name
                                                                            },
                                                                            on: {
                                                                              input: function(
                                                                                $event
                                                                              ) {
                                                                                if (
                                                                                  $event
                                                                                    .target
                                                                                    .composing
                                                                                ) {
                                                                                  return
                                                                                }
                                                                                _vm.$set(
                                                                                  option_item,
                                                                                  "name",
                                                                                  $event
                                                                                    .target
                                                                                    .value
                                                                                )
                                                                              }
                                                                            }
                                                                          }
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "field-messages",
                                                                          {
                                                                            staticClass:
                                                                              "text-danger",
                                                                            attrs: {
                                                                              name:
                                                                                "new-option-tag-item-name-" +
                                                                                index +
                                                                                "-" +
                                                                                index2,
                                                                              show:
                                                                                "$invalid && $submitted"
                                                                            }
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "div",
                                                                              {
                                                                                attrs: {
                                                                                  slot:
                                                                                    "required"
                                                                                },
                                                                                slot:
                                                                                  "required"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "Item Name is required"
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
                                                                    staticClass:
                                                                      "form-group"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "label",
                                                                      [
                                                                        _vm._v(
                                                                          "Price"
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "input",
                                                                      {
                                                                        directives: [
                                                                          {
                                                                            name:
                                                                              "model",
                                                                            rawName:
                                                                              "v-model",
                                                                            value:
                                                                              option_item.price,
                                                                            expression:
                                                                              "option_item.price"
                                                                          }
                                                                        ],
                                                                        attrs: {
                                                                          type:
                                                                            "number",
                                                                          disabled: !option_item.is_enabled
                                                                        },
                                                                        domProps: {
                                                                          value:
                                                                            option_item.price
                                                                        },
                                                                        on: {
                                                                          input: function(
                                                                            $event
                                                                          ) {
                                                                            if (
                                                                              $event
                                                                                .target
                                                                                .composing
                                                                            ) {
                                                                              return
                                                                            }
                                                                            _vm.$set(
                                                                              option_item,
                                                                              "price",
                                                                              $event
                                                                                .target
                                                                                .value
                                                                            )
                                                                          }
                                                                        }
                                                                      }
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "form-group"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "label",
                                                                      [
                                                                        _vm._v(
                                                                          "Upto"
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "input",
                                                                      {
                                                                        directives: [
                                                                          {
                                                                            name:
                                                                              "model",
                                                                            rawName:
                                                                              "v-model",
                                                                            value:
                                                                              option_item.max,
                                                                            expression:
                                                                              "option_item.max"
                                                                          }
                                                                        ],
                                                                        attrs: {
                                                                          type:
                                                                            "number",
                                                                          disabled: !option_item.is_enabled,
                                                                          placeholder:
                                                                            "No Limit"
                                                                        },
                                                                        domProps: {
                                                                          value:
                                                                            option_item.max
                                                                        },
                                                                        on: {
                                                                          input: function(
                                                                            $event
                                                                          ) {
                                                                            if (
                                                                              $event
                                                                                .target
                                                                                .composing
                                                                            ) {
                                                                              return
                                                                            }
                                                                            _vm.$set(
                                                                              option_item,
                                                                              "max",
                                                                              $event
                                                                                .target
                                                                                .value
                                                                            )
                                                                          }
                                                                        }
                                                                      }
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      }
                                                    )
                                                  ],
                                                  2
                                                )
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
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "clearfix" })
                            ],
                            1
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
                                _vm._v("Food Menu added successfully")
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

/***/ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css":
/*!*******************************************************************!*\
  !*** ./node_modules/vue-multiselect/dist/vue-multiselect.min.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--7-1!../../postcss-loader/src??ref--7-2!./vue-multiselect.min.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-multiselect/dist/vue-multiselect.min.css");

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

/***/ "./resources/assets/restaurant/components/pages/ImageInput.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/ImageInput.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageInput_vue_vue_type_template_id_c74ef4f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageInput.vue?vue&type=template&id=c74ef4f6&scoped=true& */ "./resources/assets/restaurant/components/pages/ImageInput.vue?vue&type=template&id=c74ef4f6&scoped=true&");
/* harmony import */ var _ImageInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageInput.vue?vue&type=script&lang=js& */ "./resources/assets/restaurant/components/pages/ImageInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ImageInput_vue_vue_type_style_index_0_id_c74ef4f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageInput.vue?vue&type=style&index=0&id=c74ef4f6&scoped=true&lang=css& */ "./resources/assets/restaurant/components/pages/ImageInput.vue?vue&type=style&index=0&id=c74ef4f6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ImageInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageInput_vue_vue_type_template_id_c74ef4f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImageInput_vue_vue_type_template_id_c74ef4f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c74ef4f6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/restaurant/components/pages/ImageInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/ImageInput.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/ImageInput.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/ImageInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/ImageInput.vue?vue&type=style&index=0&id=c74ef4f6&scoped=true&lang=css&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/ImageInput.vue?vue&type=style&index=0&id=c74ef4f6&scoped=true&lang=css& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageInput_vue_vue_type_style_index_0_id_c74ef4f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageInput.vue?vue&type=style&index=0&id=c74ef4f6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/ImageInput.vue?vue&type=style&index=0&id=c74ef4f6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageInput_vue_vue_type_style_index_0_id_c74ef4f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageInput_vue_vue_type_style_index_0_id_c74ef4f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageInput_vue_vue_type_style_index_0_id_c74ef4f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageInput_vue_vue_type_style_index_0_id_c74ef4f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageInput_vue_vue_type_style_index_0_id_c74ef4f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/ImageInput.vue?vue&type=template&id=c74ef4f6&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/ImageInput.vue?vue&type=template&id=c74ef4f6&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageInput_vue_vue_type_template_id_c74ef4f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageInput.vue?vue&type=template&id=c74ef4f6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/ImageInput.vue?vue&type=template&id=c74ef4f6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageInput_vue_vue_type_template_id_c74ef4f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageInput_vue_vue_type_template_id_c74ef4f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/restaurant/components/pages/add_food_menu.vue":
/*!************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/add_food_menu.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_food_menu_vue_vue_type_template_id_9e648f88_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add_food_menu.vue?vue&type=template&id=9e648f88&scoped=true& */ "./resources/assets/restaurant/components/pages/add_food_menu.vue?vue&type=template&id=9e648f88&scoped=true&");
/* harmony import */ var _add_food_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add_food_menu.vue?vue&type=script&lang=js& */ "./resources/assets/restaurant/components/pages/add_food_menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _add_food_menu_vue_vue_type_style_index_0_id_9e648f88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add_food_menu.vue?vue&type=style&index=0&id=9e648f88&scoped=true&lang=css& */ "./resources/assets/restaurant/components/pages/add_food_menu.vue?vue&type=style&index=0&id=9e648f88&scoped=true&lang=css&");
/* harmony import */ var _add_food_menu_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add_food_menu.vue?vue&type=style&index=1&lang=css& */ "./resources/assets/restaurant/components/pages/add_food_menu.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _add_food_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_food_menu_vue_vue_type_template_id_9e648f88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_food_menu_vue_vue_type_template_id_9e648f88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9e648f88",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/restaurant/components/pages/add_food_menu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/add_food_menu.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/add_food_menu.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_food_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add_food_menu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/add_food_menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_food_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/add_food_menu.vue?vue&type=style&index=0&id=9e648f88&scoped=true&lang=css&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/add_food_menu.vue?vue&type=style&index=0&id=9e648f88&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_food_menu_vue_vue_type_style_index_0_id_9e648f88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add_food_menu.vue?vue&type=style&index=0&id=9e648f88&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/add_food_menu.vue?vue&type=style&index=0&id=9e648f88&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_food_menu_vue_vue_type_style_index_0_id_9e648f88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_food_menu_vue_vue_type_style_index_0_id_9e648f88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_food_menu_vue_vue_type_style_index_0_id_9e648f88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_food_menu_vue_vue_type_style_index_0_id_9e648f88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_food_menu_vue_vue_type_style_index_0_id_9e648f88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/add_food_menu.vue?vue&type=style&index=1&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/add_food_menu.vue?vue&type=style&index=1&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_food_menu_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add_food_menu.vue?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/add_food_menu.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_food_menu_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_food_menu_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_food_menu_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_food_menu_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_food_menu_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/restaurant/components/pages/add_food_menu.vue?vue&type=template&id=9e648f88&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/assets/restaurant/components/pages/add_food_menu.vue?vue&type=template&id=9e648f88&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_food_menu_vue_vue_type_template_id_9e648f88_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add_food_menu.vue?vue&type=template&id=9e648f88&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/restaurant/components/pages/add_food_menu.vue?vue&type=template&id=9e648f88&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_food_menu_vue_vue_type_template_id_9e648f88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_food_menu_vue_vue_type_template_id_9e648f88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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