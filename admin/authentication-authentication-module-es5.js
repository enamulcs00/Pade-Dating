(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/404/not-found.component.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/404/not-found.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAuthentication404NotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"error-box\">\r\n    <div class=\"error-body text-center\">\r\n        <h1 class=\"error-title text-danger\">404</h1>\r\n        <h3 class=\"text-uppercase error-subtitle\">PAGE NOT FOUND !</h3>\r\n        <p class=\"text-muted m-t-30 m-b-30\">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>\r\n        <a href=\"#/dashboard/classic\" class=\"btn btn-danger btn-rounded waves-effect waves-light m-b-40\">Back to home</a> \r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/lock/changepassword.component.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/lock/changepassword.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAuthenticationLockChangepasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<style>\r\n    .shw_pass {\r\n    position: relative;\r\n    background: #f8f9fa;\r\n    width: 8%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: pointer;\r\n    \r\n}\r\n</style>\r\n<div class=\"auth-wrapper d-flex no-block justify-content-center align-items-center\" style=\"background:url(assets/images/big/auth-bg.jpg) no-repeat; background-size: cover\">\r\n    <div class=\"auth-box\">\r\n        <div>\r\n            <div class=\"logo\">\r\n                <span class=\"db\"><img alt=\"thumbnail\" class=\"\" width=\"100\" src=\"assets/images/logo-text.svg\"></span>\r\n            </div>\r\n            <!-- Form -->\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <form [formGroup]=\"changepassForm\" class=\"form-horizontal m-t-20\" >\r\n                        <div class=\"form-group row inner-addon right-addon\">\r\n                            <div class=\"col-12 input-group\">\r\n                                <input class=\"form-control form-control-lg\" formControlName=\"oldPassword\" [type]=\"showPassword ? 'text' : 'password'\" required=\"\" placeholder=\"Old Password\">\r\n                                <div class=\"shw_pass\">\r\n                                    <i alt=\"show\" class=\"fa fa-eye\" \r\n                                    (click)=\"showPassword = !showPassword\"\r\n                                    [class.hide]=\"showPassword\"></i>\r\n                                    <i alt=\"hide\" class=\"fa fa-eye-slash\" \r\n                                    (click)=\"showPassword = !showPassword\"\r\n                                    [class.hide]=\"!showPassword\"></i>\r\n                                  </div>\r\n                            </div>\r\n                            <div class=\"col-12 mt-1\">\r\n                                <mat-error class=\"text-danger px-1 d-block\" *ngIf=\"changepassForm.get('oldPassword').hasError('required') && changepassForm.controls['oldPassword'].touched\">\r\n                                    *Old Password is required.\r\n                                </mat-error>\r\n                                <mat-error class=\"text-danger px-1 d-block\" *ngIf=\"changepassForm.get('oldPassword').hasError('minlength') &&\r\n                                    !changepassForm.get('oldPassword').hasError('required')\">\r\n                                     *Min 8 characters.\r\n                                </mat-error>\r\n                                <mat-error class=\"text-danger px-1 d-block\" *ngIf=\"changepassForm.get('oldPassword').hasError('maxlength') &&\r\n                                    !changepassForm.get('oldPassword').hasError('required')\">\r\n                                    *Maximum 16 characters long.\r\n                                </mat-error>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row inner-addon right-addon\">\r\n                            <div class=\"col-12 input-group\">\r\n                                <input class=\"form-control form-control-lg\" formControlName=\"newPassword\" [type]=\"showNewPassword ? 'text' : 'password'\" required=\"\" placeholder=\"New Password\">\r\n                                <div class=\"shw_pass\">\r\n                                    <i alt=\"show\" class=\"fa fa-eye\" \r\n                                    (click)=\"showNewPassword = !showNewPassword\"\r\n                                    [class.hide]=\"showNewPassword\"></i>\r\n                                    <i alt=\"hide\" class=\"fa fa-eye-slash\" \r\n                                    (click)=\"showNewPassword = !showNewPassword\"\r\n                                    [class.hide]=\"!showNewPassword\"></i>\r\n                                  </div>\r\n                            </div>\r\n                            <div class=\"col-12 mt-1\">\r\n                                <mat-error class=\"text-danger  px-1 d-block\" *ngIf=\"changepassForm.get('newPassword').hasError('required') && changepassForm.controls['newPassword'].touched\">\r\n                                    *New Password is required.\r\n                                </mat-error>\r\n                                <mat-error class=\"text-danger px-1 d-block\" *ngIf=\"changepassForm.get('newPassword').hasError('minlength') &&\r\n                                    !changepassForm.get('newPassword').hasError('required')\">\r\n                                     *Min 8 characters.\r\n                                </mat-error>\r\n                                <mat-error class=\"text-danger px-1 d-block\" *ngIf=\"changepassForm.get('newPassword').hasError('maxlength') &&\r\n                                    !changepassForm.get('newPassword').hasError('required')\">\r\n                                    *Maximum 16 characters long.\r\n                                </mat-error>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row inner-addon right-addon\">\r\n                            <div class=\"col-12 input-group\">\r\n                                <input class=\"form-control form-control-lg\" [type]=\"showCnfPassword ? 'text' : 'password'\" formControlName=\"retypepassword\" required=\"\" placeholder=\"Retype Password\">\r\n                                <div class=\"shw_pass\">\r\n                                    <i alt=\"show\" class=\"fa fa-eye\" \r\n                                    (click)=\"showCnfPassword = !showCnfPassword\"\r\n                                    [class.hide]=\"showCnfPassword\"></i>\r\n                                    <i alt=\"hide\" class=\"fa fa-eye-slash\" \r\n                                    (click)=\"showCnfPassword = !showCnfPassword\"\r\n                                    [class.hide]=\"!showCnfPassword\"></i>\r\n                                  </div>\r\n                            </div>\r\n                            <div class=\"col-12 mt-1\">\r\n                                <mat-error class=\"text-danger px-1 d-block\" *ngIf=\"changepassForm.get('retypepassword').hasError('required') && changepassForm.controls['retypepassword'].touched\">\r\n                                    *Retype Password is required.\r\n                                </mat-error>\r\n                                <mat-error class=\"text-danger px-1 d-block\" *ngIf=\"changepassForm.get('retypepassword').hasError('minlength') &&\r\n                                    !changepassForm.get('retypepassword').hasError('required')\">\r\n                                     *Min 8 characters.\r\n                                </mat-error>\r\n                                <mat-error class=\"text-danger px-1 d-block\" *ngIf=\"changepassForm.get('retypepassword').hasError('maxlength') &&\r\n                                    !changepassForm.get('retypepassword').hasError('required')\">\r\n                                    *Maximum 16 characters long.\r\n                                </mat-error>\r\n                                <mat-error class=\"text-danger px-1 d-block\" *ngIf=\"changepassForm.get('retypepassword').hasError('passwordMismatch') &&\r\n                                    !changepassForm.get('retypepassword').hasError('required')\">\r\n                                    *Password mismatched\r\n                                </mat-error>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group text-center\">\r\n                            <div class=\"col-xs-12 p-b-20\">\r\n                                <button class=\"btn btn-block btn-lg bg-white text-dark\"[disabled]=\"!changepassForm.valid\" (click)=\"changepass()\" type=\"submit\">Submit</button>\r\n                            </div>\r\n                            <div class=\"col-xs-12 text-center\">\r\n                                <a class=\"btn btn-block btn-lg btn-danger\" (click)=\"history.back()\">Cancel</a>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login/login.component.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login/login.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAuthenticationLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"auth-wrapper d-flex no-block justify-content-center align-items-center\" style=\"background:url(assets/images/big/auth-bg.jpg) no-repeat center center;\">\r\n    <div class=\"auth-box\">\r\n        <div *ngIf=\"showLogin\">\r\n            <div class=\"logo\">\r\n                <span class=\"db\"><img src=\"assets/images/logo-icon.svg\" alt=\"logo\" /></span>\r\n                <h5 class=\"font-medium m-b-20\">Sign In to Admin</h5>\r\n            </div>\r\n            <!-- Form -->\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <form class=\"form-horizontal m-t-20\" [formGroup]=\"loginForm\" (submit)=\"login()\">\r\n                        <div class=\"input-group mb-3\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"ti-user\"></i></span>\r\n                            </div>\r\n                            <input type=\"email\" class=\"form-control form-control-lg\" formControlName=\"email\" placeholder=\"email\" aria-label=\"email\" aria-describedby=\"basic-addon1\">\r\n                            <!-- <div *ngIf=\"loginForm.controls['email'].hasError('required') && loginForm.controls['email'].touched\" class=\"invalid-feedback\"> -->\r\n                                <div *ngIf=\"loginForm.controls['email'].hasError('required') && loginForm.controls['email'].touched\">\r\n                                    Please enter the email address\r\n                                </div>\r\n\r\n                                <div *ngIf=\"loginForm.controls['email'].hasError('pattern') && loginForm.controls['email'].touched\">\r\n                                    Email must be a valid e-mail address\r\n                                </div>\r\n                            <!-- </div> -->\r\n                        </div>\r\n                        <div class=\"input-group mb-3\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fa fa-lock\"></i></span>\r\n                            </div>\r\n                            <input type=\"password\" class=\"form-control form-control-lg\" formControlName=\"password\" placeholder=\"Password\" aria-label=\"Password\" aria-describedby=\"basic-addon1\">\r\n                            <div *ngIf=\"loginForm.controls['password'].hasError('required') && loginForm.controls['password'].touched\">\r\n                                Please enter the password\r\n                            </div>\r\n\r\n                            <div *ngIf=\"loginForm.controls['password'].hasError('minLength') && loginForm.controls['password'].touched\">\r\n                                Password must be atleast 8 characters\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"custom-control custom-checkbox\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" [(ngModel)]=\"remember\" [ngModelOptions]=\"{standalone: true}\" id=\"customCheck1\">\r\n                                    <label class=\"custom-control-label text-white\" for=\"customCheck1\">Remember me</label>\r\n                                    <a (click)=\"goToforgotPassword()\" href=\"javascript:void(0)\" id=\"to-recover\" class=\"text-white float-right\"><i class=\"fa fa-lock m-r-5\"></i> Forgot password?</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group text-center\">\r\n                            <div class=\"col-xs-12 p-b-20\">\r\n                                <button class=\"btn btn-block btn-lg btn-info\" type=\"submit\">Log In</button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-12 col-sm-12 col-md-12 m-t-10 text-center\">\r\n                                <div class=\"social\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-facebook m-r-5\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Login with Facebook\"> <i aria-hidden=\"true\" class=\"fab fa-facebook\"></i> </a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-googleplus\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Login with Google\"> <i aria-hidden=\"true\" class=\"fab fa-google-plus\"></i> </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group m-b-0 m-t-10\">\r\n                            <div class=\"col-sm-12 text-center\">\r\n                                Don't have an account? <a href=\"#/signup\" class=\"text-info m-l-5\"><b>Sign Up</b></a>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"forgotPwd\">\r\n            <div class=\"logo\">\r\n                <span class=\"db\"><img src=\"assets/images/logo-icon.svg\" alt=\"logo\" /></span>\r\n                <h5 class=\"font-medium m-b-20\">Recover Password</h5>\r\n                <span>Enter your Email and instructions will be sent to you!</span>\r\n            </div>\r\n            <div class=\"row m-t-20\">\r\n                <form class=\"col-12\">\r\n                    <div class=\"form-group row\">\r\n                        <div class=\"col-12\">\r\n                            <input class=\"form-control form-control-lg\" type=\"email\" required=\"\" placeholder=\"Username\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row m-t-20\">\r\n                        <div class=\"col-12\">\r\n                            <button class=\"btn btn-block btn-lg btn-danger\" type=\"submit\" name=\"action\">Reset</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login2/login2.component.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login2/login2.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAuthenticationLogin2Login2ComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"auth-wrapper d-flex no-block justify-content-center align-items-center\" style=\"background:url(assets/images/background/login-register.jpg) no-repeat center center;background-size: cover;\">\r\n    <div class=\"auth-box on-sidebar\">\r\n        <div *ngIf=\"showLogin\">\r\n            <div class=\"logo\">\r\n                <span class=\"db\"><img src=\"assets/images/logo-text.svg\" alt=\"logo\"  /></span>\r\n                <!-- <h5 class=\"font-medium m-b-20\">Sign In to Admin</h5> -->\r\n            </div>\r\n            <!-- Form -->\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <form class=\"form-horizontal m-t-20\" [formGroup]=\"loginForm\" (submit)=\"login()\">\r\n                        <div class=\"input-group mb-3\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"ti-user\"></i></span>\r\n                            </div>\r\n                            <input type=\"email\" class=\"form-control form-control-lg\" formControlName=\"email\" placeholder=\"Email\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n                            <mat-error class=\"form-text text-danger w-100\" *ngIf=\"loginForm.controls['email'].hasError('required') && loginForm.controls['email'].touched\">\r\n                                Please enter the email address\r\n                            </mat-error>\r\n\r\n                            <mat-error class=\"form-text text-danger w-100\" *ngIf=\"loginForm.controls['email'].hasError('pattern') && loginForm.controls['email'].touched\">\r\n                                Email must be a valid e-mail address\r\n                            </mat-error>\r\n                        </div>\r\n                        <div class=\"input-group form-group mb-3 inner-addon right-addon\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fa fa-lock\"></i></span>\r\n                            </div>\r\n                                <input [type]=\"showPassword ? 'text' : 'password'\" class=\"form-control form-control-lg\" formControlName=\"password\" placeholder=\"Password\" aria-label=\"Password\" aria-describedby=\"basic-addon1\" required>\r\n                                <div class=\"shw_pass\">\r\n                                    <i alt=\"show\" class=\"fa fa-eye\" \r\n                                    (click)=\"showPassword = !showPassword\"\r\n                                    [class.hide]=\"showPassword\"></i>\r\n                                    <i alt=\"hide\" class=\"fa fa-eye-slash\" \r\n                                    (click)=\"showPassword = !showPassword\"\r\n                                    [class.hide]=\"!showPassword\"></i>\r\n                                  </div>\r\n                            <mat-error class=\"form-text text-danger w-100\" *ngIf=\"loginForm.controls['password'].hasError('required') && loginForm.controls['password'].touched\">\r\n                                Please enter the password\r\n                            </mat-error>\r\n\r\n                            <mat-error class=\"form-text text-danger w-100\" *ngIf=\"loginForm.controls['password'].hasError('minlength')\">\r\n                                Password must be atleast 8 characters\r\n                            </mat-error>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"custom-control custom-checkbox\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" [(ngModel)]=\"remember\" [ngModelOptions]=\"{standalone: true}\" id=\"customCheck1\">\r\n                                    <label class=\"custom-control-label text-white\" for=\"customCheck1\">Remember me</label>\r\n                                    <a (click)=\"goToforgotPassword()\" href=\"javascript:void(0)\" id=\"to-recover\" class=\"text-white float-right\"><i class=\"fa fa-lock m-r-5\"></i> Forgot password</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group text-center\">\r\n                            <div class=\"col-xs-12 p-b-20\">\r\n                                <button class=\"btn btn-block btn-lg btn-white\" type=\"submit\">Log In</button>\r\n                            </div>\r\n                        </div>\r\n                        <!-- <div class=\"row\">\r\n                            <div class=\"col-xs-12 col-sm-12 col-md-12 m-t-10 text-center\">\r\n                                <div class=\"social\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn  btn-facebook m-r-5\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Login with Facebook\"> <i aria-hidden=\"true\" class=\"fab  fa-facebook\"></i> </a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-googleplus\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Login with Google\"> <i aria-hidden=\"true\" class=\"fab  fa-google-plus\"></i> </a>\r\n                                </div>\r\n                            </div>\r\n                        </div> -->\r\n                        <!-- <div class=\"form-group m-b-0 m-t-10\">\r\n                            <div class=\"col-sm-12 text-center\">\r\n                                Don't have an account? <a href=\"#/signup2\" class=\"text-info m-l-5\"><b>Sign Up</b></a>\r\n                            </div>\r\n                        </div> -->\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"forgotPwd\">\r\n            <div class=\"logo\">\r\n                <span class=\"db\"><img src=\"assets/images/logo-text.svg\" alt=\"logo\" /></span>\r\n                <h5 class=\"font-medium my-3\">Recover Password</h5>\r\n                <span>Enter your Email and instructions will be sent to you!</span>\r\n            </div>\r\n            <div class=\"row m-t-20\">\r\n                <!-- Form -->\r\n                <form class=\"col-12\" [formGroup]=\"forgotForm\">\r\n                    <!-- email -->\r\n                    <div class=\"form-group row\">\r\n                        <div class=\"col-12\">\r\n                            <input class=\"form-control form-control-lg\" type=\"email\" required=\"\" placeholder=\"Email\" formControlName=\"email\">\r\n                        </div>\r\n                        <mat-error class=\"form-text text-danger w-100\" *ngIf=\"forgotForm.controls['email'].hasError('required') && forgotForm.controls['email'].touched\">\r\n                            Please enter the email address\r\n                        </mat-error>\r\n\r\n                        <mat-error class=\"form-text text-danger w-100\" *ngIf=\"forgotForm.controls['email'].hasError('pattern') && forgotForm.controls['email'].touched\">\r\n                            Email must be a valid e-mail address\r\n                        </mat-error>\r\n                    </div>\r\n                    <!-- pwd -->\r\n                    <div class=\"row m-t-20\">\r\n                        <div class=\"col-12\">\r\n                            <button class=\"btn btn-block btn-lg btn-white\" type=\"submit\" (click)=\"ForgotPassword()\">Reset</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row m-t-20\">\r\n                        <div class=\"col-12\">\r\n                            <button class=\"btn btn-block btn-lg btn-danger\" (click)=\"goToforgotPassword()\">Cancel</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/signup/signup.component.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/signup/signup.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAuthenticationSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"auth-wrapper d-flex no-block justify-content-center align-items-center\" style=\"background:url(assets/images/big/auth-bg.jpg) no-repeat center center;\">\r\n    <div class=\"auth-box\">\r\n        <div>\r\n            <div class=\"logo\">\r\n                <!-- <span class=\"db\"><img src=\"assets/images/logo-icon.svg\" alt=\"logo\" /></span> -->\r\n                <h5 class=\"font-medium m-b-20\">Sign Up to Admin</h5>\r\n            </div>\r\n            <!-- Form -->\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <form class=\"form-horizontal m-t-20\" action=\"index.html\">\r\n                        <div class=\"form-group row \">\r\n                            <div class=\"col-12 \">\r\n                                <input class=\"form-control form-control-lg\" type=\"text\" required=\" \" placeholder=\"Name\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-12 \">\r\n                                <input class=\"form-control form-control-lg\" type=\"text\" required=\" \" placeholder=\"Email\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-12 \">\r\n                                <input class=\"form-control form-control-lg\" type=\"password\" required=\" \" placeholder=\"Password\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-12 \">\r\n                                <input class=\"form-control form-control-lg\" type=\"password\" required=\" \" placeholder=\"Confirm Password\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-md-12 \">\r\n                                <div class=\"custom-control custom-checkbox\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\r\n                                    <label class=\"custom-control-label\" for=\"customCheck1\">I agree to all <a href=\"javascript:void(0)\">Terms</a></label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group text-center \">\r\n                            <div class=\"col-xs-12 p-b-20 \">\r\n                                <button class=\"btn btn-block btn-lg btn-info \" type=\"submit \">SIGN UP</button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group m-b-0 m-t-10 \">\r\n                            <div class=\"col-sm-12 text-center \">\r\n                                Already have an account? <a href=\"#/login \" class=\"text-info m-l-5 \"><b>Sign In</b></a>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/signup2/signup2.component.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/signup2/signup2.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAuthenticationSignup2Signup2ComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"auth-wrapper d-flex no-block justify-content-center align-items-center\" style=\"background:url(assets/images/background/login-register.jpg) no-repeat center center;\">\r\n    <div class=\"auth-box on-sidebar\">\r\n        <div>\r\n            <div class=\"logo\">\r\n                <span class=\"db\"><img src=\"assets/images/logo-icon.svg\" alt=\"logo\" /></span>\r\n                <h5 class=\"font-medium m-b-20\">Sign Up to Admin</h5>\r\n            </div>\r\n            <!-- Form -->\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <form class=\"form-horizontal m-t-20\" action=\"index.html\">\r\n                        <div class=\"form-group row \">\r\n                            <div class=\"col-12 \">\r\n                                <input class=\"form-control form-control-lg\" type=\"text\" required=\" \" placeholder=\"Name\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-12 \">\r\n                                <input class=\"form-control form-control-lg\" type=\"text\" required=\" \" placeholder=\"Email\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-12 \">\r\n                                <input class=\"form-control form-control-lg\" type=\"password\" required=\" \" placeholder=\"Password\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-12 \">\r\n                                <input class=\"form-control form-control-lg\" type=\"password\" required=\" \" placeholder=\"Confirm Password\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-md-12 \">\r\n                                <div class=\"custom-control custom-checkbox\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\r\n                                    <label class=\"custom-control-label\" for=\"customCheck1\">I agree to all <a href=\"javascript:void(0)\">Terms</a></label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group text-center \">\r\n                            <div class=\"col-xs-12 p-b-20 \">\r\n                                <button class=\"btn btn-block btn-lg btn-info \" type=\"submit \">SIGN UP</button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group m-b-0 m-t-10 \">\r\n                            <div class=\"col-sm-12 text-center \">\r\n                                Already have an account? <a href=\"#/login2 \" class=\"text-info m-l-5 \"><b>Sign In</b></a>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "./src/app/authentication/404/not-found.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/authentication/404/not-found.component.ts ***!
      \***********************************************************/

    /*! exports provided: NotfoundComponent */

    /***/
    function srcAppAuthentication404NotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function () {
        return NotfoundComponent;
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

      var NotfoundComponent = /*#__PURE__*/function () {
        function NotfoundComponent() {
          _classCallCheck(this, NotfoundComponent);
        }

        _createClass(NotfoundComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }]);

        return NotfoundComponent;
      }();

      NotfoundComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-not-found',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./not-found.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/404/not-found.component.html"))["default"]
      })], NotfoundComponent);
      /***/
    },

    /***/
    "./src/app/authentication/authentication.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/authentication/authentication.module.ts ***!
      \*********************************************************/

    /*! exports provided: AuthenticationModule */

    /***/
    function srcAppAuthenticationAuthenticationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function () {
        return AuthenticationModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _404_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./404/not-found.component */
      "./src/app/authentication/404/not-found.component.ts");
      /* harmony import */


      var _lock_changepassword_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./lock/changepassword.component */
      "./src/app/authentication/lock/changepassword.component.ts");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./login/login.component */
      "./src/app/authentication/login/login.component.ts");
      /* harmony import */


      var _login2_login2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./login2/login2.component */
      "./src/app/authentication/login2/login2.component.ts");
      /* harmony import */


      var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./signup/signup.component */
      "./src/app/authentication/signup/signup.component.ts");
      /* harmony import */


      var _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./signup2/signup2.component */
      "./src/app/authentication/signup2/signup2.component.ts");
      /* harmony import */


      var _authentication_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./authentication.routing */
      "./src/app/authentication/authentication.routing.ts");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var AuthenticationModule = function AuthenticationModule() {
        _classCallCheck(this, AuthenticationModule);
      };

      AuthenticationModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_authentication_routing__WEBPACK_IMPORTED_MODULE_11__["AuthenticationRoutes"]), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"]],
        declarations: [_404_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotfoundComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"], _lock_changepassword_component__WEBPACK_IMPORTED_MODULE_6__["changepasswordComponent"], _login2_login2_component__WEBPACK_IMPORTED_MODULE_8__["Login2Component"], _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_10__["Signup2Component"]]
      })], AuthenticationModule);
      /***/
    },

    /***/
    "./src/app/authentication/authentication.routing.ts":
    /*!**********************************************************!*\
      !*** ./src/app/authentication/authentication.routing.ts ***!
      \**********************************************************/

    /*! exports provided: AuthenticationRoutes */

    /***/
    function srcAppAuthenticationAuthenticationRoutingTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationRoutes", function () {
        return AuthenticationRoutes;
      });
      /* harmony import */


      var _404_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./404/not-found.component */
      "./src/app/authentication/404/not-found.component.ts");
      /* harmony import */


      var _lock_changepassword_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lock/changepassword.component */
      "./src/app/authentication/lock/changepassword.component.ts");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login/login.component */
      "./src/app/authentication/login/login.component.ts");
      /* harmony import */


      var _login2_login2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login2/login2.component */
      "./src/app/authentication/login2/login2.component.ts");
      /* harmony import */


      var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./signup/signup.component */
      "./src/app/authentication/signup/signup.component.ts");
      /* harmony import */


      var _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./signup2/signup2.component */
      "./src/app/authentication/signup2/signup2.component.ts");

      var AuthenticationRoutes = [{
        path: '',
        children: [{
          path: '404',
          component: _404_not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotfoundComponent"]
        }, {
          path: 'changepassword',
          component: _lock_changepassword_component__WEBPACK_IMPORTED_MODULE_1__["changepasswordComponent"]
        }, {
          path: 'login2',
          component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
        }, {
          path: 'login',
          component: _login2_login2_component__WEBPACK_IMPORTED_MODULE_3__["Login2Component"]
        }, {
          path: 'signup',
          component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
        }, {
          path: 'signup2',
          component: _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_5__["Signup2Component"]
        }]
      }];
      /***/
    },

    /***/
    "./src/app/authentication/lock/changepassword.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/authentication/lock/changepassword.component.ts ***!
      \*****************************************************************/

    /*! exports provided: changepasswordComponent */

    /***/
    function srcAppAuthenticationLockChangepasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "changepasswordComponent", function () {
        return changepasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      "./src/app/shared/services/api.service.ts");
      /* harmony import */


      var src_app_shared_services_custom_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/custom-validation.service */
      "./src/app/shared/services/custom-validation.service.ts");

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

      var changepasswordComponent = /*#__PURE__*/function () {
        function changepasswordComponent(fb, apiservice, router, toaster, customvalidator) {
          _classCallCheck(this, changepasswordComponent);

          this.fb = fb;
          this.apiservice = apiservice;
          this.router = router;
          this.toaster = toaster;
          this.customvalidator = customvalidator;
          this.history = window.history;
        }

        _createClass(changepasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.changepassForm = this.fb.group({
              "oldPassword": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)]],
              "newPassword": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)]],
              "retypepassword": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)]]
            }, {
              validator: this.customvalidator.passwordMatchValidator("newPassword", "retypepassword")
            });
          }
        }, {
          key: "changepass",
          value: function changepass() {
            var _this = this;

            var url = "changePassword";
            var datapass = this.changepassForm.value;
            delete datapass.retypepassword;
            console.log(datapass);
            this.apiservice.postApi(url, datapass).subscribe(function (res) {
              console.log(res);

              if (res.success == true) {
                _this.toaster.success(res.message, 'Change Password');

                _this.router.navigate(['dashboard']);
              }
            });
          }
        }]);

        return changepasswordComponent;
      }();

      changepasswordComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }, {
          type: src_app_shared_services_custom_validation_service__WEBPACK_IMPORTED_MODULE_5__["CustomValidationService"]
        }];
      };

      changepasswordComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-changepassword',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./changepassword.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/lock/changepassword.component.html"))["default"]
      }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], src_app_shared_services_custom_validation_service__WEBPACK_IMPORTED_MODULE_5__["CustomValidationService"]])], changepasswordComponent);
      /***/
    },

    /***/
    "./src/app/authentication/login/login.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/authentication/login/login.component.ts ***!
      \*********************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function srcAppAuthenticationLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/services/api.service */
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

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(fb, api, router, toastr) {
          _classCallCheck(this, LoginComponent);

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
            isError: false
          };

          if (sessionStorage.getItem("remember")) {
            var data = JSON.parse(sessionStorage.getItem("remember"));
            this.remember = true;
            this.loginForm = this.fb.group({
              email: [data.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],
              password: [data.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]]
            });
          } else {
            this.loginForm = this.fb.group({
              email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],
              password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]]
            });
          }
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// if (localStorage.getItem("token")) {
            //   this.router.navigateByUrl("/dashboard");
            // }
          }
        }, {
          key: "goToforgotPassword",
          value: function goToforgotPassword() {
            this.showLogin = !this.showLogin;
            this.forgotPwd = !this.forgotPwd;
          }
        }, {
          key: "login",
          value: function login() {
            var _this2 = this;

            this.submitted = true;

            if (this.loginForm.valid) {
              if (this.remember) {
                sessionStorage.setItem('remember', JSON.stringify(this.loginForm.value));
              } else {
                sessionStorage.clear();
              }

              this.flags.isLogin = true;
              this.api.logIn(this.loginForm.value).subscribe(function (response) {
                if (response['statusCode'] === 200) {
                  localStorage.setItem("token", response["data"].authToken);
                  localStorage.setItem("id", response["data"]._id);
                  localStorage.setItem("admin", JSON.stringify(response["data"])); // localStorage.setItem("role", JSON.stringify(response["data"].role));

                  _this2.toastr.success(response['message']);

                  _this2.router.navigate(['dashboard']); // if (response["data"].role == "SubAdmin") {
                  //   localStorage.setItem("access", JSON.stringify(response["data"].access));
                  // }
                  // this.router.navigateByUrl("/dashboard");

                } else {
                  _this2.flags.isLogin = false;
                  _this2.flags.isError = true;

                  _this2.toastr.error(response["message"]);
                }
              });
            } else {
              this.loginForm.markAllAsTouched();
            }
          }
        }, {
          key: "f",
          get: function get() {
            return this.loginForm.controls;
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }];
      };

      LoginComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./login.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login/login.component.html"))["default"]
      }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])], LoginComponent);
      /***/
    },

    /***/
    "./src/app/authentication/login2/login2.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/authentication/login2/login2.component.ts ***!
      \***********************************************************/

    /*! exports provided: Login2Component */

    /***/
    function srcAppAuthenticationLogin2Login2ComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Login2Component", function () {
        return Login2Component;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/services/api.service */
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

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var Login2Component = /*#__PURE__*/function () {
        function Login2Component(fb, api, router, toastr) {
          _classCallCheck(this, Login2Component);

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
            isError: false
          };
          this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]]
          });
          this.forgotForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)]]
          });
        }

        _createClass(Login2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (localStorage.getItem('remember')) {
              this.remember = true;
              var formData = JSON.parse(localStorage.getItem('remember'));
              this.loginForm.patchValue({
                email: formData.email,
                password: formData.password
              });
            }
          }
        }, {
          key: "goToforgotPassword",
          value: function goToforgotPassword() {
            this.showLogin = !this.showLogin;
            this.forgotPwd = !this.forgotPwd;
          }
        }, {
          key: "login",
          value: function login() {
            var _this3 = this;

            this.submitted = true;

            if (this.loginForm.valid) {
              this.flags.isLogin = true;
              this.api.logIn(this.loginForm.value).subscribe(function (response) {
                if (response['statusCode'] === 200) {
                  if (_this3.remember) {
                    localStorage.setItem('remember', JSON.stringify(_this3.loginForm.value));
                  } else {
                    localStorage.clear();
                  }

                  sessionStorage.setItem("token", response["data"].accessToken);
                  sessionStorage.setItem("id", response["data"]._id);
                  sessionStorage.setItem("admin", JSON.stringify(response["data"]));

                  _this3.toastr.success("Admin login successfully", '', {
                    timeOut: 700
                  });

                  _this3.router.navigate(['dashboard']);
                } else {
                  _this3.flags.isLogin = false;
                  _this3.flags.isError = true;

                  _this3.toastr.error(response["message"], '', {
                    timeOut: 700
                  });
                }
              });
            } else {
              this.loginForm.markAllAsTouched();
            }
          }
        }, {
          key: "ForgotPassword",
          value: function ForgotPassword() {
            var _this4 = this;

            var obj = {
              "email": this.forgotForm.get('email').value
            };
            var url = "forgotPassword";

            if (this.forgotForm.valid) {
              this.api.postApi(url, obj).subscribe(function (res) {
                if (res.success == true) {
                  _this4.toastr.success(res.message);

                  _this4.goToforgotPassword();
                } else {
                  _this4.toastr.error(res.message, '', {
                    timeOut: 500
                  });
                }
              });
            }
          }
        }, {
          key: "f",
          get: function get() {
            return this.loginForm.controls;
          }
        }]);

        return Login2Component;
      }();

      Login2Component.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }];
      };

      Login2Component = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./login2.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login2/login2.component.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./login2.scss */
        "./src/app/authentication/login2/login2.scss"))["default"]]
      }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])], Login2Component);
      /***/
    },

    /***/
    "./src/app/authentication/login2/login2.scss":
    /*!***************************************************!*\
      !*** ./src/app/authentication/login2/login2.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAuthenticationLogin2Login2Scss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".logo img {\n  width: 90px;\n}\n\n.shw_pass {\n  position: relative;\n  background: #f8f9fa;\n  width: 8%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.shw_pass i {\n  color: #4f5467;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vbG9naW4yL2xvZ2luMi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsV0FBVTtBQUFsQjs7QUFJQTtFQUNJLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFEbkI7O0FBTkE7RUFTUSxjQUFjO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRpb24vbG9naW4yL2xvZ2luMi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ297XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6OTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLnNod19wYXNzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICB3aWR0aDogOCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaSB7XHJcbiAgICAgICAgY29sb3I6ICM0ZjU0Njc7XHJcbiAgICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/authentication/signup/signup.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/authentication/signup/signup.component.ts ***!
      \***********************************************************/

    /*! exports provided: SignupComponent */

    /***/
    function srcAppAuthenticationSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
        return SignupComponent;
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

      var SignupComponent = function SignupComponent() {
        _classCallCheck(this, SignupComponent);
      };

      SignupComponent.ctorParameters = function () {
        return [];
      };

      SignupComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-signup',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./signup.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/signup/signup.component.html"))["default"]
      }), __metadata("design:paramtypes", [])], SignupComponent);
      /***/
    },

    /***/
    "./src/app/authentication/signup2/signup2.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/authentication/signup2/signup2.component.ts ***!
      \*************************************************************/

    /*! exports provided: Signup2Component */

    /***/
    function srcAppAuthenticationSignup2Signup2ComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Signup2Component", function () {
        return Signup2Component;
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

      var Signup2Component = function Signup2Component() {
        _classCallCheck(this, Signup2Component);
      };

      Signup2Component.ctorParameters = function () {
        return [];
      };

      Signup2Component = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-signup',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./signup2.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/signup2/signup2.component.html"))["default"]
      }), __metadata("design:paramtypes", [])], Signup2Component);
      /***/
    },

    /***/
    "./src/app/shared/services/custom-validation.service.ts":
    /*!**************************************************************!*\
      !*** ./src/app/shared/services/custom-validation.service.ts ***!
      \**************************************************************/

    /*! exports provided: CustomValidationService */

    /***/
    function srcAppSharedServicesCustomValidationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomValidationService", function () {
        return CustomValidationService;
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

      var CustomValidationService = /*#__PURE__*/function () {
        function CustomValidationService() {
          _classCallCheck(this, CustomValidationService);
        }

        _createClass(CustomValidationService, [{
          key: "passwordMatchValidator",
          value: function passwordMatchValidator(password, confirmPassword) {
            return function (formGroup) {
              var passwordControl = formGroup.controls[password];
              var confirmPasswordControl = formGroup.controls[confirmPassword];

              if (!passwordControl || !confirmPasswordControl) {
                return null;
              }

              if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
                return null;
              }

              if (passwordControl.value !== confirmPasswordControl.value) {
                confirmPasswordControl.setErrors({
                  passwordMismatch: true
                });
                return true;
              } else {
                confirmPasswordControl.setErrors(null);
                return null;
              }
            };
          }
        }]);

        return CustomValidationService;
      }();

      CustomValidationService.ctorParameters = function () {
        return [];
      };

      CustomValidationService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [])], CustomValidationService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=authentication-authentication-module-es5.js.map