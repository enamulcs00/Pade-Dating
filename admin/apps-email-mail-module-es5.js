(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apps-email-mail-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/email/mail-compose/mail-compose.component.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/email/mail-compose/mail-compose.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppsEmailMailComposeMailComposeComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card-body compose\">\r\n   \r\n    <form method=\"get\" action=\"#\">\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"To\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Cc / Bcc\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Subject\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <textarea class=\"form-control\" placeholder=\"Message\" rows=\"10\"></textarea>\r\n        </div>\r\n        <div class=\"form-group float-right\">\r\n            <a [routerLink]=\"['../mail-list/inbox']\" class=\"btn btn-secondary\">Cancel</a>\r\n            <button class=\"btn btn-main\" type=\"submit\">Send</button>            \r\n        </div>\r\n    </form>\r\n\r\n </div>\r\n \r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/email/mail-detail/mail-detail.component.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/email/mail-detail/mail-detail.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppsEmailMailDetailMailDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"mail\">  \r\n    <div class=\"card-body\">\r\n        <h4 class=\"mb-3\">{{mail.subject}}</h4>\r\n        \r\n        <div class=\"d-flex mt-4 mb-4\">\r\n            <div class=\"round mr-2 flex-shrink-0\">\r\n                <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n            </div>\r\n            <div class=\"\">\r\n                <span class=\"font-bold\">{{mail.sender}}</span>\r\n                <span *ngIf=\"mail.senderMail\" class=\"email text-truncate d-block w-75\">&lt;{{mail.senderMail}}&gt;</span>\r\n                <span class=\"receiver\">to me</span>\r\n            </div>\r\n\r\n            <div class=\"ml-auto\">\r\n                <span class=\"mail-date\"> {{mail.date}} </span>\r\n                \r\n            </div>\r\n        </div>\r\n        <div [innerHTML]=\"mail.body\" class=\"mailbox-body\"></div>\r\n\r\n        <div class=\"mail-attachments\" *ngIf=\"mail.attachments.length > 0\">\r\n            <hr/>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">                    \r\n                    <p>\r\n                        <strong>{{mail.attachments.length}} attachments</strong> &nbsp;-&nbsp; \r\n                        <a href=\"#\">Download all attachments</a>&nbsp;&nbsp;&nbsp;\r\n                        <a href=\"#\">View all Images</a>\r\n                    </p>\r\n                    <section *ngFor=\"let attachment of mail.attachments; let i = index\" class=\"attachment\">\r\n                        <img src=\"{{attachment}}\" alt=\"\">\r\n                        <h5 class=\"title\">image-{{i + 1}}.jpg</h5>\r\n                        <p>\r\n                            457K  &nbsp;&nbsp;\r\n                            <a href=\"#\">View</a> &nbsp;&nbsp;\r\n                            <a href=\"#\">Download</a>\r\n                        </p>\r\n                    </section>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/email/mail-list/mail-list.component.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/email/mail-list/mail-list.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppsEmailMailListMailListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-flex mailbox-header-bar p-3 bg-white align-items-center border-top\">\r\n    <div class=\"custom-control custom-checkbox\">\r\n        <input id=\"toggle-all\" class=\"custom-control-input\" type=\"checkbox\" [(ngModel)]=\"isAllSelected\"\r\n            (click)=\"toggleAll()\">\r\n        <label for=\"toggle-all\" class=\"custom-control-label\">Check all</label>\r\n    </div>\r\n\r\n    <div class=\"ml-auto\">\r\n        <input class=\"form-control form-control-sm\" id=\"table-search-input\" [(ngModel)]=\"searchText\" type=\"text\"\r\n            placeholder=\"Search mail...\">\r\n    </div>\r\n</div>\r\n<div class=\"table-responsive\">\r\n    <table class=\"table table-hover no-wrap bg-white\">\r\n        <tbody>\r\n            <tr *ngFor=\"let mail of mails | async | MailSearch : searchText\"\r\n                [ngClass]=\"{'unread': mail.unread, 'selected': mail.selected}\">\r\n                <td class=\"mail-checkbox pl-3 width-50\">\r\n                    <div class=\"custom-control custom-checkbox mycustomcheckbox\">\r\n                        <input id=\"checkbox{{mail.id}}\" class=\"custom-control-input\" type=\"checkbox\"\r\n                            [(ngModel)]=\"mail.selected\" (ngModelChange)=\"toggleOne()\">\r\n                        <label attr.for=\"checkbox{{mail.id}}\" class=\"custom-control-label\"></label>\r\n                    </div>\r\n                </td>\r\n                <td class=\"mail-star width-50\" *ngIf=\"router.url != '/pages/mail/mail-list/trash'\">\r\n                    <i class=\"fa-star\" [ngClass]=\"{'fas': mail.starred, 'far': !mail.starred}\"\r\n                        (click)=\"changeStarStatus(mail)\"></i>\r\n                </td>\r\n                <td (click)=\"goToDetail(mail)\" class=\"sender\">{{ mail.sender }}</td>\r\n                <td (click)=\"goToDetail(mail)\" class=\"subject\" [innerHTML]=\"mail.subject\"></td>\r\n                <td (click)=\"goToDetail(mail)\" class=\"attachment\"><i *ngIf=\"mail.attachment\"\r\n                        class=\"fa fa-paperclip\"></i></td>\r\n                <td (click)=\"goToDetail(mail)\" class=\"date\">{{mail.date}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/email/mail.component.html":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/email/mail.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppsEmailMailComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"email-container px-3\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3 col-md-3 col-lg-3 col-xl-2 bg-white border-right\">\r\n\r\n            <h2 class=\"mb-0 pt-4 text-center font-weight-bold\"> Mailbox <a\r\n                    class=\"text-dark float-right custom-control-button\" (click)=\"openClleft()\"\r\n                    href=\"javascript:void(0)\"><i class=\"ti-menu\"></i></a> </h2>\r\n        </div>\r\n        <div class=\"col-sm-9 col-md-9 col-lg-9 col-xl-10 bg-white\">\r\n            <div class=\"pb-3 pt-3 d-flex align-items-center\">\r\n                <div class=\"b-btn mr-1\" [style.display]=\"(id || !type) ? 'inline-block' : 'none'\" data-toggle=\"tooltip\"\r\n                    data-placement=\"top\" data-animation=\"false\" title=\"Back to {{type}}\">\r\n                    <button (click)=\"getBack()\" type=\"button\" class=\"btn btn-dark btn-sm\">\r\n                        <i class=\"fa fa-arrow-left\"></i>\r\n                    </button>\r\n                </div>\r\n\r\n                <div class=\"b-btn mr-1\" *ngIf=\"id\" data-toggle=\"tooltip\" data-placement=\"top\" data-animation=\"false\"\r\n                    title=\"Delete\">\r\n                    <button (click)=\"trash()\" type=\"button\" class=\"btn btn-dark btn-sm\">\r\n                        <i class=\"fa fa-trash\"></i>\r\n                    </button>\r\n                </div>\r\n\r\n                <div class=\"b-btn mr-1\"\r\n                    [style.display]=\"(router.url == '/apps/email/mail-compose' || id) ? 'none' : 'inline-block'\"\r\n                    data-toggle=\"tooltip\" data-placement=\"top\" data-animation=\"false\" title=\"Refresh\">\r\n                    <button type=\"button\" class=\"btn btn-dark btn-sm\"><span class=\"fas fa-sync-alt\"></span></button>\r\n                </div>\r\n\r\n                <div ngbDropdown class=\"btn-group\"\r\n                    [style.display]=\"(router.url == '/apps/email/mail-compose') ? 'none' : 'block'\">\r\n                    <button class=\"btn btn-warning btn-sm\" type=\"button\" ngbDropdownToggle\r\n                        aria-controls=\"dropdown-basic\">\r\n                        More\r\n                    </button>\r\n                    <div class=\"\" id=\"dropdown-basic\" ngbDropdownMenu>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"setAsRead()\">Mark as read</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"setAsUnRead()\">Mark as unread</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"deleteCheckedMail()\">Delete</a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"ml-auto\">\r\n                    <span class=\"mr-1 text-dark\"><b>1</b>–<b>50</b> of <b>50</b></span>\r\n                    <div class=\"btn-group btn-group-sm\">\r\n                        <button type=\"button\" class=\"btn btn-dark\">\r\n                            <span class=\"fa fa-chevron-left\"></span>\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-dark\">\r\n                            <span class=\"fa fa-chevron-right\"></span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3 col-lg-3 col-xl-2 bg-white border-right\">\r\n            <div class=\"inbox-panel p-2 bg-white\" [ngClass]=\"status ? 'showlpanel' : ''\">\r\n\r\n                <a [routerLink]=\"['mail-compose']\" class=\"btn btn-danger rounded-pill btn-block mt-3\"\r\n                    role=\"button\">COMPOSE</a>\r\n\r\n                <div class=\"mailbox bg-white\">\r\n                    <ul class=\"list-group custom-group message-center\" style=\"height: unset;\">\r\n                        <li class=\"py-2\">\r\n                            <h6 class=\"font-weight-normal text-muted text-uppercase mb-0 mt-3 font-12\">Mailbox</h6>\r\n                        </li>\r\n                        <li class=\"list-group-item p-0\">\r\n                            <a [routerLink]=\"['mail-list/inbox']\"\r\n                                class=\"message-item d-flex align-items-center border-0 py-3 font-weight-normal\">\r\n                                <i class=\"fa-inbox fas font-18 mr-2\"></i>\r\n                                Inbox\r\n                                <div class=\"ml-auto\">\r\n                                    <span class=\"badge badge-info badge-pill\">3</span>\r\n                                </div>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"list-group-item p-0\">\r\n                            <a [routerLink]=\"['mail-list/sent']\"\r\n                                class=\"message-item d-flex align-items-center border-0 py-3 font-weight-normal\">\r\n                                <i class=\"fa-paper-plane fas font-18 mr-2\"></i>\r\n                                Sent Mail\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"list-group-item p-0\">\r\n                            <a [routerLink]=\"['mail-list/drafts']\"\r\n                                class=\"message-item d-flex align-items-center border-0 py-3 font-weight-normal\">\r\n                                <i class=\"fa-box fas font-18 mr-2\"></i>\r\n                                Drafts\r\n                                <div class=\"ml-auto\">\r\n                                    <span class=\"badge badge-info badge-pill\">2</span>\r\n                                </div>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"list-group-item p-0\">\r\n                            <a [routerLink]=\"['mail-list/trash']\"\r\n                                class=\"message-item d-flex align-items-center border-0 py-3 font-weight-normal\">\r\n                                <i class=\"fa-history fas font-18 mr-2\"></i>\r\n                                Trash\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"py-2\">\r\n                            <h6 class=\"font-weight-normal text-muted text-uppercase mb-0 mt-3 font-12\">Filters</h6>\r\n                        </li>\r\n                        <li class=\"list-group-item p-0\">\r\n                            <a [routerLink]=\"['mail-list/starred']\"\r\n                                class=\"message-item d-flex align-items-center border-0 py-3 font-weight-normal\">\r\n                                <i class=\"fas fa-star font-18 mr-2\"></i>\r\n                                Starred\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"py-2\">\r\n                            <h6 class=\"font-weight-normal text-muted text-uppercase mb-0 mt-3 font-12\">Labels</h6>\r\n                        </li>\r\n                        <li class=\"list-group-item p-0\">\r\n                            <a href=\"#\" class=\"message-item d-flex align-items-center border-0 py-3 font-weight-normal\">\r\n                                <i class=\"fa fa-circle text-danger font-18 mr-2\"></i>\r\n                                Notes\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"list-group-item p-0\">\r\n                            <a href=\"#\" class=\"message-item d-flex align-items-center border-0 py-3 font-weight-normal\">\r\n                                <i class=\"fa fa-circle text-warning font-18 mr-2\"></i>\r\n                                Personal\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"list-group-item p-0\">\r\n                            <a href=\"#\" class=\"message-item d-flex align-items-center border-0 py-3 font-weight-normal\">\r\n                                <i class=\"fa fa-circle text-info font-18 mr-2\"></i>\r\n                                Travel\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-9 col-lg-9 col-xl-10 bg-white\">\r\n            <div class=\"inbox-right-panel\">\r\n                <router-outlet></router-outlet>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>";
      /***/
    },

    /***/
    "./node_modules/rxjs-compat/Subject.js":
    /*!*********************************************!*\
      !*** ./node_modules/rxjs-compat/Subject.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsCompatSubjectJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      exports.Subject = rxjs_1.Subject; //# sourceMappingURL=Subject.js.map

      /***/
    },

    /***/
    "./node_modules/rxjs-compat/add/operator/switchMap.js":
    /*!************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/switchMap.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsCompatAddOperatorSwitchMapJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var switchMap_1 = __webpack_require__(
      /*! ../../operator/switchMap */
      "./node_modules/rxjs-compat/operator/switchMap.js");

      rxjs_1.Observable.prototype.switchMap = switchMap_1.switchMap; //# sourceMappingURL=switchMap.js.map

      /***/
    },

    /***/
    "./node_modules/rxjs-compat/operator/switchMap.js":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/switchMap.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsCompatOperatorSwitchMapJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /**
       * Projects each source value to an Observable which is merged in the output
       * Observable, emitting values only from the most recently projected Observable.
       *
       * <span class="informal">Maps each value to an Observable, then flattens all of
       * these inner Observables using {@link switch}.</span>
       *
       * <img src="./img/switchMap.png" width="100%">
       *
       * Returns an Observable that emits items based on applying a function that you
       * supply to each item emitted by the source Observable, where that function
       * returns an (so-called "inner") Observable. Each time it observes one of these
       * inner Observables, the output Observable begins emitting the items emitted by
       * that inner Observable. When a new inner Observable is emitted, `switchMap`
       * stops emitting items from the earlier-emitted inner Observable and begins
       * emitting items from the new one. It continues to behave like this for
       * subsequent inner Observables.
       *
       * @example <caption>Rerun an interval Observable on every click event</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
       * result.subscribe(x => console.log(x));
       *
       * @see {@link concatMap}
       * @see {@link exhaustMap}
       * @see {@link mergeMap}
       * @see {@link switch}
       * @see {@link switchMapTo}
       *
       * @param {function(value: T, ?index: number): ObservableInput} project A function
       * that, when applied to an item emitted by the source Observable, returns an
       * Observable.
       * @return {Observable} An Observable that emits the result of applying the
       * projection function (and the optional `resultSelector`) to each item emitted
       * by the source Observable and taking only the values from the most recently
       * projected inner Observable.
       * @method switchMap
       * @owner Observable
       */


      function switchMap(project) {
        return operators_1.switchMap(project)(this);
      }

      exports.switchMap = switchMap; //# sourceMappingURL=switchMap.js.map

      /***/
    },

    /***/
    "./node_modules/rxjs/Subject.js":
    /*!**************************************!*\
      !*** ./node_modules/rxjs/Subject.js ***!
      \**************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsSubjectJs(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! rxjs-compat/Subject */
      "./node_modules/rxjs-compat/Subject.js")); //# sourceMappingURL=Subject.js.map

      /***/

    },

    /***/
    "./node_modules/rxjs/add/operator/switchMap.js":
    /*!*****************************************************!*\
      !*** ./node_modules/rxjs/add/operator/switchMap.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsAddOperatorSwitchMapJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __webpack_require__(
      /*! rxjs-compat/add/operator/switchMap */
      "./node_modules/rxjs-compat/add/operator/switchMap.js"); //# sourceMappingURL=switchMap.js.map

      /***/

    },

    /***/
    "./src/app/apps/email/app.state.ts":
    /*!*****************************************!*\
      !*** ./src/app/apps/email/app.state.ts ***!
      \*****************************************/

    /*! exports provided: AppState */

    /***/
    function srcAppAppsEmailAppStateTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppState", function () {
        return AppState;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/Subject */
      "./node_modules/rxjs/Subject.js");
      /* harmony import */


      var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__);

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

      var AppState = /*#__PURE__*/function () {
        function AppState() {
          var _this = this;

          _classCallCheck(this, AppState);

          this._data = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this._dataStream$ = this._data.asObservable();
          this._subscriptions = new Map();

          this._dataStream$.subscribe(function (data) {
            return _this._onEvent(data);
          });
        }

        _createClass(AppState, [{
          key: "notifyDataChanged",
          value: function notifyDataChanged(event, value) {// const current:any = this._data[event];
            // if (current !== value) {
            //   this._data[event] = value;
            //   this._data.next({
            //     event: event,
            //     data: this._data[event]
            //   });
            // }
          }
        }, {
          key: "subscribe",
          value: function subscribe(event, callback) {
            var subscribers = this._subscriptions.get(event) || [];
            subscribers.push(callback);

            this._subscriptions.set(event, subscribers);
          }
        }, {
          key: "_onEvent",
          value: function _onEvent(data) {
            var subscribers = this._subscriptions.get(data['event']) || [];
            subscribers.forEach(function (callback) {
              callback.call(null, data['data']);
            });
          }
        }]);

        return AppState;
      }();

      AppState.ctorParameters = function () {
        return [];
      };

      AppState = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [])], AppState);
      /***/
    },

    /***/
    "./src/app/apps/email/mail-compose/mail-compose.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/apps/email/mail-compose/mail-compose.component.ts ***!
      \*******************************************************************/

    /*! exports provided: MailComposeComponent */

    /***/
    function srcAppAppsEmailMailComposeMailComposeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailComposeComponent", function () {
        return MailComposeComponent;
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

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var MailComposeComponent = function MailComposeComponent() {
        _classCallCheck(this, MailComposeComponent);
      };

      MailComposeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-mail-compose',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./mail-compose.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/email/mail-compose/mail-compose.component.html"))["default"]
      })], MailComposeComponent);
      /***/
    },

    /***/
    "./src/app/apps/email/mail-detail/mail-detail.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/apps/email/mail-detail/mail-detail.component.ts ***!
      \*****************************************************************/

    /*! exports provided: MailDetailComponent */

    /***/
    function srcAppAppsEmailMailDetailMailDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailDetailComponent", function () {
        return MailDetailComponent;
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


      var _mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../mail.service */
      "./src/app/apps/email/mail.service.ts");

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

      var MailDetailComponent = /*#__PURE__*/function () {
        function MailDetailComponent(service, route, router) {
          _classCallCheck(this, MailDetailComponent);

          this.service = service;
          this.route = route;
          this.router = router;
          this.mail = undefined;
          this.replyMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(MailDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            // this.route.params
            // .switchMap((params: Params) => this.service.getMail(+params['id']))
            // .subscribe((mail: Mail) => this.mail = mail);
            this.route.params.forEach(function (params) {
              if (params['id'] !== undefined) {
                var id = +params['id'];

                _this2.service.getMail(id).then(function (mail) {
                  return _this2.mail = mail;
                });
              }
            });
          }
        }, {
          key: "goToReply",
          value: function goToReply(mail) {
            this.replyMessage.emit(mail);
          }
        }, {
          key: "trash",
          value: function trash(id) {
            this.service.getMail(id).then(function (mail) {
              if (mail !== undefined) {
                mail.trash = true;
                mail.sent = false;
                mail.draft = false;
                mail.starred = false;
              }
            });
            this.router.navigate(['apps/email/mail-list/inbox']);
          }
        }]);

        return MailDetailComponent;
      }();

      MailDetailComponent.ctorParameters = function () {
        return [{
          type: _mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      MailDetailComponent.propDecorators = {
        replyMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      MailDetailComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-mail-detail',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./mail-detail.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/email/mail-detail/mail-detail.component.html"))["default"]
      }), __metadata("design:paramtypes", [_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], MailDetailComponent);
      /***/
    },

    /***/
    "./src/app/apps/email/mail-list/mail-list.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/apps/email/mail-list/mail-list.component.ts ***!
      \*************************************************************/

    /*! exports provided: MailListComponent */

    /***/
    function srcAppAppsEmailMailListMailListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailListComponent", function () {
        return MailListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/add/operator/switchMap */
      "./node_modules/rxjs/add/operator/switchMap.js");
      /* harmony import */


      var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _mail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../mail.service */
      "./src/app/apps/email/mail.service.ts");
      /* harmony import */


      var _app_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../app.state */
      "./src/app/apps/email/app.state.ts");

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

      var MailListComponent = /*#__PURE__*/function () {
        function MailListComponent(service, route, router, state) {
          var _this3 = this;

          _classCallCheck(this, MailListComponent);

          this.service = service;
          this.route = route;
          this.router = router;
          this.state = state;
          this.mails = null;
          this.type = null;
          this.isAllSelected = false;
          this.searchText = null;
          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
              _this3.unSelectAll();

              _this3.searchText = '';
            }
          });
          this.state.subscribe('markAsRead', function () {
            _this3.markAllAsRead();
          });
          this.state.subscribe('markAsUnRead', function () {
            _this3.markAllAsUnRead();
          });
          this.state.subscribe('deleteChecked', function () {
            _this3.deleteAllCheckedMail();
          });
        }

        _createClass(MailListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getMails();
          }
        }, {
          key: "getMails",
          value: function getMails() {
            var _this4 = this;

            this.mails = this.route.params.switchMap(function (params) {
              _this4.type = params['type'];

              switch (_this4.type) {
                case 'inbox':
                  return _this4.service.getInboxMails();

                case 'starred':
                  return _this4.service.getStarredMails();

                case 'sent':
                  return _this4.service.getSentMails();

                case 'drafts':
                  return _this4.service.getDraftMails();

                case 'trash':
                  return _this4.service.getTrashMails();

                default:
                  return _this4.service.getInboxMails();
              }
            });
          }
        }, {
          key: "toggleAll",
          value: function toggleAll() {
            var _a;

            var toggleStatus = !this.isAllSelected;
            (_a = this.mails) === null || _a === void 0 ? void 0 : _a.subscribe(function (result) {
              result.forEach(function (mail) {
                mail.selected = toggleStatus;
              });
            });
          }
        }, {
          key: "toggleOne",
          value: function toggleOne() {
            var _this5 = this;

            var _a;

            (_a = this.mails) === null || _a === void 0 ? void 0 : _a.subscribe(function (result) {
              _this5.isAllSelected = result.every(function (mail) {
                return mail.selected === true;
              });
            });
          }
        }, {
          key: "unSelectAll",
          value: function unSelectAll() {
            this.isAllSelected = false;

            if (this.mails) {
              this.mails.subscribe(function (result) {
                result.forEach(function (mail) {
                  mail.selected = false;
                });
              });
            }
          }
        }, {
          key: "markAllAsRead",
          value: function markAllAsRead() {
            var _a;

            (_a = this.mails) === null || _a === void 0 ? void 0 : _a.subscribe(function (result) {
              result.forEach(function (mail) {
                if (mail.selected) {
                  mail.unread = false;
                }
              });
            });
          }
        }, {
          key: "markAllAsUnRead",
          value: function markAllAsUnRead() {
            var _a;

            (_a = this.mails) === null || _a === void 0 ? void 0 : _a.subscribe(function (result) {
              result.forEach(function (mail) {
                if (mail.selected) {
                  mail.unread = true;
                }
              });
            });
          }
        }, {
          key: "deleteAllCheckedMail",
          value: function deleteAllCheckedMail() {
            var _a;

            (_a = this.mails) === null || _a === void 0 ? void 0 : _a.subscribe(function (result) {
              result.forEach(function (mail) {
                if (mail.selected) {
                  mail.trash = true;
                  mail.sent = false;
                  mail.draft = false;
                  mail.starred = false;
                }
              });
            });
            this.getMails();
            this.isAllSelected = false;
          }
        }, {
          key: "goToDetail",
          value: function goToDetail(mail) {
            mail.unread = false;
            this.router.navigate(['apps/email/mail-list/' + this.type, mail.id]);
          }
        }, {
          key: "changeStarStatus",
          value: function changeStarStatus(mail) {
            mail.starred = !mail.starred;
          }
        }]);

        return MailListComponent;
      }();

      MailListComponent.ctorParameters = function () {
        return [{
          type: _mail_service__WEBPACK_IMPORTED_MODULE_3__["MailService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _app_state__WEBPACK_IMPORTED_MODULE_4__["AppState"]
        }];
      };

      MailListComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-inbox-list',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./mail-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/email/mail-list/mail-list.component.html"))["default"]
      }), __metadata("design:paramtypes", [_mail_service__WEBPACK_IMPORTED_MODULE_3__["MailService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_state__WEBPACK_IMPORTED_MODULE_4__["AppState"]])], MailListComponent);
      /***/
    },

    /***/
    "./src/app/apps/email/mail.component.scss":
    /*!************************************************!*\
      !*** ./src/app/apps/email/mail.component.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppsEmailMailComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".email-container {\n  overflow: hidden;\n}\n\n.email-container .unread {\n  font-weight: 800;\n}\n\n.email-container .mail-star .fa-star {\n  color: #f9a913;\n}\n\n.email-container .inbox-right-panel,\n.email-container .inbox-panel {\n  min-height: calc(100vh - 300px);\n}\n\n.email-container .inbox-right-panel {\n  margin: 0 -10px;\n}\n\n.email-container .inbox-right-panel .table tr {\n  cursor: pointer;\n}\n\n.email-container .subject,\n.email-container .sender {\n  max-width: 350px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.email-container .sender {\n  max-width: 150px;\n}\n\n.email-container .custom-control-button {\n  display: none;\n}\n\n.email-container .width-50 {\n  width: 50px;\n}\n\n.email-container .custom-group .list-group-item {\n  border: 0px;\n  padding: 0.75rem 0.25rem;\n}\n\n.email-container .custom-group .list-group-item a {\n  color: #3e556a;\n}\n\n@media (max-width: 767px) {\n  .email-container .inbox-panel {\n    position: absolute;\n    width: 200px;\n    min-height: 100vh;\n    height: 100%;\n    background: white;\n    left: -202px;\n    z-index: 10;\n    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);\n    padding: 0 10px;\n  }\n  .email-container .inbox-panel.showlpanel {\n    left: 0px;\n  }\n  .email-container .custom-control-button {\n    display: block;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwcy9lbWFpbC9tYWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUZBO0VBSUksZ0JBQWdCO0FBRXBCOztBQU5BO0VBT0ksY0FBYztBQUdsQjs7QUFWQTs7RUFXSSwrQkFBK0I7QUFJbkM7O0FBZkE7RUFjSSxlQUFlO0FBS25COztBQW5CQTtFQWdCTSxlQUFlO0FBT3JCOztBQXZCQTs7RUFxQkksZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFPM0I7O0FBOUJBO0VBMEJJLGdCQUFnQjtBQVFwQjs7QUFsQ0E7RUE2QkksYUFBYTtBQVNqQjs7QUF0Q0E7RUFpQ0ksV0FBVztBQVNmOztBQTFDQTtFQXFDTSxXQUFXO0VBQ1gsd0JBQXdCO0FBUzlCOztBQS9DQTtFQXdDUSxjQUFjO0FBV3RCOztBQVBFO0VBNUNGO0lBOENNLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVc7SUFDWCx5Q0FBeUM7SUFDekMsZUFBZTtFQVVuQjtFQWhFRjtJQXdEUSxTQUFTO0VBV2Y7RUFuRUY7SUE2RE0sY0FBYztFQVNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwcy9lbWFpbC9tYWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtYWlsLWNvbnRhaW5lciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLnVucmVhZCB7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gIH1cclxuICAubWFpbC1zdGFyIC5mYS1zdGFyIHtcclxuICAgIGNvbG9yOiAjZjlhOTEzO1xyXG4gIH1cclxuICAuaW5ib3gtcmlnaHQtcGFuZWwsXHJcbiAgLmluYm94LXBhbmVsIHtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzMDBweCk7XHJcbiAgfVxyXG4gIC5pbmJveC1yaWdodC1wYW5lbCB7XHJcbiAgICBtYXJnaW46IDAgLTEwcHg7XHJcbiAgICAudGFibGUgdHIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zdWJqZWN0LFxyXG4gIC5zZW5kZXIge1xyXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB9XHJcbiAgLnNlbmRlciB7XHJcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gIH1cclxuICAuY3VzdG9tLWNvbnRyb2wtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAud2lkdGgtNTAge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgfVxyXG4gIC5jdXN0b20tZ3JvdXAge1xyXG4gICAgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgICBwYWRkaW5nOiAwLjc1cmVtIDAuMjVyZW07XHJcbiAgICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjM2U1NTZhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmluYm94LXBhbmVsIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBsZWZ0OiAtMjAycHg7XHJcbiAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDJweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAmLnNob3dscGFuZWwge1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jdXN0b20tY29udHJvbC1idXR0b24ge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/apps/email/mail.component.ts":
    /*!**********************************************!*\
      !*** ./src/app/apps/email/mail.component.ts ***!
      \**********************************************/

    /*! exports provided: MailComponent */

    /***/
    function srcAppAppsEmailMailComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailComponent", function () {
        return MailComponent;
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


      var _mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mail.service */
      "./src/app/apps/email/mail.service.ts");
      /* harmony import */


      var _app_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.state */
      "./src/app/apps/email/app.state.ts");

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

      var MailComponent = /*#__PURE__*/function () {
        function MailComponent(service, route, router, state) {
          var _this6 = this;

          _classCallCheck(this, MailComponent);

          this.service = service;
          this.route = route;
          this.router = router;
          this.state = state;
          this.mails = Object.create(null);
          this.id = 0;
          this.type = null;
          this.markAsRead = '';
          this.markAsUnRead = '';
          this.deleteChecked = '';
          this.status = false;
          this.router.events.subscribe(function (event) {
            var _a, _b, _c, _d, _e, _f;

            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
              _this6.id = (_c = (_b = (_a = _this6.route) === null || _a === void 0 ? void 0 : _a.snapshot) === null || _b === void 0 ? void 0 : _b.firstChild) === null || _c === void 0 ? void 0 : _c.params['id'];
              _this6.type = (_f = (_e = (_d = _this6.route) === null || _d === void 0 ? void 0 : _d.snapshot) === null || _e === void 0 ? void 0 : _e.firstChild) === null || _f === void 0 ? void 0 : _f.params['type'];
              setTimeout(function () {// jQuery('[data-toggle="tooltip"]').tooltip({ trigger: 'hover' });
              });
            }
          });
        }

        _createClass(MailComponent, [{
          key: "getBack",
          value: function getBack() {
            if (this.type) {
              this.router.navigate(['apps/email/mail-list/' + this.type]);
            } else {
              this.router.navigate(['apps/email/mail-list/inbox']);
            }
          }
        }, {
          key: "trash",
          value: function trash() {
            // jQuery('[data-toggle="tooltip"]').tooltip('hide');
            this.service.getMail(this.id).then(function (mail) {
              if (mail !== undefined) {
                mail.trash = true;
                mail.sent = false;
                mail.draft = false;
                mail.starred = false;
              }
            });
            this.router.navigate(['apps/email/mail-list/inbox']);
          }
        }, {
          key: "setAsRead",
          value: function setAsRead() {
            this.markAsRead = this.markAsRead;
            this.state.notifyDataChanged('markAsRead', this.markAsRead);
          }
        }, {
          key: "setAsUnRead",
          value: function setAsUnRead() {
            this.markAsUnRead = this.markAsUnRead;
            this.state.notifyDataChanged('markAsUnRead', this.markAsUnRead);
          }
        }, {
          key: "deleteCheckedMail",
          value: function deleteCheckedMail() {
            this.deleteChecked = this.deleteChecked;
            this.state.notifyDataChanged('deleteChecked', this.deleteChecked);
          }
        }, {
          key: "openClleft",
          value: function openClleft() {
            this.status = !this.status;
          }
        }]);

        return MailComponent;
      }();

      MailComponent.ctorParameters = function () {
        return [{
          type: _mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _app_state__WEBPACK_IMPORTED_MODULE_3__["AppState"]
        }];
      };

      MailComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-mail',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./mail.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/email/mail.component.html"))["default"],
        providers: [_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"]],
        styles: [__importDefault(__webpack_require__(
        /*! ./mail.component.scss */
        "./src/app/apps/email/mail.component.scss"))["default"]]
      }), __metadata("design:paramtypes", [_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_state__WEBPACK_IMPORTED_MODULE_3__["AppState"]])], MailComponent);
      /***/
    },

    /***/
    "./src/app/apps/email/mail.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/apps/email/mail.module.ts ***!
      \*******************************************/

    /*! exports provided: routes, MailModule */

    /***/
    function srcAppAppsEmailMailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailModule", function () {
        return MailModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pipes/pipes.module */
      "./src/app/apps/email/pipes/pipes.module.ts");
      /* harmony import */


      var _app_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.state */
      "./src/app/apps/email/app.state.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _mail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./mail.component */
      "./src/app/apps/email/mail.component.ts");
      /* harmony import */


      var _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./mail-compose/mail-compose.component */
      "./src/app/apps/email/mail-compose/mail-compose.component.ts");
      /* harmony import */


      var _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./mail-list/mail-list.component */
      "./src/app/apps/email/mail-list/mail-list.component.ts");
      /* harmony import */


      var _mail_detail_mail_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./mail-detail/mail-detail.component */
      "./src/app/apps/email/mail-detail/mail-detail.component.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var routes = [{
        path: '',
        component: _mail_component__WEBPACK_IMPORTED_MODULE_7__["MailComponent"],
        children: [{
          path: '',
          redirectTo: 'mail-list/inbox',
          pathMatch: 'full'
        }, {
          path: 'mail-list/:type',
          component: _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_9__["MailListComponent"]
        }, {
          path: 'mail-compose',
          component: _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_8__["MailComposeComponent"]
        }, {
          path: 'mail-list/:type/:id',
          component: _mail_detail_mail_detail_component__WEBPACK_IMPORTED_MODULE_10__["MailDetailComponent"]
        }]
      }];

      var MailModule = function MailModule() {
        _classCallCheck(this, MailModule);
      };

      MailModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        declarations: [_mail_component__WEBPACK_IMPORTED_MODULE_7__["MailComponent"], _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_8__["MailComposeComponent"], _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_9__["MailListComponent"], _mail_detail_mail_detail_component__WEBPACK_IMPORTED_MODULE_10__["MailDetailComponent"]],
        providers: [_app_state__WEBPACK_IMPORTED_MODULE_5__["AppState"]]
      })], MailModule);
      /***/
    },

    /***/
    "./src/app/apps/email/mail.service.ts":
    /*!********************************************!*\
      !*** ./src/app/apps/email/mail.service.ts ***!
      \********************************************/

    /*! exports provided: Mail, MailService */

    /***/
    function srcAppAppsEmailMailServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Mail", function () {
        return Mail;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailService", function () {
        return MailService;
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

      var Mail = function Mail(id, sender, senderMail, subject, date, body, attachment, attachments, unread, sent, starred, draft, trash, selected) {
        _classCallCheck(this, Mail);

        this.id = id;
        this.sender = sender;
        this.senderMail = senderMail;
        this.subject = subject;
        this.date = date;
        this.body = body;
        this.attachment = attachment;
        this.attachments = attachments;
        this.unread = unread;
        this.sent = sent;
        this.starred = starred;
        this.draft = draft;
        this.trash = trash;
        this.selected = selected;
      };

      var Mails = [new Mail(1, 'Seth Wright', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '6:08 PM', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], true, false, false, false, false, false), new Mail(2, 'Leo Jons', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '12:55 PM', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', true, ['assets/images/product/chair.png', 'assets/images/product/chair2.png'], true, false, true, false, false, false), new Mail(3, 'Aron Shaur', 'info@wrappixel.com', 'consectetuer adipiscing elit.', '01.11.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false), new Mail(4, 'Emily Rhodes', 'info@wrappixel.com', 'Aenean commodo ligula eget dolor. Aenean massa.', '21.07.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], true, false, false, false, false, false), new Mail(5, 'Draft', '', 'no subject', '2:14 PM', '', false, [], false, false, false, true, false, false), new Mail(6, 'Draft', '', 'Please confirm your account for furthur process', 'Jan 7', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum interdum ex, sed aliquet nisl maximus imperdiet. ', false, [], false, false, false, true, false, false), new Mail(7, 'Kendra', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.', '27.05.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false), new Mail(8, 'Jimmy Fallon', 'info@wrappixel.com', 'consectetuer adipiscing elit.', '14.05.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, true, false, false, false), new Mail(9, 'Sam Tighe', 'info@wrappixel.com', 'Aenean commodo ligula eget dolor. Aenean massa.', '03.05.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false), new Mail(10, 'Saul', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', '30.04.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, true, false, false, false, false), new Mail(11, 'Nathan James', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '24.04.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false), new Mail(12, 'Mia Green', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.', '11.04.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false), new Mail(13, 'Mario Gomez', 'info@wrappixel.com', 'Download the freebies from the site wrappixel.com all the admin template for free', '24.02.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false)];
      var mailsPromise = Promise.resolve(Mails);

      var MailService = /*#__PURE__*/function () {
        function MailService() {
          _classCallCheck(this, MailService);
        }

        _createClass(MailService, [{
          key: "getInboxMails",
          value: function getInboxMails() {
            return mailsPromise.then(function (mails) {
              return mails.filter(function (mail) {
                return mail.sent === false && mail.draft === false && mail.trash === false;
              });
            });
          }
        }, {
          key: "getStarredMails",
          value: function getStarredMails() {
            return mailsPromise.then(function (mails) {
              return mails.filter(function (mail) {
                return mail.starred === true;
              });
            });
          }
        }, {
          key: "getSentMails",
          value: function getSentMails() {
            return mailsPromise.then(function (mails) {
              return mails.filter(function (mail) {
                return mail.sent === true;
              });
            });
          }
        }, {
          key: "getDraftMails",
          value: function getDraftMails() {
            return mailsPromise.then(function (mails) {
              return mails.filter(function (mail) {
                return mail.draft === true;
              });
            });
          }
        }, {
          key: "getTrashMails",
          value: function getTrashMails() {
            return mailsPromise.then(function (mails) {
              return mails.filter(function (mail) {
                return mail.trash === true;
              });
            });
          }
        }, {
          key: "getMail",
          value: function getMail(id) {
            return mailsPromise.then(function (mails) {
              return mails.find(function (mail) {
                return mail.id === +id;
              });
            });
          }
        }]);

        return MailService;
      }();

      MailService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], MailService);
      /***/
    },

    /***/
    "./src/app/apps/email/pipes/mail-search.pipe.ts":
    /*!******************************************************!*\
      !*** ./src/app/apps/email/pipes/mail-search.pipe.ts ***!
      \******************************************************/

    /*! exports provided: MailSearchPipe */

    /***/
    function srcAppAppsEmailPipesMailSearchPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailSearchPipe", function () {
        return MailSearchPipe;
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

      var MailSearchPipe = /*#__PURE__*/function () {
        function MailSearchPipe() {
          _classCallCheck(this, MailSearchPipe);
        }

        _createClass(MailSearchPipe, [{
          key: "transform",
          value: function transform(value, args) {
            var searchText = new RegExp(args, 'ig');

            if (value) {
              return value.filter(function (mail) {
                if (mail.sender || mail.subject) {
                  if (mail.sender.search(searchText) !== -1 || mail.subject.search(searchText) !== -1) {
                    return true;
                  }
                }
              });
            }
          }
        }]);

        return MailSearchPipe;
      }();

      MailSearchPipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'MailSearch'
      })], MailSearchPipe);
      /***/
    },

    /***/
    "./src/app/apps/email/pipes/pipes.module.ts":
    /*!**************************************************!*\
      !*** ./src/app/apps/email/pipes/pipes.module.ts ***!
      \**************************************************/

    /*! exports provided: PipesModule */

    /***/
    function srcAppAppsEmailPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
        return PipesModule;
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


      var _mail_search_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mail-search.pipe */
      "./src/app/apps/email/pipes/mail-search.pipe.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var PipesModule = function PipesModule() {
        _classCallCheck(this, PipesModule);
      };

      PipesModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [_mail_search_pipe__WEBPACK_IMPORTED_MODULE_2__["MailSearchPipe"]],
        exports: [_mail_search_pipe__WEBPACK_IMPORTED_MODULE_2__["MailSearchPipe"]]
      })], PipesModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=apps-email-mail-module-es5.js.map