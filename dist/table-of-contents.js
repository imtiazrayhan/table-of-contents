var TableOfContents =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _TableOfContents = __webpack_require__(3);

var _TableOfContents2 = _interopRequireDefault(_TableOfContents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _TableOfContents2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableOfContents = function (_React$Component) {
	_inherits(TableOfContents, _React$Component);

	function TableOfContents(props) {
		_classCallCheck(this, TableOfContents);

		var _this = _possibleConstructorReturn(this, (TableOfContents.__proto__ || Object.getPrototypeOf(TableOfContents)).call(this, props));

		_this.generateItemHTML = _this.generateItemHTML.bind(_this);
		return _this;
	}

	_createClass(TableOfContents, [{
		key: 'generateItemHTML',
		value: function generateItemHTML(item) {
			var _this2 = this;

			var key = item.key,
			    label = item.label,
			    items = item.items;

			var isActive = this.props.currentPage === key;

			return _react2.default.createElement(
				'li',
				{
					key: key,
					label: label,
					className: (isActive ? 'active ' : '') + key,
					onClick: function onClick(event) {
						event.stopPropagation();
						event.preventDefault();
						_this2.props.onItemClick(key);
					}

				},
				_react2.default.createElement(
					'a',
					{ href: '#' },
					label
				),
				items ? _react2.default.createElement(
					'ul',
					null,
					items.map(function (_item) {
						return _this2.generateItemHTML(_item);
					})
				) : null
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'table-of-contents-root' },
				this.props.items.map(function (item) {
					var groupLabel = item.groupLabel,
					    items = item.items;


					return groupLabel ? _react2.default.createElement(
						'div',
						{ key: groupLabel },
						_react2.default.createElement(
							'p',
							{ className: 'group-label' },
							groupLabel
						),
						_react2.default.createElement(
							'ul',
							null,
							items ? items.map(function (_item) {
								return _this3.generateItemHTML(_item);
							}) : null
						)
					) : _this3.generateItemHTML(item);
				})
			);
		}
	}]);

	return TableOfContents;
}(_react2.default.Component);

exports.default = TableOfContents;


TableOfContents.propTypes = {
	currentPage: _propTypes2.default.string.isRequired,
	onItemClick: _propTypes2.default.func.isRequired,
	items: _propTypes2.default.array.isRequired
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = PropTypes;

/***/ })
/******/ ]);