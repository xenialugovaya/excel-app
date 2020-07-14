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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ sync recursive \\.(scss|js)$":
/*!***************************!*\
  !*** . sync \.(scss|js)$ ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./assets/_mixins.scss": "./assets/_mixins.scss",
	"./assets/_variables.scss": "./assets/_variables.scss",
	"./assets/index.scss": "./assets/index.scss",
	"./components/excel/Excel.js": "./components/excel/Excel.js",
	"./components/formula/Formula.js": "./components/formula/Formula.js",
	"./components/header/Header.js": "./components/header/Header.js",
	"./components/table/Table.js": "./components/table/Table.js",
	"./components/table/table.functions.js": "./components/table/table.functions.js",
	"./components/table/table.resize.js": "./components/table/table.resize.js",
	"./components/table/table.template.js": "./components/table/table.template.js",
	"./components/toolbar/Toolbar.js": "./components/toolbar/Toolbar.js",
	"./core/DomListener.js": "./core/DomListener.js",
	"./core/ExcelComponent.js": "./core/ExcelComponent.js",
	"./core/dom.js": "./core/dom.js",
	"./core/utils.js": "./core/utils.js",
	"./dashboard/dashboard.scss": "./dashboard/dashboard.scss",
	"./excel/excel.scss": "./excel/excel.scss",
	"./formula/formula.scss": "./formula/formula.scss",
	"./header/header.scss": "./header/header.scss",
	"./index.js": "./index.js",
	"./table/table.scss": "./table/table.scss",
	"./toolbar/toolbar.scss": "./toolbar/toolbar.scss"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive \\.(scss|js)$";

/***/ }),

/***/ "./assets/_mixins.scss":
/*!*****************************!*\
  !*** ./assets/_mixins.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/_variables.scss":
/*!********************************!*\
  !*** ./assets/_variables.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/index.scss":
/*!***************************!*\
  !*** ./assets/index.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/excel/Excel.js":
/*!***********************************!*\
  !*** ./components/excel/Excel.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Excel; });
/* harmony import */ var core_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/dom */ "./core/dom.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Excel = /*#__PURE__*/function () {
  function Excel(selector, options) {
    _classCallCheck(this, Excel);

    this.$el = Object(core_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(selector);
    this.components = options.components || [];
  }

  _createClass(Excel, [{
    key: "getRoot",
    value: function getRoot() {
      var $root = core_dom__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', 'excel');
      this.components = this.components.map(function (Component) {
        var $el = core_dom__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', Component.className);
        var component = new Component($el); // if (component.name) {
        //   window[`c${component.name}`] = component;
        // }

        $el.html(component.toHTML());
        $root.append($el);
        return component;
      });
      return $root;
    }
  }, {
    key: "render",
    value: function render() {
      this.$el.append(this.getRoot());
      this.components.forEach(function (component) {
        return component.init();
      });
    }
  }]);

  return Excel;
}();



/***/ }),

/***/ "./components/formula/Formula.js":
/*!***************************************!*\
  !*** ./components/formula/Formula.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Formula; });
/* harmony import */ var _core_ExcelComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ExcelComponent */ "./core/ExcelComponent.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Formula = /*#__PURE__*/function (_ExcelComponent) {
  _inherits(Formula, _ExcelComponent);

  var _super = _createSuper(Formula);

  function Formula($root) {
    _classCallCheck(this, Formula);

    return _super.call(this, $root, {
      name: 'Formula',
      listeners: ['input', 'click']
    });
  }

  _createClass(Formula, [{
    key: "toHTML",
    value: function toHTML() {
      return "\n    <div class=\"formula\">\n      <div class=\"formula__info\">fx</div>\n      <div class=\"formula__input\" contenteditable spellcheck=\"false\"></div>\n    </div>";
    }
  }, {
    key: "onInput",
    value: function onInput(event) {
      console.log('Formula', event);
    }
  }, {
    key: "onClick",
    value: function onClick(event) {
      console.log('Formula', event);
    }
  }]);

  return Formula;
}(_core_ExcelComponent__WEBPACK_IMPORTED_MODULE_0__["default"]);

_defineProperty(Formula, "className", 'excel__formula');



/***/ }),

/***/ "./components/header/Header.js":
/*!*************************************!*\
  !*** ./components/header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _core_ExcelComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ExcelComponent */ "./core/ExcelComponent.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Header = /*#__PURE__*/function (_ExcelComponent) {
  _inherits(Header, _ExcelComponent);

  var _super = _createSuper(Header);

  function Header() {
    _classCallCheck(this, Header);

    return _super.apply(this, arguments);
  }

  _createClass(Header, [{
    key: "toHTML",
    value: function toHTML() {
      return "\n      <div class=\"header\">\n        <input class=\"header__input\" type=\"text\" value=\"\u041D\u043E\u0432\u0430\u044F \u0442\u0430\u0431\u043B\u0438\u0446\u0430\" />\n        <div class=\"header__buttons\">\n          <div class=\"header__button\"><span class=\"material-icons\">delete</span></div>\n          <div class=\"header__button\"><span class=\"material-icons\">exit_to_app</span></div>\n        </div>\n      </div>";
    }
  }]);

  return Header;
}(_core_ExcelComponent__WEBPACK_IMPORTED_MODULE_0__["default"]);

_defineProperty(Header, "className", 'excel__header');



/***/ }),

/***/ "./components/table/Table.js":
/*!***********************************!*\
  !*** ./components/table/Table.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Table; });
/* harmony import */ var _table_resize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table.resize */ "./components/table/table.resize.js");
/* harmony import */ var _table_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.functions */ "./components/table/table.functions.js");
/* harmony import */ var _core_ExcelComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/ExcelComponent */ "./core/ExcelComponent.js");
/* harmony import */ var _table_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table.template */ "./components/table/table.template.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Table = /*#__PURE__*/function (_ExcelComponent) {
  _inherits(Table, _ExcelComponent);

  var _super = _createSuper(Table);

  function Table($root) {
    _classCallCheck(this, Table);

    return _super.call(this, $root, {
      name: 'Table',
      listeners: ['mousedown']
    });
  }

  _createClass(Table, [{
    key: "toHTML",
    value: function toHTML() {
      return Object(_table_template__WEBPACK_IMPORTED_MODULE_3__["default"])();
    }
  }, {
    key: "onMousedown",
    value: function onMousedown(event) {
      if (Object(_table_functions__WEBPACK_IMPORTED_MODULE_1__["default"])(event)) {
        Object(_table_resize__WEBPACK_IMPORTED_MODULE_0__["default"])(this.$root, event);
      }
    }
  }]);

  return Table;
}(_core_ExcelComponent__WEBPACK_IMPORTED_MODULE_2__["default"]);

_defineProperty(Table, "className", 'excel__table');



/***/ }),

/***/ "./components/table/table.functions.js":
/*!*********************************************!*\
  !*** ./components/table/table.functions.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shouldResize; });
function shouldResize(event) {
  return event.target.dataset.resize;
}

/***/ }),

/***/ "./components/table/table.resize.js":
/*!******************************************!*\
  !*** ./components/table/table.resize.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return resizeHandler; });
/* harmony import */ var _core_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/dom */ "./core/dom.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function resizeHandler($root, event) {
  var resizeDirection = event.target.dataset.resize;
  var $resizer = Object(_core_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(event.target);
  var resizerSize = resizeDirection === 'col' ? 'height' : 'width';
  var dimension = resizeDirection === 'col' ? 'width' : 'height';
  var direction = resizeDirection === 'col' ? 'right' : 'bottom';
  $resizer.css(_defineProperty({
    opacity: 1
  }, resizerSize, '100vh'));
  var $parent = $resizer.closest('[data-type="resizable"]');
  var coords = $parent.getCoords();

  var delta = function delta(e) {
    return resizeDirection === 'col' ? e.pageX - coords.right : e.pageY - coords.bottom;
  };

  var value = 0;

  document.onmousemove = function (e) {
    value = coords[dimension] + delta(e);
    $resizer.css(_defineProperty({}, direction, "".concat(-delta(e), "px")));
  };

  document.onmouseup = function () {
    var _$resizer$css3;

    document.onmousemove = null;
    document.onmouseup = null;

    if (resizeDirection === 'col') {
      var columnIndex = $parent.data.index;
      var $columnCells = $root.findAll("[data-index=\"".concat(columnIndex, "\"]"));
      $columnCells.each(function (cell) {
        Object(_core_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(cell).css(_defineProperty({}, dimension, "".concat(value, "px")));
      });
    } else if (resizeDirection === 'row') {
      $parent.css(_defineProperty({}, dimension, "".concat(value, "px")));
    }

    $resizer.css((_$resizer$css3 = {
      opacity: 0
    }, _defineProperty(_$resizer$css3, resizerSize, 'auto'), _defineProperty(_$resizer$css3, direction, 0), _$resizer$css3));
  };
}

/***/ }),

/***/ "./components/table/table.template.js":
/*!********************************************!*\
  !*** ./components/table/table.template.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createTable; });
var CODES = {
  A: 65,
  Z: 90
};

function toCell(content, index) {
  return "\n    <div class=\"table__cell\" contenteditable data-index=".concat(index, ">").concat(content, "</div> \n  ");
}

function toColumn(content, index) {
  return "\n    <div class=\"table__column\" data-type=\"resizable\" data-index=".concat(index, ">\n      ").concat(content, "\n      <div class=\"table__col-resize\" data-resize=\"col\"></div>\n    </div>\n  ");
}

function createRow(rowIndex, content) {
  var resize = rowIndex ? '<div class="table__row-resize" data-resize="row"></div>' : '';
  return "\n    <div class=\"table__row\" data-type=\"resizable\">\n      <div class=\"table__row-info\">\n        ".concat(rowIndex || '', "\n        ").concat(resize, "\n      </div>\n      <div class=\"table__row-data\">").concat(content, "</div>\n    </div>\n  ");
}

function toChar(code) {
  return String.fromCharCode(code);
}

function createTable() {
  var rowsCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
  var colsCount = CODES.Z - CODES.A;
  var rows = [];
  var chars = [];
  var cells = [];

  for (var i = 0; i <= colsCount; i++) {
    chars.push(CODES.A + i);
    cells.push('');
  }

  var columnHeaders = chars.map(toChar).map(toColumn).join('');
  rows.push(createRow(null, columnHeaders));

  for (var _i = 0; _i < rowsCount; _i++) {
    var columns = cells.map(toCell).join('');
    rows.push(createRow(_i + 1, columns));
  }

  return rows.join('');
}

/***/ }),

/***/ "./components/toolbar/Toolbar.js":
/*!***************************************!*\
  !*** ./components/toolbar/Toolbar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toolbar; });
/* harmony import */ var _core_ExcelComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ExcelComponent */ "./core/ExcelComponent.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Toolbar = /*#__PURE__*/function (_ExcelComponent) {
  _inherits(Toolbar, _ExcelComponent);

  var _super = _createSuper(Toolbar);

  function Toolbar($root) {
    _classCallCheck(this, Toolbar);

    return _super.call(this, $root, {
      name: 'Toolbar',
      listeners: ['click']
    });
  }

  _createClass(Toolbar, [{
    key: "toHTML",
    value: function toHTML() {
      return "\n    <div class=\"toolbar\">\n      <div class=\"toolbar__button\">\n        <span class=\"material-icons\">format_align_left</span>\n      </div>\n    </div>";
    }
  }, {
    key: "onClick",
    value: function onClick(event) {
      console.log(event.target);
    }
  }]);

  return Toolbar;
}(_core_ExcelComponent__WEBPACK_IMPORTED_MODULE_0__["default"]);

_defineProperty(Toolbar, "className", 'excel__toolbar');



/***/ }),

/***/ "./core/DomListener.js":
/*!*****************************!*\
  !*** ./core/DomListener.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DomListener; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./core/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



function getMethodName(eventName) {
  return "on".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["default"])(eventName));
}

var DomListener = /*#__PURE__*/function () {
  function DomListener(root) {
    var listeners = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, DomListener);

    if (!root) {
      throw new Error('No root provided for DomListener');
    }

    this.$root = root;
    this.listeners = listeners;
  }

  _createClass(DomListener, [{
    key: "initDOMListeners",
    value: function initDOMListeners() {
      var _this = this;

      this.listeners.forEach(function (listener) {
        var method = getMethodName(listener);

        if (!_this[method]) {
          throw new Error("Method ".concat(method, " is not implemented in ").concat(_this.name || '', " component"));
        }

        _this[method] = _this[method].bind(_this);

        _this.$root.on(listener, _this[method]);
      });
    }
  }, {
    key: "removeDOMListeners",
    value: function removeDOMListeners() {
      var _this2 = this;

      this.listeners.forEach(function (listener) {
        var method = getMethodName(listener);

        _this2.$root.off(listener, _this2[method]);
      });
    }
  }]);

  return DomListener;
}();



/***/ }),

/***/ "./core/ExcelComponent.js":
/*!********************************!*\
  !*** ./core/ExcelComponent.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExcelComponent; });
/* harmony import */ var _DomListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomListener */ "./core/DomListener.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var ExcelComponent = /*#__PURE__*/function (_DomListener) {
  _inherits(ExcelComponent, _DomListener);

  var _super = _createSuper(ExcelComponent);

  function ExcelComponent($root) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ExcelComponent);

    _this = _super.call(this, $root, options.listeners);
    _this.options = options;
    _this.name = options.name;
    return _this;
  }

  _createClass(ExcelComponent, [{
    key: "toHTML",
    value: function toHTML() {
      return '';
    }
  }, {
    key: "init",
    value: function init() {
      this.initDOMListeners();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.removeDOMListeners();
    }
  }]);

  return ExcelComponent;
}(_DomListener__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./core/dom.js":
/*!*********************!*\
  !*** ./core/dom.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return $; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dom = /*#__PURE__*/function () {
  function Dom(selector) {
    _classCallCheck(this, Dom);

    this.$el = typeof selector === 'string' ? document.querySelector(selector) : selector;
  }

  _createClass(Dom, [{
    key: "html",
    value: function html(_html) {
      if (typeof _html === 'string') {
        this.$el.innerHTML = _html;
        return this;
      }

      return this.$el.outerHTML.trim();
    }
  }, {
    key: "clear",
    value: function clear() {
      this.html('');
      return this;
    }
  }, {
    key: "on",
    value: function on(eventType, callback) {
      this.$el.addEventListener(eventType, callback);
    }
  }, {
    key: "off",
    value: function off(eventType, callback) {
      this.$el.removeEventListener(eventType, callback);
    }
  }, {
    key: "append",
    value: function append(node) {
      var element = node;

      if (node instanceof Dom) {
        element = node.$el;
      }

      if (Element.prototype.append) {
        this.$el.append(element);
      } else {
        this.$el.appendChild(element);
      }

      return this;
    }
  }, {
    key: "closest",
    value: function closest(selector) {
      return $(this.$el.closest(selector));
    }
  }, {
    key: "findAll",
    value: function findAll(selector) {
      return $(this.$el.querySelectorAll(selector));
    }
  }, {
    key: "getCoords",
    value: function getCoords() {
      return this.$el.getBoundingClientRect();
    }
  }, {
    key: "css",
    value: function css() {
      var _this = this;

      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      Object.keys(styles).forEach(function (key) {
        _this.$el.style[key] = styles[key];
      });
    }
  }, {
    key: "each",
    value: function each(callback) {
      this.$el.forEach(callback);
    }
  }, {
    key: "data",
    get: function get() {
      return this.$el.dataset;
    }
  }]);

  return Dom;
}();

function $(selector) {
  return new Dom(selector);
}

$.create = function (tagName) {
  var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var el = document.createElement(tagName);

  if (classes) {
    el.classList.add(classes);
  }

  return $(el);
};

/***/ }),

/***/ "./core/utils.js":
/*!***********************!*\
  !*** ./core/utils.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return capitalize; });
function capitalize(string) {
  if (typeof string !== 'string') {
    return '';
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

/***/ }),

/***/ "./dashboard/dashboard.scss":
/*!**********************************!*\
  !*** ./dashboard/dashboard.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./excel/excel.scss":
/*!**************************!*\
  !*** ./excel/excel.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./formula/formula.scss":
/*!******************************!*\
  !*** ./formula/formula.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./header/header.scss":
/*!****************************!*\
  !*** ./header/header.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_excel_Excel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/excel/Excel */ "./components/excel/Excel.js");
/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/Header */ "./components/header/Header.js");
/* harmony import */ var _components_toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/toolbar/Toolbar */ "./components/toolbar/Toolbar.js");
/* harmony import */ var _components_formula_Formula__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/formula/Formula */ "./components/formula/Formula.js");
/* harmony import */ var _components_table_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/table/Table */ "./components/table/Table.js");






function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(__webpack_require__("./ sync recursive \\.(scss|js)$"));
var excel = new _components_excel_Excel__WEBPACK_IMPORTED_MODULE_0__["default"]('#app', {
  components: [_components_header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], _components_toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_2__["default"], _components_formula_Formula__WEBPACK_IMPORTED_MODULE_3__["default"], _components_table_Table__WEBPACK_IMPORTED_MODULE_4__["default"]]
});
excel.render();

/***/ }),

/***/ "./table/table.scss":
/*!**************************!*\
  !*** ./table/table.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./toolbar/toolbar.scss":
/*!******************************!*\
  !*** ./toolbar/toolbar.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });