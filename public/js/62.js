(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/contacts.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/contacts.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'blank',
  data: function data() {
    return {
      modalShow: false,
      newname: '',
      newemail: '',
      newnumber: '',
      newlocation: '',
      newrole: '',
      contacts: [{
        name: 'Jon',
        img: __webpack_require__(/*! ../../img/authors/avatar1.jpg */ "./resources/assets/admin/img/authors/avatar1.jpg"),
        email: 'jon@gmail.com',
        contact_num: '0123456789',
        role: 'Web developer',
        location: 'Hyderabad'
      }, {
        name: 'Doe',
        img: __webpack_require__(/*! ../../img/authors/avatar2.jpg */ "./resources/assets/admin/img/authors/avatar2.jpg"),
        email: 'doe@gmail.com',
        contact_num: '0123456789',
        role: 'Web developer',
        location: 'Hyderabad'
      }, {
        name: 'Addison',
        img: __webpack_require__(/*! ../../img/authors/avatar3.jpg */ "./resources/assets/admin/img/authors/avatar3.jpg"),
        email: 'addison@gmail.com',
        contact_num: '0123456789',
        role: 'Web developer',
        location: 'Hyderabad'
      }, {
        name: 'Jon',
        img: __webpack_require__(/*! ../../img/authors/avatar4.jpg */ "./resources/assets/admin/img/authors/avatar4.jpg"),
        email: 'jon@gmail.com',
        contact_num: '0123456789',
        role: 'Web developer',
        location: 'Hyderabad'
      }, {
        name: 'Doe',
        img: __webpack_require__(/*! ../../img/authors/avatar1.jpg */ "./resources/assets/admin/img/authors/avatar1.jpg"),
        email: 'jon@gmail.com',
        contact_num: '0123456789',
        role: 'Web developer',
        location: 'Hyderabad'
      }, {
        name: 'Jon',
        img: __webpack_require__(/*! ../../img/authors/avatar.jpg */ "./resources/assets/admin/img/authors/avatar.jpg"),
        email: 'jon@gmail.com',
        contact_num: '0123456789',
        role: 'Web developer',
        location: 'Hyderabad'
      }],
      editname: '',
      editemail: '',
      editnumber: '',
      editlocation: '',
      editrole: '',
      contactid: '',
      search: '',
      userImage: ''
    };
  },
  components: {},
  mounted: function mounted() {},
  methods: {
    addContact: function addContact() {
      this.contacts.push({
        name: this.newname,
        email: this.newemail,
        contact_num: this.newnumber,
        location: this.newlocation,
        role: this.newrole,
        img: this.userImage
      }), this.newname = '', this.newemail = '', this.newnumber = '', this.newlocation = '', this.newrole = '', this.modalShow = false;
    },
    deletecontact: function deletecontact(index) {
      //                this.$refs.deletemodal.show()
      this.contacts.splice(index, 1);
    },
    editcontact: function editcontact(index) {
      this.editname = this.contacts[index].name;
      this.editemail = this.contacts[index].email;
      this.editnumber = this.contacts[index].contact_num;
      this.editlocation = this.contacts[index].location;
      this.editrole = this.contacts[index].role;
      this.contactid = index;
      this.$refs.editcontact.show();
    },
    updateContact: function updateContact(contactid) {
      this.contacts[contactid].name = this.editname;
      this.contacts[contactid].email = this.editemail;
      this.contacts[contactid].contact_num = this.editnumber;
      this.contacts[contactid].location = this.editlocation;
      this.contacts[contactid].role = this.editrole;
      this.$refs.editcontact.hide(); //                console.log(this.tasks[index].tasktitle);

      this.modalTask = false;
    },
    cancel: function cancel() {
      this.modalTask = false;
    },
    onFileChange: function onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;

      if (!files.length) {
        return;
      }

      this.createImage(files[0]);
    },
    createImage: function createImage(file) {
      var reader = new FileReader();
      var vm = this;

      reader.onload = function (e) {
        vm.userImage = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  },
  computed: {
    allContacts: function allContacts() {
      var self = this;
      return this.contacts.filter(function (newcontact) {
        return newcontact.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0;
      }); //return this.customers;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/contacts.vue?vue&type=style&index=0&id=b55c157a&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/contacts.vue?vue&type=style&index=0&id=b55c157a&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.search[data-v-b55c157a]{\n    border: 1px solid #bdb3b3;\n}\n.contact-profile[data-v-b55c157a]{\n    width:50px;\n    height: 50px;\n}\n.box-shadow[data-v-b55c157a]{\n    box-shadow: 0px 0px 1px 1px #cfcfcf;\n}\n.contact-pic[data-v-b55c157a]{\n    width: 50px;\n    height: 50px;\n}\n.table td[data-v-b55c157a]{\n    padding: 16px;\n    vertical-align: middle;\n}\n.contacts-box .custom-control-inline[data-v-b55c157a]{\n    margin-right: 0;\n}\n.custom-control-label[data-v-b55c157a]::before{\n    width: 100px;\n    height: 100px;\n}\n.contact-page[data-v-b55c157a]{\n    font-size: 14px;\n}\n.options a[data-v-b55c157a]:hover,.options2 a[data-v-b55c157a]:hover{\n    background-color: #eee;\n}\n.bg-title[data-v-b55c157a]{\n    background-color: #f5f5f5;\n}\n.options .active[data-v-b55c157a]{\n    background-color: #eee;\n    color: #3e6174 !important;\n}\n.custom-control-inline[data-v-b55c157a]{\n    margin-right: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/contacts.vue?vue&type=style&index=0&id=b55c157a&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/contacts.vue?vue&type=style&index=0&id=b55c157a&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./contacts.vue?vue&type=style&index=0&id=b55c157a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/contacts.vue?vue&type=style&index=0&id=b55c157a&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/contacts.vue?vue&type=template&id=b55c157a&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/contacts.vue?vue&type=template&id=b55c157a&scoped=true& ***!
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
    [
      _c("div", { staticClass: "contact-page" }, [
        _c("div", { staticClass: "container-fluid bg-white" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "p-5 box-shadow mt-3 mb-3" }, [
                _c("h4", [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("span", { staticClass: "float-right" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.search,
                          expression: "search"
                        }
                      ],
                      staticClass: "search form-control pl-2 pr-2",
                      attrs: { type: "search", placeholder: "Search here" },
                      domProps: { value: _vm.search },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.search = $event.target.value
                        }
                      }
                    })
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "container-fluid bg-white mt-4" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "row pb-4" }, [
                _c(
                  "div",
                  { staticClass: "col-12 col-sm-4 col-lg-3" },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary mt-3",
                        on: {
                          click: function($event) {
                            _vm.modalShow = !_vm.modalShow
                          }
                        }
                      },
                      [_vm._v("Add New Contact")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        attrs: {
                          "hide-footer": true,
                          title: "Add your contact here"
                        },
                        model: {
                          value: _vm.modalShow,
                          callback: function($$v) {
                            _vm.modalShow = $$v
                          },
                          expression: "modalShow"
                        }
                      },
                      [
                        _c("b-container", { attrs: { fluid: "" } }, [
                          _c(
                            "form",
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newname,
                                    expression: "newname"
                                  }
                                ],
                                staticClass: "form-control mt-3",
                                attrs: {
                                  type: "text",
                                  placeholder: "Enter name"
                                },
                                domProps: { value: _vm.newname },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.newname = $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("input", {
                                staticClass: "btn btn-primary mt-3",
                                attrs: { type: "file" },
                                on: { change: _vm.onFileChange }
                              }),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newnumber,
                                    expression: "newnumber"
                                  }
                                ],
                                staticClass: "form-control mt-3",
                                attrs: {
                                  type: "number",
                                  placeholder: "Enter phone number"
                                },
                                domProps: { value: _vm.newnumber },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.newnumber = $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newemail,
                                    expression: "newemail"
                                  }
                                ],
                                staticClass: "form-control mt-3",
                                attrs: {
                                  type: "email",
                                  placeholder: "Enter email"
                                },
                                domProps: { value: _vm.newemail },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.newemail = $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newrole,
                                    expression: "newrole"
                                  }
                                ],
                                staticClass: "form-control mt-3",
                                attrs: {
                                  type: "text",
                                  placeholder: "Enter role"
                                },
                                domProps: { value: _vm.newrole },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.newrole = $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newlocation,
                                    expression: "newlocation"
                                  }
                                ],
                                staticClass: "form-control mt-3 mb-3",
                                attrs: {
                                  type: "text",
                                  placeholder: "Location"
                                },
                                domProps: { value: _vm.newlocation },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.newlocation = $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "b-btn",
                                {
                                  staticClass: "float-right",
                                  attrs: { variant: "primary" },
                                  on: { click: _vm.addContact }
                                },
                                [
                                  _vm._v(
                                    "\n                                            Submit\n                                        "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 col-sm-8 col-lg-9" }, [
                  _c("div", { staticClass: "box-shadow mt-4" }, [
                    _c("div", { staticClass: "contacts-box" }, [
                      _vm._m(2),
                      _vm._v(" "),
                      _c("div", { staticClass: "table-responsive" }, [
                        _c(
                          "table",
                          { staticClass: "table" },
                          _vm._l(_vm.allContacts, function(contact, index) {
                            return _c("tr", [
                              _c("td", [_c("b-form-checkbox")], 1),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(contact.name))]),
                              _vm._v(" "),
                              _c("td", [
                                _c("img", {
                                  staticClass: "contact-pic rounded-circle",
                                  attrs: { src: contact.img, alt: "profile" }
                                })
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(contact.email))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(contact.contact_num))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(contact.role))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(contact.location))]),
                              _vm._v(" "),
                              _c("td", [
                                _c("span", {
                                  staticClass: "fa fa-edit",
                                  on: {
                                    click: function($event) {
                                      return _vm.editcontact(index)
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("span", {
                                  staticClass: "fa fa-trash-o",
                                  on: {
                                    click: function($event) {
                                      return _vm.deletecontact(index)
                                    }
                                  }
                                })
                              ])
                            ])
                          }),
                          0
                        )
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "editcontact",
          attrs: { "hide-footer": "", title: "Using Component Methods" }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c("form", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.editname,
                    expression: "editname"
                  }
                ],
                staticClass: "form-control mt-3",
                attrs: { type: "text", placeholder: "Enter name" },
                domProps: { value: _vm.editname },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.editname = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.editemail,
                    expression: "editemail"
                  }
                ],
                staticClass: "form-control mt-3",
                attrs: { type: "email", placeholder: "Enter email" },
                domProps: { value: _vm.editemail },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.editemail = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.editnumber,
                    expression: "editnumber"
                  }
                ],
                staticClass: "form-control mt-3",
                attrs: { type: "number", placeholder: "Enter number" },
                domProps: { value: _vm.editnumber },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.editnumber = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.editrole,
                    expression: "editrole"
                  }
                ],
                staticClass: "form-control mt-3 mb-3",
                attrs: { type: "text", placeholder: "role" },
                domProps: { value: _vm.editrole },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.editrole = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.editlocation,
                    expression: "editlocation"
                  }
                ],
                staticClass: "form-control mt-3 mb-3",
                attrs: { type: "text", placeholder: "role" },
                domProps: { value: _vm.editlocation },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.editlocation = $event.target.value
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c(
            "b-btn",
            {
              staticClass: "mt-3 text-white",
              attrs: { variant: "success", block: "" },
              on: {
                click: function($event) {
                  return _vm.updateContact(_vm.contactid)
                }
              }
            },
            [_vm._v("Update")]
          ),
          _vm._v(" "),
          _c(
            "b-btn",
            {
              staticClass: "mt-3 text-white",
              attrs: { variant: "danger", block: "" },
              on: { click: _vm.cancel }
            },
            [_vm._v("Cancel")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "deletecontact",
          attrs: { "hide-footer": "", title: "Using Component Methods" }
        },
        [
          _c("div", { staticClass: "d-block text-center" }, [
            _c("h3", [_vm._v("Are you sure you want to delete modal")])
          ]),
          _vm._v(" "),
          _c(
            "b-btn",
            {
              staticClass: "mt-3 text-danger",
              attrs: { variant: "outline-danger", block: "" }
            },
            [_vm._v("Yes")]
          ),
          _vm._v(" "),
          _c(
            "b-btn",
            {
              staticClass: "mt-3 text-primary",
              attrs: { variant: "outline-primary", block: "" }
            },
            [_vm._v("No")]
          )
        ],
        1
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
    return _c("span", [
      _c("i", { staticClass: "fa fa-address-book-o" }),
      _vm._v(" Contacts\n                        ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-shadow mt-4" }, [
      _c("div", { staticClass: "border-bottom border-secondary p-3" }, [
        _c("img", {
          staticClass: "contact-profile d-inline-block rounded-circle",
          attrs: {
            src: __webpack_require__(/*! img/authors/avatar1.jpg */ "./resources/assets/admin/img/authors/avatar1.jpg"),
            alt: "user profile"
          }
        }),
        _vm._v(" "),
        _c("p", { staticClass: "d-inline-block" }, [_vm._v("  Jon Doe")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "options border-bottom border-secondary" }, [
        _c(
          "a",
          {
            staticClass: "p-3 d-block text-dark active",
            attrs: { href: "#/contacts" }
          },
          [_vm._v("All Contacts")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "p-3 d-block text-dark",
            attrs: { href: "#/contacts" }
          },
          [_vm._v("Frequently contacted ")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "p-3 d-block text-dark",
            attrs: { href: "#/contacts" }
          },
          [_vm._v("Starred Contacts")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "options2" }, [
        _c(
          "a",
          {
            staticClass: "p-3 d-block text-dark",
            attrs: { href: "#/contacts" }
          },
          [_vm._v("Groups")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "p-3 d-block text-dark",
            attrs: { href: "#/contacts" }
          },
          [_vm._v("Friends")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "p-3 d-block text-dark",
            attrs: { href: "#/contacts" }
          },
          [_vm._v("Clients")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "p-3 d-block text-dark",
            attrs: { href: "#/contacts" }
          },
          [_vm._v("Recent Workers")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "p-3 d-block text-dark",
            attrs: { href: "#/contacts" }
          },
          [_vm._v("New Group")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "total-contacts p-5 " }, [
      _c("span", [_vm._v("All Contacts(25)")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/admin/components/pages/contacts.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/admin/components/pages/contacts.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contacts_vue_vue_type_template_id_b55c157a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts.vue?vue&type=template&id=b55c157a&scoped=true& */ "./resources/assets/admin/components/pages/contacts.vue?vue&type=template&id=b55c157a&scoped=true&");
/* harmony import */ var _contacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts.vue?vue&type=script&lang=js& */ "./resources/assets/admin/components/pages/contacts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _contacts_vue_vue_type_style_index_0_id_b55c157a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts.vue?vue&type=style&index=0&id=b55c157a&scoped=true&lang=css& */ "./resources/assets/admin/components/pages/contacts.vue?vue&type=style&index=0&id=b55c157a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _contacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _contacts_vue_vue_type_template_id_b55c157a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _contacts_vue_vue_type_template_id_b55c157a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b55c157a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/admin/components/pages/contacts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/admin/components/pages/contacts.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/contacts.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./contacts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/contacts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/admin/components/pages/contacts.vue?vue&type=style&index=0&id=b55c157a&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/contacts.vue?vue&type=style&index=0&id=b55c157a&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_contacts_vue_vue_type_style_index_0_id_b55c157a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./contacts.vue?vue&type=style&index=0&id=b55c157a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/contacts.vue?vue&type=style&index=0&id=b55c157a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_contacts_vue_vue_type_style_index_0_id_b55c157a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_contacts_vue_vue_type_style_index_0_id_b55c157a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_contacts_vue_vue_type_style_index_0_id_b55c157a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_contacts_vue_vue_type_style_index_0_id_b55c157a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_contacts_vue_vue_type_style_index_0_id_b55c157a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/admin/components/pages/contacts.vue?vue&type=template&id=b55c157a&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/contacts.vue?vue&type=template&id=b55c157a&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contacts_vue_vue_type_template_id_b55c157a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./contacts.vue?vue&type=template&id=b55c157a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/contacts.vue?vue&type=template&id=b55c157a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contacts_vue_vue_type_template_id_b55c157a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contacts_vue_vue_type_template_id_b55c157a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/admin/img/authors/avatar.jpg":
/*!*******************************************************!*\
  !*** ./resources/assets/admin/img/authors/avatar.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "public/images/avatar.jpg?80cdd9fe2c757269df356b8776f807c0";

/***/ }),

/***/ "./resources/assets/admin/img/authors/avatar1.jpg":
/*!********************************************************!*\
  !*** ./resources/assets/admin/img/authors/avatar1.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "public/images/avatar1.jpg?f324158a7087ed4d700bcfa9cd5431e8";

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

/***/ })

}]);