(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["extra-component-extra-component-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-component/drag-n-drop/drag.component.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/extra-component/drag-n-drop/drag.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppExtraComponentDragNDropDragComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card\">\r\n    <div class=\"card-body pb-0\">\r\n      <h4 class=\"card-title\">Basic Drag n Drop</h4>\r\n    </div>\r\n    <ul\r\n      class=\"list-group pl-0 shadow-sm\"\r\n      cdkDropList\r\n      (cdkDropListDropped)=\"drop($event)\"\r\n      *ngIf=\"movies.length\"\r\n    >\r\n      <li\r\n        class=\"list-group-item border-bottom border-top-0 border-right-0 border-left-0 cursor-pointer d-flex align-items-center\"\r\n        *ngFor=\"let mname of movies\"\r\n        cdkDrag\r\n      >\r\n        <i class=\"mdi mdi-arrow-right font-medium text-info mr-2 font-18\"></i>\r\n        <h6 class=\"mb-0\">{{ mname }}</h6>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  \r\n  <h4 class=\"card-title mt-4 pt-2\">Transferring items between lists</h4>\r\n  \r\n  <div class=\"row mt-4\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"bg-info py-2 px-3\">\r\n          <h4 class=\"text-white mb-0\">Todo</h4>\r\n        </div>\r\n        <div\r\n          cdkDropList\r\n          #todoList=\"cdkDropList\"\r\n          [cdkDropListData]=\"todo\"\r\n          [cdkDropListConnectedTo]=\"[doneList]\"\r\n          class=\"todo\"\r\n          (cdkDropListDropped)=\"onDrop($event)\"\r\n        >\r\n          <div\r\n            class=\"py-3 cursor-pointer mb-1 d-flex align-items-center border-bottom\"\r\n            *ngFor=\"let item of todo\"\r\n            cdkDrag\r\n          >\r\n            <span class=\"todo-border\"></span>\r\n            <h6 class=\"mb-0 ml-3\">{{ item }}</h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"bg-success py-2 px-3\">\r\n          <h4 class=\"text-white mb-0\">Done</h4>\r\n        </div>\r\n        <div\r\n          cdkDropList\r\n          #doneList=\"cdkDropList\"\r\n          [cdkDropListData]=\"done\"\r\n          [cdkDropListConnectedTo]=\"[todoList]\"\r\n          class=\"done\"\r\n          (cdkDropListDropped)=\"onDrop($event)\"\r\n        >\r\n          <div\r\n            class=\"py-3 cursor-pointer mb-1 d-flex align-items-center border-bottom\"\r\n            *ngFor=\"let item of done\"\r\n            cdkDrag\r\n          >\r\n            <span class=\"done-border\"></span>\r\n            <h6 class=\"mb-0 ml-3\">{{ item }}</h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <h4 class=\"card-title\">List orientation</h4>\r\n      <ul\r\n        class=\"list-group list-group-horizontal-lg pl-0 mt-4\"\r\n        cdkDropList\r\n        cdkDropListOrientation=\"horizontal\"\r\n        (cdkDropListDropped)=\"orientationDrop($event)\"\r\n        *ngIf=\"horizontalOrientation.length\"\r\n      >\r\n        <li\r\n          class=\"list-group-item cursor-pointer text-center\"\r\n          *ngFor=\"let hname of horizontalOrientation\"\r\n          cdkDrag\r\n        >\r\n          <i\r\n            class=\"mdi mdi-cube-outline font-medium text-info mr-2 font-18 d-block\"\r\n          ></i>\r\n          <h6 class=\"mb-0\">{{ hname }}</h6>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  \r\n  <h4 class=\"card-title mt-4 pt-2\">Drag&Drop enter predicate</h4>\r\n  <div class=\"row mt-4\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"bg-info py-2 px-3\">\r\n          <h4 class=\"text-white mb-0\">Available numbers</h4>\r\n        </div>\r\n        <div\r\n          id=\"all\"\r\n          cdkDropList\r\n          cdkDropList\r\n          [cdkDropListData]=\"all\"\r\n          cdkDropListConnectedTo=\"even\"\r\n          (cdkDropListDropped)=\"oddevenDrop($event)\"\r\n          [cdkDropListEnterPredicate]=\"noReturnPredicate\"\r\n          class=\"todo\"\r\n        >\r\n          <div\r\n            class=\"py-3 cursor-pointer mb-1 d-flex align-items-center border-bottom\"\r\n            *ngFor=\"let number of all\"\r\n            [cdkDragData]=\"number\"\r\n            cdkDrag\r\n          >\r\n            <span class=\"todo-border\"></span>\r\n            <h6 class=\"mb-0 ml-3\">{{ number }}</h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"bg-success py-2 px-3\">\r\n          <h4 class=\"text-white mb-0\">Even numbers</h4>\r\n        </div>\r\n        <div\r\n          id=\"even\"\r\n          cdkDropList\r\n          [cdkDropListData]=\"even\"\r\n          cdkDropListConnectedTo=\"all\"\r\n          (cdkDropListDropped)=\"oddevenDrop($event)\"\r\n          [cdkDropListEnterPredicate]=\"evenPredicate\"\r\n          class=\"done\"\r\n        >\r\n          <div\r\n            class=\"py-3 cursor-pointer mb-1 d-flex align-items-center border-bottom\"\r\n            *ngFor=\"let number of even\"\r\n            [cdkDragData]=\"number\"\r\n            cdkDrag\r\n          >\r\n            <span class=\"done-border\"></span>\r\n            <h6 class=\"mb-0 ml-3\">{{ number }}</h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  ";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-component/editor/editor.component.html":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/extra-component/editor/editor.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppExtraComponentEditorEditorComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Basic Editor</h4>\r\n                <h6 class=\"card-subtitle\">quill editor with angular and TypeScript. ngx-quill is the new angular 2 and beyond implementation of ngQuill.\r\n                    <a href=\"https://github.com/KillerCodeMonkey/ngx-quill\" target=\"_blank\">Official website</a>\r\n                </h6>\r\n                <!-- <quill-editor [style]=\"{height: '200px'}\"></quill-editor> -->\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-component/toastr/toastr.component.html":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/extra-component/toastr/toastr.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppExtraComponentToastrToastrComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Toastr Success</h4>\r\n                <h6 class=\"card-subtitle\">This is the simpel toastr with success message</h6>\r\n                <button class=\"btn btn-success\" (click)=\"showSuccess()\">Toastr Success</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Toastr Danger</h4>\r\n                <h6 class=\"card-subtitle\">This is the simpel toastr with Danger message</h6>\r\n                <button class=\"btn btn-danger\" (click)=\"showError()\">Toastr Danger Error</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Toastr Warning</h4>\r\n                <h6 class=\"card-subtitle\">This is the simpel toastr with Warning message</h6>\r\n                <button class=\"btn btn-warning\" (click)=\"showWarning()\">Toastr Warning</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Toastr Info</h4>\r\n                <h6 class=\"card-subtitle\">This is the simpel toastr with Info message</h6>\r\n                <button class=\"btn btn-info\" (click)=\"showInfo()\">Toastr Info</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>";
      /***/
    },

    /***/
    "./src/app/extra-component/drag-n-drop/drag.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/extra-component/drag-n-drop/drag.component.ts ***!
      \***************************************************************/

    /*! exports provided: DragComponent */

    /***/
    function srcAppExtraComponentDragNDropDragComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragComponent", function () {
        return DragComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var DragComponent = /*#__PURE__*/function () {
        function DragComponent() {
          _classCallCheck(this, DragComponent);

          this.movies = ['Order the server hardware for production as well as test/quality assurance (QA).', 'Install Tivoli Business Systems Manager and appropriate patches on test or QA servers.', 'Create configuration level objects for the test LPAR.', 'Install Tivoli Business Systems Manager and appropriate maintenance on the test LPAR.', 'Install event enablement on the Tivoli Enterprise Console server.', 'Install event enablement on the Tivoli Enterprise Console server.', 'Configure servers, Source/390 on the production LPARs, event enablement on the Tivoli Enterprise Console server, and verify connectivity.', 'Monitor system performance and adjust hardware as required.']; // orientation

          this.horizontalOrientation = ['React', 'Angular', 'Vuejs', 'Bootstrap', 'Laravel', 'Shopify', 'Wordpress', 'Jquery', 'Ant.js', 'Reactstrap', 'Vuetify']; // Transfer Items Between Lists

          this.todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
          this.done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail']; // ood even number

          this.all = [1, 3, 5, 6, 7, 8, 9];
          this.even = [10, 2, 4];
        }

        _createClass(DragComponent, [{
          key: "drop",
          value: function drop(event) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.movies, event.previousIndex, event.currentIndex);
          }
        }, {
          key: "orientationDrop",
          value: function orientationDrop(event) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.horizontalOrientation, event.previousIndex, event.currentIndex);
          }
        }, {
          key: "onDrop",
          value: function onDrop(event) {
            if (event.previousContainer === event.container) {
              Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
            } else {
              Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            }
          }
        }, {
          key: "oddevenDrop",
          value: function oddevenDrop(event) {
            if (event.previousContainer === event.container) {
              Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
            } else {
              Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            }
          }
          /** Predicate function that only allows even numbers to be dropped into a list. */

        }, {
          key: "evenPredicate",
          value: function evenPredicate(item) {
            return item.data % 2 === 0;
          }
          /** Predicate function that doesn't allow items to be dropped into a list. */

        }, {
          key: "noReturnPredicate",
          value: function noReturnPredicate() {
            return false;
          }
        }]);

        return DragComponent;
      }();

      DragComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./drag.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-component/drag-n-drop/drag.component.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./drag.scss */
        "./src/app/extra-component/drag-n-drop/drag.scss"))["default"]]
      })], DragComponent);
      /***/
    },

    /***/
    "./src/app/extra-component/drag-n-drop/drag.scss":
    /*!*******************************************************!*\
      !*** ./src/app/extra-component/drag-n-drop/drag.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppExtraComponentDragNDropDragScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".dragndrop {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 10px 15px;\n}\n\n.dragndrop > div {\n  border: 1px dashed rgba(0, 0, 0, 0.1);\n  padding: 10px;\n  cursor: move;\n  margin: 5px 0;\n}\n\n.dragndrop > div.ex-moved {\n  background: red;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXh0cmEtY29tcG9uZW50L2RyYWctbi1kcm9wL2RyYWcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztFQUNwQyxrQkFBa0I7QUFDcEI7O0FBSEE7RUFJSSxxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0FBR2pCOztBQVZBO0VBU00sZUFBZTtFQUNmLFlBQVk7QUFLbEIiLCJmaWxlIjoic3JjL2FwcC9leHRyYS1jb21wb25lbnQvZHJhZy1uLWRyb3AvZHJhZy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyYWduZHJvcCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICA+IGRpdiB7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGN1cnNvcjogbW92ZTtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAmLmV4LW1vdmVkIHtcclxuICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/extra-component/editor/editor.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/extra-component/editor/editor.component.ts ***!
      \************************************************************/

    /*! exports provided: EditorComponent */

    /***/
    function srcAppExtraComponentEditorEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditorComponent", function () {
        return EditorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var EditorComponent = /*#__PURE__*/function () {
        function EditorComponent() {
          _classCallCheck(this, EditorComponent);

          this.subtitle = 'This is some text within a card block.';
        }

        _createClass(EditorComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }]);

        return EditorComponent;
      }();

      EditorComponent.ctorParameters = function () {
        return [];
      };

      EditorComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./editor.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-component/editor/editor.component.html"))["default"]
      }), __metadata("design:paramtypes", [])], EditorComponent);
      /***/
    },

    /***/
    "./src/app/extra-component/extra-component.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/extra-component/extra-component.module.ts ***!
      \***********************************************************/

    /*! exports provided: ExtraComponentModule */

    /***/
    function srcAppExtraComponentExtraComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExtraComponentModule", function () {
        return ExtraComponentModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _extra_component_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./extra-component.routing */
      "./src/app/extra-component/extra-component.routing.ts");
      /* harmony import */


      var _toastr_toastr_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./toastr/toastr.component */
      "./src/app/extra-component/toastr/toastr.component.ts");
      /* harmony import */


      var _editor_editor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./editor/editor.component */
      "./src/app/extra-component/editor/editor.component.ts");
      /* harmony import */


      var _drag_n_drop_drag_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./drag-n-drop/drag.component */
      "./src/app/extra-component/drag-n-drop/drag.component.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var ExtraComponentModule = function ExtraComponentModule() {
        _classCallCheck(this, ExtraComponentModule);
      };

      ExtraComponentModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_extra_component_routing__WEBPACK_IMPORTED_MODULE_6__["ExtraComponentsRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"]],
        declarations: [_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_7__["ToastrComponent"], _editor_editor_component__WEBPACK_IMPORTED_MODULE_8__["EditorComponent"], _drag_n_drop_drag_component__WEBPACK_IMPORTED_MODULE_9__["DragComponent"]]
      })], ExtraComponentModule);
      /***/
    },

    /***/
    "./src/app/extra-component/extra-component.routing.ts":
    /*!************************************************************!*\
      !*** ./src/app/extra-component/extra-component.routing.ts ***!
      \************************************************************/

    /*! exports provided: ExtraComponentsRoutes */

    /***/
    function srcAppExtraComponentExtraComponentRoutingTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExtraComponentsRoutes", function () {
        return ExtraComponentsRoutes;
      });
      /* harmony import */


      var _toastr_toastr_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./toastr/toastr.component */
      "./src/app/extra-component/toastr/toastr.component.ts");
      /* harmony import */


      var _editor_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./editor/editor.component */
      "./src/app/extra-component/editor/editor.component.ts");
      /* harmony import */


      var _drag_n_drop_drag_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./drag-n-drop/drag.component */
      "./src/app/extra-component/drag-n-drop/drag.component.ts");

      var ExtraComponentsRoutes = [{
        path: '',
        children: [{
          path: 'toastr',
          component: _toastr_toastr_component__WEBPACK_IMPORTED_MODULE_0__["ToastrComponent"],
          data: {
            title: 'Toastr Notification',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Toastr Page'
            }]
          }
        }, {
          path: 'editor',
          component: _editor_editor_component__WEBPACK_IMPORTED_MODULE_1__["EditorComponent"],
          data: {
            title: 'Editor Page',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Editor Page'
            }]
          }
        }, {
          path: 'dragndrop',
          component: _drag_n_drop_drag_component__WEBPACK_IMPORTED_MODULE_2__["DragComponent"],
          data: {
            title: 'DragComponent Page',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'DragComponent Page'
            }]
          }
        }]
      }];
      /***/
    },

    /***/
    "./src/app/extra-component/toastr/toastr.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/extra-component/toastr/toastr.component.ts ***!
      \************************************************************/

    /*! exports provided: ToastrComponent */

    /***/
    function srcAppExtraComponentToastrToastrComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastrComponent", function () {
        return ToastrComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var ToastrComponent = /*#__PURE__*/function () {
        function ToastrComponent(toastr) {
          _classCallCheck(this, ToastrComponent);

          this.toastr = toastr;
        }

        _createClass(ToastrComponent, [{
          key: "showSuccess",
          value: function showSuccess() {
            this.toastr.success('You are awesome!', 'Success!');
          }
        }, {
          key: "showError",
          value: function showError() {
            this.toastr.error('This is not good!', 'Oops!');
          }
        }, {
          key: "showWarning",
          value: function showWarning() {
            this.toastr.warning('You are being warned.', 'Alert!');
          }
        }, {
          key: "showInfo",
          value: function showInfo() {
            this.toastr.info('Just some information for you.');
          }
        }]);

        return ToastrComponent;
      }();

      ToastrComponent.ctorParameters = function () {
        return [{
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]
        }];
      };

      ToastrComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./toastr.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-component/toastr/toastr.component.html"))["default"]
      }), __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])], ToastrComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=extra-component-extra-component-module-es5.js.map