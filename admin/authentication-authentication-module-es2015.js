(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/404/not-found.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/404/not-found.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"error-box\">\n    <div class=\"error-body text-center\">\n        <h1 class=\"error-title text-danger\">404</h1>\n        <h3 class=\"text-uppercase error-subtitle\">PAGE NOT FOUND !</h3>\n        <p class=\"text-muted m-t-30 m-b-30\">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>\n        <a href=\"#/dashboard/classic\" class=\"btn btn-danger btn-rounded waves-effect waves-light m-b-40\">Back to home</a> \n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/lock/changepassword.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/lock/changepassword.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n    .shw_pass {\n    position: relative;\n    background: #f8f9fa;\n    width: 8%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    \n}\n</style>\n<div class=\"auth-wrapper d-flex no-block justify-content-center align-items-center\" style=\"background:url(assets/images/big/auth-bg.jpg) no-repeat; background-size: cover\">\n    <div class=\"auth-box\">\n        <div>\n            <div class=\"logo\">\n                <span class=\"db\"><img alt=\"thumbnail\" class=\"\" width=\"100\" src=\"assets/images/logo-text.svg\"></span>\n            </div>\n            <!-- Form -->\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <form [formGroup]=\"changepassForm\" class=\"form-horizontal m-t-20\" >\n                        <div class=\"form-group row inner-addon right-addon\">\n                            <div class=\"col-12 input-group\">\n                                <input class=\"form-control form-control-lg\" formControlName=\"oldPassword\" [type]=\"showPassword ? 'text' : 'password'\" required=\"\" placeholder=\"Old Password\">\n                                <div class=\"shw_pass\">\n                                    <i alt=\"show\" class=\"fa fa-eye\" \n                                    (click)=\"showPassword = !showPassword\"\n                                    [class.hide]=\"showPassword\"></i>\n                                    <i alt=\"hide\" class=\"fa fa-eye-slash\" \n                                    (click)=\"showPassword = !showPassword\"\n                                    [class.hide]=\"!showPassword\"></i>\n                                  </div>\n                            </div>\n                            <div class=\"col-12 mt-1\">\n                                <mat-error class=\"text-danger px-1 d-block\" *ngIf=\"changepassForm.get('oldPassword').hasError('required') && changepassForm.controls['oldPassword'].touched\">\n                                    *Old Password is required.\n                                </mat-error>\n                                <mat-error class=\"text-danger px-1 d-block\" *ngIf=\"changepassForm.get('oldPassword').hasError('minlength') &&\n                                    !changepassForm.get('oldPassword').hasError('required')\">\n                                     *Min 8 characters.\n                                </mat-error>\n                                <mat-error class=\"text-danger px-1 d-block\" *ngIf=\"changepassForm.get('oldPassword').hasError('maxlength') &&\n                                    !changepassForm.get('oldPassword').hasError('required')\">\n                                    *Maximum 16 characters long.\n                                </mat-error>\n                            </div>\n                        </div>\n                        <div class=\"form-group row inner-addon right-addon\">\n                            <div class=\"col-12 input-group\">\n                                <input class=\"form-control form-control-lg\" formControlName=\"newPassword\" [type]=\"showNewPassword ? 'text' : 'password'\" required=\"\" placeholder=\"New Password\">\n                                <div class=\"shw_pass\">\n                                    <i alt=\"show\" class=\"fa fa-eye\" \n                                    (click)=\"showNewPassword = !showNewPassword\"\n                                    [class.hide]=\"showNewPassword\"></i>\n                                    <i alt=\"hide\" class=\"fa fa-eye-slash\" \n                                    (click)=\"showNewPassword = !showNewPassword\"\n                                    [class.hide]=\"!showNewPassword\"></i>\n                                  </div>\n                            </div>\n                            <div class=\"col-12 mt-1\">\n                                <mat-error class=\"text-danger  px-1 d-block\" *ngIf=\"changepassForm.get('newPassword').hasError('required') && changepassForm.controls['newPassword'].touched\">\n                                    *New Password is required.\n                                </mat-error>\n                                <mat-error class=\"text-danger px-1 d-block\" *ngIf=\"changepassForm.get('newPassword').hasError('minlength') &&\n                                    !changepassForm.get('newPassword').hasError('required')\">\n                                     *Min 8 characters.\n                                </mat-error>\n                                <mat-error class=\"text-danger px-1 d-block\" *ngIf=\"changepassForm.get('newPassword').hasError('maxlength') &&\n                                    !changepassForm.get('newPassword').hasError('required')\">\n                                    *Maximum 16 characters long.\n                                </mat-error>\n                            </div>\n                        </div>\n                        <div class=\"form-group row inner-addon right-addon\">\n                            <div class=\"col-12 input-group\">\n                                <input class=\"form-control form-control-lg\" [type]=\"showCnfPassword ? 'text' : 'password'\" formControlName=\"retypepassword\" required=\"\" placeholder=\"Retype Password\">\n                                <div class=\"shw_pass\">\n                                    <i alt=\"show\" class=\"fa fa-eye\" \n                                    (click)=\"showCnfPassword = !showCnfPassword\"\n                                    [class.hide]=\"showCnfPassword\"></i>\n                                    <i alt=\"hide\" class=\"fa fa-eye-slash\" \n                                    (click)=\"showCnfPassword = !showCnfPassword\"\n                                    [class.hide]=\"!showCnfPassword\"></i>\n                                  </div>\n                            </div>\n                            <div class=\"col-12 mt-1\">\n                                <mat-error class=\"text-danger px-1 d-block\" *ngIf=\"changepassForm.get('retypepassword').hasError('required') && changepassForm.controls['retypepassword'].touched\">\n                                    *Retype Password is required.\n                                </mat-error>\n                                <mat-error class=\"text-danger px-1 d-block\" *ngIf=\"changepassForm.get('retypepassword').hasError('minlength') &&\n                                    !changepassForm.get('retypepassword').hasError('required')\">\n                                     *Min 8 characters.\n                                </mat-error>\n                                <mat-error class=\"text-danger px-1 d-block\" *ngIf=\"changepassForm.get('retypepassword').hasError('maxlength') &&\n                                    !changepassForm.get('retypepassword').hasError('required')\">\n                                    *Maximum 16 characters long.\n                                </mat-error>\n                                <mat-error class=\"text-danger px-1 d-block\" *ngIf=\"changepassForm.get('retypepassword').hasError('passwordMismatch') &&\n                                    !changepassForm.get('retypepassword').hasError('required')\">\n                                    *Password mismatched\n                                </mat-error>\n                            </div>\n                        </div>\n                        <div class=\"form-group text-center\">\n                            <div class=\"col-xs-12 p-b-20\">\n                                <button class=\"btn btn-block btn-lg bg-white text-dark\"[disabled]=\"!changepassForm.valid\" (click)=\"changepass()\" type=\"submit\">Submit</button>\n                            </div>\n                            <div class=\"col-xs-12 text-center\">\n                                <a class=\"btn btn-block btn-lg btn-danger\" (click)=\"history.back()\">Cancel</a>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login/login.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login/login.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-wrapper d-flex no-block justify-content-center align-items-center\" style=\"background:url(assets/images/big/auth-bg.jpg) no-repeat center center;\">\n    <div class=\"auth-box\">\n        <div *ngIf=\"showLogin\">\n            <div class=\"logo\">\n                <span class=\"db\"><img src=\"assets/images/logo-icon.svg\" alt=\"logo\" /></span>\n                <h5 class=\"font-medium m-b-20\">Sign In to Admin</h5>\n            </div>\n            <!-- Form -->\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <form class=\"form-horizontal m-t-20\" [formGroup]=\"loginForm\" (submit)=\"login()\">\n                        <div class=\"input-group mb-3\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"ti-user\"></i></span>\n                            </div>\n                            <input type=\"email\" class=\"form-control form-control-lg\" formControlName=\"email\" placeholder=\"email\" aria-label=\"email\" aria-describedby=\"basic-addon1\">\n                            <!-- <div *ngIf=\"loginForm.controls['email'].hasError('required') && loginForm.controls['email'].touched\" class=\"invalid-feedback\"> -->\n                                <div *ngIf=\"loginForm.controls['email'].hasError('required') && loginForm.controls['email'].touched\">\n                                    Please enter the email address\n                                </div>\n\n                                <div *ngIf=\"loginForm.controls['email'].hasError('pattern') && loginForm.controls['email'].touched\">\n                                    Email must be a valid e-mail address\n                                </div>\n                            <!-- </div> -->\n                        </div>\n                        <div class=\"input-group mb-3\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fa fa-lock\"></i></span>\n                            </div>\n                            <input type=\"password\" class=\"form-control form-control-lg\" formControlName=\"password\" placeholder=\"Password\" aria-label=\"Password\" aria-describedby=\"basic-addon1\">\n                            <div *ngIf=\"loginForm.controls['password'].hasError('required') && loginForm.controls['password'].touched\">\n                                Please enter the password\n                            </div>\n\n                            <div *ngIf=\"loginForm.controls['password'].hasError('minLength') && loginForm.controls['password'].touched\">\n                                Password must be atleast 8 characters\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"custom-control custom-checkbox\">\n                                    <input type=\"checkbox\" class=\"custom-control-input\" [(ngModel)]=\"remember\" [ngModelOptions]=\"{standalone: true}\" id=\"customCheck1\">\n                                    <label class=\"custom-control-label text-white\" for=\"customCheck1\">Remember me</label>\n                                    <a (click)=\"goToforgotPassword()\" href=\"javascript:void(0)\" id=\"to-recover\" class=\"text-white float-right\"><i class=\"fa fa-lock m-r-5\"></i> Forgot password?</a>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group text-center\">\n                            <div class=\"col-xs-12 p-b-20\">\n                                <button class=\"btn btn-block btn-lg btn-info\" type=\"submit\">Log In</button>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-12 col-sm-12 col-md-12 m-t-10 text-center\">\n                                <div class=\"social\">\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-facebook m-r-5\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Login with Facebook\"> <i aria-hidden=\"true\" class=\"fab fa-facebook\"></i> </a>\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-googleplus\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Login with Google\"> <i aria-hidden=\"true\" class=\"fab fa-google-plus\"></i> </a>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group m-b-0 m-t-10\">\n                            <div class=\"col-sm-12 text-center\">\n                                Don't have an account? <a href=\"#/signup\" class=\"text-info m-l-5\"><b>Sign Up</b></a>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"forgotPwd\">\n            <div class=\"logo\">\n                <span class=\"db\"><img src=\"assets/images/logo-icon.svg\" alt=\"logo\" /></span>\n                <h5 class=\"font-medium m-b-20\">Recover Password</h5>\n                <span>Enter your Email and instructions will be sent to you!</span>\n            </div>\n            <div class=\"row m-t-20\">\n                <form class=\"col-12\">\n                    <div class=\"form-group row\">\n                        <div class=\"col-12\">\n                            <input class=\"form-control form-control-lg\" type=\"email\" required=\"\" placeholder=\"Username\">\n                        </div>\n                    </div>\n                    <div class=\"row m-t-20\">\n                        <div class=\"col-12\">\n                            <button class=\"btn btn-block btn-lg btn-danger\" type=\"submit\" name=\"action\">Reset</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login2/login2.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login2/login2.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-wrapper d-flex no-block justify-content-center align-items-center\" style=\"background:url(assets/images/background/login-register.jpg) no-repeat center center;background-size: cover;\">\n    <div class=\"auth-box on-sidebar\">\n        <div *ngIf=\"showLogin\">\n            <div class=\"logo\">\n                <span class=\"db\"><img src=\"assets/images/logo-text.svg\" alt=\"logo\"  /></span>\n                <!-- <h5 class=\"font-medium m-b-20\">Sign In to Admin</h5> -->\n            </div>\n            <!-- Form -->\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <form class=\"form-horizontal m-t-20\" [formGroup]=\"loginForm\" (submit)=\"login()\">\n                        <div class=\"input-group mb-3\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"ti-user\"></i></span>\n                            </div>\n                            <input type=\"email\" class=\"form-control form-control-lg\" formControlName=\"email\" placeholder=\"Email\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\n                            <mat-error class=\"form-text text-danger w-100\" *ngIf=\"loginForm.controls['email'].hasError('required') && loginForm.controls['email'].touched\">\n                                Please enter the email address\n                            </mat-error>\n\n                            <mat-error class=\"form-text text-danger w-100\" *ngIf=\"loginForm.controls['email'].hasError('pattern') && loginForm.controls['email'].touched\">\n                                Email must be a valid e-mail address\n                            </mat-error>\n                        </div>\n                        <div class=\"input-group form-group mb-3 inner-addon right-addon\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fa fa-lock\"></i></span>\n                            </div>\n                                <input [type]=\"showPassword ? 'text' : 'password'\" class=\"form-control form-control-lg\" formControlName=\"password\" placeholder=\"Password\" aria-label=\"Password\" aria-describedby=\"basic-addon1\" required>\n                                <div class=\"shw_pass\">\n                                    <i alt=\"show\" class=\"fa fa-eye\" \n                                    (click)=\"showPassword = !showPassword\"\n                                    [class.hide]=\"showPassword\"></i>\n                                    <i alt=\"hide\" class=\"fa fa-eye-slash\" \n                                    (click)=\"showPassword = !showPassword\"\n                                    [class.hide]=\"!showPassword\"></i>\n                                  </div>\n                            <mat-error class=\"form-text text-danger w-100\" *ngIf=\"loginForm.controls['password'].hasError('required') && loginForm.controls['password'].touched\">\n                                Please enter the password\n                            </mat-error>\n\n                            <mat-error class=\"form-text text-danger w-100\" *ngIf=\"loginForm.controls['password'].hasError('minlength')\">\n                                Password must be atleast 8 characters\n                            </mat-error>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"custom-control custom-checkbox\">\n                                    <input type=\"checkbox\" class=\"custom-control-input\" [(ngModel)]=\"remember\" [ngModelOptions]=\"{standalone: true}\" id=\"customCheck1\">\n                                    <label class=\"custom-control-label text-white\" for=\"customCheck1\">Remember me</label>\n                                    <a (click)=\"goToforgotPassword()\" href=\"javascript:void(0)\" id=\"to-recover\" class=\"text-white float-right\"><i class=\"fa fa-lock m-r-5\"></i> Forgot password</a>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group text-center\">\n                            <div class=\"col-xs-12 p-b-20\">\n                                <button class=\"btn btn-block btn-lg btn-white\" type=\"submit\">Log In</button>\n                            </div>\n                        </div>\n                        <!-- <div class=\"row\">\n                            <div class=\"col-xs-12 col-sm-12 col-md-12 m-t-10 text-center\">\n                                <div class=\"social\">\n                                    <a href=\"javascript:void(0)\" class=\"btn  btn-facebook m-r-5\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Login with Facebook\"> <i aria-hidden=\"true\" class=\"fab  fa-facebook\"></i> </a>\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-googleplus\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Login with Google\"> <i aria-hidden=\"true\" class=\"fab  fa-google-plus\"></i> </a>\n                                </div>\n                            </div>\n                        </div> -->\n                        <!-- <div class=\"form-group m-b-0 m-t-10\">\n                            <div class=\"col-sm-12 text-center\">\n                                Don't have an account? <a href=\"#/signup2\" class=\"text-info m-l-5\"><b>Sign Up</b></a>\n                            </div>\n                        </div> -->\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"forgotPwd\">\n            <div class=\"logo\">\n                <span class=\"db\"><img src=\"assets/images/logo-text.svg\" alt=\"logo\" /></span>\n                <h5 class=\"font-medium my-3\">Recover Password</h5>\n                <span>Enter your Email and instructions will be sent to you!</span>\n            </div>\n            <div class=\"row m-t-20\">\n                <!-- Form -->\n                <form class=\"col-12\" [formGroup]=\"forgotForm\">\n                    <!-- email -->\n                    <div class=\"form-group row\">\n                        <div class=\"col-12\">\n                            <input class=\"form-control form-control-lg\" type=\"email\" required=\"\" placeholder=\"Email\" formControlName=\"email\">\n                        </div>\n                        <mat-error class=\"form-text text-danger w-100\" *ngIf=\"forgotForm.controls['email'].hasError('required') && forgotForm.controls['email'].touched\">\n                            Please enter the email address\n                        </mat-error>\n\n                        <mat-error class=\"form-text text-danger w-100\" *ngIf=\"forgotForm.controls['email'].hasError('pattern') && forgotForm.controls['email'].touched\">\n                            Email must be a valid e-mail address\n                        </mat-error>\n                    </div>\n                    <!-- pwd -->\n                    <div class=\"row m-t-20\">\n                        <div class=\"col-12\">\n                            <button class=\"btn btn-block btn-lg btn-white\" type=\"submit\" (click)=\"ForgotPassword()\">Reset</button>\n                        </div>\n                    </div>\n                    <div class=\"row m-t-20\">\n                        <div class=\"col-12\">\n                            <button class=\"btn btn-block btn-lg btn-danger\" (click)=\"goToforgotPassword()\">Cancel</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/signup/signup.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/signup/signup.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-wrapper d-flex no-block justify-content-center align-items-center\" style=\"background:url(assets/images/big/auth-bg.jpg) no-repeat center center;\">\n    <div class=\"auth-box\">\n        <div>\n            <div class=\"logo\">\n                <!-- <span class=\"db\"><img src=\"assets/images/logo-icon.svg\" alt=\"logo\" /></span> -->\n                <h5 class=\"font-medium m-b-20\">Sign Up to Admin</h5>\n            </div>\n            <!-- Form -->\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <form class=\"form-horizontal m-t-20\" action=\"index.html\">\n                        <div class=\"form-group row \">\n                            <div class=\"col-12 \">\n                                <input class=\"form-control form-control-lg\" type=\"text\" required=\" \" placeholder=\"Name\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-12 \">\n                                <input class=\"form-control form-control-lg\" type=\"text\" required=\" \" placeholder=\"Email\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-12 \">\n                                <input class=\"form-control form-control-lg\" type=\"password\" required=\" \" placeholder=\"Password\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-12 \">\n                                <input class=\"form-control form-control-lg\" type=\"password\" required=\" \" placeholder=\"Confirm Password\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12 \">\n                                <div class=\"custom-control custom-checkbox\">\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n                                    <label class=\"custom-control-label\" for=\"customCheck1\">I agree to all <a href=\"javascript:void(0)\">Terms</a></label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group text-center \">\n                            <div class=\"col-xs-12 p-b-20 \">\n                                <button class=\"btn btn-block btn-lg btn-info \" type=\"submit \">SIGN UP</button>\n                            </div>\n                        </div>\n                        <div class=\"form-group m-b-0 m-t-10 \">\n                            <div class=\"col-sm-12 text-center \">\n                                Already have an account? <a href=\"#/login \" class=\"text-info m-l-5 \"><b>Sign In</b></a>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/signup2/signup2.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/signup2/signup2.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-wrapper d-flex no-block justify-content-center align-items-center\" style=\"background:url(assets/images/background/login-register.jpg) no-repeat center center;\">\n    <div class=\"auth-box on-sidebar\">\n        <div>\n            <div class=\"logo\">\n                <span class=\"db\"><img src=\"assets/images/logo-icon.svg\" alt=\"logo\" /></span>\n                <h5 class=\"font-medium m-b-20\">Sign Up to Admin</h5>\n            </div>\n            <!-- Form -->\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <form class=\"form-horizontal m-t-20\" action=\"index.html\">\n                        <div class=\"form-group row \">\n                            <div class=\"col-12 \">\n                                <input class=\"form-control form-control-lg\" type=\"text\" required=\" \" placeholder=\"Name\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-12 \">\n                                <input class=\"form-control form-control-lg\" type=\"text\" required=\" \" placeholder=\"Email\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-12 \">\n                                <input class=\"form-control form-control-lg\" type=\"password\" required=\" \" placeholder=\"Password\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-12 \">\n                                <input class=\"form-control form-control-lg\" type=\"password\" required=\" \" placeholder=\"Confirm Password\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12 \">\n                                <div class=\"custom-control custom-checkbox\">\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n                                    <label class=\"custom-control-label\" for=\"customCheck1\">I agree to all <a href=\"javascript:void(0)\">Terms</a></label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group text-center \">\n                            <div class=\"col-xs-12 p-b-20 \">\n                                <button class=\"btn btn-block btn-lg btn-info \" type=\"submit \">SIGN UP</button>\n                            </div>\n                        </div>\n                        <div class=\"form-group m-b-0 m-t-10 \">\n                            <div class=\"col-sm-12 text-center \">\n                                Already have an account? <a href=\"#/login2 \" class=\"text-info m-l-5 \"><b>Sign In</b></a>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/authentication/404/not-found.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/404/not-found.component.ts ***!
  \***********************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
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

let NotfoundComponent = class NotfoundComponent {
    ngAfterViewInit() { }
};
NotfoundComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-not-found',
        template: __importDefault(__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/404/not-found.component.html")).default
    })
], NotfoundComponent);



/***/ }),

/***/ "./src/app/authentication/authentication.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _404_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./404/not-found.component */ "./src/app/authentication/404/not-found.component.ts");
/* harmony import */ var _lock_changepassword_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lock/changepassword.component */ "./src/app/authentication/lock/changepassword.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _login2_login2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login2/login2.component */ "./src/app/authentication/login2/login2.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/authentication/signup/signup.component.ts");
/* harmony import */ var _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup2/signup2.component */ "./src/app/authentication/signup2/signup2.component.ts");
/* harmony import */ var _authentication_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./authentication.routing */ "./src/app/authentication/authentication.routing.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














let AuthenticationModule = class AuthenticationModule {
};
AuthenticationModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_authentication_routing__WEBPACK_IMPORTED_MODULE_11__["AuthenticationRoutes"]),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"]
        ],
        declarations: [
            _404_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotfoundComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
            _lock_changepassword_component__WEBPACK_IMPORTED_MODULE_6__["changepasswordComponent"],
            _login2_login2_component__WEBPACK_IMPORTED_MODULE_8__["Login2Component"],
            _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_10__["Signup2Component"]
        ]
    })
], AuthenticationModule);



/***/ }),

/***/ "./src/app/authentication/authentication.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/authentication/authentication.routing.ts ***!
  \**********************************************************/
/*! exports provided: AuthenticationRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutes", function() { return AuthenticationRoutes; });
/* harmony import */ var _404_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./404/not-found.component */ "./src/app/authentication/404/not-found.component.ts");
/* harmony import */ var _lock_changepassword_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lock/changepassword.component */ "./src/app/authentication/lock/changepassword.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _login2_login2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login2/login2.component */ "./src/app/authentication/login2/login2.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/authentication/signup/signup.component.ts");
/* harmony import */ var _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup2/signup2.component */ "./src/app/authentication/signup2/signup2.component.ts");






const AuthenticationRoutes = [
    {
        path: '',
        children: [
            {
                path: '404',
                component: _404_not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotfoundComponent"]
            },
            {
                path: 'changepassword',
                component: _lock_changepassword_component__WEBPACK_IMPORTED_MODULE_1__["changepasswordComponent"]
            },
            {
                path: 'login2',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
            },
            {
                path: 'login',
                component: _login2_login2_component__WEBPACK_IMPORTED_MODULE_3__["Login2Component"]
            },
            {
                path: 'signup',
                component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
            },
            {
                path: 'signup2',
                component: _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_5__["Signup2Component"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/authentication/lock/changepassword.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/authentication/lock/changepassword.component.ts ***!
  \*****************************************************************/
/*! exports provided: changepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changepasswordComponent", function() { return changepasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var src_app_shared_services_custom_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/custom-validation.service */ "./src/app/shared/services/custom-validation.service.ts");
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






let changepasswordComponent = class changepasswordComponent {
    constructor(fb, apiservice, router, toaster, customvalidator) {
        this.fb = fb;
        this.apiservice = apiservice;
        this.router = router;
        this.toaster = toaster;
        this.customvalidator = customvalidator;
        this.history = window.history;
    }
    ngOnInit() {
        this.changepassForm = this.fb.group({
            "oldPassword": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)]],
            "newPassword": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)]],
            "retypepassword": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)]]
        }, {
            validator: this.customvalidator.passwordMatchValidator("newPassword", "retypepassword")
        });
    }
    changepass() {
        let url = `changePassword`;
        let datapass = this.changepassForm.value;
        delete datapass.retypepassword;
        console.log(datapass);
        this.apiservice.postApi(url, datapass).subscribe((res) => {
            console.log(res);
            if (res.success == true) {
                this.toaster.success(res.message, 'Change Password');
                this.router.navigate(['dashboard']);
            }
        });
    }
};
changepasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: src_app_shared_services_custom_validation_service__WEBPACK_IMPORTED_MODULE_5__["CustomValidationService"] }
];
changepasswordComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-changepassword',
        template: __importDefault(__webpack_require__(/*! raw-loader!./changepassword.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/lock/changepassword.component.html")).default
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], src_app_shared_services_custom_validation_service__WEBPACK_IMPORTED_MODULE_5__["CustomValidationService"]])
], changepasswordComponent);



/***/ }),

/***/ "./src/app/authentication/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/api.service */ "./src/app/shared/services/api.service.ts");
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





let LoginComponent = class LoginComponent {
    constructor(fb, api, router, toastr) {
        this.fb = fb;
        this.api = api;
        this.router = router;
        this.toastr = toastr;
        this.submitted = false;
        this.showLogin = true;
        this.forgotPwd = false;
        this.remember = false;
        this.errorMessage = "Error";
        this.flags = {
            isLogin: false,
            isError: false,
        };
        if (sessionStorage.getItem("remember")) {
            let data = JSON.parse(sessionStorage.getItem("remember"));
            this.remember = true;
            this.loginForm = this.fb.group({
                email: [data.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],
                password: [data.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]]
            });
        }
        else {
            this.loginForm = this.fb.group({
                email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],
                password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]]
            });
        }
    }
    ngOnInit() {
        // if (localStorage.getItem("token")) {
        //   this.router.navigateByUrl("/dashboard");
        // }
    }
    goToforgotPassword() {
        this.showLogin = !this.showLogin;
        this.forgotPwd = !this.forgotPwd;
    }
    get f() { return this.loginForm.controls; }
    login() {
        this.submitted = true;
        if (this.loginForm.valid) {
            if (this.remember) {
                sessionStorage.setItem('remember', JSON.stringify(this.loginForm.value));
            }
            else {
                sessionStorage.clear();
            }
            this.flags.isLogin = true;
            this.api.logIn(this.loginForm.value).subscribe((response) => {
                if (response['statusCode'] === 200) {
                    localStorage.setItem("token", response["data"].authToken);
                    localStorage.setItem("id", response["data"]._id);
                    localStorage.setItem("admin", JSON.stringify(response["data"]));
                    // localStorage.setItem("role", JSON.stringify(response["data"].role));
                    this.toastr.success(response['message']);
                    this.router.navigate(['dashboard']);
                    // if (response["data"].role == "SubAdmin") {
                    //   localStorage.setItem("access", JSON.stringify(response["data"].access));
                    // }
                    // this.router.navigateByUrl("/dashboard");
                }
                else {
                    this.flags.isLogin = false;
                    this.flags.isError = true;
                    this.toastr.error(response["message"]);
                }
            });
        }
        else {
            this.loginForm.markAllAsTouched();
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login/login.component.html")).default
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/authentication/login2/login2.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/login2/login2.component.ts ***!
  \***********************************************************/
/*! exports provided: Login2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login2Component", function() { return Login2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/api.service */ "./src/app/shared/services/api.service.ts");
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





let Login2Component = class Login2Component {
    constructor(fb, api, router, toastr) {
        this.fb = fb;
        this.api = api;
        this.router = router;
        this.toastr = toastr;
        this.submitted = false;
        this.showLogin = true;
        this.forgotPwd = false;
        this.remember = false;
        this.errorMessage = "Error";
        this.flags = {
            isLogin: false,
            isError: false,
        };
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]]
        });
        this.forgotForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)]],
        });
    }
    ngOnInit() {
        if (localStorage.getItem('remember')) {
            this.remember = true;
            let formData = JSON.parse(localStorage.getItem('remember'));
            this.loginForm.patchValue({
                email: formData.email,
                password: formData.password,
            });
        }
    }
    goToforgotPassword() {
        this.showLogin = !this.showLogin;
        this.forgotPwd = !this.forgotPwd;
    }
    get f() { return this.loginForm.controls; }
    login() {
        this.submitted = true;
        if (this.loginForm.valid) {
            this.flags.isLogin = true;
            this.api.logIn(this.loginForm.value).subscribe((response) => {
                if (response['statusCode'] === 200) {
                    if (this.remember) {
                        localStorage.setItem('remember', JSON.stringify(this.loginForm.value));
                    }
                    else {
                        localStorage.clear();
                    }
                    sessionStorage.setItem("token", response["data"].accessToken);
                    sessionStorage.setItem("id", response["data"]._id);
                    sessionStorage.setItem("admin", JSON.stringify(response["data"]));
                    this.toastr.success("Admin login successfully", '', {
                        timeOut: 700,
                    });
                    this.router.navigate(['dashboard']);
                }
                else {
                    this.flags.isLogin = false;
                    this.flags.isError = true;
                    this.toastr.error(response["message"], '', {
                        timeOut: 700,
                    });
                }
            });
        }
        else {
            this.loginForm.markAllAsTouched();
        }
    }
    ForgotPassword() {
        let obj = {
            "email": this.forgotForm.get('email').value
        };
        let url = `forgotPassword`;
        if (this.forgotForm.valid) {
            this.api.postApi(url, obj).subscribe((res) => {
                if (res.success == true) {
                    this.toastr.success(res.message);
                    this.goToforgotPassword();
                }
                else {
                    this.toastr.error(res.message, '', {
                        timeOut: 500,
                    });
                }
            });
        }
    }
};
Login2Component.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
Login2Component = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __importDefault(__webpack_require__(/*! raw-loader!./login2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login2/login2.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./login2.scss */ "./src/app/authentication/login2/login2.scss")).default]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
], Login2Component);



/***/ }),

/***/ "./src/app/authentication/login2/login2.scss":
/*!***************************************************!*\
  !*** ./src/app/authentication/login2/login2.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo img {\n  width: 90px;\n}\n\n.shw_pass {\n  position: relative;\n  background: #f8f9fa;\n  width: 8%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.shw_pass i {\n  color: #4f5467;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vbG9naW4yL2xvZ2luMi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsV0FBVTtBQUFsQjs7QUFJQTtFQUNJLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFEbkI7O0FBTkE7RUFTUSxjQUFjO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRpb24vbG9naW4yL2xvZ2luMi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ297XG4gICAgaW1ne1xuICAgICAgICB3aWR0aDo5MHB4O1xuICAgIH1cbn1cblxuLnNod19wYXNzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICB3aWR0aDogOCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBpIHtcbiAgICAgICAgY29sb3I6ICM0ZjU0Njc7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/authentication/signup/signup.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.ts ***!
  \***********************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
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

let SignupComponent = class SignupComponent {
    constructor() { }
};
SignupComponent.ctorParameters = () => [];
SignupComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-signup',
        template: __importDefault(__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/signup/signup.component.html")).default
    }),
    __metadata("design:paramtypes", [])
], SignupComponent);



/***/ }),

/***/ "./src/app/authentication/signup2/signup2.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/authentication/signup2/signup2.component.ts ***!
  \*************************************************************/
/*! exports provided: Signup2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup2Component", function() { return Signup2Component; });
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

let Signup2Component = class Signup2Component {
    constructor() { }
};
Signup2Component.ctorParameters = () => [];
Signup2Component = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-signup',
        template: __importDefault(__webpack_require__(/*! raw-loader!./signup2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/signup2/signup2.component.html")).default
    }),
    __metadata("design:paramtypes", [])
], Signup2Component);



/***/ }),

/***/ "./src/app/shared/services/custom-validation.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/custom-validation.service.ts ***!
  \**************************************************************/
/*! exports provided: CustomValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidationService", function() { return CustomValidationService; });
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

let CustomValidationService = class CustomValidationService {
    constructor() { }
    passwordMatchValidator(password, confirmPassword) {
        return (formGroup) => {
            const passwordControl = formGroup.controls[password];
            const confirmPasswordControl = formGroup.controls[confirmPassword];
            if (!passwordControl || !confirmPasswordControl) {
                return null;
            }
            if (confirmPasswordControl.errors &&
                !confirmPasswordControl.errors.passwordMismatch) {
                return null;
            }
            if (passwordControl.value !== confirmPasswordControl.value) {
                confirmPasswordControl.setErrors({ passwordMismatch: true });
                return true;
            }
            else {
                confirmPasswordControl.setErrors(null);
                return null;
            }
        };
    }
};
CustomValidationService.ctorParameters = () => [];
CustomValidationService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], CustomValidationService);



/***/ })

}]);
//# sourceMappingURL=authentication-authentication-module-es2015.js.map