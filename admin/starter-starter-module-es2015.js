(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["starter-starter-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/starter/starter.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/starter/starter.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                {{subtitle}}\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/starter/starter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/starter/starter.component.ts ***!
  \**********************************************/
/*! exports provided: StarterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterComponent", function() { return StarterComponent; });
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

let StarterComponent = class StarterComponent {
    constructor() {
        this.subtitle = 'This is some text within a card block.';
    }
    ngAfterViewInit() { }
};
StarterComponent.ctorParameters = () => [];
StarterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        template: __importDefault(__webpack_require__(/*! raw-loader!./starter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/starter/starter.component.html")).default
    }),
    __metadata("design:paramtypes", [])
], StarterComponent);



/***/ }),

/***/ "./src/app/starter/starter.module.ts":
/*!*******************************************!*\
  !*** ./src/app/starter/starter.module.ts ***!
  \*******************************************/
/*! exports provided: StarterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterModule", function() { return StarterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _starter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./starter.component */ "./src/app/starter/starter.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const routes = [
    {
        path: '',
        data: {
            title: 'Starter Page',
            urls: [
                { title: 'Dashboard', url: '/dashboard' },
                { title: 'Starter Page' }
            ]
        },
        component: _starter_component__WEBPACK_IMPORTED_MODULE_4__["StarterComponent"]
    }
];
let StarterModule = class StarterModule {
};
StarterModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        declarations: [_starter_component__WEBPACK_IMPORTED_MODULE_4__["StarterComponent"]]
    })
], StarterModule);



/***/ })

}]);
//# sourceMappingURL=starter-starter-module-es2015.js.map