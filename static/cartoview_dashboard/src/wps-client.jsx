
const xmlTpls = {
    aggregate: require( './wps-xml/aggregate/aggregate.xml'),
    groupBy: require( './wps-xml/aggregate/group-by.xml')
}
class WpsClient {
    constructor(config) {
        this.config = config;
        this.url = config.geoserverUrl + "/wps/"
    }
    aggregate(params){
        return fetch(this.url, {
          method: 'POST',
          body: this.getXml(xmlTpls.aggregate, params),
          headers: new Headers({
            'Content-Type': 'text/xml',
          }),
        }).then(response => response.json());
    }
    getXml(tpl, params){
        let output = tpl;
        Object.keys(params).map(key => {
            let val = xmlTpls[key] ? this.getXml(xmlTpls[key], params[key]) : params[key]
            output = output.replace("__" + key + "__", val);
        });
        //remove template vars that has no value
        output = output.replace(/_{2}\w+_{2}/g, "");
        return output.trim();
    }
}

global.WpsClient = WpsClient;