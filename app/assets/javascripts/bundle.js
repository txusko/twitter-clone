/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/frontend/main.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/frontend/components/Tweet.jsx":
/*!**************************************************!*\
  !*** ./app/assets/frontend/components/Tweet.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Tweet = function (_React$Component) {\n  _inherits(Tweet, _React$Component);\n\n  function Tweet() {\n    _classCallCheck(this, Tweet);\n\n    return _possibleConstructorReturn(this, (Tweet.__proto__ || Object.getPrototypeOf(Tweet)).apply(this, arguments));\n  }\n\n  _createClass(Tweet, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\n        \"li\",\n        { className: \"collection-item avatar\" },\n        React.createElement(\"img\", { className: \"circle\", src: this.props.gravatar }),\n        React.createElement(\n          \"span\",\n          { className: \"title\" },\n          this.props.name\n        ),\n        React.createElement(\n          \"time\",\n          null,\n          this.props.formattedDate\n        ),\n        React.createElement(\n          \"p\",\n          null,\n          this.props.body\n        )\n      );\n    }\n  }]);\n\n  return Tweet;\n}(React.Component);\n\nexports.default = Tweet;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvYXNzZXRzL2Zyb250ZW5kL2NvbXBvbmVudHMvVHdlZXQuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9hc3NldHMvZnJvbnRlbmQvY29tcG9uZW50cy9Ud2VldC5qc3g/ZWFlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBUd2VldCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGNsYXNzTmFtZT1cImNvbGxlY3Rpb24taXRlbSBhdmF0YXJcIj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjaXJjbGVcIiBzcmM9e3RoaXMucHJvcHMuZ3JhdmF0YXJ9IC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RoaXMucHJvcHMubmFtZX08L3NwYW4+XG4gICAgICAgIDx0aW1lPnt0aGlzLnByb3BzLmZvcm1hdHRlZERhdGV9PC90aW1lPlxuICAgICAgICA8cD57dGhpcy5wcm9wcy5ib2R5fTwvcD5cbiAgICAgIDwvbGk+XG4gICAgKVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBT0E7Ozs7QUFWQTtBQUNBO0FBREEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/assets/frontend/components/Tweet.jsx\n");

/***/ }),

/***/ "./app/assets/frontend/components/TweetBox.jsx":
/*!*****************************************************!*\
  !*** ./app/assets/frontend/components/TweetBox.jsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TweetBox = function (_React$Component) {\n  _inherits(TweetBox, _React$Component);\n\n  function TweetBox() {\n    _classCallCheck(this, TweetBox);\n\n    return _possibleConstructorReturn(this, (TweetBox.__proto__ || Object.getPrototypeOf(TweetBox)).apply(this, arguments));\n  }\n\n  _createClass(TweetBox, [{\n    key: \"sendTweet\",\n    value: function sendTweet(event) {\n      event.preventDefault();\n      this.props.sendTweet(this.refs.tweetTextArea.value);\n      this.refs.tweetTextArea.value = '';\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\n        \"div\",\n        { className: \"row\" },\n        React.createElement(\n          \"form\",\n          { onSubmit: this.sendTweet.bind(this) },\n          React.createElement(\n            \"div\",\n            { className: \"input-field\" },\n            React.createElement(\"textarea\", { ref: \"tweetTextArea\", className: \"materialize-textarea\" }),\n            React.createElement(\n              \"label\",\n              null,\n              \"What's happening?\"\n            ),\n            React.createElement(\n              \"button\",\n              { type: \"submit\", className: \"btn right\" },\n              \"Tweet\"\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return TweetBox;\n}(React.Component);\n\nexports.default = TweetBox;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvYXNzZXRzL2Zyb250ZW5kL2NvbXBvbmVudHMvVHdlZXRCb3guanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9hc3NldHMvZnJvbnRlbmQvY29tcG9uZW50cy9Ud2VldEJveC5qc3g/NjE3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBUd2VldEJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHNlbmRUd2VldChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5zZW5kVHdlZXQodGhpcy5yZWZzLnR3ZWV0VGV4dEFyZWEudmFsdWUpO1xuICAgIHRoaXMucmVmcy50d2VldFRleHRBcmVhLnZhbHVlPScnO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5zZW5kVHdlZXQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgPHRleHRhcmVhIHJlZj1cInR3ZWV0VGV4dEFyZWFcIiBjbGFzc05hbWU9XCJtYXRlcmlhbGl6ZS10ZXh0YXJlYVwiIC8+XG4gICAgICAgICAgICA8bGFiZWw+V2hhdCdzIGhhcHBlbmluZz88L2xhYmVsPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIHJpZ2h0XCI+VHdlZXQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBREE7QUFEQTtBQVVBOzs7O0FBbkJBO0FBQ0E7QUFEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/assets/frontend/components/TweetBox.jsx\n");

/***/ }),

/***/ "./app/assets/frontend/components/TweetList.jsx":
/*!******************************************************!*\
  !*** ./app/assets/frontend/components/TweetList.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Tweet = __webpack_require__(/*! ./Tweet */ \"./app/assets/frontend/components/Tweet.jsx\");\n\nvar _Tweet2 = _interopRequireDefault(_Tweet);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TweetList = function (_React$Component) {\n  _inherits(TweetList, _React$Component);\n\n  function TweetList() {\n    _classCallCheck(this, TweetList);\n\n    return _possibleConstructorReturn(this, (TweetList.__proto__ || Object.getPrototypeOf(TweetList)).apply(this, arguments));\n  }\n\n  _createClass(TweetList, [{\n    key: \"render\",\n    value: function render() {\n      var tweets = this.props.tweets.map(function (tweet) {\n        return React.createElement(_Tweet2.default, _extends({ key: tweet.id }, tweet));\n      });\n      return React.createElement(\n        \"div\",\n        null,\n        React.createElement(\n          \"ul\",\n          { className: \"collection\" },\n          tweets\n        )\n      );\n    }\n  }]);\n\n  return TweetList;\n}(React.Component);\n\nexports.default = TweetList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvYXNzZXRzL2Zyb250ZW5kL2NvbXBvbmVudHMvVHdlZXRMaXN0LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXNzZXRzL2Zyb250ZW5kL2NvbXBvbmVudHMvVHdlZXRMaXN0LmpzeD9mZjNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUd2VldCBmcm9tICcuL1R3ZWV0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUd2VldExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgbGV0IHR3ZWV0cyA9IHRoaXMucHJvcHMudHdlZXRzLm1hcCh0d2VldCA9PiA8VHdlZXQga2V5PXt0d2VldC5pZH0gey4uLnR3ZWV0fSAvPik7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb2xsZWN0aW9uXCI+XG4gICAgICAgICAge3R3ZWV0c31cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BOzs7O0FBVkE7QUFDQTtBQURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/assets/frontend/components/TweetList.jsx\n");

/***/ }),

/***/ "./app/assets/frontend/main.jsx":
/*!**************************************!*\
  !*** ./app/assets/frontend/main.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _TweetBox = __webpack_require__(/*! ./components/TweetBox */ \"./app/assets/frontend/components/TweetBox.jsx\");\n\nvar _TweetBox2 = _interopRequireDefault(_TweetBox);\n\nvar _TweetList = __webpack_require__(/*! ./components/TweetList */ \"./app/assets/frontend/components/TweetList.jsx\");\n\nvar _TweetList2 = _interopRequireDefault(_TweetList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Main = function (_React$Component) {\n  _inherits(Main, _React$Component);\n\n  function Main(props) {\n    _classCallCheck(this, Main);\n\n    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));\n\n    _this.state = { tweetsList: [] };\n    return _this;\n  }\n\n  _createClass(Main, [{\n    key: 'formattedTweets',\n    value: function formattedTweets(tweetsList) {\n      var formattedList = tweetsList.map(function (tweet) {\n        tweet.formattedDate = moment(tweet.created_at).fromNow();\n        return tweet;\n      });\n      return {\n        tweetsList: formattedList\n      };\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      $.ajax(\"/tweets\").success(function (data) {\n        return _this2.setState(_this2.formattedTweets(data));\n      }).error(function (error) {\n        return console.log(error);\n      });\n    }\n  }, {\n    key: 'addTweet',\n    value: function addTweet(tweetToAdd) {\n      var _this3 = this;\n\n      $.post(\"/tweets\", { body: tweetToAdd }).success(function (savedTweet) {\n        var newTweetsList = _this3.state.tweetsList;\n        newTweetsList.unshift(savedTweet);\n        _this3.setState(_this3.formattedTweets(newTweetsList));\n      }).error(function (error) {\n        return console.log(error);\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        { className: 'container' },\n        React.createElement(_TweetBox2.default, { sendTweet: this.addTweet.bind(this) }),\n        React.createElement(_TweetList2.default, { tweets: this.state.tweetsList })\n      );\n    }\n  }]);\n\n  return Main;\n}(React.Component);\n\nvar documentReady = function documentReady() {\n  var reactId = document.getElementById('react');\n  if (reactId) {\n    ReactDOM.render(React.createElement(Main, null), reactId);\n  }\n};\n\n$(documentReady);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvYXNzZXRzL2Zyb250ZW5kL21haW4uanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9hc3NldHMvZnJvbnRlbmQvbWFpbi5qc3g/Y2I5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHdlZXRCb3ggZnJvbSAnLi9jb21wb25lbnRzL1R3ZWV0Qm94JztcbmltcG9ydCBUd2VldExpc3QgZnJvbSAnLi9jb21wb25lbnRzL1R3ZWV0TGlzdCc7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyB0d2VldHNMaXN0OiBbXSB9O1xuICB9XG4gIGZvcm1hdHRlZFR3ZWV0cyh0d2VldHNMaXN0KSB7XG4gICAgbGV0IGZvcm1hdHRlZExpc3QgPSB0d2VldHNMaXN0Lm1hcCh0d2VldCA9PiB7XG4gICAgICB0d2VldC5mb3JtYXR0ZWREYXRlID0gbW9tZW50KHR3ZWV0LmNyZWF0ZWRfYXQpLmZyb21Ob3coKTtcbiAgICAgIHJldHVybiB0d2VldDtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgdHdlZXRzTGlzdDogZm9ybWF0dGVkTGlzdFxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAkLmFqYXgoXCIvdHdlZXRzXCIpXG4gICAgICAuc3VjY2VzcyhkYXRhID0+IHRoaXMuc2V0U3RhdGUodGhpcy5mb3JtYXR0ZWRUd2VldHMoZGF0YSkpKVxuICAgICAgLmVycm9yKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gIH1cbiAgYWRkVHdlZXQodHdlZXRUb0FkZCkge1xuICAgICQucG9zdChcIi90d2VldHNcIiwgeyBib2R5OiB0d2VldFRvQWRkIH0pXG4gICAgLnN1Y2Nlc3MoIHNhdmVkVHdlZXQgPT4ge1xuICAgICAgbGV0IG5ld1R3ZWV0c0xpc3QgPSB0aGlzLnN0YXRlLnR3ZWV0c0xpc3Q7XG4gICAgICBuZXdUd2VldHNMaXN0LnVuc2hpZnQoc2F2ZWRUd2VldCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHRoaXMuZm9ybWF0dGVkVHdlZXRzKG5ld1R3ZWV0c0xpc3QpKTtcbiAgICB9KVxuICAgIC5lcnJvcihlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPFR3ZWV0Qm94IHNlbmRUd2VldD17dGhpcy5hZGRUd2VldC5iaW5kKHRoaXMpfSAvPlxuICAgICAgICA8VHdlZXRMaXN0IHR3ZWV0cz17dGhpcy5zdGF0ZS50d2VldHNMaXN0fSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5sZXQgZG9jdW1lbnRSZWFkeSA9ICgpID0+IHtcbiAgbGV0IHJlYWN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3QnKTtcbiAgaWYgKHJlYWN0SWQpIHtcbiAgICBSZWFjdERPTS5yZW5kZXIoPE1haW4gLz4sIHJlYWN0SWQpO1xuICB9XG59O1xuXG4kKGRvY3VtZW50UmVhZHkpO1xuIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFLQTs7OztBQW5DQTtBQUNBO0FBcUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/assets/frontend/main.jsx\n");

/***/ })

/******/ });