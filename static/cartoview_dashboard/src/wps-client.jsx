import { default as URLHelper } from './helpers/URLS.jsx'
import { getCRSFToken } from './helpers/helpers.jsx'

const xmlTpls = {
    aggregate: require('./wps-xml/aggregate/aggregate.xml'),
    groupBy: require('./wps-xml/aggregate/group-by.xml'),
    filters: require('./wps-xml/aggregate/filters.xml')
}
class WpsClient {
    constructor(config) {
        this.config = config
        this.urls = new URLHelper(URLS)
        this.url = URLS.geoserver + "wps/"
    }
    aggregate=(params)=> {
        // TODO : revise the below workaround for implemented for exchange
        if(params['typeName'].indexOf(':') == -1)
            params['typeName'] = 'geonode:' + params['typeName']
        const proxiedURL = this.urls.getProxiedURL(this.url)
        return fetch(proxiedURL, {
            method: 'POST',
            credentials: 'include',
            body: this.getXml(xmlTpls.aggregate, params),
            headers:new Headers({
                'Content-Type': 'text/xml',
                "X-CSRFToken": getCRSFToken()
            }),
        }).then(response => response.json())
    }
    getXml(tpl, params) {
        let output = tpl
        Object.keys(params).map(key => {
            let val = xmlTpls[key] ? this.getXml(xmlTpls[key],
                params[key]) : params[key]
            output = output.replace("__" + key + "__", val)
        })
        output = output.replace(/_{2}\w+_{2}/g, "")
        return output.trim()
    }
}
global.WpsClient = WpsClient
