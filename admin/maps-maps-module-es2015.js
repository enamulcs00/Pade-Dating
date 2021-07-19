(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maps-maps-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/maps/map-google/map-google.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/maps/map-google/map-google.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Basic Map</h4>\r\n                <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" #map1></agm-map>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Map Styles</h4>\r\n                <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [styles]=\"styles\" #map2></agm-map>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Polylines</h4>\r\n                <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" #map3>\r\n                    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n                    <agm-marker [latitude]=\"latA\" [longitude]=\"lngA\"></agm-marker>\r\n                    <agm-polyline>\r\n                        <agm-polyline-point [latitude]=\"lat\" [longitude]=\"lng\"></agm-polyline-point>\r\n                        <agm-polyline-point [latitude]=\"latA\" [longitude]=\"lngA\"></agm-polyline-point>\r\n                    </agm-polyline>\r\n                </agm-map>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Info Window</h4>\r\n                <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [disableDefaultUI]=\"false\" [zoomControl]=\"false\" #map4>\r\n                    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\">\r\n                        <agm-info-window>InfoWindow content</agm-info-window>\r\n                    </agm-marker>\r\n                </agm-map>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/maps/map-google/map-google.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/maps/map-google/map-google.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sebm-google-map-container {\n  width: 100%;\n  height: 500px;\n  display: flex;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwcy9tYXAtZ29vZ2xlL21hcC1nb29nbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL21hcHMvbWFwLWdvb2dsZS9tYXAtZ29vZ2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYm0tZ29vZ2xlLW1hcC1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/maps/map-google/map-google.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/maps/map-google/map-google.component.ts ***!
  \*********************************************************/
/*! exports provided: MapgoogleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapgoogleComponent", function() { return MapgoogleComponent; });
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

let MapgoogleComponent = class MapgoogleComponent {
    constructor() {
        this.lat = -34.397;
        this.lng = 150.644;
        this.latA = -34.754764;
        this.lngA = 149.736246;
        this.zoom = 8;
        this.styles = [
            {
                featureType: 'all',
                stylers: [
                    {
                        saturation: -80
                    }
                ]
            },
            {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [
                    {
                        hue: '#00ffee'
                    },
                    {
                        saturation: 50
                    }
                ]
            },
            {
                featureType: 'poi.business',
                elementType: 'labels',
                stylers: [
                    {
                        visibility: 'off'
                    }
                ]
            }
        ];
    }
};
MapgoogleComponent.ctorParameters = () => [];
MapgoogleComponent.propDecorators = {
    map1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['map1', { static: true },] }],
    map2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['map2', { static: true },] }],
    map3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['map3', { static: true },] }],
    map4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['map4', { static: true },] }]
};
MapgoogleComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-map-google',
        template: __importDefault(__webpack_require__(/*! raw-loader!./map-google.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/maps/map-google/map-google.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./map-google.component.scss */ "./src/app/maps/map-google/map-google.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], MapgoogleComponent);



/***/ }),

/***/ "./src/app/maps/maps.module.ts":
/*!*************************************!*\
  !*** ./src/app/maps/maps.module.ts ***!
  \*************************************/
/*! exports provided: MapsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsModule", function() { return MapsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _maps_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maps.routing */ "./src/app/maps/maps.routing.ts");
/* harmony import */ var _map_google_map_google_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-google/map-google.component */ "./src/app/maps/map-google/map-google.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let MapsModule = class MapsModule {
};
MapsModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_maps_routing__WEBPACK_IMPORTED_MODULE_4__["MapRoutes"]), _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"]],
        declarations: [_map_google_map_google_component__WEBPACK_IMPORTED_MODULE_5__["MapgoogleComponent"]]
    })
], MapsModule);



/***/ }),

/***/ "./src/app/maps/maps.routing.ts":
/*!**************************************!*\
  !*** ./src/app/maps/maps.routing.ts ***!
  \**************************************/
/*! exports provided: MapRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapRoutes", function() { return MapRoutes; });
/* harmony import */ var _map_google_map_google_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-google/map-google.component */ "./src/app/maps/map-google/map-google.component.ts");

const MapRoutes = [
    {
        path: '',
        children: [
            {
                path: 'google',
                component: _map_google_map_google_component__WEBPACK_IMPORTED_MODULE_0__["MapgoogleComponent"],
                data: {
                    title: 'Google Maps',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Google Maps' }
                    ]
                }
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=maps-maps-module-es2015.js.map