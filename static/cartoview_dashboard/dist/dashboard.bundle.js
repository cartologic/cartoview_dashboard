webpackJsonp([2],{

/***/ 194:
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

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(348);



/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _FieldSet2 = __webpack_require__(7);

var _FieldSet3 = _interopRequireDefault(_FieldSet2);

var _ConfigManager = __webpack_require__(30);

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

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDazzle = __webpack_require__(347);

var _reactDazzle2 = _interopRequireDefault(_reactDazzle);

var _Header = __webpack_require__(242);

var _Header2 = _interopRequireDefault(_Header);

var _EditBar = __webpack_require__(241);

var _EditBar2 = _interopRequireDefault(_EditBar);

var _Container = __webpack_require__(238);

var _Container2 = _interopRequireDefault(_Container);

var _AddWidgetDialog = __webpack_require__(237);

var _AddWidgetDialog2 = _interopRequireDefault(_AddWidgetDialog);

var _CustomFrame = __webpack_require__(239);

var _CustomFrame2 = _interopRequireDefault(_CustomFrame);

var _ConfigManager = __webpack_require__(30);

var _ConfigManager2 = _interopRequireDefault(_ConfigManager);

var _DashboardToolbar = __webpack_require__(240);

var _DashboardToolbar2 = _interopRequireDefault(_DashboardToolbar);

var _WidgetConfigDialog = __webpack_require__(244);

var _WidgetConfigDialog2 = _interopRequireDefault(_WidgetConfigDialog);

__webpack_require__(423);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// App components


// Default styes of dazzle.


// Our styles
//import '../styles/custom.css';


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
      widgets: widgets, layout: layout, editable: editable, isOwner: isOwner, isNew: isNew, title: title, abstract: abstract,
      addWidgetDialogOpen: false,
      addWidgetOptions: null
    };
    console.log(_this.state);
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
    return _jsx(_Container2.default, {}, void 0, _jsx(_AddWidgetDialog2.default, {
      widgets: this.state.widgets,
      isOpen: this.state.addWidgetDialogOpen,
      onRequestClose: this.onRequestClose,
      onWidgetSelect: this.handleWidgetSelection
    }), _jsx(_WidgetConfigDialog2.default, {
      isOpen: this.state.widgetConfigDialogOpen,
      widgetId: this.state.configWidgetId
    }), _react2.default.createElement(_Header2.default, { editable: this.state.editable, title: this.state.title, abstract: this.state.abstract, ref: 'header' }), _jsx(_DashboardToolbar2.default, {
      isNew: this.state.isNew,
      editable: this.state.editable,
      isOwner: this.state.isOwner
    }), _jsx(_reactDazzle2.default, {
      frameComponent: _CustomFrame2.default,
      onRemove: this.onRemove,
      layout: this.state.layout,
      widgets: this.state.widgets,
      editable: this.state.editable,
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
    console.debug(id);
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

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactModal = __webpack_require__(195);

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

/***/ 238:
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
  }, void 0, children));
};

Container.propTypes = {
  children: _react.PropTypes.array
};

exports.default = Container;

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _ConfigManager = __webpack_require__(30);

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
// CustomFrame.childContextTypes = {
//   onRemove: PropTypes.func,
//   editable: PropTypes.bool,
//   title: PropTypes.string,
// };
exports.default = CustomFrame;

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _ConfigManager = __webpack_require__(30);

var _ConfigManager2 = _interopRequireDefault(_ConfigManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DashboardToolbar = function (_React$Component) {
  _inherits(DashboardToolbar, _React$Component);

  function DashboardToolbar() {
    _classCallCheck(this, DashboardToolbar);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  DashboardToolbar.prototype.render = function render() {
    var _props = this.props,
        editable = _props.editable,
        isOwner = _props.isOwner,
        isNew = _props.isNew;

    var configManager = this.context.configManager;
    if (!editable && !isOwner) return null;
    var editBtn = _jsx('a', {
      className: 'btn btn-danger btn-lg btn-edit-db',
      href: '../edit/',
      title: 'Edit Dashboard'
    }, void 0, _jsx('i', {
      className: 'glyphicon glyphicon-pencil'
    }));
    var saveBtn = _jsx('button', {
      className: 'btn btn-danger btn-lg btn-save-db',
      title: 'Save Dashboard',
      onClick: function onClick(e) {
        e.preventDefault();configManager.save();
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

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditBar = function EditBar(_ref) {
  var onEdit = _ref.onEdit;

  return _jsx("div", {
    className: "row edit-bar"
  }, void 0, _jsx("div", {
    className: "col-sm-12 text-right"
  }, void 0, _jsx("button", {
    type: "button",
    className: "btn btn-default btn-xs",
    onClick: onEdit
  }, void 0, _jsx("span", {
    className: "glyphicon glyphicon-pencil",
    "aria-hidden": "true"
  }), "Edit")));
};

EditBar.propTypes = {
  onEdit: _react.PropTypes.func
};

exports.default = EditBar;

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _FieldSet = __webpack_require__(7);

var _FieldSet2 = _interopRequireDefault(_FieldSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Header.prototype.render = function render() {
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
    return _jsx('header', {
      className: 'dashboard-header col-md-12'
    }, void 0, _jsx('h1', {}, void 0, title), _jsx('p', {}, void 0, abstract));
  };

  Header.prototype.getData = function getData() {
    return this.refs.headerForm.getData();
  };

  return Header;
}(_react2.default.Component);

exports.default = Header;

/***/ }),

/***/ 243:
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

var _reactModal = __webpack_require__(195);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _Constants = __webpack_require__(79);

var _Constants2 = _interopRequireDefault(_Constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _Constants = __webpack_require__(79);

var _Modal = __webpack_require__(243);

var _Modal2 = _interopRequireDefault(_Modal);

var _ConfigManager = __webpack_require__(30);

var _ConfigManager2 = _interopRequireDefault(_ConfigManager);

var _FieldSet = __webpack_require__(7);

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

/***/ 30:
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

      var config = { title: title, abstract: abstract, config: JSON.stringify({ widgets: widgetsConfig, layout: layout }) };
      saveDashboard(config);
    };

    this.dashboard = dashboard;
  }

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

  return ConfigManager;
}();

exports.default = ConfigManager;

/***/ }),

/***/ 31:
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

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, ".defaultWidgetFrame {\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\tmargin-bottom: 10px;\r\n\tpadding: 10px 17px;\r\n\tdisplay: inline-block;\r\n\tbackground: #fff;\r\n\tborder: 1px solid #E6E9ED;\r\n}\r\n\r\n.defaultWidgetFrameHeader {\r\n\tborder-bottom: 2px solid #E6E9ED;\r\n\tpadding: 1px 5px 6px;\r\n\tmargin-bottom: 10px;\r\n\theight: 35px;\r\n}\r\n\r\n.defaultWidgetFrameHeader .title {\r\n\tfont-size: 18px;\r\n  float: left;\r\n  display: block;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\n.defaultWidgetFrameHeader .remove {\r\n\tfloat: right;\r\n\tfont-size: 11px;\r\n\tcursor: pointer;\r\n\ttext-decoration: none;\r\n\tmargin-top: 5px;\r\n}\r\n\r\n.add-widget-button {\r\n\tpadding: 10px;\r\n\ttext-align: center;\r\n\tborder: 1px dotted #DCDCDC;\r\n\tmargin-bottom: 10px;\r\n\tcursor: pointer;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.add-widget-link {\r\n\ttext-decoration: none;\r\n}\r\n\r\n.editable-column {\r\n\tborder: 1px dotted #8C8080;\r\n\tpadding: 10px;\r\n}\r\n\r\n.droppable-column {\r\n\tbackground-color: #E7E7E7;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 315:
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

/***/ 316:
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

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?module.exports=t(__webpack_require__(3),__webpack_require__(16)):"function"==typeof define&&define.amd?define("dazzle",["react","react-dom"],t):"object"==typeof exports?exports.dazzle=t(require("react"),require("react-dom")):e.dazzle=t(e.react,e["react-dom"])}(this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){e.exports=r(68)},function(e,t,r){"use strict";var n=function(e,t,r,n,o,i,a,u){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,o,i,a,u],f=0;s=new Error(t.replace(/%s/g,function(){return c[f++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}};e.exports=n},function(t,r){t.exports=e},function(e,t){var r=Array.isArray;e.exports=r},function(e,t,r){function n(e){if(!a(e)||o(e)!=u)return!1;var t=i(e);if(null===t)return!0;var r=l.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&f.call(r)==d}var o=r(12),i=r(113),a=r(8),u="[object Object]",s=Function.prototype,c=Object.prototype,f=s.toString,l=c.hasOwnProperty,d=f.call(Object);e.exports=n},function(e,t,r){function n(e,t){return a(i(e,t,o),e+"")}var o=r(48),i=r(140),a=r(143);e.exports=n},function(e,t,r){var n=r(45),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();e.exports=i},function(e,t){function r(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=r},function(e,t){function r(e){return null!=e&&"object"==typeof e}e.exports=r},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=t.publishSource,n=void 0===r||r,o=t.clientOffset,i=void 0===o?null:o,a=t.getSourceClientOffset;d.default(h.default(e),"Expected sourceIds to be an array.");var u=this.getMonitor(),s=this.getRegistry();d.default(!u.isDragging(),"Cannot call beginDrag while dragging.");for(var c=0;c<e.length;c++)d.default(s.getSource(e[c]),"Expected sourceIds to be registered.");for(var f=null,c=e.length-1;c>=0;c--)if(u.canDragSource(e[c])){f=e[c];break}if(null!==f){var l=null;i&&(d.default("function"==typeof a,"When clientOffset is provided, getSourceClientOffset must be a function."),l=a(f));var p=s.getSource(f),g=p.beginDrag(u,f);d.default(v.default(g),"Item must be an object."),s.pinSource(f);var m=s.getSourceType(f);return{type:y,itemType:m,item:g,sourceId:f,clientOffset:i,sourceClientOffset:l,isSourcePublic:n}}}function i(e){var t=this.getMonitor();if(t.isDragging())return{type:m}}function a(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=t.clientOffset,n=void 0===r?null:r;d.default(h.default(e),"Expected targetIds to be an array."),e=e.slice(0);var o=this.getMonitor(),i=this.getRegistry();d.default(o.isDragging(),"Cannot call hover while not dragging."),d.default(!o.didDrop(),"Cannot call hover after drop.");for(var a=0;a<e.length;a++){var u=e[a];d.default(e.lastIndexOf(u)===a,"Expected targetIds to be unique in the passed array.");var s=i.getTarget(u);d.default(s,"Expected targetIds to be registered.")}for(var c=o.getItemType(),a=e.length-1;a>=0;a--){var u=e[a],l=i.getTargetType(u);f.default(l,c)||e.splice(a,1)}for(var a=0;a<e.length;a++){var u=e[a],s=i.getTarget(u);s.hover(o,u)}return{type:b,targetIds:e,clientOffset:n}}function u(){var e=this,t=this.getMonitor(),r=this.getRegistry();d.default(t.isDragging(),"Cannot call drop while not dragging."),d.default(!t.didDrop(),"Cannot call drop twice during one drag operation.");var n=t.getTargetIds().filter(t.canDropOnTarget,t);n.reverse(),n.forEach(function(n,o){var i=r.getTarget(n),a=i.drop(t,n);d.default("undefined"==typeof a||v.default(a),"Drop result must either be an object or undefined."),"undefined"==typeof a&&(a=0===o?{}:t.getDropResult()),e.store.dispatch({type:D,dropResult:a})})}function s(){var e=this.getMonitor(),t=this.getRegistry();d.default(e.isDragging(),"Cannot call endDrag while not dragging.");var r=e.getSourceId(),n=t.getSource(r,!0);return n.endDrag(e,r),t.unpinSource(),{type:_}}t.__esModule=!0,t.beginDrag=o,t.publishDragSource=i,t.hover=a,t.drop=u,t.endDrag=s;var c=r(37),f=n(c),l=r(1),d=n(l),p=r(3),h=n(p),g=r(7),v=n(g),y="dnd-core/BEGIN_DRAG";t.BEGIN_DRAG=y;var m="dnd-core/PUBLISH_DRAG_SOURCE";t.PUBLISH_DRAG_SOURCE=m;var b="dnd-core/HOVER";t.HOVER=b;var D="dnd-core/DROP";t.DROP=D;var _="dnd-core/END_DRAG";t.END_DRAG=_},function(e,t){"use strict";function r(e){return{type:a,sourceId:e}}function n(e){return{type:u,targetId:e}}function o(e){return{type:s,sourceId:e}}function i(e){return{type:c,targetId:e}}t.__esModule=!0,t.addSource=r,t.addTarget=n,t.removeSource=o,t.removeTarget=i;var a="dnd-core/ADD_SOURCE";t.ADD_SOURCE=a;var u="dnd-core/ADD_TARGET";t.ADD_TARGET=u;var s="dnd-core/REMOVE_SOURCE";t.REMOVE_SOURCE=s;var c="dnd-core/REMOVE_TARGET";t.REMOVE_TARGET=c},function(e,t,r){function n(e,t){for(var r=e.length;r--;)if(o(e[r][0],t))return r;return-1}var o=r(16);e.exports=n},function(e,t,r){function n(e){return null==e?void 0===e?s:u:(e=Object(e),c&&c in e?i(e):a(e))}var o=r(22),i=r(114),a=r(138),u="[object Null]",s="[object Undefined]",c=o?o.toStringTag:void 0;e.exports=n},function(e,t,r){function n(e,t){var r=e.__data__;return o(t)?r["string"==typeof t?"string":"hash"]:r.map}var o=r(123);e.exports=n},function(e,t,r){function n(e,t){var r=i(e,t);return o(r)?r:void 0}var o=r(102),i=r(115);e.exports=n},function(e,t,r){var n=r(14),o=n(Object,"create");e.exports=o},function(e,t){function r(e,t){return e===t||e!==e&&t!==t}e.exports=r},function(e,t,r){function n(e){return i(e)&&o(e)}var o=r(28),i=r(8);e.exports=n},function(e,t,r){"use strict";function n(e,t){}t.__esModule=!0,t.default=n,e.exports=t.default},function(e,t,r){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t,r,o){return(0,c.default)(e,{rows:n({},t,{columns:n({},r,{widgets:{$push:[{key:o}]}})})})}function i(e,t,r,o){return(0,c.default)(e,{rows:n({},t,{columns:n({},r,{widgets:{$splice:[[o,1]]}})})})}function a(e,t,r,n){var a=i(e,t.rowIndex,t.columnIndex,t.widgetIndex),u=o(a,r.rowIndex,r.columnIndex,n);return u}function u(e,t,r,o){return(0,c.default)(e,{rows:n({},t.rowIndex,{columns:n({},t.columnIndex,{widgets:{$splice:[[t.widgetIndex,1],[r.widgetIndex,0,{key:o}]]}})})})}Object.defineProperty(t,"__esModule",{value:!0}),t.addWidget=o,t.removeWidget=i,t.moveWidget=a,t.sortWidget=u;var s=r(180),c=e(s)}).call(this)}finally{}},function(e,t){"use strict";function r(e){return Boolean(e&&"function"==typeof e.dispose)}t.__esModule=!0,t.default=r,e.exports=t.default},function(e,t,r){function n(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new o;++t<r;)this.add(e[t])}var o=r(38),i=r(141),a=r(142);n.prototype.add=n.prototype.push=i,n.prototype.has=a,e.exports=n},function(e,t,r){var n=r(6),o=n.Symbol;e.exports=o},function(e,t,r){function n(e,t){var r=null==e?0:e.length;return!!r&&o(e,t,0)>-1}var o=r(98);e.exports=n},function(e,t){function r(e,t,r){for(var n=-1,o=null==e?0:e.length;++n<o;)if(r(t,e[n]))return!0;return!1}e.exports=r},function(e,t){function r(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}e.exports=r},function(e,t){function r(e){return function(t){return e(t)}}e.exports=r},function(e,t){function r(e,t){return e.has(t)}e.exports=r},function(e,t,r){function n(e){return null!=e&&i(e.length)&&!o(e)}var o=r(50),i=r(51);e.exports=n},function(e,t){"use strict";t.__esModule=!0;var r="__NATIVE_FILE__";t.FILE=r;var n="__NATIVE_URL__";t.URL=n;var o="__NATIVE_TEXT__";t.TEXT=o},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e.default:e}t.__esModule=!0;var o=r(166);t.DragDropContext=n(o);var i=r(167);t.DragLayer=n(i);var a=r(168);t.DragSource=n(a);var u=r(169);t.DropTarget=n(u)},function(e,t){"use strict";function r(e,t){if(e===t)return!0;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(var o=Object.prototype.hasOwnProperty,i=0;i<r.length;i++){if(!o.call(t,r[i])||e[r[i]]!==t[r[i]])return!1;var a=e[r[i]],u=t[r[i]];if(a!==u)return!1}return!0}t.__esModule=!0,t.default=r,e.exports=t.default},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(e,t,r){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.WIDGET="WIDGET"}).call(this)}finally{}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){return e&&e.constructor===Symbol?"symbol":typeof e}function a(e){d.default("function"==typeof e.canDrag,"Expected canDrag to be a function."),d.default("function"==typeof e.beginDrag,"Expected beginDrag to be a function."),d.default("function"==typeof e.endDrag,"Expected endDrag to be a function.")}function u(e){d.default("function"==typeof e.canDrop,"Expected canDrop to be a function."),d.default("function"==typeof e.hover,"Expected hover to be a function."),d.default("function"==typeof e.drop,"Expected beginDrag to be a function.")}function s(e,t){return t&&h.default(e)?void e.forEach(function(e){return s(e,!1)}):void d.default("string"==typeof e||"symbol"===("undefined"==typeof e?"undefined":i(e)),t?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}function c(e){var t=v.default().toString();switch(e){case D.SOURCE:return"S"+t;case D.TARGET:return"T"+t;default:d.default(!1,"Unknown role: "+e)}}function f(e){switch(e[0]){case"S":return D.SOURCE;case"T":return D.TARGET;default:d.default(!1,"Cannot parse handler ID: "+e)}}t.__esModule=!0;var l=r(1),d=n(l),p=r(3),h=n(p),g=r(85),v=n(g),y=r(10),m=r(69),b=n(m),D={SOURCE:"SOURCE",TARGET:"TARGET"},_=function(){function e(t){o(this,e),this.store=t,this.types={},this.handlers={},this.pinnedSourceId=null,this.pinnedSource=null}return e.prototype.addSource=function(e,t){s(e),a(t);var r=this.addHandler(D.SOURCE,e,t);return this.store.dispatch(y.addSource(r)),r},e.prototype.addTarget=function(e,t){s(e,!0),u(t);var r=this.addHandler(D.TARGET,e,t);return this.store.dispatch(y.addTarget(r)),r},e.prototype.addHandler=function(e,t,r){var n=c(e);return this.types[n]=t,this.handlers[n]=r,n},e.prototype.containsHandler=function(e){var t=this;return Object.keys(this.handlers).some(function(r){return t.handlers[r]===e})},e.prototype.getSource=function(e,t){d.default(this.isSourceId(e),"Expected a valid source ID.");var r=t&&e===this.pinnedSourceId,n=r?this.pinnedSource:this.handlers[e];return n},e.prototype.getTarget=function(e){return d.default(this.isTargetId(e),"Expected a valid target ID."),this.handlers[e]},e.prototype.getSourceType=function(e){return d.default(this.isSourceId(e),"Expected a valid source ID."),this.types[e]},e.prototype.getTargetType=function(e){return d.default(this.isTargetId(e),"Expected a valid target ID."),this.types[e]},e.prototype.isSourceId=function(e){var t=f(e);return t===D.SOURCE},e.prototype.isTargetId=function(e){var t=f(e);return t===D.TARGET},e.prototype.removeSource=function(e){var t=this;d.default(this.getSource(e),"Expected an existing source."),this.store.dispatch(y.removeSource(e)),b.default(function(){delete t.handlers[e],delete t.types[e]})},e.prototype.removeTarget=function(e){var t=this;d.default(this.getTarget(e),"Expected an existing target."),this.store.dispatch(y.removeTarget(e)),b.default(function(){delete t.handlers[e],delete t.types[e]})},e.prototype.pinSource=function(e){var t=this.getSource(e);d.default(t,"Expected an existing source."),this.pinnedSourceId=e,this.pinnedSource=t},e.prototype.unpinSource=function(){d.default(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null},e}();t.default=_,e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,r){switch(void 0===e&&(e=d),t.type){case f.HOVER:break;case l.ADD_SOURCE:case l.ADD_TARGET:case l.REMOVE_TARGET:case l.REMOVE_SOURCE:return d;case f.BEGIN_DRAG:case f.PUBLISH_DRAG_SOURCE:case f.END_DRAG:case f.DROP:default:return p}var n=t.targetIds,o=r.targetIds,i=u.default(n,o),a=!1;if(0===i.length){for(var s=0;s<n.length;s++)if(n[s]!==o[s]){a=!0;break}}else a=!0;if(!a)return d;var c=o[o.length-1],h=n[n.length-1];return c!==h&&(c&&i.push(c),h&&i.push(h)),i}function i(e,t){return e!==d&&(e===p||"undefined"==typeof t||c.default(t,e).length>0)}t.__esModule=!0,t.default=o,t.areDirty=i;var a=r(157),u=n(a),s=r(150),c=n(s),f=r(9),l=r(10),d=[],p=[]},function(e,t,r){"use strict";function n(e,t){return e===t||e&&t&&e.x===t.x&&e.y===t.y}function o(e,t){switch(void 0===e&&(e=c),t.type){case s.BEGIN_DRAG:return{initialSourceClientOffset:t.sourceClientOffset,initialClientOffset:t.clientOffset,clientOffset:t.clientOffset};case s.HOVER:return n(e.clientOffset,t.clientOffset)?e:u({},e,{clientOffset:t.clientOffset});case s.END_DRAG:case s.DROP:return c;default:return e}}function i(e){var t=e.clientOffset,r=e.initialClientOffset,n=e.initialSourceClientOffset;return t&&r&&n?{x:t.x+n.x-r.x,y:t.y+n.y-r.y}:null}function a(e){var t=e.clientOffset,r=e.initialClientOffset;return t&&r?{x:t.x-r.x,y:t.y-r.y}:null}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=o,t.getSourceClientOffset=i,t.getDifferenceFromInitialOffset=a;var s=r(9),c={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return a.default(e)?e.some(function(e){return e===t}):e===t}t.__esModule=!0,t.default=o;var i=r(3),a=n(i);e.exports=t.default},function(e,t,r){function n(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}var o=r(131),i=r(132),a=r(133),u=r(134),s=r(135);n.prototype.clear=o,n.prototype.delete=i,n.prototype.get=a,n.prototype.has=u,n.prototype.set=s,e.exports=n},function(e,t){function r(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}e.exports=r},function(e,t,r){function n(e,t,r){"__proto__"==t&&o?o(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var o=r(44);e.exports=n},function(e,t,r){function n(e,t,r,n){var l=-1,d=i,p=!0,h=e.length,g=[],v=t.length;if(!h)return g;r&&(t=u(t,s(r))),n?(d=a,p=!1):t.length>=f&&(d=c,p=!1,t=new o(t));e:for(;++l<h;){var y=e[l],m=null==r?y:r(y);if(y=n||0!==y?y:0,p&&m===m){for(var b=v;b--;)if(t[b]===m)continue e;g.push(y)}else d(t,m,n)||g.push(y)}return g}var o=r(21),i=r(23),a=r(24),u=r(25),s=r(26),c=r(27),f=200;e.exports=n},function(e,t,r){function n(e,t,r,a,u){var s=-1,c=e.length;for(r||(r=i),u||(u=[]);++s<c;){var f=e[s];t>0&&r(f)?t>1?n(f,t-1,r,a,u):o(u,f):a||(u[u.length]=f)}return u}var o=r(94),i=r(121);e.exports=n},function(e,t,r){function n(e,t,r){var n=-1,l=i,d=e.length,p=!0,h=[],g=h;if(r)p=!1,l=a;else if(d>=f){var v=t?null:s(e);if(v)return c(v);p=!1,l=u,g=new o}else g=t?[]:h;e:for(;++n<d;){var y=e[n],m=t?t(y):y;if(y=r||0!==y?y:0,p&&m===m){for(var b=g.length;b--;)if(g[b]===m)continue e;t&&g.push(m),h.push(y)}else l(g,m,r)||(g!==h&&g.push(m),h.push(y))}return h}var o=r(21),i=r(23),a=r(24),u=r(27),s=r(112),c=r(47),f=200;e.exports=n},function(e,t,r){var n=r(14),o=function(){try{var e=n(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=o},function(e,t){var r="object"==typeof global&&global&&global.Object===Object&&global;e.exports=r},function(e,t){function r(e,t){return t=null==t?n:t,!!t&&("number"==typeof e||o.test(e))&&e>-1&&e%1==0&&e<t}var n=9007199254740991,o=/^(?:0|[1-9]\d*)$/;e.exports=r},function(e,t){function r(e){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r}e.exports=r},function(e,t){function r(e){return e}e.exports=r},function(e,t,r){var n=r(100),o=r(8),i=Object.prototype,a=i.hasOwnProperty,u=i.propertyIsEnumerable,s=n(function(){return arguments}())?n:function(e){return o(e)&&a.call(e,"callee")&&!u.call(e,"callee")};e.exports=s},function(e,t,r){function n(e){if(!i(e))return!1;var t=o(e);return t==u||t==s||t==a||t==c}var o=r(12),i=r(7),a="[object AsyncFunction]",u="[object Function]",s="[object GeneratorFunction]",c="[object Proxy]";e.exports=n},function(e,t){function r(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}var n=9007199254740991;e.exports=r},function(e,t){function r(){}e.exports=r},function(e,t,r){var n=r(41),o=r(5),i=r(17),a=o(function(e,t){return i(e)?n(e,t):[]});e.exports=a},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=r(154),i=n(o),a=i.default(function(){return/firefox/i.test(navigator.userAgent)});t.isFirefox=a;var u=i.default(function(){return Boolean(window.safari)});t.isSafari=u},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return t===e||null!==t&&null!==e&&a.default(t,e)}t.__esModule=!0,t.default=o;var i=r(31),a=n(i);e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){var t=e.DecoratedComponent,r=e.createHandler,n=e.createMonitor,a=e.createConnector,d=e.registerHandler,h=e.containerDisplayName,v=e.getType,y=e.collect,b=e.options,D=b.arePropsEqual,_=void 0===D?g.default:D,T=t.displayName||t.name||"Component";return function(e){function g(t,i){o(this,g),e.call(this,t,i),this.handleChange=this.handleChange.bind(this),this.handleChildRef=this.handleChildRef.bind(this),m.default("object"==typeof this.context.dragDropManager,"Could not find the drag and drop manager in the context of %s. Make sure to wrap the top-level component of your app with DragDropContext. Read more: http://gaearon.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context",T,T),this.manager=this.context.dragDropManager,this.handlerMonitor=n(this.manager),this.handlerConnector=a(this.manager.getBackend()),this.handler=r(this.handlerMonitor),this.disposable=new l.SerialDisposable,this.receiveProps(t),this.state=this.getCurrentState(),this.dispose()}return i(g,e),g.prototype.getHandlerId=function(){return this.handlerId},g.prototype.getDecoratedComponentInstance=function(){return this.decoratedComponentInstance},g.prototype.shouldComponentUpdate=function(e,t){return!_(e,this.props)||!p.default(t,this.state)},s(g,null,[{key:"DecoratedComponent",value:t,enumerable:!0},{key:"displayName",value:h+"("+T+")",enumerable:!0},{key:"contextTypes",value:{dragDropManager:c.PropTypes.object.isRequired},enumerable:!0}]),g.prototype.componentDidMount=function(){this.isCurrentlyMounted=!0,this.disposable=new l.SerialDisposable,this.currentType=null,this.receiveProps(this.props),this.handleChange()},g.prototype.componentWillReceiveProps=function(e){_(e,this.props)||(this.receiveProps(e),this.handleChange())},g.prototype.componentWillUnmount=function(){this.dispose(),this.isCurrentlyMounted=!1},g.prototype.receiveProps=function(e){this.handler.receiveProps(e),this.receiveType(v(e))},g.prototype.receiveType=function(e){if(e!==this.currentType){this.currentType=e;var t=d(e,this.handler,this.manager),r=t.handlerId,n=t.unregister;this.handlerId=r,this.handlerMonitor.receiveHandlerId(r),this.handlerConnector.receiveHandlerId(r);var o=this.manager.getMonitor(),i=o.subscribeToStateChange(this.handleChange,{handlerIds:[r]});this.disposable.setDisposable(new l.CompositeDisposable(new l.Disposable(i),new l.Disposable(n)))}},g.prototype.handleChange=function(){if(this.isCurrentlyMounted){var e=this.getCurrentState();p.default(e,this.state)||this.setState(e)}},g.prototype.dispose=function(){this.disposable.dispose(),this.handlerConnector.receiveHandlerId(null)},g.prototype.handleChildRef=function(e){this.decoratedComponentInstance=e,this.handler.receiveComponent(e)},g.prototype.getCurrentState=function(){var e=y(this.handlerConnector.hooks,this.handlerMonitor);return e},g.prototype.render=function(){return f.default.createElement(t,u({},this.props,this.state,{ref:this.handleChildRef}))},g}(c.Component)}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();t.default=a;var c=r(2),f=n(c),l=r(74),d=r(31),p=n(d),h=r(58),g=n(h),v=r(4),y=(n(v),r(1)),m=n(y);e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return"string"==typeof e||"symbol"==typeof e||t&&a.default(e)&&e.every(function(e){return o(e,!1)})}t.__esModule=!0,t.default=o;var i=r(3),a=n(i);e.exports=t.default},function(e,t){"use strict";function r(e,t){if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(var o=Object.prototype.hasOwnProperty,i=0;i<r.length;i++){if(!o.call(t,r[i]))return!1;var a=e[r[i]],u=t[r[i]];if(a!==u||"object"==typeof a||"object"==typeof u)return!1}return!0}t.__esModule=!0,t.default=r,e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if("string"!=typeof e.type){var t=e.type.displayName||e.type.name||"the component";throw new Error("Only native element nodes can now be passed to React DnD connectors. "+("You can either wrap "+t+" into a <div>, or turn it into a ")+"drag source or a drop target itself.")}}function i(e){return function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0],r=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(!c.isValidElement(t)){var n=t;return void e(n,r)}var i=t;o(i);var a=r?function(t){return e(t,r)}:e;return s.default(i,a)}}function a(e){var t={};return Object.keys(e).forEach(function(r){var n=e[r],o=i(n);t[r]=function(){return o}}),t}t.__esModule=!0,t.default=a;var u=r(178),s=n(u),c=r(2);e.exports=t.default},function(e,t,r){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),o=e(n),i=function(e){var t=e.text,r=e.onClick;return o.default.createElement("div",{className:"add-widget-button",onClick:r},o.default.createElement("a",{className:"add-widget-link"},t))};i.propTypes={onClick:n.PropTypes.func,text:n.PropTypes.string},i.defaultProps={text:"Add Widget"},t.default=i}).call(this)}finally{}},function(e,t,r){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a,u,s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(2),f=e(c),l=r(30),d=r(33),p=r(60),h=e(p),g=r(19),v={drop:function(e,t){var r=e.layout,n=e.rowIndex,o=e.columnIndex,i=e.onMove,a=t.getItem();if(a.columnIndex!==o||a.rowIndex!==n){var u=(0,g.moveWidget)(r,{rowIndex:a.rowIndex,columnIndex:a.columnIndex,widgetIndex:a.widgetIndex},{rowIndex:n,columnIndex:o},a.widgetName);i(u)}}},y=(a=(0,l.DropTarget)(d.WIDGET,v,function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver(),canDrop:t.canDrop()}}),a(u=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.className,r=e.layout,n=e.rowIndex,o=e.columnIndex,i=e.editable,a=e.children,u=e.connectDropTarget,s=e.onAdd,l=e.isOver,d=e.canDrop,p=e.editableColumnClass,g=e.droppableColumnClass,v=e.addWidgetComponentText,y=e.addWidgetComponent,m=t;m=i?t+" "+p:m;var b=l&&d;m=b?m+" "+g:m;var D=null;return D=y?(0,c.createElement)(y,{text:v,onClick:function(){s(r,n,o)}}):f.default.createElement(h.default,{text:v,onClick:function(){s(r,n,o)}}),u(f.default.createElement("div",{className:m},i&&D,a))}}]),t}(c.Component))||u);y.propTypes={children:c.PropTypes.node,className:c.PropTypes.string,onAdd:c.PropTypes.func,layout:c.PropTypes.object,rowIndex:c.PropTypes.number,columnIndex:c.PropTypes.number,editable:c.PropTypes.bool,isOver:c.PropTypes.bool,canDrop:c.PropTypes.bool,editableColumnClass:c.PropTypes.string,droppableColumnClass:c.PropTypes.string,addWidgetComponentText:c.PropTypes.string,connectDropTarget:c.PropTypes.func,addWidgetComponent:c.PropTypes.func},y.defaultProps={editableColumnClass:"editable-column",droppableColumnClass:"droppable-column"},t.default=y}).call(this)}finally{}},function(e,t,r){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a,u,s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(2),f=e(c),l=r(30),d=r(164),p=e(d),h=r(64),g=e(h),v=(a=(0,l.DragDropContext)(p.default),a(u=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement(g.default,this.props))}}]),t}(c.Component))||u);v.PropTypes={layout:c.PropTypes.object,widgets:c.PropTypes.object,editable:c.PropTypes.bool,rowClass:c.PropTypes.string,frameComponent:c.PropTypes.func,addWidgetComponent:c.PropTypes.func,editableColumnClass:c.PropTypes.string,droppableColumnClass:c.PropTypes.string,addWidgetComponentText:c.PropTypes.string,onRemove:c.PropTypes.func,onAdd:c.PropTypes.func,onMove:c.PropTypes.func},t.default=v}).call(this)}finally{}},function(e,t,r){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),o=e(n),i=function(e){var t=e.children,r=e.onRemove,n=e.editable,i=e.title;return o.default.createElement("div",{className:"defaultWidgetFrame"},o.default.createElement("div",{className:"defaultWidgetFrameHeader"},o.default.createElement("span",{className:"title"},i),n&&o.default.createElement("a",{className:"remove",onClick:function(){r()}},"Remove")),t)};i.propTypes={editable:n.PropTypes.bool,children:n.PropTypes.node,onRemove:n.PropTypes.func,title:n.PropTypes.string},t.default=i}).call(this)}finally{}},function(e,t,r){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),o=e(n),i=r(65),a=e(i),u=function(e){var t=e.layout,r=e.widgets,n=e.onRemove,i=e.editable,u=e.onAdd,s=e.frameComponent,c=e.rowClass,f=e.onMove,l=e.editableColumnClass,d=e.droppableColumnClass,p=e.addWidgetComponentText,h=e.addWidgetComponent,g=t.rows.map(function(e,g){return o.default.createElement(a.default,{key:g,rowClass:c,columns:e.columns,widgets:r,onRemove:n,layout:t,rowIndex:g,editable:i,onAdd:u,onMove:f,frameComponent:s,editableColumnClass:l,droppableColumnClass:d,addWidgetComponentText:p,addWidgetComponent:h})});return o.default.createElement("div",null,g)};u.propTypes={layout:n.PropTypes.object,widgets:n.PropTypes.object,editable:n.PropTypes.bool,onRemove:n.PropTypes.func,onAdd:n.PropTypes.func,frameComponent:n.PropTypes.func,rowClass:n.PropTypes.string,onMove:n.PropTypes.func,editableColumnClass:n.PropTypes.string,droppableColumnClass:n.PropTypes.string,addWidgetComponent:n.PropTypes.func,addWidgetComponentText:n.PropTypes.string},u.defaultProps={layout:{rows:[]}},t.default=u}).call(this)}finally{}},function(e,t,r){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.rowClass,r=e.columns,n=e.widgets,o=e.onRemove,a=e.layout,s=e.rowIndex,f=e.editable,l=e.frameComponent,d=e.editableColumnClass,p=e.droppableColumnClass,h=e.addWidgetComponentText,g=e.addWidgetComponent,v=e.onAdd,y=e.onMove,m=r.map(function(e,t){return i.default.createElement(u.default,{key:t,className:e.className,onAdd:v,layout:a,rowIndex:s,columnIndex:t,editable:f,onMove:y,editableColumnClass:d,droppableColumnClass:p,addWidgetComponent:g,addWidgetComponentText:h},i.default.createElement(c.default,{key:t,widgets:e.widgets,widgetTypes:n,onRemove:o,layout:a,rowIndex:s,columnIndex:t,editable:f,frameComponent:l,onMove:y}))});return i.default.createElement("div",{className:t},m)}Object.defineProperty(t,"__esModule",{value:!0});var o=r(2),i=e(o),a=r(61),u=e(a),s=r(67),c=e(s);n.propTypes={rowClass:o.PropTypes.string,columns:o.PropTypes.array,widgets:o.PropTypes.object,layout:o.PropTypes.object,rowIndex:o.PropTypes.number,editable:o.PropTypes.bool,frameComponent:o.PropTypes.func,editableColumnClass:o.PropTypes.string,droppableColumnClass:o.PropTypes.string,addWidgetComponent:o.PropTypes.func,addWidgetComponentText:o.PropTypes.string,onAdd:o.PropTypes.func,onRemove:o.PropTypes.func,onMove:o.PropTypes.func},n.defaultProps={rowClass:"row"},t.default=n}).call(this)}finally{}},function(e,t,r){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{
value:!0});var a,u,s,c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(2),l=e(f),d=r(185),p=r(30),h=r(33),g=r(19),v=r(63),y=e(v),m={beginDrag:function(e){return{widgetName:e.widgetName,rowIndex:e.rowIndex,columnIndex:e.columnIndex,widgetIndex:e.widgetIndex}},canDrag:function(e){return e.editable}},b={hover:function(e,t,r){var n=t.getItem().widgetIndex,o=e.widgetIndex;if(n!==o){var i=(0,d.findDOMNode)(r).getBoundingClientRect(),a=(i.bottom-i.top)/2,u=t.getClientOffset(),s=u.y-i.top;if(!(n<o&&s<a||n>o&&s>a)){var c=e.layout,f=e.columnIndex,l=e.rowIndex;if(t.getItem().columnIndex===f){var p=(0,g.sortWidget)(c,{rowIndex:l,columnIndex:f,widgetIndex:n},{rowIndex:l,columnIndex:f,widgetIndex:o},t.getItem().widgetName);e.onMove(p),t.getItem().widgetIndex=o}}}}},D=(a=(0,p.DropTarget)(h.WIDGET,b,function(e){return{connectDropTarget:e.dropTarget()}}),u=(0,p.DragSource)(h.WIDGET,m,function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}}),a(s=u(s=function(e){function t(){var e,r,i,a;n(this,t);for(var u=arguments.length,s=Array(u),c=0;c<u;c++)s[c]=arguments[c];return r=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),i.remove=function(){var e=i.props,t=e.layout,r=e.rowIndex,n=e.columnIndex,o=e.widgetIndex,a=(0,g.removeWidget)(t,r,n,o);i.props.onRemove(a)},a=r,o(i,a)}return i(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.frameComponent,r=e.children,n=e.editable,o=e.title,i=e.connectDragSource,a=e.connectDropTarget,u=e.isDragging,s=null;s=t?(0,f.createElement)(t,{children:r,editable:n,title:o,onRemove:this.remove}):l.default.createElement(y.default,{title:o,editable:n,children:r,onRemove:this.remove});var c=u?0:1;return i(a(l.default.createElement("div",{style:{opacity:c}},s)))}}]),t}(f.Component))||s)||s);D.propTypes={children:f.PropTypes.element,layout:f.PropTypes.object,columnIndex:f.PropTypes.number,rowIndex:f.PropTypes.number,widgetIndex:f.PropTypes.number,editable:f.PropTypes.bool,frameComponent:f.PropTypes.func,widgetName:f.PropTypes.string,title:f.PropTypes.string,isDragging:f.PropTypes.bool,connectDragSource:f.PropTypes.func,connectDropTarget:f.PropTypes.func,onRemove:f.PropTypes.func},t.default=D}).call(this)}finally{}},function(e,t,r){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),o=e(n),i=r(66),a=e(i),u=function(e){var t=e.widgets,r=e.widgetTypes,i=e.onRemove,u=e.layout,s=e.columnIndex,c=e.rowIndex,f=e.editable,l=e.frameComponent,d=e.onMove,p=t.map(function(e,t){return o.default.createElement(a.default,{key:t,widgetName:e.key,title:r[e.key].title,onRemove:i,layout:u,columnIndex:s,rowIndex:c,widgetIndex:t,editable:f,frameComponent:l,onMove:d},(0,n.createElement)(r[e.key].type,r[e.key].props))});return o.default.createElement("div",null,p)};u.propTypes={widgets:n.PropTypes.array,widgetTypes:n.PropTypes.object,onRemove:n.PropTypes.func,layout:n.PropTypes.object,columnIndex:n.PropTypes.number,rowIndex:n.PropTypes.number,editable:n.PropTypes.bool,frameComponent:n.PropTypes.func,onMove:n.PropTypes.func},t.default=u}).call(this)}finally{}},function(e,t,r){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(62);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return e(n).default}});var o=r(19);Object.defineProperty(t,"addWidget",{enumerable:!0,get:function(){return o.addWidget}})}).call(this)}finally{}},function(e,t,r){"use strict";function n(){if(s.length)throw s.shift()}function o(e){var t;t=u.length?u.pop():new i,t.task=e,a(t)}function i(){this.task=null}var a=r(70),u=[],s=[],c=a.makeRequestCallFromTimer(n);e.exports=o,i.prototype.call=function(){try{this.task.call()}catch(e){o.onerror?o.onerror(e):(s.push(e),c())}finally{this.task=null,u[u.length]=this}}},function(e,t){"use strict";function r(e){u.length||(a(),s=!0),u[u.length]=e}function n(){for(;c<u.length;){var e=c;if(c+=1,u[e].call(),c>f){for(var t=0,r=u.length-c;t<r;t++)u[t]=u[t+c];u.length-=c,c=0}}u.length=0,c=0,s=!1}function o(e){var t=1,r=new d(e),n=document.createTextNode("");return r.observe(n,{characterData:!0}),function(){t=-t,n.data=t}}function i(e){return function(){function t(){clearTimeout(r),clearInterval(n),e()}var r=setTimeout(t,0),n=setInterval(t,50)}}e.exports=r;var a,u=[],s=!1,c=0,f=1024,l="undefined"!=typeof global?global:self,d=l.MutationObserver||l.WebKitMutationObserver;a="function"==typeof d?o(n):i(n),r.requestFlush=a,r.makeRequestCallFromTimer=i},function(e,t,r){"use strict";var n=function(e){return e&&e.__esModule?e:{default:e}},o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};t.__esModule=!0;var i=r(20),a=n(i),u=function(){function e(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];o(this,e),Array.isArray(r[0])&&1===r.length&&(r=r[0]);for(var i=0;i<r.length;i++)if(!a.default(r[i]))throw new Error("Expected a disposable");this.disposables=r,this.isDisposed=!1}return e.prototype.add=function(e){this.isDisposed?e.dispose():this.disposables.push(e)},e.prototype.remove=function(e){if(this.isDisposed)return!1;var t=this.disposables.indexOf(e);return t!==-1&&(this.disposables.splice(t,1),e.dispose(),!0)},e.prototype.dispose=function(){if(!this.isDisposed){for(var e=this.disposables.length,t=new Array(e),r=0;r<e;r++)t[r]=this.disposables[r];this.isDisposed=!0,this.disposables=[],this.length=0;for(var r=0;r<e;r++)t[r].dispose()}},e}();t.default=u,e.exports=t.default},function(e,t){"use strict";var r=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();t.__esModule=!0;var o=function(){},i=function(){function e(t){r(this,e),this.isDisposed=!1,this.action=t||o}return e.prototype.dispose=function(){this.isDisposed||(this.action.call(null),this.isDisposed=!0)},n(e,null,[{key:"empty",enumerable:!0,value:{dispose:o}}]),e}();t.default=i,e.exports=t.default},function(e,t,r){"use strict";var n=function(e){return e&&e.__esModule?e:{default:e}},o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};t.__esModule=!0;var i=r(20),a=n(i),u=function(){function e(){o(this,e),this.isDisposed=!1,this.current=null}return e.prototype.getDisposable=function(){return this.current},e.prototype.setDisposable=function(){var e=void 0===arguments[0]?null:arguments[0];if(null!=e&&!a.default(e))throw new Error("Expected either an empty value or a valid disposable");var t=this.isDisposed,r=void 0;t||(r=this.current,this.current=e),r&&r.dispose(),t&&e&&e.dispose()},e.prototype.dispose=function(){if(!this.isDisposed){this.isDisposed=!0;var e=this.current;this.current=null,e&&e.dispose()}},e}();t.default=u,e.exports=t.default},function(e,t,r){"use strict";var n=function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var o=r(20),i=n(o);t.isDisposable=i.default;var a=r(72),u=n(a);t.Disposable=u.default;var s=r(71),c=n(s);t.CompositeDisposable=c.default;var f=r(73),l=n(f);t.SerialDisposable=l.default},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var a=r(181),u=o(a),s=r(82),c=o(s),f=r(9),l=n(f),d=r(76),p=o(d),h=r(34),g=(o(h),function(){function e(t){i(this,e);var r=u.default(c.default);this.store=r,this.monitor=new p.default(r),this.registry=this.monitor.registry,this.backend=t(this),r.subscribe(this.handleRefCountChange.bind(this))}return e.prototype.handleRefCountChange=function(){var e=this.store.getState().refCount>0;e&&!this.isSetUp?(this.backend.setup(),this.isSetUp=!0):!e&&this.isSetUp&&(this.backend.teardown(),this.isSetUp=!1)},e.prototype.getMonitor=function(){return this.monitor},e.prototype.getBackend=function(){return this.backend},e.prototype.getRegistry=function(){return this.registry},e.prototype.getActions=function(){function e(e){return function(){var n=e.apply(t,arguments);"undefined"!=typeof n&&r(n)}}var t=this,r=this.store.dispatch;return Object.keys(l).filter(function(e){return"function"==typeof l[e]}).reduce(function(t,r){return t[r]=e(l[r]),t},{})},e}());t.default=g,e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var i=r(1),a=n(i),u=r(37),s=n(u),c=r(3),f=n(c),l=r(34),d=n(l),p=r(36),h=r(35),g=function(){function e(t){o(this,e),this.store=t,this.registry=new d.default(t)}return e.prototype.subscribeToStateChange=function(e){var t=this,r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=r.handlerIds;a.default("function"==typeof e,"listener must be a function."),a.default("undefined"==typeof n||f.default(n),"handlerIds, when specified, must be an array of strings.");var o=this.store.getState().stateId,i=function(){var r=t.store.getState(),i=r.stateId;try{var a=i===o||i===o+1&&!h.areDirty(r.dirtyHandlerIds,n);a||e()}finally{o=i}};return this.store.subscribe(i)},e.prototype.subscribeToOffsetChange=function(e){var t=this;a.default("function"==typeof e,"listener must be a function.");var r=this.store.getState().dragOffset,n=function(){var n=t.store.getState().dragOffset;n!==r&&(r=n,e())};return this.store.subscribe(n)},e.prototype.canDragSource=function(e){var t=this.registry.getSource(e);return a.default(t,"Expected to find a valid source."),!this.isDragging()&&t.canDrag(this,e)},e.prototype.canDropOnTarget=function(e){var t=this.registry.getTarget(e);if(a.default(t,"Expected to find a valid target."),!this.isDragging()||this.didDrop())return!1;var r=this.registry.getTargetType(e),n=this.getItemType();return s.default(r,n)&&t.canDrop(this,e)},e.prototype.isDragging=function(){return Boolean(this.getItemType())},e.prototype.isDraggingSource=function(e){var t=this.registry.getSource(e,!0);if(a.default(t,"Expected to find a valid source."),!this.isDragging()||!this.isSourcePublic())return!1;var r=this.registry.getSourceType(e),n=this.getItemType();return r===n&&t.isDragging(this,e)},e.prototype.isOverTarget=function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=t.shallow,n=void 0!==r&&r;if(!this.isDragging())return!1;var o=this.registry.getTargetType(e),i=this.getItemType();if(!s.default(o,i))return!1;var a=this.getTargetIds();if(!a.length)return!1;var u=a.indexOf(e);return n?u===a.length-1:u>-1},e.prototype.getItemType=function(){return this.store.getState().dragOperation.itemType},e.prototype.getItem=function(){return this.store.getState().dragOperation.item},e.prototype.getSourceId=function(){return this.store.getState().dragOperation.sourceId},e.prototype.getTargetIds=function(){return this.store.getState().dragOperation.targetIds},e.prototype.getDropResult=function(){return this.store.getState().dragOperation.dropResult},e.prototype.didDrop=function(){return this.store.getState().dragOperation.didDrop},e.prototype.isSourcePublic=function(){return this.store.getState().dragOperation.isSourcePublic},e.prototype.getInitialClientOffset=function(){return this.store.getState().dragOffset.initialClientOffset},e.prototype.getInitialSourceClientOffset=function(){return this.store.getState().dragOffset.initialSourceClientOffset},e.prototype.getClientOffset=function(){return this.store.getState().dragOffset.clientOffset},e.prototype.getSourceClientOffset=function(){return p.getSourceClientOffset(this.store.getState().dragOffset)},e.prototype.getDifferenceFromInitialOffset=function(){return p.getDifferenceFromInitialOffset(this.store.getState().dragOffset)},e}();t.default=g,e.exports=t.default},function(e,t){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var n=function(){function e(){r(this,e)}return e.prototype.canDrag=function(){return!0},e.prototype.isDragging=function(e,t){return t===e.getSourceId()},e.prototype.endDrag=function(){},e}();t.default=n,e.exports=t.default},function(e,t){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var n=function(){function e(){r(this,e)}return e.prototype.canDrop=function(){return!0},e.prototype.hover=function(){},e.prototype.drop=function(){},e}();t.default=n,e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){return new s(e)}t.__esModule=!0,t.default=i;var a=r(52),u=n(a),s=function(){function e(t){o(this,e),this.actions=t.getActions()}return e.prototype.setup=function(){this.didCallSetup=!0},e.prototype.teardown=function(){this.didCallTeardown=!0},e.prototype.connectDragSource=function(){return u.default},e.prototype.connectDragPreview=function(){return u.default},e.prototype.connectDropTarget=function(){return u.default},e.prototype.simulateBeginDrag=function(e,t){this.actions.beginDrag(e,t)},e.prototype.simulatePublishDragSource=function(){this.actions.publishDragSource()},e.prototype.simulateHover=function(e,t){this.actions.hover(e,t)},e.prototype.simulateDrop=function(){this.actions.drop()},e.prototype.simulateEndDrag=function(){this.actions.endDrag()},e}();e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e.default:e}t.__esModule=!0;var o=r(75);t.DragDropManager=n(o);var i=r(77);t.DragSource=n(i);var a=r(78);t.DropTarget=n(a);var u=r(79);t.createTestBackend=n(u)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){switch(void 0===e&&(e=f),t.type){case a.BEGIN_DRAG:return i({},e,{itemType:t.itemType,item:t.item,sourceId:t.sourceId,isSourcePublic:t.isSourcePublic,dropResult:null,didDrop:!1});case a.PUBLISH_DRAG_SOURCE:return i({},e,{isSourcePublic:!0});case a.HOVER:return i({},e,{targetIds:t.targetIds});case u.REMOVE_TARGET:return e.targetIds.indexOf(t.targetId)===-1?e:i({},e,{targetIds:c.default(e.targetIds,t.targetId)});case a.DROP:return i({},e,{dropResult:t.dropResult,didDrop:!0,targetIds:[]});case a.END_DRAG:return i({},e,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return e}}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=o;var a=r(9),u=r(10),s=r(53),c=n(s),f={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null};e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=r(36),i=n(o),a=r(81),u=n(a),s=r(83),c=n(s),f=r(35),l=n(f),d=r(84),p=n(d);t.default=function(e,t){return void 0===e&&(e={}),{dirtyHandlerIds:l.default(e.dirtyHandlerIds,t,e.dragOperation),dragOffset:i.default(e.dragOffset,t),refCount:c.default(e.refCount,t),dragOperation:u.default(e.dragOperation,t),stateId:p.default(e.stateId)}},e.exports=t.default},function(e,t,r){"use strict";function n(e,t){switch(void 0===e&&(e=0),t.type){case o.ADD_SOURCE:case o.ADD_TARGET:return e+1;case o.REMOVE_SOURCE:case o.REMOVE_TARGET:return e-1;default:return e}}t.__esModule=!0,t.default=n;var o=r(10);e.exports=t.default},function(e,t){"use strict";function r(){var e=arguments.length<=0||void 0===arguments[0]?0:arguments[0];return e+1}t.__esModule=!0,t.default=r,e.exports=t.default},function(e,t){"use strict";function r(){return n++}t.__esModule=!0,t.default=r;var n=0;e.exports=t.default},function(e,t,r){"use strict";function n(e,t,r,n,o,i,a,u){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,o,i,a,u],f=0;s=new Error(t.replace(/%s/g,function(){return c[f++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}}e.exports=n},function(e,t){"use strict";var r=function(e){var t;for(t in e)if(e.hasOwnProperty(t))return t;return null};e.exports=r},function(e,t,r){function n(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}var o=r(116),i=r(117),a=r(118),u=r(119),s=r(120);n.prototype.clear=o,n.prototype.delete=i,n.prototype.get=a,n.prototype.has=u,n.prototype.set=s,e.exports=n},function(e,t,r){function n(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}var o=r(126),i=r(127),a=r(128),u=r(129),s=r(130);n.prototype.clear=o,n.prototype.delete=i,n.prototype.get=a,n.prototype.has=u,n.prototype.set=s,e.exports=n},function(e,t,r){var n=r(14),o=r(6),i=n(o,"Map");e.exports=i},function(e,t,r){var n=r(14),o=r(6),i=n(o,"Set");e.exports=i},function(e,t){function r(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i}e.exports=r},function(e,t,r){function n(e,t){var r=a(e),n=!r&&i(e),f=!r&&!n&&u(e),d=!r&&!n&&!f&&c(e),p=r||n||f||d,h=p?o(e.length,String):[],g=h.length;for(var v in e)!t&&!l.call(e,v)||p&&("length"==v||f&&("offset"==v||"parent"==v)||d&&("buffer"==v||"byteLength"==v||"byteOffset"==v)||s(v,g))||h.push(v);return h}var o=r(106),i=r(49),a=r(3),u=r(151),s=r(46),c=r(152),f=Object.prototype,l=f.hasOwnProperty;e.exports=n},function(e,t){function r(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}e.exports=r},function(e,t,r){function n(e,t,r,n){return void 0===e||o(e,i[r])&&!a.call(n,r)?t:e}var o=r(16),i=Object.prototype,a=i.hasOwnProperty;e.exports=n},function(e,t,r){function n(e,t,r){var n=e[t];u.call(e,t)&&i(n,r)&&(void 0!==r||t in e)||o(e,t,r)}var o=r(40),i=r(16),a=Object.prototype,u=a.hasOwnProperty;e.exports=n},function(e,t){function r(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}e.exports=r},function(e,t,r){function n(e,t,r){return t===t?a(e,t,r):o(e,i,r)}var o=r(97),i=r(101),a=r(145);e.exports=n},function(e,t,r){function n(e,t,r){for(var n=r?a:i,l=e[0].length,d=e.length,p=d,h=Array(d),g=1/0,v=[];p--;){var y=e[p];p&&t&&(y=u(y,s(t))),g=f(y.length,g),h[p]=!r&&(t||l>=120&&y.length>=120)?new o(p&&y):void 0}y=e[0];var m=-1,b=h[0];e:for(;++m<l&&v.length<g;){var D=y[m],_=t?t(D):D;if(D=r||0!==D?D:0,!(b?c(b,_):n(v,_,r))){for(p=d;--p;){var T=h[p];if(!(T?c(T,_):n(e[p],_,r)))continue e}b&&b.push(_),v.push(D)}}return v}var o=r(21),i=r(23),a=r(24),u=r(25),s=r(26),c=r(27),f=Math.min;e.exports=n},function(e,t,r){function n(e){return i(e)&&o(e)==a}var o=r(12),i=r(8),a="[object Arguments]";e.exports=n},function(e,t){function r(e){return e!==e}e.exports=r},function(e,t,r){function n(e){if(!a(e)||i(e))return!1;var t=o(e)?h:c;return t.test(u(e))}var o=r(50),i=r(124),a=r(7),u=r(146),s=/[\\^$.*+?()[\]{}|]/g,c=/^\[object .+?Constructor\]$/,f=Function.prototype,l=Object.prototype,d=f.toString,p=l.hasOwnProperty,h=RegExp("^"+d.call(p).replace(s,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=n},function(e,t,r){function n(e){return a(e)&&i(e.length)&&!!P[o(e)]}var o=r(12),i=r(51),a=r(8),u="[object Arguments]",s="[object Array]",c="[object Boolean]",f="[object Date]",l="[object Error]",d="[object Function]",p="[object Map]",h="[object Number]",g="[object Object]",v="[object RegExp]",y="[object Set]",m="[object String]",b="[object WeakMap]",D="[object ArrayBuffer]",_="[object DataView]",T="[object Float32Array]",x="[object Float64Array]",O="[object Int8Array]",w="[object Int16Array]",C="[object Int32Array]",E="[object Uint8Array]",I="[object Uint8ClampedArray]",S="[object Uint16Array]",M="[object Uint32Array]",P={};P[T]=P[x]=P[O]=P[w]=P[C]=P[E]=P[I]=P[S]=P[M]=!0,P[u]=P[s]=P[D]=P[c]=P[_]=P[f]=P[l]=P[d]=P[p]=P[h]=P[g]=P[v]=P[y]=P[m]=P[b]=!1,e.exports=n},function(e,t,r){function n(e){if(!o(e))return a(e);var t=i(e),r=[];for(var n in e)("constructor"!=n||!t&&s.call(e,n))&&r.push(n);return r}var o=r(7),i=r(125),a=r(136),u=Object.prototype,s=u.hasOwnProperty;e.exports=n},function(e,t,r){var n=r(148),o=r(44),i=r(48),a=o?function(e,t){return o(e,"toString",{configurable:!0,enumerable:!1,value:n(t),writable:!0})}:i;e.exports=a},function(e,t){function r(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}e.exports=r},function(e,t,r){function n(e,t,r){var n=e.length;if(n<2)return n?a(e[0]):[];for(var u=-1,s=Array(n);++u<n;)for(var c=e[u],f=-1;++f<n;)f!=u&&(s[u]=o(s[u]||c,e[f],t,r));return a(i(s,1),t,r)}var o=r(41),i=r(42),a=r(43);e.exports=n},function(e,t,r){function n(e){return o(e)?e:[]}var o=r(17);e.exports=n},function(e,t,r){function n(e,t,r,n){var a=!r;r||(r={});for(var u=-1,s=t.length;++u<s;){var c=t[u],f=n?n(r[c],e[c],c,r,e):void 0;void 0===f&&(f=e[c]),a?i(r,c,f):o(r,c,f)}return r}var o=r(96),i=r(40);e.exports=n},function(e,t,r){var n=r(6),o=n["__core-js_shared__"];e.exports=o},function(e,t,r){function n(e){return o(function(t,r){var n=-1,o=r.length,a=o>1?r[o-1]:void 0,u=o>2?r[2]:void 0;for(a=e.length>3&&"function"==typeof a?(o--,a):void 0,u&&i(r[0],r[1],u)&&(a=o<3?void 0:a,o=1),t=Object(t);++n<o;){var s=r[n];s&&e(t,s,n,a)}return t})}var o=r(5),i=r(122);e.exports=n},function(e,t,r){var n=r(91),o=r(52),i=r(47),a=1/0,u=n&&1/i(new n([,-0]))[1]==a?function(e){return new n(e)}:o;e.exports=u},function(e,t,r){var n=r(139),o=n(Object.getPrototypeOf,Object);e.exports=o},function(e,t,r){function n(e){var t=a.call(e,s),r=e[s];try{e[s]=void 0;var n=!0}catch(e){}var o=u.call(e);return n&&(t?e[s]=r:delete e[s]),o}var o=r(22),i=Object.prototype,a=i.hasOwnProperty,u=i.toString,s=o?o.toStringTag:void 0;e.exports=n},function(e,t){function r(e,t){return null==e?void 0:e[t]}e.exports=r},function(e,t,r){function n(){this.__data__=o?o(null):{},this.size=0}var o=r(15);e.exports=n},function(e,t){function r(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}e.exports=r},function(e,t,r){function n(e){var t=this.__data__;if(o){var r=t[e];return r===i?void 0:r}return u.call(t,e)?t[e]:void 0}var o=r(15),i="__lodash_hash_undefined__",a=Object.prototype,u=a.hasOwnProperty;e.exports=n},function(e,t,r){function n(e){var t=this.__data__;return o?void 0!==t[e]:a.call(t,e)}var o=r(15),i=Object.prototype,a=i.hasOwnProperty;e.exports=n},function(e,t,r){function n(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=o&&void 0===t?i:t,this}var o=r(15),i="__lodash_hash_undefined__";e.exports=n},function(e,t,r){function n(e){return a(e)||i(e)||!!(u&&e&&e[u])}var o=r(22),i=r(49),a=r(3),u=o?o.isConcatSpreadable:void 0;e.exports=n},function(e,t,r){function n(e,t,r){if(!u(r))return!1;var n=typeof t;return!!("number"==n?i(r)&&a(t,r.length):"string"==n&&t in r)&&o(r[t],e)}var o=r(16),i=r(28),a=r(46),u=r(7);e.exports=n},function(e,t){function r(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}e.exports=r},function(e,t,r){function n(e){return!!i&&i in e}var o=r(110),i=function(){var e=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();e.exports=n},function(e,t){function r(e){var t=e&&e.constructor,r="function"==typeof t&&t.prototype||n;return e===r}var n=Object.prototype;e.exports=r},function(e,t){function r(){this.__data__=[],this.size=0}e.exports=r},function(e,t,r){function n(e){var t=this.__data__,r=o(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():a.call(t,r,1),--this.size,!0}var o=r(11),i=Array.prototype,a=i.splice;e.exports=n},function(e,t,r){function n(e){var t=this.__data__,r=o(t,e);return r<0?void 0:t[r][1]}var o=r(11);e.exports=n},function(e,t,r){function n(e){return o(this.__data__,e)>-1}var o=r(11);e.exports=n},function(e,t,r){function n(e,t){var r=this.__data__,n=o(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}var o=r(11);e.exports=n},function(e,t,r){function n(){this.size=0,this.__data__={hash:new o,map:new(a||i),string:new o}}var o=r(88),i=r(89),a=r(90);e.exports=n},function(e,t,r){function n(e){var t=o(this,e).delete(e);return this.size-=t?1:0,t}var o=r(13);e.exports=n},function(e,t,r){function n(e){return o(this,e).get(e)}var o=r(13);e.exports=n},function(e,t,r){function n(e){return o(this,e).has(e)}var o=r(13);e.exports=n},function(e,t,r){function n(e,t){var r=o(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}var o=r(13);e.exports=n},function(e,t){function r(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t}e.exports=r},function(e,t,r){(function(e){var n=r(45),o="object"==typeof t&&t&&!t.nodeType&&t,i=o&&"object"==typeof e&&e&&!e.nodeType&&e,a=i&&i.exports===o,u=a&&n.process,s=function(){try{return u&&u.binding&&u.binding("util")}catch(e){}}();e.exports=s}).call(t,r(32)(e))},function(e,t){function r(e){return o.call(e)}var n=Object.prototype,o=n.toString;e.exports=r},function(e,t){function r(e,t){return function(r){return e(t(r))}}e.exports=r},function(e,t,r){function n(e,t,r){return t=i(void 0===t?e.length-1:t,0),function(){for(var n=arguments,a=-1,u=i(n.length-t,0),s=Array(u);++a<u;)s[a]=n[t+a];a=-1;for(var c=Array(t+1);++a<t;)c[a]=n[a];return c[t]=r(s),o(e,this,c)}}var o=r(39),i=Math.max;e.exports=n},function(e,t){function r(e){return this.__data__.set(e,n),this}var n="__lodash_hash_undefined__";e.exports=r},function(e,t){function r(e){return this.__data__.has(e)}e.exports=r},function(e,t,r){var n=r(105),o=r(144),i=o(n);e.exports=i},function(e,t){function r(e){var t=0,r=0;return function(){var a=i(),u=o-(a-r);if(r=a,u>0){if(++t>=n)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var n=800,o=16,i=Date.now;e.exports=r},function(e,t){function r(e,t,r){for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}e.exports=r},function(e,t){function r(e){if(null!=e){try{return o.call(e)}catch(e){}try{return e+""}catch(e){}}return""}var n=Function.prototype,o=n.toString;e.exports=r},function(e,t,r){var n=r(109),o=r(111),i=r(153),a=o(function(e,t,r,o){n(t,i(t),e,o)});e.exports=a},function(e,t){function r(e){return function(){return e}}e.exports=r},function(e,t,r){var n=r(39),o=r(95),i=r(147),a=r(5),u=a(function(e){return e.push(void 0,o),n(i,void 0,e)});e.exports=u},function(e,t,r){var n=r(25),o=r(99),i=r(5),a=r(108),u=i(function(e){var t=n(e,a);return t.length&&t[0]===e[0]?o(t):[]});e.exports=u},function(e,t,r){(function(e){var n=r(6),o=r(155),i="object"==typeof t&&t&&!t.nodeType&&t,a=i&&"object"==typeof e&&e&&!e.nodeType&&e,u=a&&a.exports===i,s=u?n.Buffer:void 0,c=s?s.isBuffer:void 0,f=c||o;e.exports=f}).call(t,r(32)(e))},function(e,t,r){var n=r(103),o=r(26),i=r(137),a=i&&i.isTypedArray,u=a?o(a):n;e.exports=u},function(e,t,r){function n(e){return a(e)?o(e,!0):i(e)}var o=r(93),i=r(104),a=r(28);e.exports=n},function(e,t,r){function n(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(i);var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(n.Cache||o),r}var o=r(38),i="Expected a function";n.Cache=o,e.exports=n},function(e,t){function r(){return!1}e.exports=r},function(e,t,r){var n=r(42),o=r(5),i=r(43),a=r(17),u=o(function(e){return i(n(e,1,a,!0))});e.exports=u},function(e,t,r){var n=r(92),o=r(5),i=r(107),a=r(17),u=o(function(e){return i(n(e,a))});e.exports=u},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var i=r(156),a=n(i),u=r(53),s=n(u),c=function(){function e(){o(this,e),this.entered=[]}return e.prototype.enter=function(e){var t=this.entered.length;return this.entered=a.default(this.entered.filter(function(t){return document.documentElement.contains(t)&&(!t.contains||t.contains(e))}),[e]),0===t&&this.entered.length>0},e.prototype.leave=function(e){var t=this.entered.length;return this.entered=s.default(this.entered.filter(function(e){return document.documentElement.contains(e)}),e),t>0&&0===this.entered.length},e.prototype.reset=function(){this.entered=[]},e}();t.default=c,e.exports=t.default},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var a=r(149),u=o(a),s=r(165),c=o(s),f=r(158),l=o(f),d=r(54),p=r(162),h=r(161),g=r(29),v=n(g),y=function(){function e(t){i(this,e),this.actions=t.getActions(),this.monitor=t.getMonitor(),this.registry=t.getRegistry(),this.sourcePreviewNodes={},this.sourcePreviewNodeOptions={},this.sourceNodes={},this.sourceNodeOptions={},this.enterLeaveCounter=new l.default,this.getSourceClientOffset=this.getSourceClientOffset.bind(this),this.handleTopDragStart=this.handleTopDragStart.bind(this),this.handleTopDragStartCapture=this.handleTopDragStartCapture.bind(this),this.handleTopDragEndCapture=this.handleTopDragEndCapture.bind(this),this.handleTopDragEnter=this.handleTopDragEnter.bind(this),this.handleTopDragEnterCapture=this.handleTopDragEnterCapture.bind(this),this.handleTopDragLeaveCapture=this.handleTopDragLeaveCapture.bind(this),this.handleTopDragOver=this.handleTopDragOver.bind(this),this.handleTopDragOverCapture=this.handleTopDragOverCapture.bind(this),this.handleTopDrop=this.handleTopDrop.bind(this),this.handleTopDropCapture=this.handleTopDropCapture.bind(this),this.handleSelectStart=this.handleSelectStart.bind(this),this.endDragIfSourceWasRemovedFromDOM=this.endDragIfSourceWasRemovedFromDOM.bind(this),this.endDragNativeItem=this.endDragNativeItem.bind(this)}return e.prototype.setup=function(){if("undefined"!=typeof window){if(this.constructor.isSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");this.constructor.isSetUp=!0,this.addEventListeners(window)}},e.prototype.teardown=function(){"undefined"!=typeof window&&(this.constructor.isSetUp=!1,this.removeEventListeners(window),this.clearCurrentDragSourceNode())},e.prototype.addEventListeners=function(e){e.addEventListener("dragstart",this.handleTopDragStart),e.addEventListener("dragstart",this.handleTopDragStartCapture,!0),e.addEventListener("dragend",this.handleTopDragEndCapture,!0),e.addEventListener("dragenter",this.handleTopDragEnter),e.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.addEventListener("dragover",this.handleTopDragOver),e.addEventListener("dragover",this.handleTopDragOverCapture,!0),e.addEventListener("drop",this.handleTopDrop),e.addEventListener("drop",this.handleTopDropCapture,!0)},e.prototype.removeEventListeners=function(e){e.removeEventListener("dragstart",this.handleTopDragStart),e.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),e.removeEventListener("dragend",this.handleTopDragEndCapture,!0),e.removeEventListener("dragenter",this.handleTopDragEnter),e.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.removeEventListener("dragover",this.handleTopDragOver),e.removeEventListener("dragover",this.handleTopDragOverCapture,!0),e.removeEventListener("drop",this.handleTopDrop),e.removeEventListener("drop",this.handleTopDropCapture,!0)},e.prototype.connectDragPreview=function(e,t,r){
var n=this;return this.sourcePreviewNodeOptions[e]=r,this.sourcePreviewNodes[e]=t,function(){delete n.sourcePreviewNodes[e],delete n.sourcePreviewNodeOptions[e]}},e.prototype.connectDragSource=function(e,t,r){var n=this;this.sourceNodes[e]=t,this.sourceNodeOptions[e]=r;var o=function(t){return n.handleDragStart(t,e)},i=function(t){return n.handleSelectStart(t,e)};return t.setAttribute("draggable",!0),t.addEventListener("dragstart",o),t.addEventListener("selectstart",i),function(){delete n.sourceNodes[e],delete n.sourceNodeOptions[e],t.removeEventListener("dragstart",o),t.removeEventListener("selectstart",i),t.setAttribute("draggable",!1)}},e.prototype.connectDropTarget=function(e,t){var r=this,n=function(t){return r.handleDragEnter(t,e)},o=function(t){return r.handleDragOver(t,e)},i=function(t){return r.handleDrop(t,e)};return t.addEventListener("dragenter",n),t.addEventListener("dragover",o),t.addEventListener("drop",i),function(){t.removeEventListener("dragenter",n),t.removeEventListener("dragover",o),t.removeEventListener("drop",i)}},e.prototype.getCurrentSourceNodeOptions=function(){var e=this.monitor.getSourceId(),t=this.sourceNodeOptions[e];return u.default(t||{},{dropEffect:"move"})},e.prototype.getCurrentDropEffect=function(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect},e.prototype.getCurrentSourcePreviewNodeOptions=function(){var e=this.monitor.getSourceId(),t=this.sourcePreviewNodeOptions[e];return u.default(t||{},{anchorX:.5,anchorY:.5,captureDraggingState:!1})},e.prototype.getSourceClientOffset=function(e){return p.getNodeClientOffset(this.sourceNodes[e])},e.prototype.isDraggingNativeItem=function(){var e=this.monitor.getItemType();return Object.keys(v).some(function(t){return v[t]===e})},e.prototype.beginDragNativeItem=function(e){this.clearCurrentDragSourceNode();var t=h.createNativeDragSource(e);this.currentNativeSource=new t,this.currentNativeHandle=this.registry.addSource(e,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle]),d.isFirefox()&&window.addEventListener("mousemove",this.endDragNativeItem,!0)},e.prototype.endDragNativeItem=function(){this.isDraggingNativeItem()&&(d.isFirefox()&&window.removeEventListener("mousemove",this.endDragNativeItem,!0),this.actions.endDrag(),this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)},e.prototype.endDragIfSourceWasRemovedFromDOM=function(){var e=this.currentDragSourceNode;document.body.contains(e)||this.clearCurrentDragSourceNode()&&this.actions.endDrag()},e.prototype.setCurrentDragSourceNode=function(e){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=e,this.currentDragSourceNodeOffset=p.getNodeClientOffset(e),this.currentDragSourceNodeOffsetChanged=!1,window.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)},e.prototype.clearCurrentDragSourceNode=function(){return!!this.currentDragSourceNode&&(this.currentDragSourceNode=null,this.currentDragSourceNodeOffset=null,this.currentDragSourceNodeOffsetChanged=!1,window.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0),!0)},e.prototype.checkIfCurrentDragSourceRectChanged=function(){var e=this.currentDragSourceNode;return!!e&&(!!this.currentDragSourceNodeOffsetChanged||(this.currentDragSourceNodeOffsetChanged=!c.default(p.getNodeClientOffset(e),this.currentDragSourceNodeOffset),this.currentDragSourceNodeOffsetChanged))},e.prototype.handleTopDragStartCapture=function(){this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},e.prototype.handleDragStart=function(e,t){this.dragStartSourceIds.unshift(t)},e.prototype.handleTopDragStart=function(e){var t=this,r=this.dragStartSourceIds;this.dragStartSourceIds=null;var n=p.getEventClientOffset(e);this.actions.beginDrag(r,{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:n});var o=e.dataTransfer,i=h.matchNativeItemType(o);if(this.monitor.isDragging()){if("function"==typeof o.setDragImage){var a=this.monitor.getSourceId(),u=this.sourceNodes[a],s=this.sourcePreviewNodes[a]||u,c=this.getCurrentSourcePreviewNodeOptions(),f=c.anchorX,l=c.anchorY,d={anchorX:f,anchorY:l},g=p.getDragPreviewOffset(u,s,n,d);o.setDragImage(s,g.x,g.y)}try{o.setData("application/json",{})}catch(e){}this.setCurrentDragSourceNode(e.target);var v=this.getCurrentSourcePreviewNodeOptions(),y=v.captureDraggingState;y?this.actions.publishDragSource():setTimeout(function(){return t.actions.publishDragSource()})}else if(i)this.beginDragNativeItem(i);else{if(!(o.types||e.target.hasAttribute&&e.target.hasAttribute("draggable")))return;e.preventDefault()}},e.prototype.handleTopDragEndCapture=function(){this.clearCurrentDragSourceNode()&&this.actions.endDrag()},e.prototype.handleTopDragEnterCapture=function(e){this.dragEnterTargetIds=[];var t=this.enterLeaveCounter.enter(e.target);if(t&&!this.monitor.isDragging()){var r=e.dataTransfer,n=h.matchNativeItemType(r);n&&this.beginDragNativeItem(n)}},e.prototype.handleDragEnter=function(e,t){this.dragEnterTargetIds.unshift(t)},e.prototype.handleTopDragEnter=function(e){var t=this,r=this.dragEnterTargetIds;if(this.dragEnterTargetIds=[],this.monitor.isDragging()){d.isFirefox()||this.actions.hover(r,{clientOffset:p.getEventClientOffset(e)});var n=r.some(function(e){return t.monitor.canDropOnTarget(e)});n&&(e.preventDefault(),e.dataTransfer.dropEffect=this.getCurrentDropEffect())}},e.prototype.handleTopDragOverCapture=function(){this.dragOverTargetIds=[]},e.prototype.handleDragOver=function(e,t){this.dragOverTargetIds.unshift(t)},e.prototype.handleTopDragOver=function(e){var t=this,r=this.dragOverTargetIds;if(this.dragOverTargetIds=[],!this.monitor.isDragging())return e.preventDefault(),void(e.dataTransfer.dropEffect="none");this.actions.hover(r,{clientOffset:p.getEventClientOffset(e)});var n=r.some(function(e){return t.monitor.canDropOnTarget(e)});n?(e.preventDefault(),e.dataTransfer.dropEffect=this.getCurrentDropEffect()):this.isDraggingNativeItem()?(e.preventDefault(),e.dataTransfer.dropEffect="none"):this.checkIfCurrentDragSourceRectChanged()&&(e.preventDefault(),e.dataTransfer.dropEffect="move")},e.prototype.handleTopDragLeaveCapture=function(e){this.isDraggingNativeItem()&&e.preventDefault();var t=this.enterLeaveCounter.leave(e.target);t&&this.isDraggingNativeItem()&&this.endDragNativeItem()},e.prototype.handleTopDropCapture=function(e){this.dropTargetIds=[],e.preventDefault(),this.isDraggingNativeItem()&&this.currentNativeSource.mutateItemByReadingDataTransfer(e.dataTransfer),this.enterLeaveCounter.reset()},e.prototype.handleDrop=function(e,t){this.dropTargetIds.unshift(t)},e.prototype.handleTopDrop=function(e){var t=this.dropTargetIds;this.dropTargetIds=[],this.actions.hover(t,{clientOffset:p.getEventClientOffset(e)}),this.actions.drop(),this.isDraggingNativeItem()?this.endDragNativeItem():this.endDragIfSourceWasRemovedFromDOM()},e.prototype.handleSelectStart=function(e){var t=e.target;"function"==typeof t.dragDrop&&("INPUT"===t.tagName||"SELECT"===t.tagName||"TEXTAREA"===t.tagName||t.isContentEditable||(e.preventDefault(),t.dragDrop()))},e}();t.default=y,e.exports=t.default},function(e,t){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var n=function(){function e(t,n){r(this,e);for(var o=t.length,i=[],a=0;a<o;a++)i.push(a);i.sort(function(e,r){return t[e]<t[r]?-1:1});for(var u=[],s=[],c=[],f=void 0,l=void 0,a=0;a<o-1;a++)f=t[a+1]-t[a],l=n[a+1]-n[a],s.push(f),u.push(l),c.push(l/f);for(var d=[c[0]],a=0;a<s.length-1;a++){var p=c[a],h=c[a+1];if(p*h<=0)d.push(0);else{f=s[a];var g=s[a+1],v=f+g;d.push(3*v/((v+g)/p+(v+f)/h))}}d.push(c[c.length-1]);for(var y=[],m=[],b=void 0,a=0;a<d.length-1;a++){b=c[a];var D=d[a],_=1/s[a],v=D+d[a+1]-b-b;y.push((b-D-v)*_),m.push(v*_*_)}this.xs=t,this.ys=n,this.c1s=d,this.c2s=y,this.c3s=m}return e.prototype.interpolate=function(e){var t=this.xs,r=this.ys,n=this.c1s,o=this.c2s,i=this.c3s,a=t.length-1;if(e===t[a])return r[a];for(var u=0,s=i.length-1,c=void 0;u<=s;){c=Math.floor(.5*(u+s));var f=t[c];if(f<e)u=c+1;else{if(!(f>e))return r[c];s=c-1}}a=Math.max(0,s);var l=e-t[a],d=l*l;return r[a]+n[a]*l+o[a]*d+i[a]*l*d},e}();t.default=n,e.exports=t.default},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t,r){var n=t.reduce(function(t,r){return t||e.getData(r)},null);return null!=n?n:r}function u(e){var t=d[e],r=t.exposeProperty,n=t.matchesTypes,a=t.getData;return function(){function e(){o(this,e),this.item=Object.defineProperties({},i({},r,{get:function(){return console.warn("Browser doesn't allow reading \""+r+'" until the drop event.'),null},configurable:!0,enumerable:!0}))}return e.prototype.mutateItemByReadingDataTransfer=function(e){delete this.item[r],this.item[r]=a(e,n)},e.prototype.canDrag=function(){return!0},e.prototype.beginDrag=function(){return this.item},e.prototype.isDragging=function(e,t){return t===e.getSourceId()},e.prototype.endDrag=function(){},e}()}function s(e){var t=Array.prototype.slice.call(e.types||[]);return Object.keys(d).filter(function(e){var r=d[e].matchesTypes;return r.some(function(e){return t.indexOf(e)>-1})})[0]||null}t.__esModule=!0;var c;t.createNativeDragSource=u,t.matchNativeItemType=s;var f=r(29),l=n(f),d=(c={},i(c,l.FILE,{exposeProperty:"files",matchesTypes:["Files"],getData:function(e){return Array.prototype.slice.call(e.files)}}),i(c,l.URL,{exposeProperty:"urls",matchesTypes:["Url","text/uri-list"],getData:function(e,t){return a(e,t,"").split("\n")}}),i(c,l.TEXT,{exposeProperty:"text",matchesTypes:["Text","text/plain"],getData:function(e,t){return a(e,t,"")}}),c)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.nodeType===f?e:e.parentElement;if(!t)return null;var r=t.getBoundingClientRect(),n=r.top,o=r.left;return{x:o,y:n}}function i(e){return{x:e.clientX,y:e.clientY}}function a(e,t,r,n){var i="IMG"===t.nodeName&&(u.isFirefox()||!document.documentElement.contains(t)),a=i?e:t,s=o(a),f={x:r.x-s.x,y:r.y-s.y},l=e.offsetWidth,d=e.offsetHeight,p=n.anchorX,h=n.anchorY,g=i?t.width:l,v=i?t.height:d;u.isSafari()&&i?(v/=window.devicePixelRatio,g/=window.devicePixelRatio):u.isFirefox()&&!i&&(v*=window.devicePixelRatio,g*=window.devicePixelRatio);var y=new c.default([0,.5,1],[f.x,f.x/l*g,f.x+g-l]),m=new c.default([0,.5,1],[f.y,f.y/d*v,f.y+v-d]),b=y.interpolate(p),D=m.interpolate(h);return u.isSafari()&&i&&(D+=(window.devicePixelRatio-1)*v),{x:b,y:D}}t.__esModule=!0,t.getNodeClientOffset=o,t.getEventClientOffset=i,t.getDragPreviewOffset=a;var u=r(54),s=r(160),c=n(s),f=1},function(e,t){"use strict";function r(){return n||(n=new Image,n.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),n}t.__esModule=!0,t.default=r;var n=void 0;e.exports=t.default},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function i(e){return new u.default(e)}t.__esModule=!0,t.default=i;var a=r(159),u=o(a),s=r(163),c=o(s),f=r(29),l=n(f);t.NativeTypes=l,t.getEmptyImage=c.default},function(e,t){"use strict";function r(e,t){if(e===t)return!0;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(var o=Object.prototype.hasOwnProperty,i=0;i<r.length;i++){if(!o.call(t,r[i])||e[r[i]]!==t[r[i]])return!1;var a=e[r[i]],u=t[r[i]];if(a!==u)return!1}return!0}t.__esModule=!0,t.default=r,e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){v.default.apply(void 0,["DragDropContext","backend"].concat(s.call(arguments)));var t=void 0;t="object"==typeof e&&"function"==typeof e.default?e.default:e,h.default("function"==typeof t,"Expected the backend to be a function or an ES6 module exporting a default function. Read more: http://gaearon.github.io/react-dnd/docs-drag-drop-context.html");var r={dragDropManager:new d.DragDropManager(t)};return function(e){var t=e.displayName||e.name||"Component";return function(n){function a(){o(this,a),n.apply(this,arguments)}return i(a,n),a.prototype.getDecoratedComponentInstance=function(){return this.refs.child},a.prototype.getManager=function(){return r.dragDropManager},a.prototype.getChildContext=function(){return r},a.prototype.render=function(){return l.default.createElement(e,u({},this.props,{ref:"child"}))},c(a,null,[{key:"DecoratedComponent",value:e,enumerable:!0},{key:"displayName",value:"DragDropContext("+t+")",enumerable:!0},{key:"childContextTypes",value:{dragDropManager:f.PropTypes.object.isRequired},enumerable:!0}]),a}(f.Component)}}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=Array.prototype.slice,c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();t.default=a;var f=r(2),l=n(f),d=r(80),p=r(1),h=n(p),g=r(18),v=n(g);e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return _.default.apply(void 0,["DragLayer","collect[, options]"].concat(s.call(arguments))),b.default("function"==typeof e,'Expected "collect" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ',"Instead, received %s. Read more: http://gaearon.github.io/react-dnd/docs-drag-layer.html",e),b.default(y.default(t),'Expected "options" provided as the second argument to DragLayer to be a plain object when specified. Instead, received %s. Read more: http://gaearon.github.io/react-dnd/docs-drag-layer.html',t),function(r){var n=t.arePropsEqual,a=void 0===n?g.default:n,s=r.displayName||r.name||"Component";return function(t){function n(e,r){o(this,n),t.call(this,e),this.handleChange=this.handleChange.bind(this),this.manager=r.dragDropManager,b.default("object"==typeof this.manager,"Could not find the drag and drop manager in the context of %s. Make sure to wrap the top-level component of your app with DragDropContext. Read more: http://gaearon.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context",s,s),this.state=this.getCurrentState()}return i(n,t),n.prototype.getDecoratedComponentInstance=function(){return this.refs.child},n.prototype.shouldComponentUpdate=function(e,t){return!a(e,this.props)||!p.default(t,this.state)},c(n,null,[{key:"DecoratedComponent",value:r,enumerable:!0},{key:"displayName",value:"DragLayer("+s+")",enumerable:!0},{key:"contextTypes",value:{dragDropManager:f.PropTypes.object.isRequired},enumerable:!0}]),n.prototype.componentDidMount=function(){this.isCurrentlyMounted=!0;var e=this.manager.getMonitor();this.unsubscribeFromOffsetChange=e.subscribeToOffsetChange(this.handleChange),this.unsubscribeFromStateChange=e.subscribeToStateChange(this.handleChange),this.handleChange()},n.prototype.componentWillUnmount=function(){this.isCurrentlyMounted=!1,this.unsubscribeFromOffsetChange(),this.unsubscribeFromStateChange()},n.prototype.handleChange=function(){if(this.isCurrentlyMounted){var e=this.getCurrentState();p.default(e,this.state)||this.setState(e)}},n.prototype.getCurrentState=function(){var t=this.manager.getMonitor();return e(t)},n.prototype.render=function(){return l.default.createElement(r,u({},this.props,this.state,{ref:"child"}))},n}(f.Component)}}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=Array.prototype.slice,c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();t.default=a;var f=r(2),l=n(f),d=r(31),p=n(d),h=r(58),g=n(h),v=r(4),y=n(v),m=r(1),b=n(m),D=r(18),_=n(D);e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,r){var n=arguments.length<=3||void 0===arguments[3]?{}:arguments[3];l.default.apply(void 0,["DragSource","type, spec, collect[, options]"].concat(i.call(arguments)));var o=e;"function"!=typeof e&&(u.default(x.default(e),'Expected "type" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html',e),o=function(){return e}),u.default(c.default(t),'Expected "spec" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html',t);var a=y.default(t);return u.default("function"==typeof r,'Expected "collect" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html',r),u.default(c.default(n),'Expected "options" provided as the fourth argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html',r),function(e){return p.default({connectBackend:function(e,t){return e.connectDragSource(t)},containerDisplayName:"DragSource",createHandler:a,registerHandler:g.default,createMonitor:b.default,createConnector:_.default,DecoratedComponent:e,getType:o,collect:r,options:n})}}t.__esModule=!0;var i=Array.prototype.slice;t.default=o;var a=r(1),u=n(a),s=r(4),c=n(s),f=r(18),l=n(f),d=r(56),p=n(d),h=r(176),g=n(h),v=r(171),y=n(v),m=r(172),b=n(m),D=r(170),_=n(D),T=r(57),x=n(T);e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,r){var n=arguments.length<=3||void 0===arguments[3]?{}:arguments[3];l.default.apply(void 0,["DropTarget","type, spec, collect[, options]"].concat(i.call(arguments)));var o=e;"function"!=typeof e&&(u.default(x.default(e,!0),'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html',e),o=function(){return e}),u.default(c.default(t),'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html',t);var a=y.default(t);return u.default("function"==typeof r,'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html',r),u.default(c.default(n),'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html',r),function(e){return p.default({connectBackend:function(e,t){return e.connectDropTarget(t)},containerDisplayName:"DropTarget",createHandler:a,registerHandler:g.default,createMonitor:b.default,createConnector:_.default,DecoratedComponent:e,getType:o,collect:r,options:n})}}t.__esModule=!0;var i=Array.prototype.slice;t.default=o;var a=r(1),u=n(a),s=r(4),c=n(s),f=r(18),l=n(f),d=r(56),p=n(d),h=r(177),g=n(h),v=r(174),y=n(v),m=r(175),b=n(m),D=r(173),_=n(D),T=r(57),x=n(T);e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){function t(){c&&(c(),c=null),o&&i&&(c=e.connectDragSource(o,i,u))}function r(){d&&(d(),d=null),o&&f&&(d=e.connectDragPreview(o,f,l))}function n(e){e!==o&&(o=e,t(),r())}var o=void 0,i=void 0,u=void 0,c=void 0,f=void 0,l=void 0,d=void 0,p=a.default({dragSource:function(e,r){e===i&&s.default(r,u)||(i=e,u=r,t())},dragPreview:function(e,t){e===f&&s.default(t,l)||(f=e,l=t,r())}});return{receiveHandlerId:n,hooks:p}}t.__esModule=!0,t.default=o;var i=r(59),a=n(i),u=r(55),s=n(u);e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){Object.keys(e).forEach(function(t){u.default(c.indexOf(t)>-1,'Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html',c.join(", "),t),u.default("function"==typeof e[t],"Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html",t,t,e[t])}),f.forEach(function(t){u.default("function"==typeof e[t],"Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html",t,t,e[t])});var t=function(){function t(e){o(this,t),this.monitor=e,this.props=null,this.component=null}return t.prototype.receiveProps=function(e){this.props=e},t.prototype.receiveComponent=function(e){this.component=e},t.prototype.canDrag=function(){return!e.canDrag||e.canDrag(this.props,this.monitor)},t.prototype.isDragging=function(t,r){return e.isDragging?e.isDragging(this.props,this.monitor):r===t.getSourceId()},t.prototype.beginDrag=function(){var t=e.beginDrag(this.props,this.monitor,this.component);return t},t.prototype.endDrag=function(){e.endDrag&&e.endDrag(this.props,this.monitor,this.component)},t}();return function(e){return new t(e)}}t.__esModule=!0,t.default=i;var a=r(1),u=n(a),s=r(4),c=(n(s),["canDrag","beginDrag","canDrag","isDragging","endDrag"]),f=["beginDrag"];e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){return new f(e)}t.__esModule=!0,t.default=i;var a=r(1),u=n(a),s=!1,c=!1,f=function(){function e(t){o(this,e),this.internalMonitor=t.getMonitor()}return e.prototype.receiveHandlerId=function(e){this.sourceId=e},e.prototype.canDrag=function(){u.default(!s,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://gaearon.github.io/react-dnd/docs-drag-source-monitor.html");try{return s=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{s=!1}},e.prototype.isDragging=function(){u.default(!c,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://gaearon.github.io/react-dnd/docs-drag-source-monitor.html");try{return c=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{c=!1}},e.prototype.getItemType=function(){return this.internalMonitor.getItemType()},e.prototype.getItem=function(){return this.internalMonitor.getItem()},e.prototype.getDropResult=function(){return this.internalMonitor.getDropResult()},e.prototype.didDrop=function(){return this.internalMonitor.didDrop()},e.prototype.getInitialClientOffset=function(){return this.internalMonitor.getInitialClientOffset()},e.prototype.getInitialSourceClientOffset=function(){return this.internalMonitor.getInitialSourceClientOffset()},e.prototype.getSourceClientOffset=function(){return this.internalMonitor.getSourceClientOffset()},e.prototype.getClientOffset=function(){return this.internalMonitor.getClientOffset()},e.prototype.getDifferenceFromInitialOffset=function(){return this.internalMonitor.getDifferenceFromInitialOffset()},e}();e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){function t(){u&&(u(),u=null),n&&o&&(u=e.connectDropTarget(n,o,i))}function r(e){e!==n&&(n=e,t())}var n=void 0,o=void 0,i=void 0,u=void 0,c=a.default({dropTarget:function(e,r){e===o&&s.default(r,i)||(o=e,i=r,t())}});return{receiveHandlerId:r,hooks:c}}t.__esModule=!0,t.default=o;var i=r(59),a=n(i),u=r(55),s=n(u);e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){Object.keys(e).forEach(function(t){u.default(c.indexOf(t)>-1,'Expected the drop target specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html',c.join(", "),t),u.default("function"==typeof e[t],"Expected %s in the drop target specification to be a function. Instead received a specification with %s: %s. Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html",t,t,e[t])});var t=function(){function t(e){o(this,t),this.monitor=e,this.props=null,this.component=null}return t.prototype.receiveProps=function(e){this.props=e},t.prototype.receiveMonitor=function(e){this.monitor=e},t.prototype.receiveComponent=function(e){this.component=e},t.prototype.canDrop=function(){return!e.canDrop||e.canDrop(this.props,this.monitor)},t.prototype.hover=function(){e.hover&&e.hover(this.props,this.monitor,this.component)},t.prototype.drop=function(){if(e.drop){var t=e.drop(this.props,this.monitor,this.component);return t}},t}();return function(e){return new t(e)}}t.__esModule=!0,t.default=i;var a=r(1),u=n(a),s=r(4),c=(n(s),["canDrop","hover","drop"]);e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){return new c(e)}t.__esModule=!0,t.default=i;var a=r(1),u=n(a),s=!1,c=function(){function e(t){o(this,e),this.internalMonitor=t.getMonitor()}return e.prototype.receiveHandlerId=function(e){this.targetId=e},e.prototype.canDrop=function(){u.default(!s,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://gaearon.github.io/react-dnd/docs-drop-target-monitor.html");try{return s=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{s=!1}},e.prototype.isOver=function(e){return this.internalMonitor.isOverTarget(this.targetId,e)},e.prototype.getItemType=function(){return this.internalMonitor.getItemType()},e.prototype.getItem=function(){return this.internalMonitor.getItem()},e.prototype.getDropResult=function(){return this.internalMonitor.getDropResult()},e.prototype.didDrop=function(){return this.internalMonitor.didDrop()},e.prototype.getInitialClientOffset=function(){return this.internalMonitor.getInitialClientOffset()},e.prototype.getInitialSourceClientOffset=function(){return this.internalMonitor.getInitialSourceClientOffset()},e.prototype.getSourceClientOffset=function(){return this.internalMonitor.getSourceClientOffset()},e.prototype.getClientOffset=function(){return this.internalMonitor.getClientOffset()},e.prototype.getDifferenceFromInitialOffset=function(){return this.internalMonitor.getDifferenceFromInitialOffset()},e}();e.exports=t.default},function(e,t){"use strict";function r(e,t,r){function n(){o.removeSource(i)}var o=r.getRegistry(),i=o.addSource(e,t);return{handlerId:i,unregister:n}}t.__esModule=!0,t.default=r,e.exports=t.default},function(e,t){"use strict";function r(e,t,r){function n(){o.removeTarget(i)}var o=r.getRegistry(),i=o.addTarget(e,t);return{handlerId:i,unregister:n}}t.__esModule=!0,t.default=r,e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r=e.ref;return a.default("string"!=typeof r,"Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute"),r?u.cloneElement(e,{ref:function(e){t(e),r&&r(e)}}):u.cloneElement(e,{ref:t})}t.__esModule=!0,t.default=o;var i=r(1),a=n(i),u=r(2);e.exports=t.default},function(e,t){"use strict";function r(e,t){if(null==e)throw new TypeError("Object.assign target cannot be null or undefined");for(var r=Object(e),n=Object.prototype.hasOwnProperty,o=1;o<arguments.length;o++){var i=arguments[o];if(null!=i){var a=Object(i);for(var u in a)n.call(a,u)&&(r[u]=a[u])}}return r}e.exports=r},function(e,t,r){"use strict";function n(e){return Array.isArray(e)?e.concat():e&&"object"==typeof e?a(new e.constructor,e):e}function o(e,t,r){Array.isArray(e)?void 0:s(!1);var n=t[r];Array.isArray(n)?void 0:s(!1)}function i(e,t){if("object"!=typeof t?s(!1):void 0,c.call(t,p))return 1!==Object.keys(t).length?s(!1):void 0,t[p];var r=n(e);if(c.call(t,h)){var u=t[h];u&&"object"==typeof u?void 0:s(!1),r&&"object"==typeof r?void 0:s(!1),a(r,t[h])}c.call(t,f)&&(o(e,t,f),t[f].forEach(function(e){r.push(e)})),c.call(t,l)&&(o(e,t,l),t[l].forEach(function(e){r.unshift(e)})),c.call(t,d)&&(Array.isArray(e)?void 0:s(!1),Array.isArray(t[d])?void 0:s(!1),t[d].forEach(function(e){Array.isArray(e)?void 0:s(!1),r.splice.apply(r,e)})),c.call(t,g)&&("function"!=typeof t[g]?s(!1):void 0,r=t[g](r));for(var v in t)y.hasOwnProperty(v)&&y[v]||(r[v]=i(e[v],t[v]));return r}var a=r(179),u=r(87),s=r(86),c={}.hasOwnProperty,f=u({$push:null}),l=u({$unshift:null}),d=u({$splice:null}),p=u({$set:null}),h=u({$merge:null}),g=u({$apply:null}),v=[f,l,d,p,h,g],y={};v.forEach(function(e){y[e]=!0}),e.exports=i},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,r){function n(){y===v&&(y=v.slice())}function i(){return g}function u(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return n(),y.push(e),function(){if(t){t=!1,n();var r=y.indexOf(e);y.splice(r,1)}}}function f(e){if(!(0,a.default)(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(m)throw new Error("Reducers may not dispatch actions.");try{m=!0,g=h(g,e)}finally{m=!1}for(var t=v=y,r=0;r<t.length;r++)t[r]();return e}function l(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");h=e,f({type:c.INIT})}function d(){var e,t=u;return e={subscribe:function(e){function r(){e.next&&e.next(i())}if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");r();var n=t(r);return{unsubscribe:n
}}},e[s.default]=function(){return this},e}var p;if("function"==typeof t&&"undefined"==typeof r&&(r=t,t=void 0),"undefined"!=typeof r){if("function"!=typeof r)throw new Error("Expected the enhancer to be a function.");return r(o)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var h=e,g=t,v=[],y=v,m=!1;return f({type:c.INIT}),p={dispatch:f,subscribe:u,getState:i,replaceReducer:l},p[s.default]=d,p}t.__esModule=!0,t.ActionTypes=void 0,t.default=o;var i=r(4),a=n(i),u=r(182),s=n(u),c=t.ActionTypes={INIT:"@@redux/INIT"}},function(e,t,r){e.exports=r(183)},function(e,t,r){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o,i=r(184),a=n(i);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:e;var u=(0,a.default)(o);t.default=u}).call(t,r(32)(e))},function(e,t){"use strict";function r(e){var t,r=e.Symbol;return"function"==typeof r?r.observable?t=r.observable:(t=r("observable"),r.observable=t):t="@@observable",t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,r){e.exports=t}])});
//# sourceMappingURL=lib.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(3);
var ReactDOM = __webpack_require__(16);
var ExecutionEnvironment = __webpack_require__(316);
var ModalPortal = React.createFactory(__webpack_require__(349));
var ariaAppHider = __webpack_require__(350);
var elementClass = __webpack_require__(315);
var renderSubtreeIntoContainer = __webpack_require__(16).unstable_renderSubtreeIntoContainer;
var Assign = __webpack_require__(44);

var SafeHTMLElement = ExecutionEnvironment.canUseDOM ? window.HTMLElement : {};
var AppElement = ExecutionEnvironment.canUseDOM ? document.body : {appendChild: function() {}};

function getParentElement(parentSelector) {
  return parentSelector();
}

var Modal = React.createClass({

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
    isOpen: React.PropTypes.bool.isRequired,
    style: React.PropTypes.shape({
      content: React.PropTypes.object,
      overlay: React.PropTypes.object
    }),
    portalClassName: React.PropTypes.string,
    appElement: React.PropTypes.instanceOf(SafeHTMLElement),
    onAfterOpen: React.PropTypes.func,
    onRequestClose: React.PropTypes.func,
    closeTimeoutMS: React.PropTypes.number,
    ariaHideApp: React.PropTypes.bool,
    shouldCloseOnOverlayClick: React.PropTypes.bool,
    parentSelector: React.PropTypes.func,
    role: React.PropTypes.string,
    contentLabel: React.PropTypes.string.isRequired
  },

  getDefaultProps: function () {
    return {
      isOpen: false,
      portalClassName: 'ReactModalPortal',
      ariaHideApp: true,
      closeTimeoutMS: 0,
      shouldCloseOnOverlayClick: true,
      parentSelector: function () { return document.body; }
    };
  },

  componentDidMount: function() {
    this.node = document.createElement('div');
    this.node.className = this.props.portalClassName;

    var parent = getParentElement(this.props.parentSelector);
    parent.appendChild(this.node);
    this.renderPortal(this.props);
  },

  componentWillReceiveProps: function(newProps) {
    var currentParent = getParentElement(this.props.parentSelector);
    var newParent = getParentElement(newProps.parentSelector);

    if(newParent !== currentParent) {
      currentParent.removeChild(this.node);
      newParent.appendChild(this.node);
    }

    this.renderPortal(newProps);
  },

  componentWillUnmount: function() {
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

      setTimeout(this.removePortal.bind(this), closesAt - now);
    } else {
      this.removePortal();
    }
  },

  removePortal: function() {
    ReactDOM.unmountComponentAtNode(this.node);
    var parent = getParentElement(this.props.parentSelector);
    parent.removeChild(this.node);
    elementClass(document.body).remove('ReactModal__Body--open');
  },

  renderPortal: function(props) {
    if (props.isOpen) {
      elementClass(document.body).add('ReactModal__Body--open');
    } else {
      elementClass(document.body).remove('ReactModal__Body--open');
    }

    if (props.ariaHideApp) {
      ariaAppHider.toggle(props.isOpen, props.appElement);
    }

    this.portal = renderSubtreeIntoContainer(this, ModalPortal(Assign({}, props, {defaultStyles: Modal.defaultStyles})), this.node);
  },

  render: function () {
    return React.DOM.noscript();
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

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(3);
var div = React.DOM.div;
var focusManager = __webpack_require__(351);
var scopeTab = __webpack_require__(352);
var Assign = __webpack_require__(44);

// so that our CSS is statically analyzable
var CLASS_NAMES = {
  overlay: {
    base: 'ReactModal__Overlay',
    afterOpen: 'ReactModal__Overlay--after-open',
    beforeClose: 'ReactModal__Overlay--before-close'
  },
  content: {
    base: 'ReactModal__Content',
    afterOpen: 'ReactModal__Content--after-open',
    beforeClose: 'ReactModal__Content--before-close'
  }
};

var ModalPortal = module.exports = React.createClass({

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
    var className = CLASS_NAMES[which].base;
    if (this.state.afterOpen)
      className += ' '+CLASS_NAMES[which].afterOpen;
    if (this.state.beforeClose)
      className += ' '+CLASS_NAMES[which].beforeClose;
    return additional ? className + ' ' + additional : className;
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

/***/ 350:
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

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

var findTabbable = __webpack_require__(194);
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

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

var findTabbable = __webpack_require__(194);

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

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(313);
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

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _react = __webpack_require__(3);

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(16);

var ReactDOM = _interopRequireWildcard(_reactDom);

var _Dashboard = __webpack_require__(224);

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _BaseWidget = __webpack_require__(223);

var _BaseWidget2 = _interopRequireDefault(_BaseWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

global.Dashboard = _Dashboard2.default;
global.BaseWidget = _BaseWidget2.default;
global.React = React;
global.ReactDOM = ReactDOM;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),

/***/ 44:
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

/***/ 7:
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

/***/ 79:
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
};
exports.DefaultModalStyle = DefaultModalStyle;
exports.WidgetContainerConfigSchema = WidgetContainerConfigSchema;

/***/ })

},[429]);