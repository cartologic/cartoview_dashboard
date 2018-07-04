webpackJsonp([7],{

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

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _events = __webpack_require__(20);

exports.default = new _events.EventEmitter();

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _FieldSet2 = __webpack_require__(10);

var _FieldSet3 = _interopRequireDefault(_FieldSet2);

var _Events = __webpack_require__(14);

var _Events2 = _interopRequireDefault(_Events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AggregateWidget = function (_BaseWidget) {
    _inherits(AggregateWidget, _BaseWidget);

    function AggregateWidget(props) {
        _classCallCheck(this, AggregateWidget);

        var _this = _possibleConstructorReturn(this, _BaseWidget.call(this, props));

        _this.wpsClient = new WpsClient({
            geoserverUrl: "/geoserver"
        });
        _this.state.aggregateResult = "NaN";
        _this.configFieldSetClass = ConfigFieldSet;
        return _this;
    }

    AggregateWidget.prototype.setConfig = function setConfig(config) {
        _BaseWidget.prototype.setConfig.call(this, config);
        this.attachToMapWidget(config);
    };

    AggregateWidget.prototype.componentDidMount = function componentDidMount() {
        if (this.state.config.mapWidget) {
            this.attachToMapWidget(this.state.config);
        }
        this.update(this.state.config);
    };

    AggregateWidget.prototype.attachToMapWidget = function attachToMapWidget(config) {
        var _this2 = this;

        var mapWidget = this.context.configManager.getWidget(config.mapWidget);
        if (mapWidget && mapWidget.ready)
            // update widget once attached to a map, otherwise it will wait to next map change.
            this.update(config, mapWidget.map.getView().calculateExtent());
        var eventName = 'mapExtentChanged' + '_' + config.mapWidget;
        _Events2.default.on(eventName, function (map, extent) {
            _this2.update(_this2.state.config, extent);
        });
    };

    AggregateWidget.prototype.update = function update(config, extent) {
        var _this3 = this;

        if (config.typeName) {
            config = Object.assign({}, config);
            if (extent) {
                config.filters = {
                    minx: extent[0],
                    miny: extent[1],
                    maxx: extent[2],
                    maxy: extent[3]
                };
            }
            this.wpsClient.aggregate(config).then(function (data) {
                _this3.setData(data);
            });
        }
    };

    AggregateWidget.prototype.setData = function setData(data) {
        this.setState({
            aggregateResult: data.AggregationResults[0][0]
        });
    };

    AggregateWidget.prototype.render = function render() {
        return _jsx('div', {
            className: 'aggregate-widget'
        }, void 0, _jsx('h1', {
            className: 'text-center'
        }, void 0, this.state.aggregateResult));
    };

    return AggregateWidget;
}(BaseWidget);

AggregateWidget.displayName = "Aggregate Widget";

var ConfigFieldSet = function (_FieldSet) {
    _inherits(ConfigFieldSet, _FieldSet);

    function ConfigFieldSet(props) {
        _classCallCheck(this, ConfigFieldSet);

        var _this4 = _possibleConstructorReturn(this, _FieldSet.call(this, props));

        console.log(props);
        _this4.state.layers = [];
        _this4.state.attributes = [];
        _this4.state.map = null;
        return _this4;
    }

    ConfigFieldSet.prototype.getInitialData = function getInitialData(props) {
        return props.widget.getConfig();
    };

    ConfigFieldSet.prototype.getSchema = function getSchema() {
        var _this5 = this;

        return {
            mapWidget: {
                type: 'select',
                label: "Map",
                options: {},
                props: {
                    onChange: function onChange(e) {
                        getMapLayersData(dash.props.widgets[_this5.fields.mapWidget.value].props.config.mapId).then(function (res) {
                            _this5.setState({ data: _this5.getData() });
                            _this5.setState({ layers: res.objects });
                        });
                    }
                }
            },
            typeName: {
                type: 'select',
                label: "Layer",
                options: {},
                props: {
                    onChange: function onChange(e) {
                        e.target.fieldSet.updateAttributes();
                    }
                }
            },
            aggregationAttribute: {
                type: 'select',
                label: "Aggregation Attribute",
                options: {}
            },
            aggregationFunction: {
                type: 'select',
                label: "Aggregation Function",
                defaultValue: "Sum",
                options: {
                    "Sum": "Sum",
                    "Count": "Count",
                    "Average": "Average",
                    "Max": "Max",
                    "Min": "Min",
                    "Median": "Median"
                }
            }
        };
    };

    ConfigFieldSet.prototype.getSelectOptions = function getSelectOptions(name, config, value) {
        if (name == "mapWidget") {
            var mapWidgets = this.props.widget.context.configManager.getMapWidgets();
            return Object.keys(mapWidgets).filter(function (widgetId) {
                return dash.props.widgets[widgetId].type.name == "MapWidget";
            }).map(function (widgetId) {
                return _jsx('option', {
                    value: widgetId
                }, void 0, mapWidgets[widgetId].title);
            });
        } else if (name == "typeName") {
            return this.state.layers.map(function (m) {
                return _jsx('option', {
                    value: m.name
                }, void 0, m.layer_params.title);
            });
        } else if (name == "aggregationAttribute") {
            var isNumber = function isNumber(a) {
                return ['xsd:int', 'xsd:long', 'xsd:double'].indexOf(a.attribute_type) != -1;
            };
            return this.state.attributes.filter(function (a) {
                return isNumber(a);
            }).map(function (a) {
                return _jsx('option', {
                    value: a.attribute
                }, void 0, a.attribute_label || a.attribute);
            });
        }
        return _FieldSet.prototype.getSelectOptions.call(this, name, config, value);
    };

    ConfigFieldSet.prototype.updateAttributes = function updateAttributes(data) {
        var _this6 = this;

        //this.state.data.typeName = this.fields.typeName.value;
        this.setState({ data: data || this.getData() });
        getAttributesData(this.fields.typeName.value).then(function (res) {
            return _this6.setState({ attributes: res.objects });
        });
    };

    ConfigFieldSet.prototype.componentDidMount = function componentDidMount() {
        var _this7 = this;

        if (this.fields.mapWidget.value) getMapLayersData(dash.props.widgets[this.fields.mapWidget.value].props.config.mapId).then(function (res) {
            _this7.setLayers(res);
            // debugger;
            if (_this7.state.data.typeName) {
                // console.log(this.state.data.typeName)
                _this7.updateAttributes(_this7.state.data);
            }
        });
    };

    ConfigFieldSet.prototype.setLayers = function setLayers(res) {
        this.setState({ layers: res.objects });
        //res.objects.map(l => this.layersHash[l.typename] = l);
    };

    // getData( ) {
    //   debugger;
    //   const data = super.getData( )
    //   data.groupBy = {
    //       attributes: data.groupBy
    //   };
    //   return data;
    // }

    return ConfigFieldSet;
}(_FieldSet3.default);

AggregateWidget.ConfigForm = ConfigFieldSet;
Dashboard.registerWidget(AggregateWidget);
exports.default = AggregateWidget;

/***/ })

},[609]);