'use strict';

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

var _openlayers = require('openlayers');

var _openlayers2 = _interopRequireDefault(_openlayers);

var _util = require('../util');

var _util2 = _interopRequireDefault(_util);

var _LayerIdService = require('./LayerIdService');

var _LayerIdService2 = _interopRequireDefault(_LayerIdService);

var _WFSService = require('./WFSService');

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