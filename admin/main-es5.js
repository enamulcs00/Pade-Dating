(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet>\r\n    <app-spinner></app-spinner>\r\n</router-outlet>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/blank/blank.component.html":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/blank/blank.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutsBlankBlankComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- ============================================================== -->\r\n<!-- Only router without any element -->\r\n<!-- ============================================================== -->\r\n<router-outlet></router-outlet>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full/full.component.html":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full/full.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutsFullFullComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- ============================================================== -->\r\n<!-- Main wrapper - style you can find in pages.scss -->\r\n<!-- ============================================================== -->\r\n<div id=\"main-wrapper\" data-layout=\"vertical\" data-sidebartype=\"full\" [ngClass]=\"{'show-sidebar': showMobileMenu}\" [dir]=\"options.dir\" [attr.data-theme]=\"options.theme\" [attr.data-layout]=\"options.layout\" [attr.data-sidebartype]=\"options.sidebartype\"\r\n    [attr.data-sidebar-position]=\"options.sidebarpos\" [attr.data-header-position]=\"options.headerpos\" [attr.data-boxed-layout]=\"options.boxed\">\r\n    <!-- ============================================================== -->\r\n    <!-- Topbar header - style you can find in topbar.scss -->\r\n    <!-- ============================================================== -->\r\n    <header class=\"topbar\" [attr.data-navbarbg]=\"options.navbarbg\">\r\n        <nav class=\"d-flex top-navbar navbar-expand-md\" [ngClass]=\"(options.navbarbg=='skin6')?'navbar-light':'navbar-dark'\">\r\n            <div class=\"navbar-header\" [ngClass]=\"(expandLogo)?'expand-logo':''\" [attr.data-logobg]=\"options.logobg\">\r\n                <!-- This is for the sidebar toggle which is visible on mobile only -->\r\n                <a (click)=\"showMobileMenu = !showMobileMenu\" class=\"nav-toggler waves-effect waves-light d-block d-md-none\" href=\"javascript:void(0)\">\r\n                    <i [ngClass]=\"(showMobileMenu)?'ti-close':'ti-menu'\"></i>\r\n                </a>\r\n                <!-- ============================================================== -->\r\n                <!-- Logo -->\r\n                <!-- ============================================================== -->\r\n                <a class=\"navbar-brand mt-2 pb-2\" routerLink=\"javascript:void()\">\r\n                    <!-- Logo icon -->\r\n                    <b class=\"logo-icon  mr-0\">\r\n                        <!--You can put here icon as well // <i class=\"wi wi-sunset\"></i> //-->\r\n                        <!-- Dark Logo icon -->\r\n                        <!-- <img src=\"assets/images/logo-icon.svg\" alt=\"homepage\" class=\"dark-logo\" /> -->\r\n                        <!-- Light Logo icon -->\r\n                        <img src=\"assets/images/logo-icon.svg\" alt=\"homepage\" class=\"light-logo logo-sidebar img-fluid logo-svg\" />\r\n                    </b>\r\n                    <!--End Logo icon -->\r\n                    <!-- Logo text -->\r\n\r\n                    <span class=\"logo-text\">\r\n                        <!-- dark Logo text -->\r\n                        <!-- <img src=\"assets/images/logo-text.svg\" alt=\"homepage\" class=\"dark-logo\" /> -->\r\n\r\n                        <!-- Light Logo text-->\r\n\r\n                        <img src=\"assets/images/logo-text.svg\" class=\"logo-content ml-2\" alt=\"homepage\" />\r\n                        <!-- <span lass=\"light-logo\">Unicorn Mobility</span> -->\r\n                    </span>\r\n                </a>\r\n                <!-- ============================================================== -->\r\n                <!-- End Logo -->\r\n                <!-- ============================================================== -->\r\n                <!-- ============================================================== -->\r\n                <!-- Toggle which is visible on mobile only -->\r\n                <!-- ============================================================== -->\r\n                <a class=\"topbartoggler d-block d-md-none waves-effect waves-light\" href=\"javascript:void(0)\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\">\r\n                    <i class=\"ti-more\"></i>\r\n                </a>\r\n            </div>\r\n            <!-- ============================================================== -->\r\n            <!-- End Logo -->\r\n            <!-- ============================================================== -->\r\n            <div class=\"navbar-collapse collapse\" id=\"navbarSupportedContent\" [attr.data-navbarbg]=\"options.navbarbg\" [ngbCollapse]=\"!isCollapsed\">\r\n                <app-navigation (toggleSidebar)=\"toggleSidebarType()\" class=\"w-100\"></app-navigation>\r\n            </div>\r\n        </nav>\r\n    </header>\r\n    <!-- ============================================================== -->\r\n    <!-- Left Sidebar - style you can find in sidebar.scss  -->\r\n    <!-- ============================================================== -->\r\n    <aside class=\"left-sidebar sidebar-bg\" [attr.data-sidebarbg]=\"options.sidebarbg\" (mouseover)=\"Logo()\" (mouseout)=\"Logo()\">\r\n        <!-- Sidebar scroll-->\r\n        <div class=\"scroll-sidebar\" [perfectScrollbar]=\"config\">\r\n            <app-sidebar></app-sidebar>\r\n        </div>\r\n        <!-- End Sidebar scroll-->\r\n    </aside>\r\n    <!-- ============================================================== -->\r\n    <!-- End Left Sidebar - style you can find in sidebar.scss  -->\r\n    <!-- ============================================================== -->\r\n    <!-- ============================================================== -->\r\n    <!-- Page wrapper  -->\r\n    <!-- ============================================================== -->\r\n    <div class=\"page-wrapper\">\r\n        <app-breadcrumb></app-breadcrumb>\r\n        <!-- ============================================================== -->\r\n        <!-- Container fluid  -->\r\n        <!-- ============================================================== -->\r\n        <div class=\"container-fluid\">\r\n            <!-- ============================================================== -->\r\n            <!-- Start Page Content -->\r\n            <!-- ============================================================== -->\r\n            <router-outlet></router-outlet>\r\n            <!-- ============================================================== -->\r\n            <!-- End Start Page Content -->\r\n            <!-- ============================================================== -->\r\n        </div>\r\n        <!-- ============================================================== -->\r\n        <!-- End Container fluid  -->\r\n        <!-- ============================================================== -->\r\n        <!-- ============================================================== -->\r\n        <!-- footer -->\r\n        <!-- ============================================================== -->\r\n        <footer class=\"footer text-center\">\r\n            © - 2021 All Rights Reserved by Meetme Ltd\r\n        </footer>\r\n        <!-- ============================================================== -->\r\n        <!-- End footer -->\r\n        <!-- ============================================================== -->\r\n    </div>\r\n    <!-- ============================================================== -->\r\n    <!-- End Page wrapper  -->\r\n    <!-- ============================================================== -->\r\n    <aside class=\"customizer d-none\" [ngClass]=\"{'show-service-panel': showSettings}\">\r\n        <a href=\"javascript:void(0)\" class=\"service-panel-toggle\" (click)=\"showSettings = !showSettings\">\r\n            <i class=\"fa fa-spin fa-cog\"></i>\r\n        </a>\r\n        <div class=\"customizer-body custom-pills\" [perfectScrollbar]=\"config\">\r\n            <ngb-tabset type=\"pills\" [justify]=\"tabStatus\">\r\n                <ngb-tab>\r\n                    <ng-template ngbTabTitle>\r\n                        <i class=\"mdi mdi-wrench font-20\"></i>\r\n                    </ng-template>\r\n                    <ng-template ngbTabContent>\r\n                        <div class=\"p-15 border-bottom\">\r\n                            <!-- Sidebar -->\r\n                            <h5 class=\"font-medium m-b-20 m-t-10\">Layout Settings</h5>\r\n                            <div class=\"custom-control custom-checkbox m-t-10\">\r\n                                <input type=\"checkbox\" class=\"custom-control-input\" name=\"theme-view\" id=\"theme-view\" [attr.checked]=\"(options.theme=='dark') ? 'checked' : null\" (change)=\"options.theme = (options.theme == 'light' ? 'dark' : 'light');\">\r\n                                <label class=\"custom-control-label\" for=\"theme-view\">Dark Theme</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-checkbox m-t-10\">\r\n                                <input type=\"checkbox\" class=\"custom-control-input\" name=\"sidebar-position\" id=\"sidebar-position\" [attr.checked]=\"(options.sidebarpos=='fixed') ? 'checked' : null\" (change)=\"options.sidebarpos = (options.sidebarpos == 'fixed' ? 'absolute' : 'fixed');\">\r\n                                <label class=\"custom-control-label\" for=\"sidebar-position\">Fixed Sidebar</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-checkbox m-t-10\">\r\n                                <input type=\"checkbox\" class=\"custom-control-input\" name=\"header-position\" id=\"header-position\" [attr.checked]=\"(options.headerpos=='fixed') ? 'checked' : null\" (change)=\"options.headerpos = (options.headerpos == 'fixed' ? 'absolute' : 'fixed');\">\r\n                                <label class=\"custom-control-label\" for=\"header-position\">Fixed Header</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-checkbox m-t-10\">\r\n                                <input type=\"checkbox\" class=\"custom-control-input\" name=\"boxed-layout\" id=\"boxed-layout\" [attr.checked]=\"(options.boxed=='boxed') ? 'checked' : null\" (change)=\"options.boxed = (options.boxed == 'full' ? 'boxed' : 'full');\">\r\n                                <label class=\"custom-control-label\" for=\"boxed-layout\">Boxed Layout</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-checkbox m-t-10\">\r\n                                <input type=\"checkbox\" class=\"custom-control-input\" name=\"rtl-layout\" id=\"rtl-layout\" [attr.checked]=\"(options.dir=='rtl') ? 'checked' : null\" (change)=\"options.dir = (options.dir == 'rtl' ? 'ltr' : 'rtl');\">\r\n                                <label class=\"custom-control-label\" for=\"rtl-layout\">RTL</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"p-15 border-bottom\">\r\n                            <!-- Sidebar -->\r\n                            <h5 class=\"font-medium m-b-20 m-t-10\">Sidebar Types</h5>\r\n                            <div class=\"custom-control custom-radio m-t-10\">\r\n                                <input type=\"radio\" class=\"custom-control-input\" name=\"sidebar\" [(ngModel)]=\"options.sidebartype\" value=\"mini-sidebar\" id=\"minisidebar\" (change)=\"options.sidebartype = 'mini-sidebar'\">\r\n                                <label class=\"custom-control-label\" for=\"minisidebar\">Mini Sidebar</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio m-t-10\">\r\n                                <input type=\"radio\" class=\"custom-control-input\" name=\"sidebar\" [(ngModel)]=\"options.sidebartype\" value=\"iconbar\" id=\"iconsidebar\" (change)=\"options.sidebartype = 'iconbar'\">\r\n                                <label class=\"custom-control-label\" for=\"iconsidebar\">Icon Sidebar</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio m-t-10\">\r\n                                <input type=\"radio\" class=\"custom-control-input\" name=\"sidebar\" [(ngModel)]=\"options.sidebartype\" value=\"overlay\" id=\"overlaysidebar\" (change)=\"options.sidebartype = 'overlay'\">\r\n                                <label class=\"custom-control-label\" for=\"overlaysidebar\">Overlay Sidebar</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio m-t-10\">\r\n                                <input type=\"radio\" class=\"custom-control-input\" name=\"sidebar\" [(ngModel)]=\"options.sidebartype\" value=\"full\" id=\"fullsidebar\" (change)=\"options.sidebartype = 'full'\">\r\n                                <label class=\"custom-control-label\" for=\"fullsidebar\">Full Sidebar</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"p-15 border-bottom\">\r\n                            <!-- Logo BG -->\r\n                            <h5 class=\"font-medium m-b-20 m-t-10\">Logo Backgrounds</h5>\r\n                            <ul class=\"theme-color\">\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-logobg=\"skin1\" (click)=\"options.logobg = 'skin1'\"></a>\r\n                                </li>\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-logobg=\"skin2\" (click)=\"options.logobg = 'skin2'\"></a>\r\n                                </li>\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-logobg=\"skin3\" (click)=\"options.logobg = 'skin3'\"></a>\r\n                                </li>\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-logobg=\"skin4\" (click)=\"options.logobg = 'skin4'\"></a>\r\n                                </li>\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-logobg=\"skin5\" (click)=\"options.logobg = 'skin5'\"></a>\r\n                                </li>\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-logobg=\"skin6\" (click)=\"options.logobg = 'skin6'\"></a>\r\n                                </li>\r\n                            </ul>\r\n                            <!-- Logo BG -->\r\n                        </div>\r\n                        <div class=\"p-15 border-bottom\">\r\n                            <!-- Navbar BG -->\r\n                            <h5 class=\"font-medium m-b-20 m-t-10\">Navbar Backgrounds</h5>\r\n                            <ul class=\"theme-color\">\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-navbarbg=\"skin1\" (click)=\"options.navbarbg = 'skin1'\"></a>\r\n                                </li>\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-navbarbg=\"skin2\" (click)=\"options.navbarbg = 'skin2'\"></a>\r\n                                </li>\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-navbarbg=\"skin3\" (click)=\"options.navbarbg = 'skin3'\"></a>\r\n                                </li>\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-navbarbg=\"skin4\" (click)=\"options.navbarbg = 'skin4'\"></a>\r\n                                </li>\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-navbarbg=\"skin5\" (click)=\"options.navbarbg = 'skin5'\"></a>\r\n                                </li>\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-navbarbg=\"skin6\" (click)=\"options.navbarbg = 'skin6'\"></a>\r\n                                </li>\r\n                            </ul>\r\n                            <!-- Navbar BG -->\r\n                        </div>\r\n                        <div class=\"p-15 border-bottom\">\r\n                            <!-- Logo BG -->\r\n                            <h5 class=\"font-medium m-b-20 m-t-10\">Sidebar Backgrounds</h5>\r\n                            <ul class=\"theme-color\">\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-sidebarbg=\"skin1\" (click)=\"options.sidebarbg = 'skin1'\"></a>\r\n                                </li>\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-sidebarbg=\"skin2\" (click)=\"options.sidebarbg = 'skin2'\"></a>\r\n                                </li>\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-sidebarbg=\"skin3\" (click)=\"options.sidebarbg = 'skin3'\"></a>\r\n                                </li>\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-sidebarbg=\"skin4\" (click)=\"options.sidebarbg = 'skin4'\"></a>\r\n                                </li>\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-sidebarbg=\"skin5\" (click)=\"options.sidebarbg = 'skin5'\"></a>\r\n                                </li>\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-sidebarbg=\"skin6\" (click)=\"options.sidebarbg = 'skin6'\"></a>\r\n                                </li>\r\n                            </ul>\r\n                            <!-- Logo BG -->\r\n                        </div>\r\n                    </ng-template>\r\n                </ngb-tab>\r\n\r\n            </ngb-tabset>\r\n        </div>\r\n    </aside>\r\n    <div class=\"chat-windows\"></div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/breadcrumb/breadcrumb.component.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/breadcrumb/breadcrumb.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSharedBreadcrumbBreadcrumbComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- ============================================================== -->\r\n<!-- Bread crumb and right sidebar toggle -->\r\n<!-- ============================================================== -->\r\n<!-- <div class=\"page-breadcrumb\">\r\n    <div class=\"row\">\r\n        <div class=\"col-5 align-self-center\">\r\n            <h4 class=\"page-title\">{{pageInfo?.title}}</h4>\r\n            <div class=\"d-flex align-items-center\">\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-7 align-self-center\">\r\n            <div class=\"d-flex no-block justify-content-end align-items-center\">\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <ng-template ngFor let-url [ngForOf]=\"pageInfo?.urls\" let-last=\"last\">\r\n                            <li class=\"breadcrumb-item\" *ngIf=\"!last\" [routerLink]=\"url.url\">\r\n                                <a href='javascript:void(0)'>{{url.title}}</a>\r\n                            </li>\r\n                            <li class=\"breadcrumb-item active\" *ngIf=\"last\">{{url.title}}</li>\r\n                        </ng-template>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n<!-- ============================================================== -->\r\n<!-- End Bread crumb and right sidebar toggle -->\r\n<!-- ============================================================== -->";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header-navigation/navigation.component.html":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header-navigation/navigation.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSharedHeaderNavigationNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- ============================================================== -->\r\n<!-- toggle and nav items -->\r\n<!-- ============================================================== -->\r\n<ul class=\"navbar-nav float-left mr-auto\">\r\n    <li class=\"nav-item d-none d-md-block\">\r\n        <a (click)=\"toggleSidebar.emit()\" class=\"nav-link sidebartoggler waves-effect waves-light\" href=\"javascript:void(0)\" data-sidebartype=\"mini-sidebar\">\r\n            <i class=\"sl-icon-menu font-20\"></i>\r\n        </a>\r\n    </li>\r\n    <!-- ============================================================== -->\r\n    <!-- mega menu -->\r\n    <!-- ============================================================== -->\r\n    <!-- <li class=\"nav-item mega-dropdown\" ngbDropdown [autoClose]=\"false\">\r\n        <a ngbDropdownToggle class=\"nav-link waves-effect waves-dark\" href=\"javascript:void(0)\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <i class=\"ti-gift font-20\"></i>\r\n        </a>\r\n        <div class=\"\" ngbDropdownMenu>\r\n            <div class=\"mega-dropdown-menu row\">\r\n                <div class=\"col-lg-3 col-xlg-2 m-b-30\">\r\n                    <h5 class=\"m-b-20\">Carousel</h5> -->\r\n    <!-- CAROUSEL -->\r\n    <!-- <ngb-carousel>\r\n                        <ng-template ngbSlide>\r\n                            <img src=\"assets/images/big/img1.jpg\" class=\"img-fluid\" alt=\"Random first slide\">\r\n                            <div class=\"carousel-caption\">\r\n                                <h3 class=\"text-white font-bold\">First slide label</h3>\r\n                            </div>\r\n                        </ng-template>\r\n                        <ng-template ngbSlide>\r\n                            <img src=\"assets/images/big/img2.jpg\" class=\"img-fluid\" alt=\"Random second slide\">\r\n                            <div class=\"carousel-caption\">\r\n                                <h3 class=\"text-white font-bold\">Second slide label</h3>\r\n                            </div>\r\n                        </ng-template>\r\n                        <ng-template ngbSlide>\r\n                            <img src=\"assets/images/big/img3.jpg\" class=\"img-fluid\" alt=\"Random third slide\">\r\n                            <div class=\"carousel-caption\">\r\n                                <h3 class=\"text-white font-bold\">Third slide label</h3>\r\n                            </div>\r\n                        </ng-template>\r\n                    </ngb-carousel> -->\r\n    <!-- End CAROUSEL\r\n                </div>\r\n                <div class=\"col-lg-3 m-b-30\">\r\n                    <h5 class=\"m-b-20\">Accordion</h5>\r\n                    <!-- Accordian\r\n                    <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\" class=\"accordion nav-accordion\">\r\n                        <ngb-panel title=\"Simple\">\r\n                            <ng-template ngbPanelContent>\r\n                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.\r\n                            </ng-template>\r\n                        </ngb-panel>\r\n                        <ngb-panel>\r\n                            <ng-template ngbPanelTitle>\r\n                                <span>&#9733;\r\n                                    <b>Fancy</b> title &#9733;</span>\r\n                            </ng-template>\r\n                            <ng-template ngbPanelContent>\r\n                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.\r\n                            </ng-template>\r\n                        </ngb-panel>\r\n                        <ngb-panel title=\"Disabled\" [disabled]=\"true\">\r\n                            <ng-template ngbPanelContent>\r\n                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.\r\n                            </ng-template>\r\n                        </ngb-panel>\r\n                    </ngb-accordion>\r\n                </div>\r\n                <div class=\"col-lg-3  m-b-30\">\r\n                    <h5 class=\"m-b-20\">Contact Us</h5>\r\n                    <!-- Contact\r\n                    <form>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"exampleInputname1\" placeholder=\"Enter Name\"> </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\"> </div>\r\n                        <div class=\"form-group\">\r\n                            <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"3\" placeholder=\"Message\"></textarea>\r\n                        </div>\r\n                        <button type=\"submit\" class=\"btn btn-info\">Submit</button>\r\n                    </form>\r\n                </div>\r\n                <!-- <div class=\"col-lg-3 col-xlg-4 m-b-30\"> -->\r\n    <!-- <h5 class=\"m-b-20\">List style</h5> -->\r\n    <!-- List style -->\r\n    <!-- <ul class=\"list-style-none\">\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\">\r\n                                <i class=\"fa fa-check text-success\"></i> You can give link</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\">\r\n                                <i class=\"fa fa-check text-success\"></i> Give link</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\">\r\n                                <i class=\"fa fa-check text-success\"></i> Another Give link</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\">\r\n                                <i class=\"fa fa-check text-success\"></i> Forth link</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\">\r\n                                <i class=\"fa fa-check text-success\"></i> Another fifth link</a>\r\n                        </li>\r\n                    </ul> -->\r\n    <!-- </div>\r\n            </div>\r\n        </div>\r\n    </li> -->\r\n    <!-- ============================================================== -->\r\n    <!-- End mega menu -->\r\n    <!-- ============================================================== -->\r\n    <!-- ============================================================== -->\r\n    <!-- Comment -->\r\n    <!-- ============================================================== -->\r\n    <!-- <li class=\"nav-item d-none d-md-block\">\r\n\r\n        <a href=\"javascript:void(0)\" class=\"nav-link \" (click)=\"openBox()\">\r\n            <i class=\"ti-bell font-20\"></i>\r\n            <div class=\"notify\"> <span class=\"heartbit\"></span> <span class=\"point\"></span> </div>\r\n        </a>\r\n\r\n    </li> -->\r\n    <li class=\"nav-item d-none d-md-block\">\r\n        <!-- <div class=\"switch-btn m-t-20\">\r\n            <input type=\"checkbox\" class=\"toggle-switch\" checked>\r\n        </div>     -->\r\n\r\n    </li>\r\n    <!-- <li class=\"nav-item\" ngbDropdown>\r\n\r\n        <a ngbDropdownToggle class=\"nav-link waves-effect waves-dark\" href=\"javascript:void(0)\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\r\n            <i class=\"ti-bell font-20\"></i>\r\n            <div class=\"notify\"> <span class=\"heartbit\"></span> <span class=\"point\"></span> </div>\r\n        </a>\r\n        <div class=\"mailbox\" ngbDropdownMenu>\r\n            <span class=\"with-arrow\">\r\n                <span class=\"bg-primary\"></span>\r\n            </span>\r\n\r\n        </div>\r\n    </li> -->\r\n    <!-- <div class=\"notify\">\r\n        <ng-template #addBike let-modal>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n            <div class=\"modal-body\">\r\n                <div class=\"drop-title bg-primary text-white\">\r\n                    <span class=\"font-light\">Notifications</span>\r\n                </div>\r\n                <div class=\"message-center notifications\" [perfectScrollbar]=\"config\">\r\n                    <a href=\"javascript:void(0)\" class=\"message-item\" *ngFor=\"let notification of notifications\">\r\n                        <span class=\"btn btn-circle {{notification.btn}}\">\r\n                 <i class=\"{{notification.icon}}\"></i>\r\n             </span>\r\n                        <span class=\"mail-contnet\">\r\n                 <h5 class=\"message-title\">Bike Booked</h5>\r\n                 <span class=\"mail-desc\">Bike ID : <span> #4626462 </span> is booked </span>\r\n                        <span class=\"time\"> 10:30 AM </span>\r\n                        </span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n    </div> -->\r\n    <!-- ============================================================== -->\r\n    <!-- End Comment -->\r\n    <!-- ============================================================== -->\r\n    <!-- ============================================================== -->\r\n    <!-- Messages -->\r\n    <!-- ============================================================== -->\r\n    <!-- <li class=\"nav-item\" ngbDropdown>\r\n        <a ngbDropdownToggle class=\"nav-link waves-effect waves-dark\" href=\"javascript:void(0)\" id=\"2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <i class=\"font-20 ti-email\"></i>\r\n\r\n        </a>\r\n        <div class=\"mailbox\" aria-labelledby=\"2\" ngbDropdownMenu>\r\n            <span class=\"with-arrow\">\r\n                <span class=\"bg-danger\"></span>\r\n            </span>\r\n            <ul class=\"list-style-none\">\r\n                <li>\r\n                    <div class=\"drop-title bg-danger text-white\">\r\n                        <h4 class=\"m-b-0 m-t-5\">5 New</h4>\r\n                        <span class=\"font-light\">Messages</span>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <div class=\"message-center message-body\" [perfectScrollbar]=\"config\"> -->\r\n    <!-- Message -->\r\n    <!-- <a href=\"javascript:void(0)\" class=\"message-item\" *ngFor=\"let mymessage of mymessages\">\r\n                            <span class=\"user-img\">\r\n                                <img src=\"{{mymessage.useravatar}}\" alt=\"user\" class=\"rounded-circle\">\r\n                                <span class=\"profile-status {{mymessage.status}} pull-right\"></span>\r\n                            </span>\r\n                            <span class=\"mail-contnet\">\r\n                                <h5 class=\"message-title\">{{mymessage.from}}</h5>\r\n                                <span class=\"mail-desc\">{{mymessage.subject}}</span>\r\n                                <span class=\"time\">{{mymessage.time}}</span>\r\n                            </span>\r\n                        </a>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <a class=\"nav-link text-center link\" href=\"javascript:void(0);\">\r\n                        <b>See all e-Mails</b>\r\n                        <i class=\"fa fa-angle-right\"></i>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </li> -->\r\n    <!-- ============================================================== -->\r\n    <!-- End Messages -->\r\n    <!-- ============================================================== -->\r\n\r\n\r\n</ul>\r\n<!-- ============================================================== -->\r\n<!-- Right side toggle and nav items -->\r\n<!-- ============================================================== -->\r\n<ul class=\"navbar-nav float-right\">\r\n    <!-- ============================================================== -->\r\n    <!-- Search -->\r\n    <!-- ============================================================== -->\r\n    <!-- <li class=\"nav-item search-box\">\r\n        <a (click)=\"showSearch = !showSearch\" class=\"nav-link waves-effect waves-dark\" href=\"javascript:void(0)\">\r\n            <i class=\"ti-search\"></i>\r\n        </a>\r\n        <form class=\"app-search position-absolute\" [ngClass]=\"{'show-search': showSearch}\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search &amp; enter\">\r\n            <a class=\"srh-btn\" (click)=\"showSearch = !showSearch\">\r\n                <i class=\"ti-close font-16\"></i>\r\n            </a>\r\n        </form>\r\n    </li> -->\r\n    <!-- <li class=\"nav-item pt-4 pb-2\">\r\n        <a class=\"\" href=\"javascript:void()\">\r\n            <i class=\"fa fa-power-off m-r-5 m-l-5\"></i> Logout</a>\r\n    </li> -->\r\n    <!-- ============================================================== -->\r\n    <!-- create new -->\r\n    <!-- ============================================================== -->\r\n    <!-- <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n        <a ngbDropdownToggle class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdown2\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n            aria-expanded=\"false\">\r\n            <i class=\"flag-icon flag-icon-us font-18\"></i>\r\n        </a>\r\n        <div class=\"dropdown-menu-right\" aria-labelledby=\"navbarDropdown2\" ngbDropdownMenu>\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n                <i class=\"flag-icon flag-icon-us\"></i> English</a>\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n                <i class=\"flag-icon flag-icon-fr\"></i> French</a>\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n                <i class=\"flag-icon flag-icon-es\"></i> Spanish</a>\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n                <i class=\"flag-icon flag-icon-de\"></i> German</a>\r\n        </div>\r\n    </li> -->\r\n\r\n    <!-- ============================================================== -->\r\n    <!-- User profile and search -->\r\n    <!-- ============================================================== -->\r\n    <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n        <a ngbDropdownToggle class=\"nav-link text-muted waves-effect waves-dark pro-pic\" href=\"javascript:void(0)\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <img src=\"assets/images/users/1.jpg\" alt=\"user\" class=\"rounded-circle\" width=\"31\">\r\n        </a>\r\n        <div class=\"dropdown-menu-right user-dd\" ngbDropdownMenu>\r\n            <span class=\"with-arrow\">\r\n                <span class=\"bg-primary\"></span>\r\n            </span>\r\n            <div class=\"d-flex no-block align-items-center p-15 bg-primary text-white m-b-10\" *ngIf=\"userDetail\">\r\n                <div class=\"\" *ngIf=\"!userDetail.image\">\r\n                    <img src=\"assets/images/users/1.jpg\" alt=\"user\" class=\"img-circle\" width=\"60\">\r\n                </div>\r\n                <div class=\"m-l-10\">\r\n                    <h4 class=\"m-b-0\">{{userDetail.fullName ? userDetail.fullName : 'Admin Pade'}}</h4>\r\n                    <p class=\" m-b-0\">{{userDetail.email ? userDetail.email : 'adminpade@yopmail.com'}}</p>\r\n                </div>\r\n            </div>\r\n            <!-- <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                <i class=\"fas fa-cog m-r-5 m-l-5\"></i> Setting</a> -->\r\n\r\n            <a class=\"dropdown-item\" routerLink=\"pages/profile\">\r\n                <i class=\"ti-user m-r-5 m-l-5\"></i> My Profile</a>\r\n\r\n            <!-- <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                <i class=\"ti-email m-r-5 m-l-5\"></i> Inbox</a>\r\n            <div class=\"dropdown-divider\"></div> -->\r\n            <a class=\"dropdown-item\" routerLink=\"/changepassword\">\r\n                <i class=\" fas fa-lock m-r-5 m-l-5\"></i> Change Password</a>\r\n            <!-- <div class=\"dropdown-divider\"></div> -->\r\n            <a class=\"dropdown-item\" (click)=\"logout()\" style=\"cursor: pointer;\">\r\n                <i class=\"fa fa-power-off m-r-5 m-l-5\" ></i> Logout</a>\r\n            <!-- <div class=\"dropdown-divider\"></div> -->\r\n            <!-- <div class=\"p-l-30 p-10\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-success btn-rounded\">View Profile</a>\r\n            </div> -->\r\n        </div>\r\n    </li>\r\n    <!-- ============================================================== -->\r\n    <!-- User profile and search -->\r\n    <!-- ============================================================== -->\r\n</ul>\r\n<!-- <aside id=\"notification\" class=\"aside-box mailbox shadow\">\r\n    <a href=\"javascript:void(0)\" id=\"arrow-close\" (click)=\"closeBox()\"><i class=\"mdi mdi-close font-20\" ></i></a>\r\n    <ul class=\"list-style-none\">\r\n        <li>\r\n            <div class=\"drop-title bg-primary text-white\">\r\n                <h4 class=\"m-b-0 m-t-5\">4 New</h4>\r\n                <span class=\"font-light\">Notifications</span>\r\n            </div>\r\n        </li>\r\n        <li>\r\n            <div class=\"message-center notifications\" [perfectScrollbar]=\"config\">\r\n                 <a href=\"javascript:void(0)\" class=\"message-item\" *ngFor=\"let notification of notifications\">\r\n                    <span class=\"btn btn-circle {{notification.btn}}\">\r\n                        <i class=\"{{notification.icon}}\"></i>\r\n                    </span>\r\n                    <span class=\"mail-contnet\">\r\n                        <h5 class=\"message-title\">{{notification.title}}</h5>\r\n                        <span class=\"mail-desc\">{{notification.subject}}</span>\r\n                        <span class=\"time\">{{notification.time}}</span>\r\n                    </span>\r\n                </a>\r\n            </div>\r\n            <div class=\"message-center notifications pb-5\" [perfectScrollbar]=\"config\">\r\n                <a href=\"javascript:void(0)\" class=\"message-item\" *ngFor=\"let notification of notifications\">\r\n                    <span class=\"btn btn-circle {{notification.btn}}\">\r\n                     <i class=\"{{notification.icon}}\"></i>\r\n                 </span>\r\n                    <span class=\"mail-contnet\">\r\n                     <h5 class=\"message-title\">Bike Booked</h5>\r\n                     <span class=\"mail-desc\">Bike ID : <span> #4626462 </span> is booked </span>\r\n                    <span class=\"time\"> 10:30 AM </span>\r\n                    </span>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"message-item\" *ngFor=\"let notification of notifications\">\r\n                    <span class=\"btn btn-circle {{notification.btn}}\">\r\n                     <i class=\"{{notification.icon}}\"></i>\r\n                 </span>\r\n                    <span class=\"mail-contnet\">\r\n                     <h5 class=\"message-title\">Bike Booked</h5>\r\n                     <span class=\"mail-desc\">Bike ID : <span> #4626462 </span> is booked </span>\r\n                    <span class=\"time\"> 10:30 AM </span>\r\n                    </span>\r\n                </a>\r\n            </div>\r\n        </li>\r\n        <li>\r\n            <a class=\"nav-link text-center m-b-5\" href=\"javascript:void(0);\" (click)=\"addBikeModal(addBike)\">\r\n                <strong>Check all notifications </strong>\r\n                <i class=\"fa fa-angle-right\"></i>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</aside> -->\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSharedSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav class=\"sidebar-nav pt-3\">\r\n    <ul id=\"sidebarnav\">\r\n        <!-- User Profile-->\r\n        <li>\r\n            <!-- User Profile-->\r\n            <div class=\"user-profile m-t-20 \" ngbDropdown>\r\n                <!-- <div class=\"user-pic\">\r\n                    <img src=\"assets/images/users/1.jpg\" alt=\"users\" class=\"rounded-circle img-fluid\" />\r\n                </div> -->\r\n                <div class=\"user-content hide-menu m-t-10\">\r\n                    <!-- <h5 class=\"m-b-10 user-name font-medium\">Steave Jobs</h5> -->\r\n                     <!-- <a ngbDropdownToggle href=\"javascript:void(0)\" class=\"btn btn-circle btn-sm m-r-5\" id=\"Userdd\" role=\"button\" data-toggle=\"dropdown\"\r\n                        aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <i class=\"ti-settings\"></i>\r\n                    </a>  -->\r\n                    <!-- <a routerLink=\"/login\" title=\"Logout\" class=\"btn btn-circle btn-sm\">\r\n                        <i class=\"ti-power-off\"></i>\r\n                    </a>  -->\r\n                     <div class=\"animated flipInY\" aria-labelledby=\"Userdd\" ngbDropdownMenu>\r\n                         <a class=\"dropdown-item\" routerLink=\"pages/profile\">\r\n                            <i class=\"ti-user m-r-5 m-l-5\"></i> My Profile</a>\r\n                        <!-- <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                            <i class=\"ti-wallet m-r-5 m-l-5\"></i> My Balance</a> -->\r\n                        <!-- <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                            <i class=\"ti-email m-r-5 m-l-5\"></i> Inbox</a> - -->\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <!-- <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                            <i class=\"ti-settings m-r-5 m-l-5\"></i> Account Setting</a> -->\r\n                        <!-- <div class=\"dropdown-divider\"></div> -->\r\n                        <a class=\"dropdown-item\" routerLink=\"/login\">\r\n                            <i class=\"fa fa-power-off m-r-5 m-l-5\"></i> Logout</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- End User Profile-->\r\n        </li>        <!-- First level menu -->\r\n        <li class=\"sidebar-item\" [class.selected]=\"showMenu === sidebarnavItem.title\" *ngFor=\"let sidebarnavItem of sidebarnavItems\"\r\n            [routerLinkActive]=\"sidebarnavItem.submenu.length != 0 ? '' : 'active'\">\r\n            <div class=\"nav-small-cap\" *ngIf=\"sidebarnavItem.extralink === true\">\r\n                <i [ngClass]=\"[sidebarnavItem.icon]\"></i>\r\n                <span class=\"hide-menu \">{{sidebarnavItem.title}}</span>\r\n            </div>\r\n            <a class=\"sidebar-link waves-effect waves-dark\" [routerLink]=\"sidebarnavItem.class === '' ? [sidebarnavItem.path] : null\"\r\n                [ngClass]=\"[sidebarnavItem.class]\" *ngIf=\"!sidebarnavItem.extralink;\" (click)=\"addExpandClass(sidebarnavItem.title)\"\r\n                [routerLinkActive]=\"sidebarnavItem.submenu.length != 0 ? '' : 'active'\">\r\n                <i [ngClass]=\"[sidebarnavItem.icon]\"></i>\r\n                <span class=\"hide-menu\">{{sidebarnavItem.title}}</span>\r\n            </a>\r\n            <!-- Second level menu -->\r\n            <ul aria-expanded=\"false\" class=\"collapse first-level\" *ngIf=\"sidebarnavItem.submenu.length > 0\" [ngClass]=\"{'in' : showMenu === sidebarnavItem.title }\">\r\n                <li class=\"sidebar-item\" *ngFor=\"let sidebarnavSubItem of sidebarnavItem.submenu\" [class.active]=\"showSubMenu === sidebarnavSubItem.title\"\r\n                    [routerLinkActive]=\"sidebarnavSubItem.submenu.length > 0 ? '' : 'active'\">\r\n                    <a class=\"sidebar-link\" [routerLink]=\"sidebarnavSubItem.submenu.length > 0 ? null : [sidebarnavSubItem.path]\" [routerLinkActive]=\"sidebarnavSubItem.submenu.length > 0 ? '' : 'router-link-active'\"\r\n                        [ngClass]=\"[sidebarnavSubItem.class]\" *ngIf=\"!sidebarnavSubItem.extralink;\" (click)=\"addActiveClass(sidebarnavSubItem.title)\">\r\n                        <i [ngClass]=\"[sidebarnavSubItem.icon]\"></i>\r\n                        <span class=\"hide-menu\">{{sidebarnavSubItem.title}}</span>\r\n                    </a>\r\n                    <!-- Third level menu -->\r\n                    <ul aria-expanded=\"false\" class=\"collapse second-level\" *ngIf=\"sidebarnavSubItem.submenu.length > 0\" [ngClass]=\"{'in' : showSubMenu === sidebarnavSubItem.title }\">\r\n                        <li class=\"sidebar-item\" *ngFor=\"let sidebarnavSubsubItem of sidebarnavSubItem.submenu\" routerLinkActive=\"active\" [ngClass]=\"[sidebarnavSubsubItem.class]\">\r\n                            <a class=\"sidebar-link\" [routerLink]=\"[sidebarnavSubsubItem.path]\" *ngIf=\"!sidebarnavSubsubItem.extralink;\" [routerLinkActive]=\"sidebarnavSubsubItem.submenu.length > 0 ? '' : 'router-link-active'\">\r\n                                <i [ngClass]=\"[sidebarnavSubsubItem.icon]\"></i>\r\n                                <span class=\"hide-menu\">{{sidebarnavSubsubItem.title}}</span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n    </ul>\r\n</nav>";
      /***/
    },

    /***/
    "./src/$$_lazy_route_resource lazy recursive":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function src$$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: Approutes */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Approutes", function () {
        return Approutes;
      });
      /* harmony import */


      var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./layouts/full/full.component */
      "./src/app/layouts/full/full.component.ts");
      /* harmony import */


      var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./layouts/blank/blank.component */
      "./src/app/layouts/blank/blank.component.ts");

      var Approutes = [{
        path: '',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__["FullComponent"],
        children: [{
          path: '',
          redirectTo: '/dashboard',
          pathMatch: 'full'
        }, {
          path: 'dashboard',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | dashboards-dashboard-module */
            [__webpack_require__.e("default~charts-charts-module~dashboards-dashboard-module~pages-pages-module"), __webpack_require__.e("default~apps-apps-module~dashboards-dashboard-module~pages-pages-module"), __webpack_require__.e("default~dashboards-dashboard-module~pages-pages-module~table-tables-module"), __webpack_require__.e("default~apps-apps-module~dashboards-dashboard-module~form-forms-module"), __webpack_require__.e("default~apps-apps-module~dashboards-dashboard-module"), __webpack_require__.e("common"), __webpack_require__.e("dashboards-dashboard-module")]).then(__webpack_require__.bind(null,
            /*! ./dashboards/dashboard.module */
            "./src/app/dashboards/dashboard.module.ts")).then(function (m) {
              return m.DashboardModule;
            });
          }
        }, {
          path: 'starter',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | starter-starter-module */
            "starter-starter-module").then(__webpack_require__.bind(null,
            /*! ./starter/starter.module */
            "./src/app/starter/starter.module.ts")).then(function (m) {
              return m.StarterModule;
            });
          }
        }, {
          path: 'component',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | component-component-module */
            "component-component-module").then(__webpack_require__.bind(null,
            /*! ./component/component.module */
            "./src/app/component/component.module.ts")).then(function (m) {
              return m.ComponentsModule;
            });
          }
        }, {
          path: 'cards',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | cards-cards-module */
            "cards-cards-module").then(__webpack_require__.bind(null,
            /*! ./cards/cards.module */
            "./src/app/cards/cards.module.ts")).then(function (m) {
              return m.CardsModule;
            });
          }
        }, {
          path: 'icons',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | icons-icons-module */
            "icons-icons-module").then(__webpack_require__.bind(null,
            /*! ./icons/icons.module */
            "./src/app/icons/icons.module.ts")).then(function (m) {
              return m.IconsModule;
            });
          }
        }, {
          path: 'forms',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | form-forms-module */
            [__webpack_require__.e("default~apps-apps-module~dashboards-dashboard-module~form-forms-module"), __webpack_require__.e("form-forms-module")]).then(__webpack_require__.bind(null,
            /*! ./form/forms.module */
            "./src/app/form/forms.module.ts")).then(function (m) {
              return m.FormModule;
            });
          }
        }, {
          path: 'auth',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | authentication-authentication-module */
            "authentication-authentication-module").then(__webpack_require__.bind(null,
            /*! ./authentication/authentication.module */
            "./src/app/authentication/authentication.module.ts")).then(function (m) {
              return m.AuthenticationModule;
            });
          }
        }, {
          path: 'tables',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | table-tables-module */
            [__webpack_require__.e("default~dashboards-dashboard-module~pages-pages-module~table-tables-module"), __webpack_require__.e("table-tables-module")]).then(__webpack_require__.bind(null,
            /*! ./table/tables.module */
            "./src/app/table/tables.module.ts")).then(function (m) {
              return m.TablesModule;
            });
          }
        }, {
          path: 'charts',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | charts-charts-module */
            [__webpack_require__.e("default~charts-charts-module~dashboards-dashboard-module~pages-pages-module"), __webpack_require__.e("charts-charts-module")]).then(__webpack_require__.bind(null,
            /*! ./charts/charts.module */
            "./src/app/charts/charts.module.ts")).then(function (m) {
              return m.ChartModule;
            });
          }
        }, {
          path: 'widgets',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | widgets-widgets-module */
            "widgets-widgets-module").then(__webpack_require__.bind(null,
            /*! ./widgets/widgets.module */
            "./src/app/widgets/widgets.module.ts")).then(function (m) {
              return m.WidgetsModule;
            });
          }
        }, {
          path: 'ecom',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | ecommerce-ecom-module */
            "ecommerce-ecom-module").then(__webpack_require__.bind(null,
            /*! ./ecommerce/ecom.module */
            "./src/app/ecommerce/ecom.module.ts")).then(function (m) {
              return m.EcomModule;
            });
          }
        }, {
          path: 'timeline',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | timeline-timeline-module */
            "timeline-timeline-module").then(__webpack_require__.bind(null,
            /*! ./timeline/timeline.module */
            "./src/app/timeline/timeline.module.ts")).then(function (m) {
              return m.TimelineModule;
            });
          }
        }, {
          path: 'extra-component',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | extra-component-extra-component-module */
            "extra-component-extra-component-module").then(__webpack_require__.bind(null,
            /*! ./extra-component/extra-component.module */
            "./src/app/extra-component/extra-component.module.ts")).then(function (m) {
              return m.ExtraComponentModule;
            });
          }
        }, {
          path: 'apps',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | apps-apps-module */
            [__webpack_require__.e("default~apps-apps-module~dashboards-dashboard-module~pages-pages-module"), __webpack_require__.e("default~apps-apps-module~dashboards-dashboard-module~form-forms-module"), __webpack_require__.e("default~apps-apps-module~dashboards-dashboard-module"), __webpack_require__.e("default~apps-apps-module~pages-pages-module"), __webpack_require__.e("apps-apps-module")]).then(__webpack_require__.bind(null,
            /*! ./apps/apps.module */
            "./src/app/apps/apps.module.ts")).then(function (m) {
              return m.AppsModule;
            });
          }
        }, {
          path: 'apps/email',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | apps-email-mail-module */
            "apps-email-mail-module").then(__webpack_require__.bind(null,
            /*! ./apps/email/mail.module */
            "./src/app/apps/email/mail.module.ts")).then(function (m) {
              return m.MailModule;
            });
          }
        }, {
          path: 'maps',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | maps-maps-module */
            "maps-maps-module").then(__webpack_require__.bind(null,
            /*! ./maps/maps.module */
            "./src/app/maps/maps.module.ts")).then(function (m) {
              return m.MapsModule;
            });
          }
        }, {
          path: 'pages',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-pages-module */
            [__webpack_require__.e("default~charts-charts-module~dashboards-dashboard-module~pages-pages-module"), __webpack_require__.e("default~apps-apps-module~dashboards-dashboard-module~pages-pages-module"), __webpack_require__.e("default~dashboards-dashboard-module~pages-pages-module~table-tables-module"), __webpack_require__.e("default~apps-apps-module~pages-pages-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-pages-module")]).then(__webpack_require__.bind(null,
            /*! ./pages/pages.module */
            "./src/app/pages/pages.module.ts")).then(function (m) {
              return m.PagesModule;
            });
          }
        }]
      }, {
        path: '',
        component: _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_1__["BlankComponent"],
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | authentication-authentication-module */
            "authentication-authentication-module").then(__webpack_require__.bind(null,
            /*! ./authentication/authentication.module */
            "./src/app/authentication/authentication.module.ts")).then(function (m) {
              return m.AuthenticationModule;
            });
          }
        }]
      }, {
        path: '**',
        redirectTo: '/authentication/404'
      }];
      /***/
    },

    /***/
    "./src/app/app.component.css":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'app';
      };

      AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./app.component.css */
        "./src/app/app.component.css"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
      /* harmony import */


      var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./layouts/full/full.component */
      "./src/app/layouts/full/full.component.ts");
      /* harmony import */


      var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./layouts/blank/blank.component */
      "./src/app/layouts/blank/blank.component.ts");
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng2-search-filter */
      "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
      /* harmony import */


      var _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./shared/header-navigation/navigation.component */
      "./src/app/shared/header-navigation/navigation.component.ts");
      /* harmony import */


      var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./shared/sidebar/sidebar.component */
      "./src/app/shared/sidebar/sidebar.component.ts");
      /* harmony import */


      var _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./shared/breadcrumb/breadcrumb.component */
      "./src/app/shared/breadcrumb/breadcrumb.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./shared/spinner.component */
      "./src/app/shared/spinner.component.ts");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
      /* harmony import */


      var _app_shared_http_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../app/shared/http-interceptor/interceptor */
      "./src/app/shared/http-interceptor/interceptor.ts");
      /* harmony import */


      var _app_shared_http_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../app/shared/http-interceptor/error.interceptor */
      "./src/app/shared/http-interceptor/error.interceptor.ts");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }; //Import interceptor


      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true,
        wheelSpeed: 1,
        wheelPropagation: true,
        minScrollbarLength: 20
      };

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_20__["SpinnerComponent"], _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_11__["FullComponent"], _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_12__["BlankComponent"], _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_15__["NavigationComponent"], _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__["BreadcrumbComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["SidebarComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_18__["Approutes"], {
          useHash: false
        }), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__["PerfectScrollbarModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__["Ng2SearchPipeModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__["NgMultiSelectDropDownModule"].forRoot(), _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
          apiKey: 'AIzaSyBUb3jDWJQ28vDJhuQZxkC0NXr_zycm8D0'
        }), _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"]],
        providers: [{
          provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__["PERFECT_SCROLLBAR_CONFIG"],
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }, {
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"]
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
          useClass: _app_shared_http_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_23__["JwtInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
          useClass: _app_shared_http_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_24__["ErrorInterceptor"],
          multi: true
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/layouts/blank/blank.component.ts":
    /*!**************************************************!*\
      !*** ./src/app/layouts/blank/blank.component.ts ***!
      \**************************************************/

    /*! exports provided: BlankComponent */

    /***/
    function srcAppLayoutsBlankBlankComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlankComponent", function () {
        return BlankComponent;
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

      var BlankComponent = function BlankComponent() {
        _classCallCheck(this, BlankComponent);
      };

      BlankComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-blank-layout',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./blank.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/blank/blank.component.html"))["default"]
      })], BlankComponent);
      /***/
    },

    /***/
    "./src/app/layouts/full/full.component.scss":
    /*!**************************************************!*\
      !*** ./src/app/layouts/full/full.component.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutsFullFullComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".logo-svg {\n  width: 40px;\n  height: 40px;\n  margin: 10px 0px;\n}\n\n.logo-content {\n  width: 90px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9mdWxsL2Z1bGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtBQUN4Qjs7QUFLSTtFQUNJLFdBQVc7QUFGbkIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL2Z1bGwvZnVsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAubG9nby1zdmcge1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgICAgIC8vICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAvLyAgICAgLnN0MHtmaWxsOiNGQkIwM0I7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIC5sb2dvLWNvbnRlbnQge1xyXG4gICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgfVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/layouts/full/full.component.ts":
    /*!************************************************!*\
      !*** ./src/app/layouts/full/full.component.ts ***!
      \************************************************/

    /*! exports provided: FullComponent */

    /***/
    function srcAppLayoutsFullFullComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FullComponent", function () {
        return FullComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

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

      var FullComponent = /*#__PURE__*/function () {
        function FullComponent(router) {
          _classCallCheck(this, FullComponent);

          this.router = router;
          this.config = {};
          this.tabStatus = 'justified';
          this.isCollapsed = false;
          this.showSettings = false;
          this.showMobileMenu = false;
          this.expandLogo = false;
          this.options = {
            theme: 'light',
            dir: 'ltr',
            layout: 'vertical',
            sidebartype: 'full',
            sidebarpos: 'fixed',
            headerpos: 'fixed',
            boxed: 'full',
            navbarbg: 'skin6',
            sidebarbg: 'skin5',
            logobg: 'skin5' // six possible values: skin(1/2/3/4/5/6)

          };
        }

        _createClass(FullComponent, [{
          key: "Logo",
          value: function Logo() {
            this.expandLogo = !this.expandLogo;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.router.url === '/') {
              this.router.navigate(['/dashboard']);
            }

            this.defaultSidebar = this.options.sidebartype;
            this.handleSidebar();
          }
        }, {
          key: "onResize",
          value: function onResize(event) {
            this.handleSidebar();
          }
        }, {
          key: "handleSidebar",
          value: function handleSidebar() {
            this.innerWidth = window.innerWidth;

            switch (this.defaultSidebar) {
              case 'full':
              case 'iconbar':
                if (this.innerWidth < 1170) {
                  this.options.sidebartype = 'mini-sidebar';
                } else {
                  this.options.sidebartype = this.defaultSidebar;
                }

                break;

              case 'overlay':
                if (this.innerWidth < 767) {
                  this.options.sidebartype = 'mini-sidebar';
                } else {
                  this.options.sidebartype = this.defaultSidebar;
                }

                break;

              default:
            }
          }
        }, {
          key: "toggleSidebarType",
          value: function toggleSidebarType() {
            switch (this.options.sidebartype) {
              case 'full':
              case 'iconbar':
                this.options.sidebartype = 'mini-sidebar';
                break;

              case 'overlay':
                this.showMobileMenu = !this.showMobileMenu;
                break;

              case 'mini-sidebar':
                if (this.defaultSidebar === 'mini-sidebar') {
                  this.options.sidebartype = 'full';
                } else {
                  this.options.sidebartype = this.defaultSidebar;
                }

                break;

              default:
            }
          }
        }]);

        return FullComponent;
      }();

      FullComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      FullComponent.propDecorators = {
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      };
      FullComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-full-layout',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./full.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full/full.component.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./full.component.scss */
        "./src/app/layouts/full/full.component.scss"))["default"]]
      }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], FullComponent);
      /***/
    },

    /***/
    "./src/app/shared/breadcrumb/breadcrumb.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
      \***********************************************************/

    /*! exports provided: BreadcrumbComponent */

    /***/
    function srcAppSharedBreadcrumbBreadcrumbComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
        return BreadcrumbComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
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
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var BreadcrumbComponent = /*#__PURE__*/function () {
        function BreadcrumbComponent(router, activatedRoute, titleService) {
          var _this = this;

          _classCallCheck(this, BreadcrumbComponent);

          this.router = router;
          this.activatedRoute = activatedRoute;
          this.titleService = titleService;
          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            return _this.activatedRoute;
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (route) {
            while (route.firstChild) {
              route = route.firstChild;
            }

            return route;
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (route) {
            return route.outlet === 'primary';
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (route) {
            return route.data;
          })).subscribe(function (event) {
            _this.titleService.setTitle(event['title']);

            _this.pageInfo = event;
          });
        }

        _createClass(BreadcrumbComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BreadcrumbComponent;
      }();

      BreadcrumbComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
        }];
      };

      BreadcrumbComponent.propDecorators = {
        layout: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      BreadcrumbComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-breadcrumb',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./breadcrumb.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/breadcrumb/breadcrumb.component.html"))["default"]
      }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])], BreadcrumbComponent);
      /***/
    },

    /***/
    "./src/app/shared/header-navigation/navigation.component.scss":
    /*!********************************************************************!*\
      !*** ./src/app/shared/header-navigation/navigation.component.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSharedHeaderNavigationNavigationComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n@import url(\"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\");\n/*******************************/\n/*******************************/\n/*Theme Colors*/\n/*Topbar Colors*/\n/*Sidebar Colors*/\n/*Boxed layout width*/\n/*Shadow*/\n/* transitions */\n/* Dark transparent bg */\n/* ***************************** */\n/* ***************************** */\n/* *\r\n * Table Of Content\r\n *\r\n *  1. Color system\r\n *  2. Options\r\n *  3. Body\r\n *  4. Typography\r\n *  5. Breadcrumbs\r\n *  6. Cards\r\n *  7. Dropdowns\r\n *  8. Buttons\r\n *  9. Typography\r\n *  10. Progress bars\r\n *  11. Tables\r\n *  12. Forms\r\n *  14. Component */\n.aside-box {\n  width: 275px;\n  height: 100vh;\n  position: absolute;\n  background-color: #fff;\n  z-index: 999;\n  right: 0;\n  padding: 10px;\n  transform: translateX(285px);\n  transition: 0.3s ease-in-out;\n}\n.aside-box.sidebar_slide {\n  transform: translateX(0px);\n}\n.aside-box .message-center {\n  height: 100vh;\n}\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy92YXJpYWJsZS5zY3NzIiwic3JjL2FwcC9zaGFyZWQvaGVhZGVyLW5hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBTUEsa0ZBQVk7QUFOWixnQ0FBQTtBQUlBLGdDQUFBO0FBSUEsZUFBQTtBQWdCQSxnQkFBQTtBQVNBLGlCQUFBO0FBZUEscUJBQUE7QUFJQSxTQUFBO0FBT0EsZ0JBQUE7QUFJQSx3QkFBQTtBQXNCQSxrQ0FBQTtBQUlBLGtDQUFBO0FBR0E7Ozs7Ozs7Ozs7Ozs7OzttQkNqRW1CO0FBMUJuQjtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCRHlHUTtFQ3hHUixZQUFXO0VBQ2IsUUFBUTtFQUNOLGFBQWE7RUFDYiw0QkFBNkI7RUFDN0IsNEJBQTRCO0FBNEJoQztBQXJDQTtFQVdRLDBCQUEyQjtBQThCbkM7QUF6Q0E7RUFjWSxhQUFhO0FBK0J6QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXItbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vLyBDdXN0b20gVmFyaWFibGVzXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwJyk7XHJcblxyXG4vKlRoZW1lIENvbG9ycyovXHJcblxyXG4kdGhlbWVjb2xvcjogIzM1OTFGRjtcclxuJHRoZW1lY29sb3ItZGFyazogIzAyOGVlMTtcclxuJHRoZW1lY29sb3ItYWx0OiAjMjZjNmRhO1xyXG4kdGhlbWUtbGlnaHQ6ICNmZmY7XHJcbiR0aGVtZS1kYXJrOiAjMjEyNTI5O1xyXG4kc2tpbjE6ICMzNTg3ZDg7XHJcbiRza2luMjogI2Q4MzkzOTtcclxuJHNraW4zOiAjMTdhOTkxO1xyXG4kc2tpbjQ6ICM2NjU5Zjc7XHJcbiRza2luNyA6I0VDNzVGNjtcclxuJHNraW41IDojMTcyYjRkO1xyXG47XHJcbiRza2luNjogI2ZmZjtcclxuXHJcbi8qVG9wYmFyIENvbG9ycyovXHJcblxyXG4kdG9wYmFyOiAkdGhlbWUtbGlnaHQ7XHJcbiR0b3BiYXItaGVpZ2h0OiA2NHB4O1xyXG4kdG9wYmFyLW5hdmxpbmstcGFkZGluZzogMHB4IDE1cHg7XHJcbiR0b3BiYXItbmF2bGluay1mb250LXNpemU6IDAuODc1cmVtO1xyXG4kdG9wYmFyLW5hdmxpbmstaGVpZ2h0OiA0NXB4O1xyXG4kdG9wYmFyLW5hdmJyYW5kLXBhZGRpbmc6IDAgMTVweCAwIDE1cHg7XHJcblxyXG4vKlNpZGViYXIgQ29sb3JzKi9cclxuXHJcbiRzaWRlYmFyOiRza2luNSA7XHJcbiRzaWRlYmFyLWFsdDogI2U4ZWZmMDtcclxuJHNpZGViYXItdGV4dDogI2ZmZjtcclxuJHNpZGViYXItaWNvbnM6IHJnYigwLFxyXG4wLFxyXG4wKTtcclxuJHNpZGViYXItdGV4dC1kYXJrOiAjMjEyNTI5O1xyXG4kc2lkZWJhci10ZXh0LWRhcms6ICMyMTI1Mjk7XHJcbiRzaWRlYmFyLWljb25zLWRhcms6ICM0ZjU0Njc7XHJcbiRzaWRlYmFyLXdpZHRoLWZ1bGw6IDI1MHB4O1xyXG4kc2lkZWJhci13aWR0aC1pY29uYmFyOiAxODBweDtcclxuJHNpZGViYXItd2lkdGgtbWluaTogNzBweDtcclxuXHJcbi8qQm94ZWQgbGF5b3V0IHdpZHRoKi9cclxuXHJcbiRib3hlZC13aWR0aDogMTIwMHB4O1xyXG5cclxuLypTaGFkb3cqL1xyXG5cclxuJHNoYWRvdzogMXB4IDBweCAyMHB4IHJnYmEoMCxcclxuMCxcclxuMCxcclxuMC4wOCk7XHJcblxyXG4vKiB0cmFuc2l0aW9ucyAqL1xyXG5cclxuJHRyYW5zaXRpb25zOiAwLjJzIGVhc2UtaW47XHJcblxyXG4vKiBEYXJrIHRyYW5zcGFyZW50IGJnICovXHJcblxyXG4kdHJhbnNwYXJlbnQtZGFyay1iZzogcmdiYSgwLFxyXG4wLFxyXG4wLFxyXG4wLjA1KTtcclxuJGxmdDogbGVmdDtcclxuJHJndDogcmlnaHQ7XHJcbiRjYXJkLWFsdDogI2U0ZTllZjtcclxuJXNxdWFyZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcbiVyb3RhdGU0NSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG5cclxuXHJcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG4vLyBCb290c3RyYXAgb3ZlcnJpZGVzXHJcblxyXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuXHJcbi8qICpcclxuICogVGFibGUgT2YgQ29udGVudFxyXG4gKlxyXG4gKiAgMS4gQ29sb3Igc3lzdGVtXHJcbiAqICAyLiBPcHRpb25zXHJcbiAqICAzLiBCb2R5XHJcbiAqICA0LiBUeXBvZ3JhcGh5XHJcbiAqICA1LiBCcmVhZGNydW1ic1xyXG4gKiAgNi4gQ2FyZHNcclxuICogIDcuIERyb3Bkb3duc1xyXG4gKiAgOC4gQnV0dG9uc1xyXG4gKiAgOS4gVHlwb2dyYXBoeVxyXG4gKiAgMTAuIFByb2dyZXNzIGJhcnNcclxuICogIDExLiBUYWJsZXNcclxuICogIDEyLiBGb3Jtc1xyXG4gKiAgMTQuIENvbXBvbmVudCAqL1xyXG5cclxuLy9Db2xvciBzeXN0ZW1cclxuJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xyXG4kZ3JheS0xMDA6ICNmOGY5ZmEgIWRlZmF1bHQ7XHJcbiRncmF5LTIwMDogI2U5ZWNlZiAhZGVmYXVsdDtcclxuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xyXG4kZ3JheS00MDA6ICNjZWQ0ZGEgIWRlZmF1bHQ7XHJcbiRncmF5LTUwMDogI2ExYWFiMiAhZGVmYXVsdDtcclxuJGdyYXktNjAwOiAjNmM3NTdkICFkZWZhdWx0O1xyXG4kZ3JheS03MDA6ICM0ZjU0NjcgIWRlZmF1bHQ7XHJcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcclxuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xyXG4kYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XHJcbiRibHVlOiAjZmJiMDNiICFkZWZhdWx0O1xyXG4kaW5kaWdvOiAjNjYxMGYyICFkZWZhdWx0O1xyXG4kcHVycGxlOiAjNzQ2MGVlICFkZWZhdWx0O1xyXG4kcGluazogI2U4M2U4YyAhZGVmYXVsdDtcclxuJHJlZDogI2VmNmU2ZSAhZGVmYXVsdDtcclxuJGxpZ2h0LWluZm86ICNlNmYyZmEgIWRlZmF1bHQ7XHJcbiRsaWdodC1kYW5nZXI6ICNmYWU2ZTYgIWRlZmF1bHQ7XHJcbiRsaWdodC1zdWNjZXNzOiAjZTlmOWY3ICFkZWZhdWx0O1xyXG4kbGlnaHQtd2FybmluZzogI2Y4ZWZkNyAhZGVmYXVsdDtcclxuJG9yYW5nZTogI2ZiOGMwMCAhZGVmYXVsdDtcclxuJHllbGxvdzogI2ZmYmMzNCAhZGVmYXVsdDtcclxuJGdyZWVuOiAjMjJjNmFiICFkZWZhdWx0O1xyXG4kZ3JlZW4xOiAjNWFlNTBlICFkZWZhdWx0O1xyXG4kdGVhbDogIzIwYzk5NyAhZGVmYXVsdDtcclxuJGN5YW46ICMwMWMwYzggIWRlZmF1bHQ7XHJcbiRwcmltYXJ5OiMxNzJiNGQgIWRlZmF1bHQ7XHJcbiR0ZXh0LW11dGVkOiAkZ3JheS01MDAgIWRlZmF1bHQ7XHJcbiRZZWxsb3ctR3JlZW46I2NlZGY2YTtcclxuJGNvbG9yczogKCBibHVlOiAkYmx1ZSxcclxuaW5kaWdvOiAkaW5kaWdvLFxyXG5wdXJwbGU6ICRwdXJwbGUsXHJcbnBpbms6ICRwaW5rLFxyXG5yZWQ6ICRyZWQsXHJcbm9yYW5nZTogJG9yYW5nZSxcclxueWVsbG93OiAkeWVsbG93LFxyXG5ncmVlbjogJGdyZWVuLFxyXG50ZWFsOiAkdGVhbCxcclxuY3lhbjogJGN5YW4sXHJcbndoaXRlOiAkd2hpdGUsXHJcbmdyYXk6ICRncmF5LTYwMCxcclxuZ3JheS1kYXJrOiAkZ3JheS04MDAsXHJcbmxpZ2h0LWluZm86ICRsaWdodC1pbmZvLFxyXG5saWdodC1kYW5nZXI6ICRsaWdodC1kYW5nZXIsXHJcbmxpZ2h0LXN1Y2Nlc3M6ICRsaWdodC1zdWNjZXNzLFxyXG5saWdodC13YXJuaW5nOiAkbGlnaHQtd2FybmluZyk7XHJcbiRwcmltYXJ5OiAkYmx1ZSAhZGVmYXVsdDtcclxuJHNlY29uZGFyeTogJGdyYXktNjAwICFkZWZhdWx0O1xyXG4kc3VjY2VzczogJGdyZWVuICFkZWZhdWx0O1xyXG4kaW5mbzogJGJsdWUgIWRlZmF1bHQ7XHJcbiR3YXJuaW5nOiAkeWVsbG93ICFkZWZhdWx0O1xyXG4kZGFuZ2VyOiAkcmVkICFkZWZhdWx0O1xyXG4kbGlnaHQ6ICRncmF5LTEwMCAhZGVmYXVsdDtcclxuJGRhcms6ICRncmF5LTgwMCAhZGVmYXVsdDtcclxuJGN5YW46ICRjeWFuICFkZWZhdWx0O1xyXG4kb3JhbmdlOiAkb3JhbmdlICFkZWZhdWx0O1xyXG4kdGhlbWUtY29sb3JzOiAoKSAhZGVmYXVsdDtcclxuJHRoZW1lLWNvbG9yczogbWFwLW1lcmdlKCAoICdwcmltYXJ5JzogJHByaW1hcnksICdzZWNvbmRhcnknOiAkc2Vjb25kYXJ5LCAnc3VjY2Vzcyc6ICRzdWNjZXNzLCAnaW5mbyc6ICRpbmZvLCAnd2FybmluZyc6ICR3YXJuaW5nLCAnZGFuZ2VyJzogJGRhbmdlciwgJ2xpZ2h0JzogJGxpZ2h0LCAnZGFyayc6ICRkYXJrLCAnY3lhbic6ICRjeWFuLCAnb3JhbmdlJzogJG9yYW5nZSwgJ3B1cnBsZSc6ICRwdXJwbGUsICdsaWdodC1pbmZvJzogJGxpZ2h0LWluZm8sICdsaWdodC1kYW5nZXInOiAkbGlnaHQtZGFuZ2VyLCAnbGlnaHQtc3VjY2Vzcyc6ICRsaWdodC1zdWNjZXNzLCAnbGlnaHQtd2FybmluZyc6ICRsaWdodC13YXJuaW5nKSxcclxuJHRoZW1lLWNvbG9ycyk7XHJcbi8vIFF1aWNrbHkgbW9kaWZ5IGdsb2JhbCBzdHlsaW5nIGJ5IGVuYWJsaW5nIG9yIGRpc2FibGluZyBvcHRpb25hbCBmZWF0dXJlcy5cclxuJGVuYWJsZS1jYXJldDogdHJ1ZSAhZGVmYXVsdDtcclxuJGVuYWJsZS1yb3VuZGVkOiB0cnVlICFkZWZhdWx0O1xyXG4kZW5hYmxlLXNoYWRvd3M6IGZhbHNlICFkZWZhdWx0O1xyXG4kZW5hYmxlLWdyYWRpZW50czogZmFsc2UgIWRlZmF1bHQ7XHJcbiRlbmFibGUtdHJhbnNpdGlvbnM6IHRydWUgIWRlZmF1bHQ7XHJcbiRlbmFibGUtaG92ZXItbWVkaWEtcXVlcnk6IGZhbHNlICFkZWZhdWx0O1xyXG4kZW5hYmxlLWdyaWQtY2xhc3NlczogdHJ1ZSAhZGVmYXVsdDtcclxuJGVuYWJsZS1wcmludC1zdHlsZXM6IHRydWUgIWRlZmF1bHQ7XHJcbi8vIEJvZHlcclxuLy8gU2V0dGluZ3MgZm9yIHRoZSAgZWxlbWVudC5cclxuJG1haW4tYm9keS1iZzogI2ZmZiAhZGVmYXVsdDtcclxuJGJvZHktYmc6ICNmZmY7XHJcbiRib2R5LWNvbG9yOiAjM2U1NTY5ICFkZWZhdWx0O1xyXG4kZ3JpZC1ndXR0ZXItd2lkdGg6IDIwcHggIWRlZmF1bHQ7XHJcbi8vIFR5cG9ncmFwaHlcclxuLy8gRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXHJcbiRmb250LXNpemUtYmFzZTogMC44NzVyZW07XHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAnUG9wcGlucycsXHJcbnNhbnMtc2VyaWYgIWRlZmF1bHQ7XHJcbiRmb250LXdlaWdodC1saWdodDogMzAwICFkZWZhdWx0O1xyXG4kZm9udC13ZWlnaHQtbm9ybWFsOiAzMDAgIWRlZmF1bHQ7XHJcbiRmb250LXdlaWdodC1tZWRpdW06IDUwMCAhZGVmYXVsdDtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDYwMCAhZGVmYXVsdDtcclxuJGgxLWZvbnQtc2l6ZTogMzZweCAhZGVmYXVsdDtcclxuJGgyLWZvbnQtc2l6ZTogMzBweCAhZGVmYXVsdDtcclxuJGgzLWZvbnQtc2l6ZTogMjJweCAhZGVmYXVsdDtcclxuJGg0LWZvbnQtc2l6ZTogMThweCAhZGVmYXVsdDtcclxuJGg1LWZvbnQtc2l6ZTogMTZweCAhZGVmYXVsdDtcclxuJGg2LWZvbnQtc2l6ZTogMTRweCAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206ICgxcmVtIC8gMikgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1mb250LXdlaWdodDogNTAwICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtY29sb3I6IGluaGVyaXQgIWRlZmF1bHQ7XHJcbi8vIEJyZWFkY3J1bWJzXHJcbiRicmVhZGNydW1iLWJnOiAkYm9keS1iZztcclxuJGJyZWFkY3J1bWItbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4vLyBDYXJkc1xyXG4kY2FyZC1ib3JkZXItd2lkdGg6IDFweCAhZGVmYXVsdDtcclxuJGNhcmQtYm9yZGVyLWNvbG9yOiAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbiRjYXJkLWJvcmRlci1yYWRpdXM6IDBweCAhZGVmYXVsdDtcclxuLy8gRHJvcGRvd25zXHJcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteDogMXJlbSAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAwLjY1cmVtICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiAkZ3JheS0yMDA7XHJcbiRkcm9wZG93bi1kaXZpZGVyLWJnOiAkZ3JheS0xMDA7XHJcbi8vIEJ1dHRvbnNcclxuJGJ0bi1zZWNvbmRhcnktYm9yZGVyOiAkZ3JheS0zMDA7XHJcbi8vIFByb2dyZXNzIGJhcnNcclxuJHByb2dyZXNzLWJnOiAkZ3JheS0xMDA7XHJcbi8vIFRhYmxlc1xyXG4kdGFibGUtYmctYWNjZW50OiAkZ3JheS0xMDA7XHJcbiR0YWJsZS1iZy1ob3ZlcjogJGdyYXktMTAwO1xyXG4kdGFibGUtaG92ZXItYmc6ICRncmF5LTEwMCAhZGVmYXVsdDtcclxuJHRhYmxlLWNlbGwtcGFkZGluZzogMXJlbSAhZGVmYXVsdDtcclxuJHRhYmxlLWJnLWxldmVsOiAtMTAgIWRlZmF1bHQ7XHJcbiR0YWJsZS1iZy1sZXZlbDI6IDEgIWRlZmF1bHQ7XHJcbiR0YWJsZS1iZy1sZXZlbDM6IC01ICFkZWZhdWx0O1xyXG4vLyBDb21wb25lbnRzXHJcbiRjb21wb25lbnQtYWN0aXZlLWNvbG9yOiAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRjb21wb25lbnQtYWN0aXZlLWJnOiAkdGhlbWVjb2xvciAhZGVmYXVsdDtcclxuJGJhZGdlLXBpbGwtcGFkZGluZy14OiAwLjJlbSAhZGVmYXVsdDtcclxuJGJhZGdlLXBpbGwtcGFkZGluZy15OiAxZW0gIWRlZmF1bHQ7XHJcbi8vIEZvcm1zXHJcbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogJGdyYXktMTAwO1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkZ3JheS0yMDA7XHJcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICRncmF5LTIwMDtcclxuJGlucHV0LWJ0bi1mb2N1cy1jb2xvcjogcmdiYSgwLFxyXG4wLFxyXG4wLFxyXG4wLjI1KSAhZGVmYXVsdDtcclxuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogcmdiYSgwLFxyXG4wLFxyXG4wLFxyXG4wLjI1KSAhZGVmYXVsdDtcclxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmc6IHJnYmEoMCxcclxuMCxcclxuMCxcclxuMzUlKSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9jdXN0b20tc2VsZWN0LnBuZykgIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJveC1zaGFkb3c6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3I6IHN0ci1yZXBsYWNlKHVybCgnJyksXHJcbiclMjMnKSAhZGVmYXVsdDtcclxuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxyXG4kYm9yZGVyLXdpZHRoOiAxcHggIWRlZmF1bHQ7XHJcbiRib3JkZXItY29sb3I6ICRncmF5LTIwMCAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXM6IDJweCAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtbGc6IDJweCAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtc206IDFweCAhZGVmYXVsdDtcclxuLy8gUHJvZ3Jlc3MgYmFyc1xyXG4kcHJvZ3Jlc3MtaGVpZ2h0OiA1cHggIWRlZmF1bHQ7XHJcbi8vIFRhYnNcclxuJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnOiAkd2hpdGUgIWRlZmF1bHQ7XHJcbi8vIEdyaWQgYnJlYWtwb2ludHNcclxuLy8gRGVmaW5lIHRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXHJcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cclxuJGdyaWQtYnJlYWtwb2ludHM6ICggeHM6IDAsXHJcbnNtOiA1NzZweCxcclxubWQ6IDc2OHB4LFxyXG5sZzogOTkycHgsXHJcbnhsOiAxNjAwcHgpICFkZWZhdWx0O1xyXG4vLyBOYXZiYXJcclxuJG5hdmJhci1kYXJrLWNvbG9yOiByZ2JhKCR3aGl0ZSxcclxuMC44KSAhZGVmYXVsdDtcclxuJG5hdmJhci1kYXJrLWhvdmVyLWNvbG9yOiByZ2JhKCR3aGl0ZSxcclxuMSkgIWRlZmF1bHQ7XHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjMwMCw0MDAsNTAwLDYwMCw3MDBcIik7XG4vKlRoZW1lIENvbG9ycyovXG4vKlRvcGJhciBDb2xvcnMqL1xuLypTaWRlYmFyIENvbG9ycyovXG4vKkJveGVkIGxheW91dCB3aWR0aCovXG4vKlNoYWRvdyovXG4vKiB0cmFuc2l0aW9ucyAqL1xuLyogRGFyayB0cmFuc3BhcmVudCBiZyAqL1xuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4vKiAqXHJcbiAqIFRhYmxlIE9mIENvbnRlbnRcclxuICpcclxuICogIDEuIENvbG9yIHN5c3RlbVxyXG4gKiAgMi4gT3B0aW9uc1xyXG4gKiAgMy4gQm9keVxyXG4gKiAgNC4gVHlwb2dyYXBoeVxyXG4gKiAgNS4gQnJlYWRjcnVtYnNcclxuICogIDYuIENhcmRzXHJcbiAqICA3LiBEcm9wZG93bnNcclxuICogIDguIEJ1dHRvbnNcclxuICogIDkuIFR5cG9ncmFwaHlcclxuICogIDEwLiBQcm9ncmVzcyBiYXJzXHJcbiAqICAxMS4gVGFibGVzXHJcbiAqICAxMi4gRm9ybXNcclxuICogIDE0LiBDb21wb25lbnQgKi9cbi5hc2lkZS1ib3gge1xuICB3aWR0aDogMjc1cHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgei1pbmRleDogOTk5O1xuICByaWdodDogMDtcbiAgcGFkZGluZzogMTBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI4NXB4KTtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmFzaWRlLWJveC5zaWRlYmFyX3NsaWRlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG59XG5cbi5hc2lkZS1ib3ggLm1lc3NhZ2UtY2VudGVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/shared/header-navigation/navigation.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/shared/header-navigation/navigation.component.ts ***!
      \******************************************************************/

    /*! exports provided: NavigationComponent */

    /***/
    function srcAppSharedHeaderNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
        return NavigationComponent;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var NavigationComponent = /*#__PURE__*/function () {
        function NavigationComponent(modalService, router, api, route, toastr) {
          _classCallCheck(this, NavigationComponent);

          this.modalService = modalService;
          this.router = router;
          this.api = api;
          this.route = route;
          this.toastr = toastr;
          this.toggleSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.config = {};
          this.showSearch = false; // This is for Notifications

          this.notifications = [{
            btn: 'btn-danger',
            icon: 'ti-link',
            title: 'Luanch Admin',
            subject: 'Just see the my new admin!',
            time: '9:30 AM'
          }, {
            btn: 'btn-success',
            icon: 'ti-calendar',
            title: 'Event today',
            subject: 'Just a reminder that you have event',
            time: '9:10 AM'
          }, {
            btn: 'btn-info',
            icon: 'ti-settings',
            title: 'Settings',
            subject: 'You can customize this template as you want',
            time: '9:08 AM'
          }, {
            btn: 'btn-primary',
            icon: 'ti-user',
            title: 'Pavan kumar',
            subject: 'Just see the my admin!',
            time: '9:00 AM'
          }]; // This is for Mymessages

          this.mymessages = [{
            useravatar: 'assets/images/users/1.jpg',
            status: 'online',
            from: 'Pavan kumar',
            subject: 'Just see the my admin!',
            time: '9:30 AM'
          }, {
            useravatar: 'assets/images/users/2.jpg',
            status: 'busy',
            from: 'Sonu Nigam',
            subject: 'I have sung a song! See you at',
            time: '9:10 AM'
          }, {
            useravatar: 'assets/images/users/2.jpg',
            status: 'away',
            from: 'Arijit Sinh',
            subject: 'I am a singer!',
            time: '9:08 AM'
          }, {
            useravatar: 'assets/images/users/4.jpg',
            status: 'offline',
            from: 'Pavan kumar',
            subject: 'Just see the my admin!',
            time: '9:00 AM'
          }]; // let data = JSON.parse(sessionStorage.getItem("admin"));
        }

        _createClass(NavigationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getProfile();
          }
        }, {
          key: "addBikeModal",
          value: function addBikeModal(addBike) {
            this.modalService.open(addBike, {
              backdropClass: 'light-blue-backdrop',
              centered: true,
              size: 'lg',
              backdrop: "static"
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "openBox",
          value: function openBox() {
            var element = document.getElementById("notification");
            element.classList.toggle("sidebar_slide");
          }
        }, {
          key: "closeBox",
          value: function closeBox() {
            var element1 = document.getElementById("arrow-close").parentElement;
            element1.classList.remove("sidebar_slide");
          }
        }, {
          key: "getProfile",
          value: function getProfile() {
            var _this2 = this;

            this.api.getProfile().subscribe(function (res) {
              if (res['statusCode'] === 200) {
                _this2.userDetail = res["data"];
              } else {
                _this2.toastr.error(res["response"]["message"]);
              }
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            // const body = {};
            // this.api.logOut(body).subscribe(response => {
            // 	console.log("response: ", response);
            // 	if (response['statusCode'] === 200) {
            localStorage.clear();
            sessionStorage.clear();
            sessionStorage.removeItem('admin');
            localStorage.removeItem('remember');
            this.toastr.success('You have been successfully logged out!');
            this.router.navigate(['/login']); // 		} else {
            // 			localStorage.clear()
            // 			this.router.navigate(['/']);
            // 			this.toastr.error(response['message']);
            // 		}
            // 	})
          }
        }]);

        return NavigationComponent;
      }();

      NavigationComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }];
      };

      NavigationComponent.propDecorators = {
        toggleSidebar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      NavigationComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-navigation',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./navigation.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header-navigation/navigation.component.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./navigation.component.scss */
        "./src/app/shared/header-navigation/navigation.component.scss"))["default"]]
      }), __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])], NavigationComponent);
      /***/
    },

    /***/
    "./src/app/shared/http-interceptor/error.interceptor.ts":
    /*!**************************************************************!*\
      !*** ./src/app/shared/http-interceptor/error.interceptor.ts ***!
      \**************************************************************/

    /*! exports provided: ErrorInterceptor */

    /***/
    function srcAppSharedHttpInterceptorErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

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

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(toaster, router, _mat) {
          _classCallCheck(this, ErrorInterceptor);

          this.toaster = toaster;
          this.router = router;
          this._mat = _mat;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this3 = this;

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
              if (['token_not_provided', 'token_invalid', 'token_expired'].indexOf(err.error.error) >= 0) {
                sessionStorage.removeItem("admin");
                sessionStorage.removeItem("token");

                _this3.router.navigate(['/login']);

                if (_this3._mat.openDialogs) {
                  _this3._mat.closeAll();
                }
              } else if (err.error.msg != undefined) {
                _this3.toaster.error(err.error.msg, 'Oops!');
              } else if (err.error.error != undefined) {
                _this3.toaster.error(err.error.error, 'Oops!');
              } else {
                if (typeof err.error == 'string') {
                  _this3.toaster.error(err.error, 'Oops!');
                }
              }

              var error = err.error.error_description || err.error.message || err.statusText;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.ctorParameters = function () {
        return [{
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }];
      };

      ErrorInterceptor = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])], ErrorInterceptor);
      /***/
    },

    /***/
    "./src/app/shared/http-interceptor/interceptor.ts":
    /*!********************************************************!*\
      !*** ./src/app/shared/http-interceptor/interceptor.ts ***!
      \********************************************************/

    /*! exports provided: JwtInterceptor */

    /***/
    function srcAppSharedHttpInterceptorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return JwtInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var JwtInterceptor = /*#__PURE__*/function () {
        function JwtInterceptor() {
          _classCallCheck(this, JwtInterceptor);
        }

        _createClass(JwtInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var clonedReq = this.handleRequest(request); // this.common.showSpinner();

            return next.handle(clonedReq);
          }
        }, {
          key: "handleRequest",
          value: function handleRequest(request) {
            var token = sessionStorage.getItem("token");
            var authReq;
            authReq = request.clone({
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
                authorization: token ? 'Bearer' + ' ' + token : ""
              })
            });

            if ((request.method.toLowerCase() == "post" || request.method.toLowerCase() == "put") && request.body instanceof FormData) {
              authReq = request.clone({
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                  authorization: token ? 'Bearer' + ' ' + token : ""
                })
              });
            }

            return authReq;
          }
        }]);

        return JwtInterceptor;
      }();

      JwtInterceptor = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], JwtInterceptor);
      /***/
    },

    /***/
    "./src/app/shared/services/api.service.ts":
    /*!************************************************!*\
      !*** ./src/app/shared/services/api.service.ts ***!
      \************************************************/

    /*! exports provided: ApiService */

    /***/
    function srcAppSharedServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts");

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

      var ApiService = /*#__PURE__*/function () {
        function ApiService(http) {
          _classCallCheck(this, ApiService);

          this.http = http;
        }

        _createClass(ApiService, [{
          key: "checkToken",
          value: function checkToken(body) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "checkToken", body);
          }
        }, {
          key: "sendToken",
          value: function sendToken(token) {
            sessionStorage.setItem("token", token);
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return sessionStorage.getItem("token");
          }
        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            return this.getToken() !== null;
          }
        }, {
          key: "logIn",
          value: function logIn(body) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "login", body);
          }
        }, {
          key: "logOut",
          value: function logOut(body) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "logOut", body);
          }
        }, {
          key: "forgotPassword",
          value: function forgotPassword(body) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "forgotPassword", body);
          }
        }, {
          key: "changePassword",
          value: function changePassword(body) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "changePassword", body);
          }
        }, {
          key: "getProfile",
          value: function getProfile() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "getProfile");
          }
        }, {
          key: "updateProfile",
          value: function updateProfile(body) {
            return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "updateProfile", body);
          }
        }, {
          key: "getUser",
          value: function getUser() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "getUser");
          }
        }, {
          key: "getServiceprovider",
          value: function getServiceprovider() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "getServiceprovider");
          }
        }, {
          key: "updateUser",
          value: function updateUser(id) {
            return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "updateProfile", id);
          }
        }]);

        return ApiService;
      }();

      ApiService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      ApiService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], ApiService);
      /***/
    },

    /***/
    "./src/app/shared/sidebar/menu-items.ts":
    /*!**********************************************!*\
      !*** ./src/app/shared/sidebar/menu-items.ts ***!
      \**********************************************/

    /*! exports provided: ROUTES */

    /***/
    function srcAppSharedSidebarMenuItemsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });

      var ROUTES = [// {
      //     path: '',
      //     title: 'Personal',
      //     icon: 'mdi mdi-dots-horizontal',
      //     class: 'nav-small-cap',
      //     extralink: true,
      //     submenu: []
      // },
      {
        path: '',
        title: 'Dashboard',
        icon: 'mdi mdi-view-dashboard',
        "class": '',
        extralink: false,
        submenu: []
      }, {
        path: '/pages/users',
        title: 'Users',
        icon: 'sl-icon-user',
        "class": '',
        extralink: false,
        submenu: []
      }, // {
      //     path: 'pages/vendors',
      //     title: 'Service Provider',
      //     icon: 'icon-Car-Wheel',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '/pages/vendorcategory',
      //     title: 'Categories',
      //     icon: 'fas fa-th',
      //     class: '',
      //     extralink: false,
      //     submenu: [ ]
      // },
      // {
      //     path: '',
      //     title: 'Trucks',
      //     icon: 'icon-Car-Wheel',
      //     class: 'has-arrow',
      //     extralink: false,
      //     submenu: [
      //         {
      //             path: '/pages/trucks',
      //             title: 'Trucks List',
      //             icon: 'mdi mdi-truck',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/pages/truckscategory',
      //             title: 'Category',
      //             icon: 'mdi mdi-truck',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //     ]
      // },
      // {
      //     path: '/pages/drivers',
      //     title: 'Drivers',
      //     icon: 'mdi mdi-truck',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '/pages/foodcategories',
      //     title: 'Food Categories',
      //     icon: 'mdi mdi-bowl',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      //     {
      //       path: '/pages/fooditem',
      //       title: 'Food Items',
      //       icon: 'mdi mdi-bowl',
      //       class: '',
      //       extralink: false,
      //       submenu: []
      //   },
      //  {
      //     path: '/pages/orderlist',
      //     title: 'Order List',
      //     icon: ' far fa-list-alt',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '/pages/banner',
      //     title: 'Banner',
      //     icon: 'far fa-images',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '/pages/Inventory',
      //     title: 'Inventory',
      //     icon: 'mdi mdi-calendar-text',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      //  {
      //     path: '/pages/revenue',
      //     title: 'Revenue',
      //     icon: 'mdi mdi-chart-areaspline',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      {
        path: '/pages/reviews',
        title: 'Reviews',
        icon: 'mdi mdi-account-star-variant',
        "class": '',
        extralink: false,
        submenu: []
      }, {
        path: '/pages/packages',
        title: 'Packages',
        icon: 'fas fa-boxes ',
        "class": '',
        extralink: false,
        submenu: []
      }, // {
      //   path: '',
      //   title: 'Manage Report',
      //   icon: 'mdi mdi-account-alert',
      //   class: '',
      //   extralink: false,
      //   submenu: [
      //     {
      //       path: '/pages/reason',
      //       title: 'Reasons',
      //       icon: '',
      //       class: '',
      //       extralink: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/pages/report',
      //       title: 'Reports',
      //       icon: '',
      //       class: '',
      //       extralink: false,
      //       submenu: []
      //     }
      //   ]
      // },
      {
        path: '/pages/calculator',
        title: 'Manage Credits',
        icon: 'mdi mdi-calculator',
        "class": '',
        extralink: false,
        submenu: []
      }, // {
      //     path: '/pages/rewards',
      //     title: 'Discount',
      //     icon: 'ti-gift',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      {
        path: '/pages/promocode',
        title: 'Gift Card',
        icon: 'fas fa-percent',
        "class": '',
        extralink: false,
        submenu: []
      }, // {
      //     path: '/pages/notification',
      //     title: 'Broadcast Notification',
      //     icon: 'sl-icon-bell',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      {
        path: '/pages/analytics',
        title: 'Analytics',
        icon: 'mdi mdi-chart-arc',
        "class": '',
        extralink: false,
        submenu: []
      }];
      /***/
    },

    /***/
    "./src/app/shared/sidebar/sidebar.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
      \*****************************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function srcAppSharedSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./menu-items */
      "./src/app/shared/sidebar/menu-items.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

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

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent(modalService, router, route) {
          _classCallCheck(this, SidebarComponent);

          this.modalService = modalService;
          this.router = router;
          this.route = route;
          this.showMenu = '';
          this.showSubMenu = '';
        } // this is for the open close


        _createClass(SidebarComponent, [{
          key: "addExpandClass",
          value: function addExpandClass(element) {
            if (element === this.showMenu) {
              this.showMenu = '0';
            } else {
              this.showMenu = element;
            }
          }
        }, {
          key: "addActiveClass",
          value: function addActiveClass(element) {
            if (element === this.showSubMenu) {
              this.showSubMenu = '0';
            } else {
              this.showSubMenu = element;
            }
          } // End open close

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sidebarnavItems = _menu_items__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (sidebarnavItem) {
              return sidebarnavItem;
            });
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      };

      SidebarComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-sidebar',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./sidebar.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html"))["default"]
      }), __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], SidebarComponent);
      /***/
    },

    /***/
    "./src/app/shared/spinner.component.ts":
    /*!*********************************************!*\
      !*** ./src/app/shared/spinner.component.ts ***!
      \*********************************************/

    /*! exports provided: SpinnerComponent */

    /***/
    function srcAppSharedSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
        return SpinnerComponent;
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

      var SpinnerComponent = /*#__PURE__*/function () {
        function SpinnerComponent(router, document) {
          var _this4 = this;

          _classCallCheck(this, SpinnerComponent);

          this.router = router;
          this.document = document;
          this.isSpinnerVisible = true;
          this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
              _this4.isSpinnerVisible = true;
            } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
              _this4.isSpinnerVisible = false;
            }
          }, function () {
            _this4.isSpinnerVisible = false;
          });
        }

        _createClass(SpinnerComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.isSpinnerVisible = false;
          }
        }]);

        return SpinnerComponent;
      }();

      SpinnerComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }];
      };

      SpinnerComponent.propDecorators = {
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      SpinnerComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-spinner',
        template: "<div class=\"preloader\" *ngIf=\"isSpinnerVisible\">\n        <div class=\"spinner\">\n          <div class=\"double-bounce1\"></div>\n          <div class=\"double-bounce2\"></div>\n        </div>\n    </div>",
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
      }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Document])], SpinnerComponent);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        // baseUrl : 'http://dev.webdevelopmentsolution.net:3004/api/v1/admin/',
        apiUrl: 'http://dev.webdevelopmentsolution.net:3004/api/v1/admin/',
        imagesUrl: 'http://dev.webdevelopmentsolution.net:3004/api/v1/admin/'
      };
      /*
       * In development mode, to ignore zone related error stack frames such as
       * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
       * import the following file, but please comment it out in production mode
       * because it will have performance impact when throw error
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\Apptunix\pade_adminpanel\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map