(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["extra-component-extra-component-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-component/drag-n-drop/drag.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/extra-component/drag-n-drop/drag.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-body pb-0\">\n      <h4 class=\"card-title\">Basic Drag n Drop</h4>\n    </div>\n    <ul\n      class=\"list-group pl-0 shadow-sm\"\n      cdkDropList\n      (cdkDropListDropped)=\"drop($event)\"\n      *ngIf=\"movies.length\"\n    >\n      <li\n        class=\"list-group-item border-bottom border-top-0 border-right-0 border-left-0 cursor-pointer d-flex align-items-center\"\n        *ngFor=\"let mname of movies\"\n        cdkDrag\n      >\n        <i class=\"mdi mdi-arrow-right font-medium text-info mr-2 font-18\"></i>\n        <h6 class=\"mb-0\">{{ mname }}</h6>\n      </li>\n    </ul>\n  </div>\n  \n  <h4 class=\"card-title mt-4 pt-2\">Transferring items between lists</h4>\n  \n  <div class=\"row mt-4\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"bg-info py-2 px-3\">\n          <h4 class=\"text-white mb-0\">Todo</h4>\n        </div>\n        <div\n          cdkDropList\n          #todoList=\"cdkDropList\"\n          [cdkDropListData]=\"todo\"\n          [cdkDropListConnectedTo]=\"[doneList]\"\n          class=\"todo\"\n          (cdkDropListDropped)=\"onDrop($event)\"\n        >\n          <div\n            class=\"py-3 cursor-pointer mb-1 d-flex align-items-center border-bottom\"\n            *ngFor=\"let item of todo\"\n            cdkDrag\n          >\n            <span class=\"todo-border\"></span>\n            <h6 class=\"mb-0 ml-3\">{{ item }}</h6>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"bg-success py-2 px-3\">\n          <h4 class=\"text-white mb-0\">Done</h4>\n        </div>\n        <div\n          cdkDropList\n          #doneList=\"cdkDropList\"\n          [cdkDropListData]=\"done\"\n          [cdkDropListConnectedTo]=\"[todoList]\"\n          class=\"done\"\n          (cdkDropListDropped)=\"onDrop($event)\"\n        >\n          <div\n            class=\"py-3 cursor-pointer mb-1 d-flex align-items-center border-bottom\"\n            *ngFor=\"let item of done\"\n            cdkDrag\n          >\n            <span class=\"done-border\"></span>\n            <h6 class=\"mb-0 ml-3\">{{ item }}</h6>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"card\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">List orientation</h4>\n      <ul\n        class=\"list-group list-group-horizontal-lg pl-0 mt-4\"\n        cdkDropList\n        cdkDropListOrientation=\"horizontal\"\n        (cdkDropListDropped)=\"orientationDrop($event)\"\n        *ngIf=\"horizontalOrientation.length\"\n      >\n        <li\n          class=\"list-group-item cursor-pointer text-center\"\n          *ngFor=\"let hname of horizontalOrientation\"\n          cdkDrag\n        >\n          <i\n            class=\"mdi mdi-cube-outline font-medium text-info mr-2 font-18 d-block\"\n          ></i>\n          <h6 class=\"mb-0\">{{ hname }}</h6>\n        </li>\n      </ul>\n    </div>\n  </div>\n  \n  <h4 class=\"card-title mt-4 pt-2\">Drag&Drop enter predicate</h4>\n  <div class=\"row mt-4\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"bg-info py-2 px-3\">\n          <h4 class=\"text-white mb-0\">Available numbers</h4>\n        </div>\n        <div\n          id=\"all\"\n          cdkDropList\n          cdkDropList\n          [cdkDropListData]=\"all\"\n          cdkDropListConnectedTo=\"even\"\n          (cdkDropListDropped)=\"oddevenDrop($event)\"\n          [cdkDropListEnterPredicate]=\"noReturnPredicate\"\n          class=\"todo\"\n        >\n          <div\n            class=\"py-3 cursor-pointer mb-1 d-flex align-items-center border-bottom\"\n            *ngFor=\"let number of all\"\n            [cdkDragData]=\"number\"\n            cdkDrag\n          >\n            <span class=\"todo-border\"></span>\n            <h6 class=\"mb-0 ml-3\">{{ number }}</h6>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"bg-success py-2 px-3\">\n          <h4 class=\"text-white mb-0\">Even numbers</h4>\n        </div>\n        <div\n          id=\"even\"\n          cdkDropList\n          [cdkDropListData]=\"even\"\n          cdkDropListConnectedTo=\"all\"\n          (cdkDropListDropped)=\"oddevenDrop($event)\"\n          [cdkDropListEnterPredicate]=\"evenPredicate\"\n          class=\"done\"\n        >\n          <div\n            class=\"py-3 cursor-pointer mb-1 d-flex align-items-center border-bottom\"\n            *ngFor=\"let number of even\"\n            [cdkDragData]=\"number\"\n            cdkDrag\n          >\n            <span class=\"done-border\"></span>\n            <h6 class=\"mb-0 ml-3\">{{ number }}</h6>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-component/editor/editor.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/extra-component/editor/editor.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Basic Editor</h4>\n                <h6 class=\"card-subtitle\">quill editor with angular and TypeScript. ngx-quill is the new angular 2 and beyond implementation of ngQuill.\n                    <a href=\"https://github.com/KillerCodeMonkey/ngx-quill\" target=\"_blank\">Official website</a>\n                </h6>\n                <!-- <quill-editor [style]=\"{height: '200px'}\"></quill-editor> -->\n            </div>\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-component/toastr/toastr.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/extra-component/toastr/toastr.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-md-4\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Toastr Success</h4>\n                <h6 class=\"card-subtitle\">This is the simpel toastr with success message</h6>\n                <button class=\"btn btn-success\" (click)=\"showSuccess()\">Toastr Success</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-4\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Toastr Danger</h4>\n                <h6 class=\"card-subtitle\">This is the simpel toastr with Danger message</h6>\n                <button class=\"btn btn-danger\" (click)=\"showError()\">Toastr Danger Error</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-4\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Toastr Warning</h4>\n                <h6 class=\"card-subtitle\">This is the simpel toastr with Warning message</h6>\n                <button class=\"btn btn-warning\" (click)=\"showWarning()\">Toastr Warning</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-4\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Toastr Info</h4>\n                <h6 class=\"card-subtitle\">This is the simpel toastr with Info message</h6>\n                <button class=\"btn btn-info\" (click)=\"showInfo()\">Toastr Info</button>\n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./src/app/extra-component/drag-n-drop/drag.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/extra-component/drag-n-drop/drag.component.ts ***!
  \***************************************************************/
/*! exports provided: DragComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragComponent", function() { return DragComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let DragComponent = class DragComponent {
    constructor() {
        this.movies = [
            'Order the server hardware for production as well as test/quality assurance (QA).',
            'Install Tivoli Business Systems Manager and appropriate patches on test or QA servers.',
            'Create configuration level objects for the test LPAR.',
            'Install Tivoli Business Systems Manager and appropriate maintenance on the test LPAR.',
            'Install event enablement on the Tivoli Enterprise Console server.',
            'Install event enablement on the Tivoli Enterprise Console server.',
            'Configure servers, Source/390 on the production LPARs, event enablement on the Tivoli Enterprise Console server, and verify connectivity.',
            'Monitor system performance and adjust hardware as required.',
        ];
        // orientation
        this.horizontalOrientation = [
            'React',
            'Angular',
            'Vuejs',
            'Bootstrap',
            'Laravel',
            'Shopify',
            'Wordpress',
            'Jquery',
            'Ant.js',
            'Reactstrap',
            'Vuetify',
        ];
        // Transfer Items Between Lists
        this.todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
        this.done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail'];
        // ood even number
        this.all = [1, 3, 5, 6, 7, 8, 9];
        this.even = [10, 2, 4];
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.movies, event.previousIndex, event.currentIndex);
    }
    orientationDrop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.horizontalOrientation, event.previousIndex, event.currentIndex);
    }
    onDrop(event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
    oddevenDrop(event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
    /** Predicate function that only allows even numbers to be dropped into a list. */
    evenPredicate(item) {
        return item.data % 2 === 0;
    }
    /** Predicate function that doesn't allow items to be dropped into a list. */
    noReturnPredicate() {
        return false;
    }
};
DragComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        template: __importDefault(__webpack_require__(/*! raw-loader!./drag.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-component/drag-n-drop/drag.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./drag.scss */ "./src/app/extra-component/drag-n-drop/drag.scss")).default]
    })
], DragComponent);



/***/ }),

/***/ "./src/app/extra-component/drag-n-drop/drag.scss":
/*!*******************************************************!*\
  !*** ./src/app/extra-component/drag-n-drop/drag.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dragndrop {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 10px 15px;\n}\n\n.dragndrop > div {\n  border: 1px dashed rgba(0, 0, 0, 0.1);\n  padding: 10px;\n  cursor: move;\n  margin: 5px 0;\n}\n\n.dragndrop > div.ex-moved {\n  background: red;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXh0cmEtY29tcG9uZW50L2RyYWctbi1kcm9wL2RyYWcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztFQUNwQyxrQkFBa0I7QUFDcEI7O0FBSEE7RUFJSSxxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0FBR2pCOztBQVZBO0VBU00sZUFBZTtFQUNmLFlBQVk7QUFLbEIiLCJmaWxlIjoic3JjL2FwcC9leHRyYS1jb21wb25lbnQvZHJhZy1uLWRyb3AvZHJhZy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyYWduZHJvcCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICA+IGRpdiB7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGN1cnNvcjogbW92ZTtcbiAgICBtYXJnaW46IDVweCAwO1xuICAgICYuZXgtbW92ZWQge1xuICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/extra-component/editor/editor.component.ts":
/*!************************************************************!*\
  !*** ./src/app/extra-component/editor/editor.component.ts ***!
  \************************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let EditorComponent = class EditorComponent {
    constructor() {
        this.subtitle = 'This is some text within a card block.';
    }
    ngAfterViewInit() { }
};
EditorComponent.ctorParameters = () => [];
EditorComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        template: __importDefault(__webpack_require__(/*! raw-loader!./editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-component/editor/editor.component.html")).default
    }),
    __metadata("design:paramtypes", [])
], EditorComponent);



/***/ }),

/***/ "./src/app/extra-component/extra-component.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/extra-component/extra-component.module.ts ***!
  \***********************************************************/
/*! exports provided: ExtraComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraComponentModule", function() { return ExtraComponentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _extra_component_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extra-component.routing */ "./src/app/extra-component/extra-component.routing.ts");
/* harmony import */ var _toastr_toastr_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toastr/toastr.component */ "./src/app/extra-component/toastr/toastr.component.ts");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/extra-component/editor/editor.component.ts");
/* harmony import */ var _drag_n_drop_drag_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./drag-n-drop/drag.component */ "./src/app/extra-component/drag-n-drop/drag.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let ExtraComponentModule = class ExtraComponentModule {
};
ExtraComponentModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_extra_component_routing__WEBPACK_IMPORTED_MODULE_6__["ExtraComponentsRoutes"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"]
        ],
        declarations: [
            _toastr_toastr_component__WEBPACK_IMPORTED_MODULE_7__["ToastrComponent"],
            _editor_editor_component__WEBPACK_IMPORTED_MODULE_8__["EditorComponent"],
            _drag_n_drop_drag_component__WEBPACK_IMPORTED_MODULE_9__["DragComponent"]
        ]
    })
], ExtraComponentModule);



/***/ }),

/***/ "./src/app/extra-component/extra-component.routing.ts":
/*!************************************************************!*\
  !*** ./src/app/extra-component/extra-component.routing.ts ***!
  \************************************************************/
/*! exports provided: ExtraComponentsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraComponentsRoutes", function() { return ExtraComponentsRoutes; });
/* harmony import */ var _toastr_toastr_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toastr/toastr.component */ "./src/app/extra-component/toastr/toastr.component.ts");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/extra-component/editor/editor.component.ts");
/* harmony import */ var _drag_n_drop_drag_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag-n-drop/drag.component */ "./src/app/extra-component/drag-n-drop/drag.component.ts");



const ExtraComponentsRoutes = [
    {
        path: '',
        children: [
            {
                path: 'toastr',
                component: _toastr_toastr_component__WEBPACK_IMPORTED_MODULE_0__["ToastrComponent"],
                data: {
                    title: 'Toastr Notification',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Toastr Page' }
                    ]
                }
            },
            {
                path: 'editor',
                component: _editor_editor_component__WEBPACK_IMPORTED_MODULE_1__["EditorComponent"],
                data: {
                    title: 'Editor Page',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Editor Page' }
                    ]
                }
            },
            {
                path: 'dragndrop',
                component: _drag_n_drop_drag_component__WEBPACK_IMPORTED_MODULE_2__["DragComponent"],
                data: {
                    title: 'DragComponent Page',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'DragComponent Page' }
                    ]
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/extra-component/toastr/toastr.component.ts":
/*!************************************************************!*\
  !*** ./src/app/extra-component/toastr/toastr.component.ts ***!
  \************************************************************/
/*! exports provided: ToastrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrComponent", function() { return ToastrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let ToastrComponent = class ToastrComponent {
    constructor(toastr) {
        this.toastr = toastr;
    }
    showSuccess() {
        this.toastr.success('You are awesome!', 'Success!');
    }
    showError() {
        this.toastr.error('This is not good!', 'Oops!');
    }
    showWarning() {
        this.toastr.warning('You are being warned.', 'Alert!');
    }
    showInfo() {
        this.toastr.info('Just some information for you.');
    }
};
ToastrComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] }
];
ToastrComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        template: __importDefault(__webpack_require__(/*! raw-loader!./toastr.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-component/toastr/toastr.component.html")).default
    }),
    __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
], ToastrComponent);



/***/ })

}]);
//# sourceMappingURL=extra-component-extra-component-module-es2015.js.map