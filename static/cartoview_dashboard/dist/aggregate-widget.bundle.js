webpackJsonp([7],{

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _events = __webpack_require__(20);

exports.default = new _events.EventEmitter();

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Events = __webpack_require__(12);

var _Events2 = _interopRequireDefault(_Events);

var _FieldSet2 = __webpack_require__(8);

var _FieldSet3 = _interopRequireDefault(_FieldSet2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

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
        _BaseWidget.prototype.componentDidMount.call(this);
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
        return _react2.default.createElement(
            'div',
            { className: 'aggregate-widget' },
            _react2.default.createElement(
                'h1',
                { className: 'text-center' },
                this.state.aggregateResult
            )
        );
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
            }).map(function (widgetId, index) {
                return _react2.default.createElement(
                    'option',
                    { key: index, value: widgetId },
                    mapWidgets[widgetId].title,
                    ' - ',
                    widgetId
                );
            });
        } else if (name == "typeName") {
            return this.state.layers.map(function (m, index) {
                return _react2.default.createElement(
                    'option',
                    { key: index, value: m.name },
                    m.layer_params.title
                );
            });
        } else if (name == "aggregationAttribute") {
            var isNumber = function isNumber(a) {
                return ['xsd:int', 'xsd:long', 'xsd:double'].indexOf(a.attribute_type) != -1;
            };
            return this.state.attributes.filter(function (a) {
                return isNumber(a);
            }).map(function (a, index) {
                return _react2.default.createElement(
                    'option',
                    { key: index, value: a.attribute },
                    a.attribute_label || a.attribute
                );
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

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

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

/***/ })

},[561]);