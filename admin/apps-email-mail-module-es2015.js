(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apps-email-mail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/email/mail-compose/mail-compose.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/email/mail-compose/mail-compose.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body compose\">\n   \n    <form method=\"get\" action=\"#\">\n        <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"To\">\n        </div>\n        <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Cc / Bcc\">\n        </div>\n        <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Subject\">\n        </div>\n        <div class=\"form-group\">\n            <textarea class=\"form-control\" placeholder=\"Message\" rows=\"10\"></textarea>\n        </div>\n        <div class=\"form-group float-right\">\n            <a [routerLink]=\"['../mail-list/inbox']\" class=\"btn btn-secondary\">Cancel</a>\n            <button class=\"btn btn-main\" type=\"submit\">Send</button>            \n        </div>\n    </form>\n\n </div>\n \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/email/mail-detail/mail-detail.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/email/mail-detail/mail-detail.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"mail\">  \n    <div class=\"card-body\">\n        <h4 class=\"mb-3\">{{mail.subject}}</h4>\n        \n        <div class=\"d-flex mt-4 mb-4\">\n            <div class=\"round mr-2 flex-shrink-0\">\n                <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"\">\n                <span class=\"font-bold\">{{mail.sender}}</span>\n                <span *ngIf=\"mail.senderMail\" class=\"email text-truncate d-block w-75\">&lt;{{mail.senderMail}}&gt;</span>\n                <span class=\"receiver\">to me</span>\n            </div>\n\n            <div class=\"ml-auto\">\n                <span class=\"mail-date\"> {{mail.date}} </span>\n                \n            </div>\n        </div>\n        <div [innerHTML]=\"mail.body\" class=\"mailbox-body\"></div>\n\n        <div class=\"mail-attachments\" *ngIf=\"mail.attachments.length > 0\">\n            <hr/>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">                    \n                    <p>\n                        <strong>{{mail.attachments.length}} attachments</strong> &nbsp;-&nbsp; \n                        <a href=\"#\">Download all attachments</a>&nbsp;&nbsp;&nbsp;\n                        <a href=\"#\">View all Images</a>\n                    </p>\n                    <section *ngFor=\"let attachment of mail.attachments; let i = index\" class=\"attachment\">\n                        <img src=\"{{attachment}}\" alt=\"\">\n                        <h5 class=\"title\">image-{{i + 1}}.jpg</h5>\n                        <p>\n                            457K  &nbsp;&nbsp;\n                            <a href=\"#\">View</a> &nbsp;&nbsp;\n                            <a href=\"#\">Download</a>\n                        </p>\n                    </section>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/email/mail-list/mail-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/email/mail-list/mail-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex mailbox-header-bar p-3 bg-white align-items-center border-top\">\n    <div class=\"custom-control custom-checkbox\">\n        <input id=\"toggle-all\" class=\"custom-control-input\" type=\"checkbox\" [(ngModel)]=\"isAllSelected\"\n            (click)=\"toggleAll()\">\n        <label for=\"toggle-all\" class=\"custom-control-label\">Check all</label>\n    </div>\n\n    <div class=\"ml-auto\">\n        <input class=\"form-control form-control-sm\" id=\"table-search-input\" [(ngModel)]=\"searchText\" type=\"text\"\n            placeholder=\"Search mail...\">\n    </div>\n</div>\n<div class=\"table-responsive\">\n    <table class=\"table table-hover no-wrap bg-white\">\n        <tbody>\n            <tr *ngFor=\"let mail of mails | async | MailSearch : searchText\"\n                [ngClass]=\"{'unread': mail.unread, 'selected': mail.selected}\">\n                <td class=\"mail-checkbox pl-3 width-50\">\n                    <div class=\"custom-control custom-checkbox mycustomcheckbox\">\n                        <input id=\"checkbox{{mail.id}}\" class=\"custom-control-input\" type=\"checkbox\"\n                            [(ngModel)]=\"mail.selected\" (ngModelChange)=\"toggleOne()\">\n                        <label attr.for=\"checkbox{{mail.id}}\" class=\"custom-control-label\"></label>\n                    </div>\n                </td>\n                <td class=\"mail-star width-50\" *ngIf=\"router.url != '/pages/mail/mail-list/trash'\">\n                    <i class=\"fa-star\" [ngClass]=\"{'fas': mail.starred, 'far': !mail.starred}\"\n                        (click)=\"changeStarStatus(mail)\"></i>\n                </td>\n                <td (click)=\"goToDetail(mail)\" class=\"sender\">{{ mail.sender }}</td>\n                <td (click)=\"goToDetail(mail)\" class=\"subject\" [innerHTML]=\"mail.subject\"></td>\n                <td (click)=\"goToDetail(mail)\" class=\"attachment\"><i *ngIf=\"mail.attachment\"\n                        class=\"fa fa-paperclip\"></i></td>\n                <td (click)=\"goToDetail(mail)\" class=\"date\">{{mail.date}}</td>\n            </tr>\n        </tbody>\n    </table>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/email/mail.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/email/mail.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"email-container px-3\">\n    <div class=\"row\">\n        <div class=\"col-sm-3 col-md-3 col-lg-3 col-xl-2 bg-white border-right\">\n\n            <h2 class=\"mb-0 pt-4 text-center font-weight-bold\"> Mailbox <a\n                    class=\"text-dark float-right custom-control-button\" (click)=\"openClleft()\"\n                    href=\"javascript:void(0)\"><i class=\"ti-menu\"></i></a> </h2>\n        </div>\n        <div class=\"col-sm-9 col-md-9 col-lg-9 col-xl-10 bg-white\">\n            <div class=\"pb-3 pt-3 d-flex align-items-center\">\n                <div class=\"b-btn mr-1\" [style.display]=\"(id || !type) ? 'inline-block' : 'none'\" data-toggle=\"tooltip\"\n                    data-placement=\"top\" data-animation=\"false\" title=\"Back to {{type}}\">\n                    <button (click)=\"getBack()\" type=\"button\" class=\"btn btn-dark btn-sm\">\n                        <i class=\"fa fa-arrow-left\"></i>\n                    </button>\n                </div>\n\n                <div class=\"b-btn mr-1\" *ngIf=\"id\" data-toggle=\"tooltip\" data-placement=\"top\" data-animation=\"false\"\n                    title=\"Delete\">\n                    <button (click)=\"trash()\" type=\"button\" class=\"btn btn-dark btn-sm\">\n                        <i class=\"fa fa-trash\"></i>\n                    </button>\n                </div>\n\n                <div class=\"b-btn mr-1\"\n                    [style.display]=\"(router.url == '/apps/email/mail-compose' || id) ? 'none' : 'inline-block'\"\n                    data-toggle=\"tooltip\" data-placement=\"top\" data-animation=\"false\" title=\"Refresh\">\n                    <button type=\"button\" class=\"btn btn-dark btn-sm\"><span class=\"fas fa-sync-alt\"></span></button>\n                </div>\n\n                <div ngbDropdown class=\"btn-group\"\n                    [style.display]=\"(router.url == '/apps/email/mail-compose') ? 'none' : 'block'\">\n                    <button class=\"btn btn-warning btn-sm\" type=\"button\" ngbDropdownToggle\n                        aria-controls=\"dropdown-basic\">\n                        More\n                    </button>\n                    <div class=\"\" id=\"dropdown-basic\" ngbDropdownMenu>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"setAsRead()\">Mark as read</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"setAsUnRead()\">Mark as unread</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"deleteCheckedMail()\">Delete</a>\n                    </div>\n                </div>\n\n                <div class=\"ml-auto\">\n                    <span class=\"mr-1 text-dark\"><b>1</b>–<b>50</b> of <b>50</b></span>\n                    <div class=\"btn-group btn-group-sm\">\n                        <button type=\"button\" class=\"btn btn-dark\">\n                            <span class=\"fa fa-chevron-left\"></span>\n                        </button>\n                        <button type=\"button\" class=\"btn btn-dark\">\n                            <span class=\"fa fa-chevron-right\"></span>\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-3 col-lg-3 col-xl-2 bg-white border-right\">\n            <div class=\"inbox-panel p-2 bg-white\" [ngClass]=\"status ? 'showlpanel' : ''\">\n\n                <a [routerLink]=\"['mail-compose']\" class=\"btn btn-danger rounded-pill btn-block mt-3\"\n                    role=\"button\">COMPOSE</a>\n\n                <div class=\"mailbox bg-white\">\n                    <ul class=\"list-group custom-group message-center\" style=\"height: unset;\">\n                        <li class=\"py-2\">\n                            <h6 class=\"font-weight-normal text-muted text-uppercase mb-0 mt-3 font-12\">Mailbox</h6>\n                        </li>\n                        <li class=\"list-group-item p-0\">\n                            <a [routerLink]=\"['mail-list/inbox']\"\n                                class=\"message-item d-flex align-items-center border-0 py-3 font-weight-normal\">\n                                <i class=\"fa-inbox fas font-18 mr-2\"></i>\n                                Inbox\n                                <div class=\"ml-auto\">\n                                    <span class=\"badge badge-info badge-pill\">3</span>\n                                </div>\n                            </a>\n                        </li>\n                        <li class=\"list-group-item p-0\">\n                            <a [routerLink]=\"['mail-list/sent']\"\n                                class=\"message-item d-flex align-items-center border-0 py-3 font-weight-normal\">\n                                <i class=\"fa-paper-plane fas font-18 mr-2\"></i>\n                                Sent Mail\n                            </a>\n                        </li>\n                        <li class=\"list-group-item p-0\">\n                            <a [routerLink]=\"['mail-list/drafts']\"\n                                class=\"message-item d-flex align-items-center border-0 py-3 font-weight-normal\">\n                                <i class=\"fa-box fas font-18 mr-2\"></i>\n                                Drafts\n                                <div class=\"ml-auto\">\n                                    <span class=\"badge badge-info badge-pill\">2</span>\n                                </div>\n                            </a>\n                        </li>\n                        <li class=\"list-group-item p-0\">\n                            <a [routerLink]=\"['mail-list/trash']\"\n                                class=\"message-item d-flex align-items-center border-0 py-3 font-weight-normal\">\n                                <i class=\"fa-history fas font-18 mr-2\"></i>\n                                Trash\n                            </a>\n                        </li>\n                        <li class=\"py-2\">\n                            <h6 class=\"font-weight-normal text-muted text-uppercase mb-0 mt-3 font-12\">Filters</h6>\n                        </li>\n                        <li class=\"list-group-item p-0\">\n                            <a [routerLink]=\"['mail-list/starred']\"\n                                class=\"message-item d-flex align-items-center border-0 py-3 font-weight-normal\">\n                                <i class=\"fas fa-star font-18 mr-2\"></i>\n                                Starred\n                            </a>\n                        </li>\n                        <li class=\"py-2\">\n                            <h6 class=\"font-weight-normal text-muted text-uppercase mb-0 mt-3 font-12\">Labels</h6>\n                        </li>\n                        <li class=\"list-group-item p-0\">\n                            <a href=\"#\" class=\"message-item d-flex align-items-center border-0 py-3 font-weight-normal\">\n                                <i class=\"fa fa-circle text-danger font-18 mr-2\"></i>\n                                Notes\n                            </a>\n                        </li>\n                        <li class=\"list-group-item p-0\">\n                            <a href=\"#\" class=\"message-item d-flex align-items-center border-0 py-3 font-weight-normal\">\n                                <i class=\"fa fa-circle text-warning font-18 mr-2\"></i>\n                                Personal\n                            </a>\n                        </li>\n                        <li class=\"list-group-item p-0\">\n                            <a href=\"#\" class=\"message-item d-flex align-items-center border-0 py-3 font-weight-normal\">\n                                <i class=\"fa fa-circle text-info font-18 mr-2\"></i>\n                                Travel\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-9 col-lg-9 col-xl-10 bg-white\">\n            <div class=\"inbox-right-panel\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n\n\n</div>");

/***/ }),

/***/ "./node_modules/rxjs-compat/Subject.js":
/*!*********************************************!*\
  !*** ./node_modules/rxjs-compat/Subject.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
exports.Subject = rxjs_1.Subject;
//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/add/operator/switchMap.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs-compat/add/operator/switchMap.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var switchMap_1 = __webpack_require__(/*! ../../operator/switchMap */ "./node_modules/rxjs-compat/operator/switchMap.js");
rxjs_1.Observable.prototype.switchMap = switchMap_1.switchMap;
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/operator/switchMap.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs-compat/operator/switchMap.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
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
exports.switchMap = switchMap;
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "./node_modules/rxjs/Subject.js":
/*!**************************************!*\
  !*** ./node_modules/rxjs/Subject.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! rxjs-compat/Subject */ "./node_modules/rxjs-compat/Subject.js"));
//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ "./node_modules/rxjs/add/operator/switchMap.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/add/operator/switchMap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! rxjs-compat/add/operator/switchMap */ "./node_modules/rxjs-compat/add/operator/switchMap.js");
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "./src/app/apps/email/app.state.ts":
/*!*****************************************!*\
  !*** ./src/app/apps/email/app.state.ts ***!
  \*****************************************/
/*! exports provided: AppState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppState", function() { return AppState; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs/Subject.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let AppState = class AppState {
    constructor() {
        this._data = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._dataStream$ = this._data.asObservable();
        this._subscriptions = new Map();
        this._dataStream$.subscribe((data) => this._onEvent(data));
    }
    notifyDataChanged(event, value) {
        // const current:any = this._data[event];
        // if (current !== value) {
        //   this._data[event] = value;
        //   this._data.next({
        //     event: event,
        //     data: this._data[event]
        //   });
        // }
    }
    subscribe(event, callback) {
        const subscribers = this._subscriptions.get(event) || [];
        subscribers.push(callback);
        this._subscriptions.set(event, subscribers);
    }
    _onEvent(data) {
        const subscribers = this._subscriptions.get(data['event']) || [];
        subscribers.forEach((callback) => {
            callback.call(null, data['data']);
        });
    }
};
AppState.ctorParameters = () => [];
AppState = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AppState);



/***/ }),

/***/ "./src/app/apps/email/mail-compose/mail-compose.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/apps/email/mail-compose/mail-compose.component.ts ***!
  \*******************************************************************/
/*! exports provided: MailComposeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailComposeComponent", function() { return MailComposeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let MailComposeComponent = class MailComposeComponent {
};
MailComposeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-mail-compose',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        template: __importDefault(__webpack_require__(/*! raw-loader!./mail-compose.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/email/mail-compose/mail-compose.component.html")).default
    })
], MailComposeComponent);



/***/ }),

/***/ "./src/app/apps/email/mail-detail/mail-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/apps/email/mail-detail/mail-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: MailDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailDetailComponent", function() { return MailDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mail.service */ "./src/app/apps/email/mail.service.ts");
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





let MailDetailComponent = class MailDetailComponent {
    constructor(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.mail = undefined;
        this.replyMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        // this.route.params
        // .switchMap((params: Params) => this.service.getMail(+params['id']))
        // .subscribe((mail: Mail) => this.mail = mail);
        this.route.params.forEach((params) => {
            if (params['id'] !== undefined) {
                const id = +params['id'];
                this.service.getMail(id)
                    .then(mail => this.mail = mail);
            }
        });
    }
    goToReply(mail) {
        this.replyMessage.emit(mail);
    }
    trash(id) {
        this.service.getMail(id).then(mail => {
            if (mail !== undefined) {
                mail.trash = true;
                mail.sent = false;
                mail.draft = false;
                mail.starred = false;
            }
        });
        this.router.navigate(['apps/email/mail-list/inbox']);
    }
};
MailDetailComponent.ctorParameters = () => [
    { type: _mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
MailDetailComponent.propDecorators = {
    replyMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
MailDetailComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-mail-detail',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        template: __importDefault(__webpack_require__(/*! raw-loader!./mail-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/email/mail-detail/mail-detail.component.html")).default
    }),
    __metadata("design:paramtypes", [_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], MailDetailComponent);



/***/ }),

/***/ "./src/app/apps/email/mail-list/mail-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/apps/email/mail-list/mail-list.component.ts ***!
  \*************************************************************/
/*! exports provided: MailListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailListComponent", function() { return MailListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs/add/operator/switchMap.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mail.service */ "./src/app/apps/email/mail.service.ts");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.state */ "./src/app/apps/email/app.state.ts");
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





let MailListComponent = class MailListComponent {
    constructor(service, route, router, state) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.state = state;
        this.mails = null;
        this.type = null;
        this.isAllSelected = false;
        this.searchText = null;
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.unSelectAll();
                this.searchText = '';
            }
        });
        this.state.subscribe('markAsRead', () => {
            this.markAllAsRead();
        });
        this.state.subscribe('markAsUnRead', () => {
            this.markAllAsUnRead();
        });
        this.state.subscribe('deleteChecked', () => {
            this.deleteAllCheckedMail();
        });
    }
    ngOnInit() {
        this.getMails();
    }
    getMails() {
        this.mails = this.route.params.switchMap((params) => {
            this.type = params['type'];
            switch (this.type) {
                case 'inbox':
                    return this.service.getInboxMails();
                case 'starred':
                    return this.service.getStarredMails();
                case 'sent':
                    return this.service.getSentMails();
                case 'drafts':
                    return this.service.getDraftMails();
                case 'trash':
                    return this.service.getTrashMails();
                default:
                    return this.service.getInboxMails();
            }
        });
    }
    toggleAll() {
        var _a;
        const toggleStatus = !this.isAllSelected;
        (_a = this.mails) === null || _a === void 0 ? void 0 : _a.subscribe(result => {
            result.forEach(mail => {
                mail.selected = toggleStatus;
            });
        });
    }
    toggleOne() {
        var _a;
        (_a = this.mails) === null || _a === void 0 ? void 0 : _a.subscribe(result => {
            this.isAllSelected = result.every(mail => {
                return mail.selected === true;
            });
        });
    }
    unSelectAll() {
        this.isAllSelected = false;
        if (this.mails) {
            this.mails.subscribe(result => {
                result.forEach(mail => {
                    mail.selected = false;
                });
            });
        }
    }
    markAllAsRead() {
        var _a;
        (_a = this.mails) === null || _a === void 0 ? void 0 : _a.subscribe(result => {
            result.forEach(mail => {
                if (mail.selected) {
                    mail.unread = false;
                }
            });
        });
    }
    markAllAsUnRead() {
        var _a;
        (_a = this.mails) === null || _a === void 0 ? void 0 : _a.subscribe(result => {
            result.forEach(mail => {
                if (mail.selected) {
                    mail.unread = true;
                }
            });
        });
    }
    deleteAllCheckedMail() {
        var _a;
        (_a = this.mails) === null || _a === void 0 ? void 0 : _a.subscribe(result => {
            result.forEach(mail => {
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
    goToDetail(mail) {
        mail.unread = false;
        this.router.navigate(['apps/email/mail-list/' + this.type, mail.id]);
    }
    changeStarStatus(mail) {
        mail.starred = !mail.starred;
    }
};
MailListComponent.ctorParameters = () => [
    { type: _mail_service__WEBPACK_IMPORTED_MODULE_3__["MailService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _app_state__WEBPACK_IMPORTED_MODULE_4__["AppState"] }
];
MailListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-inbox-list',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        template: __importDefault(__webpack_require__(/*! raw-loader!./mail-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/email/mail-list/mail-list.component.html")).default
    }),
    __metadata("design:paramtypes", [_mail_service__WEBPACK_IMPORTED_MODULE_3__["MailService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _app_state__WEBPACK_IMPORTED_MODULE_4__["AppState"]])
], MailListComponent);



/***/ }),

/***/ "./src/app/apps/email/mail.component.scss":
/*!************************************************!*\
  !*** ./src/app/apps/email/mail.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".email-container {\n  overflow: hidden;\n}\n\n.email-container .unread {\n  font-weight: 800;\n}\n\n.email-container .mail-star .fa-star {\n  color: #f9a913;\n}\n\n.email-container .inbox-right-panel,\n.email-container .inbox-panel {\n  min-height: calc(100vh - 300px);\n}\n\n.email-container .inbox-right-panel {\n  margin: 0 -10px;\n}\n\n.email-container .inbox-right-panel .table tr {\n  cursor: pointer;\n}\n\n.email-container .subject,\n.email-container .sender {\n  max-width: 350px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.email-container .sender {\n  max-width: 150px;\n}\n\n.email-container .custom-control-button {\n  display: none;\n}\n\n.email-container .width-50 {\n  width: 50px;\n}\n\n.email-container .custom-group .list-group-item {\n  border: 0px;\n  padding: 0.75rem 0.25rem;\n}\n\n.email-container .custom-group .list-group-item a {\n  color: #3e556a;\n}\n\n@media (max-width: 767px) {\n  .email-container .inbox-panel {\n    position: absolute;\n    width: 200px;\n    min-height: 100vh;\n    height: 100%;\n    background: white;\n    left: -202px;\n    z-index: 10;\n    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);\n    padding: 0 10px;\n  }\n  .email-container .inbox-panel.showlpanel {\n    left: 0px;\n  }\n  .email-container .custom-control-button {\n    display: block;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwcy9lbWFpbC9tYWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUZBO0VBSUksZ0JBQWdCO0FBRXBCOztBQU5BO0VBT0ksY0FBYztBQUdsQjs7QUFWQTs7RUFXSSwrQkFBK0I7QUFJbkM7O0FBZkE7RUFjSSxlQUFlO0FBS25COztBQW5CQTtFQWdCTSxlQUFlO0FBT3JCOztBQXZCQTs7RUFxQkksZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFPM0I7O0FBOUJBO0VBMEJJLGdCQUFnQjtBQVFwQjs7QUFsQ0E7RUE2QkksYUFBYTtBQVNqQjs7QUF0Q0E7RUFpQ0ksV0FBVztBQVNmOztBQTFDQTtFQXFDTSxXQUFXO0VBQ1gsd0JBQXdCO0FBUzlCOztBQS9DQTtFQXdDUSxjQUFjO0FBV3RCOztBQVBFO0VBNUNGO0lBOENNLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVc7SUFDWCx5Q0FBeUM7SUFDekMsZUFBZTtFQVVuQjtFQWhFRjtJQXdEUSxTQUFTO0VBV2Y7RUFuRUY7SUE2RE0sY0FBYztFQVNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwcy9lbWFpbC9tYWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtYWlsLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLnVucmVhZCB7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuICAubWFpbC1zdGFyIC5mYS1zdGFyIHtcbiAgICBjb2xvcjogI2Y5YTkxMztcbiAgfVxuICAuaW5ib3gtcmlnaHQtcGFuZWwsXG4gIC5pbmJveC1wYW5lbCB7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDMwMHB4KTtcbiAgfVxuICAuaW5ib3gtcmlnaHQtcGFuZWwge1xuICAgIG1hcmdpbjogMCAtMTBweDtcbiAgICAudGFibGUgdHIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuICAuc3ViamVjdCxcbiAgLnNlbmRlciB7XG4gICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG4gIC5zZW5kZXIge1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gIH1cbiAgLmN1c3RvbS1jb250cm9sLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC53aWR0aC01MCB7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cbiAgLmN1c3RvbS1ncm91cCB7XG4gICAgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgICBib3JkZXI6IDBweDtcbiAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMC4yNXJlbTtcbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogIzNlNTU2YTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmluYm94LXBhbmVsIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBsZWZ0OiAtMjAycHg7XG4gICAgICB6LWluZGV4OiAxMDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgJi5zaG93bHBhbmVsIHtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jdXN0b20tY29udHJvbC1idXR0b24ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/apps/email/mail.component.ts":
/*!**********************************************!*\
  !*** ./src/app/apps/email/mail.component.ts ***!
  \**********************************************/
/*! exports provided: MailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailComponent", function() { return MailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mail.service */ "./src/app/apps/email/mail.service.ts");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.state */ "./src/app/apps/email/app.state.ts");
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




let MailComponent = class MailComponent {
    constructor(service, route, router, state) {
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
        this.router.events.subscribe(event => {
            var _a, _b, _c, _d, _e, _f;
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.id = (_c = (_b = (_a = this.route) === null || _a === void 0 ? void 0 : _a.snapshot) === null || _b === void 0 ? void 0 : _b.firstChild) === null || _c === void 0 ? void 0 : _c.params['id'];
                this.type = (_f = (_e = (_d = this.route) === null || _d === void 0 ? void 0 : _d.snapshot) === null || _e === void 0 ? void 0 : _e.firstChild) === null || _f === void 0 ? void 0 : _f.params['type'];
                setTimeout(() => {
                    // jQuery('[data-toggle="tooltip"]').tooltip({ trigger: 'hover' });
                });
            }
        });
    }
    getBack() {
        if (this.type) {
            this.router.navigate(['apps/email/mail-list/' + this.type]);
        }
        else {
            this.router.navigate(['apps/email/mail-list/inbox']);
        }
    }
    trash() {
        // jQuery('[data-toggle="tooltip"]').tooltip('hide');
        this.service.getMail(this.id).then(mail => {
            if (mail !== undefined) {
                mail.trash = true;
                mail.sent = false;
                mail.draft = false;
                mail.starred = false;
            }
        });
        this.router.navigate(['apps/email/mail-list/inbox']);
    }
    setAsRead() {
        this.markAsRead = this.markAsRead;
        this.state.notifyDataChanged('markAsRead', this.markAsRead);
    }
    setAsUnRead() {
        this.markAsUnRead = this.markAsUnRead;
        this.state.notifyDataChanged('markAsUnRead', this.markAsUnRead);
    }
    deleteCheckedMail() {
        this.deleteChecked = this.deleteChecked;
        this.state.notifyDataChanged('deleteChecked', this.deleteChecked);
    }
    openClleft() {
        this.status = !this.status;
    }
};
MailComponent.ctorParameters = () => [
    { type: _mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _app_state__WEBPACK_IMPORTED_MODULE_3__["AppState"] }
];
MailComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-mail',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        template: __importDefault(__webpack_require__(/*! raw-loader!./mail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/email/mail.component.html")).default,
        providers: [_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"]],
        styles: [__importDefault(__webpack_require__(/*! ./mail.component.scss */ "./src/app/apps/email/mail.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _app_state__WEBPACK_IMPORTED_MODULE_3__["AppState"]])
], MailComponent);



/***/ }),

/***/ "./src/app/apps/email/mail.module.ts":
/*!*******************************************!*\
  !*** ./src/app/apps/email/mail.module.ts ***!
  \*******************************************/
/*! exports provided: routes, MailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailModule", function() { return MailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/pipes.module */ "./src/app/apps/email/pipes/pipes.module.ts");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.state */ "./src/app/apps/email/app.state.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _mail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mail.component */ "./src/app/apps/email/mail.component.ts");
/* harmony import */ var _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mail-compose/mail-compose.component */ "./src/app/apps/email/mail-compose/mail-compose.component.ts");
/* harmony import */ var _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mail-list/mail-list.component */ "./src/app/apps/email/mail-list/mail-list.component.ts");
/* harmony import */ var _mail_detail_mail_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mail-detail/mail-detail.component */ "./src/app/apps/email/mail-detail/mail-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











const routes = [
    {
        path: '',
        component: _mail_component__WEBPACK_IMPORTED_MODULE_7__["MailComponent"],
        children: [
            { path: '', redirectTo: 'mail-list/inbox', pathMatch: 'full' },
            { path: 'mail-list/:type', component: _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_9__["MailListComponent"] },
            { path: 'mail-compose', component: _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_8__["MailComposeComponent"] },
            { path: 'mail-list/:type/:id', component: _mail_detail_mail_detail_component__WEBPACK_IMPORTED_MODULE_10__["MailDetailComponent"] }
        ]
    }
];
let MailModule = class MailModule {
};
MailModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _mail_component__WEBPACK_IMPORTED_MODULE_7__["MailComponent"],
            _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_8__["MailComposeComponent"],
            _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_9__["MailListComponent"],
            _mail_detail_mail_detail_component__WEBPACK_IMPORTED_MODULE_10__["MailDetailComponent"]
        ],
        providers: [_app_state__WEBPACK_IMPORTED_MODULE_5__["AppState"]]
    })
], MailModule);



/***/ }),

/***/ "./src/app/apps/email/mail.service.ts":
/*!********************************************!*\
  !*** ./src/app/apps/email/mail.service.ts ***!
  \********************************************/
/*! exports provided: Mail, MailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mail", function() { return Mail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailService", function() { return MailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

class Mail {
    constructor(id, sender, senderMail, subject, date, body, attachment, attachments, unread, sent, starred, draft, trash, selected) {
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
    }
}
const Mails = [
    new Mail(1, 'Seth Wright', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '6:08 PM', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], true, false, false, false, false, false),
    new Mail(2, 'Leo Jons', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '12:55 PM', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', true, ['assets/images/product/chair.png', 'assets/images/product/chair2.png'], true, false, true, false, false, false),
    new Mail(3, 'Aron Shaur', 'info@wrappixel.com', 'consectetuer adipiscing elit.', '01.11.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false),
    new Mail(4, 'Emily Rhodes', 'info@wrappixel.com', 'Aenean commodo ligula eget dolor. Aenean massa.', '21.07.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], true, false, false, false, false, false),
    new Mail(5, 'Draft', '', 'no subject', '2:14 PM', '', false, [], false, false, false, true, false, false),
    new Mail(6, 'Draft', '', 'Please confirm your account for furthur process', 'Jan 7', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum interdum ex, sed aliquet nisl maximus imperdiet. ', false, [], false, false, false, true, false, false),
    new Mail(7, 'Kendra', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.', '27.05.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false),
    new Mail(8, 'Jimmy Fallon', 'info@wrappixel.com', 'consectetuer adipiscing elit.', '14.05.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, true, false, false, false),
    new Mail(9, 'Sam Tighe', 'info@wrappixel.com', 'Aenean commodo ligula eget dolor. Aenean massa.', '03.05.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false),
    new Mail(10, 'Saul', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', '30.04.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, true, false, false, false, false),
    new Mail(11, 'Nathan James', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '24.04.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false),
    new Mail(12, 'Mia Green', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.', '11.04.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false),
    new Mail(13, 'Mario Gomez', 'info@wrappixel.com', 'Download the freebies from the site wrappixel.com all the admin template for free', '24.02.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false)
];
const mailsPromise = Promise.resolve(Mails);
let MailService = class MailService {
    getInboxMails() {
        return mailsPromise.then(mails => mails.filter(mail => mail.sent === false && mail.draft === false && mail.trash === false));
    }
    getStarredMails() {
        return mailsPromise.then(mails => mails.filter(mail => mail.starred === true));
    }
    getSentMails() {
        return mailsPromise.then(mails => mails.filter(mail => mail.sent === true));
    }
    getDraftMails() {
        return mailsPromise.then(mails => mails.filter(mail => mail.draft === true));
    }
    getTrashMails() {
        return mailsPromise.then(mails => mails.filter(mail => mail.trash === true));
    }
    getMail(id) {
        return mailsPromise.then(mails => mails.find(mail => mail.id === +id));
    }
};
MailService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
], MailService);



/***/ }),

/***/ "./src/app/apps/email/pipes/mail-search.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/apps/email/pipes/mail-search.pipe.ts ***!
  \******************************************************/
/*! exports provided: MailSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailSearchPipe", function() { return MailSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let MailSearchPipe = class MailSearchPipe {
    transform(value, args) {
        const searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter((mail) => {
                if (mail.sender || mail.subject) {
                    if (mail.sender.search(searchText) !== -1 ||
                        mail.subject.search(searchText) !== -1) {
                        return true;
                    }
                }
            });
        }
    }
};
MailSearchPipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'MailSearch'
    })
], MailSearchPipe);



/***/ }),

/***/ "./src/app/apps/email/pipes/pipes.module.ts":
/*!**************************************************!*\
  !*** ./src/app/apps/email/pipes/pipes.module.ts ***!
  \**************************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _mail_search_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mail-search.pipe */ "./src/app/apps/email/pipes/mail-search.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let PipesModule = class PipesModule {
};
PipesModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ],
        declarations: [
            _mail_search_pipe__WEBPACK_IMPORTED_MODULE_2__["MailSearchPipe"]
        ],
        exports: [
            _mail_search_pipe__WEBPACK_IMPORTED_MODULE_2__["MailSearchPipe"]
        ]
    })
], PipesModule);



/***/ })

}]);
//# sourceMappingURL=apps-email-mail-module-es2015.js.map