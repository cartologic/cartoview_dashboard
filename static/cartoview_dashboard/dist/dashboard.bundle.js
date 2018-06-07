webpackJsonp([2],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(3);

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

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var React = __webpack_require__(3);
var factory = __webpack_require__(221);

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

/***/ 244:
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
    module.exports = f(__webpack_require__(3));
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

/***/ 267:
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

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _FieldSet2 = __webpack_require__(10);

var _FieldSet3 = _interopRequireDefault(_FieldSet2);

var _ConfigManager = __webpack_require__(39);

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

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

__webpack_require__(583);

var _reactDazzle = __webpack_require__(492);

var _reactDazzle2 = _interopRequireDefault(_reactDazzle);

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _AddWidgetDialog = __webpack_require__(290);

var _AddWidgetDialog2 = _interopRequireDefault(_AddWidgetDialog);

var _ConfigManager = __webpack_require__(39);

var _ConfigManager2 = _interopRequireDefault(_ConfigManager);

var _Container = __webpack_require__(292);

var _Container2 = _interopRequireDefault(_Container);

var _CustomFrame = __webpack_require__(293);

var _CustomFrame2 = _interopRequireDefault(_CustomFrame);

var _Header = __webpack_require__(295);

var _Header2 = _interopRequireDefault(_Header);

var _DashboardToolbar = __webpack_require__(294);

var _DashboardToolbar2 = _interopRequireDefault(_DashboardToolbar);

var _WidgetConfigDialog = __webpack_require__(297);

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
        }), _react2.default.createElement(_Header2.default, { editable: editable, title: title, abstract: abstract, ref: 'header' }), _jsx(_DashboardToolbar2.default, {
            isNew: isNew,
            editable: editable,
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
            layout: layout
        });
    };

    this.onAdd = function (layout, rowIndex, columnIndex) {
        // Open the AddWidget dialog by seting the 'addWidgetDialogOpen' to true.
        // Also preserve the details such as the layout, rowIndex, and columnIndex  in 'addWidgetOptions'.
        //  This will be used later when user picks a widget to add.
        _this2.setState({
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
        _this2.setState({ widgets: widgets, widgetConfigDialogOpen: false });
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
            props: { id: id, ref: ref, config: {} }
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
            layout: (0, _reactDazzle.addWidget)(layout, rowIndex, columnIndex, id)
        });
        // Close the dialogbox
        _this2.onRequestClose();
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

/***/ 28:
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
  module.exports = __webpack_require__(64)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactModal = __webpack_require__(96);

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

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.InfoModal = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _reactModal = __webpack_require__(96);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _propTypes = __webpack_require__(28);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(3);

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

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(3);

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

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _ConfigManager = __webpack_require__(39);

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
            }, void 0, title, _jsx('div', {
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

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

__webpack_require__(585);

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _ConfigManager = __webpack_require__(39);

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
            var saving = _this.state.saving;

            if (!saving) {
                _this.setState({ saving: true });
                configManager.save();
            }
        };

        _this.state = {
            saving: false
        };
        return _this;
    }

    DashboardToolbar.prototype.render = function render() {
        var _this2 = this;

        var saving = this.state.saving;
        var _props = this.props,
            editable = _props.editable,
            isOwner = _props.isOwner,
            isNew = _props.isNew;

        if (!editable && !isOwner) return null;
        var editBtn = _jsx('a', {
            className: 'btn btn-danger btn-lg btn-edit-db',
            href: '../edit/',
            title: 'Edit Dashboard'
        }, void 0, _jsx('i', {
            className: 'glyphicon glyphicon-pencil'
        }));
        var saveBtn = !saving ? _jsx('button', {
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
        var viewBtn = _jsx('a', {
            className: 'btn btn-warning btn-lg btn-tb btn-view-db',
            href: '../view/',
            title: 'View Dashboard'
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

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _FieldSet = __webpack_require__(10);

var _FieldSet2 = _interopRequireDefault(_FieldSet);

var _CommonComponents = __webpack_require__(291);

var _propTypes = __webpack_require__(28);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(3);

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
            abstract = _props.abstract;

        if (editable) {
            var data = { title: title, abstract: abstract };
            var schema = {
                title: {
                    type: "text",
                    props: {
                        placeholder: "Dashboard Title"
                    }
                },
                abstract: {
                    type: "textarea",
                    props: {
                        placeholder: "About this dashboard..."
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
        }, void 0, "?")), _jsx(_CommonComponents.InfoModal, {
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

/***/ 296:
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

var _reactModal = __webpack_require__(96);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _Constants = __webpack_require__(99);

var _Constants2 = _interopRequireDefault(_Constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _Constants = __webpack_require__(99);

var _Modal = __webpack_require__(296);

var _Modal2 = _interopRequireDefault(_Modal);

var _ConfigManager = __webpack_require__(39);

var _ConfigManager2 = _interopRequireDefault(_ConfigManager);

var _FieldSet = __webpack_require__(10);

var _FieldSet2 = _interopRequireDefault(_FieldSet);

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

/***/ 32:
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

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)();
// imports


// module
exports.push([module.i, ".defaultWidgetFrame {\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\tmargin-bottom: 10px;\r\n\tpadding: 10px 17px;\r\n\tdisplay: inline-block;\r\n\tbackground: #fff;\r\n\tborder: 1px solid #E6E9ED;\r\n}\r\n\r\n.defaultWidgetFrameHeader {\r\n\tborder-bottom: 2px solid #E6E9ED;\r\n\tpadding: 1px 5px 6px;\r\n\tmargin-bottom: 10px;\r\n\theight: 35px;\r\n}\r\n\r\n.defaultWidgetFrameHeader .title {\r\n\tfont-size: 18px;\r\n  float: left;\r\n  display: block;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\n.defaultWidgetFrameHeader .remove {\r\n\tfloat: right;\r\n\tfont-size: 11px;\r\n\tcursor: pointer;\r\n\ttext-decoration: none;\r\n\tmargin-top: 5px;\r\n}\r\n\r\n.add-widget-button {\r\n\tpadding: 10px;\r\n\ttext-align: center;\r\n\tborder: 1px dotted #DCDCDC;\r\n\tmargin-bottom: 10px;\r\n\tcursor: pointer;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.add-widget-link {\r\n\ttext-decoration: none;\r\n}\r\n\r\n.editable-column {\r\n\tborder: 1px dotted #8C8080;\r\n\tpadding: 10px;\r\n}\r\n\r\n.droppable-column {\r\n\tbackground-color: #E7E7E7;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)();
// imports


// module
exports.push([module.i, ".loader {\r\n    border: 16px solid #f3f3f3;\r\n    /* Light grey */\r\n    border-top: 16px solid #3498db;\r\n    /* Blue */\r\n    border-radius: 50%;\r\n    width: 120px;\r\n    height: 120px;\r\n    animation: spin 2s linear infinite;\r\n}\r\n\r\n@keyframes spin {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n.dashboard-header {\r\n    display: flex;\r\n    flex: 1;\r\n    align-items: center;\r\n    margin-top:10px;\r\n    margin-bottom: 10px;\r\n}\r\n.flex-element{\r\n    display: flex\r\n}\r\n.title-wrap{\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n}\r\n.fill-empty{\r\n    flex-grow: 1;\r\n    flex: 1;\r\n}\r\n.header-title{\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n}\r\n.switcher-label{\r\n    padding-left: 10px;\r\n}", ""]);

// exports


/***/ }),

/***/ 370:
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

/***/ 371:
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

/***/ 38:
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

/***/ 39:
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
                    layout: layout }) };
            saveDashboard(config);
        };

        this.dashboard = dashboard;
    }

    // TODO: remove, it is deprecated , dashboard is not single map.
    ConfigManager.prototype.getMapWidget = function getMapWidget() {
        var _this2 = this;

        var widgets = this.dashboard.state.widgets;

        console.log('--------- widgets---------');
        console.log(widgets);
        var mapWidget = null;
        Object.keys(widgets).forEach(function (id) {
            if (widgets[id].type.name == "MapWidget") {
                mapWidget = _this2.dashboard.widgets[id];
                return false;
            }
        });
        return mapWidget;
    };

    ConfigManager.prototype.getWidget = function getWidget(widgetId) {
        var widgets = this.dashboard.state.widgets;

        console.log(' map widget id ------', widgetId);
        console.log(widgets[widgetId]);
        return widgets[widgetId];
    };

    return ConfigManager;
}();

exports.default = ConfigManager;

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?module.exports=t(__webpack_require__(3),__webpack_require__(20)):"function"==typeof define&&define.amd?define("dazzle",["react","react-dom"],t):"object"==typeof exports?exports.dazzle=t(require("react"),require("react-dom")):e.dazzle=t(e.react,e["react-dom"])}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){e.exports=n(70)},function(e,t,n){"use strict";var r=function(e,t,n,r,o,a,i,u){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,o,a,i,u],f=0;c=new Error(t.replace(/%s/g,function(){return s[f++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}};e.exports=r},function(t,n){t.exports=e},function(e,t,n){e.exports=n(162)()},function(e,t){var n=Array.isArray;e.exports=n},function(e,t,n){function r(e){if(!i(e)||o(e)!=u)return!1;var t=a(e);if(null===t)return!0;var n=l.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&f.call(n)==d}var o=n(13),a=n(117),i=n(9),u="[object Object]",c=Function.prototype,s=Object.prototype,f=c.toString,l=s.hasOwnProperty,d=f.call(Object);e.exports=r},function(e,t,n){function r(e,t){return i(a(e,t,o),e+"")}var o=n(49),a=n(144),i=n(147);e.exports=r},function(e,t,n){var r=n(46),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{publishSource:!0,clientOffset:null},n=t.publishSource,r=t.clientOffset,o=t.getSourceClientOffset;(0,l.default)((0,p.default)(e),"Expected sourceIds to be an array.");var a=this.getMonitor(),i=this.getRegistry();(0,l.default)(!a.isDragging(),"Cannot call beginDrag while dragging.");for(var u=0;u<e.length;u++)(0,l.default)(i.getSource(e[u]),"Expected sourceIds to be registered.");for(var c=null,s=e.length-1;s>=0;s--)if(a.canDragSource(e[s])){c=e[s];break}if(null!==c){var f=null;r&&((0,l.default)("function"==typeof o,"When clientOffset is provided, getSourceClientOffset must be a function."),f=o(c));var d=i.getSource(c),h=d.beginDrag(a,c);(0,l.default)((0,g.default)(h),"Item must be an object."),i.pinSource(c);var v=i.getSourceType(c);return{type:b,itemType:v,item:h,sourceId:c,clientOffset:r,sourceClientOffset:f,isSourcePublic:n}}}function a(){var e=this.getMonitor();if(e.isDragging())return{type:m}}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.clientOffset,r=void 0===n?null:n;(0,l.default)((0,p.default)(e),"Expected targetIds to be an array.");var o=e.slice(0),a=this.getMonitor(),i=this.getRegistry();(0,l.default)(a.isDragging(),"Cannot call hover while not dragging."),(0,l.default)(!a.didDrop(),"Cannot call hover after drop.");for(var u=0;u<o.length;u++){var c=o[u];(0,l.default)(o.lastIndexOf(c)===u,"Expected targetIds to be unique in the passed array.");var s=i.getTarget(c);(0,l.default)(s,"Expected targetIds to be registered.")}for(var f=a.getItemType(),d=o.length-1;d>=0;d--){var h=o[d],g=i.getTargetType(h);(0,y.default)(g,f)||o.splice(d,1)}for(var v=0;v<o.length;v++){var b=o[v],m=i.getTarget(b);m.hover(a,b)}return{type:O,targetIds:o,clientOffset:r}}function u(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this.getMonitor(),r=this.getRegistry();(0,l.default)(n.isDragging(),"Cannot call drop while not dragging."),(0,l.default)(!n.didDrop(),"Cannot call drop twice during one drag operation.");var o=n.getTargetIds().filter(n.canDropOnTarget,n);o.reverse(),o.forEach(function(o,a){var i=r.getTarget(o),u=i.drop(n,o);(0,l.default)("undefined"==typeof u||(0,g.default)(u),"Drop result must either be an object or undefined."),"undefined"==typeof u&&(u=0===a?{}:n.getDropResult()),e.store.dispatch({type:D,dropResult:s({},t,u)})})}function c(){var e=this.getMonitor(),t=this.getRegistry();(0,l.default)(e.isDragging(),"Cannot call endDrag while not dragging.");var n=e.getSourceId(),r=t.getSource(n,!0);return r.endDrag(e,n),t.unpinSource(),{type:_}}Object.defineProperty(t,"__esModule",{value:!0}),t.END_DRAG=t.DROP=t.HOVER=t.PUBLISH_DRAG_SOURCE=t.BEGIN_DRAG=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.beginDrag=o,t.publishDragSource=a,t.hover=i,t.drop=u,t.endDrag=c;var f=n(1),l=r(f),d=n(4),p=r(d),h=n(8),g=r(h),v=n(38),y=r(v),b=t.BEGIN_DRAG="dnd-core/BEGIN_DRAG",m=t.PUBLISH_DRAG_SOURCE="dnd-core/PUBLISH_DRAG_SOURCE",O=t.HOVER="dnd-core/HOVER",D=t.DROP="dnd-core/DROP",_=t.END_DRAG="dnd-core/END_DRAG"},function(e,t){"use strict";function n(e){return{type:i,sourceId:e}}function r(e){return{type:u,targetId:e}}function o(e){return{type:c,sourceId:e}}function a(e){return{type:s,targetId:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.addSource=n,t.addTarget=r,t.removeSource=o,t.removeTarget=a;var i=t.ADD_SOURCE="dnd-core/ADD_SOURCE",u=t.ADD_TARGET="dnd-core/ADD_TARGET",c=t.REMOVE_SOURCE="dnd-core/REMOVE_SOURCE",s=t.REMOVE_TARGET="dnd-core/REMOVE_TARGET"},function(e,t,n){function r(e,t){for(var n=e.length;n--;)if(o(e[n][0],t))return n;return-1}var o=n(17);e.exports=r},function(e,t,n){function r(e){return null==e?void 0===e?c:u:s&&s in Object(e)?a(e):i(e)}var o=n(24),a=n(118),i=n(142),u="[object Null]",c="[object Undefined]",s=o?o.toStringTag:void 0;e.exports=r},function(e,t,n){function r(e,t){var n=e.__data__;return o(t)?n["string"==typeof t?"string":"hash"]:n.map}var o=n(127);e.exports=r},function(e,t,n){function r(e,t){var n=a(e,t);return o(n)?n:void 0}var o=n(105),a=n(119);e.exports=r},function(e,t,n){var r=n(15),o=r(Object,"create");e.exports=o},function(e,t){function n(e,t){return e===t||e!==e&&t!==t}e.exports=n},function(e,t,n){function r(e){return a(e)&&o(e)}var o=n(30),a=n(9);e.exports=r},function(e,t,n){"use strict";function r(e,t){}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t,n,o){return(0,s.default)(e,{rows:r({},t,{columns:r({},n,{widgets:{$push:[{key:o}]}})})})}function a(e,t,n,o){return(0,s.default)(e,{rows:r({},t,{columns:r({},n,{widgets:{$splice:[[o,1]]}})})})}function i(e,t,n,r){var i=a(e,t.rowIndex,t.columnIndex,t.widgetIndex),u=o(i,n.rowIndex,n.columnIndex,r);return u}function u(e,t,n,o){return(0,s.default)(e,{rows:r({},t.rowIndex,{columns:r({},t.columnIndex,{widgets:{$splice:[[t.widgetIndex,1],[n.widgetIndex,0,{key:o}]]}})})})}Object.defineProperty(t,"__esModule",{value:!0}),t.addWidget=o,t.removeWidget=a,t.moveWidget=i,t.sortWidget=u;var c=n(91),s=e(c)}).call(this)}finally{}},function(e,t){"use strict";function n(e){return Boolean(e&&"function"==typeof e.dispose)}t.__esModule=!0,t.default=n,e.exports=t.default},function(e,t){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,arguments:!0,arity:!0},o="function"==typeof Object.getOwnPropertySymbols;e.exports=function(e,t,a){if("string"!=typeof t){var i=Object.getOwnPropertyNames(t);o&&(i=i.concat(Object.getOwnPropertySymbols(t)));for(var u=0;u<i.length;++u)if(!(n[i[u]]||r[i[u]]||a&&a[i[u]]))try{e[i[u]]=t[i[u]]}catch(e){}}return e}},function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new o;++t<n;)this.add(e[t])}var o=n(39),a=n(145),i=n(146);r.prototype.add=r.prototype.push=a,r.prototype.has=i,e.exports=r},function(e,t,n){var r=n(7),o=r.Symbol;e.exports=o},function(e,t,n){function r(e,t){var n=null==e?0:e.length;return!!n&&o(e,t,0)>-1}var o=n(101);e.exports=r},function(e,t){function n(e,t,n){for(var r=-1,o=null==e?0:e.length;++r<o;)if(n(t,e[r]))return!0;return!1}e.exports=n},function(e,t){function n(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}e.exports=n},function(e,t){function n(e){return function(t){return e(t)}}e.exports=n},function(e,t){function n(e,t){return e.has(t)}e.exports=n},function(e,t,n){function r(e){return null!=e&&a(e.length)&&!o(e)}var o=n(51),a=n(52);e.exports=r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.FILE="__NATIVE_FILE__",t.URL="__NATIVE_URL__",t.TEXT="__NATIVE_TEXT__"},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(56);Object.defineProperty(t,"DragDropContext",{enumerable:!0,get:function(){return r(o).default}});var a=n(172);Object.defineProperty(t,"DragDropContextProvider",{enumerable:!0,get:function(){return r(a).default}});var i=n(173);Object.defineProperty(t,"DragLayer",{enumerable:!0,get:function(){return r(i).default}});var u=n(174);Object.defineProperty(t,"DragSource",{enumerable:!0,get:function(){return r(u).default}});var c=n(175);Object.defineProperty(t,"DropTarget",{enumerable:!0,get:function(){return r(c).default}})},function(e,t){"use strict";function n(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=Object.prototype.hasOwnProperty,a=0;a<n.length;a+=1){if(!o.call(t,n[a])||e[n[a]]!==t[n[a]])return!1;var i=e[n[a]],u=t[n[a]];if(i!==u)return!1}return!0}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.WIDGET="WIDGET"}).call(this)}finally{}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,arguments[1]),t=arguments[2];switch(e.type){case f.HOVER:break;case l.ADD_SOURCE:case l.ADD_TARGET:case l.REMOVE_TARGET:case l.REMOVE_SOURCE:return d;case f.BEGIN_DRAG:case f.PUBLISH_DRAG_SOURCE:case f.END_DRAG:case f.DROP:default:return p}var n=e.targetIds,r=t.targetIds,o=(0,u.default)(n,r),a=!1;if(0===o.length){for(var i=0;i<n.length;i++)if(n[i]!==r[i]){a=!0;break}}else a=!0;if(!a)return d;var c=r[r.length-1],s=n[n.length-1];return c!==s&&(c&&o.push(c),s&&o.push(s)),o}function a(e,t){return e!==d&&(e===p||"undefined"==typeof t||(0,s.default)(t,e).length>0)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o,t.areDirty=a;var i=n(161),u=r(i),c=n(154),s=r(c),f=n(10),l=n(11),d=[],p=[]},function(e,t,n){"use strict";function r(e,t){return e===t||e&&t&&e.x===t.x&&e.y===t.y}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments[1];switch(t.type){case c.BEGIN_DRAG:return{initialSourceClientOffset:t.sourceClientOffset,initialClientOffset:t.clientOffset,clientOffset:t.clientOffset};case c.HOVER:return r(e.clientOffset,t.clientOffset)?e:u({},e,{clientOffset:t.clientOffset});case c.END_DRAG:case c.DROP:return s;default:return e}}function a(e){var t=e.clientOffset,n=e.initialClientOffset,r=e.initialSourceClientOffset;return t&&n&&r?{x:t.x+r.x-n.x,y:t.y+r.y-n.y}:null}function i(e){var t=e.clientOffset,n=e.initialClientOffset;return t&&n?{x:t.x-n.x,y:t.y-n.y}:null}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=o,t.getSourceClientOffset=a,t.getDifferenceFromInitialOffset=i;var c=n(10),s={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return(0,i.default)(e)?e.some(function(e){return e===t}):e===t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var a=n(4),i=r(a)},function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var o=n(135),a=n(136),i=n(137),u=n(138),c=n(139);r.prototype.clear=o,r.prototype.delete=a,r.prototype.get=i,r.prototype.has=u,r.prototype.set=c,e.exports=r},function(e,t){function n(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}e.exports=n},function(e,t,n){function r(e,t,n){"__proto__"==t&&o?o(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var o=n(45);e.exports=r},function(e,t,n){function r(e,t,n,r){var l=-1,d=a,p=!0,h=e.length,g=[],v=t.length;if(!h)return g;n&&(t=u(t,c(n))),r?(d=i,p=!1):t.length>=f&&(d=s,p=!1,t=new o(t));e:for(;++l<h;){var y=e[l],b=null==n?y:n(y);if(y=r||0!==y?y:0,p&&b===b){for(var m=v;m--;)if(t[m]===b)continue e;g.push(y)}else d(t,b,r)||g.push(y)}return g}var o=n(23),a=n(25),i=n(26),u=n(27),c=n(28),s=n(29),f=200;e.exports=r},function(e,t,n){function r(e,t,n,i,u){var c=-1,s=e.length;for(n||(n=a),u||(u=[]);++c<s;){var f=e[c];t>0&&n(f)?t>1?r(f,t-1,n,i,u):o(u,f):i||(u[u.length]=f)}return u}var o=n(98),a=n(125);e.exports=r},function(e,t,n){function r(e,t,n){var r=-1,l=a,d=e.length,p=!0,h=[],g=h;if(n)p=!1,l=i;else if(d>=f){var v=t?null:c(e);if(v)return s(v);p=!1,l=u,g=new o}else g=t?[]:h;e:for(;++r<d;){var y=e[r],b=t?t(y):y;if(y=n||0!==y?y:0,p&&b===b){for(var m=g.length;m--;)if(g[m]===b)continue e;t&&g.push(b),h.push(y)}else l(g,b,n)||(g!==h&&g.push(b),h.push(y))}return h}var o=n(23),a=n(25),i=n(26),u=n(29),c=n(115),s=n(48),f=200;e.exports=r},function(e,t,n){var r=n(15),o=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=o},function(e,t){var n="object"==typeof global&&global&&global.Object===Object&&global;e.exports=n},function(e,t){function n(e,t){return t=null==t?r:t,!!t&&("number"==typeof e||o.test(e))&&e>-1&&e%1==0&&e<t}var r=9007199254740991,o=/^(?:0|[1-9]\d*)$/;e.exports=n},function(e,t){function n(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}e.exports=n},function(e,t){function n(e){return e}e.exports=n},function(e,t,n){var r=n(103),o=n(9),a=Object.prototype,i=a.hasOwnProperty,u=a.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(e){return o(e)&&i.call(e,"callee")&&!u.call(e,"callee")};e.exports=c},function(e,t,n){function r(e){if(!a(e))return!1;var t=o(e);return t==u||t==c||t==i||t==s}var o=n(13),a=n(8),i="[object AsyncFunction]",u="[object Function]",c="[object GeneratorFunction]",s="[object Proxy]";e.exports=r},function(e,t){function n(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}var r=9007199254740991;e.exports=n},function(e,t){function n(){}e.exports=n},function(e,t,n){var r=n(42),o=n(6),a=n(18),i=o(function(e,t){return a(e)?r(e,t):[]});e.exports=i},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.isSafari=t.isFirefox=void 0;var o=n(158),a=r(o);t.isFirefox=(0,a.default)(function(){return/firefox/i.test(navigator.userAgent)}),t.isSafari=(0,a.default)(function(){return Boolean(window.safari)})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){D.default.apply(void 0,["DragDropContext","backend"].concat(Array.prototype.slice.call(arguments)));var t=x(e),n=w(t);return function(e){var t,r,u=e.displayName||e.name||"Component",f=(r=t=function(t){function r(){return o(this,r),a(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return i(r,t),s(r,[{key:"getDecoratedComponentInstance",value:function(){return(0,y.default)(this.child,"In order to access an instance of the decorated component it can not be a stateless component."),this.child}},{key:"getManager",value:function(){return n.dragDropManager}},{key:"getChildContext",value:function(){return n}},{key:"render",value:function(){var t=this;return d.default.createElement(e,c({},this.props,{ref:function(e){return t.child=e}}))}}]),r}(l.Component),t.DecoratedComponent=e,t.displayName="DragDropContext("+u+")",t.childContextTypes=_,r);return(0,m.default)(f,e)}}Object.defineProperty(t,"__esModule",{value:!0}),t.unpackBackendForEs5Users=t.createChildContext=t.CHILD_CONTEXT_TYPES=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=u;var l=n(2),d=r(l),p=n(3),h=r(p),g=n(83),v=n(1),y=r(v),b=n(22),m=r(b),O=n(19),D=r(O),_=t.CHILD_CONTEXT_TYPES={dragDropManager:h.default.object.isRequired},w=t.createChildContext=function(e,t){return{dragDropManager:new g.DragDropManager(e,t)}},x=t.unpackBackendForEs5Users=function(e){var t=e;return"object"===("undefined"==typeof t?"undefined":f(t))&&"function"==typeof t.default&&(t=t.default),(0,y.default)("function"==typeof t,"Expected the backend to be a function or an ES6 module exporting a default function. Read more: http://react-dnd.github.io/react-dnd/docs-drag-drop-context.html"),t}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return t===e||null!==t&&null!==e&&(0,i.default)(t,e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var a=n(33),i=r(a)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){var t,n,r=e.DecoratedComponent,u=e.createHandler,p=e.createMonitor,v=e.createConnector,y=e.registerHandler,m=e.containerDisplayName,D=e.getType,w=e.collect,C=e.options,E=C.arePropsEqual,T=void 0===E?x.default:E,S=r.displayName||r.name||"Component",I=(n=t=function(e){function t(e,n){o(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.handleChange=r.handleChange.bind(r),r.handleChildRef=r.handleChildRef.bind(r),(0,b.default)("object"===s(r.context.dragDropManager),"Could not find the drag and drop manager in the context of %s. Make sure to wrap the top-level component of your app with DragDropContext. Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context",S,S),r.manager=r.context.dragDropManager,r.handlerMonitor=p(r.manager),r.handlerConnector=v(r.manager.getBackend()),r.handler=u(r.handlerMonitor),r.disposable=new g.SerialDisposable,r.receiveProps(e),r.state=r.getCurrentState(),r.dispose(),r}return i(t,e),f(t,[{key:"getHandlerId",value:function(){return this.handlerId}},{key:"getDecoratedComponentInstance",value:function(){return this.decoratedComponentInstance}},{key:"shouldComponentUpdate",value:function(e,t){return!T(e,this.props)||!(0,_.default)(t,this.state)}}]),f(t,[{key:"componentDidMount",value:function(){this.isCurrentlyMounted=!0,this.disposable=new g.SerialDisposable,this.currentType=null,this.receiveProps(this.props),this.handleChange()}},{key:"componentWillReceiveProps",value:function(e){T(e,this.props)||(this.receiveProps(e),this.handleChange())}},{key:"componentWillUnmount",value:function(){this.dispose(),this.isCurrentlyMounted=!1}},{key:"receiveProps",value:function(e){this.handler.receiveProps(e),this.receiveType(D(e))}},{key:"receiveType",value:function(e){if(e!==this.currentType){this.currentType=e;var t=y(e,this.handler,this.manager),n=t.handlerId,r=t.unregister;this.handlerId=n,this.handlerMonitor.receiveHandlerId(n),this.handlerConnector.receiveHandlerId(n);var o=this.manager.getMonitor(),a=o.subscribeToStateChange(this.handleChange,{handlerIds:[n]});this.disposable.setDisposable(new g.CompositeDisposable(new g.Disposable(a),new g.Disposable(r)))}}},{key:"handleChange",value:function(){if(this.isCurrentlyMounted){var e=this.getCurrentState();(0,_.default)(e,this.state)||this.setState(e)}}},{key:"dispose",value:function(){this.disposable.dispose(),this.handlerConnector.receiveHandlerId(null)}},{key:"handleChildRef",value:function(e){this.decoratedComponentInstance=e,this.handler.receiveComponent(e)}},{key:"getCurrentState",value:function(){var e=w(this.handlerConnector.hooks,this.handlerMonitor);return e}},{key:"render",value:function(){return d.default.createElement(r,c({},this.props,this.state,{ref:this.handleChildRef}))}}]),t}(l.Component),t.DecoratedComponent=r,t.displayName=m+"("+S+")",t.contextTypes={dragDropManager:h.default.object.isRequired},n);return(0,O.default)(I,r)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=u;var l=n(2),d=r(l),p=n(3),h=r(p),g=n(76),v=n(5),y=(r(v),n(1)),b=r(y),m=n(22),O=r(m),D=n(33),_=r(D),w=n(60),x=r(w)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return"string"==typeof e||"symbol"===("undefined"==typeof e?"undefined":a(e))||t&&(0,u.default)(e)&&e.every(function(e){return o(e,!1)})}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var i=n(4),u=r(i)},function(e,t){"use strict";function n(e,t){if(e===t)return!0;if("object"!==("undefined"==typeof e?"undefined":r(e))||null===e||"object"!==("undefined"==typeof t?"undefined":r(t))||null===t)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(var a=Object.prototype.hasOwnProperty,i=0;i<n.length;i+=1){if(!a.call(t,n[i]))return!1;var u=e[n[i]],c=t[n[i]];if(u!==c||"object"===("undefined"==typeof u?"undefined":r(u))||"object"===("undefined"==typeof c?"undefined":r(c)))return!1}return!0}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if("string"!=typeof e.type){var t=e.type.displayName||e.type.name||"the component";throw new Error("Only native element nodes can now be passed to React DnD connectors."+("You can either wrap "+t+" into a <div>, or turn it into a ")+"drag source or a drop target itself.")}}function a(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!(0,u.isValidElement)(t)){var r=t;return void e(r,n)}var a=t;o(a);var i=n?function(t){return e(t,n)}:e;return(0,s.default)(a,i)}}function i(e){var t={};return Object.keys(e).forEach(function(n){var r=e[n],o=a(r);t[n]=function(){return o}}),t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var u=n(2),c=n(184),s=r(c)},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=e(r),a=n(3),i=e(a),u=function(e){var t=e.text,n=e.onClick;return o.default.createElement("div",{className:"add-widget-button",onClick:n},o.default.createElement("a",{className:"add-widget-link"},t))};u.propTypes={onClick:i.default.func,text:i.default.string},u.defaultProps={text:"Add Widget"},t.default=u}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,u,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(2),f=e(s),l=n(3),d=e(l),p=n(32),h=n(35),g=n(62),v=e(g),y=n(20),b={drop:function(e,t){var n=e.layout,r=e.rowIndex,o=e.columnIndex,a=e.onMove,i=t.getItem();if(i.columnIndex!==o||i.rowIndex!==r){var u=(0,y.moveWidget)(n,{rowIndex:i.rowIndex,columnIndex:i.columnIndex,widgetIndex:i.widgetIndex},{rowIndex:r,columnIndex:o},i.widgetName);a(u)}}},m=(i=(0,p.DropTarget)(h.WIDGET,b,function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver(),canDrop:t.canDrop()}}),i(u=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.layout,r=e.rowIndex,o=e.columnIndex,a=e.editable,i=e.children,u=e.connectDropTarget,c=e.onAdd,l=e.isOver,d=e.canDrop,p=e.editableColumnClass,h=e.droppableColumnClass,g=e.addWidgetComponentText,y=e.addWidgetComponent,b=t;b=a?t+" "+p:b;var m=l&&d;b=m?b+" "+h:b;var O=null;return O=y?(0,s.createElement)(y,{text:g,onClick:function(){c(n,r,o)}}):f.default.createElement(v.default,{text:g,onClick:function(){c(n,r,o)}}),u(f.default.createElement("div",{className:b},a&&O,i))}}]),t}(s.Component))||u);m.propTypes={children:d.default.node,className:d.default.string,onAdd:d.default.func,layout:d.default.object,rowIndex:d.default.number,columnIndex:d.default.number,editable:d.default.bool,isOver:d.default.bool,canDrop:d.default.bool,editableColumnClass:d.default.string,droppableColumnClass:d.default.string,addWidgetComponentText:d.default.string,connectDropTarget:d.default.func,addWidgetComponent:d.default.func},m.defaultProps={editableColumnClass:"editable-column",droppableColumnClass:"droppable-column"},t.default=m}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,u,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(2),f=e(s),l=n(3),d=e(l),p=n(32),h=n(170),g=e(h),v=n(66),y=e(v),b=(i=(0,p.DragDropContext)(g.default),i(u=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement(y.default,this.props))}}]),t}(s.Component))||u);b.PropTypes={layout:d.default.object,widgets:d.default.object,editable:d.default.bool,rowClass:d.default.string,frameComponent:d.default.func,addWidgetComponent:d.default.func,editableColumnClass:d.default.string,droppableColumnClass:d.default.string,addWidgetComponentText:d.default.string,onRemove:d.default.func,onAdd:d.default.func,onMove:d.default.func},t.default=b}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=e(r),a=n(3),i=e(a),u=function(e){var t=e.children,n=e.onRemove,r=e.editable,a=e.title;return o.default.createElement("div",{className:"defaultWidgetFrame"},o.default.createElement("div",{className:"defaultWidgetFrameHeader"},o.default.createElement("span",{className:"title"},a),r&&o.default.createElement("a",{className:"remove",onClick:function(){return n()}},"Remove")),t)};u.propTypes={editable:i.default.bool,children:i.default.node,onRemove:i.default.func,title:i.default.string},t.default=u}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=e(r),a=n(3),i=e(a),u=n(67),c=e(u),s=function(e){var t=e.layout,n=e.widgets,r=e.onRemove,a=e.editable,i=e.onAdd,u=e.frameComponent,s=e.rowClass,f=e.onMove,l=e.editableColumnClass,d=e.droppableColumnClass,p=e.addWidgetComponentText,h=e.addWidgetComponent,g=t.rows.map(function(e,g){return o.default.createElement(c.default,{key:g,rowClass:s,columns:e.columns,widgets:n,onRemove:r,layout:t,rowIndex:g,editable:a,onAdd:i,onMove:f,frameComponent:u,editableColumnClass:l,droppableColumnClass:d,addWidgetComponentText:p,addWidgetComponent:h})});return o.default.createElement("div",null,g)};s.propTypes={layout:i.default.object,widgets:i.default.object,editable:i.default.bool,onRemove:i.default.func,onAdd:i.default.func,frameComponent:i.default.func,rowClass:i.default.string,onMove:i.default.func,editableColumnClass:i.default.string,droppableColumnClass:i.default.string,addWidgetComponent:i.default.func,addWidgetComponentText:i.default.string
},s.defaultProps={layout:{rows:[]}},t.default=s}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.rowClass,n=e.columns,r=e.widgets,o=e.onRemove,i=e.layout,u=e.rowIndex,c=e.editable,f=e.frameComponent,d=e.editableColumnClass,p=e.droppableColumnClass,h=e.addWidgetComponentText,g=e.addWidgetComponent,v=e.onAdd,y=e.onMove,b=n.map(function(e,t){return a.default.createElement(s.default,{key:t,className:e.className,onAdd:v,layout:i,rowIndex:u,columnIndex:t,editable:c,onMove:y,editableColumnClass:d,droppableColumnClass:p,addWidgetComponent:g,addWidgetComponentText:h},a.default.createElement(l.default,{key:t,widgets:e.widgets,widgetTypes:r,onRemove:o,layout:i,rowIndex:u,columnIndex:t,editable:c,frameComponent:f,onMove:y}))});return a.default.createElement("div",{className:t},b)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=e(o),i=n(3),u=e(i),c=n(63),s=e(c),f=n(69),l=e(f);r.propTypes={rowClass:u.default.string,columns:u.default.array,widgets:u.default.object,layout:u.default.object,rowIndex:u.default.number,editable:u.default.bool,frameComponent:u.default.func,editableColumnClass:u.default.string,droppableColumnClass:u.default.string,addWidgetComponent:u.default.func,addWidgetComponentText:u.default.string,onAdd:u.default.func,onRemove:u.default.func,onMove:u.default.func},r.defaultProps={rowClass:"row"},t.default=r}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,u,c,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(2),l=e(f),d=n(3),p=e(d),h=n(189),g=n(32),v=n(35),y=n(20),b=n(65),m=e(b),O={beginDrag:function(e){return{widgetName:e.widgetName,rowIndex:e.rowIndex,columnIndex:e.columnIndex,widgetIndex:e.widgetIndex}}},D={hover:function(e,t,n){var r=t.getItem().widgetIndex,o=e.widgetIndex;if(r!==o){var a=(0,h.findDOMNode)(n).getBoundingClientRect(),i=(a.bottom-a.top)/2,u=t.getClientOffset(),c=u.y-a.top;if(!(r<o&&c<i||r>o&&c>i)){var s=e.layout,f=e.columnIndex,l=e.rowIndex;if(t.getItem().columnIndex===f){var d=(0,y.sortWidget)(s,{rowIndex:l,columnIndex:f,widgetIndex:r},{rowIndex:l,columnIndex:f,widgetIndex:o},t.getItem().widgetName);e.onMove(d),t.getItem().widgetIndex=o}}}}},_=(i=(0,g.DropTarget)(v.WIDGET,D,function(e){return{connectDropTarget:e.dropTarget()}}),u=(0,g.DragSource)(v.WIDGET,O,function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}}),i(c=u(c=function(e){function t(){var e,n,a,i;r(this,t);for(var u=arguments.length,c=Array(u),s=0;s<u;s++)c[s]=arguments[s];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),a.remove=function(){var e=a.props,t=e.layout,n=e.rowIndex,r=e.columnIndex,o=e.widgetIndex,i=(0,y.removeWidget)(t,n,r,o);a.props.onRemove(i)},i=n,o(a,i)}return a(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.frameComponent,n=e.children,r=e.editable,o=e.title,a=e.connectDragSource,i=e.connectDropTarget,u=e.isDragging,c=null;c=t?(0,f.createElement)(t,{children:n,editable:r,title:o,onRemove:this.remove}):l.default.createElement(m.default,{title:o,editable:r,children:n,onRemove:this.remove});var s=u?0:1,d=l.default.createElement("div",{style:{opacity:s}},c);return r?a(i(d)):d}}]),t}(f.Component))||c)||c);_.propTypes={children:p.default.element,layout:p.default.object,columnIndex:p.default.number,rowIndex:p.default.number,widgetIndex:p.default.number,editable:p.default.bool,frameComponent:p.default.func,widgetName:p.default.string,title:p.default.string,isDragging:p.default.bool,connectDragSource:p.default.func,connectDropTarget:p.default.func,onRemove:p.default.func},t.default=_}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=e(r),a=n(3),i=e(a),u=n(68),c=e(u),s=function(e){var t=e.widgets,n=e.widgetTypes,a=e.onRemove,i=e.layout,u=e.columnIndex,s=e.rowIndex,f=e.editable,l=e.frameComponent,d=e.onMove,p=t.map(function(e,t){return o.default.createElement(c.default,{key:t,widgetName:e.key,title:n[e.key].title,onRemove:a,layout:i,columnIndex:u,rowIndex:s,widgetIndex:t,editable:f,frameComponent:l,onMove:d},(0,r.createElement)(n[e.key].type,n[e.key].props))});return o.default.createElement("div",null,p)};s.propTypes={widgets:i.default.array,widgetTypes:i.default.object,onRemove:i.default.func,layout:i.default.object,columnIndex:i.default.number,rowIndex:i.default.number,editable:i.default.bool,frameComponent:i.default.func,onMove:i.default.func},t.default=s}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(64);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return e(r).default}});var o=n(20);Object.defineProperty(t,"addWidget",{enumerable:!0,get:function(){return o.addWidget}})}).call(this)}finally{}},function(e,t,n){"use strict";function r(){if(c.length)throw c.shift()}function o(e){var t;t=u.length?u.pop():new a,t.task=e,i(t)}function a(){this.task=null}var i=n(72),u=[],c=[],s=i.makeRequestCallFromTimer(r);e.exports=o,a.prototype.call=function(){try{this.task.call()}catch(e){o.onerror?o.onerror(e):(c.push(e),s())}finally{this.task=null,u[u.length]=this}}},function(e,t){"use strict";function n(e){u.length||(i(),c=!0),u[u.length]=e}function r(){for(;s<u.length;){var e=s;if(s+=1,u[e].call(),s>f){for(var t=0,n=u.length-s;t<n;t++)u[t]=u[t+s];u.length-=s,s=0}}u.length=0,s=0,c=!1}function o(e){var t=1,n=new d(e),r=document.createTextNode("");return n.observe(r,{characterData:!0}),function(){t=-t,r.data=t}}function a(e){return function(){function t(){clearTimeout(n),clearInterval(r),e()}var n=setTimeout(t,0),r=setInterval(t,50)}}e.exports=n;var i,u=[],c=!1,s=0,f=1024,l="undefined"!=typeof global?global:self,d=l.MutationObserver||l.WebKitMutationObserver;i="function"==typeof d?o(r):a(r),n.requestFlush=i,n.makeRequestCallFromTimer=a},function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}},o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};t.__esModule=!0;var a=n(21),i=r(a),u=function(){function e(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];o(this,e),Array.isArray(n[0])&&1===n.length&&(n=n[0]);for(var a=0;a<n.length;a++)if(!i.default(n[a]))throw new Error("Expected a disposable");this.disposables=n,this.isDisposed=!1}return e.prototype.add=function(e){this.isDisposed?e.dispose():this.disposables.push(e)},e.prototype.remove=function(e){if(this.isDisposed)return!1;var t=this.disposables.indexOf(e);return t!==-1&&(this.disposables.splice(t,1),e.dispose(),!0)},e.prototype.dispose=function(){if(!this.isDisposed){for(var e=this.disposables.length,t=new Array(e),n=0;n<e;n++)t[n]=this.disposables[n];this.isDisposed=!0,this.disposables=[],this.length=0;for(var n=0;n<e;n++)t[n].dispose()}},e}();t.default=u,e.exports=t.default},function(e,t){"use strict";var n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.__esModule=!0;var o=function(){},a=function(){function e(t){n(this,e),this.isDisposed=!1,this.action=t||o}return e.prototype.dispose=function(){this.isDisposed||(this.action.call(null),this.isDisposed=!0)},r(e,null,[{key:"empty",enumerable:!0,value:{dispose:o}}]),e}();t.default=a,e.exports=t.default},function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}},o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};t.__esModule=!0;var a=n(21),i=r(a),u=function(){function e(){o(this,e),this.isDisposed=!1,this.current=null}return e.prototype.getDisposable=function(){return this.current},e.prototype.setDisposable=function(){var e=void 0===arguments[0]?null:arguments[0];if(null!=e&&!i.default(e))throw new Error("Expected either an empty value or a valid disposable");var t=this.isDisposed,n=void 0;t||(n=this.current,this.current=e),n&&n.dispose(),t&&e&&e.dispose()},e.prototype.dispose=function(){if(!this.isDisposed){this.isDisposed=!0;var e=this.current;this.current=null,e&&e.dispose()}},e}();t.default=u,e.exports=t.default},function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var o=n(21),a=r(o);t.isDisposable=a.default;var i=n(74),u=r(i);t.Disposable=u.default;var c=n(73),s=r(c);t.CompositeDisposable=s.default;var f=n(75),l=r(f);t.SerialDisposable=l.default},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(185),c=o(u),s=n(85),f=o(s),l=n(10),d=r(l),p=n(78),h=o(p),g=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,e);var r=(0,c.default)(f.default);this.context=n,this.store=r,this.monitor=new h.default(r),this.registry=this.monitor.registry,this.backend=t(this),r.subscribe(this.handleRefCountChange.bind(this))}return i(e,[{key:"handleRefCountChange",value:function(){var e=this.store.getState().refCount>0;e&&!this.isSetUp?(this.backend.setup(),this.isSetUp=!0):!e&&this.isSetUp&&(this.backend.teardown(),this.isSetUp=!1)}},{key:"getContext",value:function(){return this.context}},{key:"getMonitor",value:function(){return this.monitor}},{key:"getBackend",value:function(){return this.backend}},{key:"getRegistry",value:function(){return this.registry}},{key:"getActions",value:function(){function e(e){return function(){for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];var i=e.apply(t,o);"undefined"!=typeof i&&n(i)}}var t=this,n=this.store.dispatch;return Object.keys(d).filter(function(e){return"function"==typeof d[e]}).reduce(function(t,n){var r=d[n];return t[n]=e(r),t},{})}}]),e}();t.default=g},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),u=r(i),c=n(4),s=r(c),f=n(38),l=r(f),d=n(81),p=r(d),h=n(37),g=n(36),v=function(){function e(t){o(this,e),this.store=t,this.registry=new p.default(t)}return a(e,[{key:"subscribeToStateChange",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.handlerIds;(0,u.default)("function"==typeof e,"listener must be a function."),(0,u.default)("undefined"==typeof r||(0,s.default)(r),"handlerIds, when specified, must be an array of strings.");var o=this.store.getState().stateId,a=function(){var n=t.store.getState(),a=n.stateId;try{var i=a===o||a===o+1&&!(0,g.areDirty)(n.dirtyHandlerIds,r);i||e()}finally{o=a}};return this.store.subscribe(a)}},{key:"subscribeToOffsetChange",value:function(e){var t=this;(0,u.default)("function"==typeof e,"listener must be a function.");var n=this.store.getState().dragOffset,r=function(){var r=t.store.getState().dragOffset;r!==n&&(n=r,e())};return this.store.subscribe(r)}},{key:"canDragSource",value:function(e){var t=this.registry.getSource(e);return(0,u.default)(t,"Expected to find a valid source."),!this.isDragging()&&t.canDrag(this,e)}},{key:"canDropOnTarget",value:function(e){var t=this.registry.getTarget(e);if((0,u.default)(t,"Expected to find a valid target."),!this.isDragging()||this.didDrop())return!1;var n=this.registry.getTargetType(e),r=this.getItemType();return(0,l.default)(n,r)&&t.canDrop(this,e)}},{key:"isDragging",value:function(){return Boolean(this.getItemType())}},{key:"isDraggingSource",value:function(e){var t=this.registry.getSource(e,!0);if((0,u.default)(t,"Expected to find a valid source."),!this.isDragging()||!this.isSourcePublic())return!1;var n=this.registry.getSourceType(e),r=this.getItemType();return n===r&&t.isDragging(this,e)}},{key:"isOverTarget",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{shallow:!1},n=t.shallow;if(!this.isDragging())return!1;var r=this.registry.getTargetType(e),o=this.getItemType();if(!(0,l.default)(r,o))return!1;var a=this.getTargetIds();if(!a.length)return!1;var i=a.indexOf(e);return n?i===a.length-1:i>-1}},{key:"getItemType",value:function(){return this.store.getState().dragOperation.itemType}},{key:"getItem",value:function(){return this.store.getState().dragOperation.item}},{key:"getSourceId",value:function(){return this.store.getState().dragOperation.sourceId}},{key:"getTargetIds",value:function(){return this.store.getState().dragOperation.targetIds}},{key:"getDropResult",value:function(){return this.store.getState().dragOperation.dropResult}},{key:"didDrop",value:function(){return this.store.getState().dragOperation.didDrop}},{key:"isSourcePublic",value:function(){return this.store.getState().dragOperation.isSourcePublic}},{key:"getInitialClientOffset",value:function(){return this.store.getState().dragOffset.initialClientOffset}},{key:"getInitialSourceClientOffset",value:function(){return this.store.getState().dragOffset.initialSourceClientOffset}},{key:"getClientOffset",value:function(){return this.store.getState().dragOffset.clientOffset}},{key:"getSourceClientOffset",value:function(){return(0,h.getSourceClientOffset)(this.store.getState().dragOffset)}},{key:"getDifferenceFromInitialOffset",value:function(){return(0,h.getDifferenceFromInitialOffset)(this.store.getState().dragOffset)}}]),e}();t.default=v},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){n(this,e)}return r(e,[{key:"canDrag",value:function(){return!0}},{key:"isDragging",value:function(e,t){return t===e.getSourceId()}},{key:"endDrag",value:function(){}}]),e}();t.default=o},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){n(this,e)}return r(e,[{key:"canDrop",value:function(){return!0}},{key:"hover",value:function(){}},{key:"drop",value:function(){}}]),e}();t.default=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e){(0,p.default)("function"==typeof e.canDrag,"Expected canDrag to be a function."),(0,p.default)("function"==typeof e.beginDrag,"Expected beginDrag to be a function."),(0,p.default)("function"==typeof e.endDrag,"Expected endDrag to be a function.")}function i(e){(0,p.default)("function"==typeof e.canDrop,"Expected canDrop to be a function."),(0,p.default)("function"==typeof e.hover,"Expected hover to be a function."),(0,p.default)("function"==typeof e.drop,"Expected beginDrag to be a function.")}function u(e,t){return t&&(0,g.default)(e)?void e.forEach(function(e){return u(e,!1)}):void(0,p.default)("string"==typeof e||"symbol"===("undefined"==typeof e?"undefined":l(e)),t?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}function c(e){var t=(0,O.default)().toString();switch(e){case D.SOURCE:return"S"+t;case D.TARGET:return"T"+t;default:(0,p.default)(!1,"Unknown role: "+e)}}function s(e){switch(e[0]){case"S":return D.SOURCE;case"T":return D.TARGET;default:(0,p.default)(!1,"Cannot parse handler ID: "+e)}}Object.defineProperty(t,"__esModule",{value:!0});var f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=n(1),p=r(d),h=n(4),g=r(h),v=n(71),y=r(v),b=n(11),m=n(88),O=r(m),D={SOURCE:"SOURCE",TARGET:"TARGET"},_=function(){function e(t){o(this,e),this.store=t,this.types={},this.handlers={},this.pinnedSourceId=null,this.pinnedSource=null}return f(e,[{key:"addSource",value:function(e,t){u(e),a(t);var n=this.addHandler(D.SOURCE,e,t);return this.store.dispatch((0,b.addSource)(n)),n}},{key:"addTarget",value:function(e,t){u(e,!0),i(t);var n=this.addHandler(D.TARGET,e,t);return this.store.dispatch((0,b.addTarget)(n)),n}},{key:"addHandler",value:function(e,t,n){var r=c(e);return this.types[r]=t,this.handlers[r]=n,r}},{key:"containsHandler",value:function(e){var t=this;return Object.keys(this.handlers).some(function(n){return t.handlers[n]===e})}},{key:"getSource",value:function(e,t){(0,p.default)(this.isSourceId(e),"Expected a valid source ID.");var n=t&&e===this.pinnedSourceId,r=n?this.pinnedSource:this.handlers[e];return r}},{key:"getTarget",value:function(e){return(0,p.default)(this.isTargetId(e),"Expected a valid target ID."),this.handlers[e]}},{key:"getSourceType",value:function(e){return(0,p.default)(this.isSourceId(e),"Expected a valid source ID."),this.types[e]}},{key:"getTargetType",value:function(e){return(0,p.default)(this.isTargetId(e),"Expected a valid target ID."),this.types[e]}},{key:"isSourceId",value:function(e){var t=s(e);return t===D.SOURCE}},{key:"isTargetId",value:function(e){var t=s(e);return t===D.TARGET}},{key:"removeSource",value:function(e){var t=this;(0,p.default)(this.getSource(e),"Expected an existing source."),this.store.dispatch((0,b.removeSource)(e)),(0,y.default)(function(){delete t.handlers[e],delete t.types[e]})}},{key:"removeTarget",value:function(e){var t=this;(0,p.default)(this.getTarget(e),"Expected an existing target."),this.store.dispatch((0,b.removeTarget)(e)),(0,y.default)(function(){delete t.handlers[e],delete t.types[e]})}},{key:"pinSource",value:function(e){var t=this.getSource(e);(0,p.default)(t,"Expected an existing source."),this.pinnedSourceId=e,this.pinnedSource=t}},{key:"unpinSource",value:function(){(0,p.default)(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null}}]),e}();t.default=_},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e){return new s(e)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=a;var u=n(53),c=r(u),s=function(){function e(t){o(this,e),this.actions=t.getActions()}return i(e,[{key:"setup",value:function(){this.didCallSetup=!0}},{key:"teardown",value:function(){this.didCallTeardown=!0}},{key:"connectDragSource",value:function(){return c.default}},{key:"connectDragPreview",value:function(){return c.default}},{key:"connectDropTarget",value:function(){return c.default}},{key:"simulateBeginDrag",value:function(e,t){this.actions.beginDrag(e,t)}},{key:"simulatePublishDragSource",value:function(){this.actions.publishDragSource()}},{key:"simulateHover",value:function(e,t){this.actions.hover(e,t)}},{key:"simulateDrop",value:function(){this.actions.drop()}},{key:"simulateEndDrag",value:function(){this.actions.endDrag()}}]),e}()},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(77);Object.defineProperty(t,"DragDropManager",{enumerable:!0,get:function(){return r(o).default}});var a=n(79);Object.defineProperty(t,"DragSource",{enumerable:!0,get:function(){return r(a).default}});var i=n(80);Object.defineProperty(t,"DropTarget",{enumerable:!0,get:function(){return r(i).default}});var u=n(82);Object.defineProperty(t,"createTestBackend",{enumerable:!0,get:function(){return r(u).default}})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments[1];switch(t.type){case c.BEGIN_DRAG:return a({},e,{itemType:t.itemType,item:t.item,sourceId:t.sourceId,isSourcePublic:t.isSourcePublic,dropResult:null,didDrop:!1});case c.PUBLISH_DRAG_SOURCE:return a({},e,{isSourcePublic:!0});case c.HOVER:return a({},e,{targetIds:t.targetIds});case s.REMOVE_TARGET:return e.targetIds.indexOf(t.targetId)===-1?e:a({},e,{targetIds:(0,u.default)(e.targetIds,t.targetId)});case c.DROP:return a({},e,{dropResult:t.dropResult,didDrop:!0,targetIds:[]});case c.END_DRAG:return a({},e,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=o;var i=n(54),u=r(i),c=n(10),s=n(11),f={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];return{dirtyHandlerIds:(0,d.default)(e.dirtyHandlerIds,t,e.dragOperation),dragOffset:(0,i.default)(e.dragOffset,t),refCount:(0,f.default)(e.refCount,t),dragOperation:(0,c.default)(e.dragOperation,t),stateId:(0,h.default)(e.stateId)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var a=n(37),i=r(a),u=n(84),c=r(u),s=n(86),f=r(s),l=n(36),d=r(l),p=n(87),h=r(p)},function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments[1];switch(t.type){case o.ADD_SOURCE:case o.ADD_TARGET:return e+1;case o.REMOVE_SOURCE:case o.REMOVE_TARGET:return e-1;default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(11)},function(e,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e+1}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t){"use strict";function n(){return r++}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var r=0},function(e,t){"use strict";function n(e){return function(){return e}}var r=function(){};r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t,n){"use strict";function r(e,t,n,r,a,i,u,c){if(o(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[n,r,a,i,u,c],l=0;s=new Error(t.replace(/%s/g,function(){return f[l++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}}var o=function(e){};e.exports=r},function(e,t,n){function r(e){if(e instanceof Array)return h(e.constructor(e.length),e);if(e&&"object"==typeof e){var t=e.constructor&&e.constructor.prototype;return h(Object.create(t||null),e)}return e}function o(){function e(n,o){Array.isArray(n)&&Array.isArray(o)||l(!Array.isArray(o),"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."),l("object"==typeof o&&null!==o,"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: %s.",Object.keys(t).join(", "));var a=n;return g(o).forEach(function(i){if(d.call(t,i)){var u=n===a;a=t[i](o[i],a,o,n),u&&e.isEquals(a,n)&&(a=n)}else{var c=e(n[i],o[i]);e.isEquals(c,a[i])&&("undefined"!=typeof c||d.call(n,i))||(a===n&&(a=r(n)),a[i]=c)}}),a}var t=h({},v);return e.extend=function(e,n){t[e]=n},e.isEquals=function(e,t){return e===t},e}function a(e,t,n){l(Array.isArray(e),"update(): expected target of %s to be an array; got %s.",n,e);var r=t[n];l(Array.isArray(r),"update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?",n,r)}function i(e,t){l(Array.isArray(e),"Expected $splice target to be an array; got %s",e),u(t.$splice)}function u(e){l(Array.isArray(e),"update(): expected spec of $splice to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?",e)}function c(e){l("function"==typeof e,"update(): expected spec of $apply to be a function; got %s.",e)}function s(e){l(1===Object.keys(e).length,"Cannot have more than one key in an object with $set")}function f(e,t){l(t&&"object"==typeof t,"update(): $merge expects a spec of type 'object'; got %s",t),l(e&&"object"==typeof e,"update(): $merge expects a target of type 'object'; got %s",e)}var l=n(1),d=Object.prototype.hasOwnProperty,p=Array.prototype.splice,h=Object.assign||function(e,t){return g(t).forEach(function(n){d.call(t,n)&&(e[n]=t[n])}),e},g="function"==typeof Object.getOwnPropertySymbols?function(e){return Object.keys(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.keys(e)},v={$push:function(e,t,n){return a(t,n,"$push"),e.length?t.concat(e):t},$unshift:function(e,t,n){return a(t,n,"$unshift"),e.length?e.concat(t):t},$splice:function(e,t,n,o){return i(t,n),e.forEach(function(e){u(e),t===o&&e.length&&(t=r(o)),p.apply(t,e)}),t},$set:function(e,t,n){return s(n),e},$unset:function(e,t,n,o){return l(Array.isArray(e),"update(): expected spec of $unset to be an array; got %s. Did you forget to wrap the key(s) in an array?",e),e.forEach(function(e){Object.hasOwnProperty.call(t,e)&&(t===o&&(t=r(o)),delete t[e])}),t},$merge:function(e,t,n,o){return f(t,e),g(e).forEach(function(n){e[n]!==t[n]&&(t===o&&(t=r(o)),t[n]=e[n])}),t},$apply:function(e,t){return c(e),e(t)}};e.exports=o(),e.exports.newContext=o},function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var o=n(120),a=n(121),i=n(122),u=n(123),c=n(124);r.prototype.clear=o,r.prototype.delete=a,r.prototype.get=i,r.prototype.has=u,r.prototype.set=c,e.exports=r},function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var o=n(130),a=n(131),i=n(132),u=n(133),c=n(134);r.prototype.clear=o,r.prototype.delete=a,r.prototype.get=i,r.prototype.has=u,r.prototype.set=c,e.exports=r},function(e,t,n){var r=n(15),o=n(7),a=r(o,"Map");e.exports=a},function(e,t,n){var r=n(15),o=n(7),a=r(o,"Set");e.exports=a},function(e,t){function n(e,t){for(var n=-1,r=null==e?0:e.length,o=0,a=[];++n<r;){var i=e[n];t(i,n,e)&&(a[o++]=i)}return a}e.exports=n},function(e,t,n){function r(e,t){var n=i(e),r=!n&&a(e),f=!n&&!r&&u(e),d=!n&&!r&&!f&&s(e),p=n||r||f||d,h=p?o(e.length,String):[],g=h.length;for(var v in e)!t&&!l.call(e,v)||p&&("length"==v||f&&("offset"==v||"parent"==v)||d&&("buffer"==v||"byteLength"==v||"byteOffset"==v)||c(v,g))||h.push(v);return h}var o=n(109),a=n(50),i=n(4),u=n(155),c=n(47),s=n(156),f=Object.prototype,l=f.hasOwnProperty;e.exports=r},function(e,t){function n(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}e.exports=n},function(e,t,n){function r(e,t,n){var r=e[t];u.call(e,t)&&a(r,n)&&(void 0!==n||t in e)||o(e,t,n)}var o=n(41),a=n(17),i=Object.prototype,u=i.hasOwnProperty;e.exports=r},function(e,t){function n(e,t,n,r){for(var o=e.length,a=n+(r?1:-1);r?a--:++a<o;)if(t(e[a],a,e))return a;return-1}e.exports=n},function(e,t,n){function r(e,t,n){return t===t?i(e,t,n):o(e,a,n)}var o=n(100),a=n(104),i=n(149);e.exports=r},function(e,t,n){function r(e,t,n){for(var r=n?i:a,l=e[0].length,d=e.length,p=d,h=Array(d),g=1/0,v=[];p--;){var y=e[p];p&&t&&(y=u(y,c(t))),g=f(y.length,g),h[p]=!n&&(t||l>=120&&y.length>=120)?new o(p&&y):void 0}y=e[0];var b=-1,m=h[0];e:for(;++b<l&&v.length<g;){var O=y[b],D=t?t(O):O;if(O=n||0!==O?O:0,!(m?s(m,D):r(v,D,n))){for(p=d;--p;){var _=h[p];if(!(_?s(_,D):r(e[p],D,n)))continue e}m&&m.push(D),v.push(O)}}return v}var o=n(23),a=n(25),i=n(26),u=n(27),c=n(28),s=n(29),f=Math.min;e.exports=r},function(e,t,n){function r(e){return a(e)&&o(e)==i}var o=n(13),a=n(9),i="[object Arguments]";e.exports=r},function(e,t){function n(e){return e!==e}e.exports=n},function(e,t,n){function r(e){if(!i(e)||a(e))return!1;var t=o(e)?h:s;return t.test(u(e))}var o=n(51),a=n(128),i=n(8),u=n(150),c=/[\\^$.*+?()[\]{}|]/g,s=/^\[object .+?Constructor\]$/,f=Function.prototype,l=Object.prototype,d=f.toString,p=l.hasOwnProperty,h=RegExp("^"+d.call(p).replace(c,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=r},function(e,t,n){function r(e){return i(e)&&a(e.length)&&!!k[o(e)]}var o=n(13),a=n(52),i=n(9),u="[object Arguments]",c="[object Array]",s="[object Boolean]",f="[object Date]",l="[object Error]",d="[object Function]",p="[object Map]",h="[object Number]",g="[object Object]",v="[object RegExp]",y="[object Set]",b="[object String]",m="[object WeakMap]",O="[object ArrayBuffer]",D="[object DataView]",_="[object Float32Array]",w="[object Float64Array]",x="[object Int8Array]",C="[object Int16Array]",E="[object Int32Array]",T="[object Uint8Array]",S="[object Uint8ClampedArray]",I="[object Uint16Array]",j="[object Uint32Array]",k={};k[_]=k[w]=k[x]=k[C]=k[E]=k[T]=k[S]=k[I]=k[j]=!0,k[u]=k[c]=k[O]=k[s]=k[D]=k[f]=k[l]=k[d]=k[p]=k[h]=k[g]=k[v]=k[y]=k[b]=k[m]=!1,e.exports=r},function(e,t,n){function r(e){if(!o(e))return i(e);var t=a(e),n=[];for(var r in e)("constructor"!=r||!t&&c.call(e,r))&&n.push(r);return n}var o=n(8),a=n(129),i=n(140),u=Object.prototype,c=u.hasOwnProperty;e.exports=r},function(e,t,n){var r=n(152),o=n(45),a=n(49),i=o?function(e,t){
return o(e,"toString",{configurable:!0,enumerable:!1,value:r(t),writable:!0})}:a;e.exports=i},function(e,t){function n(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}e.exports=n},function(e,t,n){function r(e,t,n){var r=e.length;if(r<2)return r?i(e[0]):[];for(var u=-1,c=Array(r);++u<r;)for(var s=e[u],f=-1;++f<r;)f!=u&&(c[u]=o(c[u]||s,e[f],t,n));return i(a(c,1),t,n)}var o=n(42),a=n(43),i=n(44);e.exports=r},function(e,t,n){function r(e){return o(e)?e:[]}var o=n(18);e.exports=r},function(e,t,n){function r(e,t,n,r){var i=!n;n||(n={});for(var u=-1,c=t.length;++u<c;){var s=t[u],f=r?r(n[s],e[s],s,n,e):void 0;void 0===f&&(f=e[s]),i?a(n,s,f):o(n,s,f)}return n}var o=n(99),a=n(41);e.exports=r},function(e,t,n){var r=n(7),o=r["__core-js_shared__"];e.exports=o},function(e,t,n){function r(e){return o(function(t,n){var r=-1,o=n.length,i=o>1?n[o-1]:void 0,u=o>2?n[2]:void 0;for(i=e.length>3&&"function"==typeof i?(o--,i):void 0,u&&a(n[0],n[1],u)&&(i=o<3?void 0:i,o=1),t=Object(t);++r<o;){var c=n[r];c&&e(t,c,r,i)}return t})}var o=n(6),a=n(126);e.exports=r},function(e,t,n){var r=n(95),o=n(53),a=n(48),i=1/0,u=r&&1/a(new r([,-0]))[1]==i?function(e){return new r(e)}:o;e.exports=u},function(e,t,n){function r(e,t,n,r){return void 0===e||o(e,a[n])&&!i.call(r,n)?t:e}var o=n(17),a=Object.prototype,i=a.hasOwnProperty;e.exports=r},function(e,t,n){var r=n(143),o=r(Object.getPrototypeOf,Object);e.exports=o},function(e,t,n){function r(e){var t=i.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(e){}var o=u.call(e);return r&&(t?e[c]=n:delete e[c]),o}var o=n(24),a=Object.prototype,i=a.hasOwnProperty,u=a.toString,c=o?o.toStringTag:void 0;e.exports=r},function(e,t){function n(e,t){return null==e?void 0:e[t]}e.exports=n},function(e,t,n){function r(){this.__data__=o?o(null):{},this.size=0}var o=n(16);e.exports=r},function(e,t){function n(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}e.exports=n},function(e,t,n){function r(e){var t=this.__data__;if(o){var n=t[e];return n===a?void 0:n}return u.call(t,e)?t[e]:void 0}var o=n(16),a="__lodash_hash_undefined__",i=Object.prototype,u=i.hasOwnProperty;e.exports=r},function(e,t,n){function r(e){var t=this.__data__;return o?void 0!==t[e]:i.call(t,e)}var o=n(16),a=Object.prototype,i=a.hasOwnProperty;e.exports=r},function(e,t,n){function r(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=o&&void 0===t?a:t,this}var o=n(16),a="__lodash_hash_undefined__";e.exports=r},function(e,t,n){function r(e){return i(e)||a(e)||!!(u&&e&&e[u])}var o=n(24),a=n(50),i=n(4),u=o?o.isConcatSpreadable:void 0;e.exports=r},function(e,t,n){function r(e,t,n){if(!u(n))return!1;var r=typeof t;return!!("number"==r?a(n)&&i(t,n.length):"string"==r&&t in n)&&o(n[t],e)}var o=n(17),a=n(30),i=n(47),u=n(8);e.exports=r},function(e,t){function n(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}e.exports=n},function(e,t,n){function r(e){return!!a&&a in e}var o=n(113),a=function(){var e=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();e.exports=r},function(e,t){function n(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||r;return e===n}var r=Object.prototype;e.exports=n},function(e,t){function n(){this.__data__=[],this.size=0}e.exports=n},function(e,t,n){function r(e){var t=this.__data__,n=o(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():i.call(t,n,1),--this.size,!0}var o=n(12),a=Array.prototype,i=a.splice;e.exports=r},function(e,t,n){function r(e){var t=this.__data__,n=o(t,e);return n<0?void 0:t[n][1]}var o=n(12);e.exports=r},function(e,t,n){function r(e){return o(this.__data__,e)>-1}var o=n(12);e.exports=r},function(e,t,n){function r(e,t){var n=this.__data__,r=o(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}var o=n(12);e.exports=r},function(e,t,n){function r(){this.size=0,this.__data__={hash:new o,map:new(i||a),string:new o}}var o=n(92),a=n(93),i=n(94);e.exports=r},function(e,t,n){function r(e){var t=o(this,e).delete(e);return this.size-=t?1:0,t}var o=n(14);e.exports=r},function(e,t,n){function r(e){return o(this,e).get(e)}var o=n(14);e.exports=r},function(e,t,n){function r(e){return o(this,e).has(e)}var o=n(14);e.exports=r},function(e,t,n){function r(e,t){var n=o(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}var o=n(14);e.exports=r},function(e,t){function n(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}e.exports=n},function(e,t,n){(function(e){var r=n(46),o="object"==typeof t&&t&&!t.nodeType&&t,a=o&&"object"==typeof e&&e&&!e.nodeType&&e,i=a&&a.exports===o,u=i&&r.process,c=function(){try{return u&&u.binding&&u.binding("util")}catch(e){}}();e.exports=c}).call(t,n(34)(e))},function(e,t){function n(e){return o.call(e)}var r=Object.prototype,o=r.toString;e.exports=n},function(e,t){function n(e,t){return function(n){return e(t(n))}}e.exports=n},function(e,t,n){function r(e,t,n){return t=a(void 0===t?e.length-1:t,0),function(){for(var r=arguments,i=-1,u=a(r.length-t,0),c=Array(u);++i<u;)c[i]=r[t+i];i=-1;for(var s=Array(t+1);++i<t;)s[i]=r[i];return s[t]=n(c),o(e,this,s)}}var o=n(40),a=Math.max;e.exports=r},function(e,t){function n(e){return this.__data__.set(e,r),this}var r="__lodash_hash_undefined__";e.exports=n},function(e,t){function n(e){return this.__data__.has(e)}e.exports=n},function(e,t,n){var r=n(108),o=n(148),a=o(r);e.exports=a},function(e,t){function n(e){var t=0,n=0;return function(){var i=a(),u=o-(i-n);if(n=i,u>0){if(++t>=r)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var r=800,o=16,a=Date.now;e.exports=n},function(e,t){function n(e,t,n){for(var r=n-1,o=e.length;++r<o;)if(e[r]===t)return r;return-1}e.exports=n},function(e,t){function n(e){if(null!=e){try{return o.call(e)}catch(e){}try{return e+""}catch(e){}}return""}var r=Function.prototype,o=r.toString;e.exports=n},function(e,t,n){var r=n(112),o=n(114),a=n(157),i=o(function(e,t,n,o){r(t,a(t),e,o)});e.exports=i},function(e,t){function n(e){return function(){return e}}e.exports=n},function(e,t,n){var r=n(40),o=n(151),a=n(6),i=n(116),u=a(function(e){return e.push(void 0,i),r(o,void 0,e)});e.exports=u},function(e,t,n){var r=n(27),o=n(102),a=n(6),i=n(111),u=a(function(e){var t=r(e,i);return t.length&&t[0]===e[0]?o(t):[]});e.exports=u},function(e,t,n){(function(e){var r=n(7),o=n(159),a="object"==typeof t&&t&&!t.nodeType&&t,i=a&&"object"==typeof e&&e&&!e.nodeType&&e,u=i&&i.exports===a,c=u?r.Buffer:void 0,s=c?c.isBuffer:void 0,f=s||o;e.exports=f}).call(t,n(34)(e))},function(e,t,n){var r=n(106),o=n(28),a=n(141),i=a&&a.isTypedArray,u=i?o(i):r;e.exports=u},function(e,t,n){function r(e){return i(e)?o(e,!0):a(e)}var o=n(97),a=n(107),i=n(30);e.exports=r},function(e,t,n){function r(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(a);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=e.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(r.Cache||o),n}var o=n(39),a="Expected a function";r.Cache=o,e.exports=r},function(e,t){function n(){return!1}e.exports=n},function(e,t,n){var r=n(43),o=n(6),a=n(44),i=n(18),u=o(function(e){return a(r(e,1,i,!0))});e.exports=u},function(e,t,n){var r=n(96),o=n(6),a=n(110),i=n(18),u=o(function(e){return a(r(e,i))});e.exports=u},function(e,t,n){"use strict";var r=n(89),o=n(90),a=n(163);e.exports=function(){function e(e,t,n,r,i,u){u!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t){"use strict";var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(160),u=r(i),c=n(54),s=r(c),f=function(){function e(){o(this,e),this.entered=[]}return a(e,[{key:"enter",value:function(e){var t=this.entered.length,n=function(t){return document.documentElement.contains(t)&&(!t.contains||t.contains(e))};return this.entered=(0,u.default)(this.entered.filter(n),[e]),0===t&&this.entered.length>0}},{key:"leave",value:function(e){var t=this.entered.length;return this.entered=(0,s.default)(this.entered.filter(function(e){return document.documentElement.contains(e)}),e),t>0&&0===this.entered.length}},{key:"reset",value:function(){this.entered=[]}}]),e}();t.default=f},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(153),c=o(u),s=n(171),f=o(s),l=n(164),d=o(l),p=n(55),h=n(168),g=n(167),v=n(31),y=r(v),b=function(){function e(t){a(this,e),this.actions=t.getActions(),this.monitor=t.getMonitor(),this.registry=t.getRegistry(),this.context=t.getContext(),this.sourcePreviewNodes={},this.sourcePreviewNodeOptions={},this.sourceNodes={},this.sourceNodeOptions={},this.enterLeaveCounter=new d.default,this.dragStartSourceIds=[],this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.currentDragSourceNodeOffset=null,this.currentDragSourceNodeOffsetChanged=!1,this.altKeyPressed=!1,this.getSourceClientOffset=this.getSourceClientOffset.bind(this),this.handleTopDragStart=this.handleTopDragStart.bind(this),this.handleTopDragStartCapture=this.handleTopDragStartCapture.bind(this),this.handleTopDragEndCapture=this.handleTopDragEndCapture.bind(this),this.handleTopDragEnter=this.handleTopDragEnter.bind(this),this.handleTopDragEnterCapture=this.handleTopDragEnterCapture.bind(this),this.handleTopDragLeaveCapture=this.handleTopDragLeaveCapture.bind(this),this.handleTopDragOver=this.handleTopDragOver.bind(this),this.handleTopDragOverCapture=this.handleTopDragOverCapture.bind(this),this.handleTopDrop=this.handleTopDrop.bind(this),this.handleTopDropCapture=this.handleTopDropCapture.bind(this),this.handleSelectStart=this.handleSelectStart.bind(this),this.endDragIfSourceWasRemovedFromDOM=this.endDragIfSourceWasRemovedFromDOM.bind(this),this.endDragNativeItem=this.endDragNativeItem.bind(this),this.asyncEndDragNativeItem=this.asyncEndDragNativeItem.bind(this)}return i(e,[{key:"setup",value:function(){if(void 0!==this.window){if(this.window.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");this.window.__isReactDndBackendSetUp=!0,this.addEventListeners(this.window)}}},{key:"teardown",value:function(){void 0!==this.window&&(this.window.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.window),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId&&this.window.cancelAnimationFrame(this.asyncEndDragFrameId))}},{key:"addEventListeners",value:function(e){e.addEventListener("dragstart",this.handleTopDragStart),e.addEventListener("dragstart",this.handleTopDragStartCapture,!0),e.addEventListener("dragend",this.handleTopDragEndCapture,!0),e.addEventListener("dragenter",this.handleTopDragEnter),e.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.addEventListener("dragover",this.handleTopDragOver),e.addEventListener("dragover",this.handleTopDragOverCapture,!0),e.addEventListener("drop",this.handleTopDrop),e.addEventListener("drop",this.handleTopDropCapture,!0)}},{key:"removeEventListeners",value:function(e){e.removeEventListener("dragstart",this.handleTopDragStart),e.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),e.removeEventListener("dragend",this.handleTopDragEndCapture,!0),e.removeEventListener("dragenter",this.handleTopDragEnter),e.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.removeEventListener("dragover",this.handleTopDragOver),e.removeEventListener("dragover",this.handleTopDragOverCapture,!0),e.removeEventListener("drop",this.handleTopDrop),e.removeEventListener("drop",this.handleTopDropCapture,!0)}},{key:"connectDragPreview",value:function(e,t,n){var r=this;return this.sourcePreviewNodeOptions[e]=n,this.sourcePreviewNodes[e]=t,function(){delete r.sourcePreviewNodes[e],delete r.sourcePreviewNodeOptions[e]}}},{key:"connectDragSource",value:function(e,t,n){var r=this;this.sourceNodes[e]=t,this.sourceNodeOptions[e]=n;var o=function(t){return r.handleDragStart(t,e)},a=function(t){return r.handleSelectStart(t,e)};return t.setAttribute("draggable",!0),t.addEventListener("dragstart",o),t.addEventListener("selectstart",a),function(){delete r.sourceNodes[e],delete r.sourceNodeOptions[e],t.removeEventListener("dragstart",o),t.removeEventListener("selectstart",a),t.setAttribute("draggable",!1)}}},{key:"connectDropTarget",value:function(e,t){var n=this,r=function(t){return n.handleDragEnter(t,e)},o=function(t){return n.handleDragOver(t,e)},a=function(t){return n.handleDrop(t,e)};return t.addEventListener("dragenter",r),t.addEventListener("dragover",o),t.addEventListener("drop",a),function(){t.removeEventListener("dragenter",r),t.removeEventListener("dragover",o),t.removeEventListener("drop",a)}}},{key:"getCurrentSourceNodeOptions",value:function(){var e=this.monitor.getSourceId(),t=this.sourceNodeOptions[e];return(0,c.default)(t||{},{dropEffect:this.altKeyPressed?"copy":"move"})}},{key:"getCurrentDropEffect",value:function(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}},{key:"getCurrentSourcePreviewNodeOptions",value:function(){var e=this.monitor.getSourceId(),t=this.sourcePreviewNodeOptions[e];return(0,c.default)(t||{},{anchorX:.5,anchorY:.5,captureDraggingState:!1})}},{key:"getSourceClientOffset",value:function(e){return(0,h.getNodeClientOffset)(this.sourceNodes[e])}},{key:"isDraggingNativeItem",value:function(){var e=this.monitor.getItemType();return Object.keys(y).some(function(t){return y[t]===e})}},{key:"beginDragNativeItem",value:function(e){this.clearCurrentDragSourceNode();var t=(0,g.createNativeDragSource)(e);this.currentNativeSource=new t,this.currentNativeHandle=this.registry.addSource(e,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle]),(0,p.isFirefox)()&&this.window.addEventListener("mouseover",this.asyncEndDragNativeItem,!0)}},{key:"asyncEndDragNativeItem",value:function(){this.asyncEndDragFrameId=this.window.requestAnimationFrame(this.endDragNativeItem),(0,p.isFirefox)()&&(this.window.removeEventListener("mouseover",this.asyncEndDragNativeItem,!0),this.enterLeaveCounter.reset())}},{key:"endDragNativeItem",value:function(){this.isDraggingNativeItem()&&(this.actions.endDrag(),this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)}},{key:"endDragIfSourceWasRemovedFromDOM",value:function(){var e=this.currentDragSourceNode;document.body.contains(e)||this.clearCurrentDragSourceNode()&&this.actions.endDrag()}},{key:"setCurrentDragSourceNode",value:function(e){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=e,this.currentDragSourceNodeOffset=(0,h.getNodeClientOffset)(e),this.currentDragSourceNodeOffsetChanged=!1,this.window.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)}},{key:"clearCurrentDragSourceNode",value:function(){return!!this.currentDragSourceNode&&(this.currentDragSourceNode=null,this.currentDragSourceNodeOffset=null,this.currentDragSourceNodeOffsetChanged=!1,this.window.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0),!0)}},{key:"checkIfCurrentDragSourceRectChanged",value:function(){var e=this.currentDragSourceNode;return!!e&&(!!this.currentDragSourceNodeOffsetChanged||(this.currentDragSourceNodeOffsetChanged=!(0,f.default)((0,h.getNodeClientOffset)(e),this.currentDragSourceNodeOffset),this.currentDragSourceNodeOffsetChanged))}},{key:"handleTopDragStartCapture",value:function(){this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]}},{key:"handleDragStart",value:function(e,t){this.dragStartSourceIds.unshift(t)}},{key:"handleTopDragStart",value:function(e){var t=this,n=this.dragStartSourceIds;this.dragStartSourceIds=null;var r=(0,h.getEventClientOffset)(e);this.actions.beginDrag(n,{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:r});var o=e.dataTransfer,a=(0,g.matchNativeItemType)(o);if(this.monitor.isDragging()){if("function"==typeof o.setDragImage){var i=this.monitor.getSourceId(),u=this.sourceNodes[i],c=this.sourcePreviewNodes[i]||u,s=this.getCurrentSourcePreviewNodeOptions(),f=s.anchorX,l=s.anchorY,d={anchorX:f,anchorY:l},p=(0,h.getDragPreviewOffset)(u,c,r,d);o.setDragImage(c,p.x,p.y)}try{o.setData("application/json",{})}catch(e){}this.setCurrentDragSourceNode(e.target);var v=this.getCurrentSourcePreviewNodeOptions(),y=v.captureDraggingState;y?this.actions.publishDragSource():setTimeout(function(){return t.actions.publishDragSource()})}else if(a)this.beginDragNativeItem(a);else{if(!(o.types||e.target.hasAttribute&&e.target.hasAttribute("draggable")))return;e.preventDefault()}}},{key:"handleTopDragEndCapture",value:function(){this.clearCurrentDragSourceNode()&&this.actions.endDrag()}},{key:"handleTopDragEnterCapture",value:function(e){this.dragEnterTargetIds=[];var t=this.enterLeaveCounter.enter(e.target);if(t&&!this.monitor.isDragging()){var n=e.dataTransfer,r=(0,g.matchNativeItemType)(n);r&&this.beginDragNativeItem(r)}}},{key:"handleDragEnter",value:function(e,t){this.dragEnterTargetIds.unshift(t)}},{key:"handleTopDragEnter",value:function(e){var t=this,n=this.dragEnterTargetIds;if(this.dragEnterTargetIds=[],this.monitor.isDragging()){this.altKeyPressed=e.altKey,(0,p.isFirefox)()||this.actions.hover(n,{clientOffset:(0,h.getEventClientOffset)(e)});var r=n.some(function(e){return t.monitor.canDropOnTarget(e)});r&&(e.preventDefault(),e.dataTransfer.dropEffect=this.getCurrentDropEffect())}}},{key:"handleTopDragOverCapture",value:function(){this.dragOverTargetIds=[]}},{key:"handleDragOver",value:function(e,t){this.dragOverTargetIds.unshift(t)}},{key:"handleTopDragOver",value:function(e){var t=this,n=this.dragOverTargetIds;if(this.dragOverTargetIds=[],!this.monitor.isDragging())return e.preventDefault(),void(e.dataTransfer.dropEffect="none");this.altKeyPressed=e.altKey,this.actions.hover(n,{clientOffset:(0,h.getEventClientOffset)(e)});var r=n.some(function(e){return t.monitor.canDropOnTarget(e)});r?(e.preventDefault(),e.dataTransfer.dropEffect=this.getCurrentDropEffect()):this.isDraggingNativeItem()?(e.preventDefault(),e.dataTransfer.dropEffect="none"):this.checkIfCurrentDragSourceRectChanged()&&(e.preventDefault(),e.dataTransfer.dropEffect="move")}},{key:"handleTopDragLeaveCapture",value:function(e){this.isDraggingNativeItem()&&e.preventDefault();var t=this.enterLeaveCounter.leave(e.target);t&&this.isDraggingNativeItem()&&this.endDragNativeItem()}},{key:"handleTopDropCapture",value:function(e){this.dropTargetIds=[],e.preventDefault(),this.isDraggingNativeItem()&&this.currentNativeSource.mutateItemByReadingDataTransfer(e.dataTransfer),this.enterLeaveCounter.reset()}},{key:"handleDrop",value:function(e,t){this.dropTargetIds.unshift(t)}},{key:"handleTopDrop",value:function(e){var t=this.dropTargetIds;this.dropTargetIds=[],this.actions.hover(t,{clientOffset:(0,h.getEventClientOffset)(e)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.endDragIfSourceWasRemovedFromDOM()}},{key:"handleSelectStart",value:function(e){var t=e.target;"function"==typeof t.dragDrop&&("INPUT"===t.tagName||"SELECT"===t.tagName||"TEXTAREA"===t.tagName||t.isContentEditable||(e.preventDefault(),t.dragDrop()))}},{key:"window",get:function(){return this.context&&this.context.window?this.context.window:"undefined"!=typeof window?window:void 0}}]),e}();t.default=b},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t,r){n(this,e);for(var o=t.length,a=[],i=0;i<o;i++)a.push(i);a.sort(function(e,n){return t[e]<t[n]?-1:1});for(var u=[],c=[],s=[],f=void 0,l=void 0,d=0;d<o-1;d++)f=t[d+1]-t[d],l=r[d+1]-r[d],c.push(f),u.push(l),s.push(l/f);for(var p=[s[0]],h=0;h<c.length-1;h++){var g=s[h],v=s[h+1];if(g*v<=0)p.push(0);else{f=c[h];var y=c[h+1],b=f+y;p.push(3*b/((b+y)/g+(b+f)/v))}}p.push(s[s.length-1]);for(var m=[],O=[],D=void 0,_=0;_<p.length-1;_++){D=s[_];var w=p[_],x=1/c[_],C=w+p[_+1]-D-D;m.push((D-w-C)*x),O.push(C*x*x)}this.xs=t,this.ys=r,this.c1s=p,this.c2s=m,this.c3s=O}return r(e,[{key:"interpolate",value:function(e){var t=this.xs,n=this.ys,r=this.c1s,o=this.c2s,a=this.c3s,i=t.length-1;if(e===t[i])return n[i];for(var u=0,c=a.length-1,s=void 0;u<=c;){s=Math.floor(.5*(u+c));var f=t[s];if(f<e)u=s+1;else{if(!(f>e))return n[s];c=s-1}}i=Math.max(0,c);var l=e-t[i],d=l*l;return n[i]+r[i]*l+o[i]*d+a[i]*l*d}}]),e}();t.default=o},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e,t){for(var n in t){var r=t[n];r.configurable=r.enumerable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,n,r)}return e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t,n){var r=t.reduce(function(t,n){return t||e.getData(n)},null);return null!=r?r:n}function c(e){var t=h[e],n=t.exposeProperty,r=t.matchesTypes,i=t.getData;return function(){function e(){var t,r;a(this,e),this.item=(t={},r={},r[n]=r[n]||{},r[n].get=function(){return console.warn("Browser doesn't allow reading \""+n+'" until the drop event.'),null},o(t,r),t)}return l(e,[{key:"mutateItemByReadingDataTransfer",value:function(e){delete this.item[n],this.item[n]=i(e,r)}},{key:"canDrag",value:function(){return!0}},{key:"beginDrag",value:function(){return this.item}},{key:"isDragging",value:function(e,t){return t===e.getSourceId()}},{key:"endDrag",value:function(){}}]),e}()}function s(e){var t=Array.prototype.slice.call(e.types||[]);return Object.keys(h).filter(function(e){var n=h[e].matchesTypes;return n.some(function(e){return t.indexOf(e)>-1})})[0]||null}Object.defineProperty(t,"__esModule",{value:!0});var f,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.createNativeDragSource=c,t.matchNativeItemType=s;var d=n(31),p=r(d),h=(f={},i(f,p.FILE,{exposeProperty:"files",matchesTypes:["Files"],getData:function(e){return Array.prototype.slice.call(e.files)}}),i(f,p.URL,{exposeProperty:"urls",matchesTypes:["Url","text/uri-list"],getData:function(e,t){return u(e,t,"").split("\n")}}),i(f,p.TEXT,{exposeProperty:"text",matchesTypes:["Text","text/plain"],getData:function(e,t){return u(e,t,"")}}),f)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.nodeType===f?e:e.parentElement;if(!t)return null;var n=t.getBoundingClientRect(),r=n.top,o=n.left;return{x:o,y:r}}function a(e){return{x:e.clientX,y:e.clientY}}function i(e,t,n,r){var a="IMG"===t.nodeName&&((0,u.isFirefox)()||!document.documentElement.contains(t)),i=a?e:t,c=o(i),f={x:n.x-c.x,y:n.y-c.y},l=e.offsetWidth,d=e.offsetHeight,p=r.anchorX,h=r.anchorY,g=a?t.width:l,v=a?t.height:d;(0,u.isSafari)()&&a&&(v/=window.devicePixelRatio,g/=window.devicePixelRatio);var y=new s.default([0,.5,1],[f.x,f.x/l*g,f.x+g-l]),b=new s.default([0,.5,1],[f.y,f.y/d*v,f.y+v-d]),m=y.interpolate(p),O=b.interpolate(h);return(0,u.isSafari)()&&a&&(O+=(window.devicePixelRatio-1)*v),{x:m,y:O}}Object.defineProperty(t,"__esModule",{value:!0}),t.getNodeClientOffset=o,t.getEventClientOffset=a,t.getDragPreviewOffset=i;var u=n(55),c=n(166),s=r(c),f=1},function(e,t){"use strict";function n(){return r||(r=new Image,r.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var r=void 0},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return new u.default(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.getEmptyImage=t.NativeTypes=void 0,t.default=a;var i=n(165),u=o(i),c=n(169),s=o(c),f=n(31),l=r(f);t.NativeTypes=l,t.getEmptyImage=s.default},function(e,t){"use strict";function n(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=Object.prototype.hasOwnProperty,a=0;a<n.length;a+=1){if(!o.call(t,n[a])||e[n[a]]!==t[n[a]])return!1;var i=e[n[a]],u=t[n[a]];if(i!==u)return!1}return!0}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,c,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(2),l=n(3),d=r(l),p=n(56),h=(c=u=function(e){function t(e,n){o(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.backend=(0,p.unpackBackendForEs5Users)(e.backend),r}return i(t,e),s(t,[{key:"getChildContext",value:function(){var e=this,t=function(){return e.props&&e.props.window?e.props.window:e.context&&e.context.window?e.context.window:"undefined"!=typeof window?window:void 0};return(0,p.createChildContext)(this.backend,{window:t()})}},{key:"render",value:function(){return f.Children.only(this.props.children)}}]),t}(f.Component),u.propTypes={backend:d.default.oneOfType([d.default.func,d.default.object]).isRequired,children:d.default.element.isRequired,window:d.default.object},u.defaultProps={window:void 0},u.childContextTypes=p.CHILD_CONTEXT_TYPES,u.displayName="DragDropContextProvider",u.contextTypes={window:d.default.object},c);t.default=h},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return E.default.apply(void 0,["DragLayer","collect[, options]"].concat(Array.prototype.slice.call(arguments))),(0,O.default)("function"==typeof e,'Expected "collect" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ',"Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html",e),(0,O.default)((0,b.default)(t),'Expected "options" provided as the second argument to DragLayer to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html',t),function(n){var r,u,p=t.arePropsEqual,g=void 0===p?x.default:p,y=n.displayName||n.name||"Component",b=(u=r=function(t){function r(e,t){o(this,r);var n=a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return n.handleChange=n.handleChange.bind(n),n.manager=t.dragDropManager,(0,O.default)("object"===s(n.manager),"Could not find the drag and drop manager in the context of %s. Make sure to wrap the top-level component of your app with DragDropContext. Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context",y,y),n.state=n.getCurrentState(),n}return i(r,t),f(r,[{key:"getDecoratedComponentInstance",value:function(){return(0,O.default)(this.child,"In order to access an instance of the decorated component it can not be a stateless component."),this.child}},{key:"shouldComponentUpdate",value:function(e,t){return!g(e,this.props)||!(0,_.default)(t,this.state)}}]),f(r,[{key:"componentDidMount",value:function(){this.isCurrentlyMounted=!0;var e=this.manager.getMonitor();this.unsubscribeFromOffsetChange=e.subscribeToOffsetChange(this.handleChange),this.unsubscribeFromStateChange=e.subscribeToStateChange(this.handleChange),this.handleChange()}},{key:"componentWillUnmount",value:function(){this.isCurrentlyMounted=!1,this.unsubscribeFromOffsetChange(),this.unsubscribeFromStateChange()}},{key:"handleChange",value:function(){if(this.isCurrentlyMounted){var e=this.getCurrentState();(0,_.default)(e,this.state)||this.setState(e)}}},{key:"getCurrentState",value:function(){var t=this.manager.getMonitor();return e(t)}},{key:"render",value:function(){var e=this;return d.default.createElement(n,c({},this.props,this.state,{ref:function(t){return e.child=t}}))}}]),r}(l.Component),r.DecoratedComponent=n,r.displayName="DragLayer("+y+")",r.contextTypes={dragDropManager:h.default.object.isRequired},u);return(0,v.default)(b,n)}}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),
Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=u;var l=n(2),d=r(l),p=n(3),h=r(p),g=n(22),v=r(g),y=n(5),b=r(y),m=n(1),O=r(m),D=n(33),_=r(D),w=n(60),x=r(w),C=n(19),E=r(C)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};f.default.apply(void 0,["DragSource","type, spec, collect[, options]"].concat(Array.prototype.slice.call(arguments)));var o=e;"function"!=typeof e&&((0,i.default)((0,_.default)(e),'Expected "type" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html',e),o=function(){return e}),(0,i.default)((0,c.default)(t),'Expected "spec" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html',t);var a=(0,v.default)(t);return(0,i.default)("function"==typeof n,'Expected "collect" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html',n),(0,i.default)((0,c.default)(r),'Expected "options" provided as the fourth argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html',n),function(e){return(0,d.default)({connectBackend:function(e,t){return e.connectDragSource(t)},containerDisplayName:"DragSource",createHandler:a,registerHandler:h.default,createMonitor:b.default,createConnector:O.default,DecoratedComponent:e,getType:o,collect:n,options:r})}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var a=n(1),i=r(a),u=n(5),c=r(u),s=n(19),f=r(s),l=n(58),d=r(l),p=n(182),h=r(p),g=n(177),v=r(g),y=n(178),b=r(y),m=n(176),O=r(m),D=n(59),_=r(D)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};f.default.apply(void 0,["DropTarget","type, spec, collect[, options]"].concat(Array.prototype.slice.call(arguments)));var o=e;"function"!=typeof e&&((0,i.default)((0,_.default)(e,!0),'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html',e),o=function(){return e}),(0,i.default)((0,c.default)(t),'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html',t);var a=(0,v.default)(t);return(0,i.default)("function"==typeof n,'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html',n),(0,i.default)((0,c.default)(r),'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html',n),function(e){return(0,d.default)({connectBackend:function(e,t){return e.connectDropTarget(t)},containerDisplayName:"DropTarget",createHandler:a,registerHandler:h.default,createMonitor:b.default,createConnector:O.default,DecoratedComponent:e,getType:o,collect:n,options:r})}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var a=n(1),i=r(a),u=n(5),c=r(u),s=n(19),f=r(s),l=n(58),d=r(l),p=n(183),h=r(p),g=n(180),v=r(g),y=n(181),b=r(y),m=n(179),O=r(m),D=n(59),_=r(D)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){function t(){s&&(s(),s=null),o&&a&&(s=e.connectDragSource(o,a,u))}function n(){d&&(d(),d=null),o&&f&&(d=e.connectDragPreview(o,f,l))}function r(e){e!==o&&(o=e,t(),n())}var o=void 0,a=void 0,u=void 0,s=void 0,f=void 0,l=void 0,d=void 0,p=(0,i.default)({dragSource:function(e,n){e===a&&(0,c.default)(n,u)||(a=e,u=n,t())},dragPreview:function(e,t){e===f&&(0,c.default)(t,l)||(f=e,l=t,n())}});return{receiveHandlerId:r,hooks:p}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var a=n(61),i=r(a),u=n(57),c=r(u)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e){Object.keys(e).forEach(function(t){(0,c.default)(f.indexOf(t)>-1,'Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html',f.join(", "),t),(0,c.default)("function"==typeof e[t],"Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html",t,t,e[t])}),l.forEach(function(t){(0,c.default)("function"==typeof e[t],"Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html",t,t,e[t])});var t=function(){function t(e){o(this,t),this.monitor=e,this.props=null,this.component=null}return i(t,[{key:"receiveProps",value:function(e){this.props=e}},{key:"receiveComponent",value:function(e){this.component=e}},{key:"canDrag",value:function(){return!e.canDrag||e.canDrag(this.props,this.monitor)}},{key:"isDragging",value:function(t,n){return e.isDragging?e.isDragging(this.props,this.monitor):n===t.getSourceId()}},{key:"beginDrag",value:function(){var t=e.beginDrag(this.props,this.monitor,this.component);return t}},{key:"endDrag",value:function(){e.endDrag&&e.endDrag(this.props,this.monitor,this.component)}}]),t}();return function(e){return new t(e)}}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=a;var u=n(1),c=r(u),s=n(5),f=(r(s),["canDrag","beginDrag","isDragging","endDrag"]),l=["beginDrag"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e){return new l(e)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=a;var u=n(1),c=r(u),s=!1,f=!1,l=function(){function e(t){o(this,e),this.internalMonitor=t.getMonitor()}return i(e,[{key:"receiveHandlerId",value:function(e){this.sourceId=e}},{key:"canDrag",value:function(){(0,c.default)(!s,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html");try{return s=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{s=!1}}},{key:"isDragging",value:function(){(0,c.default)(!f,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html");try{return f=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{f=!1}}},{key:"getItemType",value:function(){return this.internalMonitor.getItemType()}},{key:"getItem",value:function(){return this.internalMonitor.getItem()}},{key:"getDropResult",value:function(){return this.internalMonitor.getDropResult()}},{key:"didDrop",value:function(){return this.internalMonitor.didDrop()}},{key:"getInitialClientOffset",value:function(){return this.internalMonitor.getInitialClientOffset()}},{key:"getInitialSourceClientOffset",value:function(){return this.internalMonitor.getInitialSourceClientOffset()}},{key:"getSourceClientOffset",value:function(){return this.internalMonitor.getSourceClientOffset()}},{key:"getClientOffset",value:function(){return this.internalMonitor.getClientOffset()}},{key:"getDifferenceFromInitialOffset",value:function(){return this.internalMonitor.getDifferenceFromInitialOffset()}}]),e}()},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){function t(){u&&(u(),u=null),r&&o&&(u=e.connectDropTarget(r,o,a))}function n(e){e!==r&&(r=e,t())}var r=void 0,o=void 0,a=void 0,u=void 0,s=(0,i.default)({dropTarget:function(e,n){e===o&&(0,c.default)(n,a)||(o=e,a=n,t())}});return{receiveHandlerId:n,hooks:s}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var a=n(61),i=r(a),u=n(57),c=r(u)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e){Object.keys(e).forEach(function(t){(0,c.default)(f.indexOf(t)>-1,'Expected the drop target specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html',f.join(", "),t),(0,c.default)("function"==typeof e[t],"Expected %s in the drop target specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html",t,t,e[t])});var t=function(){function t(e){o(this,t),this.monitor=e,this.props=null,this.component=null}return i(t,[{key:"receiveProps",value:function(e){this.props=e}},{key:"receiveMonitor",value:function(e){this.monitor=e}},{key:"receiveComponent",value:function(e){this.component=e}},{key:"canDrop",value:function(){return!e.canDrop||e.canDrop(this.props,this.monitor)}},{key:"hover",value:function(){e.hover&&e.hover(this.props,this.monitor,this.component)}},{key:"drop",value:function(){if(e.drop){var t=e.drop(this.props,this.monitor,this.component);return t}}}]),t}();return function(e){return new t(e)}}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=a;var u=n(1),c=r(u),s=n(5),f=(r(s),["canDrop","hover","drop"])},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e){return new f(e)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=a;var u=n(1),c=r(u),s=!1,f=function(){function e(t){o(this,e),this.internalMonitor=t.getMonitor()}return i(e,[{key:"receiveHandlerId",value:function(e){this.targetId=e}},{key:"canDrop",value:function(){(0,c.default)(!s,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs-drop-target-monitor.html");try{return s=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{s=!1}}},{key:"isOver",value:function(e){return this.internalMonitor.isOverTarget(this.targetId,e)}},{key:"getItemType",value:function(){return this.internalMonitor.getItemType()}},{key:"getItem",value:function(){return this.internalMonitor.getItem()}},{key:"getDropResult",value:function(){return this.internalMonitor.getDropResult()}},{key:"didDrop",value:function(){return this.internalMonitor.didDrop()}},{key:"getInitialClientOffset",value:function(){return this.internalMonitor.getInitialClientOffset()}},{key:"getInitialSourceClientOffset",value:function(){return this.internalMonitor.getInitialSourceClientOffset()}},{key:"getSourceClientOffset",value:function(){return this.internalMonitor.getSourceClientOffset()}},{key:"getClientOffset",value:function(){return this.internalMonitor.getClientOffset()}},{key:"getDifferenceFromInitialOffset",value:function(){return this.internalMonitor.getDifferenceFromInitialOffset()}}]),e}()},function(e,t){"use strict";function n(e,t,n){function r(){o.removeSource(a)}var o=n.getRegistry(),a=o.addSource(e,t);return{handlerId:a,unregister:r}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t){"use strict";function n(e,t,n){function r(){o.removeTarget(a)}var o=n.getRegistry(),a=o.addTarget(e,t);return{handlerId:a,unregister:r}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=e.ref;return(0,i.default)("string"!=typeof n,"Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute"),n?(0,u.cloneElement)(e,{ref:function(e){t(e),n&&n(e)}}):(0,u.cloneElement)(e,{ref:t})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var a=n(1),i=r(a),u=n(2)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){function r(){y===v&&(y=v.slice())}function a(){return g}function u(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return r(),y.push(e),function(){if(t){t=!1,r();var n=y.indexOf(e);y.splice(n,1)}}}function f(e){if(!(0,i.default)(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(b)throw new Error("Reducers may not dispatch actions.");try{b=!0,g=h(g,e)}finally{b=!1}for(var t=v=y,n=0;n<t.length;n++){var r=t[n];r()}return e}function l(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");h=e,f({type:s.INIT})}function d(){var e,t=u;return e={subscribe:function(e){function n(){e.next&&e.next(a())}if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");n();var r=t(n);return{unsubscribe:r}}},e[c.default]=function(){return this},e}var p;if("function"==typeof t&&"undefined"==typeof n&&(n=t,t=void 0),"undefined"!=typeof n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(o)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var h=e,g=t,v=[],y=v,b=!1;return f({type:s.INIT}),p={dispatch:f,subscribe:u,getState:a,replaceReducer:l},p[c.default]=d,p}t.__esModule=!0,t.ActionTypes=void 0,t.default=o;var a=n(5),i=r(a),u=n(186),c=r(u),s=t.ActionTypes={INIT:"@@redux/INIT"}},function(e,t,n){e.exports=n(187)},function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(188),i=r(a);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:e;var u=(0,i.default)(o);t.default=u}).call(t,n(34)(e))},function(e,t){"use strict";function n(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,n){e.exports=t}])});
//# sourceMappingURL=lib.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),

/***/ 54:
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

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(3);
var ReactDOM = __webpack_require__(20);
var DOMFactories = __webpack_require__(244);
var PropTypes = __webpack_require__(28);
var ExecutionEnvironment = __webpack_require__(371);
var ModalPortal = React.createFactory(__webpack_require__(564));
var ariaAppHider = __webpack_require__(565);
var refCount = __webpack_require__(567);
var elementClass = __webpack_require__(370);
var renderSubtreeIntoContainer = __webpack_require__(20).unstable_renderSubtreeIntoContainer;
var Assign = __webpack_require__(54);
var createReactClass = __webpack_require__(222);

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

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(3);
var DOMFactories = __webpack_require__(244);
var focusManager = __webpack_require__(566);
var scopeTab = __webpack_require__(568);
var Assign = __webpack_require__(54);
var createReactClass = __webpack_require__(222);

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

/***/ 565:
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

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

var findTabbable = __webpack_require__(267);
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

/***/ 567:
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

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

var findTabbable = __webpack_require__(267);

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

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(367);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(38)(content, {});
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

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(369);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(38)(content, {});
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

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _react = __webpack_require__(3);

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(20);

var ReactDOM = _interopRequireWildcard(_reactDom);

var _Dashboard = __webpack_require__(275);

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _BaseWidget = __webpack_require__(274);

var _BaseWidget2 = _interopRequireDefault(_BaseWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

global.Dashboard = _Dashboard2.default;
global.BaseWidget = _BaseWidget2.default;
global.React = React;
global.ReactDOM = ReactDOM;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(563);



/***/ }),

/***/ 99:
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

/***/ })

},[600]);