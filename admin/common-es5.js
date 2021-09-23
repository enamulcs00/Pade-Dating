(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./src/app/shared/guards/auth.guard.ts":
    /*!*********************************************!*\
      !*** ./src/app/shared/guards/auth.guard.ts ***!
      \*********************************************/

    /*! exports provided: AuthGuard */

    /***/
    function srcAppSharedGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/api.service */
      "./src/app/shared/services/api.service.ts");

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

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, toastr, api) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.toastr = toastr;
          this.api = api;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            if (this.api.isLoggedIn()) {
              return true;
            } else {
              this.router.navigate(['/login']);
            }
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }];
      };

      AuthGuard = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])], AuthGuard);
      /***/
    },

    /***/
    "./src/app/shared/services/common.service.ts":
    /*!***************************************************!*\
      !*** ./src/app/shared/services/common.service.ts ***!
      \***************************************************/

    /*! exports provided: CommonService */

    /***/
    function srcAppSharedServicesCommonServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonService", function () {
        return CommonService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-spinner */
      "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

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
      }; // import { ApiService } from "../api/api.service";


      var CommonService = /*#__PURE__*/function () {
        function CommonService(spinner, http) {
          _classCallCheck(this, CommonService);

          this.spinner = spinner;
          this.http = http;
          this.oderStatus = "pending";
          this.storeOderStatus = "pending";
          this.dropSetting = {
            singleSelection: false,
            idField: "_id",
            textField: "name",
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            itemsShowLimit: 3,
            allowSearchFilter: true
          };
          this.singleDropSetting = {
            enableCheckAll: false,
            singleSelection: true,
            idField: "_id",
            textField: "name",
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            itemsShowLimit: 3,
            allowSearchFilter: true
          };
          this.currencyOptions = [{
            code: "INR",
            symbol: "₹"
          }, {
            code: "USD",
            symbol: "$"
          }, {
            code: "Peso",
            symbol: "₱"
          }];
          this.getCountryCode();
        }

        _createClass(CommonService, [{
          key: "getCountryCode",
          value: function getCountryCode() {
            return this.http.get("assets/json/countryCode.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response;
            }));
          }
        }, {
          key: "showSpinner",
          value: function showSpinner() {
            this.spinner.show();
          }
        }, {
          key: "hideSpinner",
          value: function hideSpinner() {
            this.spinner.hide();
          }
        }]);

        return CommonService;
      }();

      CommonService.ctorParameters = function () {
        return [{
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      CommonService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: "root"
      }), __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], CommonService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map