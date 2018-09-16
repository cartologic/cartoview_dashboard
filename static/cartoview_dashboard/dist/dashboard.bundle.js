webpackJsonp([2],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

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

        return _jsx('div', {}, void 0, Object.keys(schema).map(function (key) {
            return _this3.field(key, schema[key], schema[key].getValue ? schema[key].getValue(data) : data[key] || null);
        }));
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
        return _jsx('div', {
            className: 'form-group'
        }, void 0, _jsx('label', {}, void 0, label), field);
    };

    FieldSet.prototype.getSelectOptions = function getSelectOptions(name, schema, value) {
        var options = schema.options;

        if (!options) return null;
        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) == "object") {
            return Object.keys(options).map(function (key) {
                return _jsx('option', {
                    value: key
                }, void 0, options[key]);
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

module.exports = __webpack_require__(593);



/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var DefaultModalStyle = {
  overlay: {
    position: 'fixed',
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

/***/ 19:
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
  module.exports = __webpack_require__(48)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),

/***/ 260:
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

/***/ 287:
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

/***/ 294:
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

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

__webpack_require__(615);

var _reactDazzle = __webpack_require__(508);

var _reactDazzle2 = _interopRequireDefault(_reactDazzle);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _AddWidgetDialog = __webpack_require__(310);

var _AddWidgetDialog2 = _interopRequireDefault(_AddWidgetDialog);

var _ConfigManager = __webpack_require__(42);

var _ConfigManager2 = _interopRequireDefault(_ConfigManager);

var _Container = __webpack_require__(312);

var _Container2 = _interopRequireDefault(_Container);

var _CustomFrame = __webpack_require__(313);

var _CustomFrame2 = _interopRequireDefault(_CustomFrame);

var _Header = __webpack_require__(315);

var _Header2 = _interopRequireDefault(_Header);

var _DashboardToolbar = __webpack_require__(314);

var _DashboardToolbar2 = _interopRequireDefault(_DashboardToolbar);

var _WidgetConfigDialog = __webpack_require__(317);

var _WidgetConfigDialog2 = _interopRequireDefault(_WidgetConfigDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Default styes of dazzle.

// import EditBar from './EditBar.jsx' 
// App components


// Our styles
//import '../styles/custom.css'
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
            addWidgetOptions: null
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
        var _state = this.state,
            addWidgetDialogOpen = _state.addWidgetDialogOpen,
            widgets = _state.widgets,
            widgetConfigDialogOpen = _state.widgetConfigDialogOpen,
            configWidgetId = _state.configWidgetId,
            editable = _state.editable,
            title = _state.title,
            abstract = _state.abstract,
            isNew = _state.isNew,
            saved = _state.saved,
            isOwner = _state.isOwner,
            layout = _state.layout;

        return _jsx(_Container2.default, {}, void 0, _jsx(_AddWidgetDialog2.default, {
            widgets: widgets,
            isOpen: addWidgetDialogOpen,
            onRequestClose: this.onRequestClose,
            onWidgetSelect: this.handleWidgetSelection
        }), _jsx(_WidgetConfigDialog2.default, {
            isOpen: widgetConfigDialogOpen,
            widgetId: configWidgetId
        }), _react2.default.createElement(_Header2.default, { editable: editable, title: title, abstract: abstract, ref: 'header', onChange: this.onHeaderChanged }), _jsx(_DashboardToolbar2.default, {
            isNew: isNew,
            editable: editable,
            saved: saved,
            isOwner: isOwner
        }), _jsx(_reactDazzle2.default, {
            frameComponent: _CustomFrame2.default,
            onRemove: this.onRemove,
            layout: layout,
            widgets: widgets,
            editable: editable,
            onAdd: this.onAdd,
            onMove: this.onMove,
            addWidgetComponentText: 'Add New Widget'
        }));
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
    var _this2 = this;

    this.onRemove = function (layout) {
        _this2.setState({
            layout: layout,
            saved: false
        });
    };

    this.onAdd = function (layout, rowIndex, columnIndex) {
        // Open the AddWidget dialog by seting the 'addWidgetDialogOpen' to true.
        // Also preserve the details such as the layout, rowIndex, and columnIndex  in 'addWidgetOptions'.
        //  This will be used later when user picks a widget to add.
        _this2.setState({
            saved: false,
            addWidgetDialogOpen: true,
            addWidgetOptions: {
                layout: layout,
                rowIndex: rowIndex,
                columnIndex: columnIndex
            }
        });
    };

    this.onMove = function (layout) {
        _this2.setState({
            saved: false,
            layout: layout
        });
    };

    this.onRequestClose = function () {
        _this2.setState({
            addWidgetDialogOpen: false
        });
    };

    this.showWidgetConfigDialog = function (id) {
        _this2.setState({
            widgetConfigDialogOpen: true,
            configWidgetId: id
        });
    };

    this.closeWidgetConfigDialog = function (id, config) {
        _this2.setState({
            widgetConfigDialogOpen: false
        });
    };

    this.updateWidget = function (widget, config) {
        var widgets = _this2.state.widgets;
        if (widget) {
            widgets[widget.id].title = config.title;
            widgets[widget.id].props.config = config.widgetConfig;
        }
        _this2.setState({ saved: false, widgets: widgets, widgetConfigDialogOpen: false });
    };

    this.onHeaderChanged = function () {
        _this2.setState({ saved: false });
    };

    this.save = function () {
        _this2.setState({ saved: true });
    };

    this.toggleEdit = function () {
        _this2.setState({
            editable: !_this2.state.editable
        });
    };

    this.handleWidgetSelection = function (widgetType) {
        var id = _this2.getNewId();
        var ref = function ref(w) {
            if (w) {
                _this2.widgets[id] = w;
                w.id = id;
            }
        };
        _this2.state.widgets[id] = {
            title: widgetType.displayName || widgetType.name,
            type: widgetType,
            props: { id: id, ref: ref, config: {}, isNew: true }
        };
        _this2.setState({
            widgets: _this2.state.widgets
        });
        var _state$addWidgetOptio = _this2.state.addWidgetOptions,
            layout = _state$addWidgetOptio.layout,
            rowIndex = _state$addWidgetOptio.rowIndex,
            columnIndex = _state$addWidgetOptio.columnIndex;
        /**
         * 'AddWidget' method gives you the new layout.
         */

        _this2.setState({
            layout: (0, _reactDazzle.addWidget)(layout, rowIndex, columnIndex, id),
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

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

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

  var widgetItems = Object.keys(Dashboard.widgetsClasses).map(function (key) {
    return _jsx('a', {
      href: '#',
      className: 'list-group-item',
      onClick: function onClick() {
        return onWidgetSelect(Dashboard.widgetsClasses[key]);
      }
    }, void 0, _jsx('h6', {
      className: 'list-group-item-heading'
    }, void 0, Dashboard.widgetsClasses[key].displayName || Dashboard.widgetsClasses[key].name));
  });
  return _jsx(_reactModal2.default, {
    className: 'modal-dialog',
    isOpen: isOpen
  }, void 0, _jsx('div', {
    className: 'panel panel-default'
  }, void 0, _jsx('div', {
    className: 'panel-heading'
  }, void 0, "Add Widget", _jsx('div', {
    className: 'pull-right'
  }, void 0, _jsx('a', {
    className: 'btn btn-link btn-xs',
    onClick: onRequestClose
  }, void 0, _jsx('i', {
    className: 'glyphicon glyphicon-remove'
  })))), _jsx('div', {
    className: 'panel-body'
  }, void 0, _jsx('h5', {}, void 0, 'Pick a widget to add'), _jsx('div', {
    className: 'list-group'
  }, void 0, widgetItems))));
};
AddWidgetDialog.propTypes = {
  widgets: _react.PropTypes.object,
  isOpen: _react.PropTypes.bool,
  onRequestClose: _react.PropTypes.func,
  onWidgetSelect: _react.PropTypes.func
};
exports.default = AddWidgetDialog;

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.InfoModal = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _reactModal = __webpack_require__(107);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _propTypes = __webpack_require__(19);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InfoModal = exports.InfoModal = function InfoModal(props) {
    var open = props.open,
        onRequestClose = props.onRequestClose,
        title = props.title,
        children = props.children;

    return _jsx(_reactModal2.default, {
        className: 'modal-dialog',
        isOpen: open,
        onRequestClose: onRequestClose
    }, void 0, _jsx('div', {
        className: 'panel panel-default'
    }, void 0, _jsx('div', {
        className: 'panel-heading'
    }, void 0, title), _jsx('div', {
        className: 'panel-body'
    }, void 0, children)));
};
InfoModal.propTypes = {
    open: _propTypes2.default.bool.isRequired,
    onRequestClose: _propTypes2.default.func.isRequired,
    title: _propTypes2.default.string.isRequired,
    children: _propTypes2.default.node
};

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function Container(_ref) {
  var children = _ref.children;

  return _jsx("div", {
    className: "container"
  }, void 0, _jsx("div", {
    className: "row"
  }, void 0, _jsx("div", {
    className: "col-md-12"
  }, void 0, children)));
};

Container.propTypes = {
  children: _react.PropTypes.array
};

exports.default = Container;

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

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
        var _props = this.props,
            children = _props.children,
            onRemove = _props.onRemove,
            editable = _props.editable,
            title = _props.title;

        var editWidgetConfig = this.context.configManager.editWidgetConfig;
        var header = null;
        if (editable) {
            header = _jsx('div', {
                className: 'panel-heading'
            }, void 0, title, ' - ', children.props.id, _jsx('div', {
                className: 'btn-group pull-right'
            }, void 0, _jsx('a', {
                onClick: function onClick(e) {
                    e.preventDefault();editWidgetConfig(children.props.id);
                },
                className: 'btn btn-link btn-xs'
            }, void 0, _jsx('i', {
                className: 'glyphicon glyphicon-cog'
            })), _jsx('a', {
                onClick: function onClick(e) {
                    e.preventDefault();onRemove();
                },
                className: 'btn btn-link btn-xs'
            }, void 0, _jsx('i', {
                className: 'glyphicon glyphicon-trash'
            }))));
        } else if (title && title.length) {
            header = _jsx('div', {
                className: 'panel-heading'
            }, void 0, title);
        }
        return _jsx('div', {
            className: 'panel panel-default'
        }, void 0, header, _jsx('div', {
            className: 'panel-body widget'
        }, void 0, children));
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

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

__webpack_require__(617);

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
        var editBtn = _jsx('a', {
            className: 'btn btn-danger btn-lg btn-edit-db',
            href: '../edit/',
            title: 'Edit Dashboard'
        }, void 0, _jsx('i', {
            className: 'glyphicon glyphicon-pencil'
        }));
        var saveBtn = !saved ? _jsx('button', {
            className: 'btn btn-danger btn-lg btn-save-db',
            title: 'Save Dashboard',
            onClick: function onClick(e) {
                return _this2.saveAll(e);
            }
        }, void 0, _jsx('i', {
            className: 'glyphicon glyphicon-floppy-disk'
        })) : _jsx('button', {
            disabled: true,
            className: 'btn btn-danger btn-lg btn-save-db',
            title: 'Save Dashboard',
            onClick: function onClick(e) {
                return _this2.saveAll(e);
            }
        }, void 0, _jsx('i', {
            className: 'glyphicon glyphicon-floppy-disk'
        }));
        var viewBtn = _jsx('button', {
            className: 'btn btn-warning btn-lg btn-tb btn-view-db',
            title: 'View Dashboard',
            onClick: function onClick(e) {
                return _this2.preview(e);
            }
        }, void 0, _jsx('i', {
            className: 'glyphicon glyphicon-eye-open'
        }));
        return _jsx('div', {
            className: 'db-actions-ct'
        }, void 0, editable && saveBtn, editable && !isNew && viewBtn, !editable && isOwner && editBtn);
    };

    return DashboardToolbar;
}(_react2.default.Component);

DashboardToolbar.contextTypes = {
    configManager: _react.PropTypes.instanceOf(_ConfigManager2.default)
};
exports.default = DashboardToolbar;

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _FieldSet = __webpack_require__(10);

var _FieldSet2 = _interopRequireDefault(_FieldSet);

var _CommonComponents = __webpack_require__(311);

var _propTypes = __webpack_require__(19);

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
            return _react2.default.createElement(_FieldSet2.default, { data: data, schema: schema, ref: 'headerForm' });
        }
        return _jsx('div', {
            className: 'dashboard-header'
        }, void 0, _jsx('div', {
            className: 'flex-element fill-empty title-wrap'
        }, void 0, _jsx('h3', {
            className: 'header-title title-wrap'
        }, void 0, title)), _jsx('div', {
            className: 'flex-element'
        }, void 0, _jsx('button', {
            onClick: this.onRequestClose,
            className: 'btn btn-primary'
        }, void 0, _jsx('i', {
            className: 'fa fa-info-circle',
            style: { fontSize: 20 }
        }))), _jsx(_CommonComponents.InfoModal, {
            onRequestClose: this.onRequestClose,
            open: open,
            title: 'About'
        }, void 0, _jsx('p', {}, void 0, abstract)));
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

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

exports.default = function (props) {
  return _jsx(_reactModal2.default, {
    className: 'modal-dialog',
    isOpen: props.isOpen,
    style: _Constants2.default
  }, void 0, _jsx('div', {
    className: ''
  }, void 0, _jsx('div', {
    className: 'panel panel-default'
  }, void 0, _jsx('div', {
    className: 'panel-heading'
  }, void 0, props.title, _jsx('div', {
    className: 'pull-right'
  }, void 0, _jsx('a', {
    className: 'btn btn-link btn-xs',
    onClick: function onClick(e) {
      e.preventDefault();props.close();
    }
  }, void 0, _jsx('i', {
    className: 'glyphicon glyphicon-remove'
  })))), _jsx('div', {
    className: 'panel-body'
  }, void 0, props.children))));
};

var _reactModal = __webpack_require__(107);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _Constants = __webpack_require__(109);

var _Constants2 = _interopRequireDefault(_Constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _ConfigManager = __webpack_require__(42);

var _ConfigManager2 = _interopRequireDefault(_ConfigManager);

var _FieldSet = __webpack_require__(10);

var _FieldSet2 = _interopRequireDefault(_FieldSet);

var _Modal = __webpack_require__(316);

var _Modal2 = _interopRequireDefault(_Modal);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Constants = __webpack_require__(109);

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

        return _jsx(_Modal2.default, {
            isOpen: isOpen,
            close: function close() {
                return configManager.endEditWidgetConfig();
            },
            title: 'Config Widget'
        }, void 0, _react2.default.createElement(_FieldSet2.default, { ref: 'containerConfigForm', data: containerConfig, schema: _Constants.WidgetContainerConfigSchema }), widgetConfigForm, _jsx('div', {
            className: 'pull-right'
        }, void 0, _jsx('a', {
            className: 'btn btn-primary',
            onClick: function onClick(e) {
                e.preventDefault();configManager.endEditWidgetConfig(widget, _this2.getConfig());
            }
        }, void 0, _jsx('i', {
            className: 'glyphicon glyphicon-ok'
        }), ' Apply'), _jsx('a', {
            className: 'btn btn-danger',
            onClick: function onClick(e) {
                e.preventDefault();configManager.endEditWidgetConfig();
            }
        }, void 0, _jsx('i', {
            className: 'glyphicon glyphicon-remove'
        }), ' Cancel')));
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

/***/ 33:
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

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)();
// imports


// module
exports.push([module.i, ".defaultWidgetFrame {\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\tmargin-bottom: 10px;\r\n\tpadding: 10px 17px;\r\n\tdisplay: inline-block;\r\n\tbackground: #fff;\r\n\tborder: 1px solid #E6E9ED;\r\n}\r\n\r\n.defaultWidgetFrameHeader {\r\n\tborder-bottom: 2px solid #E6E9ED;\r\n\tpadding: 1px 5px 6px;\r\n\tmargin-bottom: 10px;\r\n\theight: 35px;\r\n}\r\n\r\n.defaultWidgetFrameHeader .title {\r\n\tfont-size: 18px;\r\n  float: left;\r\n  display: block;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\n.defaultWidgetFrameHeader .remove {\r\n\tfloat: right;\r\n\tfont-size: 11px;\r\n\tcursor: pointer;\r\n\ttext-decoration: none;\r\n\tmargin-top: 5px;\r\n}\r\n\r\n.add-widget-button {\r\n\tpadding: 10px;\r\n\ttext-align: center;\r\n\tborder: 1px dotted #DCDCDC;\r\n\tmargin-bottom: 10px;\r\n\tcursor: pointer;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.add-widget-link {\r\n\ttext-decoration: none;\r\n}\r\n\r\n.editable-column {\r\n\tborder: 1px dotted #8C8080;\r\n\tpadding: 10px;\r\n}\r\n\r\n.droppable-column {\r\n\tbackground-color: #E7E7E7;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)();
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

/***/ 40:
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
                col.widgets.forEach(function (wId, wIndex) {
                    if (widgets[wId.key].type.name == "MapWidget") {
                        mapWidgets[wId.key] = widgets[wId.key];
                    }
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

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?module.exports=t(__webpack_require__(1),__webpack_require__(20)):"function"==typeof define&&define.amd?define("dazzle",["react","react-dom"],t):"object"==typeof exports?exports.dazzle=t(require("react"),require("react-dom")):e.dazzle=t(e.react,e["react-dom"])}(window,function(e,t){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=59)}([function(t,n){t.exports=e},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,a,i,u){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,o,a,i,u],l=0;(c=new Error(t.replace(/%s/g,function(){return s[l++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}},function(e,t,n){e.exports=n(62)()},function(e,t,n){var r=n(9),o=n(71),a=n(6),i="[object Object]",u=Function.prototype,c=Object.prototype,s=u.toString,l=c.hasOwnProperty,f=s.call(Object);e.exports=function(e){if(!a(e)||r(e)!=i)return!1;var t=o(e);if(null===t)return!0;var n=l.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&s.call(n)==f}},function(e,t){var n=Array.isArray;e.exports=n},function(e,t,n){var r=n(34),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t,n){var r=n(41),o=n(107),a=n(109);e.exports=function(e,t){return a(o(e,t,r),e+"")}},function(e,t,n){var r=n(19),o=n(69),a=n(70),i="[object Null]",u="[object Undefined]",c=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?u:i:c&&c in Object(e)?o(e):a(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.END_DRAG=t.DROP=t.HOVER=t.PUBLISH_DRAG_SOURCE=t.BEGIN_DRAG=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.beginDrag=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{publishSource:!0,clientOffset:null},n=t.publishSource,r=t.clientOffset,u=t.getSourceClientOffset;(0,o.default)((0,a.default)(e),"Expected sourceIds to be an array.");var c=this.getMonitor(),l=this.getRegistry();(0,o.default)(!c.isDragging(),"Cannot call beginDrag while dragging.");for(var f=0;f<e.length;f++)(0,o.default)(l.getSource(e[f]),"Expected sourceIds to be registered.");for(var d=null,p=e.length-1;p>=0;p--)if(c.canDragSource(e[p])){d=e[p];break}if(null===d)return;var h=null;r&&((0,o.default)("function"==typeof u,"When clientOffset is provided, getSourceClientOffset must be a function."),h=u(d));var g=l.getSource(d).beginDrag(c,d);(0,o.default)((0,i.default)(g),"Item must be an object."),l.pinSource(d);var v=l.getSourceType(d);return{type:s,itemType:v,item:g,sourceId:d,clientOffset:r,sourceClientOffset:h,isSourcePublic:n}},t.publishDragSource=function(){if(!this.getMonitor().isDragging())return;return{type:l}},t.hover=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).clientOffset,n=void 0===t?null:t;(0,o.default)((0,a.default)(e),"Expected targetIds to be an array.");var r=e.slice(0),i=this.getMonitor(),c=this.getRegistry();(0,o.default)(i.isDragging(),"Cannot call hover while not dragging."),(0,o.default)(!i.didDrop(),"Cannot call hover after drop.");for(var s=0;s<r.length;s++){var l=r[s];(0,o.default)(r.lastIndexOf(l)===s,"Expected targetIds to be unique in the passed array.");var d=c.getTarget(l);(0,o.default)(d,"Expected targetIds to be registered.")}for(var p=i.getItemType(),h=r.length-1;h>=0;h--){var g=r[h],v=c.getTargetType(g);(0,u.default)(v,p)||r.splice(h,1)}for(var y=0;y<r.length;y++){var b=r[y],m=c.getTarget(b);m.hover(i,b)}return{type:f,targetIds:r,clientOffset:n}},t.drop=function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this.getMonitor(),a=this.getRegistry();(0,o.default)(n.isDragging(),"Cannot call drop while not dragging."),(0,o.default)(!n.didDrop(),"Cannot call drop twice during one drag operation.");var u=n.getTargetIds().filter(n.canDropOnTarget,n);u.reverse(),u.forEach(function(u,c){var s=a.getTarget(u),l=s.drop(n,u);(0,o.default)(void 0===l||(0,i.default)(l),"Drop result must either be an object or undefined."),void 0===l&&(l=0===c?{}:n.getDropResult()),e.store.dispatch({type:d,dropResult:r({},t,l)})})},t.endDrag=function(){var e=this.getMonitor(),t=this.getRegistry();(0,o.default)(e.isDragging(),"Cannot call endDrag while not dragging.");var n=e.getSourceId();return t.getSource(n,!0).endDrag(e,n),t.unpinSource(),{type:p}};var o=c(n(1)),a=c(n(4)),i=c(n(7)),u=c(n(36));function c(e){return e&&e.__esModule?e:{default:e}}var s=t.BEGIN_DRAG="dnd-core/BEGIN_DRAG",l=t.PUBLISH_DRAG_SOURCE="dnd-core/PUBLISH_DRAG_SOURCE",f=t.HOVER="dnd-core/HOVER",d=t.DROP="dnd-core/DROP",p=t.END_DRAG="dnd-core/END_DRAG"},function(e,t,n){var r=n(12)(Object,"create");e.exports=r},function(e,t,n){var r=n(80),o=n(84);e.exports=function(e,t){var n=o(e,t);return r(n)?n:void 0}},function(e,t,n){var r=n(21);e.exports=function(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n;return-1}},function(e,t,n){var r=n(97);e.exports=function(e,t){var n=e.__data__;return r(t)?n["string"==typeof t?"string":"hash"]:n.map}},function(e,t,n){var r=n(27),o=n(6);e.exports=function(e){return o(e)&&r(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addSource=function(e){return{type:r,sourceId:e}},t.addTarget=function(e){return{type:o,targetId:e}},t.removeSource=function(e){return{type:a,sourceId:e}},t.removeTarget=function(e){return{type:i,targetId:e}};var r=t.ADD_SOURCE="dnd-core/ADD_SOURCE",o=t.ADD_TARGET="dnd-core/ADD_TARGET",a=t.REMOVE_SOURCE="dnd-core/REMOVE_SOURCE",i=t.REMOVE_TARGET="dnd-core/REMOVE_TARGET"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(33);Object.defineProperty(t,"DragDropContext",{enumerable:!0,get:function(){return c(r).default}});var o=n(135);Object.defineProperty(t,"DragDropContextProvider",{enumerable:!0,get:function(){return c(o).default}});var a=n(136);Object.defineProperty(t,"DragLayer",{enumerable:!0,get:function(){return c(a).default}});var i=n(137);Object.defineProperty(t,"DragSource",{enumerable:!0,get:function(){return c(i).default}});var u=n(147);function c(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"DropTarget",{enumerable:!0,get:function(){return c(u).default}})},function(e,t,n){var r=n(5).Symbol;e.exports=r},function(e,t,n){var r=n(39),o=n(101),a=n(102);function i(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new r;++t<n;)this.add(e[t])}i.prototype.add=i.prototype.push=o,i.prototype.has=a,e.exports=i},function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},function(e,t,n){var r=n(103);e.exports=function(e,t){return!(null==e||!e.length)&&r(e,t,0)>-1}},function(e,t){e.exports=function(e,t,n){for(var r=-1,o=null==e?0:e.length;++r<o;)if(n(t,e[r]))return!0;return!1}},function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},function(e,t){e.exports=function(e){return function(t){return e(t)}}},function(e,t){e.exports=function(e,t){return e.has(t)}},function(e,t,n){var r=n(40),o=n(42);e.exports=function(e){return null!=e&&o(e.length)&&!r(e)}},function(e,t,n){e.exports=function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,r=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,a=Object.getOwnPropertyDescriptor,i=Object.getPrototypeOf,u=i&&i(Object);return function c(s,l,f){if("string"!=typeof l){if(u){var d=i(l);d&&d!==u&&c(s,d,f)}var p=r(l);o&&(p=p.concat(o(l)));for(var h=0;h<p.length;++h){var g=p[h];if(!(e[g]||t[g]||f&&f[g])){var v=a(l,g);try{n(s,g,v)}catch(e){}}}return s}return s}}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=Object.prototype.hasOwnProperty,a=0;a<n.length;a+=1){if(!o.call(t,n[a])||e[n[a]]!==t[n[a]])return!1;var i=e[n[a]],u=t[n[a]];if(i!==u)return!1}return!0}},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){return Boolean(e&&"function"==typeof e.dispose)},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.FILE="__NATIVE_FILE__",t.URL="__NATIVE_URL__",t.TEXT="__NATIVE_TEXT__"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addWidget=u,t.removeWidget=c,t.moveWidget=function(e,t,n,r){return u(c(e,t.rowIndex,t.columnIndex,t.widgetIndex),n.rowIndex,n.columnIndex,r)},t.sortWidget=function(e,t,n,r){return(0,a.default)(e,{rows:i({},t.rowIndex,{columns:i({},t.columnIndex,{widgets:{$splice:[[t.widgetIndex,1],[n.widgetIndex,0,{key:r}]]}})})})};var r,o=n(179),a=(r=o)&&r.__esModule?r:{default:r};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t,n,r){return(0,a.default)(e,{rows:i({},t,{columns:i({},n,{widgets:{$push:[{key:r}]}})})})}function c(e,t,n,r){return(0,a.default)(e,{rows:i({},t,{columns:i({},n,{widgets:{$splice:[[r,1]]}})})})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unpackBackendForEs5Users=t.createChildContext=t.CHILD_CONTEXT_TYPES=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){d.default.apply(void 0,["DragDropContext","backend"].concat(Array.prototype.slice.call(arguments)));var t=v(e),n=g(t);return function(e){var t,a,c=e.displayName||e.name||"Component",s=(a=t=function(t){function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,t),o(a,[{key:"getDecoratedComponentInstance",value:function(){return(0,l.default)(this.child,"In order to access an instance of the decorated component it can not be a stateless component."),this.child}},{key:"getManager",value:function(){return n.dragDropManager}},{key:"getChildContext",value:function(){return n}},{key:"render",value:function(){var t=this;return u.default.createElement(e,r({},this.props,{ref:function(e){t.child=e}}))}}]),a}(i.Component),t.DecoratedComponent=e,t.displayName="DragDropContext("+c+")",t.childContextTypes=h,a);return(0,f.default)(s,e)}};var i=n(0),u=p(i),c=p(n(2)),s=n(66),l=p(n(1)),f=p(n(28)),d=p(n(17));function p(e){return e&&e.__esModule?e:{default:e}}var h=t.CHILD_CONTEXT_TYPES={dragDropManager:c.default.object.isRequired},g=t.createChildContext=function(e,t){return{dragDropManager:new s.DragDropManager(e,t)}},v=t.unpackBackendForEs5Users=function(e){var t=e;return"object"===(void 0===t?"undefined":a(t))&&"function"==typeof t.default&&(t=t.default),(0,l.default)("function"==typeof t,"Expected the backend to be a function or an ES6 module exporting a default function. Read more: http://react-dnd.github.io/react-dnd/docs-drag-drop-context.html"),t}},function(e,t){var n="object"==typeof global&&global&&global.Object===Object&&global;e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments[1];switch(t.type){case o.BEGIN_DRAG:return{initialSourceClientOffset:t.sourceClientOffset,initialClientOffset:t.clientOffset,clientOffset:t.clientOffset};case o.HOVER:return function(e,t){if(e===t)return!0;return e&&t&&e.x===t.x&&e.y===t.y}(e.clientOffset,t.clientOffset)?e:r({},e,{clientOffset:t.clientOffset});case o.END_DRAG:case o.DROP:return a;default:return e}},t.getSourceClientOffset=function(e){var t=e.clientOffset,n=e.initialClientOffset,r=e.initialSourceClientOffset;if(!t||!n||!r)return null;return{x:t.x+r.x-n.x,y:t.y+r.y-n.y}},t.getDifferenceFromInitialOffset=function(e){var t=e.clientOffset,n=e.initialClientOffset;if(!t||!n)return null;return{x:t.x-n.x,y:t.y-n.y}};var o=n(10),a={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return(0,a.default)(e)?e.some(function(e){return e===t}):e===t};var r,o=n(4),a=(r=o)&&r.__esModule?r:{default:r}},function(e,t,n){var r=n(38),o=n(8),a=n(15),i=o(function(e,t){return a(e)?r(e,t):[]});e.exports=i},function(e,t,n){var r=n(20),o=n(22),a=n(23),i=n(24),u=n(25),c=n(26),s=200;e.exports=function(e,t,n,l){var f=-1,d=o,p=!0,h=e.length,g=[],v=t.length;if(!h)return g;n&&(t=i(t,u(n))),l?(d=a,p=!1):t.length>=s&&(d=c,p=!1,t=new r(t));e:for(;++f<h;){var y=e[f],b=null==n?y:n(y);if(y=l||0!==y?y:0,p&&b==b){for(var m=v;m--;)if(t[m]===b)continue e;g.push(y)}else d(t,b,l)||g.push(y)}return g}},function(e,t,n){var r=n(77),o=n(96),a=n(98),i=n(99),u=n(100);function c(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=u,e.exports=c},function(e,t,n){var r=n(9),o=n(7),a="[object AsyncFunction]",i="[object Function]",u="[object GeneratorFunction]",c="[object Proxy]";e.exports=function(e){if(!o(e))return!1;var t=r(e);return t==i||t==u||t==a||t==c}},function(e,t){e.exports=function(e){return e}},function(e,t){var n=9007199254740991;e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments[1],t=arguments[2];switch(e.type){case a.HOVER:break;case i.ADD_SOURCE:case i.ADD_TARGET:case i.REMOVE_TARGET:case i.REMOVE_SOURCE:return c;case a.BEGIN_DRAG:case a.PUBLISH_DRAG_SOURCE:case a.END_DRAG:case a.DROP:default:return s}var n=e.targetIds,o=t.targetIds,u=(0,r.default)(n,o),l=!1;if(0===u.length){for(var f=0;f<n.length;f++)if(n[f]!==o[f]){l=!0;break}}else l=!0;if(!l)return c;var d=o[o.length-1],p=n[n.length-1];d!==p&&(d&&u.push(d),p&&u.push(p));return u},t.areDirty=function(e,t){if(e===c)return!1;if(e===s||void 0===t)return!0;return(0,o.default)(t,e).length>0};var r=u(n(115)),o=u(n(123)),a=n(10),i=n(16);function u(e){return e&&e.__esModule?e:{default:e}}var c=[],s=[]},function(e,t,n){var r=n(118),o=n(119);e.exports=function e(t,n,a,i,u){var c=-1,s=t.length;for(a||(a=o),u||(u=[]);++c<s;){var l=t[c];n>0&&a(l)?n>1?e(l,n-1,a,i,u):r(u,l):i||(u[u.length]=l)}return u}},function(e,t,n){var r=n(120),o=n(6),a=Object.prototype,i=a.hasOwnProperty,u=a.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(e){return o(e)&&i.call(e,"callee")&&!u.call(e,"callee")};e.exports=c},function(e,t,n){var r=n(20),o=n(22),a=n(23),i=n(26),u=n(121),c=n(48),s=200;e.exports=function(e,t,n){var l=-1,f=o,d=e.length,p=!0,h=[],g=h;if(n)p=!1,f=a;else if(d>=s){var v=t?null:u(e);if(v)return c(v);p=!1,f=i,g=new r}else g=t?[]:h;e:for(;++l<d;){var y=e[l],b=t?t(y):y;if(y=n||0!==y?y:0,p&&b==b){for(var m=g.length;m--;)if(g[m]===b)continue e;t&&g.push(b),h.push(y)}else f(g,b,n)||(g!==h&&g.push(b),h.push(y))}return h}},function(e,t){e.exports=function(){}},function(e,t){e.exports=function(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e,t){if(e===t)return!0;if("object"!==(void 0===e?"undefined":r(e))||null===e||"object"!==(void 0===t?"undefined":r(t))||null===t)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(var a=Object.prototype.hasOwnProperty,i=0;i<n.length;i+=1){if(!a.call(t,n[i]))return!1;var u=e[n[i]],c=t[n[i]];if(u!==c||"object"===(void 0===u?"undefined":r(u))||"object"===(void 0===c?"undefined":r(c)))return!1}return!0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=function(e){var t,n,h=e.DecoratedComponent,v=e.createHandler,y=e.createMonitor,b=e.createConnector,m=e.registerHandler,O=e.containerDisplayName,D=e.getType,_=e.collect,w=e.options.arePropsEqual,C=void 0===w?p.default:w,x=h.displayName||h.name||"Component",E=(n=t=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.handleChange=r.handleChange.bind(r),r.handleChildRef=r.handleChildRef.bind(r),(0,l.default)("object"===o(r.context.dragDropManager),"Could not find the drag and drop manager in the context of %s. Make sure to wrap the top-level component of your app with DragDropContext. Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context",x,x),r.manager=r.context.dragDropManager,r.handlerMonitor=y(r.manager),r.handlerConnector=b(r.manager.getBackend()),r.handler=v(r.handlerMonitor),r.disposable=new s.SerialDisposable,r.receiveProps(e),r.state=r.getCurrentState(),r.dispose(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"getHandlerId",value:function(){return this.handlerId}},{key:"getDecoratedComponentInstance",value:function(){return this.decoratedComponentInstance}},{key:"shouldComponentUpdate",value:function(e,t){return!C(e,this.props)||!(0,d.default)(t,this.state)}}]),a(t,[{key:"componentDidMount",value:function(){this.isCurrentlyMounted=!0,this.disposable=new s.SerialDisposable,this.currentType=null,this.receiveProps(this.props),this.handleChange()}},{key:"componentWillReceiveProps",value:function(e){C(e,this.props)||(this.receiveProps(e),this.handleChange())}},{key:"componentWillUnmount",value:function(){this.dispose(),this.isCurrentlyMounted=!1}},{key:"receiveProps",value:function(e){this.handler.receiveProps(e),this.receiveType(D(e))}},{key:"receiveType",value:function(e){if(e!==this.currentType){this.currentType=e;var t=m(e,this.handler,this.manager),n=t.handlerId,r=t.unregister;this.handlerId=n,this.handlerMonitor.receiveHandlerId(n),this.handlerConnector.receiveHandlerId(n);var o=this.manager.getMonitor(),a=o.subscribeToStateChange(this.handleChange,{handlerIds:[n]});this.disposable.setDisposable(new s.CompositeDisposable(new s.Disposable(a),new s.Disposable(r)))}}},{key:"handleChange",value:function(){if(this.isCurrentlyMounted){var e=this.getCurrentState();(0,d.default)(e,this.state)||this.setState(e)}}},{key:"dispose",value:function(){this.disposable.dispose(),this.handlerConnector.receiveHandlerId(null)}},{key:"handleChildRef",value:function(e){this.decoratedComponentInstance=e,this.handler.receiveComponent(e)}},{key:"getCurrentState",value:function(){var e=_(this.handlerConnector.hooks,this.handlerMonitor);return e}},{key:"render",value:function(){return u.default.createElement(h,r({},this.props,this.state,{ref:g(h)?this.handleChildRef:null}))}}]),t}(i.Component),t.DecoratedComponent=h,t.displayName=O+"("+x+")",t.contextTypes={dragDropManager:c.default.object.isRequired},n);return(0,f.default)(E,h)};var i=n(0),u=h(i),c=h(n(2)),s=n(138),l=(h(n(3)),h(n(1))),f=h(n(28)),d=h(n(29)),p=h(n(49));function h(e){return e&&e.__esModule?e:{default:e}}var g=function(e){return Boolean(e&&e.prototype&&"function"==typeof e.prototype.render)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};return Object.keys(e).forEach(function(n){var r=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if((0,o.isValidElement)(t)){var r=t;!function(e){if("string"!=typeof e.type){var t=e.type.displayName||e.type.name||"the component";throw new Error("Only native element nodes can now be passed to React DnD connectors.You can either wrap "+t+" into a <div>, or turn it into a drag source or a drop target itself.")}}(r);var a=n?function(t){return e(t,n)}:e;return(0,i.default)(r,a)}var u=t;e(u,n)}}(e[n]);t[n]=function(){return r}}),t};var r,o=n(0),a=n(146),i=(r=a)&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t===e)return!0;return null!==t&&null!==e&&(0,a.default)(t,e)};var r,o=n(29),a=(r=o)&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function e(t,n){return"string"==typeof t||"symbol"===(void 0===t?"undefined":r(t))||n&&(0,i.default)(t)&&t.every(function(t){return e(t,!1)})};var o,a=n(4),i=(o=a)&&o.__esModule?o:{default:o}},function(e,t){var n=9007199254740991,r=/^(?:0|[1-9]\d*)$/;e.exports=function(e,t){var o=typeof e;return!!(t=null==t?n:t)&&("number"==o||"symbol"!=o&&r.test(e))&&e>-1&&e%1==0&&e<t}},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSafari=t.isFirefox=void 0;var r,o=n(170),a=(r=o)&&r.__esModule?r:{default:r};t.isFirefox=(0,a.default)(function(){return/firefox/i.test(navigator.userAgent)}),t.isSafari=(0,a.default)(function(){return Boolean(window.safari)})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.WIDGET="WIDGET"},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",function(){return r})},function(e,t,n){e.exports=n(60)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(61);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return(e=r,e&&e.__esModule?e:{default:e}).default;var e}});var o=n(32);Object.defineProperty(t,"addWidget",{enumerable:!0,get:function(){return o.addWidget}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=f(a),u=f(n(2)),c=n(18),s=f(n(152)),l=f(n(175));function f(e){return e&&e.__esModule?e:{default:e}}var d=(0,c.DragDropContext)(s.default)(r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement(l.default,this.props))}}]),t}())||r;d.propTypes={layout:u.default.object,widgets:u.default.object,editable:u.default.bool,rowClass:u.default.string,frameComponent:u.default.func,addWidgetComponent:u.default.func,editableColumnClass:u.default.string,droppableColumnClass:u.default.string,addWidgetComponentText:u.default.string,onRemove:u.default.func,onAdd:u.default.func,onMove:u.default.func},t.default=d},function(e,t,n){"use strict";var r=n(63),o=n(64),a=n(65);e.exports=function(){function e(e,t,n,r,i,u){u!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";var r=function(e){};e.exports=function(e,t,n,o,a,i,u,c){if(r(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,o,a,i,u,c],f=0;(s=new Error(t.replace(/%s/g,function(){return l[f++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(67);Object.defineProperty(t,"DragDropManager",{enumerable:!0,get:function(){return u(r).default}});var o=n(132);Object.defineProperty(t,"DragSource",{enumerable:!0,get:function(){return u(o).default}});var a=n(133);Object.defineProperty(t,"DropTarget",{enumerable:!0,get:function(){return u(a).default}});var i=n(134);function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"createTestBackend",{enumerable:!0,get:function(){return u(i).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=c(n(68)),a=c(n(75)),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(10)),u=c(n(127));function c(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var r=(0,o.default)(a.default);this.context=n,this.store=r,this.monitor=new u.default(r),this.registry=this.monitor.registry,this.backend=t(this),r.subscribe(this.handleRefCountChange.bind(this))}return r(e,[{key:"handleRefCountChange",value:function(){var e=this.store.getState().refCount>0;e&&!this.isSetUp?(this.backend.setup(),this.isSetUp=!0):!e&&this.isSetUp&&(this.backend.teardown(),this.isSetUp=!1)}},{key:"getContext",value:function(){return this.context}},{key:"getMonitor",value:function(){return this.monitor}},{key:"getBackend",value:function(){return this.backend}},{key:"getRegistry",value:function(){return this.registry}},{key:"getActions",value:function(){var e=this,t=this.store.dispatch;return Object.keys(i).filter(function(e){return"function"==typeof i[e]}).reduce(function(n,r){var o,a=i[r];return n[r]=(o=a,function(){for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];var i=o.apply(e,r);void 0!==i&&t(i)}),n},{})}}]),e}();t.default=s},function(e,t,n){"use strict";t.__esModule=!0,t.ActionTypes=void 0,t.default=function e(t,n,a){var u;"function"==typeof n&&void 0===a&&(a=n,n=void 0);if(void 0!==a){if("function"!=typeof a)throw new Error("Expected the enhancer to be a function.");return a(e)(t,n)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var c=t;var s=n;var l=[];var f=l;var d=!1;function p(){f===l&&(f=l.slice())}function h(){return s}function g(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return p(),f.push(e),function(){if(t){t=!1,p();var n=f.indexOf(e);f.splice(n,1)}}}function v(e){if(!(0,r.default)(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,s=c(s,e)}finally{d=!1}for(var t=l=f,n=0;n<t.length;n++){var o=t[n];o()}return e}v({type:i.INIT});return u={dispatch:v,subscribe:g,getState:h,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");c=e,v({type:i.INIT})}},u[o.default]=function(){var e,t=g;return(e={subscribe:function(e){if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(h())}n();var r=t(n);return{unsubscribe:r}}})[o.default]=function(){return this},e},u};var r=a(n(3)),o=a(n(73));function a(e){return e&&e.__esModule?e:{default:e}}var i=t.ActionTypes={INIT:"@@redux/INIT"}},function(e,t,n){var r=n(19),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,u=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,u),n=e[u];try{e[u]=void 0;var r=!0}catch(e){}var o=i.call(e);return r&&(t?e[u]=n:delete e[u]),o}},function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},function(e,t,n){var r=n(72)(Object.getPrototypeOf,Object);e.exports=r},function(e,t){e.exports=function(e,t){return function(n){return e(t(n))}}},function(e,t,n){"use strict";n.r(t),function(e){var r,o=n(58);r="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:e;var a=Object(o.a)(r);t.default=a}.call(this,n(74)(e))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];return{dirtyHandlerIds:(0,i.default)(e.dirtyHandlerIds,t,e.dragOperation),dragOffset:(0,r.default)(e.dragOffset,t),refCount:(0,a.default)(e.refCount,t),dragOperation:(0,o.default)(e.dragOperation,t),stateId:(0,u.default)(e.stateId)}};var r=c(n(35)),o=c(n(76)),a=c(n(114)),i=c(n(43)),u=c(n(126));function c(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments[1];switch(t.type){case u.BEGIN_DRAG:return r({},e,{itemType:t.itemType,item:t.item,sourceId:t.sourceId,isSourcePublic:t.isSourcePublic,dropResult:null,didDrop:!1});case u.PUBLISH_DRAG_SOURCE:return r({},e,{isSourcePublic:!0});case u.HOVER:return r({},e,{targetIds:t.targetIds});case c.REMOVE_TARGET:return-1===e.targetIds.indexOf(t.targetId)?e:r({},e,{targetIds:(0,i.default)(e.targetIds,t.targetId)});case u.DROP:return r({},e,{dropResult:t.dropResult,didDrop:!0,targetIds:[]});case u.END_DRAG:return r({},e,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return e}};var o,a=n(37),i=(o=a)&&o.__esModule?o:{default:o},u=n(10),c=n(16);var s={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null}},function(e,t,n){var r=n(78),o=n(89),a=n(95);e.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||o),string:new r}}},function(e,t,n){var r=n(79),o=n(85),a=n(86),i=n(87),u=n(88);function c(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=u,e.exports=c},function(e,t,n){var r=n(11);e.exports=function(){this.__data__=r?r(null):{},this.size=0}},function(e,t,n){var r=n(40),o=n(81),a=n(7),i=n(83),u=/^\[object .+?Constructor\]$/,c=Function.prototype,s=Object.prototype,l=c.toString,f=s.hasOwnProperty,d=RegExp("^"+l.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!a(e)||o(e))&&(r(e)?d:u).test(i(e))}},function(e,t,n){var r,o=n(82),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";e.exports=function(e){return!!a&&a in e}},function(e,t,n){var r=n(5)["__core-js_shared__"];e.exports=r},function(e,t){var n=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return n.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},function(e,t){e.exports=function(e,t){return null==e?void 0:e[t]}},function(e,t){e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},function(e,t,n){var r=n(11),o="__lodash_hash_undefined__",a=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(r){var n=t[e];return n===o?void 0:n}return a.call(t,e)?t[e]:void 0}},function(e,t,n){var r=n(11),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return r?void 0!==t[e]:o.call(t,e)}},function(e,t,n){var r=n(11),o="__lodash_hash_undefined__";e.exports=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=r&&void 0===t?o:t,this}},function(e,t,n){var r=n(90),o=n(91),a=n(92),i=n(93),u=n(94);function c(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=u,e.exports=c},function(e,t){e.exports=function(){this.__data__=[],this.size=0}},function(e,t,n){var r=n(13),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,n=r(t,e);return!(n<0||(n==t.length-1?t.pop():o.call(t,n,1),--this.size,0))}},function(e,t,n){var r=n(13);e.exports=function(e){var t=this.__data__,n=r(t,e);return n<0?void 0:t[n][1]}},function(e,t,n){var r=n(13);e.exports=function(e){return r(this.__data__,e)>-1}},function(e,t,n){var r=n(13);e.exports=function(e,t){var n=this.__data__,o=r(n,e);return o<0?(++this.size,n.push([e,t])):n[o][1]=t,this}},function(e,t,n){var r=n(12)(n(5),"Map");e.exports=r},function(e,t,n){var r=n(14);e.exports=function(e){var t=r(this,e).delete(e);return this.size-=t?1:0,t}},function(e,t){e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},function(e,t,n){var r=n(14);e.exports=function(e){return r(this,e).get(e)}},function(e,t,n){var r=n(14);e.exports=function(e){return r(this,e).has(e)}},function(e,t,n){var r=n(14);e.exports=function(e,t){var n=r(this,e),o=n.size;return n.set(e,t),this.size+=n.size==o?0:1,this}},function(e,t){var n="__lodash_hash_undefined__";e.exports=function(e){return this.__data__.set(e,n),this}},function(e,t){e.exports=function(e){return this.__data__.has(e)}},function(e,t,n){var r=n(104),o=n(105),a=n(106);e.exports=function(e,t,n){return t==t?a(e,t,n):r(e,o,n)}},function(e,t){e.exports=function(e,t,n,r){for(var o=e.length,a=n+(r?1:-1);r?a--:++a<o;)if(t(e[a],a,e))return a;return-1}},function(e,t){e.exports=function(e){return e!=e}},function(e,t){e.exports=function(e,t,n){for(var r=n-1,o=e.length;++r<o;)if(e[r]===t)return r;return-1}},function(e,t,n){var r=n(108),o=Math.max;e.exports=function(e,t,n){return t=o(void 0===t?e.length-1:t,0),function(){for(var a=arguments,i=-1,u=o(a.length-t,0),c=Array(u);++i<u;)c[i]=a[t+i];i=-1;for(var s=Array(t+1);++i<t;)s[i]=a[i];return s[t]=n(c),r(e,this,s)}}},function(e,t){e.exports=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}},function(e,t,n){var r=n(110),o=n(113)(r);e.exports=o},function(e,t,n){var r=n(111),o=n(112),a=n(41),i=o?function(e,t){return o(e,"toString",{configurable:!0,enumerable:!1,value:r(t),writable:!0})}:a;e.exports=i},function(e,t){e.exports=function(e){return function(){return e}}},function(e,t,n){var r=n(12),o=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=o},function(e,t){var n=800,r=16,o=Date.now;e.exports=function(e){var t=0,a=0;return function(){var i=o(),u=r-(i-a);if(a=i,u>0){if(++t>=n)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;switch(arguments[1].type){case r.ADD_SOURCE:case r.ADD_TARGET:return e+1;case r.REMOVE_SOURCE:case r.REMOVE_TARGET:return e-1;default:return e}};var r=n(16)},function(e,t,n){var r=n(116),o=n(8),a=n(117),i=n(15),u=o(function(e){return a(r(e,i))});e.exports=u},function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,a=[];++n<r;){var i=e[n];t(i,n,e)&&(a[o++]=i)}return a}},function(e,t,n){var r=n(38),o=n(44),a=n(46);e.exports=function(e,t,n){var i=e.length;if(i<2)return i?a(e[0]):[];for(var u=-1,c=Array(i);++u<i;)for(var s=e[u],l=-1;++l<i;)l!=u&&(c[u]=r(c[u]||s,e[l],t,n));return a(o(c,1),t,n)}},function(e,t){e.exports=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}},function(e,t,n){var r=n(19),o=n(45),a=n(4),i=r?r.isConcatSpreadable:void 0;e.exports=function(e){return a(e)||o(e)||!!(i&&e&&e[i])}},function(e,t,n){var r=n(9),o=n(6),a="[object Arguments]";e.exports=function(e){return o(e)&&r(e)==a}},function(e,t,n){var r=n(122),o=n(47),a=n(48),i=r&&1/a(new r([,-0]))[1]==1/0?function(e){return new r(e)}:o;e.exports=i},function(e,t,n){var r=n(12)(n(5),"Set");e.exports=r},function(e,t,n){var r=n(24),o=n(124),a=n(8),i=n(125),u=a(function(e){var t=r(e,i);return t.length&&t[0]===e[0]?o(t):[]});e.exports=u},function(e,t,n){var r=n(20),o=n(22),a=n(23),i=n(24),u=n(25),c=n(26),s=Math.min;e.exports=function(e,t,n){for(var l=n?a:o,f=e[0].length,d=e.length,p=d,h=Array(d),g=1/0,v=[];p--;){var y=e[p];p&&t&&(y=i(y,u(t))),g=s(y.length,g),h[p]=!n&&(t||f>=120&&y.length>=120)?new r(p&&y):void 0}y=e[0];var b=-1,m=h[0];e:for(;++b<f&&v.length<g;){var O=y[b],D=t?t(O):O;if(O=n||0!==O?O:0,!(m?c(m,D):l(v,D,n))){for(p=d;--p;){var _=h[p];if(!(_?c(_,D):l(e[p],D,n)))continue e}m&&m.push(D),v.push(O)}}return v}},function(e,t,n){var r=n(15);e.exports=function(e){return r(e)?e:[]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)+1}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(1)),a=l(n(4)),i=l(n(36)),u=l(n(128)),c=n(35),s=n(43);function l(e){return e&&e.__esModule?e:{default:e}}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.store=t,this.registry=new u.default(t)}return r(e,[{key:"subscribeToStateChange",value:function(e){var t=this,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).handlerIds;(0,o.default)("function"==typeof e,"listener must be a function."),(0,o.default)(void 0===n||(0,a.default)(n),"handlerIds, when specified, must be an array of strings.");var r=this.store.getState().stateId;return this.store.subscribe(function(){var o=t.store.getState(),a=o.stateId;try{a===r||a===r+1&&!(0,s.areDirty)(o.dirtyHandlerIds,n)||e()}finally{r=a}})}},{key:"subscribeToOffsetChange",value:function(e){var t=this;(0,o.default)("function"==typeof e,"listener must be a function.");var n=this.store.getState().dragOffset;return this.store.subscribe(function(){var r=t.store.getState().dragOffset;r!==n&&(n=r,e())})}},{key:"canDragSource",value:function(e){var t=this.registry.getSource(e);return(0,o.default)(t,"Expected to find a valid source."),!this.isDragging()&&t.canDrag(this,e)}},{key:"canDropOnTarget",value:function(e){var t=this.registry.getTarget(e);if((0,o.default)(t,"Expected to find a valid target."),!this.isDragging()||this.didDrop())return!1;var n=this.registry.getTargetType(e),r=this.getItemType();return(0,i.default)(n,r)&&t.canDrop(this,e)}},{key:"isDragging",value:function(){return Boolean(this.getItemType())}},{key:"isDraggingSource",value:function(e){var t=this.registry.getSource(e,!0);return(0,o.default)(t,"Expected to find a valid source."),!(!this.isDragging()||!this.isSourcePublic())&&(this.registry.getSourceType(e)===this.getItemType()&&t.isDragging(this,e))}},{key:"isOverTarget",value:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{shallow:!1}).shallow;if(!this.isDragging())return!1;var n=this.registry.getTargetType(e),r=this.getItemType();if(!(0,i.default)(n,r))return!1;var o=this.getTargetIds();if(!o.length)return!1;var a=o.indexOf(e);return t?a===o.length-1:a>-1}},{key:"getItemType",value:function(){return this.store.getState().dragOperation.itemType}},{key:"getItem",value:function(){return this.store.getState().dragOperation.item}},{key:"getSourceId",value:function(){return this.store.getState().dragOperation.sourceId}},{key:"getTargetIds",value:function(){return this.store.getState().dragOperation.targetIds}},{key:"getDropResult",value:function(){return this.store.getState().dragOperation.dropResult}},{key:"didDrop",value:function(){return this.store.getState().dragOperation.didDrop}},{key:"isSourcePublic",value:function(){return this.store.getState().dragOperation.isSourcePublic}},{key:"getInitialClientOffset",value:function(){return this.store.getState().dragOffset.initialClientOffset}},{key:"getInitialSourceClientOffset",value:function(){return this.store.getState().dragOffset.initialSourceClientOffset}},{key:"getClientOffset",value:function(){return this.store.getState().dragOffset.clientOffset}},{key:"getSourceClientOffset",value:function(){return(0,c.getSourceClientOffset)(this.store.getState().dragOffset)}},{key:"getDifferenceFromInitialOffset",value:function(){return(0,c.getDifferenceFromInitialOffset)(this.store.getState().dragOffset)}}]),e}();t.default=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=l(n(1)),i=l(n(4)),u=l(n(129)),c=n(16),s=l(n(131));function l(e){return e&&e.__esModule?e:{default:e}}var f={SOURCE:"SOURCE",TARGET:"TARGET"};function d(e,t){t&&(0,i.default)(e)?e.forEach(function(e){return d(e,!1)}):(0,a.default)("string"==typeof e||"symbol"===(void 0===e?"undefined":o(e)),t?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}function p(e){switch(e[0]){case"S":return f.SOURCE;case"T":return f.TARGET;default:(0,a.default)(!1,"Cannot parse handler ID: "+e)}}var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.store=t,this.types={},this.handlers={},this.pinnedSourceId=null,this.pinnedSource=null}return r(e,[{key:"addSource",value:function(e,t){d(e),function(e){(0,a.default)("function"==typeof e.canDrag,"Expected canDrag to be a function."),(0,a.default)("function"==typeof e.beginDrag,"Expected beginDrag to be a function."),(0,a.default)("function"==typeof e.endDrag,"Expected endDrag to be a function.")}(t);var n=this.addHandler(f.SOURCE,e,t);return this.store.dispatch((0,c.addSource)(n)),n}},{key:"addTarget",value:function(e,t){d(e,!0),function(e){(0,a.default)("function"==typeof e.canDrop,"Expected canDrop to be a function."),(0,a.default)("function"==typeof e.hover,"Expected hover to be a function."),(0,a.default)("function"==typeof e.drop,"Expected beginDrag to be a function.")}(t);var n=this.addHandler(f.TARGET,e,t);return this.store.dispatch((0,c.addTarget)(n)),n}},{key:"addHandler",value:function(e,t,n){var r=function(e){var t=(0,s.default)().toString();switch(e){case f.SOURCE:return"S"+t;case f.TARGET:return"T"+t;default:(0,a.default)(!1,"Unknown role: "+e)}}(e);return this.types[r]=t,this.handlers[r]=n,r}},{key:"containsHandler",value:function(e){var t=this;return Object.keys(this.handlers).some(function(n){return t.handlers[n]===e})}},{key:"getSource",value:function(e,t){return(0,a.default)(this.isSourceId(e),"Expected a valid source ID."),t&&e===this.pinnedSourceId?this.pinnedSource:this.handlers[e]}},{key:"getTarget",value:function(e){return(0,a.default)(this.isTargetId(e),"Expected a valid target ID."),this.handlers[e]}},{key:"getSourceType",value:function(e){return(0,a.default)(this.isSourceId(e),"Expected a valid source ID."),this.types[e]}},{key:"getTargetType",value:function(e){return(0,a.default)(this.isTargetId(e),"Expected a valid target ID."),this.types[e]}},{key:"isSourceId",value:function(e){return p(e)===f.SOURCE}},{key:"isTargetId",value:function(e){return p(e)===f.TARGET}},{key:"removeSource",value:function(e){var t=this;(0,a.default)(this.getSource(e),"Expected an existing source."),this.store.dispatch((0,c.removeSource)(e)),(0,u.default)(function(){delete t.handlers[e],delete t.types[e]})}},{key:"removeTarget",value:function(e){var t=this;(0,a.default)(this.getTarget(e),"Expected an existing target."),this.store.dispatch((0,c.removeTarget)(e)),(0,u.default)(function(){delete t.handlers[e],delete t.types[e]})}},{key:"pinSource",value:function(e){var t=this.getSource(e);(0,a.default)(t,"Expected an existing source."),this.pinnedSourceId=e,this.pinnedSource=t}},{key:"unpinSource",value:function(){(0,a.default)(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null}}]),e}();t.default=h},function(e,t,n){"use strict";var r=n(130),o=[],a=[],i=r.makeRequestCallFromTimer(function(){if(a.length)throw a.shift()});function u(e){var t;(t=o.length?o.pop():new c).task=e,r(t)}function c(){this.task=null}e.exports=u,c.prototype.call=function(){try{this.task.call()}catch(e){u.onerror?u.onerror(e):(a.push(e),i())}finally{this.task=null,o[o.length]=this}}},function(e,t,n){"use strict";function r(e){a.length||(o(),!0),a[a.length]=e}e.exports=r;var o,a=[],i=0,u=1024;function c(){for(;i<a.length;){var e=i;if(i+=1,a[e].call(),i>u){for(var t=0,n=a.length-i;t<n;t++)a[t]=a[t+i];a.length-=i,i=0}}a.length=0,i=0,!1}var s,l,f,d="undefined"!=typeof global?global:self,p=d.MutationObserver||d.WebKitMutationObserver;function h(e){return function(){var t=setTimeout(r,0),n=setInterval(r,50);function r(){clearTimeout(t),clearInterval(n),e()}}}"function"==typeof p?(s=1,l=new p(c),f=document.createTextNode(""),l.observe(f,{characterData:!0}),o=function(){s=-s,f.data=s}):o=h(c),r.requestFlush=o,r.makeRequestCallFromTimer=h},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return r++};var r=0},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"canDrag",value:function(){return!0}},{key:"isDragging",value:function(e,t){return t===e.getSourceId()}},{key:"endDrag",value:function(){}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"canDrop",value:function(){return!0}},{key:"hover",value:function(){}},{key:"drop",value:function(){}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=function(e){return new u(e)};var o,a=n(47),i=(o=a)&&o.__esModule?o:{default:o};var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.actions=t.getActions()}return r(e,[{key:"setup",value:function(){this.didCallSetup=!0}},{key:"teardown",value:function(){this.didCallTeardown=!0}},{key:"connectDragSource",value:function(){return i.default}},{key:"connectDragPreview",value:function(){return i.default}},{key:"connectDropTarget",value:function(){return i.default}},{key:"simulateBeginDrag",value:function(e,t){this.actions.beginDrag(e,t)}},{key:"simulatePublishDragSource",value:function(){this.actions.publishDragSource()}},{key:"simulateHover",value:function(e,t){this.actions.hover(e,t)}},{key:"simulateDrop",value:function(){this.actions.drop()}},{key:"simulateEndDrag",value:function(){this.actions.endDrag()}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,a,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=n(2),s=(a=c)&&a.__esModule?a:{default:a},l=n(33);var f=(o=r=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.backend=(0,l.unpackBackendForEs5Users)(e.backend),r.childContext=(0,l.createChildContext)(r.backend,{window:e&&e.window?e.window:n&&n.window?n.window:"undefined"!=typeof window?window:void 0}),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),i(t,[{key:"componentWillReceiveProps",value:function(e){if(e.backend!==this.props.backend||e.window!==this.props.window)throw new Error("DragDropContextProvider backend and window props must not change.")}},{key:"getChildContext",value:function(){return this.childContext}},{key:"render",value:function(){return u.Children.only(this.props.children)}}]),t}(),r.propTypes={backend:s.default.oneOfType([s.default.func,s.default.object]).isRequired,children:s.default.element.isRequired,window:s.default.object},r.defaultProps={window:void 0},r.childContextTypes=l.CHILD_CONTEXT_TYPES,r.displayName="DragDropContextProvider",r.contextTypes={window:s.default.object},o);t.default=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h.default.apply(void 0,["DragLayer","collect[, options]"].concat(Array.prototype.slice.call(arguments))),(0,f.default)("function"==typeof e,'Expected "collect" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ',"Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html",e),(0,f.default)((0,l.default)(t),'Expected "options" provided as the second argument to DragLayer to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html',t),function(n){var l,h,g=t.arePropsEqual,v=void 0===g?p.default:g,y=n.displayName||n.name||"Component",b=(h=l=function(t){function c(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e));return n.handleChange=n.handleChange.bind(n),n.manager=t.dragDropManager,(0,f.default)("object"===o(n.manager),"Could not find the drag and drop manager in the context of %s. Make sure to wrap the top-level component of your app with DragDropContext. Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context",y,y),n.state=n.getCurrentState(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(c,i.Component),a(c,[{key:"getDecoratedComponentInstance",value:function(){return(0,f.default)(this.child,"In order to access an instance of the decorated component it can not be a stateless component."),this.child}},{key:"shouldComponentUpdate",value:function(e,t){return!v(e,this.props)||!(0,d.default)(t,this.state)}}]),a(c,[{key:"componentDidMount",value:function(){this.isCurrentlyMounted=!0;var e=this.manager.getMonitor();this.unsubscribeFromOffsetChange=e.subscribeToOffsetChange(this.handleChange),this.unsubscribeFromStateChange=e.subscribeToStateChange(this.handleChange),this.handleChange()}},{key:"componentWillUnmount",value:function(){this.isCurrentlyMounted=!1,this.unsubscribeFromOffsetChange(),this.unsubscribeFromStateChange()}},{key:"handleChange",value:function(){if(this.isCurrentlyMounted){var e=this.getCurrentState();(0,d.default)(e,this.state)||this.setState(e)}}},{key:"getCurrentState",value:function(){var t=this.manager.getMonitor();return e(t,this.props)}},{key:"render",value:function(){var e=this;return u.default.createElement(n,r({},this.props,this.state,{ref:function(t){e.child=t}}))}}]),c}(),l.DecoratedComponent=n,l.displayName="DragLayer("+y+")",l.contextTypes={dragDropManager:c.default.object.isRequired},h);return(0,s.default)(b,n)}};var i=n(0),u=g(i),c=g(n(2)),s=g(n(28)),l=g(n(3)),f=g(n(1)),d=g(n(29)),p=g(n(49)),h=g(n(17));function g(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};a.default.apply(void 0,["DragSource","type, spec, collect[, options]"].concat(Array.prototype.slice.call(arguments)));var p=e;"function"!=typeof e&&((0,r.default)((0,f.default)(e),'Expected "type" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html',e),p=function(){return e});(0,r.default)((0,o.default)(t),'Expected "spec" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html',t);var h=(0,c.default)(t);return(0,r.default)("function"==typeof n,'Expected "collect" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html',n),(0,r.default)((0,o.default)(d),'Expected "options" provided as the fourth argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html',n),function(e){return(0,i.default)({connectBackend:function(e,t){return e.connectDragSource(t)},containerDisplayName:"DragSource",createHandler:h,registerHandler:u.default,createMonitor:s.default,createConnector:l.default,DecoratedComponent:e,getType:p,collect:n,options:d})}};var r=d(n(1)),o=d(n(3)),a=d(n(17)),i=d(n(50)),u=d(n(142)),c=d(n(143)),s=d(n(144)),l=d(n(145)),f=d(n(53));function d(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=r(n(30));t.isDisposable=o.default;var a=r(n(139));t.Disposable=a.default;var i=r(n(140));t.CompositeDisposable=i.default;var u=r(n(141));t.SerialDisposable=u.default},function(e,t,n){"use strict";t.__esModule=!0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){},a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isDisposed=!1,this.action=t||o}return r(e,null,[{key:"empty",value:{dispose:o},enumerable:!0}]),e.prototype.dispose=function(){this.isDisposed||(this.action.call(null),this.isDisposed=!0)},e}();t.default=a,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(30),a=(r=o)&&r.__esModule?r:{default:r},i=function(){function e(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Array.isArray(n[0])&&1===n.length&&(n=n[0]);for(var o=0;o<n.length;o++)if(!a.default(n[o]))throw new Error("Expected a disposable");this.disposables=n,this.isDisposed=!1}return e.prototype.add=function(e){this.isDisposed?e.dispose():this.disposables.push(e)},e.prototype.remove=function(e){if(this.isDisposed)return!1;var t=this.disposables.indexOf(e);return-1!==t&&(this.disposables.splice(t,1),e.dispose(),!0)},e.prototype.dispose=function(){if(!this.isDisposed){for(var e=this.disposables.length,t=new Array(e),n=0;n<e;n++)t[n]=this.disposables[n];this.isDisposed=!0,this.disposables=[],this.length=0;for(n=0;n<e;n++)t[n].dispose()}},e}();t.default=i,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(30),a=(r=o)&&r.__esModule?r:{default:r},i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isDisposed=!1,this.current=null}return e.prototype.getDisposable=function(){return this.current},e.prototype.setDisposable=function(){var e=arguments.length<=0||void 0===arguments[0]?null:arguments[0];if(null!=e&&!a.default(e))throw new Error("Expected either an empty value or a valid disposable");var t=this.isDisposed,n=void 0;t||(n=this.current,this.current=e),n&&n.dispose(),t&&e&&e.dispose()},e.prototype.dispose=function(){if(!this.isDisposed){this.isDisposed=!0;var e=this.current;this.current=null,e&&e.dispose()}},e}();t.default=i,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r=n.getRegistry(),o=r.addSource(e,t);return{handlerId:o,unregister:function(){r.removeSource(o)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=function(e){Object.keys(e).forEach(function(t){(0,o.default)(i.indexOf(t)>-1,'Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html',i.join(", "),t),(0,o.default)("function"==typeof e[t],"Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html",t,t,e[t])}),u.forEach(function(t){(0,o.default)("function"==typeof e[t],"Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html",t,t,e[t])});var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.monitor=e,this.props=null,this.component=null}return r(t,[{key:"receiveProps",value:function(e){this.props=e}},{key:"receiveComponent",value:function(e){this.component=e}},{key:"canDrag",value:function(){return!e.canDrag||e.canDrag(this.props,this.monitor)}},{key:"isDragging",value:function(t,n){return e.isDragging?e.isDragging(this.props,this.monitor):n===t.getSourceId()}},{key:"beginDrag",value:function(){var t=e.beginDrag(this.props,this.monitor,this.component);return t}},{key:"endDrag",value:function(){e.endDrag&&e.endDrag(this.props,this.monitor,this.component)}}]),t}();return function(e){return new t(e)}};var o=a(n(1));a(n(3));function a(e){return e&&e.__esModule?e:{default:e}}var i=["canDrag","beginDrag","isDragging","endDrag"],u=["beginDrag"]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=function(e){return new s(e)};var o,a=n(1),i=(o=a)&&o.__esModule?o:{default:o};var u=!1,c=!1,s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.internalMonitor=t.getMonitor()}return r(e,[{key:"receiveHandlerId",value:function(e){this.sourceId=e}},{key:"canDrag",value:function(){(0,i.default)(!u,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html");try{return u=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{u=!1}}},{key:"isDragging",value:function(){(0,i.default)(!c,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html");try{return c=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{c=!1}}},{key:"getItemType",value:function(){return this.internalMonitor.getItemType()}},{key:"getItem",value:function(){return this.internalMonitor.getItem()}},{key:"getDropResult",value:function(){return this.internalMonitor.getDropResult()}},{key:"didDrop",value:function(){return this.internalMonitor.didDrop()}},{key:"getInitialClientOffset",value:function(){return this.internalMonitor.getInitialClientOffset()}},{key:"getInitialSourceClientOffset",value:function(){return this.internalMonitor.getInitialSourceClientOffset()}},{key:"getSourceClientOffset",value:function(){return this.internalMonitor.getSourceClientOffset()}},{key:"getClientOffset",value:function(){return this.internalMonitor.getClientOffset()}},{key:"getDifferenceFromInitialOffset",value:function(){return this.internalMonitor.getDifferenceFromInitialOffset()}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=void 0,n=void 0,a=void 0,i=void 0,u=void 0,c=void 0,s=void 0;function l(){i&&(i(),i=null),t&&n&&(i=e.connectDragSource(t,n,a))}function f(){s&&(s(),s=null),t&&u&&(s=e.connectDragPreview(t,u,c))}return{receiveHandlerId:function(e){if(e===t)return;t=e,l(),f()},hooks:(0,r.default)({dragSource:function(e,t){e===n&&(0,o.default)(t,a)||(n=e,a=t,l())},dragPreview:function(e,t){e===u&&(0,o.default)(t,c)||(u=e,c=t,f())}})}};var r=a(n(51)),o=a(n(52));function a(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=e.ref;if((0,a.default)("string"!=typeof n,"Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute"),!n)return(0,i.cloneElement)(e,{ref:t});return(0,i.cloneElement)(e,{ref:function(e){t(e),n&&n(e)}})};var r,o=n(1),a=(r=o)&&r.__esModule?r:{default:r},i=n(0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};a.default.apply(void 0,["DropTarget","type, spec, collect[, options]"].concat(Array.prototype.slice.call(arguments)));var p=e;"function"!=typeof e&&((0,r.default)((0,f.default)(e,!0),'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html',e),p=function(){return e});(0,r.default)((0,o.default)(t),'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html',t);var h=(0,c.default)(t);return(0,r.default)("function"==typeof n,'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html',n),(0,r.default)((0,o.default)(d),'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html',n),function(e){return(0,i.default)({connectBackend:function(e,t){return e.connectDropTarget(t)},containerDisplayName:"DropTarget",createHandler:h,registerHandler:u.default,createMonitor:s.default,createConnector:l.default,DecoratedComponent:e,getType:p,collect:n,options:d})}};var r=d(n(1)),o=d(n(3)),a=d(n(17)),i=d(n(50)),u=d(n(148)),c=d(n(149)),s=d(n(150)),l=d(n(151)),f=d(n(53));function d(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r=n.getRegistry(),o=r.addTarget(e,t);return{handlerId:o,unregister:function(){r.removeTarget(o)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=function(e){Object.keys(e).forEach(function(t){(0,o.default)(i.indexOf(t)>-1,'Expected the drop target specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html',i.join(", "),t),(0,o.default)("function"==typeof e[t],"Expected %s in the drop target specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html",t,t,e[t])});var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.monitor=e,this.props=null,this.component=null}return r(t,[{key:"receiveProps",value:function(e){this.props=e}},{key:"receiveMonitor",value:function(e){this.monitor=e}},{key:"receiveComponent",value:function(e){this.component=e}},{key:"canDrop",value:function(){return!e.canDrop||e.canDrop(this.props,this.monitor)}},{key:"hover",value:function(){e.hover&&e.hover(this.props,this.monitor,this.component)}},{key:"drop",value:function(){if(e.drop){var t=e.drop(this.props,this.monitor,this.component);return t}}}]),t}();return function(e){return new t(e)}};var o=a(n(1));a(n(3));function a(e){return e&&e.__esModule?e:{default:e}}var i=["canDrop","hover","drop"]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=function(e){return new c(e)};var o,a=n(1),i=(o=a)&&o.__esModule?o:{default:o};var u=!1,c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.internalMonitor=t.getMonitor()}return r(e,[{key:"receiveHandlerId",value:function(e){this.targetId=e}},{key:"canDrop",value:function(){(0,i.default)(!u,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs-drop-target-monitor.html");try{return u=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{u=!1}}},{key:"isOver",value:function(e){return this.internalMonitor.isOverTarget(this.targetId,e)}},{key:"getItemType",value:function(){return this.internalMonitor.getItemType()}},{key:"getItem",value:function(){return this.internalMonitor.getItem()}},{key:"getDropResult",value:function(){return this.internalMonitor.getDropResult()}},{key:"didDrop",value:function(){return this.internalMonitor.didDrop()}},{key:"getInitialClientOffset",value:function(){return this.internalMonitor.getInitialClientOffset()}},{key:"getInitialSourceClientOffset",value:function(){return this.internalMonitor.getInitialSourceClientOffset()}},{key:"getSourceClientOffset",value:function(){return this.internalMonitor.getSourceClientOffset()}},{key:"getClientOffset",value:function(){return this.internalMonitor.getClientOffset()}},{key:"getDifferenceFromInitialOffset",value:function(){return this.internalMonitor.getDifferenceFromInitialOffset()}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=void 0,n=void 0,a=void 0,i=void 0;function u(){i&&(i(),i=null),t&&n&&(i=e.connectDropTarget(t,n,a))}return{receiveHandlerId:function(e){if(e===t)return;t=e,u()},hooks:(0,r.default)({dropTarget:function(e,t){e===n&&(0,o.default)(t,a)||(n=e,a=t,u())}})}};var r=a(n(51)),o=a(n(52));function a(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getEmptyImage=t.NativeTypes=void 0,t.default=function(e){return new r.default(e)};var r=i(n(153)),o=i(n(174)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(31));function i(e){return e&&e.__esModule?e:{default:e}}t.NativeTypes=a,t.getEmptyImage=o.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=f(n(154)),a=f(n(167)),i=f(n(168)),u=n(56),c=n(171),s=n(173),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(31));function f(e){return e&&e.__esModule?e:{default:e}}var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.actions=t.getActions(),this.monitor=t.getMonitor(),this.registry=t.getRegistry(),this.context=t.getContext(),this.sourcePreviewNodes={},this.sourcePreviewNodeOptions={},this.sourceNodes={},this.sourceNodeOptions={},this.enterLeaveCounter=new i.default,this.dragStartSourceIds=[],this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.currentDragSourceNodeOffset=null,this.currentDragSourceNodeOffsetChanged=!1,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.getSourceClientOffset=this.getSourceClientOffset.bind(this),this.handleTopDragStart=this.handleTopDragStart.bind(this),this.handleTopDragStartCapture=this.handleTopDragStartCapture.bind(this),this.handleTopDragEndCapture=this.handleTopDragEndCapture.bind(this),this.handleTopDragEnter=this.handleTopDragEnter.bind(this),this.handleTopDragEnterCapture=this.handleTopDragEnterCapture.bind(this),this.handleTopDragLeaveCapture=this.handleTopDragLeaveCapture.bind(this),this.handleTopDragOver=this.handleTopDragOver.bind(this),this.handleTopDragOverCapture=this.handleTopDragOverCapture.bind(this),this.handleTopDrop=this.handleTopDrop.bind(this),this.handleTopDropCapture=this.handleTopDropCapture.bind(this),this.handleSelectStart=this.handleSelectStart.bind(this),this.endDragIfSourceWasRemovedFromDOM=this.endDragIfSourceWasRemovedFromDOM.bind(this),this.endDragNativeItem=this.endDragNativeItem.bind(this),this.asyncEndDragNativeItem=this.asyncEndDragNativeItem.bind(this),this.isNodeInDocument=this.isNodeInDocument.bind(this)}return r(e,[{key:"setup",value:function(){if(void 0!==this.window){if(this.window.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");this.window.__isReactDndBackendSetUp=!0,this.addEventListeners(this.window)}}},{key:"teardown",value:function(){void 0!==this.window&&(this.window.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.window),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId&&this.window.cancelAnimationFrame(this.asyncEndDragFrameId))}},{key:"addEventListeners",value:function(e){e.addEventListener&&(e.addEventListener("dragstart",this.handleTopDragStart),e.addEventListener("dragstart",this.handleTopDragStartCapture,!0),e.addEventListener("dragend",this.handleTopDragEndCapture,!0),e.addEventListener("dragenter",this.handleTopDragEnter),e.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.addEventListener("dragover",this.handleTopDragOver),e.addEventListener("dragover",this.handleTopDragOverCapture,!0),e.addEventListener("drop",this.handleTopDrop),e.addEventListener("drop",this.handleTopDropCapture,!0))}},{key:"removeEventListeners",value:function(e){e.removeEventListener&&(e.removeEventListener("dragstart",this.handleTopDragStart),e.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),e.removeEventListener("dragend",this.handleTopDragEndCapture,!0),e.removeEventListener("dragenter",this.handleTopDragEnter),e.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.removeEventListener("dragover",this.handleTopDragOver),e.removeEventListener("dragover",this.handleTopDragOverCapture,!0),e.removeEventListener("drop",this.handleTopDrop),e.removeEventListener("drop",this.handleTopDropCapture,!0))}},{key:"connectDragPreview",value:function(e,t,n){var r=this;return this.sourcePreviewNodeOptions[e]=n,this.sourcePreviewNodes[e]=t,function(){delete r.sourcePreviewNodes[e],delete r.sourcePreviewNodeOptions[e]}}},{key:"connectDragSource",value:function(e,t,n){var r=this;this.sourceNodes[e]=t,this.sourceNodeOptions[e]=n;var o=function(t){return r.handleDragStart(t,e)},a=function(t){return r.handleSelectStart(t,e)};return t.setAttribute("draggable",!0),t.addEventListener("dragstart",o),t.addEventListener("selectstart",a),function(){delete r.sourceNodes[e],delete r.sourceNodeOptions[e],t.removeEventListener("dragstart",o),t.removeEventListener("selectstart",a),t.setAttribute("draggable",!1)}}},{key:"connectDropTarget",value:function(e,t){var n=this,r=function(t){return n.handleDragEnter(t,e)},o=function(t){return n.handleDragOver(t,e)},a=function(t){return n.handleDrop(t,e)};return t.addEventListener("dragenter",r),t.addEventListener("dragover",o),t.addEventListener("drop",a),function(){t.removeEventListener("dragenter",r),t.removeEventListener("dragover",o),t.removeEventListener("drop",a)}}},{key:"getCurrentSourceNodeOptions",value:function(){var e=this.monitor.getSourceId(),t=this.sourceNodeOptions[e];return(0,o.default)(t||{},{dropEffect:this.altKeyPressed?"copy":"move"})}},{key:"getCurrentDropEffect",value:function(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}},{key:"getCurrentSourcePreviewNodeOptions",value:function(){var e=this.monitor.getSourceId(),t=this.sourcePreviewNodeOptions[e];return(0,o.default)(t||{},{anchorX:.5,anchorY:.5,captureDraggingState:!1})}},{key:"getSourceClientOffset",value:function(e){return(0,c.getNodeClientOffset)(this.sourceNodes[e])}},{key:"isDraggingNativeItem",value:function(){var e=this.monitor.getItemType();return Object.keys(l).some(function(t){return l[t]===e})}},{key:"beginDragNativeItem",value:function(e){this.clearCurrentDragSourceNode();var t=(0,s.createNativeDragSource)(e);this.currentNativeSource=new t,this.currentNativeHandle=this.registry.addSource(e,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}},{key:"asyncEndDragNativeItem",value:function(){this.asyncEndDragFrameId=this.window.requestAnimationFrame(this.endDragNativeItem)}},{key:"endDragNativeItem",value:function(){this.isDraggingNativeItem()&&(this.actions.endDrag(),this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)}},{key:"isNodeInDocument",value:function(e){return!(!document.body.contains(e)&&!this.window)&&this.window.document.body.contains(e)}},{key:"endDragIfSourceWasRemovedFromDOM",value:function(){var e=this.currentDragSourceNode;this.isNodeInDocument(e)||this.clearCurrentDragSourceNode()&&this.actions.endDrag()}},{key:"setCurrentDragSourceNode",value:function(e){var t=this;this.clearCurrentDragSourceNode(),this.currentDragSourceNode=e,this.currentDragSourceNodeOffset=(0,c.getNodeClientOffset)(e),this.currentDragSourceNodeOffsetChanged=!1;this.mouseMoveTimeoutTimer=setTimeout(function(){return t.mouseMoveTimeoutId=null,t.window.addEventListener("mousemove",t.endDragIfSourceWasRemovedFromDOM,!0)},1e3)}},{key:"clearCurrentDragSourceNode",value:function(){return!!this.currentDragSourceNode&&(this.currentDragSourceNode=null,this.currentDragSourceNodeOffset=null,this.currentDragSourceNodeOffsetChanged=!1,this.window.clearTimeout(this.mouseMoveTimeoutTimer),this.window.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0),this.mouseMoveTimeoutTimer=null,!0)}},{key:"checkIfCurrentDragSourceRectChanged",value:function(){var e=this.currentDragSourceNode;return!!e&&(!!this.currentDragSourceNodeOffsetChanged||(this.currentDragSourceNodeOffsetChanged=!(0,a.default)((0,c.getNodeClientOffset)(e),this.currentDragSourceNodeOffset),this.currentDragSourceNodeOffsetChanged))}},{key:"handleTopDragStartCapture",value:function(){this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]}},{key:"handleDragStart",value:function(e,t){this.dragStartSourceIds.unshift(t)}},{key:"handleTopDragStart",value:function(e){var t=this,n=this.dragStartSourceIds;this.dragStartSourceIds=null;var r=(0,c.getEventClientOffset)(e);this.monitor.isDragging()&&this.actions.endDrag(),this.actions.beginDrag(n,{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:r});var o=e.dataTransfer,a=(0,s.matchNativeItemType)(o);if(this.monitor.isDragging()){if("function"==typeof o.setDragImage){var i=this.monitor.getSourceId(),u=this.sourceNodes[i],l=this.sourcePreviewNodes[i]||u,f=this.getCurrentSourcePreviewNodeOptions(),d={anchorX:f.anchorX,anchorY:f.anchorY},p={offsetX:f.offsetX,offsetY:f.offsetY},h=(0,c.getDragPreviewOffset)(u,l,r,d,p);o.setDragImage(l,h.x,h.y)}try{o.setData("application/json",{})}catch(e){}this.setCurrentDragSourceNode(e.target),this.getCurrentSourcePreviewNodeOptions().captureDraggingState?this.actions.publishDragSource():setTimeout(function(){return t.actions.publishDragSource()})}else if(a)this.beginDragNativeItem(a);else{if(!(o.types||e.target.hasAttribute&&e.target.hasAttribute("draggable")))return;e.preventDefault()}}},{key:"handleTopDragEndCapture",value:function(){this.clearCurrentDragSourceNode()&&this.actions.endDrag()}},{key:"handleTopDragEnterCapture",value:function(e){if(this.dragEnterTargetIds=[],this.enterLeaveCounter.enter(e.target)&&!this.monitor.isDragging()){var t=e.dataTransfer,n=(0,s.matchNativeItemType)(t);n&&this.beginDragNativeItem(n)}}},{key:"handleDragEnter",value:function(e,t){this.dragEnterTargetIds.unshift(t)}},{key:"handleTopDragEnter",value:function(e){var t=this,n=this.dragEnterTargetIds;(this.dragEnterTargetIds=[],this.monitor.isDragging())&&(this.altKeyPressed=e.altKey,(0,u.isFirefox)()||this.actions.hover(n,{clientOffset:(0,c.getEventClientOffset)(e)}),n.some(function(e){return t.monitor.canDropOnTarget(e)})&&(e.preventDefault(),e.dataTransfer.dropEffect=this.getCurrentDropEffect()))}},{key:"handleTopDragOverCapture",value:function(){this.dragOverTargetIds=[]}},{key:"handleDragOver",value:function(e,t){this.dragOverTargetIds.unshift(t)}},{key:"handleTopDragOver",value:function(e){var t=this,n=this.dragOverTargetIds;if(this.dragOverTargetIds=[],!this.monitor.isDragging())return e.preventDefault(),void(e.dataTransfer.dropEffect="none");this.altKeyPressed=e.altKey,this.actions.hover(n,{clientOffset:(0,c.getEventClientOffset)(e)}),n.some(function(e){return t.monitor.canDropOnTarget(e)})?(e.preventDefault(),e.dataTransfer.dropEffect=this.getCurrentDropEffect()):this.isDraggingNativeItem()?(e.preventDefault(),e.dataTransfer.dropEffect="none"):this.checkIfCurrentDragSourceRectChanged()&&(e.preventDefault(),e.dataTransfer.dropEffect="move")}},{key:"handleTopDragLeaveCapture",value:function(e){this.isDraggingNativeItem()&&e.preventDefault(),this.enterLeaveCounter.leave(e.target)&&this.isDraggingNativeItem()&&this.endDragNativeItem()}},{key:"handleTopDropCapture",value:function(e){this.dropTargetIds=[],e.preventDefault(),this.isDraggingNativeItem()&&this.currentNativeSource.mutateItemByReadingDataTransfer(e.dataTransfer),this.enterLeaveCounter.reset()}},{key:"handleDrop",value:function(e,t){this.dropTargetIds.unshift(t)}},{key:"handleTopDrop",value:function(e){var t=this.dropTargetIds;this.dropTargetIds=[],this.actions.hover(t,{clientOffset:(0,c.getEventClientOffset)(e)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.endDragIfSourceWasRemovedFromDOM()}},{key:"handleSelectStart",value:function(e){var t=e.target;"function"==typeof t.dragDrop&&("INPUT"===t.tagName||"SELECT"===t.tagName||"TEXTAREA"===t.tagName||t.isContentEditable||(e.preventDefault(),t.dragDrop()))}},{key:"window",get:function(){return this.context&&this.context.window?this.context.window:"undefined"!=typeof window?window:void 0}}]),e}();t.default=d},function(e,t,n){var r=n(8),o=n(21),a=n(155),i=n(156),u=Object.prototype,c=u.hasOwnProperty,s=r(function(e,t){e=Object(e);var n=-1,r=t.length,s=r>2?t[2]:void 0;for(s&&a(t[0],t[1],s)&&(r=1);++n<r;)for(var l=t[n],f=i(l),d=-1,p=f.length;++d<p;){var h=f[d],g=e[h];(void 0===g||o(g,u[h])&&!c.call(e,h))&&(e[h]=l[h])}return e});e.exports=s},function(e,t,n){var r=n(21),o=n(27),a=n(54),i=n(7);e.exports=function(e,t,n){if(!i(n))return!1;var u=typeof t;return!!("number"==u?o(n)&&a(t,n.length):"string"==u&&t in n)&&r(n[t],e)}},function(e,t,n){var r=n(157),o=n(164),a=n(27);e.exports=function(e){return a(e)?r(e,!0):o(e)}},function(e,t,n){var r=n(158),o=n(45),a=n(4),i=n(159),u=n(54),c=n(161),s=Object.prototype.hasOwnProperty;e.exports=function(e,t){var n=a(e),l=!n&&o(e),f=!n&&!l&&i(e),d=!n&&!l&&!f&&c(e),p=n||l||f||d,h=p?r(e.length,String):[],g=h.length;for(var v in e)!t&&!s.call(e,v)||p&&("length"==v||f&&("offset"==v||"parent"==v)||d&&("buffer"==v||"byteLength"==v||"byteOffset"==v)||u(v,g))||h.push(v);return h}},function(e,t){e.exports=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}},function(e,t,n){(function(e){var r=n(5),o=n(160),a="object"==typeof t&&t&&!t.nodeType&&t,i=a&&"object"==typeof e&&e&&!e.nodeType&&e,u=i&&i.exports===a?r.Buffer:void 0,c=(u?u.isBuffer:void 0)||o;e.exports=c}).call(this,n(55)(e))},function(e,t){e.exports=function(){return!1}},function(e,t,n){var r=n(162),o=n(25),a=n(163),i=a&&a.isTypedArray,u=i?o(i):r;e.exports=u},function(e,t,n){var r=n(9),o=n(42),a=n(6),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,e.exports=function(e){return a(e)&&o(e.length)&&!!i[r(e)]}},function(e,t,n){(function(e){var r=n(34),o="object"==typeof t&&t&&!t.nodeType&&t,a=o&&"object"==typeof e&&e&&!e.nodeType&&e,i=a&&a.exports===o&&r.process,u=function(){try{return i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=u}).call(this,n(55)(e))},function(e,t,n){var r=n(7),o=n(165),a=n(166),i=Object.prototype.hasOwnProperty;e.exports=function(e){if(!r(e))return a(e);var t=o(e),n=[];for(var u in e)("constructor"!=u||!t&&i.call(e,u))&&n.push(u);return n}},function(e,t){var n=Object.prototype;e.exports=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||n)}},function(e,t){e.exports=function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=Object.prototype.hasOwnProperty,a=0;a<n.length;a+=1){if(!o.call(t,n[a])||e[n[a]]!==t[n[a]])return!1;var i=e[n[a]],u=t[n[a]];if(i!==u)return!1}return!0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=i(n(169)),a=i(n(37));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.entered=[]}return r(e,[{key:"enter",value:function(e){var t=this.entered.length;return this.entered=(0,o.default)(this.entered.filter(function(t){return document.documentElement.contains(t)&&(!t.contains||t.contains(e))}),[e]),0===t&&this.entered.length>0}},{key:"leave",value:function(e){var t=this.entered.length;return this.entered=(0,a.default)(this.entered.filter(function(e){return document.documentElement.contains(e)}),e),t>0&&0===this.entered.length}},{key:"reset",value:function(){this.entered=[]}}]),e}();t.default=u},function(e,t,n){var r=n(44),o=n(8),a=n(46),i=n(15),u=o(function(e){return a(r(e,1,i,!0))});e.exports=u},function(e,t,n){var r=n(39),o="Expected a function";function a(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(o);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=e.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(a.Cache||r),n}a.Cache=r,e.exports=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getNodeClientOffset=c,t.getEventClientOffset=function(e){return{x:e.clientX,y:e.clientY}},t.getDragPreviewOffset=function(e,t,n,r,a){var u=(D=t,"IMG"===D.nodeName&&((0,o.isFirefox)()||!document.documentElement.contains(D))),s=c(u?e:t),l={x:n.x-s.x,y:n.y-s.y},f=e.offsetWidth,d=e.offsetHeight,p=r.anchorX,h=r.anchorY,g=function(e,t,n,r){var a=e?t.width:n,i=e?t.height:r;(0,o.isSafari)()&&e&&(i/=window.devicePixelRatio,a/=window.devicePixelRatio);return{dragPreviewWidth:a,dragPreviewHeight:i}}(u,t,f,d),v=g.dragPreviewWidth,y=g.dragPreviewHeight,b=a.offsetX,m=a.offsetY,O=0===m||m;var D;return{x:0===b||b?b:new i.default([0,.5,1],[l.x,l.x/f*v,l.x+v-f]).interpolate(p),y:O?m:function(){var e=new i.default([0,.5,1],[l.y,l.y/d*y,l.y+y-d]).interpolate(h);(0,o.isSafari)()&&u&&(e+=(window.devicePixelRatio-1)*y);return e}()}};var r,o=n(56),a=n(172),i=(r=a)&&r.__esModule?r:{default:r};var u=1;function c(e){var t=e.nodeType===u?e:e.parentElement;if(!t)return null;var n=t.getBoundingClientRect(),r=n.top;return{x:n.left,y:r}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=t.length,o=[],a=0;a<r;a++)o.push(a);o.sort(function(e,n){return t[e]<t[n]?-1:1});for(var i=[],u=[],c=[],s=void 0,l=void 0,f=0;f<r-1;f++)s=t[f+1]-t[f],l=n[f+1]-n[f],u.push(s),i.push(l),c.push(l/s);for(var d=[c[0]],p=0;p<u.length-1;p++){var h=c[p],g=c[p+1];if(h*g<=0)d.push(0);else{s=u[p];var v=u[p+1],y=s+v;d.push(3*y/((y+v)/h+(y+s)/g))}}d.push(c[c.length-1]);for(var b=[],m=[],O=void 0,D=0;D<d.length-1;D++){O=c[D];var _=d[D],w=1/u[D],C=_+d[D+1]-O-O;b.push((O-_-C)*w),m.push(C*w*w)}this.xs=t,this.ys=n,this.c1s=d,this.c2s=b,this.c3s=m}return r(e,[{key:"interpolate",value:function(e){var t=this.xs,n=this.ys,r=this.c1s,o=this.c2s,a=this.c3s,i=t.length-1;if(e===t[i])return n[i];for(var u=0,c=a.length-1,s=void 0;u<=c;){var l=t[s=Math.floor(.5*(u+c))];if(l<e)u=s+1;else{if(!(l>e))return n[s];c=s-1}}var f=e-t[i=Math.max(0,c)],d=f*f;return n[i]+r[i]*f+o[i]*d+a[i]*f*d}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.createNativeDragSource=function(e){var t=c[e],n=t.exposeProperty,r=t.matchesTypes,a=t.getData;return function(){function e(){var t,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.item=(t={},(r={})[n]=r[n]||{},r[n].get=function(){return console.warn("Browser doesn't allow reading \""+n+'" until the drop event.'),null},function(e,t){for(var n in t){var r=t[n];r.configurable=r.enumerable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,n,r)}}(t,r),t)}return o(e,[{key:"mutateItemByReadingDataTransfer",value:function(e){delete this.item[n],this.item[n]=a(e,r)}},{key:"canDrag",value:function(){return!0}},{key:"beginDrag",value:function(){return this.item}},{key:"isDragging",value:function(e,t){return t===e.getSourceId()}},{key:"endDrag",value:function(){}}]),e}()},t.matchNativeItemType=function(e){var t=Array.prototype.slice.call(e.types||[]);return Object.keys(c).filter(function(e){var n=c[e].matchesTypes;return n.some(function(e){return t.indexOf(e)>-1})})[0]||null};var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(31));function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t,n){var r=t.reduce(function(t,n){return t||e.getData(n)},null);return null!=r?r:n}var c=(i(r={},a.FILE,{exposeProperty:"files",matchesTypes:["Files"],getData:function(e){return Array.prototype.slice.call(e.files)}}),i(r,a.URL,{exposeProperty:"urls",matchesTypes:["Url","text/uri-list"],getData:function(e,t){return u(e,t,"").split("\n")}}),i(r,a.TEXT,{exposeProperty:"text",matchesTypes:["Text","text/plain"],getData:function(e,t){return u(e,t,"")}}),r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){r||((r=new Image).src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==");return r};var r=void 0},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(0)),o=i(n(2)),a=i(n(176));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=e.layout,n=e.widgets,o=e.onRemove,i=e.editable,u=e.onAdd,c=e.frameComponent,s=e.rowClass,l=e.onMove,f=e.editableColumnClass,d=e.droppableColumnClass,p=e.addWidgetComponentText,h=e.addWidgetComponent,g=t.rows.map(function(e,g){return r.default.createElement(a.default,{key:g,rowClass:s,columns:e.columns,widgets:n,onRemove:o,layout:t,rowIndex:g,editable:i,onAdd:u,onMove:l,frameComponent:c,editableColumnClass:f,droppableColumnClass:d,addWidgetComponentText:p,addWidgetComponent:h})});return r.default.createElement("div",null,g)};u.propTypes={layout:o.default.object,widgets:o.default.object,editable:o.default.bool,onRemove:o.default.func,onAdd:o.default.func,frameComponent:o.default.func,rowClass:o.default.string,onMove:o.default.func,editableColumnClass:o.default.string,droppableColumnClass:o.default.string,addWidgetComponent:o.default.func,addWidgetComponentText:o.default.string},u.defaultProps={layout:{rows:[]}},t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(0)),o=u(n(2)),a=u(n(177)),i=u(n(180));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.rowClass,n=e.columns,o=e.widgets,u=e.onRemove,c=e.layout,s=e.rowIndex,l=e.editable,f=e.frameComponent,d=e.editableColumnClass,p=e.droppableColumnClass,h=e.addWidgetComponentText,g=e.addWidgetComponent,v=e.onAdd,y=e.onMove,b=n.map(function(e,t){return r.default.createElement(a.default,{key:t,className:e.className,onAdd:v,layout:c,rowIndex:s,columnIndex:t,editable:l,onMove:y,editableColumnClass:d,droppableColumnClass:p,addWidgetComponent:g,addWidgetComponentText:h},r.default.createElement(i.default,{key:t,widgets:e.widgets,containerClassName:e.containerClassName,widgetTypes:o,onRemove:u,layout:c,rowIndex:s,columnIndex:t,editable:l,frameComponent:f,onMove:y}))});return r.default.createElement("div",{className:t},b)}c.propTypes={rowClass:o.default.string,columns:o.default.array,widgets:o.default.object,layout:o.default.object,rowIndex:o.default.number,editable:o.default.bool,frameComponent:o.default.func,editableColumnClass:o.default.string,droppableColumnClass:o.default.string,addWidgetComponent:o.default.func,addWidgetComponentText:o.default.string,onAdd:o.default.func,onRemove:o.default.func,onMove:o.default.func},c.defaultProps={rowClass:"row"},t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=d(a),u=d(n(2)),c=n(18),s=n(57),l=d(n(178)),f=n(32);function d(e){return e&&e.__esModule?e:{default:e}}var p={drop:function(e,t){var n=e.layout,r=e.rowIndex,o=e.columnIndex,a=e.onMove,i=t.getItem();i.columnIndex===o&&i.rowIndex===r||a((0,f.moveWidget)(n,{rowIndex:i.rowIndex,columnIndex:i.columnIndex,widgetIndex:i.widgetIndex},{rowIndex:r,columnIndex:o},i.widgetName))}},h=(0,c.DropTarget)(s.WIDGET,p,function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver(),canDrop:t.canDrop()}})(r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.layout,r=e.rowIndex,o=e.columnIndex,u=e.editable,c=e.children,s=e.connectDropTarget,f=e.onAdd,d=e.isOver,p=e.canDrop,h=e.editableColumnClass,g=e.droppableColumnClass,v=e.addWidgetComponentText,y=e.addWidgetComponent,b=t;b=u?t+" "+h:b,b=d&&p?b+" "+g:b;var m=null;return m=y?(0,a.createElement)(y,{text:v,onClick:function(){f(n,r,o)}}):i.default.createElement(l.default,{text:v,onClick:function(){f(n,r,o)}}),s(i.default.createElement("div",{className:b},u&&m,c))}}]),t}())||r;h.propTypes={children:u.default.node,className:u.default.string,onAdd:u.default.func,layout:u.default.object,rowIndex:u.default.number,columnIndex:u.default.number,editable:u.default.bool,isOver:u.default.bool,canDrop:u.default.bool,editableColumnClass:u.default.string,droppableColumnClass:u.default.string,addWidgetComponentText:u.default.string,connectDropTarget:u.default.func,addWidgetComponent:u.default.func},h.defaultProps={editableColumnClass:"editable-column",droppableColumnClass:"droppable-column"},t.default=h},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(0)),o=a(n(2));function a(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t=e.text,n=e.onClick;return r.default.createElement("div",{className:"add-widget-button",onClick:n},r.default.createElement("a",{className:"add-widget-link"},t))};i.propTypes={onClick:o.default.func,text:o.default.string},i.defaultProps={text:"Add Widget"},t.default=i},function(e,t,n){var r=n(1),o=Object.prototype.hasOwnProperty,a=Array.prototype.splice,i=Object.prototype.toString,u=function(e){return i.call(e).slice(8,-1)},c=Object.assign||function(e,t){return s(t).forEach(function(n){o.call(t,n)&&(e[n]=t[n])}),e},s="function"==typeof Object.getOwnPropertySymbols?function(e){return Object.keys(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.keys(e)};function l(e){if(Array.isArray(e))return c(e.constructor(e.length),e);if("Map"===u(e))return new Map(e);if("Set"===u(e))return new Set(e);if(e&&"object"==typeof e){var t=e.constructor&&e.constructor.prototype;return c(Object.create(t||null),e)}return e}function f(){var e=c({},d);return t.extend=function(t,n){e[t]=n},t.isEquals=function(e,t){return e===t},t;function t(n,a){if("function"==typeof a)return a(n);Array.isArray(n)&&Array.isArray(a)||r(!Array.isArray(a),"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."),r("object"==typeof a&&null!==a,"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: %s.",Object.keys(e).join(", "));var i=n;return s(a).forEach(function(r){if(o.call(e,r)){var u=n===i;i=e[r](a[r],i,a,n),u&&t.isEquals(i,n)&&(i=n)}else{var c=t(n[r],a[r]);t.isEquals(c,i[r])&&(void 0!==c||o.call(n,r))||(i===n&&(i=l(n)),i[r]=c)}}),i}}var d={$push:function(e,t,n){return h(t,n,"$push"),e.length?t.concat(e):t},$unshift:function(e,t,n){return h(t,n,"$unshift"),e.length?e.concat(t):t},$splice:function(e,t,n,o){return function(e,t){r(Array.isArray(e),"Expected $splice target to be an array; got %s",e),v(t.$splice)}(t,n),e.forEach(function(e){v(e),t===o&&e.length&&(t=l(o)),a.apply(t,e)}),t},$set:function(e,t,n){return function(e){r(1===Object.keys(e).length,"Cannot have more than one key in an object with $set")}(n),e},$toggle:function(e,t){g(e,"$toggle");var n=e.length?l(t):t;return e.forEach(function(e){n[e]=!t[e]}),n},$unset:function(e,t,n,r){return g(e,"$unset"),e.forEach(function(e){Object.hasOwnProperty.call(t,e)&&(t===r&&(t=l(r)),delete t[e])}),t},$add:function(e,t,n,r){return y(t,"$add"),g(e,"$add"),"Map"===u(t)?e.forEach(function(e){var n=e[0],o=e[1];t===r&&t.get(n)!==o&&(t=l(r)),t.set(n,o)}):e.forEach(function(e){t!==r||t.has(e)||(t=l(r)),t.add(e)}),t},$remove:function(e,t,n,r){return y(t,"$remove"),g(e,"$remove"),e.forEach(function(e){t===r&&t.has(e)&&(t=l(r)),t.delete(e)}),t},$merge:function(e,t,n,o){var a,i;return a=t,r((i=e)&&"object"==typeof i,"update(): $merge expects a spec of type 'object'; got %s",i),r(a&&"object"==typeof a,"update(): $merge expects a target of type 'object'; got %s",a),s(e).forEach(function(n){e[n]!==t[n]&&(t===o&&(t=l(o)),t[n]=e[n])}),t},$apply:function(e,t){var n;return r("function"==typeof(n=e),"update(): expected spec of $apply to be a function; got %s.",n),e(t)}},p=f();function h(e,t,n){r(Array.isArray(e),"update(): expected target of %s to be an array; got %s.",n,e),g(t[n],n)}function g(e,t){r(Array.isArray(e),"update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?",t,e)}function v(e){r(Array.isArray(e),"update(): expected spec of $splice to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?",e)}function y(e,t){var n=u(e);r("Map"===n||"Set"===n,"update(): %s expects a target of type Set or Map; got %s",t,n)}e.exports=p,e.exports.default=p,e.exports.newContext=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=u(r),a=u(n(2)),i=u(n(181));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){var t=e.widgets,n=e.widgetTypes,a=e.onRemove,u=e.layout,c=e.columnIndex,s=e.rowIndex,l=e.editable,f=e.frameComponent,d=e.onMove,p=e.containerClassName,h=t.map(function(e,t){return o.default.createElement(i.default,{key:t,widgetName:e.key,title:n[e.key].title,onRemove:a,layout:u,columnIndex:c,rowIndex:s,widgetIndex:t,editable:l,frameComponent:f,frameSettings:n[e.key].frameSettings,onMove:d},(0,r.createElement)(n[e.key].type,n[e.key].props))});return o.default.createElement("div",{className:p},h)};c.propTypes={containerClassName:a.default.string,widgets:a.default.array,widgetTypes:a.default.object,onRemove:a.default.func,layout:a.default.object,columnIndex:a.default.number,rowIndex:a.default.number,editable:a.default.bool,frameComponent:a.default.func,onMove:a.default.func},t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=p(a),u=p(n(2)),c=n(182),s=n(18),l=n(57),f=n(32),d=p(n(183));function p(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var g={hover:function(e,t,n){var r=t.getItem().widgetIndex,o=e.widgetIndex;if(r!==o){var a=(0,c.findDOMNode)(n).getBoundingClientRect(),i=(a.bottom-a.top)/2,u=t.getClientOffset().y-a.top;if(!(r<o&&u<i||r>o&&u>i)){var s=e.layout,l=e.columnIndex,d=e.rowIndex;if(t.getItem().columnIndex===l){var p=(0,f.sortWidget)(s,{rowIndex:d,columnIndex:l,widgetIndex:r},{rowIndex:d,columnIndex:l,widgetIndex:o},t.getItem().widgetName);e.onMove(p),t.getItem().widgetIndex=o}}}}},v=(0,s.DropTarget)(l.WIDGET,g,function(e){return{connectDropTarget:e.dropTarget()}})(r=(0,s.DragSource)(l.WIDGET,{beginDrag:function(e){return{widgetName:e.widgetName,rowIndex:e.rowIndex,columnIndex:e.columnIndex,widgetIndex:e.widgetIndex}}},function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}})(r=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=h(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.remove=function(){var e=r.props,t=e.layout,n=e.rowIndex,o=e.columnIndex,a=e.widgetIndex,i=(0,f.removeWidget)(t,n,o,a);r.props.onRemove(i)},h(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.frameComponent,n=e.children,r=e.editable,o=e.title,u=e.frameSettings,c=e.connectDragSource,s=e.connectDropTarget,l=e.isDragging,f=null;f=t?(0,a.createElement)(t,{children:n,editable:r,title:o,settings:u,onRemove:this.remove}):i.default.createElement(d.default,{title:o,editable:r,children:n,onRemove:this.remove});var p=l?0:1,h=i.default.createElement("div",{style:{opacity:p}},f);return r?c(s(h)):h}}]),t}())||r)||r;v.propTypes={children:u.default.element,layout:u.default.object,columnIndex:u.default.number,rowIndex:u.default.number,widgetIndex:u.default.number,editable:u.default.bool,frameComponent:u.default.func,frameSettings:u.default.object,widgetName:u.default.string,title:u.default.string,isDragging:u.default.bool,connectDragSource:u.default.func,connectDropTarget:u.default.func,onRemove:u.default.func},v.defaultProps={frameSettings:{}},t.default=v},function(e,n){e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(0)),o=a(n(2));function a(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t=e.children,n=e.onRemove,o=e.editable,a=e.title;return r.default.createElement("div",{className:"defaultWidgetFrame"},r.default.createElement("div",{className:"defaultWidgetFrameHeader"},r.default.createElement("span",{className:"title"},a),o&&r.default.createElement("a",{className:"remove",onClick:function(){return n()}},"Remove")),t)};i.propTypes={editable:o.default.bool,children:o.default.node,onRemove:o.default.func,title:o.default.string},t.default=i}])});
//# sourceMappingURL=lib.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),

/***/ 59:
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

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(20);
var DOMFactories = __webpack_require__(260);
var PropTypes = __webpack_require__(19);
var ExecutionEnvironment = __webpack_require__(599);
var ModalPortal = React.createFactory(__webpack_require__(594));
var ariaAppHider = __webpack_require__(595);
var refCount = __webpack_require__(597);
var elementClass = __webpack_require__(389);
var renderSubtreeIntoContainer = __webpack_require__(20).unstable_renderSubtreeIntoContainer;
var Assign = __webpack_require__(59);
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

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(1);
var DOMFactories = __webpack_require__(260);
var focusManager = __webpack_require__(596);
var scopeTab = __webpack_require__(598);
var Assign = __webpack_require__(59);
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

/***/ 595:
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

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

var findTabbable = __webpack_require__(287);
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

/***/ 597:
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

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

var findTabbable = __webpack_require__(287);

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

/***/ 599:
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

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(386);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(40)(content, {});
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

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(388);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(40)(content, {});
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

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _BaseWidget = __webpack_require__(294);

var _BaseWidget2 = _interopRequireDefault(_BaseWidget);

var _Dashboard = __webpack_require__(295);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ })

},[628]);