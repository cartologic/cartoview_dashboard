webpackJsonp([6],{

/***/ 286:
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><wps:Execute version=\"1.0.0\" service=\"WPS\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"http://www.opengis.net/wps/1.0.0\" xmlns:wfs=\"http://www.opengis.net/wfs\" xmlns:wps=\"http://www.opengis.net/wps/1.0.0\" xmlns:ows=\"http://www.opengis.net/ows/1.1\" xmlns:gml=\"http://www.opengis.net/gml\" xmlns:ogc=\"http://www.opengis.net/ogc\" xmlns:wcs=\"http://www.opengis.net/wcs/1.1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xsi:schemaLocation=\"http://www.opengis.net/wps/1.0.0 http://schemas.opengis.net/wps/1.0.0/wpsAll.xsd\">\n  <ows:Identifier>gs:Aggregate</ows:Identifier>\n  <wps:DataInputs>\n    <wps:Input>\n      <ows:Identifier>features</ows:Identifier>\n      <wps:Reference mimeType=\"text/xml\" xlink:href=\"http://geoserver/wfs\" method=\"POST\">\n        <wps:Body>\n          <wfs:GetFeature service=\"WFS\" version=\"1.0.0\" outputFormat=\"GML2\" xmlns:geonode=\"http://www.geonode.org/\">\n            <wfs:Query typeName=\"__typeName__\">\n            __filters__\n            </wfs:Query>\n          </wfs:GetFeature>\n        </wps:Body>\n      </wps:Reference>\n    </wps:Input>\n    <wps:Input>\n  <ows:Identifier>aggregationAttribute</ows:Identifier>\n    <wps:Data>\n      <wps:LiteralData>__aggregationAttribute__</wps:LiteralData>\n    </wps:Data>\n  </wps:Input>\n  <wps:Input>\n  <ows:Identifier>function</ows:Identifier>\n    <wps:Data>\n      <wps:LiteralData>__aggregationFunction__</wps:LiteralData>\n    </wps:Data>\n  </wps:Input>\n    __groupBy__\n  </wps:DataInputs>\n   <wps:ResponseForm>\n      <wps:RawDataOutput mimeType=\"application/json\">\n        <ows:Identifier>result</ows:Identifier>\n      </wps:RawDataOutput>\n    </wps:ResponseForm>\n</wps:Execute>\n"

/***/ }),

/***/ 287:
/***/ (function(module, exports) {

module.exports = "<ogc:Filter>\n\n  <ogc:BBOX>\n    <ogc:PropertyName>the_geom</ogc:PropertyName>\n    <gml:Envelope srsName=\"http://www.opengis.net/gml/srs/epsg.xml#3857\">\n      <gml:upperCorner>__minx__ __miny__</gml:upperCorner>\n      <gml:lowerCorner>__maxx__ __maxy__</gml:lowerCorner>\n    </gml:Envelope>\n  </ogc:BBOX>\n\n</ogc:Filter>\n"

/***/ }),

/***/ 288:
/***/ (function(module, exports) {

module.exports = "<wps:Input>\n  <ows:Identifier>groupByAttributes</ows:Identifier>\n  <wps:Data>\n    <wps:LiteralData>__attributes__</wps:LiteralData>\n  </wps:Data>\n</wps:Input>"

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var xmlTpls = {
    aggregate: __webpack_require__(286),
    groupBy: __webpack_require__(288),
    filters: __webpack_require__(287)
};

var WpsClient = function () {
    function WpsClient(config) {
        _classCallCheck(this, WpsClient);

        this.config = config;
        this.url = config.geoserverUrl + "/wps/";
    }

    WpsClient.prototype.aggregate = function aggregate(params) {
        return fetch(this.url, {
            method: 'POST',
            body: this.getXml(xmlTpls.aggregate, params),
            headers: new Headers({
                'Content-Type': 'text/xml'
            })
        }).then(function (response) {
            return response.json();
        });
    };

    WpsClient.prototype.getXml = function getXml(tpl, params) {
        var _this = this;

        var output = tpl;
        Object.keys(params).map(function (key) {
            var val = xmlTpls[key] ? _this.getXml(xmlTpls[key], params[key]) : params[key];
            output = output.replace("__" + key + "__", val);
        });
        //remove template vars that has no value
        output = output.replace(/_{2}\w+_{2}/g, "");
        return output.trim();
    };

    return WpsClient;
}();

global.WpsClient = WpsClient;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ })

},[597]);