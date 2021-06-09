(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-component-module"], {
    /***/
    "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js":
    /*!*********************************************************************************!*\
      !*** ./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js ***!
      \*********************************************************************************/

    /*! exports provided: NotifierConfig, NotifierConfigToken, NotifierContainerComponent, NotifierModule, NotifierNotificationComponent, NotifierOptionsToken, NotifierService, notifierCustomConfigFactory, notifierDefaultConfigFactory, ɵa, ɵb, ɵc */

    /***/
    function node_modulesAngularNotifier__ivy_ngcc__Fesm2015AngularNotifierJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotifierConfig", function () {
        return NotifierConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotifierConfigToken", function () {
        return NotifierConfigToken;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotifierContainerComponent", function () {
        return NotifierContainerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotifierModule", function () {
        return NotifierModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotifierNotificationComponent", function () {
        return NotifierNotificationComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotifierOptionsToken", function () {
        return NotifierOptionsToken;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotifierService", function () {
        return NotifierService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "notifierCustomConfigFactory", function () {
        return notifierCustomConfigFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "notifierDefaultConfigFactory", function () {
        return notifierDefaultConfigFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return NotifierQueueService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return NotifierTimerService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵc", function () {
        return NotifierAnimationService;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Notification
       *
       * This class describes the structure of a notifiction, including all information it needs to live, and everyone else needs to work with it.
       */


      function NotifierContainerComponent_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "notifier-notification", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ready", function NotifierContainerComponent_li_1_Template_notifier_notification_ready_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.onNotificationReady($event);
          })("dismiss", function NotifierContainerComponent_li_1_Template_notifier_notification_dismiss_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.onNotificationDismiss($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var notification_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notification", notification_r1);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          notification: a0
        };
      };

      function NotifierNotificationComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 2);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.notification.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r0.notification));
        }
      }

      function NotifierNotificationComponent_ng_template_1_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotifierNotificationComponent_ng_template_1_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r4.onClickDismiss();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NotifierNotificationComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NotifierNotificationComponent_ng_template_1_button_2_Template, 3, 0, "button", 4);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.notification.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.config.behaviour.showDismissButton);
        }
      }

      var NotifierNotification =
      /**
       * Constructor
       *
       * @param {?} options Notifier options
       */
      function NotifierNotification(options) {
        _classCallCheck(this, NotifierNotification);

        /**
         * The template to customize
         * the appearance of the notification
         */
        this.template = null;
        Object.assign(this, options); // If not set manually, we have to create a unique notification ID by ourselves. The ID generation relies on the current browser
        // datetime in ms, in praticular the moment this notification gets constructed. Concurrency, and thus two IDs being the exact same,
        // is not possible due to the action queue concept.

        if (options.id === undefined) {
          this.id = "ID_".concat(new Date().getTime());
        }
      };

      if (false) {}
      /**
       * Notifiction options
       *
       * This interface describes which information are needed to create a new notification, or in other words, which information the external API
       * call must provide.
       * @record
       */


      function NotifierNotificationOptions() {}

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Notifier queue service
       *
       * In general, API calls don't get processed right away. Instead, we have to queue them up in order to prevent simultanious API calls
       * interfering with each other. This, at least in theory, is possible at any time. In particular, animations - which potentially overlap -
       * can cause changes in JS classes as well as affect the DOM. Therefore, the queue service takes all actions, puts them in a queue, and
       * processes them at the right time (which is when the previous action has been processed successfully).
       *
       * Technical sidenote:
       * An action looks pretty similar to the ones within the Flux / Redux pattern.
       */


      var NotifierQueueService = /*#__PURE__*/function () {
        /**
         * Constructor
         */
        function NotifierQueueService() {
          _classCallCheck(this, NotifierQueueService);

          this.actionStream = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.actionQueue = [];
          this.isActionInProgress = false;
        }
        /**
         * Push a new action to the queue, and try to run it
         *
         * @param {?} action Action object
         * @return {?}
         */


        _createClass(NotifierQueueService, [{
          key: "push",
          value: function push(action) {
            this.actionQueue.push(action);
            this.tryToRunNextAction();
          }
          /**
           * Continue with the next action (called when the current action is finished)
           * @return {?}
           */

        }, {
          key: "continue",
          value: function _continue() {
            this.isActionInProgress = false;
            this.tryToRunNextAction();
          }
          /**
           * Try to run the next action in the queue; we skip if there already is some action in progress, or if there is no action left
           * @private
           * @return {?}
           */

        }, {
          key: "tryToRunNextAction",
          value: function tryToRunNextAction() {
            if (this.isActionInProgress || this.actionQueue.length === 0) {
              return; // Skip (the queue can now go drink a coffee as it has nothing to do anymore)
            }

            this.isActionInProgress = true;
            this.actionStream.next(this.actionQueue.shift()); // Push next action to the stream, and remove the current action from the queue
          }
        }]);

        return NotifierQueueService;
      }();

      NotifierQueueService.ɵfac = function NotifierQueueService_Factory(t) {
        return new (t || NotifierQueueService)();
      };

      NotifierQueueService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NotifierQueueService,
        factory: NotifierQueueService.ɵfac
      });
      /** @nocollapse */

      NotifierQueueService.ctorParameters = function () {
        return [];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotifierQueueService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Notifier options
       * @record
       */


      function NotifierOptions() {}

      if (false) {}
      /**
       * Notifier configuration
       *
       * The notifier configuration defines what notifications look like, how they behave, and how they get animated. It is a global
       * configuration, which means that it only can be set once (at the beginning), and cannot be changed afterwards. Aligning to the world of
       * Angular, this configuration can be provided in the root app module - alternatively, a meaningful default configuration will be used.
       */


      var NotifierConfig =
      /**
       * Constructor
       *
       * @param {?=} customOptions
       */
      function NotifierConfig() {
        var customOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, NotifierConfig);

        // Set default values
        this.animations = {
          enabled: true,
          hide: {
            easing: 'ease',
            offset: 50,
            preset: 'fade',
            speed: 300
          },
          overlap: 150,
          shift: {
            easing: 'ease',
            speed: 300
          },
          show: {
            easing: 'ease',
            preset: 'slide',
            speed: 300
          }
        };
        this.behaviour = {
          autoHide: 7000,
          onClick: false,
          onMouseover: 'pauseAutoHide',
          showDismissButton: true,
          stacking: 4
        };
        this.position = {
          horizontal: {
            distance: 12,
            position: 'left'
          },
          vertical: {
            distance: 12,
            gap: 10,
            position: 'bottom'
          }
        };
        this.theme = 'material'; // The following merges the custom options into the notifier config, respecting the already set default values
        // This linear, more explicit and code-sizy workflow is preferred here over a recursive one (because we know the object structure)
        // Technical sidenote: Objects are merged, other types of values simply overwritten / copied

        if (customOptions.theme !== undefined) {
          this.theme = customOptions.theme;
        }

        if (customOptions.animations !== undefined) {
          if (customOptions.animations.enabled !== undefined) {
            this.animations.enabled = customOptions.animations.enabled;
          }

          if (customOptions.animations.overlap !== undefined) {
            this.animations.overlap = customOptions.animations.overlap;
          }

          if (customOptions.animations.hide !== undefined) {
            Object.assign(this.animations.hide, customOptions.animations.hide);
          }

          if (customOptions.animations.shift !== undefined) {
            Object.assign(this.animations.shift, customOptions.animations.shift);
          }

          if (customOptions.animations.show !== undefined) {
            Object.assign(this.animations.show, customOptions.animations.show);
          }
        }

        if (customOptions.behaviour !== undefined) {
          Object.assign(this.behaviour, customOptions.behaviour);
        }

        if (customOptions.position !== undefined) {
          if (customOptions.position.horizontal !== undefined) {
            Object.assign(this.position.horizontal, customOptions.position.horizontal);
          }

          if (customOptions.position.vertical !== undefined) {
            Object.assign(this.position.vertical, customOptions.position.vertical);
          }
        }
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      // tslint:disable variable-name

      /**
       * Injection Token for notifier options
       * @type {?}
       */


      var NotifierOptionsToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('[angular-notifier] Notifier Options');
      /**
       * Injection Token for notifier configuration
       * @type {?}
       */

      var NotifierConfigToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('[anuglar-notifier] Notifier Config');
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Notifier service
       *
       * This service provides access to the public notifier API. Once injected into a component, directive, pipe, service, or any other building
       * block of an applications, it can be used to show new notifications, and hide existing ones. Internally, it transforms API calls into
       * actions, which then get thrown into the action queue - eventually being processed at the right moment.
       */

      var NotifierService = /*#__PURE__*/function () {
        /**
         * Constructor
         *
         * @param {?} notifierQueueService Notifier queue service
         * @param {?} config               Notifier configuration, optionally injected as a dependency
         */
        function NotifierService(notifierQueueService, config) {
          _classCallCheck(this, NotifierService);

          this.queueService = notifierQueueService;
          this.config = config;
        }
        /**
         * Get the notifier configuration
         *
         * @return {?} Notifier configuration
         */


        _createClass(NotifierService, [{
          key: "getConfig",
          value: function getConfig() {
            return this.config;
          }
          /**
           * API: Show a new notification
           *
           * @param {?} notificationOptions Notification options
           * @return {?}
           */

        }, {
          key: "show",
          value: function show(notificationOptions) {
            this.queueService.push({
              payload: notificationOptions,
              type: 'SHOW'
            });
          }
          /**
           * API: Hide a specific notification, given its ID
           *
           * @param {?} notificationId ID of the notification to hide
           * @return {?}
           */

        }, {
          key: "hide",
          value: function hide(notificationId) {
            this.queueService.push({
              payload: notificationId,
              type: 'HIDE'
            });
          }
          /**
           * API: Hide the newest notification
           * @return {?}
           */

        }, {
          key: "hideNewest",
          value: function hideNewest() {
            this.queueService.push({
              type: 'HIDE_NEWEST'
            });
          }
          /**
           * API: Hide the oldest notification
           * @return {?}
           */

        }, {
          key: "hideOldest",
          value: function hideOldest() {
            this.queueService.push({
              type: 'HIDE_OLDEST'
            });
          }
          /**
           * API: Hide all notifications at once
           * @return {?}
           */

        }, {
          key: "hideAll",
          value: function hideAll() {
            this.queueService.push({
              type: 'HIDE_ALL'
            });
          }
          /**
           * API: Shortcut for showing a new notification
           *
           * @param {?} type             Type of the notification
           * @param {?} message          Message of the notification
           * @param {?=} notificationId
           * @return {?}
           */

        }, {
          key: "notify",
          value: function notify(type, message, notificationId) {
            /** @type {?} */
            var notificationOptions = {
              message: message,
              type: type
            };

            if (notificationId !== undefined) {
              notificationOptions.id = notificationId;
            }

            this.show(notificationOptions);
          }
        }]);

        return NotifierService;
      }();

      NotifierService.ɵfac = function NotifierService_Factory(t) {
        return new (t || NotifierService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NotifierQueueService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NotifierConfigToken));
      };

      NotifierService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NotifierService,
        factory: NotifierService.ɵfac
      });
      /** @nocollapse */

      NotifierService.ctorParameters = function () {
        return [{
          type: NotifierQueueService
        }, {
          type: NotifierConfig,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NotifierConfigToken]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotifierService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: NotifierQueueService
          }, {
            type: NotifierConfig,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NotifierConfigToken]
            }]
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Notifier container component
       * ----------------------------
       * This component acts as a wrapper for all notification components; consequently, it is responsible for creating a new notification
       * component and removing an existing notification component. Being more precicely, it also handles side effects of those actions, such as
       * shifting or even completely removing other notifications as well. Overall, this components handles actions coming from the queue service
       * by subscribing to its action stream.
       *
       * Technical sidenote:
       * This component has to be used somewhere in an application to work; it will not inject and create itself automatically, primarily in order
       * to not break the Angular AoT compilation. Moreover, this component (and also the notification components) set their change detection
       * strategy onPush, which means that we handle change detection manually in order to get the best performance. (#perfmatters)
       */


      var NotifierContainerComponent = /*#__PURE__*/function () {
        /**
         * Constructor
         *
         * @param {?} changeDetector       Change detector, used for manually triggering change detection runs
         * @param {?} notifierQueueService Notifier queue service
         * @param {?} notifierService      Notifier service
         */
        function NotifierContainerComponent(changeDetector, notifierQueueService, notifierService) {
          var _this = this;

          _classCallCheck(this, NotifierContainerComponent);

          this.changeDetector = changeDetector;
          this.queueService = notifierQueueService;
          this.config = notifierService.getConfig();
          this.notifications = []; // Connects this component up to the action queue, then handle incoming actions

          this.queueServiceSubscription = this.queueService.actionStream.subscribe(
          /**
          * @param {?} action
          * @return {?}
          */
          function (action) {
            _this.handleAction(action).then(
            /**
            * @return {?}
            */
            function () {
              _this.queueService["continue"]();
            });
          });
        }
        /**
         * Component destroyment lifecycle hook, cleans up the observable subsciption
         * @return {?}
         */


        _createClass(NotifierContainerComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.queueServiceSubscription) {
              this.queueServiceSubscription.unsubscribe();
            }
          }
          /**
           * Notification identifier, used as the ngFor trackby function
           *
           * @param {?} index        Index
           * @param {?} notification Notifier notification
           * @return {?} Notification ID as the unique identnfier
           */

        }, {
          key: "identifyNotification",
          value: function identifyNotification(index, notification) {
            return notification.id;
          }
          /**
           * Event handler, handles clicks on notification dismiss buttons
           *
           * @param {?} notificationId ID of the notification to dismiss
           * @return {?}
           */

        }, {
          key: "onNotificationDismiss",
          value: function onNotificationDismiss(notificationId) {
            this.queueService.push({
              payload: notificationId,
              type: 'HIDE'
            });
          }
          /**
           * Event handler, handles notification ready events
           *
           * @param {?} notificationComponent Notification component reference
           * @return {?}
           */

        }, {
          key: "onNotificationReady",
          value: function onNotificationReady(notificationComponent) {
            /** @type {?} */
            var currentNotification = this.notifications[this.notifications.length - 1];
            currentNotification.component = notificationComponent; // Save the new omponent reference

            this.continueHandleShowAction(currentNotification); // Continue with handling the show action
          }
          /**
           * Handle incoming actions by mapping action types to methods, and then running them
           *
           * @private
           * @param {?} action Action object
           * @return {?} Promise, resolved when done
           */

        }, {
          key: "handleAction",
          value: function handleAction(action) {
            switch (action.type) {
              // TODO: Maybe a map (actionType -> class method) is a cleaner solution here?
              case 'SHOW':
                return this.handleShowAction(action);

              case 'HIDE':
                return this.handleHideAction(action);

              case 'HIDE_OLDEST':
                return this.handleHideOldestAction(action);

              case 'HIDE_NEWEST':
                return this.handleHideNewestAction(action);

              case 'HIDE_ALL':
                return this.handleHideAllAction(action);

              default:
                return new Promise(
                /**
                * @param {?} resolve
                * @param {?} reject
                * @return {?}
                */
                function (resolve, reject) {
                  resolve(); // Ignore unknown action types
                });
            }
          }
          /**
           * Show a new notification
           *
           * We simply add the notification to the list, and then wait until its properly initialized / created / rendered.
           *
           * @private
           * @param {?} action Action object
           * @return {?} Promise, resolved when done
           */

        }, {
          key: "handleShowAction",
          value: function handleShowAction(action) {
            var _this2 = this;

            return new Promise(
            /**
            * @param {?} resolve
            * @param {?} reject
            * @return {?}
            */
            function (resolve, reject) {
              _this2.tempPromiseResolver = resolve; // Save the promise resolve function so that it can be called later on by another method

              _this2.addNotificationToList(new NotifierNotification(action.payload));
            });
          }
          /**
           * Continue to show a new notification (after the notification components is initialized / created / rendered).
           *
           * If this is the first (and thus only) notification, we can simply show it. Otherwhise, if stacking is disabled (or a low value), we
           * switch out notifications, in particular we hide the existing one, and then show our new one. Yet, if stacking is enabled, we first
           * shift all older notifications, and then show our new notification. In addition, if there are too many notification on the screen,
           * we hide the oldest one first. Furthermore, if configured, animation overlapping is applied.
           *
           * @private
           * @param {?} notification New notification to show
           * @return {?}
           */

        }, {
          key: "continueHandleShowAction",
          value: function continueHandleShowAction(notification) {
            var _this3 = this;

            // First (which means only one) notification in the list?

            /** @type {?} */
            var numberOfNotifications = this.notifications.length;

            if (numberOfNotifications === 1) {
              notification.component.show().then(this.tempPromiseResolver); // Done
            } else {
              /** @type {?} */
              var implicitStackingLimit = 2; // Stacking enabled? (stacking value below 2 means stacking is disabled)

              if (this.config.behaviour.stacking === false || this.config.behaviour.stacking < implicitStackingLimit) {
                this.notifications[0].component.hide().then(
                /**
                * @return {?}
                */
                function () {
                  _this3.removeNotificationFromList(_this3.notifications[0]);

                  notification.component.show().then(_this3.tempPromiseResolver); // Done
                });
              } else {
                /** @type {?} */
                var stepPromises = []; // Are there now too many notifications?

                if (numberOfNotifications > this.config.behaviour.stacking) {
                  /** @type {?} */
                  var oldNotifications = this.notifications.slice(1, numberOfNotifications - 1); // Are animations enabled?

                  if (this.config.animations.enabled) {
                    // Is animation overlap enabled?
                    if (this.config.animations.overlap !== false && this.config.animations.overlap > 0) {
                      stepPromises.push(this.notifications[0].component.hide());
                      setTimeout(
                      /**
                      * @return {?}
                      */
                      function () {
                        stepPromises.push(_this3.shiftNotifications(oldNotifications, notification.component.getHeight(), true));
                      }, this.config.animations.hide.speed - this.config.animations.overlap);
                      setTimeout(
                      /**
                      * @return {?}
                      */
                      function () {
                        stepPromises.push(notification.component.show());
                      }, this.config.animations.hide.speed + this.config.animations.shift.speed - this.config.animations.overlap);
                    } else {
                      stepPromises.push(new Promise(
                      /**
                      * @param {?} resolve
                      * @param {?} reject
                      * @return {?}
                      */
                      function (resolve, reject) {
                        _this3.notifications[0].component.hide().then(
                        /**
                        * @return {?}
                        */
                        function () {
                          _this3.shiftNotifications(oldNotifications, notification.component.getHeight(), true).then(
                          /**
                          * @return {?}
                          */
                          function () {
                            notification.component.show().then(resolve);
                          });
                        });
                      }));
                    }
                  } else {
                    stepPromises.push(this.notifications[0].component.hide());
                    stepPromises.push(this.shiftNotifications(oldNotifications, notification.component.getHeight(), true));
                    stepPromises.push(notification.component.show());
                  }
                } else {
                  /** @type {?} */
                  var _oldNotifications = this.notifications.slice(0, numberOfNotifications - 1); // Are animations enabled?


                  if (this.config.animations.enabled) {
                    // Is animation overlap enabled?
                    if (this.config.animations.overlap !== false && this.config.animations.overlap > 0) {
                      stepPromises.push(this.shiftNotifications(_oldNotifications, notification.component.getHeight(), true));
                      setTimeout(
                      /**
                      * @return {?}
                      */
                      function () {
                        stepPromises.push(notification.component.show());
                      }, this.config.animations.shift.speed - this.config.animations.overlap);
                    } else {
                      stepPromises.push(new Promise(
                      /**
                      * @param {?} resolve
                      * @param {?} reject
                      * @return {?}
                      */
                      function (resolve, reject) {
                        _this3.shiftNotifications(_oldNotifications, notification.component.getHeight(), true).then(
                        /**
                        * @return {?}
                        */
                        function () {
                          notification.component.show().then(resolve);
                        });
                      }));
                    }
                  } else {
                    stepPromises.push(this.shiftNotifications(_oldNotifications, notification.component.getHeight(), true));
                    stepPromises.push(notification.component.show());
                  }
                }

                Promise.all(stepPromises).then(
                /**
                * @return {?}
                */
                function () {
                  if (numberOfNotifications > _this3.config.behaviour.stacking) {
                    _this3.removeNotificationFromList(_this3.notifications[0]);
                  }

                  _this3.tempPromiseResolver();
                }); // Done
              }
            }
          }
          /**
           * Hide an existing notification
           *
           * Fist, we skip everything if there are no notifications at all, or the given notification does not exist. Then, we hide the given
           * notification. If there exist older notifications, we then shift them around to fill the gap. Once both hiding the given notification
           * and shifting the older notificaitons is done, the given notification gets finally removed (from the DOM).
           *
           * @private
           * @param {?} action Action object, payload contains the notification ID
           * @return {?} Promise, resolved when done
           */

        }, {
          key: "handleHideAction",
          value: function handleHideAction(action) {
            var _this4 = this;

            return new Promise(
            /**
            * @param {?} resolve
            * @param {?} reject
            * @return {?}
            */
            function (resolve, reject) {
              /** @type {?} */
              var stepPromises = []; // Does the notification exist / are there even any notifications? (let's prevent accidential errors)

              /** @type {?} */

              var notification = _this4.findNotificationById(action.payload);

              if (notification === undefined) {
                resolve();
                return;
              } // Get older notifications

              /** @type {?} */


              var notificationIndex = _this4.findNotificationIndexById(action.payload);

              if (notificationIndex === undefined) {
                resolve();
                return;
              }
              /** @type {?} */


              var oldNotifications = _this4.notifications.slice(0, notificationIndex); // Do older notifications exist, and thus do we need to shift other notifications as a consequence?


              if (oldNotifications.length > 0) {
                // Are animations enabled?
                if (_this4.config.animations.enabled && _this4.config.animations.hide.speed > 0) {
                  // Is animation overlap enabled?
                  if (_this4.config.animations.overlap !== false && _this4.config.animations.overlap > 0) {
                    stepPromises.push(notification.component.hide());
                    setTimeout(
                    /**
                    * @return {?}
                    */
                    function () {
                      stepPromises.push(_this4.shiftNotifications(oldNotifications, notification.component.getHeight(), false));
                    }, _this4.config.animations.hide.speed - _this4.config.animations.overlap);
                  } else {
                    notification.component.hide().then(
                    /**
                    * @return {?}
                    */
                    function () {
                      stepPromises.push(_this4.shiftNotifications(oldNotifications, notification.component.getHeight(), false));
                    });
                  }
                } else {
                  stepPromises.push(notification.component.hide());
                  stepPromises.push(_this4.shiftNotifications(oldNotifications, notification.component.getHeight(), false));
                }
              } else {
                stepPromises.push(notification.component.hide());
              } // Wait until both hiding and shifting is done, then remove the notification from the list


              Promise.all(stepPromises).then(
              /**
              * @return {?}
              */
              function () {
                _this4.removeNotificationFromList(notification);

                resolve(); // Done
              });
            });
          }
          /**
           * Hide the oldest notification (bridge to handleHideAction)
           *
           * @private
           * @param {?} action Action object
           * @return {?} Promise, resolved when done
           */

        }, {
          key: "handleHideOldestAction",
          value: function handleHideOldestAction(action) {
            // Are there any notifications? (prevent accidential errors)
            if (this.notifications.length === 0) {
              return new Promise(
              /**
              * @param {?} resolve
              * @param {?} reject
              * @return {?}
              */
              function (resolve, reject) {
                resolve();
              }); // Done
            } else {
              action.payload = this.notifications[0].id;
              return this.handleHideAction(action);
            }
          }
          /**
           * Hide the newest notification (bridge to handleHideAction)
           *
           * @private
           * @param {?} action Action object
           * @return {?} Promise, resolved when done
           */

        }, {
          key: "handleHideNewestAction",
          value: function handleHideNewestAction(action) {
            // Are there any notifications? (prevent accidential errors)
            if (this.notifications.length === 0) {
              return new Promise(
              /**
              * @param {?} resolve
              * @param {?} reject
              * @return {?}
              */
              function (resolve, reject) {
                resolve();
              }); // Done
            } else {
              action.payload = this.notifications[this.notifications.length - 1].id;
              return this.handleHideAction(action);
            }
          }
          /**
           * Hide all notifications at once
           *
           * @private
           * @param {?} action Action object
           * @return {?} Promise, resolved when done
           */

        }, {
          key: "handleHideAllAction",
          value: function handleHideAllAction(action) {
            var _this5 = this;

            return new Promise(
            /**
            * @param {?} resolve
            * @param {?} reject
            * @return {?}
            */
            function (resolve, reject) {
              // Are there any notifications? (prevent accidential errors)

              /** @type {?} */
              var numberOfNotifications = _this5.notifications.length;

              if (numberOfNotifications === 0) {
                resolve(); // Done

                return;
              } // Are animations enabled?


              if (_this5.config.animations.enabled && _this5.config.animations.hide.speed > 0 && _this5.config.animations.hide.offset !== false && _this5.config.animations.hide.offset > 0) {
                var _loop = function _loop(i) {
                  /** @type {?} */
                  var animationOffset = _this5.config.position.vertical.position === 'top' ? numberOfNotifications - 1 : i;
                  setTimeout(
                  /**
                  * @return {?}
                  */
                  function () {
                    _this5.notifications[i].component.hide().then(
                    /**
                    * @return {?}
                    */
                    function () {
                      // Are we done here, was this the last notification to be hidden?
                      if (_this5.config.position.vertical.position === 'top' && i === 0 || _this5.config.position.vertical.position === 'bottom' && i === numberOfNotifications - 1) {
                        _this5.removeAllNotificationsFromList();

                        resolve(); // Done
                      }
                    });
                  }, _this5.config.animations.hide.offset * animationOffset);
                };

                for (var i = numberOfNotifications - 1; i >= 0; i--) {
                  _loop(i);
                }
              } else {
                /** @type {?} */
                var stepPromises = [];

                for (var _i = numberOfNotifications - 1; _i >= 0; _i--) {
                  stepPromises.push(_this5.notifications[_i].component.hide());
                }

                Promise.all(stepPromises).then(
                /**
                * @return {?}
                */
                function () {
                  _this5.removeAllNotificationsFromList();

                  resolve(); // Done
                });
              }
            });
          }
          /**
           * Shift multiple notifications at once
           *
           * @private
           * @param {?} notifications List containing the notifications to be shifted
           * @param {?} distance      Distance to shift (in px)
           * @param {?} toMakePlace   Flag, defining in which direciton to shift
           * @return {?} Promise, resolved when done
           */

        }, {
          key: "shiftNotifications",
          value: function shiftNotifications(notifications, distance, toMakePlace) {
            return new Promise(
            /**
            * @param {?} resolve
            * @param {?} reject
            * @return {?}
            */
            function (resolve, reject) {
              // Are there any notifications to shift?
              if (notifications.length === 0) {
                resolve();
                return;
              }
              /** @type {?} */


              var notificationPromises = [];

              for (var i = notifications.length - 1; i >= 0; i--) {
                notificationPromises.push(notifications[i].component.shift(distance, toMakePlace));
              }

              Promise.all(notificationPromises).then(resolve); // Done
            });
          }
          /**
           * Add a new notification to the list of notifications (triggers change detection)
           *
           * @private
           * @param {?} notification Notification to add to the list of notifications
           * @return {?}
           */

        }, {
          key: "addNotificationToList",
          value: function addNotificationToList(notification) {
            this.notifications.push(notification);
            this.changeDetector.markForCheck(); // Run change detection because the notification list changed
          }
          /**
           * Remove an existing notification from the list of notifications (triggers change detection)
           *
           * @private
           * @param {?} notification Notification to be removed from the list of notifications
           * @return {?}
           */

        }, {
          key: "removeNotificationFromList",
          value: function removeNotificationFromList(notification) {
            this.notifications = this.notifications.filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item.component !== notification.component;
            });
            this.changeDetector.markForCheck(); // Run change detection because the notification list changed
          }
          /**
           * Remove all notifications from the list (triggers change detection)
           * @private
           * @return {?}
           */

        }, {
          key: "removeAllNotificationsFromList",
          value: function removeAllNotificationsFromList() {
            this.notifications = [];
            this.changeDetector.markForCheck(); // Run change detection because the notification list changed
          }
          /**
           * Helper: Find a notification in the notification list by a given notification ID
           *
           * @private
           * @param {?} notificationId Notification ID, used for finding notification
           * @return {?} Notification, undefined if not found
           */

        }, {
          key: "findNotificationById",
          value: function findNotificationById(notificationId) {
            return this.notifications.find(
            /**
            * @param {?} currentNotification
            * @return {?}
            */
            function (currentNotification) {
              return currentNotification.id === notificationId;
            });
          }
          /**
           * Helper: Find a notification's index by a given notification ID
           *
           * @private
           * @param {?} notificationId Notification ID, used for finding a notification's index
           * @return {?} Notification index, undefined if not found
           */

        }, {
          key: "findNotificationIndexById",
          value: function findNotificationIndexById(notificationId) {
            /** @type {?} */
            var notificationIndex = this.notifications.findIndex(
            /**
            * @param {?} currentNotification
            * @return {?}
            */
            function (currentNotification) {
              return currentNotification.id === notificationId;
            });
            return notificationIndex !== -1 ? notificationIndex : undefined;
          }
        }]);

        return NotifierContainerComponent;
      }();

      NotifierContainerComponent.ɵfac = function NotifierContainerComponent_Factory(t) {
        return new (t || NotifierContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NotifierQueueService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NotifierService));
      };

      NotifierContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotifierContainerComponent,
        selectors: [["notifier-container"]],
        hostAttrs: [1, "notifier__container"],
        decls: 2,
        vars: 2,
        consts: [["class", "notifier__container-list", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "notifier__container-list"], [3, "notification", "ready", "dismiss"]],
        template: function NotifierContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotifierContainerComponent_li_1_Template, 2, 1, "li", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications)("ngForTrackBy", ctx.identifyNotification);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], NotifierNotificationComponent];
        },
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      NotifierContainerComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: NotifierQueueService
        }, {
          type: NotifierService
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotifierContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            // (#perfmatters)
            host: {
              "class": 'notifier__container'
            },
            selector: 'notifier-container',
            template: "<ul>\n\t<li class=\"notifier__container-list\" *ngFor=\"let notification of notifications; trackBy: identifyNotification;\">\n\t\t<notifier-notification\n\t\t\t[notification]=\"notification\"\n\t\t\t(ready)=\"onNotificationReady( $event )\"\n\t\t\t(dismiss)=\"onNotificationDismiss( $event )\">\n\t\t</notifier-notification>\n\t</li>\n</ul>\n"
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: NotifierQueueService
          }, {
            type: NotifierService
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ɵ0 =
      /**
      * @return {?}
      */
      function ɵ0() {
        return {
          from: {
            opacity: '1'
          },
          to: {
            opacity: '0'
          }
        };
      },
          ɵ1 =
      /**
      * @return {?}
      */
      function ɵ1() {
        return {
          from: {
            opacity: '0'
          },
          to: {
            opacity: '1'
          }
        };
      };
      /**
       * Fade animation preset
       * @type {?}
       */


      var fade = {
        hide: ɵ0,
        show: ɵ1
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      var ɵ0$1 =
      /**
      * @param {?} notification
      * @return {?}
      */
      function ɵ0$1(notification) {
        // Prepare variables

        /** @type {?} */
        var config = notification.component.getConfig();
        /** @type {?} */

        var shift = notification.component.getShift();
        /** @type {?} */

        var from;
        /** @type {?} */

        var to; // Configure variables, depending on configuration and component

        if (config.position.horizontal.position === 'left') {
          from = {
            transform: "translate3d( 0, ".concat(shift, "px, 0 )")
          };
          to = {
            transform: "translate3d( calc( -100% - ".concat(config.position.horizontal.distance, "px - 10px ), ").concat(shift, "px, 0 )")
          };
        } else if (config.position.horizontal.position === 'right') {
          from = {
            transform: "translate3d( 0, ".concat(shift, "px, 0 )")
          };
          to = {
            transform: "translate3d( calc( 100% + ".concat(config.position.horizontal.distance, "px + 10px ), ").concat(shift, "px, 0 )")
          };
        } else {
          /** @type {?} */
          var horizontalPosition;

          if (config.position.vertical.position === 'top') {
            horizontalPosition = "calc( -100% - ".concat(config.position.horizontal.distance, "px - 10px )");
          } else {
            horizontalPosition = "calc( 100% + ".concat(config.position.horizontal.distance, "px + 10px )");
          }

          from = {
            transform: "translate3d( -50%, ".concat(shift, "px, 0 )")
          };
          to = {
            transform: "translate3d( -50%, ".concat(horizontalPosition, ", 0 )")
          };
        } // Done


        return {
          from: from,
          to: to
        };
      },
          ɵ1$1 =
      /**
      * @param {?} notification
      * @return {?}
      */
      function ɵ1$1(notification) {
        // Prepare variables

        /** @type {?} */
        var config = notification.component.getConfig();
        /** @type {?} */

        var from;
        /** @type {?} */

        var to; // Configure variables, depending on configuration and component

        if (config.position.horizontal.position === 'left') {
          from = {
            transform: "translate3d( calc( -100% - ".concat(config.position.horizontal.distance, "px - 10px ), 0, 0 )")
          };
          to = {
            transform: 'translate3d( 0, 0, 0 )'
          };
        } else if (config.position.horizontal.position === 'right') {
          from = {
            transform: "translate3d( calc( 100% + ".concat(config.position.horizontal.distance, "px + 10px ), 0, 0 )")
          };
          to = {
            transform: 'translate3d( 0, 0, 0 )'
          };
        } else {
          /** @type {?} */
          var horizontalPosition;

          if (config.position.vertical.position === 'top') {
            horizontalPosition = "calc( -100% - ".concat(config.position.horizontal.distance, "px - 10px )");
          } else {
            horizontalPosition = "calc( 100% + ".concat(config.position.horizontal.distance, "px + 10px )");
          }

          from = {
            transform: "translate3d( -50%, ".concat(horizontalPosition, ", 0 )")
          };
          to = {
            transform: 'translate3d( -50%, 0, 0 )'
          };
        } // Done


        return {
          from: from,
          to: to
        };
      };
      /**
       * Slide animation preset
       * @type {?}
       */


      var slide = {
        hide: ɵ0$1,
        show: ɵ1$1
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Notifier animation service
       */

      var NotifierAnimationService = /*#__PURE__*/function () {
        /**
         * Constructor
         */
        function NotifierAnimationService() {
          _classCallCheck(this, NotifierAnimationService);

          this.animationPresets = {
            fade: fade,
            slide: slide
          };
        }
        /**
         * Get animation data
         *
         * This method generates all data the Web Animations API needs to animate our notification. The result depends on both the animation
         * direction (either in or out) as well as the notifications (and its attributes) itself.
         *
         * @param {?} direction    Animation direction, either in or out
         * @param {?} notification Notification the animation data should be generated for
         * @return {?} Animation information
         */


        _createClass(NotifierAnimationService, [{
          key: "getAnimationData",
          value: function getAnimationData(direction, notification) {
            // Get all necessary animation data

            /** @type {?} */
            var keyframes;
            /** @type {?} */

            var duration;
            /** @type {?} */

            var easing;

            if (direction === 'show') {
              keyframes = this.animationPresets[notification.component.getConfig().animations.show.preset].show(notification);
              duration = notification.component.getConfig().animations.show.speed;
              easing = notification.component.getConfig().animations.show.easing;
            } else {
              keyframes = this.animationPresets[notification.component.getConfig().animations.hide.preset].hide(notification);
              duration = notification.component.getConfig().animations.hide.speed;
              easing = notification.component.getConfig().animations.hide.easing;
            } // Build and return animation data


            return {
              keyframes: [keyframes.from, keyframes.to],
              options: {
                duration: duration,
                easing: easing,
                fill: 'forwards' // Keep the newly painted state after the animation finished

              }
            };
          }
        }]);

        return NotifierAnimationService;
      }();

      NotifierAnimationService.ɵfac = function NotifierAnimationService_Factory(t) {
        return new (t || NotifierAnimationService)();
      };

      NotifierAnimationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NotifierAnimationService,
        factory: NotifierAnimationService.ɵfac
      });
      /** @nocollapse */

      NotifierAnimationService.ctorParameters = function () {
        return [];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotifierAnimationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Notifier timer service
       *
       * This service acts as a timer, needed due to the still rather limited setTimeout JavaScript API. The timer service can start and stop a
       * timer. Furthermore, it can also pause the timer at any time, and resume later on. The timer API workd promise-based.
       */


      var NotifierTimerService = /*#__PURE__*/function () {
        /**
         * Constructor
         */
        function NotifierTimerService() {
          _classCallCheck(this, NotifierTimerService);

          this.now = 0;
          this.remaining = 0;
        }
        /**
         * Start (or resume) the timer
         *
         * @param {?} duration Timer duration, in ms
         * @return {?} Promise, resolved once the timer finishes
         */


        _createClass(NotifierTimerService, [{
          key: "start",
          value: function start(duration) {
            var _this6 = this;

            return new Promise(
            /**
            * @param {?} resolve
            * @param {?} reject
            * @return {?}
            */
            function (resolve, reject) {
              // For the first run ...
              _this6.remaining = duration; // Setup, then start the timer

              _this6.finishPromiseResolver = resolve;

              _this6["continue"]();
            });
          }
          /**
           * Pause the timer
           * @return {?}
           */

        }, {
          key: "pause",
          value: function pause() {
            clearTimeout(this.timerId);
            this.remaining -= new Date().getTime() - this.now;
          }
          /**
           * Continue the timer
           * @return {?}
           */

        }, {
          key: "continue",
          value: function _continue() {
            var _this7 = this;

            this.now = new Date().getTime();
            this.timerId = window.setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this7.finish();
            }, this.remaining);
          }
          /**
           * Stop the timer
           * @return {?}
           */

        }, {
          key: "stop",
          value: function stop() {
            clearTimeout(this.timerId);
            this.remaining = 0;
          }
          /**
           * Finish up the timeout by resolving the timer promise
           * @private
           * @return {?}
           */

        }, {
          key: "finish",
          value: function finish() {
            this.finishPromiseResolver();
          }
        }]);

        return NotifierTimerService;
      }();

      NotifierTimerService.ɵfac = function NotifierTimerService_Factory(t) {
        return new (t || NotifierTimerService)();
      };

      NotifierTimerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NotifierTimerService,
        factory: NotifierTimerService.ɵfac
      });
      /** @nocollapse */

      NotifierTimerService.ctorParameters = function () {
        return [];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotifierTimerService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Notifier notification component
       * -------------------------------
       * This component is responsible for actually displaying the notification on screen. In addition, it's able to show and hide this
       * notification, in particular to animate this notification in and out, as well as shift (move) this notification vertically around.
       * Furthermore, the notification component handles all interactions the user has with this notification / component, such as clicks and
       * mouse movements.
       */


      var NotifierNotificationComponent = /*#__PURE__*/function () {
        /**
         * Constructor
         *
         * @param {?} elementRef               Reference to the component's element
         * @param {?} renderer                 Angular renderer
         * @param {?} notifierService          Notifier service
         * @param {?} notifierTimerService     Notifier timer service
         * @param {?} notifierAnimationService Notifier animation service
         */
        function NotifierNotificationComponent(elementRef, renderer, notifierService, notifierTimerService, notifierAnimationService) {
          _classCallCheck(this, NotifierNotificationComponent);

          this.config = notifierService.getConfig();
          this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.dismiss = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.timerService = notifierTimerService;
          this.animationService = notifierAnimationService;
          this.renderer = renderer;
          this.element = elementRef.nativeElement;
          this.elementShift = 0;
        }
        /**
         * Component after view init lifecycle hook, setts up the component and then emits the ready event
         * @return {?}
         */


        _createClass(NotifierNotificationComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.setup();
            this.elementHeight = this.element.offsetHeight;
            this.elementWidth = this.element.offsetWidth;
            this.ready.emit(this);
          }
          /**
           * Get the notifier config
           *
           * @return {?} Notifier configuration
           */

        }, {
          key: "getConfig",
          value: function getConfig() {
            return this.config;
          }
          /**
           * Get notification element height (in px)
           *
           * @return {?} Notification element height (in px)
           */

        }, {
          key: "getHeight",
          value: function getHeight() {
            return this.elementHeight;
          }
          /**
           * Get notification element width (in px)
           *
           * @return {?} Notification element height (in px)
           */

        }, {
          key: "getWidth",
          value: function getWidth() {
            return this.elementWidth;
          }
          /**
           * Get notification shift offset (in px)
           *
           * @return {?} Notification element shift offset (in px)
           */

        }, {
          key: "getShift",
          value: function getShift() {
            return this.elementShift;
          }
          /**
           * Show (animate in) this notification
           *
           * @return {?} Promise, resolved when done
           */

        }, {
          key: "show",
          value: function show() {
            var _this8 = this;

            return new Promise(
            /**
            * @param {?} resolve
            * @param {?} reject
            * @return {?}
            */
            function (resolve, reject) {
              // Are animations enabled?
              if (_this8.config.animations.enabled && _this8.config.animations.show.speed > 0) {
                // Get animation data

                /** @type {?} */
                var animationData = _this8.animationService.getAnimationData('show', _this8.notification); // Set initial styles (styles before animation), prevents quick flicker when animation starts

                /** @type {?} */


                var animatedProperties = Object.keys(animationData.keyframes[0]);

                for (var i = animatedProperties.length - 1; i >= 0; i--) {
                  _this8.renderer.setStyle(_this8.element, animatedProperties[i], animationData.keyframes[0][animatedProperties[i]]);
                } // Animate notification in


                _this8.renderer.setStyle(_this8.element, 'visibility', 'visible');
                /** @type {?} */


                var animation = _this8.element.animate(animationData.keyframes, animationData.options);

                animation.onfinish =
                /**
                * @return {?}
                */
                function () {
                  _this8.startAutoHideTimer();

                  resolve(); // Done
                };
              } else {
                // Show notification
                _this8.renderer.setStyle(_this8.element, 'visibility', 'visible');

                _this8.startAutoHideTimer();

                resolve(); // Done
              }
            });
          }
          /**
           * Hide (animate out) this notification
           *
           * @return {?} Promise, resolved when done
           */

        }, {
          key: "hide",
          value: function hide() {
            var _this9 = this;

            return new Promise(
            /**
            * @param {?} resolve
            * @param {?} reject
            * @return {?}
            */
            function (resolve, reject) {
              _this9.stopAutoHideTimer(); // Are animations enabled?


              if (_this9.config.animations.enabled && _this9.config.animations.hide.speed > 0) {
                /** @type {?} */
                var animationData = _this9.animationService.getAnimationData('hide', _this9.notification);
                /** @type {?} */


                var animation = _this9.element.animate(animationData.keyframes, animationData.options);

                animation.onfinish =
                /**
                * @return {?}
                */
                function () {
                  resolve(); // Done
                };
              } else {
                resolve(); // Done
              }
            });
          }
          /**
           * Shift (move) this notification
           *
           * @param {?} distance         Distance to shift (in px)
           * @param {?} shiftToMakePlace Flag, defining in which direction to shift
           * @return {?} Promise, resolved when done
           */

        }, {
          key: "shift",
          value: function shift(distance, shiftToMakePlace) {
            var _this10 = this;

            return new Promise(
            /**
            * @param {?} resolve
            * @param {?} reject
            * @return {?}
            */
            function (resolve, reject) {
              // Calculate new position (position after the shift)

              /** @type {?} */
              var newElementShift;

              if (_this10.config.position.vertical.position === 'top' && shiftToMakePlace || _this10.config.position.vertical.position === 'bottom' && !shiftToMakePlace) {
                newElementShift = _this10.elementShift + distance + _this10.config.position.vertical.gap;
              } else {
                newElementShift = _this10.elementShift - distance - _this10.config.position.vertical.gap;
              }
              /** @type {?} */


              var horizontalPosition = _this10.config.position.horizontal.position === 'middle' ? '-50%' : '0'; // Are animations enabled?

              if (_this10.config.animations.enabled && _this10.config.animations.shift.speed > 0) {
                /** @type {?} */
                var animationData = {
                  // TODO: Extract into animation service
                  keyframes: [{
                    transform: "translate3d( ".concat(horizontalPosition, ", ").concat(_this10.elementShift, "px, 0 )")
                  }, {
                    transform: "translate3d( ".concat(horizontalPosition, ", ").concat(newElementShift, "px, 0 )")
                  }],
                  options: {
                    duration: _this10.config.animations.shift.speed,
                    easing: _this10.config.animations.shift.easing,
                    fill: 'forwards'
                  }
                };
                _this10.elementShift = newElementShift;
                /** @type {?} */

                var animation = _this10.element.animate(animationData.keyframes, animationData.options);

                animation.onfinish =
                /**
                * @return {?}
                */
                function () {
                  resolve(); // Done
                };
              } else {
                _this10.renderer.setStyle(_this10.element, 'transform', "translate3d( ".concat(horizontalPosition, ", ").concat(newElementShift, "px, 0 )"));

                _this10.elementShift = newElementShift;
                resolve(); // Done
              }
            });
          }
          /**
           * Handle click on dismiss button
           * @return {?}
           */

        }, {
          key: "onClickDismiss",
          value: function onClickDismiss() {
            this.dismiss.emit(this.notification.id);
          }
          /**
           * Handle mouseover over notification area
           * @return {?}
           */

        }, {
          key: "onNotificationMouseover",
          value: function onNotificationMouseover() {
            if (this.config.behaviour.onMouseover === 'pauseAutoHide') {
              this.pauseAutoHideTimer();
            } else if (this.config.behaviour.onMouseover === 'resetAutoHide') {
              this.stopAutoHideTimer();
            }
          }
          /**
           * Handle mouseout from notification area
           * @return {?}
           */

        }, {
          key: "onNotificationMouseout",
          value: function onNotificationMouseout() {
            if (this.config.behaviour.onMouseover === 'pauseAutoHide') {
              this.continueAutoHideTimer();
            } else if (this.config.behaviour.onMouseover === 'resetAutoHide') {
              this.startAutoHideTimer();
            }
          }
          /**
           * Handle click on notification area
           * @return {?}
           */

        }, {
          key: "onNotificationClick",
          value: function onNotificationClick() {
            if (this.config.behaviour.onClick === 'hide') {
              this.onClickDismiss();
            }
          }
          /**
           * Start the auto hide timer (if enabled)
           * @private
           * @return {?}
           */

        }, {
          key: "startAutoHideTimer",
          value: function startAutoHideTimer() {
            var _this11 = this;

            if (this.config.behaviour.autoHide !== false && this.config.behaviour.autoHide > 0) {
              this.timerService.start(this.config.behaviour.autoHide).then(
              /**
              * @return {?}
              */
              function () {
                _this11.onClickDismiss();
              });
            }
          }
          /**
           * Pause the auto hide timer (if enabled)
           * @private
           * @return {?}
           */

        }, {
          key: "pauseAutoHideTimer",
          value: function pauseAutoHideTimer() {
            if (this.config.behaviour.autoHide !== false && this.config.behaviour.autoHide > 0) {
              this.timerService.pause();
            }
          }
          /**
           * Continue the auto hide timer (if enabled)
           * @private
           * @return {?}
           */

        }, {
          key: "continueAutoHideTimer",
          value: function continueAutoHideTimer() {
            if (this.config.behaviour.autoHide !== false && this.config.behaviour.autoHide > 0) {
              this.timerService["continue"]();
            }
          }
          /**
           * Stop the auto hide timer (if enabled)
           * @private
           * @return {?}
           */

        }, {
          key: "stopAutoHideTimer",
          value: function stopAutoHideTimer() {
            if (this.config.behaviour.autoHide !== false && this.config.behaviour.autoHide > 0) {
              this.timerService.stop();
            }
          }
          /**
           * Initial notification setup
           * @private
           * @return {?}
           */

        }, {
          key: "setup",
          value: function setup() {
            // Set start position (initially the exact same for every new notification)
            if (this.config.position.horizontal.position === 'left') {
              this.renderer.setStyle(this.element, 'left', "".concat(this.config.position.horizontal.distance, "px"));
            } else if (this.config.position.horizontal.position === 'right') {
              this.renderer.setStyle(this.element, 'right', "".concat(this.config.position.horizontal.distance, "px"));
            } else {
              this.renderer.setStyle(this.element, 'left', '50%'); // Let's get the GPU handle some work as well (#perfmatters)

              this.renderer.setStyle(this.element, 'transform', 'translate3d( -50%, 0, 0 )');
            }

            if (this.config.position.vertical.position === 'top') {
              this.renderer.setStyle(this.element, 'top', "".concat(this.config.position.vertical.distance, "px"));
            } else {
              this.renderer.setStyle(this.element, 'bottom', "".concat(this.config.position.vertical.distance, "px"));
            } // Add classes (responsible for visual design)


            this.renderer.addClass(this.element, "notifier__notification--".concat(this.notification.type));
            this.renderer.addClass(this.element, "notifier__notification--".concat(this.config.theme));
          }
        }]);

        return NotifierNotificationComponent;
      }();

      NotifierNotificationComponent.ɵfac = function NotifierNotificationComponent_Factory(t) {
        return new (t || NotifierNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NotifierTimerService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NotifierAnimationService));
      };

      NotifierNotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotifierNotificationComponent,
        selectors: [["notifier-notification"]],
        hostAttrs: [1, "notifier__notification"],
        hostBindings: function NotifierNotificationComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotifierNotificationComponent_click_HostBindingHandler() {
              return ctx.onNotificationClick();
            })("mouseout", function NotifierNotificationComponent_mouseout_HostBindingHandler() {
              return ctx.onNotificationMouseout();
            })("mouseover", function NotifierNotificationComponent_mouseover_HostBindingHandler() {
              return ctx.onNotificationMouseover();
            });
          }
        },
        inputs: {
          notification: "notification"
        },
        outputs: {
          ready: "ready",
          dismiss: "dismiss"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([// We provide the timer to the component's local injector, so that every notification components gets its own
        // instance of the timer service, thus running their timers independently from each other
        NotifierTimerService])],
        decls: 3,
        vars: 2,
        consts: [[3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf", "ngIfElse"], ["predefinedNotification", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "notifier__notification-message"], ["class", "notifier__notification-button", "type", "button", "title", "dismiss", 3, "click", 4, "ngIf"], ["type", "button", "title", "dismiss", 1, "notifier__notification-button", 3, "click"], ["viewBox", "0 0 24 24", "width", "20", "height", "20", 1, "notifier__notification-button-icon"], ["d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"]],
        template: function NotifierNotificationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NotifierNotificationComponent_ng_container_0_Template, 1, 4, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotifierNotificationComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notification.template)("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      NotifierNotificationComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: NotifierService
        }, {
          type: NotifierTimerService
        }, {
          type: NotifierAnimationService
        }];
      };

      NotifierNotificationComponent.propDecorators = {
        notification: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ready: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        dismiss: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotifierNotificationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            // (#perfmatters)
            host: {
              '(click)': 'onNotificationClick()',
              '(mouseout)': 'onNotificationMouseout()',
              '(mouseover)': 'onNotificationMouseover()',
              "class": 'notifier__notification'
            },
            providers: [// We provide the timer to the component's local injector, so that every notification components gets its own
            // instance of the timer service, thus running their timers independently from each other
            NotifierTimerService],
            selector: 'notifier-notification',
            template: "<ng-container *ngIf=\"notification.template; else predefinedNotification\" [ngTemplateOutlet]=\"notification.template\" [ngTemplateOutletContext]=\"{ notification: notification }\">\n</ng-container>\n\n<ng-template #predefinedNotification>\n\t<p class=\"notifier__notification-message\">{{ notification.message }}</p>\n\t<button class=\"notifier__notification-button\" type=\"button\" title=\"dismiss\" *ngIf=\"config.behaviour.showDismissButton\" (click)=\"onClickDismiss()\">\n\t\t<svg class=\"notifier__notification-button-icon\" viewBox=\"0 0 24 24\" width=\"20\" height=\"20\">\n\t\t\t<path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\" />\n\t\t</svg>\n\t</button>\n</ng-template>\n"
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: NotifierService
          }, {
            type: NotifierTimerService
          }, {
            type: NotifierAnimationService
          }];
        }, {
          ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          dismiss: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          notification: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Factory for a notifier configuration with custom options
       *
       * Sidenote:
       * Required as Angular AoT compilation cannot handle dynamic functions; see <https://github.com/angular/angular/issues/11262>.
       *
       * @param {?} options - Custom notifier options
       * @return {?} - Notifier configuration as result
       */


      function notifierCustomConfigFactory(options) {
        return new NotifierConfig(options);
      }
      /**
       * Factory for a notifier configuration with default options
       *
       * Sidenote:
       * Required as Angular AoT compilation cannot handle dynamic functions; see <https://github.com/angular/angular/issues/11262>.
       *
       * @return {?} - Notifier configuration as result
       */


      function notifierDefaultConfigFactory() {
        return new NotifierConfig({});
      }
      /**
       * Notifier module
       */


      var NotifierModule = /*#__PURE__*/function () {
        function NotifierModule() {
          _classCallCheck(this, NotifierModule);
        }

        _createClass(NotifierModule, null, [{
          key: "withConfig",

          /**
           * Setup the notifier module with custom providers, in this case with a custom configuration based on the givne options
           *
           * @param {?=} options
           * @return {?} - Notifier module with custom providers
           */
          value: function withConfig() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return {
              ngModule: NotifierModule,
              providers: [// Provide the options itself upfront (as we need to inject them as dependencies -- see below)
              {
                provide: NotifierOptionsToken,
                useValue: options
              }, // Provide a custom notifier configuration, based on the given notifier options
              {
                deps: [NotifierOptionsToken],
                provide: NotifierConfigToken,
                useFactory: notifierCustomConfigFactory
              }]
            };
          }
        }]);

        return NotifierModule;
      }();

      NotifierModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NotifierModule
      });
      NotifierModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NotifierModule_Factory(t) {
          return new (t || NotifierModule)();
        },
        providers: [NotifierAnimationService, NotifierService, NotifierQueueService, // Provide the default notifier configuration if just the module is imported
        {
          provide: NotifierConfigToken,
          useFactory: notifierDefaultConfigFactory
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotifierModule, {
          declarations: function declarations() {
            return [NotifierContainerComponent, NotifierNotificationComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
          },
          exports: function exports() {
            return [NotifierContainerComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotifierModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [NotifierContainerComponent, NotifierNotificationComponent],
            exports: [NotifierContainerComponent],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            providers: [NotifierAnimationService, NotifierService, NotifierQueueService, // Provide the default notifier configuration if just the module is imported
            {
              provide: NotifierConfigToken,
              useFactory: notifierDefaultConfigFactory
            }]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=angular-notifier.js.map

      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/accordion/accordion.component.html":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/accordion/accordion.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentAccordionAccordionComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n\t<div class=\"col-12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Toggle Accordion</h4>\n\t\t\t\t<h6 class=\"card-subtitle\">This is basic toggletype accordion</h6>\n\t\t\t\t<ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\n\t\t\t\t\t<ngb-panel title=\"Simple\">\n\t\t\t\t\t\t<ng-template ngbPanelContent>\n\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon\n\t\t\t\t\t\t\tofficia\n\t\t\t\t\t\t\taute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\n\t\t\t\t\t\t\ttempor,\n\t\t\t\t\t\t\tsunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\n\t\t\t\t\t\t\thelvetica,\n\t\t\t\t\t\t\tcraft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.\n\t\t\t\t\t\t\tLeggings\n\t\t\t\t\t\t\toccaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them\n\t\t\t\t\t\t\taccusamus\n\t\t\t\t\t\t\tlabore sustainable VHS.\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</ngb-panel>\n\t\t\t\t\t<ngb-panel>\n\t\t\t\t\t\t<ng-template ngbPanelTitle>\n\t\t\t\t\t\t\t<span>&#9733; <b>Fancy</b> title &#9733;</span>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t<ng-template ngbPanelContent>\n\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon\n\t\t\t\t\t\t\tofficia\n\t\t\t\t\t\t\taute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\n\t\t\t\t\t\t\ttempor,\n\t\t\t\t\t\t\tsunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\n\t\t\t\t\t\t\thelvetica,\n\t\t\t\t\t\t\tcraft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.\n\t\t\t\t\t\t\tLeggings\n\t\t\t\t\t\t\toccaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them\n\t\t\t\t\t\t\taccusamus\n\t\t\t\t\t\t\tlabore sustainable VHS.\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</ngb-panel>\n\t\t\t\t\t<ngb-panel title=\"Disabled\" [disabled]=\"true\">\n\t\t\t\t\t\t<ng-template ngbPanelContent>\n\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon\n\t\t\t\t\t\t\tofficia\n\t\t\t\t\t\t\taute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\n\t\t\t\t\t\t\ttempor,\n\t\t\t\t\t\t\tsunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\n\t\t\t\t\t\t\thelvetica,\n\t\t\t\t\t\t\tcraft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.\n\t\t\t\t\t\t\tLeggings\n\t\t\t\t\t\t\toccaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them\n\t\t\t\t\t\t\taccusamus\n\t\t\t\t\t\t\tlabore sustainable VHS.\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</ngb-panel>\n\t\t\t\t</ngb-accordion>\n\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Accordion</h4>\n\t\t\t\t<h6 class=\"card-subtitle\">This is One open panel accordion</h6>\n\t\t\t\t<ngb-accordion [closeOthers]=\"true\" activeIds=\"static-1\">\n\t\t\t\t\t<ngb-panel id=\"static-1\" title=\"Simple\">\n\t\t\t\t\t\t<ng-template ngbPanelContent>\n\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon\n\t\t\t\t\t\t\tofficia\n\t\t\t\t\t\t\taute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\n\t\t\t\t\t\t\ttempor,\n\t\t\t\t\t\t\tsunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\n\t\t\t\t\t\t\thelvetica,\n\t\t\t\t\t\t\tcraft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.\n\t\t\t\t\t\t\tLeggings\n\t\t\t\t\t\t\toccaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them\n\t\t\t\t\t\t\taccusamus\n\t\t\t\t\t\t\tlabore sustainable VHS.\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</ngb-panel>\n\t\t\t\t\t<ngb-panel id=\"static-2\">\n\t\t\t\t\t\t<ng-template ngbPanelTitle>\n\t\t\t\t\t\t\t<span>&#9733; <b>Fancy</b> title &#9733;</span>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t<ng-template ngbPanelContent>\n\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon\n\t\t\t\t\t\t\tofficia\n\t\t\t\t\t\t\taute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\n\t\t\t\t\t\t\ttempor,\n\t\t\t\t\t\t\tsunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\n\t\t\t\t\t\t\thelvetica,\n\t\t\t\t\t\t\tcraft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.\n\t\t\t\t\t\t\tLeggings\n\t\t\t\t\t\t\toccaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them\n\t\t\t\t\t\t\taccusamus\n\t\t\t\t\t\t\tlabore sustainable VHS.\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</ngb-panel>\n\t\t\t\t\t<ngb-panel id=\"static-3\" title=\"Disabled\" [disabled]=\"true\">\n\t\t\t\t\t\t<ng-template ngbPanelContent>\n\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon\n\t\t\t\t\t\t\tofficia\n\t\t\t\t\t\t\taute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\n\t\t\t\t\t\t\ttempor,\n\t\t\t\t\t\t\tsunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\n\t\t\t\t\t\t\thelvetica,\n\t\t\t\t\t\t\tcraft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.\n\t\t\t\t\t\t\tLeggings\n\t\t\t\t\t\t\toccaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them\n\t\t\t\t\t\t\taccusamus\n\t\t\t\t\t\t\tlabore sustainable VHS.\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</ngb-panel>\n\t\t\t\t</ngb-accordion>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Toggle Panel</h4>\n\t\t\t\t<h6 class=\"card-subtitle\">This is toggle panel accordion</h6>\n\t\t\t\t<ngb-accordion #acc=\"ngbAccordion\">\n\t\t\t\t\t<ngb-panel id=\"toggle-1\" title=\"First panel\">\n\t\t\t\t\t\t<ng-template ngbPanelContent>\n\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon\n\t\t\t\t\t\t\tofficia\n\t\t\t\t\t\t\taute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\n\t\t\t\t\t\t\ttempor,\n\t\t\t\t\t\t\tsunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\n\t\t\t\t\t\t\thelvetica,\n\t\t\t\t\t\t\tcraft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.\n\t\t\t\t\t\t\tLeggings\n\t\t\t\t\t\t\toccaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them\n\t\t\t\t\t\t\taccusamus\n\t\t\t\t\t\t\tlabore sustainable VHS.\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</ngb-panel>\n\t\t\t\t\t<ngb-panel id=\"toggle-2\" title=\"Second\">\n\t\t\t\t\t\t<ng-template ngbPanelContent>\n\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon\n\t\t\t\t\t\t\tofficia\n\t\t\t\t\t\t\taute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\n\t\t\t\t\t\t\ttempor,\n\t\t\t\t\t\t\tsunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\n\t\t\t\t\t\t\thelvetica,\n\t\t\t\t\t\t\tcraft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.\n\t\t\t\t\t\t\tLeggings\n\t\t\t\t\t\t\toccaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them\n\t\t\t\t\t\t\taccusamus\n\t\t\t\t\t\t\tlabore sustainable VHS.\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</ngb-panel>\n\t\t\t\t</ngb-accordion>\n\n\t\t\t\t<p class=\"m-t-40\">\n\t\t\t\t\t<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"acc.toggle('toggle-1')\">Toggle first</button>\n\t\t\t\t\t<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"acc.toggle('toggle-2')\">Toggle second</button>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Prevent panel toggle</h4>\n\t\t\t\t<h6 class=\"card-subtitle\">This is prevent toggle panel accordion</h6>\n\t\t\t\t<ngb-accordion (panelChange)=\"beforeChange($event)\">\n\t\t\t\t\t<ngb-panel id=\"preventchange-1\" title=\"Simple\">\n\t\t\t\t\t\t<ng-template ngbPanelContent>\n\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon\n\t\t\t\t\t\t\tofficia\n\t\t\t\t\t\t\taute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\n\t\t\t\t\t\t\ttempor,\n\t\t\t\t\t\t\tsunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\n\t\t\t\t\t\t\thelvetica,\n\t\t\t\t\t\t\tcraft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.\n\t\t\t\t\t\t\tLeggings\n\t\t\t\t\t\t\toccaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them\n\t\t\t\t\t\t\taccusamus\n\t\t\t\t\t\t\tlabore sustainable VHS.\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</ngb-panel>\n\t\t\t\t\t<ngb-panel id=\"preventchange-2\" title=\"I can't be toggled...\">\n\t\t\t\t\t\t<ng-template ngbPanelContent>\n\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon\n\t\t\t\t\t\t\tofficia\n\t\t\t\t\t\t\taute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\n\t\t\t\t\t\t\ttempor,\n\t\t\t\t\t\t\tsunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\n\t\t\t\t\t\t\thelvetica,\n\t\t\t\t\t\t\tcraft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.\n\t\t\t\t\t\t\tLeggings\n\t\t\t\t\t\t\toccaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them\n\t\t\t\t\t\t\taccusamus\n\t\t\t\t\t\t\tlabore sustainable VHS.\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</ngb-panel>\n\t\t\t\t\t<ngb-panel id=\"preventchange-3\" title=\"I can be opened, but not closed...\">\n\t\t\t\t\t\t<ng-template ngbPanelContent>\n\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon\n\t\t\t\t\t\t\tofficia\n\t\t\t\t\t\t\taute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\n\t\t\t\t\t\t\ttempor,\n\t\t\t\t\t\t\tsunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\n\t\t\t\t\t\t\thelvetica,\n\t\t\t\t\t\t\tcraft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.\n\t\t\t\t\t\t\tLeggings\n\t\t\t\t\t\t\toccaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them\n\t\t\t\t\t\t\taccusamus\n\t\t\t\t\t\t\tlabore sustainable VHS.\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</ngb-panel>\n\t\t\t\t</ngb-accordion>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Custom header<span class=\"ml-2 badge badge-success text-white\">New</span></h4>\n\t\t\t\t<ngb-accordion #a=\"ngbAccordion\" activeIds=\"custom-panel-1\">\n\t\t\t\t\t  <ngb-panel id=\"custom-panel-1\">\n\t\t\t\t\t\t<ng-template ngbPanelHeader let-opened=\"opened\">\n\t\t\t\t\t\t  <div class=\"d-flex align-items-center justify-content-between\">\n\t\t\t\t\t\t\t<h5 class=\"m-0\">First panel - {{ opened ? 'opened' : 'collapsed' }}</h5>\n\t\t\t\t\t\t\t<button ngbPanelToggle class=\"btn btn-link p-0\">Toggle first</button>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t<ng-template ngbPanelContent>\n\t\t\t\t\t\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n\t\t\t\t\t\t  aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n\t\t\t\t\t\t  sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n\t\t\t\t\t\t  craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n\t\t\t\t\t\t  occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n\t\t\t\t\t\t  labore sustainable VHS.\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t  </ngb-panel>\n\t\t\t\t\t  <ngb-panel>\n\t\t\t\t\t\t<ng-template ngbPanelHeader>\n\t\t\t\t\t\t  <div class=\"d-flex align-items-center justify-content-between\">\n\t\t\t\t\t\t\t<h5 class=\"m-0\">Second panel</h5>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t  <button ngbPanelToggle class=\"btn btn-sm btn-outline-primary ml-2\">Toggle second</button>\n\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary ml-2\" (click)=\"disabled = !disabled\">\n\t\t\t\t\t\t\t\t{{ disabled ? 'En' : 'Dis' }}able third\n\t\t\t\t\t\t\t  </button>\n\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-sm btn-outline-danger ml-2\" (click)=\"a.collapseAll()\">Collapse all</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t<ng-template ngbPanelContent>\n\t\t\t\t\t\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n\t\t\t\t\t\t  aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n\t\t\t\t\t\t  sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n\t\t\t\t\t\t  craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n\t\t\t\t\t\t  occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n\t\t\t\t\t\t  labore sustainable VHS.\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t  </ngb-panel>\n\t\t\t\t\t  <ngb-panel [disabled]=\"disabled\">\n\t\t\t\t\t\t<ng-template ngbPanelHeader>\n\t\t\t\t\t\t  <div class=\"d-flex align-items-center justify-content-between\">\n\t\t\t\t\t\t\t<button ngbPanelToggle class=\"btn btn-link container-fluid text-left pl-0\">Third panel</button>\n\t\t\t\t\t\t\t<p *ngIf=\"disabled\" class=\"text-muted m-0 small\">[I'm&nbsp;disabled]</p>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t<ng-template ngbPanelContent>\n\t\t\t\t\t\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n\t\t\t\t\t\t  aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n\t\t\t\t\t\t  sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n\t\t\t\t\t\t  craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n\t\t\t\t\t\t  occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n\t\t\t\t\t\t  labore sustainable VHS.\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t  </ngb-panel>\n\t\t\t\t</ngb-accordion>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/alert/alert.component.html":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/alert/alert.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentAlertAlertComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Basic Alert</h4>\n                <h6 class=\"card-subtitle\">This is basic alert</h6>\n                <ngb-alert [dismissible]=\"false\">\n                    <strong>Warning!</strong> Better check yourself, you're not looking too good.\n                  </ngb-alert>\n  \t\t\t\t\t\n            </div>\n        </div>\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Closeable Alert</h4>\n                <h6 class=\"card-subtitle\">This is closeable alert</h6>\n                <p *ngFor=\"let alert of alerts\">\n                  <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\">{{ alert.message }}</ngb-alert>\n                </p>\n                <p>\n                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"reset()\">Reset</button>\n                </p>\n  \t\t\t\t\t\n            </div>\n        </div>\n\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Self Closing  Alert</h4>\n                <h6 class=\"card-subtitle\">Static self-closing alert that disappears after 20 seconds (refresh the page if it has already disappeared)</h6>\n                <ngb-alert *ngIf=\"!staticAlertClosed\" (close)=\"staticAlertClosed = true\">Check out our awesome new features!</ngb-alert>\n  \t\t\t\t<p>Show a self-closing success message that disappears after 5 seconds.</p>\n  \t\t\t\t<ngb-alert *ngIf=\"successMessage\" type=\"success\" (close)=\"successMessage = null\">{{ successMessage }}</ngb-alert>\t\n  \t\t\t\t<p>\n\t\t\t\t  <button class=\"btn btn-primary\" (click)=\"changeSuccessMessage()\">Change message</button>\n\t\t\t\t</p>\n            </div>\n        </div>\n\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Custom Alert</h4>\n                <p>\n                  <ngb-alert type=\"custom\" [dismissible]=\"false\"><strong>Whoa!</strong> This is a custom alert.</ngb-alert>\n                </p>\n            </div>\n        </div>\n\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Global Configuration of Alert</h4>\n                <p>\n                  <ngb-alert>\n                    This alert's type is success and it's not dismissible because the config has been customized\n                  </ngb-alert>\n                </p>\n            </div>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/buttons/buttons.component.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/buttons/buttons.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentButtonsButtonsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-lg-12 col-xlg-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">General Buttons</h4>\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-success</code> to quickly create a General btn.</h6>\n                <div class=\"button-group\">\n                    <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-secondary\">Secondary</button>\n                    <button type=\"button\" class=\"btn btn-success\">Success</button>\n                    <button type=\"button\" class=\"btn btn-info\">Info</button>\n                    <button type=\"button\" class=\"btn btn-warning\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-danger\">Danger</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-12 col-xlg-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Button with outline</h4>\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-outline-success</code> to quickly create a General btn.</h6>\n                <div class=\"button-group\">\n                    <button type=\"button\" class=\"btn btn-outline-primary\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-outline-secondary\">Secondary</button>\n                    <button type=\"button\" class=\"btn btn-outline-success\">Success</button>\n                    <button type=\"button\" class=\"btn btn-outline-info\">Info</button>\n                    <button type=\"button\" class=\"btn btn-outline-warning\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger\">Danger</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-12 col-xlg-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Rounded Buttons</h4>\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-rounded btn-success</code> to quickly create a General btn.</h6>\n                <div class=\"button-group\">\n                    <button type=\"button\" class=\"btn btn-rounded btn-primary\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-rounded btn-secondary\">Secondary</button>\n                    <button type=\"button\" class=\"btn btn-rounded btn-success\">Success</button>\n                    <button type=\"button\" class=\"btn btn-rounded btn-info\">Info</button>\n                    <button type=\"button\" class=\"btn btn-rounded btn-warning\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-rounded btn-danger\">Danger</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-12 col-xlg-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Rounded outlined Buttons</h4>\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-rounded btn-outline-success</code> to quickly create a General btn.</h6>\n                <div class=\"button-group\">\n                    <button type=\"button\" class=\"btn btn-rounded btn-outline-primary\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-rounded btn-outline-secondary\">Secondary</button>\n                    <button type=\"button\" class=\"btn btn-rounded btn-outline-success\">Success</button>\n                    <button type=\"button\" class=\"btn btn-rounded btn-outline-info\">Info</button>\n                    <button type=\"button\" class=\"btn btn-rounded btn-outline-warning\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-rounded btn-outline-danger\">Danger</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Button Sizes</h4>\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-lg btn-success</code> to quickly create a General btn.</h6>\n                <div class=\"button-group\">\n                    <button type=\"button\" class=\"btn btn-lg btn-primary\">Large .btn-lg </button>\n                    <button type=\"button\" class=\"btn btn-secondary\">Normal .btn</button>\n                    <button type=\"button\" class=\"btn btn-sm btn-success\">Small .btn-sm</button>\n                    <button type=\"button\" class=\"btn btn-xs btn-info\">Tiny .btn-xs</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Button Sizes with rounded</h4>\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-lg btn-rounded btn-success</code> to create a btn.</h6>\n                <div class=\"button-group\">\n                    <button type=\"button\" class=\"btn btn-lg btn-rounded btn-primary\">Large .btn-lg </button>\n                    <button type=\"button\" class=\"btn btn-rounded btn-secondary\">Normal .btn</button>\n                    <button type=\"button\" class=\"btn btn-rounded btn-sm btn-success\">Small .btn-sm</button>\n                    <button type=\"button\" class=\"btn btn-rounded btn-xs btn-info\">Tiny .btn-xs</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Block buttons</h4>\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-block btn-success</code> to quickly create a General btn.</h6>\n                <div class=\"row button-group\">\n                    <div class=\"col-lg-2 col-md-4\">\n                        <button type=\"button\" class=\"btn btn-block btn-info\">Info</button>\n                    </div>\n                    <div class=\"col-lg-2 col-md-4\">\n                        <button type=\"button\" class=\"btn btn-block btn-success\">Success</button>\n                    </div>\n                    <div class=\"col-lg-2 col-md-4\">\n                        <button type=\"button\" class=\"btn btn-block btn-primary\">Primary</button>\n                    </div>\n                    <div class=\"col-lg-2 col-md-4\">\n                        <button type=\"button\" class=\"btn btn-block btn-danger\">Danger</button>\n                    </div>\n                    <div class=\"col-lg-2 col-md-4\">\n                        <button type=\"button\" class=\"btn btn-block btn-secondary\">Secondary</button>\n                    </div>\n                    <div class=\"col-lg-2 col-md-4\">\n                        <button type=\"button\" class=\"btn btn-block btn-warning\">Warning</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Rounded Block buttons</h4>\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-block btn-success</code> to quickly create a General btn.</h6>\n                <div class=\"row button-group\">\n                    <div class=\"col-lg-2 col-md-4\">\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-info\">Info</button>\n                    </div>\n                    <div class=\"col-lg-2 col-md-4\">\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-success\">Success</button>\n                    </div>\n                    <div class=\"col-lg-2 col-md-4\">\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-primary\">Primary</button>\n                    </div>\n                    <div class=\"col-lg-2 col-md-4\">\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-danger\">Danger</button>\n                    </div>\n                    <div class=\"col-lg-2 col-md-4\">\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-secondary\">Secondary</button>\n                    </div>\n                    <div class=\"col-lg-2 col-md-4\">\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-warning\">Warning</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Block outline buttons</h4>\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-block btn-outline-success</code> to quickly create a General btn.</h6>\n                <div class=\"row button-group\">\n                    <div class=\"col-lg-2 col-md-4\">\n                        <button type=\"button\" class=\"btn btn-block btn-outline-info\">Info</button>\n                    </div>\n                    <div class=\"col-lg-2 col-md-4\">\n                        <button type=\"button\" class=\"btn btn-block btn-outline-success\">Success</button>\n                    </div>\n                    <div class=\"col-lg-2 col-md-4\">\n                        <button type=\"button\" class=\"btn btn-block btn-outline-primary\">Primary</button>\n                    </div>\n                    <div class=\"col-lg-2 col-md-4\">\n                        <button type=\"button\" class=\"btn btn-block btn-outline-danger\">Danger</button>\n                    </div>\n                    <div class=\"col-lg-2 col-md-4\">\n                        <button type=\"button\" class=\"btn btn-block btn-outline-secondary\">Secondary</button>\n                    </div>\n                    <div class=\"col-lg-2 col-md-4\">\n                        <button type=\"button\" class=\"btn btn-block btn-outline-warning\">Warning</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Rounded outline Block buttons</h4>\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-block btn-outline-success</code> to quickly create a General btn.</h6>\n                <div class=\"row button-group\">\n                    <div class=\"col-lg-2 col-md-4\">\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-outline-info\">Info</button>\n                    </div>\n                    <div class=\"col-lg-2 col-md-4\">\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-outline-success\">Success</button>\n                    </div>\n                    <div class=\"col-lg-2 col-md-4\">\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-outline-primary\">Primary</button>\n                    </div>\n                    <div class=\"col-lg-2 col-md-4\">\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-outline-danger\">Danger</button>\n                    </div>\n                    <div class=\"col-lg-2 col-md-4\">\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-outline-secondary\">Secondary</button>\n                    </div>\n                    <div class=\"col-lg-2 col-md-4\">\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-outline-warning\">Warning</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Large Block buttons</h4>\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-block btn-lg btn-success</code> to quickly create a General btn.</h6>\n                <div class=\"row button-group\">\n                    <div class=\"col-lg-2 col-md-4\">\n                        <button type=\"button\" class=\"btn btn-block btn-lg btn-info\">Info</button>\n                    </div>\n                    <div class=\"col-lg-2 col-md-4\">\n                        <button type=\"button\" class=\"btn btn-block btn-lg btn-success\">Success</button>\n                    </div>\n                    <div class=\"col-lg-2 col-md-4\">\n                        <button type=\"button\" class=\"btn btn-block btn-lg btn-primary\">Primary</button>\n                    </div>\n                    <div class=\"col-lg-2 col-md-4\">\n                        <button type=\"button\" class=\"btn btn-block btn-lg btn-danger\">Danger</button>\n                    </div>\n                    <div class=\"col-lg-2 col-md-4\">\n                        <button type=\"button\" class=\"btn btn-block btn-lg btn-secondary\">Second</button>\n                    </div>\n                    <div class=\"col-lg-2 col-md-4\">\n                        <button type=\"button\" class=\"btn btn-block btn-lg btn-warning\">Warning</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Row -->\n<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Button with icon</h4>\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-success</code> & <code>i class =\"fa fa-heart\"</code> to quickly create a General btn.</h6>\n                <div class=\"row button-group\">\n                    <div class=\"col-lg-12 col-xlg-6 m-b-30\">\n                        <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-check\"></i> Primary</button>\n                        <button type=\"button\" class=\"btn btn-secondary\">Secondary <i class=\"fa fa-heart\"></i></button>\n                        <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-check\"></i> Success</button>\n                        <button type=\"button\" class=\"btn btn-info\"><i class=\"fa fa-heart\"></i> Info</button>\n                        <button type=\"button\" class=\"btn btn-warning\"><i class=\"fa fa-heart\"></i> Warning</button>\n                        <button type=\"button\" class=\"btn btn-danger\"><i class=\"fa fa-heart\"></i> Danger</button>\n                    </div>\n                    <div class=\"col-lg-12 col-xlg-6 m-b-30\">\n                        <button class=\"btn btn-primary waves-effect waves-light\" type=\"button\"><span class=\"btn-label m-r-5\"><i class=\"fas fa-envelope\"></i></span>Mail</button>\n                        <button class=\"btn btn-secondary waves-effect waves-light\" type=\"button\"><span class=\"btn-label m-r-5\"><i class=\"fa fa-check\"></i></span>Check</button>\n                        <button class=\"btn btn-info waves-effect waves-light\" type=\"button\"><span class=\"btn-label m-r-5\"><i class=\"fa fa-heart\"></i></span>Heart</button>\n                        <button class=\"btn btn-warning waves-effect waves-light\" type=\"button\"><span class=\"btn-label m-r-5\"><i class=\"fas fa-envelope\"></i></span>Mail</button>\n                        <button class=\"btn btn-danger waves-effect waves-light\" type=\"button\"><span class=\"btn-label m-r-5\"><i class=\"fa fa-heart\"></i></span>Heart</button>\n                    </div>\n                    <div class=\"col-lg-12 col-xlg-6 m-b-30\">\n                        <button type=\"button\" class=\"btn btn-primary btn-rounded\"><i class=\"fa fa-check\"></i> Primary</button>\n                        <button type=\"button\" class=\"btn btn-secondary btn-rounded\">Secondary <i class=\"fa fa-heart\"></i></button>\n                        <button type=\"button\" class=\"btn btn-success btn-rounded\"><i class=\"fa fa-check\"></i> Success</button>\n                        <button type=\"button\" class=\"btn btn-info btn-rounded\"><i class=\"fa fa-heart\"></i> Info</button>\n                        <button type=\"button\" class=\"btn btn-warning btn-rounded\"><i class=\"fa fa-heart\"></i> Warning</button>\n                        <button type=\"button\" class=\"btn btn-danger btn-rounded\"><i class=\"fa fa-heart\"></i> Danger</button>\n                    </div>\n                    <div class=\"col-lg-12 col-xlg-6 m-b-30\">\n                        <button type=\"button\" class=\"btn btn-outline-primary\"><i class=\"fa fa-check\"></i> Primary</button>\n                        <button type=\"button\" class=\"btn btn-outline-secondary\">Secondary <i class=\"fa fa-heart\"></i></button>\n                        <button type=\"button\" class=\"btn btn-outline-success\"><i class=\"fa fa-check\"></i> Success</button>\n                        <button type=\"button\" class=\"btn btn-outline-info\"><i class=\"fa fa-heart\"></i> Info</button>\n                        <button type=\"button\" class=\"btn btn-outline-warning\"><i class=\"fa fa-heart\"></i> Warning</button>\n                        <button type=\"button\" class=\"btn btn-outline-danger\"><i class=\"fa fa-heart\"></i> Danger</button>\n                    </div>\n                    <div class=\"col-lg-12 col-xlg-6 m-b-30\">\n                        <button class=\"btn btn-outline-primary waves-effect waves-light\" type=\"button\"><span class=\"btn-label m-r-5\"><i class=\"fas fa-envelope\"></i></span>Mail</button>\n                        <button class=\"btn btn-outline-secondary waves-effect waves-light\" type=\"button\"><span class=\"btn-label m-r-5\"><i class=\"fa fa-check\"></i></span>Check</button>\n                        <button class=\"btn btn-outline-info waves-effect waves-light\" type=\"button\"><span class=\"btn-label m-r-5\"><i class=\"fa fa-heart\"></i></span>Heart</button>\n                        <button class=\"btn btn-outline-warning waves-effect waves-light\" type=\"button\"><span class=\"btn-label m-r-5\"><i class=\"fas fa-envelope\"></i></span>Mail</button>\n                        <button class=\"btn btn-outline-danger waves-effect waves-light\" type=\"button\"><span class=\"btn-label m-r-5\"><i class=\"fa fa-heart\"></i></span>Heart</button>\n                    </div>\n                    <div class=\"col-lg-12 col-xlg-6 m-b-30\">\n                        <button type=\"button\" class=\"btn btn-outline-primary btn-rounded\"><i class=\"fa fa-check\"></i> Primary</button>\n                        <button type=\"button\" class=\"btn btn-outline-secondary btn-rounded\">Secondary <i class=\"fa fa-heart\"></i></button>\n                        <button type=\"button\" class=\"btn btn-outline-success btn-rounded\"><i class=\"fa fa-check\"></i> Success</button>\n                        <button type=\"button\" class=\"btn btn-outline-info btn-rounded\"><i class=\"fa fa-heart\"></i> Info</button>\n                        <button type=\"button\" class=\"btn btn-outline-warning btn-rounded\"><i class=\"fa fa-heart\"></i> Warning</button>\n                        <button type=\"button\" class=\"btn btn-outline-danger btn-rounded\"><i class=\"fa fa-heart\"></i> Danger</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End row -->\n<!-- Row -->\n<div class=\"row\">\n    <div class=\"col-lg-6 button-group\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Circle buttons</h4>\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-circle btn-success</code> to quickly create a General btn.</h6>\n                <button type=\"button\" class=\"btn btn-secondary btn-circle\"><i class=\"fa fa-check\"></i> </button>\n                <button type=\"button\" class=\"btn btn-primary btn-circle\"><i class=\"fa fa-list\"></i> </button>\n                <button type=\"button\" class=\"btn btn-success btn-circle\"><i class=\"fa fa-link\"></i> </button>\n                <button type=\"button\" class=\"btn btn-info btn-circle\"><i class=\"fa fa-check\"></i> </button>\n                <button type=\"button\" class=\"btn btn-warning btn-circle\"><i class=\"fa fa-times\"></i> </button>\n                <button type=\"button\" class=\"btn btn-danger btn-circle\"><i class=\"fa fa-heart\"></i> </button>\n                <br>\n                <br>\n                <h4 class=\"card-title\">Circle Large buttons</h4>\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-circle btn-lg btn-success</code> to quickly create a General btn.</h6>\n                <button type=\"button\" class=\"btn btn-secondary btn-circle btn-lg\"><i class=\"fa fa-check\"></i> </button>\n                <button type=\"button\" class=\"btn btn-primary btn-circle btn-lg\"><i class=\"fa fa-list\"></i> </button>\n                <button type=\"button\" class=\"btn btn-success btn-circle btn-lg\"><i class=\"fa fa-link\"></i> </button>\n                <button type=\"button\" class=\"btn btn-info btn-circle btn-lg\"><i class=\"fa fa-check\"></i> </button>\n                <button type=\"button\" class=\"btn btn-warning btn-circle btn-lg\"><i class=\"fa fa-times\"></i> </button>\n                <button type=\"button\" class=\"btn btn-danger btn-circle btn-lg\"><i class=\"fa fa-heart\"></i> </button>\n                <br>\n                <br>\n                <h4 class=\"card-title\">Circle xtra Large buttons</h4>\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-circle btn-xl btn-success</code> to quickly create a General btn.</h6>\n                <button type=\"button\" class=\"btn btn-secondary btn-circle btn-xl\"><i class=\"fa fa-check\"></i> </button>\n                <button type=\"button\" class=\"btn btn-primary btn-circle btn-xl\"><i class=\"fa fa-list\"></i> </button>\n                <button type=\"button\" class=\"btn btn-success btn-circle btn-xl\"><i class=\"fa fa-link\"></i> </button>\n                <button type=\"button\" class=\"btn btn-info btn-circle btn-xl\"><i class=\"fa fa-check\"></i> </button>\n                <button type=\"button\" class=\"btn btn-warning btn-circle btn-xl\"><i class=\"fa fa-times\"></i> </button>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-6 button-group\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Social buttons</h4>\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-facebook</code> to quickly create a General btn.</h6>\n                <button class=\"btn btn-facebook waves-effect waves-light\" type=\"button\"> <i class=\"fab fa-facebook-f\"></i> </button>\n                <button class=\"btn btn-twitter waves-effect waves-light\" type=\"button\"> <i class=\"fab fa-twitter\"></i> </button>\n                <button class=\"btn btn-googleplus waves-effect waves-light\" type=\"button\"> <i class=\"fab fa-google-plus\"></i> </button>\n                <button class=\"btn btn-linkedin waves-effect waves-light\" type=\"button\"> <i class=\"fab fa-linkedin\"></i> </button>\n                <button class=\"btn btn-instagram waves-effect waves-light\" type=\"button\"> <i class=\"fab fa-instagram\"></i> </button>\n                <button class=\"btn btn-pinterest waves-effect waves-light\" type=\"button\"> <i class=\"fab fa-pinterest\"></i> </button>\n                <button class=\"btn btn-dribbble waves-effect waves-light\" type=\"button\"> <i class=\"fab fa-dribbble\"></i> </button>\n                <button class=\"btn btn-youtube waves-effect waves-light\" type=\"button\"> <i class=\"fab fa-youtube\"></i> </button>\n                <br>\n                <br>\n                <h4 class=\"card-title\">With Circle buttons</h4>\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-circle btn-success</code> to quickly create a General btn.</h6>\n                <button class=\"btn btn-facebook waves-effect btn-circle waves-light\" type=\"button\"> <i class=\"fab fa-facebook-f\"></i> </button>\n                <button class=\"btn btn-twitter waves-effect btn-circle waves-light\" type=\"button\"> <i class=\"fab fa-twitter\"></i> </button>\n                <button class=\"btn btn-googleplus waves-effect btn-circle waves-light\" type=\"button\"> <i class=\"fab fa-google-plus\"></i> </button>\n                <button class=\"btn btn-linkedin waves-effect btn-circle waves-light\" type=\"button\"> <i class=\"fab fa-linkedin\"></i> </button>\n                <button class=\"btn btn-instagram waves-effect btn-circle waves-light\" type=\"button\"> <i class=\"fab fa-instagram\"></i> </button>\n                <button class=\"btn btn-pinterest waves-effect btn-circle waves-light\" type=\"button\"> <i class=\"fab fa-pinterest\"></i> </button>\n                <button class=\"btn btn-dribbble waves-effect btn-circle waves-light\" type=\"button\"> <i class=\"fab fa-dribbble\"></i> </button>\n                <button class=\"btn btn-youtube waves-effect btn-circle waves-light\" type=\"button\"> <i class=\"fab fa-youtube\"></i> </button>\n                <br>\n                <br>\n                <h4 class=\"card-title\">with rounded buttons</h4>\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-rounded btn-success</code> to quickly create a General btn.</h6>\n                <button class=\"btn btn-facebook waves-effect btn-rounded waves-light\" type=\"button\"> <i class=\"fab fa-facebook-f\"></i> </button>\n                <button class=\"btn btn-twitter waves-effect btn-rounded waves-light\" type=\"button\"> <i class=\"fab fa-twitter\"></i> </button>\n                <button class=\"btn btn-googleplus waves-effect btn-rounded waves-light\" type=\"button\"> <i class=\"fab fa-google-plus\"></i> </button>\n                <button class=\"btn btn-linkedin waves-effect btn-rounded waves-light\" type=\"button\"> <i class=\"fab fa-linkedin\"></i> </button>\n                <button class=\"btn btn-instagram waves-effect btn-rounded waves-light\" type=\"button\"> <i class=\"fab fa-instagram\"></i> </button>\n                <button class=\"btn btn-pinterest waves-effect btn-rounded waves-light\" type=\"button\"> <i class=\"fab fa-pinterest\"></i> </button>\n                <button class=\"btn btn-dribbble waves-effect btn-rounded waves-light\" type=\"button\"> <i class=\"fab fa-dribbble\"></i> </button>\n                <button class=\"btn btn-youtube waves-effect btn-rounded waves-light\" type=\"button\"> <i class=\"fab fa-youtube\"></i> </button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End Row -->\n<!-- Row -->\n<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <div class=\"card\">\n            <div class=\"row\">\n                <!-- column -->\n                <div class=\"col-xlg-6 col-lg-12 m-b-30\">\n                    <div class=\"card-body\">\n                        <h4 class=\"card-title\">Group buttons</h4>\n                        <h6 class=\"card-subtitle\">Wrap a series of buttons with <code class=\"highlighter-rouge\">.btn</code> in <code class=\"highlighter-rouge\">.btn-group</code></h6>\n                        <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                            <button type=\"button\" class=\"btn btn-secondary\">Left</button>\n                            <button type=\"button\" class=\"btn btn-secondary\">Middle</button>\n                            <button type=\"button\" class=\"btn btn-secondary\">Right</button>\n                        </div>\n                        <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                            <button type=\"button\" class=\"btn btn-info\"><i class=\"fa fa-align-left\"></i></button>\n                            <button type=\"button\" class=\"btn btn-info\"><i class=\"fa fa-align-justify\"></i></button>\n                            <button type=\"button\" class=\"btn btn-info\"><i class=\"fa fa-align-right\"></i></button>\n                        </div>\n                        <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                            <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-fast-backward\"></i></button>\n                            <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-play\"></i></button>\n                            <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-fast-forward\"></i></button>\n                        </div>\n                    </div>\n                </div>\n                <!-- column -->\n                <div class=\"col-xlg-6 col-lg-12 m-b-30\">\n                    <div class=\"card-body\">\n                        <h4 class=\"card-title\">Button toolbar pagination</h4>\n                        <h6 class=\"card-subtitle\">Wrap a series of buttons with <code class=\"highlighter-rouge\">.btn</code> in <code class=\"highlighter-rouge\">.btn-group</code></h6>\n                        <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n                            <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\n                                <button type=\"button\" class=\"btn btn-secondary disabled\">1</button>\n                                <button type=\"button\" class=\"btn btn-info\">2</button>\n                                <button type=\"button\" class=\"btn btn-secondary\">3</button>\n                                <button type=\"button\" class=\"btn btn-secondary\">4</button>\n                            </div>\n                            <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Second group\">\n                                <button type=\"button\" class=\"btn btn-secondary\">5</button>\n                                <button type=\"button\" class=\"btn btn-secondary\">6</button>\n                                <button type=\"button\" class=\"btn btn-secondary\">7</button>\n                            </div>\n                            <div class=\"btn-group\" role=\"group\" aria-label=\"Third group\">\n                                <button type=\"button\" class=\"btn btn-secondary\">8</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- column -->\n                <!-- column -->\n                <div class=\"col-xlg-6 col-lg-12 m-b-30\">\n                    <div class=\"card-body\">\n                        <h4 class=\"card-title\">Group buttons sizing</h4>\n                        <h6 class=\"card-subtitle\">Wrap a series of buttons with <code class=\"highlighter-rouge\">.btn</code> in <code class=\"highlighter-rouge\">.btn-group</code></h6>\n                        <div class=\"btn-group btn-group-lg\" role=\"group\" aria-label=\"Basic example\">\n                            <button type=\"button\" class=\"btn btn-secondary\">Left</button>\n                            <button type=\"button\" class=\"btn btn-secondary\">Middle</button>\n                            <button type=\"button\" class=\"btn btn-secondary\">Right</button>\n                        </div>\n                        <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                            <button type=\"button\" class=\"btn btn-info\"><i class=\"fa fa-align-left\"></i></button>\n                            <button type=\"button\" class=\"btn btn-info\"><i class=\"fa fa-align-justify\"></i></button>\n                            <button type=\"button\" class=\"btn btn-info\"><i class=\"fa fa-align-right\"></i></button>\n                        </div>\n                        <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\n                            <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-fast-backward\"></i></button>\n                            <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-play\"></i></button>\n                            <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-fast-forward\"></i></button>\n                        </div>\n                    </div>\n                </div>\n                <!-- column -->\n                <!-- column -->\n                <div class=\"col-xlg-6 col-lg-12 m-b-30\">\n                    <div class=\"card-body\">\n                        <h4 class=\"card-title\">Vertical buttons</h4>\n                        <h6 class=\"card-subtitle\">creat vertical button with class of <code>.btn-group-vertical</code> </h6>\n                        <div class=\"btn-group-vertical\" role=\"group\" aria-label=\"Vertical button group\">\n                            <button type=\"button\" class=\"btn btn-secondary\">Button</button>\n                            <button type=\"button\" class=\"btn btn-secondary\">Button</button>\n                            <button type=\"button\" class=\"btn btn-secondary\">Button</button>\n                            <button type=\"button\" class=\"btn btn-secondary\">Button</button>\n                            <button type=\"button\" class=\"btn btn-secondary\">Button</button>\n                            <button type=\"button\" class=\"btn btn-secondary\">Button</button>\n                        </div>\n                    </div>\n                </div>\n                <!-- column -->\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End Row -->\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Checkbox buttons</h4>\n                <div class=\"btn-group btn-group-toggle\">\n                  <label class=\"btn-primary\" ngbButtonLabel>\n                    <input type=\"checkbox\" ngbButton [(ngModel)]=\"model.left\"> Left (pre-checked)\n                  </label>\n                  <label class=\"btn-primary\" ngbButtonLabel>\n                    <input type=\"checkbox\" ngbButton [(ngModel)]=\"model.middle\"> Middle\n                  </label>\n                  <label class=\"btn-primary\" ngbButtonLabel>\n                    <input type=\"checkbox\" ngbButton [(ngModel)]=\"model.right\"> Right\n                  </label>\n                </div>\n                <hr>\n                <pre>{{model | json}}</pre>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Checkbox buttons(Reactive Forms)</h4>\n                <form [formGroup]=\"checkboxGroupForm\">\n                  <div class=\"btn-group btn-group-toggle\">\n                    <label class=\"btn-primary\" ngbButtonLabel>\n                      <input type=\"checkbox\" formControlName=\"left\" ngbButton> Left (pre-checked)\n                    </label>\n                    <label class=\"btn-primary\" ngbButtonLabel>\n                      <input type=\"checkbox\" formControlName=\"middle\" ngbButton> Middle\n                    </label>\n                    <label class=\"btn-primary\" ngbButtonLabel>\n                      <input type=\"checkbox\" formControlName=\"right\" ngbButton> Right\n                    </label>\n                  </div>\n                </form>\n                <hr>\n                <pre>{{checkboxGroupForm.value | json}}</pre>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Radio Buttons</h4>\n                <div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"model1\">\n                  <label ngbButtonLabel class=\"btn-primary\">\n                    <input ngbButton type=\"radio\" [value]=\"1\"> Left (pre-checked)\n                  </label>\n                  <label ngbButtonLabel class=\"btn-primary\">\n                    <input ngbButton type=\"radio\" value=\"middle\"> Middle\n                  </label>\n                  <label ngbButtonLabel class=\"btn-primary\">\n                    <input ngbButton type=\"radio\" [value]=\"false\"> Right\n                  </label>\n                </div>\n                <hr>\n                <pre>{{model1}}</pre>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Radio Buttons(Reactive Forms)</h4>\n                <form [formGroup]=\"radioGroupForm\">\n                  <div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"radioBasic\" formControlName=\"model\">\n                    <label ngbButtonLabel class=\"btn-primary\">\n                      <input ngbButton type=\"radio\" [value]=\"1\"> Left (pre-checked)\n                    </label>\n                    <label ngbButtonLabel class=\"btn-primary\">\n                      <input ngbButton type=\"radio\" value=\"middle\"> Middle\n                    </label>\n                    <label ngbButtonLabel class=\"btn-primary\">\n                      <input ngbButton type=\"radio\" [value]=\"false\"> Right\n                    </label>\n                  </div>\n                </form>\n                <hr>\n                <pre>{{radioGroupForm.value['model']}}</pre>\n            </div>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/card/card.component.html":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/card/card.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentCardCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-12\">\n        <h4 class=\"d-inline\">Card with Image  code icon</h4>\n        <!-- Row -->\n        <div class=\"row\">\n            <!-- column -->\n            <div class=\"col-lg-3 col-md-6\">\n                <!-- Card -->\n                <div class=\"card\">\n                    <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img1.jpg\" alt=\"Card image cap\">\n                    <div class=\"card-body\">\n                        <h4 class=\"card-title\">Card title</h4>\n                        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                        <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n                    </div>\n                </div>\n                <!-- Card -->\n            </div>\n            <!-- column -->\n            <!-- column -->\n            <div class=\"col-lg-3 col-md-6\">\n                <!-- Card -->\n                <div class=\"card\">\n                    <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img2.jpg\" alt=\"Card image cap\">\n                    <div class=\"card-body\">\n                        <h4 class=\"card-title\">Card title</h4>\n                        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                        <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n                    </div>\n                </div>\n                <!-- Card -->\n            </div>\n            <!-- column -->\n            <!-- column -->\n            <div class=\"col-lg-3 col-md-6\">\n                <!-- Card -->\n                <div class=\"card\">\n                    <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img3.jpg\" alt=\"Card image cap\">\n                    <div class=\"card-body\">\n                        <h4 class=\"card-title\">Card title</h4>\n                        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                        <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n                    </div>\n                </div>\n                <!-- Card -->\n            </div>\n            <!-- column -->\n            <!-- column -->\n            <div class=\"col-lg-3 col-md-6 img-responsive\">\n                <!-- Card -->\n                <div class=\"card\">\n                    <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img4.jpg\" alt=\"Card image cap\">\n                    <div class=\"card-body\">\n                        <h4 class=\"card-title\">Card title</h4>\n                        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                        <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n                    </div>\n                </div>\n                <!-- Card -->\n            </div>\n            <!-- column -->\n        </div>\n        <!-- Row -->\n    </div>\n</div>\n<!-- End Row -->\n<!-- Row -->\n<div class=\"row\">\n    <div class=\"col-12 m-t-30\">\n        <h4 class=\"m-b-0\">Content types</h4>\n        <p class=\"text-muted m-t-0\">The building block of a card is the <code>.card</code> <code>.card-body</code> Use it whenever you need a padded section within a card.</p>\n        <div class=\"card\">\n            <div class=\"card-body collapse show\">\n                <h4 class=\"card-title\">Special title treatment</h4>\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End Row -->\n<!-- Row -->\n<div class=\"row\">\n    <div class=\"col-12 m-t-30\">\n        <h4 class=\"m-b-0\">Titles, text, and links</h4>\n        <p class=\"text-muted m-t-0\">Card titles are used by adding <code>.card-title</code> &amp; <code>.card-subtitle</code> for subtitle of card.</p>\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Card title</h4>\n                <h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                <a href=\"#\" class=\"card-link\">Card link</a>\n                <a href=\"#\" class=\"card-link\">Another link</a>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End Row -->\n<!-- Row -->\n<div class=\"row\">\n    <div class=\"col-12 m-t-30\">\n        <h4 class=\"m-b-0\">Header and footer</h4>\n        <p class=\"text-muted m-t-0 font-12\">Add an optional header and/or footer within a card.</p>\n        <!-- Card -->\n        <div class=\"card\">\n            <div class=\"card-header\">\n                Featured\n            </div>\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Special title treatment</h4>\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n            </div>\n        </div>\n        <!-- Card -->\n    </div>\n</div>\n<!-- End Row -->\n<!-- Row -->\n<div class=\"row\">\n    <div class=\"col-12 m-t-30\">\n        <h4 class=\"m-b-0\">Header and footer</h4>\n        <p class=\"text-muted m-t-0 font-12\">Add an optional header and/or footer within a card. </p>\n        <!-- Card -->\n        <div class=\"card text-center\">\n            <div class=\"card-header\">\n                Featured\n            </div>\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Special title treatment</h4>\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                <a href=\"#\" class=\"btn btn-info\">Go somewhere</a>\n            </div>\n            <div class=\"card-footer text-muted\">\n                2 days ago\n            </div>\n        </div>\n        <!-- Card -->\n    </div>\n</div>\n<!-- End Row -->\n<!-- Row -->\n<div class=\"row\">\n    <div class=\"col-12 m-t-30\">\n        <h4 class=\"m-b-0\">Size Using grid markup</h4>\n        <p class=\"text-muted m-t-0 font-12\">Using the grid, wrap cards in columns and rows as needed.<code>.col-1 to .col-12</code></p>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">Special title treatment</h3>\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                <a href=\"#\" class=\"btn btn-success\">Go somewhere</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">Special title treatment</h3>\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End Row -->\n<!-- Row -->\n<div class=\"row\">\n    <div class=\"col-12 m-t-30\">\n        <h4 class=\"m-b-0\">Text alignment</h4>\n        <p class=\"text-muted m-t-0 font-12\">You can quickly change the text alignment<code>.text-center .text-right</code>.</p>\n    </div>\n    <div class=\"col-md-4\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Special title treatment</h4>\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                <a href=\"#\" class=\"btn btn-info\">Go somewhere</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-4\">\n        <div class=\"card text-center\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Special title treatment</h4>\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-4\">\n        <div class=\"card text-right\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Special title treatment</h4>\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End Row -->\n<!-- Row -->\n<div class=\"row\">\n    <div class=\"col-12 m-t-30\">\n        <h4 class=\"m-b-0\">Using utilities</h4>\n        <p class=\"text-muted m-t-0 font-12\">Using the utility, you can give direct width class to card like<code>.w-25, w-50, w-75, w-100</code></p>\n        <div class=\"card w-75\">\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">This card has width of 75%</h3>\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                <a href=\"#\" class=\"btn btn-danger\">Go somewhere</a>\n            </div>\n        </div>\n        <div class=\"card w-50\">\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">This card has width of 50%</h3>\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End Row -->\n<!-- Row -->\n<div class=\"row\">\n    <div class=\"col-12 m-t-30\">\n        <h4 class=\"m-b-0\">Size Using grid markup</h4>\n        <p class=\"text-muted m-t-0 font-12\">Using the grid, wrap cards in columns and rows as needed.<code>.col-1 to .col-12</code></p>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card text-center\">\n            <div class=\"card-header\">\n                <ul class=\"nav nav-tabs card-header-tabs\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link active\" href=\"javascript:void(0)\">Active</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"javascript:void(0)\">Link</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Special title treatment</h4>\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card text-center\">\n            <div class=\"card-header\">\n                <ul class=\"nav nav-pills card-header-pills\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link active\" href=\"javascript:void(0)\">Active</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"javascript:void(0)\">Link</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link disabled\" href=\"javascript:void(0)\">Disabled</a>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Special title treatment</h4>\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                <a href=\"#\" class=\"btn btn-info\">Go somewhere</a>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End Row -->\n<!-- Row -->\n<div class=\"row\">\n    <div class=\"col-12 m-t-30\">\n        <h4 class=\"m-b-0\">Card styles</h4>\n        <p class=\"text-muted m-t-0 font-12\">Cards include various options for customizing their backgrounds, borders, and color.<code>.card-primary info, warning, danger</code></p>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card card-inverse\" style=\"background-color: #333; border-color: #333;\">\n            <div class=\"card-header\">\n                <h4 class=\"m-b-0 text-white\">Card Title</h4></div>\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">Special title treatment</h3>\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card card-inverse card-info\">\n            <div class=\"card-header\">\n                <h4 class=\"m-b-0 text-white\">Card Title</h4></div>\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">Special title treatment</h3>\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card card-inverse card-primary\">\n            <div class=\"card-header\">\n                <h4 class=\"m-b-0 text-white\">Card Title</h4></div>\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">Special title treatment</h3>\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card card-inverse card-danger\">\n            <div class=\"card-header\">\n                <h4 class=\"m-b-0 text-white\">Card Title</h4></div>\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">Special title treatment</h3>\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card card-inverse card-warning\">\n            <div class=\"card-header\">\n                <h4 class=\"m-b-0 text-white\">Card Title</h4></div>\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">Special title treatment</h3>\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card card-inverse card-success\">\n            <div class=\"card-header\">\n                <h4 class=\"m-b-0 text-white\">Card Title</h4></div>\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">Special title treatment</h3>\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End Row -->\n<!-- Row -->\n<div class=\"row\">\n    <div class=\"col-12 m-t-30\">\n        <h4 class=\"m-b-0\">Card styles</h4>\n        <p class=\"text-muted m-t-0 font-12\">Cards include various options for customizing their backgrounds, borders, and color.<code>.card-primary info, warning, danger</code></p>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card card-outline-inverse\">\n            <div class=\"card-header\">\n                <h4 class=\"m-b-0 text-white\">Card Title</h4></div>\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">Special title treatment</h3>\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card card-outline-info\">\n            <div class=\"card-header\">\n                <h4 class=\"m-b-0 text-white\">Card Title</h4></div>\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">Special title treatment</h3>\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card card-outline-primary\">\n            <div class=\"card-header\">\n                <h4 class=\"m-b-0 text-white\">Card Title</h4></div>\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">Special title treatment</h3>\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card card-outline-danger\">\n            <div class=\"card-header\">\n                <h4 class=\"m-b-0 text-white\">Card Title</h4></div>\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">Special title treatment</h3>\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card card-outline-warning\">\n            <div class=\"card-header\">\n                <h4 class=\"m-b-0 text-white\">Card Title</h4></div>\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">Special title treatment</h3>\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card card-outline-success\">\n            <div class=\"card-header\">\n                <h4 class=\"m-b-0 text-white\">Card Title</h4></div>\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">Special title treatment</h3>\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End Row -->\n<!-- Row -->\n<div class=\"row\">\n    <div class=\"col-12 m-t-30\">\n        <h4 class=\"m-b-0\">Card Groups</h4>\n        <p class=\"text-muted m-t-0 font-12\">Use card groups to render cards as a single, attached element with equal width and height columns.</p>\n        <div class=\"card-group\">\n            <div class=\"card\">\n                <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img1.jpg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Card title</h4>\n                    <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n                </div>\n            </div>\n            <div class=\"card\">\n                <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img2.jpg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Card title</h4>\n                    <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n                </div>\n            </div>\n            <div class=\"card\">\n                <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img3.jpg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Card title</h4>\n                    <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End Row -->\n<h4 class=\"m-t-40\">Card With action</h4>\n<p class=\"text-muted m-t-0 font-12\">With action elements.</p>\n<div class=\"card\">\n    <div class=\"card-header\">\n        Title\n        <div class=\"card-actions\">\n            <a class=\"btn-minimize\" data-perform=\"card-collapse\"><i class=\"ti-minus\"></i></a>\n            <a class=\"btn-close\"><i class=\"ti-close\"></i></a>\n        </div>\n    </div>\n    <div class=\"card-body collapse show\">\n        <h4 class=\"card-title\">Special title treatment</h4>\n        <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n    </div>\n</div>\n<!-- Row -->\n<div class=\"row\">\n    <div class=\"col-12 m-t-30\">\n        <h4 class=\"m-b-0\">Card with Deck</h4>\n        <p class=\"text-muted m-t-0 font-12\">Use card groups to render cards as a single, attached element with equal width and height columns.</p>\n        <div class=\"card-deck\">\n            <div class=\"card\">\n                <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img1.jpg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Card title</h4>\n                    <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n                </div>\n            </div>\n            <div class=\"card\">\n                <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img2.jpg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Card title</h4>\n                    <p class=\"card-text\">This card has supporting text below as a natural.</p>\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n                </div>\n            </div>\n            <div class=\"card\">\n                <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img3.jpg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Card title</h4>\n                    <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. supporting text below as a natural lead-in to additional content</p>\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End Row -->\n<!-- Row -->\n<div class=\"row\">\n    <div class=\"col-12 m-t-30\">\n        <h4 class=\"m-b-0\">Card columns</h4>\n        <p class=\"text-muted m-t-0 font-12\">Cards can be organized into Masonry-like columns with just CSS by wrapping them in <code>card-columns</code></p>\n        <div class=\"card-columns\">\n            <div class=\"card\">\n                <img class=\"card-img-top img-fluid\" src=\"assets/images/big/img6.jpg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Card title that wraps to a new line</h4>\n                    <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n                </div>\n            </div>\n            <div class=\"card p-3\">\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                <footer>\n                    <small class=\"text-muted\">\n              Someone famous in <cite title=\"Source Title\">Source Title</cite>\n            </small>\n                </footer>\n            </div>\n            <div class=\"card\">\n                <img class=\"card-img-top img-fluid\" src=\"assets/images/big/img5.jpg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Card title</h4>\n                    <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n                </div>\n            </div>\n            <div class=\"card card-inverse bg-primary p-3 text-center text-white\">\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>\n                <footer>\n                    <small>\n              Someone famous in <cite title=\"Source Title\">Source Title</cite>\n            </small>\n                </footer>\n            </div>\n            <div class=\"card text-center\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Card title</h4>\n                    <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n                </div>\n            </div>\n            <div class=\"card\">\n                <img class=\"card-img img-fluid\" src=\"assets/images/big/img4.jpg\" alt=\"Card image\">\n            </div>\n            <div class=\"card p-3 text-right\">\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                <footer>\n                    <small class=\"text-muted\">\n              Someone famous in <cite title=\"Source Title\">Source Title</cite>\n            </small>\n                </footer>\n            </div>\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Card title</h4>\n                    <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End Row -->";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/carousel/carousel.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/carousel/carousel.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentCarouselCarouselComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Carousel</h4>\n\t\t\t\t<h6 class=\"card-subtitle\">This is basic Carousel</h6>\n\t\t\t\t<ngb-carousel>\n\t\t\t\t\t<ng-template ngbSlide>\n\t\t\t\t\t\t<img src=\"assets/images/big/img1.jpg\" alt=\"Random first slide\">\n\t\t\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\t\t\t<h4 class=\"text-white font-bold\">First slide label</h4>\n\t\t\t\t\t\t\t<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template ngbSlide>\n\t\t\t\t\t\t<img src=\"assets/images/big/img2.jpg\" alt=\"Random second slide\">\n\t\t\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\t\t\t<h4 class=\"text-white font-bold\">Second slide label</h4>\n\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template ngbSlide>\n\t\t\t\t\t\t<img src=\"assets/images/big/img3.jpg\" alt=\"Random third slide\">\n\t\t\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\t\t\t<h4 class=\"text-white font-bold\">Third slide label</h4>\n\t\t\t\t\t\t\t<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-carousel>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Navigation arrows and indicators</h4>\n\t\t\t\t<h6 class=\"card-subtitle\">Navigation</h6>\n\t\t\t\t<ngb-carousel [showNavigationArrows]=\"showNavigationArrows\" [showNavigationIndicators]=\"showNavigationIndicators\">\n\t\t\t\t\t<ng-template ngbSlide>\n\t\t\t\t\t\t<img src=\"assets/images/big/img4.jpg\" alt=\"Random first slide\">\n\t\t\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\t\t\t<h4 class=\"text-white font-bold\">10 seconds between slides...</h4>\n\t\t\t\t\t\t\t<p>This carousel uses customized default values.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template ngbSlide>\n\t\t\t\t\t\t<img src=\"assets/images/big/img5.jpg\" alt=\"Random second slide\">\n\t\t\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\t\t\t<h4 class=\"text-white font-bold\">No keyboard...</h4>\n\t\t\t\t\t\t\t<p>This carousel uses customized default values.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template ngbSlide>\n\t\t\t\t\t\t<img src=\"assets/images/big/img6.jpg\" alt=\"Random third slide\">\n\t\t\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\t\t\t<h4 class=\"text-white font-bold\">And no wrap after last slide.</h4>\n\t\t\t\t\t\t\t<p>This carousel uses customized default values.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-carousel>\n\n\t\t\t\t<div class=\"btn-group m-t-40\" role=\"group\" aria-label=\"Carousel toggle controls\">\n  \t\t\t\t\t<button type=\"button\" (click)=\"showNavigationArrows = !showNavigationArrows\" class=\"btn btn-outline-dark btn-sm\">Toggle navigation arrows</button>\n  \t\t\t\t\t<button type=\"button\" (click)=\"showNavigationIndicators = !showNavigationIndicators\" class=\"btn btn-outline-dark btn-sm\">Toggle navigation indicators</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Pause/cycle <span class=\"badge badge-success text-white ml-2\">New</span></h4>\n\t\t\t\t<ngb-carousel #carousel interval=\"1000\" [pauseOnHover]=\"pauseOnHover\" (slide)=\"onSlide($event)\">\n\t\t\t    \t\t<ng-template ngbSlide>\n\t\t\t\t\t\t<img src=\"assets/images/big/img4.jpg\" alt=\"Random first slide\">\n\t\t\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\t\t\t<h4 class=\"text-white font-bold\">10 seconds between slides...</h4>\n\t\t\t\t\t\t\t<p>This carousel uses customized default values.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template ngbSlide>\n\t\t\t\t\t\t<img src=\"assets/images/big/img5.jpg\" alt=\"Random second slide\">\n\t\t\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\t\t\t<h4 class=\"text-white font-bold\">No keyboard...</h4>\n\t\t\t\t\t\t\t<p>This carousel uses customized default values.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template ngbSlide>\n\t\t\t\t\t\t<img src=\"assets/images/big/img6.jpg\" alt=\"Random third slide\">\n\t\t\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\t\t\t<h4 class=\"text-white font-bold\">And no wrap after last slide.</h4>\n\t\t\t\t\t\t\t<p>This carousel uses customized default values.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-carousel>\n\t\t\t\t<hr>\n\t\t\t\t<div class=\"form-check\">\n\t\t\t\t  <input type=\"checkbox\" class=\"form-check-input\" id=\"pauseOnHover\" [(ngModel)]=\"pauseOnHover\">\n\t\t\t\t  <label class=\"form-check-label\" for=\"pauseOnHover\">Pause on hover</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-check\">\n\t\t\t\t  <input type=\"checkbox\" class=\"form-check-input\" id=\"unpauseOnArrow\" [(ngModel)]=\"unpauseOnArrow\">\n\t\t\t\t  <label class=\"form-check-label\" for=\"unpauseOnArrow\">Unpause when clicking on arrows</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-check\">\n\t\t\t\t  <input type=\"checkbox\" class=\"form-check-input\" id=\"pauseOnIndicator\" [(ngModel)]=\"pauseOnIndicator\">\n\t\t\t\t  <label class=\"form-check-label\" for=\"pauseOnIndicator\">Pause when clicking on navigation indicator</label>\n\t\t\t\t</div>\n\t\t\t\t<button type=\"button\" (click)=\"togglePaused()\" class=\"btn btn-outline-dark btn-sm\">\n\t\t\t\t  {{paused ? 'Cycle' : 'Pause' }}\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/datepicker/datepicker.component.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/datepicker/datepicker.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentDatepickerDatepickerComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Datepicker Basic</h4>\n                <h6 class=\"card-subtitle\">This is basic datepicker</h6>\n                <p>Simple datepicker</p>\n                <ngb-datepicker #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next\"></ngb-datepicker>\n                <div class=\"dl\">\n                    <span class=\"m-l-20\">Month: {{ date.month }}.{{ date.year }}</span><br /><br />\n                    <span class=\"m-l-20\">Model: {{ model | json }}</span>\n                </div>\n                <div class=\"m-t-20\">\n                    <button class=\"btn btn-sm btn-outline-info\" (click)=\"selectToday()\">Select Today</button>\n                    <button class=\"btn btn-sm btn-outline-info\" (click)=\"dp.navigateTo()\">To current month</button>\n                    <button class=\"btn btn-sm btn-outline-info\" (click)=\"dp.navigateTo({year: 2013, month: 2})\">To Feb\n                        2013</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Disabled datepicker</h4>\n                <h6 class=\"card-subtitle\">This is Disabled datepicker</h6>\n                <ngb-datepicker [(ngModel)]=\"model3\" [disabled]=\"disabled\"></ngb-datepicker>\n\n                <div class=\"m-t-20\"><button class=\"btn btn-sm btn-outline-{{disabled ? 'danger' : 'success'}}\" (click)=\"disabled = !disabled\">\n                        {{ disabled ? \"disabled\" : \"enabled\"}}\n                    </button></div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Datepicker Multiple months</h4>\n                <h6 class=\"card-subtitle\">This is datepicker Multiple months</h6>\n                <ngb-datepicker [displayMonths]=\"displayMonths\" [navigation]=\"navigation\"></ngb-datepicker>\n                <hr />\n                <form class=\"form-inline\">\n                    <div class=\"form-group\">\n                        <div class=\"input-group\">\n                            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [displayMonths]=\"displayMonths\"\n                                [navigation]=\"navigation\" [showWeekNumbers]=\"showWeekNumbers\" ngbDatepicker #e=\"ngbDatepicker\">\n                            <div class=\"input-group-append\">\n                                <button class=\"btn btn-outline-secondary\" (click)=\"e.toggle()\" type=\"button\">\n                                    <i class=\"fa fa-calendar\"></i>\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n                <hr />\n                <select class=\"custom-select\" [(ngModel)]=\"displayMonths\">\n                    <option [ngValue]=\"1\">One month</option>\n                    <option [ngValue]=\"2\">Two months</option>\n                    <option [ngValue]=\"3\">Three months</option>\n                </select>\n                <select class=\"custom-select\" [(ngModel)]=\"navigation\">\n                    <option value=\"none\">Without navigation</option>\n                    <option value=\"select\">With select boxes</option>\n                    <option value=\"arrows\">Without select boxes</option>\n                </select>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Datepicker in a popup</h4>\n                <h6 class=\"card-subtitle\">This is datepicker with popup</h6>\n                <form class=\"form-inline\">\n                    <div class=\"form-group\">\n                        <div class=\"input-group\">\n                            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp2\" [(ngModel)]=\"model\"\n                                ngbDatepicker #d3=\"ngbDatepicker\">\n                            <div class=\"input-group-append\">\n                                <button class=\"btn btn-outline-secondary no-shadow\" (click)=\"d3.toggle()\" type=\"button\">\n                                    <i class=\"fa fa-calendar\"></i>\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n\n                <hr />\n                <pre>Model: {{ model2 | json }}</pre>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Range Datepicker</h4>\n                <h6 class=\"card-subtitle\">Example of the range selection</h6>\n                <ngb-datepicker #dp ngModel (ngModelChange)=\"onDateChange($event)\" [displayMonths]=\"2\" [dayTemplate]=\"t\">\n                </ngb-datepicker>\n\n                <ng-template #t let-date=\"date\" let-focused=\"focused\">\n                    <span class=\"custom-day\" [class.focused]=\"focused\" [class.range]=\"isFrom(date) || isTo(date) || isInside(date) || isHovered(date)\"\n                        [class.faded]=\"isHovered(date) || isInside(date)\" (mouseenter)=\"hoveredDate = date\"\n                        (mouseleave)=\"hoveredDate = null\">\n                        {{ date.day }}\n                    </span>\n                </ng-template>\n\n                <hr>\n                <div class=\"row\">\n                    <pre class=\"col-md-6\">From: {{ fromDate | json }} </pre>\n                    <pre class=\"col-md-6\">To: {{ toDate | json }} </pre>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Custom date adapter</h4>\n                <h6 class=\"card-subtitle\">\n                    These datepickers use custom Date adapter that lets you use your own model implementation. In this\n                    example we are converting from and to a JS native Date object</h6>\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <ngb-datepicker #d1 [(ngModel)]=\"model1\" #c1=\"ngModel\"></ngb-datepicker>\n\n                        <hr />\n                        <button class=\"btn btn-sm btn-outline-primary\" (click)=\"model1 = today\">Select Today</button>\n                        <hr />\n\n                        <pre>Model: {{ model1 | json }}</pre>\n                        <pre>State: {{ c1.status }}</pre>\n                    </div>\n\n                    <div class=\"col-6\">\n                        <form class=\"form-inline\">\n                            <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                    <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"d2\" #c2=\"ngModel\"\n                                        [(ngModel)]=\"model11\" ngbDatepicker #d2=\"ngbDatepicker\">\n                                    <div class=\"input-group-append\">\n                                        <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\"><i\n                                                class=\"fa fa-calendar\"></i></button>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n\n                        <hr />\n                        <button class=\"btn btn-sm btn-outline-primary\" (click)=\"model11 = today\">Select Today</button>\n                        <hr />\n\n\n                        <pre>Model: {{ model11 | json }}</pre>\n                        <pre>State: {{ c2.status }}</pre>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Custom day view</h4>\n                <p>This datepicker uses a custom template to display days. All week-ends are displayed with an orange\n                    background.</p>\n\n                <form class=\"form-inline\">\n                    <div class=\"form-group\">\n                        <div class=\"input-group\">\n                            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"model4\"\n                                ngbDatepicker [dayTemplate]=\"customDay\" [markDisabled]=\"isDisabled\" #d=\"ngbDatepicker\">\n                            <div class=\"input-group-append\">\n                                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\"><i\n                                        class=\"fa fa-calendar\"></i></button>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n\n                <ng-template #customDay let-date let-currentMonth=\"currentMonth\" let-selected=\"selected\" let-disabled=\"disabled\"\n                    let-focused=\"focused\">\n                    <span class=\"custom-day\" [class.weekend]=\"isWeekend(date)\" [class.focused]=\"focused\"\n                        [class.bg-primary]=\"selected\" [class.hidden]=\"date.month !== currentMonth\" [class.text-muted]=\"disabled\">\n                        {{ date.day }}\n                    </span>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Footer template</h4>\n                <p>This datepicker uses a footer template which is presented inside datepicker. Today and close buttons\n                    used as an example.</p>\n\n                <form class=\"form-inline\">\n                    <div class=\"form-group\">\n                        <div class=\"input-group\">\n                            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp1\" [(ngModel)]=\"model5\"\n                                ngbDatepicker [footerTemplate]=\"footerTemplate\" #d1=\"ngbDatepicker\">\n                            <div class=\"input-group-append\">\n                                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\"><i\n                                        class=\"fa fa-calendar\"></i></button>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n\n                <ng-template #footerTemplate>\n                    <hr class=\"my-0\">\n                    <button class=\"btn btn-primary btn-sm m-2 float-left\" (click)=\"model5 = today5; d1.close()\">Today</button>\n                    <button class=\"btn btn-secondary btn-sm m-2 float-right\" (click)=\"d1.close()\">Close</button>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/dropdown-collapse/dropdown-collapse.component.html":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/dropdown-collapse/dropdown-collapse.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentDropdownCollapseDropdownCollapseComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Dropdown</h4>\n\t\t\t\t<h6 class=\"card-subtitle\">This is basic Dropdown</h6>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t<div ngbDropdown class=\"d-inline-block\">\n\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\tclass=\"btn btn-outline-primary\"\n\t\t\t\t\t\t\t\tid=\"dropdownBasic1\"\n\t\t\t\t\t\t\t\tngbDropdownToggle\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\tToggle dropdown\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n\t\t\t\t\t\t\t\t<button class=\"dropdown-item\">Action - 1</button>\n\t\t\t\t\t\t\t\t<button class=\"dropdown-item\">Another Action</button>\n\t\t\t\t\t\t\t\t<button class=\"dropdown-item\">Something else is here</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col text-right\">\n\t\t\t\t\t\t<div ngbDropdown placement=\"top-right\" class=\"d-inline-block\">\n\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\tclass=\"btn btn-outline-primary\"\n\t\t\t\t\t\t\t\tid=\"dropdownBasic2\"\n\t\t\t\t\t\t\t\tngbDropdownToggle\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\tToggle dropup\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\">\n\t\t\t\t\t\t\t\t<button class=\"dropdown-item\">Action - 1</button>\n\t\t\t\t\t\t\t\t<button class=\"dropdown-item\">Another Action</button>\n\t\t\t\t\t\t\t\t<button class=\"dropdown-item\">Something else is here</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Manual triggers</h4>\n\t\t\t\t<h6 class=\"card-subtitle\">\n\t\t\t\t\tYou can easily control dropdowns programmatically using the exported\n\t\t\t\t\tdropdown instance.\n\t\t\t\t</h6>\n\t\t\t\t<div class=\"d-inline-block\" ngbDropdown #myDrop=\"ngbDropdown\">\n\t\t\t\t\t<button\n\t\t\t\t\t\tclass=\"btn btn-outline-primary\"\n\t\t\t\t\t\tid=\"dropdownManual\"\n\t\t\t\t\t\tngbDropdownToggle\n\t\t\t\t\t>\n\t\t\t\t\t\tToggle dropdown\n\t\t\t\t\t</button>\n\t\t\t\t\t<div ngbDropdownMenu aria-labelledby=\"dropdownManual\">\n\t\t\t\t\t\t<button class=\"dropdown-item\">Action - 1</button>\n\t\t\t\t\t\t<button class=\"dropdown-item\">Another Action</button>\n\t\t\t\t\t\t<button class=\"dropdown-item\">Something else is here</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button\n\t\t\t\t\t\tclass=\"btn btn-outline-success btn-sm\"\n\t\t\t\t\t\t(click)=\"$event.stopPropagation(); myDrop.open()\"\n\t\t\t\t\t>\n\t\t\t\t\t\tOpen from outside\n\t\t\t\t\t</button>\n\t\t\t\t\t<button\n\t\t\t\t\t\tclass=\"btn btn-outline-danger btn-sm\"\n\t\t\t\t\t\t(click)=\"$event.stopPropagation(); myDrop.close()\"\n\t\t\t\t\t>\n\t\t\t\t\t\tClose from outside\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-md-12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Collapse</h4>\n\t\t\t\t<h6 class=\"card-subtitle\">\n\t\t\t\t\tThe NgbCollapse directive provides a simple way to hide and show an\n\t\t\t\t\telement with animations.\n\t\t\t\t</h6>\n\t\t\t\t<p>\n\t\t\t\t\t<button\n\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\tclass=\"btn btn-outline-primary\"\n\t\t\t\t\t\t(click)=\"isCollapsed = !isCollapsed\"\n\t\t\t\t\t\t[attr.aria-expanded]=\"!isCollapsed\"\n\t\t\t\t\t\taria-controls=\"collapseExample\"\n\t\t\t\t\t>\n\t\t\t\t\t\tToggle\n\t\t\t\t\t</button>\n\t\t\t\t</p>\n\t\t\t\t<blockquote id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n\t\t\t\t\tYou can collapse this card by clicking Toggle\n\t\t\t\t</blockquote>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"col-md-12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Button groups and split buttons</h4>\n\t\t\t\t<h6 class=\"card-subtitle\">\n\t\t\t\t\tThBootstrap split buttons and dropdowns on button groups are supported\n\t\t\t\t\twith the existing dropdown directives.\n\t\t\t\t</h6>\n\n\t\t\t\t<div class=\"btn-group mr-3\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-success mr-0\">\n\t\t\t\t\t\tPlain ol' button\n\t\t\t\t\t</button>\n\t\t\t\t\t<div\n\t\t\t\t\t\tclass=\"btn-group\"\n\t\t\t\t\t\tngbDropdown\n\t\t\t\t\t\trole=\"group\"\n\t\t\t\t\t\taria-label=\"Button group with nested dropdown\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<button class=\"btn btn-outline-primary\" ngbDropdownToggle>\n\t\t\t\t\t\t\tDrop me\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<div class=\"dropdown-menu\" ngbDropdownMenu>\n\t\t\t\t\t\t\t<button class=\"dropdown-item\">One</button>\n\t\t\t\t\t\t\t<button class=\"dropdown-item\">Two</button>\n\t\t\t\t\t\t\t<button class=\"dropdown-item\">Four!</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"btn-group mr-3\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary mr-0\">Split me</button>\n\t\t\t\t\t<div\n\t\t\t\t\t\tclass=\"btn-group\"\n\t\t\t\t\t\tngbDropdown\n\t\t\t\t\t\trole=\"group\"\n\t\t\t\t\t\taria-label=\"Button group with nested dropdown\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\tclass=\"btn btn-primary dropdown-toggle-split\"\n\t\t\t\t\t\t\tngbDropdownToggle\n\t\t\t\t\t\t></button>\n\t\t\t\t\t\t<div class=\"dropdown-menu\" ngbDropdownMenu>\n\t\t\t\t\t\t\t<button class=\"dropdown-item\">One</button>\n\t\t\t\t\t\t\t<button class=\"dropdown-item\">Two</button>\n\t\t\t\t\t\t\t<button class=\"dropdown-item\">Four!</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"btn-group mr-3\">\n\t\t\t\t\t<div\n\t\t\t\t\t\tclass=\"btn-group\"\n\t\t\t\t\t\tngbDropdown\n\t\t\t\t\t\trole=\"group\"\n\t\t\t\t\t\taria-label=\"Button group with nested dropdown\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<button class=\"btn btn-outline-danger mr-0\" ngbDropdownToggle>\n\t\t\t\t\t\t\tSelect me\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<div class=\"dropdown-menu\" ngbDropdownMenu>\n\t\t\t\t\t\t\t<button class=\"dropdown-item\">One</button>\n\t\t\t\t\t\t\t<button class=\"dropdown-item\">Two</button>\n\t\t\t\t\t\t\t<button class=\"dropdown-item\">Four!</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div\n\t\t\t\t\t\tclass=\"btn-group\"\n\t\t\t\t\t\tngbDropdown\n\t\t\t\t\t\trole=\"group\"\n\t\t\t\t\t\taria-label=\"Button group with nested dropdown\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<button class=\"btn btn-outline-success\" ngbDropdownToggle>\n\t\t\t\t\t\t\tOr me\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<div class=\"dropdown-menu\" ngbDropdownMenu>\n\t\t\t\t\t\t\t<button class=\"dropdown-item\">One</button>\n\t\t\t\t\t\t\t<button class=\"dropdown-item\">Two</button>\n\t\t\t\t\t\t\t<button class=\"dropdown-item\">Four!</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"col-md-12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Mixed menu items and form <span class=\"badge badge-success text-white\">New</span></h4>\n\t\t\t\t<div ngbDropdown class=\"d-inline-block\">\n\t\t\t\t      <button class=\"btn btn-outline-primary\" id=\"dropdownForm1\" ngbDropdownToggle>Toggle dropdown</button>\n\t\t\t\t      <div ngbDropdownMenu aria-labelledby=\"dropdownForm1\">\n\t\t\t\t       \t<form class=\"px-4 py-3\">\n\t\t\t\t\t          \t<div class=\"form-group\">\n\t\t\t\t\t\t            <label for=\"exampleDropdownFormEmail1\">Email address</label>\n\t\t\t\t\t\t            <input type=\"email\" class=\"form-control\" id=\"exampleDropdownFormEmail1\" placeholder=\"email@example.com\">\n\t\t\t\t\t          \t</div>\n\t\t\t\t\t          \t<div class=\"form-group\">\n\t\t\t\t\t\t            <label for=\"exampleDropdownFormPassword1\">Password</label>\n\t\t\t\t\t\t            <input type=\"password\" class=\"form-control\" id=\"exampleDropdownFormPassword1\" placeholder=\"Password\">\n\t\t\t\t\t          \t</div>\n\t\t\t\t\t          \t<div class=\"form-check\">\n\t\t\t\t\t\t            <input type=\"checkbox\" class=\"form-check-input\" id=\"dropdownCheck\">\n\t\t\t\t\t\t            <label class=\"form-check-label\" for=\"dropdownCheck\">\n\t\t\t\t\t\t              Remember me\n\t\t\t\t\t\t            </label>\n\t\t\t\t          \t\t</div>\n\t\t\t\t          \t\t<button type=\"submit\" class=\"btn btn-primary\">Sign in</button>\n\t\t\t\t        \t</form>\n\t\t\t\t        \t<div class=\"dropdown-divider\"></div>\n\t\t\t\t        \t<button ngbDropdownItem>New around here? Sign up</button>\n\t\t\t\t        \t<button ngbDropdownItem>Forgot password?</button>\n\t\t\t\t      </div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"col-md-12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Dynamic positioning in a navbar <span class=\"badge badge-success text-white\">New</span></h4>\n\t\t\t\t<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n\t\t\t\t\t<span class=\"navbar-brand\">Dropdowns in navbar</span>\n\t\t\t\t\t<button class=\"navbar-toggler\" type=\"button\" aria-controls=\"navbarContent\" [attr.aria-expanded]=\"!collapsed\" aria-label=\"Toggle navigation\" (click)=\"collapsed = !collapsed\">\n\t\t\t\t\t    <span class=\"navbar-toggler-icon\"></span>\n\t\t\t\t\t</button>\n\n\t\t\t\t\t<div class=\"navbar-collapse\" [class.collapse]=\"collapsed\" id=\"navbarContent\">\n\t\t\t\t\t    \t<ul class=\"navbar-nav ml-auto\">\n\t\t\t\t\t      \t<li class=\"nav-item\" ngbDropdown>\n\t\t\t\t\t        \t\t<a class=\"nav-link\" style=\"cursor: pointer\" ngbDropdownToggle id=\"navbarDropdown1\" role=\"button\">\n\t\t\t\t\t          \t\t\tStatic\n\t\t\t\t\t        \t\t</a>\n\t\t\t\t\t        \t\t<div ngbDropdownMenu aria-labelledby=\"navbarDropdown1\" class=\"dropdown-menu\">\n\t\t\t\t\t\t\t          \t<a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Action</a>\n\t\t\t\t\t\t\t          \t<a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Another action</a>\n\t\t\t\t\t\t\t          \t<a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Something else here</a>\n\t\t\t\t\t        \t\t</div>\n\t\t\t\t\t      \t</li>\n\n\t\t\t\t\t      \t<li class=\"nav-item\" ngbDropdown>\n\t\t\t\t\t\t\t      <a class=\"nav-link\" style=\"cursor: pointer\" ngbDropdownToggle id=\"navbarDropdown2\" role=\"button\">\n\t\t\t\t\t\t\t          Static right\n\t\t\t\t\t\t\t      </a>\n\t\t\t\t\t        \t\t<div ngbDropdownMenu aria-labelledby=\"navbarDropdown2\" class=\"dropdown-menu dropdown-menu-right\">\n\t\t\t\t\t\t\t          \t<a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Action</a>\n\t\t\t\t\t\t\t          \t<a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Another action</a>\n\t\t\t\t\t\t\t          \t<a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Something else here</a>\n\t\t\t\t\t        \t\t</div>\n\t\t\t\t\t     \t\t</li>\n\n\t\t\t\t\t      \t<li class=\"nav-item\" ngbDropdown display=\"dynamic\" placement=\"bottom-right\">\n\t\t\t\t\t\t\t      <a class=\"nav-link\" style=\"cursor: pointer\" ngbDropdownToggle id=\"navbarDropdown3\" role=\"button\">\n\t\t\t\t\t\t\t          Dynamic\n\t\t\t\t\t\t\t      </a>\n\t\t\t\t\t        \t\t<div ngbDropdownMenu aria-labelledby=\"navbarDropdown3\" class=\"dropdown-menu\">\n\t\t\t\t\t\t\t          \t<a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Action</a>\n\t\t\t\t\t\t\t          \t<a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Another action</a>\n\t\t\t\t\t\t\t          \t<a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Something else here</a>\n\t\t\t\t\t        \t\t</div>\n\t\t\t\t\t      \t</li>\n\t\t\t\t\t    \t</ul>\n\t\t\t\t\t  </div>\n\t\t\t\t</nav>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/language-datepicker/language-datepicker.component.html":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/language-datepicker/language-datepicker.component.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentLanguageDatepickerLanguageDatepickerComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h3 class=\"card-title\">Internationalization of datepickers</h3>\n        <ngb-datepicker [(ngModel)]=\"model\"></ngb-datepicker>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/modal/modal.component.html":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/modal/modal.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentModalModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Modal with default options</h4>\n\t\t\t\t<h6 class=\"card-subtitle\">This is basic toggletype accordion</h6>\n\t\t\t\t<!--- ------------------\n\t\t\t\t\tModal with date picker (NgbdModalBasicComponent)  \n\t\t\t\t\t---------------------->\n\t\t\t\t<ng-template #content1 let-modal>\n\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t<h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4>\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"dateOfBirth\">Date of birth</label>\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<input id=\"dateOfBirth\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker #dp=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-outline-secondary\" (click)=\"dp.toggle()\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Save</button>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\n\t\t\t\t<button class=\"btn btn-lg btn-outline-primary\" (click)=\"open1(content1)\">Launch demo modal</button>\n\n\t\t\t\t\n\t\t\t\t<div class=\"m-t-20\">{{ closeResult }}</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!--- ------------------\n\tComponent as Content (NgbdModalBasicComponent)  \n\t---------------------->\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Component as Content</h4>\n\t\t\t\t<h6 class=\"card-subtitle\">You can pass an existing component as content of the modal window.</h6>\n\t\t\t\t<ng-template #content2 let-modal>\n\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t<h4 class=\"modal-title\">Modal title</h4>\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-body\"><p>One fine body&hellip;</p></div>\n\t\t\t\t\t<div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-inverse\" (click)=\"modal.dismiss('Cross click')\">Close</button></div>\n\t\t\t\t</ng-template>\n\n\t\t\t\t<button class=\"btn btn-lg btn-outline-primary\" (click)=\"open2(content2)\">Launch demo modal</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!--- ------------------\n\tModal With Options (NgbdModalBasicComponent)  \n\t---------------------->\n\t<div class=\"col-md-12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Modal With Options</h4>\n\t\t\t\t<h6 class=\"card-subtitle\">You can pass an existing component as content of the modal window.</h6>\n\t\t\t\t<ng-template #content3 let-modal>\n\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t<h4 class=\"modal-title\">Modal title</h4>\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t<p>One fine body&hellip;</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\n\t\t\t\t<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openWindowCustomClass(content3)\">Modal with window custom class</button>\n\t\t\t\t<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openBackDropCustomClass(content3)\">\n\t\t\t\t\tModal with backdrop custom class\n\t\t\t\t</button>\n\t\t\t\t<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openSm(content3)\">Small modal</button>\n\t\t\t\t<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openLg(content3)\">Large modal</button>\n\t\t\t\t<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openVerticallyCentered(content3)\">Modal vertically centered</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\n\t<!--- ------------------\n\tStacked modals\n\t---------------------->\n\t<div  class=\"col-md-12\">\n\t \t<div class=\"card\">\n\t \t\t<div class=\"card-body\">\n\t \t\t\t<h4 class=\"card-title\">Stacked modals <span class=\"badge badge-success text-white\">New</span></h4>\n\n\t \t\t\t<ng-template #contentstack let-modal>\n\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t<h4 class=\"modal-title\">Modal title</h4>\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t<p>One fine body&hellip;</p>\n\t\t\t\t\t\t<p><button class=\"btn btn-lg btn-outline-primary\" (click)=\"opensubmodal(contentsubmodal)\">Launch demo modal</button></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\n\n\t\t\t\t<ng-template #contentsubmodal let-modal>\n\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t<h4 class=\"modal-title\">Modal title</h4>\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t<p>Sub Modal is open</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\n\t \t\t\t<button class=\"btn btn-lg btn-outline-primary\" (click)=\"opensubmodal(contentstack)\">Launch demo modal</button>\n\t \t\t</div>\n\t \t</div>\n\t</div>\n</div>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/notifier/notifier.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/notifier/notifier.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentNotifierNotifierComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n\t<div class=\"col-md-12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4>Show notifications</h4>\n\t\t\t\t<div class=\"button-group\">\n\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"showNotification( 'default', 'Good evening, you lovely person!' )\">\n\t\t\t\t\t\t\tDefault me!\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<button class=\"btn btn-info\" (click)=\"showNotification( 'info', 'This library is built on top of Angular 2.' )\">\n\t\t\t\t\t\t\t\t\tInfo me!\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<button class=\"btn btn-success\" (click)=\"showNotification( 'success', 'Notification successfully opened.' )\">\n\t\t\t\t\t\t\t\t\tSuccess me!\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<button class=\"btn btn-warning\" (click)=\"showNotification( 'warning', 'Warning! But not an error! Just a warning!' )\">\n\t\t\t\t\t\t\t\t\tWarning me!\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<button class=\"btn btn-danger\" (click)=\"showNotification( 'error', 'Whoops, something went wrong. Probably.' )\">\n\t\t\t\t\t\t\t\t\tError me!\n\t\t\t\t\t\t\t\t</button>\t\n\t\t\t\t\t</div>\n\t\t\t</div> \n\t\t</div>\t\n\t</div>\t\n</div>\t\n<notifier-container></notifier-container>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/pagination/pagination.component.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/pagination/pagination.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentPaginationPaginationComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Default pagination</h4>\n                <h6 class=\"card-subtitle\">This is basic Default pagination</h6>\n                <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\n\n\t\t\t\t<div>directionLinks = false</div>\n\t\t\t\t<ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" [directionLinks]=\"false\"></ngb-pagination>\n\n\t\t\t\t<div>boundaryLinks = true</div>\n\t\t\t\t<ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" [boundaryLinks]=\"true\"></ngb-pagination>\n\n\t\t\t\t<hr>\n\n\t\t\t\t<pre>Current page: {{page}}</pre>\n  \t\t\t</div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Advanced pagination</h4>\n                <h6 class=\"card-subtitle\">This is Advanced pagination</h6>\n                <div>maxSize = 5, rotate = false</div>\n                <ngb-pagination [collectionSize]=\"120\" [(page)]=\"page2\" [maxSize]=\"5\" [boundaryLinks]=\"true\"></ngb-pagination>\n\n\t\t\t\t<div>maxSize = 5, rotate = true</div>\n\t\t\t\t<ngb-pagination [collectionSize]=\"120\" [(page)]=\"page2\" [maxSize]=\"5\" [rotate]=\"true\" [boundaryLinks]=\"true\"></ngb-pagination>\n\n\t\t\t\t<div>maxSize = 5, rotate = true, ellipses = false</div>\n\t\t\t\t<ngb-pagination [collectionSize]=\"120\" [(page)]=\"page2\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\"></ngb-pagination>\n\n\t\t\t\t<hr>\n\n\t\t\t\t<pre>Current page: {{page2}}</pre>\n  \t\t\t</div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Pagination size</h4>\n                <h6 class=\"card-subtitle\">This is Pagination size</h6>\n                <ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\" size=\"lg\"></ngb-pagination>\n\t\t\t\t<ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\"></ngb-pagination>\n\t\t\t\t<ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\" size=\"sm\"></ngb-pagination>\n  \t\t\t</div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Pagination Alignment</h4>\n                <h6 class=\"card-subtitle\">Change the alignment of pagination components with flexbox utilities.</h6>\n                <ngb-pagination class=\"d-flex justify-content-start\" [collectionSize]=\"70\" [(page)]=\"page\"></ngb-pagination>\n                <ngb-pagination class=\"d-flex justify-content-center\" [collectionSize]=\"70\" [(page)]=\"page\"></ngb-pagination>\n                <ngb-pagination class=\"d-flex justify-content-end\" [collectionSize]=\"70\" [(page)]=\"page\"></ngb-pagination>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Disabled pagination</h4>\n                <h6 class=\"card-subtitle\">This is Disabled pagination</h6>\n                <p>Pagination control can be disabled:</p>\n\t\t\t\t<ngb-pagination [collectionSize]=\"70\" [(page)]=\"disablepage\" [disabled]='isDisabled'></ngb-pagination>\n\t\t\t\t<hr>\n\t\t\t\t<button class=\"btn btn-sm btn-outline-primary\" (click)=\"toggleDisabled()\">\n\t\t\t\t  Toggle disabled\n\t\t\t\t</button>\n  \t\t\t</div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Custom links <span class=\"badge badge-success text-white\">New</span></h4>\n                <h6 class=\"card-subtitle\">A pagination with customized links:</h6>\n                <ngb-pagination [collectionSize]=\"70\" [(page)]=\"pagecustom\" aria-label=\"Custom pagination\">\n                      <ng-template ngbPaginationPrevious>Prev</ng-template>\n                      <ng-template ngbPaginationNext>Next</ng-template>\n                      <ng-template ngbPaginationNumber let-p>{{ getPageSymbol(p) }}</ng-template>\n                </ngb-pagination>\n                    <hr>\n\n                    <pre>Current page: {{pagecustom}}</pre>\n            </div>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/popover-tooltip/popover-tooltip.component.html":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/popover-tooltip/popover-tooltip.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentPopoverTooltipPopoverTooltipComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Quick and easy popovers</h4>\n\t\t\t\t<h6 class=\"card-subtitle\">This is basic popovers</h6>\n\t\t\t\t<div class=\"button-box\">\n\t\t\t\t\t<button\n\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\tclass=\"btn btn-secondary\"\n\t\t\t\t\t\tplacement=\"top\"\n\t\t\t\t\t\tngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n\t\t\t\t\t\tpopoverTitle=\"Popover on top\"\n\t\t\t\t\t>\n\t\t\t\t\t\tPopover on top\n\t\t\t\t\t</button>\n\n\t\t\t\t\t<button\n\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\tclass=\"btn btn-secondary\"\n\t\t\t\t\t\tplacement=\"right\"\n\t\t\t\t\t\tngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n\t\t\t\t\t\tpopoverTitle=\"Popover on right\"\n\t\t\t\t\t>\n\t\t\t\t\t\tPopover on right\n\t\t\t\t\t</button>\n\n\t\t\t\t\t<button\n\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\tclass=\"btn btn-secondary\"\n\t\t\t\t\t\tplacement=\"bottom\"\n\t\t\t\t\t\tngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n\t\t\t\t\t\tpopoverTitle=\"Popover on bottom\"\n\t\t\t\t\t>\n\t\t\t\t\t\tPopover on bottom\n\t\t\t\t\t</button>\n\n\t\t\t\t\t<button\n\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\tclass=\"btn btn-secondary\"\n\t\t\t\t\t\tplacement=\"left\"\n\t\t\t\t\t\tngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n\t\t\t\t\t\tpopoverTitle=\"Popover on left\"\n\t\t\t\t\t>\n\t\t\t\t\t\tPopover on left\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">HTML and bindings in popovers</h4>\n\t\t\t\t<h6 class=\"card-subtitle\">\n\t\t\t\t\tPopovers can contain any arbitrary HTML, Angular bindings and even\n\t\t\t\t\tdirectives! Simply enclose desired content in a\n\t\t\t\t\t<code>&lt;ng-template&gt;</code> element.\n\t\t\t\t</h6>\n\t\t\t\t<ng-template #popContent\n\t\t\t\t\t>Hello, <b>{{ name }}</b\n\t\t\t\t\t>!</ng-template\n\t\t\t\t>\n\t\t\t\t<button\n\t\t\t\t\ttype=\"button\"\n\t\t\t\t\tclass=\"btn btn-secondary\"\n\t\t\t\t\t[ngbPopover]=\"popContent\"\n\t\t\t\t\tpopoverTitle=\"Fancy content\"\n\t\t\t\t>\n\t\t\t\t\tI've got markup and bindings in my popover!\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Custom triggers</h4>\n\t\t\t\t<h6 class=\"card-subtitle\">\n\t\t\t\t\tYou can easily override open and close triggers by specifying event\n\t\t\t\t\tnames (separated by <code>:</code>) in the\n\t\t\t\t\t<code>triggers</code> property.\n\t\t\t\t</h6>\n\t\t\t\t<button\n\t\t\t\t\ttype=\"button\"\n\t\t\t\t\tclass=\"btn btn-secondary\"\n\t\t\t\t\tngbPopover=\"You see, I show up on hover!\"\n\t\t\t\t\ttriggers=\"mouseenter:mouseleave\"\n\t\t\t\t\tpopoverTitle=\"Pop title\"\n\t\t\t\t>\n\t\t\t\t\tHover over me!\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Manual triggers</h4>\n\t\t\t\t<h6 class=\"card-subtitle\">\n\t\t\t\t\tAlternatively you can take full manual control over popover opening /\n\t\t\t\t\tclosing events.\n\t\t\t\t</h6>\n\t\t\t\t<button\n\t\t\t\t\ttype=\"button\"\n\t\t\t\t\tclass=\"btn btn-outline-secondary mr-2\"\n\t\t\t\t\tngbPopover=\"What a great tip!\"\n\t\t\t\t\t[autoClose]=\"false\"\n\t\t\t\t\ttriggers=\"manual\"\n\t\t\t\t\t#p1=\"ngbPopover\"\n\t\t\t\t\t(click)=\"p1.open()\"\n\t\t\t\t\tpopoverTitle=\"Pop title\"\n\t\t\t\t>\n\t\t\t\t\tClick me to open a popover\n\t\t\t\t</button>\n\t\t\t\t<button\n\t\t\t\t\ttype=\"button\"\n\t\t\t\t\tclass=\"btn btn-outline-secondary mr-2\"\n\t\t\t\t\t(click)=\"p1.close()\"\n\t\t\t\t>\n\t\t\t\t\tClick me to close a popover\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Automatic closing with keyboard and mouse</h4>\n\t\t\t\t<h6 class=\"card-subtitle\">\n\t\t\t\t\tAs for some other popup-based widgets, you can set the popover to\n\t\t\t\t\tclose automatically upon some events.\n\t\t\t\t</h6>\n\t\t\t\t<ul>\n\t\t\t\t\t<li class=\"mb-2\">\n\t\t\t\t\t\tclick inside:\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\t\tclass=\"btn btn-outline-secondary\"\n\t\t\t\t\t\t\tpopoverTitle=\"Pop title\"\n\t\t\t\t\t\t\t[autoClose]=\"'inside'\"\n\t\t\t\t\t\t\tngbPopover=\"Click inside or press Escape to close\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tClick to toggle\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li class=\"mb-2\">\n\t\t\t\t\t\tclick outside:\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\t\tclass=\"btn btn-outline-secondary\"\n\t\t\t\t\t\t\tpopoverTitle=\"Pop title\"\n\t\t\t\t\t\t\t[autoClose]=\"'outside'\"\n\t\t\t\t\t\t\tngbPopover=\"Click outside or press Escape to close\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tClick to toggle\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li class=\"mb-2\">\n\t\t\t\t\t\tall clicks:\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\t\tclass=\"btn btn-outline-secondary\"\n\t\t\t\t\t\t\tpopoverTitle=\"Pop title\"\n\t\t\t\t\t\t\t[autoClose]=\"true\"\n\t\t\t\t\t\t\tngbPopover=\"Click anywhere or press Escape to close (try the toggling element too)\"\n\t\t\t\t\t\t\t#popover3=\"ngbPopover\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tClick to toggle\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t&nbsp;\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\t\tclass=\"btn btn-outline-secondary mr-2\"\n\t\t\t\t\t\t\t(click)=\"popover3.toggle()\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tClick to toggle the external popover\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Context and manual triggers</h4>\n\t\t\t\t<h6 class=\"card-subtitle\">\n\t\t\t\t\tYou can optionally pass in a context when manually triggering a\n\t\t\t\t\tpopover.\n\t\t\t\t</h6>\n\t\t\t\t<ng-template #popContent let-greeting=\"greeting\"\n\t\t\t\t\t>{{ greeting }}, <b>{{ name }}</b\n\t\t\t\t\t>!</ng-template\n\t\t\t\t>\n\t\t\t\t<p>\n\t\t\t\t\tHow would you like to greet\n\t\t\t\t\t<strong\n\t\t\t\t\t\t[ngbPopover]=\"popContent\"\n\t\t\t\t\t\tpopoverTitle=\"Greeting\"\n\t\t\t\t\t\t#p=\"ngbPopover\"\n\t\t\t\t\t\ttriggers=\"manual\"\n\t\t\t\t\t\t>me</strong\n\t\t\t\t\t>?\n\t\t\t\t</p>\n\t\t\t\t<button\n\t\t\t\t\ttype=\"button\"\n\t\t\t\t\tclass=\"btn btn-outline-secondary mr-2\"\n\t\t\t\t\t(click)=\"changeGreeting({ greeting: 'Bonjour' })\"\n\t\t\t\t>\n\t\t\t\t\tFrench\n\t\t\t\t</button>\n\t\t\t\t<button\n\t\t\t\t\ttype=\"button\"\n\t\t\t\t\tclass=\"btn btn-outline-secondary mr-2\"\n\t\t\t\t\t(click)=\"changeGreeting({ greeting: 'Gutentag' })\"\n\t\t\t\t>\n\t\t\t\t\tGerman\n\t\t\t\t</button>\n\t\t\t\t<button\n\t\t\t\t\ttype=\"button\"\n\t\t\t\t\tclass=\"btn btn-outline-secondary mr-2\"\n\t\t\t\t\t(click)=\"changeGreeting({ greeting: 'Hello' })\"\n\t\t\t\t>\n\t\t\t\t\tEnglish\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Popover Visibility Events</h4>\n\t\t\t\t<h6 class=\"card-subtitle\">\n\t\t\t\t\tYou can optionally pass in a context when manually triggering a\n\t\t\t\t\tpopover.\n\t\t\t\t</h6>\n\t\t\t\t<button\n\t\t\t\t\ttype=\"button\"\n\t\t\t\t\tclass=\"btn btn-outline-secondary\"\n\t\t\t\t\tplacement=\"top\"\n\t\t\t\t\tngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n\t\t\t\t\tpopoverTitle=\"Popover on top\"\n\t\t\t\t\t#popover=\"ngbPopover\"\n\t\t\t\t\t(shown)=\"recordShown()\"\n\t\t\t\t\t(hidden)=\"recordHidden()\"\n\t\t\t\t>\n\t\t\t\t\tOpen Popover\n\t\t\t\t</button>\n\t\t\t\t<hr />\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\tPopover is currently:\n\t\t\t\t\t\t<code>{{ popover.isOpen() ? 'open' : 'closed' }}</code>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\tLast shown at: <code>{{ lastShown | date: 'h:mm:ss' }}</code>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\tLast hidden at: <code>{{ lastHidden | date: 'h:mm:ss' }}</code>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Append popover in the body</h4>\n\t\t\t\t<p>\n\t\t\t\t\tSet the <code>container</code> property to \"body\" to have the popover\n\t\t\t\t\tbe appended to the body instead of the triggering element's parent.\n\t\t\t\t\tThis option is useful if the element triggering the popover is inside\n\t\t\t\t\tan element that clips its contents (i.e.\n\t\t\t\t\t<code>overflow: hidden</code>).\n\t\t\t\t</p>\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"card px-1 py-5\">\n\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\t\t\tclass=\"btn btn-outline-secondary mb-2\"\n\t\t\t\t\t\t\t\tngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\tDefault popover\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\t\t\tclass=\"btn btn-outline-secondary\"\n\t\t\t\t\t\t\t\tngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n\t\t\t\t\t\t\t\tcontainer=\"body\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\tPopover appended to body\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Open and close delays <span class=\"badge badge-success text-white\">New</span></h4>\n\t\t\t\t<p>\n\t\t\t\t\tWhen using non-manual triggers, you can control the delay to open and close the popover through the <code>openDelay</code> and <code>closeDelay</code> properties. Note that the <code>autoClose</code> feature does not use the close delay, it closes the popover immediately.\n\t\t\t\t</p>\n\n\t\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary mr-2\"\n\t\t\t\t  ngbPopover=\"You see, I show up after 300ms and disappear after 500ms!\"\n\t\t\t\t  [openDelay]=\"300\" [closeDelay]=\"500\" triggers=\"mouseenter:mouseleave\">\n\t\t\t\t  Hover 300ms here\n\t\t\t\t</button>\n\n\t\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary mr-2\"\n\t\t\t\t  ngbPopover=\"You see, I show up after 1s and disappear after 2s!\"\n\t\t\t\t  [openDelay]=\"1000\" [closeDelay]=\"2000\" triggers=\"mouseenter:mouseleave\">\n\t\t\t\t  Hover 1s here\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<h4 class=\"card-title\">Tooltips</h4>\n<div class=\"row\">\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Custom and manual triggers</h4>\n\t\t\t\t<h6 class=\"card-subtitle\">\n\t\t\t\t\tYou can easily override open and close triggers by specifying event\n\t\t\t\t\tnames (separated by :) in the triggers property.\n\t\t\t\t</h6>\n\t\t\t\t<button\n\t\t\t\t\ttype=\"button\"\n\t\t\t\t\tclass=\"btn btn-secondary\"\n\t\t\t\t\tngbTooltip=\"You see, I show up on click!\"\n\t\t\t\t\ttriggers=\"click:blur\"\n\t\t\t\t>\n\t\t\t\t\tClick me!\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Quick and easy tooltips</h4>\n\t\t\t\t<h6 class=\"card-subtitle\">This is Quick and easy tooltips</h6>\n\t\t\t\t<div class=\"button-box\">\n\t\t\t\t\t<button\n\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\tclass=\"btn btn-secondary\"\n\t\t\t\t\t\tplacement=\"top\"\n\t\t\t\t\t\tngbTooltip=\"Tooltip on top\"\n\t\t\t\t\t>\n\t\t\t\t\t\tTooltip on top\n\t\t\t\t\t</button>\n\t\t\t\t\t<button\n\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\tclass=\"btn btn-secondary\"\n\t\t\t\t\t\tplacement=\"right\"\n\t\t\t\t\t\tngbTooltip=\"Tooltip on right\"\n\t\t\t\t\t>\n\t\t\t\t\t\tTooltip on right\n\t\t\t\t\t</button>\n\t\t\t\t\t<button\n\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\tclass=\"btn btn-secondary\"\n\t\t\t\t\t\tplacement=\"bottom\"\n\t\t\t\t\t\tngbTooltip=\"Tooltip on bottom\"\n\t\t\t\t\t>\n\t\t\t\t\t\tTooltip on bottom\n\t\t\t\t\t</button>\n\t\t\t\t\t<button\n\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\tclass=\"btn btn-secondary\"\n\t\t\t\t\t\tplacement=\"left\"\n\t\t\t\t\t\tngbTooltip=\"Tooltip on left\"\n\t\t\t\t\t>\n\t\t\t\t\t\tTooltip on left\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">HTML and bindings in tooltips</h4>\n\t\t\t\t<h6 class=\"card-subtitle\">\n\t\t\t\t\tTooltips can contain any arbitrary HTML, Angular bindings and even\n\t\t\t\t\tdirectives! Simply enclose desired content in a\n\t\t\t\t\t<code>ng-template</code> element.\n\t\t\t\t</h6>\n\t\t\t\t<ng-template #tipContent\n\t\t\t\t\t>Hello, <b>{{ name }}</b\n\t\t\t\t\t>!</ng-template\n\t\t\t\t>\n\t\t\t\t<button\n\t\t\t\t\ttype=\"button\"\n\t\t\t\t\tclass=\"btn btn-secondary\"\n\t\t\t\t\t[ngbTooltip]=\"tipContent\"\n\t\t\t\t>\n\t\t\t\t\tI've got markup and bindings in my tooltip!\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Custom and manual triggers</h4>\n\t\t\t\t<h6 class=\"card-subtitle\">\n\t\t\t\t\tYou can easily override open and close triggers by specifying event\n\t\t\t\t\tnames (separated by :) in the triggers property.\n\t\t\t\t</h6>\n\t\t\t\t<button\n\t\t\t\t\ttype=\"button\"\n\t\t\t\t\tclass=\"btn btn-outline-secondary\"\n\t\t\t\t\tngbTooltip=\"You see, I show up on click!\"\n\t\t\t\t\ttriggers=\"click:blur\"\n\t\t\t\t>\n\t\t\t\t\tClick me!\n\t\t\t\t</button>\n\t\t\t\t<hr />\n\t\t\t\t<button\n\t\t\t\t\ttype=\"button\"\n\t\t\t\t\tclass=\"btn btn-outline-secondary mr-2\"\n\t\t\t\t\tngbTooltip=\"What a great tip!\"\n\t\t\t\t\t[autoClose]=\"false\"\n\t\t\t\t\ttriggers=\"manual\"\n\t\t\t\t\t#t=\"ngbTooltip\"\n\t\t\t\t\t(click)=\"t.open()\"\n\t\t\t\t>\n\t\t\t\t\tClick me to open a tooltip\n\t\t\t\t</button>\n\t\t\t\t<button\n\t\t\t\t\ttype=\"button\"\n\t\t\t\t\tclass=\"btn btn-outline-secondary mr-2\"\n\t\t\t\t\t(click)=\"t.close()\"\n\t\t\t\t>\n\t\t\t\t\tClick me to close a tooltip\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Automatic closing with keyboard and mouse</h4>\n\t\t\t\t<h6 class=\"card-subtitle\">\n\t\t\t\t\tAs for some other popup-based widgets, you can set the tooltip to\n\t\t\t\t\tclose automatically upon some events.\n\t\t\t\t</h6>\n\t\t\t\t<ul>\n\t\t\t\t\t<li class=\"mb-2\">\n\t\t\t\t\t\tclick inside:\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\t\tclass=\"btn btn-outline-secondary\"\n\t\t\t\t\t\t\ttriggers=\"click\"\n\t\t\t\t\t\t\t[autoClose]=\"'inside'\"\n\t\t\t\t\t\t\tngbTooltip=\"Click inside or press Escape to close\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tClick to toggle\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li class=\"mb-2\">\n\t\t\t\t\t\tclick outside:\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\t\tclass=\"btn btn-outline-secondary\"\n\t\t\t\t\t\t\ttriggers=\"click\"\n\t\t\t\t\t\t\t[autoClose]=\"'outside'\"\n\t\t\t\t\t\t\tngbTooltip=\"Click outside or press Escape to close\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tClick to toggle\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li class=\"mb-2\">\n\t\t\t\t\t\tall clicks:\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\t\tclass=\"btn btn-outline-secondary\"\n\t\t\t\t\t\t\ttriggers=\"click\"\n\t\t\t\t\t\t\t[autoClose]=\"true\"\n\t\t\t\t\t\t\tngbTooltip=\"Click anywhere or press Escape to close (try the toggling element too)\"\n\t\t\t\t\t\t\t#tooltip3=\"ngbTooltip\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tClick to toggle\n\t\t\t\t\t\t</button>\n\n\t\t\t\t\t\t&nbsp;\n\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\t\tclass=\"btn btn-outline-secondary mr-2\"\n\t\t\t\t\t\t\t(click)=\"tooltip3.toggle()\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tClick to toggle the external tooltip\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Context and manual triggers</h4>\n\t\t\t\t<h6 class=\"card-subtitle\">\n\t\t\t\t\tYou can optionally pass in a context when manually triggering a\n\t\t\t\t\ttooltip.\n\t\t\t\t</h6>\n\t\t\t\t<ng-template #tipContent let-greeting=\"greeting\"\n\t\t\t\t\t>{{ greeting }}, <b>{{ name }}</b\n\t\t\t\t\t>!</ng-template\n\t\t\t\t>\n\t\t\t\t<button\n\t\t\t\t\ttype=\"button\"\n\t\t\t\t\tclass=\"btn btn-outline-secondary mr-2\"\n\t\t\t\t\t[ngbTooltip]=\"tipContent\"\n\t\t\t\t\ttriggers=\"manual\"\n\t\t\t\t\t#t1=\"ngbTooltip\"\n\t\t\t\t\t(click)=\"toggleWithGreeting(t1, 'Bonjour')\"\n\t\t\t\t>\n\t\t\t\t\tFrench\n\t\t\t\t</button>\n\t\t\t\t<button\n\t\t\t\t\ttype=\"button\"\n\t\t\t\t\tclass=\"btn btn-outline-secondary mr-2\"\n\t\t\t\t\t[ngbTooltip]=\"tipContent\"\n\t\t\t\t\ttriggers=\"manual\"\n\t\t\t\t\t#t2=\"ngbTooltip\"\n\t\t\t\t\t(click)=\"toggleWithGreeting(t2, 'Gutentag')\"\n\t\t\t\t>\n\t\t\t\t\tGerman\n\t\t\t\t</button>\n\t\t\t\t<button\n\t\t\t\t\ttype=\"button\"\n\t\t\t\t\tclass=\"btn btn-outline-secondary mr-2\"\n\t\t\t\t\t[ngbTooltip]=\"tipContent\"\n\t\t\t\t\ttriggers=\"manual\"\n\t\t\t\t\t#t3=\"ngbTooltip\"\n\t\t\t\t\t(click)=\"toggleWithGreeting(t3, 'Hello')\"\n\t\t\t\t>\n\t\t\t\t\tEnglish\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Append tooltip in the body</h4>\n\t\t\t\t<h6 class=\"card-subtitle\">\n\t\t\t\t\tSet the container property to \"body\" to have the tooltip be appended\n\t\t\t\t\tto the body instead of the triggering element's parent. This option is\n\t\t\t\t\tuseful if the element triggering the tooltip is inside an element that\n\t\t\t\t\tclips its contents (i.e. overflow: hidden).\n\t\t\t\t</h6>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"card px-1 py-5\">\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\t\tclass=\"btn btn-outline-secondary mb-2\"\n\t\t\t\t\t\t\tngbTooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tDefault tooltip\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\t\tclass=\"btn btn-outline-secondary\"\n\t\t\t\t\t\t\tngbTooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n\t\t\t\t\t\t\tcontainer=\"body\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tTooltip appended to body\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Tooltip with custom class <span class=\"badge badge-success text-white\">New</span></h4>\n\t\t\t\t<h6 class=\"card-subtitle\">\n\t\t\t\t\tYou can optionally pass in a custom class via tooltipClass\n\t\t\t\t</h6>\n\t\t\t\t<button\n\t\t\t\t\ttype=\"button\"\n\t\t\t\t\tclass=\"btn btn-outline-secondary\"\n\t\t\t\t\tngbTooltip=\"Nice class!\"\n\t\t\t\t\ttooltipClass=\"my-custom-class\"\n\t\t\t\t>\n\t\t\t\t\tTooltip with custom class\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/progressbar/progressbar.component.html":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/progressbar/progressbar.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentProgressbarProgressbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    \n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Basic Progressbar</h4>\n                <h6 class=\"card-subtitle\">This is Basic Progressbar</h6>\n                <p><ngb-progressbar type=\"success\" [value]=\"25\"></ngb-progressbar></p>\n                <p><ngb-progressbar type=\"info\" [value]=\"50\"></ngb-progressbar></p>\n                <p><ngb-progressbar type=\"primary\" [value]=\"150\" [max]=\"200\"></ngb-progressbar></p>\n                <p><ngb-progressbar type=\"inverse\" [value]=\"150\" [max]=\"150\"></ngb-progressbar></p>\n                <p><ngb-progressbar type=\"warning\" [value]=\"75\"></ngb-progressbar></p>\n                <p><ngb-progressbar type=\"danger\" [value]=\"100\"></ngb-progressbar></p>\n                  \n  \t\t\t</div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Progress bars with current value labels</h4>\n                <h6 class=\"card-subtitle\">This is Progress bars with current value labels</h6>\n                <p><ngb-progressbar showValue=\"true\" type=\"success\" [value]=\"25\"></ngb-progressbar></p>\n                <p><ngb-progressbar [showValue]=\"true\" type=\"info\" [value]=\"50\"></ngb-progressbar></p>\n                <p><ngb-progressbar showValue=\"true\" type=\"primary\" [value]=\"150\" [max]=\"200\"></ngb-progressbar></p>\n                <p><ngb-progressbar [showValue]=\"true\" type=\"inverse\" [value]=\"150\" [max]=\"150\"></ngb-progressbar></p>\n                <p><ngb-progressbar showValue=\"true\" type=\"warning\" [value]=\"150\" [max]=\"200\"></ngb-progressbar></p>\n                <p><ngb-progressbar [showValue]=\"true\" type=\"danger\" [value]=\"150\" [max]=\"150\"></ngb-progressbar></p>\n  \t\t\t</div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Striped progress bars</h4>\n                <h6 class=\"card-subtitle\">This is Striped progress</h6>\n                <p><ngb-progressbar type=\"success\" [value]=\"25\" [striped]=\"true\"></ngb-progressbar></p>\n                <p><ngb-progressbar type=\"info\" [value]=\"50\" [striped]=\"true\"></ngb-progressbar></p>\n                <p><ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\"></ngb-progressbar></p>\n                <p><ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\"></ngb-progressbar></p>\n  \t\t\t</div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Progress bars with custom labels</h4>\n                <h6 class=\"card-subtitle\">This is basic Default pagination</h6>\n                <p><ngb-progressbar type=\"success\" [value]=\"25\">25</ngb-progressbar></p>\n                <p><ngb-progressbar type=\"info\" [value]=\"50\">Copying file <b>2 of 4</b>...</ngb-progressbar></p>\n                <p><ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\"><i>50%</i></ngb-progressbar></p>\n                <p><ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\">Completed!</ngb-progressbar></p>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Progress bars with heights</h4>\n                <h6 class=\"card-subtitle\">This is basic Default pagination</h6>\n                <p><ngb-progressbar type=\"success\" [value]=\"25\">default</ngb-progressbar></p>\n                <p><ngb-progressbar type=\"info\" [value]=\"50\" height=\"10px\">10px</ngb-progressbar></p>\n                <p><ngb-progressbar type=\"warning\" [value]=\"75\" height=\".5rem\">.5rem</ngb-progressbar></p>\n                <p><ngb-progressbar type=\"danger\" [value]=\"100\" [height]=\"height\">{{height}}</ngb-progressbar></p>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Global configuration of progress bars</h4>\n                <h6 class=\"card-subtitle\">This is Global configuration of progress bars</h6>\n                <p>This progress bar uses the customized default values.</p>\n                <p><ngb-progressbar value=\"250\"></ngb-progressbar></p>\n\n                <p>This progress bar uses the customized default values, but changes the type using an input.</p>\n                <p><ngb-progressbar value=\"500\" type=\"info\"></ngb-progressbar></p>\n            </div>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/rating/rating.component.html":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/rating/rating.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentRatingRatingComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Basic demo</h4>\n                <h6 class=\"card-subtitle\">This is basic demo for rating {{currentRate}}</h6>\n                <ngb-rating [(rate)]=\"currentRate\"></ngb-rating>\n                \n                <div class=\"m-t-10\">Rate: <b>{{currentRate}}</b></div>\n  \t\t\t</div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Custom star template <span class=\"badge badge-success text-white\">New</span></h4>\n                <h6 class=\"card-subtitle\">Custom rating template provided as child element</h6>\n               <ngb-rating [(rate)]=\"currentRate\">\n              <ng-template let-fill=\"fill\" let-index=\"index\">\n                <span class=\"star\" [class.filled]=\"fill === 100\" [class.bad]=\"index < 3\">&#9733;</span>\n              </ng-template>\n            </ngb-rating>\n            \n            <div class=\"m-t-10\">Rate: <b>{{currentRate}}</b></div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Events and readonly ratings</h4>\n                <h6 class=\"card-subtitle\">This is demo for readonly ratings </h6>\n                <ngb-rating [(rate)]=\"selected\" (hover)=\"hovered=$event\" (leave)=\"hovered=0\" [readonly]=\"readonly\"></ngb-rating>\n                <div class=\"m-t-10\">Selected: <b>{{selected}}</b><br/>Hovered: <b>{{hovered}}</b>\n                </div><button class=\"btn btn-sm m-t-10 btn-outline-{{readonly ? 'danger' : 'success'}}\" (click)=\"readonly = !readonly\">\n                  {{ readonly ? \"readonly\" : \"editable\"}}\n                </button>\n  \t\t\t</div>\n        </div>\n    </div>\n    \n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Custom decimal rating</h4>\n                <h6 class=\"card-subtitle\">Custom rating template provided via a variable. Shows fine-grained rating display</h6>\n                <ng-template #t let-fill=\"fill\">\n                  <span *ngIf=\"fill === 100\" class=\"heart full\">&hearts;</span>\n                  <span *ngIf=\"fill === 0\" class=\"heart\">&hearts;</span>\n                  <span *ngIf=\"fill < 100 && fill > 0\" class=\"heart\">\n                    <span class=\"half\" [style.width.%]=\"fill\">&hearts;</span>&hearts;\n                  </span>\n                </ng-template>\n\n                <ngb-rating [(rate)]=\"currentRate2\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\n                <div>Rate: <b>{{currentRate2}}</b></div>\n                <button class=\"btn btn-sm btn-outline-primary\" (click)=\"currentRate2 = 1.50\">1.50</button>\n                <button class=\"btn btn-sm btn-outline-primary\" (click)=\"currentRate2 = 4.72\">4.72</button>\n\t\t\t\t\n  \t\t\t</div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Form integration</h4>\n                <h6 class=\"card-subtitle\">NgModel and reactive forms can be used without the 'rate' binding</h6>\n                <div class=\"form-group\" [class.has-success]=\"ctrl.valid\" [class.has-danger]=\"ctrl.invalid\">\n                  <ngb-rating [formControl]=\"ctrl\"></ngb-rating>\n                  <div class=\"form-control-feedback\">\n                    <div *ngIf=\"ctrl.valid\">Thanks!</div>\n                    <div *ngIf=\"ctrl.errors\">Please rate us</div>\n                  </div>\n                </div>\n\n                <hr>\n                <pre>Model: <b>{{ ctrl.value }}</b></pre>\n                <button class=\"btn btn-sm btn-outline-{{ ctrl.disabled ? 'danger' : 'success'}}\" (click)=\"toggle()\">\n                  {{ ctrl.disabled ? \"control disabled\" : \" control enabled\" }}\n                </button>\n                <button class=\"btn btn-sm btn-outline-primary\" (click)=\"ctrl.setValue(null)\">Clear</button>\n            </div>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/tabs/tabs.component.html":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/tabs/tabs.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentTabsTabsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Default Tabset</h4>\n                <h6 class=\"card-subtitle\">This is basic Default pagination</h6>\n                <ngb-tabset>\n                  <ngb-tab title=\"Simple\">\n                    <ng-template ngbTabContent>\n                      <p class=\"p-t-20\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab>\n                    <ng-template ngbTabTitle><b>Fancy</b></ng-template>\n                    <ng-template ngbTabContent>\n                      <p class=\"p-t-20\">Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n                      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n                      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n                      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n                      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n                      sint qui sapiente accusamus tattooed echo park.</p>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab title=\"Disabled\" [disabled]=\"true\">\n                    <ng-template ngbTabContent>\n                      <p class=\"p-t-20\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n                    </ng-template>\n                  </ngb-tab>\n                </ngb-tabset>\n  \t\t\t</div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Pills</h4>\n                <h6 class=\"card-subtitle\">This is Pills demo</h6>\n                <ngb-tabset type=\"pills\">\n                  <ngb-tab title=\"Simple\">\n                    <ng-template ngbTabContent>\n                      <p  class=\"p-t-20\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab>\n                    <ng-template ngbTabTitle><b>Fancy</b></ng-template>\n                    <ng-template ngbTabContent>\n                      <p  class=\"p-t-20\">Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n                      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n                      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n                      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n                      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n                      sint qui sapiente accusamus tattooed echo park.</p>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab title=\"Disabled\" [disabled]=\"true\">\n                    <ng-template ngbTabContent>\n                      <p  class=\"p-t-20\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n                    </ng-template>\n                  </ngb-tab>\n                </ngb-tabset>\n  \t\t\t</div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Select an active tab by id</h4>\n                <h6 class=\"card-subtitle\">This is Pagination size</h6>\n                <ngb-tabset #t=\"ngbTabset\">\n                  <ngb-tab id=\"tab-selectbyid1\" title=\"Simple\">\n                    <ng-template ngbTabContent>\n                      <p class=\"p-t-20\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab id=\"tab-selectbyid2\">\n                    <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\n                    <ng-template ngbTabContent>\n                      <p class=\"p-t-20\">Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n                      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n                      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n                      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n                      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n                      sint qui sapiente accusamus tattooed echo park.</p>\n                    </ng-template>\n                  </ngb-tab>\n                </ngb-tabset>\n\n                <p>\n                  <button class=\"btn btn-outline-primary\" (click)=\"t.select('tab-selectbyid2')\">Selected tab with \"tab-selectbyid2\" id</button>\n                </p>\n  \t\t\t</div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Prevent tab change</h4>\n                <h6 class=\"card-subtitle\">This is Prevent tab change</h6>\n                <ngb-tabset  (tabChange)=\"beforeChange($event)\">\n                  <ngb-tab id=\"tab-preventchange1\" title=\"Simple\">\n                    <ng-template ngbTabContent>\n                      <p class=\"p-t-20\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab id=\"tab-preventchange2\" title=\"I can't be selected...\">\n                    <ng-template ngbTabContent>\n                      <p class=\"p-t-20\">Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n                      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n                      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n                      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n                      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n                      sint qui sapiente accusamus tattooed echo park.</p>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab title=\"But I can!\" >\n                    <ng-template ngbTabContent>\n                      <p class=\"p-t-20\">Heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n                    </ng-template>\n                  </ngb-tab>\n                </ngb-tabset>\n  \t\t\t </div>\n        </div>\n    </div>\n    <div class=\"col-md-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Nav Justification</h4>\n                <h6 class=\"card-subtitle\">This is Prevent tab change</h6>\n                <ngb-tabset [justify]=\"currentJustify\">\n                  <ngb-tab title=\"Simple\">\n                    <ng-template ngbTabContent>\n                      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab>\n                    <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\n                    <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\n                      <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n                      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n                      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n                      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n                      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n                      sint qui sapiente accusamus tattooed echo park.</p>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab title=\"A very long nav title\">\n                    <ng-template ngbTabContent>\n                      <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.</p>\n                    </ng-template>\n                  </ngb-tab>\n                </ngb-tabset>\n                <div class=\"btn-group btn-group-toggle m-t-20\" ngbRadioGroup [(ngModel)]=\"currentJustify\">\n                  <label ngbButtonLabel class=\"btn-primary btn-sm\">\n                    <input ngbButton type=\"radio\" value=\"start\">Start\n                  </label>\n                  <label ngbButtonLabel class=\"btn-primary btn-sm\">\n                    <input ngbButton type=\"radio\" value=\"center\">Center\n                  </label>\n                  <label ngbButtonLabel class=\"btn-primary btn-sm\">\n                    <input ngbButton type=\"radio\" value=\"end\">End\n                  </label>\n                  <label ngbButtonLabel class=\"btn-primary btn-sm\">\n                    <input ngbButton type=\"radio\" value=\"fill\">Fill\n                  </label>\n                  <label ngbButtonLabel class=\"btn-primary btn-sm\">\n                    <input ngbButton type=\"radio\" value=\"justified\">Justified\n                  </label>\n                </div>\n          </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Nav Orientation</h4>\n                <ngb-tabset type=\"pills\" [orientation]=\"currentOrientation\">\n                  <ngb-tab title=\"Simple\">\n                    <ng-template ngbTabContent>\n                      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab>\n                    <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\n                    <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\n                      <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n                      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n                      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n                      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n                      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n                      sint qui sapiente accusamus tattooed echo park.</p>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab title=\"Disabled\" [disabled]=\"true\">\n                    <ng-template ngbTabContent>\n                      <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.</p>\n                    </ng-template>\n                  </ngb-tab>\n                </ngb-tabset>\n\n                <div class=\"btn-group btn-group-toggle\" ngbRadioGroup [(ngModel)]=\"currentOrientation\">\n                  <label ngbButtonLabel class=\"btn-primary btn-sm\">\n                    <input ngbButton type=\"radio\" value=\"horizontal\">Horizontal\n                  </label>\n                  <label ngbButtonLabel class=\"btn-primary btn-sm\">\n                    <input ngbButton type=\"radio\" value=\"vertical\">Vertical\n                  </label>\n                </div>\n         </div>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/timepicker/timepicker.component.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/timepicker/timepicker.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentTimepickerTimepickerComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-md-6\">\n\t  <div class=\"card\">\n\t\t<div class=\"card-body\">\n\t\t    <h4 class=\"card-title\">Timepicker</h4>\n\t\t    <h6 class=\"card-subtitle\">This is basic Timepicker</h6>\n\t\t    <ngb-timepicker [(ngModel)]=\"time\"></ngb-timepicker>\n\t\t    <pre>Selected time: {{time | json}}</pre>\n\t\t\t</div> \n\t  </div>\n    </div>\n    <div class=\"col-md-6\">\n\t  <div class=\"card\">\n\t\t<div class=\"card-body\">\n\t\t    <h4 class=\"card-title\">Spinners</h4>\n\t\t    <h6 class=\"card-subtitle\">This is Spinners</h6>\n\t\t    <ngb-timepicker [(ngModel)]=\"time\" [spinners]=\"spinners\"></ngb-timepicker>\n\t\t    <button class=\"m-t-1 m-t-10 btn btn-sm btn-outline-{{spinners ? 'success' : 'danger'}}\" (click)=\"toggleSpinners()\">\n\t\t\t  Spinners - {{spinners ? \"ON\" : \"OFF\"}}\n\t\t    </button>\n\t\t</div>\n\t  </div>\n    </div>\n    <div class=\"col-md-6\">\n\t  <div class=\"card\">\n\t\t<div class=\"card-body\">\n\t\t    <h4 class=\"card-title\">Meridian</h4>\n\t\t    <h6 class=\"card-subtitle\">This is Meridian Timepicker</h6>\n\t\t    <ngb-timepicker [(ngModel)]=\"time\" [meridian]=\"meridian\"></ngb-timepicker>\n\t\t    <button class=\"btn btn-sm btn-outline-{{meridian ? 'success' : 'danger'}}\" (click)=\"toggleMeridian()\">\n\t\t\t  Meridian - {{meridian ? \"ON\" : \"OFF\"}}\n\t\t    </button>\n\t\t    <hr>\n\t\t    <pre>Selected time: {{time | json}}</pre>\n\t\t\t</div>\n\t  </div>\n    </div>\n    <div class=\"col-md-6\">\n\t  <div class=\"card\">\n\t\t<div class=\"card-body\">\n\t\t    <h4 class=\"card-title\">Seconds</h4>\n\t\t    <h6 class=\"card-subtitle\">This is Seconds with the on off</h6>\n\t\t    <ngb-timepicker [(ngModel)]=\"time\" [seconds]=\"seconds\"></ngb-timepicker>\n\t\t    <button class=\"btn btn-sm btn-outline-{{seconds ? 'success' : 'danger'}}\" (click)=\"toggleSeconds()\">\n\t\t\t  Seconds - {{seconds ? \"ON\" : \"OFF\"}}\n\t\t    </button>\n\t\t    <hr>\n\t\t    <pre>Selected time: {{time | json}}</pre> \n\t\t\t</div>\n\t  </div>\n    </div>\n    <div class=\"col-md-12\">\n\t  <div class=\"card\">\n\t\t<div class=\"card-body\">\n\t\t    <h4 class=\"card-title\">Custom steps</h4>\n\t\t    <h6 class=\"card-subtitle\">This is Custom steps</h6>\n\t\t    <ngb-timepicker [(ngModel)]=\"time2\" [seconds]=\"true\"\n\t\t\t  [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\" [secondStep]=\"secondStep\"></ngb-timepicker>\n\n\t\t    <div class=\"row\">\n\t\t\t  <div class=\"col-md-3\">\n\t\t\t\t<label for=\"changeHourStep\">Hour Step</label>\n\t\t\t\t<input id=\"changeHourStep\" type=\"number\" class=\"form-control form-control\" [(ngModel)]=\"hourStep\" />\n\t\t\t  </div>\n\t\t\t  <div class=\"col-md-3\">\n\t\t\t\t<label for=\"changeMinuteStep\">Minute Step</label>\n\t\t\t\t<input id=\"changeMinuteStep\" type=\"number\" class=\"form-control form-control\" [(ngModel)]=\"minuteStep\" />\n\t\t\t  </div>\n\t\t\t  <div class=\"col-md-3\">\n\t\t\t\t<label for=\"changeSecondStep\">Second Step</label>\n\t\t\t\t<input id=\"changeSecondStep\" type=\"number\" class=\"form-control form-control\" [(ngModel)]=\"secondStep\" />\n\t\t\t  </div>\n\t\t    </div>\n\t\t    \n\t\t    <pre class=\"m-t-20\">Selected time: {{time2 | json}}</pre>\n\t\t</div>\n\t  </div>\n    </div>\n    <div class=\"col-md-12\">\n\t  <div class=\"card\">\n\t\t<div class=\"card-body\">\n\t\t    <h4 class=\"card-title\">Custom validation</h4>\n\t\t    <h6 class=\"card-subtitle\">Illustrates custom validation, you have to select time between 12:00 and 13:59</h6>\n\t\t    <div class=\"form-group\" [class.has-success]=\"ctrl.valid\" [class.has-danger]=\"!ctrl.valid\">\n\t\t\t<ngb-timepicker [(ngModel)]=\"time3\" [formControl]=\"ctrl\" required></ngb-timepicker>\n\t\t\t<div class=\"form-control-feedback\">\n\t\t\t  <div *ngIf=\"ctrl.valid\">Great choice</div>\n\t\t\t  <div *ngIf=\"ctrl.errors && ctrl.errors['required']\">Select some time during lunchtime</div>\n\t\t\t  <div *ngIf=\"ctrl.errors && ctrl.errors['tooLate']\">Oh no, it's way too late</div>\n\t\t\t  <div *ngIf=\"ctrl.errors && ctrl.errors['tooEarly']\">It's a bit too early</div>\n\t\t\t</div>\n\t\t    </div> \n\n\t\t    <hr>\n\t\t    <pre>Selected time: {{time3 | json}}</pre>  \n\t\t</div>\n\t  </div>\n    </div>\n    <div class=\"col-md-12\">\n\t  <div class=\"card\">\n\t\t<div class=\"card-body\">\n\t\t    <h4 class=\"card-title\">Custom time adapter</h4>\n\t\t    <h6 class=\"card-subtitle\">This timepicker uses a custom Time adapter that lets you use your own model implementation. In this example we are converting from and to an ISO string (with the format HH:mm:ss)</h6>\n\t\t    <ngb-timepicker [(ngModel)]=\"time1\"></ngb-timepicker>\n\t\t    <hr>\n\t\t    <pre>Selected time: {{ time1 }}</pre>\n\t\t</div>\n\t  </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/toast/toast.component.html":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/toast/toast.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentToastToastComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4>Declarative usage</h4>\n\t\t\t\t<h6 class=\"mt-3\">Body only</h6>\n\t\t\t\t<ngb-toast>\n\t\t\t\t  I am a simple static toast.\n\t\t\t\t</ngb-toast>\n\n\t\t\t\t<h6 class=\"mt-3\">With a text header</h6>\n\t\t\t\t<ngb-toast header=\"Hello\" [autohide]=\"false\">\n\t\t\t\t  I am a simple static toast with a header.\n\t\t\t\t</ngb-toast>\n\t\t\t\t<ngb-alert type=\"secondary\" [dismissible]=\"false\">Clicking on the close icon won't do anything in this example.</ngb-alert>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4>Using a Template as header</h4>\n\t\t\t\t<ngb-toast>\n\t\t\t\t\t<ng-template ngbToastHeader>\n\t\t\t\t\t    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path d=\"M16.896 10l-4.896-8-4.896 8-7.104-4 3 11v5h18v-5l3-11-7.104 4zm-11.896 10v-2h14v2h-14zm14.2-4h-14.4l-1.612-5.909 4.615 2.598 4.197-6.857 4.197 6.857 4.615-2.598-1.612 5.909z\"/></svg>\n\t\t\t\t\t    <strong class=\"mx-1\">Fancy</strong>header here\n\t\t\t\t\t</ng-template>\n\t\t\t\t\tHello, I am toast. Have you noticed my header has been generated from a Template?\n\t\t\t\t</ngb-toast>\n\t\t\t\t<ngb-alert type=\"secondary\" [dismissible]=\"false\">Clicking on the close icon won't do anything in this example.</ngb-alert>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4>Closeable toast</h4>\n\t\t\t\t<ngb-toast *ngIf=\"show\" header=\"Click my close icon →\" [autohide]=\"false\"\n\t\t\t\t  (hide)=\"close()\">\n\t\t\t\t  If you close me, I will automatically re-appear after a few seconds.\n\t\t\t\t</ngb-toast>\n\t\t\t\t<p *ngIf=\"!show\">I'll be back!</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4>Prevent autohide on mouseover</h4>\n\t\t\t\t<p>\n\t\t\t\t  In this demo, you can show a toast by clicking the button below. It will hide itself after a 5 seconds delay unless you simply hover it with your mouse.\n\t\t\t\t</p>\n\t\t\t\t<button class=\"btn btn-primary\" (click)=\"showauto = true\">\n\t\t\t\t  Click me to show a toast\n\t\t\t\t</button>\n\t\t\t\t<hr *ngIf=\"showauto\">\n\t\t\t\t<ngb-toast\n\t\t\t\t  *ngIf=\"showauto\"\n\t\t\t\t  header=\"Autohide can be cancelled\"\n\t\t\t\t  [delay]=\"5000\"\n\t\t\t\t  [autohide]=\"autohide\"\n\t\t\t\t  (mouseenter)=\"autohide = false\"\n\t\t\t\t  (mouseleave)=\"autohide = true\"\n\t\t\t\t  (hide)=\"showauto = false; autohide = true\"\n\t\t\t\t  [class.bg-warning]=\"!autohide\"\n\t\t\t\t>\n\t\t\t\t  <div *ngIf=\"autohide\">\n\t\t\t\t    Try to mouse hover me.\n\t\t\t\t  </div>\n\t\t\t\t  <div *ngIf=\"!autohide\">\n\t\t\t\t    I will remain visible until you leave again.\n\t\t\t\t  </div>\n\t\t\t\t</ngb-toast>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4>Toast management service</h4>\n\t\t\t\t<button class=\"btn btn-primary\" (click)=\"showStandard()\" ngbTooltip=\"Will disappear in 5s\">Standard toast</button>&nbsp;\n\t\t\t\t<button class=\"btn btn-success\" (click)=\"showSuccess()\" ngbTooltip=\"Will disappear in 10s\">Success toast</button>&nbsp;\n\n\t\t\t\t<ng-template #dangerTpl>\n\t\t\t\t  <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"#fff\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10.872 6.831l1.695 3.904 3.654-1.561-1.79 3.426 3.333.954-3.417 1.338 2.231 4.196-4.773-2.582-2.869 2.287.413-3.004-3.792-.726 2.93-1.74-1.885-2.512 3.427.646.843-4.626zm-.786-6.831l-1.665 9.119-6.512-1.228 3.639 4.851-5.548 3.294 7.108 1.361-.834 6.076 5.742-4.577 9.438 5.104-4.288-8.064 6.834-2.677-6.661-1.907 3.25-6.22-6.98 2.982-3.523-8.114z\"/></svg>\n\t\t\t\t  Danger Danger !\n\t\t\t\t</ng-template>\n\t\t\t\t<button class=\"btn btn-danger\" (click)=\"showDanger(dangerTpl)\" ngbTooltip=\"Will disappear in 15s\">Danger toast</button>&nbsp;\n\n\t\t\t\t<app-toasts aria-live=\"polite\" aria-atomic=\"true\"></app-toasts>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- End Row -->";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/typehead/typehead.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/typehead/typehead.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentTypeheadTypeheadComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Simple Typeahead</h4>\n        <h6 class=\"card-subtitle\">A typeahead example that gets values from a static string</h6>\n        <label for=\"typeahead-basic\">Search for a USA state:</label>\n        <input id=\"typeahead-basic\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model1\" [ngbTypeahead]=\"search1\" />\n        <div class=\"m-t-10\">Model: {{ model1 | json }}</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Formatted results</h4>\n        <h6 class=\"card-subtitle\">A typeahead example that uses a formatter function for string results</h6>\n        <label for=\"typeahead-format\">Search for a state:</label>\n        <input\n          id=\"typeahead-format\"\n          type=\"text\"\n          class=\"form-control\"\n          [(ngModel)]=\"model3\"\n          [ngbTypeahead]=\"search3\"\n          [resultFormatter]=\"formatter\"\n        />\n        <hr />\n        <pre>Model: {{ model3 | json }}</pre>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Template for results</h4>\n        <h6 class=\"card-subtitle\">A typeahead example that uses custom template for results display and uses object as a model</h6>\n        <ng-template #rt let-r=\"result\" let-t=\"term\">\n          <img [src]=\"'https://upload.wikimedia.org/wikipedia/commons/thumb/' + r.flag\" width=\"16\" /> {{ r.name }}\n        </ng-template>\n\n        <label for=\"typeahead-template\">Search for a state:</label>\n        <input\n          id=\"typeahead-template\"\n          type=\"text\"\n          class=\"form-control\"\n          [(ngModel)]=\"model5\"\n          [ngbTypeahead]=\"search5\"\n          [resultTemplate]=\"rt\"\n          [inputFormatter]=\"formatter5\"\n        />\n        <hr />\n        <pre>Model: {{ model5 | json }}</pre>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Open on Focus</h4>\n        <h6 class=\"card-subtitle\">It is possible to get the focus events with the current input value</h6>\n        <label for=\"typeahead-focus\">Search for a state:</label>\n        <input\n          id=\"typeahead-focus\"\n          type=\"text\"\n          class=\"form-control\"\n          [(ngModel)]=\"model2\"\n          [ngbTypeahead]=\"search2\"\n          (focus)=\"focus$.next($event.target.value)\"\n          (click)=\"click$.next($event.target.value)\"\n          #instance=\"ngbTypeahead\"\n        />\n        <hr />\n        <pre>Model: {{ model2 | json }}</pre>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Wikipedia search</h4>\n        <h6 class=\"card-subtitle\">It is possible to get the focus events with the current input value</h6>\n        <div class=\"form-group\">\n          <label for=\"typeahead-http\">Search for a wiki page:</label>\n          <input\n            id=\"typeahead-http\"\n            type=\"text\"\n            class=\"form-control\"\n            [class.is-invalid]=\"searchFailed\"\n            [(ngModel)]=\"model1\"\n            [ngbTypeahead]=\"search\"\n            placeholder=\"Wikipedia search\"\n          />\n          <span *ngIf=\"searching\">searching...</span>\n          <div class=\"invalid-feedback\" *ngIf=\"searchFailed\">Sorry, suggestions could not be loaded.</div>\n        </div>\n\n        <hr />\n        <pre>Model: {{ model1 | json }}</pre>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "./src/app/component/accordion/accordion.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/component/accordion/accordion.component.ts ***!
      \************************************************************/

    /*! exports provided: NgbdAccordionBasicComponent */

    /***/
    function srcAppComponentAccordionAccordionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdAccordionBasicComponent", function () {
        return NgbdAccordionBasicComponent;
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

      var NgbdAccordionBasicComponent = /*#__PURE__*/function () {
        function NgbdAccordionBasicComponent() {
          _classCallCheck(this, NgbdAccordionBasicComponent);

          this.disabled = false;
        }

        _createClass(NgbdAccordionBasicComponent, [{
          key: "beforeChange",
          value: function beforeChange($event) {
            if ($event.panelId === 'preventchange-2') {
              $event.preventDefault();
            }

            if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
              $event.preventDefault();
            }
          }
        }]);

        return NgbdAccordionBasicComponent;
      }();

      NgbdAccordionBasicComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-ngbd-accordion-basic',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./accordion.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/accordion/accordion.component.html"))["default"]
      })], NgbdAccordionBasicComponent);
      /***/
    },

    /***/
    "./src/app/component/alert/alert.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/component/alert/alert.component.ts ***!
      \****************************************************/

    /*! exports provided: NgbdAlertBasicComponent */

    /***/
    function srcAppComponentAlertAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdAlertBasicComponent", function () {
        return NgbdAlertBasicComponent;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

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

      var NgbdAlertBasicComponent = /*#__PURE__*/function () {
        function NgbdAlertBasicComponent() {
          _classCallCheck(this, NgbdAlertBasicComponent);

          // this is for the Closeable Alert
          this.alerts = []; // End the Closeable Alert
          // This is for the self closing alert

          this._success = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.staticAlertClosed = false;
          this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert'
          }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert'
          }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert'
          }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert'
          });
          this.backup = this.alerts.map(function (alert) {
            return Object.assign({}, alert);
          });
        }

        _createClass(NgbdAlertBasicComponent, [{
          key: "closeAlert",
          value: function closeAlert(alert) {
            var index = this.alerts.indexOf(alert);
            this.alerts.splice(index, 1);
          }
        }, {
          key: "reset",
          value: function reset() {
            this.alerts = this.backup.map(function (alert) {
              return Object.assign({}, alert);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            setTimeout(function () {
              return _this12.staticAlertClosed = true;
            }, 20000);

            this._success.subscribe(function (message) {
              return _this12.successMessage = message;
            });

            this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(5000)).subscribe(function () {
              return _this12.successMessage = null;
            });
          }
        }, {
          key: "changeSuccessMessage",
          value: function changeSuccessMessage() {
            this._success.next("".concat(new Date(), " - Message successfully changed."));
          }
        }]);

        return NgbdAlertBasicComponent;
      }();

      NgbdAlertBasicComponent.ctorParameters = function () {
        return [];
      };

      NgbdAlertBasicComponent.propDecorators = {
        alerts: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      NgbdAlertBasicComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ngbd-alert',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./alert.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/alert/alert.component.html"))["default"],
        styles: ["\n    :host >>> .alert-custom {\n      color: #99004d;\n      background-color: #f169b4;\n      border-color: #800040;\n    }\n  "]
      }), __metadata("design:paramtypes", [])], NgbdAlertBasicComponent);
      /***/
    },

    /***/
    "./src/app/component/buttons/buttons.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/component/buttons/buttons.component.ts ***!
      \********************************************************/

    /*! exports provided: ButtonsComponent */

    /***/
    function srcAppComponentButtonsButtonsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function () {
        return ButtonsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

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

      var ButtonsComponent = /*#__PURE__*/function () {
        function ButtonsComponent(formBuilder) {
          _classCallCheck(this, ButtonsComponent);

          this.formBuilder = formBuilder;
          this.model = {
            left: true,
            middle: false,
            right: false
          };
          this.model1 = 1;
        } // tslint:disable-next-line:use-life-cycle-interface


        _createClass(ButtonsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.checkboxGroupForm = this.formBuilder.group({
              left: true,
              middle: false,
              right: false
            });
            this.radioGroupForm = this.formBuilder.group({
              model: 1
            });
          }
        }]);

        return ButtonsComponent;
      }();

      ButtonsComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      };

      ButtonsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./buttons.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/buttons/buttons.component.html"))["default"]
      }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])], ButtonsComponent);
      /***/
    },

    /***/
    "./src/app/component/card/card.component.ts":
    /*!**************************************************!*\
      !*** ./src/app/component/card/card.component.ts ***!
      \**************************************************/

    /*! exports provided: CardsComponent */

    /***/
    function srcAppComponentCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardsComponent", function () {
        return CardsComponent;
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

      var CardsComponent = function CardsComponent() {
        _classCallCheck(this, CardsComponent);
      };

      CardsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./card.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/card/card.component.html"))["default"]
      })], CardsComponent);
      /***/
    },

    /***/
    "./src/app/component/carousel/carousel.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/component/carousel/carousel.component.ts ***!
      \**********************************************************/

    /*! exports provided: NgbdCarouselBasicComponent */

    /***/
    function srcAppComponentCarouselCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdCarouselBasicComponent", function () {
        return NgbdCarouselBasicComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
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

      var NgbdCarouselBasicComponent = /*#__PURE__*/function () {
        function NgbdCarouselBasicComponent(config) {
          _classCallCheck(this, NgbdCarouselBasicComponent);

          this.showNavigationArrows = false;
          this.showNavigationIndicators = false;
          this.paused = false;
          this.unpauseOnArrow = false;
          this.pauseOnIndicator = false;
          this.pauseOnHover = true; // customize default values of carousels used by this component tree

          config.interval = 10000;
          config.wrap = false;
          config.keyboard = false;
          config.showNavigationArrows = true;
          config.showNavigationIndicators = true;
        }

        _createClass(NgbdCarouselBasicComponent, [{
          key: "togglePaused",
          value: function togglePaused() {
            if (this.paused) {
              this.carousel.cycle();
            } else {
              this.carousel.pause();
            }

            this.paused = !this.paused;
          }
        }, {
          key: "onSlide",
          value: function onSlide(slideEvent) {
            if (this.unpauseOnArrow && slideEvent.paused && (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlideEventSource"].ARROW_RIGHT)) {
              this.togglePaused();
            }

            if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlideEventSource"].INDICATOR) {
              this.togglePaused();
            }
          }
        }]);

        return NgbdCarouselBasicComponent;
      }();

      NgbdCarouselBasicComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]
        }];
      };

      NgbdCarouselBasicComponent.propDecorators = {
        carousel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['carousel', {
            "static": true
          }]
        }]
      };
      NgbdCarouselBasicComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-ngbd-buttons-radio',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./carousel.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/carousel/carousel.component.html"))["default"],
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]]
      }), __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]])], NgbdCarouselBasicComponent);
      /***/
    },

    /***/
    "./src/app/component/component.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/component/component.module.ts ***!
      \***********************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function srcAppComponentComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
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


      var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular-notifier */
      "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");
      /* harmony import */


      var _component_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./component.routing */
      "./src/app/component/component.routing.ts");
      /* harmony import */


      var _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./progressbar/progressbar.component */
      "./src/app/component/progressbar/progressbar.component.ts");
      /* harmony import */


      var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pagination/pagination.component */
      "./src/app/component/pagination/pagination.component.ts");
      /* harmony import */


      var _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./accordion/accordion.component */
      "./src/app/component/accordion/accordion.component.ts");
      /* harmony import */


      var _alert_alert_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./alert/alert.component */
      "./src/app/component/alert/alert.component.ts");
      /* harmony import */


      var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./carousel/carousel.component */
      "./src/app/component/carousel/carousel.component.ts");
      /* harmony import */


      var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./datepicker/datepicker.component */
      "./src/app/component/datepicker/datepicker.component.ts");
      /* harmony import */


      var _dropdown_collapse_dropdown_collapse_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./dropdown-collapse/dropdown-collapse.component */
      "./src/app/component/dropdown-collapse/dropdown-collapse.component.ts");
      /* harmony import */


      var _modal_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./modal/modal.component */
      "./src/app/component/modal/modal.component.ts");
      /* harmony import */


      var _popover_tooltip_popover_tooltip_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./popover-tooltip/popover-tooltip.component */
      "./src/app/component/popover-tooltip/popover-tooltip.component.ts");
      /* harmony import */


      var _rating_rating_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./rating/rating.component */
      "./src/app/component/rating/rating.component.ts");
      /* harmony import */


      var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./tabs/tabs.component */
      "./src/app/component/tabs/tabs.component.ts");
      /* harmony import */


      var _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./timepicker/timepicker.component */
      "./src/app/component/timepicker/timepicker.component.ts");
      /* harmony import */


      var _typehead_typehead_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./typehead/typehead.component */
      "./src/app/component/typehead/typehead.component.ts");
      /* harmony import */


      var _language_datepicker_language_datepicker_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./language-datepicker/language-datepicker.component */
      "./src/app/component/language-datepicker/language-datepicker.component.ts");
      /* harmony import */


      var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./buttons/buttons.component */
      "./src/app/component/buttons/buttons.component.ts");
      /* harmony import */


      var _card_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./card/card.component */
      "./src/app/component/card/card.component.ts");
      /* harmony import */


      var _notifier_notifier_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./notifier/notifier.component */
      "./src/app/component/notifier/notifier.component.ts");
      /* harmony import */


      var _toast_toast_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./toast/toast.component */
      "./src/app/component/toast/toast.component.ts");
      /* harmony import */


      var _toast_toast_container__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./toast/toast-container */
      "./src/app/component/toast/toast-container.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_component_routing__WEBPACK_IMPORTED_MODULE_6__["ComponentsRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierModule"]],
        declarations: [_progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_7__["NgbdpregressbarBasicComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__["NgbdpaginationBasicComponent"], _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_9__["NgbdAccordionBasicComponent"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_10__["NgbdAlertBasicComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__["NgbdCarouselBasicComponent"], _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_12__["NgbdDatepickerBasicComponent"], _dropdown_collapse_dropdown_collapse_component__WEBPACK_IMPORTED_MODULE_13__["NgbdDropdownBasicComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_14__["NgbdModalBasicComponent"], _popover_tooltip_popover_tooltip_component__WEBPACK_IMPORTED_MODULE_15__["NgbdPopTooltipComponent"], _rating_rating_component__WEBPACK_IMPORTED_MODULE_16__["NgbdratingBasicComponent"], _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_17__["NgbdtabsBasicComponent"], _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_18__["NgbdtimepickerBasicComponent"], _typehead_typehead_component__WEBPACK_IMPORTED_MODULE_19__["NgbdtypeheadBasicComponent"], _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_21__["ButtonsComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_22__["CardsComponent"], _toast_toast_component__WEBPACK_IMPORTED_MODULE_24__["ToastComponent"], _toast_toast_container__WEBPACK_IMPORTED_MODULE_25__["ToastsContainer"], _notifier_notifier_component__WEBPACK_IMPORTED_MODULE_23__["NotifierComponent"], _language_datepicker_language_datepicker_component__WEBPACK_IMPORTED_MODULE_20__["NgbdDatepickerLanguageComponent"]]
      })], ComponentsModule);
      /***/
    },

    /***/
    "./src/app/component/component.routing.ts":
    /*!************************************************!*\
      !*** ./src/app/component/component.routing.ts ***!
      \************************************************/

    /*! exports provided: ComponentsRoutes */

    /***/
    function srcAppComponentComponentRoutingTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsRoutes", function () {
        return ComponentsRoutes;
      });
      /* harmony import */


      var _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./progressbar/progressbar.component */
      "./src/app/component/progressbar/progressbar.component.ts");
      /* harmony import */


      var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pagination/pagination.component */
      "./src/app/component/pagination/pagination.component.ts");
      /* harmony import */


      var _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./accordion/accordion.component */
      "./src/app/component/accordion/accordion.component.ts");
      /* harmony import */


      var _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./alert/alert.component */
      "./src/app/component/alert/alert.component.ts");
      /* harmony import */


      var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./carousel/carousel.component */
      "./src/app/component/carousel/carousel.component.ts");
      /* harmony import */


      var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./datepicker/datepicker.component */
      "./src/app/component/datepicker/datepicker.component.ts");
      /* harmony import */


      var _dropdown_collapse_dropdown_collapse_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dropdown-collapse/dropdown-collapse.component */
      "./src/app/component/dropdown-collapse/dropdown-collapse.component.ts");
      /* harmony import */


      var _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./modal/modal.component */
      "./src/app/component/modal/modal.component.ts");
      /* harmony import */


      var _popover_tooltip_popover_tooltip_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./popover-tooltip/popover-tooltip.component */
      "./src/app/component/popover-tooltip/popover-tooltip.component.ts");
      /* harmony import */


      var _rating_rating_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./rating/rating.component */
      "./src/app/component/rating/rating.component.ts");
      /* harmony import */


      var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./tabs/tabs.component */
      "./src/app/component/tabs/tabs.component.ts");
      /* harmony import */


      var _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./timepicker/timepicker.component */
      "./src/app/component/timepicker/timepicker.component.ts");
      /* harmony import */


      var _typehead_typehead_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./typehead/typehead.component */
      "./src/app/component/typehead/typehead.component.ts");
      /* harmony import */


      var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./buttons/buttons.component */
      "./src/app/component/buttons/buttons.component.ts");
      /* harmony import */


      var _card_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./card/card.component */
      "./src/app/component/card/card.component.ts");
      /* harmony import */


      var _toast_toast_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./toast/toast.component */
      "./src/app/component/toast/toast.component.ts");
      /* harmony import */


      var _notifier_notifier_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./notifier/notifier.component */
      "./src/app/component/notifier/notifier.component.ts");
      /* harmony import */


      var _language_datepicker_language_datepicker_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./language-datepicker/language-datepicker.component */
      "./src/app/component/language-datepicker/language-datepicker.component.ts");

      var ComponentsRoutes = [{
        path: '',
        children: [{
          path: 'progressbar',
          component: _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_0__["NgbdpregressbarBasicComponent"],
          data: {
            title: 'Progressbar',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Progressbar'
            }]
          }
        }, {
          path: 'card',
          component: _card_card_component__WEBPACK_IMPORTED_MODULE_14__["CardsComponent"],
          data: {
            title: 'Cards',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Cards'
            }]
          }
        }, {
          path: 'pagination',
          component: _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__["NgbdpaginationBasicComponent"],
          data: {
            title: 'Pagination',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Pagination'
            }]
          }
        }, {
          path: 'accordion',
          component: _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_2__["NgbdAccordionBasicComponent"],
          data: {
            title: 'Accordion',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Accordion'
            }]
          }
        }, {
          path: 'alert',
          component: _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["NgbdAlertBasicComponent"],
          data: {
            title: 'Alert',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Alert'
            }]
          }
        }, {
          path: 'carousel',
          component: _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__["NgbdCarouselBasicComponent"],
          data: {
            title: 'Carousel',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Carousel'
            }]
          }
        }, {
          path: 'datepicker',
          component: _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__["NgbdDatepickerBasicComponent"],
          data: {
            title: 'Datepicker',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Datepicker'
            }]
          }
        }, {
          path: 'language-datepicker',
          component: _language_datepicker_language_datepicker_component__WEBPACK_IMPORTED_MODULE_17__["NgbdDatepickerLanguageComponent"],
          data: {
            title: 'Language Datepicker',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Language Datepicker'
            }]
          }
        }, {
          path: 'dropdown',
          component: _dropdown_collapse_dropdown_collapse_component__WEBPACK_IMPORTED_MODULE_6__["NgbdDropdownBasicComponent"],
          data: {
            title: 'Dropdown',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Dropdown'
            }]
          }
        }, {
          path: 'modal',
          component: _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["NgbdModalBasicComponent"],
          data: {
            title: 'Modal',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Modal'
            }]
          }
        }, {
          path: 'poptool',
          component: _popover_tooltip_popover_tooltip_component__WEBPACK_IMPORTED_MODULE_8__["NgbdPopTooltipComponent"],
          data: {
            title: 'Popover & Tooltip',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Popover & Tooltip'
            }]
          }
        }, {
          path: 'rating',
          component: _rating_rating_component__WEBPACK_IMPORTED_MODULE_9__["NgbdratingBasicComponent"],
          data: {
            title: 'Rating',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Rating'
            }]
          }
        }, {
          path: 'tabs',
          component: _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__["NgbdtabsBasicComponent"],
          data: {
            title: 'Tabs',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Tabs'
            }]
          }
        }, {
          path: 'timepicker',
          component: _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_11__["NgbdtimepickerBasicComponent"],
          data: {
            title: 'Timepicker',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Timepicker'
            }]
          }
        }, {
          path: 'typehead',
          component: _typehead_typehead_component__WEBPACK_IMPORTED_MODULE_12__["NgbdtypeheadBasicComponent"],
          data: {
            title: 'Typehead',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Typehead'
            }]
          }
        }, {
          path: 'buttons',
          component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_13__["ButtonsComponent"],
          data: {
            title: 'Button',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Button'
            }]
          }
        }, {
          path: 'notifier',
          component: _notifier_notifier_component__WEBPACK_IMPORTED_MODULE_16__["NotifierComponent"],
          data: {
            title: 'Notifier',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Notifier'
            }]
          }
        }, {
          path: 'toast',
          component: _toast_toast_component__WEBPACK_IMPORTED_MODULE_15__["ToastComponent"],
          data: {
            title: 'Toast'
          }
        }]
      }];
      /***/
    },

    /***/
    "./src/app/component/datepicker/datepicker.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/component/datepicker/datepicker.component.ts ***!
      \**************************************************************/

    /*! exports provided: NgbdDatepickerBasicComponent */

    /***/
    function srcAppComponentDatepickerDatepickerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdDatepickerBasicComponent", function () {
        return NgbdDatepickerBasicComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
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

      var my = new Date(); // This is for the range date picker
      // tslint:disable-next-line:max-line-length

      var equals = function equals(one, two) {
        return one && two && two.year === one.year && two.month === one.month && two.day === one.day;
      };

      var before = function before(one, two) {
        return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day ? false : one.day < two.day : one.month < two.month : one.year < two.year;
      };

      var after = function after(one, two) {
        return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day ? false : one.day > two.day : one.month > two.month : one.year > two.year;
      }; // End range date picker


      var NgbdDatepickerBasicComponent = /*#__PURE__*/function () {
        function NgbdDatepickerBasicComponent(calendar, calendar1, calendar5) {
          var _this13 = this;

          _classCallCheck(this, NgbdDatepickerBasicComponent);

          this.calendar1 = calendar1;
          this.calendar5 = calendar5;
          this.today5 = this.calendar5.getToday(); // This is for multiple month

          this.displayMonths = 2;
          this.navigation = 'select';
          this.showWeekNumbers = false; // This is for the disable datepicker

          this.model3 = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
          };
          this.disabled = true;

          this.isHovered = function (date) {
            return _this13.fromDate && !_this13.toDate && _this13.hoveredDate && after(date, _this13.fromDate) && before(date, _this13.hoveredDate);
          };

          this.isInside = function (date) {
            return after(date, _this13.fromDate) && before(date, _this13.toDate);
          };

          this.isFrom = function (date) {
            return equals(date, _this13.fromDate);
          };

          this.isTo = function (date) {
            return equals(date, _this13.toDate);
          };

          this.isDisabled = function (date, current) {
            return date.month !== current.month;
          };

          this.isWeekend = function (date) {
            return _this13.calendar1.getWeekday(date) >= 6;
          };

          this.fromDate = calendar.getToday();
          this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
        }

        _createClass(NgbdDatepickerBasicComponent, [{
          key: "selectToday",
          value: function selectToday() {
            this.model = {
              year: my.getFullYear(),
              month: my.getMonth() + 1,
              day: my.getDate()
            };
          }
        }, {
          key: "onDateChange",
          value: function onDateChange(date) {
            if (!this.fromDate && !this.toDate) {
              this.fromDate = date;
            } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
              this.toDate = date;
            } else {
              this.toDate = null;
              this.fromDate = date;
            }
          }
        }, {
          key: "today",
          get: function get() {
            return new Date();
          }
        }]);

        return NgbdDatepickerBasicComponent;
      }();

      NgbdDatepickerBasicComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]
        }];
      };

      NgbdDatepickerBasicComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-datepicker-basic',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./datepicker.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/datepicker/datepicker.component.html"))["default"],
        providers: [{
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"],
          useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateNativeAdapter"]
        }],
        styles: ["\n      .custom-day {\n        text-align: center;\n        padding: 0.185rem 0.25rem;\n        display: inline-block;\n        height: 2rem;\n        width: 2rem;\n      }\n      .custom-day.focused {\n        background-color: #e6e6e6;\n      }\n      .custom-day.range,\n      .custom-day:hover {\n        background-color: #0275d8;\n        color: white;\n      }\n      .faded {\n        opacity: 0.5;\n      }\n      .weekend {\n        background-color: #242a33;\n        border-radius: 1rem;\n        color: white;\n      }\n      .hidden {\n        display: none;\n      }\n    "]
      }), __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]])], NgbdDatepickerBasicComponent);
      /***/
    },

    /***/
    "./src/app/component/dropdown-collapse/dropdown-collapse.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/component/dropdown-collapse/dropdown-collapse.component.ts ***!
      \****************************************************************************/

    /*! exports provided: NgbdDropdownBasicComponent */

    /***/
    function srcAppComponentDropdownCollapseDropdownCollapseComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdDropdownBasicComponent", function () {
        return NgbdDropdownBasicComponent;
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

      var NgbdDropdownBasicComponent = function NgbdDropdownBasicComponent() {
        _classCallCheck(this, NgbdDropdownBasicComponent);

        // This is for the collapse example
        this.isCollapsed = false;
        this.collapsed = true;
      };

      NgbdDropdownBasicComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-dropdown-basic',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./dropdown-collapse.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/dropdown-collapse/dropdown-collapse.component.html"))["default"]
      })], NgbdDropdownBasicComponent);
      /***/
    },

    /***/
    "./src/app/component/language-datepicker/language-datepicker.component.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/component/language-datepicker/language-datepicker.component.ts ***!
      \********************************************************************************/

    /*! exports provided: I18n, CustomDatepickerI18n, NgbdDatepickerLanguageComponent */

    /***/
    function srcAppComponentLanguageDatepickerLanguageDatepickerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I18n", function () {
        return I18n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomDatepickerI18n", function () {
        return CustomDatepickerI18n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdDatepickerLanguageComponent", function () {
        return NgbdDatepickerLanguageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
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
      }; // Last


      var I18N_VALUES = {
        fr: {
          weekdays: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
          months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc']
        } // other languages you would support

      }; // Last

      var I18n = function I18n() {
        _classCallCheck(this, I18n);

        this.language = 'fr';
      };

      I18n = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], I18n);

      var CustomDatepickerI18n = /*#__PURE__*/function (_ng_bootstrap_ng_boot) {
        _inherits(CustomDatepickerI18n, _ng_bootstrap_ng_boot);

        var _super = _createSuper(CustomDatepickerI18n);

        function CustomDatepickerI18n(_i18n) {
          var _this14;

          _classCallCheck(this, CustomDatepickerI18n);

          _this14 = _super.call(this);
          _this14._i18n = _i18n;
          return _this14;
        }

        _createClass(CustomDatepickerI18n, [{
          key: "getWeekdayShortName",
          value: function getWeekdayShortName(weekday) {
            return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
          }
        }, {
          key: "getMonthShortName",
          value: function getMonthShortName(month) {
            return I18N_VALUES[this._i18n.language].months[month - 1];
          }
        }, {
          key: "getMonthFullName",
          value: function getMonthFullName(month) {
            return this.getMonthShortName(month);
          }
        }, {
          key: "getDayAriaLabel",
          value: function getDayAriaLabel(date) {
            return "".concat(date.day, "-").concat(date.month, "-").concat(date.year);
          }
        }]);

        return CustomDatepickerI18n;
      }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerI18n"]);

      CustomDatepickerI18n.ctorParameters = function () {
        return [{
          type: I18n
        }];
      };

      CustomDatepickerI18n = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [I18n])], CustomDatepickerI18n); // last

      var NgbdDatepickerLanguageComponent = function NgbdDatepickerLanguageComponent() {
        _classCallCheck(this, NgbdDatepickerLanguageComponent);
      };

      NgbdDatepickerLanguageComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-datepicker-language',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./language-datepicker.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/language-datepicker/language-datepicker.component.html"))["default"],
        providers: [I18n, {
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerI18n"],
          useClass: CustomDatepickerI18n
        }]
      })], NgbdDatepickerLanguageComponent);
      /***/
    },

    /***/
    "./src/app/component/modal/modal.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/component/modal/modal.component.ts ***!
      \****************************************************/

    /*! exports provided: NgbdModalBasicComponent */

    /***/
    function srcAppComponentModalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdModalBasicComponent", function () {
        return NgbdModalBasicComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
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

      var NgbdModalBasicComponent = /*#__PURE__*/function () {
        function NgbdModalBasicComponent(modalService) {
          _classCallCheck(this, NgbdModalBasicComponent);

          this.modalService = modalService;
        } // This is for the first modal


        _createClass(NgbdModalBasicComponent, [{
          key: "open1",
          value: function open1(content1) {
            var _this15 = this;

            this.modalService.open(content1, {
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              _this15.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this15.closeResult = "Dismissed ".concat(_this15.getDismissReason(reason));
            });
          } // This is for the Second modal

        }, {
          key: "open2",
          value: function open2(content2) {
            var _this16 = this;

            this.modalService.open(content2, {
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              _this16.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this16.closeResult = "Dismissed ".concat(_this16.getDismissReason(reason));
            });
          } // This is for the Third varios modal options

        }, {
          key: "openBackDropCustomClass",
          value: function openBackDropCustomClass(content3) {
            this.modalService.open(content3, {
              backdropClass: 'light-blue-backdrop'
            });
          }
        }, {
          key: "openWindowCustomClass",
          value: function openWindowCustomClass(content3) {
            this.modalService.open(content3, {
              windowClass: 'dark-modal'
            });
          }
        }, {
          key: "openSm",
          value: function openSm(content3) {
            this.modalService.open(content3, {
              size: 'sm'
            });
          }
        }, {
          key: "openLg",
          value: function openLg(content3) {
            this.modalService.open(content3, {
              size: 'lg'
            });
          }
        }, {
          key: "openVerticallyCentered",
          value: function openVerticallyCentered(content3) {
            this.modalService.open(content3, {
              centered: true
            });
          }
        }, {
          key: "openstackmodal",
          value: function openstackmodal(contentstack) {
            this.modalService.open(contentstack, {
              size: 'lg'
            });
          }
        }, {
          key: "opensubmodal",
          value: function opensubmodal(contentsubmodal) {
            this.modalService.open(contentsubmodal, {
              size: 'lg'
            });
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }]);

        return NgbdModalBasicComponent;
      }();

      NgbdModalBasicComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
        }];
      };

      NgbdModalBasicComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-ngbd-modal',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./modal.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/modal/modal.component.html"))["default"]
      }), __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])], NgbdModalBasicComponent);
      /***/
    },

    /***/
    "./src/app/component/notifier/notifier.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/component/notifier/notifier.component.ts ***!
      \**********************************************************/

    /*! exports provided: NotifierComponent */

    /***/
    function srcAppComponentNotifierNotifierComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotifierComponent", function () {
        return NotifierComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var angular_notifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-notifier */
      "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");

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

      var NotifierComponent = /*#__PURE__*/function () {
        /**
         * Constructor
         *
         * @param {NotifierService} notifier Notifier service
         */
        function NotifierComponent(notifier) {
          _classCallCheck(this, NotifierComponent);

          this.notifier = notifier;
        }
        /**
         * Show a notification
         *
         * @param {string} type    Notification type
         * @param {string} message Notification message
         */


        _createClass(NotifierComponent, [{
          key: "showNotification",
          value: function showNotification(type, message) {
            this.notifier.notify(type, message);
          }
          /**
           * Hide oldest notification
           */

        }, {
          key: "hideOldestNotification",
          value: function hideOldestNotification() {
            this.notifier.hideOldest();
          }
          /**
           * Hide newest notification
           */

        }, {
          key: "hideNewestNotification",
          value: function hideNewestNotification() {
            this.notifier.hideNewest();
          }
          /**
           * Hide all notifications at once
           */

        }, {
          key: "hideAllNotifications",
          value: function hideAllNotifications() {
            this.notifier.hideAll();
          }
          /**
           * Show a specific notification (with a custom notification ID)
           *
           * @param {string} type    Notification type
           * @param {string} message Notification message
           * @param {string} id      Notification ID
           */

        }, {
          key: "showSpecificNotification",
          value: function showSpecificNotification(type, message, id) {
            this.notifier.show({
              id: id,
              message: message,
              type: type
            });
          }
          /**
           * Hide a specific notification (by a given notification ID)
           *
           * @param {string} id Notification ID
           */

        }, {
          key: "hideSpecificNotification",
          value: function hideSpecificNotification(id) {
            this.notifier.hide(id);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotifierComponent;
      }();

      NotifierComponent.ctorParameters = function () {
        return [{
          type: angular_notifier__WEBPACK_IMPORTED_MODULE_1__["NotifierService"]
        }];
      };

      NotifierComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-notifier',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./notifier.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/notifier/notifier.component.html"))["default"]
      }), __metadata("design:paramtypes", [angular_notifier__WEBPACK_IMPORTED_MODULE_1__["NotifierService"]])], NotifierComponent);
      /***/
    },

    /***/
    "./src/app/component/pagination/pagination.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/component/pagination/pagination.component.ts ***!
      \**************************************************************/

    /*! exports provided: NgbdpaginationBasicComponent */

    /***/
    function srcAppComponentPaginationPaginationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdpaginationBasicComponent", function () {
        return NgbdpaginationBasicComponent;
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

      var NgbdpaginationBasicComponent = /*#__PURE__*/function () {
        function NgbdpaginationBasicComponent() {
          _classCallCheck(this, NgbdpaginationBasicComponent);

          this.page = 4;
          this.page2 = 1;
          this.currentPage = 3;
          this.disablepage = 3;
          this.isDisabled = true;
        }

        _createClass(NgbdpaginationBasicComponent, [{
          key: "toggleDisabled",
          value: function toggleDisabled() {
            this.isDisabled = !this.isDisabled;
          }
        }, {
          key: "getPageSymbol",
          value: function getPageSymbol(current) {
            return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
          }
        }]);

        return NgbdpaginationBasicComponent;
      }();

      NgbdpaginationBasicComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-ngbd-pagination',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./pagination.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/pagination/pagination.component.html"))["default"]
      })], NgbdpaginationBasicComponent);
      /***/
    },

    /***/
    "./src/app/component/popover-tooltip/popover-tooltip.component.ts":
    /*!************************************************************************!*\
      !*** ./src/app/component/popover-tooltip/popover-tooltip.component.ts ***!
      \************************************************************************/

    /*! exports provided: NgbdPopTooltipComponent */

    /***/
    function srcAppComponentPopoverTooltipPopoverTooltipComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdPopTooltipComponent", function () {
        return NgbdPopTooltipComponent;
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

      var NgbdPopTooltipComponent = /*#__PURE__*/function () {
        function NgbdPopTooltipComponent() {
          _classCallCheck(this, NgbdPopTooltipComponent);

          this.greeting = {};
          this.name = 'World';
        }

        _createClass(NgbdPopTooltipComponent, [{
          key: "changeGreeting",
          value: function changeGreeting(greeting) {
            var isOpen = this.popover.isOpen();
            this.popover.close();

            if (greeting !== this.greeting || !isOpen) {
              this.greeting = greeting;
              this.popover.open(greeting);
            }
          }
        }, {
          key: "toggleWithGreeting",
          value: function toggleWithGreeting(tooltip, greeting) {
            if (tooltip.isOpen()) {
              tooltip.close();
            } else {
              tooltip.open({
                greeting: greeting
              });
            }
          }
        }, {
          key: "recordShown",
          value: function recordShown() {
            this.lastShown = new Date();
          }
        }, {
          key: "recordHidden",
          value: function recordHidden() {
            this.lastHidden = new Date();
          }
        }]);

        return NgbdPopTooltipComponent;
      }();

      NgbdPopTooltipComponent.propDecorators = {
        popover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['p', {
            "static": true
          }]
        }]
      };
      NgbdPopTooltipComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-ngbd-popover-tooltip',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./popover-tooltip.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/popover-tooltip/popover-tooltip.component.html"))["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        styles: ["\n\t\t\t.card {\n\t\t\t\toverflow: hidden;\n\t\t\t}\n\t\t\t.my-custom-class {\n\t\t\t\tfont-size: 125%;\n\t\t\t}\n\t\t\t.my-custom-class.tooltip > .tooltip-inner {\n\t\t\t\tbackground-color: darkgreen;\n\t\t\t}\n\t\t\t.my-custom-class.tooltip .arrow::before {\n\t\t\t\tborder-top-color: darkgreen;\n\t\t\t}\n\t\t"]
      })], NgbdPopTooltipComponent);
      /***/
    },

    /***/
    "./src/app/component/progressbar/progressbar.component.ts":
    /*!****************************************************************!*\
      !*** ./src/app/component/progressbar/progressbar.component.ts ***!
      \****************************************************************/

    /*! exports provided: NgbdpregressbarBasicComponent */

    /***/
    function srcAppComponentProgressbarProgressbarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdpregressbarBasicComponent", function () {
        return NgbdpregressbarBasicComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
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

      var NgbdpregressbarBasicComponent = function NgbdpregressbarBasicComponent(config) {
        _classCallCheck(this, NgbdpregressbarBasicComponent);

        this.height = '20px'; // customize default values of progress bars used by this component tree

        config.max = 100;
        config.striped = true;
        config.animated = true;
        config.type = 'success';
      };

      NgbdpregressbarBasicComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"]
        }];
      };

      NgbdpregressbarBasicComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-ngbd-progressbar',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./progressbar.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/progressbar/progressbar.component.html"))["default"],
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"]]
      }), __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"]])], NgbdpregressbarBasicComponent);
      /***/
    },

    /***/
    "./src/app/component/rating/rating.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/component/rating/rating.component.ts ***!
      \******************************************************/

    /*! exports provided: NgbdratingBasicComponent */

    /***/
    function srcAppComponentRatingRatingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdratingBasicComponent", function () {
        return NgbdratingBasicComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

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

      var NgbdratingBasicComponent = /*#__PURE__*/function () {
        function NgbdratingBasicComponent() {
          _classCallCheck(this, NgbdratingBasicComponent);

          this.currentRate = 8;
          this.currentRate2 = 2;
          this.selected = 0;
          this.hovered = 0;
          this.readonly = false; // for form integration

          this.ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        }

        _createClass(NgbdratingBasicComponent, [{
          key: "toggle",
          value: function toggle() {
            if (this.ctrl.disabled) {
              this.ctrl.enable();
            } else {
              this.ctrl.disable();
            }
          }
        }]);

        return NgbdratingBasicComponent;
      }();

      NgbdratingBasicComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-ngbd-rating',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./rating.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/rating/rating.component.html"))["default"],
        styles: ["\n\t\t\t.star {\n\t\t\t\tfont-size: 1.5rem;\n\t\t\t\tcolor: #b0c4de;\n\t\t\t}\n\t\t\t.filled {\n\t\t\t\tcolor: #1e90ff;\n\t\t\t}\n\t\t\t.heart {\n\t\t\t\tposition: relative;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tcolor: #d3d3d3;\n\t\t\t}\n\t\t\t.full {\n\t\t\t\tcolor: red;\n\t\t\t}\n\t\t\t.half {\n\t\t\t\tposition: absolute;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\toverflow: hidden;\n\t\t\t\tcolor: red;\n\t\t\t}\n\t\t\t.bad {\n\t\t\tcolor: #deb0b0;\n\t\t}\n\t\t.filled.bad {\n\t\t\tcolor: #ff1e1e;\n\t\t}\n\t\t"]
      })], NgbdratingBasicComponent);
      /***/
    },

    /***/
    "./src/app/component/tabs/tabs.component.ts":
    /*!**************************************************!*\
      !*** ./src/app/component/tabs/tabs.component.ts ***!
      \**************************************************/

    /*! exports provided: NgbdtabsBasicComponent */

    /***/
    function srcAppComponentTabsTabsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdtabsBasicComponent", function () {
        return NgbdtabsBasicComponent;
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

      var NgbdtabsBasicComponent = /*#__PURE__*/function () {
        function NgbdtabsBasicComponent() {
          _classCallCheck(this, NgbdtabsBasicComponent);

          this.currentJustify = 'start';
          this.currentOrientation = 'horizontal';
        }

        _createClass(NgbdtabsBasicComponent, [{
          key: "beforeChange",
          value: function beforeChange($event) {
            if ($event.nextId === 'tab-preventchange2') {
              $event.preventDefault();
            }
          }
        }]);

        return NgbdtabsBasicComponent;
      }();

      NgbdtabsBasicComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-ngbd-tabs',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./tabs.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/tabs/tabs.component.html"))["default"]
      })], NgbdtabsBasicComponent);
      /***/
    },

    /***/
    "./src/app/component/timepicker/timepicker.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/component/timepicker/timepicker.component.ts ***!
      \**************************************************************/

    /*! exports provided: NgbTimeStringAdapter, NgbdtimepickerBasicComponent */

    /***/
    function srcAppComponentTimepickerTimepickerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbTimeStringAdapter", function () {
        return NgbTimeStringAdapter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdtimepickerBasicComponent", function () {
        return NgbdtimepickerBasicComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

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

      var NgbTimeStringAdapter = /*#__PURE__*/function (_ng_bootstrap_ng_boot2) {
        _inherits(NgbTimeStringAdapter, _ng_bootstrap_ng_boot2);

        var _super2 = _createSuper(NgbTimeStringAdapter);

        function NgbTimeStringAdapter() {
          _classCallCheck(this, NgbTimeStringAdapter);

          return _super2.apply(this, arguments);
        }

        _createClass(NgbTimeStringAdapter, [{
          key: "fromModel",
          value: function fromModel(value) {
            if (!value) {
              return null;
            }

            var split = value.split(':');
            return {
              hour: parseInt(split[0], 10),
              minute: parseInt(split[1], 10),
              second: parseInt(split[2], 10)
            };
          }
        }, {
          key: "toModel",
          value: function toModel(time1) {
            if (!time1) {
              return null;
            }

            return "".concat(this.pad(time1.hour), ":").concat(this.pad(time1.minute), ":").concat(this.pad(time1.second));
          }
        }, {
          key: "pad",
          value: function pad(i) {
            return i < 10 ? "0".concat(i) : "".concat(i);
          }
        }]);

        return NgbTimeStringAdapter;
      }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTimeAdapter"]);

      NgbTimeStringAdapter = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], NgbTimeStringAdapter);

      var NgbdtimepickerBasicComponent = /*#__PURE__*/function () {
        function NgbdtimepickerBasicComponent() {
          _classCallCheck(this, NgbdtimepickerBasicComponent);

          this.time = {
            hour: 13,
            minute: 30
          };
          this.meridian = true; // This is for the seconds

          this.seconds = true; // This is for the spinners

          this.spinners = true; // This is for the column step

          this.time2 = {
            hour: 13,
            minute: 30,
            second: 0
          };
          this.hourStep = 1;
          this.minuteStep = 15;
          this.secondStep = 30;
          this.ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', function (control) {
            var value = control.value;

            if (!value) {
              return null;
            }

            if (value.hour < 12) {
              return {
                tooEarly: true
              };
            }

            if (value.hour > 13) {
              return {
                tooLate: true
              };
            }

            return null;
          });
        }

        _createClass(NgbdtimepickerBasicComponent, [{
          key: "toggleMeridian",
          value: function toggleMeridian() {
            this.meridian = !this.meridian;
          }
        }, {
          key: "toggleSeconds",
          value: function toggleSeconds() {
            this.seconds = !this.seconds;
          }
        }, {
          key: "toggleSpinners",
          value: function toggleSpinners() {
            this.spinners = !this.spinners;
          }
        }]);

        return NgbdtimepickerBasicComponent;
      }();

      NgbdtimepickerBasicComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-ngbd-timepicker',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./timepicker.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/timepicker/timepicker.component.html"))["default"],
        providers: [{
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTimeAdapter"],
          useClass: NgbTimeStringAdapter
        }]
      })], NgbdtimepickerBasicComponent);
      /***/
    },

    /***/
    "./src/app/component/toast/toast-container.ts":
    /*!****************************************************!*\
      !*** ./src/app/component/toast/toast-container.ts ***!
      \****************************************************/

    /*! exports provided: ToastsContainer */

    /***/
    function srcAppComponentToastToastContainerTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastsContainer", function () {
        return ToastsContainer;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./toast.service */
      "./src/app/component/toast/toast.service.ts");

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

      var ToastsContainer = /*#__PURE__*/function () {
        function ToastsContainer(toastService) {
          _classCallCheck(this, ToastsContainer);

          this.toastService = toastService;
        }

        _createClass(ToastsContainer, [{
          key: "isTemplate",
          value: function isTemplate(toast) {
            return toast.textOrTpl instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"];
          }
        }]);

        return ToastsContainer;
      }();

      ToastsContainer.ctorParameters = function () {
        return [{
          type: _toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]
        }];
      };

      ToastsContainer = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-toasts',
        template: "\n    <ngb-toast\n      *ngFor=\"let toast of toastService.toasts\"\n      [class]=\"toast.classname\"\n      [autohide]=\"true\"\n      [delay]=\"toast.delay || 5000\"\n      (hide)=\"toastService.remove(toast)\"\n    >\n      <ng-template [ngIf]=\"isTemplate(toast)\" [ngIfElse]=\"text\">\n        <ng-template [ngTemplateOutlet]=\"toast.textOrTpl\"></ng-template>\n      </ng-template>\n\n      <ng-template #text>{{ toast.textOrTpl }}</ng-template>\n    </ngb-toast>\n  ",
        host: {
          '[class.ngb-toasts]': 'true'
        }
      }), __metadata("design:paramtypes", [_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]])], ToastsContainer);
      /***/
    },

    /***/
    "./src/app/component/toast/toast.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/component/toast/toast.component.ts ***!
      \****************************************************/

    /*! exports provided: ToastComponent */

    /***/
    function srcAppComponentToastToastComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastComponent", function () {
        return ToastComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./toast.service */
      "./src/app/component/toast/toast.service.ts");

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

      var ToastComponent = /*#__PURE__*/function () {
        function ToastComponent(toastService) {
          _classCallCheck(this, ToastComponent);

          this.toastService = toastService;
          this.show = true;
          this.showauto = false;
          this.autohide = true;
        }

        _createClass(ToastComponent, [{
          key: "close",
          value: function close() {
            var _this17 = this;

            this.show = false;
            setTimeout(function () {
              return _this17.show = true;
            }, 5000);
          }
        }, {
          key: "showStandard",
          value: function showStandard() {
            this.toastService.show('I am a standard toast');
          }
        }, {
          key: "showSuccess",
          value: function showSuccess() {
            this.toastService.show('I am a success toast', {
              classname: 'bg-success text-light',
              delay: 10000
            });
          }
        }, {
          key: "showDanger",
          value: function showDanger(dangerTpl) {
            this.toastService.show(dangerTpl, {
              classname: 'bg-danger text-light',
              delay: 15000
            });
          }
        }]);

        return ToastComponent;
      }();

      ToastComponent.ctorParameters = function () {
        return [{
          type: _toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]
        }];
      };

      ToastComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-ng-toasts',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./toast.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/toast/toast.component.html"))["default"]
      }), __metadata("design:paramtypes", [_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]])], ToastComponent);
      /***/
    },

    /***/
    "./src/app/component/toast/toast.service.ts":
    /*!**************************************************!*\
      !*** ./src/app/component/toast/toast.service.ts ***!
      \**************************************************/

    /*! exports provided: ToastService */

    /***/
    function srcAppComponentToastToastServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastService", function () {
        return ToastService;
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

      var ToastService = /*#__PURE__*/function () {
        function ToastService() {
          _classCallCheck(this, ToastService);

          this.toasts = [];
        }

        _createClass(ToastService, [{
          key: "show",
          value: function show(textOrTpl) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.toasts.push(Object.assign({
              textOrTpl: textOrTpl
            }, options));
          }
        }, {
          key: "remove",
          value: function remove(toast) {
            this.toasts = this.toasts.filter(function (t) {
              return t !== toast;
            });
          }
        }]);

        return ToastService;
      }();

      ToastService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      })], ToastService);
      /***/
    },

    /***/
    "./src/app/component/typehead/typehead.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/component/typehead/typehead.component.ts ***!
      \**********************************************************/

    /*! exports provided: WikipediaService, NgbdtypeheadBasicComponent */

    /***/
    function srcAppComponentTypeheadTypeheadComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WikipediaService", function () {
        return WikipediaService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdtypeheadBasicComponent", function () {
        return NgbdtypeheadBasicComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var WIKI_URL = 'https://en.wikipedia.org/w/api.php';
      var PARAMS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]({
        fromObject: {
          action: 'opensearch',
          format: 'json',
          origin: '*'
        }
      });
      var states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
      var statesWithFlags = [{
        name: 'Alabama',
        flag: '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'
      }, {
        name: 'Alaska',
        flag: 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png'
      }, {
        name: 'Arizona',
        flag: '9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png'
      }, {
        name: 'Arkansas',
        flag: '9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png'
      }, {
        name: 'California',
        flag: '0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png'
      }, {
        name: 'Colorado',
        flag: '4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png'
      }, {
        name: 'Connecticut',
        flag: '9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png'
      }, {
        name: 'Delaware',
        flag: 'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png'
      }, {
        name: 'Florida',
        flag: 'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png'
      }, {
        name: 'Georgia',
        flag: '5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png'
      }, {
        name: 'Hawaii',
        flag: 'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png'
      }, {
        name: 'Idaho',
        flag: 'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png'
      }, {
        name: 'Illinois',
        flag: '0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png'
      }, {
        name: 'Indiana',
        flag: 'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png'
      }, {
        name: 'Iowa',
        flag: 'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png'
      }, {
        name: 'Kansas',
        flag: 'd/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png'
      }, {
        name: 'Kentucky',
        flag: '8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png'
      }, {
        name: 'Louisiana',
        flag: 'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png'
      }, {
        name: 'Maine',
        flag: '3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png'
      }, {
        name: 'Maryland',
        flag: 'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png'
      }, {
        name: 'Massachusetts',
        flag: 'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png'
      }, {
        name: 'Michigan',
        flag: 'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png'
      }, {
        name: 'Minnesota',
        flag: 'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png'
      }, {
        name: 'Mississippi',
        flag: '4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png'
      }, {
        name: 'Missouri',
        flag: '5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png'
      }, {
        name: 'Montana',
        flag: 'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png'
      }, {
        name: 'Nebraska',
        flag: '4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png'
      }, {
        name: 'Nevada',
        flag: 'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png'
      }, {
        name: 'New Hampshire',
        flag: '2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png'
      }, {
        name: 'New Jersey',
        flag: '9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png'
      }, {
        name: 'New Mexico',
        flag: 'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png'
      }, {
        name: 'New York',
        flag: '1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png'
      }, {
        name: 'North Carolina',
        flag: 'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png'
      }, {
        name: 'North Dakota',
        flag: 'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png'
      }, {
        name: 'Ohio',
        flag: '4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png'
      }, {
        name: 'Oklahoma',
        flag: '6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png'
      }, {
        name: 'Oregon',
        flag: 'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png'
      }, {
        name: 'Pennsylvania',
        flag: 'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png'
      }, {
        name: 'Rhode Island',
        flag: 'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png'
      }, {
        name: 'South Carolina',
        flag: '6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png'
      }, {
        name: 'South Dakota',
        flag: '1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png'
      }, {
        name: 'Tennessee',
        flag: '9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png'
      }, {
        name: 'Texas',
        flag: 'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png'
      }, {
        name: 'Utah',
        flag: 'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png'
      }, {
        name: 'Vermont',
        flag: '4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png'
      }, {
        name: 'Virginia',
        flag: '4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png'
      }, {
        name: 'Washington',
        flag: '5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png'
      }, {
        name: 'West Virginia',
        flag: '2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png'
      }, {
        name: 'Wisconsin',
        flag: '2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png'
      }, {
        name: 'Wyoming',
        flag: 'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png'
      }];

      var WikipediaService = /*#__PURE__*/function () {
        function WikipediaService(http) {
          _classCallCheck(this, WikipediaService);

          this.http = http;
        }

        _createClass(WikipediaService, [{
          key: "search",
          value: function search(term) {
            if (term === '') {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
            }

            return this.http.get(WIKI_URL, {
              params: PARAMS.set('search', term)
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response[1];
            }));
          }
        }]);

        return WikipediaService;
      }();

      WikipediaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      WikipediaService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], WikipediaService);

      var NgbdtypeheadBasicComponent = function NgbdtypeheadBasicComponent(_service) {
        var _this18 = this;

        _classCallCheck(this, NgbdtypeheadBasicComponent);

        this._service = _service;
        this.searching = false;
        this.searchFailed = false;
        this.focus$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.click$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();

        this.search1 = function (text$) {
          return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) {
            return term.length < 2 ? [] : states.filter(function (v) {
              return v.toLowerCase().indexOf(term.toLowerCase()) > -1;
            }).slice(0, 10);
          }) // tslint:disable-next-line:semicolon
          );
        };

        this.search2 = function (text$) {
          var debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());

          var clicksWithClosedPopup$ = _this18.click$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function () {
            return !_this18.instance.isPopupOpen();
          }));

          var inputFocus$ = _this18.focus$;
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) {
            return (term === '' ? states : states.filter(function (v) {
              return v.toLowerCase().indexOf(term.toLowerCase()) > -1;
            })).slice(0, 10);
          })); // tslint:disable-next-line:semicolon
        };

        this.formatter = function (result) {
          return result.toUpperCase();
        };

        this.search3 = function (text$) {
          return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) {
            return term === '' ? [] : states.filter(function (v) {
              return v.toLowerCase().indexOf(term.toLowerCase()) > -1;
            }).slice(0, 10);
          }) // tslint:disable-next-line:semicolon
          );
        };

        this.search = function (text$) {
          return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
            return _this18.searching = true;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (term) {
            return _this18._service.search(term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
              return _this18.searchFailed = false;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function () {
              _this18.searchFailed = true;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
            }));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
            return _this18.searching = false;
          }) // tslint:disable-next-line:semicolon
          );
        };

        this.search5 = function (text$) {
          return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) {
            return term === '' ? [] : statesWithFlags.filter(function (v) {
              return v.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
            }).slice(0, 10);
          }) // tslint:disable-next-line:semicolon
          );
        };

        this.formatter5 = function (x) {
          return x.name;
        };
      };

      NgbdtypeheadBasicComponent.ctorParameters = function () {
        return [{
          type: WikipediaService
        }];
      };

      NgbdtypeheadBasicComponent.propDecorators = {
        instance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['instance', {
            "static": true
          }]
        }]
      };
      NgbdtypeheadBasicComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-ngbd-typehead',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./typehead.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/typehead/typehead.component.html"))["default"],
        providers: [WikipediaService],
        styles: ["\n      .form-control {\n        width: 300px;\n        display: inline;\n      }\n    "]
      }), __metadata("design:paramtypes", [WikipediaService])], NgbdtypeheadBasicComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=component-component-module-es5.js.map