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


      __webpack_exports__["default"] = "<router-outlet>\n    <app-spinner></app-spinner>\n</router-outlet>";
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


      __webpack_exports__["default"] = "<!-- ============================================================== -->\n<!-- Only router without any element -->\n<!-- ============================================================== -->\n<router-outlet></router-outlet>";
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


      __webpack_exports__["default"] = "<!-- ============================================================== -->\n<!-- Main wrapper - style you can find in pages.scss -->\n<!-- ============================================================== -->\n<div id=\"main-wrapper\" data-layout=\"vertical\" data-sidebartype=\"full\" [ngClass]=\"{'show-sidebar': showMobileMenu}\" [dir]=\"options.dir\" [attr.data-theme]=\"options.theme\" [attr.data-layout]=\"options.layout\" [attr.data-sidebartype]=\"options.sidebartype\"\n    [attr.data-sidebar-position]=\"options.sidebarpos\" [attr.data-header-position]=\"options.headerpos\" [attr.data-boxed-layout]=\"options.boxed\">\n    <!-- ============================================================== -->\n    <!-- Topbar header - style you can find in topbar.scss -->\n    <!-- ============================================================== -->\n    <header class=\"topbar\" [attr.data-navbarbg]=\"options.navbarbg\">\n        <nav class=\"d-flex top-navbar navbar-expand-md\" [ngClass]=\"(options.navbarbg=='skin6')?'navbar-light':'navbar-dark'\">\n            <div class=\"navbar-header\" [ngClass]=\"(expandLogo)?'expand-logo':''\" [attr.data-logobg]=\"options.logobg\">\n                <!-- This is for the sidebar toggle which is visible on mobile only -->\n                <a (click)=\"showMobileMenu = !showMobileMenu\" class=\"nav-toggler waves-effect waves-light d-block d-md-none\" href=\"javascript:void(0)\">\n                    <i [ngClass]=\"(showMobileMenu)?'ti-close':'ti-menu'\"></i>\n                </a>\n                <!-- ============================================================== -->\n                <!-- Logo -->\n                <!-- ============================================================== -->\n                <a class=\"navbar-brand mt-2 pb-2\" routerLink=\"javascript:void()\">\n                    <!-- Logo icon -->\n                    <b class=\"logo-icon  mr-0\">\n                        <!--You can put here icon as well // <i class=\"wi wi-sunset\"></i> //-->\n                        <!-- Dark Logo icon -->\n                        <!-- <img src=\"assets/images/logo-icon.svg\" alt=\"homepage\" class=\"dark-logo\" /> -->\n                        <!-- Light Logo icon -->\n                        <img src=\"assets/images/logo-icon.svg\" alt=\"homepage\" class=\"light-logo logo-sidebar img-fluid logo-svg\" />\n                    </b>\n                    <!--End Logo icon -->\n                    <!-- Logo text -->\n\n                    <span class=\"logo-text\">\n                        <!-- dark Logo text -->\n                        <!-- <img src=\"assets/images/logo-text.svg\" alt=\"homepage\" class=\"dark-logo\" /> -->\n\n                        <!-- Light Logo text-->\n\n                        <img src=\"assets/images/logo-text.svg\" class=\"logo-content ml-2\" alt=\"homepage\" />\n                        <!-- <span lass=\"light-logo\">Unicorn Mobility</span> -->\n                    </span>\n                </a>\n                <!-- ============================================================== -->\n                <!-- End Logo -->\n                <!-- ============================================================== -->\n                <!-- ============================================================== -->\n                <!-- Toggle which is visible on mobile only -->\n                <!-- ============================================================== -->\n                <a class=\"topbartoggler d-block d-md-none waves-effect waves-light\" href=\"javascript:void(0)\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\">\n                    <i class=\"ti-more\"></i>\n                </a>\n            </div>\n            <!-- ============================================================== -->\n            <!-- End Logo -->\n            <!-- ============================================================== -->\n            <div class=\"navbar-collapse collapse\" id=\"navbarSupportedContent\" [attr.data-navbarbg]=\"options.navbarbg\" [ngbCollapse]=\"!isCollapsed\">\n                <app-navigation (toggleSidebar)=\"toggleSidebarType()\" class=\"w-100\"></app-navigation>\n            </div>\n        </nav>\n    </header>\n    <!-- ============================================================== -->\n    <!-- Left Sidebar - style you can find in sidebar.scss  -->\n    <!-- ============================================================== -->\n    <aside class=\"left-sidebar sidebar-bg\" [attr.data-sidebarbg]=\"options.sidebarbg\" (mouseover)=\"Logo()\" (mouseout)=\"Logo()\">\n        <!-- Sidebar scroll-->\n        <div class=\"scroll-sidebar\" [perfectScrollbar]=\"config\">\n            <app-sidebar></app-sidebar>\n        </div>\n        <!-- End Sidebar scroll-->\n    </aside>\n    <!-- ============================================================== -->\n    <!-- End Left Sidebar - style you can find in sidebar.scss  -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n    <!-- Page wrapper  -->\n    <!-- ============================================================== -->\n    <div class=\"page-wrapper\">\n        <app-breadcrumb></app-breadcrumb>\n        <!-- ============================================================== -->\n        <!-- Container fluid  -->\n        <!-- ============================================================== -->\n        <div class=\"container-fluid\">\n            <!-- ============================================================== -->\n            <!-- Start Page Content -->\n            <!-- ============================================================== -->\n            <router-outlet></router-outlet>\n            <!-- ============================================================== -->\n            <!-- End Start Page Content -->\n            <!-- ============================================================== -->\n        </div>\n        <!-- ============================================================== -->\n        <!-- End Container fluid  -->\n        <!-- ============================================================== -->\n        <!-- ============================================================== -->\n        <!-- footer -->\n        <!-- ============================================================== -->\n        <footer class=\"footer text-center\">\n            © - 2021 All Rights Reserved by Meetme Ltd\n        </footer>\n        <!-- ============================================================== -->\n        <!-- End footer -->\n        <!-- ============================================================== -->\n    </div>\n    <!-- ============================================================== -->\n    <!-- End Page wrapper  -->\n    <!-- ============================================================== -->\n    <aside class=\"customizer d-none\" [ngClass]=\"{'show-service-panel': showSettings}\">\n        <a href=\"javascript:void(0)\" class=\"service-panel-toggle\" (click)=\"showSettings = !showSettings\">\n            <i class=\"fa fa-spin fa-cog\"></i>\n        </a>\n        <div class=\"customizer-body custom-pills\" [perfectScrollbar]=\"config\">\n            <ngb-tabset type=\"pills\" [justify]=\"tabStatus\">\n                <ngb-tab>\n                    <ng-template ngbTabTitle>\n                        <i class=\"mdi mdi-wrench font-20\"></i>\n                    </ng-template>\n                    <ng-template ngbTabContent>\n                        <div class=\"p-15 border-bottom\">\n                            <!-- Sidebar -->\n                            <h5 class=\"font-medium m-b-20 m-t-10\">Layout Settings</h5>\n                            <div class=\"custom-control custom-checkbox m-t-10\">\n                                <input type=\"checkbox\" class=\"custom-control-input\" name=\"theme-view\" id=\"theme-view\" [attr.checked]=\"(options.theme=='dark') ? 'checked' : null\" (change)=\"options.theme = (options.theme == 'light' ? 'dark' : 'light');\">\n                                <label class=\"custom-control-label\" for=\"theme-view\">Dark Theme</label>\n                            </div>\n                            <div class=\"custom-control custom-checkbox m-t-10\">\n                                <input type=\"checkbox\" class=\"custom-control-input\" name=\"sidebar-position\" id=\"sidebar-position\" [attr.checked]=\"(options.sidebarpos=='fixed') ? 'checked' : null\" (change)=\"options.sidebarpos = (options.sidebarpos == 'fixed' ? 'absolute' : 'fixed');\">\n                                <label class=\"custom-control-label\" for=\"sidebar-position\">Fixed Sidebar</label>\n                            </div>\n                            <div class=\"custom-control custom-checkbox m-t-10\">\n                                <input type=\"checkbox\" class=\"custom-control-input\" name=\"header-position\" id=\"header-position\" [attr.checked]=\"(options.headerpos=='fixed') ? 'checked' : null\" (change)=\"options.headerpos = (options.headerpos == 'fixed' ? 'absolute' : 'fixed');\">\n                                <label class=\"custom-control-label\" for=\"header-position\">Fixed Header</label>\n                            </div>\n                            <div class=\"custom-control custom-checkbox m-t-10\">\n                                <input type=\"checkbox\" class=\"custom-control-input\" name=\"boxed-layout\" id=\"boxed-layout\" [attr.checked]=\"(options.boxed=='boxed') ? 'checked' : null\" (change)=\"options.boxed = (options.boxed == 'full' ? 'boxed' : 'full');\">\n                                <label class=\"custom-control-label\" for=\"boxed-layout\">Boxed Layout</label>\n                            </div>\n                            <div class=\"custom-control custom-checkbox m-t-10\">\n                                <input type=\"checkbox\" class=\"custom-control-input\" name=\"rtl-layout\" id=\"rtl-layout\" [attr.checked]=\"(options.dir=='rtl') ? 'checked' : null\" (change)=\"options.dir = (options.dir == 'rtl' ? 'ltr' : 'rtl');\">\n                                <label class=\"custom-control-label\" for=\"rtl-layout\">RTL</label>\n                            </div>\n                        </div>\n                        <div class=\"p-15 border-bottom\">\n                            <!-- Sidebar -->\n                            <h5 class=\"font-medium m-b-20 m-t-10\">Sidebar Types</h5>\n                            <div class=\"custom-control custom-radio m-t-10\">\n                                <input type=\"radio\" class=\"custom-control-input\" name=\"sidebar\" [(ngModel)]=\"options.sidebartype\" value=\"mini-sidebar\" id=\"minisidebar\" (change)=\"options.sidebartype = 'mini-sidebar'\">\n                                <label class=\"custom-control-label\" for=\"minisidebar\">Mini Sidebar</label>\n                            </div>\n                            <div class=\"custom-control custom-radio m-t-10\">\n                                <input type=\"radio\" class=\"custom-control-input\" name=\"sidebar\" [(ngModel)]=\"options.sidebartype\" value=\"iconbar\" id=\"iconsidebar\" (change)=\"options.sidebartype = 'iconbar'\">\n                                <label class=\"custom-control-label\" for=\"iconsidebar\">Icon Sidebar</label>\n                            </div>\n                            <div class=\"custom-control custom-radio m-t-10\">\n                                <input type=\"radio\" class=\"custom-control-input\" name=\"sidebar\" [(ngModel)]=\"options.sidebartype\" value=\"overlay\" id=\"overlaysidebar\" (change)=\"options.sidebartype = 'overlay'\">\n                                <label class=\"custom-control-label\" for=\"overlaysidebar\">Overlay Sidebar</label>\n                            </div>\n                            <div class=\"custom-control custom-radio m-t-10\">\n                                <input type=\"radio\" class=\"custom-control-input\" name=\"sidebar\" [(ngModel)]=\"options.sidebartype\" value=\"full\" id=\"fullsidebar\" (change)=\"options.sidebartype = 'full'\">\n                                <label class=\"custom-control-label\" for=\"fullsidebar\">Full Sidebar</label>\n                            </div>\n                        </div>\n                        <div class=\"p-15 border-bottom\">\n                            <!-- Logo BG -->\n                            <h5 class=\"font-medium m-b-20 m-t-10\">Logo Backgrounds</h5>\n                            <ul class=\"theme-color\">\n                                <li class=\"theme-item\">\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-logobg=\"skin1\" (click)=\"options.logobg = 'skin1'\"></a>\n                                </li>\n                                <li class=\"theme-item\">\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-logobg=\"skin2\" (click)=\"options.logobg = 'skin2'\"></a>\n                                </li>\n                                <li class=\"theme-item\">\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-logobg=\"skin3\" (click)=\"options.logobg = 'skin3'\"></a>\n                                </li>\n                                <li class=\"theme-item\">\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-logobg=\"skin4\" (click)=\"options.logobg = 'skin4'\"></a>\n                                </li>\n                                <li class=\"theme-item\">\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-logobg=\"skin5\" (click)=\"options.logobg = 'skin5'\"></a>\n                                </li>\n                                <li class=\"theme-item\">\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-logobg=\"skin6\" (click)=\"options.logobg = 'skin6'\"></a>\n                                </li>\n                            </ul>\n                            <!-- Logo BG -->\n                        </div>\n                        <div class=\"p-15 border-bottom\">\n                            <!-- Navbar BG -->\n                            <h5 class=\"font-medium m-b-20 m-t-10\">Navbar Backgrounds</h5>\n                            <ul class=\"theme-color\">\n                                <li class=\"theme-item\">\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-navbarbg=\"skin1\" (click)=\"options.navbarbg = 'skin1'\"></a>\n                                </li>\n                                <li class=\"theme-item\">\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-navbarbg=\"skin2\" (click)=\"options.navbarbg = 'skin2'\"></a>\n                                </li>\n                                <li class=\"theme-item\">\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-navbarbg=\"skin3\" (click)=\"options.navbarbg = 'skin3'\"></a>\n                                </li>\n                                <li class=\"theme-item\">\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-navbarbg=\"skin4\" (click)=\"options.navbarbg = 'skin4'\"></a>\n                                </li>\n                                <li class=\"theme-item\">\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-navbarbg=\"skin5\" (click)=\"options.navbarbg = 'skin5'\"></a>\n                                </li>\n                                <li class=\"theme-item\">\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-navbarbg=\"skin6\" (click)=\"options.navbarbg = 'skin6'\"></a>\n                                </li>\n                            </ul>\n                            <!-- Navbar BG -->\n                        </div>\n                        <div class=\"p-15 border-bottom\">\n                            <!-- Logo BG -->\n                            <h5 class=\"font-medium m-b-20 m-t-10\">Sidebar Backgrounds</h5>\n                            <ul class=\"theme-color\">\n                                <li class=\"theme-item\">\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-sidebarbg=\"skin1\" (click)=\"options.sidebarbg = 'skin1'\"></a>\n                                </li>\n                                <li class=\"theme-item\">\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-sidebarbg=\"skin2\" (click)=\"options.sidebarbg = 'skin2'\"></a>\n                                </li>\n                                <li class=\"theme-item\">\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-sidebarbg=\"skin3\" (click)=\"options.sidebarbg = 'skin3'\"></a>\n                                </li>\n                                <li class=\"theme-item\">\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-sidebarbg=\"skin4\" (click)=\"options.sidebarbg = 'skin4'\"></a>\n                                </li>\n                                <li class=\"theme-item\">\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-sidebarbg=\"skin5\" (click)=\"options.sidebarbg = 'skin5'\"></a>\n                                </li>\n                                <li class=\"theme-item\">\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-sidebarbg=\"skin6\" (click)=\"options.sidebarbg = 'skin6'\"></a>\n                                </li>\n                            </ul>\n                            <!-- Logo BG -->\n                        </div>\n                    </ng-template>\n                </ngb-tab>\n\n            </ngb-tabset>\n        </div>\n    </aside>\n    <div class=\"chat-windows\"></div>\n</div>\n";
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


      __webpack_exports__["default"] = "<!-- ============================================================== -->\n<!-- Bread crumb and right sidebar toggle -->\n<!-- ============================================================== -->\n<!-- <div class=\"page-breadcrumb\">\n    <div class=\"row\">\n        <div class=\"col-5 align-self-center\">\n            <h4 class=\"page-title\">{{pageInfo?.title}}</h4>\n            <div class=\"d-flex align-items-center\">\n\n            </div>\n        </div>\n        <div class=\"col-7 align-self-center\">\n            <div class=\"d-flex no-block justify-content-end align-items-center\">\n                <nav aria-label=\"breadcrumb\">\n                    <ol class=\"breadcrumb\">\n                        <ng-template ngFor let-url [ngForOf]=\"pageInfo?.urls\" let-last=\"last\">\n                            <li class=\"breadcrumb-item\" *ngIf=\"!last\" [routerLink]=\"url.url\">\n                                <a href='javascript:void(0)'>{{url.title}}</a>\n                            </li>\n                            <li class=\"breadcrumb-item active\" *ngIf=\"last\">{{url.title}}</li>\n                        </ng-template>\n                    </ol>\n                </nav>\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- ============================================================== -->\n<!-- End Bread crumb and right sidebar toggle -->\n<!-- ============================================================== -->";
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


      __webpack_exports__["default"] = "<!-- ============================================================== -->\n<!-- toggle and nav items -->\n<!-- ============================================================== -->\n<ul class=\"navbar-nav float-left mr-auto\">\n    <li class=\"nav-item d-none d-md-block\">\n        <a (click)=\"toggleSidebar.emit()\" class=\"nav-link sidebartoggler waves-effect waves-light\" href=\"javascript:void(0)\" data-sidebartype=\"mini-sidebar\">\n            <i class=\"sl-icon-menu font-20\"></i>\n        </a>\n    </li>\n    <!-- ============================================================== -->\n    <!-- mega menu -->\n    <!-- ============================================================== -->\n    <!-- <li class=\"nav-item mega-dropdown\" ngbDropdown [autoClose]=\"false\">\n        <a ngbDropdownToggle class=\"nav-link waves-effect waves-dark\" href=\"javascript:void(0)\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"ti-gift font-20\"></i>\n        </a>\n        <div class=\"\" ngbDropdownMenu>\n            <div class=\"mega-dropdown-menu row\">\n                <div class=\"col-lg-3 col-xlg-2 m-b-30\">\n                    <h5 class=\"m-b-20\">Carousel</h5> -->\n    <!-- CAROUSEL -->\n    <!-- <ngb-carousel>\n                        <ng-template ngbSlide>\n                            <img src=\"assets/images/big/img1.jpg\" class=\"img-fluid\" alt=\"Random first slide\">\n                            <div class=\"carousel-caption\">\n                                <h3 class=\"text-white font-bold\">First slide label</h3>\n                            </div>\n                        </ng-template>\n                        <ng-template ngbSlide>\n                            <img src=\"assets/images/big/img2.jpg\" class=\"img-fluid\" alt=\"Random second slide\">\n                            <div class=\"carousel-caption\">\n                                <h3 class=\"text-white font-bold\">Second slide label</h3>\n                            </div>\n                        </ng-template>\n                        <ng-template ngbSlide>\n                            <img src=\"assets/images/big/img3.jpg\" class=\"img-fluid\" alt=\"Random third slide\">\n                            <div class=\"carousel-caption\">\n                                <h3 class=\"text-white font-bold\">Third slide label</h3>\n                            </div>\n                        </ng-template>\n                    </ngb-carousel> -->\n    <!-- End CAROUSEL\n                </div>\n                <div class=\"col-lg-3 m-b-30\">\n                    <h5 class=\"m-b-20\">Accordion</h5>\n                    <!-- Accordian\n                    <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\" class=\"accordion nav-accordion\">\n                        <ngb-panel title=\"Simple\">\n                            <ng-template ngbPanelContent>\n                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.\n                            </ng-template>\n                        </ngb-panel>\n                        <ngb-panel>\n                            <ng-template ngbPanelTitle>\n                                <span>&#9733;\n                                    <b>Fancy</b> title &#9733;</span>\n                            </ng-template>\n                            <ng-template ngbPanelContent>\n                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.\n                            </ng-template>\n                        </ngb-panel>\n                        <ngb-panel title=\"Disabled\" [disabled]=\"true\">\n                            <ng-template ngbPanelContent>\n                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.\n                            </ng-template>\n                        </ngb-panel>\n                    </ngb-accordion>\n                </div>\n                <div class=\"col-lg-3  m-b-30\">\n                    <h5 class=\"m-b-20\">Contact Us</h5>\n                    <!-- Contact\n                    <form>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" id=\"exampleInputname1\" placeholder=\"Enter Name\"> </div>\n                        <div class=\"form-group\">\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\"> </div>\n                        <div class=\"form-group\">\n                            <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"3\" placeholder=\"Message\"></textarea>\n                        </div>\n                        <button type=\"submit\" class=\"btn btn-info\">Submit</button>\n                    </form>\n                </div>\n                <!-- <div class=\"col-lg-3 col-xlg-4 m-b-30\"> -->\n    <!-- <h5 class=\"m-b-20\">List style</h5> -->\n    <!-- List style -->\n    <!-- <ul class=\"list-style-none\">\n                        <li>\n                            <a href=\"javascript:void(0)\">\n                                <i class=\"fa fa-check text-success\"></i> You can give link</a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\">\n                                <i class=\"fa fa-check text-success\"></i> Give link</a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\">\n                                <i class=\"fa fa-check text-success\"></i> Another Give link</a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\">\n                                <i class=\"fa fa-check text-success\"></i> Forth link</a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\">\n                                <i class=\"fa fa-check text-success\"></i> Another fifth link</a>\n                        </li>\n                    </ul> -->\n    <!-- </div>\n            </div>\n        </div>\n    </li> -->\n    <!-- ============================================================== -->\n    <!-- End mega menu -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n    <!-- Comment -->\n    <!-- ============================================================== -->\n    <!-- <li class=\"nav-item d-none d-md-block\">\n\n        <a href=\"javascript:void(0)\" class=\"nav-link \" (click)=\"openBox()\">\n            <i class=\"ti-bell font-20\"></i>\n            <div class=\"notify\"> <span class=\"heartbit\"></span> <span class=\"point\"></span> </div>\n        </a>\n\n    </li> -->\n    <li class=\"nav-item d-none d-md-block\">\n        <!-- <div class=\"switch-btn m-t-20\">\n            <input type=\"checkbox\" class=\"toggle-switch\" checked>\n        </div>     -->\n\n    </li>\n    <!-- <li class=\"nav-item\" ngbDropdown>\n\n        <a ngbDropdownToggle class=\"nav-link waves-effect waves-dark\" href=\"javascript:void(0)\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\n            <i class=\"ti-bell font-20\"></i>\n            <div class=\"notify\"> <span class=\"heartbit\"></span> <span class=\"point\"></span> </div>\n        </a>\n        <div class=\"mailbox\" ngbDropdownMenu>\n            <span class=\"with-arrow\">\n                <span class=\"bg-primary\"></span>\n            </span>\n\n        </div>\n    </li> -->\n    <!-- <div class=\"notify\">\n        <ng-template #addBike let-modal>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n            <div class=\"modal-body\">\n                <div class=\"drop-title bg-primary text-white\">\n                    <span class=\"font-light\">Notifications</span>\n                </div>\n                <div class=\"message-center notifications\" [perfectScrollbar]=\"config\">\n                    <a href=\"javascript:void(0)\" class=\"message-item\" *ngFor=\"let notification of notifications\">\n                        <span class=\"btn btn-circle {{notification.btn}}\">\n                 <i class=\"{{notification.icon}}\"></i>\n             </span>\n                        <span class=\"mail-contnet\">\n                 <h5 class=\"message-title\">Bike Booked</h5>\n                 <span class=\"mail-desc\">Bike ID : <span> #4626462 </span> is booked </span>\n                        <span class=\"time\"> 10:30 AM </span>\n                        </span>\n                    </a>\n                </div>\n            </div>\n        </ng-template>\n    </div> -->\n    <!-- ============================================================== -->\n    <!-- End Comment -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n    <!-- Messages -->\n    <!-- ============================================================== -->\n    <!-- <li class=\"nav-item\" ngbDropdown>\n        <a ngbDropdownToggle class=\"nav-link waves-effect waves-dark\" href=\"javascript:void(0)\" id=\"2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"font-20 ti-email\"></i>\n\n        </a>\n        <div class=\"mailbox\" aria-labelledby=\"2\" ngbDropdownMenu>\n            <span class=\"with-arrow\">\n                <span class=\"bg-danger\"></span>\n            </span>\n            <ul class=\"list-style-none\">\n                <li>\n                    <div class=\"drop-title bg-danger text-white\">\n                        <h4 class=\"m-b-0 m-t-5\">5 New</h4>\n                        <span class=\"font-light\">Messages</span>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"message-center message-body\" [perfectScrollbar]=\"config\"> -->\n    <!-- Message -->\n    <!-- <a href=\"javascript:void(0)\" class=\"message-item\" *ngFor=\"let mymessage of mymessages\">\n                            <span class=\"user-img\">\n                                <img src=\"{{mymessage.useravatar}}\" alt=\"user\" class=\"rounded-circle\">\n                                <span class=\"profile-status {{mymessage.status}} pull-right\"></span>\n                            </span>\n                            <span class=\"mail-contnet\">\n                                <h5 class=\"message-title\">{{mymessage.from}}</h5>\n                                <span class=\"mail-desc\">{{mymessage.subject}}</span>\n                                <span class=\"time\">{{mymessage.time}}</span>\n                            </span>\n                        </a>\n                    </div>\n                </li>\n                <li>\n                    <a class=\"nav-link text-center link\" href=\"javascript:void(0);\">\n                        <b>See all e-Mails</b>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </li> -->\n    <!-- ============================================================== -->\n    <!-- End Messages -->\n    <!-- ============================================================== -->\n\n\n</ul>\n<!-- ============================================================== -->\n<!-- Right side toggle and nav items -->\n<!-- ============================================================== -->\n<ul class=\"navbar-nav float-right\">\n    <!-- ============================================================== -->\n    <!-- Search -->\n    <!-- ============================================================== -->\n    <!-- <li class=\"nav-item search-box\">\n        <a (click)=\"showSearch = !showSearch\" class=\"nav-link waves-effect waves-dark\" href=\"javascript:void(0)\">\n            <i class=\"ti-search\"></i>\n        </a>\n        <form class=\"app-search position-absolute\" [ngClass]=\"{'show-search': showSearch}\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search &amp; enter\">\n            <a class=\"srh-btn\" (click)=\"showSearch = !showSearch\">\n                <i class=\"ti-close font-16\"></i>\n            </a>\n        </form>\n    </li> -->\n    <!-- <li class=\"nav-item pt-4 pb-2\">\n        <a class=\"\" href=\"javascript:void()\">\n            <i class=\"fa fa-power-off m-r-5 m-l-5\"></i> Logout</a>\n    </li> -->\n    <!-- ============================================================== -->\n    <!-- create new -->\n    <!-- ============================================================== -->\n    <!-- <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n        <a ngbDropdownToggle class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdown2\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n            aria-expanded=\"false\">\n            <i class=\"flag-icon flag-icon-us font-18\"></i>\n        </a>\n        <div class=\"dropdown-menu-right\" aria-labelledby=\"navbarDropdown2\" ngbDropdownMenu>\n            <a class=\"dropdown-item\" href=\"#\">\n                <i class=\"flag-icon flag-icon-us\"></i> English</a>\n            <a class=\"dropdown-item\" href=\"#\">\n                <i class=\"flag-icon flag-icon-fr\"></i> French</a>\n            <a class=\"dropdown-item\" href=\"#\">\n                <i class=\"flag-icon flag-icon-es\"></i> Spanish</a>\n            <a class=\"dropdown-item\" href=\"#\">\n                <i class=\"flag-icon flag-icon-de\"></i> German</a>\n        </div>\n    </li> -->\n\n    <!-- ============================================================== -->\n    <!-- User profile and search -->\n    <!-- ============================================================== -->\n    <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\" *ngIf=\"userDetail\">\n        <a ngbDropdownToggle class=\"nav-link text-muted waves-effect waves-dark pro-pic\" href=\"javascript:void(0)\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <img *ngIf=\"!userImage\" src=\"assets/images/users/1.jpg\" alt=\"user\" class=\"rounded-circle\" height=\"31\" width=\"31\">\n            <img *ngIf=\"userImage\" [src]=\"userImage\" alt=\"user\" class=\"rounded-circle\" height=\"31\" width=\"31\">\n        </a>\n        <div class=\"dropdown-menu-right user-dd\" ngbDropdownMenu>\n            <span class=\"with-arrow\">\n                <span class=\"bg-primary\"></span>\n            </span>\n            <div class=\"d-flex no-block align-items-center p-15 bg-primary text-white m-b-10\">\n                <div class=\"\">\n                    <img *ngIf=\"!userImage\" src=\"assets/images/users/1.jpg\" alt=\"user\" class=\"img-circle\" width=\"60\">\n                    <img *ngIf=\"userImage\" [src]=\"userImage\" alt=\"user\" class=\"img-circle\" width=\"60\">\n                </div>\n                <!-- <div class=\"\" *ngIf=\"userDetail.image\">\n                </div> -->\n                <div class=\"m-l-10\">\n                    <h4 class=\"m-b-0\">{{userDetail.fullName ? userDetail.fullName : 'Admin Pade'}}</h4>\n                    <p class=\" m-b-0\">{{userDetail.email ? userDetail.email : 'adminpade@yopmail.com'}}</p>\n                </div>\n            </div>\n            <!-- <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                <i class=\"fas fa-cog m-r-5 m-l-5\"></i> Setting</a> -->\n\n            <a class=\"dropdown-item\" routerLink=\"pages/profile\">\n                <i class=\"ti-user m-r-5 m-l-5\"></i> My Profile</a>\n\n            <!-- <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                <i class=\"ti-email m-r-5 m-l-5\"></i> Inbox</a>\n            <div class=\"dropdown-divider\"></div> -->\n            <a class=\"dropdown-item\" routerLink=\"/changepassword\">\n                <i class=\" fas fa-lock m-r-5 m-l-5\"></i> Change Password</a>\n            <!-- <div class=\"dropdown-divider\"></div> -->\n            <a class=\"dropdown-item\" (click)=\"logout()\" style=\"cursor: pointer;\">\n                <i class=\"fa fa-power-off m-r-5 m-l-5\" ></i> Logout</a>\n            <!-- <div class=\"dropdown-divider\"></div> -->\n            <!-- <div class=\"p-l-30 p-10\">\n                <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-success btn-rounded\">View Profile</a>\n            </div> -->\n        </div>\n    </li>\n    <!-- ============================================================== -->\n    <!-- User profile and search -->\n    <!-- ============================================================== -->\n</ul>\n<!-- <aside id=\"notification\" class=\"aside-box mailbox shadow\">\n    <a href=\"javascript:void(0)\" id=\"arrow-close\" (click)=\"closeBox()\"><i class=\"mdi mdi-close font-20\" ></i></a>\n    <ul class=\"list-style-none\">\n        <li>\n            <div class=\"drop-title bg-primary text-white\">\n                <h4 class=\"m-b-0 m-t-5\">4 New</h4>\n                <span class=\"font-light\">Notifications</span>\n            </div>\n        </li>\n        <li>\n            <div class=\"message-center notifications\" [perfectScrollbar]=\"config\">\n                 <a href=\"javascript:void(0)\" class=\"message-item\" *ngFor=\"let notification of notifications\">\n                    <span class=\"btn btn-circle {{notification.btn}}\">\n                        <i class=\"{{notification.icon}}\"></i>\n                    </span>\n                    <span class=\"mail-contnet\">\n                        <h5 class=\"message-title\">{{notification.title}}</h5>\n                        <span class=\"mail-desc\">{{notification.subject}}</span>\n                        <span class=\"time\">{{notification.time}}</span>\n                    </span>\n                </a>\n            </div>\n            <div class=\"message-center notifications pb-5\" [perfectScrollbar]=\"config\">\n                <a href=\"javascript:void(0)\" class=\"message-item\" *ngFor=\"let notification of notifications\">\n                    <span class=\"btn btn-circle {{notification.btn}}\">\n                     <i class=\"{{notification.icon}}\"></i>\n                 </span>\n                    <span class=\"mail-contnet\">\n                     <h5 class=\"message-title\">Bike Booked</h5>\n                     <span class=\"mail-desc\">Bike ID : <span> #4626462 </span> is booked </span>\n                    <span class=\"time\"> 10:30 AM </span>\n                    </span>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"message-item\" *ngFor=\"let notification of notifications\">\n                    <span class=\"btn btn-circle {{notification.btn}}\">\n                     <i class=\"{{notification.icon}}\"></i>\n                 </span>\n                    <span class=\"mail-contnet\">\n                     <h5 class=\"message-title\">Bike Booked</h5>\n                     <span class=\"mail-desc\">Bike ID : <span> #4626462 </span> is booked </span>\n                    <span class=\"time\"> 10:30 AM </span>\n                    </span>\n                </a>\n            </div>\n        </li>\n        <li>\n            <a class=\"nav-link text-center m-b-5\" href=\"javascript:void(0);\" (click)=\"addBikeModal(addBike)\">\n                <strong>Check all notifications </strong>\n                <i class=\"fa fa-angle-right\"></i>\n            </a>\n        </li>\n    </ul>\n</aside> -->\n";
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


      __webpack_exports__["default"] = "<nav class=\"sidebar-nav pt-3\">\n    <ul id=\"sidebarnav\">\n        <!-- User Profile-->\n        <li>\n            <!-- User Profile-->\n            <div class=\"user-profile m-t-20 \" ngbDropdown>\n                <!-- <div class=\"user-pic\">\n                    <img src=\"assets/images/users/1.jpg\" alt=\"users\" class=\"rounded-circle img-fluid\" />\n                </div> -->\n                <div class=\"user-content hide-menu m-t-10\">\n                    <!-- <h5 class=\"m-b-10 user-name font-medium\">Steave Jobs</h5> -->\n                     <!-- <a ngbDropdownToggle href=\"javascript:void(0)\" class=\"btn btn-circle btn-sm m-r-5\" id=\"Userdd\" role=\"button\" data-toggle=\"dropdown\"\n                        aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"ti-settings\"></i>\n                    </a>  -->\n                    <!-- <a routerLink=\"/login\" title=\"Logout\" class=\"btn btn-circle btn-sm\">\n                        <i class=\"ti-power-off\"></i>\n                    </a>  -->\n                     <div class=\"animated flipInY\" aria-labelledby=\"Userdd\" ngbDropdownMenu>\n                         <a class=\"dropdown-item\" routerLink=\"pages/profile\">\n                            <i class=\"ti-user m-r-5 m-l-5\"></i> My Profile</a>\n                        <!-- <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                            <i class=\"ti-wallet m-r-5 m-l-5\"></i> My Balance</a> -->\n                        <!-- <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                            <i class=\"ti-email m-r-5 m-l-5\"></i> Inbox</a> - -->\n                        <div class=\"dropdown-divider\"></div>\n                        <!-- <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                            <i class=\"ti-settings m-r-5 m-l-5\"></i> Account Setting</a> -->\n                        <!-- <div class=\"dropdown-divider\"></div> -->\n                        <a class=\"dropdown-item\" routerLink=\"/login\">\n                            <i class=\"fa fa-power-off m-r-5 m-l-5\"></i> Logout</a>\n                    </div>\n                </div>\n            </div>\n            <!-- End User Profile-->\n        </li>        <!-- First level menu -->\n        <li class=\"sidebar-item\" [class.selected]=\"showMenu === sidebarnavItem.title\" *ngFor=\"let sidebarnavItem of sidebarnavItems\"\n            [routerLinkActive]=\"sidebarnavItem.submenu.length != 0 ? '' : 'active'\">\n            <div class=\"nav-small-cap\" *ngIf=\"sidebarnavItem.extralink === true\">\n                <i [ngClass]=\"[sidebarnavItem.icon]\"></i>\n                <span class=\"hide-menu \">{{sidebarnavItem.title}}</span>\n            </div>\n            <a class=\"sidebar-link waves-effect waves-dark\" [routerLink]=\"sidebarnavItem.class === '' ? [sidebarnavItem.path] : null\"\n                [ngClass]=\"[sidebarnavItem.class]\" *ngIf=\"!sidebarnavItem.extralink;\" (click)=\"addExpandClass(sidebarnavItem.title)\"\n                [routerLinkActive]=\"sidebarnavItem.submenu.length != 0 ? '' : 'active'\">\n                <i [ngClass]=\"[sidebarnavItem.icon]\"></i>\n                <span class=\"hide-menu\">{{sidebarnavItem.title}}</span>\n            </a>\n            <!-- Second level menu -->\n            <ul aria-expanded=\"false\" class=\"collapse first-level\" *ngIf=\"sidebarnavItem.submenu.length > 0\" [ngClass]=\"{'in' : showMenu === sidebarnavItem.title }\">\n                <li class=\"sidebar-item\" *ngFor=\"let sidebarnavSubItem of sidebarnavItem.submenu\" [class.active]=\"showSubMenu === sidebarnavSubItem.title\"\n                    [routerLinkActive]=\"sidebarnavSubItem.submenu.length > 0 ? '' : 'active'\">\n                    <a class=\"sidebar-link\" [routerLink]=\"sidebarnavSubItem.submenu.length > 0 ? null : [sidebarnavSubItem.path]\" [routerLinkActive]=\"sidebarnavSubItem.submenu.length > 0 ? '' : 'router-link-active'\"\n                        [ngClass]=\"[sidebarnavSubItem.class]\" *ngIf=\"!sidebarnavSubItem.extralink;\" (click)=\"addActiveClass(sidebarnavSubItem.title)\">\n                        <i [ngClass]=\"[sidebarnavSubItem.icon]\"></i>\n                        <span class=\"hide-menu\">{{sidebarnavSubItem.title}}</span>\n                    </a>\n                    <!-- Third level menu -->\n                    <ul aria-expanded=\"false\" class=\"collapse second-level\" *ngIf=\"sidebarnavSubItem.submenu.length > 0\" [ngClass]=\"{'in' : showSubMenu === sidebarnavSubItem.title }\">\n                        <li class=\"sidebar-item\" *ngFor=\"let sidebarnavSubsubItem of sidebarnavSubItem.submenu\" routerLinkActive=\"active\" [ngClass]=\"[sidebarnavSubsubItem.class]\">\n                            <a class=\"sidebar-link\" [routerLink]=\"[sidebarnavSubsubItem.path]\" *ngIf=\"!sidebarnavSubsubItem.extralink;\" [routerLinkActive]=\"sidebarnavSubsubItem.submenu.length > 0 ? '' : 'router-link-active'\">\n                                <i [ngClass]=\"[sidebarnavSubsubItem.icon]\"></i>\n                                <span class=\"hide-menu\">{{sidebarnavSubsubItem.title}}</span>\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        </li>\n    </ul>\n</nav>";
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
            return Promise.all(
            /*! import() | authentication-authentication-module */
            [__webpack_require__.e("default~authentication-authentication-module~pages-pages-module"), __webpack_require__.e("authentication-authentication-module")]).then(__webpack_require__.bind(null,
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
            [__webpack_require__.e("default~charts-charts-module~dashboards-dashboard-module~pages-pages-module"), __webpack_require__.e("default~apps-apps-module~dashboards-dashboard-module~pages-pages-module"), __webpack_require__.e("default~dashboards-dashboard-module~pages-pages-module~table-tables-module"), __webpack_require__.e("default~authentication-authentication-module~pages-pages-module"), __webpack_require__.e("default~apps-apps-module~pages-pages-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-pages-module")]).then(__webpack_require__.bind(null,
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
            return Promise.all(
            /*! import() | authentication-authentication-module */
            [__webpack_require__.e("default~authentication-authentication-module~pages-pages-module"), __webpack_require__.e("authentication-authentication-module")]).then(__webpack_require__.bind(null,
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


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var _shared_services_spinner_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./shared/services/spinner.service */
      "./src/app/shared/services/spinner.service.ts");
      /* harmony import */


      var _app_shared_http_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../app/shared/http-interceptor/interceptor */
      "./src/app/shared/http-interceptor/interceptor.ts");
      /* harmony import */


      var _app_shared_http_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../app/shared/http-interceptor/error.interceptor */
      "./src/app/shared/http-interceptor/error.interceptor.ts");

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
        }), _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"]],
        providers: [_shared_services_spinner_service__WEBPACK_IMPORTED_MODULE_24__["NgxSpinnerService"], {
          provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__["PERFECT_SCROLLBAR_CONFIG"],
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }, {
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"]
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
          useClass: _app_shared_http_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_25__["JwtInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
          useClass: _app_shared_http_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_26__["ErrorInterceptor"],
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


      __webpack_exports__["default"] = ".logo-svg {\n  width: 40px;\n  height: 40px;\n  margin: 10px 0px;\n}\n\n.logo-content {\n  width: 90px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9mdWxsL2Z1bGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtBQUN4Qjs7QUFLSTtFQUNJLFdBQVc7QUFGbkIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL2Z1bGwvZnVsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAubG9nby1zdmcge1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAvLyAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIC8vICAgICAuc3Qwe2ZpbGw6I0ZCQjAzQjtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIC5sb2dvLWNvbnRlbnQge1xuICAgICAgICB3aWR0aDogOTBweDtcbiAgICB9XG4iXX0= */";
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


      __webpack_exports__["default"] = "\n@import url(\"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\");\n/*******************************/\n/*******************************/\n/*Theme Colors*/\n/*Topbar Colors*/\n/*Sidebar Colors*/\n/*Boxed layout width*/\n/*Shadow*/\n/* transitions */\n/* Dark transparent bg */\n/* ***************************** */\n/* ***************************** */\n/* *\n * Table Of Content\n *\n *  1. Color system\n *  2. Options\n *  3. Body\n *  4. Typography\n *  5. Breadcrumbs\n *  6. Cards\n *  7. Dropdowns\n *  8. Buttons\n *  9. Typography\n *  10. Progress bars\n *  11. Tables\n *  12. Forms\n *  14. Component */\n.aside-box {\n  width: 275px;\n  height: 100vh;\n  position: absolute;\n  background-color: #fff;\n  z-index: 999;\n  right: 0;\n  padding: 10px;\n  transform: translateX(285px);\n  transition: 0.3s ease-in-out;\n}\n.aside-box.sidebar_slide {\n  transform: translateX(0px);\n}\n.aside-box .message-center {\n  height: 100vh;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy92YXJpYWJsZS5zY3NzIiwic3JjL2FwcC9zaGFyZWQvaGVhZGVyLW5hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBTUEsa0ZBQVk7QUFOWixnQ0FBQTtBQUlBLGdDQUFBO0FBSUEsZUFBQTtBQWdCQSxnQkFBQTtBQVNBLGlCQUFBO0FBZUEscUJBQUE7QUFJQSxTQUFBO0FBT0EsZ0JBQUE7QUFJQSx3QkFBQTtBQXNCQSxrQ0FBQTtBQUlBLGtDQUFBO0FBR0E7Ozs7Ozs7Ozs7Ozs7OzttQkNqRW1CO0FBMUJuQjtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCRHlHUTtFQ3hHUixZQUFXO0VBQ2IsUUFBUTtFQUNOLGFBQWE7RUFDYiw0QkFBNkI7RUFDN0IsNEJBQTRCO0FBNEJoQztBQXJDQTtFQVdRLDBCQUEyQjtBQThCbkM7QUF6Q0E7RUFjWSxhQUFhO0FBK0J6QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXItbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIEN1c3RvbSBWYXJpYWJsZXNcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwJyk7XG5cbi8qVGhlbWUgQ29sb3JzKi9cblxuJHRoZW1lY29sb3I6ICMzNTkxRkY7XG4kdGhlbWVjb2xvci1kYXJrOiAjMDI4ZWUxO1xuJHRoZW1lY29sb3ItYWx0OiAjMjZjNmRhO1xuJHRoZW1lLWxpZ2h0OiAjZmZmO1xuJHRoZW1lLWRhcms6ICMyMTI1Mjk7XG4kc2tpbjE6ICMzNTg3ZDg7XG4kc2tpbjI6ICNkODM5Mzk7XG4kc2tpbjM6ICMxN2E5OTE7XG4kc2tpbjQ6ICM2NjU5Zjc7XG4kc2tpbjcgOiNFQzc1RjY7XG4kc2tpbjUgOiMxNzJiNGQ7XG47XG4kc2tpbjY6ICNmZmY7XG5cbi8qVG9wYmFyIENvbG9ycyovXG5cbiR0b3BiYXI6ICR0aGVtZS1saWdodDtcbiR0b3BiYXItaGVpZ2h0OiA2NHB4O1xuJHRvcGJhci1uYXZsaW5rLXBhZGRpbmc6IDBweCAxNXB4O1xuJHRvcGJhci1uYXZsaW5rLWZvbnQtc2l6ZTogMC44NzVyZW07XG4kdG9wYmFyLW5hdmxpbmstaGVpZ2h0OiA0NXB4O1xuJHRvcGJhci1uYXZicmFuZC1wYWRkaW5nOiAwIDE1cHggMCAxNXB4O1xuXG4vKlNpZGViYXIgQ29sb3JzKi9cblxuJHNpZGViYXI6JHNraW41IDtcbiRzaWRlYmFyLWFsdDogI2U4ZWZmMDtcbiRzaWRlYmFyLXRleHQ6ICNmZmY7XG4kc2lkZWJhci1pY29uczogcmdiKDAsXG4wLFxuMCk7XG4kc2lkZWJhci10ZXh0LWRhcms6ICMyMTI1Mjk7XG4kc2lkZWJhci10ZXh0LWRhcms6ICMyMTI1Mjk7XG4kc2lkZWJhci1pY29ucy1kYXJrOiAjNGY1NDY3O1xuJHNpZGViYXItd2lkdGgtZnVsbDogMjUwcHg7XG4kc2lkZWJhci13aWR0aC1pY29uYmFyOiAxODBweDtcbiRzaWRlYmFyLXdpZHRoLW1pbmk6IDcwcHg7XG5cbi8qQm94ZWQgbGF5b3V0IHdpZHRoKi9cblxuJGJveGVkLXdpZHRoOiAxMjAwcHg7XG5cbi8qU2hhZG93Ki9cblxuJHNoYWRvdzogMXB4IDBweCAyMHB4IHJnYmEoMCxcbjAsXG4wLFxuMC4wOCk7XG5cbi8qIHRyYW5zaXRpb25zICovXG5cbiR0cmFuc2l0aW9uczogMC4ycyBlYXNlLWluO1xuXG4vKiBEYXJrIHRyYW5zcGFyZW50IGJnICovXG5cbiR0cmFuc3BhcmVudC1kYXJrLWJnOiByZ2JhKDAsXG4wLFxuMCxcbjAuMDUpO1xuJGxmdDogbGVmdDtcbiRyZ3Q6IHJpZ2h0O1xuJGNhcmQtYWx0OiAjZTRlOWVmO1xuJXNxdWFyZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4lcm90YXRlNDUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG4vLyBCb290c3RyYXAgb3ZlcnJpZGVzXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cblxuLyogKlxuICogVGFibGUgT2YgQ29udGVudFxuICpcbiAqICAxLiBDb2xvciBzeXN0ZW1cbiAqICAyLiBPcHRpb25zXG4gKiAgMy4gQm9keVxuICogIDQuIFR5cG9ncmFwaHlcbiAqICA1LiBCcmVhZGNydW1ic1xuICogIDYuIENhcmRzXG4gKiAgNy4gRHJvcGRvd25zXG4gKiAgOC4gQnV0dG9uc1xuICogIDkuIFR5cG9ncmFwaHlcbiAqICAxMC4gUHJvZ3Jlc3MgYmFyc1xuICogIDExLiBUYWJsZXNcbiAqICAxMi4gRm9ybXNcbiAqICAxNC4gQ29tcG9uZW50ICovXG5cbi8vQ29sb3Igc3lzdGVtXG4kd2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kZ3JheS0xMDA6ICNmOGY5ZmEgIWRlZmF1bHQ7XG4kZ3JheS0yMDA6ICNlOWVjZWYgIWRlZmF1bHQ7XG4kZ3JheS0zMDA6ICNkZWUyZTYgIWRlZmF1bHQ7XG4kZ3JheS00MDA6ICNjZWQ0ZGEgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICNhMWFhYjIgIWRlZmF1bHQ7XG4kZ3JheS02MDA6ICM2Yzc1N2QgIWRlZmF1bHQ7XG4kZ3JheS03MDA6ICM0ZjU0NjcgIWRlZmF1bHQ7XG4kZ3JheS04MDA6ICMzNDNhNDAgIWRlZmF1bHQ7XG4kZ3JheS05MDA6ICMyMTI1MjkgIWRlZmF1bHQ7XG4kYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XG4kYmx1ZTogI2ZiYjAzYiAhZGVmYXVsdDtcbiRpbmRpZ286ICM2NjEwZjIgIWRlZmF1bHQ7XG4kcHVycGxlOiAjNzQ2MGVlICFkZWZhdWx0O1xuJHBpbms6ICNlODNlOGMgIWRlZmF1bHQ7XG4kcmVkOiAjZWY2ZTZlICFkZWZhdWx0O1xuJGxpZ2h0LWluZm86ICNlNmYyZmEgIWRlZmF1bHQ7XG4kbGlnaHQtZGFuZ2VyOiAjZmFlNmU2ICFkZWZhdWx0O1xuJGxpZ2h0LXN1Y2Nlc3M6ICNlOWY5ZjcgIWRlZmF1bHQ7XG4kbGlnaHQtd2FybmluZzogI2Y4ZWZkNyAhZGVmYXVsdDtcbiRvcmFuZ2U6ICNmYjhjMDAgIWRlZmF1bHQ7XG4keWVsbG93OiAjZmZiYzM0ICFkZWZhdWx0O1xuJGdyZWVuOiAjMjJjNmFiICFkZWZhdWx0O1xuJGdyZWVuMTogIzVhZTUwZSAhZGVmYXVsdDtcbiR0ZWFsOiAjMjBjOTk3ICFkZWZhdWx0O1xuJGN5YW46ICMwMWMwYzggIWRlZmF1bHQ7XG4kcHJpbWFyeTojMTcyYjRkICFkZWZhdWx0O1xuJHRleHQtbXV0ZWQ6ICRncmF5LTUwMCAhZGVmYXVsdDtcbiRZZWxsb3ctR3JlZW46I2NlZGY2YTtcbiRjb2xvcnM6ICggYmx1ZTogJGJsdWUsXG5pbmRpZ286ICRpbmRpZ28sXG5wdXJwbGU6ICRwdXJwbGUsXG5waW5rOiAkcGluayxcbnJlZDogJHJlZCxcbm9yYW5nZTogJG9yYW5nZSxcbnllbGxvdzogJHllbGxvdyxcbmdyZWVuOiAkZ3JlZW4sXG50ZWFsOiAkdGVhbCxcbmN5YW46ICRjeWFuLFxud2hpdGU6ICR3aGl0ZSxcbmdyYXk6ICRncmF5LTYwMCxcbmdyYXktZGFyazogJGdyYXktODAwLFxubGlnaHQtaW5mbzogJGxpZ2h0LWluZm8sXG5saWdodC1kYW5nZXI6ICRsaWdodC1kYW5nZXIsXG5saWdodC1zdWNjZXNzOiAkbGlnaHQtc3VjY2VzcyxcbmxpZ2h0LXdhcm5pbmc6ICRsaWdodC13YXJuaW5nKTtcbiRwcmltYXJ5OiAkYmx1ZSAhZGVmYXVsdDtcbiRzZWNvbmRhcnk6ICRncmF5LTYwMCAhZGVmYXVsdDtcbiRzdWNjZXNzOiAkZ3JlZW4gIWRlZmF1bHQ7XG4kaW5mbzogJGJsdWUgIWRlZmF1bHQ7XG4kd2FybmluZzogJHllbGxvdyAhZGVmYXVsdDtcbiRkYW5nZXI6ICRyZWQgIWRlZmF1bHQ7XG4kbGlnaHQ6ICRncmF5LTEwMCAhZGVmYXVsdDtcbiRkYXJrOiAkZ3JheS04MDAgIWRlZmF1bHQ7XG4kY3lhbjogJGN5YW4gIWRlZmF1bHQ7XG4kb3JhbmdlOiAkb3JhbmdlICFkZWZhdWx0O1xuJHRoZW1lLWNvbG9yczogKCkgIWRlZmF1bHQ7XG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoICggJ3ByaW1hcnknOiAkcHJpbWFyeSwgJ3NlY29uZGFyeSc6ICRzZWNvbmRhcnksICdzdWNjZXNzJzogJHN1Y2Nlc3MsICdpbmZvJzogJGluZm8sICd3YXJuaW5nJzogJHdhcm5pbmcsICdkYW5nZXInOiAkZGFuZ2VyLCAnbGlnaHQnOiAkbGlnaHQsICdkYXJrJzogJGRhcmssICdjeWFuJzogJGN5YW4sICdvcmFuZ2UnOiAkb3JhbmdlLCAncHVycGxlJzogJHB1cnBsZSwgJ2xpZ2h0LWluZm8nOiAkbGlnaHQtaW5mbywgJ2xpZ2h0LWRhbmdlcic6ICRsaWdodC1kYW5nZXIsICdsaWdodC1zdWNjZXNzJzogJGxpZ2h0LXN1Y2Nlc3MsICdsaWdodC13YXJuaW5nJzogJGxpZ2h0LXdhcm5pbmcpLFxuJHRoZW1lLWNvbG9ycyk7XG4vLyBRdWlja2x5IG1vZGlmeSBnbG9iYWwgc3R5bGluZyBieSBlbmFibGluZyBvciBkaXNhYmxpbmcgb3B0aW9uYWwgZmVhdHVyZXMuXG4kZW5hYmxlLWNhcmV0OiB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yb3VuZGVkOiB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1zaGFkb3dzOiBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtZ3JhZGllbnRzOiBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtdHJhbnNpdGlvbnM6IHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLWhvdmVyLW1lZGlhLXF1ZXJ5OiBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtZ3JpZC1jbGFzc2VzOiB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wcmludC1zdHlsZXM6IHRydWUgIWRlZmF1bHQ7XG4vLyBCb2R5XG4vLyBTZXR0aW5ncyBmb3IgdGhlICBlbGVtZW50LlxuJG1haW4tYm9keS1iZzogI2ZmZiAhZGVmYXVsdDtcbiRib2R5LWJnOiAjZmZmO1xuJGJvZHktY29sb3I6ICMzZTU1NjkgIWRlZmF1bHQ7XG4kZ3JpZC1ndXR0ZXItd2lkdGg6IDIwcHggIWRlZmF1bHQ7XG4vLyBUeXBvZ3JhcGh5XG4vLyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cbiRmb250LXNpemUtYmFzZTogMC44NzVyZW07XG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ1BvcHBpbnMnLFxuc2Fucy1zZXJpZiAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1saWdodDogMzAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LW5vcm1hbDogMzAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LW1lZGl1bTogNTAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LWJvbGQ6IDYwMCAhZGVmYXVsdDtcbiRoMS1mb250LXNpemU6IDM2cHggIWRlZmF1bHQ7XG4kaDItZm9udC1zaXplOiAzMHB4ICFkZWZhdWx0O1xuJGgzLWZvbnQtc2l6ZTogMjJweCAhZGVmYXVsdDtcbiRoNC1mb250LXNpemU6IDE4cHggIWRlZmF1bHQ7XG4kaDUtZm9udC1zaXplOiAxNnB4ICFkZWZhdWx0O1xuJGg2LWZvbnQtc2l6ZTogMTRweCAhZGVmYXVsdDtcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAoMXJlbSAvIDIpICFkZWZhdWx0O1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiA1MDAgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtY29sb3I6IGluaGVyaXQgIWRlZmF1bHQ7XG4vLyBCcmVhZGNydW1ic1xuJGJyZWFkY3J1bWItYmc6ICRib2R5LWJnO1xuJGJyZWFkY3J1bWItbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuLy8gQ2FyZHNcbiRjYXJkLWJvcmRlci13aWR0aDogMXB4ICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLWNvbG9yOiAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiAwcHggIWRlZmF1bHQ7XG4vLyBEcm9wZG93bnNcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteDogMXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogMC42NXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItY29sb3I6ICRncmF5LTIwMDtcbiRkcm9wZG93bi1kaXZpZGVyLWJnOiAkZ3JheS0xMDA7XG4vLyBCdXR0b25zXG4kYnRuLXNlY29uZGFyeS1ib3JkZXI6ICRncmF5LTMwMDtcbi8vIFByb2dyZXNzIGJhcnNcbiRwcm9ncmVzcy1iZzogJGdyYXktMTAwO1xuLy8gVGFibGVzXG4kdGFibGUtYmctYWNjZW50OiAkZ3JheS0xMDA7XG4kdGFibGUtYmctaG92ZXI6ICRncmF5LTEwMDtcbiR0YWJsZS1ob3Zlci1iZzogJGdyYXktMTAwICFkZWZhdWx0O1xuJHRhYmxlLWNlbGwtcGFkZGluZzogMXJlbSAhZGVmYXVsdDtcbiR0YWJsZS1iZy1sZXZlbDogLTEwICFkZWZhdWx0O1xuJHRhYmxlLWJnLWxldmVsMjogMSAhZGVmYXVsdDtcbiR0YWJsZS1iZy1sZXZlbDM6IC01ICFkZWZhdWx0O1xuLy8gQ29tcG9uZW50c1xuJGNvbXBvbmVudC1hY3RpdmUtY29sb3I6ICR3aGl0ZSAhZGVmYXVsdDtcbiRjb21wb25lbnQtYWN0aXZlLWJnOiAkdGhlbWVjb2xvciAhZGVmYXVsdDtcbiRiYWRnZS1waWxsLXBhZGRpbmcteDogMC4yZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtcGlsbC1wYWRkaW5nLXk6IDFlbSAhZGVmYXVsdDtcbi8vIEZvcm1zXG4kaW5wdXQtZ3JvdXAtYWRkb24tYmc6ICRncmF5LTEwMDtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRncmF5LTIwMDtcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICRncmF5LTIwMDtcbiRpbnB1dC1idG4tZm9jdXMtY29sb3I6IHJnYmEoMCxcbjAsXG4wLFxuMC4yNSkgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiByZ2JhKDAsXG4wLFxuMCxcbjAuMjUpICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmc6IHJnYmEoMCxcbjAsXG4wLFxuMzUlKSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvcjogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvY3VzdG9tLXNlbGVjdC5wbmcpICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJveC1zaGFkb3c6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yOiBzdHItcmVwbGFjZSh1cmwoJycpLFxuJyUyMycpICFkZWZhdWx0O1xuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxuJGJvcmRlci13aWR0aDogMXB4ICFkZWZhdWx0O1xuJGJvcmRlci1jb2xvcjogJGdyYXktMjAwICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXM6IDJweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWxnOiAycHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1zbTogMXB4ICFkZWZhdWx0O1xuLy8gUHJvZ3Jlc3MgYmFyc1xuJHByb2dyZXNzLWhlaWdodDogNXB4ICFkZWZhdWx0O1xuLy8gVGFic1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnOiAkd2hpdGUgIWRlZmF1bHQ7XG4vLyBHcmlkIGJyZWFrcG9pbnRzXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cbiRncmlkLWJyZWFrcG9pbnRzOiAoIHhzOiAwLFxuc206IDU3NnB4LFxubWQ6IDc2OHB4LFxubGc6IDk5MnB4LFxueGw6IDE2MDBweCkgIWRlZmF1bHQ7XG4vLyBOYXZiYXJcbiRuYXZiYXItZGFyay1jb2xvcjogcmdiYSgkd2hpdGUsXG4wLjgpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWhvdmVyLWNvbG9yOiByZ2JhKCR3aGl0ZSxcbjEpICFkZWZhdWx0O1xuIiwiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGUuc2Nzcyc7XG4uYXNpZGUtYm94e1xuICAgIHdpZHRoOiAyNzVweDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgei1pbmRleDo5OTk7XG4gIHJpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCAyODVweCk7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbiAgICAmLnNpZGViYXJfc2xpZGV7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCggMHB4KTtcbiAgICB9XG4gICAgIC5tZXNzYWdlLWNlbnRlcntcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIH1cbn1cbiJdfQ== */";
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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
            var _this2 = this;

            this.getProfile(); // this.api.currentMessage.subscribe((res:any)=>{
            // 	console.log(res);
            // })

            this.api.onUpdateUser.subscribe(function (res) {
              _this2.getProfile();
            });
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
            var _this3 = this;

            this.api.getProfile().subscribe(function (res) {
              if (res['statusCode'] === 200) {
                _this3.userDetail = res["data"];

                if (_this3.userDetail.image) {
                  _this3.userImage = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].imagesUrl + _this3.userDetail.image;
                }
              }
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            sessionStorage.clear();
            sessionStorage.removeItem('admin');
            this.toastr.success('You have been successfully logged out!');
            this.router.navigate(['/login']);
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
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }];
      };

      NavigationComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-navigation',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./navigation.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header-navigation/navigation.component.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./navigation.component.scss */
        "./src/app/shared/header-navigation/navigation.component.scss"))["default"]]
      }), __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])], NavigationComponent);
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

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(accountService, toastr) {
          _classCallCheck(this, ErrorInterceptor);

          this.accountService = accountService;
          this.toastr = toastr;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this4 = this;

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
              var _a;

              console.log('err Intercep', err);

              if ([401, 403].includes(err.status)) {
                _this4.toastr.error('Session has been expired', 'Please login', {
                  timeOut: 1200
                });

                _this4.accountService.logout();
              }

              var error = ((_a = err.error) === null || _a === void 0 ? void 0 : _a.message) || err.statusText;

              if (![401, 403, 200].includes(err.status)) {
                console.log('If not 200 inter cal', err, error);

                _this4.toastr.error(error, '', {
                  timeOut: 1000
                });
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.ctorParameters = function () {
        return [{
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }];
      };

      ErrorInterceptor = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])], ErrorInterceptor);
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


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-spinner */
      "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
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

      var JwtInterceptor = /*#__PURE__*/function () {
        function JwtInterceptor(spinner, service) {
          _classCallCheck(this, JwtInterceptor);

          this.spinner = spinner;
          this.service = service;
        }

        _createClass(JwtInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var _this5 = this;

            //console.log("hi");
            this.token = sessionStorage.getItem('token');
            this.spinner.show(); //console.log(this.token);

            var tokenizedReq = req.clone({
              setHeaders: {
                authorization: "".concat(this.token)
              }
            });
            return next.handle(tokenizedReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
              return _this5.spinner.hide();
            }));
          }
        }]);

        return JwtInterceptor;
      }();

      JwtInterceptor.ctorParameters = function () {
        return [{
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }];
      };

      JwtInterceptor = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])], JwtInterceptor);
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
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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

      var ApiService = /*#__PURE__*/function () {
        function ApiService(router, http) {
          _classCallCheck(this, ApiService);

          this.router = router;
          this.http = http;
          this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('d');
          this.currentMessage = this.messageSource.asObservable();
          this.onUpdateUser = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        } // changeProfileImage(msg) {
        // 	this.profileImage.emit(msg);
        // }
        // changeLoginUserdata(msg) {
        // 	this.userData.emit(msg);
        // }


        _createClass(ApiService, [{
          key: "checkToken",
          value: function checkToken(body) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "checkToken", body);
          }
        }, {
          key: "changeMessage",
          value: function changeMessage(messageSource) {
            this.messageSource.next(messageSource);
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
          key: "getUserById",
          value: function getUserById(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "users/" + id);
          }
        }, {
          key: "users",
          value: function users() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "users");
          }
        }, {
          key: "getServiceprovider",
          value: function getServiceprovider() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "getServiceprovider");
          }
        }, {
          key: "updateUser",
          value: function updateUser(id) {
            return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "updateUser", id);
          }
        }, {
          key: "deleteUser",
          value: function deleteUser(id) {
            return this.http["delete"](_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "users/" + id);
          }
        }, {
          key: "blockUsers",
          value: function blockUsers(id, body) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "blockUsers/" + id, body);
          }
        }, {
          key: "inactiveUsers",
          value: function inactiveUsers(id) {
            return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "inactiveUsers", id);
          }
        }, {
          key: "postApi",
          value: function postApi(endPoint, body) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + endPoint, body);
          }
        }, {
          key: "putApi",
          value: function putApi(endPoint, body) {
            return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + endPoint, body);
          }
        }, {
          key: "getApi",
          value: function getApi(url) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + url);
          }
        }, {
          key: "deleteApi",
          value: function deleteApi(url) {
            return this.http["delete"](_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + url);
          }
        }, {
          key: "getUsers",
          value: function getUsers(count, page, search, status) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            param = param.append('limit', count);
            param = param.append('page', page); //console.log(status);

            if (search != null) {
              param = param.append('search', search);
            }

            if (status === 1) {
              param = param.append('status', status);
            } else if (status === 0) {
              param = param.append('status', status);
            }

            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'users', {
              params: param
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            sessionStorage.clear();
            sessionStorage.removeItem('admin');
            this.router.navigate(['/login']);
          }
        }, {
          key: "getToday",
          value: function getToday() {
            return new Date().toISOString().split('T')[0];
          }
        }]);

        return ApiService;
      }();

      ApiService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      ApiService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], ApiService);
      /***/
    },

    /***/
    "./src/app/shared/services/spinner.service.ts":
    /*!****************************************************!*\
      !*** ./src/app/shared/services/spinner.service.ts ***!
      \****************************************************/

    /*! exports provided: NgxSpinnerService */

    /***/
    function srcAppSharedServicesSpinnerServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxSpinnerService", function () {
        return NgxSpinnerService;
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

      var NgxSpinnerService = /*#__PURE__*/function () {
        function NgxSpinnerService() {
          _classCallCheck(this, NgxSpinnerService);

          this.isLoading = true;
        }

        _createClass(NgxSpinnerService, [{
          key: "show",
          value: function show() {
            this.isLoading = true;
          }
        }, {
          key: "hide",
          value: function hide() {
            this.isLoading = false;
          }
        }]);

        return NgxSpinnerService;
      }();

      NgxSpinnerService.ctorParameters = function () {
        return [];
      };

      NgxSpinnerService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [])], NgxSpinnerService);
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
      }, {
        path: '',
        title: 'Manage Report',
        icon: 'mdi mdi-account-alert',
        "class": '',
        extralink: false,
        submenu: [{
          path: '/pages/reason',
          title: 'Reasons',
          icon: '',
          "class": '',
          extralink: false,
          submenu: []
        }, {
          path: '/pages/report',
          title: 'Reports',
          icon: '',
          "class": '',
          extralink: false,
          submenu: []
        }]
      }, {
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
          var _this6 = this;

          _classCallCheck(this, SpinnerComponent);

          this.router = router;
          this.document = document;
          this.isSpinnerVisible = true;
          this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
              _this6.isSpinnerVisible = true;
            } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
              _this6.isSpinnerVisible = false;
            }
          }, function () {
            _this6.isSpinnerVisible = false;
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
        imagesUrl: 'http://dev.webdevelopmentsolution.net:3004/'
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
      /*! /home/apptunix/Desktop/Enamul/pade_Admin/pade_adminpanel/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map