webpackJsonp([4],{

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

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _openlayers = __webpack_require__(11);

var _openlayers2 = _interopRequireDefault(_openlayers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getProxiedUrl: function getProxiedUrl(url, opt_proxy) {
    if (opt_proxy) {
      return opt_proxy + encodeURIComponent(url);
    } else {
      return url;
    }
  },
  getResolutionForScale: function getResolutionForScale(scale, units) {
    var dpi = 25.4 / 0.28;
    var mpu = _openlayers2.default.proj.METERS_PER_UNIT[units];
    var inchesPerMeter = 39.37;
    return parseFloat(scale) / (mpu * inchesPerMeter * dpi);
  },
  getTimeInfo: function getTimeInfo(layer) {
    if (layer.Dimension) {
      for (var i = 0, ii = layer.Dimension.length; i < ii; ++i) {
        var dimension = layer.Dimension[i];
        if (dimension.name === 'time') {
          return dimension.values;
        }
      }
    }
  },
  rgbToHex: function rgbToHex(rgb) {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return rgb && rgb.length === 4 ? '#' + ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
  },
  hexToRgb: function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  },
  transformColor: function transformColor(color) {
    var colorObj = color.rgb ? color.rgb : color;
    return [colorObj.r, colorObj.g, colorObj.b, colorObj.a];
  },
  doJSONP: function doJSONP(url, success, failure, scope) {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
    var cbname = 'fn' + Date.now() + getRandomInt(1, 10000);
    var script = document.createElement('script');
    script.onerror = function () {
      if (failure) {
        failure.call(scope);
      }
    };
    script.src = url.replace('__cbname__', cbname);
    window[cbname] = function (jsonData) {
      success.call(scope, jsonData);
      delete window[cbname];
    };
    document.head.appendChild(script);
  },
  doGET: function doGET(url, success, failure, scope, opt_requestHeaders) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
          if (success) {
            success.call(scope, xmlhttp);
          }
        } else if (failure) {
          failure.call(scope, xmlhttp);
        }
      }
    };
    xmlhttp.open('GET', url, true);
    if (opt_requestHeaders) {
      for (var key in opt_requestHeaders) {
        if (opt_requestHeaders.hasOwnProperty(key)) {
          xmlhttp.setRequestHeader(key, opt_requestHeaders[key]);
        }
      }
    }
    xmlhttp.send();
    return xmlhttp;
  },
  doPOST: function doPOST(url, data, success, failure, scope, contentType, put, opt_requestHeaders) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open(put ? 'PUT' : 'POST', url, true);
    xmlhttp.setRequestHeader('Content-Type', contentType ? contentType : 'text/xml');
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200 || xmlhttp.status === 201) {
          success.call(scope, xmlhttp);
        } else {
          failure.call(scope, xmlhttp);
        }
      }
    };
    if (opt_requestHeaders) {
      for (var key in opt_requestHeaders) {
        if (opt_requestHeaders.hasOwnProperty(key)) {
          xmlhttp.setRequestHeader(key, opt_requestHeaders[key]);
        }
      }
    }
    xmlhttp.send(data);
    return xmlhttp;
  }
}; /*
    * Copyright 2015-present Boundless Spatial Inc., http://boundlessgeo.com
    * Licensed under the Apache License, Version 2.0 (the "License").
    * You may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    * http://www.apache.org/licenses/LICENSE-2.0
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and limitations under the License.
    */

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2015-present Boundless Spatial Inc., http://boundlessgeo.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License").
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _openlayers = __webpack_require__(11);

var _openlayers2 = _interopRequireDefault(_openlayers);

var _util = __webpack_require__(27);

var _util2 = _interopRequireDefault(_util);

var _LayerIdService = __webpack_require__(305);

var _LayerIdService2 = _interopRequireDefault(_LayerIdService);

var _WFSService = __webpack_require__(307);

var _WFSService2 = _interopRequireDefault(_WFSService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MapConfigService = function () {
  function MapConfigService() {
    _classCallCheck(this, MapConfigService);
  }

  _createClass(MapConfigService, [{
    key: 'generateSourceFromConfig',
    value: function generateSourceFromConfig(map, config, opt_proxy, opt_wfsUrl, opt_wfsTypeName) {
      var props = config.properties || {};
      if (props.attributions) {
        var attributions = [];
        for (var i = 0, ii = props.attributions.length; i < ii; ++i) {
          attributions.push(new _openlayers2.default.Attribution({
            html: props.attributions[i]
          }));
        }
        props.attributions = attributions;
      }
      props.wrapX = false;
      if (config.type === 'Cluster') {
        props.source = this.generateSourceFromConfig(map, config.source, opt_proxy, opt_wfsUrl, opt_wfsTypeName);
      }
      if (config.type === 'Vector') {
        props.format = props.format.type === 'GeoJSON' ? new _openlayers2.default.format.GeoJSON() : undefined;
        if (opt_wfsUrl && opt_wfsTypeName) {
          return _WFSService2.default.createSource(opt_wfsUrl, map.getView().getProjection(), opt_wfsTypeName, opt_proxy);
        }
      }
      if (config.type === 'TMS') {
        config.type = 'XYZ';
        var urls = props.urls || [props.url];
        props.tileUrlFunction = function (tileCoord, pixelRatio, projection) {
          var min = 0;
          var max = urls.length - 1;
          var idx = Math.floor(Math.random() * (max - min + 1)) + min;
          var x, y, z;
          z = tileCoord[0];
          x = tileCoord[1];
          y = tileCoord[2] + (1 << z);
          return urls[idx] + z + '/' + x + '/' + y + '.' + props.format;
        };
        delete props.urls;
        delete props.url;
        var source = new _openlayers2.default.source[config.type](props);
        source.set('originalType', 'TMS');
        source.set('originalProperties', Object.assign({}, props, {
          urls: urls
        }));
        return source;
      }
      var sourceObj = new _openlayers2.default.source[config.type](props);
      if (opt_proxy && config.type === 'TileWMS') {
        sourceObj.once('tileloaderror', function () {
          sourceObj.setTileLoadFunction(function () {
            var tileLoadFn = sourceObj.getTileLoadFunction();
            return function (tile, src) {
              tileLoadFn(tile, _util2.default.getProxiedUrl(src, opt_proxy));
            };
          }());
        });
      }
      return sourceObj;
    }
  }, {
    key: 'generateLayerFromConfig',
    value: function generateLayerFromConfig(config, map, opt_proxy) {
      var type = config.type;
      var layerConfig = config.properties || {};
      layerConfig.id = _LayerIdService2.default.generateId();
      if (type === 'Group') {
        layerConfig.layers = [];
        for (var i = 0, ii = config.children.length; i < ii; ++i) {
          layerConfig.layers.push(this.generateLayerFromConfig(config.children[i], map, opt_proxy));
        }
      }
      var layer = new _openlayers2.default.layer[type](layerConfig);
      var sourceConfig = config.source;
      if (sourceConfig) {
        var source = this.generateSourceFromConfig(map, sourceConfig, opt_proxy, layerConfig.url, layerConfig.name);
        layer.setSource(source);
      }
      return layer;
    }
  }, {
    key: 'getLayerType',
    value: function getLayerType(layer) {
      if (layer instanceof _openlayers2.default.layer.Group) {
        return 'Group';
      } else if (layer instanceof _openlayers2.default.layer.Vector) {
        return 'Vector';
      } else if (layer instanceof _openlayers2.default.layer.Tile) {
        return 'Tile';
      } else if (layer instanceof _openlayers2.default.layer.Image) {
        return 'Image';
      }
    }
  }, {
    key: 'getFormatType',
    value: function getFormatType(format) {
      if (format instanceof _openlayers2.default.format.GeoJSON) {
        return 'GeoJSON';
      }
    }
  }, {
    key: 'getSourceConfig',
    value: function getSourceConfig(source) {
      var config = {};
      var attributions;
      var attr = source.getAttributions();
      if (attr !== null) {
        attributions = [];
        for (var i = 0, ii = attr.length; i < ii; ++i) {
          attributions.push(attr[i].getHTML());
        }
      }
      if (source instanceof _openlayers2.default.source.TileWMS) {
        config.type = 'TileWMS';
        config.properties = {
          params: source.getParams(),
          urls: source.getUrls()
        };
      } else if (source instanceof _openlayers2.default.source.Cluster) {
        config.type = 'Cluster';
        config.source = this.getSourceConfig(source.getSource());
      } else if (source instanceof _openlayers2.default.source.Vector) {
        config.type = 'Vector';
        config.properties = {
          attributions: attributions,
          format: {
            type: this.getFormatType(source.getFormat())
          },
          url: source.getUrl()
        };
      } else if (source instanceof _openlayers2.default.source.ImageWMS) {
        config.type = 'ImageWMS';
        config.properties = {
          url: source.getUrl(),
          params: source.getParams(),
          attributions: attributions
        };
      } else if (source instanceof _openlayers2.default.source.OSM) {
        config.type = 'OSM';
        config.properties = {
          attributions: attributions
        };
      } else if (source instanceof _openlayers2.default.source.BingMaps) {
        config.type = 'BingMaps';
        config.properties = {
          key: source.getApiKey(),
          imagerySet: source.getImagerySet()
        };
      } else if (source instanceof _openlayers2.default.source.XYZ) {
        if (source.get('originalType') === 'TMS') {
          config.type = 'TMS';
          config.properties = source.get('originalProperties');
        } else {
          config.type = 'XYZ';
          config.properties = {
            attributions: attributions,
            urls: source.getUrls()
          };
        }
      } else if (source instanceof _openlayers2.default.source.TileArcGISRest) {
        config.type = 'TileArcGISRest';
        config.properties = {
          urls: source.getUrls(),
          params: source.getParams()
        };
      }
      return config;
    }
  }, {
    key: 'getLayerConfig',
    value: function getLayerConfig(config, layer) {
      config.type = this.getLayerType(layer);
      config.properties = layer.getProperties();
      delete config.properties.maxResolution;
      delete config.properties.minResolution;
      var source = config.type !== 'Group' ? layer.getSource() : null;
      if (source) {
        delete config.properties.source;
        config.source = this.getSourceConfig(source);
      }
      if (layer instanceof _openlayers2.default.layer.Group) {
        delete config.properties.layers;
        config.children = [];
        layer.getLayers().forEach(function (child) {
          if (child.get('title') !== null) {
            var childConfig = {};
            config.children.push(childConfig);
            this.getLayerConfig(childConfig, child);
          }
        }, this);
      }
      return config;
    }
  }, {
    key: 'load',
    value: function load(mapConfig, map, opt_proxy) {
      var viewConfig = mapConfig.view;
      var layerConfig = mapConfig.layers;
      var remove = [];
      map.getLayers().forEach(function (lyr) {
        if (lyr.get('title') !== null) {
          remove.push(lyr);
        }
      });
      var i, ii;
      for (i = 0, ii = remove.length; i < ii; ++i) {
        map.removeLayer(remove[i]);
      }
      for (i = 0, ii = layerConfig.length; i < ii; ++i) {
        var layer = this.generateLayerFromConfig(layerConfig[i], map, opt_proxy);
        map.addLayer(layer);
      }
      var view = map.getView(),
          proj = _openlayers2.default.proj.get(viewConfig.projection);
      if (proj && !_openlayers2.default.proj.equivalent(view.getProjection(), proj)) {
        map.setView(new _openlayers2.default.View({
          center: viewConfig.center,
          resolution: viewConfig.resolution,
          zoom: viewConfig.zoom,
          rotation: viewConfig.rotation,
          projection: viewConfig.projection
        }));
      } else {
        view.setCenter(viewConfig.center);
        if (viewConfig.resolution !== undefined) {
          view.setResolution(viewConfig.resolution);
        } else if (viewConfig.zoom !== undefined) {
          view.setZoom(viewConfig.zoom);
        }
        if (viewConfig.rotation !== undefined) {
          view.setRotation(viewConfig.rotation);
        }
      }
    }
  }, {
    key: 'save',
    value: function save(map) {
      var layers = [];
      map.getLayers().forEach(function (layer) {
        if (layer.get('title') !== null) {
          var config = {};
          layers.push(config);
          this.getLayerConfig(config, layer);
        }
      }, this);
      var config = {};
      config.layers = layers;
      var view = map.getView();
      config.view = {
        projection: view.getProjection().getCode(),
        center: view.getCenter(),
        resolution: view.getResolution(),
        zoom: view.getZoom(),
        rotation: view.getRotation()
      };
      return config;
    }
  }]);

  return MapConfigService;
}();

exports.default = new MapConfigService();

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2015-present Boundless Spatial Inc., http://boundlessgeo.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License").
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _openlayers = __webpack_require__(11);

var _openlayers2 = _interopRequireDefault(_openlayers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sourceIdx;

var baseMapTitle = 'Base Maps';
var gxpGroup = 'background';

/**
 * Transforms GXP style map config to our internal format.
 */

var MapConfigTransformService = function () {
  function MapConfigTransformService() {
    _classCallCheck(this, MapConfigTransformService);
  }

  _createClass(MapConfigTransformService, [{
    key: '_writeLayer',
    value: function _writeLayer(config, sources, layers, group) {
      var key;
      var layerConfig = {};
      // name is mandatory
      layerConfig.name = config.properties.name || config.properties.title.split(' ').join('_');
      layerConfig.title = config.properties.title;
      layerConfig.visibility = config.properties.visible;
      if (group) {
        layerConfig.group = group;
      }
      layers.push(layerConfig);
      if (config.source.type === 'XYZ') {
        layerConfig.type = 'OpenLayers.Layer.XYZ';
        var options;
        if (config.source.properties.attributions && config.source.properties.attributions.length > 0) {
          options = { attribution: config.source.properties.attributions[0] };
        }
        layerConfig.args = [config.properties.title, config.source.properties.urls[0]];
        if (options) {
          layerConfig.args.push(options);
        }
        sourceIdx++;
        sources[sourceIdx] = {
          ptype: 'gxp_olsource'
        };
      } else if (config.source.type === 'TileArcGISRest') {
        layerConfig.layerid = config.source.properties.params.LAYERS;
        sourceIdx++;
        sources[sourceIdx] = {
          url: config.source.properties.urls[0],
          ptype: 'gxp_arcrestsource'
        };
      } else if (config.source.type === 'BingMaps') {
        var hasBing = false;
        for (key in sources) {
          if (sources[key].ptype == 'gxp_bingsource' && sources[key].apiKey === config.source.properties.key) {
            hasBing = true;
            break;
          }
        }
        if (!hasBing) {
          sourceIdx++;
          sources[sourceIdx] = {
            ptype: 'gxp_bingsource',
            apiKey: config.source.properties.key
          };
        }
      } else if (config.source.type === 'TMS') {
        if (config.source.properties.urls[0].indexOf('tiles.mapbox.com/v1/mapbox') !== -1) {
          var hasMapBox = false;
          for (key in sources) {
            if (sources[key].ptype == 'gxp_mapboxsource') {
              hasMapBox = true;
              break;
            }
          }
          if (!hasMapBox) {
            sourceIdx++;
            sources[sourceIdx] = {
              ptype: 'gxp_mapboxsource'
            };
          }
        }
      } else if (config.source.type === 'TileWMS') {
        if (config.source.properties.params.SLD_BODY) {
          layerConfig.params = {
            TILED: 'false',
            SLD_BODY: config.source.properties.params.SLD_BODY
          };
        }
        layerConfig.queryable = config.properties.isSelectable;
        layerConfig.capability = {
          queryable: config.properties.isSelectable,
          styles: [{
            name: config.properties.styleName,
            legend: {
              href: config.properties.legendUrl
            }
          }],
          llbbox: config.properties.EX_GeographicBoundingBox
        };
        var hasWMSC = false;
        for (key in sources) {
          if (sources[key].ptype == 'gxp_wmscsource' && sources[key].url === config.source.url) {
            hasWMSC = true;
            break;
          }
        }
        if (!hasWMSC) {
          sourceIdx++;
          sources[sourceIdx] = {
            ptype: 'gxp_wmscsource',
            url: config.source.properties.urls[0]
          };
        }
      } else if (config.source.type === 'OSM') {
        var hasOSM = false;
        for (key in sources) {
          if (sources[key].ptype == 'gxp_osmsource') {
            hasOSM = true;
            break;
          }
        }
        if (!hasOSM) {
          sourceIdx++;
          sources[sourceIdx] = {
            ptype: 'gxp_osmsource'
          };
        }
        if (!layerConfig.name) {
          layerConfig.name = 'mapnik';
        }
      }
      layerConfig.source = '' + sourceIdx;
    }
  }, {
    key: 'write',
    value: function write(data) {
      var viewConfig = data.view;
      var layerConfig = data.layers;
      var layers = [];
      var sources = {};
      sourceIdx = -1;
      for (var i = 0, ii = layerConfig.length; i < ii; ++i) {
        if (layerConfig[i].type === 'Group') {
          for (var j = 0, jj = layerConfig[i].children.length; j < jj; ++j) {
            var config = layerConfig[i].children[j];
            this._writeLayer(config, sources, layers, layerConfig[i].properties.title.replace(baseMapTitle, gxpGroup));
          }
        } else {
          this._writeLayer(layerConfig[i], sources, layers);
        }
      }
      var result = {
        sources: sources
      };
      result.map = {
        layers: layers,
        center: viewConfig.center,
        projection: viewConfig.projection,
        zoom: viewConfig.zoom
      };
      return result;
    }
  }, {
    key: '_transformTileService',
    value: function _transformTileService(layerConfig) {
      var thumbnail;
      if (layerConfig.source.type === 'OSM') {
        thumbnail = 'https://a.tile.openstreetmap.org/0/0/0.png';
      } else {
        if (layerConfig.source.properties.urls) {
          thumbnail = layerConfig.source.properties.urls[0].replace('{z}', '0').replace('{y}', '0').replace('{x}', '0');
        }
      }
      return {
        name: layerConfig.properties.name,
        description: layerConfig.properties.title,
        standard: layerConfig.source.type,
        attribution: layerConfig.source.properties.attributions ? layerConfig.source.properties.attributions[0] : undefined,
        endpoint: layerConfig.source.properties.urls ? layerConfig.source.properties.urls[0] : undefined,
        thumbnail: thumbnail
      };
    }
  }, {
    key: 'transform',
    value: function transform(data, opt_errors, opt_tileServices) {
      var i,
          ii,
          layers = [];
      var groups = {};
      for (i = 0, ii = data.map.layers.length; i < ii; ++i) {
        var layer = data.map.layers[i];
        var source = data.sources[layer.source];
        var url = source.url;
        var layerConfig = {
          properties: {
            isRemovable: true,
            visible: layer.visibility,
            title: layer.title || (layer.name ? layer.name.split(':').pop() : undefined),
            id: layer.name,
            name: layer.name
          }
        };
        if (source.ptype === 'gxp_olsource' && layer.type === 'OpenLayers.Layer.XYZ') {
          layerConfig.type = 'Tile';
          layerConfig.properties.title = layer.args[0];
          layerConfig.properties.name = layerConfig.properties.title.split(' ').join('_');
          var xyzUrls;
          var urlConfig = layer.args[1];
          if (Array.isArray(urlConfig)) {
            xyzUrls = urlConfig;
          } else {
            xyzUrls = [urlConfig];
          }
          for (var j = 0, jj = xyzUrls.length; j < jj; ++j) {
            xyzUrls[j] = xyzUrls[j].replace(/\$/g, '');
            if (xyzUrls[j].indexOf('cartocdn') !== -1) {
              xyzUrls[j] = xyzUrls[j].replace('https:', 'http:');
            }
          }
          layerConfig.source = {
            type: 'XYZ',
            properties: {
              crossOrigin: 'anonymous',
              urls: xyzUrls
            }
          };
          if (layer.args.length === 3 && layer.args[2].attribution) {
            layerConfig.source.properties.attributions = [layer.args[2].attribution];
          }
        } else if (source.ptype === 'gxp_osmsource') {
          if (!layer.group) {
            // force OSM as base layer
            layerConfig.properties.type = 'base';
          }
          layerConfig.type = 'Tile';
          layerConfig.source = {
            type: 'OSM',
            properties: {
              crossOrigin: 'anonymous'
            }
          };
        } else if (source.ptype === 'gxp_arcrestsource') {
          layerConfig.type = 'Tile';
          layerConfig.source = {
            type: 'TileArcGISRest',
            properties: {
              crossOrigin: 'anonymous',
              urls: [url],
              params: {
                LAYERS: layer.layerid,
                FORMAT: layer.format
              }
            }
          };
        } else if (source.ptype === 'gxp_wmscsource' && layer.name) {
          layerConfig.properties.popupInfo = '#AllAttributes';
          layerConfig.properties.isSelectable = layer.queryable;
          layerConfig.properties.isWFST = layer.queryable;
          if (layer.capability) {
            if (layer.queryable === undefined) {
              layerConfig.properties.isSelectable = layer.capability.queryable;
              layerConfig.properties.isWFST = layer.capability.queryable;
            }
            layerConfig.properties.styleName = layer.capability.styles[0].name;
            layerConfig.properties.legendUrl = layer.capability.styles[0].legend.href;
            layerConfig.properties.EX_GeographicBoundingBox = layer.capability.llbbox;
          }
          if (!layerConfig.properties.EX_GeographicBoundingBox) {
            if (layer.bbox && layer.srs && _openlayers2.default.proj.get(layer.srs)) {
              layerConfig.properties.EX_GeographicBoundingBox = _openlayers2.default.proj.transformExtent(layer.bbox, layer.srs, 'EPSG:4326');
            }
          }
          layerConfig.type = 'Tile';
          var params = layer.params || {};
          params.LAYERS = layer.name;
          if (params.TILED === undefined) {
            params.TILED = 'TRUE';
          }
          if (layer.styles) {
            params.STYLES = layer.styles;
          }
          if (layer.format) {
            params.FORMAT = layer.format;
          }
          if (layer.transparent !== undefined) {
            params.TRANSPARENT = layer.transparent;
          }
          layerConfig.source = {
            type: 'TileWMS',
            properties: {
              crossOrigin: 'anonymous',
              params: params,
              urls: [url]
            }
          };
        } else if (source.ptype === 'gxp_mapboxsource') {
          var urls = ['http://a.tiles.mapbox.com/v1/mapbox.' + layer.name + '/', 'http://b.tiles.mapbox.com/v1/mapbox.' + layer.name + '/', 'http://c.tiles.mapbox.com/v1/mapbox.' + layer.name + '/', 'http://d.tiles.mapbox.com/v1/mapbox.' + layer.name + '/'];
          var attribution = /^world/.test(layer.name) ? '<a href="http://mapbox.com">MapBox</a> | Some Data &copy; OSM CC-BY-SA | <a href="http://mapbox.com/tos">Terms of Service</a>' : '<a href="http://mapbox.com">MapBox</a> | <a href="http://mapbox.com/tos">Terms of Service</a>';
          var maxZoom = {
            'blue-marble-topo-bathy-jan': 8,
            'blue-marble-topo-bathy-jul': 8,
            'blue-marble-topo-jan': 8,
            'blue-marble-topo-jul': 8,
            'control-room': 8,
            'geography-class': 8,
            'natural-earth-hypso': 6,
            'natural-earth-hypso-bathy': 6,
            'natural-earth-1': 6,
            'natural-earth-2': 6,
            'world-dark': 11,
            'world-light': 11,
            'world-glass': 10,
            'world-print': 9
          };
          layerConfig.type = 'Tile';
          layerConfig.source = {
            type: 'TMS',
            properties: {
              attributions: [attribution],
              format: 'png',
              urls: urls,
              maxZoom: maxZoom[layer.name]
            }
          };
        } else if (source.ptype === 'gxp_bingsource') {
          layerConfig.type = 'Tile';
          layerConfig.source = {
            type: 'BingMaps',
            properties: {
              key: source.apiKey,
              imagerySet: layer.name
            }
          };
        } else {
          if (opt_errors) {
            opt_errors.push({
              msg: 'Unable to load layer ' + layerConfig.properties.title,
              layer: layer,
              source: source
            });
          }
          layerConfig = undefined;
        }
        if (layerConfig !== undefined) {
          if (layer.group) {
            if (layer.group === gxpGroup) {
              layerConfig.properties.type = 'base';
              if (opt_tileServices) {
                var tileService = this._transformTileService(layerConfig);
                if (tileService) {
                  opt_tileServices.push(tileService);
                }
              }
            }
            if (!groups[layer.group]) {
              groups[layer.group] = {
                type: 'Group',
                properties: {
                  name: layer.group,
                  title: layer.group === gxpGroup ? baseMapTitle : layer.group,
                  type: layer.group === gxpGroup ? 'base-group' : undefined
                },
                children: []
              };
              layers.push(groups[layer.group]);
            }
            groups[layer.group].children.push(layerConfig);
          } else {
            layers.push(layerConfig);
          }
        }
      }
      return {
        layers: layers,
        view: {
          center: data.map.center,
          projection: data.map.projection,
          zoom: data.map.zoom
        }
      };
    }
  }]);

  return MapConfigTransformService;
}();

exports.default = new MapConfigTransformService();

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright 2015-present Boundless Spatial Inc., http://boundlessgeo.com
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and limitations under the License.
 */

var LayerIdService = function () {
  function LayerIdService() {
    _classCallCheck(this, LayerIdService);

    this._counter = 0;
  }

  _createClass(LayerIdService, [{
    key: 'generateId',
    value: function generateId() {
      this._counter++;
      return 'sdk-layer-' + this._counter;
    }
  }]);

  return LayerIdService;
}();

exports.default = new LayerIdService();

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2015-present Boundless Spatial Inc., http://boundlessgeo.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License").
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _openlayers = __webpack_require__(11);

var _openlayers2 = _interopRequireDefault(_openlayers);

var _util = __webpack_require__(27);

var _util2 = _interopRequireDefault(_util);

var _jsonix = __webpack_require__(74);

var _urlParse = __webpack_require__(51);

var _urlParse2 = _interopRequireDefault(_urlParse);

var _XSD_1_ = __webpack_require__(607);

var _XLink_1_ = __webpack_require__(99);

var _OWS_1_0_ = __webpack_require__(477);

var _Filter_1_1_ = __webpack_require__(474);

var _SMIL_2_ = __webpack_require__(479);

var _SMIL_2_0_Language = __webpack_require__(480);

var _GML_3_1_ = __webpack_require__(476);

var _WFS_1_1_ = __webpack_require__(481);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var wfsFormat = new _openlayers2.default.format.WFS();
var geojsonFormat = new _openlayers2.default.format.GeoJSON();
var xmlSerializer = new XMLSerializer();
var wfsContext = new _jsonix.Jsonix.Context([_OWS_1_0_.OWS_1_0_0, _Filter_1_1_.Filter_1_1_0, _SMIL_2_.SMIL_2_0, _SMIL_2_0_Language.SMIL_2_0_Language, _XLink_1_.XLink_1_0, _GML_3_1_.GML_3_1_1, _WFS_1_1_.WFS_1_1_0]);
var wfsUnmarshaller = wfsContext.createUnmarshaller();
var xsdContext = new _jsonix.Jsonix.Context([_XSD_1_.XSD_1_0]);
var xsdUnmarshaller = xsdContext.createUnmarshaller();

var proj4326 = new _openlayers2.default.proj.Projection({
  code: 'http://www.opengis.net/gml/srs/epsg.xml#4326',
  axis: 'enu'
});
_openlayers2.default.proj.addEquivalentProjections([_openlayers2.default.proj.get('EPSG:4326'), proj4326]);

var WFSService = function () {
  function WFSService() {
    _classCallCheck(this, WFSService);
  }

  _createClass(WFSService, [{
    key: 'createSource',
    value: function createSource(_url, projection, typeName, opt_proxy) {
      return new _openlayers2.default.source.Vector({
        wrapX: false,
        url: function url(extent) {
          var urlObj = new _urlParse2.default(_url);
          urlObj.set('query', {
            service: 'WFS',
            request: 'GetFeature',
            version: '1.1.0',
            typename: typeName,
            outputFormat: 'application/json',
            srsname: projection.getCode(),
            bbox: extent.join(',') + ',' + projection.getCode()
          });
          return _util2.default.getProxiedUrl(urlObj.toString(), opt_proxy);
        },
        format: geojsonFormat,
        strategy: _openlayers2.default.loadingstrategy.bbox
      });
    }
  }, {
    key: 'createLayer',
    value: function createLayer(layer, url, titleObj, projection, opt_proxy) {
      return new _openlayers2.default.layer.Vector({
        title: titleObj.title,
        emptyTitle: titleObj.empty,
        id: layer.Name,
        name: layer.Name,
        isWFST: true,
        timeInfo: _util2.default.getTimeInfo(layer),
        isRemovable: true,
        isSelectable: true,
        popupInfo: '#AllAttributes',
        url: url,
        source: this.createSource(url, projection, layer.Name, opt_proxy)
      });
    }
  }, {
    key: 'parseCapabilities',
    value: function parseCapabilities(xmlhttp) {
      var layers = [];
      var info = wfsUnmarshaller.unmarshalDocument(xmlhttp.responseXML).value;
      if (info && info.featureTypeList && info.featureTypeList.featureType) {
        for (var i = 0, ii = info.featureTypeList.featureType.length; i < ii; ++i) {
          var ft = info.featureTypeList.featureType[i];
          var layer = {};
          layer.Name = ft.name.prefix + ':' + ft.name.localPart;
          if (ft.keywords) {
            layer.KeywordList = ft.keywords[0].keyword;
          }
          layer.Title = ft.title;
          layer.Abstract = ft._abstract;
          layer.EX_GeographicBoundingBox = [ft.wgs84BoundingBox[0].lowerCorner[0], ft.wgs84BoundingBox[0].lowerCorner[1], ft.wgs84BoundingBox[0].upperCorner[0], ft.wgs84BoundingBox[0].upperCorner[1]];
          layers.push(layer);
        }
      }
      return {
        layers: layers,
        title: info.serviceIdentification.title
      };
    }
  }, {
    key: 'getCapabilitiesUrl',
    value: function getCapabilitiesUrl(url, opt_proxy) {
      var urlObj = new _urlParse2.default(url);
      urlObj.set('query', {
        service: 'WFS',
        version: '1.1.0',
        request: 'GetCapabilities'
      });
      return _util2.default.getProxiedUrl(urlObj.toString(), opt_proxy);
    }
  }, {
    key: 'getCapabilities',
    value: function getCapabilities(url, onSuccess, onFailure, opt_proxy, opt_requestHeaders) {
      return _util2.default.doGET(this.getCapabilitiesUrl(url, opt_proxy), function (xmlhttp) {
        var info = this.parseCapabilities(xmlhttp);
        onSuccess.call(this, { Title: info.title, Layer: info.layers });
      }, function (xmlhttp) {
        onFailure.call(this, xmlhttp);
      }, this, opt_requestHeaders);
    }
  }, {
    key: 'describeFeatureType',
    value: function describeFeatureType(url, layerName, onSuccess, onFailure, scope, opt_proxy, opt_requestHeaders) {
      var dftUrl = new _urlParse2.default(url);
      dftUrl.set('query', {
        service: 'WFS',
        request: 'DescribeFeatureType',
        version: '1.0.0',
        typename: layerName
      });
      _util2.default.doGET(_util2.default.getProxiedUrl(dftUrl.toString(), opt_proxy), function (xmlhttp) {
        if (xmlhttp.responseText.indexOf('<?xml') !== -1 && xmlhttp.responseText.indexOf('ServiceExceptionReport') === -1) {
          var schema = xsdUnmarshaller.unmarshalString(xmlhttp.responseText).value;
          var element = schema.complexType[0].complexContent.extension.sequence.element;
          var geometryType, geometryName;
          var attributes = [];
          for (var i = 0, ii = element.length; i < ii; ++i) {
            var el = element[i];
            if (el.type.namespaceURI === 'http://www.opengis.net/gml') {
              geometryName = el.name;
              var lp = el.type.localPart;
              geometryType = lp.replace('PropertyType', '');
            } else if (el.name !== 'boundedBy') {
              // TODO if needed, use attribute type as well
              attributes.push(el.name);
            }
          }
          attributes.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
          });
          onSuccess.call(scope || this, {
            featureNS: schema.targetNamespace,
            featurePrefix: layerName.split(':').shift(),
            featureType: schema.element[0].name,
            geometryType: geometryType,
            geometryName: geometryName,
            attributes: attributes,
            url: url
          });
        } else {
          onFailure.call(scope || this, xmlhttp);
        }
      }, function (xmlhttp) {
        onFailure.call(scope || this, xmlhttp);
      }, this, opt_requestHeaders);
    }
  }, {
    key: 'loadFeatures',
    value: function loadFeatures(layer, startIndex, maxFeatures, sortingInfo, srsName, onSuccess, onFailure, opt_proxy, opt_requestHeaders) {
      var wfsInfo = layer.get('wfsInfo');
      var url = wfsInfo.url;
      var urlObj = new _urlParse2.default(url);
      var params = {
        service: 'WFS',
        request: 'GetFeature',
        startIndex: startIndex,
        maxFeatures: maxFeatures,
        version: '1.1.0',
        typename: wfsInfo.featureType,
        srsname: 'EPSG:4326'
      };
      if (sortingInfo.length === 1) {
        params.sortBy = sortingInfo[0].id + ' ' + (sortingInfo[0].asc ? 'A' : 'D');
      }
      urlObj.set('query', params);
      _util2.default.doGET(_util2.default.getProxiedUrl(urlObj.toString(), opt_proxy), function (xmlhttp) {
        var data = xmlhttp.responseXML;
        if (data !== null) {
          this.readResponse(data, xmlhttp, function (data) {
            var features = wfsFormat.readFeatures(data, { dataProjection: proj4326, featureProjection: srsName });
            onSuccess.call(this, features);
          }, onFailure);
        } else {
          onFailure.call(this, xmlhttp);
        }
      }, function (xmlhttp) {
        onFailure.call(this, xmlhttp);
      }, this, opt_requestHeaders);
    }
  }, {
    key: 'getNumberOfFeatures',
    value: function getNumberOfFeatures(layer, callback, opt_proxy, opt_requestHeaders) {
      if (layer.get('numberOfFeatures') === undefined) {
        var wfsInfo = layer.get('wfsInfo');
        var url = wfsInfo.url;
        var urlObj = new _urlParse2.default(url);
        urlObj.set('query', {
          service: 'WFS',
          request: 'GetFeature',
          resultType: 'hits',
          version: '1.1.0',
          typename: wfsInfo.featureType
        });
        _util2.default.doGET(_util2.default.getProxiedUrl(urlObj.toString(), opt_proxy), function (xmlhttp) {
          var info = wfsFormat.readFeatureCollectionMetadata(xmlhttp.responseXML);
          callback.call(this, info.numberOfFeatures);
        }, undefined, opt_requestHeaders);
      }
    }
  }, {
    key: 'bboxFilter',
    value: function bboxFilter(layer, view, extent, onSuccess, onFailure, opt_proxy, opt_requestHeaders) {
      var wfsInfo = layer.get('wfsInfo');
      var url = new _urlParse2.default(wfsInfo.url);
      var srs = view.getProjection().getCode();
      url.set('query', {
        service: 'WFS',
        request: 'GetFeature',
        version: '1.1.0',
        srsName: srs,
        typename: wfsInfo.featureType,
        bbox: extent.join(',') + ',' + srs
      });
      return _util2.default.doGET(_util2.default.getProxiedUrl(url.toString(), opt_proxy), function (xmlhttp) {
        var features = wfsFormat.readFeatures(xmlhttp.responseXML);
        onSuccess.call(this, features);
      }, onFailure, this, opt_requestHeaders);
    }
  }, {
    key: 'generateDistanceWithinUrl',
    value: function generateDistanceWithinUrl(layer, view, coord) {
      var point = _openlayers2.default.proj.toLonLat(coord);
      var wfsInfo = layer.get('wfsInfo');
      var url = new _urlParse2.default(wfsInfo.url);
      url.set('query', {
        service: 'WFS',
        request: 'GetFeature',
        version: '1.1.0',
        srsName: view.getProjection().getCode(),
        typename: wfsInfo.featureType,
        cql_filter: 'DWITHIN(' + wfsInfo.geometryName + ', Point(' + point[1] + ' ' + point[0] + '), 0.1, meters)'
      });
      return url.toString();
    }
  }, {
    key: 'distanceWithin',
    value: function distanceWithin(layer, view, coord, onSuccess, onFailure, opt_proxy, opt_requestHeaders) {
      return _util2.default.doGET(_util2.default.getProxiedUrl(this.generateDistanceWithinUrl(layer, view, coord), opt_proxy), function (xmlhttp) {
        var features = wfsFormat.readFeatures(xmlhttp.responseXML);
        if (features.length > 0) {
          onSuccess.call(this, features[0]);
        } else if (onFailure) {
          onFailure.call(this, xmlhttp);
        }
      }, onFailure, this, opt_requestHeaders);
    }
  }, {
    key: 'readResponse',
    value: function readResponse(data, xmlhttp, onSuccess, onFailure) {
      if (global.Document && data instanceof global.Document && data.documentElement && data.documentElement.localName == 'ExceptionReport') {
        if (onFailure) {
          onFailure.call(this, xmlhttp, data.getElementsByTagNameNS('http://www.opengis.net/ows', 'ExceptionText').item(0).textContent);
        }
      } else {
        onSuccess(data);
      }
    }
  }, {
    key: 'getDeletePayload',
    value: function getDeletePayload(wfsInfo, feature) {
      var node = wfsFormat.writeTransaction(null, null, [feature], {
        featureNS: wfsInfo.featureNS,
        featureType: wfsInfo.featureType
      });
      return xmlSerializer.serializeToString(node);
    }
  }, {
    key: 'deleteFeature',
    value: function deleteFeature(layer, feature, onSuccess, onFailure) {
      var wfsInfo = layer.get('wfsInfo');
      return _util2.default.doPOST(wfsInfo.url, this.getDeletePayload(wfsInfo, feature), function (xmlhttp) {
        this.handleDeleteResponse(xmlhttp, onSuccess, onFailure);
      }, onFailure, this);
    }
  }, {
    key: 'handleDeleteResponse',
    value: function handleDeleteResponse(xmlhttp, onSuccess, onFailure) {
      var data = xmlhttp.responseXML;
      this.readResponse(data, xmlhttp, function (data) {
        var result = wfsFormat.readTransactionResponse(data);
        if (result && result.transactionSummary.totalDeleted === 1) {
          onSuccess.call(this);
        } else {
          onFailure.call(this, xmlhttp);
        }
      }, onFailure);
    }
  }, {
    key: 'getUpdatePayload',
    value: function getUpdatePayload(wfsInfo, view, feature, values) {
      var fid = feature.getId();
      var clone;
      var featureGeometryName = feature.getGeometryName();
      if (values !== null) {
        clone = new _openlayers2.default.Feature(values);
      } else {
        var properties = feature.getProperties();
        // get rid of boundedBy which is not a real property
        // get rid of bbox (in the case of GeoJSON)
        delete properties.boundedBy;
        delete properties.bbox;
        if (wfsInfo.geometryName !== featureGeometryName) {
          properties[wfsInfo.geometryName] = properties[featureGeometryName];
          delete properties[featureGeometryName];
        }
        clone = new _openlayers2.default.Feature(properties);
      }
      clone.setId(fid);
      if (view !== null && wfsInfo.geometryName !== featureGeometryName) {
        clone.setGeometryName(wfsInfo.geometryName);
      }
      var node = wfsFormat.writeTransaction(null, [clone], null, {
        gmlOptions: view !== null ? {
          srsName: view.getProjection().getCode()
        } : undefined,
        featureNS: wfsInfo.featureNS,
        featureType: wfsInfo.featureType
      });
      return xmlSerializer.serializeToString(node);
    }
  }, {
    key: 'handleUpdateResponse',
    value: function handleUpdateResponse(xmlhttp, onSuccess, onFailure) {
      var data = xmlhttp.responseXML;
      this.readResponse(data, xmlhttp, function (data) {
        var result = wfsFormat.readTransactionResponse(data);
        if (result) {
          onSuccess.call(this, result);
        } else {
          onFailure.call(this, xmlhttp);
        }
      }, onFailure);
    }
  }, {
    key: 'updateFeature',
    value: function updateFeature(layer, view, feature, values, onSuccess, onFailure, opt_proxy, opt_requestHeaders) {
      var wfsInfo = layer.get('wfsInfo');
      return _util2.default.doPOST(_util2.default.getProxiedUrl(wfsInfo.url, opt_proxy), this.getUpdatePayload(wfsInfo, view, feature, values), function (xmlhttp) {
        this.handleUpdateResponse(xmlhttp, onSuccess, onFailure);
      }, onFailure, this, undefined, false, opt_requestHeaders);
    }
  }, {
    key: 'getInsertPayload',
    value: function getInsertPayload(wfsInfo, view, feature) {
      var node = wfsFormat.writeTransaction([feature], null, null, {
        gmlOptions: {
          srsName: view.getProjection().getCode()
        },
        featureNS: wfsInfo.featureNS,
        featureType: wfsInfo.featureType
      });
      return xmlSerializer.serializeToString(node);
    }
  }, {
    key: 'handleInsertResponse',
    value: function handleInsertResponse(xmlhttp, onSuccess, onFailure) {
      var data = xmlhttp.responseXML;
      this.readResponse(data, xmlhttp, function (data) {
        var result = wfsFormat.readTransactionResponse(data);
        if (result) {
          var insertId = result.insertIds[0];
          onSuccess.call(this, insertId);
        } else {
          onFailure.call(this, xmlhttp);
        }
      }, onFailure);
    }
  }, {
    key: 'insertFeature',
    value: function insertFeature(layer, view, feature, onSuccess, onFailure, opt_proxy, opt_requestHeaders) {
      var wfsInfo = layer.get('wfsInfo');
      return _util2.default.doPOST(_util2.default.getProxiedUrl(wfsInfo.url, opt_proxy), this.getInsertPayload(wfsInfo, view, feature), function (xmlhttp) {
        this.handleInsertResponse(xmlhttp, onSuccess, onFailure);
      }, onFailure, this, undefined, false, opt_requestHeaders);
    }
  }]);

  return WFSService;
}();

exports.default = new WFSService();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  //
  // Little nifty parsing hack, leverage the fact that RegExp.exec increments
  // the lastIndex property so we can continue executing this loop until we've
  // parsed all results.
  //
  for (;
    part = parser.exec(query);
    result[decode(part[1])] = decode(part[2])
  );

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = [];

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (var key in obj) {
    if (has.call(obj, key)) {
      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var Filter_1_1_0_Module_Factory = function () {
  var Filter_1_1_0 = {
    n: 'Filter_1_1_0',
    dens: 'http:\/\/www.opengis.net\/ogc',
    deps: ['GML_3_1_1'],
    tis: [{
        ln: 'FunctionType',
        bti: '.ExpressionType',
        ps: [{
            n: 'expression',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            ti: '.ExpressionType',
            t: 'er'
          }, {
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'DistanceBufferType',
        bti: '.SpatialOpsType',
        ps: [{
            n: 'propertyName',
            rq: true,
            en: 'PropertyName',
            ti: '.PropertyNameType'
          }, {
            n: 'geometry',
            rq: true,
            mx: false,
            dom: false,
            en: {
              lp: '_Geometry',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.AbstractGeometryType',
            t: 'er'
          }, {
            n: 'distance',
            rq: true,
            en: 'Distance',
            ti: '.DistanceType'
          }]
      }, {
        ln: 'DistanceType',
        ps: [{
            n: 'value',
            ti: 'Double',
            t: 'v'
          }, {
            n: 'units',
            rq: true,
            an: {
              lp: 'units'
            },
            t: 'a'
          }]
      }, {
        ln: 'GeometryOperandsType',
        ps: [{
            n: 'geometryOperand',
            rq: true,
            col: true,
            en: 'GeometryOperand',
            ti: 'QName'
          }]
      }, {
        ln: 'LiteralType',
        bti: '.ExpressionType',
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            t: 'ae'
          }]
      }, {
        ln: 'FunctionsType',
        ps: [{
            n: 'functionNames',
            rq: true,
            en: 'FunctionNames',
            ti: '.FunctionNamesType'
          }]
      }, {
        ln: 'FunctionNamesType',
        ps: [{
            n: 'functionName',
            rq: true,
            col: true,
            en: 'FunctionName',
            ti: '.FunctionNameType'
          }]
      }, {
        ln: 'SpatialOpsType'
      }, {
        ln: 'ScalarCapabilitiesType',
        tn: 'Scalar_CapabilitiesType',
        ps: [{
            n: 'logicalOperators',
            en: 'LogicalOperators',
            ti: '.LogicalOperators'
          }, {
            n: 'comparisonOperators',
            en: 'ComparisonOperators',
            ti: '.ComparisonOperatorsType'
          }, {
            n: 'arithmeticOperators',
            en: 'ArithmeticOperators',
            ti: '.ArithmeticOperatorsType'
          }]
      }, {
        ln: 'FeatureIdType',
        bti: '.AbstractIdType',
        ps: [{
            n: 'fid',
            rq: true,
            ti: 'ID',
            an: {
              lp: 'fid'
            },
            t: 'a'
          }]
      }, {
        ln: 'SortPropertyType',
        ps: [{
            n: 'propertyName',
            rq: true,
            en: 'PropertyName',
            ti: '.PropertyNameType'
          }, {
            n: 'sortOrder',
            en: 'SortOrder'
          }]
      }, {
        ln: 'ArithmeticOperatorsType',
        ps: [{
            n: 'ops',
            rq: true,
            col: true,
            etis: [{
                en: 'SimpleArithmetic',
                ti: '.SimpleArithmetic'
              }, {
                en: 'Functions',
                ti: '.FunctionsType'
              }],
            t: 'es'
          }]
      }, {
        ln: 'GmlObjectIdType',
        bti: '.AbstractIdType',
        ps: [{
            n: 'id',
            rq: true,
            ti: 'ID',
            an: {
              lp: 'id',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }]
      }, {
        ln: 'BinarySpatialOpType',
        bti: '.SpatialOpsType',
        ps: [{
            n: 'propertyName1',
            rq: true,
            en: 'PropertyName',
            ti: '.PropertyNameType'
          }, {
            n: 'propertyName2',
            rq: true,
            en: 'PropertyName',
            ti: '.PropertyNameType'
          }, {
            n: 'geometry',
            rq: true,
            mx: false,
            dom: false,
            en: {
              lp: '_Geometry',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.AbstractGeometryType',
            t: 'er'
          }, {
            n: 'envelope',
            rq: true,
            mx: false,
            dom: false,
            en: {
              lp: 'Envelope',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.EnvelopeType',
            t: 'er'
          }]
      }, {
        ln: 'FilterType',
        ps: [{
            n: 'spatialOps',
            rq: true,
            mx: false,
            dom: false,
            ti: '.SpatialOpsType',
            t: 'er'
          }, {
            n: 'comparisonOps',
            rq: true,
            mx: false,
            dom: false,
            ti: '.ComparisonOpsType',
            t: 'er'
          }, {
            n: 'logicOps',
            rq: true,
            mx: false,
            dom: false,
            ti: '.LogicOpsType',
            t: 'er'
          }, {
            n: 'id',
            rq: true,
            col: true,
            mx: false,
            dom: false,
            en: '_Id',
            ti: '.AbstractIdType',
            t: 'er'
          }]
      }, {
        ln: 'PropertyIsLikeType',
        bti: '.ComparisonOpsType',
        ps: [{
            n: 'propertyName',
            rq: true,
            en: 'PropertyName',
            ti: '.PropertyNameType'
          }, {
            n: 'literal',
            rq: true,
            en: 'Literal',
            ti: '.LiteralType'
          }, {
            n: 'wildCard',
            rq: true,
            an: {
              lp: 'wildCard'
            },
            t: 'a'
          }, {
            n: 'singleChar',
            rq: true,
            an: {
              lp: 'singleChar'
            },
            t: 'a'
          }, {
            n: 'escapeChar',
            rq: true,
            an: {
              lp: 'escapeChar'
            },
            t: 'a'
          }, {
            n: 'matchCase',
            ti: 'Boolean',
            an: {
              lp: 'matchCase'
            },
            t: 'a'
          }]
      }, {
        ln: 'LogicalOperators',
        tn: null
      }, {
        ln: 'SimpleArithmetic',
        tn: null
      }, {
        ln: 'BBOXType',
        bti: '.SpatialOpsType',
        ps: [{
            n: 'propertyName',
            en: 'PropertyName',
            ti: '.PropertyNameType'
          }, {
            n: 'envelope',
            rq: true,
            mx: false,
            dom: false,
            en: {
              lp: 'Envelope',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.EnvelopeType',
            t: 'er'
          }]
      }, {
        ln: 'BinaryOperatorType',
        bti: '.ExpressionType',
        ps: [{
            n: 'expression',
            rq: true,
            mno: 2,
            mxo: 2,
            col: true,
            mx: false,
            dom: false,
            ti: '.ExpressionType',
            t: 'er'
          }]
      }, {
        ln: 'FID',
        tn: null
      }, {
        ln: 'IdCapabilitiesType',
        tn: 'Id_CapabilitiesType',
        ps: [{
            n: 'ids',
            rq: true,
            col: true,
            etis: [{
                en: 'EID',
                ti: '.EID'
              }, {
                en: 'FID',
                ti: '.FID'
              }],
            t: 'es'
          }]
      }, {
        ln: 'AbstractIdType'
      }, {
        ln: 'ComparisonOperatorsType',
        ps: [{
            n: 'comparisonOperator',
            rq: true,
            col: true,
            en: 'ComparisonOperator'
          }]
      }, {
        ln: 'SortByType',
        ps: [{
            n: 'sortProperty',
            rq: true,
            col: true,
            en: 'SortProperty',
            ti: '.SortPropertyType'
          }]
      }, {
        ln: 'LowerBoundaryType',
        ps: [{
            n: 'expression',
            rq: true,
            mx: false,
            dom: false,
            ti: '.ExpressionType',
            t: 'er'
          }]
      }, {
        ln: 'PropertyIsBetweenType',
        bti: '.ComparisonOpsType',
        ps: [{
            n: 'expression',
            rq: true,
            mx: false,
            dom: false,
            ti: '.ExpressionType',
            t: 'er'
          }, {
            n: 'lowerBoundary',
            rq: true,
            en: 'LowerBoundary',
            ti: '.LowerBoundaryType'
          }, {
            n: 'upperBoundary',
            rq: true,
            en: 'UpperBoundary',
            ti: '.UpperBoundaryType'
          }]
      }, {
        ln: 'SpatialOperatorType',
        ps: [{
            n: 'geometryOperands',
            en: 'GeometryOperands',
            ti: '.GeometryOperandsType'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'SpatialCapabilitiesType',
        tn: 'Spatial_CapabilitiesType',
        ps: [{
            n: 'geometryOperands',
            rq: true,
            en: 'GeometryOperands',
            ti: '.GeometryOperandsType'
          }, {
            n: 'spatialOperators',
            rq: true,
            en: 'SpatialOperators',
            ti: '.SpatialOperatorsType'
          }]
      }, {
        ln: 'FunctionNameType',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'nArgs',
            rq: true,
            an: {
              lp: 'nArgs'
            },
            t: 'a'
          }]
      }, {
        ln: 'PropertyIsNullType',
        bti: '.ComparisonOpsType',
        ps: [{
            n: 'propertyName',
            rq: true,
            en: 'PropertyName',
            ti: '.PropertyNameType'
          }]
      }, {
        ln: 'BinaryComparisonOpType',
        bti: '.ComparisonOpsType',
        ps: [{
            n: 'expression',
            rq: true,
            mno: 2,
            mxo: 2,
            col: true,
            mx: false,
            dom: false,
            ti: '.ExpressionType',
            t: 'er'
          }, {
            n: 'matchCase',
            ti: 'Boolean',
            an: {
              lp: 'matchCase'
            },
            t: 'a'
          }]
      }, {
        ln: 'UpperBoundaryType',
        ps: [{
            n: 'expression',
            rq: true,
            mx: false,
            dom: false,
            ti: '.ExpressionType',
            t: 'er'
          }]
      }, {
        ln: 'ComparisonOpsType'
      }, {
        ln: 'EID',
        tn: null
      }, {
        ln: 'BinaryLogicOpType',
        bti: '.LogicOpsType',
        ps: [{
            n: 'ops',
            rq: true,
            mno: 2,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: 'logicOps',
                ti: '.LogicOpsType'
              }, {
                en: 'spatialOps',
                ti: '.SpatialOpsType'
              }, {
                en: 'comparisonOps',
                ti: '.ComparisonOpsType'
              }, {
                en: 'Function',
                ti: '.FunctionType'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'UnaryLogicOpType',
        bti: '.LogicOpsType',
        ps: [{
            n: 'comparisonOps',
            rq: true,
            mx: false,
            dom: false,
            ti: '.ComparisonOpsType',
            t: 'er'
          }, {
            n: 'spatialOps',
            rq: true,
            mx: false,
            dom: false,
            ti: '.SpatialOpsType',
            t: 'er'
          }, {
            n: 'logicOps',
            rq: true,
            mx: false,
            dom: false,
            ti: '.LogicOpsType',
            t: 'er'
          }, {
            n: 'function',
            rq: true,
            en: 'Function',
            ti: '.FunctionType'
          }]
      }, {
        ln: 'LogicOpsType'
      }, {
        ln: 'SpatialOperatorsType',
        ps: [{
            n: 'spatialOperator',
            rq: true,
            col: true,
            en: 'SpatialOperator',
            ti: '.SpatialOperatorType'
          }]
      }, {
        ln: 'ExpressionType'
      }, {
        ln: 'PropertyNameType',
        bti: '.ExpressionType',
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            t: 'ae'
          }]
      }, {
        ln: 'FilterCapabilities',
        tn: null,
        ps: [{
            n: 'spatialCapabilities',
            rq: true,
            en: 'Spatial_Capabilities',
            ti: '.SpatialCapabilitiesType'
          }, {
            n: 'scalarCapabilities',
            rq: true,
            en: 'Scalar_Capabilities',
            ti: '.ScalarCapabilitiesType'
          }, {
            n: 'idCapabilities',
            rq: true,
            en: 'Id_Capabilities',
            ti: '.IdCapabilitiesType'
          }]
      }, {
        t: 'enum',
        ln: 'SpatialOperatorNameType',
        vs: ['BBOX', 'Equals', 'Disjoint', 'Intersects', 'Touches', 'Crosses', 'Within', 'Contains', 'Overlaps', 'Beyond', 'DWithin']
      }, {
        t: 'enum',
        ln: 'SortOrderType',
        vs: ['DESC', 'ASC']
      }, {
        t: 'enum',
        ln: 'ComparisonOperatorType',
        vs: ['LessThan', 'GreaterThan', 'LessThanEqualTo', 'GreaterThanEqualTo', 'EqualTo', 'NotEqualTo', 'Like', 'Between', 'NullCheck']
      }],
    eis: [{
        en: 'DWithin',
        ti: '.DistanceBufferType',
        sh: 'spatialOps'
      }, {
        en: 'PropertyIsGreaterThanOrEqualTo',
        ti: '.BinaryComparisonOpType',
        sh: 'comparisonOps'
      }, {
        en: 'Literal',
        ti: '.LiteralType',
        sh: 'expression'
      }, {
        en: 'Overlaps',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'SimpleArithmetic',
        ti: '.SimpleArithmetic'
      }, {
        en: 'PropertyIsLike',
        ti: '.PropertyIsLikeType',
        sh: 'comparisonOps'
      }, {
        en: 'Contains',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'PropertyIsLessThan',
        ti: '.BinaryComparisonOpType',
        sh: 'comparisonOps'
      }, {
        en: 'Not',
        ti: '.UnaryLogicOpType',
        sh: 'logicOps'
      }, {
        en: 'Mul',
        ti: '.BinaryOperatorType',
        sh: 'expression'
      }, {
        en: 'PropertyIsEqualTo',
        ti: '.BinaryComparisonOpType',
        sh: 'comparisonOps'
      }, {
        en: 'GmlObjectId',
        ti: '.GmlObjectIdType',
        sh: '_Id'
      }, {
        en: 'PropertyIsNull',
        ti: '.PropertyIsNullType',
        sh: 'comparisonOps'
      }, {
        en: 'expression',
        ti: '.ExpressionType'
      }, {
        en: 'PropertyIsBetween',
        ti: '.PropertyIsBetweenType',
        sh: 'comparisonOps'
      }, {
        en: 'PropertyIsNotEqualTo',
        ti: '.BinaryComparisonOpType',
        sh: 'comparisonOps'
      }, {
        en: 'Beyond',
        ti: '.DistanceBufferType',
        sh: 'spatialOps'
      }, {
        en: 'comparisonOps',
        ti: '.ComparisonOpsType'
      }, {
        en: '_Id',
        ti: '.AbstractIdType'
      }, {
        en: 'PropertyIsLessThanOrEqualTo',
        ti: '.BinaryComparisonOpType',
        sh: 'comparisonOps'
      }, {
        en: 'logicOps',
        ti: '.LogicOpsType'
      }, {
        en: 'spatialOps',
        ti: '.SpatialOpsType'
      }, {
        en: 'Filter',
        ti: '.FilterType'
      }, {
        en: 'Touches',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'FID',
        ti: '.FID'
      }, {
        en: 'Filter_Capabilities',
        ti: '.FilterCapabilities'
      }, {
        en: 'BBOX',
        ti: '.BBOXType',
        sh: 'spatialOps'
      }, {
        en: 'And',
        ti: '.BinaryLogicOpType',
        sh: 'logicOps'
      }, {
        en: 'PropertyName',
        ti: '.PropertyNameType',
        sh: 'expression'
      }, {
        en: 'FeatureId',
        ti: '.FeatureIdType',
        sh: '_Id'
      }, {
        en: 'Div',
        ti: '.BinaryOperatorType',
        sh: 'expression'
      }, {
        en: 'LogicalOperators',
        ti: '.LogicalOperators'
      }, {
        en: 'PropertyIsGreaterThan',
        ti: '.BinaryComparisonOpType',
        sh: 'comparisonOps'
      }, {
        en: 'Function',
        ti: '.FunctionType',
        sh: 'expression'
      }, {
        en: 'Within',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'Sub',
        ti: '.BinaryOperatorType',
        sh: 'expression'
      }, {
        en: 'SortBy',
        ti: '.SortByType'
      }, {
        en: 'Add',
        ti: '.BinaryOperatorType',
        sh: 'expression'
      }, {
        en: 'Crosses',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'Or',
        ti: '.BinaryLogicOpType',
        sh: 'logicOps'
      }, {
        en: 'Intersects',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'EID',
        ti: '.EID'
      }, {
        en: 'Disjoint',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'Equals',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }]
  };
  return {
    Filter_1_1_0: Filter_1_1_0
  };
};
if (true) {
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (Filter_1_1_0_Module_Factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
else {
  var Filter_1_1_0_Module = Filter_1_1_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.Filter_1_1_0 = Filter_1_1_0_Module.Filter_1_1_0;
  }
  else {
    var Filter_1_1_0 = Filter_1_1_0_Module.Filter_1_1_0;
  }
}

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var GML_3_1_1_Module_Factory = function () {
  var GML_3_1_1 = {
    n: 'GML_3_1_1',
    dens: 'http:\/\/www.opengis.net\/gml',
    dans: 'http:\/\/www.w3.org\/1999\/xlink',
    deps: ['SMIL_2_0_Language', 'XLink_1_0'],
    tis: [{
        ln: 'PointPropertyType',
        ps: [{
            n: 'point',
            rq: true,
            en: 'Point',
            ti: '.PointType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'TopoPrimitiveArrayAssociationType',
        ps: [{
            n: 'topoPrimitive',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: '_TopoPrimitive',
            ti: '.AbstractTopoPrimitiveType',
            t: 'er'
          }]
      }, {
        ln: 'CurveArrayPropertyType',
        ps: [{
            n: 'curve',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: '_Curve',
            ti: '.AbstractCurveType',
            t: 'er'
          }]
      }, {
        ln: 'BaseUnitType',
        bti: '.UnitDefinitionType',
        ps: [{
            n: 'unitsSystem',
            rq: true,
            ti: '.ReferenceType'
          }]
      }, {
        ln: 'TimeNodeType',
        bti: '.AbstractTimeTopologyPrimitiveType',
        ps: [{
            n: 'previousEdge',
            mno: 0,
            col: true,
            ti: '.TimeEdgePropertyType'
          }, {
            n: 'nextEdge',
            mno: 0,
            col: true,
            ti: '.TimeEdgePropertyType'
          }, {
            n: 'position',
            ti: '.TimeInstantPropertyType'
          }]
      }, {
        ln: 'DirectedEdgePropertyType',
        ps: [{
            n: 'edge',
            rq: true,
            en: 'Edge',
            ti: '.EdgeType'
          }, {
            n: 'orientation',
            an: {
              lp: 'orientation'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'BagType',
        bti: '.AbstractGMLType',
        ps: [{
            n: 'member',
            mno: 0,
            col: true,
            ti: '.AssociationType'
          }, {
            n: 'members',
            ti: '.ArrayAssociationType'
          }]
      }, {
        ln: 'DatumRefType',
        ps: [{
            n: 'datum',
            rq: true,
            mx: false,
            dom: false,
            en: '_Datum',
            ti: '.AbstractDatumType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'StyleVariationType',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'styleProperty',
            rq: true,
            an: {
              lp: 'styleProperty'
            },
            t: 'a'
          }, {
            n: 'featurePropertyRange',
            an: {
              lp: 'featurePropertyRange'
            },
            t: 'a'
          }]
      }, {
        ln: 'CurvePropertyType',
        ps: [{
            n: 'curve',
            rq: true,
            mx: false,
            dom: false,
            en: '_Curve',
            ti: '.AbstractCurveType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'GeographicCRSType',
        bti: '.AbstractReferenceSystemType',
        ps: [{
            n: 'usesEllipsoidalCS',
            rq: true,
            ti: '.EllipsoidalCSRefType'
          }, {
            n: 'usesGeodeticDatum',
            rq: true,
            ti: '.GeodeticDatumRefType'
          }]
      }, {
        ln: 'MultiSurfaceType',
        bti: '.AbstractGeometricAggregateType',
        ps: [{
            n: 'surfaceMember',
            mno: 0,
            col: true,
            ti: '.SurfacePropertyType'
          }, {
            n: 'surfaceMembers',
            ti: '.SurfaceArrayPropertyType'
          }]
      }, {
        ln: 'AbstractStyleType',
        bti: '.AbstractGMLType'
      }, {
        ln: 'OperationParameterBaseType',
        bti: '.AbstractGeneralOperationParameterType'
      }, {
        ln: 'TopoPointType',
        bti: '.AbstractTopologyType',
        ps: [{
            n: 'directedNode',
            rq: true,
            ti: '.DirectedNodePropertyType'
          }]
      }, {
        ln: 'AbstractGeneralDerivedCRSType',
        bti: '.AbstractReferenceSystemType',
        ps: [{
            n: 'baseCRS',
            rq: true,
            ti: '.CoordinateReferenceSystemRefType'
          }, {
            n: 'definedByConversion',
            rq: true,
            ti: '.GeneralConversionRefType'
          }]
      }, {
        ln: 'EllipsoidRefType',
        ps: [{
            n: 'ellipsoid',
            rq: true,
            en: 'Ellipsoid',
            ti: '.EllipsoidType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'TinType.ControlPoint',
        tn: null,
        ps: [{
            n: 'posList',
            rq: true,
            ti: '.DirectPositionListType'
          }, {
            n: 'geometricPositionGroup',
            rq: true,
            mno: 3,
            col: true,
            etis: [{
                en: 'pos',
                ti: '.DirectPositionType'
              }, {
                en: 'pointProperty',
                ti: '.PointPropertyType'
              }],
            t: 'es'
          }]
      }, {
        ln: 'PointArrayPropertyType',
        ps: [{
            n: 'point',
            mno: 0,
            col: true,
            en: 'Point',
            ti: '.PointType'
          }]
      }, {
        ln: 'CoordinatesType',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'decimal',
            an: {
              lp: 'decimal'
            },
            t: 'a'
          }, {
            n: 'cs',
            an: {
              lp: 'cs'
            },
            t: 'a'
          }, {
            n: 'ts',
            an: {
              lp: 'ts'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractDatumType',
        bti: '.AbstractDatumBaseType',
        ps: [{
            n: 'datumID',
            mno: 0,
            col: true,
            ti: '.IdentifierType'
          }, {
            n: 'remarks',
            ti: '.StringOrRefType'
          }, {
            n: 'anchorPoint',
            ti: '.CodeType'
          }, {
            n: 'realizationEpoch',
            ti: 'Date'
          }, {
            n: 'validArea',
            ti: '.ExtentType'
          }, {
            n: 'scope'
          }]
      }, {
        ln: 'LabelStyleType',
        bti: '.BaseStyleDescriptorType',
        ps: [{
            n: 'style',
            rq: true
          }, {
            n: 'label',
            rq: true,
            ti: '.LabelType'
          }]
      }, {
        ln: 'OperationParameterType',
        bti: '.OperationParameterBaseType',
        ps: [{
            n: 'parameterID',
            mno: 0,
            col: true,
            ti: '.IdentifierType'
          }, {
            n: 'remarks',
            ti: '.StringOrRefType'
          }]
      }, {
        ln: 'CartesianCSType',
        bti: '.AbstractCoordinateSystemType'
      }, {
        ln: 'ConversionToPreferredUnitType',
        bti: '.UnitOfMeasureType',
        ps: [{
            n: 'factor',
            rq: true,
            ti: 'Double'
          }, {
            n: 'formula',
            rq: true,
            ti: '.FormulaType'
          }]
      }, {
        ln: 'AbstractParametricCurveSurfaceType',
        bti: '.AbstractSurfacePatchType'
      }, {
        ln: 'ProjectedCRSRefType',
        ps: [{
            n: 'projectedCRS',
            rq: true,
            en: 'ProjectedCRS',
            ti: '.ProjectedCRSType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'TimePeriodType',
        bti: '.AbstractTimeGeometricPrimitiveType',
        ps: [{
            n: 'beginPosition',
            rq: true,
            ti: '.TimePositionType'
          }, {
            n: 'begin',
            rq: true,
            ti: '.TimeInstantPropertyType'
          }, {
            n: 'endPosition',
            rq: true,
            ti: '.TimePositionType'
          }, {
            n: 'end',
            rq: true,
            ti: '.TimeInstantPropertyType'
          }, {
            n: 'duration',
            rq: true,
            ti: 'Duration'
          }, {
            n: 'timeInterval',
            rq: true,
            ti: '.TimeIntervalLengthType'
          }]
      }, {
        ln: 'SurfacePatchArrayPropertyType',
        ps: [{
            n: 'surfacePatch',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: '_SurfacePatch',
            ti: '.AbstractSurfacePatchType',
            t: 'er'
          }]
      }, {
        ln: 'AreaType',
        bti: '.MeasureType'
      }, {
        ln: 'ArcStringType',
        bti: '.AbstractCurveSegmentType',
        ps: [{
            n: 'posOrPointPropertyOrPointRep',
            rq: true,
            mno: 3,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: 'pointRep',
                ti: '.PointPropertyType'
              }, {
                en: 'pointProperty',
                ti: '.PointPropertyType'
              }, {
                en: 'pos',
                ti: '.DirectPositionType'
              }],
            t: 'ers'
          }, {
            n: 'posList',
            rq: true,
            ti: '.DirectPositionListType'
          }, {
            n: 'coordinates',
            rq: true,
            ti: '.CoordinatesType'
          }, {
            n: 'interpolation',
            an: {
              lp: 'interpolation'
            },
            t: 'a'
          }, {
            n: 'numArc',
            ti: 'Integer',
            an: {
              lp: 'numArc'
            },
            t: 'a'
          }]
      }, {
        ln: 'TopoSolidType',
        bti: '.AbstractTopoPrimitiveType',
        ps: [{
            n: 'directedFace',
            rq: true,
            col: true,
            ti: '.DirectedFacePropertyType'
          }]
      }, {
        ln: 'RangeParametersType',
        ps: [{
            n: '_boolean',
            rq: true,
            en: 'Boolean',
            ti: 'Boolean'
          }, {
            n: 'category',
            rq: true,
            en: 'Category',
            ti: '.CodeType'
          }, {
            n: 'quantity',
            rq: true,
            en: 'Quantity',
            ti: '.MeasureType'
          }, {
            n: 'count',
            rq: true,
            en: 'Count',
            ti: 'Integer'
          }, {
            n: 'booleanList',
            rq: true,
            en: 'BooleanList',
            ti: {
              t: 'l'
            }
          }, {
            n: 'categoryList',
            rq: true,
            en: 'CategoryList',
            ti: '.CodeOrNullListType'
          }, {
            n: 'quantityList',
            rq: true,
            en: 'QuantityList',
            ti: '.MeasureOrNullListType'
          }, {
            n: 'countList',
            rq: true,
            en: 'CountList',
            ti: {
              t: 'l'
            }
          }, {
            n: 'categoryExtent',
            rq: true,
            en: 'CategoryExtent',
            ti: '.CategoryExtentType'
          }, {
            n: 'quantityExtent',
            rq: true,
            en: 'QuantityExtent',
            ti: '.QuantityExtentType'
          }, {
            n: 'countExtent',
            rq: true,
            en: 'CountExtent',
            ti: {
              t: 'l'
            }
          }, {
            n: 'compositeValue',
            rq: true,
            mx: false,
            dom: false,
            en: 'CompositeValue',
            ti: '.CompositeValueType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'MultiPolygonPropertyType',
        ps: [{
            n: 'multiPolygon',
            rq: true,
            en: 'MultiPolygon',
            ti: '.MultiPolygonType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'GeometryStyleType',
        bti: '.BaseStyleDescriptorType',
        ps: [{
            n: 'symbol',
            rq: true,
            ti: '.SymbolType'
          }, {
            n: 'style',
            rq: true
          }, {
            n: 'labelStyle',
            ti: '.LabelStylePropertyType'
          }, {
            n: 'geometryProperty',
            an: {
              lp: 'geometryProperty'
            },
            t: 'a'
          }, {
            n: 'geometryType',
            an: {
              lp: 'geometryType'
            },
            t: 'a'
          }]
      }, {
        ln: 'ExtentType',
        ps: [{
            n: 'description',
            ti: '.StringOrRefType'
          }, {
            n: 'boundingBox',
            mno: 0,
            col: true,
            ti: '.EnvelopeType'
          }, {
            n: 'boundingPolygon',
            mno: 0,
            col: true,
            ti: '.PolygonType'
          }, {
            n: 'verticalExtent',
            mno: 0,
            col: true,
            ti: '.EnvelopeType'
          }, {
            n: 'temporalExtent',
            mno: 0,
            col: true,
            ti: '.TimePeriodType'
          }]
      }, {
        ln: 'UserDefinedCSType',
        bti: '.AbstractCoordinateSystemType'
      }, {
        ln: 'OrientableSurfaceType',
        bti: '.AbstractSurfaceType',
        ps: [{
            n: 'baseSurface',
            rq: true,
            ti: '.SurfacePropertyType'
          }, {
            n: 'orientation',
            an: {
              lp: 'orientation'
            },
            t: 'a'
          }]
      }, {
        ln: 'TemporalDatumRefType',
        ps: [{
            n: 'temporalDatum',
            rq: true,
            en: 'TemporalDatum',
            ti: '.TemporalDatumType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'KnotPropertyType',
        ps: [{
            n: 'knot',
            rq: true,
            en: 'Knot',
            ti: '.KnotType'
          }]
      }, {
        ln: 'DefinitionProxyType',
        bti: '.DefinitionType',
        ps: [{
            n: 'definitionRef',
            rq: true,
            ti: '.ReferenceType'
          }]
      }, {
        ln: 'ArcByBulgeType',
        bti: '.ArcStringByBulgeType'
      }, {
        ln: 'GeometricComplexPropertyType',
        ps: [{
            n: 'geometricComplex',
            rq: true,
            en: 'GeometricComplex',
            ti: '.GeometricComplexType'
          }, {
            n: 'compositeCurve',
            rq: true,
            en: 'CompositeCurve',
            ti: '.CompositeCurveType'
          }, {
            n: 'compositeSurface',
            rq: true,
            en: 'CompositeSurface',
            ti: '.CompositeSurfaceType'
          }, {
            n: 'compositeSolid',
            rq: true,
            en: 'CompositeSolid',
            ti: '.CompositeSolidType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'CompositeCurvePropertyType',
        ps: [{
            n: 'compositeCurve',
            rq: true,
            en: 'CompositeCurve',
            ti: '.CompositeCurveType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'OperationParameterGroupBaseType',
        bti: '.AbstractGeneralOperationParameterType'
      }, {
        ln: 'MultiPointCoverageType',
        bti: '.AbstractDiscreteCoverageType'
      }, {
        ln: 'ReferenceType',
        ps: [{
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'ImageCRSRefType',
        ps: [{
            n: 'imageCRS',
            rq: true,
            en: 'ImageCRS',
            ti: '.ImageCRSType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'DefaultStylePropertyType',
        ps: [{
            n: 'style',
            mx: false,
            dom: false,
            en: '_Style',
            ti: '.AbstractStyleType',
            t: 'er'
          }, {
            n: 'about',
            an: {
              lp: 'about'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'AbstractTimeReferenceSystemType',
        bti: '.DefinitionType',
        ps: [{
            n: 'domainOfValidity'
          }]
      }, {
        ln: 'AbsoluteExternalPositionalAccuracyType',
        bti: '.AbstractPositionalAccuracyType',
        ps: [{
            n: 'result',
            rq: true,
            ti: '.MeasureType'
          }]
      }, {
        ln: 'TopoPrimitiveMemberType',
        ps: [{
            n: 'topoPrimitive',
            mx: false,
            dom: false,
            en: '_TopoPrimitive',
            ti: '.AbstractTopoPrimitiveType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'TimeOrdinalReferenceSystemType',
        bti: '.AbstractTimeReferenceSystemType',
        ps: [{
            n: 'component',
            rq: true,
            col: true,
            ti: '.TimeOrdinalEraPropertyType'
          }]
      }, {
        ln: 'CompositeSolidType',
        bti: '.AbstractSolidType',
        ps: [{
            n: 'solidMember',
            rq: true,
            col: true,
            ti: '.SolidPropertyType'
          }]
      }, {
        ln: 'GeocentricCRSRefType',
        ps: [{
            n: 'geocentricCRS',
            rq: true,
            en: 'GeocentricCRS',
            ti: '.GeocentricCRSType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'MultiCurveType',
        bti: '.AbstractGeometricAggregateType',
        ps: [{
            n: 'curveMember',
            mno: 0,
            col: true,
            ti: '.CurvePropertyType'
          }, {
            n: 'curveMembers',
            ti: '.CurveArrayPropertyType'
          }]
      }, {
        ln: 'UnitDefinitionType',
        bti: '.DefinitionType',
        ps: [{
            n: 'quantityType',
            rq: true,
            ti: '.StringOrRefType'
          }, {
            n: 'catalogSymbol',
            ti: '.CodeType'
          }]
      }, {
        ln: 'CurveSegmentArrayPropertyType',
        ps: [{
            n: 'curveSegment',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: '_CurveSegment',
            ti: '.AbstractCurveSegmentType',
            t: 'er'
          }]
      }, {
        ln: 'AbstractTimePrimitiveType',
        bti: '.AbstractTimeObjectType',
        ps: [{
            n: 'relatedTime',
            mno: 0,
            col: true,
            ti: '.RelatedTimeType'
          }]
      }, {
        ln: 'MultiPointType',
        bti: '.AbstractGeometricAggregateType',
        ps: [{
            n: 'pointMember',
            mno: 0,
            col: true,
            ti: '.PointPropertyType'
          }, {
            n: 'pointMembers',
            ti: '.PointArrayPropertyType'
          }]
      }, {
        ln: 'MultiPointPropertyType',
        ps: [{
            n: 'multiPoint',
            rq: true,
            en: 'MultiPoint',
            ti: '.MultiPointType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'AbstractTimeTopologyPrimitiveType',
        bti: '.AbstractTimePrimitiveType',
        ps: [{
            n: 'complex',
            ti: '.ReferenceType'
          }]
      }, {
        ln: 'KnotType',
        ps: [{
            n: 'value',
            rq: true,
            ti: 'Double'
          }, {
            n: 'multiplicity',
            rq: true,
            ti: 'NonNegativeInteger'
          }, {
            n: 'weight',
            rq: true,
            ti: 'Double'
          }]
      }, {
        ln: 'CodeType',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'codeSpace',
            an: {
              lp: 'codeSpace'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractTimeSliceType',
        bti: '.AbstractGMLType',
        ps: [{
            n: 'validTime',
            rq: true,
            ti: '.TimePrimitivePropertyType'
          }, {
            n: 'dataSource',
            ti: '.StringOrRefType'
          }]
      }, {
        ln: 'DynamicFeatureType',
        bti: '.AbstractFeatureType',
        ps: [{
            n: 'validTime',
            ti: '.TimePrimitivePropertyType'
          }, {
            n: 'history',
            mx: false,
            dom: false,
            ti: '.HistoryPropertyType',
            t: 'er'
          }, {
            n: 'dataSource',
            ti: '.StringOrRefType'
          }]
      }, {
        ln: 'RingPropertyType',
        ps: [{
            n: 'ring',
            rq: true,
            en: 'Ring',
            ti: '.RingType'
          }]
      }, {
        ln: 'EngineeringCRSType',
        bti: '.AbstractReferenceSystemType',
        ps: [{
            n: 'usesCS',
            rq: true,
            ti: '.CoordinateSystemRefType'
          }, {
            n: 'usesEngineeringDatum',
            rq: true,
            ti: '.EngineeringDatumRefType'
          }]
      }, {
        ln: 'BooleanPropertyType',
        bti: '.ValuePropertyType'
      }, {
        ln: 'VerticalCRSRefType',
        ps: [{
            n: 'verticalCRS',
            rq: true,
            en: 'VerticalCRS',
            ti: '.VerticalCRSType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'FormulaType',
        ps: [{
            n: 'a',
            ti: 'Double'
          }, {
            n: 'b',
            rq: true,
            ti: 'Double'
          }, {
            n: 'c',
            rq: true,
            ti: 'Double'
          }, {
            n: 'd',
            ti: 'Double'
          }]
      }, {
        ln: 'EngineeringDatumRefType',
        ps: [{
            n: 'engineeringDatum',
            rq: true,
            en: 'EngineeringDatum',
            ti: '.EngineeringDatumType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'DirectedObservationAtDistanceType',
        bti: '.DirectedObservationType',
        ps: [{
            n: 'distance',
            rq: true,
            ti: '.MeasureType'
          }]
      }, {
        ln: 'AbstractMetaDataType',
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            t: 'ers'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractCurveSegmentType',
        ps: [{
            n: 'numDerivativesAtStart',
            ti: 'Integer',
            an: {
              lp: 'numDerivativesAtStart'
            },
            t: 'a'
          }, {
            n: 'numDerivativesAtEnd',
            ti: 'Integer',
            an: {
              lp: 'numDerivativesAtEnd'
            },
            t: 'a'
          }, {
            n: 'numDerivativeInterior',
            ti: 'Integer',
            an: {
              lp: 'numDerivativeInterior'
            },
            t: 'a'
          }]
      }, {
        ln: 'RelatedTimeType',
        bti: '.TimePrimitivePropertyType',
        ps: [{
            n: 'relativePosition',
            an: {
              lp: 'relativePosition'
            },
            t: 'a'
          }]
      }, {
        ln: 'OperationParameterGroupRefType',
        ps: [{
            n: 'operationParameterGroup',
            rq: true,
            en: 'OperationParameterGroup',
            ti: '.OperationParameterGroupType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'GridType',
        bti: '.AbstractGeometryType',
        ps: [{
            n: 'limits',
            rq: true,
            ti: '.GridLimitsType'
          }, {
            n: 'axisName',
            rq: true,
            col: true
          }, {
            n: 'dimension',
            rq: true,
            ti: 'PositiveInteger',
            an: {
              lp: 'dimension'
            },
            t: 'a'
          }]
      }, {
        ln: 'IndexMapType',
        bti: '.GridFunctionType',
        ps: [{
            n: 'lookUpTable',
            rq: true,
            ti: {
              t: 'l',
              bti: 'Integer'
            }
          }]
      }, {
        ln: 'AbstractCurveType',
        bti: '.AbstractGeometricPrimitiveType'
      }, {
        ln: 'MultiGeometryPropertyType',
        ps: [{
            n: 'geometricAggregate',
            rq: true,
            mx: false,
            dom: false,
            en: '_GeometricAggregate',
            ti: '.AbstractGeometricAggregateType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'GridCoverageType',
        bti: '.AbstractDiscreteCoverageType'
      }, {
        ln: 'DerivedCRSTypeType',
        bti: '.CodeType'
      }, {
        ln: 'ArrayType',
        bti: '.AbstractGMLType',
        ps: [{
            n: 'members',
            ti: '.ArrayAssociationType'
          }]
      }, {
        ln: 'AbstractGriddedSurfaceType',
        bti: '.AbstractParametricCurveSurfaceType',
        ps: [{
            n: 'row',
            rq: true,
            col: true,
            ti: '.AbstractGriddedSurfaceType.Row'
          }, {
            n: 'rows',
            ti: 'Integer'
          }, {
            n: 'columns',
            ti: 'Integer'
          }]
      }, {
        ln: 'AbstractTimeGeometricPrimitiveType',
        bti: '.AbstractTimePrimitiveType',
        ps: [{
            n: 'frame',
            an: {
              lp: 'frame'
            },
            t: 'a'
          }]
      }, {
        ln: 'ArrayAssociationType',
        ps: [{
            n: 'object',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: '_Object',
            ti: 'AnyType',
            t: 'er'
          }]
      }, {
        ln: 'PassThroughOperationRefType',
        ps: [{
            n: 'passThroughOperation',
            rq: true,
            en: 'PassThroughOperation',
            ti: '.PassThroughOperationType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'PolygonPatchType',
        bti: '.AbstractSurfacePatchType',
        ps: [{
            n: 'exterior',
            mx: false,
            dom: false,
            ti: '.AbstractRingPropertyType',
            t: 'er'
          }, {
            n: 'interior',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            ti: '.AbstractRingPropertyType',
            t: 'er'
          }, {
            n: 'interpolation',
            an: {
              lp: 'interpolation'
            },
            t: 'a'
          }]
      }, {
        ln: 'GeneralTransformationRefType',
        ps: [{
            n: 'generalTransformation',
            rq: true,
            mx: false,
            dom: false,
            en: '_GeneralTransformation',
            ti: '.AbstractGeneralTransformationType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'TransformationRefType',
        ps: [{
            n: 'transformation',
            rq: true,
            en: 'Transformation',
            ti: '.TransformationType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'ValueArrayType',
        bti: '.CompositeValueType',
        ps: [{
            n: 'codeSpace',
            an: {
              lp: 'codeSpace'
            },
            t: 'a'
          }, {
            n: 'uom',
            an: {
              lp: 'uom'
            },
            t: 'a'
          }]
      }, {
        ln: 'TimeClockPropertyType',
        ps: [{
            n: 'timeClock',
            rq: true,
            en: 'TimeClock',
            ti: '.TimeClockType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'CylinderType',
        bti: '.AbstractGriddedSurfaceType',
        ps: [{
            n: 'horizontalCURVETYPE',
            an: {
              lp: 'horizontalCurveType'
            },
            t: 'a'
          }, {
            n: 'verticalCURVETYPE',
            an: {
              lp: 'verticalCurveType'
            },
            t: 'a'
          }]
      }, {
        ln: 'MultiSurfaceCoverageType',
        bti: '.AbstractDiscreteCoverageType'
      }, {
        ln: 'VerticalDatumTypeType',
        bti: '.CodeType'
      }, {
        ln: 'GeometryArrayPropertyType',
        ps: [{
            n: 'geometry',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: '_Geometry',
            ti: '.AbstractGeometryType',
            t: 'er'
          }]
      }, {
        ln: 'MultiCurvePropertyType',
        ps: [{
            n: 'multiCurve',
            rq: true,
            en: 'MultiCurve',
            ti: '.MultiCurveType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'DirectedFacePropertyType',
        ps: [{
            n: 'face',
            rq: true,
            en: 'Face',
            ti: '.FaceType'
          }, {
            n: 'orientation',
            an: {
              lp: 'orientation'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'GridFunctionType',
        ps: [{
            n: 'sequenceRule',
            ti: '.SequenceRuleType'
          }, {
            n: 'startPoint',
            ti: {
              t: 'l',
              bti: 'Integer'
            }
          }]
      }, {
        ln: 'DMSAngleType',
        ps: [{
            n: 'degrees',
            rq: true,
            ti: '.DegreesType'
          }, {
            n: 'decimalMinutes',
            rq: true,
            ti: 'Decimal'
          }, {
            n: 'minutes',
            rq: true,
            ti: 'NonNegativeInteger'
          }, {
            n: 'seconds',
            ti: 'Decimal'
          }]
      }, {
        ln: 'AbstractTimeComplexType',
        bti: '.AbstractTimeObjectType'
      }, {
        ln: 'LocationPropertyType',
        ps: [{
            n: 'geometry',
            rq: true,
            mx: false,
            dom: false,
            en: '_Geometry',
            ti: '.AbstractGeometryType',
            t: 'er'
          }, {
            n: 'locationKeyWord',
            rq: true,
            en: 'LocationKeyWord',
            ti: '.CodeType'
          }, {
            n: 'locationString',
            rq: true,
            en: 'LocationString',
            ti: '.StringOrRefType'
          }, {
            n: '_null',
            rq: true,
            en: 'Null',
            ti: {
              t: 'l'
            }
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'SurfaceType',
        bti: '.AbstractSurfaceType',
        ps: [{
            n: 'patches',
            rq: true,
            mx: false,
            dom: false,
            ti: '.SurfacePatchArrayPropertyType',
            t: 'er'
          }]
      }, {
        ln: 'LabelType',
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            en: 'LabelExpression',
            t: 'er'
          }, {
            n: 'transform',
            an: {
              lp: 'transform',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }]
      }, {
        ln: 'OperationParameterRefType',
        ps: [{
            n: 'operationParameter',
            rq: true,
            en: 'OperationParameter',
            ti: '.OperationParameterType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'AbstractSolidType',
        bti: '.AbstractGeometricPrimitiveType'
      }, {
        ln: 'GenericMetaDataType',
        bti: '.AbstractMetaDataType',
        ps: [{
            n: 'contentOverrideForGenericMetaDataType',
            t: 'ae'
          }]
      }, {
        ln: 'CoordinateOperationRefType',
        ps: [{
            n: 'coordinateOperation',
            rq: true,
            mx: false,
            dom: false,
            en: '_CoordinateOperation',
            ti: '.AbstractCoordinateOperationType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'DataBlockType',
        ps: [{
            n: 'rangeParameters',
            rq: true,
            ti: '.RangeParametersType'
          }, {
            n: 'tupleList',
            rq: true,
            ti: '.CoordinatesType'
          }, {
            n: 'doubleOrNullTupleList',
            rq: true,
            ti: {
              t: 'l'
            }
          }]
      }, {
        ln: 'TopoComplexType',
        bti: '.AbstractTopologyType',
        ps: [{
            n: 'maximalComplex',
            rq: true,
            ti: '.TopoComplexMemberType'
          }, {
            n: 'superComplex',
            mno: 0,
            col: true,
            ti: '.TopoComplexMemberType'
          }, {
            n: 'subComplex',
            mno: 0,
            col: true,
            ti: '.TopoComplexMemberType'
          }, {
            n: 'topoPrimitiveMember',
            mno: 0,
            col: true,
            ti: '.TopoPrimitiveMemberType'
          }, {
            n: 'topoPrimitiveMembers',
            ti: '.TopoPrimitiveArrayAssociationType'
          }, {
            n: 'isMaximal',
            ti: 'Boolean',
            an: {
              lp: 'isMaximal'
            },
            t: 'a'
          }]
      }, {
        ln: 'NodeType',
        bti: '.AbstractTopoPrimitiveType',
        ps: [{
            n: 'directedEdge',
            mno: 0,
            col: true,
            ti: '.DirectedEdgePropertyType'
          }, {
            n: 'pointProperty',
            ti: '.PointPropertyType'
          }]
      }, {
        ln: 'PolarCSRefType',
        ps: [{
            n: 'polarCS',
            rq: true,
            en: 'PolarCS',
            ti: '.PolarCSType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'AbstractTopologyType',
        bti: '.AbstractGMLType'
      }, {
        ln: 'ClothoidType',
        bti: '.AbstractCurveSegmentType',
        ps: [{
            n: 'refLocation',
            rq: true,
            ti: '.ClothoidType.RefLocation'
          }, {
            n: 'scaleFactor',
            rq: true,
            ti: 'Decimal'
          }, {
            n: 'startParameter',
            rq: true,
            ti: 'Double'
          }, {
            n: 'endParameter',
            rq: true,
            ti: 'Double'
          }]
      }, {
        ln: 'MetaDataPropertyType',
        ps: [{
            n: 'any',
            rq: true,
            mx: false,
            t: 'ae'
          }, {
            n: 'about',
            an: {
              lp: 'about'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'ArcByCenterPointType',
        bti: '.AbstractCurveSegmentType',
        ps: [{
            n: 'pos',
            rq: true,
            ti: '.DirectPositionType'
          }, {
            n: 'pointProperty',
            rq: true,
            ti: '.PointPropertyType'
          }, {
            n: 'pointRep',
            rq: true,
            ti: '.PointPropertyType'
          }, {
            n: 'posList',
            rq: true,
            ti: '.DirectPositionListType'
          }, {
            n: 'coordinates',
            rq: true,
            ti: '.CoordinatesType'
          }, {
            n: 'radius',
            rq: true,
            ti: '.LengthType'
          }, {
            n: 'startAngle',
            ti: '.AngleType'
          }, {
            n: 'endAngle',
            ti: '.AngleType'
          }, {
            n: 'interpolation',
            an: {
              lp: 'interpolation'
            },
            t: 'a'
          }, {
            n: 'numARC',
            rq: true,
            ti: 'Integer',
            an: {
              lp: 'numArc'
            },
            t: 'a'
          }]
      }, {
        ln: 'ConversionRefType',
        ps: [{
            n: 'conversion',
            rq: true,
            en: 'Conversion',
            ti: '.ConversionType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'DegreesType',
        ps: [{
            n: 'value',
            ti: 'NonNegativeInteger',
            t: 'v'
          }, {
            n: 'direction',
            an: {
              lp: 'direction'
            },
            t: 'a'
          }]
      }, {
        ln: 'MultiSurfaceDomainType',
        bti: '.DomainSetType'
      }, {
        ln: 'ConcatenatedOperationRefType',
        ps: [{
            n: 'concatenatedOperation',
            rq: true,
            en: 'ConcatenatedOperation',
            ti: '.ConcatenatedOperationType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'OperationMethodType',
        bti: '.OperationMethodBaseType',
        ps: [{
            n: 'methodID',
            mno: 0,
            col: true,
            ti: '.IdentifierType'
          }, {
            n: 'remarks',
            ti: '.StringOrRefType'
          }, {
            n: 'methodFormula',
            rq: true,
            ti: '.CodeType'
          }, {
            n: 'sourceDimensions',
            rq: true,
            ti: 'PositiveInteger'
          }, {
            n: 'targetDimensions',
            rq: true,
            ti: 'PositiveInteger'
          }, {
            n: 'usesParameter',
            mno: 0,
            col: true,
            ti: '.AbstractGeneralOperationParameterRefType'
          }]
      }, {
        ln: 'EllipsoidalCSType',
        bti: '.AbstractCoordinateSystemType'
      }, {
        ln: 'SpeedType',
        bti: '.MeasureType'
      }, {
        ln: 'PolygonType',
        bti: '.AbstractSurfaceType',
        ps: [{
            n: 'exterior',
            mx: false,
            dom: false,
            ti: '.AbstractRingPropertyType',
            t: 'er'
          }, {
            n: 'interior',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            ti: '.AbstractRingPropertyType',
            t: 'er'
          }]
      }, {
        ln: 'AbstractTopoPrimitiveType',
        bti: '.AbstractTopologyType',
        ps: [{
            n: 'isolated',
            mno: 0,
            col: true,
            ti: '.IsolatedPropertyType'
          }, {
            n: 'container',
            ti: '.ContainerPropertyType'
          }]
      }, {
        ln: 'BSplineType',
        bti: '.AbstractCurveSegmentType',
        ps: [{
            n: 'posOrPointPropertyOrPointRep',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: 'pointRep',
                ti: '.PointPropertyType'
              }, {
                en: 'pointProperty',
                ti: '.PointPropertyType'
              }, {
                en: 'pos',
                ti: '.DirectPositionType'
              }],
            t: 'ers'
          }, {
            n: 'posList',
            rq: true,
            ti: '.DirectPositionListType'
          }, {
            n: 'coordinates',
            rq: true,
            ti: '.CoordinatesType'
          }, {
            n: 'degree',
            rq: true,
            ti: 'NonNegativeInteger'
          }, {
            n: 'knot',
            rq: true,
            mno: 2,
            col: true,
            ti: '.KnotPropertyType'
          }, {
            n: 'interpolation',
            an: {
              lp: 'interpolation'
            },
            t: 'a'
          }, {
            n: 'isPolynomial',
            ti: 'Boolean',
            an: {
              lp: 'isPolynomial'
            },
            t: 'a'
          }, {
            n: 'knotType',
            an: {
              lp: 'knotType'
            },
            t: 'a'
          }]
      }, {
        ln: 'FileType',
        ps: [{
            n: 'rangeParameters',
            rq: true,
            ti: '.RangeParametersType'
          }, {
            n: 'fileName',
            rq: true
          }, {
            n: 'fileStructure',
            rq: true
          }, {
            n: 'mimeType'
          }, {
            n: 'compression'
          }]
      }, {
        ln: 'RectifiedGridType',
        bti: '.GridType',
        ps: [{
            n: 'origin',
            rq: true,
            ti: '.PointPropertyType'
          }, {
            n: 'offsetVector',
            rq: true,
            col: true,
            ti: '.VectorType'
          }]
      }, {
        ln: 'TimePeriodPropertyType',
        ps: [{
            n: 'timePeriod',
            rq: true,
            en: 'TimePeriod',
            ti: '.TimePeriodType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'RingType',
        bti: '.AbstractRingType',
        ps: [{
            n: 'curveMember',
            rq: true,
            col: true,
            ti: '.CurvePropertyType'
          }]
      }, {
        ln: 'ClothoidType.RefLocation',
        tn: null,
        ps: [{
            n: 'affinePlacement',
            rq: true,
            en: 'AffinePlacement',
            ti: '.AffinePlacementType'
          }]
      }, {
        ln: 'GeometryStylePropertyType',
        ps: [{
            n: 'geometryStyle',
            en: 'GeometryStyle',
            ti: '.GeometryStyleType'
          }, {
            n: 'about',
            an: {
              lp: 'about'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'EnvelopeWithTimePeriodType',
        bti: '.EnvelopeType',
        ps: [{
            n: 'timePosition',
            rq: true,
            mno: 2,
            mxo: 2,
            col: true,
            ti: '.TimePositionType'
          }, {
            n: 'frame',
            an: {
              lp: 'frame'
            },
            t: 'a'
          }]
      }, {
        ln: 'ValuePropertyType',
        ps: [{
            n: '_boolean',
            rq: true,
            en: 'Boolean',
            ti: 'Boolean'
          }, {
            n: 'category',
            rq: true,
            en: 'Category',
            ti: '.CodeType'
          }, {
            n: 'quantity',
            rq: true,
            en: 'Quantity',
            ti: '.MeasureType'
          }, {
            n: 'count',
            rq: true,
            en: 'Count',
            ti: 'Integer'
          }, {
            n: 'booleanList',
            rq: true,
            en: 'BooleanList',
            ti: {
              t: 'l'
            }
          }, {
            n: 'categoryList',
            rq: true,
            en: 'CategoryList',
            ti: '.CodeOrNullListType'
          }, {
            n: 'quantityList',
            rq: true,
            en: 'QuantityList',
            ti: '.MeasureOrNullListType'
          }, {
            n: 'countList',
            rq: true,
            en: 'CountList',
            ti: {
              t: 'l'
            }
          }, {
            n: 'categoryExtent',
            rq: true,
            en: 'CategoryExtent',
            ti: '.CategoryExtentType'
          }, {
            n: 'quantityExtent',
            rq: true,
            en: 'QuantityExtent',
            ti: '.QuantityExtentType'
          }, {
            n: 'countExtent',
            rq: true,
            en: 'CountExtent',
            ti: {
              t: 'l'
            }
          }, {
            n: 'compositeValue',
            rq: true,
            mx: false,
            dom: false,
            en: 'CompositeValue',
            ti: '.CompositeValueType',
            t: 'er'
          }, {
            n: 'object',
            rq: true,
            mx: false,
            dom: false,
            en: '_Object',
            ti: 'AnyType',
            t: 'er'
          }, {
            n: '_null',
            rq: true,
            en: 'Null',
            ti: {
              t: 'l'
            }
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'GeodesicStringType',
        bti: '.AbstractCurveSegmentType',
        ps: [{
            n: 'posList',
            rq: true,
            ti: '.DirectPositionListType'
          }, {
            n: 'geometricPositionGroup',
            rq: true,
            mno: 2,
            col: true,
            etis: [{
                en: 'pos',
                ti: '.DirectPositionType'
              }, {
                en: 'pointProperty',
                ti: '.PointPropertyType'
              }],
            t: 'es'
          }, {
            n: 'interpolation',
            an: {
              lp: 'interpolation'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractDatumBaseType',
        bti: '.DefinitionType'
      }, {
        ln: 'TemporalCRSRefType',
        ps: [{
            n: 'temporalCRS',
            rq: true,
            en: 'TemporalCRS',
            ti: '.TemporalCRSType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'MultiGeometryType',
        bti: '.AbstractGeometricAggregateType',
        ps: [{
            n: 'geometryMember',
            mno: 0,
            col: true,
            ti: '.GeometryPropertyType'
          }, {
            n: 'geometryMembers',
            ti: '.GeometryArrayPropertyType'
          }]
      }, {
        ln: 'TimeInstantPropertyType',
        ps: [{
            n: 'timeInstant',
            rq: true,
            en: 'TimeInstant',
            ti: '.TimeInstantType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'CompoundCRSRefType',
        ps: [{
            n: 'compoundCRS',
            rq: true,
            en: 'CompoundCRS',
            ti: '.CompoundCRSType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'TrianglePatchArrayPropertyType',
        bti: '.SurfacePatchArrayPropertyType'
      }, {
        ln: 'DomainSetType',
        ps: [{
            n: 'geometry',
            rq: true,
            mx: false,
            dom: false,
            en: '_Geometry',
            ti: '.AbstractGeometryType',
            t: 'er'
          }, {
            n: 'timeObject',
            rq: true,
            mx: false,
            dom: false,
            en: '_TimeObject',
            ti: '.AbstractTimeObjectType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'TemporalCSRefType',
        ps: [{
            n: 'temporalCS',
            rq: true,
            en: 'TemporalCS',
            ti: '.TemporalCSType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'MultiPolygonType',
        bti: '.AbstractGeometricAggregateType',
        ps: [{
            n: 'polygonMember',
            mno: 0,
            col: true,
            ti: '.PolygonPropertyType'
          }]
      }, {
        ln: 'StyleType',
        bti: '.AbstractStyleType',
        ps: [{
            n: 'featureStyle',
            rq: true,
            col: true,
            ti: '.FeatureStylePropertyType'
          }, {
            n: 'graphStyle',
            ti: '.GraphStylePropertyType'
          }]
      }, {
        ln: 'DynamicFeatureCollectionType',
        bti: '.FeatureCollectionType',
        ps: [{
            n: 'validTime',
            ti: '.TimePrimitivePropertyType'
          }, {
            n: 'history',
            mx: false,
            dom: false,
            ti: '.HistoryPropertyType',
            t: 'er'
          }, {
            n: 'dataSource',
            ti: '.StringOrRefType'
          }]
      }, {
        ln: 'PrimeMeridianBaseType',
        bti: '.DefinitionType'
      }, {
        ln: 'AbstractGriddedSurfaceType.Row',
        tn: null,
        ps: [{
            n: 'posList',
            rq: true,
            ti: '.DirectPositionListType'
          }, {
            n: 'geometricPositionGroup',
            rq: true,
            col: true,
            etis: [{
                en: 'pos',
                ti: '.DirectPositionType'
              }, {
                en: 'pointProperty',
                ti: '.PointPropertyType'
              }],
            t: 'es'
          }]
      }, {
        ln: 'DictionaryType',
        bti: '.DefinitionType',
        ps: [{
            n: 'dictionaryEntryOrIndirectEntry',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: 'indirectEntry',
                ti: '.IndirectEntryType'
              }, {
                en: 'dictionaryEntry',
                ti: '.DictionaryEntryType'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'CoordType',
        ps: [{
            n: 'x',
            rq: true,
            en: 'X',
            ti: 'Decimal'
          }, {
            n: 'y',
            en: 'Y',
            ti: 'Decimal'
          }, {
            n: 'z',
            en: 'Z',
            ti: 'Decimal'
          }]
      }, {
        ln: 'RectangleType',
        bti: '.AbstractSurfacePatchType',
        ps: [{
            n: 'exterior',
            rq: true,
            mx: false,
            dom: false,
            ti: '.AbstractRingPropertyType',
            t: 'er'
          }, {
            n: 'interpolation',
            an: {
              lp: 'interpolation'
            },
            t: 'a'
          }]
      }, {
        ln: 'DirectionPropertyType',
        ps: [{
            n: 'directionVector',
            rq: true,
            en: 'DirectionVector',
            ti: '.DirectionVectorType'
          }, {
            n: 'compassPoint',
            rq: true,
            en: 'CompassPoint'
          }, {
            n: 'directionKeyword',
            rq: true,
            en: 'DirectionKeyword',
            ti: '.CodeType'
          }, {
            n: 'directionString',
            rq: true,
            en: 'DirectionString',
            ti: '.StringOrRefType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'AbstractFeatureCollectionType',
        bti: '.AbstractFeatureType',
        ps: [{
            n: 'featureMember',
            mno: 0,
            col: true,
            ti: '.FeaturePropertyType'
          }, {
            n: 'featureMembers',
            ti: '.FeatureArrayPropertyType'
          }]
      }, {
        ln: 'PrimeMeridianType',
        bti: '.PrimeMeridianBaseType',
        ps: [{
            n: 'meridianID',
            mno: 0,
            col: true,
            ti: '.IdentifierType'
          }, {
            n: 'remarks',
            ti: '.StringOrRefType'
          }, {
            n: 'greenwichLongitude',
            rq: true,
            ti: '.AngleChoiceType'
          }]
      }, {
        ln: 'SolidPropertyType',
        ps: [{
            n: 'solid',
            rq: true,
            mx: false,
            dom: false,
            en: '_Solid',
            ti: '.AbstractSolidType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'FeatureStylePropertyType',
        ps: [{
            n: 'featureStyle',
            en: 'FeatureStyle',
            ti: '.FeatureStyleType'
          }, {
            n: 'about',
            an: {
              lp: 'about'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'TimeCalendarType',
        bti: '.AbstractTimeReferenceSystemType',
        ps: [{
            n: 'referenceFrame',
            rq: true,
            col: true,
            ti: '.TimeCalendarEraPropertyType'
          }]
      }, {
        ln: 'AbstractGeneralOperationParameterType',
        bti: '.DefinitionType',
        ps: [{
            n: 'minimumOccurs',
            ti: 'NonNegativeInteger'
          }]
      }, {
        ln: 'DerivedCRSType',
        bti: '.AbstractGeneralDerivedCRSType',
        ps: [{
            n: 'derivedCRSType',
            rq: true,
            ti: '.DerivedCRSTypeType'
          }, {
            n: 'usesCS',
            rq: true,
            ti: '.CoordinateSystemRefType'
          }]
      }, {
        ln: 'TimeType',
        bti: '.MeasureType'
      }, {
        ln: 'CylindricalCSType',
        bti: '.AbstractCoordinateSystemType'
      }, {
        ln: 'UnitOfMeasureType',
        ps: [{
            n: 'uom',
            rq: true,
            an: {
              lp: 'uom'
            },
            t: 'a'
          }]
      }, {
        ln: 'GeneralConversionRefType',
        ps: [{
            n: 'generalConversion',
            rq: true,
            mx: false,
            dom: false,
            en: '_GeneralConversion',
            ti: '.AbstractGeneralConversionType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'AffinePlacementType',
        ps: [{
            n: 'location',
            rq: true,
            ti: '.DirectPositionType'
          }, {
            n: 'refDirection',
            rq: true,
            col: true,
            ti: '.VectorType'
          }, {
            n: 'inDimension',
            rq: true,
            ti: 'PositiveInteger'
          }, {
            n: 'outDimension',
            rq: true,
            ti: 'PositiveInteger'
          }]
      }, {
        ln: 'PolyhedralSurfaceType',
        bti: '.SurfaceType'
      }, {
        ln: 'IsolatedPropertyType',
        ps: [{
            n: 'node',
            rq: true,
            en: 'Node',
            ti: '.NodeType'
          }, {
            n: 'edge',
            rq: true,
            en: 'Edge',
            ti: '.EdgeType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'SolidType',
        bti: '.AbstractSolidType',
        ps: [{
            n: 'exterior',
            ti: '.SurfacePropertyType'
          }, {
            n: 'interior',
            mno: 0,
            col: true,
            ti: '.SurfacePropertyType'
          }]
      }, {
        ln: 'VerticalCSType',
        bti: '.AbstractCoordinateSystemType'
      }, {
        ln: 'ArcType',
        bti: '.ArcStringType'
      }, {
        ln: 'GeometricPrimitivePropertyType',
        ps: [{
            n: 'geometricPrimitive',
            rq: true,
            mx: false,
            dom: false,
            en: '_GeometricPrimitive',
            ti: '.AbstractGeometricPrimitiveType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'AbstractSurfacePatchType'
      }, {
        ln: 'EllipsoidalCSRefType',
        ps: [{
            n: 'ellipsoidalCS',
            rq: true,
            en: 'EllipsoidalCS',
            ti: '.EllipsoidalCSType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'LineStringSegmentType',
        bti: '.AbstractCurveSegmentType',
        ps: [{
            n: 'posOrPointPropertyOrPointRep',
            rq: true,
            mno: 2,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: 'pointRep',
                ti: '.PointPropertyType'
              }, {
                en: 'pointProperty',
                ti: '.PointPropertyType'
              }, {
                en: 'pos',
                ti: '.DirectPositionType'
              }],
            t: 'ers'
          }, {
            n: 'posList',
            rq: true,
            ti: '.DirectPositionListType'
          }, {
            n: 'coordinates',
            rq: true,
            ti: '.CoordinatesType'
          }, {
            n: 'interpolation',
            an: {
              lp: 'interpolation'
            },
            t: 'a'
          }]
      }, {
        ln: 'IdentifierType',
        ps: [{
            n: 'name',
            rq: true,
            mx: false,
            dom: false,
            ti: '.CodeType',
            t: 'er'
          }, {
            n: 'version'
          }, {
            n: 'remarks',
            ti: '.StringOrRefType'
          }]
      }, {
        ln: 'AbstractGeneralTransformationType',
        bti: '.AbstractCoordinateOperationType'
      }, {
        ln: 'TimeCoordinateSystemType',
        bti: '.AbstractTimeReferenceSystemType',
        ps: [{
            n: 'originPosition',
            rq: true,
            ti: '.TimePositionType'
          }, {
            n: 'origin',
            rq: true,
            ti: '.TimeInstantPropertyType'
          }, {
            n: 'interval',
            rq: true,
            ti: '.TimeIntervalLengthType'
          }]
      }, {
        ln: 'TemporalDatumBaseType',
        bti: '.AbstractDatumType'
      }, {
        ln: 'GridLengthType',
        bti: '.MeasureType'
      }, {
        ln: 'IndirectEntryType',
        ps: [{
            n: 'definitionProxy',
            rq: true,
            en: 'DefinitionProxy',
            ti: '.DefinitionProxyType'
          }]
      }, {
        ln: 'PolygonPatchArrayPropertyType',
        bti: '.SurfacePatchArrayPropertyType'
      }, {
        ln: 'HistoryPropertyType',
        ps: [{
            n: 'timeSlice',
            rq: true,
            col: true,
            mx: false,
            dom: false,
            en: '_TimeSlice',
            ti: '.AbstractTimeSliceType',
            t: 'er'
          }]
      }, {
        ln: 'EnvelopeType',
        ps: [{
            n: 'lowerCorner',
            rq: true,
            ti: '.DirectPositionType'
          }, {
            n: 'upperCorner',
            rq: true,
            ti: '.DirectPositionType'
          }, {
            n: 'coord',
            rq: true,
            mno: 2,
            mxo: 2,
            col: true,
            ti: '.CoordType'
          }, {
            n: 'pos',
            rq: true,
            mno: 2,
            mxo: 2,
            col: true,
            ti: '.DirectPositionType'
          }, {
            n: 'coordinates',
            rq: true,
            ti: '.CoordinatesType'
          }, {
            n: 'srsName',
            an: {
              lp: 'srsName'
            },
            t: 'a'
          }, {
            n: 'srsDimension',
            ti: 'PositiveInteger',
            an: {
              lp: 'srsDimension'
            },
            t: 'a'
          }, {
            n: 'axisLabels',
            ti: {
              t: 'l',
              bti: 'NCName'
            },
            an: {
              lp: 'axisLabels'
            },
            t: 'a'
          }, {
            n: 'uomLabels',
            ti: {
              t: 'l',
              bti: 'NCName'
            },
            an: {
              lp: 'uomLabels'
            },
            t: 'a'
          }]
      }, {
        ln: 'CountPropertyType',
        bti: '.ValuePropertyType'
      }, {
        ln: 'ConversionType',
        bti: '.AbstractGeneralConversionType',
        ps: [{
            n: 'usesMethod',
            rq: true,
            ti: '.OperationMethodRefType'
          }, {
            n: 'usesValue',
            mno: 0,
            col: true,
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'UserDefinedCSRefType',
        ps: [{
            n: 'userDefinedCS',
            rq: true,
            en: 'UserDefinedCS',
            ti: '.UserDefinedCSType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'LabelStylePropertyType',
        ps: [{
            n: 'labelStyle',
            en: 'LabelStyle',
            ti: '.LabelStyleType'
          }, {
            n: 'about',
            an: {
              lp: 'about'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'BaseStyleDescriptorType',
        bti: '.AbstractGMLType',
        ps: [{
            n: 'spatialResolution',
            ti: '.ScaleType'
          }, {
            n: 'styleVariation',
            mno: 0,
            col: true,
            ti: '.StyleVariationType'
          }, {
            n: 'animate',
            mno: 0,
            col: true,
            en: {
              lp: 'animate',
              ns: 'http:\/\/www.w3.org\/2001\/SMIL20\/'
            },
            ti: 'SMIL_2_0_Language.AnimateType'
          }, {
            n: 'animateMotion',
            mno: 0,
            col: true,
            en: {
              lp: 'animateMotion',
              ns: 'http:\/\/www.w3.org\/2001\/SMIL20\/'
            },
            ti: 'SMIL_2_0_Language.AnimateMotionType'
          }, {
            n: 'animateColor',
            mno: 0,
            col: true,
            en: {
              lp: 'animateColor',
              ns: 'http:\/\/www.w3.org\/2001\/SMIL20\/'
            },
            ti: 'SMIL_2_0_Language.AnimateColorType'
          }, {
            n: 'set',
            mno: 0,
            col: true,
            en: {
              lp: 'set',
              ns: 'http:\/\/www.w3.org\/2001\/SMIL20\/'
            },
            ti: 'SMIL_2_0_Language.SetType'
          }]
      }, {
        ln: 'SphericalCSRefType',
        ps: [{
            n: 'sphericalCS',
            rq: true,
            en: 'SphericalCS',
            ti: '.SphericalCSType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'GeodeticDatumType',
        bti: '.AbstractDatumType',
        ps: [{
            n: 'usesPrimeMeridian',
            rq: true,
            ti: '.PrimeMeridianRefType'
          }, {
            n: 'usesEllipsoid',
            rq: true,
            ti: '.EllipsoidRefType'
          }]
      }, {
        ln: 'OperationMethodBaseType',
        bti: '.DefinitionType'
      }, {
        ln: 'LineStringSegmentArrayPropertyType',
        ps: [{
            n: 'lineStringSegment',
            mno: 0,
            col: true,
            en: 'LineStringSegment',
            ti: '.LineStringSegmentType'
          }]
      }, {
        ln: 'MeasureListType',
        ps: [{
            n: 'value',
            ti: {
              t: 'l',
              bti: 'Double'
            },
            t: 'v'
          }, {
            n: 'uom',
            rq: true,
            an: {
              lp: 'uom'
            },
            t: 'a'
          }]
      }, {
        ln: 'EngineeringDatumType',
        bti: '.AbstractDatumType'
      }, {
        ln: 'ScalarValuePropertyType',
        bti: '.ValuePropertyType'
      }, {
        ln: 'TopoVolumeType',
        bti: '.AbstractTopologyType',
        ps: [{
            n: 'directedTopoSolid',
            rq: true,
            col: true,
            ti: '.DirectedTopoSolidPropertyType'
          }]
      }, {
        ln: 'TopoCurvePropertyType',
        ps: [{
            n: 'topoCurve',
            rq: true,
            en: 'TopoCurve',
            ti: '.TopoCurveType'
          }]
      }, {
        ln: 'TransformationType',
        bti: '.AbstractGeneralTransformationType',
        ps: [{
            n: 'usesMethod',
            rq: true,
            ti: '.OperationMethodRefType'
          }, {
            n: 'usesValue',
            mno: 0,
            col: true,
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'ParameterValueType',
        bti: '.AbstractGeneralParameterValueType',
        ps: [{
            n: 'value',
            rq: true,
            ti: '.MeasureType'
          }, {
            n: 'dmsAngleValue',
            rq: true,
            ti: '.DMSAngleType'
          }, {
            n: 'stringValue',
            rq: true
          }, {
            n: 'integerValue',
            rq: true,
            ti: 'PositiveInteger'
          }, {
            n: 'booleanValue',
            rq: true,
            ti: 'Boolean'
          }, {
            n: 'valueList',
            rq: true,
            ti: '.MeasureListType'
          }, {
            n: 'integerValueList',
            rq: true,
            ti: {
              t: 'l',
              bti: 'Integer'
            }
          }, {
            n: 'valueFile',
            rq: true
          }, {
            n: 'valueOfParameter',
            rq: true,
            ti: '.OperationParameterRefType'
          }]
      }, {
        ln: 'TimeGeometricPrimitivePropertyType',
        ps: [{
            n: 'timeGeometricPrimitive',
            rq: true,
            mx: false,
            dom: false,
            en: '_TimeGeometricPrimitive',
            ti: '.AbstractTimeGeometricPrimitiveType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'TimeClockType',
        bti: '.AbstractTimeReferenceSystemType',
        ps: [{
            n: 'referenceEvent',
            rq: true,
            ti: '.StringOrRefType'
          }, {
            n: 'referenceTime',
            rq: true,
            ti: 'Time'
          }, {
            n: 'utcReference',
            rq: true,
            ti: 'Time'
          }, {
            n: 'dateBasis',
            mno: 0,
            col: true,
            ti: '.TimeCalendarPropertyType'
          }]
      }, {
        ln: 'CubicSplineType',
        bti: '.AbstractCurveSegmentType',
        ps: [{
            n: 'posOrPointPropertyOrPointRep',
            rq: true,
            mno: 2,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: 'pointRep',
                ti: '.PointPropertyType'
              }, {
                en: 'pointProperty',
                ti: '.PointPropertyType'
              }, {
                en: 'pos',
                ti: '.DirectPositionType'
              }],
            t: 'ers'
          }, {
            n: 'posList',
            rq: true,
            ti: '.DirectPositionListType'
          }, {
            n: 'coordinates',
            rq: true,
            ti: '.CoordinatesType'
          }, {
            n: 'vectorAtStart',
            rq: true,
            ti: '.VectorType'
          }, {
            n: 'vectorAtEnd',
            rq: true,
            ti: '.VectorType'
          }, {
            n: 'interpolation',
            an: {
              lp: 'interpolation'
            },
            t: 'a'
          }, {
            n: 'degree',
            ti: 'Integer',
            an: {
              lp: 'degree'
            },
            t: 'a'
          }]
      }, {
        ln: 'OperationMethodRefType',
        ps: [{
            n: 'operationMethod',
            rq: true,
            en: 'OperationMethod',
            ti: '.OperationMethodType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'LineStringPropertyType',
        ps: [{
            n: 'lineString',
            rq: true,
            en: 'LineString',
            ti: '.LineStringType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'AbstractCoverageType',
        bti: '.AbstractFeatureType',
        ps: [{
            n: 'domainSet',
            rq: true,
            mx: false,
            dom: false,
            ti: '.DomainSetType',
            t: 'er'
          }, {
            n: 'rangeSet',
            rq: true,
            ti: '.RangeSetType'
          }, {
            n: 'dimension',
            ti: 'PositiveInteger',
            an: {
              lp: 'dimension'
            },
            t: 'a'
          }]
      }, {
        ln: 'TargetPropertyType',
        ps: [{
            n: 'feature',
            rq: true,
            mx: false,
            en: '_Feature',
            ti: '.AbstractFeatureType',
            t: 'er'
          }, {
            n: 'geometry',
            rq: true,
            mx: false,
            dom: false,
            en: '_Geometry',
            ti: '.AbstractGeometryType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'TimePrimitivePropertyType',
        ps: [{
            n: 'timePrimitive',
            rq: true,
            mx: false,
            dom: false,
            en: '_TimePrimitive',
            ti: '.AbstractTimePrimitiveType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'CategoryPropertyType',
        bti: '.ValuePropertyType'
      }, {
        ln: 'LineStringType',
        bti: '.AbstractCurveType',
        ps: [{
            n: 'posOrPointPropertyOrPointRep',
            rq: true,
            mno: 2,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: 'pointRep',
                ti: '.PointPropertyType'
              }, {
                en: 'pointProperty',
                ti: '.PointPropertyType'
              }, {
                en: 'coord',
                ti: '.CoordType'
              }, {
                en: 'pos',
                ti: '.DirectPositionType'
              }],
            t: 'ers'
          }, {
            n: 'posList',
            rq: true,
            ti: '.DirectPositionListType'
          }, {
            n: 'coordinates',
            rq: true,
            ti: '.CoordinatesType'
          }]
      }, {
        ln: 'DerivationUnitTermType',
        bti: '.UnitOfMeasureType',
        ps: [{
            n: 'exponent',
            ti: 'Integer',
            an: {
              lp: 'exponent'
            },
            t: 'a'
          }]
      }, {
        ln: 'TinType',
        bti: '.TriangulatedSurfaceType',
        ps: [{
            n: 'stopLines',
            mno: 0,
            col: true,
            ti: '.LineStringSegmentArrayPropertyType'
          }, {
            n: 'breakLines',
            mno: 0,
            col: true,
            ti: '.LineStringSegmentArrayPropertyType'
          }, {
            n: 'maxLength',
            rq: true,
            ti: '.LengthType'
          }, {
            n: 'controlPoint',
            rq: true,
            ti: '.TinType.ControlPoint'
          }]
      }, {
        ln: 'GeodeticDatumRefType',
        ps: [{
            n: 'geodeticDatum',
            rq: true,
            en: 'GeodeticDatum',
            ti: '.GeodeticDatumType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'TimePositionType',
        ps: [{
            n: 'value',
            ti: {
              t: 'l'
            },
            t: 'v'
          }, {
            n: 'frame',
            an: {
              lp: 'frame'
            },
            t: 'a'
          }, {
            n: 'calendarEraName',
            an: {
              lp: 'calendarEraName'
            },
            t: 'a'
          }, {
            n: 'indeterminatePosition',
            an: {
              lp: 'indeterminatePosition'
            },
            t: 'a'
          }]
      }, {
        ln: 'PrimeMeridianRefType',
        ps: [{
            n: 'primeMeridian',
            rq: true,
            en: 'PrimeMeridian',
            ti: '.PrimeMeridianType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'VolumeType',
        bti: '.MeasureType'
      }, {
        ln: 'TimeIntervalLengthType',
        ps: [{
            n: 'value',
            ti: 'Decimal',
            t: 'v'
          }, {
            n: 'unit',
            rq: true,
            an: {
              lp: 'unit'
            },
            t: 'a'
          }, {
            n: 'radix',
            ti: 'PositiveInteger',
            an: {
              lp: 'radix'
            },
            t: 'a'
          }, {
            n: 'factor',
            ti: 'Integer',
            an: {
              lp: 'factor'
            },
            t: 'a'
          }]
      }, {
        ln: 'ParameterValueGroupType',
        bti: '.AbstractGeneralParameterValueType',
        ps: [{
            n: 'includesValue',
            rq: true,
            mno: 2,
            col: true,
            ti: '.AbstractGeneralParameterValueType'
          }, {
            n: 'valuesOfGroup',
            rq: true,
            ti: '.OperationParameterGroupRefType'
          }]
      }, {
        ln: 'CartesianCSRefType',
        ps: [{
            n: 'cartesianCS',
            rq: true,
            en: 'CartesianCS',
            ti: '.CartesianCSType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'TimeEdgePropertyType',
        ps: [{
            n: 'timeEdge',
            rq: true,
            en: 'TimeEdge',
            ti: '.TimeEdgeType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'TopoPointPropertyType',
        ps: [{
            n: 'topoPoint',
            rq: true,
            en: 'TopoPoint',
            ti: '.TopoPointType'
          }]
      }, {
        ln: 'ProjectedCRSType',
        bti: '.AbstractGeneralDerivedCRSType',
        ps: [{
            n: 'usesCartesianCS',
            rq: true,
            ti: '.CartesianCSRefType'
          }]
      }, {
        ln: 'MultiCurveDomainType',
        bti: '.DomainSetType'
      }, {
        ln: 'AbstractReferenceSystemBaseType',
        bti: '.DefinitionType'
      }, {
        ln: 'PolygonPropertyType',
        ps: [{
            n: 'polygon',
            rq: true,
            en: 'Polygon',
            ti: '.PolygonType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'PolarCSType',
        bti: '.AbstractCoordinateSystemType'
      }, {
        ln: 'AbstractGeometricPrimitiveType',
        bti: '.AbstractGeometryType'
      }, {
        ln: 'MultiSolidDomainType',
        bti: '.DomainSetType'
      }, {
        ln: 'TopoVolumePropertyType',
        ps: [{
            n: 'topoVolume',
            rq: true,
            en: 'TopoVolume',
            ti: '.TopoVolumeType'
          }]
      }, {
        ln: 'CircleType',
        bti: '.ArcType'
      }, {
        ln: 'ValueArrayPropertyType',
        ps: [{
            n: 'value',
            rq: true,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: 'CountExtent',
                ti: {
                  t: 'l'
                }
              }, {
                en: 'Quantity',
                ti: '.MeasureType'
              }, {
                en: 'Null',
                ti: {
                  t: 'l'
                }
              }, {
                en: 'CountList',
                ti: {
                  t: 'l'
                }
              }, {
                en: 'Count',
                ti: 'Integer'
              }, {
                en: 'QuantityExtent',
                ti: '.QuantityExtentType'
              }, {
                en: '_Object',
                ti: 'AnyType'
              }, {
                en: 'CategoryList',
                ti: '.CodeOrNullListType'
              }, {
                en: 'CompositeValue',
                ti: '.CompositeValueType'
              }, {
                en: 'CategoryExtent',
                ti: '.CategoryExtentType'
              }, {
                en: 'Category',
                ti: '.CodeType'
              }, {
                en: 'BooleanList',
                ti: {
                  t: 'l'
                }
              }, {
                en: 'QuantityList',
                ti: '.MeasureOrNullListType'
              }, {
                en: 'Boolean',
                ti: 'Boolean'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'GraphStyleType',
        bti: '.BaseStyleDescriptorType',
        ps: [{
            n: 'planar',
            ti: 'Boolean'
          }, {
            n: 'directed',
            ti: 'Boolean'
          }, {
            n: 'grid',
            ti: 'Boolean'
          }, {
            n: 'minDistance',
            ti: 'Double'
          }, {
            n: 'minAngle',
            ti: 'Double'
          }, {
            n: 'graphType'
          }, {
            n: 'drawingType'
          }, {
            n: 'lineType'
          }, {
            n: 'aestheticCriteria',
            mno: 0,
            col: true
          }]
      }, {
        ln: 'AbstractGeneralConversionType',
        bti: '.AbstractCoordinateOperationType'
      }, {
        ln: 'TopoSurfaceType',
        bti: '.AbstractTopologyType',
        ps: [{
            n: 'directedFace',
            rq: true,
            col: true,
            ti: '.DirectedFacePropertyType'
          }]
      }, {
        ln: 'MultiPointDomainType',
        bti: '.DomainSetType'
      }, {
        ln: 'CircleByCenterPointType',
        bti: '.ArcByCenterPointType'
      }, {
        ln: 'CompositeSurfaceType',
        bti: '.AbstractSurfaceType',
        ps: [{
            n: 'surfaceMember',
            rq: true,
            col: true,
            ti: '.SurfacePropertyType'
          }]
      }, {
        ln: 'MultiCurveCoverageType',
        bti: '.AbstractDiscreteCoverageType'
      }, {
        ln: 'MultiLineStringType',
        bti: '.AbstractGeometricAggregateType',
        ps: [{
            n: 'lineStringMember',
            mno: 0,
            col: true,
            ti: '.LineStringPropertyType'
          }]
      }, {
        ln: 'ImageCRSType',
        bti: '.AbstractReferenceSystemType',
        ps: [{
            n: 'usesCartesianCS',
            rq: true,
            ti: '.CartesianCSRefType'
          }, {
            n: 'usesObliqueCartesianCS',
            rq: true,
            ti: '.ObliqueCartesianCSRefType'
          }, {
            n: 'usesImageDatum',
            rq: true,
            ti: '.ImageDatumRefType'
          }]
      }, {
        ln: 'FeaturePropertyType',
        ps: [{
            n: 'feature',
            rq: true,
            mx: false,
            en: '_Feature',
            ti: '.AbstractFeatureType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'CoordinateSystemAxisBaseType',
        bti: '.DefinitionType'
      }, {
        ln: 'GeodesicType',
        bti: '.GeodesicStringType'
      }, {
        ln: 'CovarianceElementType',
        ps: [{
            n: 'rowIndex',
            rq: true,
            ti: 'PositiveInteger'
          }, {
            n: 'columnIndex',
            rq: true,
            ti: 'PositiveInteger'
          }, {
            n: 'covariance',
            rq: true,
            ti: 'Double'
          }]
      }, {
        ln: 'DerivedUnitType',
        bti: '.UnitDefinitionType',
        ps: [{
            n: 'derivationUnitTerm',
            rq: true,
            col: true,
            ti: '.DerivationUnitTermType'
          }]
      }, {
        ln: 'EdgeType',
        bti: '.AbstractTopoPrimitiveType',
        ps: [{
            n: 'directedNode',
            rq: true,
            mno: 2,
            mxo: 2,
            col: true,
            ti: '.DirectedNodePropertyType'
          }, {
            n: 'directedFace',
            mno: 0,
            col: true,
            ti: '.DirectedFacePropertyType'
          }, {
            n: 'curveProperty',
            ti: '.CurvePropertyType'
          }]
      }, {
        ln: 'CompositeSolidPropertyType',
        ps: [{
            n: 'compositeSolid',
            rq: true,
            en: 'CompositeSolid',
            ti: '.CompositeSolidType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'CRSRefType',
        ps: [{
            n: 'crs',
            rq: true,
            mx: false,
            dom: false,
            en: '_CRS',
            ti: '.AbstractReferenceSystemType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'AssociationType',
        ps: [{
            n: 'object',
            rq: true,
            mx: false,
            dom: false,
            en: '_Object',
            ti: 'AnyType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'TimeOrdinalEraPropertyType',
        ps: [{
            n: 'timeOrdinalEra',
            rq: true,
            en: 'TimeOrdinalEra',
            ti: '.TimeOrdinalEraType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'AbstractCoordinateSystemType',
        bti: '.AbstractCoordinateSystemBaseType',
        ps: [{
            n: 'csID',
            mno: 0,
            col: true,
            ti: '.IdentifierType'
          }, {
            n: 'remarks',
            ti: '.StringOrRefType'
          }, {
            n: 'usesAxis',
            rq: true,
            col: true,
            ti: '.CoordinateSystemAxisRefType'
          }]
      }, {
        ln: 'GridDomainType',
        bti: '.DomainSetType'
      }, {
        ln: 'SolidArrayPropertyType',
        ps: [{
            n: 'solid',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: '_Solid',
            ti: '.AbstractSolidType',
            t: 'er'
          }]
      }, {
        ln: 'ConventionalUnitType',
        bti: '.UnitDefinitionType',
        ps: [{
            n: 'conversionToPreferredUnit',
            rq: true,
            ti: '.ConversionToPreferredUnitType'
          }, {
            n: 'roughConversionToPreferredUnit',
            rq: true,
            ti: '.ConversionToPreferredUnitType'
          }, {
            n: 'derivationUnitTerm',
            mno: 0,
            col: true,
            ti: '.DerivationUnitTermType'
          }]
      }, {
        ln: 'OrientableCurveType',
        bti: '.AbstractCurveType',
        ps: [{
            n: 'baseCurve',
            rq: true,
            ti: '.CurvePropertyType'
          }, {
            n: 'orientation',
            an: {
              lp: 'orientation'
            },
            t: 'a'
          }]
      }, {
        ln: 'SphereType',
        bti: '.AbstractGriddedSurfaceType',
        ps: [{
            n: 'horizontalCURVETYPE',
            an: {
              lp: 'horizontalCurveType'
            },
            t: 'a'
          }, {
            n: 'verticalCURVETYPE',
            an: {
              lp: 'verticalCurveType'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractGeometricAggregateType',
        bti: '.AbstractGeometryType'
      }, {
        ln: 'CurveType',
        bti: '.AbstractCurveType',
        ps: [{
            n: 'segments',
            rq: true,
            ti: '.CurveSegmentArrayPropertyType'
          }]
      }, {
        ln: 'GridEnvelopeType',
        ps: [{
            n: 'low',
            rq: true,
            ti: {
              t: 'l',
              bti: 'Integer'
            }
          }, {
            n: 'high',
            rq: true,
            ti: {
              t: 'l',
              bti: 'Integer'
            }
          }]
      }, {
        ln: 'ObservationType',
        bti: '.AbstractFeatureType',
        ps: [{
            n: 'validTime',
            rq: true,
            ti: '.TimePrimitivePropertyType'
          }, {
            n: 'using',
            ti: '.FeaturePropertyType'
          }, {
            n: 'target',
            mx: false,
            dom: false,
            ti: '.TargetPropertyType',
            t: 'er'
          }, {
            n: 'resultOf',
            rq: true,
            ti: '.AssociationType'
          }]
      }, {
        ln: 'BoundedFeatureType',
        bti: '.AbstractFeatureType'
      }, {
        ln: 'TopoCurveType',
        bti: '.AbstractTopologyType',
        ps: [{
            n: 'directedEdge',
            rq: true,
            col: true,
            ti: '.DirectedEdgePropertyType'
          }]
      }, {
        ln: 'CovarianceMatrixType',
        bti: '.AbstractPositionalAccuracyType',
        ps: [{
            n: 'unitOfMeasure',
            rq: true,
            col: true,
            ti: '.UnitOfMeasureType'
          }, {
            n: 'includesElement',
            rq: true,
            col: true,
            ti: '.CovarianceElementType'
          }]
      }, {
        ln: 'ConcatenatedOperationType',
        bti: '.AbstractCoordinateOperationType',
        ps: [{
            n: 'usesSingleOperation',
            rq: true,
            mno: 2,
            col: true,
            ti: '.SingleOperationRefType'
          }]
      }, {
        ln: 'AbstractGeneralOperationParameterRefType',
        ps: [{
            n: 'generalOperationParameter',
            rq: true,
            mx: false,
            dom: false,
            en: '_GeneralOperationParameter',
            ti: '.AbstractGeneralOperationParameterType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'MultiSolidCoverageType',
        bti: '.AbstractDiscreteCoverageType'
      }, {
        ln: 'GeographicCRSRefType',
        ps: [{
            n: 'geographicCRS',
            rq: true,
            en: 'GeographicCRS',
            ti: '.GeographicCRSType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'SymbolType',
        ps: [{
            n: 'any',
            mno: 0,
            col: true,
            typed: false,
            mx: false,
            t: 'ae'
          }, {
            n: 'symbolType',
            rq: true,
            an: {
              lp: 'symbolType'
            },
            t: 'a'
          }, {
            n: 'transform',
            an: {
              lp: 'transform',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'about',
            an: {
              lp: 'about'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'DirectedTopoSolidPropertyType',
        ps: [{
            n: 'topoSolid',
            rq: true,
            en: 'TopoSolid',
            ti: '.TopoSolidType'
          }, {
            n: 'orientation',
            an: {
              lp: 'orientation'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'QuantityPropertyType',
        bti: '.ValuePropertyType'
      }, {
        ln: 'SurfacePropertyType',
        ps: [{
            n: 'surface',
            rq: true,
            mx: false,
            dom: false,
            en: '_Surface',
            ti: '.AbstractSurfaceType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'TemporalCRSType',
        bti: '.AbstractReferenceSystemType',
        ps: [{
            n: 'usesTemporalCS',
            rq: true,
            ti: '.TemporalCSRefType'
          }, {
            n: 'usesTemporalDatum',
            rq: true,
            ti: '.TemporalDatumRefType'
          }]
      }, {
        ln: 'FeatureStyleType',
        bti: '.AbstractGMLType',
        ps: [{
            n: 'featureConstraint'
          }, {
            n: 'geometryStyle',
            mno: 0,
            col: true,
            ti: '.GeometryStylePropertyType'
          }, {
            n: 'topologyStyle',
            mno: 0,
            col: true,
            ti: '.TopologyStylePropertyType'
          }, {
            n: 'labelStyle',
            ti: '.LabelStylePropertyType'
          }, {
            n: 'featureType',
            an: {
              lp: 'featureType'
            },
            t: 'a'
          }, {
            n: 'baseType',
            an: {
              lp: 'baseType'
            },
            t: 'a'
          }, {
            n: 'queryGrammar',
            an: {
              lp: 'queryGrammar'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractSurfaceType',
        bti: '.AbstractGeometricPrimitiveType'
      }, {
        ln: 'AbstractDiscreteCoverageType',
        bti: '.AbstractCoverageType',
        ps: [{
            n: 'coverageFunction',
            ti: '.CoverageFunctionType'
          }]
      }, {
        ln: 'MeasureOrNullListType',
        ps: [{
            n: 'value',
            ti: {
              t: 'l'
            },
            t: 'v'
          }, {
            n: 'uom',
            rq: true,
            an: {
              lp: 'uom'
            },
            t: 'a'
          }]
      }, {
        ln: 'TopologyStyleType',
        bti: '.BaseStyleDescriptorType',
        ps: [{
            n: 'symbol',
            rq: true,
            ti: '.SymbolType'
          }, {
            n: 'style',
            rq: true
          }, {
            n: 'labelStyle',
            ti: '.LabelStylePropertyType'
          }, {
            n: 'topologyProperty',
            an: {
              lp: 'topologyProperty'
            },
            t: 'a'
          }, {
            n: 'topologyType',
            an: {
              lp: 'topologyType'
            },
            t: 'a'
          }]
      }, {
        ln: 'DictionaryEntryType',
        ps: [{
            n: 'definition',
            rq: true,
            mx: false,
            dom: false,
            en: 'Definition',
            ti: '.DefinitionType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'CompositeSurfacePropertyType',
        ps: [{
            n: 'compositeSurface',
            rq: true,
            en: 'CompositeSurface',
            ti: '.CompositeSurfaceType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'MultiLineStringPropertyType',
        ps: [{
            n: 'multiLineString',
            rq: true,
            en: 'MultiLineString',
            ti: '.MultiLineStringType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'MeasureType',
        ps: [{
            n: 'value',
            ti: 'Double',
            t: 'v'
          }, {
            n: 'uom',
            rq: true,
            an: {
              lp: 'uom'
            },
            t: 'a'
          }]
      }, {
        ln: 'TopologyStylePropertyType',
        ps: [{
            n: 'topologyStyle',
            en: 'TopologyStyle',
            ti: '.TopologyStyleType'
          }, {
            n: 'about',
            an: {
              lp: 'about'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'OffsetCurveType',
        bti: '.AbstractCurveSegmentType',
        ps: [{
            n: 'offsetBase',
            rq: true,
            ti: '.CurvePropertyType'
          }, {
            n: 'distance',
            rq: true,
            ti: '.LengthType'
          }, {
            n: 'refDirection',
            ti: '.VectorType'
          }]
      }, {
        ln: 'StringOrRefType',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'VerticalCRSType',
        bti: '.AbstractReferenceSystemType',
        ps: [{
            n: 'usesVerticalCS',
            rq: true,
            ti: '.VerticalCSRefType'
          }, {
            n: 'usesVerticalDatum',
            rq: true,
            ti: '.VerticalDatumRefType'
          }]
      }, {
        ln: 'AngleType',
        bti: '.MeasureType'
      }, {
        ln: 'BoundingShapeType',
        ps: [{
            n: 'envelope',
            rq: true,
            mx: false,
            dom: false,
            en: 'Envelope',
            ti: '.EnvelopeType',
            t: 'er'
          }, {
            n: '_null',
            rq: true,
            en: 'Null',
            ti: {
              t: 'l'
            }
          }]
      }, {
        ln: 'TemporalCSType',
        bti: '.AbstractCoordinateSystemType'
      }, {
        ln: 'GridLimitsType',
        ps: [{
            n: 'gridEnvelope',
            rq: true,
            en: 'GridEnvelope',
            ti: '.GridEnvelopeType'
          }]
      }, {
        ln: 'LinearCSType',
        bti: '.AbstractCoordinateSystemType'
      }, {
        ln: 'AbstractGeneralParameterValueType'
      }, {
        ln: 'DirectedNodePropertyType',
        ps: [{
            n: 'node',
            rq: true,
            en: 'Node',
            ti: '.NodeType'
          }, {
            n: 'orientation',
            an: {
              lp: 'orientation'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'SurfaceArrayPropertyType',
        ps: [{
            n: 'surface',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: '_Surface',
            ti: '.AbstractSurfaceType',
            t: 'er'
          }]
      }, {
        ln: 'SecondDefiningParameterType',
        ps: [{
            n: 'inverseFlattening',
            rq: true,
            ti: '.MeasureType'
          }, {
            n: 'semiMinorAxis',
            rq: true,
            ti: '.MeasureType'
          }, {
            n: 'isSphere',
            rq: true
          }]
      }, {
        ln: 'AbstractGeometryType',
        bti: '.AbstractGMLType',
        ps: [{
            n: 'gid',
            an: {
              lp: 'gid'
            },
            t: 'a'
          }, {
            n: 'srsName',
            an: {
              lp: 'srsName'
            },
            t: 'a'
          }, {
            n: 'srsDimension',
            ti: 'PositiveInteger',
            an: {
              lp: 'srsDimension'
            },
            t: 'a'
          }, {
            n: 'axisLabels',
            ti: {
              t: 'l',
              bti: 'NCName'
            },
            an: {
              lp: 'axisLabels'
            },
            t: 'a'
          }, {
            n: 'uomLabels',
            ti: {
              t: 'l',
              bti: 'NCName'
            },
            an: {
              lp: 'uomLabels'
            },
            t: 'a'
          }]
      }, {
        ln: 'PassThroughOperationType',
        bti: '.AbstractCoordinateOperationType',
        ps: [{
            n: 'modifiedCoordinate',
            rq: true,
            col: true,
            ti: 'PositiveInteger'
          }, {
            n: 'usesOperation',
            rq: true,
            ti: '.OperationRefType'
          }]
      }, {
        ln: 'AbstractCoordinateOperationBaseType',
        bti: '.DefinitionType'
      }, {
        ln: 'ArcStringByBulgeType',
        bti: '.AbstractCurveSegmentType',
        ps: [{
            n: 'posOrPointPropertyOrPointRep',
            rq: true,
            mno: 2,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: 'pointRep',
                ti: '.PointPropertyType'
              }, {
                en: 'pointProperty',
                ti: '.PointPropertyType'
              }, {
                en: 'pos',
                ti: '.DirectPositionType'
              }],
            t: 'ers'
          }, {
            n: 'posList',
            rq: true,
            ti: '.DirectPositionListType'
          }, {
            n: 'coordinates',
            rq: true,
            ti: '.CoordinatesType'
          }, {
            n: 'bulge',
            rq: true,
            col: true,
            ti: 'Double'
          }, {
            n: 'normal',
            rq: true,
            col: true,
            ti: '.VectorType'
          }, {
            n: 'interpolation',
            an: {
              lp: 'interpolation'
            },
            t: 'a'
          }, {
            n: 'numArc',
            ti: 'Integer',
            an: {
              lp: 'numArc'
            },
            t: 'a'
          }]
      }, {
        ln: 'MovingObjectStatusType',
        bti: '.AbstractTimeSliceType',
        ps: [{
            n: 'location',
            rq: true,
            mx: false,
            dom: false,
            ti: '.LocationPropertyType',
            t: 'er'
          }, {
            n: 'speed',
            ti: '.MeasureType'
          }, {
            n: 'bearing',
            ti: '.DirectionPropertyType'
          }, {
            n: 'acceleration',
            ti: '.MeasureType'
          }, {
            n: 'elevation',
            ti: '.MeasureType'
          }, {
            n: 'status',
            ti: '.StringOrRefType'
          }]
      }, {
        ln: 'FeatureArrayPropertyType',
        ps: [{
            n: 'feature',
            mno: 0,
            col: true,
            mx: false,
            en: '_Feature',
            ti: '.AbstractFeatureType',
            t: 'er'
          }]
      }, {
        ln: 'CoordinateSystemAxisRefType',
        ps: [{
            n: 'coordinateSystemAxis',
            rq: true,
            en: 'CoordinateSystemAxis',
            ti: '.CoordinateSystemAxisType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'FeatureCollectionType',
        bti: '.AbstractFeatureCollectionType'
      }, {
        ln: 'TimeEdgeType',
        bti: '.AbstractTimeTopologyPrimitiveType',
        ps: [{
            n: 'start',
            rq: true,
            ti: '.TimeNodePropertyType'
          }, {
            n: 'end',
            rq: true,
            ti: '.TimeNodePropertyType'
          }, {
            n: 'extent',
            ti: '.TimePeriodPropertyType'
          }]
      }, {
        ln: 'OperationRefType',
        ps: [{
            n: 'operation',
            rq: true,
            mx: false,
            dom: false,
            en: '_Operation',
            ti: '.AbstractCoordinateOperationType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'RelativeInternalPositionalAccuracyType',
        bti: '.AbstractPositionalAccuracyType',
        ps: [{
            n: 'result',
            rq: true,
            ti: '.MeasureType'
          }]
      }, {
        ln: 'DirectedObservationType',
        bti: '.ObservationType',
        ps: [{
            n: 'direction',
            rq: true,
            ti: '.DirectionPropertyType'
          }]
      }, {
        ln: 'CompositeValueType',
        bti: '.AbstractGMLType',
        ps: [{
            n: 'valueComponent',
            mno: 0,
            col: true,
            ti: '.ValuePropertyType'
          }, {
            n: 'valueComponents',
            ti: '.ValueArrayPropertyType'
          }]
      }, {
        ln: 'TriangleType',
        bti: '.AbstractSurfacePatchType',
        ps: [{
            n: 'exterior',
            rq: true,
            mx: false,
            dom: false,
            ti: '.AbstractRingPropertyType',
            t: 'er'
          }, {
            n: 'interpolation',
            an: {
              lp: 'interpolation'
            },
            t: 'a'
          }]
      }, {
        ln: 'RangeSetType',
        ps: [{
            n: 'valueArray',
            rq: true,
            col: true,
            en: 'ValueArray',
            ti: '.ValueArrayType'
          }, {
            n: 'scalarValueList',
            rq: true,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: 'CategoryList',
                ti: '.CodeOrNullListType'
              }, {
                en: 'CountList',
                ti: {
                  t: 'l'
                }
              }, {
                en: 'QuantityList',
                ti: '.MeasureOrNullListType'
              }, {
                en: 'BooleanList',
                ti: {
                  t: 'l'
                }
              }],
            t: 'ers'
          }, {
            n: 'dataBlock',
            rq: true,
            en: 'DataBlock',
            ti: '.DataBlockType'
          }, {
            n: 'file',
            rq: true,
            en: 'File',
            ti: '.FileType'
          }]
      }, {
        ln: 'PriorityLocationPropertyType',
        bti: '.LocationPropertyType',
        ps: [{
            n: 'priority',
            an: {
              lp: 'priority'
            },
            t: 'a'
          }]
      }, {
        ln: 'TriangulatedSurfaceType',
        bti: '.SurfaceType'
      }, {
        ln: 'VerticalCSRefType',
        ps: [{
            n: 'verticalCS',
            rq: true,
            en: 'VerticalCS',
            ti: '.VerticalCSType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'MultiSurfacePropertyType',
        ps: [{
            n: 'multiSurface',
            rq: true,
            en: 'MultiSurface',
            ti: '.MultiSurfaceType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'ReferenceSystemRefType',
        ps: [{
            n: 'referenceSystem',
            rq: true,
            mx: false,
            dom: false,
            en: '_ReferenceSystem',
            ti: '.AbstractReferenceSystemType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'TimeCalendarPropertyType',
        ps: [{
            n: 'timeCalendar',
            rq: true,
            en: 'TimeCalendar',
            ti: '.TimeCalendarType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'CodeOrNullListType',
        ps: [{
            n: 'value',
            ti: {
              t: 'l'
            },
            t: 'v'
          }, {
            n: 'codeSpace',
            an: {
              lp: 'codeSpace'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractPositionalAccuracyType',
        ps: [{
            n: 'measureDescription',
            ti: '.CodeType'
          }]
      }, {
        ln: 'GeocentricCRSType',
        bti: '.AbstractReferenceSystemType',
        ps: [{
            n: 'usesCartesianCS',
            rq: true,
            ti: '.CartesianCSRefType'
          }, {
            n: 'usesSphericalCS',
            rq: true,
            ti: '.SphericalCSRefType'
          }, {
            n: 'usesGeodeticDatum',
            rq: true,
            ti: '.GeodeticDatumRefType'
          }]
      }, {
        ln: 'VectorType',
        ps: [{
            n: 'value',
            ti: {
              t: 'l',
              bti: 'Double'
            },
            t: 'v'
          }, {
            n: 'srsName',
            an: {
              lp: 'srsName'
            },
            t: 'a'
          }, {
            n: 'srsDimension',
            ti: 'PositiveInteger',
            an: {
              lp: 'srsDimension'
            },
            t: 'a'
          }, {
            n: 'axisLabels',
            ti: {
              t: 'l',
              bti: 'NCName'
            },
            an: {
              lp: 'axisLabels'
            },
            t: 'a'
          }, {
            n: 'uomLabels',
            ti: {
              t: 'l',
              bti: 'NCName'
            },
            an: {
              lp: 'uomLabels'
            },
            t: 'a'
          }]
      }, {
        ln: 'LinearRingType',
        bti: '.AbstractRingType',
        ps: [{
            n: 'posOrPointPropertyOrPointRep',
            rq: true,
            mno: 4,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: 'pointRep',
                ti: '.PointPropertyType'
              }, {
                en: 'pointProperty',
                ti: '.PointPropertyType'
              }, {
                en: 'pos',
                ti: '.DirectPositionType'
              }],
            t: 'ers'
          }, {
            n: 'posList',
            rq: true,
            ti: '.DirectPositionListType'
          }, {
            n: 'coordinates',
            rq: true,
            ti: '.CoordinatesType'
          }, {
            n: 'coord',
            rq: true,
            mno: 4,
            col: true,
            ti: '.CoordType'
          }]
      }, {
        ln: 'GeometricComplexType',
        bti: '.AbstractGeometryType',
        ps: [{
            n: 'element',
            rq: true,
            col: true,
            ti: '.GeometricPrimitivePropertyType'
          }]
      }, {
        ln: 'SequenceRuleType',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'order',
            an: {
              lp: 'order'
            },
            t: 'a'
          }]
      }, {
        ln: 'CompositeCurveType',
        bti: '.AbstractCurveType',
        ps: [{
            n: 'curveMember',
            rq: true,
            col: true,
            ti: '.CurvePropertyType'
          }]
      }, {
        ln: 'ConeType',
        bti: '.AbstractGriddedSurfaceType',
        ps: [{
            n: 'horizontalCURVETYPE',
            an: {
              lp: 'horizontalCurveType'
            },
            t: 'a'
          }, {
            n: 'verticalCURVETYPE',
            an: {
              lp: 'verticalCurveType'
            },
            t: 'a'
          }]
      }, {
        ln: 'PixelInCellType',
        bti: '.CodeType'
      }, {
        ln: 'VerticalDatumType',
        bti: '.AbstractDatumType',
        ps: [{
            n: 'verticalDatumType',
            ti: '.VerticalDatumTypeType'
          }]
      }, {
        ln: 'TrackType',
        bti: '.HistoryPropertyType'
      }, {
        ln: 'ContainerPropertyType',
        ps: [{
            n: 'face',
            rq: true,
            en: 'Face',
            ti: '.FaceType'
          }, {
            n: 'topoSolid',
            rq: true,
            en: 'TopoSolid',
            ti: '.TopoSolidType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'ImageDatumRefType',
        ps: [{
            n: 'imageDatum',
            rq: true,
            en: 'ImageDatum',
            ti: '.ImageDatumType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'PointType',
        bti: '.AbstractGeometricPrimitiveType',
        ps: [{
            n: 'pos',
            rq: true,
            ti: '.DirectPositionType'
          }, {
            n: 'coordinates',
            rq: true,
            ti: '.CoordinatesType'
          }, {
            n: 'coord',
            rq: true,
            ti: '.CoordType'
          }]
      }, {
        ln: 'AbstractGMLType',
        ps: [{
            n: 'metaDataProperty',
            mno: 0,
            col: true,
            ti: '.MetaDataPropertyType'
          }, {
            n: 'description',
            ti: '.StringOrRefType'
          }, {
            n: 'name',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            ti: '.CodeType',
            t: 'er'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }]
      }, {
        ln: 'EllipsoidBaseType',
        bti: '.DefinitionType'
      }, {
        ln: 'BezierType',
        bti: '.BSplineType'
      }, {
        ln: 'CoordinateReferenceSystemRefType',
        ps: [{
            n: 'coordinateReferenceSystem',
            rq: true,
            mx: false,
            dom: false,
            en: '_CoordinateReferenceSystem',
            ti: '.AbstractReferenceSystemType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'GeometryPropertyType',
        ps: [{
            n: 'geometry',
            rq: true,
            mx: false,
            dom: false,
            en: '_Geometry',
            ti: '.AbstractGeometryType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'AngleChoiceType',
        ps: [{
            n: 'angle',
            rq: true,
            ti: '.MeasureType'
          }, {
            n: 'dmsAngle',
            rq: true,
            ti: '.DMSAngleType'
          }]
      }, {
        ln: 'GraphStylePropertyType',
        ps: [{
            n: 'graphStyle',
            en: 'GraphStyle',
            ti: '.GraphStyleType'
          }, {
            n: 'about',
            an: {
              lp: 'about'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'TopoSurfacePropertyType',
        ps: [{
            n: 'topoSurface',
            rq: true,
            en: 'TopoSurface',
            ti: '.TopoSurfaceType'
          }]
      }, {
        ln: 'TimeOrdinalEraType',
        bti: '.DefinitionType',
        ps: [{
            n: 'relatedTime',
            mno: 0,
            col: true,
            ti: '.RelatedTimeType'
          }, {
            n: 'start',
            rq: true,
            ti: '.TimeNodePropertyType'
          }, {
            n: 'end',
            rq: true,
            ti: '.TimeNodePropertyType'
          }, {
            n: 'extent',
            ti: '.TimePeriodPropertyType'
          }, {
            n: 'member',
            mno: 0,
            col: true,
            ti: '.TimeOrdinalEraPropertyType'
          }, {
            n: 'group',
            ti: '.ReferenceType'
          }]
      }, {
        ln: 'DirectPositionType',
        ps: [{
            n: 'value',
            ti: {
              t: 'l',
              bti: 'Double'
            },
            t: 'v'
          }, {
            n: 'srsName',
            an: {
              lp: 'srsName'
            },
            t: 'a'
          }, {
            n: 'srsDimension',
            ti: 'PositiveInteger',
            an: {
              lp: 'srsDimension'
            },
            t: 'a'
          }, {
            n: 'axisLabels',
            ti: {
              t: 'l',
              bti: 'NCName'
            },
            an: {
              lp: 'axisLabels'
            },
            t: 'a'
          }, {
            n: 'uomLabels',
            ti: {
              t: 'l',
              bti: 'NCName'
            },
            an: {
              lp: 'uomLabels'
            },
            t: 'a'
          }]
      }, {
        ln: 'CompoundCRSType',
        bti: '.AbstractReferenceSystemType',
        ps: [{
            n: 'includesCRS',
            rq: true,
            mno: 2,
            col: true,
            ti: '.CoordinateReferenceSystemRefType'
          }]
      }, {
        ln: 'AbstractCoordinateSystemBaseType',
        bti: '.DefinitionType'
      }, {
        ln: 'CategoryExtentType',
        bti: '.CodeOrNullListType'
      }, {
        ln: 'RectifiedGridCoverageType',
        bti: '.AbstractDiscreteCoverageType'
      }, {
        ln: 'CoordinateSystemRefType',
        ps: [{
            n: 'coordinateSystem',
            rq: true,
            mx: false,
            dom: false,
            en: '_CoordinateSystem',
            ti: '.AbstractCoordinateSystemType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'AbstractFeatureType',
        bti: '.AbstractGMLType',
        ps: [{
            n: 'boundedBy',
            ti: '.BoundingShapeType'
          }, {
            n: 'location',
            mx: false,
            dom: false,
            ti: '.LocationPropertyType',
            t: 'er'
          }]
      }, {
        ln: 'TemporalDatumType',
        bti: '.TemporalDatumBaseType',
        ps: [{
            n: 'origin',
            rq: true,
            ti: 'DateTime'
          }]
      }, {
        ln: 'AbstractTimeObjectType',
        bti: '.AbstractGMLType'
      }, {
        ln: 'TimeTopologyComplexPropertyType',
        ps: [{
            n: 'timeTopologyComplex',
            rq: true,
            en: 'TimeTopologyComplex',
            ti: '.TimeTopologyComplexType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'DirectPositionListType',
        ps: [{
            n: 'value',
            ti: {
              t: 'l',
              bti: 'Double'
            },
            t: 'v'
          }, {
            n: 'count',
            ti: 'PositiveInteger',
            an: {
              lp: 'count'
            },
            t: 'a'
          }, {
            n: 'srsName',
            an: {
              lp: 'srsName'
            },
            t: 'a'
          }, {
            n: 'srsDimension',
            ti: 'PositiveInteger',
            an: {
              lp: 'srsDimension'
            },
            t: 'a'
          }, {
            n: 'axisLabels',
            ti: {
              t: 'l',
              bti: 'NCName'
            },
            an: {
              lp: 'axisLabels'
            },
            t: 'a'
          }, {
            n: 'uomLabels',
            ti: {
              t: 'l',
              bti: 'NCName'
            },
            an: {
              lp: 'uomLabels'
            },
            t: 'a'
          }]
      }, {
        ln: 'TimeCalendarEraPropertyType',
        ps: [{
            n: 'timeCalendarEra',
            rq: true,
            en: 'TimeCalendarEra',
            ti: '.TimeCalendarEraType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'ObliqueCartesianCSType',
        bti: '.AbstractCoordinateSystemType'
      }, {
        ln: 'ImageDatumType',
        bti: '.AbstractDatumType',
        ps: [{
            n: 'pixelInCell',
            rq: true,
            ti: '.PixelInCellType'
          }]
      }, {
        ln: 'QuantityExtentType',
        bti: '.MeasureOrNullListType'
      }, {
        ln: 'CodeListType',
        ps: [{
            n: 'value',
            ti: {
              t: 'l',
              bti: 'Name'
            },
            t: 'v'
          }, {
            n: 'codeSpace',
            an: {
              lp: 'codeSpace'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractContinuousCoverageType',
        bti: '.AbstractCoverageType',
        ps: [{
            n: 'coverageFunction',
            ti: '.CoverageFunctionType'
          }]
      }, {
        ln: 'LengthType',
        bti: '.MeasureType'
      }, {
        ln: 'OperationParameterGroupType',
        bti: '.OperationParameterGroupBaseType',
        ps: [{
            n: 'groupID',
            mno: 0,
            col: true,
            ti: '.IdentifierType'
          }, {
            n: 'remarks',
            ti: '.StringOrRefType'
          }, {
            n: 'maximumOccurs',
            ti: 'PositiveInteger'
          }, {
            n: 'includesParameter',
            rq: true,
            mno: 2,
            col: true,
            ti: '.AbstractGeneralOperationParameterRefType'
          }]
      }, {
        ln: 'AbstractCoordinateOperationType',
        bti: '.AbstractCoordinateOperationBaseType',
        ps: [{
            n: 'coordinateOperationID',
            mno: 0,
            col: true,
            ti: '.IdentifierType'
          }, {
            n: 'remarks',
            ti: '.StringOrRefType'
          }, {
            n: 'operationVersion'
          }, {
            n: 'validArea',
            ti: '.ExtentType'
          }, {
            n: 'scope'
          }, {
            n: 'positionalAccuracy',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: '_positionalAccuracy',
            ti: '.AbstractPositionalAccuracyType',
            t: 'er'
          }, {
            n: 'sourceCRS',
            ti: '.CRSRefType'
          }, {
            n: 'targetCRS',
            ti: '.CRSRefType'
          }]
      }, {
        ln: 'LinearCSRefType',
        ps: [{
            n: 'linearCS',
            rq: true,
            en: 'LinearCS',
            ti: '.LinearCSType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'VerticalDatumRefType',
        ps: [{
            n: 'verticalDatum',
            rq: true,
            en: 'VerticalDatum',
            ti: '.VerticalDatumType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'DerivedCRSRefType',
        ps: [{
            n: 'derivedCRS',
            rq: true,
            en: 'DerivedCRS',
            ti: '.DerivedCRSType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'MultiSolidType',
        bti: '.AbstractGeometricAggregateType',
        ps: [{
            n: 'solidMember',
            mno: 0,
            col: true,
            ti: '.SolidPropertyType'
          }, {
            n: 'solidMembers',
            ti: '.SolidArrayPropertyType'
          }]
      }, {
        ln: 'TimeInstantType',
        bti: '.AbstractTimeGeometricPrimitiveType',
        ps: [{
            n: 'timePosition',
            rq: true,
            ti: '.TimePositionType'
          }]
      }, {
        ln: 'ObliqueCartesianCSRefType',
        ps: [{
            n: 'obliqueCartesianCS',
            rq: true,
            en: 'ObliqueCartesianCS',
            ti: '.ObliqueCartesianCSType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'AbstractRingType',
        bti: '.AbstractGeometryType'
      }, {
        ln: 'SphericalCSType',
        bti: '.AbstractCoordinateSystemType'
      }, {
        ln: 'RectifiedGridDomainType',
        bti: '.DomainSetType'
      }, {
        ln: 'MultiSolidPropertyType',
        ps: [{
            n: 'multiSolid',
            rq: true,
            en: 'MultiSolid',
            ti: '.MultiSolidType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'DefinitionType',
        bti: '.AbstractGMLType'
      }, {
        ln: 'FaceType',
        bti: '.AbstractTopoPrimitiveType',
        ps: [{
            n: 'directedEdge',
            rq: true,
            col: true,
            ti: '.DirectedEdgePropertyType'
          }, {
            n: 'directedTopoSolid',
            mno: 0,
            mxo: 2,
            col: true,
            ti: '.DirectedTopoSolidPropertyType'
          }, {
            n: 'surfaceProperty',
            ti: '.SurfacePropertyType'
          }]
      }, {
        ln: 'CylindricalCSRefType',
        ps: [{
            n: 'cylindricalCS',
            rq: true,
            en: 'CylindricalCS',
            ti: '.CylindricalCSType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'AbstractReferenceSystemType',
        bti: '.AbstractReferenceSystemBaseType',
        ps: [{
            n: 'srsID',
            mno: 0,
            col: true,
            ti: '.IdentifierType'
          }, {
            n: 'remarks',
            ti: '.StringOrRefType'
          }, {
            n: 'validArea',
            ti: '.ExtentType'
          }, {
            n: 'scope'
          }]
      }, {
        ln: 'SingleOperationRefType',
        ps: [{
            n: 'singleOperation',
            rq: true,
            mx: false,
            dom: false,
            en: '_SingleOperation',
            ti: '.AbstractCoordinateOperationType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'TimeTopologyPrimitivePropertyType',
        ps: [{
            n: 'timeTopologyPrimitive',
            rq: true,
            mx: false,
            dom: false,
            en: '_TimeTopologyPrimitive',
            ti: '.AbstractTimeTopologyPrimitiveType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'EngineeringCRSRefType',
        ps: [{
            n: 'engineeringCRS',
            rq: true,
            en: 'EngineeringCRS',
            ti: '.EngineeringCRSType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'ScaleType',
        bti: '.MeasureType'
      }, {
        ln: 'TimeCalendarEraType',
        bti: '.DefinitionType',
        ps: [{
            n: 'referenceEvent',
            rq: true,
            ti: '.StringOrRefType'
          }, {
            n: 'referenceDate',
            ti: 'Date'
          }, {
            n: 'julianReference',
            rq: true,
            ti: 'Decimal'
          }, {
            n: 'epochOfUse',
            rq: true,
            ti: '.TimePeriodPropertyType'
          }]
      }, {
        ln: 'CoordinateSystemAxisType',
        bti: '.CoordinateSystemAxisBaseType',
        ps: [{
            n: 'axisID',
            mno: 0,
            col: true,
            ti: '.IdentifierType'
          }, {
            n: 'remarks',
            ti: '.StringOrRefType'
          }, {
            n: 'axisAbbrev',
            rq: true,
            ti: '.CodeType'
          }, {
            n: 'axisDirection',
            rq: true,
            ti: '.CodeType'
          }, {
            n: 'uom',
            rq: true,
            an: {
              lp: 'uom',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }]
      }, {
        ln: 'EllipsoidType',
        bti: '.EllipsoidBaseType',
        ps: [{
            n: 'ellipsoidID',
            mno: 0,
            col: true,
            ti: '.IdentifierType'
          }, {
            n: 'remarks',
            ti: '.StringOrRefType'
          }, {
            n: 'semiMajorAxis',
            rq: true,
            ti: '.MeasureType'
          }, {
            n: 'secondDefiningParameter',
            rq: true,
            ti: '.SecondDefiningParameterType'
          }]
      }, {
        ln: 'TopoComplexMemberType',
        ps: [{
            n: 'topoComplex',
            en: 'TopoComplex',
            ti: '.TopoComplexType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'CoverageFunctionType',
        ps: [{
            n: 'mappingRule',
            rq: true,
            en: 'MappingRule',
            ti: '.StringOrRefType'
          }, {
            n: 'gridFunction',
            rq: true,
            mx: false,
            dom: false,
            en: 'GridFunction',
            ti: '.GridFunctionType',
            t: 'er'
          }]
      }, {
        ln: 'TimeNodePropertyType',
        ps: [{
            n: 'timeNode',
            rq: true,
            en: 'TimeNode',
            ti: '.TimeNodeType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'AbstractRingPropertyType',
        ps: [{
            n: 'ring',
            rq: true,
            mx: false,
            dom: false,
            en: '_Ring',
            ti: '.AbstractRingType',
            t: 'er'
          }]
      }, {
        ln: 'LinearRingPropertyType',
        ps: [{
            n: 'linearRing',
            rq: true,
            en: 'LinearRing',
            ti: '.LinearRingType'
          }]
      }, {
        ln: 'DirectionVectorType',
        ps: [{
            n: 'vector',
            rq: true,
            ti: '.VectorType'
          }, {
            n: 'horizontalAngle',
            rq: true,
            ti: '.AngleType'
          }, {
            n: 'verticalAngle',
            rq: true,
            ti: '.AngleType'
          }]
      }, {
        ln: 'TimeTopologyComplexType',
        bti: '.AbstractTimeComplexType',
        ps: [{
            n: 'primitive',
            rq: true,
            col: true,
            ti: '.TimeTopologyPrimitivePropertyType'
          }]
      }, {
        t: 'enum',
        ln: 'SignType',
        vs: ['-', '+']
      }, {
        t: 'enum',
        ln: 'CompassPointEnumeration',
        vs: ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
      }, {
        t: 'enum',
        ln: 'AesheticCriteriaType',
        vs: ['MIN_CROSSINGS', 'MIN_AREA', 'MIN_BENDS', 'MAX_BENDS', 'UNIFORM_BENDS', 'MIN_SLOPES', 'MIN_EDGE_LENGTH', 'MAX_EDGE_LENGTH', 'UNIFORM_EDGE_LENGTH', 'MAX_ANGULAR_RESOLUTION', 'MIN_ASPECT_RATIO', 'MAX_SYMMETRIES']
      }, {
        t: 'enum',
        ln: 'IncrementOrder',
        vs: ['+x+y', '+y+x', '+x-y', '-x-y']
      }, {
        t: 'enum',
        ln: 'KnotTypesType',
        vs: ['uniform', 'quasiUniform', 'piecewiseBezier']
      }, {
        t: 'enum',
        ln: 'TimeIndeterminateValueType',
        vs: ['after', 'before', 'now', 'unknown']
      }, {
        t: 'enum',
        ln: 'CurveInterpolationType',
        vs: ['linear', 'geodesic', 'circularArc3Points', 'circularArc2PointWithBulge', 'circularArcCenterPointWithRadius', 'elliptical', 'clothoid', 'conic', 'polynomialSpline', 'cubicSpline', 'rationalSpline']
      }, {
        t: 'enum',
        ln: 'GraphTypeType',
        vs: ['TREE', 'BICONNECTED']
      }, {
        t: 'enum',
        ln: 'SuccessionType',
        vs: ['substitution', 'division', 'fusion', 'initiation']
      }, {
        t: 'enum',
        ln: 'SurfaceInterpolationType',
        vs: ['none', 'planar', 'spherical', 'elliptical', 'conic', 'tin', 'parametricCurve', 'polynomialSpline', 'rationalSpline', 'triangulatedSpline']
      }, {
        t: 'enum',
        ln: 'QueryGrammarEnumeration',
        vs: ['xpath', 'xquery', 'other']
      }, {
        t: 'enum',
        ln: 'DrawingTypeType',
        vs: ['POLYLINE', 'ORTHOGONAL']
      }, {
        t: 'enum',
        ln: 'SequenceRuleNames',
        vs: ['Linear', 'Boustrophedonic', 'Cantor-diagonal', 'Spiral', 'Morton', 'Hilbert']
      }, {
        t: 'enum',
        ln: 'SymbolTypeEnumeration',
        vs: ['svg', 'xpath', 'other']
      }, {
        t: 'enum',
        ln: 'LineTypeType',
        vs: ['STRAIGHT', 'BENT']
      }, {
        t: 'enum',
        ln: 'FileValueModelType',
        vs: ['Record Interleaved']
      }],
    eis: [{
        en: 'topoPointProperty',
        ti: '.TopoPointPropertyType'
      }, {
        en: 'CartesianCS',
        ti: '.CartesianCSType',
        sh: '_CoordinateSystem'
      }, {
        en: 'solidMembers',
        ti: '.SolidArrayPropertyType'
      }, {
        en: 'sourceCRS',
        ti: '.CRSRefType'
      }, {
        en: 'version'
      }, {
        en: 'DerivedCRS',
        ti: '.DerivedCRSType',
        sh: '_GeneralDerivedCRS'
      }, {
        en: 'Face',
        ti: '.FaceType',
        sh: '_TopoPrimitive'
      }, {
        en: 'boundedBy',
        ti: '.BoundingShapeType'
      }, {
        en: '_TopoPrimitive',
        ti: '.AbstractTopoPrimitiveType',
        sh: '_Topology'
      }, {
        en: 'usesEllipsoidalCS',
        ti: '.EllipsoidalCSRefType'
      }, {
        en: 'usesTemporalDatum',
        ti: '.TemporalDatumRefType'
      }, {
        en: 'srsID',
        ti: '.IdentifierType'
      }, {
        en: 'multiCurveProperty',
        ti: '.MultiCurvePropertyType'
      }, {
        en: 'RectifiedGrid',
        ti: '.RectifiedGridType',
        sh: '_ImplicitGeometry'
      }, {
        en: 'degrees',
        ti: '.DegreesType'
      }, {
        en: 'obliqueCartesianCSRef',
        ti: '.ObliqueCartesianCSRefType'
      }, {
        en: 'usesEngineeringDatum',
        ti: '.EngineeringDatumRefType'
      }, {
        en: 'domainSet',
        ti: '.DomainSetType'
      }, {
        en: 'ConcatenatedOperation',
        ti: '.ConcatenatedOperationType',
        sh: '_CoordinateOperation'
      }, {
        en: 'operationMethodRef',
        ti: '.OperationMethodRefType'
      }, {
        en: 'sourceDimensions',
        ti: 'PositiveInteger'
      }, {
        en: 'GraphStyle',
        ti: '.GraphStyleType',
        sh: '_GML'
      }, {
        en: 'TimePeriod',
        ti: '.TimePeriodType',
        sh: '_TimeGeometricPrimitive'
      }, {
        en: 'doubleOrNullTupleList',
        ti: {
          t: 'l'
        }
      }, {
        en: 'surfaceMember',
        ti: '.SurfacePropertyType'
      }, {
        en: 'Cone',
        ti: '.ConeType',
        sh: '_GriddedSurface'
      }, {
        en: 'polygonProperty',
        ti: '.PolygonPropertyType'
      }, {
        en: 'pointMember',
        ti: '.PointPropertyType'
      }, {
        en: 'integerValue',
        ti: 'PositiveInteger'
      }, {
        en: '_Ring',
        ti: '.AbstractRingType',
        sh: '_Geometry'
      }, {
        en: 'CompositeValue',
        ti: '.CompositeValueType'
      }, {
        en: 'temporalDatumRef',
        ti: '.TemporalDatumRefType'
      }, {
        en: 'semiMinorAxis',
        ti: '.MeasureType'
      }, {
        en: 'geometryMembers',
        ti: '.GeometryArrayPropertyType'
      }, {
        en: 'coordinateSystemAxisRef',
        ti: '.CoordinateSystemAxisRefType'
      }, {
        en: 'polarCSRef',
        ti: '.PolarCSRefType'
      }, {
        en: '_ParametricCurveSurface',
        ti: '.AbstractParametricCurveSurfaceType',
        sh: '_SurfacePatch'
      }, {
        en: 'TimeCalendar',
        ti: '.TimeCalendarType',
        sh: '_TimeReferenceSystem'
      }, {
        en: 'Ring',
        ti: '.RingType',
        sh: '_Ring'
      }, {
        en: 'verticalDatumRef',
        ti: '.VerticalDatumRefType'
      }, {
        en: 'temporalExtent',
        ti: '.TimePeriodType'
      }, {
        en: 'relativeInternalPositionalAccuracy',
        ti: '.RelativeInternalPositionalAccuracyType',
        sh: '_positionalAccuracy'
      }, {
        en: 'Quantity',
        ti: '.MeasureType'
      }, {
        en: 'Sphere',
        ti: '.SphereType',
        sh: '_GriddedSurface'
      }, {
        en: 'multiEdgeOf',
        ti: '.MultiCurvePropertyType'
      }, {
        en: '_GeometricAggregate',
        ti: '.AbstractGeometricAggregateType',
        sh: '_Geometry'
      }, {
        en: 'symbol',
        ti: '.SymbolType'
      }, {
        en: 'graphStyle',
        ti: '.GraphStylePropertyType'
      }, {
        en: 'cylindricalCSRef',
        ti: '.CylindricalCSRefType'
      }, {
        en: 'geographicCRSRef',
        ti: '.GeographicCRSRefType'
      }, {
        en: 'parameterValueGroup',
        ti: '.ParameterValueGroupType',
        sh: '_generalParameterValue'
      }, {
        en: 'coordinateSystemRef',
        ti: '.CoordinateSystemRefType'
      }, {
        en: '_strictAssociation',
        ti: '.AssociationType'
      }, {
        en: 'DefinitionCollection',
        ti: '.DictionaryType',
        sh: 'Definition'
      }, {
        en: 'GeometricComplex',
        ti: '.GeometricComplexType',
        sh: '_Geometry'
      }, {
        en: 'FeatureCollection',
        ti: '.FeatureCollectionType',
        sh: '_Feature'
      }, {
        en: 'Clothoid',
        ti: '.ClothoidType',
        sh: '_CurveSegment'
      }, {
        en: 'methodFormula',
        ti: '.CodeType'
      }, {
        en: 'Edge',
        ti: '.EdgeType',
        sh: '_TopoPrimitive'
      }, {
        en: 'polygonPatches',
        ti: '.PolygonPatchArrayPropertyType',
        sh: 'patches'
      }, {
        en: 'meridianName',
        ti: '.CodeType',
        sh: 'name'
      }, {
        en: 'CategoryList',
        ti: '.CodeOrNullListType'
      }, {
        en: 'integerValueList',
        ti: {
          t: 'l',
          bti: 'Integer'
        }
      }, {
        en: 'usesParameter',
        ti: '.AbstractGeneralOperationParameterRefType'
      }, {
        en: 'track',
        ti: '.TrackType',
        sh: 'history'
      }, {
        en: 'ImageCRS',
        ti: '.ImageCRSType',
        sh: '_CoordinateReferenceSystem'
      }, {
        en: 'temporalCRSRef',
        ti: '.TemporalCRSRefType'
      }, {
        en: 'dmsAngle',
        ti: '.DMSAngleType'
      }, {
        en: 'columnIndex',
        ti: 'PositiveInteger'
      }, {
        en: 'target',
        ti: '.TargetPropertyType'
      }, {
        en: 'DerivedUnit',
        ti: '.DerivedUnitType',
        sh: 'UnitDefinition'
      }, {
        en: 'outerBoundaryIs',
        ti: '.AbstractRingPropertyType',
        sh: 'exterior'
      }, {
        en: 'ProjectedCRS',
        ti: '.ProjectedCRSType',
        sh: '_GeneralDerivedCRS'
      }, {
        en: 'duration',
        ti: 'Duration'
      }, {
        en: 'indirectEntry',
        ti: '.IndirectEntryType'
      }, {
        en: 'pointArrayProperty',
        ti: '.PointArrayPropertyType'
      }, {
        en: 'GridCoverage',
        ti: '.GridCoverageType',
        sh: '_DiscreteCoverage'
      }, {
        en: 'solidMember',
        ti: '.SolidPropertyType'
      }, {
        en: 'MultiPointCoverage',
        ti: '.MultiPointCoverageType',
        sh: '_DiscreteCoverage'
      }, {
        en: 'verticalCSRef',
        ti: '.VerticalCSRefType'
      }, {
        en: 'featureProperty',
        ti: '.FeaturePropertyType'
      }, {
        en: 'cartesianCSRef',
        ti: '.CartesianCSRefType'
      }, {
        en: 'concatenatedOperationRef',
        ti: '.ConcatenatedOperationRefType'
      }, {
        en: 'Polygon',
        ti: '.PolygonType',
        sh: '_Surface'
      }, {
        en: 'Style',
        ti: '.StyleType',
        sh: '_Style'
      }, {
        en: 'TopoSolid',
        ti: '.TopoSolidType',
        sh: '_TopoPrimitive'
      }, {
        en: 'engineeringCRSRef',
        ti: '.EngineeringCRSRefType'
      }, {
        en: 'segments',
        ti: '.CurveSegmentArrayPropertyType'
      }, {
        en: 'derivedCRSRef',
        ti: '.DerivedCRSRefType'
      }, {
        en: 'BaseUnit',
        ti: '.BaseUnitType',
        sh: 'UnitDefinition'
      }, {
        en: 'DirectedObservationAtDistance',
        ti: '.DirectedObservationAtDistanceType',
        sh: 'DirectedObservation'
      }, {
        en: 'LineStringSegment',
        ti: '.LineStringSegmentType',
        sh: '_CurveSegment'
      }, {
        en: 'coord',
        ti: '.CoordType'
      }, {
        en: 'CoordinateSystemAxis',
        ti: '.CoordinateSystemAxisType',
        sh: 'Definition'
      }, {
        en: 'MultiSolidCoverage',
        ti: '.MultiSolidCoverageType',
        sh: '_DiscreteCoverage'
      }, {
        en: 'dataSource',
        ti: '.StringOrRefType'
      }, {
        en: 'subComplex',
        ti: '.TopoComplexMemberType'
      }, {
        en: 'featureMember',
        ti: '.FeaturePropertyType'
      }, {
        en: 'TopoVolume',
        ti: '.TopoVolumeType'
      }, {
        en: 'rectifiedGridDomain',
        ti: '.RectifiedGridDomainType',
        sh: 'domainSet'
      }, {
        en: 'rowIndex',
        ti: 'PositiveInteger'
      }, {
        en: 'LabelStyle',
        ti: '.LabelStyleType',
        sh: '_GML'
      }, {
        en: 'TimeInstant',
        ti: '.TimeInstantType',
        sh: '_TimeGeometricPrimitive'
      }, {
        en: 'trianglePatches',
        ti: '.TrianglePatchArrayPropertyType',
        sh: 'patches'
      }, {
        en: '_SingleOperation',
        ti: '.AbstractCoordinateOperationType',
        sh: '_CoordinateOperation'
      }, {
        en: 'IndexMap',
        ti: '.IndexMapType',
        sh: 'GridFunction'
      }, {
        en: 'OperationMethod',
        ti: '.OperationMethodType',
        sh: 'Definition'
      }, {
        en: 'ellipsoidalCSRef',
        ti: '.EllipsoidalCSRefType'
      }, {
        en: 'directedNode',
        ti: '.DirectedNodePropertyType'
      }, {
        en: 'TopologyStyle',
        ti: '.TopologyStyleType',
        sh: '_GML'
      }, {
        en: 'generalConversionRef',
        ti: '.GeneralConversionRefType'
      }, {
        en: 'crsRef',
        ti: '.CRSRefType'
      }, {
        en: 'CountList',
        ti: {
          t: 'l'
        }
      }, {
        en: 'dictionaryEntry',
        ti: '.DictionaryEntryType'
      }, {
        en: 'description',
        ti: '.StringOrRefType'
      }, {
        en: 'GeocentricCRS',
        ti: '.GeocentricCRSType',
        sh: '_CoordinateReferenceSystem'
      }, {
        en: 'TemporalDatum',
        ti: '.TemporalDatumType',
        sh: '_Datum'
      }, {
        en: 'position',
        ti: '.PointPropertyType'
      }, {
        en: '_GeometricPrimitive',
        ti: '.AbstractGeometricPrimitiveType',
        sh: '_Geometry'
      }, {
        en: 'OrientableCurve',
        ti: '.OrientableCurveType',
        sh: '_Curve'
      }, {
        en: 'ArcString',
        ti: '.ArcStringType',
        sh: '_CurveSegment'
      }, {
        en: 'pixelInCell',
        ti: '.PixelInCellType'
      }, {
        en: 'patches',
        ti: '.SurfacePatchArrayPropertyType'
      }, {
        en: '_Solid',
        ti: '.AbstractSolidType',
        sh: '_GeometricPrimitive'
      }, {
        en: 'featureMembers',
        ti: '.FeatureArrayPropertyType'
      }, {
        en: 'verticalDatumType',
        ti: '.VerticalDatumTypeType'
      }, {
        en: '_SurfacePatch',
        ti: '.AbstractSurfacePatchType'
      }, {
        en: 'directedFace',
        ti: '.DirectedFacePropertyType'
      }, {
        en: 'File',
        ti: '.FileType'
      }, {
        en: 'includesValue',
        ti: '.AbstractGeneralParameterValueType',
        sh: '_generalParameterValue'
      }, {
        en: 'temporalCSRef',
        ti: '.TemporalCSRefType'
      }, {
        en: 'MultiPolygon',
        ti: '.MultiPolygonType',
        sh: '_GeometricAggregate'
      }, {
        en: 'result',
        ti: '.MeasureType'
      }, {
        en: 'Count',
        ti: 'Integer'
      }, {
        en: 'RectifiedGridCoverage',
        ti: '.RectifiedGridCoverageType',
        sh: '_DiscreteCoverage'
      }, {
        en: '_Geometry',
        ti: '.AbstractGeometryType',
        sh: '_GML'
      }, {
        en: 'minimumOccurs',
        ti: 'NonNegativeInteger'
      }, {
        en: 'stringValue'
      }, {
        en: 'multiPosition',
        ti: '.MultiPointPropertyType'
      }, {
        en: 'datumID',
        ti: '.IdentifierType'
      }, {
        en: 'decimalMinutes',
        ti: 'Decimal'
      }, {
        en: 'MultiSurface',
        ti: '.MultiSurfaceType',
        sh: '_GeometricAggregate'
      }, {
        en: 'defaultStyle',
        ti: '.DefaultStylePropertyType'
      }, {
        en: 'Definition',
        ti: '.DefinitionType',
        sh: '_GML'
      }, {
        en: 'engineeringDatumRef',
        ti: '.EngineeringDatumRefType'
      }, {
        en: 'CountExtent',
        ti: {
          t: 'l'
        }
      }, {
        en: 'operationRef',
        ti: '.OperationRefType'
      }, {
        en: 'PolyhedralSurface',
        ti: '.PolyhedralSurfaceType',
        sh: 'Surface'
      }, {
        en: 'projectedCRSRef',
        ti: '.ProjectedCRSRefType'
      }, {
        en: 'methodID',
        ti: '.IdentifierType'
      }, {
        en: '_Datum',
        ti: '.AbstractDatumType',
        sh: 'Definition'
      }, {
        en: 'innerBoundaryIs',
        ti: '.AbstractRingPropertyType',
        sh: 'interior'
      }, {
        en: 'inverseFlattening',
        ti: '.MeasureType'
      }, {
        en: 'operationParameterGroupRef',
        ti: '.OperationParameterRefType'
      }, {
        en: 'isolated',
        ti: '.IsolatedPropertyType'
      }, {
        en: 'FeatureStyle',
        ti: '.FeatureStyleType',
        sh: '_GML'
      }, {
        en: 'TemporalCS',
        ti: '.TemporalCSType',
        sh: '_CoordinateSystem'
      }, {
        en: 'gridDomain',
        ti: '.GridDomainType',
        sh: 'domainSet'
      }, {
        en: 'derivedCRSType',
        ti: '.DerivedCRSTypeType'
      }, {
        en: 'Node',
        ti: '.NodeType',
        sh: '_TopoPrimitive'
      }, {
        en: 'definitionMember',
        ti: '.DictionaryEntryType',
        sh: 'dictionaryEntry'
      }, {
        en: 'coordinateOperationName',
        ti: '.CodeType',
        sh: 'name'
      }, {
        en: 'TopoComplex',
        ti: '.TopoComplexType',
        sh: '_Topology'
      }, {
        en: 'lineStringMember',
        ti: '.LineStringPropertyType'
      }, {
        en: 'DefinitionProxy',
        ti: '.DefinitionProxyType',
        sh: 'Definition'
      }, {
        en: 'modifiedCoordinate',
        ti: 'PositiveInteger'
      }, {
        en: 'groupName',
        ti: '.CodeType',
        sh: 'name'
      }, {
        en: 'EngineeringCRS',
        ti: '.EngineeringCRSType',
        sh: '_CoordinateReferenceSystem'
      }, {
        en: 'groupID',
        ti: '.IdentifierType'
      }, {
        en: '_GeneralDerivedCRS',
        ti: '.AbstractGeneralDerivedCRSType',
        sh: '_CoordinateReferenceSystem'
      }, {
        en: 'CylindricalCS',
        ti: '.CylindricalCSType',
        sh: '_CoordinateSystem'
      }, {
        en: 'directedEdge',
        ti: '.DirectedEdgePropertyType'
      }, {
        en: 'multiCurveDomain',
        ti: '.MultiCurveDomainType',
        sh: 'domainSet'
      }, {
        en: 'topoPrimitiveMembers',
        ti: '.TopoPrimitiveArrayAssociationType'
      }, {
        en: 'OperationParameterGroup',
        ti: '.OperationParameterGroupType',
        sh: '_GeneralOperationParameter'
      }, {
        en: 'GeographicCRS',
        ti: '.GeographicCRSType',
        sh: '_CoordinateReferenceSystem'
      }, {
        en: 'coordinates',
        ti: '.CoordinatesType'
      }, {
        en: 'QuantityExtent',
        ti: '.QuantityExtentType'
      }, {
        en: 'pointMembers',
        ti: '.PointArrayPropertyType'
      }, {
        en: 'LineString',
        ti: '.LineStringType',
        sh: '_Curve'
      }, {
        en: 'LocationKeyWord',
        ti: '.CodeType'
      }, {
        en: '_TimePrimitive',
        ti: '.AbstractTimePrimitiveType',
        sh: '_TimeObject'
      }, {
        en: 'MultiCurve',
        ti: '.MultiCurveType',
        sh: '_GeometricAggregate'
      }, {
        en: 'featureStyle',
        ti: '.FeatureStylePropertyType'
      }, {
        en: 'booleanValue',
        ti: 'Boolean'
      }, {
        en: '_FeatureCollection',
        ti: '.AbstractFeatureCollectionType',
        sh: '_Feature'
      }, {
        en: 'Solid',
        ti: '.SolidType',
        sh: '_Solid'
      }, {
        en: 'Geodesic',
        ti: '.GeodesicType',
        sh: 'GeodesicString'
      }, {
        en: 'metaDataProperty',
        ti: '.MetaDataPropertyType'
      }, {
        en: 'Bag',
        ti: '.BagType',
        sh: '_GML'
      }, {
        en: 'multiCoverage',
        ti: '.MultiSurfacePropertyType'
      }, {
        en: 'usesValue',
        ti: '.ParameterValueType'
      }, {
        en: 'tupleList',
        ti: '.CoordinatesType'
      }, {
        en: 'PassThroughOperation',
        ti: '.PassThroughOperationType',
        sh: '_SingleOperation'
      }, {
        en: 'LabelExpression',
        sc: '.LabelType'
      }, {
        en: 'multiPointProperty',
        ti: '.MultiPointPropertyType'
      }, {
        en: 'parameterID',
        ti: '.IdentifierType'
      }, {
        en: 'superComplex',
        ti: '.TopoComplexMemberType'
      }, {
        en: 'Surface',
        ti: '.SurfaceType',
        sh: '_Surface'
      }, {
        en: 'EngineeringDatum',
        ti: '.EngineeringDatumType',
        sh: '_Datum'
      }, {
        en: '_ContinuousCoverage',
        ti: '.AbstractContinuousCoverageType',
        sh: '_Coverage'
      }, {
        en: 'greenwichLongitude',
        ti: '.AngleChoiceType'
      }, {
        en: 'sphericalCSRef',
        ti: '.SphericalCSRefType'
      }, {
        en: 'OffsetCurve',
        ti: '.OffsetCurveType',
        sh: '_CurveSegment'
      }, {
        en: 'EllipsoidalCS',
        ti: '.EllipsoidalCSType',
        sh: '_CoordinateSystem'
      }, {
        en: 'VerticalDatum',
        ti: '.VerticalDatumType',
        sh: '_Datum'
      }, {
        en: 'baseCRS',
        ti: '.CoordinateReferenceSystemRefType'
      }, {
        en: 'SphericalCS',
        ti: '.SphericalCSType',
        sh: '_CoordinateSystem'
      }, {
        en: 'boundingBox',
        ti: '.EnvelopeType'
      }, {
        en: 'definedByConversion',
        ti: '.GeneralConversionRefType'
      }, {
        en: '_Surface',
        ti: '.AbstractSurfaceType',
        sh: '_GeometricPrimitive'
      }, {
        en: '_generalParameterValue',
        ti: '.AbstractGeneralParameterValueType'
      }, {
        en: 'DirectionVector',
        ti: '.DirectionVectorType'
      }, {
        en: '_association',
        ti: '.AssociationType'
      }, {
        en: '_GML',
        ti: '.AbstractGMLType',
        sh: '_Object'
      }, {
        en: 'multiExtentOf',
        ti: '.MultiSurfacePropertyType'
      }, {
        en: 'datumRef',
        ti: '.DatumRefType'
      }, {
        en: 'passThroughOperationRef',
        ti: '.PassThroughOperationRefType'
      }, {
        en: 'referenceSystemRef',
        ti: '.ReferenceSystemRefType'
      }, {
        en: '_GeneralOperationParameter',
        ti: '.AbstractGeneralOperationParameterType',
        sh: 'Definition'
      }, {
        en: '_CurveSegment',
        ti: '.AbstractCurveSegmentType'
      }, {
        en: 'geocentricCRSRef',
        ti: '.GeocentricCRSRefType'
      }, {
        en: 'geometryMember',
        ti: '.GeometryPropertyType'
      }, {
        en: 'surfaceMembers',
        ti: '.SurfaceArrayPropertyType'
      }, {
        en: 'TimeOrdinalEra',
        ti: '.TimeOrdinalEraType'
      }, {
        en: '_reference',
        ti: '.ReferenceType'
      }, {
        en: 'ellipsoidName',
        ti: '.CodeType',
        sh: 'name'
      }, {
        en: '_TimeComplex',
        ti: '.AbstractTimeComplexType',
        sh: '_TimeObject'
      }, {
        en: 'boundingPolygon',
        ti: '.PolygonType'
      }, {
        en: 'subject',
        ti: '.TargetPropertyType',
        sh: 'target'
      }, {
        en: 'Rectangle',
        ti: '.RectangleType',
        sh: '_SurfacePatch'
      }, {
        en: 'Cylinder',
        ti: '.CylinderType',
        sh: '_GriddedSurface'
      }, {
        en: 'multiSurfaceProperty',
        ti: '.MultiSurfacePropertyType'
      }, {
        en: '_Style',
        ti: '.AbstractStyleType',
        sh: '_GML'
      }, {
        en: 'generalTransformationRef',
        ti: '.GeneralTransformationRefType'
      }, {
        en: 'CompositeSurface',
        ti: '.CompositeSurfaceType',
        sh: '_Surface'
      }, {
        en: 'validArea',
        ti: '.ExtentType'
      }, {
        en: 'MultiGeometry',
        ti: '.MultiGeometryType',
        sh: '_GeometricAggregate'
      }, {
        en: 'timeInterval',
        ti: '.TimeIntervalLengthType'
      }, {
        en: 'maximalComplex',
        ti: '.TopoComplexMemberType'
      }, {
        en: 'Point',
        ti: '.PointType',
        sh: '_GeometricPrimitive'
      }, {
        en: 'VerticalCS',
        ti: '.VerticalCSType',
        sh: '_CoordinateSystem'
      }, {
        en: 'usesSingleOperation',
        ti: '.SingleOperationRefType'
      }, {
        en: 'catalogSymbol',
        ti: '.CodeType'
      }, {
        en: 'transformationRef',
        ti: '.TransformationRefType'
      }, {
        en: 'Envelope',
        ti: '.EnvelopeType'
      }, {
        en: 'CompoundCRS',
        ti: '.CompoundCRSType',
        sh: '_CRS'
      }, {
        en: 'value',
        ti: '.MeasureType'
      }, {
        en: 'Boolean',
        ti: 'Boolean'
      }, {
        en: 'primeMeridianRef',
        ti: '.PrimeMeridianRefType'
      }, {
        en: 'includesElement',
        ti: '.CovarianceElementType'
      }, {
        en: 'Ellipsoid',
        ti: '.EllipsoidType',
        sh: 'Definition'
      }, {
        en: 'topoSurfaceProperty',
        ti: '.TopoSurfacePropertyType'
      }, {
        en: 'surfaceProperty',
        ti: '.SurfacePropertyType'
      }, {
        en: 'pos',
        ti: '.DirectPositionType'
      }, {
        en: 'PrimeMeridian',
        ti: '.PrimeMeridianType',
        sh: 'Definition'
      }, {
        en: '_Curve',
        ti: '.AbstractCurveType',
        sh: '_GeometricPrimitive'
      }, {
        en: 'definitionRef',
        ti: '.ReferenceType'
      }, {
        en: 'axisAbbrev',
        ti: '.CodeType'
      }, {
        en: 'LinearCS',
        ti: '.LinearCSType',
        sh: '_CoordinateSystem'
      }, {
        en: 'TimeClock',
        ti: '.TimeClockType',
        sh: '_TimeReferenceSystem'
      }, {
        en: 'multiCenterLineOf',
        ti: '.MultiCurvePropertyType'
      }, {
        en: 'UserDefinedCS',
        ti: '.UserDefinedCSType',
        sh: '_CoordinateSystem'
      }, {
        en: 'TimeNode',
        ti: '.TimeNodeType',
        sh: '_TimeTopologyPrimitive'
      }, {
        en: '_TimeSlice',
        ti: '.AbstractTimeSliceType',
        sh: '_GML'
      }, {
        en: 'valueList',
        ti: '.MeasureListType'
      }, {
        en: 'targetCRS',
        ti: '.CRSRefType'
      }, {
        en: 'isSphere'
      }, {
        en: 'direction',
        ti: '.DirectionPropertyType'
      }, {
        en: 'geometryStyle',
        ti: '.GeometryStylePropertyType'
      }, {
        en: 'rangeParameters',
        ti: '.RangeParametersType'
      }, {
        en: 'Bezier',
        ti: '.BezierType',
        sh: 'BSpline'
      }, {
        en: 'includesCRS',
        ti: '.CoordinateReferenceSystemRefType'
      }, {
        en: 'linearCSRef',
        ti: '.LinearCSRefType'
      }, {
        en: 'compoundCRSRef',
        ti: '.CompoundCRSRefType'
      }, {
        en: 'CompositeSolid',
        ti: '.CompositeSolidType',
        sh: '_Solid'
      }, {
        en: 'usesTemporalCS',
        ti: '.TemporalCSRefType'
      }, {
        en: 'csID',
        ti: '.IdentifierType'
      }, {
        en: 'usesSphericalCS',
        ti: '.SphericalCSRefType'
      }, {
        en: 'geodeticDatumRef',
        ti: '.GeodeticDatumRefType'
      }, {
        en: 'multiSolidDomain',
        ti: '.MultiSolidDomainType',
        sh: 'domainSet'
      }, {
        en: 'directedTopoSolid',
        ti: '.DirectedTopoSolidPropertyType'
      }, {
        en: 'userDefinedCSRef',
        ti: '.UserDefinedCSRefType'
      }, {
        en: 'measure',
        ti: '.MeasureType'
      }, {
        en: 'origin',
        ti: 'DateTime'
      }, {
        en: 'dmsAngleValue',
        ti: '.DMSAngleType'
      }, {
        en: 'MultiSolid',
        ti: '.MultiSolidType',
        sh: '_GeometricAggregate'
      }, {
        en: 'Array',
        ti: '.ArrayType',
        sh: '_GML'
      }, {
        en: 'parameterValue',
        ti: '.ParameterValueType',
        sh: '_generalParameterValue'
      }, {
        en: 'maximumOccurs',
        ti: 'PositiveInteger'
      }, {
        en: 'CircleByCenterPoint',
        ti: '.CircleByCenterPointType',
        sh: 'ArcByCenterPoint'
      }, {
        en: 'roughConversionToPreferredUnit',
        ti: '.ConversionToPreferredUnitType'
      }, {
        en: 'remarks',
        ti: '.StringOrRefType'
      }, {
        en: 'Null',
        ti: {
          t: 'l'
        }
      }, {
        en: 'Transformation',
        ti: '.TransformationType',
        sh: '_GeneralTransformation'
      }, {
        en: 'PolygonPatch',
        ti: '.PolygonPatchType',
        sh: '_SurfacePatch'
      }, {
        en: 'topologyStyle',
        ti: '.TopologyStylePropertyType'
      }, {
        en: 'ImageDatum',
        ti: '.ImageDatumType',
        sh: '_Datum'
      }, {
        en: 'CategoryExtent',
        ti: '.CategoryExtentType'
      }, {
        en: 'coordinateReferenceSystemRef',
        ti: '.CoordinateReferenceSystemRefType'
      }, {
        en: 'multiLocation',
        ti: '.MultiPointPropertyType'
      }, {
        en: 'TimeCoordinateSystem',
        ti: '.TimeCoordinateSystemType',
        sh: '_TimeReferenceSystem'
      }, {
        en: 'interior',
        ti: '.AbstractRingPropertyType'
      }, {
        en: 'MovingObjectStatus',
        ti: '.MovingObjectStatusType',
        sh: '_TimeSlice'
      }, {
        en: 'secondDefiningParameter',
        ti: '.SecondDefiningParameterType'
      }, {
        en: 'polygonMember',
        ti: '.PolygonPropertyType'
      }, {
        en: 'PolarCS',
        ti: '.PolarCSType',
        sh: '_CoordinateSystem'
      }, {
        en: 'usesEllipsoid',
        ti: '.EllipsoidRefType'
      }, {
        en: '_Operation',
        ti: '.AbstractCoordinateOperationType',
        sh: '_SingleOperation'
      }, {
        en: 'multiPointDomain',
        ti: '.MultiPointDomainType',
        sh: 'domainSet'
      }, {
        en: 'timePosition',
        ti: '.TimePositionType'
      }, {
        en: 'coordinateOperationRef',
        ti: '.CoordinateOperationRefType'
      }, {
        en: 'usesCartesianCS',
        ti: '.CartesianCSRefType'
      }, {
        en: 'absoluteExternalPositionalAccuracy',
        ti: '.AbsoluteExternalPositionalAccuracyType',
        sh: '_positionalAccuracy'
      }, {
        en: 'coverageFunction',
        ti: '.CoverageFunctionType'
      }, {
        en: 'usesVerticalCS',
        ti: '.VerticalCSRefType'
      }, {
        en: 'operationParameterRef',
        ti: '.OperationParameterRefType'
      }, {
        en: 'meridianID',
        ti: '.IdentifierType'
      }, {
        en: 'ArcStringByBulge',
        ti: '.ArcStringByBulgeType',
        sh: '_CurveSegment'
      }, {
        en: 'LocationString',
        ti: '.StringOrRefType'
      }, {
        en: 'MultiSurfaceCoverage',
        ti: '.MultiSurfaceCoverageType',
        sh: '_DiscreteCoverage'
      }, {
        en: 'Grid',
        ti: '.GridType',
        sh: '_ImplicitGeometry'
      }, {
        en: 'CompassPoint'
      }, {
        en: 'location',
        ti: '.LocationPropertyType'
      }, {
        en: 'imageDatumRef',
        ti: '.ImageDatumRefType'
      }, {
        en: 'labelStyle',
        ti: '.LabelStylePropertyType'
      }, {
        en: 'targetDimensions',
        ti: 'PositiveInteger'
      }, {
        en: 'OrientableSurface',
        ti: '.OrientableSurfaceType',
        sh: '_Surface'
      }, {
        en: 'CubicSpline',
        ti: '.CubicSplineType',
        sh: '_CurveSegment'
      }, {
        en: 'baseSurface',
        ti: '.SurfacePropertyType'
      }, {
        en: 'Category',
        ti: '.CodeType'
      }, {
        en: 'MappingRule',
        ti: '.StringOrRefType'
      }, {
        en: 'DataBlock',
        ti: '.DataBlockType'
      }, {
        en: 'verticalExtent',
        ti: '.EnvelopeType'
      }, {
        en: 'BooleanList',
        ti: {
          t: 'l'
        }
      }, {
        en: 'usesMethod',
        ti: '.OperationMethodRefType'
      }, {
        en: '_TimeObject',
        ti: '.AbstractTimeObjectType',
        sh: '_GML'
      }, {
        en: 'methodName',
        ti: '.CodeType',
        sh: 'name'
      }, {
        en: 'valueComponents',
        ti: '.ValueArrayPropertyType'
      }, {
        en: 'members',
        ti: '.ArrayAssociationType'
      }, {
        en: 'container',
        ti: '.ContainerPropertyType'
      }, {
        en: 'lineStringProperty',
        ti: '.LineStringPropertyType'
      }, {
        en: 'vector',
        ti: '.VectorType'
      }, {
        en: 'singleOperationRef',
        ti: '.SingleOperationRefType'
      }, {
        en: 'TimeTopologyComplex',
        ti: '.TimeTopologyComplexType',
        sh: '_TimeComplex'
      }, {
        en: 'curveArrayProperty',
        ti: '.CurveArrayPropertyType'
      }, {
        en: 'axisID',
        ti: '.IdentifierType'
      }, {
        en: 'usesAxis',
        ti: '.CoordinateSystemAxisRefType'
      }, {
        en: 'name',
        ti: '.CodeType'
      }, {
        en: 'CompositeCurve',
        ti: '.CompositeCurveType',
        sh: '_Curve'
      }, {
        en: 'solidProperty',
        ti: '.SolidPropertyType'
      }, {
        en: 'valueProperty',
        ti: '.ValuePropertyType'
      }, {
        en: 'GeodesicString',
        ti: '.GeodesicStringType',
        sh: '_CurveSegment'
      }, {
        en: 'usesVerticalDatum',
        ti: '.VerticalDatumRefType'
      }, {
        en: '_GriddedSurface',
        ti: '.AbstractGriddedSurfaceType',
        sh: '_ParametricCurveSurface'
      }, {
        en: 'resultOf',
        ti: '.AssociationType'
      }, {
        en: '_positionalAccuracy',
        ti: '.AbstractPositionalAccuracyType'
      }, {
        en: '_Feature',
        ti: '.AbstractFeatureType',
        sh: '_GML'
      }, {
        en: 'ArcByCenterPoint',
        ti: '.ArcByCenterPointType',
        sh: '_CurveSegment'
      }, {
        en: '_CoordinateReferenceSystem',
        ti: '.AbstractReferenceSystemType',
        sh: '_CRS'
      }, {
        en: 'covariance',
        ti: 'Double'
      }, {
        en: 'multiSurfaceDomain',
        ti: '.MultiSurfaceDomainType',
        sh: 'domainSet'
      }, {
        en: 'usesCS',
        ti: '.CoordinateSystemRefType'
      }, {
        en: 'ArcByBulge',
        ti: '.ArcByBulgeType',
        sh: 'ArcStringByBulge'
      }, {
        en: 'angle',
        ti: '.MeasureType'
      }, {
        en: 'covarianceMatrix',
        ti: '.CovarianceMatrixType',
        sh: '_positionalAccuracy'
      }, {
        en: '_Object',
        ti: 'AnyType'
      }, {
        en: 'EnvelopeWithTimePeriod',
        ti: '.EnvelopeWithTimePeriodType',
        sh: 'Envelope'
      }, {
        en: 'ObliqueCartesianCS',
        ti: '.ObliqueCartesianCSType',
        sh: '_CoordinateSystem'
      }, {
        en: 'Observation',
        ti: '.ObservationType',
        sh: '_Feature'
      }, {
        en: 'status',
        ti: '.StringOrRefType'
      }, {
        en: 'centerLineOf',
        ti: '.CurvePropertyType'
      }, {
        en: 'topoPrimitiveMember',
        ti: '.TopoPrimitiveMemberType'
      }, {
        en: '_MetaData',
        ti: '.AbstractMetaDataType',
        sh: '_Object'
      }, {
        en: 'TimeOrdinalReferenceSystem',
        ti: '.TimeOrdinalReferenceSystemType',
        sh: '_TimeReferenceSystem'
      }, {
        en: 'srsName',
        ti: '.CodeType',
        sh: 'name'
      }, {
        en: 'unitOfMeasure',
        ti: '.UnitOfMeasureType'
      }, {
        en: 'VerticalCRS',
        ti: '.VerticalCRSType',
        sh: '_CoordinateReferenceSystem'
      }, {
        en: 'centerOf',
        ti: '.PointPropertyType'
      }, {
        en: '_GeneralTransformation',
        ti: '.AbstractGeneralTransformationType',
        sh: '_Operation'
      }, {
        en: 'multiSolidProperty',
        ti: '.MultiSolidPropertyType'
      }, {
        en: '_CoordinateSystem',
        ti: '.AbstractCoordinateSystemType',
        sh: 'Definition'
      }, {
        en: 'solidArrayProperty',
        ti: '.SolidArrayPropertyType'
      }, {
        en: '_Topology',
        ti: '.AbstractTopologyType',
        sh: '_GML'
      }, {
        en: 'seconds',
        ti: 'Decimal'
      }, {
        en: 'imageCRSRef',
        ti: '.ImageCRSRefType'
      }, {
        en: 'Arc',
        ti: '.ArcType',
        sh: 'ArcString'
      }, {
        en: 'baseCurve',
        ti: '.CurvePropertyType'
      }, {
        en: 'Triangle',
        ti: '.TriangleType',
        sh: '_SurfacePatch'
      }, {
        en: 'valueFile'
      }, {
        en: 'TopoSurface',
        ti: '.TopoSurfaceType'
      }, {
        en: 'TopoCurve',
        ti: '.TopoCurveType'
      }, {
        en: 'csName',
        ti: '.CodeType',
        sh: 'name'
      }, {
        en: 'usesImageDatum',
        ti: '.ImageDatumRefType'
      }, {
        en: 'derivationUnitTerm',
        ti: '.DerivationUnitTermType'
      }, {
        en: 'usesObliqueCartesianCS',
        ti: '.ObliqueCartesianCSRefType'
      }, {
        en: 'curveMembers',
        ti: '.CurveArrayPropertyType'
      }, {
        en: 'curveProperty',
        ti: '.CurvePropertyType'
      }, {
        en: 'QuantityList',
        ti: '.MeasureOrNullListType'
      }, {
        en: 'Circle',
        ti: '.CircleType',
        sh: 'Arc'
      }, {
        en: 'anchorPoint',
        ti: '.CodeType'
      }, {
        en: 'Curve',
        ti: '.CurveType',
        sh: '_Curve'
      }, {
        en: 'MultiCurveCoverage',
        ti: '.MultiCurveCoverageType',
        sh: '_DiscreteCoverage'
      }, {
        en: 'TimeEdge',
        ti: '.TimeEdgeType',
        sh: '_TimeTopologyPrimitive'
      }, {
        en: 'MultiPoint',
        ti: '.MultiPointType',
        sh: '_GeometricAggregate'
      }, {
        en: 'GridFunction',
        ti: '.GridFunctionType'
      }, {
        en: 'semiMajorAxis',
        ti: '.MeasureType'
      }, {
        en: 'history',
        ti: '.HistoryPropertyType'
      }, {
        en: 'valueComponent',
        ti: '.ValuePropertyType'
      }, {
        en: 'topoCurveProperty',
        ti: '.TopoCurvePropertyType'
      }, {
        en: 'DirectedObservation',
        ti: '.DirectedObservationType',
        sh: 'Observation'
      }, {
        en: 'OperationParameter',
        ti: '.OperationParameterType',
        sh: '_GeneralOperationParameter'
      }, {
        en: 'UnitDefinition',
        ti: '.UnitDefinitionType',
        sh: 'Definition'
      }, {
        en: 'pointRep',
        ti: '.PointPropertyType'
      }, {
        en: '_TimeReferenceSystem',
        ti: '.AbstractTimeReferenceSystemType',
        sh: 'Definition'
      }, {
        en: 'quantityType',
        ti: '.StringOrRefType'
      }, {
        en: 'valueOfParameter',
        ti: '.OperationParameterRefType'
      }, {
        en: '_CoordinateOperation',
        ti: '.AbstractCoordinateOperationType',
        sh: 'Definition'
      }, {
        en: 'GeodeticDatum',
        ti: '.GeodeticDatumType',
        sh: '_Datum'
      }, {
        en: '_CRS',
        ti: '.AbstractReferenceSystemType',
        sh: '_ReferenceSystem'
      }, {
        en: 'usesOperation',
        ti: '.OperationRefType'
      }, {
        en: 'minutes',
        ti: 'NonNegativeInteger'
      }, {
        en: 'datumName',
        ti: '.CodeType',
        sh: 'name'
      }, {
        en: 'LinearRing',
        ti: '.LinearRingType',
        sh: '_Ring'
      }, {
        en: 'abstractGeneralOperationParameterRef',
        ti: '.AbstractGeneralOperationParameterRefType'
      }, {
        en: 'usesGeodeticDatum',
        ti: '.GeodeticDatumRefType'
      }, {
        en: 'edgeOf',
        ti: '.CurvePropertyType'
      }, {
        en: 'using',
        ti: '.FeaturePropertyType'
      }, {
        en: 'GeometryStyle',
        ti: '.GeometryStyleType',
        sh: '_GML'
      }, {
        en: 'curveMember',
        ti: '.CurvePropertyType'
      }, {
        en: 'conversionToPreferredUnit',
        ti: '.ConversionToPreferredUnitType'
      }, {
        en: '_DiscreteCoverage',
        ti: '.AbstractDiscreteCoverageType',
        sh: '_Coverage'
      }, {
        en: 'posList',
        ti: '.DirectPositionListType'
      }, {
        en: '_TimeGeometricPrimitive',
        ti: '.AbstractTimeGeometricPrimitiveType',
        sh: '_TimePrimitive'
      }, {
        en: 'conversionRef',
        ti: '.ConversionRefType'
      }, {
        en: 'surfaceArrayProperty',
        ti: '.SurfaceArrayPropertyType'
      }, {
        en: 'rangeSet',
        ti: '.RangeSetType'
      }, {
        en: 'valuesOfGroup',
        ti: '.OperationParameterGroupRefType'
      }, {
        en: 'axisDirection',
        ti: '.CodeType'
      }, {
        en: 'coordinateOperationID',
        ti: '.IdentifierType'
      }, {
        en: 'TemporalCRS',
        ti: '.TemporalCRSType',
        sh: '_CoordinateReferenceSystem'
      }, {
        en: '_GeneralConversion',
        ti: '.AbstractGeneralConversionType',
        sh: '_Operation'
      }, {
        en: 'multiCenterOf',
        ti: '.MultiPointPropertyType'
      }, {
        en: 'includesParameter',
        ti: '.AbstractGeneralOperationParameterRefType'
      }, {
        en: 'BSpline',
        ti: '.BSplineType',
        sh: '_CurveSegment'
      }, {
        en: 'TimeCalendarEra',
        ti: '.TimeCalendarEraType',
        sh: 'Definition'
      }, {
        en: 'priorityLocation',
        ti: '.PriorityLocationPropertyType',
        sh: 'location'
      }, {
        en: 'usesPrimeMeridian',
        ti: '.PrimeMeridianRefType'
      }, {
        en: 'TopoPoint',
        ti: '.TopoPointType'
      }, {
        en: 'ValueArray',
        ti: '.ValueArrayType',
        sh: 'CompositeValue'
      }, {
        en: 'Dictionary',
        ti: '.DictionaryType',
        sh: 'Definition'
      }, {
        en: '_ImplicitGeometry',
        ti: '.AbstractGeometryType',
        sh: '_Geometry'
      }, {
        en: 'scope'
      }, {
        en: 'AffinePlacement',
        ti: '.AffinePlacementType'
      }, {
        en: 'multiGeometryProperty',
        ti: '.MultiGeometryPropertyType'
      }, {
        en: 'topoComplexProperty',
        ti: '.TopoComplexMemberType'
      }, {
        en: 'GenericMetaData',
        ti: '.GenericMetaDataType',
        sh: '_MetaData'
      }, {
        en: 'validTime',
        ti: '.TimePrimitivePropertyType'
      }, {
        en: '_ReferenceSystem',
        ti: '.AbstractReferenceSystemType',
        sh: 'Definition'
      }, {
        en: 'member',
        ti: '.AssociationType'
      }, {
        en: 'ellipsoidID',
        ti: '.IdentifierType'
      }, {
        en: 'ellipsoidRef',
        ti: '.EllipsoidRefType'
      }, {
        en: 'MultiLineString',
        ti: '.MultiLineStringType',
        sh: '_GeometricAggregate'
      }, {
        en: '_TimeTopologyPrimitive',
        ti: '.AbstractTimeTopologyPrimitiveType',
        sh: '_TimePrimitive'
      }, {
        en: 'parameterName',
        ti: '.CodeType',
        sh: 'name'
      }, {
        en: 'measureDescription',
        ti: '.CodeType'
      }, {
        en: 'ConventionalUnit',
        ti: '.ConventionalUnitType',
        sh: 'UnitDefinition'
      }, {
        en: 'extentOf',
        ti: '.SurfacePropertyType'
      }, {
        en: '_Coverage',
        ti: '.AbstractCoverageType',
        sh: '_Feature'
      }, {
        en: 'TriangulatedSurface',
        ti: '.TriangulatedSurfaceType',
        sh: 'Surface'
      }, {
        en: 'Tin',
        ti: '.TinType',
        sh: 'TriangulatedSurface'
      }, {
        en: 'operationVersion'
      }, {
        en: 'pointProperty',
        ti: '.PointPropertyType'
      }, {
        en: 'Conversion',
        ti: '.ConversionType',
        sh: '_GeneralConversion'
      }, {
        en: 'verticalCRSRef',
        ti: '.VerticalCRSRefType'
      }, {
        en: 'topoVolumeProperty',
        ti: '.TopoVolumePropertyType'
      }, {
        en: 'exterior',
        ti: '.AbstractRingPropertyType'
      }, {
        en: 'realizationEpoch',
        ti: 'Date'
      }]
  };
  return {
    GML_3_1_1: GML_3_1_1
  };
};
if (true) {
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (GML_3_1_1_Module_Factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
else {
  var GML_3_1_1_Module = GML_3_1_1_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.GML_3_1_1 = GML_3_1_1_Module.GML_3_1_1;
  }
  else {
    var GML_3_1_1 = GML_3_1_1_Module.GML_3_1_1;
  }
}

/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var OWS_1_0_0_Module_Factory = function () {
  var OWS_1_0_0 = {
    n: 'OWS_1_0_0',
    dens: 'http:\/\/www.opengis.net\/ows',
    dans: 'http:\/\/www.w3.org\/1999\/xlink',
    deps: ['XLink_1_0'],
    tis: [{
        ln: 'CapabilitiesBaseType',
        ps: [{
            n: 'serviceIdentification',
            en: 'ServiceIdentification',
            ti: '.ServiceIdentification'
          }, {
            n: 'serviceProvider',
            en: 'ServiceProvider',
            ti: '.ServiceProvider'
          }, {
            n: 'operationsMetadata',
            en: 'OperationsMetadata',
            ti: '.OperationsMetadata'
          }, {
            n: 'version',
            rq: true,
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'updateSequence',
            an: {
              lp: 'updateSequence'
            },
            t: 'a'
          }]
      }, {
        ln: 'TelephoneType',
        ps: [{
            n: 'voice',
            mno: 0,
            col: true,
            en: 'Voice'
          }, {
            n: 'facsimile',
            mno: 0,
            col: true,
            en: 'Facsimile'
          }]
      }, {
        ln: 'AcceptFormatsType',
        ps: [{
            n: 'outputFormat',
            mno: 0,
            col: true,
            en: 'OutputFormat'
          }]
      }, {
        ln: 'Operation',
        tn: null,
        ps: [{
            n: 'dcp',
            rq: true,
            col: true,
            en: 'DCP',
            ti: '.DCP'
          }, {
            n: 'parameter',
            mno: 0,
            col: true,
            en: 'Parameter',
            ti: '.DomainType'
          }, {
            n: 'constraint',
            mno: 0,
            col: true,
            en: 'Constraint',
            ti: '.DomainType'
          }, {
            n: 'metadata',
            mno: 0,
            col: true,
            en: 'Metadata',
            ti: '.MetadataType'
          }, {
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'OnlineResourceType',
        ps: [{
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'DescriptionType',
        ps: [{
            n: 'title',
            en: 'Title'
          }, {
            n: '_abstract',
            en: 'Abstract'
          }, {
            n: 'keywords',
            mno: 0,
            col: true,
            en: 'Keywords',
            ti: '.KeywordsType'
          }]
      }, {
        ln: 'CodeType',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'codeSpace',
            an: {
              lp: 'codeSpace'
            },
            t: 'a'
          }]
      }, {
        ln: 'ResponsiblePartySubsetType',
        ps: [{
            n: 'individualName',
            en: 'IndividualName'
          }, {
            n: 'positionName',
            en: 'PositionName'
          }, {
            n: 'contactInfo',
            en: 'ContactInfo',
            ti: '.ContactType'
          }, {
            n: 'role',
            en: 'Role',
            ti: '.CodeType'
          }]
      }, {
        ln: 'BoundingBoxType',
        ps: [{
            n: 'lowerCorner',
            rq: true,
            en: 'LowerCorner',
            ti: {
              t: 'l',
              bti: 'Double'
            }
          }, {
            n: 'upperCorner',
            rq: true,
            en: 'UpperCorner',
            ti: {
              t: 'l',
              bti: 'Double'
            }
          }, {
            n: 'crs',
            an: {
              lp: 'crs'
            },
            t: 'a'
          }, {
            n: 'dimensions',
            ti: 'PositiveInteger',
            an: {
              lp: 'dimensions'
            },
            t: 'a'
          }]
      }, {
        ln: 'RequestMethodType',
        bti: '.OnlineResourceType',
        ps: [{
            n: 'constraint',
            mno: 0,
            col: true,
            en: 'Constraint',
            ti: '.DomainType'
          }]
      }, {
        ln: 'ContactType',
        ps: [{
            n: 'phone',
            en: 'Phone',
            ti: '.TelephoneType'
          }, {
            n: 'address',
            en: 'Address',
            ti: '.AddressType'
          }, {
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResourceType'
          }, {
            n: 'hoursOfService',
            en: 'HoursOfService'
          }, {
            n: 'contactInstructions',
            en: 'ContactInstructions'
          }]
      }, {
        ln: 'AcceptVersionsType',
        ps: [{
            n: 'version',
            rq: true,
            col: true,
            en: 'Version'
          }]
      }, {
        ln: 'KeywordsType',
        ps: [{
            n: 'keyword',
            rq: true,
            col: true,
            en: 'Keyword'
          }, {
            n: 'type',
            en: 'Type',
            ti: '.CodeType'
          }]
      }, {
        ln: 'IdentificationType',
        bti: '.DescriptionType',
        ps: [{
            n: 'identifier',
            en: 'Identifier',
            ti: '.CodeType'
          }, {
            n: 'boundingBox',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: 'BoundingBox',
            ti: '.BoundingBoxType',
            t: 'er'
          }, {
            n: 'outputFormat',
            mno: 0,
            col: true,
            en: 'OutputFormat'
          }, {
            n: 'availableCRS',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: 'AvailableCRS',
            t: 'er'
          }, {
            n: 'metadata',
            mno: 0,
            col: true,
            en: 'Metadata',
            ti: '.MetadataType'
          }]
      }, {
        ln: 'GetCapabilitiesType',
        ps: [{
            n: 'acceptVersions',
            en: 'AcceptVersions',
            ti: '.AcceptVersionsType'
          }, {
            n: 'sections',
            en: 'Sections',
            ti: '.SectionsType'
          }, {
            n: 'acceptFormats',
            en: 'AcceptFormats',
            ti: '.AcceptFormatsType'
          }, {
            n: 'updateSequence',
            an: {
              lp: 'updateSequence'
            },
            t: 'a'
          }]
      }, {
        ln: 'DomainType',
        ps: [{
            n: 'value',
            rq: true,
            col: true,
            en: 'Value'
          }, {
            n: 'metadata',
            mno: 0,
            col: true,
            en: 'Metadata',
            ti: '.MetadataType'
          }, {
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'DCP',
        tn: null,
        ps: [{
            n: 'http',
            rq: true,
            en: 'HTTP',
            ti: '.HTTP'
          }]
      }, {
        ln: 'SectionsType',
        ps: [{
            n: 'section',
            mno: 0,
            col: true,
            en: 'Section'
          }]
      }, {
        ln: 'WGS84BoundingBoxType',
        bti: '.BoundingBoxType'
      }, {
        ln: 'HTTP',
        tn: null,
        ps: [{
            n: 'getOrPost',
            rq: true,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: 'Get',
                ti: '.RequestMethodType'
              }, {
                en: 'Post',
                ti: '.RequestMethodType'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'ExceptionReport',
        tn: null,
        ps: [{
            n: 'exception',
            rq: true,
            col: true,
            en: 'Exception',
            ti: '.ExceptionType'
          }, {
            n: 'version',
            rq: true,
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'language',
            ti: 'Language',
            an: {
              lp: 'language'
            },
            t: 'a'
          }]
      }, {
        ln: 'MetadataType',
        ps: [{
            n: 'abstractMetaData',
            en: 'AbstractMetaData',
            ti: 'AnyType'
          }, {
            n: 'about',
            an: {
              lp: 'about'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'ServiceProvider',
        tn: null,
        ps: [{
            n: 'providerName',
            rq: true,
            en: 'ProviderName'
          }, {
            n: 'providerSite',
            en: 'ProviderSite',
            ti: '.OnlineResourceType'
          }, {
            n: 'serviceContact',
            rq: true,
            en: 'ServiceContact',
            ti: '.ResponsiblePartySubsetType'
          }]
      }, {
        ln: 'AddressType',
        ps: [{
            n: 'deliveryPoint',
            mno: 0,
            col: true,
            en: 'DeliveryPoint'
          }, {
            n: 'city',
            en: 'City'
          }, {
            n: 'administrativeArea',
            en: 'AdministrativeArea'
          }, {
            n: 'postalCode',
            en: 'PostalCode'
          }, {
            n: 'country',
            en: 'Country'
          }, {
            n: 'electronicMailAddress',
            mno: 0,
            col: true,
            en: 'ElectronicMailAddress'
          }]
      }, {
        ln: 'ExceptionType',
        ps: [{
            n: 'exceptionText',
            mno: 0,
            col: true,
            en: 'ExceptionText'
          }, {
            n: 'exceptionCode',
            rq: true,
            an: {
              lp: 'exceptionCode'
            },
            t: 'a'
          }, {
            n: 'locator',
            an: {
              lp: 'locator'
            },
            t: 'a'
          }]
      }, {
        ln: 'ServiceIdentification',
        tn: null,
        bti: '.DescriptionType',
        ps: [{
            n: 'serviceType',
            rq: true,
            en: 'ServiceType',
            ti: '.CodeType'
          }, {
            n: 'serviceTypeVersion',
            rq: true,
            col: true,
            en: 'ServiceTypeVersion'
          }, {
            n: 'fees',
            en: 'Fees'
          }, {
            n: 'accessConstraints',
            mno: 0,
            col: true,
            en: 'AccessConstraints'
          }]
      }, {
        ln: 'ResponsiblePartyType',
        ps: [{
            n: 'individualName',
            en: 'IndividualName'
          }, {
            n: 'organisationName',
            en: 'OrganisationName'
          }, {
            n: 'positionName',
            en: 'PositionName'
          }, {
            n: 'contactInfo',
            en: 'ContactInfo',
            ti: '.ContactType'
          }, {
            n: 'role',
            rq: true,
            en: 'Role',
            ti: '.CodeType'
          }]
      }, {
        ln: 'OperationsMetadata',
        tn: null,
        ps: [{
            n: 'operation',
            rq: true,
            mno: 2,
            col: true,
            en: 'Operation',
            ti: '.Operation'
          }, {
            n: 'parameter',
            mno: 0,
            col: true,
            en: 'Parameter',
            ti: '.DomainType'
          }, {
            n: 'constraint',
            mno: 0,
            col: true,
            en: 'Constraint',
            ti: '.DomainType'
          }, {
            n: 'extendedCapabilities',
            en: 'ExtendedCapabilities',
            ti: 'AnyType'
          }]
      }],
    eis: [{
        en: 'ExtendedCapabilities',
        ti: 'AnyType'
      }, {
        en: 'Abstract'
      }, {
        en: 'AbstractMetaData',
        ti: 'AnyType'
      }, {
        en: 'Get',
        ti: '.RequestMethodType',
        sc: '.HTTP'
      }, {
        en: 'Fees'
      }, {
        en: 'OrganisationName'
      }, {
        en: 'Role',
        ti: '.CodeType'
      }, {
        en: 'Metadata',
        ti: '.MetadataType'
      }, {
        en: 'IndividualName'
      }, {
        en: 'AccessConstraints'
      }, {
        en: 'BoundingBox',
        ti: '.BoundingBoxType'
      }, {
        en: 'Exception',
        ti: '.ExceptionType'
      }, {
        en: 'ExceptionReport',
        ti: '.ExceptionReport'
      }, {
        en: 'OperationsMetadata',
        ti: '.OperationsMetadata'
      }, {
        en: 'GetCapabilities',
        ti: '.GetCapabilitiesType'
      }, {
        en: 'ServiceProvider',
        ti: '.ServiceProvider'
      }, {
        en: 'SupportedCRS',
        sh: 'AvailableCRS'
      }, {
        en: 'Identifier',
        ti: '.CodeType'
      }, {
        en: 'Language',
        ti: 'Language'
      }, {
        en: 'WGS84BoundingBox',
        ti: '.WGS84BoundingBoxType',
        sh: 'BoundingBox'
      }, {
        en: 'PointOfContact',
        ti: '.ResponsiblePartyType'
      }, {
        en: 'Title'
      }, {
        en: 'ContactInfo',
        ti: '.ContactType'
      }, {
        en: 'AvailableCRS'
      }, {
        en: 'Post',
        ti: '.RequestMethodType',
        sc: '.HTTP'
      }, {
        en: 'Keywords',
        ti: '.KeywordsType'
      }, {
        en: 'PositionName'
      }, {
        en: 'HTTP',
        ti: '.HTTP'
      }, {
        en: 'DCP',
        ti: '.DCP'
      }, {
        en: 'OutputFormat'
      }, {
        en: 'Operation',
        ti: '.Operation'
      }, {
        en: 'ServiceIdentification',
        ti: '.ServiceIdentification'
      }]
  };
  return {
    OWS_1_0_0: OWS_1_0_0
  };
};
if (true) {
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (OWS_1_0_0_Module_Factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
else {
  var OWS_1_0_0_Module = OWS_1_0_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.OWS_1_0_0 = OWS_1_0_0_Module.OWS_1_0_0;
  }
  else {
    var OWS_1_0_0 = OWS_1_0_0_Module.OWS_1_0_0;
  }
}

/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var SMIL_2_0_Module_Factory = function () {
  var SMIL_2_0 = {
    n: 'SMIL_2_0',
    dens: 'http:\/\/www.w3.org\/2001\/SMIL20\/',
    deps: ['SMIL_2_0_Language'],
    tis: [{
        ln: 'AnimateMotionPrototype',
        tn: 'animateMotionPrototype',
        ps: [{
            n: 'origin',
            an: {
              lp: 'origin'
            },
            t: 'a'
          }, {
            n: 'from',
            an: {
              lp: 'from'
            },
            t: 'a'
          }, {
            n: 'by',
            an: {
              lp: 'by'
            },
            t: 'a'
          }, {
            n: 'values',
            an: {
              lp: 'values'
            },
            t: 'a'
          }, {
            n: 'to',
            an: {
              lp: 'to'
            },
            t: 'a'
          }, {
            n: 'additive',
            an: {
              lp: 'additive'
            },
            t: 'a'
          }, {
            n: 'accumulate',
            an: {
              lp: 'accumulate'
            },
            t: 'a'
          }]
      }, {
        ln: 'SetPrototype',
        tn: 'setPrototype',
        ps: [{
            n: 'attributeName',
            rq: true,
            an: {
              lp: 'attributeName'
            },
            t: 'a'
          }, {
            n: 'attributeType',
            an: {
              lp: 'attributeType'
            },
            t: 'a'
          }, {
            n: 'to',
            an: {
              lp: 'to'
            },
            t: 'a'
          }]
      }, {
        ln: 'AnimateColorPrototype',
        tn: 'animateColorPrototype',
        ps: [{
            n: 'additive',
            an: {
              lp: 'additive'
            },
            t: 'a'
          }, {
            n: 'accumulate',
            an: {
              lp: 'accumulate'
            },
            t: 'a'
          }, {
            n: 'attributeName',
            rq: true,
            an: {
              lp: 'attributeName'
            },
            t: 'a'
          }, {
            n: 'attributeType',
            an: {
              lp: 'attributeType'
            },
            t: 'a'
          }, {
            n: 'from',
            an: {
              lp: 'from'
            },
            t: 'a'
          }, {
            n: 'by',
            an: {
              lp: 'by'
            },
            t: 'a'
          }, {
            n: 'values',
            an: {
              lp: 'values'
            },
            t: 'a'
          }, {
            n: 'to',
            an: {
              lp: 'to'
            },
            t: 'a'
          }]
      }, {
        ln: 'AnimatePrototype',
        tn: 'animatePrototype',
        ps: [{
            n: 'additive',
            an: {
              lp: 'additive'
            },
            t: 'a'
          }, {
            n: 'accumulate',
            an: {
              lp: 'accumulate'
            },
            t: 'a'
          }, {
            n: 'from',
            an: {
              lp: 'from'
            },
            t: 'a'
          }, {
            n: 'by',
            an: {
              lp: 'by'
            },
            t: 'a'
          }, {
            n: 'values',
            an: {
              lp: 'values'
            },
            t: 'a'
          }, {
            n: 'to',
            an: {
              lp: 'to'
            },
            t: 'a'
          }, {
            n: 'attributeName',
            rq: true,
            an: {
              lp: 'attributeName'
            },
            t: 'a'
          }, {
            n: 'attributeType',
            an: {
              lp: 'attributeType'
            },
            t: 'a'
          }]
      }, {
        t: 'enum',
        ln: 'SyncBehaviorDefaultType',
        vs: ['canSlip', 'locked', 'independent', 'inherit']
      }, {
        t: 'enum',
        ln: 'SyncBehaviorType',
        vs: ['canSlip', 'locked', 'independent', 'default']
      }, {
        t: 'enum',
        ln: 'FillTimingAttrsType',
        vs: ['remove', 'freeze', 'hold', 'auto', 'default', 'transition']
      }, {
        t: 'enum',
        ln: 'RestartDefaultType',
        vs: ['never', 'always', 'whenNotActive', 'inherit']
      }, {
        t: 'enum',
        ln: 'FillDefaultType',
        vs: ['remove', 'freeze', 'hold', 'auto', 'inherit', 'transition']
      }, {
        t: 'enum',
        ln: 'RestartTimingType',
        vs: ['never', 'always', 'whenNotActive', 'default']
      }],
    eis: [{
        en: 'set',
        ti: 'SMIL_2_0_Language.SetType',
        sh: {
          lp: 'set',
          ns: 'http:\/\/www.w3.org\/2001\/SMIL20\/Language'
        }
      }, {
        en: 'animate',
        ti: 'SMIL_2_0_Language.AnimateType',
        sh: {
          lp: 'animate',
          ns: 'http:\/\/www.w3.org\/2001\/SMIL20\/Language'
        }
      }, {
        en: 'animateMotion',
        ti: 'SMIL_2_0_Language.AnimateMotionType',
        sh: {
          lp: 'animateMotion',
          ns: 'http:\/\/www.w3.org\/2001\/SMIL20\/Language'
        }
      }, {
        en: 'animateColor',
        ti: 'SMIL_2_0_Language.AnimateColorType',
        sh: {
          lp: 'animateColor',
          ns: 'http:\/\/www.w3.org\/2001\/SMIL20\/Language'
        }
      }]
  };
  return {
    SMIL_2_0: SMIL_2_0
  };
};
if (true) {
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (SMIL_2_0_Module_Factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
else {
  var SMIL_2_0_Module = SMIL_2_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.SMIL_2_0 = SMIL_2_0_Module.SMIL_2_0;
  }
  else {
    var SMIL_2_0 = SMIL_2_0_Module.SMIL_2_0;
  }
}

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var SMIL_2_0_Language_Module_Factory = function () {
  var SMIL_2_0_Language = {
    n: 'SMIL_2_0_Language',
    dens: 'http:\/\/www.w3.org\/2001\/SMIL20\/Language',
    deps: ['SMIL_2_0'],
    tis: [{
        ln: 'AnimateColorType',
        tn: 'animateColorType',
        bti: 'SMIL_2_0.AnimateColorPrototype',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            mx: false,
            t: 'ae'
          }, {
            n: 'syncBehaviorDefault',
            an: {
              lp: 'syncBehaviorDefault'
            },
            t: 'a'
          }, {
            n: 'syncToleranceDefault',
            an: {
              lp: 'syncToleranceDefault'
            },
            t: 'a'
          }, {
            n: 'min',
            an: {
              lp: 'min'
            },
            t: 'a'
          }, {
            n: 'max',
            an: {
              lp: 'max'
            },
            t: 'a'
          }, {
            n: 'begin',
            an: {
              lp: 'begin'
            },
            t: 'a'
          }, {
            n: 'end',
            an: {
              lp: 'end'
            },
            t: 'a'
          }, {
            n: 'repeatDur',
            an: {
              lp: 'repeatDur'
            },
            t: 'a'
          }, {
            n: 'repeatCount',
            ti: 'Decimal',
            an: {
              lp: 'repeatCount'
            },
            t: 'a'
          }, {
            n: 'dur',
            an: {
              lp: 'dur'
            },
            t: 'a'
          }, {
            n: 'repeat',
            ti: 'NonNegativeInteger',
            an: {
              lp: 'repeat'
            },
            t: 'a'
          }, {
            n: 'fillDefault',
            an: {
              lp: 'fillDefault'
            },
            t: 'a'
          }, {
            n: 'restart',
            an: {
              lp: 'restart'
            },
            t: 'a'
          }, {
            n: 'restartDefault',
            an: {
              lp: 'restartDefault'
            },
            t: 'a'
          }, {
            n: 'syncBehavior',
            an: {
              lp: 'syncBehavior'
            },
            t: 'a'
          }, {
            n: 'syncTolerance',
            an: {
              lp: 'syncTolerance'
            },
            t: 'a'
          }, {
            n: 'fill',
            an: {
              lp: 'fill'
            },
            t: 'a'
          }, {
            n: 'skipContent',
            ti: 'Boolean',
            an: {
              lp: 'skip-content'
            },
            t: 'a'
          }, {
            n: 'alt',
            an: {
              lp: 'alt'
            },
            t: 'a'
          }, {
            n: 'longdesc',
            an: {
              lp: 'longdesc'
            },
            t: 'a'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }, {
            n: 'targetElement',
            ti: 'IDREF',
            an: {
              lp: 'targetElement'
            },
            t: 'a'
          }, {
            n: 'calcMode',
            an: {
              lp: 'calcMode'
            },
            t: 'a'
          }]
      }, {
        ln: 'SetType',
        tn: 'setType',
        bti: 'SMIL_2_0.SetPrototype',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            mx: false,
            t: 'ae'
          }, {
            n: 'targetElement',
            ti: 'IDREF',
            an: {
              lp: 'targetElement'
            },
            t: 'a'
          }, {
            n: 'skipContent',
            ti: 'Boolean',
            an: {
              lp: 'skip-content'
            },
            t: 'a'
          }, {
            n: 'alt',
            an: {
              lp: 'alt'
            },
            t: 'a'
          }, {
            n: 'longdesc',
            an: {
              lp: 'longdesc'
            },
            t: 'a'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }, {
            n: 'syncBehaviorDefault',
            an: {
              lp: 'syncBehaviorDefault'
            },
            t: 'a'
          }, {
            n: 'syncToleranceDefault',
            an: {
              lp: 'syncToleranceDefault'
            },
            t: 'a'
          }, {
            n: 'min',
            an: {
              lp: 'min'
            },
            t: 'a'
          }, {
            n: 'max',
            an: {
              lp: 'max'
            },
            t: 'a'
          }, {
            n: 'begin',
            an: {
              lp: 'begin'
            },
            t: 'a'
          }, {
            n: 'end',
            an: {
              lp: 'end'
            },
            t: 'a'
          }, {
            n: 'repeatDur',
            an: {
              lp: 'repeatDur'
            },
            t: 'a'
          }, {
            n: 'repeatCount',
            ti: 'Decimal',
            an: {
              lp: 'repeatCount'
            },
            t: 'a'
          }, {
            n: 'dur',
            an: {
              lp: 'dur'
            },
            t: 'a'
          }, {
            n: 'repeat',
            ti: 'NonNegativeInteger',
            an: {
              lp: 'repeat'
            },
            t: 'a'
          }, {
            n: 'fillDefault',
            an: {
              lp: 'fillDefault'
            },
            t: 'a'
          }, {
            n: 'restart',
            an: {
              lp: 'restart'
            },
            t: 'a'
          }, {
            n: 'restartDefault',
            an: {
              lp: 'restartDefault'
            },
            t: 'a'
          }, {
            n: 'syncBehavior',
            an: {
              lp: 'syncBehavior'
            },
            t: 'a'
          }, {
            n: 'syncTolerance',
            an: {
              lp: 'syncTolerance'
            },
            t: 'a'
          }, {
            n: 'fill',
            an: {
              lp: 'fill'
            },
            t: 'a'
          }]
      }, {
        ln: 'AnimateType',
        tn: 'animateType',
        bti: 'SMIL_2_0.AnimatePrototype',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            mx: false,
            t: 'ae'
          }, {
            n: 'skipContent',
            ti: 'Boolean',
            an: {
              lp: 'skip-content'
            },
            t: 'a'
          }, {
            n: 'calcMode',
            an: {
              lp: 'calcMode'
            },
            t: 'a'
          }, {
            n: 'alt',
            an: {
              lp: 'alt'
            },
            t: 'a'
          }, {
            n: 'longdesc',
            an: {
              lp: 'longdesc'
            },
            t: 'a'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }, {
            n: 'targetElement',
            ti: 'IDREF',
            an: {
              lp: 'targetElement'
            },
            t: 'a'
          }, {
            n: 'syncBehaviorDefault',
            an: {
              lp: 'syncBehaviorDefault'
            },
            t: 'a'
          }, {
            n: 'syncToleranceDefault',
            an: {
              lp: 'syncToleranceDefault'
            },
            t: 'a'
          }, {
            n: 'min',
            an: {
              lp: 'min'
            },
            t: 'a'
          }, {
            n: 'max',
            an: {
              lp: 'max'
            },
            t: 'a'
          }, {
            n: 'begin',
            an: {
              lp: 'begin'
            },
            t: 'a'
          }, {
            n: 'end',
            an: {
              lp: 'end'
            },
            t: 'a'
          }, {
            n: 'repeatDur',
            an: {
              lp: 'repeatDur'
            },
            t: 'a'
          }, {
            n: 'repeatCount',
            ti: 'Decimal',
            an: {
              lp: 'repeatCount'
            },
            t: 'a'
          }, {
            n: 'dur',
            an: {
              lp: 'dur'
            },
            t: 'a'
          }, {
            n: 'repeat',
            ti: 'NonNegativeInteger',
            an: {
              lp: 'repeat'
            },
            t: 'a'
          }, {
            n: 'fillDefault',
            an: {
              lp: 'fillDefault'
            },
            t: 'a'
          }, {
            n: 'restart',
            an: {
              lp: 'restart'
            },
            t: 'a'
          }, {
            n: 'restartDefault',
            an: {
              lp: 'restartDefault'
            },
            t: 'a'
          }, {
            n: 'syncBehavior',
            an: {
              lp: 'syncBehavior'
            },
            t: 'a'
          }, {
            n: 'syncTolerance',
            an: {
              lp: 'syncTolerance'
            },
            t: 'a'
          }, {
            n: 'fill',
            an: {
              lp: 'fill'
            },
            t: 'a'
          }]
      }, {
        ln: 'AnimateMotionType',
        tn: 'animateMotionType',
        bti: 'SMIL_2_0.AnimateMotionPrototype',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            mx: false,
            t: 'ae'
          }, {
            n: 'targetElement',
            ti: 'IDREF',
            an: {
              lp: 'targetElement'
            },
            t: 'a'
          }, {
            n: 'alt',
            an: {
              lp: 'alt'
            },
            t: 'a'
          }, {
            n: 'longdesc',
            an: {
              lp: 'longdesc'
            },
            t: 'a'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }, {
            n: 'skipContent',
            ti: 'Boolean',
            an: {
              lp: 'skip-content'
            },
            t: 'a'
          }, {
            n: 'calcMode',
            an: {
              lp: 'calcMode'
            },
            t: 'a'
          }, {
            n: 'syncBehaviorDefault',
            an: {
              lp: 'syncBehaviorDefault'
            },
            t: 'a'
          }, {
            n: 'syncToleranceDefault',
            an: {
              lp: 'syncToleranceDefault'
            },
            t: 'a'
          }, {
            n: 'min',
            an: {
              lp: 'min'
            },
            t: 'a'
          }, {
            n: 'max',
            an: {
              lp: 'max'
            },
            t: 'a'
          }, {
            n: 'begin',
            an: {
              lp: 'begin'
            },
            t: 'a'
          }, {
            n: 'end',
            an: {
              lp: 'end'
            },
            t: 'a'
          }, {
            n: 'repeatDur',
            an: {
              lp: 'repeatDur'
            },
            t: 'a'
          }, {
            n: 'repeatCount',
            ti: 'Decimal',
            an: {
              lp: 'repeatCount'
            },
            t: 'a'
          }, {
            n: 'dur',
            an: {
              lp: 'dur'
            },
            t: 'a'
          }, {
            n: 'repeat',
            ti: 'NonNegativeInteger',
            an: {
              lp: 'repeat'
            },
            t: 'a'
          }, {
            n: 'fillDefault',
            an: {
              lp: 'fillDefault'
            },
            t: 'a'
          }, {
            n: 'restart',
            an: {
              lp: 'restart'
            },
            t: 'a'
          }, {
            n: 'restartDefault',
            an: {
              lp: 'restartDefault'
            },
            t: 'a'
          }, {
            n: 'syncBehavior',
            an: {
              lp: 'syncBehavior'
            },
            t: 'a'
          }, {
            n: 'syncTolerance',
            an: {
              lp: 'syncTolerance'
            },
            t: 'a'
          }, {
            n: 'fill',
            an: {
              lp: 'fill'
            },
            t: 'a'
          }]
      }],
    eis: [{
        en: 'animate',
        ti: '.AnimateType'
      }, {
        en: 'animateMotion',
        ti: '.AnimateMotionType'
      }, {
        en: 'animateColor',
        ti: '.AnimateColorType'
      }, {
        en: 'set',
        ti: '.SetType'
      }]
  };
  return {
    SMIL_2_0_Language: SMIL_2_0_Language
  };
};
if (true) {
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (SMIL_2_0_Language_Module_Factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
else {
  var SMIL_2_0_Language_Module = SMIL_2_0_Language_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.SMIL_2_0_Language = SMIL_2_0_Language_Module.SMIL_2_0_Language;
  }
  else {
    var SMIL_2_0_Language = SMIL_2_0_Language_Module.SMIL_2_0_Language;
  }
}

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var WFS_1_1_0_Module_Factory = function () {
  var WFS_1_1_0 = {
    n: 'WFS_1_1_0',
    dens: 'http:\/\/www.opengis.net\/wfs',
    deps: ['GML_3_1_1', 'Filter_1_1_0', 'OWS_1_0_0'],
    tis: [{
        ln: 'InsertedFeatureType',
        ps: [{
            n: 'featureId',
            rq: true,
            col: true,
            en: {
              lp: 'FeatureId',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_1_0.FeatureIdType'
          }, {
            n: 'handle',
            an: {
              lp: 'handle'
            },
            t: 'a'
          }]
      }, {
        ln: 'ActionType',
        ps: [{
            n: 'message',
            en: 'Message'
          }, {
            n: 'locator',
            rq: true,
            an: {
              lp: 'locator'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'code'
            },
            t: 'a'
          }]
      }, {
        ln: 'OutputFormatListType',
        ps: [{
            n: 'format',
            rq: true,
            col: true,
            en: 'Format'
          }]
      }, {
        ln: 'DeleteElementType',
        ps: [{
            n: 'filter',
            rq: true,
            en: {
              lp: 'Filter',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_1_0.FilterType'
          }, {
            n: 'handle',
            an: {
              lp: 'handle'
            },
            t: 'a'
          }, {
            n: 'typeName',
            rq: true,
            ti: 'QName',
            an: {
              lp: 'typeName'
            },
            t: 'a'
          }]
      }, {
        ln: 'BaseRequestType',
        ps: [{
            n: 'service',
            an: {
              lp: 'service'
            },
            t: 'a'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'handle',
            an: {
              lp: 'handle'
            },
            t: 'a'
          }]
      }, {
        ln: 'TransactionResultsType',
        ps: [{
            n: 'action',
            mno: 0,
            col: true,
            en: 'Action',
            ti: '.ActionType'
          }]
      }, {
        ln: 'TransactionType',
        bti: '.BaseRequestType',
        ps: [{
            n: 'lockId',
            en: 'LockId'
          }, {
            n: 'insertOrUpdateOrDelete',
            mno: 0,
            col: true,
            etis: [{
                en: 'Insert',
                ti: '.InsertElementType'
              }, {
                en: 'Update',
                ti: '.UpdateElementType'
              }, {
                en: 'Delete',
                ti: '.DeleteElementType'
              }, {
                en: 'Native',
                ti: '.NativeType'
              }],
            t: 'es'
          }, {
            n: 'releaseAction',
            an: {
              lp: 'releaseAction'
            },
            t: 'a'
          }]
      }, {
        ln: 'MetadataURLType',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'type',
            rq: true,
            an: {
              lp: 'type'
            },
            t: 'a'
          }, {
            n: 'format',
            rq: true,
            an: {
              lp: 'format'
            },
            t: 'a'
          }]
      }, {
        ln: 'OperationsType',
        ps: [{
            n: 'operation',
            rq: true,
            col: true,
            en: 'Operation'
          }]
      }, {
        ln: 'GMLObjectTypeListType',
        ps: [{
            n: 'gmlObjectType',
            rq: true,
            col: true,
            en: 'GMLObjectType',
            ti: '.GMLObjectTypeType'
          }]
      }, {
        ln: 'InsertElementType',
        ps: [{
            n: 'feature',
            rq: true,
            col: true,
            mx: false,
            dom: false,
            en: {
              lp: '_Feature',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.AbstractFeatureType',
            t: 'er'
          }, {
            n: 'idgen',
            an: {
              lp: 'idgen'
            },
            t: 'a'
          }, {
            n: 'handle',
            an: {
              lp: 'handle'
            },
            t: 'a'
          }, {
            n: 'inputFormat',
            an: {
              lp: 'inputFormat'
            },
            t: 'a'
          }, {
            n: 'srsName',
            an: {
              lp: 'srsName'
            },
            t: 'a'
          }]
      }, {
        ln: 'InsertResultsType',
        ps: [{
            n: 'feature',
            rq: true,
            col: true,
            en: 'Feature',
            ti: '.InsertedFeatureType'
          }]
      }, {
        ln: 'FeatureTypeListType',
        ps: [{
            n: 'operations',
            en: 'Operations',
            ti: '.OperationsType'
          }, {
            n: 'featureType',
            rq: true,
            col: true,
            en: 'FeatureType',
            ti: '.FeatureTypeType'
          }]
      }, {
        ln: 'GetFeatureType',
        bti: '.BaseRequestType',
        ps: [{
            n: 'query',
            rq: true,
            col: true,
            en: 'Query',
            ti: '.QueryType'
          }, {
            n: 'resultType',
            an: {
              lp: 'resultType'
            },
            t: 'a'
          }, {
            n: 'outputFormat',
            an: {
              lp: 'outputFormat'
            },
            t: 'a'
          }, {
            n: 'maxFeatures',
            ti: 'PositiveInteger',
            an: {
              lp: 'maxFeatures'
            },
            t: 'a'
          }, {
            n: 'traverseXlinkDepth',
            an: {
              lp: 'traverseXlinkDepth'
            },
            t: 'a'
          }, {
            n: 'traverseXlinkExpiry',
            ti: 'PositiveInteger',
            an: {
              lp: 'traverseXlinkExpiry'
            },
            t: 'a'
          }]
      }, {
        ln: 'FeaturesNotLockedType',
        ps: [{
            n: 'featureId',
            rq: true,
            col: true,
            en: {
              lp: 'FeatureId',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_1_0.FeatureIdType'
          }]
      }, {
        ln: 'UpdateElementType',
        ps: [{
            n: 'property',
            rq: true,
            col: true,
            en: 'Property',
            ti: '.PropertyType'
          }, {
            n: 'filter',
            en: {
              lp: 'Filter',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_1_0.FilterType'
          }, {
            n: 'handle',
            an: {
              lp: 'handle'
            },
            t: 'a'
          }, {
            n: 'typeName',
            rq: true,
            ti: 'QName',
            an: {
              lp: 'typeName'
            },
            t: 'a'
          }, {
            n: 'inputFormat',
            an: {
              lp: 'inputFormat'
            },
            t: 'a'
          }, {
            n: 'srsName',
            an: {
              lp: 'srsName'
            },
            t: 'a'
          }]
      }, {
        ln: 'WFSCapabilitiesType',
        tn: 'WFS_CapabilitiesType',
        bti: 'OWS_1_0_0.CapabilitiesBaseType',
        ps: [{
            n: 'featureTypeList',
            en: 'FeatureTypeList',
            ti: '.FeatureTypeListType'
          }, {
            n: 'servesGMLObjectTypeList',
            en: 'ServesGMLObjectTypeList',
            ti: '.GMLObjectTypeListType'
          }, {
            n: 'supportsGMLObjectTypeList',
            en: 'SupportsGMLObjectTypeList',
            ti: '.GMLObjectTypeListType'
          }, {
            n: 'filterCapabilities',
            rq: true,
            en: {
              lp: 'Filter_Capabilities',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_1_0.FilterCapabilities'
          }]
      }, {
        ln: 'PropertyType',
        ps: [{
            n: 'name',
            rq: true,
            en: 'Name',
            ti: 'QName'
          }, {
            n: 'value',
            en: 'Value',
            ti: 'AnyType'
          }]
      }, {
        ln: 'LockType',
        ps: [{
            n: 'filter',
            en: {
              lp: 'Filter',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_1_0.FilterType'
          }, {
            n: 'handle',
            an: {
              lp: 'handle'
            },
            t: 'a'
          }, {
            n: 'typeName',
            rq: true,
            ti: 'QName',
            an: {
              lp: 'typeName'
            },
            t: 'a'
          }]
      }, {
        ln: 'TransactionSummaryType',
        ps: [{
            n: 'totalInserted',
            ti: 'NonNegativeInteger'
          }, {
            n: 'totalUpdated',
            ti: 'NonNegativeInteger'
          }, {
            n: 'totalDeleted',
            ti: 'NonNegativeInteger'
          }]
      }, {
        ln: 'FeaturesLockedType',
        ps: [{
            n: 'featureId',
            rq: true,
            col: true,
            en: {
              lp: 'FeatureId',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_1_0.FeatureIdType'
          }]
      }, {
        ln: 'LockFeatureType',
        bti: '.BaseRequestType',
        ps: [{
            n: 'lock',
            rq: true,
            col: true,
            en: 'Lock',
            ti: '.LockType'
          }, {
            n: 'expiry',
            ti: 'PositiveInteger',
            an: {
              lp: 'expiry'
            },
            t: 'a'
          }, {
            n: 'lockAction',
            an: {
              lp: 'lockAction'
            },
            t: 'a'
          }]
      }, {
        ln: 'QueryType',
        ps: [{
            n: 'propertyNameOrXlinkPropertyNameOrFunction',
            mno: 0,
            col: true,
            etis: [{
                en: 'PropertyName'
              }, {
                en: 'XlinkPropertyName',
                ti: '.XlinkPropertyName'
              }, {
                en: {
                  lp: 'Function',
                  ns: 'http:\/\/www.opengis.net\/ogc'
                },
                ti: 'Filter_1_1_0.FunctionType'
              }],
            t: 'es'
          }, {
            n: 'filter',
            en: {
              lp: 'Filter',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_1_0.FilterType'
          }, {
            n: 'sortBy',
            en: {
              lp: 'SortBy',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_1_0.SortByType'
          }, {
            n: 'handle',
            an: {
              lp: 'handle'
            },
            t: 'a'
          }, {
            n: 'typeName',
            rq: true,
            ti: {
              t: 'l',
              bti: 'QName'
            },
            an: {
              lp: 'typeName'
            },
            t: 'a'
          }, {
            n: 'featureVersion',
            an: {
              lp: 'featureVersion'
            },
            t: 'a'
          }, {
            n: 'srsName',
            an: {
              lp: 'srsName'
            },
            t: 'a'
          }]
      }, {
        ln: 'XlinkPropertyName',
        tn: null,
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'traverseXlinkDepth',
            rq: true,
            an: {
              lp: 'traverseXlinkDepth'
            },
            t: 'a'
          }, {
            n: 'traverseXlinkExpiry',
            ti: 'PositiveInteger',
            an: {
              lp: 'traverseXlinkExpiry'
            },
            t: 'a'
          }]
      }, {
        ln: 'GetFeatureWithLockType',
        bti: '.BaseRequestType',
        ps: [{
            n: 'query',
            rq: true,
            col: true,
            en: 'Query',
            ti: '.QueryType'
          }, {
            n: 'expiry',
            ti: 'PositiveInteger',
            an: {
              lp: 'expiry'
            },
            t: 'a'
          }, {
            n: 'resultType',
            an: {
              lp: 'resultType'
            },
            t: 'a'
          }, {
            n: 'outputFormat',
            an: {
              lp: 'outputFormat'
            },
            t: 'a'
          }, {
            n: 'maxFeatures',
            ti: 'PositiveInteger',
            an: {
              lp: 'maxFeatures'
            },
            t: 'a'
          }, {
            n: 'traverseXlinkDepth',
            an: {
              lp: 'traverseXlinkDepth'
            },
            t: 'a'
          }, {
            n: 'traverseXlinkExpiry',
            ti: 'PositiveInteger',
            an: {
              lp: 'traverseXlinkExpiry'
            },
            t: 'a'
          }]
      }, {
        ln: 'GetCapabilitiesType',
        bti: 'OWS_1_0_0.GetCapabilitiesType',
        ps: [{
            n: 'service',
            an: {
              lp: 'service'
            },
            t: 'a'
          }]
      }, {
        ln: 'NativeType',
        ps: [{
            n: 'vendorId',
            rq: true,
            an: {
              lp: 'vendorId'
            },
            t: 'a'
          }, {
            n: 'safeToIgnore',
            rq: true,
            ti: 'Boolean',
            an: {
              lp: 'safeToIgnore'
            },
            t: 'a'
          }]
      }, {
        ln: 'LockFeatureResponseType',
        ps: [{
            n: 'lockId',
            rq: true,
            en: 'LockId'
          }, {
            n: 'featuresLocked',
            en: 'FeaturesLocked',
            ti: '.FeaturesLockedType'
          }, {
            n: 'featuresNotLocked',
            en: 'FeaturesNotLocked',
            ti: '.FeaturesNotLockedType'
          }]
      }, {
        ln: 'TransactionResponseType',
        ps: [{
            n: 'transactionSummary',
            rq: true,
            en: 'TransactionSummary',
            ti: '.TransactionSummaryType'
          }, {
            n: 'transactionResults',
            en: 'TransactionResults',
            ti: '.TransactionResultsType'
          }, {
            n: 'insertResults',
            en: 'InsertResults',
            ti: '.InsertResultsType'
          }, {
            n: 'version',
            rq: true,
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'FeatureTypeType.NoSRS',
        tn: null
      }, {
        ln: 'FeatureTypeType',
        ps: [{
            n: 'name',
            rq: true,
            en: 'Name',
            ti: 'QName'
          }, {
            n: 'title',
            rq: true,
            en: 'Title'
          }, {
            n: '_abstract',
            en: 'Abstract'
          }, {
            n: 'keywords',
            mno: 0,
            col: true,
            en: {
              lp: 'Keywords',
              ns: 'http:\/\/www.opengis.net\/ows'
            },
            ti: 'OWS_1_0_0.KeywordsType'
          }, {
            n: 'defaultSRS',
            rq: true,
            en: 'DefaultSRS'
          }, {
            n: 'otherSRS',
            mno: 0,
            col: true,
            en: 'OtherSRS'
          }, {
            n: 'noSRS',
            rq: true,
            en: 'NoSRS',
            ti: '.FeatureTypeType.NoSRS'
          }, {
            n: 'operations',
            en: 'Operations',
            ti: '.OperationsType'
          }, {
            n: 'outputFormats',
            en: 'OutputFormats',
            ti: '.OutputFormatListType'
          }, {
            n: 'wgs84BoundingBox',
            mno: 0,
            col: true,
            en: {
              lp: 'WGS84BoundingBox',
              ns: 'http:\/\/www.opengis.net\/ows'
            },
            ti: 'OWS_1_0_0.WGS84BoundingBoxType'
          }, {
            n: 'metadataURL',
            mno: 0,
            col: true,
            en: 'MetadataURL',
            ti: '.MetadataURLType'
          }]
      }, {
        ln: 'GetGmlObjectType',
        bti: '.BaseRequestType',
        ps: [{
            n: 'gmlObjectId',
            rq: true,
            en: {
              lp: 'GmlObjectId',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_1_0.GmlObjectIdType'
          }, {
            n: 'outputFormat',
            an: {
              lp: 'outputFormat'
            },
            t: 'a'
          }, {
            n: 'traverseXlinkDepth',
            rq: true,
            an: {
              lp: 'traverseXlinkDepth'
            },
            t: 'a'
          }, {
            n: 'traverseXlinkExpiry',
            ti: 'PositiveInteger',
            an: {
              lp: 'traverseXlinkExpiry'
            },
            t: 'a'
          }]
      }, {
        ln: 'FeatureCollectionType',
        bti: 'GML_3_1_1.AbstractFeatureCollectionType',
        ps: [{
            n: 'lockId',
            an: {
              lp: 'lockId'
            },
            t: 'a'
          }, {
            n: 'timeStamp',
            ti: 'DateTime',
            an: {
              lp: 'timeStamp'
            },
            t: 'a'
          }, {
            n: 'numberOfFeatures',
            ti: 'NonNegativeInteger',
            an: {
              lp: 'numberOfFeatures'
            },
            t: 'a'
          }]
      }, {
        ln: 'GMLObjectTypeType',
        ps: [{
            n: 'name',
            rq: true,
            en: 'Name',
            ti: 'QName'
          }, {
            n: 'title',
            en: 'Title'
          }, {
            n: '_abstract',
            en: 'Abstract'
          }, {
            n: 'keywords',
            mno: 0,
            col: true,
            en: {
              lp: 'Keywords',
              ns: 'http:\/\/www.opengis.net\/ows'
            },
            ti: 'OWS_1_0_0.KeywordsType'
          }, {
            n: 'outputFormats',
            en: 'OutputFormats',
            ti: '.OutputFormatListType'
          }]
      }, {
        ln: 'DescribeFeatureTypeType',
        bti: '.BaseRequestType',
        ps: [{
            n: 'typeName',
            mno: 0,
            col: true,
            en: 'TypeName',
            ti: 'QName'
          }, {
            n: 'outputFormat',
            an: {
              lp: 'outputFormat'
            },
            t: 'a'
          }]
      }, {
        t: 'enum',
        ln: 'ResultTypeType',
        vs: ['results', 'hits']
      }, {
        t: 'enum',
        ln: 'IdentifierGenerationOptionType',
        vs: ['UseExisting', 'ReplaceDuplicate', 'GenerateNew']
      }, {
        t: 'enum',
        ln: 'OperationType',
        vs: ['Insert', 'Update', 'Delete', 'Query', 'Lock', 'GetGmlObject']
      }, {
        t: 'enum',
        ln: 'AllSomeType',
        vs: ['ALL', 'SOME']
      }],
    eis: [{
        en: 'Update',
        ti: '.UpdateElementType'
      }, {
        en: 'XlinkPropertyName',
        ti: '.XlinkPropertyName'
      }, {
        en: 'TransactionResponse',
        ti: '.TransactionResponseType'
      }, {
        en: 'Native',
        ti: '.NativeType'
      }, {
        en: 'SupportsGMLObjectTypeList',
        ti: '.GMLObjectTypeListType'
      }, {
        en: 'WFS_Capabilities',
        ti: '.WFSCapabilitiesType'
      }, {
        en: 'Insert',
        ti: '.InsertElementType'
      }, {
        en: 'DescribeFeatureType',
        ti: '.DescribeFeatureTypeType'
      }, {
        en: 'GetFeatureWithLock',
        ti: '.GetFeatureWithLockType'
      }, {
        en: 'FeatureCollection',
        ti: '.FeatureCollectionType',
        sh: {
          lp: '_FeatureCollection',
          ns: 'http:\/\/www.opengis.net\/gml'
        }
      }, {
        en: 'GetFeature',
        ti: '.GetFeatureType'
      }, {
        en: 'GetGmlObject',
        ti: '.GetGmlObjectType'
      }, {
        en: 'LockId'
      }, {
        en: 'LockFeatureResponse',
        ti: '.LockFeatureResponseType'
      }, {
        en: 'Query',
        ti: '.QueryType'
      }, {
        en: 'Property',
        ti: '.PropertyType'
      }, {
        en: 'LockFeature',
        ti: '.LockFeatureType'
      }, {
        en: 'GetCapabilities',
        ti: '.GetCapabilitiesType'
      }, {
        en: 'Transaction',
        ti: '.TransactionType'
      }, {
        en: 'PropertyName'
      }, {
        en: 'Delete',
        ti: '.DeleteElementType'
      }, {
        en: 'ServesGMLObjectTypeList',
        ti: '.GMLObjectTypeListType'
      }, {
        en: 'FeatureTypeList',
        ti: '.FeatureTypeListType'
      }]
  };
  return {
    WFS_1_1_0: WFS_1_1_0
  };
};
if (true) {
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (WFS_1_1_0_Module_Factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
else {
  var WFS_1_1_0_Module = WFS_1_1_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.WFS_1_1_0 = WFS_1_1_0_Module.WFS_1_1_0;
  }
  else {
    var WFS_1_1_0 = WFS_1_1_0_Module.WFS_1_1_0;
  }
}

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var required = __webpack_require__(50)
  , qs = __webpack_require__(45)
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @api public
 */
function lolcation(loc) {
  loc = loc || global.location || {};

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new URL(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new URL(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @api private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @api private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} location Location defaults for relative paths.
 * @param {Boolean|Function} parser Parser for the query string.
 * @api public
 */
function URL(address, location, parser) {
  if (!(this instanceof URL)) {
    return new URL(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[2] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];
    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL}
 * @api public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
      url.pathname = value.length && value.charAt(0) !== '/' ? '/' + value : value;

      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String}
 * @api public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

URL.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
URL.extractProtocol = extractProtocol;
URL.location = lolcation;
URL.qs = qs;

module.exports = URL;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var XSD_1_0_Module_Factory = function () {
  var XSD_1_0 = {
    n: 'XSD_1_0',
    dens: 'http:\/\/www.w3.org\/2001\/XMLSchema',
    tis: [{
        ln: 'Element',
        tn: 'element',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'simpleType',
            rq: true,
            ti: '.LocalSimpleType'
          }, {
            n: 'complexType',
            rq: true,
            ti: '.LocalComplexType'
          }, {
            n: 'unique',
            col: true,
            ti: '.Keybase'
          }, {
            n: 'keyref',
            col: true,
            ti: '.Keyref'
          }, {
            n: 'key',
            col: true,
            ti: '.Keybase'
          }, {
            n: 'type',
            ti: 'QName',
            an: {
              lp: 'type'
            },
            t: 'a'
          }, {
            n: 'substitutionGroup',
            ti: 'QName',
            an: {
              lp: 'substitutionGroup'
            },
            t: 'a'
          }, {
            n: '_default',
            an: {
              lp: 'default'
            },
            t: 'a'
          }, {
            n: 'fixed',
            an: {
              lp: 'fixed'
            },
            t: 'a'
          }, {
            n: 'nillable',
            ti: 'Boolean',
            an: {
              lp: 'nillable'
            },
            t: 'a'
          }, {
            n: '_abstract',
            ti: 'Boolean',
            an: {
              lp: 'abstract'
            },
            t: 'a'
          }, {
            n: '_final',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'final'
            },
            t: 'a'
          }, {
            n: 'block',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'block'
            },
            t: 'a'
          }, {
            n: 'form',
            ti: 'NMToken',
            an: {
              lp: 'form'
            },
            t: 'a'
          }, {
            n: 'minOccurs',
            ti: 'NonNegativeInteger',
            an: {
              lp: 'minOccurs'
            },
            t: 'a'
          }, {
            n: 'maxOccurs',
            an: {
              lp: 'maxOccurs'
            },
            t: 'a'
          }, {
            n: 'name',
            ti: 'NCName',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'ref',
            ti: 'QName',
            an: {
              lp: 'ref'
            },
            t: 'a'
          }]
      }, {
        ln: 'NumFacet',
        tn: 'numFacet',
        bti: '.Facet'
      }, {
        ln: 'NoFixedFacet',
        tn: 'noFixedFacet',
        bti: '.Facet'
      }, {
        ln: 'Facet',
        tn: 'facet',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'value',
            rq: true,
            ti: 'AnySimpleType',
            an: {
              lp: 'value'
            },
            t: 'a'
          }, {
            n: 'fixed',
            ti: 'Boolean',
            an: {
              lp: 'fixed'
            },
            t: 'a'
          }]
      }, {
        ln: 'Wildcard',
        tn: 'wildcard',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'namespace',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'namespace'
            },
            t: 'a'
          }, {
            n: 'processContents',
            an: {
              lp: 'processContents'
            },
            t: 'a'
          }]
      }, {
        ln: 'Attribute',
        tn: 'attribute',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'simpleType',
            ti: '.LocalSimpleType'
          }, {
            n: 'type',
            ti: 'QName',
            an: {
              lp: 'type'
            },
            t: 'a'
          }, {
            n: 'use',
            an: {
              lp: 'use'
            },
            t: 'a'
          }, {
            n: '_default',
            an: {
              lp: 'default'
            },
            t: 'a'
          }, {
            n: 'fixed',
            an: {
              lp: 'fixed'
            },
            t: 'a'
          }, {
            n: 'form',
            ti: 'NMToken',
            an: {
              lp: 'form'
            },
            t: 'a'
          }, {
            n: 'name',
            ti: 'NCName',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'ref',
            ti: 'QName',
            an: {
              lp: 'ref'
            },
            t: 'a'
          }]
      }, {
        ln: 'NarrowMaxMin',
        tn: 'narrowMaxMin',
        bti: '.LocalElement'
      }, {
        ln: 'Pattern',
        tn: null,
        bti: '.NoFixedFacet'
      }, {
        ln: 'LocalComplexType',
        tn: 'localComplexType',
        bti: '.ComplexType'
      }, {
        ln: 'Schema',
        tn: null,
        bti: '.OpenAttrs',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'include',
            mno: 0,
            col: true,
            ti: '.Include'
          }, {
            n: '_import',
            mno: 0,
            col: true,
            en: 'import',
            ti: '.Import'
          }, {
            n: 'redefine',
            mno: 0,
            col: true,
            ti: '.Redefine'
          }, {
            n: 'simpleType',
            mno: 0,
            col: true,
            ti: '.TopLevelSimpleType'
          }, {
            n: 'complexType',
            mno: 0,
            col: true,
            ti: '.TopLevelComplexType'
          }, {
            n: 'group',
            mno: 0,
            col: true,
            ti: '.NamedGroup'
          }, {
            n: 'attributeGroup',
            mno: 0,
            col: true,
            ti: '.NamedAttributeGroup'
          }, {
            n: 'element',
            mno: 0,
            col: true,
            ti: '.TopLevelElement'
          }, {
            n: 'attribute',
            mno: 0,
            col: true,
            ti: '.TopLevelAttribute'
          }, {
            n: 'notation',
            mno: 0,
            col: true,
            ti: '.Notation'
          }, {
            n: 'annotation',
            mno: 0,
            col: true,
            ti: '.Annotation'
          }, {
            n: 'targetNamespace',
            an: {
              lp: 'targetNamespace'
            },
            t: 'a'
          }, {
            n: 'version',
            ti: 'Token',
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'finalDefault',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'finalDefault'
            },
            t: 'a'
          }, {
            n: 'blockDefault',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'blockDefault'
            },
            t: 'a'
          }, {
            n: 'attributeFormDefault',
            ti: 'NMToken',
            an: {
              lp: 'attributeFormDefault'
            },
            t: 'a'
          }, {
            n: 'elementFormDefault',
            ti: 'NMToken',
            an: {
              lp: 'elementFormDefault'
            },
            t: 'a'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'Selector',
        tn: null,
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'xpath',
            rq: true,
            an: {
              lp: 'xpath'
            },
            t: 'a'
          }]
      }, {
        ln: 'LocalSimpleType',
        tn: 'localSimpleType',
        bti: '.SimpleType'
      }, {
        ln: 'TotalDigits',
        tn: null,
        bti: '.NumFacet'
      }, {
        ln: 'ExtensionType',
        tn: 'extensionType',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'group',
            rq: true,
            ti: '.GroupRef'
          }, {
            n: 'all',
            rq: true,
            ti: '.All'
          }, {
            n: 'choice',
            rq: true,
            ti: '.ExplicitGroup'
          }, {
            n: 'sequence',
            rq: true,
            ti: '.ExplicitGroup'
          }, {
            n: 'attribute',
            mno: 0,
            col: true,
            ti: '.Attribute'
          }, {
            n: 'attributeGroup',
            mno: 0,
            col: true,
            ti: '.AttributeGroupRef'
          }, {
            n: 'anyAttribute',
            ti: '.Wildcard'
          }, {
            n: 'base',
            rq: true,
            ti: 'QName',
            an: {
              lp: 'base'
            },
            t: 'a'
          }]
      }, {
        ln: 'Documentation',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            col: true,
            t: 'ae'
          }, {
            n: 'source',
            an: {
              lp: 'source'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'Appinfo',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            col: true,
            t: 'ae'
          }, {
            n: 'source',
            an: {
              lp: 'source'
            },
            t: 'a'
          }]
      }, {
        ln: 'Annotation',
        tn: null,
        bti: '.OpenAttrs',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'appinfo',
            mno: 0,
            col: true,
            ti: '.Appinfo'
          }, {
            n: 'documentation',
            mno: 0,
            col: true,
            ti: '.Documentation'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }]
      }, {
        ln: 'GroupRef',
        tn: 'groupRef',
        bti: '.RealGroup'
      }, {
        ln: 'Union',
        tn: null,
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'simpleType',
            mno: 0,
            col: true,
            ti: '.LocalSimpleType'
          }, {
            n: 'memberTypes',
            ti: {
              t: 'l',
              bti: 'QName'
            },
            an: {
              lp: 'memberTypes'
            },
            t: 'a'
          }]
      }, {
        ln: 'OpenAttrs',
        tn: 'openAttrs',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }]
      }, {
        ln: 'RestrictionType',
        tn: 'restrictionType',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'group',
            rq: true,
            ti: '.GroupRef'
          }, {
            n: 'all',
            rq: true,
            ti: '.All'
          }, {
            n: 'choice',
            rq: true,
            ti: '.ExplicitGroup'
          }, {
            n: 'sequence',
            rq: true,
            ti: '.ExplicitGroup'
          }, {
            n: 'simpleType',
            ti: '.LocalSimpleType'
          }, {
            n: 'minInclusive',
            col: true,
            ti: '.Facet'
          }, {
            n: 'totalDigits',
            col: true,
            ti: '.TotalDigits'
          }, {
            n: 'minLength',
            col: true,
            ti: '.NumFacet'
          }, {
            n: 'maxLength',
            col: true,
            ti: '.NumFacet'
          }, {
            n: 'maxInclusive',
            col: true,
            ti: '.Facet'
          }, {
            n: 'pattern',
            col: true,
            ti: '.Pattern'
          }, {
            n: 'enumeration',
            col: true,
            ti: '.NoFixedFacet'
          }, {
            n: 'minExclusive',
            col: true,
            ti: '.Facet'
          }, {
            n: 'fractionDigits',
            col: true,
            ti: '.NumFacet'
          }, {
            n: 'length',
            col: true,
            ti: '.NumFacet'
          }, {
            n: 'maxExclusive',
            col: true,
            ti: '.Facet'
          }, {
            n: 'whiteSpace',
            col: true,
            ti: '.WhiteSpace'
          }, {
            n: 'attribute',
            mno: 0,
            col: true,
            ti: '.Attribute'
          }, {
            n: 'attributeGroup',
            mno: 0,
            col: true,
            ti: '.AttributeGroupRef'
          }, {
            n: 'anyAttribute',
            ti: '.Wildcard'
          }, {
            n: 'base',
            rq: true,
            ti: 'QName',
            an: {
              lp: 'base'
            },
            t: 'a'
          }]
      }, {
        ln: 'SimpleExtensionType',
        tn: 'simpleExtensionType',
        bti: '.ExtensionType'
      }, {
        ln: 'Keyref',
        tn: null,
        bti: '.Keybase',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'refer',
            rq: true,
            ti: 'QName',
            an: {
              lp: 'refer'
            },
            t: 'a'
          }]
      }, {
        ln: 'ComplexRestrictionType',
        tn: 'complexRestrictionType',
        bti: '.RestrictionType'
      }, {
        ln: 'All',
        tn: 'all',
        bti: '.ExplicitGroup'
      }, {
        ln: 'Group',
        tn: 'group',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'sequence',
            col: true,
            ti: '.ExplicitGroup'
          }, {
            n: 'all',
            col: true,
            ti: '.All'
          }, {
            n: 'choice',
            col: true,
            ti: '.ExplicitGroup'
          }, {
            n: 'any',
            col: true,
            ti: '.Any'
          }, {
            n: 'element',
            col: true,
            ti: '.LocalElement'
          }, {
            n: 'group',
            col: true,
            ti: '.GroupRef'
          }, {
            n: 'minOccurs',
            ti: 'NonNegativeInteger',
            an: {
              lp: 'minOccurs'
            },
            t: 'a'
          }, {
            n: 'maxOccurs',
            an: {
              lp: 'maxOccurs'
            },
            t: 'a'
          }, {
            n: 'name',
            ti: 'NCName',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'ref',
            ti: 'QName',
            an: {
              lp: 'ref'
            },
            t: 'a'
          }]
      }, {
        ln: 'List',
        tn: null,
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'simpleType',
            ti: '.LocalSimpleType'
          }, {
            n: 'itemType',
            ti: 'QName',
            an: {
              lp: 'itemType'
            },
            t: 'a'
          }]
      }, {
        ln: 'Any',
        tn: null,
        bti: '.Wildcard',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'minOccurs',
            ti: 'NonNegativeInteger',
            an: {
              lp: 'minOccurs'
            },
            t: 'a'
          }, {
            n: 'maxOccurs',
            an: {
              lp: 'maxOccurs'
            },
            t: 'a'
          }]
      }, {
        ln: 'TopLevelSimpleType',
        tn: 'topLevelSimpleType',
        bti: '.SimpleType'
      }, {
        ln: 'Include',
        tn: null,
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'schemaLocation',
            rq: true,
            an: {
              lp: 'schemaLocation'
            },
            t: 'a'
          }]
      }, {
        ln: 'TopLevelComplexType',
        tn: 'topLevelComplexType',
        bti: '.ComplexType'
      }, {
        ln: 'SimpleExplicitGroup',
        tn: 'simpleExplicitGroup',
        bti: '.ExplicitGroup'
      }, {
        ln: 'ComplexType',
        tn: 'complexType',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'simpleContent',
            rq: true,
            ti: '.SimpleContent'
          }, {
            n: 'complexContent',
            rq: true,
            ti: '.ComplexContent'
          }, {
            n: 'group',
            rq: true,
            ti: '.GroupRef'
          }, {
            n: 'all',
            rq: true,
            ti: '.All'
          }, {
            n: 'choice',
            rq: true,
            ti: '.ExplicitGroup'
          }, {
            n: 'sequence',
            rq: true,
            ti: '.ExplicitGroup'
          }, {
            n: 'attribute',
            mno: 0,
            col: true,
            ti: '.Attribute'
          }, {
            n: 'attributeGroup',
            mno: 0,
            col: true,
            ti: '.AttributeGroupRef'
          }, {
            n: 'anyAttribute',
            ti: '.Wildcard'
          }, {
            n: 'name',
            ti: 'NCName',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'mixed',
            ti: 'Boolean',
            an: {
              lp: 'mixed'
            },
            t: 'a'
          }, {
            n: '_abstract',
            ti: 'Boolean',
            an: {
              lp: 'abstract'
            },
            t: 'a'
          }, {
            n: '_final',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'final'
            },
            t: 'a'
          }, {
            n: 'block',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'block'
            },
            t: 'a'
          }]
      }, {
        ln: 'NamedGroup',
        tn: 'namedGroup',
        bti: '.RealGroup'
      }, {
        ln: 'NamedAttributeGroup',
        tn: 'namedAttributeGroup',
        bti: '.AttributeGroup'
      }, {
        ln: 'TopLevelAttribute',
        tn: 'topLevelAttribute',
        bti: '.Attribute'
      }, {
        ln: 'SimpleContent',
        tn: null,
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'restriction',
            rq: true,
            ti: '.SimpleRestrictionType'
          }, {
            n: 'extension',
            rq: true,
            ti: '.SimpleExtensionType'
          }]
      }, {
        ln: 'Import',
        tn: null,
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'namespace',
            an: {
              lp: 'namespace'
            },
            t: 'a'
          }, {
            n: 'schemaLocation',
            an: {
              lp: 'schemaLocation'
            },
            t: 'a'
          }]
      }, {
        ln: 'Keybase',
        tn: 'keybase',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'selector',
            rq: true,
            ti: '.Selector'
          }, {
            n: 'field',
            rq: true,
            col: true,
            ti: '.Field'
          }, {
            n: 'name',
            rq: true,
            ti: 'NCName',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'Redefine',
        tn: null,
        bti: '.OpenAttrs',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'annotation',
            mno: 0,
            col: true,
            ti: '.Annotation'
          }, {
            n: 'simpleType',
            mno: 0,
            col: true,
            ti: '.TopLevelSimpleType'
          }, {
            n: 'complexType',
            mno: 0,
            col: true,
            ti: '.TopLevelComplexType'
          }, {
            n: 'group',
            mno: 0,
            col: true,
            ti: '.NamedGroup'
          }, {
            n: 'attributeGroup',
            mno: 0,
            col: true,
            ti: '.NamedAttributeGroup'
          }, {
            n: 'schemaLocation',
            rq: true,
            an: {
              lp: 'schemaLocation'
            },
            t: 'a'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }]
      }, {
        ln: 'ExplicitGroup',
        tn: 'explicitGroup',
        bti: '.Group'
      }, {
        ln: 'SimpleType',
        tn: 'simpleType',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'restriction',
            rq: true,
            ti: '.Restriction'
          }, {
            n: 'list',
            rq: true,
            ti: '.List'
          }, {
            n: 'union',
            rq: true,
            ti: '.Union'
          }, {
            n: '_final',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'final'
            },
            t: 'a'
          }, {
            n: 'name',
            ti: 'NCName',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'RealGroup',
        tn: 'realGroup',
        bti: '.Group'
      }, {
        ln: 'WhiteSpace',
        tn: null,
        bti: '.Facet'
      }, {
        ln: 'Field',
        tn: null,
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'xpath',
            rq: true,
            an: {
              lp: 'xpath'
            },
            t: 'a'
          }]
      }, {
        ln: 'AttributeGroupRef',
        tn: 'attributeGroupRef',
        bti: '.AttributeGroup'
      }, {
        ln: 'AttributeGroup',
        tn: 'attributeGroup',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'attribute',
            mno: 0,
            col: true,
            ti: '.Attribute'
          }, {
            n: 'attributeGroup',
            mno: 0,
            col: true,
            ti: '.AttributeGroupRef'
          }, {
            n: 'anyAttribute',
            ti: '.Wildcard'
          }, {
            n: 'name',
            ti: 'NCName',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'ref',
            ti: 'QName',
            an: {
              lp: 'ref'
            },
            t: 'a'
          }]
      }, {
        ln: 'Annotated',
        tn: 'annotated',
        bti: '.OpenAttrs',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'annotation',
            ti: '.Annotation'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }]
      }, {
        ln: 'Notation',
        tn: null,
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'name',
            rq: true,
            ti: 'NCName',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: '_public',
            ti: 'Token',
            an: {
              lp: 'public'
            },
            t: 'a'
          }, {
            n: 'system',
            an: {
              lp: 'system'
            },
            t: 'a'
          }]
      }, {
        ln: 'TopLevelElement',
        tn: 'topLevelElement',
        bti: '.Element'
      }, {
        ln: 'Restriction',
        tn: null,
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'simpleType',
            ti: '.LocalSimpleType'
          }, {
            n: 'minInclusive',
            col: true,
            ti: '.Facet'
          }, {
            n: 'totalDigits',
            col: true,
            ti: '.TotalDigits'
          }, {
            n: 'minLength',
            col: true,
            ti: '.NumFacet'
          }, {
            n: 'maxLength',
            col: true,
            ti: '.NumFacet'
          }, {
            n: 'maxInclusive',
            col: true,
            ti: '.Facet'
          }, {
            n: 'pattern',
            col: true,
            ti: '.Pattern'
          }, {
            n: 'enumeration',
            col: true,
            ti: '.NoFixedFacet'
          }, {
            n: 'minExclusive',
            col: true,
            ti: '.Facet'
          }, {
            n: 'fractionDigits',
            col: true,
            ti: '.NumFacet'
          }, {
            n: 'length',
            col: true,
            ti: '.NumFacet'
          }, {
            n: 'maxExclusive',
            col: true,
            ti: '.Facet'
          }, {
            n: 'whiteSpace',
            col: true,
            ti: '.WhiteSpace'
          }, {
            n: 'base',
            ti: 'QName',
            an: {
              lp: 'base'
            },
            t: 'a'
          }]
      }, {
        ln: 'SimpleRestrictionType',
        tn: 'simpleRestrictionType',
        bti: '.RestrictionType'
      }, {
        ln: 'ComplexContent',
        tn: null,
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'restriction',
            rq: true,
            ti: '.ComplexRestrictionType'
          }, {
            n: 'extension',
            rq: true,
            ti: '.ExtensionType'
          }, {
            n: 'mixed',
            ti: 'Boolean',
            an: {
              lp: 'mixed'
            },
            t: 'a'
          }]
      }, {
        ln: 'LocalElement',
        tn: 'localElement',
        bti: '.Element'
      }, {
        t: 'enum',
        ln: 'ReducedDerivationControl',
        bti: 'NMToken',
        vs: ['extension', 'restriction']
      }, {
        t: 'enum',
        ln: 'DerivationControl',
        bti: 'NMToken',
        vs: ['substitution', 'extension', 'restriction', 'list', 'union']
      }, {
        t: 'enum',
        ln: 'TypeDerivationControl',
        bti: 'NMToken',
        vs: ['extension', 'restriction', 'list', 'union']
      }, {
        t: 'enum',
        ln: 'FormChoice',
        bti: 'NMToken',
        vs: ['qualified', 'unqualified']
      }],
    eis: [{
        en: 'unique',
        ti: '.Keybase'
      }, {
        en: 'attributeGroup',
        ti: '.NamedAttributeGroup'
      }, {
        en: 'annotation',
        ti: '.Annotation'
      }, {
        en: 'all',
        ti: '.All'
      }, {
        en: 'complexContent',
        ti: '.ComplexContent'
      }, {
        en: 'list',
        ti: '.List'
      }, {
        en: 'maxExclusive',
        ti: '.Facet'
      }, {
        en: 'anyAttribute',
        ti: '.Wildcard'
      }, {
        en: 'notation',
        ti: '.Notation'
      }, {
        en: 'simpleType',
        ti: '.TopLevelSimpleType'
      }, {
        en: 'include',
        ti: '.Include'
      }, {
        en: 'restriction',
        ti: '.Restriction'
      }, {
        en: 'redefine',
        ti: '.Redefine'
      }, {
        en: 'maxInclusive',
        ti: '.Facet'
      }, {
        en: 'minExclusive',
        ti: '.Facet'
      }, {
        en: 'schema',
        ti: '.Schema'
      }, {
        en: 'complexType',
        ti: '.TopLevelComplexType'
      }, {
        en: 'element',
        ti: '.LocalElement',
        sc: '.Group'
      }, {
        en: 'appinfo',
        ti: '.Appinfo'
      }, {
        en: 'totalDigits',
        ti: '.TotalDigits'
      }, {
        en: 'choice',
        ti: '.ExplicitGroup'
      }, {
        en: 'selector',
        ti: '.Selector'
      }, {
        en: 'import',
        ti: '.Import'
      }, {
        en: 'minLength',
        ti: '.NumFacet'
      }, {
        en: 'simpleContent',
        ti: '.SimpleContent'
      }, {
        en: 'keyref',
        ti: '.Keyref'
      }, {
        en: 'element',
        ti: '.TopLevelElement'
      }, {
        en: 'length',
        ti: '.NumFacet'
      }, {
        en: 'group',
        ti: '.NamedGroup'
      }, {
        en: 'maxLength',
        ti: '.NumFacet'
      }, {
        en: 'fractionDigits',
        ti: '.NumFacet'
      }, {
        en: 'enumeration',
        ti: '.NoFixedFacet'
      }, {
        en: 'group',
        ti: '.GroupRef',
        sc: '.Group'
      }, {
        en: 'key',
        ti: '.Keybase'
      }, {
        en: 'whiteSpace',
        ti: '.WhiteSpace'
      }, {
        en: 'union',
        ti: '.Union'
      }, {
        en: 'documentation',
        ti: '.Documentation'
      }, {
        en: 'field',
        ti: '.Field'
      }, {
        en: 'minInclusive',
        ti: '.Facet'
      }, {
        en: 'sequence',
        ti: '.ExplicitGroup'
      }, {
        en: 'attribute',
        ti: '.TopLevelAttribute'
      }, {
        en: 'pattern',
        ti: '.Pattern'
      }, {
        en: 'any',
        ti: '.Any'
      }]
  };
  return {
    XSD_1_0: XSD_1_0
  };
};
if (true) {
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (XSD_1_0_Module_Factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
else {
  var XSD_1_0_Module = XSD_1_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.XSD_1_0 = XSD_1_0_Module.XSD_1_0;
  }
  else {
    var XSD_1_0 = XSD_1_0_Module.XSD_1_0;
  }
}

/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _Events = __webpack_require__(14);

var _Events2 = _interopRequireDefault(_Events);

var _FieldSet2 = __webpack_require__(10);

var _FieldSet3 = _interopRequireDefault(_FieldSet2);

var _MapConfigService = __webpack_require__(287);

var _MapConfigService2 = _interopRequireDefault(_MapConfigService);

var _MapConfigTransformService = __webpack_require__(288);

var _MapConfigTransformService2 = _interopRequireDefault(_MapConfigTransformService);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _openlayers = __webpack_require__(11);

var _openlayers2 = _interopRequireDefault(_openlayers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapWidget = function (_BaseWidget) {
    _inherits(MapWidget, _BaseWidget);

    function MapWidget(props) {
        _classCallCheck(this, MapWidget);

        var _this = _possibleConstructorReturn(this, _BaseWidget.call(this, props));

        _this.loaded = false;
        _this.map = new _openlayers2.default.Map({
            //controls: [new ol.control.Attribution({collapsible: false}), new ol.control.ScaleLine()],
            layers: [new _openlayers2.default.layer.Tile({ title: 'OpenStreetMap', source: new _openlayers2.default.source.OSM() })],
            view: new _openlayers2.default.View({ center: [0, 0], zoom: 3 })
        });
        _this.map.on('moveend', function () {
            var extent = _this.map.getView().calculateExtent(_this.map.getSize());
            var eventName = 'mapExtentChanged' + '_' + _this.props.id;
            _Events2.default.emit(eventName, _this.map, extent, _this);
        });

        return _this;
    }

    MapWidget.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
        if (this.state.config != nextState.config) {
            this.update(nextState.config);
            return true;
        }
        return false;
    };

    MapWidget.prototype.update = function update(config) {
        var _this2 = this;

        if (config && config.mapId) {
            var url = getMapConfigUrl(config.mapId);
            fetch(url, {
                method: "GET",
                credentials: 'include'
            }).then(function (response) {
                if (response.status == 200) {
                    return response.json();
                }
            }).then(function (config) {
                if (config) {
                    _MapConfigService2.default.load(_MapConfigTransformService2.default.transform(config), _this2.map, URLS.proxy);
                    _this2.ready = true;
                    _Events2.default.emit('mapReady' + '_' + _this2.props.id, _this2.map, _this2);
                }
            });
        }
    };

    MapWidget.prototype.componentWillMount = function componentWillMount() {
        this.update(this.state.config);
    };

    MapWidget.prototype.componentDidMount = function componentDidMount() {
        this.map.setTarget(_reactDom2.default.findDOMNode(this.refs.map));
        _BaseWidget.prototype.componentDidMount.call(this);
    };

    MapWidget.prototype.render = function render() {
        return _react2.default.createElement('div', { ref: 'map', className: 'map-ct' });
    };

    return MapWidget;
}(BaseWidget);

MapWidget.displayName = "Map";

var MapWidgetConfigForm = function (_FieldSet) {
    _inherits(MapWidgetConfigForm, _FieldSet);

    function MapWidgetConfigForm(props) {
        _classCallCheck(this, MapWidgetConfigForm);

        var _this3 = _possibleConstructorReturn(this, _FieldSet.call(this, props));

        _this3.state.maps = [];
        return _this3;
    }

    MapWidgetConfigForm.prototype.getSchema = function getSchema(props) {
        return {
            mapId: {
                type: 'select',
                options: {}
            }
        };
    };

    MapWidgetConfigForm.prototype.getInitialData = function getInitialData(props) {
        return props.widget.getConfig();
    };

    MapWidgetConfigForm.prototype.getSelectOptions = function getSelectOptions(name, config, value) {
        return this.state.maps.map(function (m) {
            return _jsx('option', {
                value: m.id
            }, void 0, m.title);
        });
    };

    MapWidgetConfigForm.prototype.componentWillMount = function componentWillMount() {
        var _this4 = this;

        getMapsData().then(function (res) {
            return _this4.setState({ maps: res.objects });
        });
    };

    return MapWidgetConfigForm;
}(_FieldSet3.default);

MapWidget.ConfigForm = MapWidgetConfigForm;

Dashboard.registerWidget(MapWidget);
exports.default = MapWidget;

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _jsonix_factory = function(_jsonix_xmldom, _jsonix_xmlhttprequest, _jsonix_fs)
{
	// Complete Jsonix script is included below 
var Jsonix = {
	singleFile : true
};
Jsonix.Util = {};

Jsonix.Util.extend = function(destination, source) {
	destination = destination || {};
	if (source) {
		/*jslint forin: true */
		for ( var property in source) {
			var value = source[property];
			if (value !== undefined) {
				destination[property] = value;
			}
		}

		/**
		 * IE doesn't include the toString property when iterating over an
		 * object's properties with the for(property in object) syntax.
		 * Explicitly check if the source has its own toString property.
		 */

		/*
		 * FF/Windows < 2.0.0.13 reports "Illegal operation on WrappedNative
		 * prototype object" when calling hawOwnProperty if the source object is
		 * an instance of window.Event.
		 */

		// REWORK
		// Node.js
		sourceIsEvt = typeof window !== 'undefined' && window !== null && typeof window.Event === "function" && source instanceof window.Event;

		if (!sourceIsEvt && source.hasOwnProperty && source.hasOwnProperty('toString')) {
			destination.toString = source.toString;
		}
	}
	return destination;
};
Jsonix.Class = function() {
	var Class = function() {
		this.initialize.apply(this, arguments);
	};
	var extended = {};
	var empty = function() {
	};
	var parent, initialize, Type;
	for (var i = 0, len = arguments.length; i < len; ++i) {
		Type = arguments[i];
		if (typeof Type == "function") {
			// make the class passed as the first argument the superclass
			if (i === 0 && len > 1) {
				initialize = Type.prototype.initialize;
				// replace the initialize method with an empty function,
				// because we do not want to create a real instance here
				Type.prototype.initialize = empty;
				// the line below makes sure that the new class has a
				// superclass
				extended = new Type();
				// restore the original initialize method
				if (initialize === undefined) {
					delete Type.prototype.initialize;
				} else {
					Type.prototype.initialize = initialize;
				}
			}
			// get the prototype of the superclass
			parent = Type.prototype;
		} else {
			// in this case we're extending with the prototype
			parent = Type;
		}
		Jsonix.Util.extend(extended, parent);
	}
	Class.prototype = extended;
	return Class;
};

Jsonix.XML = {
		XMLNS_NS : 'http://www.w3.org/2000/xmlns/',
		XMLNS_P : 'xmlns'
};


Jsonix.DOM = {
	isDomImplementationAvailable : function () {
		if (typeof _jsonix_xmldom !== 'undefined')
		{
			return true;
		} else if (typeof document !== 'undefined' && Jsonix.Util.Type.exists(document.implementation) && Jsonix.Util.Type.isFunction(document.implementation.createDocument)) {
			return true;
		} else {
			return false;
		}
	},
	createDocument : function() {
		// REWORK
		// Node.js
		if (typeof _jsonix_xmldom !== 'undefined')
		{
			return new (_jsonix_xmldom.DOMImplementation)().createDocument();
		} else if (typeof document !== 'undefined' && Jsonix.Util.Type.exists(document.implementation) && Jsonix.Util.Type.isFunction(document.implementation.createDocument)) {
			return document.implementation.createDocument('', '', null);
		} else if (typeof ActiveXObject !== 'undefined') {
			return new ActiveXObject('MSXML2.DOMDocument');
		} else {
			throw new Error('Error created the DOM document.');
		}
	},
	serialize : function(node) {
		Jsonix.Util.Ensure.ensureExists(node);
		// REWORK
		// Node.js
		if (typeof _jsonix_xmldom !== 'undefined')
		{
			return (new (_jsonix_xmldom).XMLSerializer()).serializeToString(node);
		} else if (Jsonix.Util.Type.exists(XMLSerializer)) {
			return (new XMLSerializer()).serializeToString(node);
		} else if (Jsonix.Util.Type.exists(node.xml)) {
			return node.xml;
		} else {
			throw new Error('Could not serialize the node, neither XMLSerializer nor the [xml] property were found.');
		}
	},
	parse : function(text) {
		Jsonix.Util.Ensure.ensureExists(text);
		if (typeof _jsonix_xmldom !== 'undefined')
		{
			return (new (_jsonix_xmldom).DOMParser()).parseFromString(text, 'application/xml');
		} else if (typeof DOMParser != 'undefined') {
			return (new DOMParser()).parseFromString(text, 'application/xml');
		} else if (typeof ActiveXObject != 'undefined') {
			var doc = Jsonix.DOM.createDocument('', '');
			doc.loadXML(text);
			return doc;
		} else {
			var url = 'data:text/xml;charset=utf-8,' + encodeURIComponent(text);
			var request = new XMLHttpRequest();
			request.open('GET', url, false);
			if (request.overrideMimeType) {
				request.overrideMimeType("text/xml");
			}
			request.send(null);
			return request.responseXML;
		}
	},
	load : function(url, callback, options) {

		var request = Jsonix.Request.INSTANCE;

		request.issue(
						url,
						function(transport) {
							var result;
							if (Jsonix.Util.Type.exists(transport.responseXML) && Jsonix.Util.Type.exists(transport.responseXML.documentElement)) {
								result = transport.responseXML;
							} else if (Jsonix.Util.Type.isString(transport.responseText)) {
								result = Jsonix.DOM.parse(transport.responseText);
							} else {
								throw new Error('Response does not have valid [responseXML] or [responseText].');
							}
							callback(result);

						}, function(transport) {
							throw new Error('Could not retrieve XML from URL [' + url	+ '].');

						}, options);
	},
	xlinkFixRequired : null,
	isXlinkFixRequired : function ()
	{
		if (Jsonix.DOM.xlinkFixRequired === null)
		{
			if (typeof navigator === 'undefined')
			{
				Jsonix.DOM.xlinkFixRequired = false;
			}
			else if (!!navigator.userAgent && (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)))
			{
				var doc = Jsonix.DOM.createDocument();
				var el = doc.createElement('test');
				el.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'urn:test');
				doc.appendChild(el);
				var testString = Jsonix.DOM.serialize(doc);
				Jsonix.DOM.xlinkFixRequired = (testString.indexOf('xmlns:xlink') === -1);
			}
			else
			{
				Jsonix.DOM.xlinkFixRequired = false;
			}
		}
		return Jsonix.DOM.xlinkFixRequired;
	}
};
Jsonix.Request = Jsonix
		.Class({
			// REWORK
			factories : [ function() {
				return new XMLHttpRequest();
			}, function() {
				return new ActiveXObject('Msxml2.XMLHTTP');
			}, function() {
				return new ActiveXObject("Msxml2.XMLHTTP.6.0");
			}, function() {
				return new ActiveXObject("Msxml2.XMLHTTP.3.0");
			}, function() {
				return new ActiveXObject('Microsoft.XMLHTTP');
			}, function() {
				// Node.js
				if (typeof _jsonix_xmlhttprequest !== 'undefined')
				{
					var XMLHttpRequest = _jsonix_xmlhttprequest.XMLHttpRequest;
					return new XMLHttpRequest();
				}
				else
				{
					return null;
				}
			}],
			initialize : function() {
			},
			issue : function(url, onSuccess, onFailure, options) {
				Jsonix.Util.Ensure.ensureString(url);
				if (Jsonix.Util.Type.exists(onSuccess)) {
					Jsonix.Util.Ensure.ensureFunction(onSuccess);
				} else {
					onSuccess = function() {
					};
				}
				if (Jsonix.Util.Type.exists(onFailure)) {
					Jsonix.Util.Ensure.ensureFunction(onFailure);
				} else {
					onFailure = function() {
					};
				}
				if (Jsonix.Util.Type.exists(options)) {
					Jsonix.Util.Ensure.ensureObject(options);
				} else {
					options = {};
				}

				var transport = this.createTransport();

				var method = Jsonix.Util.Type.isString(options.method) ? options.method
						: 'GET';
				var async = Jsonix.Util.Type.isBoolean(options.async) ? options.async
						: true;
				var proxy = Jsonix.Util.Type.isString(options.proxy) ? options.proxy
						: Jsonix.Request.PROXY;

				var user = Jsonix.Util.Type.isString(options.user) ? options.user
						: null;
				var password = Jsonix.Util.Type.isString(options.password) ? options.password
						: null;

				if (Jsonix.Util.Type.isString(proxy) && (url.indexOf("http") === 0)) {
					url = proxy + encodeURIComponent(url);
				}

				if (Jsonix.Util.Type.isString(user)) {
					transport.open(method, url, async, user, password);
				} else {
					transport.open(method, url, async);
				}

				if (Jsonix.Util.Type.isObject(options.headers)) {

					for ( var header in options.headers) {
						if (options.headers.hasOwnProperty(header)) {
							transport.setRequestHeader(header,
									options.headers[header]);
						}
					}
				}

				var data = Jsonix.Util.Type.exists(options.data) ? options.data
						: null;
				if (!async) {
					transport.send(data);
					this.handleTransport(transport, onSuccess, onFailure);
				} else {
					var that = this;
					if (typeof window !== 'undefined') {

						transport.onreadystatechange = function() {
							that.handleTransport(transport, onSuccess,
									onFailure);
						};

						window.setTimeout(function() {
							transport.send(data);
						}, 0);
					} else {

						transport.onreadystatechange = function() {
							that.handleTransport(transport, onSuccess, onFailure);
						};
						transport.send(data);
					}
				}
				return transport;

			},
			handleTransport : function(transport, onSuccess, onFailure) {
				if (transport.readyState == 4) {
					if (!transport.status || (transport.status >= 200 && transport.status < 300)) {
						onSuccess(transport);
					}
					if (transport.status && (transport.status < 200 || transport.status >= 300)) {
						onFailure(transport);
					}
				}
			},
			createTransport : function() {
				for ( var index = 0, length = this.factories.length; index < length; index++) {
					try {
						var transport = this.factories[index]();
						if (transport !== null) {
							return transport;
						}
					} catch (e) {
						// TODO log
					}
				}
				throw new Error('Could not create XML HTTP transport.');
			},
			CLASS_NAME : 'Jsonix.Request'
		});
Jsonix.Request.INSTANCE = new Jsonix.Request();
Jsonix.Request.PROXY = null;
Jsonix.Schema = {};
Jsonix.Model = {};
Jsonix.Util.Type = {
	exists : function(value) {
		return (typeof value !== 'undefined' && value !== null);
	},
	isUndefined : function(value) {
		return typeof value === 'undefined';
	},
	isString : function(value) {
		return typeof value === 'string';
	},
	isBoolean : function(value) {
		return typeof value === 'boolean';
	},
	isObject : function(value) {
		return typeof value === 'object';
	},
	isFunction : function(value) {
		return typeof value === 'function';
	},
	isNumber : function(value) {
		return (typeof value === 'number') && !isNaN(value);
	},
	isNumberOrNaN : function(value) {
		return (value === +value) || (Object.prototype.toString.call(value) === '[object Number]');
	},
	isNaN : function(value) {
		return Jsonix.Util.Type.isNumberOrNaN(value) && isNaN(value);
	},
	isArray : function(value) {
		// return value instanceof Array;
		return !!(value && value.concat && value.unshift && !value.callee);
	},
	isDate : function(value) {
		return !!(value && value.getTimezoneOffset && value.setUTCFullYear);
	},
	isRegExp : function(value) {
		return !!(value && value.test && value.exec && (value.ignoreCase || value.ignoreCase === false));
	},
	isNode : function(value) {
		return (typeof Node === "object" || typeof Node === "function") ? (value instanceof Node) : (value && (typeof value === "object") && (typeof value.nodeType === "number") && (typeof value.nodeName==="string"));
	},
	isEqual : function(a, b, report) {
		var doReport = Jsonix.Util.Type.isFunction(report);
		// TODO rework
		var _range = function(start, stop, step) {
			var args = slice.call(arguments);
			var solo = args.length <= 1;
			var start_ = solo ? 0 : args[0];
			var stop_ = solo ? args[0] : args[1];
			var step_ = args[2] || 1;
			var len = Math.max(Math.ceil((stop_ - start_) / step_), 0);
			var idx = 0;
			var range = new Array(len);
			while (idx < len) {
				range[idx++] = start_;
				start_ += step_;
			}
			return range;
		};

		var _keys = Object.keys || function(obj) {
			if (Jsonix.Util.Type.isArray(obj)) {
				return _range(0, obj.length);
			}
			var keys = [];
			for ( var key in obj) {
				if (obj.hasOwnProperty(key)) {
					keys[keys.length] = key;
				}
			}
			return keys;
		};

		// Check object identity.
		if (a === b) {
			return true;
		}

		// Check if both are NaNs
		if (Jsonix.Util.Type.isNaN(a) && Jsonix.Util.Type.isNaN(b)) {
			return true;
		}
		// Different types?
		var atype = typeof a;
		var btype = typeof b;
		if (atype != btype) {
			if (doReport) {
				report('Types differ [' + atype + '], [' + btype + '].');
			}
			return false;
		}
		// Basic equality test (watch out for coercions).
		if (a == b) {
			return true;
		}
		// One is falsy and the other truthy.
		if ((!a && b) || (a && !b)) {
			if (doReport) {
				report('One is falsy, the other is truthy.');
			}
			return false;
		}
		// Check dates' integer values.
		if (Jsonix.Util.Type.isDate(a) && Jsonix.Util.Type.isDate(b)) {
			return a.getTime() === b.getTime();
		}
		// Both are NaN?
		if (Jsonix.Util.Type.isNaN(a) && Jsonix.Util.Type.isNaN(b)) {
			return false;
		}
		// Compare regular expressions.
		if (Jsonix.Util.Type.isRegExp(a) && Jsonix.Util.Type.isRegExp(b)) {
			return a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline;
		}
		
		if (Jsonix.Util.Type.isNode(a) && Jsonix.Util.Type.isNode(b))
		{
			var aSerialized = Jsonix.DOM.serialize(a);
			var bSerialized = Jsonix.DOM.serialize(b);
			if (aSerialized !== bSerialized)
			{
				if (doReport)
				{
					report('Nodes differ.');
					report('A=' + aSerialized);
					report('B=' + bSerialized);
				}
				return false;
			}
			else
			{
				return true;
			}
		}
		
		// If a is not an object by this point, we can't handle it.
		if (atype !== 'object') {
			return false;
		}
		// Check for different array lengths before comparing contents.
		if (Jsonix.Util.Type.isArray(a) && (a.length !== b.length)) {
			if (doReport) {
					report('Lengths differ.');
					report('A.length=' + a.length);
					report('B.length=' + b.length);
			}
			return false;
		}
		// Nothing else worked, deep compare the contents.
		var aKeys = _keys(a);
		var bKeys = _keys(b);
		// Different object sizes?
		if (aKeys.length !== bKeys.length) {
			if (doReport) {
				report('Different number of properties [' + aKeys.length + '], [' + bKeys.length + '].');
			}
			for ( var andex = 0; andex < aKeys.length; andex++) {
				if (doReport) {
					report('A [' + aKeys[andex] + ']=' + a[aKeys[andex]]);
				}
			}
			for ( var bndex = 0; bndex < bKeys.length; bndex++) {
				if (doReport) {
					report('B [' + bKeys[bndex] + ']=' + b[bKeys[bndex]]);
				}
			}
			return false;
		}
		// Recursive comparison of contents.
		for (var kndex = 0; kndex < aKeys.length; kndex++) {
			var key = aKeys[kndex];
			if (!(key in b) || !Jsonix.Util.Type.isEqual(a[key], b[key], report)) {
				if (doReport) {
					report('One of the properties differ.');
					report('Key: [' + key + '].');
					report('Left: [' + a[key] + '].');
					report('Right: [' + b[key] + '].');
				}
				return false;
			}
		}
		return true;
	},
	cloneObject : function (source, target)
	{
		target = target || {};
		for (var p in source)
		{
			if (source.hasOwnProperty(p))
			{
				target[p] = source[p];
			}
		}
		return target;
	},
	defaultValue : function()
	{
		var args = arguments;
		if (args.length === 0)
		{
			return undefined;
		}
		else
		{
			var defaultValue = args[args.length - 1];
			var typeOfDefaultValue = typeof defaultValue;
			for (var index = 0; index < args.length - 1; index++)
			{
				var candidateValue = args[index];
				if (typeof candidateValue === typeOfDefaultValue)
				{
					return candidateValue;
				}
			}
			return defaultValue;
			
		}
	}
};
Jsonix.Util.NumberUtils = {
	isInteger : function(value) {
		return Jsonix.Util.Type.isNumber(value) && ((value % 1) === 0);
	}
};
Jsonix.Util.StringUtils = {
	trim : (!!String.prototype.trim) ?
	function(str) {
		Jsonix.Util.Ensure.ensureString(str);
		return str.trim();
	} :
	function(str) {
		Jsonix.Util.Ensure.ensureString(str);
		return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
	},
	/* isEmpty : function(str) {
		var wcm = Jsonix.Util.StringUtils.whitespaceCharactersMap;
		for (var index = 0; index < str.length; index++)
		{
			if (!wcm[str[index]])
			{
				return false;
			}
		}
		return true;
	}, */
	isEmpty : function(str) {
		var length = str.length;
		if (!length) {
			return true;
		}
		for (var index = 0; index < length; index++)
		{
			var c = str[index];
			if (c === ' ')
			{
				// skip
			}
			else if (c > '\u000D' && c < '\u0085')
			{
				return false;
			}
			else if (c < '\u00A0')
			{
				if (c < '\u0009')
				{
					return false;
				}
				else if (c > '\u0085')
				{
					return false;
				}
			}
			else if (c > '\u00A0')
			{
				if (c < '\u2028')
				{
					if (c < '\u180E')
					{
						if (c < '\u1680')
						{
							return false;
						}
						else if(c > '\u1680')
						{
							return false;
						}
					}
					else if (c > '\u180E')
					{
						if (c < '\u2000')
						{
							return false;
						}
						else if (c > '\u200A')
						{
							return false;
						}
					}
				}
				else if (c > '\u2029')
				{
					if (c < '\u205F')
					{
						if (c < '\u202F')
						{
							return false;
						}
						else if (c > '\u202F')
						{
							return false;
						}
					}
					else if (c > '\u205F')
					{
						if (c < '\u3000')
						{
							return false;
						}
						else if (c > '\u3000')
						{
							return false;
						}
					}
				}
			}
		}
		return true;
	},
	isNotBlank : function(str) {
		return Jsonix.Util.Type.isString(str) && !Jsonix.Util.StringUtils.isEmpty(str);
	},
	whitespaceCharacters: '\u0009\u000A\u000B\u000C\u000D \u0085\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000',
	whitespaceCharactersMap: {
		'\u0009' : true,
		'\u000A' : true,
		'\u000B' : true,
		'\u000C' : true,
		'\u000D' : true,
		' ' : true,
		'\u0085' : true,
		'\u00A0' : true,
		'\u1680' : true,
		'\u180E' : true,
		'\u2000' : true,
		'\u2001' : true,
		'\u2002' : true,
		'\u2003' : true,
		'\u2004' : true,
		'\u2005' : true,
		'\u2006' : true,
		'\u2007' : true,
		'\u2008' : true,
		'\u2009' : true,
		'\u200A' : true,
		'\u2028' : true,
		'\u2029' : true,
		'\u202F' : true,
		'\u205F' : true,
		'\u3000' : true
	},
	splitBySeparatorChars : function(str, separatorChars) {
		Jsonix.Util.Ensure.ensureString(str);
		Jsonix.Util.Ensure.ensureString(separatorChars);
		var len = str.length;
		if (len === 0) {
			return [];
		}
		if (separatorChars.length === 1)
		{
			return str.split(separatorChars);
		}
		else
		{
			var list = [];
			var sizePlus1 = 1;
			var i = 0;
			var start = 0;
			var match = false;
			var lastMatch = false;
			var max = -1;
			var preserveAllTokens = false;
			// standard case
				while (i < len) {
						if (separatorChars.indexOf(str.charAt(i)) >= 0) {
								if (match || preserveAllTokens) {
										lastMatch = true;
										if (sizePlus1++ == max) {
												i = len;
												lastMatch = false;
										}
										list.push(str.substring(start, i));
										match = false;
								}
								start = ++i;
								continue;
						}
						lastMatch = false;
						match = true;
						i++;
				}
				if (match || (preserveAllTokens && lastMatch)) {
					list.push(str.substring(start, i));
			}
			return list;
		}
	}
};
Jsonix.Util.Ensure = {
	ensureBoolean : function(value) {
		if (!Jsonix.Util.Type.isBoolean(value)) {
			throw new Error('Argument [' + value + '] must be a boolean.');
		}
	},
	ensureString : function(value) {
		if (!Jsonix.Util.Type.isString(value)) {
			throw new Error('Argument [' + value + '] must be a string.');
		}
	},
	ensureNumber : function(value) {
		if (!Jsonix.Util.Type.isNumber(value)) {
			throw new Error('Argument [' + value + '] must be a number.');
		}
	},
	ensureNumberOrNaN : function(value) {
		if (!Jsonix.Util.Type.isNumberOrNaN(value)) {
			throw new Error('Argument [' + value + '] must be a number or NaN.');
		}
	},
	ensureInteger : function(value) {
		if (!Jsonix.Util.Type.isNumber(value)) {
			throw new Error('Argument must be an integer, but it is not a number.');
		} else if (!Jsonix.Util.NumberUtils.isInteger(value)) {
			throw new Error('Argument [' + value + '] must be an integer.');
		}
	},
	ensureDate : function(value) {
		if (!(value instanceof Date)) {
			throw new Error('Argument [' + value + '] must be a date.');
		}
	},
	ensureObject : function(value) {
		if (!Jsonix.Util.Type.isObject(value)) {
			throw new Error('Argument [' + value + '] must be an object.');
		}
	},
	ensureArray : function(value) {
		if (!Jsonix.Util.Type.isArray(value)) {
			throw new Error('Argument [' + value + '] must be an array.');
		}
	},
	ensureFunction : function(value) {
		if (!Jsonix.Util.Type.isFunction(value)) {
			throw new Error('Argument [' + value + '] must be a function.');
		}
	},
	ensureExists : function(value) {
		if (!Jsonix.Util.Type.exists(value)) {
			throw new Error('Argument [' + value + '] does not exist.');
		}
	}
};
Jsonix.XML.QName = Jsonix.Class({
	key : null,
	namespaceURI : null,
	localPart : null,
	prefix : null,
	string : null,
	initialize : function(one, two, three) {
		var namespaceURI;
		var localPart;
		var prefix;
		var key;
		var string;

		if (!Jsonix.Util.Type.exists(two)) {
			namespaceURI = '';
			localPart = one;
			prefix = '';
		} else if (!Jsonix.Util.Type.exists(three)) {
			namespaceURI = Jsonix.Util.Type.exists(one) ? one : '';
			localPart = two;
			var colonPosition = two.indexOf(':');
			if (colonPosition > 0 && colonPosition < two.length) {
				prefix = two.substring(0, colonPosition);
				localPart = two.substring(colonPosition + 1);
			} else {
				prefix = '';
				localPart = two;
			}
		} else {
			namespaceURI = Jsonix.Util.Type.exists(one) ? one : '';
			localPart = two;
			prefix = Jsonix.Util.Type.exists(three) ? three : '';
		}
		this.namespaceURI = namespaceURI;
		this.localPart = localPart;
		this.prefix = prefix;

		this.key = (namespaceURI !== '' ? ('{' + namespaceURI + '}') : '') + localPart;
		this.string = (namespaceURI !== '' ? ('{' + namespaceURI + '}') : '') + (prefix !== '' ? (prefix + ':') : '') + localPart;
	},
	toString : function() {
		return this.string;
	},
	// foo:bar
	toCanonicalString: function(namespaceContext) {
		var canonicalPrefix = namespaceContext ? namespaceContext.getPrefix(this.namespaceURI, this.prefix) : this.prefix;
		return this.prefix + (this.prefix === '' ? '' : ':') + this.localPart;
	},
	clone : function() {
		return new Jsonix.XML.QName(this.namespaceURI, this.localPart, this.prefix);
	},
	equals : function(that) {
		if (!that) {
			return false;
		} else {
			return (this.namespaceURI == that.namespaceURI) && (this.localPart == that.localPart);
		}

	},
	CLASS_NAME : "Jsonix.XML.QName"
});
Jsonix.XML.QName.fromString = function(qNameAsString, namespaceContext, defaultNamespaceURI) {
	var leftBracket = qNameAsString.indexOf('{');
	var rightBracket = qNameAsString.lastIndexOf('}');
	var namespaceURI;
	var prefixedName;
	if ((leftBracket === 0) && (rightBracket > 0) && (rightBracket < qNameAsString.length)) {
		namespaceURI = qNameAsString.substring(1, rightBracket);
		prefixedName = qNameAsString.substring(rightBracket + 1);
	} else {
		namespaceURI = null;
		prefixedName = qNameAsString;
	}
	var colonPosition = prefixedName.indexOf(':');
	var prefix;
	var localPart;
	if (colonPosition > 0 && colonPosition < prefixedName.length) {
		prefix = prefixedName.substring(0, colonPosition);
		localPart = prefixedName.substring(colonPosition + 1);
	} else {
		prefix = '';
		localPart = prefixedName;
	}
	// If namespace URI was not set and we have a namespace context, try to find the namespace URI via this context
	if (namespaceURI === null)
	{
		if (prefix === '' && Jsonix.Util.Type.isString(defaultNamespaceURI))
		{
			namespaceURI = defaultNamespaceURI;
		}
		else if (namespaceContext)
		{
			namespaceURI = namespaceContext.getNamespaceURI(prefix);
		}
	}
	// If we don't have a namespace URI, assume '' by default
	// TODO document the assumption
	if (!Jsonix.Util.Type.isString(namespaceURI))
	{
		namespaceURI = defaultNamespaceURI || '';
	}
	return new Jsonix.XML.QName(namespaceURI, localPart, prefix);
};
Jsonix.XML.QName.fromObject = function(object) {
	Jsonix.Util.Ensure.ensureObject(object);
	if (object instanceof Jsonix.XML.QName || (Jsonix.Util.Type.isString(object.CLASS_NAME) && object.CLASS_NAME === 'Jsonix.XML.QName')) {
		return object;
	}
	var localPart = object.localPart||object.lp||null;
	Jsonix.Util.Ensure.ensureString(localPart);
	var namespaceURI = object.namespaceURI||object.ns||'';
	var prefix = object.prefix||object.p||'';
	return new Jsonix.XML.QName(namespaceURI, localPart, prefix);
};
Jsonix.XML.QName.fromObjectOrString = function(value, namespaceContext, defaultNamespaceURI) {
	if (Jsonix.Util.Type.isString(value))
	{
		return Jsonix.XML.QName.fromString(value, namespaceContext, defaultNamespaceURI);
	}
	else
	{
		return Jsonix.XML.QName.fromObject(value);
	}
};
Jsonix.XML.QName.key = function(namespaceURI, localPart) {
	Jsonix.Util.Ensure.ensureString(localPart);
	if (namespaceURI) {
		var colonPosition = localPart.indexOf(':');
		if (colonPosition > 0 && colonPosition < localPart.length) {
			localName = localPart.substring(colonPosition + 1);
		} else {
			localName = localPart;
		}
		return '{' + namespaceURI + '}' + localName;
	} else {
		return localPart;
	}
};
Jsonix.XML.Calendar = Jsonix.Class({
	year : NaN,
	month : NaN,
	day : NaN,
	hour : NaN,
	minute : NaN,
	second : NaN,
	fractionalSecond : NaN,
	timezone : NaN,
	date : null,
	initialize : function(data) {
		Jsonix.Util.Ensure.ensureObject(data);
		// Year
		if (Jsonix.Util.Type.exists(data.year)) {
			Jsonix.Util.Ensure.ensureInteger(data.year);
			Jsonix.XML.Calendar.validateYear(data.year);
			this.year = data.year;
		} else {
			this.year = NaN;
		}
		// Month
		if (Jsonix.Util.Type.exists(data.month)) {
			Jsonix.Util.Ensure.ensureInteger(data.month);
			Jsonix.XML.Calendar.validateMonth(data.month);
			this.month = data.month;
		} else {
			this.month = NaN;
		}
		// Day
		if (Jsonix.Util.Type.exists(data.day)) {
			Jsonix.Util.Ensure.ensureInteger(data.day);
			if (Jsonix.Util.NumberUtils.isInteger(data.year) && Jsonix.Util.NumberUtils.isInteger(data.month)) {
				Jsonix.XML.Calendar.validateYearMonthDay(data.year, data.month, data.day);
			} else if (Jsonix.Util.NumberUtils.isInteger(data.month)) {
				Jsonix.XML.Calendar.validateMonthDay(data.month, data.day);
			} else {
				Jsonix.XML.Calendar.validateDay(data.day);
			}
			this.day = data.day;
		} else {
			this.day = NaN;
		}
		// Hour
		if (Jsonix.Util.Type.exists(data.hour)) {
			Jsonix.Util.Ensure.ensureInteger(data.hour);
			Jsonix.XML.Calendar.validateHour(data.hour);
			this.hour = data.hour;
		} else {
			this.hour = NaN;
		}
		// Minute
		if (Jsonix.Util.Type.exists(data.minute)) {
			Jsonix.Util.Ensure.ensureInteger(data.minute);
			Jsonix.XML.Calendar.validateMinute(data.minute);
			this.minute = data.minute;
		} else {
			this.minute = NaN;
		}
		// Second
		if (Jsonix.Util.Type.exists(data.second)) {
			Jsonix.Util.Ensure.ensureInteger(data.second);
			Jsonix.XML.Calendar.validateSecond(data.second);
			this.second = data.second;
		} else {
			this.second = NaN;
		}
		// Fractional second
		if (Jsonix.Util.Type.exists(data.fractionalSecond)) {
			Jsonix.Util.Ensure.ensureNumber(data.fractionalSecond);
			Jsonix.XML.Calendar.validateFractionalSecond(data.fractionalSecond);
			this.fractionalSecond = data.fractionalSecond;
		} else {
			this.fractionalSecond = NaN;
		}
		// Timezone
		if (Jsonix.Util.Type.exists(data.timezone)) {
			if (Jsonix.Util.Type.isNaN(data.timezone)) {
				this.timezone = NaN;
			} else {
				Jsonix.Util.Ensure.ensureInteger(data.timezone);
				Jsonix.XML.Calendar.validateTimezone(data.timezone);
				this.timezone = data.timezone;
			}
		} else {
			this.timezone = NaN;
		}

		var initialDate = new Date(0);
		initialDate.setUTCFullYear(this.year || 1970);
		initialDate.setUTCMonth(this.month - 1 || 0);
		initialDate.setUTCDate(this.day || 1);
		initialDate.setUTCHours(this.hour || 0);
		initialDate.setUTCMinutes(this.minute || 0);
		initialDate.setUTCSeconds(this.second || 0);
		initialDate.setUTCMilliseconds((this.fractionalSecond || 0) * 1000);
		var timezoneOffset = -60000 * (this.timezone || 0);
		this.date = new Date(initialDate.getTime() + timezoneOffset);
	},
	CLASS_NAME : "Jsonix.XML.Calendar"
});
Jsonix.XML.Calendar.MIN_TIMEZONE = -14 * 60;
Jsonix.XML.Calendar.MAX_TIMEZONE = 14 * 60;
Jsonix.XML.Calendar.DAYS_IN_MONTH = [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
Jsonix.XML.Calendar.fromObject = function(object) {
	Jsonix.Util.Ensure.ensureObject(object);
	if (Jsonix.Util.Type.isString(object.CLASS_NAME) && object.CLASS_NAME === 'Jsonix.XML.Calendar') {
		return object;
	}
	return new Jsonix.XML.Calendar(object);
};
Jsonix.XML.Calendar.validateYear = function(year) {
	if (year === 0) {
		throw new Error('Invalid year [' + year + ']. Year must not be [0].');
	}
};
Jsonix.XML.Calendar.validateMonth = function(month) {
	if (month < 1 || month > 12) {
		throw new Error('Invalid month [' + month + ']. Month must be in range [1, 12].');
	}
};
Jsonix.XML.Calendar.validateDay = function(day) {
	if (day < 1 || day > 31) {
		throw new Error('Invalid day [' + day + ']. Day must be in range [1, 31].');
	}
};
Jsonix.XML.Calendar.validateMonthDay = function(month, day) {
	Jsonix.XML.Calendar.validateMonth(month);
	var maxDaysInMonth = Jsonix.XML.Calendar.DAYS_IN_MONTH[month - 1];
	if (day < 1 || day > Jsonix.XML.Calendar.DAYS_IN_MONTH[month - 1]) {
		throw new Error('Invalid day [' + day + ']. Day must be in range [1, ' + maxDaysInMonth + '].');
	}
};
Jsonix.XML.Calendar.validateYearMonthDay = function(year, month, day) {
	// #93 TODO proper validation of 28/29 02
	Jsonix.XML.Calendar.validateYear(year);
	Jsonix.XML.Calendar.validateMonthDay(month, day);
};
Jsonix.XML.Calendar.validateHour = function(hour) {
	if (hour < 0 || hour > 23) {
		throw new Error('Invalid hour [' + hour + ']. Hour must be in range [0, 23].');
	}
};
Jsonix.XML.Calendar.validateMinute = function(minute) {
	if (minute < 0 || minute > 59) {
		throw new Error('Invalid minute [' + minute + ']. Minute must be in range [0, 59].');
	}
};
Jsonix.XML.Calendar.validateSecond = function(second) {
	if (second < 0 || second > 59) {
		throw new Error('Invalid second [' + second + ']. Second must be in range [0, 59].');
	}
};
Jsonix.XML.Calendar.validateFractionalSecond = function(fractionalSecond) {
	if (fractionalSecond < 0 || fractionalSecond > 59) {
		throw new Error('Invalid fractional second [' + fractionalSecond + ']. Fractional second must be in range [0, 1).');
	}
};
Jsonix.XML.Calendar.validateTimezone = function(timezone) {
	if (timezone < Jsonix.XML.Calendar.MIN_TIMEZONE || timezone > Jsonix.XML.Calendar.MAX_TIMEZONE) {
		throw new Error('Invalid timezone [' + timezone + ']. Timezone must not be in range [' + Jsonix.XML.Calendar.MIN_TIMEZONE + ', ' + Jsonix.XML.Calendar.MAX_TIMEZONE + '].');
	}
};
Jsonix.XML.Input = Jsonix.Class({
	root : null,
	node : null,
	attributes : null,
	eventType : null,
	pns : null,
	initialize : function(node) {
		Jsonix.Util.Ensure.ensureExists(node);
		this.root = node;
		var rootPnsItem =
		{
			'' : ''
		};
		rootPnsItem[Jsonix.XML.XMLNS_P] = Jsonix.XML.XMLNS_NS;
		this.pns = [rootPnsItem];
	},
	hasNext : function() {
		// No current node, we've not started yet
		if (this.node === null) {
			return true;
		} else if (this.node === this.root) {
			var nodeType = this.node.nodeType;
			// Root node is document, last event type is END_DOCUMENT
			if (nodeType === 9 && this.eventType === 8) {
				return false;
			}
			// Root node is element, last event type is END_ELEMENT
			else if (nodeType === 1 && this.eventType === 2) {
				return false;
			} else {
				return true;
			}
		} else {
			return true;
		}
	},
	next : function() {
		if (this.eventType === null) {
			return this.enter(this.root);
		}
		// START_DOCUMENT
		if (this.eventType === 7) {
			var documentElement = this.node.documentElement;
			if (documentElement) {
				return this.enter(documentElement);
			} else {
				return this.leave(this.node);
			}
		} else if (this.eventType === 1) {
			var firstChild = this.node.firstChild;
			if (firstChild) {
				return this.enter(firstChild);
			} else {
				return this.leave(this.node);
			}
		} else if (this.eventType === 2) {
			var nextSibling = this.node.nextSibling;
			if (nextSibling) {
				return this.enter(nextSibling);
			} else {
				return this.leave(this.node);
			}
		} else {
			return this.leave(this.node);
		}
	},
	enter : function(node) {
		var nodeType = node.nodeType;
		this.node = node;
		this.attributes = null;
		// Document node
		if (nodeType === 1) {
			// START_ELEMENT
			this.eventType = 1;
			this.pushNS(node);
			return this.eventType;
		} else if (nodeType === 2) {
			// ATTRIBUTE
			this.eventType = 10;
			return this.eventType;
		} else if (nodeType === 3) {
			var nodeValue = node.nodeValue;
			if (Jsonix.Util.StringUtils.isEmpty(nodeValue)) {
				// SPACE
				this.eventType = 6;
			} else {
				// CHARACTERS
				this.eventType = 4;
			}
			return this.eventType;
		} else if (nodeType === 4) {
			// CDATA
			this.eventType = 12;
			return this.eventType;
		} else if (nodeType === 5) {
			// ENTITY_REFERENCE_NODE = 5
			// ENTITY_REFERENCE
			this.eventType = 9;
			return this.eventType;
		} else if (nodeType === 6) {
			// ENTITY_DECLARATION
			this.eventType = 15;
			return this.eventType;
		} else if (nodeType === 7) {
			// PROCESSING_INSTRUCTION
			this.eventType = 3;
			return this.eventType;
		} else if (nodeType === 8) {
			// COMMENT
			this.eventType = 5;
			return this.eventType;
		} else if (nodeType === 9) {
			// START_DOCUMENT
			this.eventType = 7;
			return this.eventType;
		} else if (nodeType === 10) {
			// DTD
			this.eventType = 12;
			return this.eventType;
		} else if (nodeType === 12) {
			// NOTATION_DECLARATION
			this.eventType = 14;
			return this.eventType;
		} else {
			// DOCUMENT_FRAGMENT_NODE = 11
			throw new Error("Node type [" + nodeType + '] is not supported.');
		}
	},
	leave : function(node) {
		if (node.nodeType === 9) {
			if (this.eventType == 8) {
				throw new Error("Invalid state.");
			} else {
				this.node = node;
				this.attributes = null;
				// END_ELEMENT
				this.eventType = 8;
				return this.eventType;
			}
		} else if (node.nodeType === 1) {
			if (this.eventType == 2) {
				var nextSibling = node.nextSibling;
				if (nextSibling) {
					return this.enter(nextSibling);
				}
			} else {
				this.node = node;
				this.attributes = null;
				// END_ELEMENT
				this.eventType = 2;
				this.popNS();
				return this.eventType;
			}
		}

		var nextSibling1 = node.nextSibling;
		if (nextSibling1) {
			return this.enter(nextSibling1);
		} else {
			var parentNode = node.parentNode;
			this.node = parentNode;
			this.attributes = null;
			if (parentNode.nodeType === 9) {
				this.eventType = 8;
			} else {
				this.eventType = 2;
			}
			return this.eventType;
		}
	},
	getName : function() {
		var node = this.node;
		if (Jsonix.Util.Type.isString(node.nodeName)) {
			if (Jsonix.Util.Type.isString(node.namespaceURI)) {
				return new Jsonix.XML.QName(node.namespaceURI, node.nodeName);
			} else {
				return new Jsonix.XML.QName(node.nodeName);
			}
		} else {
			return null;
		}
	},
	getNameKey : function() {
		var node = this.node;
		if (Jsonix.Util.Type.isString(node.nodeName)) {
			return Jsonix.XML.QName.key(node.namespaceURI, node.nodeName);
		} else {
			return null;
		}
	},
	getText : function() {
		return this.node.nodeValue;
	},
	nextTag : function() {
		var et = this.next();
		// TODO isWhiteSpace
		while (et === 7 || et === 4 || et === 12 || et === 6 || et === 3 || et === 5) {
			et = this.next();
		}
		if (et !== 1 && et !== 2) {
			// TODO location
			throw new Error('Expected start or end tag.');
		}
		return et;
	},
	skipElement : function() {
		if (this.eventType !== Jsonix.XML.Input.START_ELEMENT) {
			throw new Error("Parser must be on START_ELEMENT to skip element.");
		}
		var numberOfOpenTags = 1;
		var et;
		do {
			et = this.nextTag();
		    numberOfOpenTags += (et === Jsonix.XML.Input.START_ELEMENT) ? 1 : -1;
		  } while (numberOfOpenTags > 0);
		return et;
	},	
	getElementText : function() {
		if (this.eventType != 1) {
			throw new Error("Parser must be on START_ELEMENT to read next text.");
		}
		var et = this.next();
		var content = '';
		while (et !== 2) {
			if (et === 4 || et === 12 || et === 6 || et === 9) {
				content = content + this.getText();
			} else if (et === 3 || et === 5) {
				// Skip PI or comment
			} else if (et === 8) {
				// End document
				throw new Error("Unexpected end of document when reading element text content.");
			} else if (et === 1) {
				// End element
				// TODO location
				throw new Error("Element text content may not contain START_ELEMENT.");
			} else {
				// TODO location
				throw new Error("Unexpected event type [" + et + "].");
			}
			et = this.next();
		}
		return content;
	},
	retrieveElement : function () {
		var element;
		if (this.eventType === 1) {
			element = this.node;
		} else if (this.eventType === 10) {
			element = this.node.parentNode;
		} else {
			throw new Error("Element can only be retrieved for START_ELEMENT or ATTRIBUTE nodes.");
		}
		return element;
	},
	retrieveAttributes : function () {
		var attributes;
		if (this.attributes)
		{
			attributes = this.attributes;
		} else if (this.eventType === 1) {
			attributes = this.node.attributes;
			this.attributes = attributes;
		} else if (this.eventType === 10) {
			attributes = this.node.parentNode.attributes;
			this.attributes = attributes;
		} else {
			throw new Error("Attributes can only be retrieved for START_ELEMENT or ATTRIBUTE nodes.");
		}
		return attributes;
	},
	getAttributeCount : function() {
		var attributes = this.retrieveAttributes();
		return attributes.length;
	},
	getAttributeName : function(index) {
		var attributes = this.retrieveAttributes();
		if (index < 0 || index >= attributes.length) {
			throw new Error("Invalid attribute index [" + index + "].");
		}
		var attribute = attributes[index];
		if (Jsonix.Util.Type.isString(attribute.namespaceURI)) {
			return new Jsonix.XML.QName(attribute.namespaceURI, attribute.nodeName);
		} else {
			return new Jsonix.XML.QName(attribute.nodeName);
		}
	},
	getAttributeNameKey : function(index) {
		var attributes = this.retrieveAttributes();
		if (index < 0 || index >= attributes.length) {
			throw new Error("Invalid attribute index [" + index + "].");
		}
		var attribute = attributes[index];

		return Jsonix.XML.QName.key(attribute.namespaceURI, attribute.nodeName);
	},
	getAttributeValue : function(index) {
		var attributes = this.retrieveAttributes();
		if (index < 0 || index >= attributes.length) {
			throw new Error("Invalid attribute index [" + index + "].");
		}
		var attribute = attributes[index];
		return attribute.value;
	},
	getAttributeValueNS : null,
	getAttributeValueNSViaElement : function(namespaceURI, localPart) {
		var element = this.retrieveElement();
		return element.getAttributeNS(namespaceURI, localPart);
	},
	getAttributeValueNSViaAttribute : function(namespaceURI, localPart) {
		var attributeNode = this.getAttributeNodeNS(namespaceURI, localPart);
		if (Jsonix.Util.Type.exists(attributeNode)) {
			return attributeNode.nodeValue;
		}
		else
		{
			return null;
		}
	},
	getAttributeNodeNS : null,
	getAttributeNodeNSViaElement : function(namespaceURI, localPart) {
		var element = this.retrieveElement();
		return element.getAttributeNodeNS(namespaceURI, localPart);
	},
	getAttributeNodeNSViaAttributes : function(namespaceURI, localPart) {
		var attributeNode = null;
		var attributes = this.retrieveAttributes();
		var potentialNode, fullName;
		for (var i = 0, len = attributes.length; i < len; ++i) {
			potentialNode = attributes[i];
			if (potentialNode.namespaceURI === namespaceURI) {
				fullName = (potentialNode.prefix) ? (potentialNode.prefix + ':' + localPart) : localPart;
				if (fullName === potentialNode.nodeName) {
					attributeNode = potentialNode;
					break;
				}
			}
		}
		return attributeNode;
	},
	getElement : function() {
		if (this.eventType === 1 || this.eventType === 2) {
			// Go to the END_ELEMENT
			this.eventType = 2;
			return this.node;
		} else {
			throw new Error("Parser must be on START_ELEMENT or END_ELEMENT to return current element.");
		}
	},
	pushNS : function (node) {
		var pindex = this.pns.length - 1;
		var parentPnsItem = this.pns[pindex];
		var pnsItem = Jsonix.Util.Type.isObject(parentPnsItem) ? pindex : parentPnsItem;
		this.pns.push(pnsItem);
		pindex++;
		var reference = true;
		if (node.attributes)
		{
			var attributes = node.attributes;
			var alength = attributes.length;
			if (alength > 0)
			{
				// If given node has attributes
				for (var aindex = 0; aindex < alength; aindex++)
				{
					var attribute = attributes[aindex];
					var attributeName = attribute.nodeName;
					var p = null;
					var ns = null;
					var isNS = false;
					if (attributeName === 'xmlns')
					{
						p = '';
						ns = attribute.value;
						isNS = true;
					}
					else if (attributeName.substring(0, 6) === 'xmlns:')
					{
						p = attributeName.substring(6);
						ns = attribute.value;
						isNS = true;
					}
					// Attribute is a namespace declaration
					if (isNS)
					{
						if (reference)
						{
							pnsItem = Jsonix.Util.Type.cloneObject(this.pns[pnsItem], {});
							this.pns[pindex] = pnsItem;
							reference = false;
						}
						pnsItem[p] = ns;
					}
				}
			}
		}		
	},
	popNS : function () {
		this.pns.pop();
	},
	getNamespaceURI : function (p) {
		var pindex = this.pns.length - 1;
		var pnsItem = this.pns[pindex];
		pnsItem = Jsonix.Util.Type.isObject(pnsItem) ? pnsItem : this.pns[pnsItem];
		return pnsItem[p];
	},
	CLASS_NAME : "Jsonix.XML.Input"

});

Jsonix.XML.Input.prototype.getAttributeValueNS = (Jsonix.DOM.isDomImplementationAvailable()) ? Jsonix.XML.Input.prototype.getAttributeValueNSViaElement : Jsonix.XML.Input.prototype.getAttributeValueNSViaAttribute;
Jsonix.XML.Input.prototype.getAttributeNodeNS = (Jsonix.DOM.isDomImplementationAvailable()) ? Jsonix.XML.Input.prototype.getAttributeNodeNSViaElement : Jsonix.XML.Input.prototype.getAttributeNodeNSViaAttributes;

Jsonix.XML.Input.START_ELEMENT = 1;
Jsonix.XML.Input.END_ELEMENT = 2;
Jsonix.XML.Input.PROCESSING_INSTRUCTION = 3;
Jsonix.XML.Input.CHARACTERS = 4;
Jsonix.XML.Input.COMMENT = 5;
Jsonix.XML.Input.SPACE = 6;
Jsonix.XML.Input.START_DOCUMENT = 7;
Jsonix.XML.Input.END_DOCUMENT = 8;
Jsonix.XML.Input.ENTITY_REFERENCE = 9;
Jsonix.XML.Input.ATTRIBUTE = 10;
Jsonix.XML.Input.DTD = 11;
Jsonix.XML.Input.CDATA = 12;
Jsonix.XML.Input.NAMESPACE = 13;
Jsonix.XML.Input.NOTATION_DECLARATION = 14;
Jsonix.XML.Input.ENTITY_DECLARATION = 15;

Jsonix.XML.Output = Jsonix.Class({
	document : null,
	documentElement : null,
	node : null,
	nodes : null,
	nsp : null,
	pns : null,
	namespacePrefixIndex : 0,
	xmldom : null,
	initialize : function(options) {
		// REWORK
		if (typeof ActiveXObject !== 'undefined') {
			this.xmldom = new ActiveXObject("Microsoft.XMLDOM");
		} else {
			this.xmldom = null;
		}
		this.nodes = [];
		var rootNspItem =
		{
			'' : ''
		};
		rootNspItem[Jsonix.XML.XMLNS_NS] = Jsonix.XML.XMLNS_P;
		if (Jsonix.Util.Type.isObject(options)) {
			if (Jsonix.Util.Type.isObject(options.namespacePrefixes)) {
				Jsonix.Util.Type.cloneObject(options.namespacePrefixes, rootNspItem);
			}
		}
		this.nsp = [rootNspItem];
		var rootPnsItem =
		{
			'' : ''
		};
		rootPnsItem[Jsonix.XML.XMLNS_P] = Jsonix.XML.XMLNS_NS;
		this.pns = [rootPnsItem];
	},
	destroy : function() {
		this.xmldom = null;
	},
	writeStartDocument : function() {
		// TODO Check
		var doc = Jsonix.DOM.createDocument();
		this.document = doc;
		return this.push(doc);
	},
	writeEndDocument : function() {
		return this.pop();

	},
	writeStartElement : function(name) {
		Jsonix.Util.Ensure.ensureObject(name);
		var localPart = name.localPart || name.lp || null;
		Jsonix.Util.Ensure.ensureString(localPart);
		var ns = name.namespaceURI || name.ns || null;
		var namespaceURI = Jsonix.Util.Type.isString(ns) ? ns : '';

		var p = name.prefix || name.p;
		var prefix = this.getPrefix(namespaceURI, p);

		var qualifiedName = (!prefix ? localPart : prefix + ':' + localPart);

		var element;
		if (Jsonix.Util.Type.isFunction(this.document.createElementNS))	{
			element = this.document.createElementNS(namespaceURI, qualifiedName);
		}
		else if (this.xmldom) {
			element = this.xmldom.createNode(1, qualifiedName, namespaceURI);

		} else {
			throw new Error("Could not create an element node.");
		}
		this.peek().appendChild(element);
		this.push(element);
		this.declareNamespace(namespaceURI, prefix);
		if (this.documentElement === null)
		{
			this.documentElement = element;
			this.declareNamespaces();
		}
		return element;
	},
	writeEndElement : function() {
		return this.pop();
	},
	writeCharacters : function(text) {
		var node;
		if (Jsonix.Util.Type.isFunction(this.document.createTextNode))	{
			node = this.document.createTextNode(text);
		}
		else if (this.xmldom) {
			node = this.xmldom.createTextNode(text);
		} else {
			throw new Error("Could not create a text node.");
		}
		this.peek().appendChild(node);
		return node;

	},
	writeAttribute : function(name, value) {
		Jsonix.Util.Ensure.ensureString(value);
		Jsonix.Util.Ensure.ensureObject(name);
		var localPart = name.localPart || name.lp || null;
		Jsonix.Util.Ensure.ensureString(localPart);
		var ns = name.namespaceURI || name.ns || null;
		var namespaceURI = Jsonix.Util.Type.isString(ns) ? ns : '';
		var p = name.prefix || name.p || null;
		var prefix = this.getPrefix(namespaceURI, p);

		var qualifiedName = (!prefix ? localPart : prefix + ':' + localPart);

		var node = this.peek();

		if (namespaceURI === '') {
			node.setAttribute(qualifiedName, value);
		} else {
			if (node.setAttributeNS) {
				node.setAttributeNS(namespaceURI, qualifiedName, value);
			} else {
				if (this.xmldom) {
					var attribute = this.document.createNode(2, qualifiedName, namespaceURI);
					attribute.nodeValue = value;
					node.setAttributeNode(attribute);
				}
				else if (namespaceURI === Jsonix.XML.XMLNS_NS)
				{
					// XMLNS namespace may be processed unqualified
					node.setAttribute(qualifiedName, value);
				}
				else
				{
					throw new Error("The [setAttributeNS] method is not implemented");
				}
			}
			this.declareNamespace(namespaceURI, prefix);
		}
		
	},
	writeNode : function(node) {
		var importedNode;
		if (Jsonix.Util.Type.exists(this.document.importNode)) {
			importedNode = this.document.importNode(node, true);
		} else {
			importedNode = node;
		}
		this.peek().appendChild(importedNode);
		return importedNode;
	},
	push : function(node) {
		this.nodes.push(node);
		this.pushNS();
		return node;
	},
	peek : function() {
		return this.nodes[this.nodes.length - 1];
	},
	pop : function() {
		this.popNS();
		var result = this.nodes.pop();
		return result;
	},
	pushNS : function ()
	{
		var nindex = this.nsp.length - 1;
		var pindex = this.pns.length - 1;
		var parentNspItem = this.nsp[nindex];
		var parentPnsItem = this.pns[pindex];
		var nspItem = Jsonix.Util.Type.isObject(parentNspItem) ? nindex : parentNspItem;
		var pnsItem = Jsonix.Util.Type.isObject(parentPnsItem) ? pindex : parentPnsItem;
		this.nsp.push(nspItem);
		this.pns.push(pnsItem);
	},
	popNS : function ()
	{
		this.nsp.pop();
		this.pns.pop();
	},
	declareNamespaces : function ()
	{
		var index = this.nsp.length - 1;
		var nspItem = this.nsp[index];
		nspItem = Jsonix.Util.Type.isNumber(nspItem) ? this.nsp[nspItem] : nspItem;
		var ns, p;
		for (ns in nspItem)
		{
			if (nspItem.hasOwnProperty(ns))
			{
				p = nspItem[ns];
				this.declareNamespace(ns, p);
			}
		}
	},
	declareNamespace : function (ns, p)
	{
		var index = this.pns.length - 1;
		var pnsItem = this.pns[index];
		var reference;
		if (Jsonix.Util.Type.isNumber(pnsItem))
		{
			// Resolve the reference
			reference = true;
			pnsItem = this.pns[pnsItem];
		}
		else
		{
			reference = false;
		}
		// If this prefix is mapped to a different namespace and must be redeclared
		if (pnsItem[p] !== ns)
		{
			if (p === '')
			{
				this.writeAttribute({lp : Jsonix.XML.XMLNS_P}, ns);
			}
			else
			{
				this.writeAttribute({ns : Jsonix.XML.XMLNS_NS, lp : p, p : Jsonix.XML.XMLNS_P}, ns);
			}
			if (reference)
			{
				// If this was a reference, clone it and replace the reference
				pnsItem = Jsonix.Util.Type.cloneObject(pnsItem, {});
				this.pns[index] = pnsItem;
			}
			pnsItem[p] = ns;
		}
	},
	getPrefix : function (ns, p)
	{
		var index = this.nsp.length - 1;
		var nspItem = this.nsp[index];
		var reference;
		if (Jsonix.Util.Type.isNumber(nspItem))
		{
			// This is a reference, the item is the index of the parent item
			reference = true;
			nspItem = this.nsp[nspItem];
		}
		else
		{
			reference = false;
		}
		if (Jsonix.Util.Type.isString(p))
		{
			var oldp = nspItem[ns];
			// If prefix is already declared and equals the proposed prefix 
			if (p === oldp)
			{
				// Nothing to do
			}
			else
			{
				// If this was a reference, we have to clone it now
				if (reference)
				{
					nspItem = Jsonix.Util.Type.cloneObject(nspItem, {});
					this.nsp[index] = nspItem;
				}
				nspItem[ns] = p;
			}
		}
		else
		{
			p = nspItem[ns];
			if (!Jsonix.Util.Type.exists(p)) {
				p = 'p' + (this.namespacePrefixIndex++);
				// If this was a reference, we have to clone it now
				if (reference)
				{
					nspItem = Jsonix.Util.Type.cloneObject(nspItem, {});
					this.nsp[index] = nspItem;
				}
				nspItem[ns] = p;
			}
		}
		return p;
	},
	getNamespaceURI : function (p) {
		var pindex = this.pns.length - 1;
		var pnsItem = this.pns[pindex];
		pnsItem = Jsonix.Util.Type.isObject(pnsItem) ? pnsItem : this.pns[pnsItem];
		return pnsItem[p];
	},
	CLASS_NAME : "Jsonix.XML.Output"
});
Jsonix.Mapping = {};
Jsonix.Mapping.Style = Jsonix.Class({
	marshaller : null,
	unmarshaller : null,
	module : null,
	elementInfo : null,
	classInfo : null,
	enumLeafInfo : null,
	anyAttributePropertyInfo : null,
	anyElementPropertyInfo : null,
	attributePropertyInfo : null,
	elementMapPropertyInfo : null,
	elementPropertyInfo : null,
	elementsPropertyInfo : null,
	elementRefPropertyInfo : null,
	elementRefsPropertyInfo : null,
	valuePropertyInfo : null,
	initialize : function() {
	},
	CLASS_NAME : 'Jsonix.Mapping.Style'
});

Jsonix.Mapping.Style.STYLES = {};
Jsonix.Mapping.Styled = Jsonix.Class({
	mappingStyle : null,
	initialize : function(options) {
		if (Jsonix.Util.Type.exists(options)) {
			Jsonix.Util.Ensure.ensureObject(options);
			if (Jsonix.Util.Type.isString(options.mappingStyle)) {
				var mappingStyle = Jsonix.Mapping.Style.STYLES[options.mappingStyle];
				if (!mappingStyle) {
					throw new Error("Mapping style [" + options.mappingStyle + "] is not known.");
				}
				this.mappingStyle = mappingStyle;
			} else if (Jsonix.Util.Type.isObject(options.mappingStyle)) {
				this.mappingStyle = options.mappingStyle;
			}
		}
		if (!this.mappingStyle) {
			this.mappingStyle = Jsonix.Mapping.Style.STYLES.standard;
		}
	},
	CLASS_NAME : 'Jsonix.Mapping.Styled'
});
Jsonix.Binding = {};
Jsonix.Binding.Marshalls = {
};

Jsonix.Binding.Marshalls.Element = Jsonix.Class({
	marshalElement : function(value, context, output, scope) {
		var elementValue = this.convertToTypedNamedValue(value, context, output, scope);
		var declaredTypeInfo = elementValue.typeInfo;
		var actualTypeInfo = undefined;
		if (context.supportXsiType && Jsonix.Util.Type.exists(elementValue.value))
		{
			var typeInfoByValue = context.getTypeInfoByValue(elementValue.value);
			if (typeInfoByValue && typeInfoByValue.typeName)
			{
				actualTypeInfo = typeInfoByValue;
			}
		}
		var typeInfo = actualTypeInfo || declaredTypeInfo;
		if (typeInfo) {
			output.writeStartElement(elementValue.name);
			if (actualTypeInfo && declaredTypeInfo !== actualTypeInfo) {
				var xsiTypeName = actualTypeInfo.typeName;
				var xsiType = Jsonix.Schema.XSD.QName.INSTANCE.print(xsiTypeName, context, output, scope);
				output.writeAttribute(Jsonix.Schema.XSI.TYPE_QNAME, xsiType);
			}
			if (Jsonix.Util.Type.exists(elementValue.value)) {
				typeInfo.marshal(elementValue.value, context, output, scope);
			}
			output.writeEndElement();
		} else {
			throw new Error("Element [" + elementValue.name.key + "] is not known in this context, could not determine its type.");
		}
	},
	getTypeInfoByElementName : function(name, context, scope) {
		var elementInfo = context.getElementInfo(name, scope);
		if (Jsonix.Util.Type.exists(elementInfo)) {
			return elementInfo.typeInfo;
		} else {
			return undefined;
		}
	}
});
Jsonix.Binding.Marshalls.Element.AsElementRef = Jsonix.Class({
	convertToTypedNamedValue : function(value, context, output, scope) {
		Jsonix.Util.Ensure.ensureObject(value);
		var elementValue = this.convertToNamedValue(value, context, output, scope);
		return {
			name : elementValue.name,
			value : elementValue.value,
			typeInfo : this.getTypeInfoByElementName(elementValue.name, context, scope)
		};
	},
	convertToNamedValue : function(elementValue, context, output, scope) {
		var name;
		var value;
		if (Jsonix.Util.Type.exists(elementValue.name) && !Jsonix.Util.Type.isUndefined(elementValue.value)) {
			name = Jsonix.XML.QName.fromObjectOrString(elementValue.name, context);
			value = Jsonix.Util.Type.exists(elementValue.value) ? elementValue.value : null;
			return {
				name : name,
				value : value
			};
		} else {
			for ( var propertyName in elementValue) {
				if (elementValue.hasOwnProperty(propertyName)) {
					name = Jsonix.XML.QName.fromObjectOrString(propertyName, context);
					value = elementValue[propertyName];
					return {
						name : name,
						value : value
					};
				}
			}
		}
		throw new Error("Invalid element value [" + elementValue + "]. Element values must either have {name:'myElementName', value: elementValue} or {myElementName:elementValue} structure.");
	}
});

Jsonix.Binding.Unmarshalls = {};

Jsonix.Binding.Unmarshalls.WrapperElement = Jsonix.Class({
	mixed : false,
	unmarshalWrapperElement : function(context, input, scope, callback) {
		var et = input.next();
		while (et !== Jsonix.XML.Input.END_ELEMENT) {
			if (et === Jsonix.XML.Input.START_ELEMENT) {
				this.unmarshalElement(context, input, scope, callback);
			} else
			// Characters
			if (this.mixed && (et === Jsonix.XML.Input.CHARACTERS || et === Jsonix.XML.Input.CDATA || et === Jsonix.XML.Input.ENTITY_REFERENCE)) {
				callback(input.getText());
			} else if (et === Jsonix.XML.Input.SPACE || et === Jsonix.XML.Input.COMMENT || et === Jsonix.XML.Input.PROCESSING_INSTRUCTION) {
				// Skip whitespace
			} else {
				throw new Error("Illegal state: unexpected event type [" + et + "].");
			}
			et = input.next();
		}
	}
});

Jsonix.Binding.Unmarshalls.Element = Jsonix.Class({
	allowTypedObject : true,
	allowDom : false,
	unmarshalElement : function(context, input, scope, callback) {
		if (input.eventType != 1) {
			throw new Error("Parser must be on START_ELEMENT to read next element.");
		}
		var typeInfo = this.getTypeInfoByInputElement(context, input, scope);
		var name = input.getName();
		var elementValue;
		if (this.allowTypedObject) {
			if (Jsonix.Util.Type.exists(typeInfo)) {
				var value = typeInfo.unmarshal(context, input, scope);
				var typedNamedValue = {
					name : name,
					value : value,
					typeInfo : typeInfo
				};
				elementValue = this.convertFromTypedNamedValue(typedNamedValue, context, input, scope);
			} else if (this.allowDom) {
				elementValue = input.getElement();
			} else {
				throw new Error("Element [" + name.toString() + "] could not be unmarshalled as is not known in this context and the property does not allow DOM content.");
			}
		} else if (this.allowDom) {
			elementValue = input.getElement();
		} else {
			throw new Error("Element [" + name.toString() + "] could not be unmarshalled as the property neither allows typed objects nor DOM as content. This is a sign of invalid mappings, do not use [allowTypedObject : false] and [allowDom : false] at the same time.");
		}
		callback(elementValue);
	},
	getTypeInfoByInputElement : function(context, input, scope) {
		var xsiTypeInfo = null;
		if (context.supportXsiType) {
			var xsiType = input.getAttributeValueNS(Jsonix.Schema.XSI.NAMESPACE_URI, Jsonix.Schema.XSI.TYPE);
			if (Jsonix.Util.StringUtils.isNotBlank(xsiType)) {
				var xsiTypeName = Jsonix.Schema.XSD.QName.INSTANCE.parse(xsiType, context, input, scope);
				xsiTypeInfo = context.getTypeInfoByTypeNameKey(xsiTypeName.key);
			}
		}
		var name = input.getName();
		var typeInfo = xsiTypeInfo ? xsiTypeInfo : this.getTypeInfoByElementName(name, context, scope);
		return typeInfo;
	},
	getTypeInfoByElementName : function(name, context, scope) {
		var elementInfo = context.getElementInfo(name, scope);
		if (Jsonix.Util.Type.exists(elementInfo)) {
			return elementInfo.typeInfo;
		} else {
			return undefined;
		}
	}
});

Jsonix.Binding.Unmarshalls.Element.AsElementRef = Jsonix.Class({
	convertFromTypedNamedValue : function(typedNamedValue, context, input, scope) {
		return {
			name : typedNamedValue.name,
			value : typedNamedValue.value
		};
	}
});

Jsonix.Binding.Unmarshalls.Element.AsSimplifiedElementRef = Jsonix.Class({
	convertFromTypedNamedValue : function(typedNamedValue, context, input, scope) {
		var propertyName = typedNamedValue.name.toCanonicalString(context);
		var value = {};
		value[propertyName] = typedNamedValue.value;
		return value;
	}
});
Jsonix.Binding.Marshaller = Jsonix.Class(Jsonix.Binding.Marshalls.Element, Jsonix.Binding.Marshalls.Element.AsElementRef, {
	context : null,
	initialize : function(context) {
		Jsonix.Util.Ensure.ensureObject(context);
		this.context = context;
	},
	marshalString : function(value) {
		var doc = this.marshalDocument(value);
		var text = Jsonix.DOM.serialize(doc);
		return text;
	},
	marshalDocument : function(value) {
		var output = new Jsonix.XML.Output({
			namespacePrefixes : this.context.namespacePrefixes
		});

		var doc = output.writeStartDocument();
		this.marshalElement(value, this.context, output, undefined);
		output.writeEndDocument();
		return doc;
	},
	CLASS_NAME : 'Jsonix.Binding.Marshaller'
});
Jsonix.Binding.Marshaller.Simplified = Jsonix.Class(Jsonix.Binding.Marshaller, {
	CLASS_NAME : 'Jsonix.Binding.Marshaller.Simplified'
});
Jsonix.Binding.Unmarshaller = Jsonix.Class(Jsonix.Binding.Unmarshalls.Element, Jsonix.Binding.Unmarshalls.Element.AsElementRef, {
	context : null,
	allowTypedObject : true,
	allowDom : false,
	initialize : function(context) {
		Jsonix.Util.Ensure.ensureObject(context);
		this.context = context;
	},
	unmarshalString : function(text) {
		Jsonix.Util.Ensure.ensureString(text);
		var doc = Jsonix.DOM.parse(text);
		return this.unmarshalDocument(doc);
	},
	unmarshalURL : function(url, callback, options) {
		Jsonix.Util.Ensure.ensureString(url);
		Jsonix.Util.Ensure.ensureFunction(callback);
		if (Jsonix.Util.Type.exists(options)) {
			Jsonix.Util.Ensure.ensureObject(options);
		}
		that = this;
		Jsonix.DOM.load(url, function(doc) {
			callback(that.unmarshalDocument(doc));
		}, options);
	},
	unmarshalFile : function(fileName, callback, options) {
		if (typeof _jsonix_fs === 'undefined') {
			throw new Error("File unmarshalling is only available in environments which support file systems.");
		}
		Jsonix.Util.Ensure.ensureString(fileName);
		Jsonix.Util.Ensure.ensureFunction(callback);
		if (Jsonix.Util.Type.exists(options)) {
			Jsonix.Util.Ensure.ensureObject(options);
		}
		that = this;
		var fs = _jsonix_fs;
		fs.readFile(fileName, options, function(err, data) {
			if (err) {
				throw err;
			} else {
				var text = data.toString();
				var doc = Jsonix.DOM.parse(text);
				callback(that.unmarshalDocument(doc));
			}
		});
	},
	unmarshalDocument : function(doc, scope) {
		var input = new Jsonix.XML.Input(doc);
		var result = null;
		var callback = function(_result) {
			result = _result;
		};
		input.nextTag();
		this.unmarshalElement(this.context, input, scope, callback);
		return result;

	},
	CLASS_NAME : 'Jsonix.Binding.Unmarshaller'
});
Jsonix.Binding.Unmarshaller.Simplified = Jsonix.Class(Jsonix.Binding.Unmarshaller, Jsonix.Binding.Unmarshalls.Element.AsSimplifiedElementRef, {
	CLASS_NAME : 'Jsonix.Binding.Unmarshaller.Simplified'
});
Jsonix.Model.TypeInfo = Jsonix.Class({
	name : null,
	baseTypeInfo : null,
	initialize : function() {
	},
	isBasedOn : function(typeInfo) {
		var currentTypeInfo = this;
		while (currentTypeInfo) {
			if (typeInfo === currentTypeInfo) {
				return true;
			}
			currentTypeInfo = currentTypeInfo.baseTypeInfo;
		}
		return false;
	},
	CLASS_NAME : 'Jsonix.Model.TypeInfo'
});
Jsonix.Model.ClassInfo = Jsonix
		.Class(Jsonix.Model.TypeInfo, Jsonix.Mapping.Styled, {
			name : null,
			localName : null,
			typeName : null,
			instanceFactory : null,
			properties : null,
			propertiesMap : null,
			structure : null,
			targetNamespace : '',
			defaultElementNamespaceURI : '',
			defaultAttributeNamespaceURI : '',
			built : false,
			initialize : function(mapping, options) {
				Jsonix.Model.TypeInfo.prototype.initialize.apply(this, []);
				Jsonix.Mapping.Styled.prototype.initialize.apply(this, [options]);
				Jsonix.Util.Ensure.ensureObject(mapping);
				var n = mapping.name||mapping.n||undefined;
				Jsonix.Util.Ensure.ensureString(n);
				this.name = n;
				
				var ln = mapping.localName||mapping.ln||null;
				this.localName = ln;

				var dens = mapping.defaultElementNamespaceURI||mapping.dens||mapping.targetNamespace||mapping.tns||'';
				this.defaultElementNamespaceURI = dens;
				
				var tns =  mapping.targetNamespace||mapping.tns||mapping.defaultElementNamespaceURI||mapping.dens||this.defaultElementNamespaceURI;
				this.targetNamespace = tns;

				var dans = mapping.defaultAttributeNamespaceURI||mapping.dans||'';
				this.defaultAttributeNamespaceURI = dans;
				
				var bti = mapping.baseTypeInfo||mapping.bti||null;
				this.baseTypeInfo = bti;
				
				var inF = mapping.instanceFactory||mapping.inF||undefined;
				if (Jsonix.Util.Type.exists(inF)) {
					// TODO: should we support instanceFactory as functions?
					// For the pure JSON configuration?
					Jsonix.Util.Ensure.ensureFunction(inF);
					this.instanceFactory = inF;
				}
				
				var tn = mapping.typeName||mapping.tn||undefined;
				
				if (Jsonix.Util.Type.exists(tn))
				{
					if (Jsonix.Util.Type.isString(tn))
					{
						this.typeName = new Jsonix.XML.QName(this.targetNamespace, tn);
					}
					else {
						this.typeName = Jsonix.XML.QName.fromObject(tn);
					}
				}
				else if (Jsonix.Util.Type.exists(ln))
				{
					this.typeName = new Jsonix.XML.QName(tns, ln);
				}
				
				this.properties = [];
				this.propertiesMap = {};
				var ps = mapping.propertyInfos||mapping.ps||[];
				Jsonix.Util.Ensure.ensureArray(ps);
				for ( var index = 0; index < ps.length; index++) {
					this.p(ps[index]);
				}				
			},
			getPropertyInfoByName : function(name) {
				return this.propertiesMap[name];
			},
			// Obsolete
			destroy : function() {
			},
			build : function(context, module) {
				if (!this.built) {
					this.baseTypeInfo = context.resolveTypeInfo(this.baseTypeInfo, module);
					if (Jsonix.Util.Type.exists(this.baseTypeInfo)) {
						this.baseTypeInfo.build(context, module);
					}

					// Build properties in this context
					for ( var index = 0; index < this.properties.length; index++) {
						var propertyInfo = this.properties[index];
						propertyInfo.build(context, module);
					}

					// Build the structure
					var structure = {
						elements : null,
						attributes : {},
						anyAttribute : null,
						value : null,
						any : null
					};
					this.buildStructure(context, structure);
					this.structure = structure;
				}
			},
			buildStructure : function(context, structure) {
				if (Jsonix.Util.Type.exists(this.baseTypeInfo)) {
					this.baseTypeInfo.buildStructure(context, structure);
				}
				for ( var index = 0; index < this.properties.length; index++) {
					var propertyInfo = this.properties[index];
					propertyInfo.buildStructure(context, structure);
				}
			},
			unmarshal : function(context, input) {
				this.build(context);
				var result;
				
				if (this.instanceFactory) {
					result = new this.instanceFactory();
				}
				else
				{
					result = { TYPE_NAME : this.name }; 
				}
				
				if (input.eventType !== 1) {
					throw new Error("Parser must be on START_ELEMENT to read a class info.");
				}

				// Read attributes
				if (Jsonix.Util.Type.exists(this.structure.attributes)) {
					var attributeCount = input.getAttributeCount();
					if (attributeCount !== 0) {
						for ( var index = 0; index < attributeCount; index++) {
							var attributeNameKey = input
									.getAttributeNameKey(index);
							if (Jsonix.Util.Type
									.exists(this.structure.attributes[attributeNameKey])) {
								var attributeValue = input
										.getAttributeValue(index);
								if (Jsonix.Util.Type.isString(attributeValue)) {
									var attributePropertyInfo = this.structure.attributes[attributeNameKey];
									this.unmarshalPropertyValue(context, input,
											attributePropertyInfo, result,
											attributeValue);
								}
							}
						}
					}
				}
				// Read any attribute
				if (Jsonix.Util.Type.exists(this.structure.anyAttribute)) {
					var propertyInfo = this.structure.anyAttribute;
					this
							.unmarshalProperty(context, input, propertyInfo,
									result);
				}
				// Read elements
				if (Jsonix.Util.Type.exists(this.structure.elements)) {

					var et = input.next();
					while (et !== Jsonix.XML.Input.END_ELEMENT) {
						if (et === Jsonix.XML.Input.START_ELEMENT) {
							// New sub-element starts
							var elementNameKey = input.getNameKey();
							if (Jsonix.Util.Type
									.exists(this.structure.elements[elementNameKey])) {
								var elementPropertyInfo = this.structure.elements[elementNameKey];
								this.unmarshalProperty(context, input,
										elementPropertyInfo, result);
							} else if (Jsonix.Util.Type
									.exists(this.structure.any)) {
								// TODO Refactor

								var anyPropertyInfo = this.structure.any;
								this.unmarshalProperty(context, input,
										anyPropertyInfo, result);
							} else {
								// TODO optionally report a validation error that the element is not expected
								et = input.skipElement();
							}
						} else if ((et === Jsonix.XML.Input.CHARACTERS || et === Jsonix.XML.Input.CDATA || et === Jsonix.XML.Input.ENTITY_REFERENCE)) {
							if (Jsonix.Util.Type.exists(this.structure.mixed))
							{
								// Characters and structure has a mixed property
								var mixedPropertyInfo = this.structure.mixed;
								this.unmarshalProperty(context, input,
										mixedPropertyInfo, result);
							}
						} else if (et === Jsonix.XML.Input.SPACE || et === Jsonix.XML.Input.COMMENT	|| et === Jsonix.XML.Input.PROCESSING_INSTRUCTION) {
							// Ignore
						} else {
							throw new Error("Illegal state: unexpected event type [" + et	+ "].");
						}
						et = input.next();
					}
				} else if (Jsonix.Util.Type.exists(this.structure.value)) {
					var valuePropertyInfo = this.structure.value;
					this.unmarshalProperty(context, input, valuePropertyInfo,
							result);
				} else {
					// Just skip everything
					input.nextTag();
				}
				if (input.eventType !== 2) {
					throw new Error("Illegal state: must be END_ELEMENT.");
				}
				return result;
			},
			unmarshalProperty : function(context, input, propertyInfo, result) {
				var propertyValue = propertyInfo
						.unmarshal(context, input, this);
				propertyInfo.setProperty(result, propertyValue);
			},
			unmarshalPropertyValue : function(context, input, propertyInfo,
					result, value) {
				var propertyValue = propertyInfo.unmarshalValue(value, context, input, this);
				propertyInfo.setProperty(result, propertyValue);
			},
			marshal : function(value, context, output, scope) {
				if (this.isMarshallable(value, context, scope))
				{
					// TODO This must be reworked
					if (Jsonix.Util.Type.exists(this.baseTypeInfo)) {
						this.baseTypeInfo.marshal(value, context, output);
					}
					for ( var index = 0; index < this.properties.length; index++) {
						var propertyInfo = this.properties[index];
						var propertyValue = value[propertyInfo.name];
						if (Jsonix.Util.Type.exists(propertyValue)) {
							propertyInfo.marshal(propertyValue, context, output, this);
						}
					}
				}
				else
				{
					// Otherwise if there is just one property, use this property to marshal
					if (this.structure.value)
					{
						var valuePropertyInfo = this.structure.value;
						valuePropertyInfo.marshal(value, context, output, this);
					}
					else if (this.properties.length === 1)
					{
						var singlePropertyInfo = this.properties[0];
						singlePropertyInfo.marshal(value, context, output, this);
					}
					else
					{
						// TODO throw an error
						throw new Error("The passed value [" + value + "] is not an object and there is no single suitable property to marshal it.");
					}
				}
			},
			// Checks if the value is marshallable
			isMarshallable : function(value, context, scope) {
				return this.isInstance(value, context, scope) || (Jsonix.Util.Type.isObject(value) && !Jsonix.Util.Type.isArray(value));
			},
			isInstance : function(value, context, scope) {
				if (this.instanceFactory) {
					return value instanceof this.instanceFactory;
				}
				else {
					return Jsonix.Util.Type.isObject(value) && Jsonix.Util.Type.isString(value.TYPE_NAME) && value.TYPE_NAME === this.name;
				}
			},

			// Obsolete, left for backwards compatibility
			b : function(baseTypeInfo) {
				Jsonix.Util.Ensure.ensureObject(baseTypeInfo);
				this.baseTypeInfo = baseTypeInfo;
				return this;
			},
			// Obsolete, left for backwards compatibility
			ps : function() {
				return this;
			},
			p : function(mapping) {
				Jsonix.Util.Ensure.ensureObject(mapping);
				// If mapping is an instance of the property class
				if (mapping instanceof Jsonix.Model.PropertyInfo) {
					this.addProperty(mapping);
				}
				// Else create it via generic mapping configuration
				else {
					mapping = Jsonix.Util.Type.cloneObject(mapping);
					var type = mapping.type||mapping.t||'element';
					// Locate the creator function
					if (Jsonix.Util.Type
							.isFunction(this.propertyInfoCreators[type])) {
						var propertyInfoCreator = this.propertyInfoCreators[type];
						// Call the creator function
						propertyInfoCreator.call(this, mapping);
					} else {
						throw new Error("Unknown property info type [" + type + "].");
					}
				}
			},
			aa : function(mapping) {
				this.addDefaultNamespaces(mapping);
				return this
						.addProperty(new this.mappingStyle.anyAttributePropertyInfo(
								mapping, {
									mappingStyle : this.mappingStyle
								}));
			},
			ae : function(mapping) {
				this.addDefaultNamespaces(mapping);
				return this
						.addProperty(new this.mappingStyle.anyElementPropertyInfo(
								mapping, {
									mappingStyle : this.mappingStyle
								}));
			},
			a : function(mapping) {
				this.addDefaultNamespaces(mapping);
				return this.addProperty(new this.mappingStyle.attributePropertyInfo(
						mapping, {
							mappingStyle : this.mappingStyle
						}));
			},
			em : function(mapping) {
				this.addDefaultNamespaces(mapping);
				return this
						.addProperty(new this.mappingStyle.elementMapPropertyInfo(
								mapping, {
									mappingStyle : this.mappingStyle
								}));
			},
			e : function(mapping) {
				this.addDefaultNamespaces(mapping);
				return this.addProperty(new this.mappingStyle.elementPropertyInfo(
						mapping, {
							mappingStyle : this.mappingStyle
						}));
			},
			es : function(mapping) {
				this.addDefaultNamespaces(mapping);
				return this.addProperty(new this.mappingStyle.elementsPropertyInfo(
						mapping, {
							mappingStyle : this.mappingStyle
						}));
			},
			er : function(mapping) {
				this.addDefaultNamespaces(mapping);
				return this
						.addProperty(new this.mappingStyle.elementRefPropertyInfo(
								mapping, {
									mappingStyle : this.mappingStyle
								}));
			},
			ers : function(mapping) {
				this.addDefaultNamespaces(mapping);
				return this
						.addProperty(new this.mappingStyle.elementRefsPropertyInfo(
								mapping, {
									mappingStyle : this.mappingStyle
								}));
			},
			v : function(mapping) {
				this.addDefaultNamespaces(mapping);
				return this.addProperty(new this.mappingStyle.valuePropertyInfo(
						mapping, {
							mappingStyle : this.mappingStyle
						}));
			},
			addDefaultNamespaces : function(mapping) {
				if (Jsonix.Util.Type.isObject(mapping)) {
					if (!Jsonix.Util.Type
							.isString(mapping.defaultElementNamespaceURI)) {
						mapping.defaultElementNamespaceURI = this.defaultElementNamespaceURI;
					}
					if (!Jsonix.Util.Type
							.isString(mapping.defaultAttributeNamespaceURI)) {
						mapping.defaultAttributeNamespaceURI = this.defaultAttributeNamespaceURI;
					}
				}
			},
			addProperty : function(property) {
				this.properties.push(property);
				this.propertiesMap[property.name] = property;
				return this;
			},
			CLASS_NAME : 'Jsonix.Model.ClassInfo'
		});
Jsonix.Model.ClassInfo.prototype.propertyInfoCreators = {
	"aa" : Jsonix.Model.ClassInfo.prototype.aa,
	"anyAttribute" : Jsonix.Model.ClassInfo.prototype.aa,
	"ae" : Jsonix.Model.ClassInfo.prototype.ae,
	"anyElement" : Jsonix.Model.ClassInfo.prototype.ae,
	"a" : Jsonix.Model.ClassInfo.prototype.a,
	"attribute" : Jsonix.Model.ClassInfo.prototype.a,
	"em" : Jsonix.Model.ClassInfo.prototype.em,
	"elementMap" : Jsonix.Model.ClassInfo.prototype.em,
	"e" : Jsonix.Model.ClassInfo.prototype.e,
	"element" : Jsonix.Model.ClassInfo.prototype.e,
	"es" : Jsonix.Model.ClassInfo.prototype.es,
	"elements" : Jsonix.Model.ClassInfo.prototype.es,
	"er" : Jsonix.Model.ClassInfo.prototype.er,
	"elementRef" : Jsonix.Model.ClassInfo.prototype.er,
	"ers" : Jsonix.Model.ClassInfo.prototype.ers,
	"elementRefs" : Jsonix.Model.ClassInfo.prototype.ers,
	"v" : Jsonix.Model.ClassInfo.prototype.v,
	"value" : Jsonix.Model.ClassInfo.prototype.v
};
Jsonix.Model.EnumLeafInfo = Jsonix.Class(Jsonix.Model.TypeInfo, {
	name : null,
	baseTypeInfo : 'String',
	entries : null,
	keys : null,
	values : null,
	built : false,
	initialize : function(mapping) {
		Jsonix.Model.TypeInfo.prototype.initialize.apply(this, []);
		Jsonix.Util.Ensure.ensureObject(mapping);
		
		var n = mapping.name||mapping.n||undefined;
		Jsonix.Util.Ensure.ensureString(n);
		this.name = n;
		
		var bti = mapping.baseTypeInfo||mapping.bti||'String';
		this.baseTypeInfo = bti;
		
		var vs = mapping.values||mapping.vs||undefined;
		Jsonix.Util.Ensure.ensureExists(vs);
		if (!(Jsonix.Util.Type.isObject(vs) || Jsonix.Util.Type.isArray(vs))) {
			throw new Error('Enum values must be either an array or an object.');
		}
		else
		{
			this.entries = vs;
		}		
	},
	build : function(context, module) {
		if (!this.built) {
			this.baseTypeInfo = context.resolveTypeInfo(this.baseTypeInfo, module);
			this.baseTypeInfo.build(context, module);
			var items = this.entries;
			var entries = {};
			var keys = [];
			var values = [];
			var index = 0;
			var key;
			var value;
			// If values is an array, process individual items
			if (Jsonix.Util.Type.isArray(items))
			{
				// Build properties in this context
				for (index = 0; index < items.length; index++) {
					value = items[index];
					if (Jsonix.Util.Type.isString(value)) {
						key = value;
						if (!(Jsonix.Util.Type.isFunction(this.baseTypeInfo.parse)))
						{
							throw new Error('Enum value is provided as string but the base type ['+this.baseTypeInfo.name+'] of the enum info [' + this.name + '] does not implement the parse method.');
						}
						// Using null as input since input is not available
						value = this.baseTypeInfo.parse(value, context, null, this);
					}
					else
					{
						if (this.baseTypeInfo.isInstance(value, context, this))
						{
							if (!(Jsonix.Util.Type.isFunction(this.baseTypeInfo.print)))
							{
								throw new Error('The base type ['+this.baseTypeInfo.name+'] of the enum info [' + this.name + '] does not implement the print method, unable to produce the enum key as string.');
							}
							// Using null as output since output is not available at this moment
							key = this.baseTypeInfo.print(value, context, null, this);
						}
						else
						{
							throw new Error('Enum value [' + value + '] is not an instance of the enum base type [' + this.baseTypeInfo.name + '].');
						}
					}
					entries[key] = value;
					keys[index] = key;
					values[index] = value;
				}
			}
			else if (Jsonix.Util.Type.isObject(items))
			{
				for (key in items) {
					if (items.hasOwnProperty(key)) {
						value = items[key];
						if (Jsonix.Util.Type.isString(value)) {
							if (!(Jsonix.Util.Type.isFunction(this.baseTypeInfo.parse)))
							{
								throw new Error('Enum value is provided as string but the base type ['+this.baseTypeInfo.name+'] of the enum info [' + this.name + '] does not implement the parse method.');
							}
							// Using null as input since input is not available
							value = this.baseTypeInfo.parse(value, context, null, this);
						}
						else
						{
							if (!this.baseTypeInfo.isInstance(value, context, this))
							{
								throw new Error('Enum value [' + value + '] is not an instance of the enum base type [' + this.baseTypeInfo.name + '].');
							}
						}
						entries[key] = value;
						keys[index] = key;
						values[index] = value;
						index++;
					}
				}
			}
			else {
				throw new Error('Enum values must be either an array or an object.');
			}
			this.entries = entries;
			this.keys = keys;
			this.values = values;
			this.built = true;
		}
	},
	unmarshal : function(context, input, scope) {
		var text = input.getElementText();
		return this.parse(text, context, input, scope);
	},
	marshal : function(value, context, output, scope) {
		if (Jsonix.Util.Type.exists(value)) {
			output.writeCharacters(this.reprint(value, context, output, scope));
		}
	},
	reprint : function(value, context, output, scope) {
		if (Jsonix.Util.Type.isString(value) && !this.isInstance(value, context, scope)) {
			// Using null as input since input is not available
			return this.print(this.parse(value, context, null, scope), context, output, scope);
		} else {
			return this.print(value, context, output, scope);
		}
	},
	print : function(value, context, output, scope) {
		for (var index = 0; index < this.values.length; index++)
		{
			if (this.values[index] === value)
			{
				return this.keys[index];
			}
		}
		throw new Error('Value [' + value + '] is invalid for the enum type [' + this.name + '].');
	},
	parse : function(text, context, input, scope) {
		Jsonix.Util.Ensure.ensureString(text);
		if (this.entries.hasOwnProperty(text))
		{
			return this.entries[text];
		}
		else
		{
			throw new Error('Value [' + text + '] is invalid for the enum type [' + this.name + '].');
		}
	},
	isInstance : function(value, context, scope) {
		for (var index = 0; index < this.values.length; index++)
		{
			if (this.values[index] === value)
			{
				return true;
			}
		}
		return false;
	},
	CLASS_NAME : 'Jsonix.Model.EnumLeafInfo'
});
Jsonix.Model.ElementInfo = Jsonix.Class({
	elementName : null,
	typeInfo : null,
	substitutionHead : null,
	scope : null,
	built : false,
	initialize : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping);
		
		var dens = mapping.defaultElementNamespaceURI||mapping.dens||'';
		this.defaultElementNamespaceURI = dens;
		
		var en = mapping.elementName || mapping.en||undefined;
		if (Jsonix.Util.Type.isObject(en)) {
			this.elementName = Jsonix.XML.QName.fromObject(en);
		} else {
			Jsonix.Util.Ensure.ensureString(en);
			this.elementName = new Jsonix.XML.QName(this.defaultElementNamespaceURI, en);
		}
		
		var ti = mapping.typeInfo||mapping.ti||'String';
		this.typeInfo = ti;
		
		var sh = mapping.substitutionHead||mapping.sh||null;
		this.substitutionHead = sh;
		
		var sc = mapping.scope||mapping.sc||null;
		this.scope = sc;
	},
	build : function(context, module) {
		// If element info is not yet built
		if (!this.built) {
			this.typeInfo = context.resolveTypeInfo(this.typeInfo, module);
			this.scope = context.resolveTypeInfo(this.scope, module);
			this.built = true;
		}
	},
	CLASS_NAME : 'Jsonix.Model.ElementInfo'
});
Jsonix.Model.PropertyInfo = Jsonix.Class({
	name : null,
	collection : false,
	targetNamespace : '',
	defaultElementNamespaceURI : '',
	defaultAttributeNamespaceURI : '',
	built : false,
	initialize : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping);
		var n = mapping.name || mapping.n || undefined;
		Jsonix.Util.Ensure.ensureString(n);
		this.name = n;
		var dens = mapping.defaultElementNamespaceURI || mapping.dens || mapping.targetNamespace || mapping.tns || '';
		this.defaultElementNamespaceURI = dens;
		var tns = mapping.targetNamespace || mapping.tns || mapping.defaultElementNamespaceURI || mapping.dens || this.defaultElementNamespaceURI;
		this.targetNamespace = tns;
		var dans = mapping.defaultAttributeNamespaceURI || mapping.dans || '';
		this.defaultAttributeNamespaceURI = dans;
		var col = mapping.collection || mapping.col || false;
		this.collection = col;
		var rq = mapping.required || mapping.rq || false;
		this.required = rq;
		if (this.collection) {
			var mno;
			if (Jsonix.Util.Type.isNumber(mapping.minOccurs)) {
				mno = mapping.minOccurs;
			}
			else if (Jsonix.Util.Type.isNumber(mapping.mno)) {
				mno = mapping.mno;
			}
			else {
				mno = 1;
			}
			this.minOccurs = mno;
			var mxo;
			if (Jsonix.Util.Type.isNumber(mapping.maxOccurs)) {
				mxo = mapping.maxOccurs;
			}
			else if (Jsonix.Util.Type.isNumber(mapping.mxo)) {
				mxo = mapping.mxo;
			}
			else {
				mxo = null;
			}
			this.maxOccurs = mxo;
		}
	},
	build : function(context, module) {
		if (!this.built) {
			this.doBuild(context, module);
			this.built = true;
		}
	},
	doBuild : function(context, module) {
		throw new Error("Abstract method [doBuild].");
	},
	buildStructure : function(context, structure) {
		throw new Error("Abstract method [buildStructure].");
	},
	setProperty : function(object, value) {
		if (Jsonix.Util.Type.exists(value)) {
			if (this.collection) {
				Jsonix.Util.Ensure.ensureArray(value, 'Collection property requires an array value.');
				if (!Jsonix.Util.Type.exists(object[this.name])) {
					object[this.name] = [];
				}
				for (var index = 0; index < value.length; index++) {
					object[this.name].push(value[index]);
				}

			} else {
				object[this.name] = value;
			}
		}
	},
	CLASS_NAME : 'Jsonix.Model.PropertyInfo'
});
Jsonix.Model.AnyAttributePropertyInfo = Jsonix.Class(Jsonix.Model.PropertyInfo, {
	initialize : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping);
		Jsonix.Model.PropertyInfo.prototype.initialize.apply(this, [ mapping ]);
	},
	unmarshal : function(context, input, scope) {
		var attributeCount = input.getAttributeCount();
		if (attributeCount === 0) {
			return null;
		} else {
			var result = {};
			for ( var index = 0; index < attributeCount; index++) {
				var value = input.getAttributeValue(index);
				if (Jsonix.Util.Type.isString(value)) {
					var propertyName = this.convertFromAttributeName(input.getAttributeName(index), context, input, scope);
					result[propertyName] = value;
				}
			}
			return result;
		}
	},
	marshal : function(value, context, output, scope) {
		if (!Jsonix.Util.Type.isObject(value)) {
			// Nothing to do
			return;
		}
		for ( var propertyName in value) {
			if (value.hasOwnProperty(propertyName)) {
				var propertyValue = value[propertyName];
				if (Jsonix.Util.Type.isString(propertyValue)) {
					var attributeName = this.convertToAttributeName(propertyName, context, output, scope);
					output.writeAttribute(attributeName, propertyValue);
				}
			}
		}
	},
	convertFromAttributeName : function(attributeName, context, input, scope) {
		return attributeName.key;
	},
	convertToAttributeName : function(propertyName, context, output, scope) {
		return Jsonix.XML.QName.fromObjectOrString(propertyName, context);
	},
	doBuild : function(context, module)	{
		// Nothing to do
	},
	buildStructure : function(context, structure) {
		Jsonix.Util.Ensure.ensureObject(structure);
		// if (Jsonix.Util.Type.exists(structure.anyAttribute))
		// {
		// // TODO better exception
		// throw new Error("The structure already defines an any attribute
		// property.");
		// } else
		// {
		structure.anyAttribute = this;
		// }
	},
	CLASS_NAME : 'Jsonix.Model.AnyAttributePropertyInfo'
});
Jsonix.Model.AnyAttributePropertyInfo.Simplified = Jsonix.Class(Jsonix.Model.AnyAttributePropertyInfo, {
	convertFromAttributeName : function(attributeName, context, input, scope)
	{
		return attributeName.toCanonicalString(context);
	}
});

Jsonix.Model.SingleTypePropertyInfo = Jsonix.Class(Jsonix.Model.PropertyInfo, {
	typeInfo : 'String',
	initialize : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping);
		Jsonix.Model.PropertyInfo.prototype.initialize.apply(this, [ mapping ]);
		var ti = mapping.typeInfo || mapping.ti || 'String';
		this.typeInfo = ti;
	},
	doBuild : function(context, module) {
		this.typeInfo = context.resolveTypeInfo(this.typeInfo, module);
	},
	unmarshalValue : function(value, context, input, scope) {
		return this.parse(value, context, input, scope);
	},
	parse : function(value, context, input, scope) {
		return this.typeInfo.parse(value, context, input, scope);
	},
	print : function(value, context, output, scope) {
		return this.typeInfo.reprint(value, context, output, scope);
	},
	CLASS_NAME : 'Jsonix.Model.SingleTypePropertyInfo'
});

Jsonix.Model.AttributePropertyInfo = Jsonix.Class(Jsonix.Model.SingleTypePropertyInfo, {
	attributeName : null,
	initialize : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping);
		Jsonix.Model.SingleTypePropertyInfo.prototype.initialize.apply(this, [ mapping ]);
		var an = mapping.attributeName||mapping.an||undefined;
		if (Jsonix.Util.Type.isObject(an)) {
			this.attributeName = Jsonix.XML.QName.fromObject(an);
		} else if (Jsonix.Util.Type.isString(an)) {
			this.attributeName = new Jsonix.XML.QName(this.defaultAttributeNamespaceURI, an);
		} else {
			this.attributeName = new Jsonix.XML.QName(this.defaultAttributeNamespaceURI, this.name);
		}
	},
	unmarshal : function(context, input, scope) {
		var attributeCount = input.getAttributeCount();
		var result = null;
		for ( var index = 0; index < attributeCount; index++) {
			var attributeNameKey = input.getAttributeNameKey(index);
			if (this.attributeName.key === attributeNameKey) {
				var attributeValue = input.getAttributeValue(index);
				if (Jsonix.Util.Type.isString(attributeValue)) {
					result = this.unmarshalValue(attributeValue, context, input, scope);
				}
			}
		}
		return result;
	},
	marshal : function(value, context, output, scope) {
		if (Jsonix.Util.Type.exists(value)) {
			output.writeAttribute(this.attributeName, this.print(value, context, output, scope));
		}

	},
	buildStructure : function(context, structure) {
		Jsonix.Util.Ensure.ensureObject(structure);
		Jsonix.Util.Ensure.ensureObject(structure.attributes);
		var key = this.attributeName.key;
		// if (Jsonix.Util.Type.exists(structure.attributes[key])) {
		// // TODO better exception
		// throw new Error("The structure already defines an attribute for the key
		// ["
		// + key + "].");
		// } else
		// {
		structure.attributes[key] = this;
		// }
	},
	CLASS_NAME : 'Jsonix.Model.AttributePropertyInfo'
});

Jsonix.Model.ValuePropertyInfo = Jsonix.Class(Jsonix.Model.SingleTypePropertyInfo, {
	initialize : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping);
		Jsonix.Model.SingleTypePropertyInfo.prototype.initialize.apply(this, [ mapping ]);
	},
	unmarshal : function(context, input, scope) {
		var text = input.getElementText();
		return this.unmarshalValue(text, context, input, scope);
	},
	marshal : function(value, context, output, scope) {
		if (!Jsonix.Util.Type.exists(value)) {
			return;
		}
		output.writeCharacters(this.print(value, context, output, scope));
	},
	buildStructure : function(context, structure) {
		Jsonix.Util.Ensure.ensureObject(structure);
		// if (Jsonix.Util.Type.exists(structure.value)) {
		// // TODO better exception
		// throw new Error("The structure already defines a value
		// property.");
		// } else
		if (Jsonix.Util.Type.exists(structure.elements)) {
			// TODO better exception
			throw new Error("The structure already defines element mappings, it cannot define a value property.");
		} else {
			structure.value = this;
		}
	},
	CLASS_NAME : 'Jsonix.Model.ValuePropertyInfo'
});

Jsonix.Model.AbstractElementsPropertyInfo = Jsonix.Class(Jsonix.Binding.Unmarshalls.Element, Jsonix.Binding.Unmarshalls.WrapperElement, Jsonix.Model.PropertyInfo, {
	wrapperElementName : null,
	allowDom : false,
	allowTypedObject : true,
	mixed : false,
	initialize : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping);
		Jsonix.Model.PropertyInfo.prototype.initialize.apply(this, [ mapping ]);
		var wen = mapping.wrapperElementName||mapping.wen||undefined;
		if (Jsonix.Util.Type.isObject(wen)) {
			this.wrapperElementName = Jsonix.XML.QName.fromObject(wen);
		} else if (Jsonix.Util.Type.isString(wen)) {
			this.wrapperElementName = new Jsonix.XML.QName(this.defaultElementNamespaceURI, wen);
		} else {
			this.wrapperElementName = null;
		}
	},
	unmarshal : function(context, input, scope) {
		var result = null;
		var that = this;
		var callback = function(value) {
			if (that.collection) {
				if (result === null) {
					result = [];
				}
				result.push(value);

			} else {
				if (result === null) {
					result = value;
				} else {
					// TODO Report validation error
					throw new Error("Value already set.");
				}
			}
		};

		if (Jsonix.Util.Type.exists(this.wrapperElementName)) {
			this.unmarshalWrapperElement(context, input, scope, callback);
		} else {
			this.unmarshalElement(context, input, scope, callback);
		}
		return result;
	},
	marshal : function(value, context, output, scope) {

		if (!Jsonix.Util.Type.exists(value)) {
			// Do nothing
			return;
		}

		if (Jsonix.Util.Type.exists(this.wrapperElementName)) {
			output.writeStartElement(this.wrapperElementName);
		}

		if (!this.collection) {
			this.marshalElement(value, context, output, scope);
		} else {
			Jsonix.Util.Ensure.ensureArray(value);
			// TODO Exception if not array
			for ( var index = 0; index < value.length; index++) {
				var item = value[index];
				// TODO Exception if item does not exist
				this.marshalElement(item, context, output, scope);
			}
		}

		if (Jsonix.Util.Type.exists(this.wrapperElementName)) {
			output.writeEndElement();
		}
	},
	convertFromTypedNamedValue : function(elementValue, context, input, scope) {
		return elementValue.value;
	},
	buildStructure : function(context, structure) {
		Jsonix.Util.Ensure.ensureObject(structure);
		if (Jsonix.Util.Type.exists(structure.value)) {
			// TODO better exception
			throw new Error("The structure already defines a value property.");
		} else if (!Jsonix.Util.Type.exists(structure.elements)) {
			structure.elements = {};
		}

		if (Jsonix.Util.Type.exists(this.wrapperElementName)) {
			structure.elements[this.wrapperElementName.key] = this;
		} else {
			this.buildStructureElements(context, structure);
		}
	},
	buildStructureElements : function(context, structure) {
		throw new Error("Abstract method [buildStructureElements].");
	},
	CLASS_NAME : 'Jsonix.Model.AbstractElementsPropertyInfo'
});

Jsonix.Model.ElementPropertyInfo = Jsonix.Class(Jsonix.Model.AbstractElementsPropertyInfo, Jsonix.Binding.Marshalls.Element, {
	typeInfo : 'String',
	elementName : null,
	initialize : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping);
		Jsonix.Model.AbstractElementsPropertyInfo.prototype.initialize.apply(this, [ mapping ]);
		var ti = mapping.typeInfo || mapping.ti || 'String';
		if (Jsonix.Util.Type.isObject(ti)) {
			this.typeInfo = ti;
		} else {
			Jsonix.Util.Ensure.ensureString(ti);
			this.typeInfo = ti;
		}
		var en = mapping.elementName || mapping.en || undefined;
		if (Jsonix.Util.Type.isObject(en)) {
			this.elementName = Jsonix.XML.QName.fromObject(en);
		} else if (Jsonix.Util.Type.isString(en)) {
			this.elementName = new Jsonix.XML.QName(this.defaultElementNamespaceURI, en);
		} else {
			this.elementName = new Jsonix.XML.QName(this.defaultElementNamespaceURI, this.name);
		}
	},
	getTypeInfoByElementName : function(elementName, context, scope) {
		return this.typeInfo;
	},
	convertToTypedNamedValue : function(value, context, output, scope) {
		return {
			name : this.elementName,
			value : value,
			typeInfo : this.typeInfo
		};
	},
	doBuild : function(context, module) {
		this.typeInfo = context.resolveTypeInfo(this.typeInfo, module);
	},
	buildStructureElements : function(context, structure) {
		structure.elements[this.elementName.key] = this;
	},
	CLASS_NAME : 'Jsonix.Model.ElementPropertyInfo'
});

Jsonix.Model.ElementsPropertyInfo = Jsonix.Class(Jsonix.Model.AbstractElementsPropertyInfo, Jsonix.Binding.Marshalls.Element, {
	elementTypeInfos : null,
	elementTypeInfosMap : null,
	initialize : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping);
		Jsonix.Model.AbstractElementsPropertyInfo.prototype.initialize.apply(this, [ mapping ]);
		var etis = mapping.elementTypeInfos || mapping.etis || [];
		Jsonix.Util.Ensure.ensureArray(etis);
		this.elementTypeInfos = [];
		for (var index = 0; index < etis.length; index++) {
			this.elementTypeInfos[index] = Jsonix.Util.Type.cloneObject(etis[index]);
		}
	},
	getTypeInfoByElementName : function(elementName, context, scope) {
		return this.elementTypeInfosMap[elementName.key];
	},
	convertToTypedNamedValue : function(value, context, output, scope) {
		for (var index = 0; index < this.elementTypeInfos.length; index++) {
			var elementTypeInfo = this.elementTypeInfos[index];
			var typeInfo = elementTypeInfo.typeInfo;
			if (typeInfo.isInstance(value, context, scope)) {
				var elementName = elementTypeInfo.elementName;
				return {
					name : elementName,
					value : value,
					typeInfo : typeInfo
				};
			}
		}
		// If xsi:type is supported
		if (context.supportXsiType) {
			// Find the actual type
			var actualTypeInfo = context.getTypeInfoByValue(value);
			if (actualTypeInfo && actualTypeInfo.typeName) {
				for (var jndex = 0; jndex < this.elementTypeInfos.length; jndex++) {
					var eti = this.elementTypeInfos[jndex];
					var ti = eti.typeInfo;
					// TODO Can be optimized
					// Find an element type info which has a type info that is a
					// supertype of the actual type info
					if (actualTypeInfo.isBasedOn(ti)) {
						var en = eti.elementName;
						return {
							name : en,
							value : value,
							typeInfo : ti
						};
					}
				}
			}
		}
		// TODO harmonize error handling. See also marshallElement. Error must
		// only be on one place.
		throw new Error("Could not find an element with type info supporting the value [" + value + "].");
	},
	doBuild : function(context, module) {
		this.elementTypeInfosMap = {};
		var etiti, etien;
		for (var index = 0; index < this.elementTypeInfos.length; index++) {
			var elementTypeInfo = this.elementTypeInfos[index];
			Jsonix.Util.Ensure.ensureObject(elementTypeInfo);
			etiti = elementTypeInfo.typeInfo || elementTypeInfo.ti || 'String';
			elementTypeInfo.typeInfo = context.resolveTypeInfo(etiti, module);
			etien = elementTypeInfo.elementName || elementTypeInfo.en || undefined;
			elementTypeInfo.elementName = Jsonix.XML.QName.fromObjectOrString(etien, context, this.defaultElementNamespaceURI);
			this.elementTypeInfosMap[elementTypeInfo.elementName.key] = elementTypeInfo.typeInfo;
		}
	},
	buildStructureElements : function(context, structure) {
		for (var index = 0; index < this.elementTypeInfos.length; index++) {
			var elementTypeInfo = this.elementTypeInfos[index];
			structure.elements[elementTypeInfo.elementName.key] = this;
		}
	},
	CLASS_NAME : 'Jsonix.Model.ElementsPropertyInfo'
});

Jsonix.Model.ElementMapPropertyInfo = Jsonix.Class(Jsonix.Model.AbstractElementsPropertyInfo, {
	elementName : null,
	key : null,
	value : null,
	entryTypeInfo : null,
	initialize : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping);
		Jsonix.Model.AbstractElementsPropertyInfo.prototype.initialize.apply(this, [ mapping ]);
		// TODO Ensure correct argument
		var k = mapping.key || mapping.k || undefined;
		Jsonix.Util.Ensure.ensureObject(k);
		var v = mapping.value || mapping.v || undefined;
		Jsonix.Util.Ensure.ensureObject(v);
		// TODO Ensure correct argument
		var en = mapping.elementName || mapping.en || undefined;
		if (Jsonix.Util.Type.isObject(en)) {
			this.elementName = Jsonix.XML.QName.fromObject(en);
		} else if (Jsonix.Util.Type.isString(en)) {
			this.elementName = new Jsonix.XML.QName(this.defaultElementNamespaceURI, en);
		} else {
			this.elementName = new Jsonix.XML.QName(this.defaultElementNamespaceURI, this.name);
		}
		this.entryTypeInfo = new Jsonix.Model.ClassInfo({
			name : 'Map<' + k.name + ',' + v.name + '>',
			propertyInfos : [ k, v ]
		});

	},
	unmarshal : function(context, input, scope) {
		var result = null;
		var that = this;
		var callback = function(value) {

			if (Jsonix.Util.Type.exists(value)) {
				Jsonix.Util.Ensure.ensureObject(value, 'Map property requires an object.');
				if (!Jsonix.Util.Type.exists(result)) {
					result = {};
				}
				for ( var attributeName in value) {
					if (value.hasOwnProperty(attributeName)) {
						var attributeValue = value[attributeName];
						if (that.collection) {
							if (!Jsonix.Util.Type.exists(result[attributeName])) {
								result[attributeName] = [];
							}
							result[attributeName].push(attributeValue);
						} else {
							if (!Jsonix.Util.Type.exists(result[attributeName])) {
								result[attributeName] = attributeValue;
							} else {
								// TODO Report validation error
								throw new Error("Value was already set.");
							}
						}
					}
				}
			}
		};

		if (Jsonix.Util.Type.exists(this.wrapperElementName)) {
			this.unmarshalWrapperElement(context, input, scope, callback);
		} else {
			this.unmarshalElement(context, input, scope, callback);
		}
		return result;
	},
	getTypeInfoByInputElement : function(context, input, scope) {
		return this.entryTypeInfo;
	},
	convertFromTypedNamedValue : function(elementValue, context, input, scope) {
		var entry = elementValue.value;
		var result = {};
		if (Jsonix.Util.Type.isString(entry[this.key.name])) {
			result[entry[this.key.name]] = entry[this.value.name];
		}
		return result;
	},
	marshal : function(value, context, output, scope) {

		if (!Jsonix.Util.Type.exists(value)) {
			// Do nothing
			return;
		}

		if (Jsonix.Util.Type.exists(this.wrapperElementName)) {
			output.writeStartElement(this.wrapperElementName);
		}

		this.marshalElement(value, context, output, scope);

		if (Jsonix.Util.Type.exists(this.wrapperElementName)) {
			output.writeEndElement();
		}
	},
	marshalElement : function(value, context, output, scope) {
		if (!!value) {
			for ( var attributeName in value) {
				if (value.hasOwnProperty(attributeName)) {
					var attributeValue = value[attributeName];
					if (!this.collection) {
						var singleEntry = {};
						singleEntry[this.key.name] = attributeName;
						singleEntry[this.value.name] = attributeValue;
						output.writeStartElement(this.elementName);
						this.entryTypeInfo.marshal(singleEntry, context, output, scope);
						output.writeEndElement();

					} else {
						for (var index = 0; index < attributeValue.length; index++) {
							var collectionEntry = {};
							collectionEntry[this.key.name] = attributeName;
							collectionEntry[this.value.name] = attributeValue[index];
							output.writeStartElement(this.elementName);
							this.entryTypeInfo.marshal(collectionEntry, context, output, scope);
							output.writeEndElement();
						}
					}
				}
			}
		}
	},
	doBuild : function(context, module) {
		this.entryTypeInfo.build(context, module);
		// TODO get property by name
		this.key = this.entryTypeInfo.properties[0];
		this.value = this.entryTypeInfo.properties[1];
	},
	buildStructureElements : function(context, structure) {
		structure.elements[this.elementName.key] = this;
	},
	setProperty : function(object, value) {
		if (Jsonix.Util.Type.exists(value)) {
			Jsonix.Util.Ensure.ensureObject(value, 'Map property requires an object.');
			if (!Jsonix.Util.Type.exists(object[this.name])) {
				object[this.name] = {};
			}
			var map = object[this.name];
			for ( var attributeName in value) {
				if (value.hasOwnProperty(attributeName)) {
					var attributeValue = value[attributeName];
					if (this.collection) {
						if (!Jsonix.Util.Type.exists(map[attributeName])) {
							map[attributeName] = [];
						}

						for (var index = 0; index < attributeValue.length; index++) {
							map[attributeName].push(attributeValue[index]);
						}
					} else {
						map[attributeName] = attributeValue;
					}
				}
			}
		}
	},
	CLASS_NAME : 'Jsonix.Model.ElementMapPropertyInfo'
});

Jsonix.Model.AbstractElementRefsPropertyInfo = Jsonix.Class(Jsonix.Binding.Marshalls.Element, Jsonix.Binding.Marshalls.Element.AsElementRef, Jsonix.Binding.Unmarshalls.Element, Jsonix.Binding.Unmarshalls.WrapperElement, Jsonix.Binding.Unmarshalls.Element.AsElementRef, Jsonix.Model.PropertyInfo, {
	wrapperElementName : null,
	allowDom : true,
	allowTypedObject : true,
	mixed : true,
	initialize : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping, 'Mapping must be an object.');
		Jsonix.Model.PropertyInfo.prototype.initialize.apply(this, [ mapping ]);
		var wen = mapping.wrapperElementName || mapping.wen || undefined;
		if (Jsonix.Util.Type.isObject(wen)) {
			this.wrapperElementName = Jsonix.XML.QName.fromObject(wen);
		} else if (Jsonix.Util.Type.isString(wen)) {
			this.wrapperElementName = new Jsonix.XML.QName(this.defaultElementNamespaceURI, wen);
		} else {
			this.wrapperElementName = null;
		}
		var dom = Jsonix.Util.Type.defaultValue(mapping.allowDom, mapping.dom, true);
		var typed = Jsonix.Util.Type.defaultValue(mapping.allowTypedObject, mapping.typed, true);
		var mx = Jsonix.Util.Type.defaultValue(mapping.mixed, mapping.mx, true);
		this.allowDom = dom;
		this.allowTypedObject = typed;
		this.mixed = mx;
	},
	unmarshal : function(context, input, scope) {
		var result = null;
		var that = this;
		var callback = function(value) {
			if (that.collection) {
				if (result === null) {
					result = [];
				}
				result.push(value);

			} else {
				if (result === null) {
					result = value;
				} else {
					// TODO Report validation error
					throw new Error("Value already set.");
				}
			}
		};

		var et = input.eventType;
		if (et === Jsonix.XML.Input.START_ELEMENT) {
			if (Jsonix.Util.Type.exists(this.wrapperElementName)) {
				this.unmarshalWrapperElement(context, input, scope, callback);
			} else {
				this.unmarshalElement(context, input, scope, callback);
			}
		} else if (this.mixed && (et === Jsonix.XML.Input.CHARACTERS || et === Jsonix.XML.Input.CDATA || et === Jsonix.XML.Input.ENTITY_REFERENCE)) {
			callback(input.getText());
		} else if (et === Jsonix.XML.Input.SPACE || et === Jsonix.XML.Input.COMMENT || et === Jsonix.XML.Input.PROCESSING_INSTRUCTION) {
			// Skip whitespace
		} else {
			// TODO better exception
			throw new Error("Illegal state: unexpected event type [" + et + "].");
		}
		return result;
	},
	marshal : function(value, context, output, scope) {

		if (Jsonix.Util.Type.exists(value)) {
			if (Jsonix.Util.Type.exists(this.wrapperElementName)) {
				output.writeStartElement(this.wrapperElementName);
			}

			if (!this.collection) {
				this.marshalItem(value, context, output, scope);
			} else {
				Jsonix.Util.Ensure.ensureArray(value, 'Collection property requires an array value.');
				for (var index = 0; index < value.length; index++) {
					var item = value[index];
					this.marshalItem(item, context, output, scope);
				}
			}

			if (Jsonix.Util.Type.exists(this.wrapperElementName)) {
				output.writeEndElement();
			}
		}

	},
	marshalItem : function(value, context, output, scope) {
		if (Jsonix.Util.Type.isString(value)) {
			if (!this.mixed) {
				// TODO
				throw new Error("Property is not mixed, can't handle string values.");
			} else {
				output.writeCharacters(value);
			}
		} else if (this.allowDom && Jsonix.Util.Type.exists(value.nodeType)) {
			// DOM node
			output.writeNode(value);
		} else if (Jsonix.Util.Type.isObject(value)) {
			this.marshalElement(value, context, output, scope);

		} else {
			if (this.mixed) {
				throw new Error("Unsupported content type, either objects or strings are supported.");
			} else {
				throw new Error("Unsupported content type, only objects are supported.");
			}
		}

	},
	getTypeInfoByElementName : function(elementName, context, scope) {
		var propertyElementTypeInfo = this.getPropertyElementTypeInfo(elementName, context);
		if (Jsonix.Util.Type.exists(propertyElementTypeInfo)) {
			return propertyElementTypeInfo.typeInfo;
		} else {
			var contextElementTypeInfo = context.getElementInfo(elementName, scope);
			if (Jsonix.Util.Type.exists(contextElementTypeInfo)) {
				return contextElementTypeInfo.typeInfo;
			} else {
				return undefined;
			}
		}
	},
	getPropertyElementTypeInfo : function(elementName, context) {
		throw new Error("Abstract method [getPropertyElementTypeInfo].");
	},
	buildStructure : function(context, structure) {
		Jsonix.Util.Ensure.ensureObject(structure);
		if (Jsonix.Util.Type.exists(structure.value)) {
			// TODO better exception
			throw new Error("The structure already defines a value property.");
		} else if (!Jsonix.Util.Type.exists(structure.elements)) {
			structure.elements = {};
		}

		if (Jsonix.Util.Type.exists(this.wrapperElementName)) {
			structure.elements[this.wrapperElementName.key] = this;
		} else {
			this.buildStructureElements(context, structure);
		}

		// if (Jsonix.Util.Type.exists(structure.elements[key]))
		// {
		// // TODO better exception
		// throw new Error("The structure already defines an element for
		// the key ["
		// + key + "].");
		// } else
		// {
		// structure.elements[key] = this;
		// }

		if ((this.allowDom || this.allowTypedObject)) {
			structure.any = this;
		}
		if (this.mixed && !Jsonix.Util.Type.exists(this.wrapperElementName)) {
			// if (Jsonix.Util.Type.exists(structure.mixed)) {
			// // TODO better exception
			// throw new Error("The structure already defines the mixed
			// property.");
			// } else
			// {
			structure.mixed = this;
			// }
		}
	},
	buildStructureElements : function(context, structure) {
		throw new Error("Abstract method [buildStructureElements].");
	},
	buildStructureElementTypeInfos : function(context, structure, elementTypeInfo) {
		structure.elements[elementTypeInfo.elementName.key] = this;
		var substitutionMembers = context.getSubstitutionMembers(elementTypeInfo.elementName);
		if (Jsonix.Util.Type.isArray(substitutionMembers)) {
			for (var jndex = 0; jndex < substitutionMembers.length; jndex++) {
				var substitutionElementInfo = substitutionMembers[jndex];
				this.buildStructureElementTypeInfos(context, structure, substitutionElementInfo);
			}

		}
	},
	CLASS_NAME : 'Jsonix.Model.AbstractElementRefsPropertyInfo'
});
Jsonix.Model.ElementRefPropertyInfo = Jsonix.Class(Jsonix.Model.AbstractElementRefsPropertyInfo, {
	typeInfo : 'String',
	elementName : null,
	initialize : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping);
		Jsonix.Model.AbstractElementRefsPropertyInfo.prototype.initialize.apply(this, [ mapping ]);
		// TODO Ensure correct argument
		var ti = mapping.typeInfo || mapping.ti || 'String';
		if (Jsonix.Util.Type.isObject(ti)) {
			this.typeInfo = ti;
		} else {
			Jsonix.Util.Ensure.ensureString(ti);
			this.typeInfo = ti;
		}
		var en = mapping.elementName || mapping.en || undefined;
		if (Jsonix.Util.Type.isObject(en)) {
			this.elementName = Jsonix.XML.QName.fromObject(en);
		} else if (Jsonix.Util.Type.isString(en)) {
			this.elementName = new Jsonix.XML.QName(this.defaultElementNamespaceURI, en);
		} else {
			this.elementName = new Jsonix.XML.QName(this.defaultElementNamespaceURI, this.name);
		}
	},
	getPropertyElementTypeInfo : function(elementName, context) {
		var name = Jsonix.XML.QName.fromObjectOrString(elementName, context);

		if (name.key === this.elementName.key) {
			return this;
		} else {
			return null;
		}
	},
	doBuild : function(context, module) {
		this.typeInfo = context.resolveTypeInfo(this.typeInfo, module);
	},
	buildStructureElements : function(context, structure) {
		this.buildStructureElementTypeInfos(context, structure, this);
	},
	CLASS_NAME : 'Jsonix.Model.ElementRefPropertyInfo'
});
Jsonix.Model.ElementRefPropertyInfo.Simplified = Jsonix.Class(Jsonix.Model.ElementRefPropertyInfo, Jsonix.Binding.Unmarshalls.Element.AsSimplifiedElementRef, {
	CLASS_NAME : 'Jsonix.Model.ElementRefPropertyInfo.Simplified'
});
Jsonix.Model.ElementRefsPropertyInfo = Jsonix.Class(Jsonix.Model.AbstractElementRefsPropertyInfo, {
	elementTypeInfos : null,
	elementTypeInfosMap : null,
	initialize : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping);
		Jsonix.Model.AbstractElementRefsPropertyInfo.prototype.initialize.apply(this, [ mapping ]);
		// TODO Ensure correct arguments
		var etis = mapping.elementTypeInfos || mapping.etis || [];
		Jsonix.Util.Ensure.ensureArray(etis);
		this.elementTypeInfos = [];
		for (var index = 0; index < etis.length; index++)
		{
			this.elementTypeInfos[index] = Jsonix.Util.Type.cloneObject(etis[index]);
		}
	},
	getPropertyElementTypeInfo : function(elementName, context) {
		var name = Jsonix.XML.QName.fromObjectOrString(elementName, context);

		var typeInfo = this.elementTypeInfosMap[name.key];
		if (Jsonix.Util.Type.exists(typeInfo)) {
			return {
				elementName : name,
				typeInfo : typeInfo
			};
		} else {
			return null;
		}
	},
	doBuild : function(context, module) {
		this.elementTypeInfosMap = {};
		var etiti, etien;
		for (var index = 0; index < this.elementTypeInfos.length; index++) {
			var elementTypeInfo = this.elementTypeInfos[index];
			Jsonix.Util.Ensure.ensureObject(elementTypeInfo);
			etiti = elementTypeInfo.typeInfo || elementTypeInfo.ti || 'String';
			elementTypeInfo.typeInfo = context.resolveTypeInfo(etiti, module);
			etien = elementTypeInfo.elementName || elementTypeInfo.en || undefined;
			elementTypeInfo.elementName = Jsonix.XML.QName.fromObjectOrString(etien, context, this.defaultElementNamespaceURI);
			this.elementTypeInfosMap[elementTypeInfo.elementName.key] = elementTypeInfo.typeInfo;
		}
	},
	buildStructureElements : function(context, structure) {
		for (var index = 0; index < this.elementTypeInfos.length; index++) {
			var elementTypeInfo = this.elementTypeInfos[index];
			this.buildStructureElementTypeInfos(context, structure, elementTypeInfo);
		}
	},
	CLASS_NAME : 'Jsonix.Model.ElementRefsPropertyInfo'
});
Jsonix.Model.ElementRefsPropertyInfo.Simplified = Jsonix.Class(Jsonix.Model.ElementRefsPropertyInfo, Jsonix.Binding.Unmarshalls.Element.AsSimplifiedElementRef, {
	CLASS_NAME : 'Jsonix.Model.ElementRefsPropertyInfo.Simplified'
});

Jsonix.Model.AnyElementPropertyInfo = Jsonix.Class(Jsonix.Binding.Marshalls.Element, Jsonix.Binding.Marshalls.Element.AsElementRef, Jsonix.Binding.Unmarshalls.Element, Jsonix.Binding.Unmarshalls.Element.AsElementRef, Jsonix.Model.PropertyInfo, {
	allowDom : true,
	allowTypedObject : true,
	mixed : true,
	initialize : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping);
		Jsonix.Model.PropertyInfo.prototype.initialize.apply(this, [ mapping ]);
		var dom = Jsonix.Util.Type.defaultValue(mapping.allowDom, mapping.dom, true);
		var typed = Jsonix.Util.Type.defaultValue(mapping.allowTypedObject, mapping.typed, true);
		var mx = Jsonix.Util.Type.defaultValue(mapping.mixed, mapping.mx, true);
		this.allowDom = dom;
		this.allowTypedObject = typed;
		this.mixed = mx;
	},
	unmarshal : function(context, input, scope) {
		var result = null;
		var that = this;
		var callback = function(value) {
			if (that.collection) {
				if (result === null) {
					result = [];
				}
				result.push(value);

			} else {
				if (result === null) {
					result = value;
				} else {
					// TODO Report validation error
					throw new Error("Value already set.");
				}
			}
		};

		var et = input.eventType;
		if (et === Jsonix.XML.Input.START_ELEMENT) {
			this.unmarshalElement(context, input, scope, callback);
		} else if (this.mixed && (et === Jsonix.XML.Input.CHARACTERS || et === Jsonix.XML.Input.CDATA || et === Jsonix.XML.Input.ENTITY_REFERENCE)) {
			callback(input.getText());
		} else if (this.mixed && (et === Jsonix.XML.Input.SPACE)) {
			// Whitespace
			// return null;
		} else if (et === Jsonix.XML.Input.COMMENT || et === Jsonix.XML.Input.PROCESSING_INSTRUCTION) {
			// return null;
		} else {
			// TODO better exception
			throw new Error("Illegal state: unexpected event type [" + et + "].");
		}

		return result;
	},
	marshal : function(value, context, output, scope) {
		if (!Jsonix.Util.Type.exists(value)) {
			return;
		}
		if (!this.collection) {
			this.marshalItem(value, context, output, scope);
		} else {
			Jsonix.Util.Ensure.ensureArray(value);
			for (var index = 0; index < value.length; index++) {
				this.marshalItem(value[index], context, output, scope);
			}
		}
	},
	marshalItem : function(value, context, output, scope) {
		if (this.mixed && Jsonix.Util.Type.isString(value)) {
			// Mixed
			output.writeCharacters(value);
		} else if (this.allowDom && Jsonix.Util.Type.exists(value.nodeType)) {
			// DOM node
			output.writeNode(value);

		} else {
			if (this.allowTypedObject) {
				this.marshalElement(value, context, output, scope);
			}
		}
	},
	doBuild : function(context, module) {
		// Nothing to do
	},
	buildStructure : function(context, structure) {
		Jsonix.Util.Ensure.ensureObject(structure);
		if (Jsonix.Util.Type.exists(structure.value)) {
			// TODO better exception
			throw new Error("The structure already defines a value property.");
		} else if (!Jsonix.Util.Type.exists(structure.elements)) {
			structure.elements = {};
		}

		if ((this.allowDom || this.allowTypedObject)) {
			// if (Jsonix.Util.Type.exists(structure.any)) {
			// // TODO better exception
			// throw new Error("The structure already defines the any
			// property.");
			// } else
			// {
			structure.any = this;
			// }
		}
		if (this.mixed) {
			// if (Jsonix.Util.Type.exists(structure.mixed)) {
			// // TODO better exception
			// throw new Error("The structure already defines the mixed
			// property.");
			// } else
			// {
			structure.mixed = this;
			// }
		}
	},
	CLASS_NAME : 'Jsonix.Model.AnyElementPropertyInfo'
});
Jsonix.Model.AnyElementPropertyInfo.Simplified = Jsonix.Class(Jsonix.Model.AnyElementPropertyInfo, Jsonix.Binding.Unmarshalls.Element.AsSimplifiedElementRef, {
	CLASS_NAME : 'Jsonix.Model.AnyElementPropertyInfo.Simplified'
});
Jsonix.Model.Module = Jsonix.Class(Jsonix.Mapping.Styled, {
	name : null,
	typeInfos : null,
	elementInfos : null,
	targetNamespace : '',
	defaultElementNamespaceURI : '',
	defaultAttributeNamespaceURI : '',
	initialize : function(mapping, options) {
		Jsonix.Mapping.Styled.prototype.initialize.apply(this, [ options ]);
		this.typeInfos = [];
		this.elementInfos = [];
		if (typeof mapping !== 'undefined') {
			Jsonix.Util.Ensure.ensureObject(mapping);
			var n = mapping.name || mapping.n || null;
			this.name = n;
			var dens = mapping.defaultElementNamespaceURI || mapping.dens || mapping.targetNamespace || mapping.tns || '';
			this.defaultElementNamespaceURI = dens;
			var tns = mapping.targetNamespace || mapping.tns || mapping.defaultElementNamespaceURI || mapping.dens || this.defaultElementNamespaceURI;
			this.targetNamespace = tns;
			var dans = mapping.defaultAttributeNamespaceURI || mapping.dans || '';
			this.defaultAttributeNamespaceURI = dans;
			// Initialize type infos
			var tis = mapping.typeInfos || mapping.tis || [];
			this.initializeTypeInfos(tis);

			// Backwards compatibility: class infos can also be defined
			// as properties of the schema, for instance Schema.MyType
			for ( var typeInfoName in mapping) {
				if (mapping.hasOwnProperty(typeInfoName)) {
					if (mapping[typeInfoName] instanceof this.mappingStyle.classInfo) {
						this.typeInfos.push(mapping[typeInfoName]);
					}
				}
			}
			var eis = mapping.elementInfos || mapping.eis || [];
			// Initialize element infos
			this.initializeElementInfos(eis);
		}
	},
	initializeTypeInfos : function(typeInfoMappings) {
		Jsonix.Util.Ensure.ensureArray(typeInfoMappings);
		var index, typeInfoMapping, typeInfo;
		for (index = 0; index < typeInfoMappings.length; index++) {
			typeInfoMapping = typeInfoMappings[index];
			typeInfo = this.createTypeInfo(typeInfoMapping);
			this.typeInfos.push(typeInfo);
		}
	},
	initializeElementInfos : function(elementInfoMappings) {
		Jsonix.Util.Ensure.ensureArray(elementInfoMappings);
		var index, elementInfoMapping, elementInfo;
		for (index = 0; index < elementInfoMappings.length; index++) {
			elementInfoMapping = elementInfoMappings[index];
			elementInfo = this.createElementInfo(elementInfoMapping);
			this.elementInfos.push(elementInfo);
		}
	},
	createTypeInfo : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping);
		var typeInfo;
		// If mapping is already a type info, do nothing
		if (mapping instanceof Jsonix.Model.TypeInfo) {
			typeInfo = mapping;
		}
		// Else create it via generic mapping configuration
		else {
			mapping = Jsonix.Util.Type.cloneObject(mapping);
			var type = mapping.type || mapping.t || 'classInfo';
			// Locate the creator function
			if (Jsonix.Util.Type.isFunction(this.typeInfoCreators[type])) {
				var typeInfoCreator = this.typeInfoCreators[type];
				// Call the creator function
				typeInfo = typeInfoCreator.call(this, mapping);
			} else {
				throw new Error("Unknown type info type [" + type + "].");
			}
		}
		return typeInfo;
	},
	initializeNames : function(mapping) {
		var ln = mapping.localName || mapping.ln || null;
		mapping.localName = ln;
		var n = mapping.name || mapping.n || null;
		mapping.name = n;
		// Calculate both name as well as localName
		// name is provided
		if (Jsonix.Util.Type.isString(mapping.name)) {
			// Obsolete code below
			// // localName is not provided
			// if (!Jsonix.Util.Type.isString(mapping.localName)) {
			// // But module name is provided
			// if (Jsonix.Util.Type.isString(this.name)) {
			// // If name starts with module name, use second part
			// // as local name
			// if (mapping.name.indexOf(this.name + '.') === 0) {
			// mapping.localName = mapping.name
			// .substring(this.name.length + 1);
			// }
			// // Else use name as local name
			// else {
			// mapping.localName = mapping.name;
			// }
			// }
			// // Module name is not provided, use name as local name
			// else {
			// mapping.localName = mapping.name;
			// }
			// }
			if (mapping.name.length > 0 && mapping.name.charAt(0) === '.' && Jsonix.Util.Type.isString(this.name)) {
				mapping.name = this.name + mapping.name;
			}
		}
		// name is not provided but local name is provided
		else if (Jsonix.Util.Type.isString(ln)) {
			// Module name is provided
			if (Jsonix.Util.Type.isString(this.name)) {
				mapping.name = this.name + '.' + ln;
			}
			// Module name is not provided
			else {
				mapping.name = ln;
			}
		} else {
			throw new Error("Neither [name/n] nor [localName/ln] was provided for the class info.");
		}
	},
	createClassInfo : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping);
		var dens = mapping.defaultElementNamespaceURI || mapping.dens || this.defaultElementNamespaceURI;
		mapping.defaultElementNamespaceURI = dens;
		var tns = mapping.targetNamespace || mapping.tns || this.targetNamespace;
		mapping.targetNamespace = tns;
		var dans = mapping.defaultAttributeNamespaceURI || mapping.dans || this.defaultAttributeNamespaceURI;
		mapping.defaultAttributeNamespaceURI = dans;
		this.initializeNames(mapping);
		// Now both name an local name are initialized
		var classInfo = new this.mappingStyle.classInfo(mapping, {
			mappingStyle : this.mappingStyle
		});
		return classInfo;
	},
	createEnumLeafInfo : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping);
		this.initializeNames(mapping);
		// Now both name an local name are initialized
		var enumLeafInfo = new this.mappingStyle.enumLeafInfo(mapping, {
			mappingStyle : this.mappingStyle
		});
		return enumLeafInfo;
	},
	createList : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping);
		var ti = mapping.baseTypeInfo || mapping.typeInfo || mapping.bti || mapping.ti || 'String';
		var tn = mapping.typeName || mapping.tn || null;

		if (Jsonix.Util.Type.exists(tn)) {
			if (Jsonix.Util.Type.isString(tn)) {
				tn = new Jsonix.XML.QName(this.targetNamespace, tn);
			} else {
				tn = Jsonix.XML.QName.fromObject(tn);
			}
		}
		var s = mapping.separator || mapping.sep || ' ';
		Jsonix.Util.Ensure.ensureExists(ti);
		return new Jsonix.Schema.XSD.List(ti, tn, s);
	},
	createElementInfo : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping);
		mapping = Jsonix.Util.Type.cloneObject(mapping);

		var dens = mapping.defaultElementNamespaceURI || mapping.dens || this.defaultElementNamespaceURI;
		mapping.defaultElementNamespaceURI = dens;
		var en = mapping.elementName || mapping.en || undefined;
		Jsonix.Util.Ensure.ensureExists(en);

		var ti = mapping.typeInfo || mapping.ti || 'String';
		Jsonix.Util.Ensure.ensureExists(ti);

		mapping.typeInfo = ti;
		if (Jsonix.Util.Type.isObject(en)) {
			mapping.elementName = Jsonix.XML.QName.fromObject(en);
		} else if (Jsonix.Util.Type.isString(en)) {
			mapping.elementName = new Jsonix.XML.QName(this.defaultElementNamespaceURI, en);
		} else {
			throw new Error('Element info [' + mapping + '] must provide an element name.');
		}

		var sh = mapping.substitutionHead || mapping.sh || null;
		if (Jsonix.Util.Type.exists(sh)) {
			if (Jsonix.Util.Type.isObject(sh)) {
				mapping.substitutionHead = Jsonix.XML.QName.fromObject(sh);
			} else {
				Jsonix.Util.Ensure.ensureString(sh);
				mapping.substitutionHead = new Jsonix.XML.QName(this.defaultElementNamespaceURI, sh);
			}
		}

		var elementInfo = new this.mappingStyle.elementInfo(mapping, {
			mappingStyle : this.mappingStyle
		});
		return elementInfo;
	},
	registerTypeInfos : function(context) {
		for (var index = 0; index < this.typeInfos.length; index++) {
			var typeInfo = this.typeInfos[index];
			context.registerTypeInfo(typeInfo, this);
		}
	},
	buildTypeInfos : function(context) {
		for (var index = 0; index < this.typeInfos.length; index++) {
			var typeInfo = this.typeInfos[index];
			typeInfo.build(context, this);
		}
	},
	registerElementInfos : function(context) {
		for (var index = 0; index < this.elementInfos.length; index++) {
			var elementInfo = this.elementInfos[index];
			context.registerElementInfo(elementInfo, this);
		}
	},
	buildElementInfos : function(context) {
		for (var index = 0; index < this.elementInfos.length; index++) {
			var elementInfo = this.elementInfos[index];
			elementInfo.build(context, this);
		}
	},
	// Obsolete, retained for backwards compatibility
	cs : function() {
		return this;
	},
	// Obsolete, retained for backwards compatibility
	es : function() {
		return this;
	},
	CLASS_NAME : 'Jsonix.Model.Module'
});
Jsonix.Model.Module.prototype.typeInfoCreators = {
	"classInfo" : Jsonix.Model.Module.prototype.createClassInfo,
	"c" : Jsonix.Model.Module.prototype.createClassInfo,
	"enumInfo" : Jsonix.Model.Module.prototype.createEnumLeafInfo,
	"enum" : Jsonix.Model.Module.prototype.createEnumLeafInfo,
	"list" : Jsonix.Model.Module.prototype.createList,
	"l" : Jsonix.Model.Module.prototype.createList
};
Jsonix.Mapping.Style.Standard = Jsonix.Class(Jsonix.Mapping.Style, {
	marshaller : Jsonix.Binding.Marshaller,
	unmarshaller : Jsonix.Binding.Unmarshaller,
	module : Jsonix.Model.Module,
	elementInfo : Jsonix.Model.ElementInfo,
	classInfo : Jsonix.Model.ClassInfo,
	enumLeafInfo : Jsonix.Model.EnumLeafInfo,
	anyAttributePropertyInfo : Jsonix.Model.AnyAttributePropertyInfo,
	anyElementPropertyInfo : Jsonix.Model.AnyElementPropertyInfo,
	attributePropertyInfo : Jsonix.Model.AttributePropertyInfo,
	elementMapPropertyInfo : Jsonix.Model.ElementMapPropertyInfo,
	elementPropertyInfo : Jsonix.Model.ElementPropertyInfo,
	elementsPropertyInfo : Jsonix.Model.ElementsPropertyInfo,
	elementRefPropertyInfo : Jsonix.Model.ElementRefPropertyInfo,
	elementRefsPropertyInfo : Jsonix.Model.ElementRefsPropertyInfo,
	valuePropertyInfo : Jsonix.Model.ValuePropertyInfo,
	initialize : function() {
		Jsonix.Mapping.Style.prototype.initialize.apply(this);
	},
	CLASS_NAME : 'Jsonix.Mapping.Style.Standard'
});
Jsonix.Mapping.Style.STYLES.standard = new Jsonix.Mapping.Style.Standard();

Jsonix.Mapping.Style.Simplified = Jsonix.Class(Jsonix.Mapping.Style, {
	marshaller : Jsonix.Binding.Marshaller.Simplified,
	unmarshaller : Jsonix.Binding.Unmarshaller.Simplified,
	module : Jsonix.Model.Module,
	elementInfo : Jsonix.Model.ElementInfo,
	classInfo : Jsonix.Model.ClassInfo,
	enumLeafInfo : Jsonix.Model.EnumLeafInfo,
	anyAttributePropertyInfo : Jsonix.Model.AnyAttributePropertyInfo.Simplified,
	anyElementPropertyInfo : Jsonix.Model.AnyElementPropertyInfo.Simplified,
	attributePropertyInfo : Jsonix.Model.AttributePropertyInfo,
	elementMapPropertyInfo : Jsonix.Model.ElementMapPropertyInfo,
	elementPropertyInfo : Jsonix.Model.ElementPropertyInfo,
	elementsPropertyInfo : Jsonix.Model.ElementsPropertyInfo,
	elementRefPropertyInfo : Jsonix.Model.ElementRefPropertyInfo.Simplified,
	elementRefsPropertyInfo : Jsonix.Model.ElementRefsPropertyInfo.Simplified,
	valuePropertyInfo : Jsonix.Model.ValuePropertyInfo,
	initialize : function() {
		Jsonix.Mapping.Style.prototype.initialize.apply(this);
	},
	CLASS_NAME : 'Jsonix.Mapping.Style.Simplified'
});
Jsonix.Mapping.Style.STYLES.simplified = new Jsonix.Mapping.Style.Simplified();

Jsonix.Schema.XSD = {};
Jsonix.Schema.XSD.NAMESPACE_URI = 'http://www.w3.org/2001/XMLSchema';
Jsonix.Schema.XSD.PREFIX = 'xsd';
Jsonix.Schema.XSD.qname = function(localPart) {
	Jsonix.Util.Ensure.ensureString(localPart);
	return new Jsonix.XML.QName(Jsonix.Schema.XSD.NAMESPACE_URI, localPart,
			Jsonix.Schema.XSD.PREFIX);
};

Jsonix.Schema.XSD.AnyType = Jsonix.Class(Jsonix.Model.ClassInfo, {
	typeName : Jsonix.Schema.XSD.qname('anyType'),
	initialize : function() {
		Jsonix.Model.ClassInfo.prototype.initialize.call(this, {
			name : 'AnyType',
			propertyInfos : [ {
				type : 'anyAttribute',
				name : 'attributes'
			}, {
				type : 'anyElement',
				name : 'content',
				collection : true
			} ]
		});
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.AnyType'
});
Jsonix.Schema.XSD.AnyType.INSTANCE = new Jsonix.Schema.XSD.AnyType();
Jsonix.Schema.XSD.AnySimpleType = Jsonix.Class(Jsonix.Model.TypeInfo, {
	name : 'AnySimpleType',
	typeName : Jsonix.Schema.XSD.qname('anySimpleType'),
	initialize : function() {
		Jsonix.Model.TypeInfo.prototype.initialize.apply(this, []);
	},	
	print : function(value, context, output, scope) {
		return value;
	},
	parse : function(text, context, input, scope) {
		return text;
	},
	isInstance : function(value, context, scope) {
		return true;
	},
	reprint : function(value, context, output, scope) {
		// Only reprint when the value is a string but not an instance
		if (Jsonix.Util.Type.isString(value) && !this.isInstance(value, context, scope)) {
			// Using null as input as input is not available
			return this.print(this.parse(value, context, null, scope), context, output, scope);
		}
		else
		{
			return this.print(value, context, output, scope);
		}
	},
	unmarshal : function(context, input, scope) {
		var text = input.getElementText();
		if (Jsonix.Util.StringUtils.isNotBlank(text)) {
			return this.parse(text, context, input, scope);
		}
		else
		{
			return null;
		}
	},
	marshal : function(value, context, output, scope) {
		if (Jsonix.Util.Type.exists(value)) {
			output.writeCharacters(this.reprint(value, context, output, scope));
		}
	},
	build: function(context, module)
	{
		// Nothing to do
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.AnySimpleType'
});
Jsonix.Schema.XSD.AnySimpleType.INSTANCE = new Jsonix.Schema.XSD.AnySimpleType();
Jsonix.Schema.XSD.List = Jsonix
		.Class(
				Jsonix.Schema.XSD.AnySimpleType,
				{
					name : null,
					typeName : null,
					typeInfo : null,
					separator : ' ',
					trimmedSeparator : Jsonix.Util.StringUtils.whitespaceCharacters,
					simpleType : true,
					built : false,
					initialize : function(typeInfo, typeName, separator) {
						Jsonix.Util.Ensure.ensureExists(typeInfo);
						// TODO Ensure correct argument
						this.typeInfo = typeInfo;
						if (!Jsonix.Util.Type.exists(this.name)) {
							this.name = typeInfo.name + "*";
						}
						if (Jsonix.Util.Type.exists(typeName)) {
							// TODO Ensure correct argument
							this.typeName = typeName;
						}

						if (Jsonix.Util.Type.isString(separator)) {
							// TODO Ensure correct argument
							this.separator = separator;
						} else {
							this.separator = ' ';
						}

						var trimmedSeparator = Jsonix.Util.StringUtils
								.trim(this.separator);
						if (trimmedSeparator.length === 0) {
							this.trimmedSeparator = Jsonix.Util.StringUtils.whitespaceCharacters;
						} else {
							this.trimmedSeparator = trimmedSeparator;
						}
					},
					build : function(context, module) {
						if (!this.built) {
							this.typeInfo = context.resolveTypeInfo(this.typeInfo, module);
							this.built = true;
						}
					},
					print : function(value, context, output, scope) {
						if (!Jsonix.Util.Type.exists(value)) {
							return null;
						}
						// TODO Exception if not an array
						Jsonix.Util.Ensure.ensureArray(value);
						var result = '';
						for ( var index = 0; index < value.length; index++) {
							if (index > 0) {
								result = result + this.separator;
							}
							result = result + this.typeInfo.reprint(value[index], context, output, scope);
						}
						return result;
					},
					parse : function(text, context, input, scope) {
						Jsonix.Util.Ensure.ensureString(text);
						var items = Jsonix.Util.StringUtils
								.splitBySeparatorChars(text,
										this.trimmedSeparator);
						var result = [];
						for ( var index = 0; index < items.length; index++) {
							result.push(this.typeInfo
									.parse(Jsonix.Util.StringUtils.trim(items[index]), context, input, scope));
						}
						return result;
					},
					// TODO isInstance?
					CLASS_NAME : 'Jsonix.Schema.XSD.List'
				});

Jsonix.Schema.XSD.String = Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
	name : 'String',
	typeName : Jsonix.Schema.XSD.qname('string'),
	unmarshal : function(context, input, scope) {
		var text = input.getElementText();
		return this.parse(text, context, input, scope);
	},
	print : function(value, context, output, scope) {
		Jsonix.Util.Ensure.ensureString(value);
		return value;
	},
	parse : function(text, context, input, scope) {
		Jsonix.Util.Ensure.ensureString(text);
		return text;
	},
	isInstance : function(value, context, scope) {
		return Jsonix.Util.Type.isString(value);
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.String'
});
Jsonix.Schema.XSD.String.INSTANCE = new Jsonix.Schema.XSD.String();
Jsonix.Schema.XSD.String.INSTANCE.LIST = new Jsonix.Schema.XSD.List(
		Jsonix.Schema.XSD.String.INSTANCE);
Jsonix.Schema.XSD.Strings = Jsonix.Class(Jsonix.Schema.XSD.List, {
	name : 'Strings',
	initialize : function() {
		Jsonix.Schema.XSD.List.prototype.initialize.apply(this, [ Jsonix.Schema.XSD.String.INSTANCE, Jsonix.Schema.XSD.qname('strings'), ' ' ]);
	},
	// TODO Constraints
	CLASS_NAME : 'Jsonix.Schema.XSD.Strings'
});
Jsonix.Schema.XSD.Strings.INSTANCE = new Jsonix.Schema.XSD.Strings();
Jsonix.Schema.XSD.NormalizedString = Jsonix.Class(Jsonix.Schema.XSD.String, {
	name : 'NormalizedString',
	typeName : Jsonix.Schema.XSD.qname('normalizedString'),
	// TODO Constraints
	CLASS_NAME : 'Jsonix.Schema.XSD.NormalizedString'
});
Jsonix.Schema.XSD.NormalizedString.INSTANCE = new Jsonix.Schema.XSD.NormalizedString();
Jsonix.Schema.XSD.NormalizedString.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.NormalizedString.INSTANCE);
Jsonix.Schema.XSD.Token = Jsonix.Class(Jsonix.Schema.XSD.NormalizedString, {
	name : 'Token',
	typeName : Jsonix.Schema.XSD.qname('token'),
	// TODO Constraints
	CLASS_NAME : 'Jsonix.Schema.XSD.Token'
});
Jsonix.Schema.XSD.Token.INSTANCE = new Jsonix.Schema.XSD.Token();
Jsonix.Schema.XSD.Token.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Token.INSTANCE);
Jsonix.Schema.XSD.Language = Jsonix.Class(Jsonix.Schema.XSD.Token, {
	name : 'Language',
	typeName : Jsonix.Schema.XSD.qname('language'),
	// TODO Constraints
	CLASS_NAME : 'Jsonix.Schema.XSD.Language'
});
Jsonix.Schema.XSD.Language.INSTANCE = new Jsonix.Schema.XSD.Language();
Jsonix.Schema.XSD.Language.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Language.INSTANCE);
Jsonix.Schema.XSD.Name = Jsonix.Class(Jsonix.Schema.XSD.Token, {
	name : 'Name',
	typeName : Jsonix.Schema.XSD.qname('Name'),
	// TODO Constraints
	CLASS_NAME : 'Jsonix.Schema.XSD.Name'
});
Jsonix.Schema.XSD.Name.INSTANCE = new Jsonix.Schema.XSD.Name();
Jsonix.Schema.XSD.Name.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Name.INSTANCE);
Jsonix.Schema.XSD.NCName = Jsonix.Class(Jsonix.Schema.XSD.Name, {
	name : 'NCName',
	typeName : Jsonix.Schema.XSD.qname('NCName'),
	// TODO Constraints
	CLASS_NAME : 'Jsonix.Schema.XSD.NCName'
});
Jsonix.Schema.XSD.NCName.INSTANCE = new Jsonix.Schema.XSD.NCName();
Jsonix.Schema.XSD.NCName.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.NCName.INSTANCE);
Jsonix.Schema.XSD.NMToken = Jsonix.Class(Jsonix.Schema.XSD.Token, {
	name : 'NMToken',
	typeName : Jsonix.Schema.XSD.qname('NMTOKEN'),
	// TODO Constraints
	CLASS_NAME : 'Jsonix.Schema.XSD.NMToken'
});
Jsonix.Schema.XSD.NMToken.INSTANCE = new Jsonix.Schema.XSD.NMToken();
Jsonix.Schema.XSD.NMTokens = Jsonix.Class(Jsonix.Schema.XSD.List, {
	name : 'NMTokens',
	initialize : function() {
		Jsonix.Schema.XSD.List.prototype.initialize.apply(this, [ Jsonix.Schema.XSD.NMToken.INSTANCE, Jsonix.Schema.XSD.qname('NMTOKEN'), ' ' ]);
	},
	// TODO Constraints
	CLASS_NAME : 'Jsonix.Schema.XSD.NMTokens'
});
Jsonix.Schema.XSD.NMTokens.INSTANCE = new Jsonix.Schema.XSD.NMTokens();
Jsonix.Schema.XSD.Boolean = Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
	name : 'Boolean',
	typeName : Jsonix.Schema.XSD.qname('boolean'),
	print : function(value, context, output, scope) {
		Jsonix.Util.Ensure.ensureBoolean(value);
		return value ? 'true' : 'false';
	},
	parse : function(text, context, input, scope) {
		Jsonix.Util.Ensure.ensureString(text);
		if (text === 'true' || text === '1') {
			return true;
		} else if (text === 'false' || text === '0') {
			return false;
		} else {
			throw new Error("Either [true], [1], [0] or [false] expected as boolean value.");
		}
	},
	isInstance : function(value, context, scope) {
		return Jsonix.Util.Type.isBoolean(value);
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.Boolean'
});
Jsonix.Schema.XSD.Boolean.INSTANCE = new Jsonix.Schema.XSD.Boolean();
Jsonix.Schema.XSD.Boolean.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Boolean.INSTANCE);
Jsonix.Schema.XSD.Base64Binary = Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
	name : 'Base64Binary',
	typeName : Jsonix.Schema.XSD.qname('base64Binary'),
	charToByte : {},
	byteToChar : [],
	initialize : function() {
		Jsonix.Schema.XSD.AnySimpleType.prototype.initialize.apply(this);
		// Initialize charToByte and byteToChar table for fast
		// lookups
		var charTable = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		for (var i = 0; i < charTable.length; i++) {
			var _char = charTable.charAt(i);
			var _byte = charTable.charCodeAt(i);
			this.byteToChar[i] = _char;
			this.charToByte[_char] = i;
		}
	},
	print : function(value, context, output, scope) {
		Jsonix.Util.Ensure.ensureArray(value);
		return this.encode(value);
	},

	parse : function(text, context, input, scope) {
		Jsonix.Util.Ensure.ensureString(text);
		return this.decode(text);
	},
	encode : function(uarray) {
		var output = "";
		var byte0;
		var byte1;
		var byte2;
		var char0;
		var char1;
		var char2;
		var char3;
		var i = 0;
		var j = 0;
		var length = uarray.length;

		for (i = 0; i < length; i += 3) {
			byte0 = uarray[i] & 0xFF;
			char0 = this.byteToChar[byte0 >> 2];

			if (i + 1 < length) {
				byte1 = uarray[i + 1] & 0xFF;
				char1 = this.byteToChar[((byte0 & 0x03) << 4) | (byte1 >> 4)];
				if (i + 2 < length) {
					byte2 = uarray[i + 2] & 0xFF;
					char2 = this.byteToChar[((byte1 & 0x0F) << 2) | (byte2 >> 6)];
					char3 = this.byteToChar[byte2 & 0x3F];
				} else {
					char2 = this.byteToChar[(byte1 & 0x0F) << 2];
					char3 = "=";
				}
			} else {
				char1 = this.byteToChar[(byte0 & 0x03) << 4];
				char2 = "=";
				char3 = "=";
			}
			output = output + char0 + char1 + char2 + char3;
		}
		return output;
	},
	decode : function(text) {

		input = text.replace(/[^A-Za-z0-9\+\/\=]/g, "");

		var length = (input.length / 4) * 3;
		if (input.charAt(input.length - 1) === "=") {
			length--;
		}
		if (input.charAt(input.length - 2) === "=") {
			length--;
		}

		var uarray = new Array(length);

		var byte0;
		var byte1;
		var byte2;
		var char0;
		var char1;
		var char2;
		var char3;
		var i = 0;
		var j = 0;

		for (i = 0; i < length; i += 3) {
			// get the 3 octects in 4 ascii chars
			char0 = this.charToByte[input.charAt(j++)];
			char1 = this.charToByte[input.charAt(j++)];
			char2 = this.charToByte[input.charAt(j++)];
			char3 = this.charToByte[input.charAt(j++)];

			byte0 = (char0 << 2) | (char1 >> 4);
			byte1 = ((char1 & 0x0F) << 4) | (char2 >> 2);
			byte2 = ((char2 & 0x03) << 6) | char3;

			uarray[i] = byte0;
			if (char2 != 64) {
				uarray[i + 1] = byte1;
			}
			if (char3 != 64) {
				uarray[i + 2] = byte2;
			}
		}
		return uarray;
	},
	isInstance : function(value, context, scope) {
		return Jsonix.Util.Type.isArray(value);
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.Base64Binary'
});
Jsonix.Schema.XSD.Base64Binary.INSTANCE = new Jsonix.Schema.XSD.Base64Binary();
Jsonix.Schema.XSD.Base64Binary.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Base64Binary.INSTANCE);
Jsonix.Schema.XSD.HexBinary = Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
	name : 'HexBinary',
	typeName : Jsonix.Schema.XSD.qname('hexBinary'),
	charToQuartet : {},
	byteToDuplet : [],
	initialize : function() {
		Jsonix.Schema.XSD.AnySimpleType.prototype.initialize.apply(this);
		var charTableUpperCase = "0123456789ABCDEF";
		var charTableLowerCase = charTableUpperCase.toLowerCase();
		var i;
		for (i = 0; i < 16; i++) {
			this.charToQuartet[charTableUpperCase.charAt(i)] = i;
			if (i >= 0xA) {
				this.charToQuartet[charTableLowerCase.charAt(i)] = i;
			}
		}
		for (i = 0; i < 256; i++) {
			this.byteToDuplet[i] =
			//
			charTableUpperCase[i >> 4] + charTableUpperCase[i & 0xF];
		}
	},
	print : function(value, context, output, scope) {
		Jsonix.Util.Ensure.ensureArray(value);
		return this.encode(value);
	},

	parse : function(text, context, input, scope) {
		Jsonix.Util.Ensure.ensureString(text);
		return this.decode(text);
	},
	encode : function(uarray) {
		var output = "";
		for ( var i = 0; i < uarray.length; i++) {
			output = output + this.byteToDuplet[uarray[i] & 0xFF];
		}
		return output;
	},
	decode : function(text) {
		var input = text.replace(/[^A-Fa-f0-9]/g, "");
		// Round by two
		var length = input.length >> 1;
		var uarray = new Array(length);
		for ( var i = 0; i < length; i++) {
			var char0 = input.charAt(2 * i);
			var char1 = input.charAt(2 * i + 1);
			uarray[i] = this.charToQuartet[char0] << 4
					| this.charToQuartet[char1];
		}
		return uarray;
	},
	isInstance : function(value, context, scope) {
		return Jsonix.Util.Type.isArray(value);
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.HexBinary'
});
Jsonix.Schema.XSD.HexBinary.INSTANCE = new Jsonix.Schema.XSD.HexBinary();
Jsonix.Schema.XSD.HexBinary.INSTANCE.LIST = new Jsonix.Schema.XSD.List(
		Jsonix.Schema.XSD.HexBinary.INSTANCE);
Jsonix.Schema.XSD.Number = Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
	name : 'Number',
	typeName : Jsonix.Schema.XSD.qname('number'),
	print : function(value, context, output, scope) {
		Jsonix.Util.Ensure.ensureNumberOrNaN(value);
		if (Jsonix.Util.Type.isNaN(value)) {
			return 'NaN';
		} else if (value === Infinity) {
			return 'INF';
		} else if (value === -Infinity) {
			return '-INF';
		} else {
			var text = String(value);
			return text;
		}
	},
	parse : function(text, context, input, scope) {
		Jsonix.Util.Ensure.ensureString(text);
		if (text === '-INF') {
			return -Infinity;
		} else if (text === 'INF') {
			return Infinity;
		} else if (text === 'NaN') {
			return NaN;
		} else {
			var value = Number(text);
			Jsonix.Util.Ensure.ensureNumber(value);
			return value;
		}
	},
	isInstance : function(value, context, scope) {
		return Jsonix.Util.Type.isNumberOrNaN(value);
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.Number'
});
Jsonix.Schema.XSD.Number.INSTANCE = new Jsonix.Schema.XSD.Number();
Jsonix.Schema.XSD.Number.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Number.INSTANCE);
Jsonix.Schema.XSD.Float = Jsonix.Class(Jsonix.Schema.XSD.Number, {
	name : 'Float',
	typeName : Jsonix.Schema.XSD.qname('float'),
	isInstance : function(value, context, scope) {
		return Jsonix.Util.Type.isNaN(value) || value === -Infinity || value === Infinity || (Jsonix.Util.Type.isNumber(value) && value >= this.MIN_VALUE && value <= this.MAX_VALUE);
	},
	MIN_VALUE : -3.4028235e+38,
	MAX_VALUE : 3.4028235e+38,
	CLASS_NAME : 'Jsonix.Schema.XSD.Float'
});
Jsonix.Schema.XSD.Float.INSTANCE = new Jsonix.Schema.XSD.Float();
Jsonix.Schema.XSD.Float.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Float.INSTANCE);
Jsonix.Schema.XSD.Decimal = Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
	name : 'Decimal',
	typeName : Jsonix.Schema.XSD.qname('decimal'),
	print : function(value, context, output, scope) {
		Jsonix.Util.Ensure.ensureNumber(value);
		var text = String(value);
		return text;
	},
	parse : function(text, context, input, scope) {
		Jsonix.Util.Ensure.ensureString(text);
		var value = Number(text);
		Jsonix.Util.Ensure.ensureNumber(value);
		return value;
	},
	isInstance : function(value, context, scope) {
		return Jsonix.Util.Type.isNumber(value);
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.Decimal'
});
Jsonix.Schema.XSD.Decimal.INSTANCE = new Jsonix.Schema.XSD.Decimal();
Jsonix.Schema.XSD.Decimal.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Decimal.INSTANCE);
Jsonix.Schema.XSD.Integer = Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
	name : 'Integer',
	typeName : Jsonix.Schema.XSD.qname('integer'),
	print : function(value, context, output, scope) {
		Jsonix.Util.Ensure.ensureInteger(value);
		var text = String(value);
		return text;
	},
	parse : function(text, context, input, scope) {
		Jsonix.Util.Ensure.ensureString(text);
		var value = Number(text);
		Jsonix.Util.Ensure.ensureInteger(value);
		return value;
	},
	isInstance : function(value, context, scope) {
		return Jsonix.Util.NumberUtils.isInteger(value) && value >= this.MIN_VALUE && value <= this.MAX_VALUE;
	},
	MIN_VALUE : -9223372036854775808,
	MAX_VALUE : 9223372036854775807,
	CLASS_NAME : 'Jsonix.Schema.XSD.Integer'
});
Jsonix.Schema.XSD.Integer.INSTANCE = new Jsonix.Schema.XSD.Integer();
Jsonix.Schema.XSD.Integer.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Integer.INSTANCE);
Jsonix.Schema.XSD.NonPositiveInteger = Jsonix.Class(Jsonix.Schema.XSD.Integer, {
	name : 'NonPositiveInteger',
	typeName : Jsonix.Schema.XSD.qname('nonPositiveInteger'),
	MIN_VALUE: -9223372036854775808,
	MAX_VALUE: 0,
	CLASS_NAME : 'Jsonix.Schema.XSD.NonPositiveInteger'
});
Jsonix.Schema.XSD.NonPositiveInteger.INSTANCE = new Jsonix.Schema.XSD.NonPositiveInteger();
Jsonix.Schema.XSD.NonPositiveInteger.INSTANCE.LIST = new Jsonix.Schema.XSD.List(
		Jsonix.Schema.XSD.NonPositiveInteger.INSTANCE);
Jsonix.Schema.XSD.NegativeInteger = Jsonix.Class(Jsonix.Schema.XSD.NonPositiveInteger, {
	name : 'NegativeInteger',
	typeName : Jsonix.Schema.XSD.qname('negativeInteger'),
	MIN_VALUE: -9223372036854775808,
	MAX_VALUE: -1,
	CLASS_NAME : 'Jsonix.Schema.XSD.NegativeInteger'
});
Jsonix.Schema.XSD.NegativeInteger.INSTANCE = new Jsonix.Schema.XSD.NegativeInteger();
Jsonix.Schema.XSD.NegativeInteger.INSTANCE.LIST = new Jsonix.Schema.XSD.List(
		Jsonix.Schema.XSD.NegativeInteger.INSTANCE);
Jsonix.Schema.XSD.Long = Jsonix.Class(Jsonix.Schema.XSD.Integer, {
	name : 'Long',
	typeName : Jsonix.Schema.XSD.qname('long'),
	MIN_VALUE : -9223372036854775808,
	MAX_VALUE : 9223372036854775807,
	CLASS_NAME : 'Jsonix.Schema.XSD.Long'
});
Jsonix.Schema.XSD.Long.INSTANCE = new Jsonix.Schema.XSD.Long();
Jsonix.Schema.XSD.Long.INSTANCE.LIST = new Jsonix.Schema.XSD.List(
		Jsonix.Schema.XSD.Long.INSTANCE);
Jsonix.Schema.XSD.Int = Jsonix.Class(Jsonix.Schema.XSD.Long, {
	name : 'Int',
	typeName : Jsonix.Schema.XSD.qname('int'),
	MIN_VALUE : -2147483648,
	MAX_VALUE : 2147483647,
	CLASS_NAME : 'Jsonix.Schema.XSD.Int'
});
Jsonix.Schema.XSD.Int.INSTANCE = new Jsonix.Schema.XSD.Int();
Jsonix.Schema.XSD.Int.INSTANCE.LIST = new Jsonix.Schema.XSD.List(
		Jsonix.Schema.XSD.Int.INSTANCE);
Jsonix.Schema.XSD.Short = Jsonix.Class(Jsonix.Schema.XSD.Int, {
	name : 'Short',
	typeName : Jsonix.Schema.XSD.qname('short'),
	MIN_VALUE : -32768,
	MAX_VALUE : 32767,
	CLASS_NAME : 'Jsonix.Schema.XSD.Short'
});
Jsonix.Schema.XSD.Short.INSTANCE = new Jsonix.Schema.XSD.Short();
Jsonix.Schema.XSD.Short.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Short.INSTANCE);
Jsonix.Schema.XSD.Byte = Jsonix.Class(Jsonix.Schema.XSD.Short, {
	name : 'Byte',
	typeName : Jsonix.Schema.XSD.qname('byte'),
	MIN_VALUE : -128,
	MAX_VALUE : 127,
	CLASS_NAME : 'Jsonix.Schema.XSD.Byte'
});
Jsonix.Schema.XSD.Byte.INSTANCE = new Jsonix.Schema.XSD.Byte();
Jsonix.Schema.XSD.Byte.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Byte.INSTANCE);
Jsonix.Schema.XSD.NonNegativeInteger = Jsonix.Class(Jsonix.Schema.XSD.Integer, {
	name : 'NonNegativeInteger',
	typeName : Jsonix.Schema.XSD.qname('nonNegativeInteger'),
	MIN_VALUE: 0,
	MAX_VALUE: 9223372036854775807,
	CLASS_NAME : 'Jsonix.Schema.XSD.NonNegativeInteger'
});
Jsonix.Schema.XSD.NonNegativeInteger.INSTANCE = new Jsonix.Schema.XSD.NonNegativeInteger();
Jsonix.Schema.XSD.NonNegativeInteger.INSTANCE.LIST = new Jsonix.Schema.XSD.List(
		Jsonix.Schema.XSD.NonNegativeInteger.INSTANCE);
Jsonix.Schema.XSD.UnsignedLong = Jsonix.Class(Jsonix.Schema.XSD.NonNegativeInteger, {
	name : 'UnsignedLong',
	typeName : Jsonix.Schema.XSD.qname('unsignedLong'),
	MIN_VALUE : 0,
	MAX_VALUE : 18446744073709551615,
	CLASS_NAME : 'Jsonix.Schema.XSD.UnsignedLong'
});
Jsonix.Schema.XSD.UnsignedLong.INSTANCE = new Jsonix.Schema.XSD.UnsignedLong();
Jsonix.Schema.XSD.UnsignedLong.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.UnsignedLong.INSTANCE);
Jsonix.Schema.XSD.UnsignedInt = Jsonix.Class(Jsonix.Schema.XSD.UnsignedLong, {
	name : 'UnsignedInt',
	typeName : Jsonix.Schema.XSD.qname('unsignedInt'),
	MIN_VALUE : 0,
	MAX_VALUE : 4294967295,
	CLASS_NAME : 'Jsonix.Schema.XSD.UnsignedInt'
});
Jsonix.Schema.XSD.UnsignedInt.INSTANCE = new Jsonix.Schema.XSD.UnsignedInt();
Jsonix.Schema.XSD.UnsignedInt.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.UnsignedInt.INSTANCE);
Jsonix.Schema.XSD.UnsignedShort = Jsonix.Class(Jsonix.Schema.XSD.UnsignedInt, {
	name : 'UnsignedShort',
	typeName : Jsonix.Schema.XSD.qname('unsignedShort'),
	MIN_VALUE : 0,
	MAX_VALUE : 65535,
	CLASS_NAME : 'Jsonix.Schema.XSD.UnsignedShort'
});
Jsonix.Schema.XSD.UnsignedShort.INSTANCE = new Jsonix.Schema.XSD.UnsignedShort();
Jsonix.Schema.XSD.UnsignedShort.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.UnsignedShort.INSTANCE);
Jsonix.Schema.XSD.UnsignedByte = Jsonix.Class(Jsonix.Schema.XSD.UnsignedShort, {
	name : 'UnsignedByte',
	typeName : Jsonix.Schema.XSD.qname('unsignedByte'),
	MIN_VALUE : 0,
	MAX_VALUE : 255,
	CLASS_NAME : 'Jsonix.Schema.XSD.UnsignedByte'
});
Jsonix.Schema.XSD.UnsignedByte.INSTANCE = new Jsonix.Schema.XSD.UnsignedByte();
Jsonix.Schema.XSD.UnsignedByte.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.UnsignedByte.INSTANCE);
Jsonix.Schema.XSD.PositiveInteger = Jsonix.Class(Jsonix.Schema.XSD.NonNegativeInteger, {
	name : 'PositiveInteger',
	typeName : Jsonix.Schema.XSD.qname('positiveInteger'),
	MIN_VALUE : 1,
	MAX_VALUE : 9223372036854775807,
	CLASS_NAME : 'Jsonix.Schema.XSD.PositiveInteger'
});
Jsonix.Schema.XSD.PositiveInteger.INSTANCE = new Jsonix.Schema.XSD.PositiveInteger();
Jsonix.Schema.XSD.PositiveInteger.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.PositiveInteger.INSTANCE);
Jsonix.Schema.XSD.Double = Jsonix.Class(Jsonix.Schema.XSD.Number, {
	name : 'Double',
	typeName : Jsonix.Schema.XSD.qname('double'),
	isInstance : function(value, context, scope) {
		return Jsonix.Util.Type.isNaN(value) || value === -Infinity || value === Infinity || (Jsonix.Util.Type.isNumber(value) && value >= this.MIN_VALUE && value <= this.MAX_VALUE);
	},
	MIN_VALUE : -1.7976931348623157e+308,
	MAX_VALUE : 1.7976931348623157e+308,
	CLASS_NAME : 'Jsonix.Schema.XSD.Double'
});
Jsonix.Schema.XSD.Double.INSTANCE = new Jsonix.Schema.XSD.Double();
Jsonix.Schema.XSD.Double.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Double.INSTANCE);
Jsonix.Schema.XSD.AnyURI = Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
	name : 'AnyURI',
	typeName : Jsonix.Schema.XSD.qname('anyURI'),
	print : function(value, context, output, scope) {
		Jsonix.Util.Ensure.ensureString(value);
		return value;
	},
	parse : function(text, context, input, scope) {
		Jsonix.Util.Ensure.ensureString(text);
		return text;
	},
	isInstance : function(value, context, scope) {
		return Jsonix.Util.Type.isString(value);
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.AnyURI'
});
Jsonix.Schema.XSD.AnyURI.INSTANCE = new Jsonix.Schema.XSD.AnyURI();
Jsonix.Schema.XSD.AnyURI.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.AnyURI.INSTANCE);
Jsonix.Schema.XSD.QName = Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
	name : 'QName',
	typeName : Jsonix.Schema.XSD.qname('QName'),
	print : function(value, context, output, scope) {
		var qName = Jsonix.XML.QName.fromObject(value);
		var prefix;
		var localPart = qName.localPart;
		if (output) {
			// If QName does not provide the prefix, let it be generated
			prefix = output.getPrefix(qName.namespaceURI, qName.prefix||null);
			output.declareNamespace(qName.namespaceURI, prefix);
		} else {
			prefix = qName.prefix;
		}
		return !prefix ? localPart : (prefix + ':' + localPart);
	},
	parse : function(value, context, input, scope) {
		Jsonix.Util.Ensure.ensureString(value);
		value = Jsonix.Util.StringUtils.trim(value);
		var prefix;
		var localPart;
		var colonPosition = value.indexOf(':');
		if (colonPosition === -1) {
			prefix = '';
			localPart = value;
		} else if (colonPosition > 0 && colonPosition < (value.length - 1)) {
			prefix = value.substring(0, colonPosition);
			localPart = value.substring(colonPosition + 1);
		} else {
			throw new Error('Invalid QName [' + value + '].');
		}
		var namespaceContext = input || context || null;
		if (!namespaceContext)
		{
			return value;
		}
		else
		{
			var namespaceURI = namespaceContext.getNamespaceURI(prefix);
			if (Jsonix.Util.Type.isString(namespaceURI))
			{
				return new Jsonix.XML.QName(namespaceURI, localPart, prefix);
			}
			else
			{
				throw new Error('Prefix [' + prefix + '] of the QName [' + value + '] is not bound in this context.');
			}
		}
	},
	isInstance : function(value, context, scope) {
		return (value instanceof Jsonix.XML.QName) || (Jsonix.Util.Type.isObject(value) && Jsonix.Util.Type.isString(value.localPart || value.lp));
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.QName'
});
Jsonix.Schema.XSD.QName.INSTANCE = new Jsonix.Schema.XSD.QName();
Jsonix.Schema.XSD.QName.INSTANCE.LIST = new Jsonix.Schema.XSD.List(
		Jsonix.Schema.XSD.QName.INSTANCE);
Jsonix.Schema.XSD.Calendar = Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
	name : 'Calendar',
	typeName : Jsonix.Schema.XSD.qname('calendar'),
	parse : function(text, context, input, scope) {
		Jsonix.Util.Ensure.ensureString(text);
		if (text.match(new RegExp("^" + Jsonix.Schema.XSD.Calendar.DATETIME_PATTERN + "$"))) {
			return this.parseDateTime(text, context, input, scope);
		} else if (text.match(new RegExp("^" + Jsonix.Schema.XSD.Calendar.DATE_PATTERN + "$"))) {
			return this.parseDate(text, context, input, scope);
		} else if (text.match(new RegExp("^" + Jsonix.Schema.XSD.Calendar.TIME_PATTERN + "$"))) {
			return this.parseTime(text, context, input, scope);
		} else if (text.match(new RegExp("^" + Jsonix.Schema.XSD.Calendar.GYEAR_MONTH_PATTERN + "$"))) {
			return this.parseGYearMonth(text, context, input, scope);
		} else if (text.match(new RegExp("^" + Jsonix.Schema.XSD.Calendar.GYEAR_PATTERN + "$"))) {
			return this.parseGYear(text, context, input, scope);
		} else if (text.match(new RegExp("^" + Jsonix.Schema.XSD.Calendar.GMONTH_DAY_PATTERN + "$"))) {
			return this.parseGMonthDay(text, context, input, scope);
		} else if (text.match(new RegExp("^" + Jsonix.Schema.XSD.Calendar.GMONTH_PATTERN + "$"))) {
			return this.parseGMonth(text, context, input, scope);
		} else if (text.match(new RegExp("^" + Jsonix.Schema.XSD.Calendar.GDAY_PATTERN + "$"))) {
			return this.parseGDay(text, context, input, scope);
		} else {
			throw new Error('Value [' + text + '] does not match xs:dateTime, xs:date, xs:time, xs:gYearMonth, xs:gYear, xs:gMonthDay, xs:gMonth or xs:gDay patterns.');
		}
	},
	parseGYearMonth : function(value, context, input, scope) {
		var gYearMonthExpression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.GYEAR_MONTH_PATTERN + "$");
		var results = value.match(gYearMonthExpression);
		if (results !== null) {
			var data = {
				year : parseInt(results[1], 10),
				month : parseInt(results[5], 10),
				timezone : this.parseTimezoneString(results[7])
			};
			return new Jsonix.XML.Calendar(data);
		}
		throw new Error('Value [' + value + '] does not match the xs:gYearMonth pattern.');
	},
	parseGYear : function(value, context, input, scope) {
		var gYearExpression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.GYEAR_PATTERN + "$");
		var results = value.match(gYearExpression);
		if (results !== null) {
			var data = {
				year : parseInt(results[1], 10),
				timezone : this.parseTimezoneString(results[5])
			};
			return new Jsonix.XML.Calendar(data);
		}
		throw new Error('Value [' + value + '] does not match the xs:gYear pattern.');
	},
	parseGMonthDay : function(value, context, input, scope) {
		var gMonthDayExpression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.GMONTH_DAY_PATTERN + "$");
		var results = value.match(gMonthDayExpression);
		if (results !== null) {
			var data = {
				month : parseInt(results[2], 10),
				day : parseInt(results[3], 10),
				timezone : this.parseTimezoneString(results[5])
			};
			return new Jsonix.XML.Calendar(data);
		}
		throw new Error('Value [' + value + '] does not match the xs:gMonthDay pattern.');
	},
	parseGMonth : function(value, context, input, scope) {
		var gMonthExpression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.GMONTH_PATTERN + "$");
		var results = value.match(gMonthExpression);
		if (results !== null) {
			var data = {
				month : parseInt(results[2], 10),
				timezone : this.parseTimezoneString(results[3])
			};
			return new Jsonix.XML.Calendar(data);
		}
		throw new Error('Value [' + value + '] does not match the xs:gMonth pattern.');
	},
	parseGDay : function(value, context, input, scope) {
		var gDayExpression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.GDAY_PATTERN + "$");
		var results = value.match(gDayExpression);
		if (results !== null) {
			var data = {
				day : parseInt(results[2], 10),
				timezone : this.parseTimezoneString(results[3])
			};
			return new Jsonix.XML.Calendar(data);
		}
		throw new Error('Value [' + value + '] does not match the xs:gDay pattern.');
	},
	parseDateTime : function(text, context, input, scope) {
		Jsonix.Util.Ensure.ensureString(text);
		var expression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.DATETIME_PATTERN + "$");
		var results = text.match(expression);
		if (results !== null) {
			var data = {
				year : parseInt(results[1], 10),
				month : parseInt(results[5], 10),
				day : parseInt(results[7], 10),
				hour : parseInt(results[9], 10),
				minute : parseInt(results[10], 10),
				second : parseInt(results[11], 10),
				fractionalSecond : (results[12] ? parseFloat(results[12]) : 0),
				timezone : this.parseTimezoneString(results[14])
			};
			return new Jsonix.XML.Calendar(data);
		}
		throw new Error('Value [' + value + '] does not match the xs:date pattern.');
	},
	parseDate : function(text, context, input, scope) {
		Jsonix.Util.Ensure.ensureString(text);
		var expression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.DATE_PATTERN + "$");
		var results = text.match(expression);
		if (results !== null) {
			var data = {
				year : parseInt(results[1], 10),
				month : parseInt(results[5], 10),
				day : parseInt(results[7], 10),
				timezone : this.parseTimezoneString(results[9])
			};
			return new Jsonix.XML.Calendar(data);
		}
		throw new Error('Value [' + value + '] does not match the xs:date pattern.');
	},
	parseTime : function(text, context, input, scope) {
		Jsonix.Util.Ensure.ensureString(text);
		var expression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.TIME_PATTERN + "$");
		var results = text.match(expression);
		if (results !== null) {
			var data = {
				hour : parseInt(results[1], 10),
				minute : parseInt(results[2], 10),
				second : parseInt(results[3], 10),
				fractionalSecond : (results[4] ? parseFloat(results[4]) : 0),
				timezone : this.parseTimezoneString(results[6])
			};
			return new Jsonix.XML.Calendar(data);
		}
		throw new Error('Value [' + value + '] does not match the xs:time pattern.');
	},
	parseTimezoneString : function(text) {
		// (('+' | '-') hh ':' mm) | 'Z'
		if (!Jsonix.Util.Type.isString(text)) {
			return NaN;
		} else if (text === '') {
			return NaN;
		} else if (text === 'Z') {
			return 0;
		} else if (text === '+14:00') {
			return 14 * 60;
		} else if (text === '-14:00') {
			return -14 * 60;
		} else {
			var expression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN + "$");
			var results = text.match(expression);
			if (results !== null) {
				var sign = results[1] === '+' ? 1 : -1;
				var hour = parseInt(results[4], 10);
				var minute = parseInt(results[5], 10);
				return sign * (hour * 60 + minute);
			}
			throw new Error('Value [' + value + '] does not match the timezone pattern.');
		}
	},
	print : function(value, context, output, scope) {
		Jsonix.Util.Ensure.ensureObject(value);
		if (Jsonix.Util.NumberUtils.isInteger(value.year) && Jsonix.Util.NumberUtils.isInteger(value.month) && Jsonix.Util.NumberUtils.isInteger(value.day) && Jsonix.Util.NumberUtils.isInteger(value.hour) && Jsonix.Util.NumberUtils.isInteger(value.minute) && Jsonix.Util.NumberUtils.isInteger(value.second)) {
			return this.printDateTime(value);
		} else if (Jsonix.Util.NumberUtils.isInteger(value.year) && Jsonix.Util.NumberUtils.isInteger(value.month) && Jsonix.Util.NumberUtils.isInteger(value.day)) {
			return this.printDate(value);
		} else if (Jsonix.Util.NumberUtils.isInteger(value.hour) && Jsonix.Util.NumberUtils.isInteger(value.minute) && Jsonix.Util.NumberUtils.isInteger(value.second)) {
			return this.printTime(value);
		} else if (Jsonix.Util.NumberUtils.isInteger(value.year) && Jsonix.Util.NumberUtils.isInteger(value.month)) {
			return this.printGYearMonth(value);
		} else if (Jsonix.Util.NumberUtils.isInteger(value.month) && Jsonix.Util.NumberUtils.isInteger(value.day)) {
			return this.printGMonthDay(value);
		} else if (Jsonix.Util.NumberUtils.isInteger(value.year)) {
			return this.printGYear(value);
		} else if (Jsonix.Util.NumberUtils.isInteger(value.month)) {
			return this.printGMonth(value);
		} else if (Jsonix.Util.NumberUtils.isInteger(value.day)) {
			return this.printGDay(value);
		} else {
			throw new Error('Value [' + value + '] is not recognized as dateTime, date or time.');
		}
	},
	printDateTime : function(value) {
		Jsonix.Util.Ensure.ensureObject(value);
		Jsonix.Util.Ensure.ensureInteger(value.year);
		Jsonix.Util.Ensure.ensureInteger(value.month);
		Jsonix.Util.Ensure.ensureInteger(value.day);
		Jsonix.Util.Ensure.ensureInteger(value.hour);
		Jsonix.Util.Ensure.ensureInteger(value.minute);
		Jsonix.Util.Ensure.ensureNumber(value.second);
		if (Jsonix.Util.Type.exists(value.fractionalString)) {
			Jsonix.Util.Ensure.ensureNumber(value.fractionalString);
		}
		if (Jsonix.Util.Type.exists(value.timezone) && !Jsonix.Util.Type.isNaN(value.timezone)) {
			Jsonix.Util.Ensure.ensureInteger(value.timezone);
		}
		var result = this.printDateString(value);
		result = result + 'T';
		result = result + this.printTimeString(value);
		if (Jsonix.Util.Type.exists(value.timezone)) {
			result = result + this.printTimezoneString(value.timezone);
		}
		return result;
	},
	printDate : function(value) {
		Jsonix.Util.Ensure.ensureObject(value);
		Jsonix.Util.Ensure.ensureNumber(value.year);
		Jsonix.Util.Ensure.ensureNumber(value.month);
		Jsonix.Util.Ensure.ensureNumber(value.day);
		if (Jsonix.Util.Type.exists(value.timezone) && !Jsonix.Util.Type.isNaN(value.timezone)) {
			Jsonix.Util.Ensure.ensureInteger(value.timezone);
		}
		var result = this.printDateString(value);
		if (Jsonix.Util.Type.exists(value.timezone)) {
			result = result + this.printTimezoneString(value.timezone);
		}
		return result;
	},
	printTime : function(value) {
		Jsonix.Util.Ensure.ensureObject(value);
		Jsonix.Util.Ensure.ensureNumber(value.hour);
		Jsonix.Util.Ensure.ensureNumber(value.minute);
		Jsonix.Util.Ensure.ensureNumber(value.second);
		if (Jsonix.Util.Type.exists(value.fractionalString)) {
			Jsonix.Util.Ensure.ensureNumber(value.fractionalString);
		}
		if (Jsonix.Util.Type.exists(value.timezone) && !Jsonix.Util.Type.isNaN(value.timezone)) {
			Jsonix.Util.Ensure.ensureInteger(value.timezone);
		}

		var result = this.printTimeString(value);
		if (Jsonix.Util.Type.exists(value.timezone)) {
			result = result + this.printTimezoneString(value.timezone);
		}
		return result;
	},
	printDateString : function(value) {
		Jsonix.Util.Ensure.ensureObject(value);
		Jsonix.Util.Ensure.ensureInteger(value.year);
		Jsonix.Util.Ensure.ensureInteger(value.month);
		Jsonix.Util.Ensure.ensureInteger(value.day);
		return (value.year < 0 ? ('-' + this.printYear(-value.year)) : this.printYear(value.year)) + '-' + this.printMonth(value.month) + '-' + this.printDay(value.day);
	},
	printTimeString : function(value) {
		Jsonix.Util.Ensure.ensureObject(value);
		Jsonix.Util.Ensure.ensureInteger(value.hour);
		Jsonix.Util.Ensure.ensureInteger(value.minute);
		Jsonix.Util.Ensure.ensureInteger(value.second);
		if (Jsonix.Util.Type.exists(value.fractionalSecond)) {
			Jsonix.Util.Ensure.ensureNumber(value.fractionalSecond);
		}
		var result = this.printHour(value.hour);
		result = result + ':';
		result = result + this.printMinute(value.minute);
		result = result + ':';
		result = result + this.printSecond(value.second);
		if (Jsonix.Util.Type.exists(value.fractionalSecond)) {
			result = result + this.printFractionalSecond(value.fractionalSecond);
		}
		return result;
	},
	printTimezoneString : function(value) {
		if (!Jsonix.Util.Type.exists(value) || Jsonix.Util.Type.isNaN(value)) {
			return '';
		} else {
			Jsonix.Util.Ensure.ensureInteger(value);

			var sign = value < 0 ? -1 : (value > 0 ? 1 : 0);
			var data = value * sign;
			var minute = data % 60;
			var hour = Math.floor(data / 60);

			var result;
			if (sign === 0) {
				return 'Z';
			} else {
				if (sign > 0) {
					result = '+';
				} else if (sign < 0) {
					result = '-';
				}
				result = result + this.printHour(hour);
				result = result + ':';
				result = result + this.printMinute(minute);
				return result;
			}
		}
	},
	printGDay : function(value, context, output, scope) {
		Jsonix.Util.Ensure.ensureObject(value);
		var day = undefined;
		var timezone = undefined;

		if (value instanceof Date) {
			day = value.getDate();
		} else {
			Jsonix.Util.Ensure.ensureInteger(value.day);
			day = value.day;
			timezone = value.timezone;
		}
		Jsonix.XML.Calendar.validateDay(day);
		Jsonix.XML.Calendar.validateTimezone(timezone);
		return "---" + this.printDay(day) + this.printTimezoneString(timezone);
	},
	printGMonth : function(value, context, output, scope) {
		Jsonix.Util.Ensure.ensureObject(value);
		var month = undefined;
		var timezone = undefined;

		if (value instanceof Date) {
			month = value.getMonth() + 1;
		} else {
			Jsonix.Util.Ensure.ensureInteger(value.month);
			month = value.month;
			timezone = value.timezone;
		}
		Jsonix.XML.Calendar.validateMonth(month);
		Jsonix.XML.Calendar.validateTimezone(timezone);
		return "--" + this.printMonth(month) + this.printTimezoneString(timezone);
	},
	printGMonthDay : function(value, context, output, scope) {
		Jsonix.Util.Ensure.ensureObject(value);
		var month = undefined;
		var day = undefined;
		var timezone = undefined;

		if (value instanceof Date) {
			month = value.getMonth() + 1;
			day = value.getDate();
		} else {
			Jsonix.Util.Ensure.ensureInteger(value.month);
			Jsonix.Util.Ensure.ensureInteger(value.day);
			month = value.month;
			day = value.day;
			timezone = value.timezone;
		}
		Jsonix.XML.Calendar.validateMonthDay(month, day);
		Jsonix.XML.Calendar.validateTimezone(timezone);
		return "--" + this.printMonth(month) + "-" + this.printDay(day) + this.printTimezoneString(timezone);
	},
	printGYear : function(value, context, output, scope) {
		Jsonix.Util.Ensure.ensureObject(value);
		var year = undefined;
		var timezone = undefined;

		if (value instanceof Date) {
			year = value.getFullYear();
		} else {
			Jsonix.Util.Ensure.ensureInteger(value.year);
			year = value.year;
			timezone = value.timezone;
		}
		Jsonix.XML.Calendar.validateYear(year);
		Jsonix.XML.Calendar.validateTimezone(timezone);
		return this.printSignedYear(year) + this.printTimezoneString(timezone);
	},
	printGYearMonth : function(value, context, output, scope) {
		Jsonix.Util.Ensure.ensureObject(value);
		var year = undefined;
		var month = undefined;
		var timezone = undefined;

		if (value instanceof Date) {
			year = value.getFullYear();
			month = value.getMonth() + 1;
		} else {
			Jsonix.Util.Ensure.ensureInteger(value.year);
			year = value.year;
			month = value.month;
			timezone = value.timezone;
		}
		Jsonix.XML.Calendar.validateYear(year);
		Jsonix.XML.Calendar.validateMonth(month);
		Jsonix.XML.Calendar.validateTimezone(timezone);
		return this.printSignedYear(year) + "-" + this.printMonth(month) + this.printTimezoneString(timezone);
	},
	printSignedYear : function(value) {
		return value < 0 ? ("-" + this.printYear(value * -1)) : (this.printYear(value));
	},
	printYear : function(value) {
		return this.printInteger(value, 4);
	},
	printMonth : function(value) {
		return this.printInteger(value, 2);
	},
	printDay : function(value) {
		return this.printInteger(value, 2);
	},
	printHour : function(value) {
		return this.printInteger(value, 2);
	},
	printMinute : function(value) {
		return this.printInteger(value, 2);
	},
	printSecond : function(value) {
		return this.printInteger(value, 2);
	},
	printFractionalSecond : function(value) {
		Jsonix.Util.Ensure.ensureNumber(value);
		if (value < 0 || value >= 1) {
			throw new Error('Fractional second [' + value + '] must be between 0 and 1.');
		} else if (value === 0) {
			return '';
		} else {
			var string = String(value);
			var dotIndex = string.indexOf('.');
			if (dotIndex < 0) {
				return '';
			} else {
				return string.substring(dotIndex);
			}
		}
	},
	printInteger : function(value, length) {
		Jsonix.Util.Ensure.ensureInteger(value);
		Jsonix.Util.Ensure.ensureInteger(length);
		if (length <= 0) {
			throw new Error('Length [' + value + '] must be positive.');
		}
		if (value < 0) {
			throw new Error('Value [' + value + '] must not be negative.');
		}
		var result = String(value);
		for (var i = result.length; i < length; i++) {
			result = '0' + result;
		}
		return result;
	},
	isInstance : function(value, context, scope) {
		return Jsonix.Util.Type.isObject(value) && ((Jsonix.Util.NumberUtils.isInteger(value.year) && Jsonix.Util.NumberUtils.isInteger(value.month) && Jsonix.Util.NumberUtils.isInteger(value.day)) || (Jsonix.Util.NumberUtils.isInteger(value.hour) && Jsonix.Util.NumberUtils.isInteger(value.minute) && Jsonix.Util.NumberUtils.isInteger(value.second)));
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.Calendar'
});

Jsonix.Schema.XSD.Calendar.YEAR_PATTERN = "-?([1-9][0-9]*)?((?!(0000))[0-9]{4})";
Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN = "Z|([\\-\\+])(((0[0-9]|1[0-3]):([0-5][0-9]))|(14:00))";
Jsonix.Schema.XSD.Calendar.MONTH_PATTERN = "(0[1-9]|1[0-2])";
Jsonix.Schema.XSD.Calendar.SINGLE_MONTH_PATTERN = "\\-\\-" + Jsonix.Schema.XSD.Calendar.MONTH_PATTERN;
Jsonix.Schema.XSD.Calendar.DAY_PATTERN = "(0[1-9]|[12][0-9]|3[01])";
Jsonix.Schema.XSD.Calendar.SINGLE_DAY_PATTERN = "\\-\\-\\-" + Jsonix.Schema.XSD.Calendar.DAY_PATTERN;
Jsonix.Schema.XSD.Calendar.GYEAR_PATTERN = "(" + Jsonix.Schema.XSD.Calendar.YEAR_PATTERN + ")" + "(" + Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN + ")?";
Jsonix.Schema.XSD.Calendar.GMONTH_PATTERN = "(" + Jsonix.Schema.XSD.Calendar.SINGLE_MONTH_PATTERN + ")" + "(" + Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN + ")?";
Jsonix.Schema.XSD.Calendar.GDAY_PATTERN = "(" + Jsonix.Schema.XSD.Calendar.SINGLE_DAY_PATTERN + ")" + "(" + Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN + ")?";
Jsonix.Schema.XSD.Calendar.GYEAR_MONTH_PATTERN = "(" + Jsonix.Schema.XSD.Calendar.YEAR_PATTERN + ")" + "-" + "(" + Jsonix.Schema.XSD.Calendar.DAY_PATTERN + ")" + "(" + Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN + ")?";
Jsonix.Schema.XSD.Calendar.GMONTH_DAY_PATTERN = "(" + Jsonix.Schema.XSD.Calendar.SINGLE_MONTH_PATTERN + ")" + "-" + "(" + Jsonix.Schema.XSD.Calendar.DAY_PATTERN + ")" + "(" + Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN + ")?";
Jsonix.Schema.XSD.Calendar.DATE_PART_PATTERN = "(" + Jsonix.Schema.XSD.Calendar.YEAR_PATTERN + ")" + "-" + "(" + Jsonix.Schema.XSD.Calendar.MONTH_PATTERN + ")" + "-" + "(" + Jsonix.Schema.XSD.Calendar.DAY_PATTERN + ")";
Jsonix.Schema.XSD.Calendar.TIME_PART_PATTERN = "([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])(\\.([0-9]+))?";
Jsonix.Schema.XSD.Calendar.TIME_PATTERN = Jsonix.Schema.XSD.Calendar.TIME_PART_PATTERN + '(' + Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN + ')?';
Jsonix.Schema.XSD.Calendar.DATE_PATTERN = Jsonix.Schema.XSD.Calendar.DATE_PART_PATTERN + '(' + Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN + ')?';
Jsonix.Schema.XSD.Calendar.DATETIME_PATTERN = Jsonix.Schema.XSD.Calendar.DATE_PART_PATTERN + 'T' + Jsonix.Schema.XSD.Calendar.TIME_PART_PATTERN + '(' + Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN + ')?';
Jsonix.Schema.XSD.Calendar.INSTANCE = new Jsonix.Schema.XSD.Calendar();
Jsonix.Schema.XSD.Calendar.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Calendar.INSTANCE);
Jsonix.Schema.XSD.Duration = Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
	name : 'Duration',
	typeName : Jsonix.Schema.XSD.qname('duration'),
	isInstance : function(value, context, scope) {
		return Jsonix.Util.Type.isObject(value) && (
				(Jsonix.Util.Type.exists(value.sign) ? (value.sign === -1 || value.sign === 1) : true)
				(Jsonix.Util.NumberUtils.isInteger(value.years) && value.years >=0) ||
				(Jsonix.Util.NumberUtils.isInteger(value.months) && value.months >=0) ||
				(Jsonix.Util.NumberUtils.isInteger(value.days) && value.days >= 0) ||
				(Jsonix.Util.NumberUtils.isInteger(value.hours) && value.hours >= 0) ||
				(Jsonix.Util.NumberUtils.isInteger(value.minutes) && value.minutes >= 0) ||
				(Jsonix.Util.Type.isNumber(value.seconds) && value.seconds >= 0) );
	},
	validate : function(value) {
		Jsonix.Util.Ensure.ensureObject(value);
		if (Jsonix.Util.Type.exists(value.sign)) {
			if (!(value.sign === 1 || value.sign === -1)) {
				throw new Error("Sign of the duration [" + value.sign + "] must be either [1] or [-1].");
			}
		}
		var empty = true;
		var ifExistsEnsureUnsignedInteger = function(v, message) {
			if (Jsonix.Util.Type.exists(v)) {
				if (!(Jsonix.Util.NumberUtils.isInteger(v) && v >= 0)) {
					throw new Error(message.replace("{0}", v));
				} else {
					return true;
				}
			} else {
				return false;
			}
		};
		var ifExistsEnsureUnsignedNumber = function(v, message) {
			if (Jsonix.Util.Type.exists(v)) {
				if (!(Jsonix.Util.Type.isNumber(v) && v >= 0)) {
					throw new Error(message.replace("{0}", v));
				} else {
					return true;
				}
			} else {
				return false;
			}
		};
		empty = empty && !ifExistsEnsureUnsignedInteger(value.years, "Number of years [{0}] must be an unsigned integer.");
		empty = empty && !ifExistsEnsureUnsignedInteger(value.months, "Number of months [{0}] must be an unsigned integer.");
		empty = empty && !ifExistsEnsureUnsignedInteger(value.days, "Number of days [{0}] must be an unsigned integer.");
		empty = empty && !ifExistsEnsureUnsignedInteger(value.hours, "Number of hours [{0}] must be an unsigned integer.");
		empty = empty && !ifExistsEnsureUnsignedInteger(value.minutes, "Number of minutes [{0}] must be an unsigned integer.");
		empty = empty && !ifExistsEnsureUnsignedNumber(value.seconds, "Number of seconds [{0}] must be an unsigned number.");
		if (empty) {
			throw new Error("At least one of the components (years, months, days, hours, minutes, seconds) must be set.");
		}
	},
	print : function(value, context, output, scope) {
		this.validate(value);
		var result = '';
		if (value.sign === -1)
		{
			result += '-';
		}
		result += 'P';
		if (value.years) {
			result += (value.years + 'Y');
		}
		if (value.months) {
			result += (value.months + 'M');
		}
		if (value.days) {
			result += (value.days + 'D');
		}
		if (value.hours || value.minutes || value.seconds)
		{
			result += 'T';
			if (value.hours) {
				result += (value.hours + 'H');
			}
			if (value.minutes) {
				result += (value.minutes + 'M');
			}
			if (value.seconds) {
				result += (value.seconds + 'S');
			}
		}
		return result;
	},
	parse : function(value, context, input, scope) {
		var durationExpression = new RegExp("^" + Jsonix.Schema.XSD.Duration.PATTERN + "$");
		var results = value.match(durationExpression);
		if (results !== null) {
			var empty = true;
			var duration = {};
			if (results[1]) { duration.sign = -1; }
			if (results[3]) { duration.years = parseInt(results[3], 10); empty = false; }
			if (results[5]) { duration.months = parseInt(results[5], 10); empty = false; }
			if (results[7]) { duration.days = parseInt(results[7], 10); empty = false; }
			if (results[10]) { duration.hours = parseInt(results[10], 10); empty = false; }
			if (results[12]) { duration.minutes = parseInt(results[12], 10); empty = false; }
			if (results[14]) { duration.seconds = Number(results[14]); empty = false; }
			return duration;
		} else {
			throw new Error('Value [' + value + '] does not match the duration pattern.');
		}
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.Duration'
});
Jsonix.Schema.XSD.Duration.PATTERN = '(-)?P(([0-9]+)Y)?(([0-9]+)M)?(([0-9]+)D)?(T(([0-9]+)H)?(([0-9]+)M)?(([0-9]+(\\.[0-9]+)?)S)?)?';
Jsonix.Schema.XSD.Duration.INSTANCE = new Jsonix.Schema.XSD.Duration();
Jsonix.Schema.XSD.Duration.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Duration.INSTANCE);
Jsonix.Schema.XSD.DateTime = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'DateTime',
	typeName : Jsonix.Schema.XSD.qname('dateTime'),
	parse : function(value, context, input, scope) {
		return this.parseDateTime(value);
	},
	print : function(value, context, output, scope) {
		return this.printDateTime(value);
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.DateTime'
});
Jsonix.Schema.XSD.DateTime.INSTANCE = new Jsonix.Schema.XSD.DateTime();
Jsonix.Schema.XSD.DateTime.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.DateTime.INSTANCE);

Jsonix.Schema.XSD.DateTimeAsDate = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'DateTimeAsDate',
	typeName : Jsonix.Schema.XSD.qname('dateTime'),
	parse : function(value, context, input, scope) {
		var calendar = this.parseDateTime(value);
		var date = new Date();
		date.setFullYear(calendar.year);
		date.setMonth(calendar.month - 1);
		date.setDate(calendar.day);
		date.setHours(calendar.hour);
		date.setMinutes(calendar.minute);
		date.setSeconds(calendar.second);
		if (Jsonix.Util.Type.isNumber(calendar.fractionalSecond)) {
			date.setMilliseconds(Math.floor(1000 * calendar.fractionalSecond));
		}
		var timezone;
		var unknownTimezone;
		var localTimezone = - date.getTimezoneOffset();
		if (Jsonix.Util.NumberUtils.isInteger(calendar.timezone))
		{
			timezone = calendar.timezone;
			unknownTimezone = false;
		}
		else
		{
			// Unknown timezone
			timezone = localTimezone;
			unknownTimezone = true;
		}
		//
		var result = new Date(date.getTime() + (60000 * (- timezone + localTimezone)));
		if (unknownTimezone)
		{
			// null denotes "unknown timezone"
			result.originalTimezone = null;
		}
		else
		{
			result.originalTimezone = calendar.timezone;
		}
		return result;
	},
	print : function(value, context, output, scope) {
		Jsonix.Util.Ensure.ensureDate(value);
		var timezone;
		var localTimezone = - value.getTimezoneOffset();
		var correctedValue;
		// If original time zone was unknown, print the given value without
		// the timezone
		if (value.originalTimezone === null)
		{
			return this.printDateTime(new Jsonix.XML.Calendar({
				year : value.getFullYear(),
				month : value.getMonth() + 1,
				day : value.getDate(),
				hour : value.getHours(),
				minute : value.getMinutes(),
				second : value.getSeconds(),
				fractionalSecond : (value.getMilliseconds() / 1000)
			}));
		}
		else
		{
			// If original timezone was known, correct and print the value with the timezone
			if (Jsonix.Util.NumberUtils.isInteger(value.originalTimezone))
			{
				timezone = value.originalTimezone;
				correctedValue = new Date(value.getTime() - (60000 * ( - timezone + localTimezone)));
			}
			// If original timezone was not specified, do not correct and use the local time zone
			else
			{
				timezone = localTimezone;
				correctedValue = value;
			}
			var x = this.printDateTime(new Jsonix.XML.Calendar({
				year : correctedValue.getFullYear(),
				month : correctedValue.getMonth() + 1,
				day : correctedValue.getDate(),
				hour : correctedValue.getHours(),
				minute : correctedValue.getMinutes(),
				second : correctedValue.getSeconds(),
				fractionalSecond : (correctedValue.getMilliseconds() / 1000),
				timezone: timezone
			}));
			return x;
		}
	},
	isInstance : function(value, context, scope) {
		return Jsonix.Util.Type.isDate(value);
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.DateTimeAsDate'
});
Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE = new Jsonix.Schema.XSD.DateTimeAsDate();
Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE);

Jsonix.Schema.XSD.Time = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'Time',
	typeName : Jsonix.Schema.XSD.qname('time'),
	parse : function(value, context, input, scope) {
		return this.parseTime(value);
	},
	print : function(value, context, output, scope) {
		return this.printTime(value);
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.Time'
});
Jsonix.Schema.XSD.Time.INSTANCE = new Jsonix.Schema.XSD.Time();
Jsonix.Schema.XSD.Time.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Time.INSTANCE);
Jsonix.Schema.XSD.TimeAsDate = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'TimeAsDate',
	typeName : Jsonix.Schema.XSD.qname('time'),
	parse : function(value, context, input, scope) {
		var calendar = this.parseTime(value);
		var date = new Date();
		date.setFullYear(1970);
		date.setMonth(0);
		date.setDate(1);
		date.setHours(calendar.hour);
		date.setMinutes(calendar.minute);
		date.setSeconds(calendar.second);
		if (Jsonix.Util.Type.isNumber(calendar.fractionalSecond)) {
			date.setMilliseconds(Math.floor(1000 * calendar.fractionalSecond));
		}
		var timezone;
		var unknownTimezone;
		var localTimezone = - date.getTimezoneOffset();
		if (Jsonix.Util.NumberUtils.isInteger(calendar.timezone))
		{
			timezone = calendar.timezone;
			unknownTimezone = false;
		}
		else
		{
			// Unknown timezone
			timezone = localTimezone;
			unknownTimezone = true;
		}
		//
		var result = new Date(date.getTime() + (60000 * ( - timezone + localTimezone)));
		if (unknownTimezone)
		{
			// null denotes "unknown timezone"
			result.originalTimezone = null;
		}
		else
		{
			result.originalTimezone = timezone;
		}
		return result;
	},
	print : function(value, context, output, scope) {
		Jsonix.Util.Ensure.ensureDate(value);
		var time = value.getTime();
		if (time <= -86400000 && time >= 86400000) {
			throw new Error('Invalid time [' + value + '].');
		}
		// Original timezone was unknown, just use current time, no timezone
		if (value.originalTimezone === null)
		{
			return this.printTime(new Jsonix.XML.Calendar({
				hour : value.getHours(),
				minute : value.getMinutes(),
				second : value.getSeconds(),
				fractionalSecond : (value.getMilliseconds() / 1000)
			}));
		}
		else
		{
			var correctedValue;
			var timezone;
			var localTimezone = - value.getTimezoneOffset();
			if (Jsonix.Util.NumberUtils.isInteger(value.originalTimezone))
			{
				timezone = value.originalTimezone;
				correctedValue = new Date(value.getTime() - (60000 * ( - timezone + localTimezone)));
			}
			else
			{
				timezone = localTimezone;
				correctedValue = value;
			}
			var correctedTime = correctedValue.getTime();
			if (correctedTime >= (- localTimezone * 60000)) {
				return this.printTime(new Jsonix.XML.Calendar({
					hour : correctedValue.getHours(),
					minute : correctedValue.getMinutes(),
					second : correctedValue.getSeconds(),
					fractionalSecond : (correctedValue.getMilliseconds() / 1000),
					timezone: timezone
				}));
			} else {
				var timezoneHours = Math.ceil(-correctedTime / 3600000);
				
				var correctedTimeInSeconds = correctedValue.getSeconds() +
					correctedValue.getMinutes() * 60 +
					correctedValue.getHours() * 3600 +
					timezoneHours * 3600 -
					timezone * 60;
				
				return this.printTime(new Jsonix.XML.Calendar({
					hour : correctedTimeInSeconds % 86400,
					minute : correctedTimeInSeconds % 3600,
					second : correctedTimeInSeconds % 60,
					fractionalSecond : (correctedValue.getMilliseconds() / 1000),
					timezone : timezoneHours * 60
				}));
			}
		}
	},
	isInstance : function(value, context, scope) {
		return Jsonix.Util.Type.isDate(value) && value.getTime() > -86400000 && value.getTime() < 86400000;
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.TimeAsDate'
});
Jsonix.Schema.XSD.TimeAsDate.INSTANCE = new Jsonix.Schema.XSD.TimeAsDate();
Jsonix.Schema.XSD.TimeAsDate.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.TimeAsDate.INSTANCE);
Jsonix.Schema.XSD.Date = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'Date',
	typeName : Jsonix.Schema.XSD.qname('date'),
	parse : function(value, context, input, scope) {
		return this.parseDate(value);
	},
	print : function(value, context, output, scope) {
		return this.printDate(value);
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.Date'
});
Jsonix.Schema.XSD.Date.INSTANCE = new Jsonix.Schema.XSD.Date();
Jsonix.Schema.XSD.Date.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Date.INSTANCE);
Jsonix.Schema.XSD.DateAsDate = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'DateAsDate',
	typeName : Jsonix.Schema.XSD.qname('date'),
	parse : function(value, context, input, scope) {
		var calendar = this.parseDate(value);
		var date = new Date();
		date.setFullYear(calendar.year);
		date.setMonth(calendar.month - 1);
		date.setDate(calendar.day);
		date.setHours(0);
		date.setMinutes(0);
		date.setSeconds(0);
		date.setMilliseconds(0);
		if (Jsonix.Util.Type.isNumber(calendar.fractionalSecond)) {
			date.setMilliseconds(Math.floor(1000 * calendar.fractionalSecond));
		}
		var timezone;
		var unknownTimezone;
		var localTimezone = - date.getTimezoneOffset();
		if (Jsonix.Util.NumberUtils.isInteger(calendar.timezone))
		{
			timezone = calendar.timezone;
			unknownTimezone = false;
		}
		else
		{
			// Unknown timezone
			timezone = localTimezone;
			unknownTimezone = true;
		}
		//
		var result = new Date(date.getTime() + (60000 * ( - timezone + localTimezone)));
		if (unknownTimezone)
		{
			// null denotes "unknown timezone"
			result.originalTimezone = null;
		}
		else
		{
			result.originalTimezone = timezone;
		}
		return result;
	},
	print : function(value, context, output, scope) {
		Jsonix.Util.Ensure.ensureDate(value);
		var localDate = new Date(value.getTime());
		localDate.setHours(0);
		localDate.setMinutes(0);
		localDate.setSeconds(0);
		localDate.setMilliseconds(0);
		
		// Original timezone is unknown
		if (value.originalTimezone === null)
		{
			return this.printDate(new Jsonix.XML.Calendar({
				year : value.getFullYear(),
				month : value.getMonth() + 1,
				day : value.getDate()
			}));
		}
		else
		{
			// If original timezone was known, correct and print the value with the timezone
			if (Jsonix.Util.NumberUtils.isInteger(value.originalTimezone))
			{
				var correctedValue = new Date(value.getTime() - (60000 * (- value.originalTimezone - value.getTimezoneOffset())));
				return this.printDate(new Jsonix.XML.Calendar({
					year : correctedValue.getFullYear(),
					month : correctedValue.getMonth() + 1,
					day : correctedValue.getDate(),
					timezone : value.originalTimezone
				}));
			}
			// If original timezone was not specified, do not correct and use the local time zone
			else
			{
				// We assume that the difference between the date value and local midnight
				// should be interpreted as a timezone offset.
				// In case there's no difference, we assume default/unknown timezone
				var localTimezone = - value.getTime() + localDate.getTime();
				if (localTimezone === 0) {
					return this.printDate(new Jsonix.XML.Calendar({
						year : value.getFullYear(),
						month : value.getMonth() + 1,
						day : value.getDate()
					}));
				} else {
					var timezone = localTimezone - (60000 * value.getTimezoneOffset());
					if (timezone >= -43200000) {
						return this.printDate(new Jsonix.XML.Calendar({
							year : value.getFullYear(),
							month : value.getMonth() + 1,
							day : value.getDate(),
							timezone : Math.floor(timezone / 60000)
						}));
					} else {
						var nextDay = new Date(value.getTime() + 86400000);
						return this.printDate(new Jsonix.XML.Calendar({
							year : nextDay.getFullYear(),
							month : nextDay.getMonth() + 1,
							day : nextDay.getDate(),
							timezone : (Math.floor(timezone / 60000) + 1440)
						}));
					}
				}
			}
		}
	},
	isInstance : function(value, context, scope) {
		return Jsonix.Util.Type.isDate(value);
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.DateAsDate'
});
Jsonix.Schema.XSD.DateAsDate.INSTANCE = new Jsonix.Schema.XSD.DateAsDate();
Jsonix.Schema.XSD.DateAsDate.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.DateAsDate.INSTANCE);
Jsonix.Schema.XSD.GYearMonth = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'GYearMonth',
	typeName : Jsonix.Schema.XSD.qname('gYearMonth'),
	CLASS_NAME : 'Jsonix.Schema.XSD.GYearMonth',

	parse : function(value, context, input, scope) {
		return this.parseGYearMonth(value, context, input, scope);
	},

	print : function(value, context, output, scope) {
		return this.printGYearMonth(value, context, output, scope);
	}

});
Jsonix.Schema.XSD.GYearMonth.INSTANCE = new Jsonix.Schema.XSD.GYearMonth();
Jsonix.Schema.XSD.GYearMonth.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GYearMonth.INSTANCE);
Jsonix.Schema.XSD.GYear = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'GYear',
	typeName : Jsonix.Schema.XSD.qname('gYear'),
	CLASS_NAME : 'Jsonix.Schema.XSD.GYear',

	parse : function(value, context, input, scope) {
		return this.parseGYear(value, context, input, scope);
	},

	print : function(value, context, output, scope) {
		return this.printGYear(value, context, output, scope);
	}
});
Jsonix.Schema.XSD.GYear.INSTANCE = new Jsonix.Schema.XSD.GYear();
Jsonix.Schema.XSD.GYear.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GYear.INSTANCE);
Jsonix.Schema.XSD.GMonthDay = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'GMonthDay',
	typeName : Jsonix.Schema.XSD.qname('gMonthDay'),
	CLASS_NAME : 'Jsonix.Schema.XSD.GMonthDay',

	parse : function(value, context, input, scope) {
		return this.parseGMonthDay(value, context, input, scope);
	},

	print : function(value, context, output, scope) {
		return this.printGMonthDay(value, context, output, scope);
	}
});
Jsonix.Schema.XSD.GMonthDay.INSTANCE = new Jsonix.Schema.XSD.GMonthDay();
Jsonix.Schema.XSD.GMonthDay.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GMonthDay.INSTANCE);
Jsonix.Schema.XSD.GDay = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'GDay',
	typeName : Jsonix.Schema.XSD.qname('gDay'),
	CLASS_NAME : 'Jsonix.Schema.XSD.GDay',

	parse : function(value, context, input, scope) {
		return this.parseGDay(value, context, input, scope);
	},

	print : function(value, context, output, scope) {
		return this.printGDay(value, context, output, scope);
	}

});
Jsonix.Schema.XSD.GDay.INSTANCE = new Jsonix.Schema.XSD.GDay();
Jsonix.Schema.XSD.GDay.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GDay.INSTANCE);
Jsonix.Schema.XSD.GMonth = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'GMonth',
	typeName : Jsonix.Schema.XSD.qname('gMonth'),
	CLASS_NAME : 'Jsonix.Schema.XSD.GMonth',
	parse : function(value, context, input, scope) {
		return this.parseGMonth(value, context, input, scope);
	},
	print : function(value, context, output, scope) {
		return this.printGMonth(value, context, output, scope);
	}
});
Jsonix.Schema.XSD.GMonth.INSTANCE = new Jsonix.Schema.XSD.GMonth();
Jsonix.Schema.XSD.GMonth.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GMonth.INSTANCE);
Jsonix.Schema.XSD.ID = Jsonix.Class(Jsonix.Schema.XSD.String, {
	name : 'ID',
	typeName : Jsonix.Schema.XSD.qname('ID'),
	CLASS_NAME : 'Jsonix.Schema.XSD.ID'
});
Jsonix.Schema.XSD.ID.INSTANCE = new Jsonix.Schema.XSD.ID();
Jsonix.Schema.XSD.ID.INSTANCE.LIST = new Jsonix.Schema.XSD.List(
		Jsonix.Schema.XSD.ID.INSTANCE);
Jsonix.Schema.XSD.IDREF = Jsonix.Class(Jsonix.Schema.XSD.String, {
	name : 'IDREF',
	typeName : Jsonix.Schema.XSD.qname('IDREF'),
	CLASS_NAME : 'Jsonix.Schema.XSD.IDREF'
});
Jsonix.Schema.XSD.IDREF.INSTANCE = new Jsonix.Schema.XSD.IDREF();
Jsonix.Schema.XSD.IDREF.INSTANCE.LIST = new Jsonix.Schema.XSD.List(
		Jsonix.Schema.XSD.IDREF.INSTANCE);
Jsonix.Schema.XSD.IDREFS = Jsonix.Class(Jsonix.Schema.XSD.List, {
	name : 'IDREFS',
	initialize : function() {
		Jsonix.Schema.XSD.List.prototype.initialize.apply(this, [ Jsonix.Schema.XSD.IDREF.INSTANCE, Jsonix.Schema.XSD.qname('IDREFS'), ' ' ]);
	},
	// TODO Constraints
	CLASS_NAME : 'Jsonix.Schema.XSD.IDREFS'
});
Jsonix.Schema.XSD.IDREFS.INSTANCE = new Jsonix.Schema.XSD.IDREFS();
Jsonix.Schema.XSI = {};
Jsonix.Schema.XSI.NAMESPACE_URI = 'http://www.w3.org/2001/XMLSchema-instance';
Jsonix.Schema.XSI.PREFIX = 'xsi';
Jsonix.Schema.XSI.TYPE = 'type';
Jsonix.Schema.XSI.NIL = 'nil';
Jsonix.Schema.XSI.qname = function(localPart) {
	Jsonix.Util.Ensure.ensureString(localPart);
	return new Jsonix.XML.QName(Jsonix.Schema.XSI.NAMESPACE_URI, localPart,
			Jsonix.Schema.XSI.PREFIX);
};
Jsonix.Schema.XSI.TYPE_QNAME = Jsonix.Schema.XSI.qname(Jsonix.Schema.XSI.TYPE);

Jsonix.Context = Jsonix
		.Class(Jsonix.Mapping.Styled, {
			modules : [],
			typeInfos : null,
			typeNameKeyToTypeInfo : null,
			elementInfos : null,
			options : null,
			substitutionMembersMap : null,
			scopedElementInfosMap : null,
			supportXsiType : true,
			initialize : function(mappings, options) {
				Jsonix.Mapping.Styled.prototype.initialize.apply(this, [options]);
				this.modules = [];
				this.elementInfos = [];
				this.typeInfos = {};
				this.typeNameKeyToTypeInfo = {};
				this.registerBuiltinTypeInfos();
				this.namespacePrefixes = {};
				this.prefixNamespaces = {};
				this.substitutionMembersMap = {};
				this.scopedElementInfosMap = {};

				// Initialize options
				if (Jsonix.Util.Type.exists(options)) {
					Jsonix.Util.Ensure.ensureObject(options);
					if (Jsonix.Util.Type
							.isObject(options.namespacePrefixes)) {
						this.namespacePrefixes = 
							Jsonix.Util.Type.cloneObject(options.namespacePrefixes, {});
					}
					if (Jsonix.Util.Type
							.isBoolean(options.supportXsiType)) {
						this.supportXsiType = options.supportXsiType; 
					}
				}
				
				// Initialize prefix/namespace mapping
				for (var ns in this.namespacePrefixes)
				{
					if (this.namespacePrefixes.hasOwnProperty(ns))
					{
						p = this.namespacePrefixes[ns];
						this.prefixNamespaces[p] = ns;
					}
				}
				// Initialize modules
				if (Jsonix.Util.Type.exists(mappings)) {
					Jsonix.Util.Ensure.ensureArray(mappings);
					// Initialize modules
					var index, mapping, module;
					for (index = 0; index < mappings.length; index++) {
						mapping = mappings[index];
						module = this.createModule(mapping);
						this.modules[index] = module;
					}
				}
				this.processModules();
			},
			createModule : function(mapping) {
				var module;
				if (mapping instanceof this.mappingStyle.module) {
					module = mapping;
				} else {
					mapping = Jsonix.Util.Type.cloneObject(mapping);
					module = new this.mappingStyle.module(mapping, 
					{
						mappingStyle : this.mappingStyle
					});
				}
				return module;
			},
			registerBuiltinTypeInfos : function() {
				for ( var index = 0; index < this.builtinTypeInfos.length; index++) {
					this.registerTypeInfo(this.builtinTypeInfos[index]);
				}
			},
			processModules : function() {
				var index, module;
				for (index = 0; index < this.modules.length; index++) {
					module = this.modules[index];
					module.registerTypeInfos(this);
				}
				for (index = 0; index < this.modules.length; index++) {
					module = this.modules[index];
					module.buildTypeInfos(this);
				}
				for (index = 0; index < this.modules.length; index++) {
					module = this.modules[index];
					module.registerElementInfos(this);
				}
				for (index = 0; index < this.modules.length; index++) {
					module = this.modules[index];
					module.buildElementInfos(this);
				}
			},
			registerTypeInfo : function(typeInfo) {
				Jsonix.Util.Ensure.ensureObject(typeInfo);
				var n = typeInfo.name||typeInfo.n||null;
				Jsonix.Util.Ensure.ensureString(n);
				this.typeInfos[n] = typeInfo;
				if (typeInfo.typeName && typeInfo.typeName.key)
				{
					this.typeNameKeyToTypeInfo[typeInfo.typeName.key] = typeInfo;
				}
			},
			resolveTypeInfo : function(mapping, module) {
				if (!Jsonix.Util.Type.exists(mapping)) {
					return null;
				} else if (mapping instanceof Jsonix.Model.TypeInfo) {
					return mapping;
				} else if (Jsonix.Util.Type.isString(mapping)) {
					var typeInfoName;
					// If mapping starts with '.' consider it to be a local type name in this module
					if (mapping.length > 0 && mapping.charAt(0) === '.')
					{
						var n = module.name || module.n || undefined;
						Jsonix.Util.Ensure.ensureObject(module, 'Type info mapping can only be resolved if module is provided.');
						Jsonix.Util.Ensure.ensureString(n, 'Type info mapping can only be resolved if module name is provided.');
						typeInfoName = n + mapping;
					}
					else
					{
						typeInfoName = mapping;
					}
					if (!this.typeInfos[typeInfoName]) {
						throw new Error('Type info [' + typeInfoName + '] is not known in this context.');
					} else {
						return this.typeInfos[typeInfoName];
					}
				} else {
					Jsonix.Util.Ensure.ensureObject(module, 'Type info mapping can only be resolved if module is provided.');
					var typeInfo = module.createTypeInfo(mapping);
					typeInfo.build(this, module);
					return typeInfo;
				}
			},
			registerElementInfo : function(elementInfo, module) {
				Jsonix.Util.Ensure.ensureObject(elementInfo);
				this.elementInfos.push(elementInfo);

				if (Jsonix.Util.Type.exists(elementInfo.substitutionHead)) {
					var substitutionHead = elementInfo.substitutionHead;
					var substitutionHeadKey = substitutionHead.key;
					var substitutionMembers = this.substitutionMembersMap[substitutionHeadKey];

					if (!Jsonix.Util.Type.isArray(substitutionMembers)) {
						substitutionMembers = [];
						this.substitutionMembersMap[substitutionHeadKey] = substitutionMembers;
					}
					substitutionMembers.push(elementInfo);
				}

				var scopeKey;
				if (Jsonix.Util.Type.exists(elementInfo.scope)) {
					scopeKey = this.resolveTypeInfo(elementInfo.scope, module).name;
				} else {
					scopeKey = '##global';
				}

				var scopedElementInfos = this.scopedElementInfosMap[scopeKey];

				if (!Jsonix.Util.Type.isObject(scopedElementInfos)) {
					scopedElementInfos = {};
					this.scopedElementInfosMap[scopeKey] = scopedElementInfos;
				}
				scopedElementInfos[elementInfo.elementName.key] = elementInfo;

			},
			getTypeInfoByValue : function(value)
			{
				if (!Jsonix.Util.Type.exists(value))
				{
					return undefined;
				}
				if (Jsonix.Util.Type.isObject(value))
				{
					var typeName = value.TYPE_NAME;
					if (Jsonix.Util.Type.isString(typeName))
					{
						var typeInfoByName = this.getTypeInfoByName(typeName);
						if (typeInfoByName)
						{
							return typeInfoByName;
						}
					}
				}
				return undefined;
			},
			// TODO public API
			getTypeInfoByName : function(name) {
				return this.typeInfos[name];
			},
			getTypeInfoByTypeName : function(typeName) {
				var tn = Jsonix.XML.QName.fromObjectOrString(typeName, this);
				return this.typeNameKeyToTypeInfo[tn.key];
			},
			getTypeInfoByTypeNameKey : function(typeNameKey) {
				return this.typeNameKeyToTypeInfo[typeNameKey];
			},
			getElementInfo : function(name, scope) {
				if (Jsonix.Util.Type.exists(scope)) {
					var scopeKey = scope.name;
					var scopedElementInfos = this.scopedElementInfosMap[scopeKey];
					if (Jsonix.Util.Type.exists(scopedElementInfos)) {
						var scopedElementInfo = scopedElementInfos[name.key];
						if (Jsonix.Util.Type.exists(scopedElementInfo)) {
							return scopedElementInfo;
						}
					}
				}

				var globalScopeKey = '##global';
				var globalScopedElementInfos = this.scopedElementInfosMap[globalScopeKey];
				if (Jsonix.Util.Type.exists(globalScopedElementInfos)) {
					var globalScopedElementInfo = globalScopedElementInfos[name.key];
					if (Jsonix.Util.Type.exists(globalScopedElementInfo)) {
						return globalScopedElementInfo;
					}
				}
				return null;
				//
				// throw new Error("Element [" + name.key
				// + "] could not be found in the given context.");
			},
			getSubstitutionMembers : function(name) {
				return this.substitutionMembersMap[Jsonix.XML.QName
						.fromObject(name).key];
			},
			createMarshaller : function() {
				return new this.mappingStyle.marshaller(this);
			},
			createUnmarshaller : function() {
				return new this.mappingStyle.unmarshaller(this);
			},
			getNamespaceURI : function(prefix) {
				Jsonix.Util.Ensure.ensureString(prefix);
				return this.prefixNamespaces[prefix];
			},
			getPrefix : function(namespaceURI, defaultPrefix) {
				Jsonix.Util.Ensure.ensureString(namespaceURI);
				var prefix = this.namespacePrefixes[namespaceURI];
				if (Jsonix.Util.Type.isString(prefix))
				{
					return prefix;
				}
				else
				{
					return defaultPrefix;
				}
			},
			/**
			 * Builtin type infos.
			 */
			builtinTypeInfos : [
			        Jsonix.Schema.XSD.AnyType.INSTANCE,
			        Jsonix.Schema.XSD.AnySimpleType.INSTANCE,
					Jsonix.Schema.XSD.AnyURI.INSTANCE,
					Jsonix.Schema.XSD.Base64Binary.INSTANCE,
					Jsonix.Schema.XSD.Boolean.INSTANCE,
					Jsonix.Schema.XSD.Byte.INSTANCE,
					Jsonix.Schema.XSD.Calendar.INSTANCE,
					Jsonix.Schema.XSD.DateAsDate.INSTANCE,
					Jsonix.Schema.XSD.Date.INSTANCE,
					Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE,
					Jsonix.Schema.XSD.DateTime.INSTANCE,
					Jsonix.Schema.XSD.Decimal.INSTANCE,
					Jsonix.Schema.XSD.Double.INSTANCE,
					Jsonix.Schema.XSD.Duration.INSTANCE,
					Jsonix.Schema.XSD.Float.INSTANCE,
					Jsonix.Schema.XSD.GDay.INSTANCE,
					Jsonix.Schema.XSD.GMonth.INSTANCE,
					Jsonix.Schema.XSD.GMonthDay.INSTANCE,
					Jsonix.Schema.XSD.GYear.INSTANCE,
					Jsonix.Schema.XSD.GYearMonth.INSTANCE,
					Jsonix.Schema.XSD.HexBinary.INSTANCE,
					Jsonix.Schema.XSD.ID.INSTANCE,
					Jsonix.Schema.XSD.IDREF.INSTANCE,
					Jsonix.Schema.XSD.IDREFS.INSTANCE,
					Jsonix.Schema.XSD.Int.INSTANCE,
					Jsonix.Schema.XSD.Integer.INSTANCE,
					Jsonix.Schema.XSD.Language.INSTANCE,
					Jsonix.Schema.XSD.Long.INSTANCE,
					Jsonix.Schema.XSD.Name.INSTANCE,
					Jsonix.Schema.XSD.NCName.INSTANCE,
					Jsonix.Schema.XSD.NegativeInteger.INSTANCE,
					Jsonix.Schema.XSD.NMToken.INSTANCE,
					Jsonix.Schema.XSD.NMTokens.INSTANCE,
					Jsonix.Schema.XSD.NonNegativeInteger.INSTANCE,
					Jsonix.Schema.XSD.NonPositiveInteger.INSTANCE,
					Jsonix.Schema.XSD.NormalizedString.INSTANCE,
					Jsonix.Schema.XSD.Number.INSTANCE,
					Jsonix.Schema.XSD.PositiveInteger.INSTANCE,
					Jsonix.Schema.XSD.QName.INSTANCE,
					Jsonix.Schema.XSD.Short.INSTANCE,
					Jsonix.Schema.XSD.String.INSTANCE,
					Jsonix.Schema.XSD.Strings.INSTANCE,
					Jsonix.Schema.XSD.TimeAsDate.INSTANCE,
					Jsonix.Schema.XSD.Time.INSTANCE,
					Jsonix.Schema.XSD.Token.INSTANCE,
					Jsonix.Schema.XSD.UnsignedByte.INSTANCE,
					Jsonix.Schema.XSD.UnsignedInt.INSTANCE,
					Jsonix.Schema.XSD.UnsignedLong.INSTANCE,
					Jsonix.Schema.XSD.UnsignedShort.INSTANCE ],
			CLASS_NAME : 'Jsonix.Context'
		});
	// Complete Jsonix script is included above
	return { Jsonix: Jsonix };
};

// If the require function exists ...
if (true) {
	// ... but the define function does not exists
	if (false) {
		// Load the define function via amdefine
		var define = require('amdefine')(module);
		// If we're not in browser
		if (typeof window === 'undefined')
		{
			// Require xmldom, xmlhttprequest and fs
			define(["xmldom", "xmlhttprequest", "fs"], _jsonix_factory);
		}
		else
		{
			// We're probably in browser, maybe browserify
			// Do not require xmldom, xmlhttprequest as they'r provided by the browser
			// Do not require fs since file system is not available anyway
			define([], _jsonix_factory);
		}
	}
	else {
		// Otherwise assume we're in the browser/RequireJS environment
		// Load the module without xmldom and xmlhttprequests dependencies
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (_jsonix_factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
}
// If the require function does not exists, we're not in Node.js and therefore in browser environment
else
{
	// Just call the factory and set Jsonix as global.
	var Jsonix = _jsonix_factory().Jsonix;
}


/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var XLink_1_0_Module_Factory = function () {
  var XLink_1_0 = {
    n: 'XLink_1_0',
    dens: 'http:\/\/www.w3.org\/1999\/xlink',
    dans: 'http:\/\/www.w3.org\/1999\/xlink',
    tis: [{
        ln: 'ResourceType',
        tn: 'resourceType',
        ps: [{
            n: 'content',
            col: true,
            t: 'ae'
          }, {
            n: 'type',
            rq: true,
            ti: 'Token',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'label',
            ti: 'NCName',
            t: 'a'
          }]
      }, {
        ln: 'LocatorType',
        tn: 'locatorType',
        ps: [{
            n: 'locatorTitle',
            mno: 0,
            col: true,
            en: 'title',
            ti: '.TitleEltType'
          }, {
            n: 'type',
            rq: true,
            ti: 'Token',
            t: 'a'
          }, {
            n: 'href',
            rq: true,
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'label',
            ti: 'NCName',
            t: 'a'
          }]
      }, {
        ln: 'Extended',
        tn: 'extended',
        ps: [{
            n: 'extendedModel',
            mno: 0,
            col: true,
            etis: [{
                en: 'title',
                ti: '.TitleEltType'
              }, {
                en: 'resource',
                ti: '.ResourceType'
              }, {
                en: 'locator',
                ti: '.LocatorType'
              }, {
                en: 'arc',
                ti: '.ArcType'
              }],
            t: 'es'
          }, {
            n: 'type',
            rq: true,
            ti: 'Token',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }]
      }, {
        ln: 'Simple',
        tn: 'simple',
        ps: [{
            n: 'content',
            col: true,
            t: 'ae'
          }, {
            n: 'type',
            ti: 'Token',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'Token',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'Token',
            t: 'a'
          }]
      }, {
        ln: 'TitleEltType',
        tn: 'titleEltType',
        ps: [{
            n: 'content',
            col: true,
            t: 'ae'
          }, {
            n: 'type',
            rq: true,
            ti: 'Token',
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'ArcType',
        tn: 'arcType',
        ps: [{
            n: 'locatorTitle',
            mno: 0,
            col: true,
            en: 'title',
            ti: '.TitleEltType'
          }, {
            n: 'type',
            rq: true,
            ti: 'Token',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'Token',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'Token',
            t: 'a'
          }, {
            n: 'from',
            ti: 'NCName',
            t: 'a'
          }, {
            n: 'to',
            ti: 'NCName',
            t: 'a'
          }]
      }, {
        t: 'enum',
        ln: 'TypeType',
        bti: 'Token',
        vs: ['simple', 'extended', 'title', 'resource', 'locator', 'arc']
      }, {
        t: 'enum',
        ln: 'ShowType',
        bti: 'Token',
        vs: ['new', 'replace', 'embed', 'other', 'none']
      }, {
        t: 'enum',
        ln: 'ActuateType',
        bti: 'Token',
        vs: ['onLoad', 'onRequest', 'other', 'none']
      }],
    eis: [{
        en: 'arc',
        ti: '.ArcType'
      }, {
        en: 'resource',
        ti: '.ResourceType'
      }, {
        en: 'locator',
        ti: '.LocatorType'
      }, {
        en: 'title',
        ti: '.TitleEltType'
      }]
  };
  return {
    XLink_1_0: XLink_1_0
  };
};
if (true) {
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (XLink_1_0_Module_Factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
else {
  var XLink_1_0_Module = XLink_1_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.XLink_1_0 = XLink_1_0_Module.XLink_1_0;
  }
  else {
    var XLink_1_0 = XLink_1_0_Module.XLink_1_0;
  }
}

/***/ })

},[614]);