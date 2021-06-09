(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["table-tables-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/table/basic/basic.component.html":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table/basic/basic.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTableBasicBasicComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Default Table</h4>\n                <h6 class=\"card-subtitle\">Using the most basic table markup, here’s how\n                    <code>.table</code>-based tables look in Bootstrap. All table styles are inherited in Bootstrap 4, meaning any nested tables\n                    will be styled in the same manner as the parent.</h6>\n                <h6 class=\"card-title m-t-40\">\n                    <i class=\"m-r-5 font-18 mdi mdi-numeric-1-box-multiple-outline\"></i> Table With Outside Padding</h6>\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th scope=\"col\">#</th>\n                                <th scope=\"col\">First</th>\n                                <th scope=\"col\">Last</th>\n                                <th scope=\"col\">Handle</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <th scope=\"row\">1</th>\n                                <td>Mark</td>\n                                <td>Otto</td>\n                                <td>@mdo</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">2</th>\n                                <td>Jacob</td>\n                                <td>Thornton</td>\n                                <td>@fat</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">3</th>\n                                <td>Larry</td>\n                                <td>the Bird</td>\n                                <td>@twitter</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <h6 class=\"card-title\">\n                    <i class=\"m-r-5 font-18 mdi mdi-numeric-2-box-multiple-outline\"></i> Table Without Outside Padding</h6>\n            </div>\n            <div class=\"table-responsive\">\n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">#</th>\n                            <th scope=\"col\">First</th>\n                            <th scope=\"col\">Last</th>\n                            <th scope=\"col\">Handle</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <th scope=\"row\">1</th>\n                            <td>Mark</td>\n                            <td>Otto</td>\n                            <td>@mdo</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">2</th>\n                            <td>Jacob</td>\n                            <td>Thornton</td>\n                            <td>@fat</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">3</th>\n                            <td>Larry</td>\n                            <td>the Bird</td>\n                            <td>@twitter</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Table Header</h4>\n                <h6 class=\"card-subtitle\">Similar to tables, use the modifier classes .thead-light to make\n                    <code>&lt;thead&gt;</code>s appear light.</h6>\n            </div>\n            <div class=\"table-responsive\">\n                <table class=\"table\">\n                    <thead class=\"thead-light\">\n                        <tr>\n                            <th scope=\"col\">#</th>\n                            <th scope=\"col\">First</th>\n                            <th scope=\"col\">Last</th>\n                            <th scope=\"col\">Handle</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <th scope=\"row\">1</th>\n                            <td>Mark</td>\n                            <td>Otto</td>\n                            <td>@mdo</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">2</th>\n                            <td>Jacob</td>\n                            <td>Thornton</td>\n                            <td>@fat</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">3</th>\n                            <td>Larry</td>\n                            <td>the Bird</td>\n                            <td>@twitter</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Striped rows</h4>\n                <h6 class=\"card-subtitle\">Use\n                    <code>.table-striped</code> to add zebra-striping to any table row within the\n                    <code>&lt;tbody&gt;</code>.</h6>\n            </div>\n            <div class=\"table-responsive\">\n                <table class=\"table table-striped\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">#</th>\n                            <th scope=\"col\">First</th>\n                            <th scope=\"col\">Last</th>\n                            <th scope=\"col\">Handle</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <th scope=\"row\">1</th>\n                            <td>Mark</td>\n                            <td>Otto</td>\n                            <td>@mdo</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">2</th>\n                            <td>Jacob</td>\n                            <td>Thornton</td>\n                            <td>@fat</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">3</th>\n                            <td>Larry</td>\n                            <td>the Bird</td>\n                            <td>@twitter</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Boredered Table</h4>\n                <h6 class=\"card-subtitle\">Add\n                    <code>.table-bordered</code> for borders on all sides of the table and cells.</h6>\n            </div>\n            <div class=\"table-responsive\">\n                <table class=\"table table-bordered\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">#</th>\n                            <th scope=\"col\">First</th>\n                            <th scope=\"col\">Last</th>\n                            <th scope=\"col\">Handle</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <th scope=\"row\">1</th>\n                            <td>Mark</td>\n                            <td>Otto</td>\n                            <td>@mdo</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">2</th>\n                            <td>Jacob</td>\n                            <td>Thornton</td>\n                            <td>@fat</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">3</th>\n                            <td colspan=\"2\">Larry the Bird</td>\n                            <td>@twitter</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Hoverable Rows</h4>\n                <h6 class=\"card-subtitle\">Add\n                    <code>.table-hover</code> to enable a hover state on table rows within a\n                    <code>&lt;tbody&gt;</code>.</h6>\n            </div>\n            <div class=\"table-responsive\">\n                <table class=\"table table-hover\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">#</th>\n                            <th scope=\"col\">First</th>\n                            <th scope=\"col\">Last</th>\n                            <th scope=\"col\">Handle</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <th scope=\"row\">1</th>\n                            <td>Mark</td>\n                            <td>Otto</td>\n                            <td>@mdo</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">2</th>\n                            <td>Jacob</td>\n                            <td>Thornton</td>\n                            <td>@fat</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">3</th>\n                            <td colspan=\"2\">Larry the Bird</td>\n                            <td>@twitter</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Contextual Table</h4>\n                <h6 class=\"card-subtitle\">Use contextual classes to color table rows or individual cells.</h6>\n            </div>\n            <div class=\"table-responsive\">\n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">Class</th>\n                            <th scope=\"col\">Heading</th>\n                            <th scope=\"col\">Heading</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr class=\"table-active\">\n                            <th scope=\"row\">Active</th>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">Default</th>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                        </tr>\n                        <tr class=\"table-primary\">\n                            <th scope=\"row\">Primary</th>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">Secondary</th>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                        </tr>\n                        <tr class=\"table-success\">\n                            <th scope=\"row\">Success</th>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">Danger</th>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                        </tr>\n                        <tr class=\"table-danger\">\n                            <th scope=\"row\">Warning</th>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">Info</th>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                        </tr>\n                        <tr class=\"table-info\">\n                            <th scope=\"row\">Light</th>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">Dark</th>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Table With Caption</h4>\n                <h6 class=\"card-subtitle\">A\n                    <code>&lt;caption&gt;</code> functions like a heading for a table. It helps users with screen readers to find a table and understand\n                    what it’s about and decide if they want to read it.</h6>\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <caption>List of users</caption>\n                        <thead>\n                            <tr>\n                                <th scope=\"col\">#</th>\n                                <th scope=\"col\">First</th>\n                                <th scope=\"col\">Last</th>\n                                <th scope=\"col\">Handle</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <th scope=\"row\">1</th>\n                                <td>Mark</td>\n                                <td>Otto</td>\n                                <td>@mdo</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">2</th>\n                                <td>Jacob</td>\n                                <td>Thornton</td>\n                                <td>@fat</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">3</th>\n                                <td>Larry</td>\n                                <td>the Bird</td>\n                                <td>@twitter</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Responsive tables</h4>\n                <h6 class=\"card-subtitle\">Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all\n                    viewports by wrapping a\n                    <code>.table</code> with\n                    <code>.table-responsive</code>. Or, pick a maximum breakpoint with which to have a responsive table up to by using\n                    <code></code>.</h6>\n            </div>\n            <div class=\"table-responsive\">\n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">#</th>\n                            <th scope=\"col\">Heading</th>\n                            <th scope=\"col\">Heading</th>\n                            <th scope=\"col\">Heading</th>\n                            <th scope=\"col\">Heading</th>\n                            <th scope=\"col\">Heading</th>\n                            <th scope=\"col\">Heading</th>\n                            <th scope=\"col\">Heading</th>\n                            <th scope=\"col\">Heading</th>\n                            <th scope=\"col\">Heading</th>\n                            <th scope=\"col\">Heading</th>\n                            <th scope=\"col\">Heading</th>\n                            <th scope=\"col\">Heading</th>\n                            <th scope=\"col\">Heading</th>\n                            <th scope=\"col\">Heading</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <th scope=\"row\">1</th>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">2</th>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">3</th>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"table-responsive m-t-20\">\n                <table class=\"table table-bordered table-responsive-lg\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">#</th>\n                            <th scope=\"col\">Table header</th>\n                            <th scope=\"col\">Table header</th>\n                            <th scope=\"col\">Table header</th>\n                            <th scope=\"col\">Table header</th>\n                            <th scope=\"col\">Table header</th>\n                            <th scope=\"col\">Table header</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <th scope=\"row\">1</th>\n                            <td>Table cell</td>\n                            <td>Table cell</td>\n                            <td>Table cell</td>\n                            <td>Table cell</td>\n                            <td>Table cell</td>\n                            <td>Table cell</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">2</th>\n                            <td>Table cell</td>\n                            <td>Table cell</td>\n                            <td>Table cell</td>\n                            <td>Table cell</td>\n                            <td>Table cell</td>\n                            <td>Table cell</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">3</th>\n                            <td>Table cell</td>\n                            <td>Table cell</td>\n                            <td>Table cell</td>\n                            <td>Table cell</td>\n                            <td>Table cell</td>\n                            <td>Table cell</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Breakpoint Specific</h4>\n                <h6 class=\"card-subtitle\">Use\n                    <code>.table-responsive(-sm|-md|-lg|-xl)</code> as needed to create responsive tables up to a particular breakpoint. From that breakpoint and up, the\n                    table will behave normally and not scroll horizontally.</h6>\n                <div class=\"table-responsive-sm\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th scope=\"col\">#</th>\n                                <th scope=\"col\">Heading</th>\n                                <th scope=\"col\">Heading</th>\n                                <th scope=\"col\">Heading</th>\n                                <th scope=\"col\">Heading</th>\n                                <th scope=\"col\">Heading</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <th scope=\"row\">1</th>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">2</th>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">3</th>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div class=\"table-responsive-md\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th scope=\"col\">#</th>\n                                <th scope=\"col\">Heading</th>\n                                <th scope=\"col\">Heading</th>\n                                <th scope=\"col\">Heading</th>\n                                <th scope=\"col\">Heading</th>\n                                <th scope=\"col\">Heading</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <th scope=\"row\">1</th>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">2</th>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">3</th>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div class=\"table-responsive-lg\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th scope=\"col\">#</th>\n                                <th scope=\"col\">Heading</th>\n                                <th scope=\"col\">Heading</th>\n                                <th scope=\"col\">Heading</th>\n                                <th scope=\"col\">Heading</th>\n                                <th scope=\"col\">Heading</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <th scope=\"row\">1</th>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">2</th>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">3</th>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div class=\"table-responsive-xl\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th scope=\"col\">#</th>\n                                <th scope=\"col\">Heading</th>\n                                <th scope=\"col\">Heading</th>\n                                <th scope=\"col\">Heading</th>\n                                <th scope=\"col\">Heading</th>\n                                <th scope=\"col\">Heading</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <th scope=\"row\">1</th>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">2</th>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">3</th>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                                <td>Cell</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/table/color-table/color.component.html":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table/color-table/color.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTableColorTableColorComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Primary Table</h4>\n                <h6 class=\"card-subtitle\">To use add class\n                    <code>.bg-primary .text-white</code> in the\n                    <code>&lt;thead&gt;</code>.</h6>\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead class=\"bg-primary text-white\">\n                            <tr>\n                                <th>#</th>\n                                <th>First Name</th>\n                                <th>Last Name</th>\n                                <th>Username</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>1</td>\n                                <td>Nigam</td>\n                                <td>Eichmann</td>\n                                <td>@Sonu</td>\n                            </tr>\n                            <tr>\n                                <td>2</td>\n                                <td>Deshmukh</td>\n                                <td>Prohaska</td>\n                                <td>@Genelia</td>\n                            </tr>\n                            <tr>\n                                <td>3</td>\n                                <td>Roshan</td>\n                                <td>Rogahn</td>\n                                <td>@Hritik</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Success Table</h4>\n                <h6 class=\"card-subtitle\">To use add class\n                    <code>.bg-success .text-white</code> in the\n                    <code>&lt;thead&gt;</code>.</h6>\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead class=\"bg-success text-white\">\n                            <tr>\n                                <th>#</th>\n                                <th>First Name</th>\n                                <th>Last Name</th>\n                                <th>Username</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>1</td>\n                                <td>Nigam</td>\n                                <td>Eichmann</td>\n                                <td>@Sonu</td>\n                            </tr>\n                            <tr>\n                                <td>2</td>\n                                <td>Deshmukh</td>\n                                <td>Prohaska</td>\n                                <td>@Genelia</td>\n                            </tr>\n                            <tr>\n                                <td>3</td>\n                                <td>Roshan</td>\n                                <td>Rogahn</td>\n                                <td>@Hritik</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- row -->\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Info Table</h4>\n                <h6 class=\"card-subtitle\">To use add class\n                    <code>.bg-info .text-whit</code> in the\n                    <code>&lt;thead&gt;</code>.</h6>\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead class=\"bg-info text-white\">\n                            <tr>\n                                <th>#</th>\n                                <th>First Name</th>\n                                <th>Last Name</th>\n                                <th>Username</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>1</td>\n                                <td>Nigam</td>\n                                <td>Eichmann</td>\n                                <td>@Sonu</td>\n                            </tr>\n                            <tr>\n                                <td>2</td>\n                                <td>Deshmukh</td>\n                                <td>Prohaska</td>\n                                <td>@Genelia</td>\n                            </tr>\n                            <tr>\n                                <td>3</td>\n                                <td>Roshan</td>\n                                <td>Rogahn</td>\n                                <td>@Hritik</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Warning Table</h4>\n                <h6 class=\"card-subtitle\">To use add class\n                    <code>.bg-warning .text-white</code> in the\n                    <code>&lt;thead&gt;</code>.</h6>\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead class=\"bg-warning text-white\">\n                            <tr>\n                                <th>#</th>\n                                <th>First Name</th>\n                                <th>Last Name</th>\n                                <th>Username</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>1</td>\n                                <td>Nigam</td>\n                                <td>Eichmann</td>\n                                <td>@Sonu</td>\n                            </tr>\n                            <tr>\n                                <td>2</td>\n                                <td>Deshmukh</td>\n                                <td>Prohaska</td>\n                                <td>@Genelia</td>\n                            </tr>\n                            <tr>\n                                <td>3</td>\n                                <td>Roshan</td>\n                                <td>Rogahn</td>\n                                <td>@Hritik</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- row -->\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Danger Table</h4>\n                <h6 class=\"card-subtitle\">To use add class\n                    <code>.bg-danger .text-white</code> in the\n                    <code>&lt;thead&gt;</code>.</h6>\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead class=\"bg-danger text-white\">\n                            <tr>\n                                <th>#</th>\n                                <th>First Name</th>\n                                <th>Last Name</th>\n                                <th>Username</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>1</td>\n                                <td>Nigam</td>\n                                <td>Eichmann</td>\n                                <td>@Sonu</td>\n                            </tr>\n                            <tr>\n                                <td>2</td>\n                                <td>Deshmukh</td>\n                                <td>Prohaska</td>\n                                <td>@Genelia</td>\n                            </tr>\n                            <tr>\n                                <td>3</td>\n                                <td>Roshan</td>\n                                <td>Rogahn</td>\n                                <td>@Hritik</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Inverse Table</h4>\n                <h6 class=\"card-subtitle\">To use add class\n                    <code>.bg-inverse .text-white</code> in the\n                    <code>&lt;thead&gt;</code>.</h6>\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead class=\"bg-inverse text-white\">\n                            <tr>\n                                <th>#</th>\n                                <th>First Name</th>\n                                <th>Last Name</th>\n                                <th>Username</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>1</td>\n                                <td>Nigam</td>\n                                <td>Eichmann</td>\n                                <td>@Sonu</td>\n                            </tr>\n                            <tr>\n                                <td>2</td>\n                                <td>Deshmukh</td>\n                                <td>Prohaska</td>\n                                <td>@Genelia</td>\n                            </tr>\n                            <tr>\n                                <td>3</td>\n                                <td>Roshan</td>\n                                <td>Rogahn</td>\n                                <td>@Hritik</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- row -->\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Primary Table</h4>\n                <h6 class=\"card-subtitle\">To use add class\n                    <code>.bg-primary .text-white</code> in the\n                    <code>&lt;thead&gt;</code> and add class\n                    <code>.border .border-primary</code> in\n                    <code>&lt;tbody&gt;</code>\n                </h6>\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead class=\"bg-primary text-white\">\n                            <tr>\n                                <th>#</th>\n                                <th>First Name</th>\n                                <th>Last Name</th>\n                                <th>Username</th>\n                            </tr>\n                        </thead>\n                        <tbody class=\"border border-primary\">\n                            <tr>\n                                <td>1</td>\n                                <td>Nigam</td>\n                                <td>Eichmann</td>\n                                <td>@Sonu</td>\n                            </tr>\n                            <tr>\n                                <td>2</td>\n                                <td>Deshmukh</td>\n                                <td>Prohaska</td>\n                                <td>@Genelia</td>\n                            </tr>\n                            <tr>\n                                <td>3</td>\n                                <td>Roshan</td>\n                                <td>Rogahn</td>\n                                <td>@Hritik</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Success Table</h4>\n                <h6 class=\"card-subtitle\">To use add class\n                    <code>.bg-success .text-white</code> in the\n                    <code>&lt;thead&gt;</code> and add class\n                    <code>.border .border-success</code> in\n                    <code>&lt;tbody&gt;</code>\n                </h6>\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead class=\"bg-success text-white\">\n                            <tr>\n                                <th>#</th>\n                                <th>First Name</th>\n                                <th>Last Name</th>\n                                <th>Username</th>\n                            </tr>\n                        </thead>\n                        <tbody class=\"border border-success\">\n                            <tr>\n                                <td>1</td>\n                                <td>Nigam</td>\n                                <td>Eichmann</td>\n                                <td>@Sonu</td>\n                            </tr>\n                            <tr>\n                                <td>2</td>\n                                <td>Deshmukh</td>\n                                <td>Prohaska</td>\n                                <td>@Genelia</td>\n                            </tr>\n                            <tr>\n                                <td>3</td>\n                                <td>Roshan</td>\n                                <td>Rogahn</td>\n                                <td>@Hritik</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- row -->\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Info Table</h4>\n                <h6 class=\"card-subtitle\">To use add class\n                    <code>.bg-info .text-white</code> in the\n                    <code>&lt;thead&gt;</code> and add class\n                    <code>.border .border-info</code> in\n                    <code>&lt;tbody&gt;</code>\n                </h6>\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead class=\"bg-info text-white\">\n                            <tr>\n                                <th>#</th>\n                                <th>First Name</th>\n                                <th>Last Name</th>\n                                <th>Username</th>\n                            </tr>\n                        </thead>\n                        <tbody class=\"border border-info\">\n                            <tr>\n                                <td>1</td>\n                                <td>Nigam</td>\n                                <td>Eichmann</td>\n                                <td>@Sonu</td>\n                            </tr>\n                            <tr>\n                                <td>2</td>\n                                <td>Deshmukh</td>\n                                <td>Prohaska</td>\n                                <td>@Genelia</td>\n                            </tr>\n                            <tr>\n                                <td>3</td>\n                                <td>Roshan</td>\n                                <td>Rogahn</td>\n                                <td>@Hritik</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Warning Table</h4>\n                <h6 class=\"card-subtitle\">To use add class\n                    <code>.bg-warning .text-white</code> in the\n                    <code>&lt;thead&gt;</code> and add class\n                    <code>.border .border-warning</code> in\n                    <code>&lt;tbody&gt;</code>\n                </h6>\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead class=\"bg-warning text-white\">\n                            <tr>\n                                <th>#</th>\n                                <th>First Name</th>\n                                <th>Last Name</th>\n                                <th>Username</th>\n                            </tr>\n                        </thead>\n                        <tbody class=\"border border-warning\">\n                            <tr>\n                                <td>1</td>\n                                <td>Nigam</td>\n                                <td>Eichmann</td>\n                                <td>@Sonu</td>\n                            </tr>\n                            <tr>\n                                <td>2</td>\n                                <td>Deshmukh</td>\n                                <td>Prohaska</td>\n                                <td>@Genelia</td>\n                            </tr>\n                            <tr>\n                                <td>3</td>\n                                <td>Roshan</td>\n                                <td>Rogahn</td>\n                                <td>@Hritik</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- row -->\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Danger Table</h4>\n                <h6 class=\"card-subtitle\">To use add class\n                    <code>.bg-danger .text-white</code> in the\n                    <code>&lt;thead&gt;</code> and add class\n                    <code>.border .border-danger</code> in\n                    <code>&lt;tbody&gt;</code>\n                </h6>\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead class=\"bg-danger text-white\">\n                            <tr>\n                                <th>#</th>\n                                <th>First Name</th>\n                                <th>Last Name</th>\n                                <th>Username</th>\n                            </tr>\n                        </thead>\n                        <tbody class=\"border border-danger\">\n                            <tr>\n                                <td>1</td>\n                                <td>Nigam</td>\n                                <td>Eichmann</td>\n                                <td>@Sonu</td>\n                            </tr>\n                            <tr>\n                                <td>2</td>\n                                <td>Deshmukh</td>\n                                <td>Prohaska</td>\n                                <td>@Genelia</td>\n                            </tr>\n                            <tr>\n                                <td>3</td>\n                                <td>Roshan</td>\n                                <td>Rogahn</td>\n                                <td>@Hritik</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Inverse Table</h4>\n                <h6 class=\"card-subtitle\">To use add class\n                    <code>.bg-dark .text-white</code> in the\n                    <code>&lt;thead&gt;</code> and add class\n                    <code>.border .border-dark</code> in\n                    <code>&lt;tbody&gt;</code>\n                </h6>\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead class=\"bg-inverse text-white\">\n                            <tr>\n                                <th>#</th>\n                                <th>First Name</th>\n                                <th>Last Name</th>\n                                <th>Username</th>\n                            </tr>\n                        </thead>\n                        <tbody class=\"border border-dark\">\n                            <tr>\n                                <td>1</td>\n                                <td>Nigam</td>\n                                <td>Eichmann</td>\n                                <td>@Sonu</td>\n                            </tr>\n                            <tr>\n                                <td>2</td>\n                                <td>Deshmukh</td>\n                                <td>Prohaska</td>\n                                <td>@Genelia</td>\n                            </tr>\n                            <tr>\n                                <td>3</td>\n                                <td>Roshan</td>\n                                <td>Rogahn</td>\n                                <td>@Hritik</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- row -->\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Primary Table</h4>\n                <h6 class=\"card-subtitle\">To use add class in the table\n                    <code>.table-hover .table-primary</code> and add class\n                    <code>.bg-primary .text-white</code> in the\n                    <code>&lt;thead&gt;</code>.</h6>\n                <div class=\"table-responsive\">\n                    <table class=\"table table-hover table-primary\">\n                        <thead class=\"bg-primary text-white\">\n                            <tr>\n                                <th scope=\"col\">#</th>\n                                <th scope=\"col\">First</th>\n                                <th scope=\"col\">Last</th>\n                                <th scope=\"col\">Handle</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <th scope=\"row\">1</th>\n                                <td>Mark</td>\n                                <td>Otto</td>\n                                <td>@mdo</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">2</th>\n                                <td>Jacob</td>\n                                <td>Thornton</td>\n                                <td>@fat</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">3</th>\n                                <td colspan=\"2\">Larry the Bird</td>\n                                <td>@twitter</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Success Table</h4>\n                <h6 class=\"card-subtitle\">To use add class in the table\n                    <code>.table-hover .table-success</code> and add class\n                    <code>.bg-success .text-white</code> in the\n                    <code>&lt;thead&gt;</code>.</h6>\n                <div class=\"table-responsive\">\n                    <table class=\"table table-hover table-success\">\n                        <thead class=\"bg-success text-white\">\n                            <tr>\n                                <th scope=\"col\">#</th>\n                                <th scope=\"col\">First</th>\n                                <th scope=\"col\">Last</th>\n                                <th scope=\"col\">Handle</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <th scope=\"row\">1</th>\n                                <td>Mark</td>\n                                <td>Otto</td>\n                                <td>@mdo</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">2</th>\n                                <td>Jacob</td>\n                                <td>Thornton</td>\n                                <td>@fat</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">3</th>\n                                <td colspan=\"2\">Larry the Bird</td>\n                                <td>@twitter</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- row -->\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Info Table</h4>\n                <h6 class=\"card-subtitle\">To use add class in the table\n                    <code>.table-hover .table-info</code> and add class\n                    <code>.bg-info .text-white</code> in the\n                    <code>&lt;thead&gt;</code>.</h6>\n                <div class=\"table-responsive\">\n                    <table class=\"table table-hover table-info\">\n                        <thead class=\"bg-info text-white\">\n                            <tr>\n                                <th scope=\"col\">#</th>\n                                <th scope=\"col\">First</th>\n                                <th scope=\"col\">Last</th>\n                                <th scope=\"col\">Handle</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <th scope=\"row\">1</th>\n                                <td>Mark</td>\n                                <td>Otto</td>\n                                <td>@mdo</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">2</th>\n                                <td>Jacob</td>\n                                <td>Thornton</td>\n                                <td>@fat</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">3</th>\n                                <td colspan=\"2\">Larry the Bird</td>\n                                <td>@twitter</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Warning Table</h4>\n                <h6 class=\"card-subtitle\">To use add class in the table\n                    <code>.table-hover .table-warning</code> and add class\n                    <code>.bg-warning .text-white</code> in the\n                    <code>&lt;thead&gt;</code>.</h6>\n                <div class=\"table-responsive\">\n                    <table class=\"table table-hover table-warning\">\n                        <thead class=\"bg-warning text-white\">\n                            <tr>\n                                <th scope=\"col\">#</th>\n                                <th scope=\"col\">First</th>\n                                <th scope=\"col\">Last</th>\n                                <th scope=\"col\">Handle</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <th scope=\"row\">1</th>\n                                <td>Mark</td>\n                                <td>Otto</td>\n                                <td>@mdo</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">2</th>\n                                <td>Jacob</td>\n                                <td>Thornton</td>\n                                <td>@fat</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">3</th>\n                                <td colspan=\"2\">Larry the Bird</td>\n                                <td>@twitter</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- row -->\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Danger Table</h4>\n                <h6 class=\"card-subtitle\">To use add class in the table\n                    <code>.table-hover .table-danger</code> and add class\n                    <code>.bg-danger .text-white</code> in the\n                    <code>&lt;thead&gt;</code>.</h6>\n                <div class=\"table-responsive\">\n                    <table class=\"table table-hover table-danger\">\n                        <thead class=\"bg-danger text-white\">\n                            <tr>\n                                <th scope=\"col\">#</th>\n                                <th scope=\"col\">First</th>\n                                <th scope=\"col\">Last</th>\n                                <th scope=\"col\">Handle</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <th scope=\"row\">1</th>\n                                <td>Mark</td>\n                                <td>Otto</td>\n                                <td>@mdo</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">2</th>\n                                <td>Jacob</td>\n                                <td>Thornton</td>\n                                <td>@fat</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">3</th>\n                                <td colspan=\"2\">Larry the Bird</td>\n                                <td>@twitter</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Inverse Table</h4>\n                <h6 class=\"card-subtitle\">To use add class in the table\n                    <code>.table-hover .table-dark</code> and add class\n                    <code>.bg-dark .text-white</code> in the\n                    <code>&lt;thead&gt;</code>.</h6>\n                <div class=\"table-responsive\">\n                    <table class=\"table table-hover table-dark\">\n                        <thead class=\"bg-dark text-white\">\n                            <tr>\n                                <th scope=\"col\">#</th>\n                                <th scope=\"col\">First</th>\n                                <th scope=\"col\">Last</th>\n                                <th scope=\"col\">Handle</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <th scope=\"row\">1</th>\n                                <td>Mark</td>\n                                <td>Otto</td>\n                                <td>@mdo</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">2</th>\n                                <td>Jacob</td>\n                                <td>Thornton</td>\n                                <td>@fat</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">3</th>\n                                <td colspan=\"2\">Larry the Bird</td>\n                                <td>@twitter</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- row -->";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/table/dark-basic/dark.component.html":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table/dark-basic/dark.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTableDarkBasicDarkComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Inverse Table</h4>\n                <h6 class=\"card-subtitle\">You can also invert the colors—with light text on dark backgrounds—with\n                    <code> .table-inverse</code>.</h6>\n            </div>\n            <div class=\"table-responsive\">\n                <table class=\"table table-dark m-b-0\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">#</th>\n                            <th scope=\"col\">First</th>\n                            <th scope=\"col\">Last</th>\n                            <th scope=\"col\">Handle</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <th scope=\"row\">1</th>\n                            <td>Mark</td>\n                            <td>Otto</td>\n                            <td>@mdo</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">2</th>\n                            <td>Jacob</td>\n                            <td>Thornton</td>\n                            <td>@fat</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">3</th>\n                            <td>Larry</td>\n                            <td>the Bird</td>\n                            <td>@twitter</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Striped with Inverse Table</h4>\n                <h6 class=\"card-subtitle\">Use .table-striped to add zebra-striping to any table row within the\n                    <code>&lt;tbody&gt;</code>.</h6>\n            </div>\n            <div class=\"table-responsive\">\n                <table class=\"table table-striped table-dark m-b-0\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">#</th>\n                            <th scope=\"col\">First</th>\n                            <th scope=\"col\">Last</th>\n                            <th scope=\"col\">Handle</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <th scope=\"row\">1</th>\n                            <td>Mark</td>\n                            <td>Otto</td>\n                            <td>@mdo</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">2</th>\n                            <td>Jacob</td>\n                            <td>Thornton</td>\n                            <td>@fat</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">3</th>\n                            <td>Larry</td>\n                            <td>the Bird</td>\n                            <td>@twitter</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Bordered with Inverse Table</h4>\n                <h6 class=\"card-subtitle\">Add\n                    <code>.table-bordered</code> for borders on all sides of the table and cells.</h6>\n            </div>\n            <div class=\"table-responsive\">\n                <table class=\"table table-bordered table-dark m-b-0\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">#</th>\n                            <th scope=\"col\">First</th>\n                            <th scope=\"col\">Last</th>\n                            <th scope=\"col\">Handle</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <th scope=\"row\">1</th>\n                            <td>Mark</td>\n                            <td>Otto</td>\n                            <td>@mdo</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">2</th>\n                            <td>Jacob</td>\n                            <td>Thornton</td>\n                            <td>@fat</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">3</th>\n                            <td colspan=\"2\">Larry the Bird</td>\n                            <td>@twitter</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Contextual classes inverse</h4>\n                <h6 class=\"card-subtitle\">Regular table background variants are not available with the dark table, however, you may use text or background\n                    utilities to achieve similar styles.</h6>\n            </div>\n            <div class=\"table-responsive\">\n                <table class=\"table table-dark m-b-0\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">#</th>\n                            <th scope=\"col\">Heading</th>\n                            <th scope=\"col\">Heading</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr class=\"bg-primary\">\n                            <th scope=\"row\">1</th>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">2</th>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                        </tr>\n                        <tr class=\"bg-success\">\n                            <th scope=\"row\">3</th>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">4</th>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                        </tr>\n                        <tr class=\"bg-info\">\n                            <th scope=\"row\">5</th>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">6</th>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                        </tr>\n                        <tr class=\"bg-warning\">\n                            <th scope=\"row\">7</th>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">8</th>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                        </tr>\n                        <tr class=\"bg-danger\">\n                            <th scope=\"row\">9</th>\n                            <td>Cell</td>\n                            <td>Cell</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/table/data-table/data-table.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table/data-table/data-table.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTableDataTableDataTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n  <!-- column -->\n  <div class=\"col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Filter Option</h4>\n        <h5 class=\"card-subtitle\">This is the filerable Data table</h5>\n        <form class=\"w-50 m-b-30\">\n          <input type='text' class=\"form-control\" placeholder='Type to filter the name column...' (keyup)='updateFilter($event)' />\n        </form>\n        <ngx-datatable #table class='material' [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\n          [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='rows'>\n        </ngx-datatable>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Editing Option</h4>\n        <h5 class=\"card-subtitle\">This is the editing Data table option you can double click on text</h5>\n\n        <ngx-datatable #mydatatable class=\"material\" [headerHeight]=\"50\" [limit]=\"5\" [columnMode]=\"'force'\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\"\n          [rows]=\"rows\">\n          <ngx-datatable-column name=\"Name\">\n            <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n              <span title=\"Double click to edit\" (dblclick)=\"editing[rowIndex + '-name'] = true\" *ngIf=\"!editing[rowIndex + '-name']\">\n                {{value}}\n              </span>\n              <input autofocus (blur)=\"updateValue($event, 'name', rowIndex)\" *ngIf=\"editing[rowIndex+ '-name']\" type=\"text\" [value]=\"value\"\n              />\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Gender\">\n            <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\">\n              <span title=\"Double click to edit\" (dblclick)=\"editing[rowIndex + '-gender'] = true\" *ngIf=\"!editing[rowIndex + '-gender']\">\n                {{value}}\n              </span>\n              <select *ngIf=\"editing[rowIndex + '-gender']\" (change)=\"updateValue($event, 'gender', rowIndex)\" [value]=\"value\">\n                <option value=\"male\">Male</option>\n                <option value=\"female\">Female</option>\n              </select>\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Age\">\n            <ng-template ngx-datatable-cell-template let-value=\"value\">\n              {{value}}\n            </ng-template>\n          </ngx-datatable-column>\n        </ngx-datatable>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/table/sizing/size.component.html":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table/sizing/size.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTableSizingSizeComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Default Size Light Table</h4>\n            </div>\n            <table class=\"table m-b-0\">\n                <thead>\n                    <tr>\n                        <th scope=\"col\">#</th>\n                        <th scope=\"col\">First</th>\n                        <th scope=\"col\">Last</th>\n                        <th scope=\"col\">Handle</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <th scope=\"row\">1</th>\n                        <td>Mark</td>\n                        <td>Otto</td>\n                        <td>@mdo</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">2</th>\n                        <td>Jacob</td>\n                        <td>Thornton</td>\n                        <td>@fat</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">3</th>\n                        <td>Larry</td>\n                        <td>the Bird</td>\n                        <td>@twitter</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Default Size Dark Table</h4>\n            </div>\n            <table class=\"table table-dark m-b-0\">\n                <thead>\n                    <tr>\n                        <th scope=\"col\">#</th>\n                        <th scope=\"col\">First</th>\n                        <th scope=\"col\">Last</th>\n                        <th scope=\"col\">Handle</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <th scope=\"row\">1</th>\n                        <td>Mark</td>\n                        <td>Otto</td>\n                        <td>@mdo</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">2</th>\n                        <td>Jacob</td>\n                        <td>Thornton</td>\n                        <td>@fat</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">3</th>\n                        <td>Larry</td>\n                        <td>the Bird</td>\n                        <td>@twitter</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Small Size Light Table</h4>\n            </div>\n            <table class=\"table table-sm m-b-0\">\n                <thead>\n                    <tr>\n                        <th scope=\"col\">#</th>\n                        <th scope=\"col\">First</th>\n                        <th scope=\"col\">Last</th>\n                        <th scope=\"col\">Handle</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <th scope=\"row\">1</th>\n                        <td>Mark</td>\n                        <td>Otto</td>\n                        <td>@mdo</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">2</th>\n                        <td>Jacob</td>\n                        <td>Thornton</td>\n                        <td>@fat</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">3</th>\n                        <td colspan=\"2\">Larry the Bird</td>\n                        <td>@twitter</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Small Size Dark Table</h4>\n            </div>\n            <table class=\"table table-sm table-dark m-b-0\">\n                <thead>\n                    <tr>\n                        <th scope=\"col\">#</th>\n                        <th scope=\"col\">First</th>\n                        <th scope=\"col\">Last</th>\n                        <th scope=\"col\">Handle</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <th scope=\"row\">1</th>\n                        <td>Mark</td>\n                        <td>Otto</td>\n                        <td>@mdo</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">2</th>\n                        <td>Jacob</td>\n                        <td>Thornton</td>\n                        <td>@fat</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">3</th>\n                        <td colspan=\"2\">Larry the Bird</td>\n                        <td>@twitter</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./src/app/table/basic/basic.component.ts":
    /*!************************************************!*\
      !*** ./src/app/table/basic/basic.component.ts ***!
      \************************************************/

    /*! exports provided: BasictableComponent */

    /***/
    function srcAppTableBasicBasicComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasictableComponent", function () {
        return BasictableComponent;
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

      var BasictableComponent = function BasictableComponent() {
        _classCallCheck(this, BasictableComponent);
      };

      BasictableComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./basic.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/table/basic/basic.component.html"))["default"]
      })], BasictableComponent);
      /***/
    },

    /***/
    "./src/app/table/color-table/color.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/table/color-table/color.component.ts ***!
      \******************************************************/

    /*! exports provided: ColortableComponent */

    /***/
    function srcAppTableColorTableColorComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColortableComponent", function () {
        return ColortableComponent;
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

      var ColortableComponent = function ColortableComponent() {
        _classCallCheck(this, ColortableComponent);
      };

      ColortableComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./color.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/table/color-table/color.component.html"))["default"]
      })], ColortableComponent);
      /***/
    },

    /***/
    "./src/app/table/dark-basic/dark.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/table/dark-basic/dark.component.ts ***!
      \****************************************************/

    /*! exports provided: DarktableComponent */

    /***/
    function srcAppTableDarkBasicDarkComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DarktableComponent", function () {
        return DarktableComponent;
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

      var DarktableComponent = function DarktableComponent() {
        _classCallCheck(this, DarktableComponent);
      };

      DarktableComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./dark.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/table/dark-basic/dark.component.html"))["default"]
      })], DarktableComponent);
      /***/
    },

    /***/
    "./src/app/table/data-table/company.json":
    /*!***********************************************!*\
      !*** ./src/app/table/data-table/company.json ***!
      \***********************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, default */

    /***/
    function srcAppTableDataTableCompanyJson(module) {
      module.exports = JSON.parse("[{\"name\":\"Ethel Price\",\"gender\":\"female\",\"company\":\"Johnson, Johnson and Partners, LLC CMP DDC\",\"age\":22},{\"name\":\"Claudine Neal\",\"gender\":\"female\",\"company\":\"Sealoud\",\"age\":55},{\"name\":\"Beryl Rice\",\"gender\":\"female\",\"company\":\"Velity\",\"age\":67},{\"name\":\"Wilder Gonzales\",\"gender\":\"male\",\"company\":\"Geekko\"},{\"name\":\"Georgina Schultz\",\"gender\":\"female\",\"company\":\"Suretech\"},{\"name\":\"Carroll Buchanan\",\"gender\":\"male\",\"company\":\"Ecosys\"},{\"name\":\"Valarie Atkinson\",\"gender\":\"female\",\"company\":\"Hopeli\"},{\"name\":\"Schroeder Mathews\",\"gender\":\"male\",\"company\":\"Polarium\"},{\"name\":\"Lynda Mendoza\",\"gender\":\"female\",\"company\":\"Dogspa\"},{\"name\":\"Sarah Massey\",\"gender\":\"female\",\"company\":\"Bisba\"},{\"name\":\"Robles Boyle\",\"gender\":\"male\",\"company\":\"Comtract\"},{\"name\":\"Evans Hickman\",\"gender\":\"male\",\"company\":\"Parleynet\"},{\"name\":\"Dawson Barber\",\"gender\":\"male\",\"company\":\"Dymi\"},{\"name\":\"Bruce Strong\",\"gender\":\"male\",\"company\":\"Xyqag\"},{\"name\":\"Nellie Whitfield\",\"gender\":\"female\",\"company\":\"Exospace\"},{\"name\":\"Jackson Macias\",\"gender\":\"male\",\"company\":\"Aquamate\"},{\"name\":\"Pena Pena\",\"gender\":\"male\",\"company\":\"Quarx\"},{\"name\":\"Lelia Gates\",\"gender\":\"female\",\"company\":\"Proxsoft\"},{\"name\":\"Letitia Vasquez\",\"gender\":\"female\",\"company\":\"Slumberia\"},{\"name\":\"Trevino Moreno\",\"gender\":\"male\",\"company\":\"Conjurica\"},{\"name\":\"Barr Page\",\"gender\":\"male\",\"company\":\"Apex\"},{\"name\":\"Kirkland Merrill\",\"gender\":\"male\",\"company\":\"Utara\"},{\"name\":\"Blanche Conley\",\"gender\":\"female\",\"company\":\"Imkan\"},{\"name\":\"Atkins Dunlap\",\"gender\":\"male\",\"company\":\"Comveyor\"},{\"name\":\"Everett Foreman\",\"gender\":\"male\",\"company\":\"Maineland\"},{\"name\":\"Gould Randolph\",\"gender\":\"male\",\"company\":\"Intergeek\"},{\"name\":\"Kelli Leon\",\"gender\":\"female\",\"company\":\"Verbus\"},{\"name\":\"Freda Mason\",\"gender\":\"female\",\"company\":\"Accidency\"},{\"name\":\"Tucker Maxwell\",\"gender\":\"male\",\"company\":\"Lumbrex\"},{\"name\":\"Yvonne Parsons\",\"gender\":\"female\",\"company\":\"Zolar\"},{\"name\":\"Woods Key\",\"gender\":\"male\",\"company\":\"Bedder\"},{\"name\":\"Stephens Reilly\",\"gender\":\"male\",\"company\":\"Acusage\"},{\"name\":\"Mcfarland Sparks\",\"gender\":\"male\",\"company\":\"Comvey\"},{\"name\":\"Jocelyn Sawyer\",\"gender\":\"female\",\"company\":\"Fortean\"},{\"name\":\"Renee Barr\",\"gender\":\"female\",\"company\":\"Kiggle\"},{\"name\":\"Gaines Beck\",\"gender\":\"male\",\"company\":\"Sequitur\"},{\"name\":\"Luisa Farrell\",\"gender\":\"female\",\"company\":\"Cinesanct\"},{\"name\":\"Robyn Strickland\",\"gender\":\"female\",\"company\":\"Obones\"},{\"name\":\"Roseann Jarvis\",\"gender\":\"female\",\"company\":\"Aquazure\"},{\"name\":\"Johnston Park\",\"gender\":\"male\",\"company\":\"Netur\"},{\"name\":\"Wong Craft\",\"gender\":\"male\",\"company\":\"Opticall\"},{\"name\":\"Merritt Cole\",\"gender\":\"male\",\"company\":\"Techtrix\"},{\"name\":\"Dale Byrd\",\"gender\":\"female\",\"company\":\"Kneedles\"},{\"name\":\"Sara Delgado\",\"gender\":\"female\",\"company\":\"Netagy\"},{\"name\":\"Alisha Myers\",\"gender\":\"female\",\"company\":\"Intradisk\"},{\"name\":\"Felecia Smith\",\"gender\":\"female\",\"company\":\"Futurity\"},{\"name\":\"Neal Harvey\",\"gender\":\"male\",\"company\":\"Pyramax\"},{\"name\":\"Nola Miles\",\"gender\":\"female\",\"company\":\"Sonique\"},{\"name\":\"Herring Pierce\",\"gender\":\"male\",\"company\":\"Geeketron\"},{\"name\":\"Shelley Rodriquez\",\"gender\":\"female\",\"company\":\"Bostonic\"},{\"name\":\"Cora Chase\",\"gender\":\"female\",\"company\":\"Isonus\"},{\"name\":\"Mckay Santos\",\"gender\":\"male\",\"company\":\"Amtas\"},{\"name\":\"Hilda Crane\",\"gender\":\"female\",\"company\":\"Jumpstack\"},{\"name\":\"Jeanne Lindsay\",\"gender\":\"female\",\"company\":\"Genesynk\"},{\"name\":\"Frye Sharpe\",\"gender\":\"male\",\"company\":\"Eplode\"},{\"name\":\"Velma Fry\",\"gender\":\"female\",\"company\":\"Ronelon\"},{\"name\":\"Reyna Espinoza\",\"gender\":\"female\",\"company\":\"Prismatic\"},{\"name\":\"Spencer Sloan\",\"gender\":\"male\",\"company\":\"Comverges\"},{\"name\":\"Graham Marsh\",\"gender\":\"male\",\"company\":\"Medifax\"},{\"name\":\"Hale Boone\",\"gender\":\"male\",\"company\":\"Digial\"},{\"name\":\"Wiley Hubbard\",\"gender\":\"male\",\"company\":\"Zensus\"},{\"name\":\"Blackburn Drake\",\"gender\":\"male\",\"company\":\"Frenex\"},{\"name\":\"Franco Hunter\",\"gender\":\"male\",\"company\":\"Rockabye\"},{\"name\":\"Barnett Case\",\"gender\":\"male\",\"company\":\"Norali\"},{\"name\":\"Alexander Foley\",\"gender\":\"male\",\"company\":\"Geekosis\"},{\"name\":\"Lynette Stein\",\"gender\":\"female\",\"company\":\"Macronaut\"},{\"name\":\"Anthony Joyner\",\"gender\":\"male\",\"company\":\"Senmei\"},{\"name\":\"Garrett Brennan\",\"gender\":\"male\",\"company\":\"Bluegrain\"},{\"name\":\"Betsy Horton\",\"gender\":\"female\",\"company\":\"Zilla\"},{\"name\":\"Patton Small\",\"gender\":\"male\",\"company\":\"Genmex\"},{\"name\":\"Lakisha Huber\",\"gender\":\"female\",\"company\":\"Insource\"},{\"name\":\"Lindsay Avery\",\"gender\":\"female\",\"company\":\"Unq\"},{\"name\":\"Ayers Hood\",\"gender\":\"male\",\"company\":\"Accuprint\"},{\"name\":\"Torres Durham\",\"gender\":\"male\",\"company\":\"Uplinx\"},{\"name\":\"Vincent Hernandez\",\"gender\":\"male\",\"company\":\"Talendula\"},{\"name\":\"Baird Ryan\",\"gender\":\"male\",\"company\":\"Aquasseur\"},{\"name\":\"Georgia Mercer\",\"gender\":\"female\",\"company\":\"Skyplex\"},{\"name\":\"Francesca Elliott\",\"gender\":\"female\",\"company\":\"Nspire\"},{\"name\":\"Lyons Peters\",\"gender\":\"male\",\"company\":\"Quinex\"},{\"name\":\"Kristi Brewer\",\"gender\":\"female\",\"company\":\"Oronoko\"},{\"name\":\"Tonya Bray\",\"gender\":\"female\",\"company\":\"Insuron\"},{\"name\":\"Valenzuela Huff\",\"gender\":\"male\",\"company\":\"Applideck\"},{\"name\":\"Tiffany Anderson\",\"gender\":\"female\",\"company\":\"Zanymax\"},{\"name\":\"Jerri King\",\"gender\":\"female\",\"company\":\"Eventex\"},{\"name\":\"Rocha Meadows\",\"gender\":\"male\",\"company\":\"Goko\"},{\"name\":\"Marcy Green\",\"gender\":\"female\",\"company\":\"Pharmex\"},{\"name\":\"Kirk Cross\",\"gender\":\"male\",\"company\":\"Portico\"},{\"name\":\"Hattie Mullen\",\"gender\":\"female\",\"company\":\"Zilencio\"},{\"name\":\"Deann Bridges\",\"gender\":\"female\",\"company\":\"Equitox\"},{\"name\":\"Chaney Roach\",\"gender\":\"male\",\"company\":\"Qualitern\"},{\"name\":\"Consuelo Dickson\",\"gender\":\"female\",\"company\":\"Poshome\"},{\"name\":\"Billie Rowe\",\"gender\":\"female\",\"company\":\"Cemention\"},{\"name\":\"Bean Donovan\",\"gender\":\"male\",\"company\":\"Mantro\"},{\"name\":\"Lancaster Patel\",\"gender\":\"male\",\"company\":\"Krog\"},{\"name\":\"Rosa Dyer\",\"gender\":\"female\",\"company\":\"Netility\"},{\"name\":\"Christine Compton\",\"gender\":\"female\",\"company\":\"Bleeko\"},{\"name\":\"Milagros Finch\",\"gender\":\"female\",\"company\":\"Handshake\"},{\"name\":\"Ericka Alvarado\",\"gender\":\"female\",\"company\":\"Lyrichord\"},{\"name\":\"Sylvia Sosa\",\"gender\":\"female\",\"company\":\"Circum\"},{\"name\":\"Humphrey Curtis\",\"gender\":\"male\",\"company\":\"Corepan\"}]");
      /***/
    },

    /***/
    "./src/app/table/data-table/data-table.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/table/data-table/data-table.component.ts ***!
      \**********************************************************/

    /*! exports provided: DatatableComponent */

    /***/
    function srcAppTableDataTableDataTableComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatatableComponent", function () {
        return DatatableComponent;
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

      var DatatableComponent_1;

      var data = __webpack_require__(
      /*! ./company.json */
      "./src/app/table/data-table/company.json");

      var DatatableComponent = DatatableComponent_1 = /*#__PURE__*/function () {
        function DatatableComponent() {
          var _this = this;

          _classCallCheck(this, DatatableComponent);

          this.editing = {};
          this.rows = [];
          this.temp = _toConsumableArray(data);
          this.loadingIndicator = true;
          this.reorderable = true;
          this.columns = [{
            prop: 'name'
          }, {
            name: 'Gender'
          }, {
            name: 'Company'
          }];
          this.rows = data;
          this.temp = _toConsumableArray(data);
          setTimeout(function () {
            _this.loadingIndicator = false;
          }, 1500);
        }

        _createClass(DatatableComponent, [{
          key: "updateFilter",
          value: function updateFilter(event) {
            var val = event.target.value.toLowerCase(); // filter our data

            var temp = this.temp.filter(function (d) {
              return d.name.toLowerCase().indexOf(val) !== -1 || !val;
            }); // update the rows

            this.rows = temp; // Whenever the filter changes, always go back to the first page

            this.table = data;
          }
        }, {
          key: "updateValue",
          value: function updateValue(event, cell, rowIndex) {
            console.log('inline editing rowIndex', rowIndex);
            this.editing[rowIndex + '-' + cell] = false;
            this.rows[rowIndex][cell] = event.target.value;
            this.rows = _toConsumableArray(this.rows);
            console.log('UPDATED!', this.rows[rowIndex][cell]);
          }
        }]);

        return DatatableComponent;
      }();

      DatatableComponent.ctorParameters = function () {
        return [];
      };

      DatatableComponent.propDecorators = {
        table: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [DatatableComponent_1, {
            "static": false
          }]
        }]
      };
      DatatableComponent = DatatableComponent_1 = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-data-table',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./data-table.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/table/data-table/data-table.component.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./data-table.css */
        "./src/app/table/data-table/data-table.css"))["default"]]
      }), __metadata("design:paramtypes", [])], DatatableComponent);
      /***/
    },

    /***/
    "./src/app/table/data-table/data-table.css":
    /*!*************************************************!*\
      !*** ./src/app/table/data-table/data-table.css ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTableDataTableDataTableCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/table/sizing/size.component.ts":
    /*!************************************************!*\
      !*** ./src/app/table/sizing/size.component.ts ***!
      \************************************************/

    /*! exports provided: TablesizeComponent */

    /***/
    function srcAppTableSizingSizeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesizeComponent", function () {
        return TablesizeComponent;
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

      var TablesizeComponent = function TablesizeComponent() {
        _classCallCheck(this, TablesizeComponent);
      };

      TablesizeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./size.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/table/sizing/size.component.html"))["default"]
      })], TablesizeComponent);
      /***/
    },

    /***/
    "./src/app/table/tables.module.ts":
    /*!****************************************!*\
      !*** ./src/app/table/tables.module.ts ***!
      \****************************************/

    /*! exports provided: TablesModule */

    /***/
    function srcAppTableTablesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesModule", function () {
        return TablesModule;
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


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _tables_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./tables.routing */
      "./src/app/table/tables.routing.ts");
      /* harmony import */


      var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./data-table/data-table.component */
      "./src/app/table/data-table/data-table.component.ts");
      /* harmony import */


      var _basic_basic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./basic/basic.component */
      "./src/app/table/basic/basic.component.ts");
      /* harmony import */


      var _dark_basic_dark_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./dark-basic/dark.component */
      "./src/app/table/dark-basic/dark.component.ts");
      /* harmony import */


      var _color_table_color_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./color-table/color.component */
      "./src/app/table/color-table/color.component.ts");
      /* harmony import */


      var _sizing_size_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./sizing/size.component */
      "./src/app/table/sizing/size.component.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var TablesModule = function TablesModule() {
        _classCallCheck(this, TablesModule);
      };

      TablesModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_tables_routing__WEBPACK_IMPORTED_MODULE_4__["TablesRoutes"]), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"]],
        declarations: [_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_5__["DatatableComponent"], _basic_basic_component__WEBPACK_IMPORTED_MODULE_6__["BasictableComponent"], _dark_basic_dark_component__WEBPACK_IMPORTED_MODULE_7__["DarktableComponent"], _color_table_color_component__WEBPACK_IMPORTED_MODULE_8__["ColortableComponent"], _sizing_size_component__WEBPACK_IMPORTED_MODULE_9__["TablesizeComponent"]]
      })], TablesModule);
      /***/
    },

    /***/
    "./src/app/table/tables.routing.ts":
    /*!*****************************************!*\
      !*** ./src/app/table/tables.routing.ts ***!
      \*****************************************/

    /*! exports provided: TablesRoutes */

    /***/
    function srcAppTableTablesRoutingTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesRoutes", function () {
        return TablesRoutes;
      });
      /* harmony import */


      var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./data-table/data-table.component */
      "./src/app/table/data-table/data-table.component.ts");
      /* harmony import */


      var _basic_basic_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./basic/basic.component */
      "./src/app/table/basic/basic.component.ts");
      /* harmony import */


      var _dark_basic_dark_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dark-basic/dark.component */
      "./src/app/table/dark-basic/dark.component.ts");
      /* harmony import */


      var _color_table_color_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./color-table/color.component */
      "./src/app/table/color-table/color.component.ts");
      /* harmony import */


      var _sizing_size_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sizing/size.component */
      "./src/app/table/sizing/size.component.ts");

      var TablesRoutes = [{
        path: '',
        children: [{
          path: 'datatable',
          component: _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_0__["DatatableComponent"],
          data: {
            title: 'Data Table',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Data Table'
            }]
          }
        }, {
          path: 'basictables',
          component: _basic_basic_component__WEBPACK_IMPORTED_MODULE_1__["BasictableComponent"],
          data: {
            title: 'Basic Tables',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Basic Tables'
            }]
          }
        }, {
          path: 'darktables',
          component: _dark_basic_dark_component__WEBPACK_IMPORTED_MODULE_2__["DarktableComponent"],
          data: {
            title: 'Dark Tables',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Dark Tables'
            }]
          }
        }, {
          path: 'colortables',
          component: _color_table_color_component__WEBPACK_IMPORTED_MODULE_3__["ColortableComponent"],
          data: {
            title: 'Color Tables',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Color Tables'
            }]
          }
        }, {
          path: 'tablesizing',
          component: _sizing_size_component__WEBPACK_IMPORTED_MODULE_4__["TablesizeComponent"],
          data: {
            title: 'Table Sizing',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Table Sizing'
            }]
          }
        }]
      }];
      /***/
    }
  }]);
})();
//# sourceMappingURL=table-tables-module-es5.js.map