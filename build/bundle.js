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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteVideo = exports.fetchVideos = exports.uploadVideo = exports.deletingVideo = exports.errorDeletedVideo = exports.successDeletedVideo = exports.listVideoLoadingFailed = exports.listVideoLoading = exports.listVideoLoaded = exports.uploadingVideo = exports.errorUploadedVideo = exports.successUploadedVideo = exports.ERROR_DELETED_VIDEO = exports.SUCCESS_DELETED_VIDEO = exports.DELETING_VIDEO = exports.LIST_VIDEOS_LOADING_FAILED = exports.LIST_VIDEOS_LOADING = exports.LIST_VIDEOS_LOADED = exports.ERROR_UPLOADED_VIDEO = exports.SUCCESS_UPLOADED_VIDEO = exports.UPLOADING_VIDEO = undefined;

var _axios = __webpack_require__(15);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var UPLOADING_VIDEO = exports.UPLOADING_VIDEO = 'UPLOADING_VIDEO';
var SUCCESS_UPLOADED_VIDEO = exports.SUCCESS_UPLOADED_VIDEO = 'SUCCESS_UPLOADED_VIDEO';
var ERROR_UPLOADED_VIDEO = exports.ERROR_UPLOADED_VIDEO = 'ERROR_UPLOADED_VIDEO';

var LIST_VIDEOS_LOADED = exports.LIST_VIDEOS_LOADED = 'LIST_VIDEOS_LOADED';
var LIST_VIDEOS_LOADING = exports.LIST_VIDEOS_LOADING = 'LIST_VIDEOS_LOADING';
var LIST_VIDEOS_LOADING_FAILED = exports.LIST_VIDEOS_LOADING_FAILED = 'LIST_VIDEOS_LOADING_FAILED';

var DELETING_VIDEO = exports.DELETING_VIDEO = 'DELETING_VIDEO';
var SUCCESS_DELETED_VIDEO = exports.SUCCESS_DELETED_VIDEO = 'SUCCESS_DELETED_VIDEO';
var ERROR_DELETED_VIDEO = exports.ERROR_DELETED_VIDEO = 'ERROR_DELETED_VIDEO';

var successUploadedVideo = exports.successUploadedVideo = function successUploadedVideo(payload) {
  return {
    type: SUCCESS_UPLOADED_VIDEO, payload: payload
  };
};

var errorUploadedVideo = exports.errorUploadedVideo = function errorUploadedVideo(payload) {
  return {
    type: ERROR_UPLOADED_VIDEO, payload: payload
  };
};

var uploadingVideo = exports.uploadingVideo = function uploadingVideo() {
  return {
    type: UPLOADING_VIDEO
  };
};

var listVideoLoaded = exports.listVideoLoaded = function listVideoLoaded(payload) {
  return {
    type: LIST_VIDEOS_LOADED, payload: payload
  };
};

var listVideoLoading = exports.listVideoLoading = function listVideoLoading() {
  return {
    type: LIST_VIDEOS_LOADING
  };
};

var listVideoLoadingFailed = exports.listVideoLoadingFailed = function listVideoLoadingFailed(payload) {
  return {
    type: LIST_VIDEOS_LOADING_FAILED, payload: payload
  };
};

var successDeletedVideo = exports.successDeletedVideo = function successDeletedVideo(payload) {
  return {
    type: SUCCESS_DELETED_VIDEO, payload: payload
  };
};

var errorDeletedVideo = exports.errorDeletedVideo = function errorDeletedVideo(payload) {
  return {
    type: ERROR_DELETED_VIDEO, payload: payload
  };
};

var deletingVideo = exports.deletingVideo = function deletingVideo() {
  return {
    type: DELETING_VIDEO
  };
};

var uploadVideo = exports.uploadVideo = function uploadVideo(video) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState) {
      var bodyFormData;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              bodyFormData = new FormData();

              bodyFormData.append('title', video.title);
              bodyFormData.append('description', video.description);
              bodyFormData.append('file', video.file);
              dispatch(uploadingVideo());
              _context.next = 7;
              return (0, _axios2.default)({
                method: "post",
                url: "http://localhost:3000/api/videos/",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" }
              }).then(function (response) {
                dispatch(successUploadedVideo(response));
              }).catch(function (error) {
                dispatch(errorUploadedVideo(error.response));
              });

            case 7:
              return _context.abrupt('return', _context.sent);

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

var fetchVideos = exports.fetchVideos = function fetchVideos() {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch(listVideoLoading());
              _context2.next = 3;
              return (0, _axios2.default)({
                method: "get",
                url: "http://localhost:3000/api/videos/"
              }).then(function (response) {
                dispatch(listVideoLoaded(response));
              }).catch(function (error) {
                dispatch(listVideoLoadingFailed(error.response));
              });

            case 3:
              res = _context2.sent;

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var deleteVideo = exports.deleteVideo = function deleteVideo(id) {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              dispatch(deletingVideo());

              if (!id) {
                _context3.next = 5;
                break;
              }

              _context3.next = 4;
              return (0, _axios2.default)({
                method: "delete",
                url: "http://localhost:3000/api/videos/" + id
              }).then(function (response) {
                dispatch(successDeletedVideo(id));
              }).catch(function (error) {
                dispatch(errorDeletedVideo(error.response));
              });

            case 4:
              res = _context3.sent;

            case 5:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x5, _x6, _x7) {
      return _ref3.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _HomePage = __webpack_require__(13);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _NewVideoPage = __webpack_require__(14);

var _NewVideoPage2 = _interopRequireDefault(_NewVideoPage);

var _NotFoundPage = __webpack_require__(16);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _VideoListPage = __webpack_require__(17);

var _VideoListPage2 = _interopRequireDefault(_VideoListPage);

var _App = __webpack_require__(20);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
    routes: [_extends({}, _HomePage2.default, {
        path: '/',
        exact: true
    }), _extends({}, _NewVideoPage2.default, {
        path: '/new'
    }), _extends({}, _VideoListPage2.default, {
        path: '/list'
    }), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var admin = __webpack_require__(34);

var serviceAccount = __webpack_require__(35);
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://video-platform-72110-default-rtdb.firebaseio.com",
    storageBucket: "gs://video-platform-72110.appspot.com"
});

var database = admin.database();
var bucket = admin.storage().bucket();

exports.database = database;
exports.bucket = bucket;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(12);

var _express = __webpack_require__(5);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(2);

var _Routes = __webpack_require__(6);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(22);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(25);

var _createStore2 = _interopRequireDefault(_createStore);

var _videoRoutes = __webpack_require__(30);

var _videoRoutes2 = _interopRequireDefault(_videoRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static('public')); //public directory

// API Routes
app.use('/api/videos', _videoRoutes2.default);

app.get('*', function (req, res) {
    var store = (0, _createStore2.default)(req);

    var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
        var route = _ref.route;

        return route.loadData ? route.loadData(store) : null;
    }).map(function (promise) {
        if (promise) {
            return new Promise(function (resolve, reject) {
                promise.then(resolve).catch(resolve);
            });
        }
    });

    Promise.all(promises).then(function () {
        var context = {};
        var content = (0, _renderer2.default)(req, store, context);

        if (context.url) {
            return res.redirect(301, context.url);
        }

        if (context.notFound) {
            res.status(404);
        }

        res.send((0, _renderer2.default)(req, store, context));
    });
});

app.listen(3000, function () {
    console.log('Listen on port 3000');
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
    return _react2.default.createElement(
        'div',
        { className: 'center-align', style: { marginTop: '200px' } },
        _react2.default.createElement(
            'h3',
            null,
            'Welcome'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Video Platform allow you to upload and store your favorite videos'
        )
    );
};

exports.default = {
    component: Home
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  text-align: center;\n  border-radius: 1em;\n  color: #3c4043;\n  padding: 0.3em;\n  margin: 5% 10%;\n  font-size: 20px;\n  background: #fff;\n  border: 1px solid #ccc;\n  border-color: rgba(0,0,0,.2);\n  -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); \n  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);\n\n  @media (max-width: 700px) {\n    font-size: 20px;\n  }\n\n  p{\n      color: #ee6e73;\n  }\n\n  .message{\n    color: #ee6e73;\n  }\n\n  input[type=button] {\n    padding: 3px ;\n    font-size: 20px;\n    color: #fff;\n    background-color: #26a69a;\n    text-align: center;\n    letter-spacing: .5px;\n    -webkit-transition: .2s ease-out;\n    transition: .2s ease-out;\n    cursor: pointer;\n    border-radius:2px;\n    border:1px solid #b2b8ad;\n    display:inline-block;\n    width:40%;\n    font-size:15px;\n    margin-right:2%;\n    padding:9px 24px;\n    text-decoration:none;\n    text-shadow:0px 1px 0px #ced9bf;\n  }\n\n  input[type=file] {\n    display: none;\n  }\n\n  input[type=text] {\n    text-align: center;\n  }\n\n  .custom-file-upload{\n    color: #fff;\n    background-color: #26a69a;\n    text-align: center;\n    letter-spacing: .5px;\n    -webkit-transition: .2s ease-out;\n    transition: .2s ease-out;\n    cursor: pointer;\n    border-radius:2px;\n    border:1px solid #b2b8ad;\n    display:inline-block;\n    font-size:15px;\n    margin-right:2%;\n    padding:9px 24px;\n    text-decoration:none;\n    text-shadow:0px 1px 0px #ced9bf;\n    width:40%;\n  }\n'], ['\n  text-align: center;\n  border-radius: 1em;\n  color: #3c4043;\n  padding: 0.3em;\n  margin: 5% 10%;\n  font-size: 20px;\n  background: #fff;\n  border: 1px solid #ccc;\n  border-color: rgba(0,0,0,.2);\n  -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); \n  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);\n\n  @media (max-width: 700px) {\n    font-size: 20px;\n  }\n\n  p{\n      color: #ee6e73;\n  }\n\n  .message{\n    color: #ee6e73;\n  }\n\n  input[type=button] {\n    padding: 3px ;\n    font-size: 20px;\n    color: #fff;\n    background-color: #26a69a;\n    text-align: center;\n    letter-spacing: .5px;\n    -webkit-transition: .2s ease-out;\n    transition: .2s ease-out;\n    cursor: pointer;\n    border-radius:2px;\n    border:1px solid #b2b8ad;\n    display:inline-block;\n    width:40%;\n    font-size:15px;\n    margin-right:2%;\n    padding:9px 24px;\n    text-decoration:none;\n    text-shadow:0px 1px 0px #ced9bf;\n  }\n\n  input[type=file] {\n    display: none;\n  }\n\n  input[type=text] {\n    text-align: center;\n  }\n\n  .custom-file-upload{\n    color: #fff;\n    background-color: #26a69a;\n    text-align: center;\n    letter-spacing: .5px;\n    -webkit-transition: .2s ease-out;\n    transition: .2s ease-out;\n    cursor: pointer;\n    border-radius:2px;\n    border:1px solid #b2b8ad;\n    display:inline-block;\n    font-size:15px;\n    margin-right:2%;\n    padding:9px 24px;\n    text-decoration:none;\n    text-shadow:0px 1px 0px #ced9bf;\n    width:40%;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n'], ['\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: fixed;\n  animation: ', ' 1s linear infinite;\n  transform: translateZ(0);\n  left: 50%;\n  border-top: 2px solid grey;\n  border-right: 2px solid grey;\n  border-bottom: 2px solid grey;\n  border-left: 4px solid black;\n  background: transparent;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n'], ['\n  position: fixed;\n  animation: ', ' 1s linear infinite;\n  transform: translateZ(0);\n  left: 50%;\n  border-top: 2px solid grey;\n  border-right: 2px solid grey;\n  border-bottom: 2px solid grey;\n  border-left: 4px solid black;\n  background: transparent;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  input{\n    width: 70%;\n  }\n\n  textarea{\n    width: 70%;\n  }\n\n  span{\n    width: 70%;\n  }\n'], ['\n  input{\n    width: 70%;\n  }\n\n  textarea{\n    width: 70%;\n  }\n\n  span{\n    width: 70%;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _reactHelmet = __webpack_require__(4);

var _actions = __webpack_require__(1);

var _styledComponents = __webpack_require__(7);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Conatiner = _styledComponents2.default.div(_templateObject);
var rotate360 = (0, _styledComponents.keyframes)(_templateObject2);

var Spinner = _styledComponents2.default.div(_templateObject3, rotate360);
var Row = _styledComponents2.default.div(_templateObject4);

var NewVideo = function (_Component) {
  _inherits(NewVideo, _Component);

  function NewVideo(props) {
    _classCallCheck(this, NewVideo);

    var _this2 = _possibleConstructorReturn(this, (NewVideo.__proto__ || Object.getPrototypeOf(NewVideo)).call(this, props));

    _this2.state = {
      video: {
        title: '',
        description: '',
        file: ''
      }
    };
    _this2.inputFile = _react2.default.createRef();
    _this2.spanFile = _react2.default.createRef();
    _this2.handleInputChange = _this2.handleInputChange.bind(_this2);
    _this2.handleTextAreaChange = _this2.handleTextAreaChange.bind(_this2);
    _this2.handleFileSelected = _this2.handleFileSelected.bind(_this2);
    _this2.handleFileButtonClick = _this2.handleFileButtonClick.bind(_this2);
    _this2.uploadVideo = _this2.uploadVideo.bind(_this2);
    return _this2;
  }

  _createClass(NewVideo, [{
    key: 'head',
    value: function head() {
      return _react2.default.createElement(
        _reactHelmet.Helmet,
        null,
        _react2.default.createElement(
          'title',
          null,
          'Upload New video'
        ),
        _react2.default.createElement('meta', { property: 'og:title', content: 'Video Platform App' })
      );
    }
  }, {
    key: 'loading',
    value: function loading() {
      if (this.props.newVideo.videoLoading) {
        return _react2.default.createElement(Spinner, null);
      }
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(e) {
      e.preventDefault();
      this.setState({
        video: _extends({}, this.state.video, { title: e.target.value })
      });
    }
  }, {
    key: 'handleTextAreaChange',
    value: function handleTextAreaChange(e) {
      e.preventDefault();
      this.setState({
        video: _extends({}, this.state.video, { description: e.target.value })
      });
    }
  }, {
    key: 'handleFileSelected',
    value: function handleFileSelected(e) {
      e.preventDefault();
      this.setState({
        video: _extends({}, this.state.video, { file: e.target.files[0] })
      });

      this.spanFile.current.value = e.target.files[0].name;
    }
  }, {
    key: 'handleFileButtonClick',
    value: function handleFileButtonClick(e) {
      this.inputFile.current.click();
    }
  }, {
    key: 'uploadVideo',
    value: function uploadVideo(e) {
      var _this3 = this;

      var _this = this;
      this.props.uploadVideo(this.state.video).then(function (response) {
        _this3.setState({
          video: _extends({}, _this3.state.video, { title: '', description: '', file: '' })
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var message = this.props.newVideo.createMessage;
      return _react2.default.createElement(
        Conatiner,
        null,
        this.head(),
        _react2.default.createElement(
          Row,
          null,
          _react2.default.createElement(
            'p',
            null,
            'UPLOAD VIDEO'
          )
        ),
        _react2.default.createElement(
          Row,
          null,
          _react2.default.createElement('input', { id: 'title', placeholder: 'Enter title of you video', onChange: this.handleInputChange, value: this.state.video.title })
        ),
        _react2.default.createElement(
          Row,
          null,
          _react2.default.createElement('textarea', { id: 'textarea1', className: 'materialize-textarea', onChange: this.handleTextAreaChange, value: this.state.video.description, placeholder: 'Add some description' })
        ),
        _react2.default.createElement(
          Row,
          null,
          _react2.default.createElement('input', { id: 'file-upload', type: 'file', onChange: this.handleFileSelected, ref: this.inputFile }),
          _react2.default.createElement(
            'label',
            { htmlFor: 'file-upload', className: 'custom-file-upload' },
            'Choose Video'
          ),
          _react2.default.createElement('input', { disabled: true, style: { textAlign: 'center' }, ref: this.spanFile, value: this.state.video.file.name || '' })
        ),
        _react2.default.createElement(
          Row,
          null,
          _react2.default.createElement('input', { type: 'button', onClick: this.uploadVideo, value: 'Upload' }),
          _react2.default.createElement(
            'p',
            { className: 'message' },
            message
          ),
          this.loading()
        )
      );
    }
  }]);

  return NewVideo;
}(_react.Component);

function mapStateToProps(_ref) {
  var newVideo = _ref.newVideo;

  return { newVideo: newVideo };
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    uploadVideo: function uploadVideo(video) {
      return dispatch((0, _actions.uploadVideo)(video));
    }
  };
};

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NewVideo)
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

  staticContext.notFound = true;
  return _react2.default.createElement(
    'h1',
    null,
    'Ooops, route not found.'
  );
};

exports.default = {
  component: NotFoundPage
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _actions = __webpack_require__(1);

var _reactHelmet = __webpack_require__(4);

var _Video = __webpack_require__(18);

var _Video2 = _interopRequireDefault(_Video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VideoList = function (_Component) {
  _inherits(VideoList, _Component);

  function VideoList(props) {
    _classCallCheck(this, VideoList);

    var _this = _possibleConstructorReturn(this, (VideoList.__proto__ || Object.getPrototypeOf(VideoList)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(VideoList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchVideos();
    }
  }, {
    key: 'handleClick',
    value: function handleClick(idVideo) {
      if (confirm("Are you sure, you want to delete this video ?")) {
        this.props.deleteVideo(idVideo);
      }
    }
  }, {
    key: 'renderVideos',
    value: function renderVideos() {
      var list = this.props.videos.list;
      if (list) {
        return Object.keys(list).map(function (idVideo, index) {
          return _react2.default.createElement(
            'li',
            { key: index },
            _react2.default.createElement(_Video2.default, { id: idVideo, video: list[idVideo], handleClick: this.handleClick })
          );
        }, this);
      }
    }
  }, {
    key: 'head',
    value: function head() {
      return _react2.default.createElement(
        _reactHelmet.Helmet,
        null,
        _react2.default.createElement(
          'title',
          null,
          'List Video'
        ),
        _react2.default.createElement('meta', { property: 'og:title', content: 'Video Platform App' })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.head(),
        _react2.default.createElement(
          'ul',
          null,
          this.renderVideos()
        )
      );
    }
  }]);

  return VideoList;
}(_react.Component);

function mapStateToProps(_ref) {
  var videos = _ref.videos;

  return { videos: videos };
}

function loadData(store) {
  return store.dispatch((0, _actions.fetchVideos)());
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchVideos: function fetchVideos() {
      return dispatch((0, _actions.fetchVideos)());
    },
    deleteVideo: function deleteVideo(id) {
      return dispatch((0, _actions.deleteVideo)(id));
    }
  };
};

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(VideoList)
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: 0.3em;\n  margin: 5% 15%;\n  padding: 2% 7%;\n  \n  background: #fff;\n  border: 1px solid #ccc;\n  border-color: rgba(0,0,0,.2);\n  -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); \n  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);\n\n  @media (max-width: 700px) {\n    font-size: 20px;\n  }\n\n  input[type=button] {\n   \n    font-size: 15px;\n    color: #ee6e73;\n    background-color: #fff0;\n    border:none;\n    display:inline-block;\n  }\n\n\n'], ['\n  padding: 0.3em;\n  margin: 5% 15%;\n  padding: 2% 7%;\n  \n  background: #fff;\n  border: 1px solid #ccc;\n  border-color: rgba(0,0,0,.2);\n  -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); \n  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);\n\n  @media (max-width: 700px) {\n    font-size: 20px;\n  }\n\n  input[type=button] {\n   \n    font-size: 15px;\n    color: #ee6e73;\n    background-color: #fff0;\n    border:none;\n    display:inline-block;\n  }\n\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    text-align: left;\n    font-size: 24px;\n    font-weight: bold;\n    color:black;\n\n'], ['\n    text-align: left;\n    font-size: 24px;\n    font-weight: bold;\n    color:black;\n\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    text-align: left;\n    font-size: 16px;\n    color:#696666;\n'], ['\n    text-align: left;\n    font-size: 16px;\n    color:#696666;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    text-align: left;\n    font-size: 10px;\n    color:#bdb8b8;\n'], ['\n    text-align: left;\n    font-size: 10px;\n    color:#bdb8b8;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    text-align: right;\n'], ['\n    text-align: right;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactPlayer = __webpack_require__(19);

var _reactPlayer2 = _interopRequireDefault(_reactPlayer);

var _styledComponents = __webpack_require__(7);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Conatiner = _styledComponents2.default.div(_templateObject);

var Title = _styledComponents2.default.p(_templateObject2);
var Description = _styledComponents2.default.p(_templateObject3);

var UploadedDate = _styledComponents2.default.p(_templateObject4);
var Delete = _styledComponents2.default.div(_templateObject5);

var parserDate = function parserDate(timestamp) {
    var date = new Date(timestamp);
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();

    return mm + '/' + dd + '/' + yyyy;
};

var Video = function Video(_ref) {
    var id = _ref.id,
        video = _ref.video,
        handleClick = _ref.handleClick;


    return _react2.default.createElement(
        Conatiner,
        null,
        _react2.default.createElement(
            Delete,
            null,
            _react2.default.createElement('input', { type: 'button', onClick: function onClick() {
                    return handleClick(id);
                }, value: 'x', title: 'delete' })
        ),
        _react2.default.createElement(
            Title,
            null,
            video.title
        ),
        _react2.default.createElement(
            Description,
            null,
            video.description
        ),
        _react2.default.createElement(
            UploadedDate,
            null,
            'Uploaded Date :',
            parserDate(video.createTimestamp)
        ),
        _react2.default.createElement(_reactPlayer2.default, { id: id,
            url: video.url,
            width: '100%',
            height: '50%',
            controls: true,
            volume: 1,
            progressInterval: 5000,
            pip: true
        })
    );
};

exports.default = Video;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-player");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(2);

var _actions = __webpack_require__(1);

var _Header = __webpack_require__(21);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Header2.default, null),
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};

exports.default = {
  component: App
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {

  return _react2.default.createElement(
    'nav',
    null,
    _react2.default.createElement(
      'div',
      { className: 'Header' },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/', className: 'left brand-logo' },
        'Video Platform'
      ),
      _react2.default.createElement(
        'ul',
        { className: 'right' },
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/new' },
            'New Video'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/list' },
            'List Videos'
          )
        )
      )
    )
  );
};

exports.default = Header;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(23);

var _reactRouterDom = __webpack_require__(8);

var _reactRedux = __webpack_require__(3);

var _reactRouterConfig = __webpack_require__(2);

var _serializeJavascript = __webpack_require__(24);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(4);

var _Routes = __webpack_require__(6);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));

  var helmet = _reactHelmet.Helmet.renderStatic();

  return '\n    <html>\n      <head>\n        ' + helmet.title.toString() + '\n        ' + helmet.meta.toString() + '\n        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">\n      </head>\n      <body>\n        <div id="root">' + content + '</div>\n        <script>\n          window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n        </script>\n        <script src="bundle.js"></script>\n      </body>\n    </html>\n  ';
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(9);

var _reduxThunk = __webpack_require__(26);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(27);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {

    var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));

    return store;
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(9);

var _videosResucer = __webpack_require__(28);

var _videosResucer2 = _interopRequireDefault(_videosResucer);

var _newVideoReducer = __webpack_require__(29);

var _newVideoReducer2 = _interopRequireDefault(_newVideoReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    newVideo: _newVideoReducer2.default,
    videos: _videosResucer2.default
});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = __webpack_require__(1);

var defaultState = {
    list: [],
    loadMessage: '',
    deletedeMessage: '',
    videosLoading: false,
    videodeleting: false
};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];

    switch (action.type) {
        case _actions.LIST_VIDEOS_LOADED:
            var videoList = action.payload.data.videos;
            return _extends({}, state, {
                list: videoList,
                loadMessage: '',
                videosLoading: false
            });
        case _actions.LIST_VIDEOS_LOADING:
            return _extends({}, state, {
                loadMessage: '',
                videosLoading: true
            });
        case _actions.LIST_VIDEOS_LOADING_FAILED:
            var loadError = action.payload.data;
            return _extends({}, state, {
                loadMessage: loadError,
                videosLoading: false
            });
        case _actions.SUCCESS_DELETED_VIDEO:
            var id = action.payload;
            var list = state.list;
            delete list[id];
            return _extends({}, state, {
                list: list,
                deletedeMessage: '',
                videodeleting: false
            });
        case _actions.DELETING_VIDEO:
            return _extends({}, state, {
                deletedeMessage: '',
                videodeleting: true
            });
        case _actions.ERROR_DELETED_VIDEO:
            var deleteError = action.payload.data;
            return _extends({}, state, {
                deletedeMessage: deleteError,
                videodeleting: false
            });
        default:
            return state;
    }
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = __webpack_require__(1);

var defaultState = {
    createMessage: '',
    videoLoading: false,
    videoCreated: false
};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];

    switch (action.type) {
        case _actions.UPLOADING_VIDEO:
            return _extends({}, state, {
                createMessage: '',
                videoLoading: true
            });
        case _actions.SUCCESS_UPLOADED_VIDEO:
            var message = action.payload.data;
            return _extends({}, state, {
                createMessage: message,
                videoCreated: true,
                videoLoading: false
            });
        case _actions.ERROR_UPLOADED_VIDEO:
            var messageError = action.payload.data;
            return _extends({}, state, {
                createMessage: messageError,
                videoLoading: false
            });
        default:
            return state;
    }
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(5);

var _express2 = _interopRequireDefault(_express);

var _multer = __webpack_require__(31);

var _multer2 = _interopRequireDefault(_multer);

var _videoController = __webpack_require__(32);

var _videoController2 = _interopRequireDefault(_videoController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var upload = (0, _multer2.default)({
    storage: _multer2.default.memoryStorage(),
    fileFilter: function fileFilter(req, file, cb) {
        if (file.mimetype == "video/x-flv" || file.mimetype == "video/mp4" || file.mimetype == "application/x-mpegURL" || file.mimetype == "video/MP2T" || file.mimetype == "video/x-msvideo" || file.mimetype == "video/3gpp" || file.mimetype == "video/quicktime" || file.mimetype == "video/x-ms-wmv") {
            cb(null, true);
        } else {
            req.fileValidationError = "Forbidden extension";
            return cb(null, false, req.fileValidationError);
        }
    }
});

var videoRouter = _express2.default.Router();

videoRouter.get('/', _videoController2.default.findAll);

videoRouter.get('/:id', _videoController2.default.findById);

videoRouter.put('/:id', _videoController2.default.update);

videoRouter.delete('/:id', _videoController2.default.delete);

videoRouter.post('/', upload.single('file'), _videoController2.default.create);

module.exports = videoRouter;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _video = __webpack_require__(33);

var _video2 = _interopRequireDefault(_video);

var _firebaseService = __webpack_require__(36);

var _firebaseService2 = _interopRequireDefault(_firebaseService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var videoController = {};

videoController.create = function (req, res) {

    if (!req.body.title) {
        res.status(422).send("You have missed enter title");
        return;
    }
    if (!req.file || req.fileValidationError) {
        res.status(422).send("Invalid File video.");
        return;
    } else {
        try {
            console.log("Start video upload");
            _firebaseService2.default.uploadFile(req.file, function (fileUrl) {
                var video = {
                    title: req.body.title,
                    description: req.body.description || '',
                    videoUrl: fileUrl,
                    type: req.file.mimetype,
                    timestamp: Date.now()
                };
                _video2.default.create(video);

                res.status(201).send("Video uploaded.");
            });
        } catch (err) {
            console.log(err);
            res.status(500).send("Ooops!, there was one error.");
        }
    }
};

videoController.findAll = function (req, res) {
    try {
        _video2.default.findAll().then(function (videos) {
            res.status(200).send(videos = { videos: videos });
        });
    } catch (err) {
        console.log(err);
        res.status(500).send("there was one error.");
    }
};

videoController.findById = function (req, res) {
    try {
        _video2.default.findById(req.params.id).then(function (video) {
            res.status(200).send(video);
        });
    } catch (err) {
        console.log(err);
        res.status(500).send("there was one error.");
    }
};

videoController.update = function (req, res) {
    try {
        var video = {
            title: req.body.title,
            description: req.body.description,
            fileUrl: fileUrl,
            updateTimestamp: Date.now()
        };
        _video2.default.update(req.params.id, req.body.title, req.body.description);
        return res.status(200).send("Video was updated.");
    } catch (err) {
        console.log(err);
        res.status(500).send("there was one error.");
    }
};

videoController.delete = function (req, res) {
    try {
        _video2.default.delete(req.params.id);
        return res.status(200).send("Video was deleted");
    } catch (err) {
        console.log(err);
        res.status(500).send("there was one error.");
    }
};

exports.default = videoController;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _firebase = __webpack_require__(10);

var Video = {};

Video.create = function (video) {
    console.log("Added video", video);
    _firebase.database.ref('videos').push({
        title: video.title,
        description: video.description,
        url: video.videoUrl,
        type: video.type,
        createTimestamp: video.timestamp
    });
};

Video.findAll = function () {
    console.log("return list videos");
    return _firebase.database.ref('videos').once('value', function (snapshot) {
        snapshot.val();
    });
};

Video.findById = function (id) {
    console.log("return video", id);
    return _firebase.database.ref('videos/' + id).once('value', function (snapshot) {
        snapshot.val();
    });
};

Video.update = function (id, title, description) {
    console.log("edit video", id);
    _firebase.database.ref('videos/' + id).update({
        title: title,
        description: description,
        updateTimestamp: video.updateTimestamp
    });
};

Video.delete = function (id) {
    console.log("delete video", id);
    return _firebase.database.ref('videos/' + id).remove();
};

exports.default = Video;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = {"type":"service_account","project_id":"video-platform-72110","private_key_id":"f62ca489d1b452fe7d677e3c1f5f457c0d056dfc","private_key":"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCh5SiHqa8mkj63\nsPedsIW4cbmEx/J7icv1o1XYJPziTwvO9xEdwWOgufjpAEAK73WEj8Cj4144agMn\nRmH0v8c71OMw4jyjqkc+yi7R4PkX1tAgLU0Z00iQhV6vDJtVV3cIh7jOwQ1NXqof\nksViZOv8ZzUXXBFVwSRU2hzw5qCU6E2IkbbOiAlGZgNur/YDsXB2stcWMJtzYDCR\nQdsh9d5q4APEU/lfCElYXxZXZ0UVlLyAm9IdKoMSh2g7FW8yAFtyRyprPd6FzQJW\nZEIzUuYCPDXLwjhOgyA4K4c15PsgrlDOKRVxA9uBRH0Kr9hmiiPEXDVdmFZm4Ygb\nX/WHThnLAgMBAAECggEAAblpFxjNjsGb/WTbHkjVA8PiT/G5OWucSn902Jp8PwTM\ngWXMPt7iasHQTtr706H9RG4rhRNU25D1e6OaQ3sPaim4Sbr/Hlcf7yFEImQdAw38\npXsWCSJg8XkaKw8dUGlgES0w4LLZq2tIsJFlnMiqYsPOovMOFDW8Z1LzX/V03GEg\np7XTeAOPYAZNnXLE+k4SbdV2/PhX5XYo3+ELOCxoT7a/UFJGuUiZoxY9KQJtWKpD\n8IbaqLSUJWqx/hwweyNUU4Ybl4S4/HBR/eynep2Vc9++lWehyrQAXZx6xIrvaaEa\nImtJkxy28rfb94ihAvf/BTiSwbnxNw3aEwExZO8k0QKBgQDejdykd2oKTR331Zvw\nbd9/xRtO0zHtLyPxGyNTLmxH3z/MA1wTAj69A2WCgTUgcQwcvnkmET3qZfgMd2YL\n9P2kOqpodHpy2nQ+CwiXl8Yj5yNkA1/soTfP5NErIxMsAz6RNIfoo1KTyLqXnYfJ\nR/17Mbavk9dH3ZE7Kp3ER/QUtwKBgQC6OZ0qmvUkiSuR7I8Y/xAFRFXydpYz1utv\n3BvtdvmjtFCeyevHt0I99amIYD/zGJKr8A5ul5LLSfWI8pBc4h+FBk6YSkURwN+T\nysEckluWSxIMxtZ8szz8HMMdWVjLPYXXP54+QvNGdjmw1dT4hxLlvhLTbopuQzzQ\nqSRWnE/XjQKBgGZlLNQ64P4WVyh1DodDdiZqQNM2lm0DWG0RSGJ4JHe4/rhV/2H7\nkXQTgPvXiOMBQEplVIYwPqV+/u51bO0pbh3GpCrlFIWNfxggqXZd7VsNeJoGd3b/\nAhfTtm07eRGx+HKEkdd2dYLrQvaJEzWHuteYmu4TfmRhS/XF+MqbNHDnAoGAUeGj\nSWh5AWeO0MrC4KrF0IsLf2DFCmYlfzm4zeDSQzi1ehwun9HkPnoV4PDxLWJQm2kh\n716WHOyYGW8OKskCMutjA3Mki3nS1JkB8B4qRxsbBKMpDAuDdRbwc6clc7fJcat3\nWMj3TrQNCcP7sIszs/CvNmgUVgcaZmT4pVx1fsECgYEApIcDfToD+ZbU5sXDX+PK\nJiIDZdj4VGk0E9t5L53G7lQkCLJOKJ9ffELbmI6YaE4nFd4PI5oVX9p6LTASiPeD\nMb9pCZ9MMW0e2KFcSQnaJIt5Uv+YI+k7l03CjEkykib7tq3S0Gh39gx67M4OgDhH\na6Gw/Jo2xfjxtlKS2SzBuzw=\n-----END PRIVATE KEY-----\n","client_email":"firebase-adminsdk-55xap@video-platform-72110.iam.gserviceaccount.com","client_id":"114570759239628699074","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-55xap%40video-platform-72110.iam.gserviceaccount.com"}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _firebase = __webpack_require__(10);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = __webpack_require__(37),
    uuidv4 = _require.v4;

var firebaseService = {};

firebaseService.uploadFile = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file, saveVideo) {
        var filename, blob, uuid, blobWriter, fileUrl;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        filename = Date.now() + '_' + file.originalname;
                        blob = _firebase.bucket.file(filename);
                        uuid = uuidv4();

                        console.log("Start video upload", filename);
                        blobWriter = blob.createWriteStream({
                            metadata: {
                                contentType: file.mimetype,
                                metadata: {
                                    firebaseStorageDownloadTokens: uuid
                                }
                            }
                        });


                        blobWriter.on('error', function (err) {
                            console.log(err);
                            throw err;
                        });

                        blobWriter.on('finish', function () {
                            fileUrl = "https://firebasestorage.googleapis.com/v0/b/" + _firebase.bucket.name + "/o/" + encodeURIComponent(filename) + "?alt=media&token=" + uuid;
                            saveVideo(fileUrl);
                        });

                        blobWriter.end(file.buffer);

                    case 8:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

exports.default = firebaseService;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })
/******/ ]);