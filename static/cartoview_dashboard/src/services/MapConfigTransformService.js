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
        var sourceType = source.type;
        // create proper source type based on map json returned from geonode
        if (Object.keys(source).length == 0 && layer.type === "osm") {
            sourceType = "gxp_osmsource";
            source.ptype = sourceType;
        } else if (layer.provider && layer.provider === "OpenTopoMap") {
            layer.type = 'OpenLayers.Layer.XYZ';
            sourceType = "gxp_olsource";
            source.ptype = "gxp_olsource";
        } else if (Object.keys(source).length === 0 && layer.type === "empty") {
            sourceType = "gxp_olsource";
            source.ptype = "gxp_olsource";
        }
        if (!sourceType) {
            sourceType = data.defaultSourceType;
        }
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
        if (sourceType === 'gxp_olsource' && layer.type === 'OpenLayers.Layer.XYZ') {
          layerConfig.type = 'Tile';
          layerConfig.properties.title = layer.args && layer.args.length > 0 ? layer.args[0] : layerConfig.properties.title;
          layerConfig.properties.name = layerConfig.properties.title.split(' ').join('_');
          var xyzUrls;
          var urlConfig = layer.args && layer.args.lenght ? layer.args[1] : undefined;
          if (layer.provider && layer.provider === "OpenTopoMap") {
              urlConfig = ['https://a.tile.opentopomap.org/{z}/{x}/{y}.png',
                  'https://b.tile.opentopomap.org/{z}/{x}/{y}.png',
                  'https://c.tile.opentopomap.org/{z}/{x}/{y}.png'];
          }
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
          if (layer.args && layer.args.length === 3 && layer.args[2].attribution) {
            layerConfig.source.properties.attributions = [layer.args[2].attribution];
          }
        } else if (sourceType === 'gxp_osmsource') {
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
        } else if (sourceType === 'gxp_arcrestsource') {
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
        } else if (sourceType === 'gxp_wmscsource' && layer.name) {
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
          // if (layer.capability) {
          //   layerConfig.properties.extent = layer.capability.bbox[data.map.projection].bbox;
          // }
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
        } else if (sourceType === 'gxp_mapboxsource') {
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
        } else if (sourceType === 'gxp_bingsource') {
          layerConfig.type = 'Tile';
          layerConfig.source = {
            type: 'BingMaps',
            properties: {
              key: source.apiKey,
              imagerySet: layer.name
            }
          };
        } else if (sourceType === "gxp_olsource") {
          layerConfig.type = 'Tile';
          layerConfig.source = {
              type: 'XYZ',
              properties: {
                  crossOrigin: crossOrigin,
                  urls: ['']
              }
            }
        }
        else {
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