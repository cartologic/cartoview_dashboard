import UrlAssembler from 'url-assembler'

class URLS {
    constructor(urls) {
        this.urls = urls
    }
    encodeURL = (url) => {
        return encodeURIComponent(url).replace(/%20/g, '+')
    }
    getParamterizedURL = (url, query) => {
        return UrlAssembler(url).query(query).toString()
    }
    getMapApiURL = (username, userMaps = false, limit, offset,query={}) => {
        let params = {
            'limit': limit,
            'offset': offset,
            ...query
        }
        if (userMaps) {
            params['owner__username'] = username
        }
        const url = UrlAssembler(this.urls.MapsAPI).query(params).toString()
        return url
    }
    getMapApiSearchURL = (username, userMaps = false,text) => {
        let params = {'title__contains':text}
        if (userMaps) {
            params['owner__username'] = username
        }
        const url = UrlAssembler(this.urls.MapsAPI).query(params).toString()
        return url
    }
    getProxiedURL = (url) => {
        const proxy = this.urls.proxy
        let proxiedURL = url
        if (proxy) {
            proxiedURL = this.urls.proxy + this.encodeURL(url)
        }
        return proxiedURL
    }
}
export default URLS
