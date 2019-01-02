webpackJsonp([1],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JSONField = function (_Component) {
    _inherits(JSONField, _Component);

    function JSONField(props) {
        _classCallCheck(this, JSONField);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        Object.defineProperty(_this, 'value', {
            get: function get() {
                return JSON.parse(_this.refs.textarea.value);
            },
            set: function set(newValue) {
                _this.refs.textarea.value = JSON.stringify(newValue || {});
            },
            enumerable: true,
            configurable: true
        });
        return _this;
    }

    JSONField.prototype.render = function render() {
        var props = _objectWithoutProperties(this.props, []);

        delete props.ref;
        return _react2.default.createElement('textarea', _extends({}, props, { ref: 'textarea' }));
    };

    return JSONField;
}(_react.Component);

var FieldSet = function (_Component2) {
    _inherits(FieldSet, _Component2);

    function FieldSet(props) {
        _classCallCheck(this, FieldSet);

        var _this2 = _possibleConstructorReturn(this, _Component2.call(this, props));

        _this2.state = {
            schema: props.schema || _this2.getSchema(props),
            data: props.data || _this2.getInitialData(props)
        };
        _this2.fields = {};
        return _this2;
    }

    FieldSet.prototype.getSchema = function getSchema() {
        return {};
    };

    FieldSet.prototype.getInitialData = function getInitialData() {
        return {};
    };

    FieldSet.prototype.render = function render() {
        var _this3 = this;

        var _state = this.state,
            schema = _state.schema,
            data = _state.data;

        return _react2.default.createElement(
            'div',
            null,
            data && Object.keys(schema).map(function (key, index) {
                var Field = _this3.field(key, schema[key], schema[key].getValue ? schema[key].getValue(data) : data[key] || null);
                return _react2.default.createElement(
                    'div',
                    { key: index },
                    Field
                );
            })
        );
    };

    FieldSet.prototype.field = function field(name, schema, value) {
        var _this4 = this;

        var _schema$props = schema.props,
            props = _schema$props === undefined ? {} : _schema$props;

        props.className = "form-control";
        props.ref = function (f) {
            if (f) {
                f.value = value;
                _this4.fields[name] = f;
                f.fieldSet = _this4;
            }
        };
        var field = null;

        if (['text', 'number', 'url', 'email'].indexOf(schema.type) != -1) {
            props.type = schema.type;
            field = _react2.default.createElement('input', props);
        } else if (schema.type == "textarea") {
            field = _react2.default.createElement('textarea', props);
        } else if (schema.type == "json") {
            field = _react2.default.createElement(JSONField, props);
        } else if (schema.type == 'select') {
            field = _react2.default.createElement(
                'select',
                props,
                this.getSelectOptions(name, schema, value)
            );
        }
        var label = schema.label || name.charAt(0).toUpperCase() + name.slice(1);
        return _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
                'label',
                null,
                label
            ),
            field
        );
    };

    FieldSet.prototype.getSelectOptions = function getSelectOptions(name, schema, value) {
        var options = schema.options;

        if (!options) return null;
        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) == "object") {
            return Object.keys(options).map(function (key) {
                return _react2.default.createElement(
                    'option',
                    { value: key },
                    options[key]
                );
            });
        } else if (typeof options == 'function') {
            return options(this, this.state.data);
        }
        return null;
    };

    FieldSet.prototype.getData = function getData() {
        var _this5 = this;

        var data = {};
        Object.keys(this.fields).map(function (key) {
            data[key] = _this5.fields[key].value;
        });
        return data;
    };

    return FieldSet;
}(_react.Component);

exports.default = FieldSet;

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(581);



/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (props) {
  return React.createElement(
    _reactModal2.default,
    { contentLabel: "modal", className: 'modal-dialog', isOpen: props.isOpen, style: _Constants2.default },
    React.createElement(
      'div',
      { className: '' },
      React.createElement(
        'div',
        { className: 'panel panel-default' },
        React.createElement(
          'div',
          { className: 'panel-heading' },
          props.title,
          React.createElement(
            'div',
            { className: 'pull-right' },
            React.createElement(
              'a',
              { className: 'btn btn-link btn-xs', onClick: function onClick(e) {
                  e.preventDefault();props.close();
                } },
              React.createElement('i', { className: 'glyphicon glyphicon-remove' })
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'panel-body' },
          props.children
        )
      )
    )
  );
};

var _Constants = __webpack_require__(110);

var _Constants2 = _interopRequireDefault(_Constants);

var _reactModal = __webpack_require__(107);

var _reactModal2 = _interopRequireDefault(_reactModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var DefaultModalStyle = {
  overlay: {
    position: 'fixed',
    overflow: 'hidden',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.20)',
    zIndex: 999
  },
  content: {
    outline: 'none'
  }
};

var WidgetContainerConfigSchema = {
  title: {
    type: 'text',
    props: {
      placeholder: "Widget Title"
    }
  }
  // width: {
  //   type: 'select',
  //   options: {
  //     "1": "1/3",
  //     "2": "2/3",
  //     "3": "3/3"
  //   }
  // }
};
exports.DefaultModalStyle = DefaultModalStyle;
exports.WidgetContainerConfigSchema = WidgetContainerConfigSchema;

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var React = __webpack_require__(1);
var factory = __webpack_require__(117);

if (typeof React === 'undefined') {
  throw Error(
    'create-react-class could not find the React object. If you are using script tags, ' +
      'make sure that React is being loaded before create-react-class.'
  );
}

// Hack to grab NoopUpdateQueue from isomorphic React
var ReactNoopUpdateQueue = new React.Component().updater;

module.exports = factory(
  React.Component,
  React.isValidElement,
  ReactNoopUpdateQueue
);


/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(46)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function(f) {
  if (true) {
    module.exports = f(__webpack_require__(1));
    /* global define */
  } else if (typeof define === 'function' && define.amd) {
    define(['react'], f);
  } else {
    var g;
    if (typeof window !== 'undefined') {
      g = window;
    } else if (typeof global !== 'undefined') {
      g = global;
    } else if (typeof self !== 'undefined') {
      g = self;
    } else {
      g = this;
    }

    if (typeof g.React === 'undefined') {
      throw Error('React module should be required before ReactDOMFactories');
    }

    g.ReactDOMFactories = f(g.React);
  }
})(function(React) {
  /**
   * Create a factory that creates HTML tag elements.
   */
  function createDOMFactory(type) {
    var factory = React.createElement.bind(null, type);
    // Expose the type on the factory and the prototype so that it can be
    // easily accessed on elements. E.g. `<Foo />.type === Foo`.
    // This should not be named `constructor` since this may not be the function
    // that created the element, and it may not even be a constructor.
    factory.type = type;
    return factory;
  };

  /**
   * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
   */
  var ReactDOMFactories = {
    a: createDOMFactory('a'),
    abbr: createDOMFactory('abbr'),
    address: createDOMFactory('address'),
    area: createDOMFactory('area'),
    article: createDOMFactory('article'),
    aside: createDOMFactory('aside'),
    audio: createDOMFactory('audio'),
    b: createDOMFactory('b'),
    base: createDOMFactory('base'),
    bdi: createDOMFactory('bdi'),
    bdo: createDOMFactory('bdo'),
    big: createDOMFactory('big'),
    blockquote: createDOMFactory('blockquote'),
    body: createDOMFactory('body'),
    br: createDOMFactory('br'),
    button: createDOMFactory('button'),
    canvas: createDOMFactory('canvas'),
    caption: createDOMFactory('caption'),
    cite: createDOMFactory('cite'),
    code: createDOMFactory('code'),
    col: createDOMFactory('col'),
    colgroup: createDOMFactory('colgroup'),
    data: createDOMFactory('data'),
    datalist: createDOMFactory('datalist'),
    dd: createDOMFactory('dd'),
    del: createDOMFactory('del'),
    details: createDOMFactory('details'),
    dfn: createDOMFactory('dfn'),
    dialog: createDOMFactory('dialog'),
    div: createDOMFactory('div'),
    dl: createDOMFactory('dl'),
    dt: createDOMFactory('dt'),
    em: createDOMFactory('em'),
    embed: createDOMFactory('embed'),
    fieldset: createDOMFactory('fieldset'),
    figcaption: createDOMFactory('figcaption'),
    figure: createDOMFactory('figure'),
    footer: createDOMFactory('footer'),
    form: createDOMFactory('form'),
    h1: createDOMFactory('h1'),
    h2: createDOMFactory('h2'),
    h3: createDOMFactory('h3'),
    h4: createDOMFactory('h4'),
    h5: createDOMFactory('h5'),
    h6: createDOMFactory('h6'),
    head: createDOMFactory('head'),
    header: createDOMFactory('header'),
    hgroup: createDOMFactory('hgroup'),
    hr: createDOMFactory('hr'),
    html: createDOMFactory('html'),
    i: createDOMFactory('i'),
    iframe: createDOMFactory('iframe'),
    img: createDOMFactory('img'),
    input: createDOMFactory('input'),
    ins: createDOMFactory('ins'),
    kbd: createDOMFactory('kbd'),
    keygen: createDOMFactory('keygen'),
    label: createDOMFactory('label'),
    legend: createDOMFactory('legend'),
    li: createDOMFactory('li'),
    link: createDOMFactory('link'),
    main: createDOMFactory('main'),
    map: createDOMFactory('map'),
    mark: createDOMFactory('mark'),
    menu: createDOMFactory('menu'),
    menuitem: createDOMFactory('menuitem'),
    meta: createDOMFactory('meta'),
    meter: createDOMFactory('meter'),
    nav: createDOMFactory('nav'),
    noscript: createDOMFactory('noscript'),
    object: createDOMFactory('object'),
    ol: createDOMFactory('ol'),
    optgroup: createDOMFactory('optgroup'),
    option: createDOMFactory('option'),
    output: createDOMFactory('output'),
    p: createDOMFactory('p'),
    param: createDOMFactory('param'),
    picture: createDOMFactory('picture'),
    pre: createDOMFactory('pre'),
    progress: createDOMFactory('progress'),
    q: createDOMFactory('q'),
    rp: createDOMFactory('rp'),
    rt: createDOMFactory('rt'),
    ruby: createDOMFactory('ruby'),
    s: createDOMFactory('s'),
    samp: createDOMFactory('samp'),
    script: createDOMFactory('script'),
    section: createDOMFactory('section'),
    select: createDOMFactory('select'),
    small: createDOMFactory('small'),
    source: createDOMFactory('source'),
    span: createDOMFactory('span'),
    strong: createDOMFactory('strong'),
    style: createDOMFactory('style'),
    sub: createDOMFactory('sub'),
    summary: createDOMFactory('summary'),
    sup: createDOMFactory('sup'),
    table: createDOMFactory('table'),
    tbody: createDOMFactory('tbody'),
    td: createDOMFactory('td'),
    textarea: createDOMFactory('textarea'),
    tfoot: createDOMFactory('tfoot'),
    th: createDOMFactory('th'),
    thead: createDOMFactory('thead'),
    time: createDOMFactory('time'),
    title: createDOMFactory('title'),
    tr: createDOMFactory('tr'),
    track: createDOMFactory('track'),
    u: createDOMFactory('u'),
    ul: createDOMFactory('ul'),
    var: createDOMFactory('var'),
    video: createDOMFactory('video'),
    wbr: createDOMFactory('wbr'),

    // SVG
    circle: createDOMFactory('circle'),
    clipPath: createDOMFactory('clipPath'),
    defs: createDOMFactory('defs'),
    ellipse: createDOMFactory('ellipse'),
    g: createDOMFactory('g'),
    image: createDOMFactory('image'),
    line: createDOMFactory('line'),
    linearGradient: createDOMFactory('linearGradient'),
    mask: createDOMFactory('mask'),
    path: createDOMFactory('path'),
    pattern: createDOMFactory('pattern'),
    polygon: createDOMFactory('polygon'),
    polyline: createDOMFactory('polyline'),
    radialGradient: createDOMFactory('radialGradient'),
    rect: createDOMFactory('rect'),
    stop: createDOMFactory('stop'),
    svg: createDOMFactory('svg'),
    text: createDOMFactory('text'),
    tspan: createDOMFactory('tspan'),
  };

  // due to wrapper and conditionals at the top, this will either become
  // `module.exports ReactDOMFactories` if that is available,
  // otherwise it will be defined via `define(['react'], ReactDOMFactories)`
  // if that is available,
  // otherwise it will be defined as global variable.
  return ReactDOMFactories;
});



/***/ }),

/***/ 282:
/***/ (function(module, exports) {

/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

function focusable(element, isTabIndexNotNaN) {
  var nodeName = element.nodeName.toLowerCase();
  return (/input|select|textarea|button|object/.test(nodeName) ?
    !element.disabled :
    "a" === nodeName ?
      element.href || isTabIndexNotNaN :
      isTabIndexNotNaN) && visible(element);
}

function hidden(el) {
  return (el.offsetWidth <= 0 && el.offsetHeight <= 0) ||
    el.style.display === 'none';
}

function visible(element) {
  while (element) {
    if (element === document.body) break;
    if (hidden(element)) return false;
    element = element.parentNode;
  }
  return true;
}

function tabbable(element) {
  var tabIndex = element.getAttribute('tabindex');
  if (tabIndex === null) tabIndex = undefined;
  var isTabIndexNaN = isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
}

function findTabbableDescendants(element) {
  return [].slice.call(element.querySelectorAll('*'), 0).filter(function(el) {
    return tabbable(el);
  });
}

module.exports = findTabbableDescendants;



/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
var defaultParams = {
  title: '',
  text: '',
  type: null,
  allowOutsideClick: false,
  showConfirmButton: true,
  showCancelButton: false,
  closeOnConfirm: true,
  closeOnCancel: true,
  confirmButtonText: 'OK',
  confirmButtonColor: '#8CD4F5',
  cancelButtonText: 'Cancel',
  imageUrl: null,
  imageSize: null,
  timer: null,
  customClass: '',
  html: false,
  animation: true,
  allowEscapeKey: true,
  inputType: 'text',
  inputPlaceholder: '',
  inputValue: '',
  showLoaderOnConfirm: false
};

exports['default'] = defaultParams;
module.exports = exports['default'];

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _FieldSet2 = __webpack_require__(10);

var _FieldSet3 = _interopRequireDefault(_FieldSet2);

var _ConfigManager = __webpack_require__(42);

var _ConfigManager2 = _interopRequireDefault(_ConfigManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseWidget = function (_React$Component) {
    _inherits(BaseWidget, _React$Component);

    function BaseWidget(props) {
        _classCallCheck(this, BaseWidget);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.state = {
            config: props.config || {}
        };
        return _this;
    }

    BaseWidget.prototype.componentDidMount = function componentDidMount() {
        if (this.props.isNew) this.context.configManager.editWidgetConfig(this.props.id);
    };

    BaseWidget.prototype.getConfig = function getConfig() {
        return this.state.config;
    };

    BaseWidget.prototype.setConfig = function setConfig(config) {
        this.setState({ config: config });
    };

    BaseWidget.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        if (props.config) {
            this.setConfig(props.config);
        }
    };

    return BaseWidget;
}(_react2.default.Component);

var JSONConfigFieldSet = function (_FieldSet) {
    _inherits(JSONConfigFieldSet, _FieldSet);

    function JSONConfigFieldSet() {
        _classCallCheck(this, JSONConfigFieldSet);

        return _possibleConstructorReturn(this, _FieldSet.apply(this, arguments));
    }

    JSONConfigFieldSet.prototype.getSchema = function getSchema(props) {
        return {
            config: { type: 'json' }
        };
    };

    JSONConfigFieldSet.prototype.getInitialData = function getInitialData(props) {
        return {
            config: props.widget.getConfig()
        };
    };

    JSONConfigFieldSet.prototype.getData = function getData() {
        return _FieldSet.prototype.getData.call(this).config;
    };

    return JSONConfigFieldSet;
}(_FieldSet3.default);

BaseWidget.ConfigForm = JSONConfigFieldSet;
BaseWidget.contextTypes = {
    configManager: _react.PropTypes.instanceOf(_ConfigManager2.default)
};
exports.default = BaseWidget;

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

__webpack_require__(603);

var _reactDazzle = __webpack_require__(496);

var _reactDazzle2 = _interopRequireDefault(_reactDazzle);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _AddWidgetDialog = __webpack_require__(308);

var _AddWidgetDialog2 = _interopRequireDefault(_AddWidgetDialog);

var _ConfigManager = __webpack_require__(42);

var _ConfigManager2 = _interopRequireDefault(_ConfigManager);

var _Container = __webpack_require__(310);

var _Container2 = _interopRequireDefault(_Container);

var _CustomFrame = __webpack_require__(311);

var _CustomFrame2 = _interopRequireDefault(_CustomFrame);

var _Header = __webpack_require__(313);

var _Header2 = _interopRequireDefault(_Header);

var _DashboardToolbar = __webpack_require__(312);

var _DashboardToolbar2 = _interopRequireDefault(_DashboardToolbar);

var _WidgetConfigDialog = __webpack_require__(315);

var _WidgetConfigDialog2 = _interopRequireDefault(_WidgetConfigDialog);

var _TabConfigDialog = __webpack_require__(314);

var _TabConfigDialog2 = _interopRequireDefault(_TabConfigDialog);

var _sweetalertReact = __webpack_require__(608);

var _sweetalertReact2 = _interopRequireDefault(_sweetalertReact);

__webpack_require__(604);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Default styes of dazzle.

// import EditBar from './EditBar.jsx' 
// App components


// Our styles
//import '../styles/custom.css'

// import Sweat Alert


var widgetId = 0;

var Dashboard = function (_Component) {
    _inherits(Dashboard, _Component);

    function Dashboard(props) {
        _classCallCheck(this, Dashboard);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _initialiseProps.call(_this);

        var widgets = props.widgets,
            layout = props.layout,
            editable = props.editable,
            isNew = props.isNew,
            isOwner = props.isOwner,
            title = props.title,
            abstract = props.abstract;

        Object.keys(widgets).map(function (id) {
            var ref = function ref(w) {
                if (w) {
                    _this.widgets[id] = w;
                    w.id = id;
                }
            };
            var w = widgets[id];
            widgets[id] = {
                type: Dashboard.widgetsClasses[w.type],
                title: w.title,
                props: { config: w.config, id: id, ref: ref }
            };
        });
        _this.state = {
            widgets: widgets,
            layout: layout,
            editable: editable,
            isOwner: isOwner,
            isNew: isNew,
            saved: !isNew,
            title: title,
            abstract: abstract,
            addWidgetDialogOpen: false,
            addWidgetOptions: null,
            showRemoveWidgetAlert: false,
            TabConfigDialogOpen: false,
            tabConfiguration: {}
        };
        _this.configManager = new _ConfigManager2.default(_this);
        _this.widgets = {};
        return _this;
    }

    Dashboard.prototype.getChildContext = function getChildContext() {
        return {
            configManager: this.configManager
        };
    };
    /**
     * When a widget is removed, the layout should be set again.
     */

    /**
     * Adds new widgget.
     */

    /**
     * When a widget moved, this will be called. Layout should be given back.
     */

    /**
     * This will be called when user tries to close the modal dialog.
     */


    Dashboard.prototype.render = function render() {
        var _this2 = this;

        var _state = this.state,
            addWidgetDialogOpen = _state.addWidgetDialogOpen,
            widgets = _state.widgets,
            widgetConfigDialogOpen = _state.widgetConfigDialogOpen,
            TabConfigDialogOpen = _state.TabConfigDialogOpen,
            configWidgetId = _state.configWidgetId,
            editable = _state.editable,
            title = _state.title,
            abstract = _state.abstract,
            isNew = _state.isNew,
            saved = _state.saved,
            isOwner = _state.isOwner,
            layout = _state.layout,
            tabConfiguration = _state.tabConfiguration;

        return _react2.default.createElement(
            _Container2.default,
            null,
            _react2.default.createElement(_sweetalertReact2.default, {
                show: this.state.showRemoveWidgetAlert,
                title: 'Tab Already contains widgets!',
                text: 'Please remove all the widgets before you can remove the tab',
                onConfirm: function onConfirm() {
                    return _this2.setState({ showRemoveWidgetAlert: false });
                }
            }),
            _react2.default.createElement(_AddWidgetDialog2.default, { widgets: widgets, isOpen: addWidgetDialogOpen, onRequestClose: this.onRequestClose, onWidgetSelect: this.handleWidgetSelection }),
            _react2.default.createElement(_WidgetConfigDialog2.default, { isOpen: widgetConfigDialogOpen, widgetId: configWidgetId }),
            _react2.default.createElement(_TabConfigDialog2.default, { isOpen: TabConfigDialogOpen, tabConfiguration: this.state.tabConfiguration, saveTabConfigurations: this.saveTabConfigurations, hideTabConfigDialog: this.hideTabConfigDialog }),
            _react2.default.createElement(_Header2.default, { editable: editable, title: title, abstract: abstract, ref: 'header', onChange: this.onHeaderChanged }),
            _react2.default.createElement(_DashboardToolbar2.default, { isNew: isNew, editable: editable, saved: saved, isOwner: isOwner }),
            _react2.default.createElement(_reactDazzle2.default, {
                frameComponent: _CustomFrame2.default,
                onRemove: this.onRemove,
                layout: layout,
                widgets: widgets,
                editable: editable,
                onAdd: this.onAdd,
                onMove: this.onMove,
                addWidgetComponentText: 'Add New Widget',
                onRemoveTab: this.onRemoveTab,
                onAddTab: this.onAddTab,
                onConfigureTab: this.onConfigureTab
            })
        );
    };
    /**
     * Toggeles edit mode in dashboard.
     */


    Dashboard.prototype.getNewId = function getNewId() {
        var newId = "w_" + widgetId++;
        if (this.state.widgets[newId]) return this.getNewId();
        return newId;
    };
    /**
     * When user selects a widget from the modal dialog, this will be called.
     * By calling the 'addWidget' method, the widget could be added to the previous requested location.
     */


    return Dashboard;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.onRemoveTab = function (rowIndex, columnIndex, tabIndex) {
        var updatedLayout = _this3.state.layout;
        var widgetCount = updatedLayout.rows[rowIndex].columns[columnIndex].tabs[tabIndex].widgets.length;
        var hasWidgets = widgetCount ? true : false;
        if (!hasWidgets) {
            updatedLayout.rows[rowIndex].columns[columnIndex].tabs.splice(tabIndex, 1);
            _this3.setState({
                layout: updatedLayout,
                saved: false
            });
        } else {
            _this3.setState({
                showRemoveWidgetAlert: true
            });
        }
    };

    this.onAddTab = function (rowIndex, columnIndex) {
        var updatedLayout = _this3.state.layout;
        var numberOfTabs = updatedLayout.rows[rowIndex].columns[columnIndex].tabs.length;
        var newEmptyTab = { title: "New Tab", widgetSizes: [], widgets: [] };
        updatedLayout.rows[rowIndex].columns[columnIndex].tabs.splice(numberOfTabs, 0, newEmptyTab);
        _this3.setState({
            layout: updatedLayout,
            saved: false
        });
    };

    this.onConfigureTab = function (rowIndex, columnIndex, tabIndex) {
        var layoutNumber = 3;
        var widgetSizesLength = _this3.state.layout.rows[rowIndex].columns[columnIndex].tabs[tabIndex].widgetSizes.length;
        switch (widgetSizesLength) {
            case 0:
                layoutNumber = 3;
                break;
            case 1:
                layoutNumber = 4;
                break;
            case 2:
                if (_this3.state.layout.rows[rowIndex].columns[columnIndex].tabs[tabIndex].widgetSizes[0].height == '30%') layoutNumber = 1;else layoutNumber = 2;
                break;
            default:
                layoutNumber = 3;
        }
        _this3.setState({
            TabConfigDialogOpen: true,
            tabConfiguration: {
                rowIndex: rowIndex,
                columnIndex: columnIndex,
                tabIndex: tabIndex,
                tabTitle: _this3.state.layout.rows[rowIndex].columns[columnIndex].tabs[tabIndex].title,
                layoutNumber: layoutNumber
            }
        });
    };

    this.showConfigureTab = function (rowIndex, columnIndex, tabIndex) {
        _this3.setState({
            TabConfigDialogOpen: true
        });
    };

    this.saveTabConfigurations = function (tabConfiguration) {
        var rowIndex = tabConfiguration.rowIndex;
        var columnIndex = tabConfiguration.columnIndex;
        var tabIndex = tabConfiguration.tabIndex;
        var tabTitle = tabConfiguration.tabTitle;
        var updatedLayout = _this3.state.layout;
        updatedLayout.rows[rowIndex].columns[columnIndex].tabs[tabIndex].title = tabTitle;
        switch (tabConfiguration.layoutNumber) {
            case 1:
                updatedLayout.rows[rowIndex].columns[columnIndex].tabs[tabIndex].widgetSizes = [{ height: '30%' }, { height: '70%' }];
                while (updatedLayout.rows[rowIndex].columns[columnIndex].tabs[tabIndex].widgets.length > 2) {
                    updatedLayout = (0, _reactDazzle.removeWidget)(updatedLayout, rowIndex, columnIndex, tabIndex, 2);
                }
                break;
            case 2:
                updatedLayout.rows[rowIndex].columns[columnIndex].tabs[tabIndex].widgetSizes = [{ height: '70%' }, { height: '30%' }];
                while (updatedLayout.rows[rowIndex].columns[columnIndex].tabs[tabIndex].widgets.length > 2) {
                    updatedLayout = (0, _reactDazzle.removeWidget)(updatedLayout, rowIndex, columnIndex, tabIndex, 2);
                }
                break;
            case 3:
                updatedLayout.rows[rowIndex].columns[columnIndex].tabs[tabIndex].widgetSizes = [];
                while (updatedLayout.rows[rowIndex].columns[columnIndex].tabs[tabIndex].widgets.length > 3) {
                    updatedLayout = (0, _reactDazzle.removeWidget)(updatedLayout, rowIndex, columnIndex, tabIndex, 3);
                }
                break;
            case 4:
                updatedLayout.rows[rowIndex].columns[columnIndex].tabs[tabIndex].widgetSizes = [{ height: '100%' }];
                while (updatedLayout.rows[rowIndex].columns[columnIndex].tabs[tabIndex].widgets.length > 1) {
                    updatedLayout = (0, _reactDazzle.removeWidget)(updatedLayout, rowIndex, columnIndex, tabIndex, 1);
                }
                break;
            default:
                updatedLayout.rows[rowIndex].columns[columnIndex].tabs[tabIndex].widgetSizes = [];
        }
        _this3.setState({
            layout: updatedLayout,
            TabConfigDialogOpen: false,
            saved: false
        });
        console.log("Saved Tab, ", tabConfiguration);
    };

    this.hideTabConfigDialog = function () {
        _this3.setState({
            TabConfigDialogOpen: false
        });
    };

    this.onRemove = function (layout) {
        _this3.setState({
            layout: layout,
            saved: false
        });
    };

    this.onAdd = function (layout, rowIndex, columnIndex, tabIndex) {
        // Open the AddWidget dialog by seting the 'addWidgetDialogOpen' to true.
        // Also preserve the details such as the layout, rowIndex, and columnIndex  in 'addWidgetOptions'.
        //  This will be used later when user picks a widget to add.
        _this3.setState({
            saved: false,
            addWidgetDialogOpen: true,
            addWidgetOptions: {
                layout: layout,
                rowIndex: rowIndex,
                columnIndex: columnIndex,
                tabIndex: tabIndex
            }
        });
    };

    this.onMove = function (layout) {
        _this3.setState({
            saved: false,
            layout: layout
        });
    };

    this.onRequestClose = function () {
        _this3.setState({
            addWidgetDialogOpen: false
        });
    };

    this.showWidgetConfigDialog = function (id) {
        _this3.setState({
            widgetConfigDialogOpen: true,
            configWidgetId: id
        });
    };

    this.closeWidgetConfigDialog = function (id, config) {
        _this3.setState({
            widgetConfigDialogOpen: false
        });
    };

    this.updateWidget = function (widget, config) {
        var widgets = _this3.state.widgets;
        if (widget) {
            widgets[widget.id].title = config.title;
            widgets[widget.id].props.config = config.widgetConfig;
        }
        _this3.setState({ saved: false, widgets: widgets, widgetConfigDialogOpen: false });
    };

    this.onHeaderChanged = function () {
        _this3.setState({ saved: false });
    };

    this.save = function () {
        _this3.setState({ saved: true });
    };

    this.toggleEdit = function () {
        _this3.setState({
            editable: !_this3.state.editable
        });
    };

    this.handleWidgetSelection = function (widgetType) {
        var id = _this3.getNewId();
        var ref = function ref(w) {
            if (w) {
                _this3.widgets[id] = w;
                w.id = id;
            }
        };
        _this3.state.widgets[id] = {
            title: widgetType.displayName || widgetType.name,
            type: widgetType,
            props: { id: id, ref: ref, config: {}, isNew: true }
        };
        _this3.setState({
            widgets: _this3.state.widgets
        });
        var _state$addWidgetOptio = _this3.state.addWidgetOptions,
            layout = _state$addWidgetOptio.layout,
            rowIndex = _state$addWidgetOptio.rowIndex,
            columnIndex = _state$addWidgetOptio.columnIndex,
            tabIndex = _state$addWidgetOptio.tabIndex;
        /**
         * 'AddWidget' method gives you the new layout.
         */

        _this3.setState({
            layout: (0, _reactDazzle.addWidget)(layout, rowIndex, columnIndex, tabIndex, id),
            addWidgetDialogOpen: false
        });
    };
};

Dashboard.childContextTypes = {
    configManager: _react.PropTypes.instanceOf(_ConfigManager2.default)
};
Dashboard.widgetsClasses = {};
Dashboard.registerWidget = function (type) {
    Dashboard.widgetsClasses[type.name] = type;
};
exports.default = Dashboard;

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactModal = __webpack_require__(107);

var _reactModal2 = _interopRequireDefault(_reactModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddWidgetDialog = function AddWidgetDialog(_ref) {
  var widgets = _ref.widgets,
      isOpen = _ref.isOpen,
      onRequestClose = _ref.onRequestClose,
      onWidgetSelect = _ref.onWidgetSelect;

  var widgetItems = Object.keys(Dashboard.widgetsClasses).map(function (key, index) {
    return _react2.default.createElement(
      'a',
      { href: '#', key: index, className: 'list-group-item', onClick: function onClick() {
          return onWidgetSelect(Dashboard.widgetsClasses[key]);
        } },
      _react2.default.createElement(
        'h6',
        { className: 'list-group-item-heading' },
        Dashboard.widgetsClasses[key].displayName || Dashboard.widgetsClasses[key].name
      )
    );
  });
  return _react2.default.createElement(
    _reactModal2.default,
    { contentLabel: "Widget", className: 'modal-dialog', isOpen: isOpen },
    _react2.default.createElement(
      'div',
      { className: 'panel panel-default' },
      _react2.default.createElement(
        'div',
        { className: 'panel-heading' },
        "Add Widget",
        _react2.default.createElement(
          'div',
          { className: 'pull-right' },
          _react2.default.createElement(
            'a',
            { className: 'btn btn-link btn-xs', onClick: onRequestClose },
            _react2.default.createElement('i', { className: 'glyphicon glyphicon-remove' })
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'panel-body' },
        _react2.default.createElement(
          'h5',
          null,
          'Pick a widget to add'
        ),
        _react2.default.createElement(
          'div',
          { className: 'list-group' },
          widgetItems
        )
      )
    )
  );
};
AddWidgetDialog.propTypes = {
  widgets: _react.PropTypes.object,
  isOpen: _react.PropTypes.bool,
  onRequestClose: _react.PropTypes.func,
  onWidgetSelect: _react.PropTypes.func
};
exports.default = AddWidgetDialog;

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.InfoModal = undefined;

var _reactModal = __webpack_require__(107);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _propTypes = __webpack_require__(17);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InfoModal = exports.InfoModal = function InfoModal(props) {
    var open = props.open,
        onRequestClose = props.onRequestClose,
        title = props.title,
        children = props.children;

    return _react2.default.createElement(
        _reactModal2.default,
        { contentLabel: "Info", className: 'modal-dialog', isOpen: open, onRequestClose: onRequestClose },
        _react2.default.createElement(
            'div',
            { className: 'panel panel-default' },
            _react2.default.createElement(
                'div',
                { className: 'panel-heading' },
                title
            ),
            _react2.default.createElement(
                'div',
                { className: 'panel-body' },
                children
            )
        )
    );
};
InfoModal.propTypes = {
    open: _propTypes2.default.bool.isRequired,
    onRequestClose: _propTypes2.default.func.isRequired,
    title: _propTypes2.default.string.isRequired,
    children: _propTypes2.default.node
};

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function Container(_ref) {
  var children = _ref.children;

  var style = {
    height: '95%'
  };
  return _react2.default.createElement(
    'div',
    { className: 'container', style: style },
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-md-12' },
        children
      )
    )
  );
};

Container.propTypes = {
  children: _react.PropTypes.array
};

exports.default = Container;

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _ConfigManager = __webpack_require__(42);

var _ConfigManager2 = _interopRequireDefault(_ConfigManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomFrame = function (_React$Component) {
    _inherits(CustomFrame, _React$Component);

    function CustomFrame() {
        _classCallCheck(this, CustomFrame);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    // getChildContext() {
    //   var {onRemove, editable, title} = this.props;
    //   return {onRemove, editable, title};
    // }
    CustomFrame.prototype.render = function render() {
        var style = {
            height: '100%'
        };
        var _props = this.props,
            children = _props.children,
            onRemove = _props.onRemove,
            editable = _props.editable,
            title = _props.title;

        var editWidgetConfig = this.context.configManager.editWidgetConfig;
        var header = null;
        if (editable) {
            header = _react2.default.createElement(
                'div',
                { className: 'panel-heading' },
                title,
                _react2.default.createElement(
                    'div',
                    { className: 'btn-group pull-right' },
                    _react2.default.createElement(
                        'a',
                        { onClick: function onClick(e) {
                                e.preventDefault();editWidgetConfig(children.props.id);
                            }, className: 'btn btn-link btn-xs' },
                        _react2.default.createElement('i', { className: 'glyphicon glyphicon-cog' })
                    ),
                    _react2.default.createElement(
                        'a',
                        { onClick: function onClick(e) {
                                e.preventDefault();onRemove();
                            }, className: 'btn btn-link btn-xs' },
                        _react2.default.createElement('i', { className: 'glyphicon glyphicon-trash' })
                    )
                )
            );
        } else if (title && title.length) {
            header = _react2.default.createElement(
                'div',
                { className: 'panel-heading' },
                title
            );
        }
        return _react2.default.createElement(
            'div',
            { style: style, className: 'panel panel-default' },
            header,
            _react2.default.createElement(
                'div',
                { style: style, className: 'panel-body widget' },
                children
            )
        );
    };

    return CustomFrame;
}(_react2.default.Component);

CustomFrame.propTypes = {
    children: _react.PropTypes.element,
    onRemove: _react.PropTypes.func,
    editable: _react.PropTypes.bool,
    title: _react.PropTypes.string
};
CustomFrame.contextTypes = {
    configManager: _react.PropTypes.instanceOf(_ConfigManager2.default)
};
exports.default = CustomFrame;

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

__webpack_require__(606);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _ConfigManager = __webpack_require__(42);

var _ConfigManager2 = _interopRequireDefault(_ConfigManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DashboardToolbar = function (_React$Component) {
    _inherits(DashboardToolbar, _React$Component);

    function DashboardToolbar(props) {
        _classCallCheck(this, DashboardToolbar);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.saveAll = function (e) {
            e.preventDefault();
            var configManager = _this.context.configManager;
            configManager.save();
        };

        _this.preview = function (e) {
            var saved = _this.props.saved;

            if (!saved && confirm('You have unsaved changes, click yes to save current state and preview or click cancel to discard')) {
                _this.saveAll(e);
            }
            window.location.href = '../view/';
        };

        return _this;
    }

    DashboardToolbar.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            editable = _props.editable,
            isOwner = _props.isOwner,
            isNew = _props.isNew,
            saved = _props.saved;

        if (!editable && !isOwner) return null;
        var editBtn = _react2.default.createElement(
            'a',
            { className: 'btn btn-danger btn-lg btn-edit-db', href: '../edit/', title: 'Edit Dashboard' },
            _react2.default.createElement('i', { className: 'glyphicon glyphicon-pencil' })
        );
        var saveBtn = !saved ? _react2.default.createElement(
            'button',
            { className: 'btn btn-danger btn-lg btn-save-db', title: 'Save Dashboard',
                onClick: function onClick(e) {
                    return _this2.saveAll(e);
                } },
            _react2.default.createElement('i', { className: 'glyphicon glyphicon-floppy-disk' })
        ) : _react2.default.createElement(
            'button',
            { disabled: true, className: 'btn btn-danger btn-lg btn-save-db', title: 'Save Dashboard',
                onClick: function onClick(e) {
                    return _this2.saveAll(e);
                } },
            _react2.default.createElement('i', { className: 'glyphicon glyphicon-floppy-disk' })
        );
        var viewBtn = _react2.default.createElement(
            'button',
            { className: 'btn btn-warning btn-lg btn-tb btn-view-db', title: 'View Dashboard',
                onClick: function onClick(e) {
                    return _this2.preview(e);
                } },
            _react2.default.createElement('i', { className: 'glyphicon glyphicon-eye-open' })
        );
        return _react2.default.createElement(
            'div',
            { className: 'db-actions-ct' },
            editable && saveBtn,
            editable && !isNew && viewBtn,
            !editable && isOwner && editBtn
        );
    };

    return DashboardToolbar;
}(_react2.default.Component);

DashboardToolbar.contextTypes = {
    configManager: _react.PropTypes.instanceOf(_ConfigManager2.default)
};
exports.default = DashboardToolbar;

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _FieldSet = __webpack_require__(10);

var _FieldSet2 = _interopRequireDefault(_FieldSet);

var _CommonComponents = __webpack_require__(309);

var _propTypes = __webpack_require__(17);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.onRequestClose = function () {
      var open = _this.state.open;

      _this.setState({ open: !open });
    };

    _this.state = {
      open: false
    };
    return _this;
  }

  Header.prototype.render = function render() {
    var open = this.state.open;
    var _props = this.props,
        editable = _props.editable,
        title = _props.title,
        abstract = _props.abstract,
        _onChange = _props.onChange;

    if (editable) {
      var data = { title: title, abstract: abstract };
      var schema = {
        title: {
          type: "text",
          props: {
            placeholder: "Dashboard Title",
            onChange: function onChange(e) {
              var data = _extends({}, e.target.fieldSet.state.data);
              data.title = e.target.value;
              e.target.fieldSet.setState({ data: data });
              // notify dashboard to changed "saved" state
              _onChange();
            }
          }
        },
        abstract: {
          type: "textarea",
          props: {
            placeholder: "About this dashboard...",
            onChange: function onChange(e) {
              var data = _extends({}, e.target.fieldSet.state.data);
              data.abstract = e.target.value;
              e.target.fieldSet.setState({ data: data });
              // notify dashboard to changed "saved" state
              _onChange();
            }
          }
        }
      };
      return _react2.default.createElement(
        'div',
        { className: 'accordion', id: 'accordionExample' },
        _react2.default.createElement(
          'div',
          { className: 'card' },
          _react2.default.createElement(
            'div',
            { className: 'card-header', id: 'headingThree' },
            _react2.default.createElement(
              'h5',
              { className: 'mb-0' },
              _react2.default.createElement(
                'button',
                { className: 'btn btn-link collapsed', type: 'button', 'data-toggle': 'collapse',
                  'data-target': '#collapseThree', 'aria-expanded': 'false', 'aria-controls': 'collapseThree' },
                'Title and Abstract'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { id: 'collapseThree', className: 'collapse', 'aria-labelledby': 'headingThree',
              'data-parent': '#accordionExample' },
            _react2.default.createElement(
              'div',
              { className: 'card-body' },
              _react2.default.createElement(_FieldSet2.default, { data: data, schema: schema, ref: 'headerForm' })
            )
          )
        )
      );
    }
    if (title === "No title provided") {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('br', null)
      );
    } else {
      return _react2.default.createElement(
        'div',
        { className: 'accordion', id: 'accordionExample' },
        _react2.default.createElement(
          'div',
          { className: 'card' },
          _react2.default.createElement(
            'div',
            { className: 'card-header', id: 'headingThree' },
            _react2.default.createElement(
              'h5',
              { className: 'mb-0' },
              _react2.default.createElement(
                'button',
                { className: 'btn btn-link collapsed', type: 'button', 'data-toggle': 'collapse',
                  'data-target': '#collapseThree', 'aria-expanded': 'false', 'aria-controls': 'collapseThree' },
                'Title and Abstract'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { id: 'collapseThree', className: 'collapse', 'aria-labelledby': 'headingThree',
              'data-parent': '#accordionExample' },
            _react2.default.createElement(
              'div',
              { className: 'card-body' },
              _react2.default.createElement(
                'div',
                { className: 'dashboard-header' },
                _react2.default.createElement(
                  'div',
                  { className: 'flex-element fill-empty title-wrap' },
                  _react2.default.createElement(
                    'h3',
                    { className: 'header-title title-wrap' },
                    title
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'flex-element' },
                  _react2.default.createElement(
                    'button',
                    { onClick: this.onRequestClose, className: 'btn btn-primary' },
                    _react2.default.createElement('i', { className: 'fa fa-info-circle',
                      style: { fontSize: 20 } })
                  )
                ),
                _react2.default.createElement(_CommonComponents.InfoModal, { onRequestClose: this.onRequestClose, open: open, title: 'About' })
              ),
              _react2.default.createElement(
                'p',
                null,
                abstract
              )
            )
          )
        )
      );
    }
  };

  Header.prototype.getData = function getData() {
    return this.refs.headerForm.getData();
  };

  return Header;
}(_react2.default.Component);

Header.propTypes = {
  editable: _propTypes2.default.bool,
  title: _propTypes2.default.string,
  abstract: _propTypes2.default.string
};
exports.default = Header;

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Modal = __webpack_require__(109);

var _Modal2 = _interopRequireDefault(_Modal);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabConfigDialog = function (_React$Component) {
    _inherits(TabConfigDialog, _React$Component);

    function TabConfigDialog(props) {
        _classCallCheck(this, TabConfigDialog);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleTabTitleChange = function (event) {
            var updatedTabConfiguration = _this.state.tabConfiguration;
            updatedTabConfiguration.tabTitle = event.target.value;
            _this.setState({
                tabConfiguration: updatedTabConfiguration
            });
        };

        _this.handleLayoutSelect = function (layoutNumber) {
            var updatedTabConfiguration = _this.state.tabConfiguration;
            updatedTabConfiguration.layoutNumber = layoutNumber;
            _this.setState({
                tabConfiguration: updatedTabConfiguration
            });
        };

        _this.state = {
            tabConfiguration: props.tabConfiguration ? props.tabConfiguration : {
                rowIndex: 0,
                columnIndex: 0,
                tabIndex: 0,
                tabTitle: 'Default Tab title',
                layoutNumber: 3
            }
        };
        return _this;
    }

    TabConfigDialog.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.setState({
            tabConfiguration: nextProps.tabConfiguration ? nextProps.tabConfiguration : {
                rowIndex: nextProps.tabConfiguration.rowIndex,
                columnIndex: nextProps.tabConfiguration.columnIndex,
                tabIndex: nextProps.tabConfiguration.tabIndex,
                tabTitle: nextProps.tabConfiguration.tabTitle
            }
        });
    };

    TabConfigDialog.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            isOpen = _props.isOpen,
            tabConfiguration = _props.tabConfiguration,
            saveTabConfigurations = _props.saveTabConfigurations,
            hideTabConfigDialog = _props.hideTabConfigDialog;

        if (!isOpen) return null;
        var checkedClassName = "img-thumbnail img-check check";
        var unCheckedClassName = "img-thumbnail img-check";
        return _react2.default.createElement(
            _Modal2.default,
            { isOpen: isOpen, title: 'Configure Tab', close: hideTabConfigDialog },
            _react2.default.createElement(
                'form',
                { className: 'form-horizontal' },
                _react2.default.createElement(
                    'fieldset',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'col-md-2 control-label', htmlFor: 'tabtitle' },
                            'Tab Title'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-10' },
                            _react2.default.createElement('input', {
                                value: this.state.tabConfiguration.tabTitle,
                                onChange: this.handleTabTitleChange,
                                id: 'tabtitle', name: 'tabtitle', type: 'text', placeholder: 'Enter Tab Title',
                                className: 'form-control input-md' })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'col-md-2 control-label', htmlFor: 'layouts' },
                            'Layout'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-3 box' },
                            _react2.default.createElement(
                                'strong',
                                { className: 'center' },
                                '1:2'
                            ),
                            _react2.default.createElement(
                                'label',
                                { className: 'btn btn-light', onClick: function onClick() {
                                        return _this2.handleLayoutSelect(1);
                                    } },
                                _react2.default.createElement('img', {
                                    src: '/static/cartoview_dashboard/img/Layout1.png',
                                    className: tabConfiguration.layoutNumber == 1 ? checkedClassName : unCheckedClassName }),
                                _react2.default.createElement('input', { type: 'radio', name: 'chk1', id: 'item4', value: 'val1', className: 'hidden',
                                    autoComplete: 'off' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-3 box' },
                            _react2.default.createElement(
                                'strong',
                                { className: 'center' },
                                '2:1'
                            ),
                            _react2.default.createElement(
                                'label',
                                { className: 'btn btn-light', onClick: function onClick() {
                                        return _this2.handleLayoutSelect(2);
                                    } },
                                _react2.default.createElement('img', {
                                    src: '/static/cartoview_dashboard/img/Layout2.png',
                                    className: tabConfiguration.layoutNumber == 2 ? checkedClassName : unCheckedClassName }),
                                _react2.default.createElement('input', { type: 'radio', name: 'chk1', id: 'item4', value: 'val2', className: 'hidden',
                                    autoComplete: 'off' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-3 box' },
                            _react2.default.createElement(
                                'strong',
                                { className: 'center' },
                                '1:3'
                            ),
                            _react2.default.createElement(
                                'label',
                                { className: 'btn btn-light', onClick: function onClick() {
                                        return _this2.handleLayoutSelect(3);
                                    } },
                                _react2.default.createElement('img', {
                                    src: '/static/cartoview_dashboard/img/Layout3.png',
                                    className: tabConfiguration.layoutNumber == 3 ? checkedClassName : unCheckedClassName }),
                                _react2.default.createElement('input', { type: 'radio', name: 'chk1', id: 'item4', value: 'val3', className: 'hidden',
                                    autoComplete: 'off' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-3 box' },
                            _react2.default.createElement(
                                'strong',
                                { className: 'center' },
                                '1:1'
                            ),
                            _react2.default.createElement(
                                'label',
                                { className: 'btn btn-light', onClick: function onClick() {
                                        return _this2.handleLayoutSelect(4);
                                    } },
                                _react2.default.createElement('img', {
                                    src: '/static/cartoview_dashboard/img/Layout4.png',
                                    className: tabConfiguration.layoutNumber == 4 ? checkedClassName : unCheckedClassName }),
                                _react2.default.createElement('input', { type: 'radio', name: 'chk1', id: 'item4', value: 'val3', className: 'hidden',
                                    autoComplete: 'off' })
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'pull-right' },
                    _react2.default.createElement(
                        'a',
                        { className: 'btn btn-primary', type: 'submit',
                            onClick: function onClick(e) {
                                saveTabConfigurations(_this2.state.tabConfiguration);
                            } },
                        _react2.default.createElement('i', { className: 'glyphicon glyphicon-ok' }),
                        ' ',
                        "Apply"
                    ),
                    _react2.default.createElement(
                        'a',
                        { className: 'btn btn-danger',
                            onClick: function onClick(e) {
                                hideTabConfigDialog();
                            } },
                        _react2.default.createElement('i', { className: 'glyphicon glyphicon-remove' }),
                        ' ',
                        "Cancel"
                    )
                )
            )
        );
    };

    return TabConfigDialog;
}(_react2.default.Component);

exports.default = TabConfigDialog;

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ConfigManager = __webpack_require__(42);

var _ConfigManager2 = _interopRequireDefault(_ConfigManager);

var _FieldSet = __webpack_require__(10);

var _FieldSet2 = _interopRequireDefault(_FieldSet);

var _Modal = __webpack_require__(109);

var _Modal2 = _interopRequireDefault(_Modal);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Constants = __webpack_require__(110);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WidgetConfigDialog = function (_React$Component) {
    _inherits(WidgetConfigDialog, _React$Component);

    function WidgetConfigDialog() {
        _classCallCheck(this, WidgetConfigDialog);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    WidgetConfigDialog.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            isOpen = _props.isOpen,
            widgetId = _props.widgetId;

        if (!isOpen) return null;
        var configManager = this.context.configManager;

        var _configManager$getWid = configManager.getWidgetInfo(widgetId),
            widget = _configManager$getWid.widget,
            containerConfig = _configManager$getWid.containerConfig,
            widgetType = _configManager$getWid.widgetType;

        var props = {
            ref: "widgetConfigForm",
            widget: widget
        };

        var widgetConfigForm = _react2.default.createElement(widgetType.ConfigForm, props);

        return _react2.default.createElement(
            _Modal2.default,
            { isOpen: isOpen, close: function close() {
                    return configManager.endEditWidgetConfig();
                }, title: 'Config Widget' },
            _react2.default.createElement(_FieldSet2.default, { ref: 'containerConfigForm', data: containerConfig, schema: _Constants.WidgetContainerConfigSchema }),
            widgetConfigForm,
            _react2.default.createElement(
                'div',
                { className: 'pull-right' },
                _react2.default.createElement(
                    'a',
                    { className: 'btn btn-primary',
                        onClick: function onClick(e) {
                            e.preventDefault();configManager.endEditWidgetConfig(widget, _this2.getConfig());
                        } },
                    _react2.default.createElement('i', { className: 'glyphicon glyphicon-ok' }),
                    ' ',
                    "Apply"
                ),
                _react2.default.createElement(
                    'a',
                    { className: 'btn btn-danger', onClick: function onClick(e) {
                            e.preventDefault();configManager.endEditWidgetConfig();
                        } },
                    _react2.default.createElement('i', { className: 'glyphicon glyphicon-remove' }),
                    ' ',
                    "Cancel"
                )
            )
        );
    };

    WidgetConfigDialog.prototype.getConfig = function getConfig() {
        var config = this.refs.containerConfigForm.getData();
        config.widgetConfig = this.refs.widgetConfigForm.getData();
        return config;
    };

    return WidgetConfigDialog;
}(_react2.default.Component);

WidgetConfigDialog.contextTypes = {
    configManager: _react2.default.PropTypes.instanceOf(_ConfigManager2.default)
};
exports.default = WidgetConfigDialog;

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, ".nav-tabs > li > button {\n    display:none;\n    cursor:pointer;\n    position:absolute;\n    right: 6px;\n    top: 8px;\n    color: red;\n}\n.nav-tabs > li:hover > button {\n    display: inline-block;\n}\n\n.defaultWidgetFrame {\n\tposition: relative;\n\twidth: 100%;\n\tmargin-bottom: 10px;\n\tpadding: 10px 17px;\n\tdisplay: inline-block;\n\tbackground: #fff;\n\tborder: 1px solid #E6E9ED;\n}\n\n.defaultWidgetFrameHeader {\n\tborder-bottom: 2px solid #E6E9ED;\n\tpadding: 1px 5px 6px;\n\tmargin-bottom: 10px;\n\theight: 35px;\n}\n\n.defaultWidgetFrameHeader .title {\n\tfont-size: 18px;\n  float: left;\n  display: block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.defaultWidgetFrameHeader .remove {\n\tfloat: right;\n\tfont-size: 11px;\n\tcursor: pointer;\n\ttext-decoration: none;\n\tmargin-top: 5px;\n}\n\n.add-widget-button {\n\tpadding: 10px;\n\ttext-align: center;\n\tborder: 1px dotted #DCDCDC;\n\tmargin-bottom: 10px;\n\tcursor: pointer;\n\ttext-decoration: none;\n}\n\n.add-widget-link {\n\ttext-decoration: none;\n}\n\n.editable-column {\n\tborder: 1px dotted #8C8080;\n\tpadding: 10px;\n}\n\n.droppable-column {\n\tbackground-color: #E7E7E7;\n}\n", ""]);

// exports


/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, "body.stop-scrolling {\n  height: 100%;\n  overflow: hidden; }\n\n.sweet-overlay {\n  background-color: black;\n  /* IE8 */\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=40)\";\n  /* IE8 */\n  background-color: rgba(0, 0, 0, 0.4);\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: none;\n  z-index: 10000; }\n\n.sweet-alert {\n  background-color: white;\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  width: 478px;\n  padding: 17px;\n  border-radius: 5px;\n  text-align: center;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  margin-left: -256px;\n  margin-top: -200px;\n  overflow: hidden;\n  display: none;\n  z-index: 99999; }\n  @media all and (max-width: 540px) {\n    .sweet-alert {\n      width: auto;\n      margin-left: 0;\n      margin-right: 0;\n      left: 15px;\n      right: 15px; } }\n  .sweet-alert h2 {\n    color: #575757;\n    font-size: 30px;\n    text-align: center;\n    font-weight: 600;\n    text-transform: none;\n    position: relative;\n    margin: 25px 0;\n    padding: 0;\n    line-height: 40px;\n    display: block; }\n  .sweet-alert p {\n    color: #797979;\n    font-size: 16px;\n    text-align: center;\n    font-weight: 300;\n    position: relative;\n    text-align: inherit;\n    float: none;\n    margin: 0;\n    padding: 0;\n    line-height: normal; }\n  .sweet-alert fieldset {\n    border: none;\n    position: relative; }\n  .sweet-alert .sa-error-container {\n    background-color: #f1f1f1;\n    margin-left: -17px;\n    margin-right: -17px;\n    overflow: hidden;\n    padding: 0 10px;\n    max-height: 0;\n    webkit-transition: padding 0.15s, max-height 0.15s;\n    transition: padding 0.15s, max-height 0.15s; }\n    .sweet-alert .sa-error-container.show {\n      padding: 10px 0;\n      max-height: 100px;\n      webkit-transition: padding 0.2s, max-height 0.2s;\n      transition: padding 0.25s, max-height 0.25s; }\n    .sweet-alert .sa-error-container .icon {\n      display: inline-block;\n      width: 24px;\n      height: 24px;\n      border-radius: 50%;\n      background-color: #ea7d7d;\n      color: white;\n      line-height: 24px;\n      text-align: center;\n      margin-right: 3px; }\n    .sweet-alert .sa-error-container p {\n      display: inline-block; }\n  .sweet-alert .sa-input-error {\n    position: absolute;\n    top: 29px;\n    right: 26px;\n    width: 20px;\n    height: 20px;\n    opacity: 0;\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transition: all 0.1s;\n    transition: all 0.1s; }\n    .sweet-alert .sa-input-error::before, .sweet-alert .sa-input-error::after {\n      content: \"\";\n      width: 20px;\n      height: 6px;\n      background-color: #f06e57;\n      border-radius: 3px;\n      position: absolute;\n      top: 50%;\n      margin-top: -4px;\n      left: 50%;\n      margin-left: -9px; }\n    .sweet-alert .sa-input-error::before {\n      -webkit-transform: rotate(-45deg);\n      transform: rotate(-45deg); }\n    .sweet-alert .sa-input-error::after {\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg); }\n    .sweet-alert .sa-input-error.show {\n      opacity: 1;\n      -webkit-transform: scale(1);\n      transform: scale(1); }\n  .sweet-alert input {\n    width: 100%;\n    box-sizing: border-box;\n    border-radius: 3px;\n    border: 1px solid #d7d7d7;\n    height: 43px;\n    margin-top: 10px;\n    margin-bottom: 17px;\n    font-size: 18px;\n    box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.06);\n    padding: 0 12px;\n    display: none;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s; }\n    .sweet-alert input:focus {\n      outline: none;\n      box-shadow: 0px 0px 3px #c4e6f5;\n      border: 1px solid #b4dbed; }\n      .sweet-alert input:focus::-moz-placeholder {\n        transition: opacity 0.3s 0.03s ease;\n        opacity: 0.5; }\n      .sweet-alert input:focus:-ms-input-placeholder {\n        transition: opacity 0.3s 0.03s ease;\n        opacity: 0.5; }\n      .sweet-alert input:focus::-webkit-input-placeholder {\n        transition: opacity 0.3s 0.03s ease;\n        opacity: 0.5; }\n    .sweet-alert input::-moz-placeholder {\n      color: #bdbdbd; }\n    .sweet-alert input:-ms-input-placeholder {\n      color: #bdbdbd; }\n    .sweet-alert input::-webkit-input-placeholder {\n      color: #bdbdbd; }\n  .sweet-alert.show-input input {\n    display: block; }\n  .sweet-alert .sa-confirm-button-container {\n    display: inline-block;\n    position: relative; }\n  .sweet-alert .la-ball-fall {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    margin-left: -27px;\n    margin-top: 4px;\n    opacity: 0;\n    visibility: hidden; }\n  .sweet-alert button {\n    background-color: #8CD4F5;\n    color: white;\n    border: none;\n    box-shadow: none;\n    font-size: 17px;\n    font-weight: 500;\n    -webkit-border-radius: 4px;\n    border-radius: 5px;\n    padding: 10px 32px;\n    margin: 26px 5px 0 5px;\n    cursor: pointer; }\n    .sweet-alert button:focus {\n      outline: none;\n      box-shadow: 0 0 2px rgba(128, 179, 235, 0.5), inset 0 0 0 1px rgba(0, 0, 0, 0.05); }\n    .sweet-alert button:hover {\n      background-color: #7ecff4; }\n    .sweet-alert button:active {\n      background-color: #5dc2f1; }\n    .sweet-alert button.cancel {\n      background-color: #C1C1C1; }\n      .sweet-alert button.cancel:hover {\n        background-color: #b9b9b9; }\n      .sweet-alert button.cancel:active {\n        background-color: #a8a8a8; }\n      .sweet-alert button.cancel:focus {\n        box-shadow: rgba(197, 205, 211, 0.8) 0px 0px 2px, rgba(0, 0, 0, 0.0470588) 0px 0px 0px 1px inset !important; }\n    .sweet-alert button[disabled] {\n      opacity: .6;\n      cursor: default; }\n    .sweet-alert button.confirm[disabled] {\n      color: transparent; }\n      .sweet-alert button.confirm[disabled] ~ .la-ball-fall {\n        opacity: 1;\n        visibility: visible;\n        transition-delay: 0s; }\n    .sweet-alert button::-moz-focus-inner {\n      border: 0; }\n  .sweet-alert[data-has-cancel-button=false] button {\n    box-shadow: none !important; }\n  .sweet-alert[data-has-confirm-button=false][data-has-cancel-button=false] {\n    padding-bottom: 40px; }\n  .sweet-alert .sa-icon {\n    width: 80px;\n    height: 80px;\n    border: 4px solid gray;\n    -webkit-border-radius: 40px;\n    border-radius: 40px;\n    border-radius: 50%;\n    margin: 20px auto;\n    padding: 0;\n    position: relative;\n    box-sizing: content-box; }\n    .sweet-alert .sa-icon.sa-error {\n      border-color: #F27474; }\n      .sweet-alert .sa-icon.sa-error .sa-x-mark {\n        position: relative;\n        display: block; }\n      .sweet-alert .sa-icon.sa-error .sa-line {\n        position: absolute;\n        height: 5px;\n        width: 47px;\n        background-color: #F27474;\n        display: block;\n        top: 37px;\n        border-radius: 2px; }\n        .sweet-alert .sa-icon.sa-error .sa-line.sa-left {\n          -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n          left: 17px; }\n        .sweet-alert .sa-icon.sa-error .sa-line.sa-right {\n          -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n          right: 16px; }\n    .sweet-alert .sa-icon.sa-warning {\n      border-color: #F8BB86; }\n      .sweet-alert .sa-icon.sa-warning .sa-body {\n        position: absolute;\n        width: 5px;\n        height: 47px;\n        left: 50%;\n        top: 10px;\n        -webkit-border-radius: 2px;\n        border-radius: 2px;\n        margin-left: -2px;\n        background-color: #F8BB86; }\n      .sweet-alert .sa-icon.sa-warning .sa-dot {\n        position: absolute;\n        width: 7px;\n        height: 7px;\n        -webkit-border-radius: 50%;\n        border-radius: 50%;\n        margin-left: -3px;\n        left: 50%;\n        bottom: 10px;\n        background-color: #F8BB86; }\n    .sweet-alert .sa-icon.sa-info {\n      border-color: #C9DAE1; }\n      .sweet-alert .sa-icon.sa-info::before {\n        content: \"\";\n        position: absolute;\n        width: 5px;\n        height: 29px;\n        left: 50%;\n        bottom: 17px;\n        border-radius: 2px;\n        margin-left: -2px;\n        background-color: #C9DAE1; }\n      .sweet-alert .sa-icon.sa-info::after {\n        content: \"\";\n        position: absolute;\n        width: 7px;\n        height: 7px;\n        border-radius: 50%;\n        margin-left: -3px;\n        top: 19px;\n        background-color: #C9DAE1; }\n    .sweet-alert .sa-icon.sa-success {\n      border-color: #A5DC86; }\n      .sweet-alert .sa-icon.sa-success::before, .sweet-alert .sa-icon.sa-success::after {\n        content: '';\n        -webkit-border-radius: 40px;\n        border-radius: 40px;\n        border-radius: 50%;\n        position: absolute;\n        width: 60px;\n        height: 120px;\n        background: white;\n        -webkit-transform: rotate(45deg);\n        transform: rotate(45deg); }\n      .sweet-alert .sa-icon.sa-success::before {\n        -webkit-border-radius: 120px 0 0 120px;\n        border-radius: 120px 0 0 120px;\n        top: -7px;\n        left: -33px;\n        -webkit-transform: rotate(-45deg);\n        transform: rotate(-45deg);\n        -webkit-transform-origin: 60px 60px;\n        transform-origin: 60px 60px; }\n      .sweet-alert .sa-icon.sa-success::after {\n        -webkit-border-radius: 0 120px 120px 0;\n        border-radius: 0 120px 120px 0;\n        top: -11px;\n        left: 30px;\n        -webkit-transform: rotate(-45deg);\n        transform: rotate(-45deg);\n        -webkit-transform-origin: 0px 60px;\n        transform-origin: 0px 60px; }\n      .sweet-alert .sa-icon.sa-success .sa-placeholder {\n        width: 80px;\n        height: 80px;\n        border: 4px solid rgba(165, 220, 134, 0.2);\n        -webkit-border-radius: 40px;\n        border-radius: 40px;\n        border-radius: 50%;\n        box-sizing: content-box;\n        position: absolute;\n        left: -4px;\n        top: -4px;\n        z-index: 2; }\n      .sweet-alert .sa-icon.sa-success .sa-fix {\n        width: 5px;\n        height: 90px;\n        background-color: white;\n        position: absolute;\n        left: 28px;\n        top: 8px;\n        z-index: 1;\n        -webkit-transform: rotate(-45deg);\n        transform: rotate(-45deg); }\n      .sweet-alert .sa-icon.sa-success .sa-line {\n        height: 5px;\n        background-color: #A5DC86;\n        display: block;\n        border-radius: 2px;\n        position: absolute;\n        z-index: 2; }\n        .sweet-alert .sa-icon.sa-success .sa-line.sa-tip {\n          width: 25px;\n          left: 14px;\n          top: 46px;\n          -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n        .sweet-alert .sa-icon.sa-success .sa-line.sa-long {\n          width: 47px;\n          right: 8px;\n          top: 38px;\n          -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n    .sweet-alert .sa-icon.sa-custom {\n      background-size: contain;\n      border-radius: 0;\n      border: none;\n      background-position: center center;\n      background-repeat: no-repeat; }\n\n/*\n * Animations\n */\n@-webkit-keyframes showSweetAlert {\n  0% {\n    transform: scale(0.7);\n    -webkit-transform: scale(0.7); }\n  45% {\n    transform: scale(1.05);\n    -webkit-transform: scale(1.05); }\n  80% {\n    transform: scale(0.95);\n    -webkit-transform: scale(0.95); }\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n\n@keyframes showSweetAlert {\n  0% {\n    transform: scale(0.7);\n    -webkit-transform: scale(0.7); }\n  45% {\n    transform: scale(1.05);\n    -webkit-transform: scale(1.05); }\n  80% {\n    transform: scale(0.95);\n    -webkit-transform: scale(0.95); }\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n\n@-webkit-keyframes hideSweetAlert {\n  0% {\n    transform: scale(1);\n    -webkit-transform: scale(1); }\n  100% {\n    transform: scale(0.5);\n    -webkit-transform: scale(0.5); } }\n\n@keyframes hideSweetAlert {\n  0% {\n    transform: scale(1);\n    -webkit-transform: scale(1); }\n  100% {\n    transform: scale(0.5);\n    -webkit-transform: scale(0.5); } }\n\n@-webkit-keyframes slideFromTop {\n  0% {\n    top: 0%; }\n  100% {\n    top: 50%; } }\n\n@keyframes slideFromTop {\n  0% {\n    top: 0%; }\n  100% {\n    top: 50%; } }\n\n@-webkit-keyframes slideToTop {\n  0% {\n    top: 50%; }\n  100% {\n    top: 0%; } }\n\n@keyframes slideToTop {\n  0% {\n    top: 50%; }\n  100% {\n    top: 0%; } }\n\n@-webkit-keyframes slideFromBottom {\n  0% {\n    top: 70%; }\n  100% {\n    top: 50%; } }\n\n@keyframes slideFromBottom {\n  0% {\n    top: 70%; }\n  100% {\n    top: 50%; } }\n\n@-webkit-keyframes slideToBottom {\n  0% {\n    top: 50%; }\n  100% {\n    top: 70%; } }\n\n@keyframes slideToBottom {\n  0% {\n    top: 50%; }\n  100% {\n    top: 70%; } }\n\n.showSweetAlert[data-animation=pop] {\n  -webkit-animation: showSweetAlert 0.3s;\n  animation: showSweetAlert 0.3s; }\n\n.showSweetAlert[data-animation=none] {\n  -webkit-animation: none;\n  animation: none; }\n\n.showSweetAlert[data-animation=slide-from-top] {\n  -webkit-animation: slideFromTop 0.3s;\n  animation: slideFromTop 0.3s; }\n\n.showSweetAlert[data-animation=slide-from-bottom] {\n  -webkit-animation: slideFromBottom 0.3s;\n  animation: slideFromBottom 0.3s; }\n\n.hideSweetAlert[data-animation=pop] {\n  -webkit-animation: hideSweetAlert 0.2s;\n  animation: hideSweetAlert 0.2s; }\n\n.hideSweetAlert[data-animation=none] {\n  -webkit-animation: none;\n  animation: none; }\n\n.hideSweetAlert[data-animation=slide-from-top] {\n  -webkit-animation: slideToTop 0.4s;\n  animation: slideToTop 0.4s; }\n\n.hideSweetAlert[data-animation=slide-from-bottom] {\n  -webkit-animation: slideToBottom 0.3s;\n  animation: slideToBottom 0.3s; }\n\n@-webkit-keyframes animateSuccessTip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  70% {\n    width: 50px;\n    left: -8px;\n    top: 37px; }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px; }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px; } }\n\n@keyframes animateSuccessTip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  70% {\n    width: 50px;\n    left: -8px;\n    top: 37px; }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px; }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px; } }\n\n@-webkit-keyframes animateSuccessLong {\n  0% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  65% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  84% {\n    width: 55px;\n    right: 0px;\n    top: 35px; }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px; } }\n\n@keyframes animateSuccessLong {\n  0% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  65% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  84% {\n    width: 55px;\n    right: 0px;\n    top: 35px; }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px; } }\n\n@-webkit-keyframes rotatePlaceholder {\n  0% {\n    transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg); }\n  5% {\n    transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg); }\n  12% {\n    transform: rotate(-405deg);\n    -webkit-transform: rotate(-405deg); }\n  100% {\n    transform: rotate(-405deg);\n    -webkit-transform: rotate(-405deg); } }\n\n@keyframes rotatePlaceholder {\n  0% {\n    transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg); }\n  5% {\n    transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg); }\n  12% {\n    transform: rotate(-405deg);\n    -webkit-transform: rotate(-405deg); }\n  100% {\n    transform: rotate(-405deg);\n    -webkit-transform: rotate(-405deg); } }\n\n.animateSuccessTip {\n  -webkit-animation: animateSuccessTip 0.75s;\n  animation: animateSuccessTip 0.75s; }\n\n.animateSuccessLong {\n  -webkit-animation: animateSuccessLong 0.75s;\n  animation: animateSuccessLong 0.75s; }\n\n.sa-icon.sa-success.animate::after {\n  -webkit-animation: rotatePlaceholder 4.25s ease-in;\n  animation: rotatePlaceholder 4.25s ease-in; }\n\n@-webkit-keyframes animateErrorIcon {\n  0% {\n    transform: rotateX(100deg);\n    -webkit-transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    transform: rotateX(0deg);\n    -webkit-transform: rotateX(0deg);\n    opacity: 1; } }\n\n@keyframes animateErrorIcon {\n  0% {\n    transform: rotateX(100deg);\n    -webkit-transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    transform: rotateX(0deg);\n    -webkit-transform: rotateX(0deg);\n    opacity: 1; } }\n\n.animateErrorIcon {\n  -webkit-animation: animateErrorIcon 0.5s;\n  animation: animateErrorIcon 0.5s; }\n\n@-webkit-keyframes animateXMark {\n  0% {\n    transform: scale(0.4);\n    -webkit-transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  50% {\n    transform: scale(0.4);\n    -webkit-transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  80% {\n    transform: scale(1.15);\n    -webkit-transform: scale(1.15);\n    margin-top: -6px; }\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    margin-top: 0;\n    opacity: 1; } }\n\n@keyframes animateXMark {\n  0% {\n    transform: scale(0.4);\n    -webkit-transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  50% {\n    transform: scale(0.4);\n    -webkit-transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  80% {\n    transform: scale(1.15);\n    -webkit-transform: scale(1.15);\n    margin-top: -6px; }\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    margin-top: 0;\n    opacity: 1; } }\n\n.animateXMark {\n  -webkit-animation: animateXMark 0.5s;\n  animation: animateXMark 0.5s; }\n\n@-webkit-keyframes pulseWarning {\n  0% {\n    border-color: #F8D486; }\n  100% {\n    border-color: #F8BB86; } }\n\n@keyframes pulseWarning {\n  0% {\n    border-color: #F8D486; }\n  100% {\n    border-color: #F8BB86; } }\n\n.pulseWarning {\n  -webkit-animation: pulseWarning 0.75s infinite alternate;\n  animation: pulseWarning 0.75s infinite alternate; }\n\n@-webkit-keyframes pulseWarningIns {\n  0% {\n    background-color: #F8D486; }\n  100% {\n    background-color: #F8BB86; } }\n\n@keyframes pulseWarningIns {\n  0% {\n    background-color: #F8D486; }\n  100% {\n    background-color: #F8BB86; } }\n\n.pulseWarningIns {\n  -webkit-animation: pulseWarningIns 0.75s infinite alternate;\n  animation: pulseWarningIns 0.75s infinite alternate; }\n\n@-webkit-keyframes rotate-loading {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes rotate-loading {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n/* Internet Explorer 9 has some special quirks that are fixed here */\n/* The icons are not animated. */\n/* This file is automatically merged into sweet-alert.min.js through Gulp */\n/* Error icon */\n.sweet-alert .sa-icon.sa-error .sa-line.sa-left {\n  -ms-transform: rotate(45deg) \\9; }\n\n.sweet-alert .sa-icon.sa-error .sa-line.sa-right {\n  -ms-transform: rotate(-45deg) \\9; }\n\n/* Success icon */\n.sweet-alert .sa-icon.sa-success {\n  border-color: transparent\\9; }\n\n.sweet-alert .sa-icon.sa-success .sa-line.sa-tip {\n  -ms-transform: rotate(45deg) \\9; }\n\n.sweet-alert .sa-icon.sa-success .sa-line.sa-long {\n  -ms-transform: rotate(-45deg) \\9; }\n\n/*!\n * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)\n * Copyright 2015 Daniel Cardoso <@DanielCardoso>\n * Licensed under MIT\n */\n.la-ball-fall,\n.la-ball-fall > div {\n  position: relative;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.la-ball-fall {\n  display: block;\n  font-size: 0;\n  color: #fff; }\n\n.la-ball-fall.la-dark {\n  color: #333; }\n\n.la-ball-fall > div {\n  display: inline-block;\n  float: none;\n  background-color: currentColor;\n  border: 0 solid currentColor; }\n\n.la-ball-fall {\n  width: 54px;\n  height: 18px; }\n\n.la-ball-fall > div {\n  width: 10px;\n  height: 10px;\n  margin: 4px;\n  border-radius: 100%;\n  opacity: 0;\n  -webkit-animation: ball-fall 1s ease-in-out infinite;\n  -moz-animation: ball-fall 1s ease-in-out infinite;\n  -o-animation: ball-fall 1s ease-in-out infinite;\n  animation: ball-fall 1s ease-in-out infinite; }\n\n.la-ball-fall > div:nth-child(1) {\n  -webkit-animation-delay: -200ms;\n  -moz-animation-delay: -200ms;\n  -o-animation-delay: -200ms;\n  animation-delay: -200ms; }\n\n.la-ball-fall > div:nth-child(2) {\n  -webkit-animation-delay: -100ms;\n  -moz-animation-delay: -100ms;\n  -o-animation-delay: -100ms;\n  animation-delay: -100ms; }\n\n.la-ball-fall > div:nth-child(3) {\n  -webkit-animation-delay: 0ms;\n  -moz-animation-delay: 0ms;\n  -o-animation-delay: 0ms;\n  animation-delay: 0ms; }\n\n.la-ball-fall.la-sm {\n  width: 26px;\n  height: 8px; }\n\n.la-ball-fall.la-sm > div {\n  width: 4px;\n  height: 4px;\n  margin: 2px; }\n\n.la-ball-fall.la-2x {\n  width: 108px;\n  height: 36px; }\n\n.la-ball-fall.la-2x > div {\n  width: 20px;\n  height: 20px;\n  margin: 8px; }\n\n.la-ball-fall.la-3x {\n  width: 162px;\n  height: 54px; }\n\n.la-ball-fall.la-3x > div {\n  width: 30px;\n  height: 30px;\n  margin: 12px; }\n\n/*\n * Animation\n */\n@-webkit-keyframes ball-fall {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-145%);\n    transform: translateY(-145%); }\n  10% {\n    opacity: .5; }\n  20% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  80% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  90% {\n    opacity: .5; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(145%);\n    transform: translateY(145%); } }\n\n@-moz-keyframes ball-fall {\n  0% {\n    opacity: 0;\n    -moz-transform: translateY(-145%);\n    transform: translateY(-145%); }\n  10% {\n    opacity: .5; }\n  20% {\n    opacity: 1;\n    -moz-transform: translateY(0);\n    transform: translateY(0); }\n  80% {\n    opacity: 1;\n    -moz-transform: translateY(0);\n    transform: translateY(0); }\n  90% {\n    opacity: .5; }\n  100% {\n    opacity: 0;\n    -moz-transform: translateY(145%);\n    transform: translateY(145%); } }\n\n@-o-keyframes ball-fall {\n  0% {\n    opacity: 0;\n    -o-transform: translateY(-145%);\n    transform: translateY(-145%); }\n  10% {\n    opacity: .5; }\n  20% {\n    opacity: 1;\n    -o-transform: translateY(0);\n    transform: translateY(0); }\n  80% {\n    opacity: 1;\n    -o-transform: translateY(0);\n    transform: translateY(0); }\n  90% {\n    opacity: .5; }\n  100% {\n    opacity: 0;\n    -o-transform: translateY(145%);\n    transform: translateY(145%); } }\n\n@keyframes ball-fall {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-145%);\n    -moz-transform: translateY(-145%);\n    -o-transform: translateY(-145%);\n    transform: translateY(-145%); }\n  10% {\n    opacity: .5; }\n  20% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -o-transform: translateY(0);\n    transform: translateY(0); }\n  80% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -o-transform: translateY(0);\n    transform: translateY(0); }\n  90% {\n    opacity: .5; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(145%);\n    -moz-transform: translateY(145%);\n    -o-transform: translateY(145%);\n    transform: translateY(145%); } }\n", ""]);

// exports


/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, ".loader {\n    border: 16px solid #f3f3f3;\n    /* Light grey */\n    border-top: 16px solid #3498db;\n    /* Blue */\n    border-radius: 50%;\n    width: 120px;\n    height: 120px;\n    animation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n}\n\n.dashboard-header {\n    display: flex;\n    flex: 1;\n    align-items: center;\n    margin-top:10px;\n    margin-bottom: 10px;\n}\n.flex-element{\n    display: flex\n}\n.title-wrap{\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n.fill-empty{\n    flex-grow: 1;\n    flex: 1;\n}\n.header-title{\n    margin-top: auto;\n    margin-bottom: auto;\n}\n.switcher-label{\n    padding-left: 10px;\n}", ""]);

// exports


/***/ }),

/***/ 389:
/***/ (function(module, exports) {

module.exports = function(opts) {
  return new ElementClass(opts)
}

function indexOf(arr, prop) {
  if (arr.indexOf) return arr.indexOf(prop)
  for (var i = 0, len = arr.length; i < len; i++)
    if (arr[i] === prop) return i
  return -1
}

function ElementClass(opts) {
  if (!(this instanceof ElementClass)) return new ElementClass(opts)
  var self = this
  if (!opts) opts = {}

  // similar doing instanceof HTMLElement but works in IE8
  if (opts.nodeType) opts = {el: opts}

  this.opts = opts
  this.el = opts.el || document.body
  if (typeof this.el !== 'object') this.el = document.querySelector(this.el)
}

ElementClass.prototype.add = function(className) {
  var el = this.el
  if (!el) return
  if (el.className === "") return el.className = className
  var classes = el.className.split(' ')
  if (indexOf(classes, className) > -1) return classes
  classes.push(className)
  el.className = classes.join(' ')
  return classes
}

ElementClass.prototype.remove = function(className) {
  var el = this.el
  if (!el) return
  if (el.className === "") return
  var classes = el.className.split(' ')
  var idx = indexOf(classes, className)
  if (idx > -1) classes.splice(idx, 1)
  el.className = classes.join(' ')
  return classes
}

ElementClass.prototype.has = function(className) {
  var el = this.el
  if (!el) return
  var classes = el.className.split(' ')
  return indexOf(classes, className) > -1
}

ElementClass.prototype.toggle = function(className) {
  var el = this.el
  if (!el) return
  if (this.has(className)) this.remove(className)
  else this.add(className)
}


/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property identifiers to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, props) {
  object = Object(object);
  return basePickBy(object, props, function(value, key) {
    return key in object;
  });
}

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property identifiers to pick from.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, props, predicate) {
  var index = -1,
      length = props.length,
      result = {};

  while (++index < length) {
    var key = props[index],
        value = object[key];

    if (predicate(value, key)) {
      result[key] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [props] The property identifiers to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = baseRest(function(object, props) {
  return object == null ? {} : basePick(object, arrayMap(baseFlatten(props, 1), toKey));
});

module.exports = pick;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConfigManager = function () {
    function ConfigManager(dashboard) {
        var _this = this;

        _classCallCheck(this, ConfigManager);

        this.editWidgetConfig = function (widgetId) {
            _this.currentWidgetId = widgetId;
            _this.dashboard.showWidgetConfigDialog(widgetId);
        };

        this.editTabConfig = function (rowIndex, columnIndex, tabIndex) {
            _this.currrentRowIndex = rowIndex;
            _this.currentColumnIndex = columnIndex;
            _this.currentTabIndex = tabIndex;
            _this.dashboard.showConfigureTabDialog(rowIndex, columnIndex, tabIndex);
        };

        this.getWidgetInfo = function (id) {
            var widget = _this.dashboard.widgets[id];
            var widgetType = _this.dashboard.state.widgets[id].type;
            var containerConfig = {
                title: _this.dashboard.state.widgets[id].title
            };
            return { containerConfig: containerConfig, widgetType: widgetType, widget: widget };
        };

        this.endEditWidgetConfig = function (widget, config) {
            _this.dashboard.updateWidget(widget, config);
        };

        this.save = function () {
            var _dashboard$state = _this.dashboard.state,
                widgets = _dashboard$state.widgets,
                layout = _dashboard$state.layout;

            var widgetsConfig = {};
            Object.keys(widgets).map(function (id) {
                var _widgets$id = widgets[id],
                    type = _widgets$id.type,
                    title = _widgets$id.title;

                widgetsConfig[id] = {
                    title: widgets[id].title,
                    type: widgets[id].type.name,
                    config: widgets[id].props.config
                };
            });

            var _dashboard$refs$heade = _this.dashboard.refs.header.getData(),
                title = _dashboard$refs$heade.title,
                abstract = _dashboard$refs$heade.abstract;

            var config = { title: title, abstract: abstract, config: JSON.stringify({ widgets: widgetsConfig,
                    layout: layout })
                // TODO: handle saving errors, check saving succuess before setting dashboard state.
            };_this.dashboard.save();
            saveDashboard(config);
        };

        this.dashboard = dashboard;
    }

    // TODO: remove, it is deprecated , dashboard is not single map.
    ConfigManager.prototype.getMapWidget = function getMapWidget() {
        var _this2 = this;

        var widgets = this.dashboard.state.widgets;

        var mapWidget = null;
        Object.keys(widgets).forEach(function (id) {
            if (widgets[id].type.name == "MapWidget") {
                mapWidget = _this2.dashboard.widgets[id];
                return false;
            }
        });
        return mapWidget;
    };

    ConfigManager.prototype.getMapWidgets = function getMapWidgets() {
        // get widgets form dashboard.state.layout as dashboard.state.widgets is not updated when a widget removed.
        var _dashboard$state2 = this.dashboard.state,
            layout = _dashboard$state2.layout,
            widgets = _dashboard$state2.widgets;

        var mapWidgets = {};
        layout.rows.forEach(function (row, rowIndex) {
            row.columns.forEach(function (col, colIndex) {
                col.tabs.forEach(function (tab, tabIndex) {
                    tab.widgets.forEach(function (wId, wIndex) {
                        if (widgets[wId.key].type.name == "MapWidget") {
                            mapWidgets[wId.key] = widgets[wId.key];
                        }
                    });
                });
            });
        });
        return mapWidgets;
    };

    ConfigManager.prototype.getWidget = function getWidget(widgetId) {
        // get widgets form dashboard.widget instead of dashboard.state.widgets
        // as it has whole widget object not only configuration
        return this.dashboard.widgets[widgetId];
    };

    return ConfigManager;
}();

exports.default = ConfigManager;

/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*global define:false */
/**
 * Copyright 2012-2017 Craig Campbell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Mousetrap is a simple keyboard shortcut library for Javascript with
 * no external dependencies
 *
 * @version 1.6.2
 * @url craig.is/killing/mice
 */
(function(window, document, undefined) {

    // Check if mousetrap is used inside browser, if not, return
    if (!window) {
        return;
    }

    /**
     * mapping of special keycodes to their corresponding keys
     *
     * everything in this dictionary cannot use keypress events
     * so it has to be here to map to the correct keycodes for
     * keyup/keydown events
     *
     * @type {Object}
     */
    var _MAP = {
        8: 'backspace',
        9: 'tab',
        13: 'enter',
        16: 'shift',
        17: 'ctrl',
        18: 'alt',
        20: 'capslock',
        27: 'esc',
        32: 'space',
        33: 'pageup',
        34: 'pagedown',
        35: 'end',
        36: 'home',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        45: 'ins',
        46: 'del',
        91: 'meta',
        93: 'meta',
        224: 'meta'
    };

    /**
     * mapping for special characters so they can support
     *
     * this dictionary is only used incase you want to bind a
     * keyup or keydown event to one of these keys
     *
     * @type {Object}
     */
    var _KEYCODE_MAP = {
        106: '*',
        107: '+',
        109: '-',
        110: '.',
        111 : '/',
        186: ';',
        187: '=',
        188: ',',
        189: '-',
        190: '.',
        191: '/',
        192: '`',
        219: '[',
        220: '\\',
        221: ']',
        222: '\''
    };

    /**
     * this is a mapping of keys that require shift on a US keypad
     * back to the non shift equivelents
     *
     * this is so you can use keyup events with these keys
     *
     * note that this will only work reliably on US keyboards
     *
     * @type {Object}
     */
    var _SHIFT_MAP = {
        '~': '`',
        '!': '1',
        '@': '2',
        '#': '3',
        '$': '4',
        '%': '5',
        '^': '6',
        '&': '7',
        '*': '8',
        '(': '9',
        ')': '0',
        '_': '-',
        '+': '=',
        ':': ';',
        '\"': '\'',
        '<': ',',
        '>': '.',
        '?': '/',
        '|': '\\'
    };

    /**
     * this is a list of special strings you can use to map
     * to modifier keys when you specify your keyboard shortcuts
     *
     * @type {Object}
     */
    var _SPECIAL_ALIASES = {
        'option': 'alt',
        'command': 'meta',
        'return': 'enter',
        'escape': 'esc',
        'plus': '+',
        'mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl'
    };

    /**
     * variable to store the flipped version of _MAP from above
     * needed to check if we should use keypress or not when no action
     * is specified
     *
     * @type {Object|undefined}
     */
    var _REVERSE_MAP;

    /**
     * loop through the f keys, f1 to f19 and add them to the map
     * programatically
     */
    for (var i = 1; i < 20; ++i) {
        _MAP[111 + i] = 'f' + i;
    }

    /**
     * loop through to map numbers on the numeric keypad
     */
    for (i = 0; i <= 9; ++i) {

        // This needs to use a string cause otherwise since 0 is falsey
        // mousetrap will never fire for numpad 0 pressed as part of a keydown
        // event.
        //
        // @see https://github.com/ccampbell/mousetrap/pull/258
        _MAP[i + 96] = i.toString();
    }

    /**
     * cross browser add event method
     *
     * @param {Element|HTMLDocument} object
     * @param {string} type
     * @param {Function} callback
     * @returns void
     */
    function _addEvent(object, type, callback) {
        if (object.addEventListener) {
            object.addEventListener(type, callback, false);
            return;
        }

        object.attachEvent('on' + type, callback);
    }

    /**
     * takes the event and returns the key character
     *
     * @param {Event} e
     * @return {string}
     */
    function _characterFromEvent(e) {

        // for keypress events we should return the character as is
        if (e.type == 'keypress') {
            var character = String.fromCharCode(e.which);

            // if the shift key is not pressed then it is safe to assume
            // that we want the character to be lowercase.  this means if
            // you accidentally have caps lock on then your key bindings
            // will continue to work
            //
            // the only side effect that might not be desired is if you
            // bind something like 'A' cause you want to trigger an
            // event when capital A is pressed caps lock will no longer
            // trigger the event.  shift+a will though.
            if (!e.shiftKey) {
                character = character.toLowerCase();
            }

            return character;
        }

        // for non keypress events the special maps are needed
        if (_MAP[e.which]) {
            return _MAP[e.which];
        }

        if (_KEYCODE_MAP[e.which]) {
            return _KEYCODE_MAP[e.which];
        }

        // if it is not in the special map

        // with keydown and keyup events the character seems to always
        // come in as an uppercase character whether you are pressing shift
        // or not.  we should make sure it is always lowercase for comparisons
        return String.fromCharCode(e.which).toLowerCase();
    }

    /**
     * checks if two arrays are equal
     *
     * @param {Array} modifiers1
     * @param {Array} modifiers2
     * @returns {boolean}
     */
    function _modifiersMatch(modifiers1, modifiers2) {
        return modifiers1.sort().join(',') === modifiers2.sort().join(',');
    }

    /**
     * takes a key event and figures out what the modifiers are
     *
     * @param {Event} e
     * @returns {Array}
     */
    function _eventModifiers(e) {
        var modifiers = [];

        if (e.shiftKey) {
            modifiers.push('shift');
        }

        if (e.altKey) {
            modifiers.push('alt');
        }

        if (e.ctrlKey) {
            modifiers.push('ctrl');
        }

        if (e.metaKey) {
            modifiers.push('meta');
        }

        return modifiers;
    }

    /**
     * prevents default for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _preventDefault(e) {
        if (e.preventDefault) {
            e.preventDefault();
            return;
        }

        e.returnValue = false;
    }

    /**
     * stops propogation for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _stopPropagation(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
            return;
        }

        e.cancelBubble = true;
    }

    /**
     * determines if the keycode specified is a modifier key or not
     *
     * @param {string} key
     * @returns {boolean}
     */
    function _isModifier(key) {
        return key == 'shift' || key == 'ctrl' || key == 'alt' || key == 'meta';
    }

    /**
     * reverses the map lookup so that we can look for specific keys
     * to see what can and can't use keypress
     *
     * @return {Object}
     */
    function _getReverseMap() {
        if (!_REVERSE_MAP) {
            _REVERSE_MAP = {};
            for (var key in _MAP) {

                // pull out the numeric keypad from here cause keypress should
                // be able to detect the keys from the character
                if (key > 95 && key < 112) {
                    continue;
                }

                if (_MAP.hasOwnProperty(key)) {
                    _REVERSE_MAP[_MAP[key]] = key;
                }
            }
        }
        return _REVERSE_MAP;
    }

    /**
     * picks the best action based on the key combination
     *
     * @param {string} key - character for key
     * @param {Array} modifiers
     * @param {string=} action passed in
     */
    function _pickBestAction(key, modifiers, action) {

        // if no action was picked in we should try to pick the one
        // that we think would work best for this key
        if (!action) {
            action = _getReverseMap()[key] ? 'keydown' : 'keypress';
        }

        // modifier keys don't work as expected with keypress,
        // switch to keydown
        if (action == 'keypress' && modifiers.length) {
            action = 'keydown';
        }

        return action;
    }

    /**
     * Converts from a string key combination to an array
     *
     * @param  {string} combination like "command+shift+l"
     * @return {Array}
     */
    function _keysFromString(combination) {
        if (combination === '+') {
            return ['+'];
        }

        combination = combination.replace(/\+{2}/g, '+plus');
        return combination.split('+');
    }

    /**
     * Gets info for a specific key combination
     *
     * @param  {string} combination key combination ("command+s" or "a" or "*")
     * @param  {string=} action
     * @returns {Object}
     */
    function _getKeyInfo(combination, action) {
        var keys;
        var key;
        var i;
        var modifiers = [];

        // take the keys from this pattern and figure out what the actual
        // pattern is all about
        keys = _keysFromString(combination);

        for (i = 0; i < keys.length; ++i) {
            key = keys[i];

            // normalize key names
            if (_SPECIAL_ALIASES[key]) {
                key = _SPECIAL_ALIASES[key];
            }

            // if this is not a keypress event then we should
            // be smart about using shift keys
            // this will only work for US keyboards however
            if (action && action != 'keypress' && _SHIFT_MAP[key]) {
                key = _SHIFT_MAP[key];
                modifiers.push('shift');
            }

            // if this key is a modifier then add it to the list of modifiers
            if (_isModifier(key)) {
                modifiers.push(key);
            }
        }

        // depending on what the key combination is
        // we will try to pick the best event for it
        action = _pickBestAction(key, modifiers, action);

        return {
            key: key,
            modifiers: modifiers,
            action: action
        };
    }

    function _belongsTo(element, ancestor) {
        if (element === null || element === document) {
            return false;
        }

        if (element === ancestor) {
            return true;
        }

        return _belongsTo(element.parentNode, ancestor);
    }

    function Mousetrap(targetElement) {
        var self = this;

        targetElement = targetElement || document;

        if (!(self instanceof Mousetrap)) {
            return new Mousetrap(targetElement);
        }

        /**
         * element to attach key events to
         *
         * @type {Element}
         */
        self.target = targetElement;

        /**
         * a list of all the callbacks setup via Mousetrap.bind()
         *
         * @type {Object}
         */
        self._callbacks = {};

        /**
         * direct map of string combinations to callbacks used for trigger()
         *
         * @type {Object}
         */
        self._directMap = {};

        /**
         * keeps track of what level each sequence is at since multiple
         * sequences can start out with the same sequence
         *
         * @type {Object}
         */
        var _sequenceLevels = {};

        /**
         * variable to store the setTimeout call
         *
         * @type {null|number}
         */
        var _resetTimer;

        /**
         * temporary state where we will ignore the next keyup
         *
         * @type {boolean|string}
         */
        var _ignoreNextKeyup = false;

        /**
         * temporary state where we will ignore the next keypress
         *
         * @type {boolean}
         */
        var _ignoreNextKeypress = false;

        /**
         * are we currently inside of a sequence?
         * type of action ("keyup" or "keydown" or "keypress") or false
         *
         * @type {boolean|string}
         */
        var _nextExpectedAction = false;

        /**
         * resets all sequence counters except for the ones passed in
         *
         * @param {Object} doNotReset
         * @returns void
         */
        function _resetSequences(doNotReset) {
            doNotReset = doNotReset || {};

            var activeSequences = false,
                key;

            for (key in _sequenceLevels) {
                if (doNotReset[key]) {
                    activeSequences = true;
                    continue;
                }
                _sequenceLevels[key] = 0;
            }

            if (!activeSequences) {
                _nextExpectedAction = false;
            }
        }

        /**
         * finds all callbacks that match based on the keycode, modifiers,
         * and action
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event|Object} e
         * @param {string=} sequenceName - name of the sequence we are looking for
         * @param {string=} combination
         * @param {number=} level
         * @returns {Array}
         */
        function _getMatches(character, modifiers, e, sequenceName, combination, level) {
            var i;
            var callback;
            var matches = [];
            var action = e.type;

            // if there are no events related to this keycode
            if (!self._callbacks[character]) {
                return [];
            }

            // if a modifier key is coming up on its own we should allow it
            if (action == 'keyup' && _isModifier(character)) {
                modifiers = [character];
            }

            // loop through all callbacks for the key that was pressed
            // and see if any of them match
            for (i = 0; i < self._callbacks[character].length; ++i) {
                callback = self._callbacks[character][i];

                // if a sequence name is not specified, but this is a sequence at
                // the wrong level then move onto the next match
                if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
                    continue;
                }

                // if the action we are looking for doesn't match the action we got
                // then we should keep going
                if (action != callback.action) {
                    continue;
                }

                // if this is a keypress event and the meta key and control key
                // are not pressed that means that we need to only look at the
                // character, otherwise check the modifiers as well
                //
                // chrome will not fire a keypress if meta or control is down
                // safari will fire a keypress if meta or meta+shift is down
                // firefox will fire a keypress if meta or control is down
                if ((action == 'keypress' && !e.metaKey && !e.ctrlKey) || _modifiersMatch(modifiers, callback.modifiers)) {

                    // when you bind a combination or sequence a second time it
                    // should overwrite the first one.  if a sequenceName or
                    // combination is specified in this call it does just that
                    //
                    // @todo make deleting its own method?
                    var deleteCombo = !sequenceName && callback.combo == combination;
                    var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
                    if (deleteCombo || deleteSequence) {
                        self._callbacks[character].splice(i, 1);
                    }

                    matches.push(callback);
                }
            }

            return matches;
        }

        /**
         * actually calls the callback function
         *
         * if your callback function returns false this will use the jquery
         * convention - prevent default and stop propogation on the event
         *
         * @param {Function} callback
         * @param {Event} e
         * @returns void
         */
        function _fireCallback(callback, e, combo, sequence) {

            // if this event should not happen stop here
            if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
                return;
            }

            if (callback(e, combo) === false) {
                _preventDefault(e);
                _stopPropagation(e);
            }
        }

        /**
         * handles a character key event
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event} e
         * @returns void
         */
        self._handleKey = function(character, modifiers, e) {
            var callbacks = _getMatches(character, modifiers, e);
            var i;
            var doNotReset = {};
            var maxLevel = 0;
            var processedSequenceCallback = false;

            // Calculate the maxLevel for sequences so we can only execute the longest callback sequence
            for (i = 0; i < callbacks.length; ++i) {
                if (callbacks[i].seq) {
                    maxLevel = Math.max(maxLevel, callbacks[i].level);
                }
            }

            // loop through matching callbacks for this key event
            for (i = 0; i < callbacks.length; ++i) {

                // fire for all sequence callbacks
                // this is because if for example you have multiple sequences
                // bound such as "g i" and "g t" they both need to fire the
                // callback for matching g cause otherwise you can only ever
                // match the first one
                if (callbacks[i].seq) {

                    // only fire callbacks for the maxLevel to prevent
                    // subsequences from also firing
                    //
                    // for example 'a option b' should not cause 'option b' to fire
                    // even though 'option b' is part of the other sequence
                    //
                    // any sequences that do not match here will be discarded
                    // below by the _resetSequences call
                    if (callbacks[i].level != maxLevel) {
                        continue;
                    }

                    processedSequenceCallback = true;

                    // keep a list of which sequences were matches for later
                    doNotReset[callbacks[i].seq] = 1;
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);
                    continue;
                }

                // if there were no sequence matches but we are still here
                // that means this is a regular match so we should fire that
                if (!processedSequenceCallback) {
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
                }
            }

            // if the key you pressed matches the type of sequence without
            // being a modifier (ie "keyup" or "keypress") then we should
            // reset all sequences that were not matched by this event
            //
            // this is so, for example, if you have the sequence "h a t" and you
            // type "h e a r t" it does not match.  in this case the "e" will
            // cause the sequence to reset
            //
            // modifier keys are ignored because you can have a sequence
            // that contains modifiers such as "enter ctrl+space" and in most
            // cases the modifier key will be pressed before the next key
            //
            // also if you have a sequence such as "ctrl+b a" then pressing the
            // "b" key will trigger a "keypress" and a "keydown"
            //
            // the "keydown" is expected when there is a modifier, but the
            // "keypress" ends up matching the _nextExpectedAction since it occurs
            // after and that causes the sequence to reset
            //
            // we ignore keypresses in a sequence that directly follow a keydown
            // for the same character
            var ignoreThisKeypress = e.type == 'keypress' && _ignoreNextKeypress;
            if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
                _resetSequences(doNotReset);
            }

            _ignoreNextKeypress = processedSequenceCallback && e.type == 'keydown';
        };

        /**
         * handles a keydown event
         *
         * @param {Event} e
         * @returns void
         */
        function _handleKeyEvent(e) {

            // normalize e.which for key events
            // @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
            if (typeof e.which !== 'number') {
                e.which = e.keyCode;
            }

            var character = _characterFromEvent(e);

            // no character found then stop
            if (!character) {
                return;
            }

            // need to use === for the character check because the character can be 0
            if (e.type == 'keyup' && _ignoreNextKeyup === character) {
                _ignoreNextKeyup = false;
                return;
            }

            self.handleKey(character, _eventModifiers(e), e);
        }

        /**
         * called to set a 1 second timeout on the specified sequence
         *
         * this is so after each key press in the sequence you have 1 second
         * to press the next key before you have to start over
         *
         * @returns void
         */
        function _resetSequenceTimer() {
            clearTimeout(_resetTimer);
            _resetTimer = setTimeout(_resetSequences, 1000);
        }

        /**
         * binds a key sequence to an event
         *
         * @param {string} combo - combo specified in bind call
         * @param {Array} keys
         * @param {Function} callback
         * @param {string=} action
         * @returns void
         */
        function _bindSequence(combo, keys, callback, action) {

            // start off by adding a sequence level record for this combination
            // and setting the level to 0
            _sequenceLevels[combo] = 0;

            /**
             * callback to increase the sequence level for this sequence and reset
             * all other sequences that were active
             *
             * @param {string} nextAction
             * @returns {Function}
             */
            function _increaseSequence(nextAction) {
                return function() {
                    _nextExpectedAction = nextAction;
                    ++_sequenceLevels[combo];
                    _resetSequenceTimer();
                };
            }

            /**
             * wraps the specified callback inside of another function in order
             * to reset all sequence counters as soon as this sequence is done
             *
             * @param {Event} e
             * @returns void
             */
            function _callbackAndReset(e) {
                _fireCallback(callback, e, combo);

                // we should ignore the next key up if the action is key down
                // or keypress.  this is so if you finish a sequence and
                // release the key the final key will not trigger a keyup
                if (action !== 'keyup') {
                    _ignoreNextKeyup = _characterFromEvent(e);
                }

                // weird race condition if a sequence ends with the key
                // another sequence begins with
                setTimeout(_resetSequences, 10);
            }

            // loop through keys one at a time and bind the appropriate callback
            // function.  for any key leading up to the final one it should
            // increase the sequence. after the final, it should reset all sequences
            //
            // if an action is specified in the original bind call then that will
            // be used throughout.  otherwise we will pass the action that the
            // next key in the sequence should match.  this allows a sequence
            // to mix and match keypress and keydown events depending on which
            // ones are better suited to the key provided
            for (var i = 0; i < keys.length; ++i) {
                var isFinal = i + 1 === keys.length;
                var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i + 1]).action);
                _bindSingle(keys[i], wrappedCallback, action, combo, i);
            }
        }

        /**
         * binds a single keyboard combination
         *
         * @param {string} combination
         * @param {Function} callback
         * @param {string=} action
         * @param {string=} sequenceName - name of sequence if part of sequence
         * @param {number=} level - what part of the sequence the command is
         * @returns void
         */
        function _bindSingle(combination, callback, action, sequenceName, level) {

            // store a direct mapped reference for use with Mousetrap.trigger
            self._directMap[combination + ':' + action] = callback;

            // make sure multiple spaces in a row become a single space
            combination = combination.replace(/\s+/g, ' ');

            var sequence = combination.split(' ');
            var info;

            // if this pattern is a sequence of keys then run through this method
            // to reprocess each pattern one key at a time
            if (sequence.length > 1) {
                _bindSequence(combination, sequence, callback, action);
                return;
            }

            info = _getKeyInfo(combination, action);

            // make sure to initialize array if this is the first time
            // a callback is added for this key
            self._callbacks[info.key] = self._callbacks[info.key] || [];

            // remove an existing match if there is one
            _getMatches(info.key, info.modifiers, {type: info.action}, sequenceName, combination, level);

            // add this call back to the array
            // if it is a sequence put it at the beginning
            // if not put it at the end
            //
            // this is important because the way these are processed expects
            // the sequence ones to come first
            self._callbacks[info.key][sequenceName ? 'unshift' : 'push']({
                callback: callback,
                modifiers: info.modifiers,
                action: info.action,
                seq: sequenceName,
                level: level,
                combo: combination
            });
        }

        /**
         * binds multiple combinations to the same callback
         *
         * @param {Array} combinations
         * @param {Function} callback
         * @param {string|undefined} action
         * @returns void
         */
        self._bindMultiple = function(combinations, callback, action) {
            for (var i = 0; i < combinations.length; ++i) {
                _bindSingle(combinations[i], callback, action);
            }
        };

        // start!
        _addEvent(targetElement, 'keypress', _handleKeyEvent);
        _addEvent(targetElement, 'keydown', _handleKeyEvent);
        _addEvent(targetElement, 'keyup', _handleKeyEvent);
    }

    /**
     * binds an event to mousetrap
     *
     * can be a single key, a combination of keys separated with +,
     * an array of keys, or a sequence of keys separated by spaces
     *
     * be sure to list the modifier keys first to make sure that the
     * correct key ends up getting bound (the last key in the pattern)
     *
     * @param {string|Array} keys
     * @param {Function} callback
     * @param {string=} action - 'keypress', 'keydown', or 'keyup'
     * @returns void
     */
    Mousetrap.prototype.bind = function(keys, callback, action) {
        var self = this;
        keys = keys instanceof Array ? keys : [keys];
        self._bindMultiple.call(self, keys, callback, action);
        return self;
    };

    /**
     * unbinds an event to mousetrap
     *
     * the unbinding sets the callback function of the specified key combo
     * to an empty function and deletes the corresponding key in the
     * _directMap dict.
     *
     * TODO: actually remove this from the _callbacks dictionary instead
     * of binding an empty function
     *
     * the keycombo+action has to be exactly the same as
     * it was defined in the bind method
     *
     * @param {string|Array} keys
     * @param {string} action
     * @returns void
     */
    Mousetrap.prototype.unbind = function(keys, action) {
        var self = this;
        return self.bind.call(self, keys, function() {}, action);
    };

    /**
     * triggers an event that has already been bound
     *
     * @param {string} keys
     * @param {string=} action
     * @returns void
     */
    Mousetrap.prototype.trigger = function(keys, action) {
        var self = this;
        if (self._directMap[keys + ':' + action]) {
            self._directMap[keys + ':' + action]({}, keys);
        }
        return self;
    };

    /**
     * resets the library back to its initial state.  this is useful
     * if you want to clear out the current keyboard shortcuts and bind
     * new ones - for example if you switch to another page
     *
     * @returns void
     */
    Mousetrap.prototype.reset = function() {
        var self = this;
        self._callbacks = {};
        self._directMap = {};
        return self;
    };

    /**
     * should we stop this event before firing off callbacks
     *
     * @param {Event} e
     * @param {Element} element
     * @return {boolean}
     */
    Mousetrap.prototype.stopCallback = function(e, element) {
        var self = this;

        // if the element has the class "mousetrap" then no need to stop
        if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
            return false;
        }

        if (_belongsTo(element, self.target)) {
            return false;
        }

        // stop for input, select, and textarea
        return element.tagName == 'INPUT' || element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || element.isContentEditable;
    };

    /**
     * exposes _handleKey publicly so it can be overwritten by extensions
     */
    Mousetrap.prototype.handleKey = function() {
        var self = this;
        return self._handleKey.apply(self, arguments);
    };

    /**
     * allow custom key mappings
     */
    Mousetrap.addKeycodes = function(object) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                _MAP[key] = object[key];
            }
        }
        _REVERSE_MAP = null;
    };

    /**
     * Init the global mousetrap functions
     *
     * This method is needed to allow the global mousetrap functions to work
     * now that mousetrap is a constructor function.
     */
    Mousetrap.init = function() {
        var documentMousetrap = Mousetrap(document);
        for (var method in documentMousetrap) {
            if (method.charAt(0) !== '_') {
                Mousetrap[method] = (function(method) {
                    return function() {
                        return documentMousetrap[method].apply(documentMousetrap, arguments);
                    };
                } (method));
            }
        }
    };

    Mousetrap.init();

    // expose mousetrap to the global object
    window.Mousetrap = Mousetrap;

    // expose as a common js module
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Mousetrap;
    }

    // expose mousetrap as an AMD module
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
            return Mousetrap;
        }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
}) (typeof window !== 'undefined' ? window : null, typeof  window !== 'undefined' ? document : null);


/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?module.exports=t(__webpack_require__(1),__webpack_require__(20)):"function"==typeof define&&define.amd?define("dazzle",["react","react-dom"],t):"object"==typeof exports?exports.dazzle=t(require("react"),require("react-dom")):e.dazzle=t(e.react,e["react-dom"])}(window,function(e,t){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=59)}([function(t,n){t.exports=e},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,a,i,u){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,o,a,i,u],l=0;(c=new Error(t.replace(/%s/g,function(){return s[l++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}},function(e,t,n){e.exports=n(62)()},function(e,t,n){var r=n(9),o=n(71),a=n(6),i="[object Object]",u=Function.prototype,c=Object.prototype,s=u.toString,l=c.hasOwnProperty,f=s.call(Object);e.exports=function(e){if(!a(e)||r(e)!=i)return!1;var t=o(e);if(null===t)return!0;var n=l.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&s.call(n)==f}},function(e,t){var n=Array.isArray;e.exports=n},function(e,t,n){var r=n(34),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t,n){var r=n(41),o=n(107),a=n(109);e.exports=function(e,t){return a(o(e,t,r),e+"")}},function(e,t,n){var r=n(19),o=n(69),a=n(70),i="[object Null]",u="[object Undefined]",c=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?u:i:c&&c in Object(e)?o(e):a(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.END_DRAG=t.DROP=t.HOVER=t.PUBLISH_DRAG_SOURCE=t.BEGIN_DRAG=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.beginDrag=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{publishSource:!0,clientOffset:null},n=t.publishSource,r=t.clientOffset,u=t.getSourceClientOffset;(0,o.default)((0,a.default)(e),"Expected sourceIds to be an array.");var c=this.getMonitor(),l=this.getRegistry();(0,o.default)(!c.isDragging(),"Cannot call beginDrag while dragging.");for(var f=0;f<e.length;f++)(0,o.default)(l.getSource(e[f]),"Expected sourceIds to be registered.");for(var d=null,p=e.length-1;p>=0;p--)if(c.canDragSource(e[p])){d=e[p];break}if(null===d)return;var h=null;r&&((0,o.default)("function"==typeof u,"When clientOffset is provided, getSourceClientOffset must be a function."),h=u(d));var g=l.getSource(d).beginDrag(c,d);(0,o.default)((0,i.default)(g),"Item must be an object."),l.pinSource(d);var v=l.getSourceType(d);return{type:s,itemType:v,item:g,sourceId:d,clientOffset:r,sourceClientOffset:h,isSourcePublic:n}},t.publishDragSource=function(){if(!this.getMonitor().isDragging())return;return{type:l}},t.hover=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).clientOffset,n=void 0===t?null:t;(0,o.default)((0,a.default)(e),"Expected targetIds to be an array.");var r=e.slice(0),i=this.getMonitor(),c=this.getRegistry();(0,o.default)(i.isDragging(),"Cannot call hover while not dragging."),(0,o.default)(!i.didDrop(),"Cannot call hover after drop.");for(var s=0;s<r.length;s++){var l=r[s];(0,o.default)(r.lastIndexOf(l)===s,"Expected targetIds to be unique in the passed array.");var d=c.getTarget(l);(0,o.default)(d,"Expected targetIds to be registered.")}for(var p=i.getItemType(),h=r.length-1;h>=0;h--){var g=r[h],v=c.getTargetType(g);(0,u.default)(v,p)||r.splice(h,1)}for(var y=0;y<r.length;y++){var b=r[y],m=c.getTarget(b);m.hover(i,b)}return{type:f,targetIds:r,clientOffset:n}},t.drop=function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this.getMonitor(),a=this.getRegistry();(0,o.default)(n.isDragging(),"Cannot call drop while not dragging."),(0,o.default)(!n.didDrop(),"Cannot call drop twice during one drag operation.");var u=n.getTargetIds().filter(n.canDropOnTarget,n);u.reverse(),u.forEach(function(u,c){var s=a.getTarget(u),l=s.drop(n,u);(0,o.default)(void 0===l||(0,i.default)(l),"Drop result must either be an object or undefined."),void 0===l&&(l=0===c?{}:n.getDropResult()),e.store.dispatch({type:d,dropResult:r({},t,l)})})},t.endDrag=function(){var e=this.getMonitor(),t=this.getRegistry();(0,o.default)(e.isDragging(),"Cannot call endDrag while not dragging.");var n=e.getSourceId();return t.getSource(n,!0).endDrag(e,n),t.unpinSource(),{type:p}};var o=c(n(1)),a=c(n(4)),i=c(n(7)),u=c(n(36));function c(e){return e&&e.__esModule?e:{default:e}}var s=t.BEGIN_DRAG="dnd-core/BEGIN_DRAG",l=t.PUBLISH_DRAG_SOURCE="dnd-core/PUBLISH_DRAG_SOURCE",f=t.HOVER="dnd-core/HOVER",d=t.DROP="dnd-core/DROP",p=t.END_DRAG="dnd-core/END_DRAG"},function(e,t,n){var r=n(12)(Object,"create");e.exports=r},function(e,t,n){var r=n(80),o=n(84);e.exports=function(e,t){var n=o(e,t);return r(n)?n:void 0}},function(e,t,n){var r=n(21);e.exports=function(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n;return-1}},function(e,t,n){var r=n(97);e.exports=function(e,t){var n=e.__data__;return r(t)?n["string"==typeof t?"string":"hash"]:n.map}},function(e,t,n){var r=n(27),o=n(6);e.exports=function(e){return o(e)&&r(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addSource=function(e){return{type:r,sourceId:e}},t.addTarget=function(e){return{type:o,targetId:e}},t.removeSource=function(e){return{type:a,sourceId:e}},t.removeTarget=function(e){return{type:i,targetId:e}};var r=t.ADD_SOURCE="dnd-core/ADD_SOURCE",o=t.ADD_TARGET="dnd-core/ADD_TARGET",a=t.REMOVE_SOURCE="dnd-core/REMOVE_SOURCE",i=t.REMOVE_TARGET="dnd-core/REMOVE_TARGET"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(33);Object.defineProperty(t,"DragDropContext",{enumerable:!0,get:function(){return c(r).default}});var o=n(135);Object.defineProperty(t,"DragDropContextProvider",{enumerable:!0,get:function(){return c(o).default}});var a=n(136);Object.defineProperty(t,"DragLayer",{enumerable:!0,get:function(){return c(a).default}});var i=n(137);Object.defineProperty(t,"DragSource",{enumerable:!0,get:function(){return c(i).default}});var u=n(147);function c(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"DropTarget",{enumerable:!0,get:function(){return c(u).default}})},function(e,t,n){var r=n(5).Symbol;e.exports=r},function(e,t,n){var r=n(39),o=n(101),a=n(102);function i(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new r;++t<n;)this.add(e[t])}i.prototype.add=i.prototype.push=o,i.prototype.has=a,e.exports=i},function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},function(e,t,n){var r=n(103);e.exports=function(e,t){return!(null==e||!e.length)&&r(e,t,0)>-1}},function(e,t){e.exports=function(e,t,n){for(var r=-1,o=null==e?0:e.length;++r<o;)if(n(t,e[r]))return!0;return!1}},function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},function(e,t){e.exports=function(e){return function(t){return e(t)}}},function(e,t){e.exports=function(e,t){return e.has(t)}},function(e,t,n){var r=n(40),o=n(42);e.exports=function(e){return null!=e&&o(e.length)&&!r(e)}},function(e,t,n){e.exports=function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,r=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,a=Object.getOwnPropertyDescriptor,i=Object.getPrototypeOf,u=i&&i(Object);return function c(s,l,f){if("string"!=typeof l){if(u){var d=i(l);d&&d!==u&&c(s,d,f)}var p=r(l);o&&(p=p.concat(o(l)));for(var h=0;h<p.length;++h){var g=p[h];if(!(e[g]||t[g]||f&&f[g])){var v=a(l,g);try{n(s,g,v)}catch(e){}}}return s}return s}}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=Object.prototype.hasOwnProperty,a=0;a<n.length;a+=1){if(!o.call(t,n[a])||e[n[a]]!==t[n[a]])return!1;var i=e[n[a]],u=t[n[a]];if(i!==u)return!1}return!0}},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){return Boolean(e&&"function"==typeof e.dispose)},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.FILE="__NATIVE_FILE__",t.URL="__NATIVE_URL__",t.TEXT="__NATIVE_TEXT__"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addWidget=u,t.removeWidget=c,t.moveWidget=function(e,t,n,r){return u(c(e,t.rowIndex,t.columnIndex,t.tabIndex,t.widgetIndex),n.rowIndex,n.columnIndex,n.tabIndex,r)},t.sortWidget=function(e,t,n,r){return(0,a.default)(e,{rows:i({},t.rowIndex,{columns:i({},t.columnIndex,{tabs:i({},t.tabIndex,{widgets:{$splice:[[t.widgetIndex,1],[n.widgetIndex,0,{key:r}]]}})})})})};var r,o=n(178),a=(r=o)&&r.__esModule?r:{default:r};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t,n,r,o){return(0,a.default)(e,{rows:i({},t,{columns:i({},n,{tabs:i({},r,{widgets:{$push:[{key:o}]}})})})})}function c(e,t,n,r,o){return(0,a.default)(e,{rows:i({},t,{columns:i({},n,{tabs:i({},r,{widgets:{$splice:[[o,1]]}})})})})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unpackBackendForEs5Users=t.createChildContext=t.CHILD_CONTEXT_TYPES=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){d.default.apply(void 0,["DragDropContext","backend"].concat(Array.prototype.slice.call(arguments)));var t=v(e),n=g(t);return function(e){var t,a,c=e.displayName||e.name||"Component",s=(a=t=function(t){function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,t),o(a,[{key:"getDecoratedComponentInstance",value:function(){return(0,l.default)(this.child,"In order to access an instance of the decorated component it can not be a stateless component."),this.child}},{key:"getManager",value:function(){return n.dragDropManager}},{key:"getChildContext",value:function(){return n}},{key:"render",value:function(){var t=this;return u.default.createElement(e,r({},this.props,{ref:function(e){t.child=e}}))}}]),a}(i.Component),t.DecoratedComponent=e,t.displayName="DragDropContext("+c+")",t.childContextTypes=h,a);return(0,f.default)(s,e)}};var i=n(0),u=p(i),c=p(n(2)),s=n(66),l=p(n(1)),f=p(n(28)),d=p(n(17));function p(e){return e&&e.__esModule?e:{default:e}}var h=t.CHILD_CONTEXT_TYPES={dragDropManager:c.default.object.isRequired},g=t.createChildContext=function(e,t){return{dragDropManager:new s.DragDropManager(e,t)}},v=t.unpackBackendForEs5Users=function(e){var t=e;return"object"===(void 0===t?"undefined":a(t))&&"function"==typeof t.default&&(t=t.default),(0,l.default)("function"==typeof t,"Expected the backend to be a function or an ES6 module exporting a default function. Read more: http://react-dnd.github.io/react-dnd/docs-drag-drop-context.html"),t}},function(e,t){var n="object"==typeof global&&global&&global.Object===Object&&global;e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments[1];switch(t.type){case o.BEGIN_DRAG:return{initialSourceClientOffset:t.sourceClientOffset,initialClientOffset:t.clientOffset,clientOffset:t.clientOffset};case o.HOVER:return function(e,t){if(e===t)return!0;return e&&t&&e.x===t.x&&e.y===t.y}(e.clientOffset,t.clientOffset)?e:r({},e,{clientOffset:t.clientOffset});case o.END_DRAG:case o.DROP:return a;default:return e}},t.getSourceClientOffset=function(e){var t=e.clientOffset,n=e.initialClientOffset,r=e.initialSourceClientOffset;if(!t||!n||!r)return null;return{x:t.x+r.x-n.x,y:t.y+r.y-n.y}},t.getDifferenceFromInitialOffset=function(e){var t=e.clientOffset,n=e.initialClientOffset;if(!t||!n)return null;return{x:t.x-n.x,y:t.y-n.y}};var o=n(10),a={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return(0,a.default)(e)?e.some(function(e){return e===t}):e===t};var r,o=n(4),a=(r=o)&&r.__esModule?r:{default:r}},function(e,t,n){var r=n(38),o=n(8),a=n(15),i=o(function(e,t){return a(e)?r(e,t):[]});e.exports=i},function(e,t,n){var r=n(20),o=n(22),a=n(23),i=n(24),u=n(25),c=n(26),s=200;e.exports=function(e,t,n,l){var f=-1,d=o,p=!0,h=e.length,g=[],v=t.length;if(!h)return g;n&&(t=i(t,u(n))),l?(d=a,p=!1):t.length>=s&&(d=c,p=!1,t=new r(t));e:for(;++f<h;){var y=e[f],b=null==n?y:n(y);if(y=l||0!==y?y:0,p&&b==b){for(var m=v;m--;)if(t[m]===b)continue e;g.push(y)}else d(t,b,l)||g.push(y)}return g}},function(e,t,n){var r=n(77),o=n(96),a=n(98),i=n(99),u=n(100);function c(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=u,e.exports=c},function(e,t,n){var r=n(9),o=n(7),a="[object AsyncFunction]",i="[object Function]",u="[object GeneratorFunction]",c="[object Proxy]";e.exports=function(e){if(!o(e))return!1;var t=r(e);return t==i||t==u||t==a||t==c}},function(e,t){e.exports=function(e){return e}},function(e,t){var n=9007199254740991;e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments[1],t=arguments[2];switch(e.type){case a.HOVER:break;case i.ADD_SOURCE:case i.ADD_TARGET:case i.REMOVE_TARGET:case i.REMOVE_SOURCE:return c;case a.BEGIN_DRAG:case a.PUBLISH_DRAG_SOURCE:case a.END_DRAG:case a.DROP:default:return s}var n=e.targetIds,o=t.targetIds,u=(0,r.default)(n,o),l=!1;if(0===u.length){for(var f=0;f<n.length;f++)if(n[f]!==o[f]){l=!0;break}}else l=!0;if(!l)return c;var d=o[o.length-1],p=n[n.length-1];d!==p&&(d&&u.push(d),p&&u.push(p));return u},t.areDirty=function(e,t){if(e===c)return!1;if(e===s||void 0===t)return!0;return(0,o.default)(t,e).length>0};var r=u(n(115)),o=u(n(123)),a=n(10),i=n(16);function u(e){return e&&e.__esModule?e:{default:e}}var c=[],s=[]},function(e,t,n){var r=n(118),o=n(119);e.exports=function e(t,n,a,i,u){var c=-1,s=t.length;for(a||(a=o),u||(u=[]);++c<s;){var l=t[c];n>0&&a(l)?n>1?e(l,n-1,a,i,u):r(u,l):i||(u[u.length]=l)}return u}},function(e,t,n){var r=n(120),o=n(6),a=Object.prototype,i=a.hasOwnProperty,u=a.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(e){return o(e)&&i.call(e,"callee")&&!u.call(e,"callee")};e.exports=c},function(e,t,n){var r=n(20),o=n(22),a=n(23),i=n(26),u=n(121),c=n(48),s=200;e.exports=function(e,t,n){var l=-1,f=o,d=e.length,p=!0,h=[],g=h;if(n)p=!1,f=a;else if(d>=s){var v=t?null:u(e);if(v)return c(v);p=!1,f=i,g=new r}else g=t?[]:h;e:for(;++l<d;){var y=e[l],b=t?t(y):y;if(y=n||0!==y?y:0,p&&b==b){for(var m=g.length;m--;)if(g[m]===b)continue e;t&&g.push(b),h.push(y)}else f(g,b,n)||(g!==h&&g.push(b),h.push(y))}return h}},function(e,t){e.exports=function(){}},function(e,t){e.exports=function(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e,t){if(e===t)return!0;if("object"!==(void 0===e?"undefined":r(e))||null===e||"object"!==(void 0===t?"undefined":r(t))||null===t)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(var a=Object.prototype.hasOwnProperty,i=0;i<n.length;i+=1){if(!a.call(t,n[i]))return!1;var u=e[n[i]],c=t[n[i]];if(u!==c||"object"===(void 0===u?"undefined":r(u))||"object"===(void 0===c?"undefined":r(c)))return!1}return!0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=function(e){var t,n,h=e.DecoratedComponent,v=e.createHandler,y=e.createMonitor,b=e.createConnector,m=e.registerHandler,O=e.containerDisplayName,w=e.getType,_=e.collect,D=e.options.arePropsEqual,x=void 0===D?p.default:D,C=h.displayName||h.name||"Component",E=(n=t=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.handleChange=r.handleChange.bind(r),r.handleChildRef=r.handleChildRef.bind(r),(0,l.default)("object"===o(r.context.dragDropManager),"Could not find the drag and drop manager in the context of %s. Make sure to wrap the top-level component of your app with DragDropContext. Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context",C,C),r.manager=r.context.dragDropManager,r.handlerMonitor=y(r.manager),r.handlerConnector=b(r.manager.getBackend()),r.handler=v(r.handlerMonitor),r.disposable=new s.SerialDisposable,r.receiveProps(e),r.state=r.getCurrentState(),r.dispose(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"getHandlerId",value:function(){return this.handlerId}},{key:"getDecoratedComponentInstance",value:function(){return this.decoratedComponentInstance}},{key:"shouldComponentUpdate",value:function(e,t){return!x(e,this.props)||!(0,d.default)(t,this.state)}}]),a(t,[{key:"componentDidMount",value:function(){this.isCurrentlyMounted=!0,this.disposable=new s.SerialDisposable,this.currentType=null,this.receiveProps(this.props),this.handleChange()}},{key:"componentWillReceiveProps",value:function(e){x(e,this.props)||(this.receiveProps(e),this.handleChange())}},{key:"componentWillUnmount",value:function(){this.dispose(),this.isCurrentlyMounted=!1}},{key:"receiveProps",value:function(e){this.handler.receiveProps(e),this.receiveType(w(e))}},{key:"receiveType",value:function(e){if(e!==this.currentType){this.currentType=e;var t=m(e,this.handler,this.manager),n=t.handlerId,r=t.unregister;this.handlerId=n,this.handlerMonitor.receiveHandlerId(n),this.handlerConnector.receiveHandlerId(n);var o=this.manager.getMonitor(),a=o.subscribeToStateChange(this.handleChange,{handlerIds:[n]});this.disposable.setDisposable(new s.CompositeDisposable(new s.Disposable(a),new s.Disposable(r)))}}},{key:"handleChange",value:function(){if(this.isCurrentlyMounted){var e=this.getCurrentState();(0,d.default)(e,this.state)||this.setState(e)}}},{key:"dispose",value:function(){this.disposable.dispose(),this.handlerConnector.receiveHandlerId(null)}},{key:"handleChildRef",value:function(e){this.decoratedComponentInstance=e,this.handler.receiveComponent(e)}},{key:"getCurrentState",value:function(){var e=_(this.handlerConnector.hooks,this.handlerMonitor);return e}},{key:"render",value:function(){return u.default.createElement(h,r({},this.props,this.state,{ref:g(h)?this.handleChildRef:null}))}}]),t}(i.Component),t.DecoratedComponent=h,t.displayName=O+"("+C+")",t.contextTypes={dragDropManager:c.default.object.isRequired},n);return(0,f.default)(E,h)};var i=n(0),u=h(i),c=h(n(2)),s=n(138),l=(h(n(3)),h(n(1))),f=h(n(28)),d=h(n(29)),p=h(n(49));function h(e){return e&&e.__esModule?e:{default:e}}var g=function(e){return Boolean(e&&e.prototype&&"function"==typeof e.prototype.render)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};return Object.keys(e).forEach(function(n){var r=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if((0,o.isValidElement)(t)){var r=t;!function(e){if("string"!=typeof e.type){var t=e.type.displayName||e.type.name||"the component";throw new Error("Only native element nodes can now be passed to React DnD connectors.You can either wrap "+t+" into a <div>, or turn it into a drag source or a drop target itself.")}}(r);var a=n?function(t){return e(t,n)}:e;return(0,i.default)(r,a)}var u=t;e(u,n)}}(e[n]);t[n]=function(){return r}}),t};var r,o=n(0),a=n(146),i=(r=a)&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t===e)return!0;return null!==t&&null!==e&&(0,a.default)(t,e)};var r,o=n(29),a=(r=o)&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function e(t,n){return"string"==typeof t||"symbol"===(void 0===t?"undefined":r(t))||n&&(0,i.default)(t)&&t.every(function(t){return e(t,!1)})};var o,a=n(4),i=(o=a)&&o.__esModule?o:{default:o}},function(e,t){var n=9007199254740991,r=/^(?:0|[1-9]\d*)$/;e.exports=function(e,t){var o=typeof e;return!!(t=null==t?n:t)&&("number"==o||"symbol"!=o&&r.test(e))&&e>-1&&e%1==0&&e<t}},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSafari=t.isFirefox=void 0;var r,o=n(170),a=(r=o)&&r.__esModule?r:{default:r};t.isFirefox=(0,a.default)(function(){return/firefox/i.test(navigator.userAgent)}),t.isSafari=(0,a.default)(function(){return Boolean(window.safari)})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.WIDGET="WIDGET"},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",function(){return r})},function(e,t,n){e.exports=n(60)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(61);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return(e=r,e&&e.__esModule?e:{default:e}).default;var e}}),Object.defineProperty(t,"DashboardWithoutDndContext",{enumerable:!0,get:function(){return r.DashboardWithoutDndContext}});var o=n(32);Object.defineProperty(t,"addWidget",{enumerable:!0,get:function(){return o.addWidget}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DashboardWithoutDndContext=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=l(o),i=l(n(2)),u=n(18),c=l(n(152)),s=l(n(175));function l(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){return a.default.createElement("div",{id:"Dazzle-Dashboard",key:"Dazzle-Dashboard",style:{height:"100%"}},a.default.createElement(s.default,this.props))}}]),t}();f.propTypes={layout:i.default.object,widgets:i.default.object,editable:i.default.bool,rowClass:i.default.string,frameComponent:i.default.func,addWidgetComponent:i.default.func,editableColumnClass:i.default.string,droppableColumnClass:i.default.string,addWidgetComponentText:i.default.string,onRemove:i.default.func,onAdd:i.default.func,onMove:i.default.func,onEdit:i.default.func},t.DashboardWithoutDndContext=f,t.default=(0,u.DragDropContext)(c.default)(f)},function(e,t,n){"use strict";var r=n(63),o=n(64),a=n(65);e.exports=function(){function e(e,t,n,r,i,u){u!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";var r=function(e){};e.exports=function(e,t,n,o,a,i,u,c){if(r(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,o,a,i,u,c],f=0;(s=new Error(t.replace(/%s/g,function(){return l[f++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(67);Object.defineProperty(t,"DragDropManager",{enumerable:!0,get:function(){return u(r).default}});var o=n(132);Object.defineProperty(t,"DragSource",{enumerable:!0,get:function(){return u(o).default}});var a=n(133);Object.defineProperty(t,"DropTarget",{enumerable:!0,get:function(){return u(a).default}});var i=n(134);function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"createTestBackend",{enumerable:!0,get:function(){return u(i).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=c(n(68)),a=c(n(75)),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(10)),u=c(n(127));function c(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var r=(0,o.default)(a.default);this.context=n,this.store=r,this.monitor=new u.default(r),this.registry=this.monitor.registry,this.backend=t(this),r.subscribe(this.handleRefCountChange.bind(this))}return r(e,[{key:"handleRefCountChange",value:function(){var e=this.store.getState().refCount>0;e&&!this.isSetUp?(this.backend.setup(),this.isSetUp=!0):!e&&this.isSetUp&&(this.backend.teardown(),this.isSetUp=!1)}},{key:"getContext",value:function(){return this.context}},{key:"getMonitor",value:function(){return this.monitor}},{key:"getBackend",value:function(){return this.backend}},{key:"getRegistry",value:function(){return this.registry}},{key:"getActions",value:function(){var e=this,t=this.store.dispatch;return Object.keys(i).filter(function(e){return"function"==typeof i[e]}).reduce(function(n,r){var o,a=i[r];return n[r]=(o=a,function(){for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];var i=o.apply(e,r);void 0!==i&&t(i)}),n},{})}}]),e}();t.default=s},function(e,t,n){"use strict";t.__esModule=!0,t.ActionTypes=void 0,t.default=function e(t,n,a){var u;"function"==typeof n&&void 0===a&&(a=n,n=void 0);if(void 0!==a){if("function"!=typeof a)throw new Error("Expected the enhancer to be a function.");return a(e)(t,n)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var c=t;var s=n;var l=[];var f=l;var d=!1;function p(){f===l&&(f=l.slice())}function h(){return s}function g(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return p(),f.push(e),function(){if(t){t=!1,p();var n=f.indexOf(e);f.splice(n,1)}}}function v(e){if(!(0,r.default)(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,s=c(s,e)}finally{d=!1}for(var t=l=f,n=0;n<t.length;n++){var o=t[n];o()}return e}v({type:i.INIT});return u={dispatch:v,subscribe:g,getState:h,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");c=e,v({type:i.INIT})}},u[o.default]=function(){var e,t=g;return(e={subscribe:function(e){if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(h())}n();var r=t(n);return{unsubscribe:r}}})[o.default]=function(){return this},e},u};var r=a(n(3)),o=a(n(73));function a(e){return e&&e.__esModule?e:{default:e}}var i=t.ActionTypes={INIT:"@@redux/INIT"}},function(e,t,n){var r=n(19),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,u=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,u),n=e[u];try{e[u]=void 0;var r=!0}catch(e){}var o=i.call(e);return r&&(t?e[u]=n:delete e[u]),o}},function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},function(e,t,n){var r=n(72)(Object.getPrototypeOf,Object);e.exports=r},function(e,t){e.exports=function(e,t){return function(n){return e(t(n))}}},function(e,t,n){"use strict";n.r(t),function(e){var r,o=n(58);r="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:e;var a=Object(o.a)(r);t.default=a}.call(this,n(74)(e))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];return{dirtyHandlerIds:(0,i.default)(e.dirtyHandlerIds,t,e.dragOperation),dragOffset:(0,r.default)(e.dragOffset,t),refCount:(0,a.default)(e.refCount,t),dragOperation:(0,o.default)(e.dragOperation,t),stateId:(0,u.default)(e.stateId)}};var r=c(n(35)),o=c(n(76)),a=c(n(114)),i=c(n(43)),u=c(n(126));function c(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments[1];switch(t.type){case u.BEGIN_DRAG:return r({},e,{itemType:t.itemType,item:t.item,sourceId:t.sourceId,isSourcePublic:t.isSourcePublic,dropResult:null,didDrop:!1});case u.PUBLISH_DRAG_SOURCE:return r({},e,{isSourcePublic:!0});case u.HOVER:return r({},e,{targetIds:t.targetIds});case c.REMOVE_TARGET:return-1===e.targetIds.indexOf(t.targetId)?e:r({},e,{targetIds:(0,i.default)(e.targetIds,t.targetId)});case u.DROP:return r({},e,{dropResult:t.dropResult,didDrop:!0,targetIds:[]});case u.END_DRAG:return r({},e,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return e}};var o,a=n(37),i=(o=a)&&o.__esModule?o:{default:o},u=n(10),c=n(16);var s={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null}},function(e,t,n){var r=n(78),o=n(89),a=n(95);e.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||o),string:new r}}},function(e,t,n){var r=n(79),o=n(85),a=n(86),i=n(87),u=n(88);function c(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=u,e.exports=c},function(e,t,n){var r=n(11);e.exports=function(){this.__data__=r?r(null):{},this.size=0}},function(e,t,n){var r=n(40),o=n(81),a=n(7),i=n(83),u=/^\[object .+?Constructor\]$/,c=Function.prototype,s=Object.prototype,l=c.toString,f=s.hasOwnProperty,d=RegExp("^"+l.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!a(e)||o(e))&&(r(e)?d:u).test(i(e))}},function(e,t,n){var r,o=n(82),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";e.exports=function(e){return!!a&&a in e}},function(e,t,n){var r=n(5)["__core-js_shared__"];e.exports=r},function(e,t){var n=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return n.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},function(e,t){e.exports=function(e,t){return null==e?void 0:e[t]}},function(e,t){e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},function(e,t,n){var r=n(11),o="__lodash_hash_undefined__",a=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(r){var n=t[e];return n===o?void 0:n}return a.call(t,e)?t[e]:void 0}},function(e,t,n){var r=n(11),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return r?void 0!==t[e]:o.call(t,e)}},function(e,t,n){var r=n(11),o="__lodash_hash_undefined__";e.exports=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=r&&void 0===t?o:t,this}},function(e,t,n){var r=n(90),o=n(91),a=n(92),i=n(93),u=n(94);function c(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=u,e.exports=c},function(e,t){e.exports=function(){this.__data__=[],this.size=0}},function(e,t,n){var r=n(13),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,n=r(t,e);return!(n<0||(n==t.length-1?t.pop():o.call(t,n,1),--this.size,0))}},function(e,t,n){var r=n(13);e.exports=function(e){var t=this.__data__,n=r(t,e);return n<0?void 0:t[n][1]}},function(e,t,n){var r=n(13);e.exports=function(e){return r(this.__data__,e)>-1}},function(e,t,n){var r=n(13);e.exports=function(e,t){var n=this.__data__,o=r(n,e);return o<0?(++this.size,n.push([e,t])):n[o][1]=t,this}},function(e,t,n){var r=n(12)(n(5),"Map");e.exports=r},function(e,t,n){var r=n(14);e.exports=function(e){var t=r(this,e).delete(e);return this.size-=t?1:0,t}},function(e,t){e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},function(e,t,n){var r=n(14);e.exports=function(e){return r(this,e).get(e)}},function(e,t,n){var r=n(14);e.exports=function(e){return r(this,e).has(e)}},function(e,t,n){var r=n(14);e.exports=function(e,t){var n=r(this,e),o=n.size;return n.set(e,t),this.size+=n.size==o?0:1,this}},function(e,t){var n="__lodash_hash_undefined__";e.exports=function(e){return this.__data__.set(e,n),this}},function(e,t){e.exports=function(e){return this.__data__.has(e)}},function(e,t,n){var r=n(104),o=n(105),a=n(106);e.exports=function(e,t,n){return t==t?a(e,t,n):r(e,o,n)}},function(e,t){e.exports=function(e,t,n,r){for(var o=e.length,a=n+(r?1:-1);r?a--:++a<o;)if(t(e[a],a,e))return a;return-1}},function(e,t){e.exports=function(e){return e!=e}},function(e,t){e.exports=function(e,t,n){for(var r=n-1,o=e.length;++r<o;)if(e[r]===t)return r;return-1}},function(e,t,n){var r=n(108),o=Math.max;e.exports=function(e,t,n){return t=o(void 0===t?e.length-1:t,0),function(){for(var a=arguments,i=-1,u=o(a.length-t,0),c=Array(u);++i<u;)c[i]=a[t+i];i=-1;for(var s=Array(t+1);++i<t;)s[i]=a[i];return s[t]=n(c),r(e,this,s)}}},function(e,t){e.exports=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}},function(e,t,n){var r=n(110),o=n(113)(r);e.exports=o},function(e,t,n){var r=n(111),o=n(112),a=n(41),i=o?function(e,t){return o(e,"toString",{configurable:!0,enumerable:!1,value:r(t),writable:!0})}:a;e.exports=i},function(e,t){e.exports=function(e){return function(){return e}}},function(e,t,n){var r=n(12),o=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=o},function(e,t){var n=800,r=16,o=Date.now;e.exports=function(e){var t=0,a=0;return function(){var i=o(),u=r-(i-a);if(a=i,u>0){if(++t>=n)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;switch(arguments[1].type){case r.ADD_SOURCE:case r.ADD_TARGET:return e+1;case r.REMOVE_SOURCE:case r.REMOVE_TARGET:return e-1;default:return e}};var r=n(16)},function(e,t,n){var r=n(116),o=n(8),a=n(117),i=n(15),u=o(function(e){return a(r(e,i))});e.exports=u},function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,a=[];++n<r;){var i=e[n];t(i,n,e)&&(a[o++]=i)}return a}},function(e,t,n){var r=n(38),o=n(44),a=n(46);e.exports=function(e,t,n){var i=e.length;if(i<2)return i?a(e[0]):[];for(var u=-1,c=Array(i);++u<i;)for(var s=e[u],l=-1;++l<i;)l!=u&&(c[u]=r(c[u]||s,e[l],t,n));return a(o(c,1),t,n)}},function(e,t){e.exports=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}},function(e,t,n){var r=n(19),o=n(45),a=n(4),i=r?r.isConcatSpreadable:void 0;e.exports=function(e){return a(e)||o(e)||!!(i&&e&&e[i])}},function(e,t,n){var r=n(9),o=n(6),a="[object Arguments]";e.exports=function(e){return o(e)&&r(e)==a}},function(e,t,n){var r=n(122),o=n(47),a=n(48),i=r&&1/a(new r([,-0]))[1]==1/0?function(e){return new r(e)}:o;e.exports=i},function(e,t,n){var r=n(12)(n(5),"Set");e.exports=r},function(e,t,n){var r=n(24),o=n(124),a=n(8),i=n(125),u=a(function(e){var t=r(e,i);return t.length&&t[0]===e[0]?o(t):[]});e.exports=u},function(e,t,n){var r=n(20),o=n(22),a=n(23),i=n(24),u=n(25),c=n(26),s=Math.min;e.exports=function(e,t,n){for(var l=n?a:o,f=e[0].length,d=e.length,p=d,h=Array(d),g=1/0,v=[];p--;){var y=e[p];p&&t&&(y=i(y,u(t))),g=s(y.length,g),h[p]=!n&&(t||f>=120&&y.length>=120)?new r(p&&y):void 0}y=e[0];var b=-1,m=h[0];e:for(;++b<f&&v.length<g;){var O=y[b],w=t?t(O):O;if(O=n||0!==O?O:0,!(m?c(m,w):l(v,w,n))){for(p=d;--p;){var _=h[p];if(!(_?c(_,w):l(e[p],w,n)))continue e}m&&m.push(w),v.push(O)}}return v}},function(e,t,n){var r=n(15);e.exports=function(e){return r(e)?e:[]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)+1}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(1)),a=l(n(4)),i=l(n(36)),u=l(n(128)),c=n(35),s=n(43);function l(e){return e&&e.__esModule?e:{default:e}}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.store=t,this.registry=new u.default(t)}return r(e,[{key:"subscribeToStateChange",value:function(e){var t=this,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).handlerIds;(0,o.default)("function"==typeof e,"listener must be a function."),(0,o.default)(void 0===n||(0,a.default)(n),"handlerIds, when specified, must be an array of strings.");var r=this.store.getState().stateId;return this.store.subscribe(function(){var o=t.store.getState(),a=o.stateId;try{a===r||a===r+1&&!(0,s.areDirty)(o.dirtyHandlerIds,n)||e()}finally{r=a}})}},{key:"subscribeToOffsetChange",value:function(e){var t=this;(0,o.default)("function"==typeof e,"listener must be a function.");var n=this.store.getState().dragOffset;return this.store.subscribe(function(){var r=t.store.getState().dragOffset;r!==n&&(n=r,e())})}},{key:"canDragSource",value:function(e){var t=this.registry.getSource(e);return(0,o.default)(t,"Expected to find a valid source."),!this.isDragging()&&t.canDrag(this,e)}},{key:"canDropOnTarget",value:function(e){var t=this.registry.getTarget(e);if((0,o.default)(t,"Expected to find a valid target."),!this.isDragging()||this.didDrop())return!1;var n=this.registry.getTargetType(e),r=this.getItemType();return(0,i.default)(n,r)&&t.canDrop(this,e)}},{key:"isDragging",value:function(){return Boolean(this.getItemType())}},{key:"isDraggingSource",value:function(e){var t=this.registry.getSource(e,!0);return(0,o.default)(t,"Expected to find a valid source."),!(!this.isDragging()||!this.isSourcePublic())&&(this.registry.getSourceType(e)===this.getItemType()&&t.isDragging(this,e))}},{key:"isOverTarget",value:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{shallow:!1}).shallow;if(!this.isDragging())return!1;var n=this.registry.getTargetType(e),r=this.getItemType();if(!(0,i.default)(n,r))return!1;var o=this.getTargetIds();if(!o.length)return!1;var a=o.indexOf(e);return t?a===o.length-1:a>-1}},{key:"getItemType",value:function(){return this.store.getState().dragOperation.itemType}},{key:"getItem",value:function(){return this.store.getState().dragOperation.item}},{key:"getSourceId",value:function(){return this.store.getState().dragOperation.sourceId}},{key:"getTargetIds",value:function(){return this.store.getState().dragOperation.targetIds}},{key:"getDropResult",value:function(){return this.store.getState().dragOperation.dropResult}},{key:"didDrop",value:function(){return this.store.getState().dragOperation.didDrop}},{key:"isSourcePublic",value:function(){return this.store.getState().dragOperation.isSourcePublic}},{key:"getInitialClientOffset",value:function(){return this.store.getState().dragOffset.initialClientOffset}},{key:"getInitialSourceClientOffset",value:function(){return this.store.getState().dragOffset.initialSourceClientOffset}},{key:"getClientOffset",value:function(){return this.store.getState().dragOffset.clientOffset}},{key:"getSourceClientOffset",value:function(){return(0,c.getSourceClientOffset)(this.store.getState().dragOffset)}},{key:"getDifferenceFromInitialOffset",value:function(){return(0,c.getDifferenceFromInitialOffset)(this.store.getState().dragOffset)}}]),e}();t.default=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=l(n(1)),i=l(n(4)),u=l(n(129)),c=n(16),s=l(n(131));function l(e){return e&&e.__esModule?e:{default:e}}var f={SOURCE:"SOURCE",TARGET:"TARGET"};function d(e,t){t&&(0,i.default)(e)?e.forEach(function(e){return d(e,!1)}):(0,a.default)("string"==typeof e||"symbol"===(void 0===e?"undefined":o(e)),t?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}function p(e){switch(e[0]){case"S":return f.SOURCE;case"T":return f.TARGET;default:(0,a.default)(!1,"Cannot parse handler ID: "+e)}}var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.store=t,this.types={},this.handlers={},this.pinnedSourceId=null,this.pinnedSource=null}return r(e,[{key:"addSource",value:function(e,t){d(e),function(e){(0,a.default)("function"==typeof e.canDrag,"Expected canDrag to be a function."),(0,a.default)("function"==typeof e.beginDrag,"Expected beginDrag to be a function."),(0,a.default)("function"==typeof e.endDrag,"Expected endDrag to be a function.")}(t);var n=this.addHandler(f.SOURCE,e,t);return this.store.dispatch((0,c.addSource)(n)),n}},{key:"addTarget",value:function(e,t){d(e,!0),function(e){(0,a.default)("function"==typeof e.canDrop,"Expected canDrop to be a function."),(0,a.default)("function"==typeof e.hover,"Expected hover to be a function."),(0,a.default)("function"==typeof e.drop,"Expected beginDrag to be a function.")}(t);var n=this.addHandler(f.TARGET,e,t);return this.store.dispatch((0,c.addTarget)(n)),n}},{key:"addHandler",value:function(e,t,n){var r=function(e){var t=(0,s.default)().toString();switch(e){case f.SOURCE:return"S"+t;case f.TARGET:return"T"+t;default:(0,a.default)(!1,"Unknown role: "+e)}}(e);return this.types[r]=t,this.handlers[r]=n,r}},{key:"containsHandler",value:function(e){var t=this;return Object.keys(this.handlers).some(function(n){return t.handlers[n]===e})}},{key:"getSource",value:function(e,t){return(0,a.default)(this.isSourceId(e),"Expected a valid source ID."),t&&e===this.pinnedSourceId?this.pinnedSource:this.handlers[e]}},{key:"getTarget",value:function(e){return(0,a.default)(this.isTargetId(e),"Expected a valid target ID."),this.handlers[e]}},{key:"getSourceType",value:function(e){return(0,a.default)(this.isSourceId(e),"Expected a valid source ID."),this.types[e]}},{key:"getTargetType",value:function(e){return(0,a.default)(this.isTargetId(e),"Expected a valid target ID."),this.types[e]}},{key:"isSourceId",value:function(e){return p(e)===f.SOURCE}},{key:"isTargetId",value:function(e){return p(e)===f.TARGET}},{key:"removeSource",value:function(e){var t=this;(0,a.default)(this.getSource(e),"Expected an existing source."),this.store.dispatch((0,c.removeSource)(e)),(0,u.default)(function(){delete t.handlers[e],delete t.types[e]})}},{key:"removeTarget",value:function(e){var t=this;(0,a.default)(this.getTarget(e),"Expected an existing target."),this.store.dispatch((0,c.removeTarget)(e)),(0,u.default)(function(){delete t.handlers[e],delete t.types[e]})}},{key:"pinSource",value:function(e){var t=this.getSource(e);(0,a.default)(t,"Expected an existing source."),this.pinnedSourceId=e,this.pinnedSource=t}},{key:"unpinSource",value:function(){(0,a.default)(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null}}]),e}();t.default=h},function(e,t,n){"use strict";var r=n(130),o=[],a=[],i=r.makeRequestCallFromTimer(function(){if(a.length)throw a.shift()});function u(e){var t;(t=o.length?o.pop():new c).task=e,r(t)}function c(){this.task=null}e.exports=u,c.prototype.call=function(){try{this.task.call()}catch(e){u.onerror?u.onerror(e):(a.push(e),i())}finally{this.task=null,o[o.length]=this}}},function(e,t,n){"use strict";function r(e){a.length||(o(),!0),a[a.length]=e}e.exports=r;var o,a=[],i=0,u=1024;function c(){for(;i<a.length;){var e=i;if(i+=1,a[e].call(),i>u){for(var t=0,n=a.length-i;t<n;t++)a[t]=a[t+i];a.length-=i,i=0}}a.length=0,i=0,!1}var s,l,f,d="undefined"!=typeof global?global:self,p=d.MutationObserver||d.WebKitMutationObserver;function h(e){return function(){var t=setTimeout(r,0),n=setInterval(r,50);function r(){clearTimeout(t),clearInterval(n),e()}}}"function"==typeof p?(s=1,l=new p(c),f=document.createTextNode(""),l.observe(f,{characterData:!0}),o=function(){s=-s,f.data=s}):o=h(c),r.requestFlush=o,r.makeRequestCallFromTimer=h},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return r++};var r=0},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"canDrag",value:function(){return!0}},{key:"isDragging",value:function(e,t){return t===e.getSourceId()}},{key:"endDrag",value:function(){}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"canDrop",value:function(){return!0}},{key:"hover",value:function(){}},{key:"drop",value:function(){}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=function(e){return new u(e)};var o,a=n(47),i=(o=a)&&o.__esModule?o:{default:o};var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.actions=t.getActions()}return r(e,[{key:"setup",value:function(){this.didCallSetup=!0}},{key:"teardown",value:function(){this.didCallTeardown=!0}},{key:"connectDragSource",value:function(){return i.default}},{key:"connectDragPreview",value:function(){return i.default}},{key:"connectDropTarget",value:function(){return i.default}},{key:"simulateBeginDrag",value:function(e,t){this.actions.beginDrag(e,t)}},{key:"simulatePublishDragSource",value:function(){this.actions.publishDragSource()}},{key:"simulateHover",value:function(e,t){this.actions.hover(e,t)}},{key:"simulateDrop",value:function(){this.actions.drop()}},{key:"simulateEndDrag",value:function(){this.actions.endDrag()}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,a,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=n(2),s=(a=c)&&a.__esModule?a:{default:a},l=n(33);var f=(o=r=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.backend=(0,l.unpackBackendForEs5Users)(e.backend),r.childContext=(0,l.createChildContext)(r.backend,{window:e&&e.window?e.window:n&&n.window?n.window:"undefined"!=typeof window?window:void 0}),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),i(t,[{key:"componentWillReceiveProps",value:function(e){if(e.backend!==this.props.backend||e.window!==this.props.window)throw new Error("DragDropContextProvider backend and window props must not change.")}},{key:"getChildContext",value:function(){return this.childContext}},{key:"render",value:function(){return u.Children.only(this.props.children)}}]),t}(),r.propTypes={backend:s.default.oneOfType([s.default.func,s.default.object]).isRequired,children:s.default.element.isRequired,window:s.default.object},r.defaultProps={window:void 0},r.childContextTypes=l.CHILD_CONTEXT_TYPES,r.displayName="DragDropContextProvider",r.contextTypes={window:s.default.object},o);t.default=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h.default.apply(void 0,["DragLayer","collect[, options]"].concat(Array.prototype.slice.call(arguments))),(0,f.default)("function"==typeof e,'Expected "collect" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ',"Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html",e),(0,f.default)((0,l.default)(t),'Expected "options" provided as the second argument to DragLayer to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html',t),function(n){var l,h,g=t.arePropsEqual,v=void 0===g?p.default:g,y=n.displayName||n.name||"Component",b=(h=l=function(t){function c(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e));return n.handleChange=n.handleChange.bind(n),n.manager=t.dragDropManager,(0,f.default)("object"===o(n.manager),"Could not find the drag and drop manager in the context of %s. Make sure to wrap the top-level component of your app with DragDropContext. Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context",y,y),n.state=n.getCurrentState(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(c,i.Component),a(c,[{key:"getDecoratedComponentInstance",value:function(){return(0,f.default)(this.child,"In order to access an instance of the decorated component it can not be a stateless component."),this.child}},{key:"shouldComponentUpdate",value:function(e,t){return!v(e,this.props)||!(0,d.default)(t,this.state)}}]),a(c,[{key:"componentDidMount",value:function(){this.isCurrentlyMounted=!0;var e=this.manager.getMonitor();this.unsubscribeFromOffsetChange=e.subscribeToOffsetChange(this.handleChange),this.unsubscribeFromStateChange=e.subscribeToStateChange(this.handleChange),this.handleChange()}},{key:"componentWillUnmount",value:function(){this.isCurrentlyMounted=!1,this.unsubscribeFromOffsetChange(),this.unsubscribeFromStateChange()}},{key:"handleChange",value:function(){if(this.isCurrentlyMounted){var e=this.getCurrentState();(0,d.default)(e,this.state)||this.setState(e)}}},{key:"getCurrentState",value:function(){var t=this.manager.getMonitor();return e(t,this.props)}},{key:"render",value:function(){var e=this;return u.default.createElement(n,r({},this.props,this.state,{ref:function(t){e.child=t}}))}}]),c}(),l.DecoratedComponent=n,l.displayName="DragLayer("+y+")",l.contextTypes={dragDropManager:c.default.object.isRequired},h);return(0,s.default)(b,n)}};var i=n(0),u=g(i),c=g(n(2)),s=g(n(28)),l=g(n(3)),f=g(n(1)),d=g(n(29)),p=g(n(49)),h=g(n(17));function g(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};a.default.apply(void 0,["DragSource","type, spec, collect[, options]"].concat(Array.prototype.slice.call(arguments)));var p=e;"function"!=typeof e&&((0,r.default)((0,f.default)(e),'Expected "type" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html',e),p=function(){return e});(0,r.default)((0,o.default)(t),'Expected "spec" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html',t);var h=(0,c.default)(t);return(0,r.default)("function"==typeof n,'Expected "collect" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html',n),(0,r.default)((0,o.default)(d),'Expected "options" provided as the fourth argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html',n),function(e){return(0,i.default)({connectBackend:function(e,t){return e.connectDragSource(t)},containerDisplayName:"DragSource",createHandler:h,registerHandler:u.default,createMonitor:s.default,createConnector:l.default,DecoratedComponent:e,getType:p,collect:n,options:d})}};var r=d(n(1)),o=d(n(3)),a=d(n(17)),i=d(n(50)),u=d(n(142)),c=d(n(143)),s=d(n(144)),l=d(n(145)),f=d(n(53));function d(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=r(n(30));t.isDisposable=o.default;var a=r(n(139));t.Disposable=a.default;var i=r(n(140));t.CompositeDisposable=i.default;var u=r(n(141));t.SerialDisposable=u.default},function(e,t,n){"use strict";t.__esModule=!0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){},a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isDisposed=!1,this.action=t||o}return r(e,null,[{key:"empty",value:{dispose:o},enumerable:!0}]),e.prototype.dispose=function(){this.isDisposed||(this.action.call(null),this.isDisposed=!0)},e}();t.default=a,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(30),a=(r=o)&&r.__esModule?r:{default:r},i=function(){function e(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Array.isArray(n[0])&&1===n.length&&(n=n[0]);for(var o=0;o<n.length;o++)if(!a.default(n[o]))throw new Error("Expected a disposable");this.disposables=n,this.isDisposed=!1}return e.prototype.add=function(e){this.isDisposed?e.dispose():this.disposables.push(e)},e.prototype.remove=function(e){if(this.isDisposed)return!1;var t=this.disposables.indexOf(e);return-1!==t&&(this.disposables.splice(t,1),e.dispose(),!0)},e.prototype.dispose=function(){if(!this.isDisposed){for(var e=this.disposables.length,t=new Array(e),n=0;n<e;n++)t[n]=this.disposables[n];this.isDisposed=!0,this.disposables=[],this.length=0;for(n=0;n<e;n++)t[n].dispose()}},e}();t.default=i,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(30),a=(r=o)&&r.__esModule?r:{default:r},i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isDisposed=!1,this.current=null}return e.prototype.getDisposable=function(){return this.current},e.prototype.setDisposable=function(){var e=arguments.length<=0||void 0===arguments[0]?null:arguments[0];if(null!=e&&!a.default(e))throw new Error("Expected either an empty value or a valid disposable");var t=this.isDisposed,n=void 0;t||(n=this.current,this.current=e),n&&n.dispose(),t&&e&&e.dispose()},e.prototype.dispose=function(){if(!this.isDisposed){this.isDisposed=!0;var e=this.current;this.current=null,e&&e.dispose()}},e}();t.default=i,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r=n.getRegistry(),o=r.addSource(e,t);return{handlerId:o,unregister:function(){r.removeSource(o)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=function(e){Object.keys(e).forEach(function(t){(0,o.default)(i.indexOf(t)>-1,'Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html',i.join(", "),t),(0,o.default)("function"==typeof e[t],"Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html",t,t,e[t])}),u.forEach(function(t){(0,o.default)("function"==typeof e[t],"Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html",t,t,e[t])});var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.monitor=e,this.props=null,this.component=null}return r(t,[{key:"receiveProps",value:function(e){this.props=e}},{key:"receiveComponent",value:function(e){this.component=e}},{key:"canDrag",value:function(){return!e.canDrag||e.canDrag(this.props,this.monitor)}},{key:"isDragging",value:function(t,n){return e.isDragging?e.isDragging(this.props,this.monitor):n===t.getSourceId()}},{key:"beginDrag",value:function(){var t=e.beginDrag(this.props,this.monitor,this.component);return t}},{key:"endDrag",value:function(){e.endDrag&&e.endDrag(this.props,this.monitor,this.component)}}]),t}();return function(e){return new t(e)}};var o=a(n(1));a(n(3));function a(e){return e&&e.__esModule?e:{default:e}}var i=["canDrag","beginDrag","isDragging","endDrag"],u=["beginDrag"]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=function(e){return new s(e)};var o,a=n(1),i=(o=a)&&o.__esModule?o:{default:o};var u=!1,c=!1,s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.internalMonitor=t.getMonitor()}return r(e,[{key:"receiveHandlerId",value:function(e){this.sourceId=e}},{key:"canDrag",value:function(){(0,i.default)(!u,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html");try{return u=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{u=!1}}},{key:"isDragging",value:function(){(0,i.default)(!c,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html");try{return c=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{c=!1}}},{key:"getItemType",value:function(){return this.internalMonitor.getItemType()}},{key:"getItem",value:function(){return this.internalMonitor.getItem()}},{key:"getDropResult",value:function(){return this.internalMonitor.getDropResult()}},{key:"didDrop",value:function(){return this.internalMonitor.didDrop()}},{key:"getInitialClientOffset",value:function(){return this.internalMonitor.getInitialClientOffset()}},{key:"getInitialSourceClientOffset",value:function(){return this.internalMonitor.getInitialSourceClientOffset()}},{key:"getSourceClientOffset",value:function(){return this.internalMonitor.getSourceClientOffset()}},{key:"getClientOffset",value:function(){return this.internalMonitor.getClientOffset()}},{key:"getDifferenceFromInitialOffset",value:function(){return this.internalMonitor.getDifferenceFromInitialOffset()}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=void 0,n=void 0,a=void 0,i=void 0,u=void 0,c=void 0,s=void 0;function l(){i&&(i(),i=null),t&&n&&(i=e.connectDragSource(t,n,a))}function f(){s&&(s(),s=null),t&&u&&(s=e.connectDragPreview(t,u,c))}return{receiveHandlerId:function(e){if(e===t)return;t=e,l(),f()},hooks:(0,r.default)({dragSource:function(e,t){e===n&&(0,o.default)(t,a)||(n=e,a=t,l())},dragPreview:function(e,t){e===u&&(0,o.default)(t,c)||(u=e,c=t,f())}})}};var r=a(n(51)),o=a(n(52));function a(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=e.ref;if((0,a.default)("string"!=typeof n,"Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute"),!n)return(0,i.cloneElement)(e,{ref:t});return(0,i.cloneElement)(e,{ref:function(e){t(e),n&&n(e)}})};var r,o=n(1),a=(r=o)&&r.__esModule?r:{default:r},i=n(0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};a.default.apply(void 0,["DropTarget","type, spec, collect[, options]"].concat(Array.prototype.slice.call(arguments)));var p=e;"function"!=typeof e&&((0,r.default)((0,f.default)(e,!0),'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html',e),p=function(){return e});(0,r.default)((0,o.default)(t),'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html',t);var h=(0,c.default)(t);return(0,r.default)("function"==typeof n,'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html',n),(0,r.default)((0,o.default)(d),'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html',n),function(e){return(0,i.default)({connectBackend:function(e,t){return e.connectDropTarget(t)},containerDisplayName:"DropTarget",createHandler:h,registerHandler:u.default,createMonitor:s.default,createConnector:l.default,DecoratedComponent:e,getType:p,collect:n,options:d})}};var r=d(n(1)),o=d(n(3)),a=d(n(17)),i=d(n(50)),u=d(n(148)),c=d(n(149)),s=d(n(150)),l=d(n(151)),f=d(n(53));function d(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r=n.getRegistry(),o=r.addTarget(e,t);return{handlerId:o,unregister:function(){r.removeTarget(o)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=function(e){Object.keys(e).forEach(function(t){(0,o.default)(i.indexOf(t)>-1,'Expected the drop target specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html',i.join(", "),t),(0,o.default)("function"==typeof e[t],"Expected %s in the drop target specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html",t,t,e[t])});var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.monitor=e,this.props=null,this.component=null}return r(t,[{key:"receiveProps",value:function(e){this.props=e}},{key:"receiveMonitor",value:function(e){this.monitor=e}},{key:"receiveComponent",value:function(e){this.component=e}},{key:"canDrop",value:function(){return!e.canDrop||e.canDrop(this.props,this.monitor)}},{key:"hover",value:function(){e.hover&&e.hover(this.props,this.monitor,this.component)}},{key:"drop",value:function(){if(e.drop){var t=e.drop(this.props,this.monitor,this.component);return t}}}]),t}();return function(e){return new t(e)}};var o=a(n(1));a(n(3));function a(e){return e&&e.__esModule?e:{default:e}}var i=["canDrop","hover","drop"]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=function(e){return new c(e)};var o,a=n(1),i=(o=a)&&o.__esModule?o:{default:o};var u=!1,c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.internalMonitor=t.getMonitor()}return r(e,[{key:"receiveHandlerId",value:function(e){this.targetId=e}},{key:"canDrop",value:function(){(0,i.default)(!u,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs-drop-target-monitor.html");try{return u=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{u=!1}}},{key:"isOver",value:function(e){return this.internalMonitor.isOverTarget(this.targetId,e)}},{key:"getItemType",value:function(){return this.internalMonitor.getItemType()}},{key:"getItem",value:function(){return this.internalMonitor.getItem()}},{key:"getDropResult",value:function(){return this.internalMonitor.getDropResult()}},{key:"didDrop",value:function(){return this.internalMonitor.didDrop()}},{key:"getInitialClientOffset",value:function(){return this.internalMonitor.getInitialClientOffset()}},{key:"getInitialSourceClientOffset",value:function(){return this.internalMonitor.getInitialSourceClientOffset()}},{key:"getSourceClientOffset",value:function(){return this.internalMonitor.getSourceClientOffset()}},{key:"getClientOffset",value:function(){return this.internalMonitor.getClientOffset()}},{key:"getDifferenceFromInitialOffset",value:function(){return this.internalMonitor.getDifferenceFromInitialOffset()}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=void 0,n=void 0,a=void 0,i=void 0;function u(){i&&(i(),i=null),t&&n&&(i=e.connectDropTarget(t,n,a))}return{receiveHandlerId:function(e){if(e===t)return;t=e,u()},hooks:(0,r.default)({dropTarget:function(e,t){e===n&&(0,o.default)(t,a)||(n=e,a=t,u())}})}};var r=a(n(51)),o=a(n(52));function a(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getEmptyImage=t.NativeTypes=void 0,t.default=function(e){return new r.default(e)};var r=i(n(153)),o=i(n(174)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(31));function i(e){return e&&e.__esModule?e:{default:e}}t.NativeTypes=a,t.getEmptyImage=o.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=f(n(154)),a=f(n(167)),i=f(n(168)),u=n(56),c=n(171),s=n(173),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(31));function f(e){return e&&e.__esModule?e:{default:e}}var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.actions=t.getActions(),this.monitor=t.getMonitor(),this.registry=t.getRegistry(),this.context=t.getContext(),this.sourcePreviewNodes={},this.sourcePreviewNodeOptions={},this.sourceNodes={},this.sourceNodeOptions={},this.enterLeaveCounter=new i.default,this.dragStartSourceIds=[],this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.currentDragSourceNodeOffset=null,this.currentDragSourceNodeOffsetChanged=!1,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.getSourceClientOffset=this.getSourceClientOffset.bind(this),this.handleTopDragStart=this.handleTopDragStart.bind(this),this.handleTopDragStartCapture=this.handleTopDragStartCapture.bind(this),this.handleTopDragEndCapture=this.handleTopDragEndCapture.bind(this),this.handleTopDragEnter=this.handleTopDragEnter.bind(this),this.handleTopDragEnterCapture=this.handleTopDragEnterCapture.bind(this),this.handleTopDragLeaveCapture=this.handleTopDragLeaveCapture.bind(this),this.handleTopDragOver=this.handleTopDragOver.bind(this),this.handleTopDragOverCapture=this.handleTopDragOverCapture.bind(this),this.handleTopDrop=this.handleTopDrop.bind(this),this.handleTopDropCapture=this.handleTopDropCapture.bind(this),this.handleSelectStart=this.handleSelectStart.bind(this),this.endDragIfSourceWasRemovedFromDOM=this.endDragIfSourceWasRemovedFromDOM.bind(this),this.endDragNativeItem=this.endDragNativeItem.bind(this),this.asyncEndDragNativeItem=this.asyncEndDragNativeItem.bind(this),this.isNodeInDocument=this.isNodeInDocument.bind(this)}return r(e,[{key:"setup",value:function(){if(void 0!==this.window){if(this.window.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");this.window.__isReactDndBackendSetUp=!0,this.addEventListeners(this.window)}}},{key:"teardown",value:function(){void 0!==this.window&&(this.window.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.window),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId&&this.window.cancelAnimationFrame(this.asyncEndDragFrameId))}},{key:"addEventListeners",value:function(e){e.addEventListener&&(e.addEventListener("dragstart",this.handleTopDragStart),e.addEventListener("dragstart",this.handleTopDragStartCapture,!0),e.addEventListener("dragend",this.handleTopDragEndCapture,!0),e.addEventListener("dragenter",this.handleTopDragEnter),e.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.addEventListener("dragover",this.handleTopDragOver),e.addEventListener("dragover",this.handleTopDragOverCapture,!0),e.addEventListener("drop",this.handleTopDrop),e.addEventListener("drop",this.handleTopDropCapture,!0))}},{key:"removeEventListeners",value:function(e){e.removeEventListener&&(e.removeEventListener("dragstart",this.handleTopDragStart),e.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),e.removeEventListener("dragend",this.handleTopDragEndCapture,!0),e.removeEventListener("dragenter",this.handleTopDragEnter),e.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.removeEventListener("dragover",this.handleTopDragOver),e.removeEventListener("dragover",this.handleTopDragOverCapture,!0),e.removeEventListener("drop",this.handleTopDrop),e.removeEventListener("drop",this.handleTopDropCapture,!0))}},{key:"connectDragPreview",value:function(e,t,n){var r=this;return this.sourcePreviewNodeOptions[e]=n,this.sourcePreviewNodes[e]=t,function(){delete r.sourcePreviewNodes[e],delete r.sourcePreviewNodeOptions[e]}}},{key:"connectDragSource",value:function(e,t,n){var r=this;this.sourceNodes[e]=t,this.sourceNodeOptions[e]=n;var o=function(t){return r.handleDragStart(t,e)},a=function(t){return r.handleSelectStart(t,e)};return t.setAttribute("draggable",!0),t.addEventListener("dragstart",o),t.addEventListener("selectstart",a),function(){delete r.sourceNodes[e],delete r.sourceNodeOptions[e],t.removeEventListener("dragstart",o),t.removeEventListener("selectstart",a),t.setAttribute("draggable",!1)}}},{key:"connectDropTarget",value:function(e,t){var n=this,r=function(t){return n.handleDragEnter(t,e)},o=function(t){return n.handleDragOver(t,e)},a=function(t){return n.handleDrop(t,e)};return t.addEventListener("dragenter",r),t.addEventListener("dragover",o),t.addEventListener("drop",a),function(){t.removeEventListener("dragenter",r),t.removeEventListener("dragover",o),t.removeEventListener("drop",a)}}},{key:"getCurrentSourceNodeOptions",value:function(){var e=this.monitor.getSourceId(),t=this.sourceNodeOptions[e];return(0,o.default)(t||{},{dropEffect:this.altKeyPressed?"copy":"move"})}},{key:"getCurrentDropEffect",value:function(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}},{key:"getCurrentSourcePreviewNodeOptions",value:function(){var e=this.monitor.getSourceId(),t=this.sourcePreviewNodeOptions[e];return(0,o.default)(t||{},{anchorX:.5,anchorY:.5,captureDraggingState:!1})}},{key:"getSourceClientOffset",value:function(e){return(0,c.getNodeClientOffset)(this.sourceNodes[e])}},{key:"isDraggingNativeItem",value:function(){var e=this.monitor.getItemType();return Object.keys(l).some(function(t){return l[t]===e})}},{key:"beginDragNativeItem",value:function(e){this.clearCurrentDragSourceNode();var t=(0,s.createNativeDragSource)(e);this.currentNativeSource=new t,this.currentNativeHandle=this.registry.addSource(e,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}},{key:"asyncEndDragNativeItem",value:function(){this.asyncEndDragFrameId=this.window.requestAnimationFrame(this.endDragNativeItem)}},{key:"endDragNativeItem",value:function(){this.isDraggingNativeItem()&&(this.actions.endDrag(),this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)}},{key:"isNodeInDocument",value:function(e){return!(!document.body.contains(e)&&!this.window)&&this.window.document.body.contains(e)}},{key:"endDragIfSourceWasRemovedFromDOM",value:function(){var e=this.currentDragSourceNode;this.isNodeInDocument(e)||this.clearCurrentDragSourceNode()&&this.actions.endDrag()}},{key:"setCurrentDragSourceNode",value:function(e){var t=this;this.clearCurrentDragSourceNode(),this.currentDragSourceNode=e,this.currentDragSourceNodeOffset=(0,c.getNodeClientOffset)(e),this.currentDragSourceNodeOffsetChanged=!1;this.mouseMoveTimeoutTimer=setTimeout(function(){return t.mouseMoveTimeoutId=null,t.window.addEventListener("mousemove",t.endDragIfSourceWasRemovedFromDOM,!0)},1e3)}},{key:"clearCurrentDragSourceNode",value:function(){return!!this.currentDragSourceNode&&(this.currentDragSourceNode=null,this.currentDragSourceNodeOffset=null,this.currentDragSourceNodeOffsetChanged=!1,this.window.clearTimeout(this.mouseMoveTimeoutTimer),this.window.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0),this.mouseMoveTimeoutTimer=null,!0)}},{key:"checkIfCurrentDragSourceRectChanged",value:function(){var e=this.currentDragSourceNode;return!!e&&(!!this.currentDragSourceNodeOffsetChanged||(this.currentDragSourceNodeOffsetChanged=!(0,a.default)((0,c.getNodeClientOffset)(e),this.currentDragSourceNodeOffset),this.currentDragSourceNodeOffsetChanged))}},{key:"handleTopDragStartCapture",value:function(){this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]}},{key:"handleDragStart",value:function(e,t){this.dragStartSourceIds.unshift(t)}},{key:"handleTopDragStart",value:function(e){var t=this,n=this.dragStartSourceIds;this.dragStartSourceIds=null;var r=(0,c.getEventClientOffset)(e);this.monitor.isDragging()&&this.actions.endDrag(),this.actions.beginDrag(n,{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:r});var o=e.dataTransfer,a=(0,s.matchNativeItemType)(o);if(this.monitor.isDragging()){if("function"==typeof o.setDragImage){var i=this.monitor.getSourceId(),u=this.sourceNodes[i],l=this.sourcePreviewNodes[i]||u,f=this.getCurrentSourcePreviewNodeOptions(),d={anchorX:f.anchorX,anchorY:f.anchorY},p={offsetX:f.offsetX,offsetY:f.offsetY},h=(0,c.getDragPreviewOffset)(u,l,r,d,p);o.setDragImage(l,h.x,h.y)}try{o.setData("application/json",{})}catch(e){}this.setCurrentDragSourceNode(e.target),this.getCurrentSourcePreviewNodeOptions().captureDraggingState?this.actions.publishDragSource():setTimeout(function(){return t.actions.publishDragSource()})}else if(a)this.beginDragNativeItem(a);else{if(!(o.types||e.target.hasAttribute&&e.target.hasAttribute("draggable")))return;e.preventDefault()}}},{key:"handleTopDragEndCapture",value:function(){this.clearCurrentDragSourceNode()&&this.actions.endDrag()}},{key:"handleTopDragEnterCapture",value:function(e){if(this.dragEnterTargetIds=[],this.enterLeaveCounter.enter(e.target)&&!this.monitor.isDragging()){var t=e.dataTransfer,n=(0,s.matchNativeItemType)(t);n&&this.beginDragNativeItem(n)}}},{key:"handleDragEnter",value:function(e,t){this.dragEnterTargetIds.unshift(t)}},{key:"handleTopDragEnter",value:function(e){var t=this,n=this.dragEnterTargetIds;(this.dragEnterTargetIds=[],this.monitor.isDragging())&&(this.altKeyPressed=e.altKey,(0,u.isFirefox)()||this.actions.hover(n,{clientOffset:(0,c.getEventClientOffset)(e)}),n.some(function(e){return t.monitor.canDropOnTarget(e)})&&(e.preventDefault(),e.dataTransfer.dropEffect=this.getCurrentDropEffect()))}},{key:"handleTopDragOverCapture",value:function(){this.dragOverTargetIds=[]}},{key:"handleDragOver",value:function(e,t){this.dragOverTargetIds.unshift(t)}},{key:"handleTopDragOver",value:function(e){var t=this,n=this.dragOverTargetIds;if(this.dragOverTargetIds=[],!this.monitor.isDragging())return e.preventDefault(),void(e.dataTransfer.dropEffect="none");this.altKeyPressed=e.altKey,this.actions.hover(n,{clientOffset:(0,c.getEventClientOffset)(e)}),n.some(function(e){return t.monitor.canDropOnTarget(e)})?(e.preventDefault(),e.dataTransfer.dropEffect=this.getCurrentDropEffect()):this.isDraggingNativeItem()?(e.preventDefault(),e.dataTransfer.dropEffect="none"):this.checkIfCurrentDragSourceRectChanged()&&(e.preventDefault(),e.dataTransfer.dropEffect="move")}},{key:"handleTopDragLeaveCapture",value:function(e){this.isDraggingNativeItem()&&e.preventDefault(),this.enterLeaveCounter.leave(e.target)&&this.isDraggingNativeItem()&&this.endDragNativeItem()}},{key:"handleTopDropCapture",value:function(e){this.dropTargetIds=[],e.preventDefault(),this.isDraggingNativeItem()&&this.currentNativeSource.mutateItemByReadingDataTransfer(e.dataTransfer),this.enterLeaveCounter.reset()}},{key:"handleDrop",value:function(e,t){this.dropTargetIds.unshift(t)}},{key:"handleTopDrop",value:function(e){var t=this.dropTargetIds;this.dropTargetIds=[],this.actions.hover(t,{clientOffset:(0,c.getEventClientOffset)(e)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.endDragIfSourceWasRemovedFromDOM()}},{key:"handleSelectStart",value:function(e){var t=e.target;"function"==typeof t.dragDrop&&("INPUT"===t.tagName||"SELECT"===t.tagName||"TEXTAREA"===t.tagName||t.isContentEditable||(e.preventDefault(),t.dragDrop()))}},{key:"window",get:function(){return this.context&&this.context.window?this.context.window:"undefined"!=typeof window?window:void 0}}]),e}();t.default=d},function(e,t,n){var r=n(8),o=n(21),a=n(155),i=n(156),u=Object.prototype,c=u.hasOwnProperty,s=r(function(e,t){e=Object(e);var n=-1,r=t.length,s=r>2?t[2]:void 0;for(s&&a(t[0],t[1],s)&&(r=1);++n<r;)for(var l=t[n],f=i(l),d=-1,p=f.length;++d<p;){var h=f[d],g=e[h];(void 0===g||o(g,u[h])&&!c.call(e,h))&&(e[h]=l[h])}return e});e.exports=s},function(e,t,n){var r=n(21),o=n(27),a=n(54),i=n(7);e.exports=function(e,t,n){if(!i(n))return!1;var u=typeof t;return!!("number"==u?o(n)&&a(t,n.length):"string"==u&&t in n)&&r(n[t],e)}},function(e,t,n){var r=n(157),o=n(164),a=n(27);e.exports=function(e){return a(e)?r(e,!0):o(e)}},function(e,t,n){var r=n(158),o=n(45),a=n(4),i=n(159),u=n(54),c=n(161),s=Object.prototype.hasOwnProperty;e.exports=function(e,t){var n=a(e),l=!n&&o(e),f=!n&&!l&&i(e),d=!n&&!l&&!f&&c(e),p=n||l||f||d,h=p?r(e.length,String):[],g=h.length;for(var v in e)!t&&!s.call(e,v)||p&&("length"==v||f&&("offset"==v||"parent"==v)||d&&("buffer"==v||"byteLength"==v||"byteOffset"==v)||u(v,g))||h.push(v);return h}},function(e,t){e.exports=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}},function(e,t,n){(function(e){var r=n(5),o=n(160),a="object"==typeof t&&t&&!t.nodeType&&t,i=a&&"object"==typeof e&&e&&!e.nodeType&&e,u=i&&i.exports===a?r.Buffer:void 0,c=(u?u.isBuffer:void 0)||o;e.exports=c}).call(this,n(55)(e))},function(e,t){e.exports=function(){return!1}},function(e,t,n){var r=n(162),o=n(25),a=n(163),i=a&&a.isTypedArray,u=i?o(i):r;e.exports=u},function(e,t,n){var r=n(9),o=n(42),a=n(6),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,e.exports=function(e){return a(e)&&o(e.length)&&!!i[r(e)]}},function(e,t,n){(function(e){var r=n(34),o="object"==typeof t&&t&&!t.nodeType&&t,a=o&&"object"==typeof e&&e&&!e.nodeType&&e,i=a&&a.exports===o&&r.process,u=function(){try{return i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=u}).call(this,n(55)(e))},function(e,t,n){var r=n(7),o=n(165),a=n(166),i=Object.prototype.hasOwnProperty;e.exports=function(e){if(!r(e))return a(e);var t=o(e),n=[];for(var u in e)("constructor"!=u||!t&&i.call(e,u))&&n.push(u);return n}},function(e,t){var n=Object.prototype;e.exports=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||n)}},function(e,t){e.exports=function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=Object.prototype.hasOwnProperty,a=0;a<n.length;a+=1){if(!o.call(t,n[a])||e[n[a]]!==t[n[a]])return!1;var i=e[n[a]],u=t[n[a]];if(i!==u)return!1}return!0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=i(n(169)),a=i(n(37));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.entered=[]}return r(e,[{key:"enter",value:function(e){var t=this.entered.length;return this.entered=(0,o.default)(this.entered.filter(function(t){return document.documentElement.contains(t)&&(!t.contains||t.contains(e))}),[e]),0===t&&this.entered.length>0}},{key:"leave",value:function(e){var t=this.entered.length;return this.entered=(0,a.default)(this.entered.filter(function(e){return document.documentElement.contains(e)}),e),t>0&&0===this.entered.length}},{key:"reset",value:function(){this.entered=[]}}]),e}();t.default=u},function(e,t,n){var r=n(44),o=n(8),a=n(46),i=n(15),u=o(function(e){return a(r(e,1,i,!0))});e.exports=u},function(e,t,n){var r=n(39),o="Expected a function";function a(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(o);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=e.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(a.Cache||r),n}a.Cache=r,e.exports=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getNodeClientOffset=c,t.getEventClientOffset=function(e){return{x:e.clientX,y:e.clientY}},t.getDragPreviewOffset=function(e,t,n,r,a){var u=(w=t,"IMG"===w.nodeName&&((0,o.isFirefox)()||!document.documentElement.contains(w))),s=c(u?e:t),l={x:n.x-s.x,y:n.y-s.y},f=e.offsetWidth,d=e.offsetHeight,p=r.anchorX,h=r.anchorY,g=function(e,t,n,r){var a=e?t.width:n,i=e?t.height:r;(0,o.isSafari)()&&e&&(i/=window.devicePixelRatio,a/=window.devicePixelRatio);return{dragPreviewWidth:a,dragPreviewHeight:i}}(u,t,f,d),v=g.dragPreviewWidth,y=g.dragPreviewHeight,b=a.offsetX,m=a.offsetY,O=0===m||m;var w;return{x:0===b||b?b:new i.default([0,.5,1],[l.x,l.x/f*v,l.x+v-f]).interpolate(p),y:O?m:function(){var e=new i.default([0,.5,1],[l.y,l.y/d*y,l.y+y-d]).interpolate(h);(0,o.isSafari)()&&u&&(e+=(window.devicePixelRatio-1)*y);return e}()}};var r,o=n(56),a=n(172),i=(r=a)&&r.__esModule?r:{default:r};var u=1;function c(e){var t=e.nodeType===u?e:e.parentElement;if(!t)return null;var n=t.getBoundingClientRect(),r=n.top;return{x:n.left,y:r}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=t.length,o=[],a=0;a<r;a++)o.push(a);o.sort(function(e,n){return t[e]<t[n]?-1:1});for(var i=[],u=[],c=[],s=void 0,l=void 0,f=0;f<r-1;f++)s=t[f+1]-t[f],l=n[f+1]-n[f],u.push(s),i.push(l),c.push(l/s);for(var d=[c[0]],p=0;p<u.length-1;p++){var h=c[p],g=c[p+1];if(h*g<=0)d.push(0);else{s=u[p];var v=u[p+1],y=s+v;d.push(3*y/((y+v)/h+(y+s)/g))}}d.push(c[c.length-1]);for(var b=[],m=[],O=void 0,w=0;w<d.length-1;w++){O=c[w];var _=d[w],D=1/u[w],x=_+d[w+1]-O-O;b.push((O-_-x)*D),m.push(x*D*D)}this.xs=t,this.ys=n,this.c1s=d,this.c2s=b,this.c3s=m}return r(e,[{key:"interpolate",value:function(e){var t=this.xs,n=this.ys,r=this.c1s,o=this.c2s,a=this.c3s,i=t.length-1;if(e===t[i])return n[i];for(var u=0,c=a.length-1,s=void 0;u<=c;){var l=t[s=Math.floor(.5*(u+c))];if(l<e)u=s+1;else{if(!(l>e))return n[s];c=s-1}}var f=e-t[i=Math.max(0,c)],d=f*f;return n[i]+r[i]*f+o[i]*d+a[i]*f*d}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.createNativeDragSource=function(e){var t=c[e],n=t.exposeProperty,r=t.matchesTypes,a=t.getData;return function(){function e(){var t,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.item=(t={},(r={})[n]=r[n]||{},r[n].get=function(){return console.warn("Browser doesn't allow reading \""+n+'" until the drop event.'),null},function(e,t){for(var n in t){var r=t[n];r.configurable=r.enumerable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,n,r)}}(t,r),t)}return o(e,[{key:"mutateItemByReadingDataTransfer",value:function(e){delete this.item[n],this.item[n]=a(e,r)}},{key:"canDrag",value:function(){return!0}},{key:"beginDrag",value:function(){return this.item}},{key:"isDragging",value:function(e,t){return t===e.getSourceId()}},{key:"endDrag",value:function(){}}]),e}()},t.matchNativeItemType=function(e){var t=Array.prototype.slice.call(e.types||[]);return Object.keys(c).filter(function(e){var n=c[e].matchesTypes;return n.some(function(e){return t.indexOf(e)>-1})})[0]||null};var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(31));function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t,n){var r=t.reduce(function(t,n){return t||e.getData(n)},null);return null!=r?r:n}var c=(i(r={},a.FILE,{exposeProperty:"files",matchesTypes:["Files"],getData:function(e){return Array.prototype.slice.call(e.files)}}),i(r,a.URL,{exposeProperty:"urls",matchesTypes:["Url","text/uri-list"],getData:function(e,t){return u(e,t,"").split("\n")}}),i(r,a.TEXT,{exposeProperty:"text",matchesTypes:["Text","text/plain"],getData:function(e,t){return u(e,t,"")}}),r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){r||((r=new Image).src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==");return r};var r=void 0},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(0)),o=i(n(2)),a=i(n(176));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=e.layout,n=e.widgets,o=e.onRemove,i=e.editable,u=e.onAdd,c=e.frameComponent,s=e.rowClass,l=e.onMove,f=e.onEdit,d=e.editableColumnClass,p=e.droppableColumnClass,h=e.addWidgetComponentText,g=e.addWidgetComponent,v=e.onRemoveTab,y=e.onAddTab,b=t.rows.map(function(e,b){return r.default.createElement(a.default,{key:b,rowClass:s,columns:e.columns,widgets:n,onRemove:o,layout:t,rowIndex:b,editable:i,onAdd:u,onMove:l,onEdit:f,frameComponent:c,editableColumnClass:d,droppableColumnClass:p,addWidgetComponentText:h,addWidgetComponent:g,onRemoveTab:v,onAddTab:y})});return r.default.createElement("div",{id:"Layout-Renderer",key:"Layout-Renderer",style:{height:"100%"}},b)};u.propTypes={layout:o.default.object,widgets:o.default.object,editable:o.default.bool,onRemove:o.default.func,onAdd:o.default.func,frameComponent:o.default.func,rowClass:o.default.string,onMove:o.default.func,onEdit:o.default.func,editableColumnClass:o.default.string,droppableColumnClass:o.default.string,addWidgetComponent:o.default.func,addWidgetComponentText:o.default.string},u.defaultProps={layout:{rows:[]}},t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(0)),o=i(n(2)),a=i(n(177));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.rowClass,n=e.columns,o=e.onRemove,i=e.layout,u=e.rowIndex,c=e.editable,s=e.frameComponent,l=e.editableColumnClass,f=e.droppableColumnClass,d=e.addWidgetComponentText,p=e.addWidgetComponent,h=e.onAdd,g=e.onMove,v=e.widgets,y=e.onRemoveTab,b=e.onAddTab,m=n.map(function(e,t){return r.default.createElement(a.default,{key:t,className:e.className,onAdd:h,layout:i,rowIndex:u,columnIndex:t,editable:c,onMove:g,editableColumnClass:l,droppableColumnClass:f,addWidgetComponent:p,addWidgetComponentText:d,onRemove:o,frameComponent:s,widgets:v,onRemoveTab:y,onAddTab:b})});return r.default.createElement("div",{id:"row"+u,key:"row"+u,style:{height:"100%"},className:t},m)}u.propTypes={rowClass:o.default.string,columns:o.default.array,widgets:o.default.object,layout:o.default.object,rowIndex:o.default.number,editable:o.default.bool,frameComponent:o.default.func,editableColumnClass:o.default.string,droppableColumnClass:o.default.string,addWidgetComponent:o.default.func,addWidgetComponentText:o.default.string,onAdd:o.default.func,onRemove:o.default.func,onMove:o.default.func,onEdit:o.default.func},u.defaultProps={rowClass:"row"},t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=d(a),u=d(n(2)),c=n(18),s=n(57),l=n(32),f=d(n(179));function d(e){return e&&e.__esModule?e:{default:e}}var p={drop:function(e,t){var n=e.layout,r=e.rowIndex,o=e.columnIndex,a=e.onMove,i=t.getItem();i.columnIndex===o&&i.rowIndex===r||a((0,l.moveWidget)(n,{rowIndex:i.rowIndex,columnIndex:i.columnIndex,widgetIndex:i.widgetIndex},{rowIndex:r,columnIndex:o},i.widgetName))}},h=(0,c.DropTarget)(s.WIDGET,p,function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver(),canDrop:t.canDrop()}})(r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.layout,r=e.rowIndex,o=e.columnIndex,a=e.editable,u=e.connectDropTarget,c=e.onAdd,s=e.isOver,l=e.canDrop,d=e.editableColumnClass,p=e.droppableColumnClass,h=e.addWidgetComponentText,g=e.addWidgetComponent,v=e.onMove,y=e.onRemove,b=e.frameComponent,m=e.widgets,O=e.key,w=e.onRemoveTab,_=e.onAddTab,D=t;D=a?t+" "+d:D,D=s&&l?D+" "+p:D;return u(i.default.createElement("div",{style:{height:"100%"},id:"column"+o,key:"column"+o,className:D},i.default.createElement(f.default,{key:O,tabs:n.rows[r].columns[o].tabs,layout:n,rowIndex:r,columnIndex:o,widgets:m,onRemove:y,frameComponent:b,onMove:v,editable:a,onAdd:c,addWidgetComponentText:h,addWidgetComponent:g,onRemoveTab:w,onAddTab:_})))}}]),t}())||r;h.propTypes={children:u.default.node,className:u.default.string,onAdd:u.default.func,layout:u.default.object,rowIndex:u.default.number,columnIndex:u.default.number,editable:u.default.bool,isOver:u.default.bool,canDrop:u.default.bool,editableColumnClass:u.default.string,droppableColumnClass:u.default.string,addWidgetComponentText:u.default.string,connectDropTarget:u.default.func,addWidgetComponent:u.default.func},h.defaultProps={editableColumnClass:"editable-column",droppableColumnClass:"droppable-column"},t.default=h},function(e,t,n){var r=n(1),o=Object.prototype.hasOwnProperty,a=Array.prototype.splice,i=Object.prototype.toString,u=function(e){return i.call(e).slice(8,-1)},c=Object.assign||function(e,t){return s(t).forEach(function(n){o.call(t,n)&&(e[n]=t[n])}),e},s="function"==typeof Object.getOwnPropertySymbols?function(e){return Object.keys(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.keys(e)};function l(e){if(Array.isArray(e))return c(e.constructor(e.length),e);if("Map"===u(e))return new Map(e);if("Set"===u(e))return new Set(e);if(e&&"object"==typeof e){var t=e.constructor&&e.constructor.prototype;return c(Object.create(t||null),e)}return e}function f(){var e=c({},d);return t.extend=function(t,n){e[t]=n},t.isEquals=function(e,t){return e===t},t;function t(n,a){if("function"==typeof a)return a(n);Array.isArray(n)&&Array.isArray(a)||r(!Array.isArray(a),"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."),r("object"==typeof a&&null!==a,"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: %s.",Object.keys(e).join(", "));var i=n;return s(a).forEach(function(r){if(o.call(e,r)){var u=n===i;i=e[r](a[r],i,a,n),u&&t.isEquals(i,n)&&(i=n)}else{var c=t(n[r],a[r]);t.isEquals(c,i[r])&&(void 0!==c||o.call(n,r))||(i===n&&(i=l(n)),i[r]=c)}}),i}}var d={$push:function(e,t,n){return h(t,n,"$push"),e.length?t.concat(e):t},$unshift:function(e,t,n){return h(t,n,"$unshift"),e.length?e.concat(t):t},$splice:function(e,t,n,o){return function(e,t){r(Array.isArray(e),"Expected $splice target to be an array; got %s",e),v(t.$splice)}(t,n),e.forEach(function(e){v(e),t===o&&e.length&&(t=l(o)),a.apply(t,e)}),t},$set:function(e,t,n){return function(e){r(1===Object.keys(e).length,"Cannot have more than one key in an object with $set")}(n),e},$toggle:function(e,t){g(e,"$toggle");var n=e.length?l(t):t;return e.forEach(function(e){n[e]=!t[e]}),n},$unset:function(e,t,n,r){return g(e,"$unset"),e.forEach(function(e){Object.hasOwnProperty.call(t,e)&&(t===r&&(t=l(r)),delete t[e])}),t},$add:function(e,t,n,r){return y(t,"$add"),g(e,"$add"),"Map"===u(t)?e.forEach(function(e){var n=e[0],o=e[1];t===r&&t.get(n)!==o&&(t=l(r)),t.set(n,o)}):e.forEach(function(e){t!==r||t.has(e)||(t=l(r)),t.add(e)}),t},$remove:function(e,t,n,r){return y(t,"$remove"),g(e,"$remove"),e.forEach(function(e){t===r&&t.has(e)&&(t=l(r)),t.delete(e)}),t},$merge:function(e,t,n,o){var a,i;return a=t,r((i=e)&&"object"==typeof i,"update(): $merge expects a spec of type 'object'; got %s",i),r(a&&"object"==typeof a,"update(): $merge expects a target of type 'object'; got %s",a),s(e).forEach(function(n){e[n]!==t[n]&&(t===o&&(t=l(o)),t[n]=e[n])}),t},$apply:function(e,t){var n;return r("function"==typeof(n=e),"update(): expected spec of $apply to be a function; got %s.",n),e(t)}},p=f();function h(e,t,n){r(Array.isArray(e),"update(): expected target of %s to be an array; got %s.",n,e),g(t[n],n)}function g(e,t){r(Array.isArray(e),"update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?",t,e)}function v(e){r(Array.isArray(e),"update(): expected spec of $splice to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?",e)}function y(e,t){var n=u(e);r("Map"===n||"Set"===n,"update(): %s expects a target of type Set or Map; got %s",t,n)}e.exports=p,e.exports.default=p,e.exports.newContext=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=s(o),i=s(n(180)),u=s(n(186)),c=s(n(187));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.tabs,n=e.layout,r=e.rowIndex,o=e.columnIndex,s=e.onRemove,l=e.frameComponent,f=e.onMove,d=e.editable,p=e.onAdd,h=e.addWidgetComponentText,g=e.addWidgetComponent,v=e.widgets,y=e.onRemoveTab,b=e.onAddTab,m={visibility:t.length<2&&!d?"hidden":"visible"},O={visibility:d?"visible":"hidden"},w=t.map(function(e,t){return a.default.createElement(u.default,{key:"tab-header-"+r.toString()+o.toString()+t.toString(),rowIndex:r,columnIndex:o,tabIndex:t,active:t?null:"active",visibilityStyle:m})});w.push(a.default.createElement(c.default,{key:"tab-header-"+r.toString()+o.toString()+"-add",rowIndex:r,columnIndex:o,visibilityStyle:O,onAddTab:b}));var _=t.map(function(e,t){return a.default.createElement(i.default,{key:"tab-body"+r.toString()+o.toString()+t.toString(),layout:n,rowIndex:r,columnIndex:o,tabIndex:t,widgets:v,onRemove:s,frameComponent:l,onMove:f,editable:d,onAdd:p,addWidgetComponentText:h,addWidgetComponent:g,active:t?null:"active",removeTabVisibilty:O,onRemoveTab:y})}),D={height:"100%"};return a.default.createElement("div",{style:D},a.default.createElement("ul",{className:"nav nav-tabs"},w),a.default.createElement("div",{style:D,className:"tab-content"},_))}}]),t}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=c(o),i=c(n(181)),u=c(n(182));function c(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.layout,n=e.rowIndex,r=e.columnIndex,c=e.tabIndex,s=e.widgets,l=e.onRemove,f=e.frameComponent,d=e.onMove,p=e.editable,h=e.onAdd,g=e.addWidgetComponentText,v=e.addWidgetComponent,y=e.active,b=e.removeTabVisibilty,m=e.onRemoveTab,O=null;O=v?(0,o.createElement)(v,{text:g,onClick:function(){h(t,n,r,c)}}):a.default.createElement(i.default,{text:g,onClick:function(){h(t,n,r,c)}});var w=y?"tab-pane fade in active":"tab-pane fade in";return a.default.createElement("div",{id:"tab"+n.toString()+r.toString()+c.toString(),className:w,style:{height:"100%"}},a.default.createElement("div",{style:b,className:"btn-group"},a.default.createElement("button",{style:b,type:"button",className:"btn btn-outline-info","data-toggle":"modal","data-target":"#exampleModal"},a.default.createElement("span",{className:"glyphicon glyphicon-cog"})),a.default.createElement("button",{style:b,onClick:function(){m(n,r,c)},type:"button",className:"btn btn-outline-danger"},a.default.createElement("span",{className:"glyphicon glyphicon-trash"}))),p&&O,a.default.createElement(u.default,{key:"widgets"+n.toString()+r.toString()+c.toString(),widgets:this.props.layout.rows[n].columns[r].tabs[c].widgets,containerClassName:this.props.layout.rows[n].columns[r].containerClassName,widgetTypes:s,onRemove:l,layout:t,rowIndex:n,columnIndex:r,tabIndex:c,editable:p,frameComponent:f,onMove:d}))}}]),t}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(0)),o=a(n(2));function a(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t=e.text,n=e.onClick;return r.default.createElement("div",{className:"add-widget-button",onClick:n},r.default.createElement("a",{className:"add-widget-link"},t))};i.propTypes={onClick:o.default.func,text:o.default.string},i.defaultProps={text:"Add Widget"},t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=u(r),a=u(n(2)),i=u(n(183));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){var t=e.widgets,n=e.widgetTypes,a=e.onRemove,u=e.layout,c=e.columnIndex,s=e.rowIndex,l=e.tabIndex,f=e.editable,d=e.frameComponent,p=e.onMove,h=e.containerClassName,g=e.onEdit,v=t.map(function(e,t){return o.default.createElement(i.default,{key:"widgetframe-"+s.toString()+c.toString()+l.toString()+t.toString(),widgetName:e.key,title:n[e.key].title,onRemove:a,layout:u,columnIndex:c,rowIndex:s,tabIndex:l,widgetIndex:t,editable:f,frameComponent:d,frameSettings:n[e.key].frameSettings,onMove:p,onEdit:g},(0,r.createElement)(n[e.key].type,n[e.key].props))});return o.default.createElement("div",{style:{height:"100%"},className:h},v)};c.propTypes={containerClassName:a.default.string,widgets:a.default.array,widgetTypes:a.default.object,onRemove:a.default.func,layout:a.default.object,columnIndex:a.default.number,rowIndex:a.default.number,editable:a.default.bool,frameComponent:a.default.func,onMove:a.default.func,onEdit:a.default.func},t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),u=h(i),c=h(n(2)),s=n(184),l=n(18),f=n(57),d=n(32),p=h(n(185));function h(e){return e&&e.__esModule?e:{default:e}}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var v={hover:function(e,t,n){var r=t.getItem().widgetIndex,o=e.widgetIndex;if(r!==o){var a=(0,s.findDOMNode)(n).getBoundingClientRect(),i=(a.bottom-a.top)/2,u=t.getClientOffset().y-a.top;if(!(r<o&&u<i||r>o&&u>i)){var c=e.layout,l=e.columnIndex,f=e.rowIndex;if(t.getItem().rowIndex===f&&t.getItem().columnIndex===l){var p=(0,d.sortWidget)(c,{rowIndex:f,columnIndex:l,widgetIndex:r},{rowIndex:f,columnIndex:l,widgetIndex:o},t.getItem().widgetName);e.onMove(p),t.getItem().widgetIndex=o}}}}},y=(0,l.DropTarget)(f.WIDGET,v,function(e){return{connectDropTarget:e.dropTarget()}})(r=(0,l.DragSource)(f.WIDGET,{beginDrag:function(e){return{widgetName:e.widgetName,rowIndex:e.rowIndex,columnIndex:e.columnIndex,widgetIndex:e.widgetIndex}}},function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}})(r=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=g(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.edit=function(){var e=r.props,t=e.layout,n=e.rowIndex,o=e.columnIndex,a=e.tabIndex,i=e.widgetIndex;r.props.onEdit(t.rows[n].columns[o].tabs[a].widgets[i].key)},r.remove=function(){var e=r.props,t=e.layout,n=e.rowIndex,o=e.columnIndex,a=e.tabIndex,i=e.widgetIndex,u=(0,d.removeWidget)(t,n,o,a,i);r.props.onRemove(u,n,o,a,i)},g(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),a(t,[{key:"render",value:function(){var e=this.props,t=e.frameComponent,n=e.children,r=e.editable,a=e.title,c=e.frameSettings,s=e.connectDragSource,l=e.connectDropTarget,f=e.isDragging,d=e.rowIndex,h=e.columnIndex,g=e.tabIndex,v=e.widgetIndex,y=e.layout,b=null;b=t?(0,i.createElement)(t,{children:n,editable:r,title:a,settings:c,onRemove:this.remove,onEdit:this.edit,rowIndex:d,columnIndex:h,tabIndex:g,widgetIndex:v,isDragging:f}):u.default.createElement(p.default,{title:a,editable:r,children:n,onRemove:this.remove,onEdit:this.edit});var m=null;try{m=y.rows[d].columns[h].tabs[g].widgetSizes[v]}catch(e){m={height:100/y.rows[d].columns[h].tabs[g].widgets.length+"%"}}var O=f?0:1,w=u.default.createElement("div",{style:o({opacity:O},m)},b);return r?s(l(w)):w}}]),t}())||r)||r;y.propTypes={children:c.default.element,layout:c.default.object,columnIndex:c.default.number,rowIndex:c.default.number,widgetIndex:c.default.number,editable:c.default.bool,frameComponent:c.default.func,frameSettings:c.default.object,widgetName:c.default.string,title:c.default.string,isDragging:c.default.bool,connectDragSource:c.default.func,connectDropTarget:c.default.func,onRemove:c.default.func,onEdit:c.default.func},y.defaultProps={frameSettings:{}},t.default=y},function(e,n){e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(0)),o=a(n(2));function a(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t=e.children,n=e.onRemove,o=e.onEdit,a=e.editable,i=e.title;return r.default.createElement("div",{className:"defaultWidgetFrame"},r.default.createElement("div",{className:"defaultWidgetFrameHeader"},r.default.createElement("span",{className:"title"},i),a&&r.default.createElement("a",{className:"edit",onClick:function(){return o()}},"Edit"),a&&r.default.createElement("a",{className:"remove",onClick:function(){return n()}},"Remove")),t)};i.propTypes={editable:o.default.bool,children:o.default.node,onRemove:o.default.func,title:o.default.string},t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=(r=a)&&r.__esModule?r:{default:r};var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.rowIndex,n=e.columnIndex,r=e.tabIndex,o=e.active,a=e.visibilityStyle,u=o?"active":null;return i.default.createElement("li",{className:u,style:a},i.default.createElement("a",{"data-toggle":"tab",href:"#tab"+t.toString()+n.toString()+r.toString()},"Tab "+(r+1).toString()))}}]),t}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=(r=a)&&r.__esModule?r:{default:r};var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.rowIndex,n=e.columnIndex,r=e.visibilityStyle,o=e.onAddTab;return i.default.createElement("li",{style:r,className:""},i.default.createElement("a",{href:"#",onClick:function(){return o(t,n)}},i.default.createElement("span",{className:"round-tabs two"},i.default.createElement("i",{className:"glyphicon glyphicon-plus"}))))}}]),t}();t.default=u}])});
//# sourceMappingURL=lib.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
var hasClass = function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
};

var addClass = function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += ' ' + className;
  }
};

var removeClass = function removeClass(elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
};

var escapeHtml = function escapeHtml(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

var _show = function _show(elem) {
  elem.style.opacity = '';
  elem.style.display = 'block';
};

var show = function show(elems) {
  if (elems && !elems.length) {
    return _show(elems);
  }
  for (var i = 0; i < elems.length; ++i) {
    _show(elems[i]);
  }
};

var _hide = function _hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
};

var hide = function hide(elems) {
  if (elems && !elems.length) {
    return _hide(elems);
  }
  for (var i = 0; i < elems.length; ++i) {
    _hide(elems[i]);
  }
};

var isDescendant = function isDescendant(parent, child) {
  var node = child.parentNode;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};

var getTopMargin = function getTopMargin(elem) {
  elem.style.left = '-9999px';
  elem.style.display = 'block';

  var height = elem.clientHeight,
      padding;
  if (typeof getComputedStyle !== 'undefined') {
    // IE 8
    padding = parseInt(getComputedStyle(elem).getPropertyValue('padding-top'), 10);
  } else {
    padding = parseInt(elem.currentStyle.padding);
  }

  elem.style.left = '';
  elem.style.display = 'none';
  return '-' + parseInt((height + padding) / 2) + 'px';
};

var fadeIn = function fadeIn(elem, interval) {
  if (+elem.style.opacity < 1) {
    interval = interval || 16;
    elem.style.opacity = 0;
    elem.style.display = 'block';
    var last = +new Date();
    var tick = (function (_tick) {
      function tick() {
        return _tick.apply(this, arguments);
      }

      tick.toString = function () {
        return _tick.toString();
      };

      return tick;
    })(function () {
      elem.style.opacity = +elem.style.opacity + (new Date() - last) / 100;
      last = +new Date();

      if (+elem.style.opacity < 1) {
        setTimeout(tick, interval);
      }
    });
    tick();
  }
  elem.style.display = 'block'; //fallback IE8
};

var fadeOut = function fadeOut(elem, interval) {
  interval = interval || 16;
  elem.style.opacity = 1;
  var last = +new Date();
  var tick = (function (_tick2) {
    function tick() {
      return _tick2.apply(this, arguments);
    }

    tick.toString = function () {
      return _tick2.toString();
    };

    return tick;
  })(function () {
    elem.style.opacity = +elem.style.opacity - (new Date() - last) / 100;
    last = +new Date();

    if (+elem.style.opacity > 0) {
      setTimeout(tick, interval);
    } else {
      elem.style.display = 'none';
    }
  });
  tick();
};

var fireClick = function fireClick(node) {
  // Taken from http://www.nonobtrusive.com/2011/11/29/programatically-fire-crossbrowser-click-event-with-javascript/
  // Then fixed for today's Chrome browser.
  if (typeof MouseEvent === 'function') {
    // Up-to-date approach
    var mevt = new MouseEvent('click', {
      view: window,
      bubbles: false,
      cancelable: true
    });
    node.dispatchEvent(mevt);
  } else if (document.createEvent) {
    // Fallback
    var evt = document.createEvent('MouseEvents');
    evt.initEvent('click', false, false);
    node.dispatchEvent(evt);
  } else if (document.createEventObject) {
    node.fireEvent('onclick');
  } else if (typeof node.onclick === 'function') {
    node.onclick();
  }
};

var stopEventPropagation = function stopEventPropagation(e) {
  // In particular, make sure the space bar doesn't scroll the main window.
  if (typeof e.stopPropagation === 'function') {
    e.stopPropagation();
    e.preventDefault();
  } else if (window.event && window.event.hasOwnProperty('cancelBubble')) {
    window.event.cancelBubble = true;
  }
};

exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.escapeHtml = escapeHtml;
exports._show = _show;
exports.show = show;
exports._hide = _hide;
exports.hide = hide;
exports.isDescendant = isDescendant;
exports.getTopMargin = getTopMargin;
exports.fadeIn = fadeIn;
exports.fadeOut = fadeOut;
exports.fireClick = fireClick;
exports.stopEventPropagation = stopEventPropagation;

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object),
    nativeMax = Math.max;

/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = assign;


/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(20);
var DOMFactories = __webpack_require__(255);
var PropTypes = __webpack_require__(17);
var ExecutionEnvironment = __webpack_require__(587);
var ModalPortal = React.createFactory(__webpack_require__(582));
var ariaAppHider = __webpack_require__(583);
var refCount = __webpack_require__(585);
var elementClass = __webpack_require__(389);
var renderSubtreeIntoContainer = __webpack_require__(20).unstable_renderSubtreeIntoContainer;
var Assign = __webpack_require__(58);
var createReactClass = __webpack_require__(118);

var SafeHTMLElement = ExecutionEnvironment.canUseDOM ? window.HTMLElement : {};
var AppElement = ExecutionEnvironment.canUseDOM ? document.body : {appendChild: function() {}};

function getParentElement(parentSelector) {
  return parentSelector();
}

var Modal = createReactClass({

  displayName: 'Modal',
  statics: {
    setAppElement: function(element) {
        AppElement = ariaAppHider.setElement(element);
    },
    injectCSS: function() {
      "production" !== "development"
        && console.warn('React-Modal: injectCSS has been deprecated ' +
                        'and no longer has any effect. It will be removed in a later version');
    }
  },

  propTypes: {
    isOpen: PropTypes.bool.isRequired,
    style: PropTypes.shape({
      content: PropTypes.object,
      overlay: PropTypes.object
    }),
    portalClassName: PropTypes.string,
    bodyOpenClassName: PropTypes.string,
    appElement: PropTypes.instanceOf(SafeHTMLElement),
    onAfterOpen: PropTypes.func,
    onRequestClose: PropTypes.func,
    closeTimeoutMS: PropTypes.number,
    ariaHideApp: PropTypes.bool,
    shouldCloseOnOverlayClick: PropTypes.bool,
    parentSelector: PropTypes.func,
    role: PropTypes.string,
    contentLabel: PropTypes.string.isRequired
  },

  getDefaultProps: function () {
    return {
      isOpen: false,
      portalClassName: 'ReactModalPortal',
      bodyOpenClassName: 'ReactModal__Body--open',
      ariaHideApp: true,
      closeTimeoutMS: 0,
      shouldCloseOnOverlayClick: true,
      parentSelector: function () { return document.body; }
    };
  },

  componentDidMount: function() {
    this.node = document.createElement('div');
    this.node.className = this.props.portalClassName;

    if (this.props.isOpen) refCount.add(this);

    var parent = getParentElement(this.props.parentSelector);
    parent.appendChild(this.node);
    this.renderPortal(this.props);
  },

  componentWillUpdate: function(newProps) {
    if(newProps.portalClassName !== this.props.portalClassName) {
      this.node.className = newProps.portalClassName;
    }
  },

  componentWillReceiveProps: function(newProps) {
    if (newProps.isOpen) refCount.add(this);
    if (!newProps.isOpen) refCount.remove(this);
    var currentParent = getParentElement(this.props.parentSelector);
    var newParent = getParentElement(newProps.parentSelector);

    if(newParent !== currentParent) {
      currentParent.removeChild(this.node);
      newParent.appendChild(this.node);
    }

    this.renderPortal(newProps);
  },

  componentWillUnmount: function() {
    if (!this.node) return;

    refCount.remove(this);

    if (this.props.ariaHideApp) {
      ariaAppHider.show(this.props.appElement);
    }

    var state = this.portal.state;
    var now = Date.now();
    var closesAt = state.isOpen && this.props.closeTimeoutMS
      && (state.closesAt
        || now + this.props.closeTimeoutMS);

    if (closesAt) {
      if (!state.beforeClose) {
        this.portal.closeWithTimeout();
      }

      var that = this;
      setTimeout(function() { that.removePortal(); }, closesAt - now);
    } else {
      this.removePortal();
    }
  },

  removePortal: function() {
    ReactDOM.unmountComponentAtNode(this.node);
    var parent = getParentElement(this.props.parentSelector);
    parent.removeChild(this.node);

    if (refCount.count() === 0) {
      elementClass(document.body).remove(this.props.bodyOpenClassName);
    }
  },

  renderPortal: function(props) {
    if (props.isOpen || refCount.count() > 0) {
      elementClass(document.body).add(this.props.bodyOpenClassName);
    } else {
      elementClass(document.body).remove(this.props.bodyOpenClassName);
    }

    if (props.ariaHideApp) {
      ariaAppHider.toggle(props.isOpen, props.appElement);
    }

    this.portal = renderSubtreeIntoContainer(this, ModalPortal(Assign({}, props, {defaultStyles: Modal.defaultStyles})), this.node);
  },

  render: function () {
    return DOMFactories.noscript();
  }
});

Modal.defaultStyles = {
  overlay: {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.75)'
  },
  content: {
    position                : 'absolute',
    top                     : '40px',
    left                    : '40px',
    right                   : '40px',
    bottom                  : '40px',
    border                  : '1px solid #ccc',
    background              : '#fff',
    overflow                : 'auto',
    WebkitOverflowScrolling : 'touch',
    borderRadius            : '4px',
    outline                 : 'none',
    padding                 : '20px'
  }
}

module.exports = Modal


/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(1);
var DOMFactories = __webpack_require__(255);
var focusManager = __webpack_require__(584);
var scopeTab = __webpack_require__(586);
var Assign = __webpack_require__(58);
var createReactClass = __webpack_require__(118);

var div = DOMFactories.div;

// so that our CSS is statically analyzable
var CLASS_NAMES = {
  overlay: 'ReactModal__Overlay',
  content: 'ReactModal__Content'
};

var ModalPortal = module.exports = createReactClass({

  displayName: 'ModalPortal',
  shouldClose: null,

  getDefaultProps: function() {
    return {
      style: {
        overlay: {},
        content: {}
      }
    };
  },

  getInitialState: function() {
    return {
      afterOpen: false,
      beforeClose: false
    };
  },

  componentDidMount: function() {
    // Focus needs to be set when mounting and already open
    if (this.props.isOpen) {
      this.setFocusAfterRender(true);
      this.open();
    }
  },

  componentWillUnmount: function() {
    clearTimeout(this.closeTimer);
  },

  componentWillReceiveProps: function(newProps) {
    // Focus only needs to be set once when the modal is being opened
    if (!this.props.isOpen && newProps.isOpen) {
      this.setFocusAfterRender(true);
      this.open();
    } else if (this.props.isOpen && !newProps.isOpen) {
      this.close();
    }
  },

  componentDidUpdate: function () {
    if (this.focusAfterRender) {
      this.focusContent();
      this.setFocusAfterRender(false);
    }
  },

  setFocusAfterRender: function (focus) {
    this.focusAfterRender = focus;
  },

  afterClose: function () {
    focusManager.returnFocus();
    focusManager.teardownScopedFocus();
  },

  open: function () {
    if (this.state.afterOpen && this.state.beforeClose) {
      clearTimeout(this.closeTimer);
      this.setState({ beforeClose: false });
    } else {
      focusManager.setupScopedFocus(this.node);
      focusManager.markForFocusLater();
      this.setState({isOpen: true}, function() {
        this.setState({afterOpen: true});

        if (this.props.isOpen && this.props.onAfterOpen) {
          this.props.onAfterOpen();
        }
      }.bind(this));
    }
  },

  close: function() {
    if (this.props.closeTimeoutMS > 0)
      this.closeWithTimeout();
    else
      this.closeWithoutTimeout();
  },

  focusContent: function() {
    // Don't steal focus from inner elements
    if (!this.contentHasFocus()) {
      this.refs.content.focus();
    }
  },

  closeWithTimeout: function() {
    var closesAt = Date.now() + this.props.closeTimeoutMS;
    this.setState({beforeClose: true, closesAt: closesAt}, function() {
      this.closeTimer = setTimeout(this.closeWithoutTimeout, this.state.closesAt - Date.now());
    }.bind(this));
  },

  closeWithoutTimeout: function() {
    this.setState({
      beforeClose: false,
      isOpen: false,
      afterOpen: false,
      closesAt: null
    }, this.afterClose);
  },

  handleKeyDown: function(event) {
    if (event.keyCode == 9 /*tab*/) scopeTab(this.refs.content, event);
    if (event.keyCode == 27 /*esc*/) {
      event.preventDefault();
      this.requestClose(event);
    }
  },

  handleOverlayOnClick: function (event) {
    if (this.shouldClose === null) {
      this.shouldClose = true;
    }

    if (this.shouldClose && this.props.shouldCloseOnOverlayClick) {
      if (this.ownerHandlesClose())
        this.requestClose(event);
      else
        this.focusContent();
    }
    this.shouldClose = null;
  },

  handleContentOnClick: function () {
    this.shouldClose = false;
  },

  requestClose: function(event) {
    if (this.ownerHandlesClose())
      this.props.onRequestClose(event);
  },

  ownerHandlesClose: function() {
    return this.props.onRequestClose;
  },

  shouldBeClosed: function() {
    return !this.state.isOpen && !this.state.beforeClose;
  },

  contentHasFocus: function() {
    return document.activeElement === this.refs.content || this.refs.content.contains(document.activeElement);
  },

  buildClassName: function(which, additional) {
    var classNames = (typeof additional === 'object') ? additional : {
      base: CLASS_NAMES[which],
      afterOpen: CLASS_NAMES[which] + "--after-open",
      beforeClose: CLASS_NAMES[which] + "--before-close"
    };
    var className = classNames.base;
    if (this.state.afterOpen) { className += " " + classNames.afterOpen; }
    if (this.state.beforeClose) { className += " " + classNames.beforeClose; }
    return (typeof additional === 'string' && additional) ? [className, additional].join(" ") : className;
  },

  render: function() {
    var contentStyles = (this.props.className) ? {} : this.props.defaultStyles.content;
    var overlayStyles = (this.props.overlayClassName) ? {} : this.props.defaultStyles.overlay;

    return this.shouldBeClosed() ? div() : (
      div({
        ref: "overlay",
        className: this.buildClassName('overlay', this.props.overlayClassName),
        style: Assign({}, overlayStyles, this.props.style.overlay || {}),
        onClick: this.handleOverlayOnClick
      },
        div({
          ref: "content",
          style: Assign({}, contentStyles, this.props.style.content || {}),
          className: this.buildClassName('content', this.props.className),
          tabIndex: "-1",
          onKeyDown: this.handleKeyDown,
          onClick: this.handleContentOnClick,
          role: this.props.role,
          "aria-label": this.props.contentLabel
        },
          this.props.children
        )
      )
    );
  }
});


/***/ }),

/***/ 583:
/***/ (function(module, exports) {

var _element = typeof document !== 'undefined' ? document.body : null;

function setElement(element) {
  if (typeof element === 'string') {
    var el = document.querySelectorAll(element);
    element = 'length' in el ? el[0] : el;
  }
  _element = element || _element;
  return _element;
}

function hide(appElement) {
  validateElement(appElement);
  (appElement || _element).setAttribute('aria-hidden', 'true');
}

function show(appElement) {
  validateElement(appElement);
  (appElement || _element).removeAttribute('aria-hidden');
}

function toggle(shouldHide, appElement) {
  if (shouldHide)
    hide(appElement);
  else
    show(appElement);
}

function validateElement(appElement) {
  if (!appElement && !_element)
    throw new Error('react-modal: You must set an element with `Modal.setAppElement(el)` to make this accessible');
}

function resetForTesting() {
  _element = document.body;
}

exports.toggle = toggle;
exports.setElement = setElement;
exports.show = show;
exports.hide = hide;
exports.resetForTesting = resetForTesting;


/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

var findTabbable = __webpack_require__(282);
var focusLaterElements = [];
var modalElement = null;
var needToFocus = false;

function handleBlur(event) {
  needToFocus = true;
}

function handleFocus(event) {
  if (needToFocus) {
    needToFocus = false;
    if (!modalElement) {
      return;
    }
    // need to see how jQuery shims document.on('focusin') so we don't need the
    // setTimeout, firefox doesn't support focusin, if it did, we could focus
    // the element outside of a setTimeout. Side-effect of this implementation
    // is that the document.body gets focus, and then we focus our element right
    // after, seems fine.
    setTimeout(function() {
      if (modalElement.contains(document.activeElement))
        return;
      var el = (findTabbable(modalElement)[0] || modalElement);
      el.focus();
    }, 0);
  }
}

exports.markForFocusLater = function() {
  focusLaterElements.push(document.activeElement);
};

exports.returnFocus = function() {
  var toFocus = null;
  try {
    toFocus = focusLaterElements.pop();
    toFocus.focus();
    return;
  }
  catch (e) {
    console.warn('You tried to return focus to '+toFocus+' but it is not in the DOM anymore');
  }
};

exports.setupScopedFocus = function(element) {
  modalElement = element;

  if (window.addEventListener) {
    window.addEventListener('blur', handleBlur, false);
    document.addEventListener('focus', handleFocus, true);
  } else {
    window.attachEvent('onBlur', handleBlur);
    document.attachEvent('onFocus', handleFocus);
  }
};

exports.teardownScopedFocus = function() {
  modalElement = null;

  if (window.addEventListener) {
    window.removeEventListener('blur', handleBlur);
    document.removeEventListener('focus', handleFocus);
  } else {
    window.detachEvent('onBlur', handleBlur);
    document.detachEvent('onFocus', handleFocus);
  }
};


/***/ }),

/***/ 585:
/***/ (function(module, exports) {

var modals = [];

module.exports = {
  add: function (element) {
    if (modals.indexOf(element) === -1) {
      modals.push(element);
    }
  },
  remove: function (element) {
    var index = modals.indexOf(element);
    if (index === -1) {
      return;
    }
    modals.splice(index, 1);
  },
  count: function () {
    return modals.length;
  }
};


/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

var findTabbable = __webpack_require__(282);

module.exports = function(node, event) {
  var tabbable = findTabbable(node);
  if (!tabbable.length) {
      event.preventDefault();
      return;
  }
  var finalTabbable = tabbable[event.shiftKey ? 0 : tabbable.length - 1];
  var leavingFinalTabbable = (
    finalTabbable === document.activeElement ||
    // handle immediate shift+tab after opening with mouse
    node === document.activeElement
  );
  if (!leavingFinalTabbable) return;
  event.preventDefault();
  var target = tabbable[event.shiftKey ? tabbable.length - 1 : 0];
  target.focus();
};


/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return ExecutionEnvironment;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = ExecutionEnvironment;
	} else {
		window.ExecutionEnvironment = ExecutionEnvironment;
	}

}());


/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(385);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(32)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js!./style.css", function() {
			var newContent = require("!!../../../css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(386);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(32)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./sweetalert.css", function() {
			var newContent = require("!!../../css-loader/index.js!./sweetalert.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(388);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(32)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./app.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./app.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _propTypes = __webpack_require__(17);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _sweetalert = __webpack_require__(615);

var _sweetalert2 = _interopRequireDefault(_sweetalert);

var _lodash = __webpack_require__(392);

var _lodash2 = _interopRequireDefault(_lodash);

var _mousetrap = __webpack_require__(483);

var _mousetrap2 = _interopRequireDefault(_mousetrap);

var _warning = __webpack_require__(626);

var _warning2 = _interopRequireDefault(_warning);

var _outsideTargetHandlerFactory = __webpack_require__(610);

var _outsideTargetHandlerFactory2 = _interopRequireDefault(_outsideTargetHandlerFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ALLOWS_KEYS = ['title', 'text', 'type', 'customClass', 'showCancelButton', 'showConfirmButton', 'confirmButtonText', 'confirmButtonColor', 'cancelButtonText', 'imageUrl', 'imageSize', 'html', 'animation', 'inputType', 'inputValue', 'inputPlaceholder', 'showLoaderOnConfirm'];

var REMOVED_KEYS = ['timer', 'closeOnConfirm', 'closeOnCancel', 'allowOutsideClick', 'allowEscapeKey'];

var OVERWRITE_PROPS = {
  closeOnConfirm: false,
  closeOnCancel: false,
  allowOutsideClick: false,
  allowEscapeKey: false
};

// reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
var ALLOWS_INPUT_TYPES = ['button', 'checkbox', 'color', 'date', 'datetime', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'];

function warningRemoved(props) {
  REMOVED_KEYS.forEach(function (key) {
    (0, _warning2.default)(props[key] === undefined, '%s has been removed from sweetalert-react, pass `show` props and use event hook instead.', '`' + key + '`');
  });
}

var SweetAlert = function (_Component) {
  _inherits(SweetAlert, _Component);

  /* eslint-disable react/no-unused-prop-types */
  function SweetAlert(props, context) {
    _classCallCheck(this, SweetAlert);

    var _this = _possibleConstructorReturn(this, (SweetAlert.__proto__ || Object.getPrototypeOf(SweetAlert)).call(this, props, context));

    _this._show = false;
    return _this;
  }
  /* eslint-enable react/no-unused-prop-types */

  _createClass(SweetAlert, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setupWithProps(this.props);

      if (this.props.onOutsideClick) {
        this.registerOutsideClickHandler(this.props.onOutsideClick);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.setupWithProps(props);

      var oldOutsideClickHandler = this.props.onOutsideClick;
      var newOutsideClickHandler = props.onOutsideClick;

      if (oldOutsideClickHandler !== newOutsideClickHandler) {
        if (oldOutsideClickHandler && newOutsideClickHandler) {
          this.unregisterOutsideClickHandler();
          this.registerOutsideClickHandler(newOutsideClickHandler);
        } else if (oldOutsideClickHandler && !newOutsideClickHandler) {
          this.unregisterOutsideClickHandler();
        } else if (!oldOutsideClickHandler && newOutsideClickHandler) {
          this.registerOutsideClickHandler(newOutsideClickHandler);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unregisterOutsideClickHandler();
      this.unbindEscapeKey();
    }
  }, {
    key: 'setupWithProps',
    value: function setupWithProps(props) {
      var _this2 = this;

      warningRemoved(props);
      var show = props.show,
          onConfirm = props.onConfirm,
          onCancel = props.onCancel,
          onClose = props.onClose,
          onEscapeKey = props.onEscapeKey;

      if (show) {
        (0, _sweetalert2.default)(_extends({}, (0, _lodash2.default)(props, ALLOWS_KEYS), OVERWRITE_PROPS), function (isConfirm) {
          return _this2.handleClick(isConfirm, onConfirm, onCancel);
        });
        this._show = true;
        if (onEscapeKey) this.bindEscapeKey(onEscapeKey);
      } else {
        this.handleClose(onClose);
      }
    }
  }, {
    key: 'registerOutsideClickHandler',
    value: function registerOutsideClickHandler(handler) {
      this._outsideClickHandler = (0, _outsideTargetHandlerFactory2.default)(document.getElementsByClassName('sweet-alert')[0], handler);
      this.enableOutsideClick();
    }
  }, {
    key: 'unregisterOutsideClickHandler',
    value: function unregisterOutsideClickHandler() {
      this.disableOutsideClick();
      this._outsideClickHandler = null;
    }
  }, {
    key: 'enableOutsideClick',
    value: function enableOutsideClick() {
      var fn = this._outsideClickHandler;
      if (fn) {
        document.addEventListener('mousedown', fn);
        document.addEventListener('touchstart', fn);
      }
    }
  }, {
    key: 'disableOutsideClick',
    value: function disableOutsideClick() {
      var fn = this._outsideClickHandler;
      if (fn) {
        document.removeEventListener('mousedown', fn);
        document.removeEventListener('touchstart', fn);
      }
    }
  }, {
    key: 'bindEscapeKey',
    value: function bindEscapeKey(onEscapeKey) {
      _mousetrap2.default.bind('esc', onEscapeKey);
    }
  }, {
    key: 'unbindEscapeKey',
    value: function unbindEscapeKey() {
      _mousetrap2.default.unbind('esc');
    }
  }, {
    key: 'handleClick',
    value: function handleClick(isConfirm, onConfirm, onCancel) {
      if (isConfirm !== false) {
        if (onConfirm) onConfirm(isConfirm);
      } else {
        if (onCancel) onCancel(); // eslint-disable-line no-lonely-if
      }
    }
  }, {
    key: 'handleClose',
    value: function handleClose(onClose) {
      if (this._show) {
        _sweetalert2.default.close();
        this.unbindEscapeKey();
        if (onClose) onClose();
        this._show = false;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return SweetAlert;
}(_react.Component);

SweetAlert.propTypes = {
  // sweetalert option
  title: _propTypes2.default.string.isRequired,
  text: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(['warning', 'error', 'success', 'info', 'input']),
  customClass: _propTypes2.default.string,
  showCancelButton: _propTypes2.default.bool,
  showConfirmButton: _propTypes2.default.bool,
  confirmButtonText: _propTypes2.default.string,
  confirmButtonColor: _propTypes2.default.string,
  cancelButtonText: _propTypes2.default.string,
  imageUrl: _propTypes2.default.string,
  imageSize: function imageSize(props, propName) {
    if (!/^[1-9]\d*x[1-9]\d*/.test(props[propName])) {
      return new Error('imageSize should have the format like this: "80x80"');
    }
  },

  html: _propTypes2.default.bool,
  animation: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['pop', 'slide-from-top', 'slide-from-bottom'])]),
  inputType: _propTypes2.default.oneOf(ALLOWS_INPUT_TYPES),
  inputPlaceholder: _propTypes2.default.string,
  inputValue: _propTypes2.default.string,
  showLoaderOnConfirm: _propTypes2.default.bool,

  // custom option
  show: _propTypes2.default.bool,
  onConfirm: _propTypes2.default.func,
  onCancel: _propTypes2.default.func,
  onClose: _propTypes2.default.func,
  onEscapeKey: _propTypes2.default.func,
  onOutsideClick: _propTypes2.default.func
};
SweetAlert.defaultProps = {
  // sweetalert option
  text: null,
  type: null,
  customClass: null,
  showCancelButton: false,
  showConfirmButton: true,
  confirmButtonText: 'OK',
  confirmButtonColor: '#aedef4',
  cancelButtonText: 'Cancel',
  imageUrl: null,
  imageSize: '80x80',
  html: false,
  animation: true,
  inputType: 'text',
  inputPlaceholder: null,
  inputValue: null,
  showLoaderOnConfirm: false,

  // custom option
  show: false
};
exports.default = SweetAlert;

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (typeof window === 'undefined') {
  module.exports = function () {
    return null;
  };
} else {
  module.exports = __webpack_require__(607); // eslint-disable-line global-require
}

/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDOMEquals;
/**
 * Determinate whether dom1 and dom2 is the same dom or not.
 *
 * @param  {HTMLElement}  dom1
 * @param  {HTMLElement}  dom2
 * @return {Boolean}
 */
function isDOMEquals(dom1, dom2) {
  return dom1 === dom2;
}

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = outsideTargetHandlerFactory;

var _isDOMEquals = __webpack_require__(609);

var _isDOMEquals2 = _interopRequireDefault(_isDOMEquals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param  {HTMLElement}  targetNode
 * @param  {HTMLElement}  eventHandler
 * @return {Boolean}
 */
function outsideTargetHandlerFactory(targetNode, eventHandler) {
  return function (evt) {
    evt.stopPropagation();
    var current = evt.target;
    var found = false;
    while (current.parentNode) {
      found = (0, _isDOMEquals2.default)(current, targetNode);
      if (found) return;
      current = current.parentNode;
    }
    eventHandler(evt);
  };
}

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _colorLuminance = __webpack_require__(76);

var _getModal = __webpack_require__(75);

var _hasClass$isDescendant = __webpack_require__(53);

/*
 * User clicked on "Confirm"/"OK" or "Cancel"
 */
var handleButton = function handleButton(event, params, modal) {
  var e = event || window.event;
  var target = e.target || e.srcElement;

  var targetedConfirm = target.className.indexOf('confirm') !== -1;
  var targetedOverlay = target.className.indexOf('sweet-overlay') !== -1;
  var modalIsVisible = _hasClass$isDescendant.hasClass(modal, 'visible');
  var doneFunctionExists = params.doneFunction && modal.getAttribute('data-has-done-function') === 'true';

  // Since the user can change the background-color of the confirm button programmatically,
  // we must calculate what the color should be on hover/active
  var normalColor, hoverColor, activeColor;
  if (targetedConfirm && params.confirmButtonColor) {
    normalColor = params.confirmButtonColor;
    hoverColor = _colorLuminance.colorLuminance(normalColor, -0.04);
    activeColor = _colorLuminance.colorLuminance(normalColor, -0.14);
  }

  function shouldSetConfirmButtonColor(color) {
    if (targetedConfirm && params.confirmButtonColor) {
      target.style.backgroundColor = color;
    }
  }

  switch (e.type) {
    case 'mouseover':
      shouldSetConfirmButtonColor(hoverColor);
      break;

    case 'mouseout':
      shouldSetConfirmButtonColor(normalColor);
      break;

    case 'mousedown':
      shouldSetConfirmButtonColor(activeColor);
      break;

    case 'mouseup':
      shouldSetConfirmButtonColor(hoverColor);
      break;

    case 'focus':
      var $confirmButton = modal.querySelector('button.confirm');
      var $cancelButton = modal.querySelector('button.cancel');

      if (targetedConfirm) {
        $cancelButton.style.boxShadow = 'none';
      } else {
        $confirmButton.style.boxShadow = 'none';
      }
      break;

    case 'click':
      var clickedOnModal = modal === target;
      var clickedOnModalChild = _hasClass$isDescendant.isDescendant(modal, target);

      // Ignore click outside if allowOutsideClick is false
      if (!clickedOnModal && !clickedOnModalChild && modalIsVisible && !params.allowOutsideClick) {
        break;
      }

      if (targetedConfirm && doneFunctionExists && modalIsVisible) {
        handleConfirm(modal, params);
      } else if (doneFunctionExists && modalIsVisible || targetedOverlay) {
        handleCancel(modal, params);
      } else if (_hasClass$isDescendant.isDescendant(modal, target) && target.tagName === 'BUTTON') {
        sweetAlert.close();
      }
      break;
  }
};

/*
 *  User clicked on "Confirm"/"OK"
 */
var handleConfirm = function handleConfirm(modal, params) {
  var callbackValue = true;

  if (_hasClass$isDescendant.hasClass(modal, 'show-input')) {
    callbackValue = modal.querySelector('input').value;

    if (!callbackValue) {
      callbackValue = '';
    }
  }

  params.doneFunction(callbackValue);

  if (params.closeOnConfirm) {
    sweetAlert.close();
  }
  // Disable cancel and confirm button if the parameter is true
  if (params.showLoaderOnConfirm) {
    sweetAlert.disableButtons();
  }
};

/*
 *  User clicked on "Cancel"
 */
var handleCancel = function handleCancel(modal, params) {
  // Check if callback function expects a parameter (to track cancel actions)
  var functionAsStr = String(params.doneFunction).replace(/\s/g, '');
  var functionHandlesCancel = functionAsStr.substring(0, 9) === 'function(' && functionAsStr.substring(9, 10) !== ')';

  if (functionHandlesCancel) {
    params.doneFunction(false);
  }

  if (params.closeOnCancel) {
    sweetAlert.close();
  }
};

exports['default'] = {
  handleButton: handleButton,
  handleConfirm: handleConfirm,
  handleCancel: handleCancel
};
module.exports = exports['default'];

/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _stopEventPropagation$fireClick = __webpack_require__(53);

var _setFocusStyle = __webpack_require__(75);

var handleKeyDown = function handleKeyDown(event, params, modal) {
  var e = event || window.event;
  var keyCode = e.keyCode || e.which;

  var $okButton = modal.querySelector('button.confirm');
  var $cancelButton = modal.querySelector('button.cancel');
  var $modalButtons = modal.querySelectorAll('button[tabindex]');

  if ([9, 13, 32, 27].indexOf(keyCode) === -1) {
    // Don't do work on keys we don't care about.
    return;
  }

  var $targetElement = e.target || e.srcElement;

  var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
  for (var i = 0; i < $modalButtons.length; i++) {
    if ($targetElement === $modalButtons[i]) {
      btnIndex = i;
      break;
    }
  }

  if (keyCode === 9) {
    // TAB
    if (btnIndex === -1) {
      // No button focused. Jump to the confirm button.
      $targetElement = $okButton;
    } else {
      // Cycle to the next button
      if (btnIndex === $modalButtons.length - 1) {
        $targetElement = $modalButtons[0];
      } else {
        $targetElement = $modalButtons[btnIndex + 1];
      }
    }

    _stopEventPropagation$fireClick.stopEventPropagation(e);
    $targetElement.focus();

    if (params.confirmButtonColor) {
      _setFocusStyle.setFocusStyle($targetElement, params.confirmButtonColor);
    }
  } else {
    if (keyCode === 13) {
      if ($targetElement.tagName === 'INPUT') {
        $targetElement = $okButton;
        $okButton.focus();
      }

      if (btnIndex === -1) {
        // ENTER/SPACE clicked outside of a button.
        $targetElement = $okButton;
      } else {
        // Do nothing - let the browser handle it.
        $targetElement = undefined;
      }
    } else if (keyCode === 27 && params.allowEscapeKey === true) {
      $targetElement = $cancelButton;
      _stopEventPropagation$fireClick.fireClick($targetElement, e);
    } else {
      // Fallback - let the browser handle it.
      $targetElement = undefined;
    }
  }
};

exports['default'] = handleKeyDown;
module.exports = exports['default'];

/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var injectedHTML =

// Dark overlay
"<div class=\"sweet-overlay\" tabIndex=\"-1\"></div>" +

// Modal
"<div class=\"sweet-alert\">" +

// Error icon
"<div class=\"sa-icon sa-error\">\n      <span class=\"sa-x-mark\">\n        <span class=\"sa-line sa-left\"></span>\n        <span class=\"sa-line sa-right\"></span>\n      </span>\n    </div>" +

// Warning icon
"<div class=\"sa-icon sa-warning\">\n      <span class=\"sa-body\"></span>\n      <span class=\"sa-dot\"></span>\n    </div>" +

// Info icon
"<div class=\"sa-icon sa-info\"></div>" +

// Success icon
"<div class=\"sa-icon sa-success\">\n      <span class=\"sa-line sa-tip\"></span>\n      <span class=\"sa-line sa-long\"></span>\n\n      <div class=\"sa-placeholder\"></div>\n      <div class=\"sa-fix\"></div>\n    </div>" + "<div class=\"sa-icon sa-custom\"></div>" +

// Title, text and input
"<h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type=\"text\" tabIndex=\"3\" />\n      <div class=\"sa-input-error\"></div>\n    </fieldset>" +

// Input errors
"<div class=\"sa-error-container\">\n      <div class=\"icon\">!</div>\n      <p>Not valid!</p>\n    </div>" +

// Cancel and confirm buttons
"<div class=\"sa-button-container\">\n      <button class=\"cancel\" tabIndex=\"2\">Cancel</button>\n      <div class=\"sa-confirm-button-container\">\n        <button class=\"confirm\" tabIndex=\"1\">OK</button>" +

// Loading animation
"<div class=\"la-ball-fall\">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div>" +

// End of modal
"</div>";

exports["default"] = injectedHTML;
module.exports = exports["default"];

/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _isIE8 = __webpack_require__(76);

var _getModal$getInput$setFocusStyle = __webpack_require__(75);

var _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide = __webpack_require__(53);

var alertTypes = ['error', 'warning', 'info', 'success', 'input', 'prompt'];

/*
 * Set type, text and actions on modal
 */
var setParameters = function setParameters(params) {
  var modal = _getModal$getInput$setFocusStyle.getModal();

  var $title = modal.querySelector('h2');
  var $text = modal.querySelector('p');
  var $cancelBtn = modal.querySelector('button.cancel');
  var $confirmBtn = modal.querySelector('button.confirm');

  /*
   * Title
   */
  $title.innerHTML = params.html ? params.title : _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.title).split('\n').join('<br>');

  /*
   * Text
   */
  $text.innerHTML = params.html ? params.text : _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.text || '').split('\n').join('<br>');
  if (params.text) _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($text);

  /*
   * Custom class
   */
  if (params.customClass) {
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass(modal, params.customClass);
    modal.setAttribute('data-custom-class', params.customClass);
  } else {
    // Find previously set classes and remove them
    var customClass = modal.getAttribute('data-custom-class');
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.removeClass(modal, customClass);
    modal.setAttribute('data-custom-class', '');
  }

  /*
   * Icon
   */
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide(modal.querySelectorAll('.sa-icon'));

  if (params.type && !_isIE8.isIE8()) {
    var _ret = (function () {

      var validType = false;

      for (var i = 0; i < alertTypes.length; i++) {
        if (params.type === alertTypes[i]) {
          validType = true;
          break;
        }
      }

      if (!validType) {
        logStr('Unknown alert type: ' + params.type);
        return {
          v: false
        };
      }

      var typesWithIcons = ['success', 'error', 'warning', 'info'];
      var $icon = undefined;

      if (typesWithIcons.indexOf(params.type) !== -1) {
        $icon = modal.querySelector('.sa-icon.' + 'sa-' + params.type);
        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($icon);
      }

      var $input = _getModal$getInput$setFocusStyle.getInput();

      // Animate icon
      switch (params.type) {

        case 'success':
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'animate');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-tip'), 'animateSuccessTip');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-long'), 'animateSuccessLong');
          break;

        case 'error':
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'animateErrorIcon');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-x-mark'), 'animateXMark');
          break;

        case 'warning':
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'pulseWarning');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-body'), 'pulseWarningIns');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-dot'), 'pulseWarningIns');
          break;

        case 'input':
        case 'prompt':
          $input.setAttribute('type', params.inputType);
          $input.value = params.inputValue;
          $input.setAttribute('placeholder', params.inputPlaceholder);
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass(modal, 'show-input');
          setTimeout(function () {
            $input.focus();
            $input.addEventListener('keyup', swal.resetInputError);
          }, 400);
          break;
      }
    })();

    if (typeof _ret === 'object') {
      return _ret.v;
    }
  }

  /*
   * Custom image
   */
  if (params.imageUrl) {
    var $customIcon = modal.querySelector('.sa-icon.sa-custom');

    $customIcon.style.backgroundImage = 'url(' + params.imageUrl + ')';
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($customIcon);

    var _imgWidth = 80;
    var _imgHeight = 80;

    if (params.imageSize) {
      var dimensions = params.imageSize.toString().split('x');
      var imgWidth = dimensions[0];
      var imgHeight = dimensions[1];

      if (!imgWidth || !imgHeight) {
        logStr('Parameter imageSize expects value with format WIDTHxHEIGHT, got ' + params.imageSize);
      } else {
        _imgWidth = imgWidth;
        _imgHeight = imgHeight;
      }
    }

    $customIcon.setAttribute('style', $customIcon.getAttribute('style') + 'width:' + _imgWidth + 'px; height:' + _imgHeight + 'px');
  }

  /*
   * Show cancel button?
   */
  modal.setAttribute('data-has-cancel-button', params.showCancelButton);
  if (params.showCancelButton) {
    $cancelBtn.style.display = 'inline-block';
  } else {
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide($cancelBtn);
  }

  /*
   * Show confirm button?
   */
  modal.setAttribute('data-has-confirm-button', params.showConfirmButton);
  if (params.showConfirmButton) {
    $confirmBtn.style.display = 'inline-block';
  } else {
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide($confirmBtn);
  }

  /*
   * Custom text on cancel/confirm buttons
   */
  if (params.cancelButtonText) {
    $cancelBtn.innerHTML = _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.cancelButtonText);
  }
  if (params.confirmButtonText) {
    $confirmBtn.innerHTML = _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.confirmButtonText);
  }

  /*
   * Custom color on confirm button
   */
  if (params.confirmButtonColor) {
    // Set confirm button to selected background color
    $confirmBtn.style.backgroundColor = params.confirmButtonColor;

    // Set the confirm button color to the loading ring
    $confirmBtn.style.borderLeftColor = params.confirmLoadingButtonColor;
    $confirmBtn.style.borderRightColor = params.confirmLoadingButtonColor;

    // Set box-shadow to default focused button
    _getModal$getInput$setFocusStyle.setFocusStyle($confirmBtn, params.confirmButtonColor);
  }

  /*
   * Allow outside click
   */
  modal.setAttribute('data-allow-outside-click', params.allowOutsideClick);

  /*
   * Callback function
   */
  var hasDoneFunction = params.doneFunction ? true : false;
  modal.setAttribute('data-has-done-function', hasDoneFunction);

  /*
   * Animation
   */
  if (!params.animation) {
    modal.setAttribute('data-animation', 'none');
  } else if (typeof params.animation === 'string') {
    modal.setAttribute('data-animation', params.animation); // Custom animation
  } else {
    modal.setAttribute('data-animation', 'pop');
  }

  /*
   * Timer
   */
  modal.setAttribute('data-timer', params.timer);
};

exports['default'] = setParameters;
module.exports = exports['default'];

/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});
// SweetAlert
// 2014-2015 (c) - Tristan Edwards
// github.com/t4t5/sweetalert

/*
 * jQuery-like functions for manipulating the DOM
 */

var _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation = __webpack_require__(53);

/*
 * Handy utilities
 */

var _extend$hexToRgb$isIE8$logStr$colorLuminance = __webpack_require__(76);

/*
 *  Handle sweetAlert's DOM elements
 */

var _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition = __webpack_require__(75);

// Handle button events and keyboard events

var _handleButton$handleConfirm$handleCancel = __webpack_require__(611);

var _handleKeyDown = __webpack_require__(612);

var _handleKeyDown2 = _interopRequireWildcard(_handleKeyDown);

// Default values

var _defaultParams = __webpack_require__(289);

var _defaultParams2 = _interopRequireWildcard(_defaultParams);

var _setParameters = __webpack_require__(614);

var _setParameters2 = _interopRequireWildcard(_setParameters);

/*
 * Remember state in cases where opening and handling a modal will fiddle with it.
 * (We also use window.previousActiveElement as a global variable)
 */
var previousWindowKeyDown;
var lastFocusedButton;

/*
 * Global sweetAlert function
 * (this is what the user calls)
 */
var sweetAlert, swal;

exports['default'] = sweetAlert = swal = function () {
  var customizations = arguments[0];

  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass(document.body, 'stop-scrolling');
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.resetInput();

  /*
   * Use argument if defined or default value from params object otherwise.
   * Supports the case where a default value is boolean true and should be
   * overridden by a corresponding explicit argument which is boolean false.
   */
  function argumentOrDefault(key) {
    var args = customizations;
    return args[key] === undefined ? _defaultParams2['default'][key] : args[key];
  }

  if (customizations === undefined) {
    _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('SweetAlert expects at least 1 attribute!');
    return false;
  }

  var params = _extend$hexToRgb$isIE8$logStr$colorLuminance.extend({}, _defaultParams2['default']);

  switch (typeof customizations) {

    // Ex: swal("Hello", "Just testing", "info");
    case 'string':
      params.title = customizations;
      params.text = arguments[1] || '';
      params.type = arguments[2] || '';
      break;

    // Ex: swal({ title:"Hello", text: "Just testing", type: "info" });
    case 'object':
      if (customizations.title === undefined) {
        _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('Missing "title" argument!');
        return false;
      }

      params.title = customizations.title;

      for (var customName in _defaultParams2['default']) {
        params[customName] = argumentOrDefault(customName);
      }

      // Show "Confirm" instead of "OK" if cancel button is visible
      params.confirmButtonText = params.showCancelButton ? 'Confirm' : _defaultParams2['default'].confirmButtonText;
      params.confirmButtonText = argumentOrDefault('confirmButtonText');

      // Callback function when clicking on "OK"/"Cancel"
      params.doneFunction = arguments[1] || null;

      break;

    default:
      _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof customizations);
      return false;

  }

  _setParameters2['default'](params);
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.fixVerticalPosition();
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.openModal(arguments[1]);

  // Modal interactions
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  /*
   * Make sure all modal buttons respond to all events
   */
  var $buttons = modal.querySelectorAll('button');
  var buttonEvents = ['onclick', 'onmouseover', 'onmouseout', 'onmousedown', 'onmouseup', 'onfocus'];
  var onButtonEvent = function onButtonEvent(e) {
    return _handleButton$handleConfirm$handleCancel.handleButton(e, params, modal);
  };

  for (var btnIndex = 0; btnIndex < $buttons.length; btnIndex++) {
    for (var evtIndex = 0; evtIndex < buttonEvents.length; evtIndex++) {
      var btnEvt = buttonEvents[evtIndex];
      $buttons[btnIndex][btnEvt] = onButtonEvent;
    }
  }

  // Clicking outside the modal dismisses it (if allowed by user)
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getOverlay().onclick = onButtonEvent;

  previousWindowKeyDown = window.onkeydown;

  var onKeyEvent = function onKeyEvent(e) {
    return _handleKeyDown2['default'](e, params, modal);
  };
  window.onkeydown = onKeyEvent;

  window.onfocus = function () {
    // When the user has focused away and focused back from the whole window.
    setTimeout(function () {
      // Put in a timeout to jump out of the event sequence.
      // Calling focus() in the event sequence confuses things.
      if (lastFocusedButton !== undefined) {
        lastFocusedButton.focus();
        lastFocusedButton = undefined;
      }
    }, 0);
  };

  // Show alert with enabled buttons always
  swal.enableButtons();
};

/*
 * Set default params for each popup
 * @param {Object} userParams
 */
sweetAlert.setDefaults = swal.setDefaults = function (userParams) {
  if (!userParams) {
    throw new Error('userParams is required');
  }
  if (typeof userParams !== 'object') {
    throw new Error('userParams has to be a object');
  }

  _extend$hexToRgb$isIE8$logStr$colorLuminance.extend(_defaultParams2['default'], userParams);
};

/*
 * Animation when closing modal
 */
sweetAlert.close = swal.close = function () {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.fadeOut(_sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getOverlay(), 5);
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.fadeOut(modal, 5);
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, 'showSweetAlert');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass(modal, 'hideSweetAlert');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, 'visible');

  /*
   * Reset icon animations
   */
  var $successIcon = modal.querySelector('.sa-icon.sa-success');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon, 'animate');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon.querySelector('.sa-tip'), 'animateSuccessTip');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon.querySelector('.sa-long'), 'animateSuccessLong');

  var $errorIcon = modal.querySelector('.sa-icon.sa-error');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon, 'animateErrorIcon');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon.querySelector('.sa-x-mark'), 'animateXMark');

  var $warningIcon = modal.querySelector('.sa-icon.sa-warning');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon, 'pulseWarning');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon.querySelector('.sa-body'), 'pulseWarningIns');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon.querySelector('.sa-dot'), 'pulseWarningIns');

  // Reset custom class (delay so that UI changes aren't visible)
  setTimeout(function () {
    var customClass = modal.getAttribute('data-custom-class');
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, customClass);
  }, 300);

  // Make page scrollable again
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(document.body, 'stop-scrolling');

  // Reset the page to its previous state
  window.onkeydown = previousWindowKeyDown;
  if (window.previousActiveElement) {
    window.previousActiveElement.focus();
  }
  lastFocusedButton = undefined;
  clearTimeout(modal.timeout);

  return true;
};

/*
 * Validation of the input field is done by user
 * If something is wrong => call showInputError with errorMessage
 */
sweetAlert.showInputError = swal.showInputError = function (errorMessage) {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  var $errorIcon = modal.querySelector('.sa-input-error');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass($errorIcon, 'show');

  var $errorContainer = modal.querySelector('.sa-error-container');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass($errorContainer, 'show');

  $errorContainer.querySelector('p').innerHTML = errorMessage;

  setTimeout(function () {
    sweetAlert.enableButtons();
  }, 1);

  modal.querySelector('input').focus();
};

/*
 * Reset input error DOM elements
 */
sweetAlert.resetInputError = swal.resetInputError = function (event) {
  // If press enter => ignore
  if (event && event.keyCode === 13) {
    return false;
  }

  var $modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  var $errorIcon = $modal.querySelector('.sa-input-error');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon, 'show');

  var $errorContainer = $modal.querySelector('.sa-error-container');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorContainer, 'show');
};

/*
 * Disable confirm and cancel buttons
 */
sweetAlert.disableButtons = swal.disableButtons = function (event) {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
  var $confirmButton = modal.querySelector('button.confirm');
  var $cancelButton = modal.querySelector('button.cancel');
  $confirmButton.disabled = true;
  $cancelButton.disabled = true;
};

/*
 * Enable confirm and cancel buttons
 */
sweetAlert.enableButtons = swal.enableButtons = function (event) {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
  var $confirmButton = modal.querySelector('button.confirm');
  var $cancelButton = modal.querySelector('button.cancel');
  $confirmButton.disabled = false;
  $cancelButton.disabled = false;
};

if (typeof window !== 'undefined') {
  // The 'handle-click' module requires
  // that 'sweetAlert' was set as global.
  window.sweetAlert = window.swal = sweetAlert;
} else {
  _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('SweetAlert is a frontend module!');
}
module.exports = exports['default'];

/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _BaseWidget = __webpack_require__(292);

var _BaseWidget2 = _interopRequireDefault(_BaseWidget);

var _Dashboard = __webpack_require__(293);

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.Dashboard = _Dashboard2.default;
global.BaseWidget = _BaseWidget2.default;
global.React = _react2.default;
global.ReactDOM = _reactDom2.default;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _hexToRgb = __webpack_require__(76);

var _removeClass$getTopMargin$fadeIn$show$addClass = __webpack_require__(53);

var _defaultParams = __webpack_require__(289);

var _defaultParams2 = _interopRequireWildcard(_defaultParams);

/*
 * Add modal + overlay to DOM
 */

var _injectedHTML = __webpack_require__(613);

var _injectedHTML2 = _interopRequireWildcard(_injectedHTML);

var modalClass = '.sweet-alert';
var overlayClass = '.sweet-overlay';

var sweetAlertInitialize = function sweetAlertInitialize() {
  var sweetWrap = document.createElement('div');
  sweetWrap.innerHTML = _injectedHTML2['default'];

  // Append elements to body
  while (sweetWrap.firstChild) {
    document.body.appendChild(sweetWrap.firstChild);
  }
};

/*
 * Get DOM element of modal
 */
var getModal = (function (_getModal) {
  function getModal() {
    return _getModal.apply(this, arguments);
  }

  getModal.toString = function () {
    return _getModal.toString();
  };

  return getModal;
})(function () {
  var $modal = document.querySelector(modalClass);

  if (!$modal) {
    sweetAlertInitialize();
    $modal = getModal();
  }

  return $modal;
});

/*
 * Get DOM element of input (in modal)
 */
var getInput = function getInput() {
  var $modal = getModal();
  if ($modal) {
    return $modal.querySelector('input');
  }
};

/*
 * Get DOM element of overlay
 */
var getOverlay = function getOverlay() {
  return document.querySelector(overlayClass);
};

/*
 * Add box-shadow style to button (depending on its chosen bg-color)
 */
var setFocusStyle = function setFocusStyle($button, bgColor) {
  var rgbColor = _hexToRgb.hexToRgb(bgColor);
  $button.style.boxShadow = '0 0 2px rgba(' + rgbColor + ', 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)';
};

/*
 * Animation when opening modal
 */
var openModal = function openModal(callback) {
  var $modal = getModal();
  _removeClass$getTopMargin$fadeIn$show$addClass.fadeIn(getOverlay(), 10);
  _removeClass$getTopMargin$fadeIn$show$addClass.show($modal);
  _removeClass$getTopMargin$fadeIn$show$addClass.addClass($modal, 'showSweetAlert');
  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($modal, 'hideSweetAlert');

  window.previousActiveElement = document.activeElement;
  var $okButton = $modal.querySelector('button.confirm');
  $okButton.focus();

  setTimeout(function () {
    _removeClass$getTopMargin$fadeIn$show$addClass.addClass($modal, 'visible');
  }, 500);

  var timer = $modal.getAttribute('data-timer');

  if (timer !== 'null' && timer !== '') {
    var timerCallback = callback;
    $modal.timeout = setTimeout(function () {
      var doneFunctionExists = (timerCallback || null) && $modal.getAttribute('data-has-done-function') === 'true';
      if (doneFunctionExists) {
        timerCallback(null);
      } else {
        sweetAlert.close();
      }
    }, timer);
  }
};

/*
 * Reset the styling of the input
 * (for example if errors have been shown)
 */
var resetInput = function resetInput() {
  var $modal = getModal();
  var $input = getInput();

  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($modal, 'show-input');
  $input.value = _defaultParams2['default'].inputValue;
  $input.setAttribute('type', _defaultParams2['default'].inputType);
  $input.setAttribute('placeholder', _defaultParams2['default'].inputPlaceholder);

  resetInputError();
};

var resetInputError = function resetInputError(event) {
  // If press enter => ignore
  if (event && event.keyCode === 13) {
    return false;
  }

  var $modal = getModal();

  var $errorIcon = $modal.querySelector('.sa-input-error');
  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($errorIcon, 'show');

  var $errorContainer = $modal.querySelector('.sa-error-container');
  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($errorContainer, 'show');
};

/*
 * Set "margin-top"-property on modal based on its computed height
 */
var fixVerticalPosition = function fixVerticalPosition() {
  var $modal = getModal();
  $modal.style.marginTop = _removeClass$getTopMargin$fadeIn$show$addClass.getTopMargin(getModal());
};

exports.sweetAlertInitialize = sweetAlertInitialize;
exports.getModal = getModal;
exports.getOverlay = getOverlay;
exports.getInput = getInput;
exports.setFocusStyle = setFocusStyle;
exports.openModal = openModal;
exports.resetInput = resetInput;
exports.resetInputError = resetInputError;
exports.fixVerticalPosition = fixVerticalPosition;

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
/*
 * Allow user to pass their own params
 */
var extend = function extend(a, b) {
  for (var key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }
  return a;
};

/*
 * Convert HEX codes to RGB values (#000000 -> rgb(0,0,0))
 */
var hexToRgb = function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) : null;
};

/*
 * Check if the user is using Internet Explorer 8 (for fallbacks)
 */
var isIE8 = function isIE8() {
  return window.attachEvent && !window.addEventListener;
};

/*
 * IE compatible logging for developers
 */
var logStr = function logStr(string) {
  if (window.console) {
    // IE...
    window.console.log('SweetAlert: ' + string);
  }
};

/*
 * Set hover, active and focus-states for buttons 
 * (source: http://www.sitepoint.com/javascript-generate-lighter-darker-color)
 */
var colorLuminance = function colorLuminance(hex, lum) {
  // Validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // Convert to decimal and change luminosity
  var rgb = '#';
  var c;
  var i;

  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ('00' + c).substr(c.length);
  }

  return rgb;
};

exports.extend = extend;
exports.hexToRgb = hexToRgb;
exports.isIE8 = isIE8;
exports.logStr = logStr;
exports.colorLuminance = colorLuminance;

/***/ })

},[630]);