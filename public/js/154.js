(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[154],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/tasks.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/tasks.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'blank',
  data: function data() {
    return {
      modalTask: false,
      newtaskname: '',
      newtaskdesc: '',
      newtaskdeadline: '',
      newimportant: '',
      newstatus: '',
      tasks: [{
        tasktitle: 'Task-1',
        taskdescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?',
        taskdeadline: '14/04/2018',
        important: true,
        status: 'pending'
      }, {
        tasktitle: 'Task-2',
        taskdescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?',
        taskdeadline: '14/04/2018',
        important: true,
        status: 'pending'
      }, {
        tasktitle: 'Task-3',
        taskdescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?',
        taskdeadline: '14/04/2018',
        important: false,
        status: 'completed'
      }, {
        tasktitle: 'Task-4',
        taskdescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?',
        taskdeadline: '14/04/2018',
        important: 'true',
        status: 'completed'
      }, {
        tasktitle: 'Task-5',
        taskdescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?',
        taskdeadline: '14/04/2018',
        important: 'true',
        status: 'completed'
      }, {
        tasktitle: 'Task-6',
        taskdescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?',
        taskdeadline: '14/04/2018',
        important: 'true',
        status: 'pending'
      }, {
        tasktitle: 'Task-7',
        taskdescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?',
        taskdeadline: '14/04/2018',
        important: 'true',
        status: 'pending'
      }],
      edittitle: '',
      editdescription: '',
      editdeadline: '',
      important: '',
      editnewstatus: '',
      taskid: '',
      search: ''
    };
  },
  components: {},
  mounted: function mounted() {},
  methods: {
    addTask: function addTask() {
      this.tasks.push({
        tasktitle: this.newtaskname,
        taskdescription: this.newtaskdesc,
        taskdeadline: this.newtaskdeadline,
        important: this.newimportant,
        status: 'pending'
      }), this.newtaskname = '', this.newtaskdesc = '', this.newtaskdeadline = '', this.newimportant = false, this.newstatus = '', this.modalTask = false;
    },
    updateModal: function updateModal(taskid) {
      this.tasks[taskid].tasktitle = this.edittitle;
      this.tasks[taskid].taskdescription = this.editdescription;
      this.tasks[taskid].taskdeadline = this.editdeadline;
      this.tasks[taskid].status = this.newstatus; //                console.log(this.editnewstatus);

      this.$refs.editmodal.hide(); //                console.log(this.tasks[index].tasktitle);

      this.modalTask = false;
    },
    editModal: function editModal(index) {
      this.edittitle = this.tasks[index].tasktitle;
      this.editdescription = this.tasks[index].taskdescription;
      this.editdeadline = this.tasks[index].taskdeadline;
      this.editnewstatus = this.tasks[index].status; //                console.log(this.editdeadline);

      this.taskid = index;
      this.$refs.editmodal.show(); //                console.log(this.tasks[index].tasktitle);
    },
    deleteModal: function deleteModal(index) {
      //                this.$refs.deletemodal.show()
      this.tasks.splice(index, 1);
    }
  },
  computed: {
    allTasks: function allTasks() {
      var self = this;
      return this.tasks.filter(function (newtask) {
        return newtask.tasktitle.toLowerCase().indexOf(self.search.toLowerCase()) >= 0;
      }); //return this.customers;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/tasks.vue?vue&type=style&index=0&id=1ee8c24e&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/tasks.vue?vue&type=style&index=0&id=1ee8c24e&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* to do list */\n.todoside-menu a[data-v-1ee8c24e]:hover{\n    background-color: #f5f5f5;\n}\n.todoside-menu a[data-v-1ee8c24e]{\n    font-size: 15px;\n    color: #333;\n}\n.faExclamationCircle[data-v-1ee8c24e]::before{\n    content: \"\\F06A\";\n    font-size: 14px;\n    top:-8px;\n    position: relative;\n}\n.tasksearch[data-v-1ee8c24e],.tasks-list[data-v-1ee8c24e]{\n    box-shadow:0px 0px 1px 1px #cfcfcf;\n}\n/*.custom-control-label::after, .custom-control-label::before{*/\n    /*width: 2rem;*/\n    /*height: 2rem;*/\n/*}*/\n.box-shadow[data-v-1ee8c24e]{\n    box-shadow: 0px 0px 1px 1px #cfcfcf;\n}\n.tasks-table-list[data-v-1ee8c24e]{\n    max-height: 80vh;\n    overflow-y: scroll;\n    margin-bottom: 10px;\n}\n.todoside-menu .side-content .active[data-v-1ee8c24e]{\n    background-color: #eee;\n    color: #3e6174;\n}\n.table td .custom-control.custom-checkbox[data-v-1ee8c24e]{\n    margin-top: 1px;\n}\n.custom-control-inline[data-v-1ee8c24e]{\n    margin-right: 0;\n}\n.task-type[data-v-1ee8c24e]{\n    border-bottom: 1px solid #eee;\n}\n.textDanger[data-v-1ee8c24e]{\n    /*color: #ff6666;*/\n    font-weight: 600;\n}\n.textDanger[data-v-1ee8c24e]::before{\n    content: '.';\n    font-size: 42px;\n    line-height: 5px;\n    font-weight: 900;\n    top: -3px;\n    left: -5px;\n    position: relative;\n    color: #fd7570;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/tasks.vue?vue&type=style&index=0&id=1ee8c24e&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/tasks.vue?vue&type=style&index=0&id=1ee8c24e&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tasks.vue?vue&type=style&index=0&id=1ee8c24e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/tasks.vue?vue&type=style&index=0&id=1ee8c24e&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/tasks.vue?vue&type=template&id=1ee8c24e&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/admin/components/pages/tasks.vue?vue&type=template&id=1ee8c24e&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "bg-white p-4" },
    [
      _c("div", { staticClass: "todo " }, [
        _c("div", { staticClass: "todoside-menu" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12 col-md-5 col-lg-3 " }, [
              _c("div", { staticClass: "side-content " }, [
                _c(
                  "div",
                  { staticClass: "box-shadow" },
                  [
                    _c("h1", { staticClass: "p-3 mb-0" }, [_vm._v("Todo's")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "p-3" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-block",
                          on: {
                            click: function($event) {
                              _vm.modalTask = !_vm.modalTask
                            }
                          }
                        },
                        [_vm._v("Add Task")]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        attrs: {
                          "hide-footer": true,
                          title: "Add Your Task Here"
                        },
                        model: {
                          value: _vm.modalTask,
                          callback: function($$v) {
                            _vm.modalTask = $$v
                          },
                          expression: "modalTask"
                        }
                      },
                      [
                        _c("b-container", { attrs: { fluid: "" } }, [
                          _c(
                            "form",
                            [
                              _c(
                                "label",
                                {
                                  staticClass: "mt-2",
                                  attrs: { for: "tasktitle" }
                                },
                                [_vm._v("Task Title")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newtaskname,
                                    expression: "newtaskname"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  id: "tasktitle",
                                  placeholder: "Enter Title"
                                },
                                domProps: { value: _vm.newtaskname },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.newtaskname = $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "mt-2",
                                  attrs: { for: "taskdesc" }
                                },
                                [_vm._v("Task Description")]
                              ),
                              _vm._v(" "),
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newtaskdesc,
                                    expression: "newtaskdesc"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  name: "description",
                                  placeholder: "Add description here",
                                  rows: "5",
                                  id: "taskdesc"
                                },
                                domProps: { value: _vm.newtaskdesc },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.newtaskdesc = $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "mt-2",
                                  attrs: { for: "deadline" }
                                },
                                [_vm._v("Deadline")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newtaskdeadline,
                                    expression: "newtaskdeadline"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "date",
                                  placeholder: "Deadline",
                                  id: "deadline"
                                },
                                domProps: { value: _vm.newtaskdeadline },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.newtaskdeadline = $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                [
                                  _c("b-form-checkbox", {
                                    staticClass: "mt-2",
                                    model: {
                                      value: _vm.newimportant,
                                      callback: function($$v) {
                                        _vm.newimportant = $$v
                                      },
                                      expression: "newimportant"
                                    }
                                  }),
                                  _vm._v(" Click if this a important task")
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-btn",
                                {
                                  staticClass: "float-right mt-2",
                                  attrs: { variant: "primary" },
                                  on: { click: _vm.addTask }
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
                    ),
                    _vm._v(" "),
                    _vm._m(0),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _vm._m(3),
                    _vm._v(" "),
                    _vm._m(4),
                    _vm._v(" "),
                    _vm._m(5)
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-md-7 col-lg-9" }, [
              _c("div", { staticClass: "tasksearch p-3" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.search,
                      expression: "search"
                    }
                  ],
                  staticClass: "form-control mt-4 mb-4",
                  attrs: { type: "text", placeholder: "Search" },
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "tasks-list mt-5" }, [
                _vm._m(6),
                _vm._v(" "),
                _c("div", { staticClass: "tasks-table-list" }, [
                  _c(
                    "table",
                    { staticClass: "table" },
                    _vm._l(_vm.allTasks, function(task, index) {
                      return _c("tr", [
                        _c("td", [_c("b-form-checkbox")], 1),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "h5",
                            { class: { textDanger: task.important == true } },
                            [_vm._v(_vm._s(task.tasktitle))]
                          ),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(task.taskdescription))]),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-danger" }, [
                            _vm._v("Deadline:")
                          ]),
                          _vm._v(
                            " " +
                              _vm._s(task.taskdeadline) +
                              "\n                                        "
                          ),
                          _c("span", { staticClass: "float-right mr-5" }, [
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v("Status:")
                            ]),
                            _vm._v(" " + _vm._s(task.status))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "align-center" }, [
                          _c("span", {
                            staticClass: "fa fa-edit",
                            on: {
                              click: function($event) {
                                return _vm.editModal(index)
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "align-center" }, [
                          _c("span", {
                            staticClass: "fa fa-trash-o",
                            on: {
                              click: function($event) {
                                return _vm.deleteModal(index)
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
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "editmodal",
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
                    value: _vm.edittitle,
                    expression: "edittitle"
                  }
                ],
                staticClass: "form-control mt-3",
                attrs: { type: "text", placeholder: "Enter title" },
                domProps: { value: _vm.edittitle },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.edittitle = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.editdescription,
                    expression: "editdescription"
                  }
                ],
                staticClass: "form-control mt-3",
                attrs: { name: "", id: "", cols: "30", rows: "10" },
                domProps: { value: _vm.editdescription },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.editdescription = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.editdeadline,
                    expression: "editdeadline"
                  }
                ],
                staticClass: "form-control mt-3",
                attrs: { type: "email", placeholder: "Enter deadline" },
                domProps: { value: _vm.editdeadline },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.editdeadline = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.newstatus,
                      expression: "newstatus"
                    }
                  ],
                  staticClass: "form-control mt-3",
                  attrs: { id: "dropdown" },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.newstatus = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                [
                  _c("option", { attrs: { disabled: "", value: "" } }, [
                    _vm._v("Status")
                  ]),
                  _vm._v(" "),
                  _c("option", [_vm._v("Pending")]),
                  _vm._v(" "),
                  _c("option", [_vm._v("Completed")])
                ]
              )
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
                  return _vm.updateModal(_vm.taskid)
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
              attrs: { variant: "danger", block: "" }
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
          ref: "deletemodal",
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
    return _c(
      "a",
      {
        staticClass:
          "alltasks border-bottom border-secondary d-block p-3 active",
        attrs: { href: "#/tasks" }
      },
      [
        _c("i", {
          staticClass: "fa fa-tasks",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v("  All Tasks")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "today d-block p-3", attrs: { href: "#/tasks" } },
      [
        _c("i", {
          staticClass: "fa fa-list-ol",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v("  Today's Tasks (10)")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "needaction d-block p-3", attrs: { href: "#/tasks" } },
      [
        _c("i", {
          staticClass: "fa fa-reply",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v("  Action Needed Taks (25)")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "important d-block p-3", attrs: { href: "#/tasks" } },
      [
        _c("i", {
          staticClass: "fa fa-exclamation-circle",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v("  Important Tasks (13)")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "pending d-block p-3", attrs: { href: "#/tasks" } },
      [
        _c("i", {
          staticClass: "fa fa-clock-o",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v("  Pending Taks (15)")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "deleted d-block p-3", attrs: { href: "#/tasks" } },
      [
        _c("i", {
          staticClass: "fa fa-trash-o",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v("  Deleted Tasks")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "task-type p-3" }, [
      _c("h4", [_vm._v("All Tasks")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/admin/components/pages/tasks.vue":
/*!***********************************************************!*\
  !*** ./resources/assets/admin/components/pages/tasks.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tasks_vue_vue_type_template_id_1ee8c24e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.vue?vue&type=template&id=1ee8c24e&scoped=true& */ "./resources/assets/admin/components/pages/tasks.vue?vue&type=template&id=1ee8c24e&scoped=true&");
/* harmony import */ var _tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.vue?vue&type=script&lang=js& */ "./resources/assets/admin/components/pages/tasks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _tasks_vue_vue_type_style_index_0_id_1ee8c24e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.vue?vue&type=style&index=0&id=1ee8c24e&scoped=true&lang=css& */ "./resources/assets/admin/components/pages/tasks.vue?vue&type=style&index=0&id=1ee8c24e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tasks_vue_vue_type_template_id_1ee8c24e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tasks_vue_vue_type_template_id_1ee8c24e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1ee8c24e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/admin/components/pages/tasks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/admin/components/pages/tasks.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/tasks.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tasks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/tasks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/admin/components/pages/tasks.vue?vue&type=style&index=0&id=1ee8c24e&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/tasks.vue?vue&type=style&index=0&id=1ee8c24e&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tasks_vue_vue_type_style_index_0_id_1ee8c24e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tasks.vue?vue&type=style&index=0&id=1ee8c24e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/tasks.vue?vue&type=style&index=0&id=1ee8c24e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tasks_vue_vue_type_style_index_0_id_1ee8c24e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tasks_vue_vue_type_style_index_0_id_1ee8c24e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tasks_vue_vue_type_style_index_0_id_1ee8c24e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tasks_vue_vue_type_style_index_0_id_1ee8c24e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tasks_vue_vue_type_style_index_0_id_1ee8c24e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/admin/components/pages/tasks.vue?vue&type=template&id=1ee8c24e&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/admin/components/pages/tasks.vue?vue&type=template&id=1ee8c24e&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tasks_vue_vue_type_template_id_1ee8c24e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tasks.vue?vue&type=template&id=1ee8c24e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/admin/components/pages/tasks.vue?vue&type=template&id=1ee8c24e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tasks_vue_vue_type_template_id_1ee8c24e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tasks_vue_vue_type_template_id_1ee8c24e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);