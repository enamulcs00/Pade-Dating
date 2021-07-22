(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apps-apps-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/chat/chat.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/chat/chat.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- ============================================================== -->\r\n<!-- Left Part  -->\r\n<!-- ============================================================== -->\r\n<div class=\"left-part bg-white fixed-left-part\" style=\"overflow: hidden\" [ngClass]=\"{'show-panel': showSidebar}\">\r\n    <!-- Mobile toggle button -->\r\n    <a [ngClass]=\"(showSidebar)?'ti-close':'ti-menu'\" class=\"btn btn-success show-left-part d-block d-md-none\" href=\"javascript:void(0)\"\r\n        (click)=\"mobileSidebar()\"></a>\r\n    <!-- Mobile toggle button -->\r\n    <div class=\"position-relative\" style=\"height:100%;\">\r\n        <div class=\"p-l-15 p-r-25 p-t-25 p-b-25 d-flex align-items-center\">\r\n            <div>\r\n                <img src=\"assets/images/users/8.jpg\" width=\"45\" alt=\"user\" class=\"rounded-circle\">\r\n            </div>\r\n            <div class=\"text-dark m-b-0 m-l-15 font-18\">\r\n                Bruce Banner\r\n                <p class=\"m-b-0 font-12\">\r\n                    <i class=\"fa fa-circle text-success font-10 m-r-5\"></i>\r\n                    <span>Online</span>\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <hr class=\"m-t-0\">\r\n        <ul class=\"mailbox list-style-none\">\r\n            <li>\r\n                <div class=\"message-center\" style=\"height: calc(100vh - 215px);\" [perfectScrollbar]=\"config\">\r\n                    <a (click)=\"onSelect(user)\" *ngFor=\"let user of users\" href=\"javascript:void(0)\" class=\"message-item\" id='chat_user_1'>\r\n                        <span class=\"user-img\">\r\n                            <img src=\"{{user.avtar}}\" alt=\"user\" class=\"rounded-circle\">\r\n                            <span class=\"profile-status {{user.status}} pull-right\"></span>\r\n                        </span>\r\n                        <div class=\"mail-contnet\">\r\n                            <h5 class=\"message-title\">{{user.name}}</h5>\r\n                            <span class=\"mail-desc\">{{user.lastmsg}}</span>\r\n                            <span class=\"time\">{{user.time}}</span>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- End Left Part  -->\r\n<!-- ============================================================== -->\r\n<!-- ============================================================== -->\r\n<!-- Right Part  Mail Compose -->\r\n<!-- ============================================================== -->\r\n<div class=\"right-part\">\r\n    <div class=\"card\">\r\n        <div class=\"p-l-20 p-r-25 p-t-25 p-b-25 bg-info d-flex align-items-center\">\r\n            <div>\r\n                <img src=\"{{selectedUser.avtar}}\" width=\"45\" alt=\"user\" class=\"rounded-circle\">\r\n            </div>\r\n            <div class=\"text-white m-b-0 m-l-15 font-18\">{{selectedUser.name}}</div>\r\n            <div class=\"ml-auto\">\r\n                <div ngbDropdown placement=\"bottom-right\">\r\n                    <a ngbDropdownToggle class=\"text-white\" href=\"javascript: void(0)\" id=\"dropdownMenuLink\">\r\n                        <i class=\"mdi mdi-dots-vertical font-20\"></i>\r\n                    </a>\r\n                    <div ngbDropdownMenu>\r\n                        <a class=\"dropdown-item\" href=\"#\">Contact Info</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">Mute Chat</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">Delete Chat</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body p-t-0 p-r-0\">\r\n            <div class=\"chat-box p-r-15\" style=\"height:calc(100vh - 300px); position: relative;\" [perfectScrollbar]=\"config\">\r\n                <!--chat Row -->\r\n                <ul class=\"chat-list\">\r\n                    <!--chat Row -->\r\n                    <li class=\"chat-item\">\r\n                        <div class=\"chat-img\">\r\n                            <img src=\"{{selectedUser.avtar}}\" alt=\"user\">\r\n                        </div>\r\n                        <div class=\"chat-content\">\r\n                            <h6 class=\"font-medium\">{{selectedUser.name}}</h6>\r\n                            <div class=\"box bg-light-info\">Lorem Ipsum is simply dummy text of the printing &amp; type setting industry.</div>\r\n                        </div>\r\n                        <div class=\"chat-time\">10:56 am</div>\r\n                    </li>\r\n                    <!--chat Row -->\r\n                    <li class=\"chat-item\">\r\n                        <div class=\"chat-img\">\r\n                            <img src=\"{{selectedUser.avtar}}\" alt=\"user\">\r\n                        </div>\r\n                        <div class=\"chat-content\">\r\n                            <h6 class=\"font-medium\">{{selectedUser.name}}</h6>\r\n                            <div class=\"box bg-light-info\">It’s Great opportunity to work.</div>\r\n                        </div>\r\n                        <div class=\"chat-time\">10:57 am</div>\r\n                    </li>\r\n                    <!--chat Row -->\r\n                    <li class=\"odd chat-item\">\r\n                        <div class=\"chat-content\">\r\n                            <div class=\"box bg-light-inverse\">I would love to join the team.</div>\r\n                            <br>\r\n                        </div>\r\n                    </li>\r\n                    <!--chat Row -->\r\n                    <li class=\"odd chat-item\">\r\n                        <div class=\"chat-content\">\r\n                            <div class=\"box bg-light-inverse\">Whats budget of the new project.</div>\r\n                            <br>\r\n                        </div>\r\n                        <div class=\"chat-time\">10:59 am</div>\r\n                    </li>\r\n                    <!--chat Row -->\r\n                    <li class=\"chat-item\">\r\n                        <div class=\"chat-img\">\r\n                            <img src=\"{{selectedUser.avtar}}\" alt=\"user\">\r\n                        </div>\r\n                        <div class=\"chat-content\">\r\n                            <h6 class=\"font-medium\">{{selectedUser.name}}</h6>\r\n                            <div class=\"box bg-light-info\">Well we have good budget for the project</div>\r\n                        </div>\r\n                        <div class=\"chat-time\">11:00 am</div>\r\n                    </li>\r\n                    <!--chat Row -->\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body border-top\">\r\n            <div class=\"row\">\r\n                <div class=\"col-9\">\r\n                    <div class=\"input-field m-t-0 m-b-0\">\r\n                        <input id=\"textarea1\" placeholder=\"Type and enter\" class=\"form-control border-0\" type=\"text\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-3\">\r\n                    <a class=\"btn-circle btn-lg btn-cyan float-right text-white\" href=\"javascript:void(0)\">\r\n                        <i class=\"fas fa-paper-plane\"></i>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/fullcalendar/fullcalendar.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/fullcalendar/fullcalendar.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <ng-template #modalContent let-close=\"close\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Event action occurred</h5>\r\n                <button type=\"button\" class=\"close\" (click)=\"close()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div> Action:\r\n                    <pre>{{ modalData?.action }}</pre> </div>\r\n                <div> Event:\r\n                    <pre>{{ modalData?.event | json }}</pre> </div>\r\n\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">OK</button>\r\n            </div>\r\n        </ng-template>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <div class=\"btn-group\">\r\n                    <div class=\"btn btn-success\" mwlCalendarPreviousView [view]=\"view\" [(viewDate)]=\"viewDate\" (viewDateChange)=\"activeDayIsOpen = false\">\r\n                        Previous </div>\r\n                    <div class=\"btn btn-outline-secondary\" mwlCalendarToday [(viewDate)]=\"viewDate\"> Today </div>\r\n                    <div class=\"btn btn-info\" mwlCalendarNextView [view]=\"view\" [(viewDate)]=\"viewDate\" (viewDateChange)=\"activeDayIsOpen = false\">\r\n                        Next </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4 text-center\">\r\n                <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\r\n            </div>\r\n            <div class=\"col-md-4 text-right\">\r\n                <div class=\"btn-group\">\r\n                    <div class=\"btn btn-info\" (click)=\"view = 'month'\" [class.active]=\"view === 'month'\"> Month </div>\r\n                    <div class=\"btn btn-success\" (click)=\"view = 'week'\" [class.active]=\"view === 'week'\"> Week </div>\r\n                    <div class=\"btn btn-warning\" (click)=\"view = 'day'\" [class.active]=\"view === 'day'\"> Day </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <div [ngSwitch]=\"view\">\r\n            <mwl-calendar-month-view *ngSwitchCase=\"'month'\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\" [activeDayIsOpen]=\"activeDayIsOpen\"\r\n                (dayClicked)=\"dayClicked($event.day)\" (eventClicked)=\"handleEvent('Clicked', $event.event)\" (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n            </mwl-calendar-month-view>\r\n            <mwl-calendar-week-view *ngSwitchCase=\"'week'\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\" (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n                (eventTimesChanged)=\"eventTimesChanged($event)\"> </mwl-calendar-week-view>\r\n            <mwl-calendar-day-view *ngSwitchCase=\"'day'\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\" (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n                (eventTimesChanged)=\"eventTimesChanged($event)\"> </mwl-calendar-day-view>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/taskboard/taskboard.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/taskboard/taskboard.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\r\n  <div class=\"card-body\" cdkDropListGroup>\r\n    <div class=\"taskboard page-height\">\r\n      <div class=\"taskboard-wrapper\">\r\n        <div class=\"taskboard-list\">\r\n          <h6 class=\"taskboard-header\">Todos</h6>\r\n          <div\r\n            class=\"taskboard-cards\"\r\n            cdkDropList\r\n            (cdkDropListDropped)=\"drop($event)\"\r\n          >\r\n            <div\r\n              class=\"{{ todo.class }} taskboard-task cursor-pointer\"\r\n              cdkDrag\r\n              *ngFor=\"let todo of todos\"\r\n            >\r\n              <div class=\"taskboard-task-title\">{{ todo.title }}</div>\r\n              <small class=\"card-text text-muted\">{{ todo.desc }}</small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"taskboard-wrapper\">\r\n        <div class=\"taskboard-list\">\r\n          <h6 class=\"taskboard-header\">In Process</h6>\r\n          <div\r\n            class=\"taskboard-cards\"\r\n            cdkDropList\r\n            (cdkDropListDropped)=\"drop($event)\"\r\n                >\r\n            <div\r\n              class=\"{{ inprocess.class }} taskboard-task cursor-pointer\"\r\n              cdkDrag\r\n              *ngFor=\"let inprocess of process\"\r\n            >\r\n              <div class=\"taskboard-task-title\">{{ inprocess.title }}</div>\r\n              <small class=\"card-text text-muted\">{{ inprocess.desc }}</small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"taskboard-wrapper\">\r\n        <div class=\"taskboard-list\">\r\n          <h6 class=\"taskboard-header\">Pending todos</h6>\r\n          <div\r\n            class=\"taskboard-cards\"\r\n            cdkDropList\r\n            (cdkDropListDropped)=\"drop($event)\"\r\n                 >\r\n            <div\r\n              class=\"{{ pendingtask.class }} taskboard-task cursor-pointer\"\r\n              cdkDrag\r\n              *ngFor=\"let pendingtask of pendings\"\r\n            >\r\n              <div class=\"taskboard-task-title\">{{ pendingtask.title }}</div>\r\n              <small class=\"card-text text-muted\">{{ pendingtask.desc }}</small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"taskboard-wrapper\">\r\n        <div class=\"taskboard-list\">\r\n          <h6 class=\"taskboard-header\">Task Done</h6>\r\n          <div\r\n            class=\"taskboard-cards\"\r\n            cdkDropList\r\n            (cdkDropListDropped)=\"drop($event)\"\r\n          >\r\n            <div\r\n              class=\"{{ taskdone.class }} taskboard-task cursor-pointer\"\r\n              cdkDrag\r\n              *ngFor=\"let taskdone of done\"\r\n            >\r\n              <div class=\"taskboard-task-title\">{{ taskdone.title }}</div>\r\n              <small class=\"card-text text-muted\">{{ taskdone.desc }}</small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/ticketdetails/ticketdetails.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/ticketdetails/ticketdetails.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-lg-8\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Ticket</h4> Hi There, i was wondering, do you provide a service to build custom pages. I need some pages\r\n                for a ticket system similar to the one you have. Please advise if you provide this service and i will send\r\n                through my requirements. Regards.\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Ticket Replies</h4>\r\n                <ul class=\"list-unstyled m-t-40\">\r\n                    <li class=\"media\">\r\n                        <img class=\"m-r-15\" src=\"assets/images/users/2.jpg\" width=\"60\" alt=\"Generic placeholder image\">\r\n                        <div class=\"media-body\">\r\n                            <h5 class=\"mt-0 mb-1\">User Name</h5> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante\r\n                            sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum\r\n                            nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\r\n                        </div>\r\n                    </li>\r\n                    <hr>\r\n                    <li class=\"media my-4\">\r\n                        <img class=\"m-r-15\" src=\"assets/images/users/1.jpg\" width=\"60\" alt=\"Generic placeholder image\">\r\n                        <div class=\"media-body\">\r\n                            <h5 class=\"mt-0 mb-1\">Agent Name</h5> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante\r\n                            sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum\r\n                            nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\r\n                        </div>\r\n                    </li>\r\n                    <hr>\r\n                    <li class=\"media\">\r\n                        <img class=\"m-r-15\" src=\"assets/images/users/2.jpg\" width=\"60\" alt=\"Generic placeholder image\">\r\n                        <div class=\"media-body\">\r\n                            <h5 class=\"mt-0 mb-1\">User Name</h5> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante\r\n                            sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum\r\n                            nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\r\n                        </div>\r\n                    </li>\r\n                    <hr>\r\n                    <li class=\"media\">\r\n                        <img class=\"m-r-15\" src=\"assets/images/users/2.jpg\" width=\"60\" alt=\"Generic placeholder image\">\r\n                        <div class=\"media-body\">\r\n                            <h5 class=\"mt-0 mb-1\">User Name</h5> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante\r\n                            sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum\r\n                            nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\r\n                        </div>\r\n                    </li>\r\n                    <hr>\r\n                    <li class=\"media my-4\">\r\n                        <img class=\"m-r-15\" src=\"assets/images/users/1.jpg\" width=\"60\" alt=\"Generic placeholder image\">\r\n                        <div class=\"media-body\">\r\n                            <h5 class=\"mt-0 mb-1\">Agent Name</h5> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante\r\n                            sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum\r\n                            nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\r\n                        </div>\r\n                    </li>\r\n                    <hr>\r\n                    <li class=\"media\">\r\n                        <img class=\"m-r-15\" src=\"assets/images/users/2.jpg\" width=\"60\" alt=\"Generic placeholder image\">\r\n                        <div class=\"media-body\">\r\n                            <h5 class=\"mt-0 mb-1\">User Name</h5> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante\r\n                            sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum\r\n                            nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"m-b-20\">Write a reply</h4>\r\n                <form method=\"post\">\r\n                    <quill-editor [style]=\"{height: '200px'}\"></quill-editor>\r\n                    <button type=\"button\" class=\"m-t-20 m-r-5 btn waves-effect waves-light btn-success\">Reply</button>\r\n                    <button type=\"button\" class=\"m-t-20 btn waves-effect waves-light btn-info\">Reply & close</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Ticket Info</h4>\r\n            </div>\r\n            <div class=\"card-body bg-light\">\r\n                <div class=\"row text-center\">\r\n                    <div class=\"col-6 m-t-10 m-b-10\">\r\n                        <span class=\"label label-warning\">In Progress</span>\r\n                    </div>\r\n                    <div class=\"col-6 m-t-10 m-b-10\">\r\n                        May 2, 2018 9:49\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h5 class=\"p-t-20\">Ticket Creator</h5>\r\n                <span>User Name</span>\r\n                <h5 class=\"m-t-30\">Support Staff</h5>\r\n                <span>Agent Name</span>\r\n                <br/>\r\n                <button type=\"button\" class=\"m-t-20 btn waves-effect waves-light btn-success\">Update</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body text-center\">\r\n                <h4 class=\"card-title\">User Info</h4>\r\n                <div class=\"profile-pic m-b-20 m-t-20\">\r\n                    <img src=\"assets/images/users/5.jpg\" width=\"150\" class=\"rounded-circle\" alt=\"user\">\r\n                    <h4 class=\"m-t-20 m-b-0\">Daniel Kristeen</h4>\r\n                    <a href=\"mailto:danielkristeen@gmail.com\">danielkristeen@gmail.com</a>\r\n                </div>\r\n                <div class=\"row text-center m-t-40\">\r\n                    <div class=\"col-4\">\r\n                        <h3 class=\"font-bold\">4</h3>\r\n                        <h6>Total</h6>\r\n                    </div>\r\n                    <div class=\"col-4\">\r\n                        <h3 class=\"font-bold\">2</h3>\r\n                        <h6>Open</h6>\r\n                    </div>\r\n                    <div class=\"col-4\">\r\n                        <h3 class=\"font-bold\">3</h3>\r\n                        <h6>Closed</h6>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"p-25 border-top m-t-15\">\r\n                <div class=\"row text-center\">\r\n                    <div class=\"col-6 border-right\">\r\n                        <a href=\"#\" class=\"link d-flex align-items-center justify-content-center font-medium\">\r\n                            <i class=\"mdi mdi-message font-20 m-r-5\"></i>Message</a>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <a href=\"#\" class=\"link d-flex align-items-center justify-content-center font-medium\">\r\n                            <i class=\"mdi mdi-developer-board font-20 m-r-5\"></i>Portfolio</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Ticket Statestics</h4>\r\n                <div id=\"visitor\" style=\"height:290px; width:100%;\" class=\"m-t-20\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/ticketlist/ticketlist.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/ticketlist/ticketlist.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Support Tickets</h4>\r\n                <div class=\"row m-t-20\">\r\n                    <!-- Column -->\r\n                    <div class=\"col-md-6 col-lg-3 col-xlg-3\">\r\n                        <div class=\"card card-hover\">\r\n                            <div class=\"box bg-info text-center\">\r\n                                <h1 class=\"font-light text-white\">2,064</h1>\r\n                                <h6 class=\"text-white\">Total Tickets</h6>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- Column -->\r\n                    <div class=\"col-md-6 col-lg-3 col-xlg-3\">\r\n                        <div class=\"card card-hover\">\r\n                            <div class=\"box bg-primary text-center\">\r\n                                <h1 class=\"font-light text-white\">1,738</h1>\r\n                                <h6 class=\"text-white\">Responded</h6>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- Column -->\r\n                    <div class=\"col-md-6 col-lg-3 col-xlg-3\">\r\n                        <div class=\"card card-hover\">\r\n                            <div class=\"box bg-success text-center\">\r\n                                <h1 class=\"font-light text-white\">1100</h1>\r\n                                <h6 class=\"text-white\">Resolve</h6>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- Column -->\r\n                    <div class=\"col-md-6 col-lg-3 col-xlg-3\">\r\n                        <div class=\"card card-hover\">\r\n                            <div class=\"box bg-dark text-center\">\r\n                                <h1 class=\"font-light text-white\">964</h1>\r\n                                <h6 class=\"text-white\">Pending</h6>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- Column -->\r\n                </div>\r\n                <div class=\"table-responsive\">\r\n                    <table id=\"zero_config\" class=\"table table-striped table-bordered no-wrap\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Status</th>\r\n                                <th>Title</th>\r\n                                <th>ID</th>\r\n                                <th>Product</th>\r\n                                <th>Created by</th>\r\n                                <th>Date</th>\r\n                                <th>Agent</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>\r\n                                    <span class=\"label label-warning\">In Progress</span>\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"ticket-detail.html\" class=\"font-medium link\">Elegant Theme Side Menu Open OnClick</a>\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"ticket-detail.html\" class=\"font-bold link\">276377</a>\r\n                                </td>\r\n                                <td>Elegant Admin</td>\r\n                                <td>Eric Pratt</td>\r\n                                <td>2018/05/01</td>\r\n                                <td>Fazz</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <span class=\"label label-danger\">Closed</span>\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"ticket-detail.html\" class=\"font-medium link\">AdminX Theme Side Menu Open OnClick</a>\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"ticket-detail.html\" class=\"font-bold link\">1234251</a>\r\n                                </td>\r\n                                <td>AdminX Admin</td>\r\n                                <td>Nirav Joshi</td>\r\n                                <td>2018/05/11</td>\r\n                                <td>Steve</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <span class=\"label label-success\">Opened</span>\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"ticket-detail.html\" class=\"font-medium link\">Admin-Pro Theme Side Menu Open OnClick</a>\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"ticket-detail.html\" class=\"font-bold link\">1020345</a>\r\n                                </td>\r\n                                <td>Admin-Pro</td>\r\n                                <td>Vishal Bhatt</td>\r\n                                <td>2018/04/01</td>\r\n                                <td>John</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <span class=\"label label-warning\">In Progress</span>\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"ticket-detail.html\" class=\"font-medium link\">Elegant Theme Side Menu Open OnClick</a>\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"ticket-detail.html\" class=\"font-bold link\">7810203</a>\r\n                                </td>\r\n                                <td>Elegant Admin</td>\r\n                                <td>Eric Pratt</td>\r\n                                <td>2018/01/01</td>\r\n                                <td>Fazz</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <span class=\"label label-warning\">In Progress</span>\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"ticket-detail.html\" class=\"font-medium link\">AdminX Theme Side Menu Open OnClick</a>\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"ticket-detail.html\" class=\"font-bold link\">2103450</a>\r\n                                </td>\r\n                                <td>AdminX Admin</td>\r\n                                <td>Nirav Joshi</td>\r\n                                <td>2018/05/01</td>\r\n                                <td>John</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <span class=\"label label-warning\">In Progress</span>\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"ticket-detail.html\" class=\"font-medium link\">Admin-Pro Theme Side Menu Open OnClick</a>\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"ticket-detail.html\" class=\"font-bold link\">2140530</a>\r\n                                </td>\r\n                                <td>Admin-Pro</td>\r\n                                <td>Vishal Bhatt</td>\r\n                                <td>2018/07/01</td>\r\n                                <td>Steve</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <span class=\"label label-success\">Opened</span>\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"ticket-detail.html\" class=\"font-medium link\">Elegant Theme Side Menu Open OnClick</a>\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"ticket-detail.html\" class=\"font-bold link\">4500123</a>\r\n                                </td>\r\n                                <td>Elegant Admin</td>\r\n                                <td>Eric Pratt</td>\r\n                                <td>2018/05/10</td>\r\n                                <td>Fazz</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <span class=\"label label-danger\">Closed</span>\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"ticket-detail.html\" class=\"font-medium link\">Elegant Theme Side Menu Open OnClick</a>\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"ticket-detail.html\" class=\"font-bold link\">1230450</a>\r\n                                </td>\r\n                                <td>Elegant Admin</td>\r\n                                <td>Eric Pratt</td>\r\n                                <td>2018/05/14</td>\r\n                                <td>John</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <span class=\"label label-danger\">Closed</span>\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"ticket-detail.html\" class=\"font-medium link\">AdminX Theme Side Menu Open OnClick</a>\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"ticket-detail.html\" class=\"font-bold link\">1240503</a>\r\n                                </td>\r\n                                <td>AdminX Admin</td>\r\n                                <td>Nirav Joshi</td>\r\n                                <td>2018/02/01</td>\r\n                                <td>Steve</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <span class=\"label label-success\">Opened</span>\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"ticket-detail.html\" class=\"font-medium link\">Admin-Pro Theme Side Menu Open OnClick</a>\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"ticket-detail.html\" class=\"font-bold link\">1250304</a>\r\n                                </td>\r\n                                <td>Admin-Pro</td>\r\n                                <td>Vishal Bhatt</td>\r\n                                <td>2018/05/21</td>\r\n                                <td>Fazz</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <span class=\"label label-success\">Opened</span>\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"ticket-detail.html\" class=\"font-medium link\">Elegant Theme Side Menu Open OnClick</a>\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"ticket-detail.html\" class=\"font-bold link\">1470250</a>\r\n                                </td>\r\n                                <td>Elegant Admin</td>\r\n                                <td>Eric Pratt</td>\r\n                                <td>2018/05/11</td>\r\n                                <td>John</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <span class=\"label label-danger\">Closed</span>\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"ticket-detail.html\" class=\"font-medium link\">Admin-Pro Theme Side Menu Open OnClick</a>\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"ticket-detail.html\" class=\"font-bold link\">1450023</a>\r\n                                </td>\r\n                                <td>Admin-Pro</td>\r\n                                <td>Vishal Bhatt</td>\r\n                                <td>2018/05/13</td>\r\n                                <td>Steve</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <span class=\"label label-warning\">In Progress</span>\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"ticket-detail.html\" class=\"font-medium link\">AdminX Theme Side Menu Open OnClick</a>\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"ticket-detail.html\" class=\"font-bold link\">1420530</a>\r\n                                </td>\r\n                                <td>AdminX Admin</td>\r\n                                <td>Nirav Joshi</td>\r\n                                <td>2018/10/01</td>\r\n                                <td>Fazz</td>\r\n                            </tr>\r\n                        </tbody>\r\n                        <tfoot>\r\n                            <tr>\r\n                                <th>Status</th>\r\n                                <th>Title</th>\r\n                                <th>ID</th>\r\n                                <th>Product</th>\r\n                                <th>Created by</th>\r\n                                <th>Date</th>\r\n                                <th>Agent</th>\r\n                            </tr>\r\n                        </tfoot>\r\n                    </table>\r\n                    <ul class=\"pagination float-right\">\r\n                        <li class=\"page-item disabled\">\r\n                            <a class=\"page-link\" href=\"#\" tabindex=\"-1\">Previous</a>\r\n                        </li>\r\n                        <li class=\"page-item active\">\r\n                            <a class=\"page-link\" href=\"#\">1</a>\r\n                        </li>\r\n                        <li class=\"page-item\">\r\n                            <a class=\"page-link\" href=\"#\">2\r\n                                <span class=\"sr-only\">(current)</span>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"page-item\">\r\n                            <a class=\"page-link\" href=\"#\">3</a>\r\n                        </li>\r\n                        <li class=\"page-item\">\r\n                            <a class=\"page-link\" href=\"#\">Next</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/apps/apps.module.ts":
/*!*************************************!*\
  !*** ./src/app/apps/apps.module.ts ***!
  \*************************************/
/*! exports provided: AppsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsModule", function() { return AppsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/__ivy_ngcc__/fesm2015/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/__ivy_ngcc__/fesm2015/ngx-quill.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
/* harmony import */ var _apps_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./apps.routing */ "./src/app/apps/apps.routing.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/apps/chat/chat.component.ts");
/* harmony import */ var _ticketlist_ticketlist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ticketlist/ticketlist.component */ "./src/app/apps/ticketlist/ticketlist.component.ts");
/* harmony import */ var _ticketdetails_ticketdetails_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ticketdetails/ticketdetails.component */ "./src/app/apps/ticketdetails/ticketdetails.component.ts");
/* harmony import */ var _taskboard_taskboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./taskboard/taskboard.component */ "./src/app/apps/taskboard/taskboard.component.ts");
/* harmony import */ var _fullcalendar_fullcalendar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fullcalendar/fullcalendar.component */ "./src/app/apps/fullcalendar/fullcalendar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















let AppsModule = class AppsModule {
};
AppsModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalModule"],
            angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarModule"].forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"],
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__["adapterFactory"]
            }),
            ngx_quill__WEBPACK_IMPORTED_MODULE_7__["QuillModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_apps_routing__WEBPACK_IMPORTED_MODULE_9__["AppsRoutes"]),
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"]
        ],
        declarations: [
            _chat_chat_component__WEBPACK_IMPORTED_MODULE_10__["ChatComponent"],
            _ticketlist_ticketlist_component__WEBPACK_IMPORTED_MODULE_11__["TicketlistComponent"],
            _ticketdetails_ticketdetails_component__WEBPACK_IMPORTED_MODULE_12__["TicketdetailsComponent"],
            _taskboard_taskboard_component__WEBPACK_IMPORTED_MODULE_13__["TaskboardComponent"],
            _fullcalendar_fullcalendar_component__WEBPACK_IMPORTED_MODULE_14__["FullcalendarComponent"]
        ]
    })
], AppsModule);



/***/ }),

/***/ "./src/app/apps/apps.routing.ts":
/*!**************************************!*\
  !*** ./src/app/apps/apps.routing.ts ***!
  \**************************************/
/*! exports provided: AppsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsRoutes", function() { return AppsRoutes; });
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/apps/chat/chat.component.ts");
/* harmony import */ var _ticketlist_ticketlist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticketlist/ticketlist.component */ "./src/app/apps/ticketlist/ticketlist.component.ts");
/* harmony import */ var _ticketdetails_ticketdetails_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ticketdetails/ticketdetails.component */ "./src/app/apps/ticketdetails/ticketdetails.component.ts");
/* harmony import */ var _taskboard_taskboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskboard/taskboard.component */ "./src/app/apps/taskboard/taskboard.component.ts");
/* harmony import */ var _fullcalendar_fullcalendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fullcalendar/fullcalendar.component */ "./src/app/apps/fullcalendar/fullcalendar.component.ts");





const AppsRoutes = [
    {
        path: '',
        children: [
            {
                path: 'chat',
                component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_0__["ChatComponent"],
                data: {
                    title: 'Chat App',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Chat App' }
                    ]
                }
            },
            {
                path: 'ticketlist',
                component: _ticketlist_ticketlist_component__WEBPACK_IMPORTED_MODULE_1__["TicketlistComponent"],
                data: {
                    title: 'Ticket List',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Ticket List' }
                    ]
                }
            },
            {
                path: 'ticketdetails',
                component: _ticketdetails_ticketdetails_component__WEBPACK_IMPORTED_MODULE_2__["TicketdetailsComponent"],
                data: {
                    title: 'Ticket Details',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Ticket Details' }
                    ]
                }
            },
            {
                path: 'taskboard',
                component: _taskboard_taskboard_component__WEBPACK_IMPORTED_MODULE_3__["TaskboardComponent"],
                data: {
                    title: 'Taskboard',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Taskboard' }
                    ]
                }
            },
            {
                path: 'fullcalendar',
                component: _fullcalendar_fullcalendar_component__WEBPACK_IMPORTED_MODULE_4__["FullcalendarComponent"],
                data: {
                    title: 'Full-Calendar',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Full-Calendar' }
                    ]
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/apps/chat/chat.component.ts":
/*!*********************************************!*\
  !*** ./src/app/apps/chat/chat.component.ts ***!
  \*********************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
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

let ChatComponent = class ChatComponent {
    constructor() {
        this.config = {};
        this.showSidebar = false;
        this.users = [
            {
                name: 'Steve Rogers',
                avtar: 'assets/images/users/1.jpg',
                status: 'online',
                lastmsg: 'Hey Banner, where are you?',
                time: '9:30 AM'
            },
            {
                name: 'Tony Stark',
                avtar: 'assets/images/users/2.jpg',
                status: 'busy',
                lastmsg: 'Thanos is coming.',
                time: '9:30 AM'
            },
            {
                name: 'Buckey Barnes',
                avtar: 'assets/images/users/3.jpg',
                status: 'away',
                lastmsg: 'I did not kill your father.',
                time: '9:30 AM'
            },
            {
                name: 'Natasha Romanoff',
                avtar: 'assets/images/users/4.jpg',
                status: 'offline',
                lastmsg: 'I am multitasking.',
                time: '9:30 AM'
            },
            {
                name: 'Maria Hill',
                avtar: 'assets/images/users/5.jpg',
                status: 'online',
                lastmsg: 'We are not at war.',
                time: '9:30 AM'
            },
            {
                name: 'Wanda Maximoff',
                avtar: 'assets/images/users/6.jpg',
                status: 'busy',
                lastmsg: 'We have to save Vision.',
                time: '9:30 AM'
            },
            {
                name: 'Carol Danevars',
                avtar: 'assets/images/users/7.jpg',
                status: 'away',
                lastmsg: 'I am coming.',
                time: '9:30 AM'
            }
        ];
        this.selectedUser = this.users[1];
    }
    mobileSidebar() {
        this.showSidebar = !this.showSidebar;
    }
    onSelect(user) {
        this.selectedUser = user;
    }
    ngAfterViewInit() { }
};
ChatComponent.ctorParameters = () => [];
ChatComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        template: __importDefault(__webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/chat/chat.component.html")).default
    }),
    __metadata("design:paramtypes", [])
], ChatComponent);



/***/ }),

/***/ "./src/app/apps/fullcalendar/fullcalendar.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/apps/fullcalendar/fullcalendar.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcHMvZnVsbGNhbGVuZGFyL2Z1bGxjYWxlbmRhci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/apps/fullcalendar/fullcalendar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/apps/fullcalendar/fullcalendar.component.ts ***!
  \*************************************************************/
/*! exports provided: FullcalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullcalendarComponent", function() { return FullcalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
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




const colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
let FullcalendarComponent = class FullcalendarComponent {
    constructor(modal) {
        this.modal = modal;
        this.view = 'month';
        this.viewDate = new Date();
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil text-white"></i>',
                onClick: ({ event }) => {
                    this.handleEvent('Edited', event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times  text-white"></i>',
                onClick: ({ event }) => {
                    this.events = this.events.filter(iEvent => iEvent !== event);
                    this.handleEvent('Deleted', event);
                }
            }
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.events = [
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(new Date(), 1),
                title: 'A 3 day event',
                color: colors.red,
                actions: this.actions
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()),
                title: 'An event with no end date',
                color: colors.yellow,
                actions: this.actions
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfMonth"])(new Date()), 3),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfMonth"])(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.blue
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()), 2),
                end: new Date(),
                title: 'A draggable and resizable event',
                color: colors.yellow,
                actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            }
        ];
        this.activeDayIsOpen = true;
    }
    dayClicked({ date, events }) {
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    }
    eventTimesChanged({ event, newStart, newEnd }) {
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    }
    handleEvent(action, event) {
        this.modalData = { event, action };
        this.modal.open(this.modalContent, { size: 'lg' });
    }
    addEvent() {
        this.events.push({
            title: 'New event',
            start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()),
            end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date()),
            color: colors.red,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });
        this.refresh.next();
    }
};
FullcalendarComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }
];
FullcalendarComponent.propDecorators = {
    modalContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['modalContent', { static: true },] }]
};
FullcalendarComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-fullcalendar',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        template: __importDefault(__webpack_require__(/*! raw-loader!./fullcalendar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/fullcalendar/fullcalendar.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./fullcalendar.component.scss */ "./src/app/apps/fullcalendar/fullcalendar.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
], FullcalendarComponent);



/***/ }),

/***/ "./src/app/apps/taskboard/taskboard.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/apps/taskboard/taskboard.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  padding: 0 !important;\n  height: 100%;\n}\n\n.gu-mirror {\n  background-color: white;\n  border-radius: 0.125rem;\n  padding: 0.5rem;\n  opacity: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwcy90YXNrYm9hcmQvdGFza2JvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2FwcHMvdGFza2JvYXJkL3Rhc2tib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZ3UtbWlycm9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjEyNXJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/apps/taskboard/taskboard.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/apps/taskboard/taskboard.component.ts ***!
  \*******************************************************/
/*! exports provided: TaskboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardComponent", function() { return TaskboardComponent; });
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


let TaskboardComponent = class TaskboardComponent {
    constructor() {
        this.todos = [
            {
                title: 'QA Testing',
                desc: 'Etiam porta sem malesuada magna mollis euismod.',
                class: '',
            },
            {
                title: 'Layout design',
                desc: 'Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
                class: 'task-status-danger',
            },
            {
                title: 'Fix navigation menu',
                desc: 'Donec sed odio dui.',
                class: 'task-status-info',
            },
            {
                title: 'Update bootstrap 4',
                desc: 'Aenean lacinia bibendum nulla sed consectetur.',
                class: '',
            },
            {
                title: 'Run build tools',
                desc: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
                class: '',
            },
            {
                title: 'List article ideas',
                desc: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
                class: 'task-status-success',
            },
            {
                title: 'Reactjs fixes',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                class: '',
            },
            {
                title: 'Implement SSL',
                desc: 'Etiam porta sem malesuada magna mollis euismod.',
                class: 'task-status-warning',
            },
        ];
        this.process = [
            {
                title: 'QOS Assessment',
                desc: 'Maecenas sed diam eget risus varius blandit sit amet non magna.',
                class: '',
            },
            {
                title: 'Schedule new tasks',
                desc: 'Sed posuere consectetur est at lobortis.',
                class: 'task-status-warning',
            },
            {
                title: 'Add dashboard variants',
                desc: 'Nulla vitae elit libero, a pharetra augue.',
                class: '',
            },
            {
                title: 'Extended color scheme support',
                desc: 'Morbi leo risus, porta ac consectetur ac, vestibulum ateros.',
                class: '',
            },
            {
                title: 'Merge unit tests',
                desc: 'Maecenas sed diam eget risus varius blandit sit amet non magna.',
                class: 'task-status-info',
            },
            {
                title: 'Test final version',
                desc: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
                class: '',
            },
        ];
        this.pendings = [
            {
                title: 'Integrate Angular 4',
                desc: 'Nulla vitae elit libero, a pharetra augue.',
                class: '',
            },
            {
                title: 'Additional fields',
                desc: 'Donec id elit non mi porta gravida at eget metus.',
                class: '',
            },
            {
                title: 'Draggable task board',
                desc: 'Sed posuere consectetur est at lobortis.',
                class: 'task-status-danger',
            },
            {
                title: 'Setup CI server',
                desc: 'Maecenas faucibus mollis interdum.',
                class: 'task-status-danger',
            },
            {
                title: 'Assign new tasks',
                desc: 'Nullam quis risus eget urna mollis ornare vel eu leo.',
                class: '',
            },
            {
                title: 'Contact administrator',
                desc: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
                class: '',
            },
            {
                title: 'Commit changes',
                desc: 'Aenean lacinia bibendum nulla sed consectetur.',
                class: '',
            },
        ];
        this.done = [
            {
                title: 'Store new files',
                desc: 'Sed posuere consectetur est at lobortis.',
                class: 'task-status-info',
            },
            {
                title: 'Build landing page',
                desc: 'Maecenas sed diam eget risus varius blandit sit amet non magna.',
                class: '',
            },
            {
                title: 'Setup basic layout',
                desc: 'Vestibulum id ligula porta felis euismod semper.',
                class: '',
            },
            {
                title: 'Graphical fixes',
                desc: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
                class: '',
            },
            {
                title: 'Email alerts',
                desc: 'Donec sed odio dui.',
                class: 'task-status-warning',
            },
        ];
    }
    drop(event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
};
TaskboardComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-taskboard',
        template: __importDefault(__webpack_require__(/*! raw-loader!./taskboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/taskboard/taskboard.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./taskboard.component.scss */ "./src/app/apps/taskboard/taskboard.component.scss")).default]
    })
], TaskboardComponent);



/***/ }),

/***/ "./src/app/apps/ticketdetails/ticketdetails.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/apps/ticketdetails/ticketdetails.component.ts ***!
  \***************************************************************/
/*! exports provided: TicketdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketdetailsComponent", function() { return TicketdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var c3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! c3 */ "./node_modules/c3/c3.js");
/* harmony import */ var c3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(c3__WEBPACK_IMPORTED_MODULE_1__);
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


let TicketdetailsComponent = class TicketdetailsComponent {
    constructor() { }
    ngAfterViewInit() {
        const chart = c3__WEBPACK_IMPORTED_MODULE_1__["generate"]({
            bindto: '#visitor',
            data: {
                columns: [['Open', 4], ['Closed', 2], ['In progress', 2], ['Other', 0]],
                type: 'donut'
            },
            donut: {
                label: {
                    show: false
                },
                title: 'Tickets',
                width: 35
            },
            legend: {
                hide: true
            },
            color: {
                pattern: ['#40c4ff', '#2961ff', '#ff821c', '#7e74fb']
            }
        });
    }
};
TicketdetailsComponent.ctorParameters = () => [];
TicketdetailsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        template: __importDefault(__webpack_require__(/*! raw-loader!./ticketdetails.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/ticketdetails/ticketdetails.component.html")).default
    }),
    __metadata("design:paramtypes", [])
], TicketdetailsComponent);



/***/ }),

/***/ "./src/app/apps/ticketlist/ticketlist.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/apps/ticketlist/ticketlist.component.ts ***!
  \*********************************************************/
/*! exports provided: TicketlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketlistComponent", function() { return TicketlistComponent; });
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

let TicketlistComponent = class TicketlistComponent {
    constructor() { }
    ngAfterViewInit() { }
};
TicketlistComponent.ctorParameters = () => [];
TicketlistComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        template: __importDefault(__webpack_require__(/*! raw-loader!./ticketlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/ticketlist/ticketlist.component.html")).default
    }),
    __metadata("design:paramtypes", [])
], TicketlistComponent);



/***/ })

}]);
//# sourceMappingURL=apps-apps-module-es2015.js.map