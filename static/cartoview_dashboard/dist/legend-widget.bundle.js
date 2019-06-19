webpackJsonp([6],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _events = __webpack_require__(23);

exports.default = new _events.EventEmitter();

/***/ }),

/***/ 22:
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

/***/ 23:
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

/***/ 285:
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

var _util = __webpack_require__(22);

var _util2 = _interopRequireDefault(_util);

var _openlayers = __webpack_require__(11);

var _openlayers2 = _interopRequireDefault(_openlayers);

var _urlParse = __webpack_require__(39);

var _urlParse2 = _interopRequireDefault(_urlParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var format = new _openlayers2.default.format.EsriJSON();

var ArcGISRestService = function () {
  function ArcGISRestService() {
    _classCallCheck(this, ArcGISRestService);
  }

  _createClass(ArcGISRestService, [{
    key: 'createLayer',
    value: function createLayer(layer, url, titleObj, projection) {
      var units = projection.getUnits();
      return new _openlayers2.default.layer.Tile({
        title: titleObj.title,
        emptyTitle: titleObj.empty,
        id: layer.Name,
        maxResolution: layer.MinScale !== 0 ? _util2.default.getResolutionForScale(layer.MinScale, units) : undefined,
        minResolution: layer.MaxScale !== 0 ? _util2.default.getResolutionForScale(layer.MaxScale, units) : undefined,
        name: layer.Name,
        isRemovable: true,
        wfsInfo: layer.Queryable,
        popupInfo: layer.Queryable ? '#AllAttributes' : undefined,
        source: new _openlayers2.default.source.TileArcGISRest({
          urls: [url],
          params: {
            LAYERS: layer.Name
          }
        })
      });
    }
  }, {
    key: 'parseCapabilities',
    value: function parseCapabilities(jsonData) {
      var layers = [];
      // TODO parse layer hierarchy
      for (var i = 0, ii = jsonData.layers.length; i < ii; ++i) {
        var layer = {};
        var esriLayer = jsonData.layers[i];
        layer.MinScale = esriLayer.minScale;
        layer.MaxScale = esriLayer.maxScale;
        layer.Name = String(esriLayer.id);
        layer.Queryable = jsonData.capabilities && jsonData.capabilities.indexOf('Query') !== -1;
        layer.Title = esriLayer.name;
        layers.push(layer);
      }
      return {
        Layer: layers,
        Title: jsonData.serviceDescription
      };
    }
  }, {
    key: 'getCapabilitiesUrl',
    value: function getCapabilitiesUrl(url) {
      var urlObj = new _urlParse2.default(url);
      urlObj.set('query', {
        f: 'json',
        pretty: 'false',
        callback: '__cbname__'
      });
      return urlObj.toString();
    }
  }, {
    key: 'getCapabilities',
    value: function getCapabilities(url, onSuccess, onFailure, opt_proxy) {
      // because it's JSONP we don't need to take into account opt_proxy
      _util2.default.doJSONP(this.getCapabilitiesUrl(url), function (jsonData) {
        onSuccess.call(this, this.parseCapabilities(jsonData));
      }, onFailure, this);
    }
  }, {
    key: 'getLegendUrl',
    value: function getLegendUrl(url) {
      var urlObj = new _urlParse2.default(url + '/legend');
      urlObj.set('query', {
        f: 'json',
        pretty: 'false',
        callback: '__cbname__'
      });
      return urlObj.toString();
    }
  }, {
    key: 'getLegend',
    value: function getLegend(url, onSuccess) {
      _util2.default.doJSONP(this.getLegendUrl(url), function (jsonData) {
        onSuccess.call(this, jsonData);
      }, undefined, this);
    }
  }, {
    key: 'getFeatureInfoUrl',
    value: function getFeatureInfoUrl(layer, coordinate, map) {
      var view = map.getView();
      var urlObj = new _urlParse2.default(layer.getSource().getUrls()[0] + '/identify');
      urlObj.set('query', {
        geometryType: 'esriGeometryPoint',
        geometry: coordinate.join(','),
        sr: view.getProjection().getCode().split(':')[1],
        layers: layer.get('name'),
        tolerance: 2,
        mapExtent: view.calculateExtent(map.getSize()).join(','),
        imageDisplay: map.getSize().join(',') + ',90',
        f: 'json',
        callback: '__cbname__',
        pretty: 'false'
      });
      return urlObj.toString();
    }
  }, {
    key: 'parseGetFeatureInfo',
    value: function parseGetFeatureInfo(layer, jsonData) {
      var response = { layer: layer, features: [] };
      for (var i = 0, ii = jsonData.results.length; i < ii; ++i) {
        var feature = format.readFeature(jsonData.results[i]);
        if (feature) {
          response.features.push(feature);
        }
      }
      return response;
    }
  }, {
    key: 'getFeatureInfo',
    value: function getFeatureInfo(layer, coordinate, map, infoFormat, onSuccess, onFailure, opt_proxy) {
      var url = this.getFeatureInfoUrl(layer, coordinate, map);
      var me = this;
      _util2.default.doJSONP(url, function (jsonData) {
        onSuccess.call(me, me.parseGetFeatureInfo(layer, jsonData));
      });
    }
  }, {
    key: 'getLoadFeaturesUrl',
    value: function getLoadFeaturesUrl(layer, startIndex, pageSize, sortingInfo, srsName) {
      var urlObj = new _urlParse2.default(layer.getSource().getUrls()[0] + '/' + layer.get('name') + '/query');
      var params = {
        where: 'OBJECTID >= ' + startIndex + ' AND OBJECTID < ' + (startIndex + pageSize),
        f: 'json',
        callback: '__cbname__',
        pretty: 'false',
        outSR: srsName.split(':')[1]
      };
      if (sortingInfo.length === 1) {
        params.orderByFields = sortingInfo[0].id + ' ' + (sortingInfo[0].asc ? 'ASC' : 'DESC');
      }
      urlObj.set('query', params);
      return urlObj.toString();
    }
  }, {
    key: 'loadFeatures',
    value: function loadFeatures(layer, startIndex, pageSize, sortingInfo, srsName, success, failure) {
      _util2.default.doJSONP(this.getLoadFeaturesUrl(layer, startIndex, pageSize, sortingInfo, srsName), function (jsonData) {
        if (jsonData.error) {
          failure.call(this, { status: jsonData.error.code, statusText: jsonData.error.message }, jsonData.error.details.join(' '));
        } else {
          success.call(this, format.readFeatures(jsonData));
        }
      }, failure, this);
    }
  }, {
    key: 'getNumberOfFeaturesUrl',
    value: function getNumberOfFeaturesUrl(layer) {
      var urlObj = new _urlParse2.default(layer.getSource().getUrls()[0] + '/' + layer.get('name') + '/query');
      var params = {
        where: '1=1',
        f: 'json',
        callback: '__cbname__',
        pretty: 'false',
        returnCountOnly: true
      };
      urlObj.set('query', params);
      return urlObj.toString();
    }
  }, {
    key: 'getNumberOfFeatures',
    value: function getNumberOfFeatures(layer, callback) {
      if (layer.get('numberOfFeatures') === undefined) {
        _util2.default.doJSONP(this.getNumberOfFeaturesUrl(layer), function (jsonData) {
          callback.call(this, jsonData.count);
        }, undefined, this);
      }
    }
  }]);

  return ArcGISRestService;
}();

exports.default = new ArcGISRestService();

/***/ }),

/***/ 39:
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
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
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

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _ArcGISRestService = __webpack_require__(285);

var _ArcGISRestService2 = _interopRequireDefault(_ArcGISRestService);

var _Events = __webpack_require__(14);

var _Events2 = _interopRequireDefault(_Events);

var _FieldSet2 = __webpack_require__(10);

var _FieldSet3 = _interopRequireDefault(_FieldSet2);

var _openlayers = __webpack_require__(11);

var _openlayers2 = _interopRequireDefault(_openlayers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArcGISLegend = function (_Component) {
    _inherits(ArcGISLegend, _Component);

    function ArcGISLegend() {
        _classCallCheck(this, ArcGISLegend);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    ArcGISLegend.prototype.render = function render() {
        if (this.state && this.state.legendInfo) {
            var layers = this.state.legendInfo.layers;
            var style = { width: 'auto', height: 'auto' };
            return _react2.default.createElement(
                'div',
                null,
                layers.map(function (l) {
                    return l.legend.map(function (legend) {
                        return _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement('img', { style: style, src: 'data:' + legend.contentType + ';base64,' + legend.imageData }),
                            _react2.default.createElement(
                                'span',
                                null,
                                legend.label
                            )
                        );
                    });
                })
            );
        }
        return null;
    };

    ArcGISLegend.prototype.componentDidMount = function componentDidMount() {
        var _this2 = this;

        var layer = this.props.layer;
        var source = layer.getSource();
        var url = source.getUrls()[0];
        _ArcGISRestService2.default.getLegend(url, function (legendInfo) {
            _this2.setState({ legendInfo: legendInfo });
        });
    };

    return ArcGISLegend;
}(_react.Component);

var Legend = function (_Component2) {
    _inherits(Legend, _Component2);

    function Legend() {
        _classCallCheck(this, Legend);

        return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
    }

    Legend.prototype.render = function render() {
        var map = this.props.map;

        var legends = this.getLegends(map.getLayers().getArray());
        return _react2.default.createElement(
            'div',
            null,
            legends
        );
    };

    Legend.prototype.getLegends = function getLegends(layers) {
        var _this4 = this;

        var legends = [];
        layers.forEach(function (layer) {
            if (layer instanceof _openlayers2.default.layer.Group) {
                legends = legends.concat(_this4.getLegends(layer.getLayers()));
            } else if (layer.getVisible() && _this4.hasLegend(layer)) {
                if (_this4.isWMS(layer)) {
                    var s = layer.getSource(),
                        p = s.getParams();
                    var url = s.getUrls()[0];
                    url = url.replace("ows", "wms");
                    url += url.indexOf("?") == -1 ? "?" : "&";
                    url += "layer=" + p.LAYERS;
                    url += "&request=GetLegendGraphic&format=image%2Fpng&transparent=true&legend_options=fontAntiAliasing:true;fontSize:14;&width=30&height=30";
                    url += "&style=" + (p.STYLES || '');
                    legends.push(_react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'h4',
                            null,
                            layer.get('title')
                        ),
                        _react2.default.createElement('img', { src: url })
                    ));
                } else if (layer.getSource() instanceof _openlayers2.default.source.TileArcGISRest) {
                    legends.push(_react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'h4',
                            null,
                            layer.get('title')
                        ),
                        ' ',
                        _react2.default.createElement(ArcGISLegend, { layer: layer })
                    ));
                }
            }
        });
        return legends;
    };

    Legend.prototype.hasLegend = function hasLegend(layer) {
        return layer instanceof _openlayers2.default.layer.Tile && layer.getSource() instanceof _openlayers2.default.source.TileWMS || layer instanceof _openlayers2.default.layer.Image && layer.getSource() instanceof _openlayers2.default.source.ImageWMS || layer instanceof _openlayers2.default.layer.Tile && layer.getSource() instanceof _openlayers2.default.source.TileArcGISRest;
    };

    Legend.prototype.isWMS = function isWMS(layer) {
        return layer.getSource() instanceof _openlayers2.default.source.TileWMS || layer.getSource() instanceof _openlayers2.default.source.ImageWMS;
    };

    return Legend;
}(_react.Component);

var LegendWidget = function (_BaseWidget) {
    _inherits(LegendWidget, _BaseWidget);

    function LegendWidget() {
        _classCallCheck(this, LegendWidget);

        return _possibleConstructorReturn(this, _BaseWidget.apply(this, arguments));
    }

    LegendWidget.prototype.render = function render() {
        var style = {
            padding: "10px 20px"
        };
        return _react2.default.createElement(
            'div',
            { style: style },
            this.state && this.state.ready ? _react2.default.createElement(Legend, { map: this.state.map }) : _react2.default.createElement(
                'span',
                null,
                'The map for this Legend widget must be configured.  Click ',
                _react2.default.createElement('i', {
                    className: 'glyphicon glyphicon-cog', style: { color: '#337ab7' } }),
                ' icon and select a map within this dashboard.'
            )
        );
    };

    LegendWidget.prototype.setConfig = function setConfig(config) {
        _BaseWidget.prototype.setConfig.call(this, config);
        this.attachToMapWidget(config.mapWidget);
    };

    LegendWidget.prototype.componentDidMount = function componentDidMount() {
        if (this.state.config.mapWidget) this.attachToMapWidget(this.state.config.mapWidget);
        _BaseWidget.prototype.componentDidMount.call(this);
    };

    LegendWidget.prototype.attachToMapWidget = function attachToMapWidget(mapWidgetId) {
        var _this6 = this;

        var mapWidget = this.context.configManager.getWidget(mapWidgetId);
        if (mapWidget && mapWidget.ready) {
            this.setState({ ready: true, map: mapWidget.map });
        } else {
            _Events2.default.on('mapReady' + '_' + mapWidgetId, function (map) {
                _this6.setState({ ready: true, map: map });
            });
        }
    };

    return LegendWidget;
}(BaseWidget);

LegendWidget.displayName = "Legend";

var ConfigForm = function (_FieldSet) {
    _inherits(ConfigForm, _FieldSet);

    function ConfigForm(props) {
        _classCallCheck(this, ConfigForm);

        var _this7 = _possibleConstructorReturn(this, _FieldSet.call(this, props));

        _this7.state.maps = [];
        return _this7;
    }

    ConfigForm.prototype.getSchema = function getSchema(props) {
        return {
            mapWidget: {
                type: 'select',
                lable: 'Map',
                options: {},
                props: {}
            }
        };
    };

    ConfigForm.prototype.getInitialData = function getInitialData(props) {
        return props.widget.getConfig();
    };

    ConfigForm.prototype.getSelectOptions = function getSelectOptions(name, config, value) {
        var mapWidgets = this.props.widget.context.configManager.getMapWidgets();
        return Object.keys(mapWidgets).filter(function (widgetId) {
            return dash.props.widgets[widgetId].type.name == "MapWidget";
        }).map(function (widgetId) {
            return _react2.default.createElement(
                'option',
                { value: widgetId },
                mapWidgets[widgetId].title,
                ' - ',
                widgetId
            );
        });
    };

    // componentWillMount() {
    //     getMapsData().then(res => this.setState({maps: res.objects}));
    // }


    return ConfigForm;
}(_FieldSet3.default);

LegendWidget.ConfigForm = ConfigForm;
Dashboard.registerWidget(LegendWidget);
exports.default = LegendWidget;

/***/ })

},[602]);