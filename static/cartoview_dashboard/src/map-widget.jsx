import "ol-layerswitcher/src/ol-layerswitcher.css"

import BasicViewerHelper from 'cartoview-sdk/helpers/BasicViewerHelper'
import Events from './events/Events.jsx'
import FieldSet from './components/FieldSet.jsx'
import ImageWMS from 'ol/source/ImageWMS'
import LayerSwitcher from 'ol-layerswitcher/src/ol-layerswitcher';
import LayersHelper from 'cartoview-sdk/helpers/LayersHelper'
import Overlay from 'ol/Overlay'
import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'
import TileWMS from 'ol/source/TileWMS'
import WMSService from 'cartoview-sdk/services/WMSService'
import classNames from 'classnames'

class MapWidget extends BaseWidget {
    static displayName = "Map";
    constructor(props) {
        super(props)
        this.loaded = false
        this.state = {
            features: [],
            activeFeature: 0,
            mouseCoordinates: [0, 0],
            showPopup: false
        }
        this.map = BasicViewerHelper.getMap()
        let layerSwitcher = new LayerSwitcher()
        layerSwitcher.setMap(this.map)
        this.map.on('moveend', () => {
            var extent = this.map.getView().calculateExtent(this.map.getSize())
            var eventName = 'mapExtentChanged' + '_' + this.props.id
            Events.emit(eventName, this.map, extent, this)
        })
        this.overlay = new Overlay({
            autoPan: true,
            autoPanAnimation: {
                duration: 250
            },
            positioning: 'center-center'
        })
        this.map.addOverlay(this.overlay)

    }
    isWMS(layer) {
        return layer.getSource() instanceof TileWMS || layer.getSource() instanceof ImageWMS
    }
    identify = () => {
        let that = this
        that.map.on('singleclick', (e) => {
            LayersHelper.getLayers(that.map.getLayers().getArray()).forEach(
                (layer) => {
                    that.setState({
                        features: [],
                        activeFeature: 0,
                        mouseCoordinates: e.coordinate,
                        showPopup: false
                    })
                    WMSService.getFeatureInfo(layer, e.coordinate,
                        that.map, 'application/json', (result) => {
                            result.features.forEach(f => f.set("_layerTitle", result.layer.get('title')))
                            that.setState({ features: [...that.state.features, ...result.features], mouseCoordinates: e.coordinate, showPopup: true })
                        })
                })
        })
    }
    addOverlay = (node) => {
        const { mouseCoordinates } = this.state
        let position = mouseCoordinates
        this.overlay.setElement(node)
        this.overlay.setPosition(position)
    }
    update = (config) => {
        if (config && config.mapId) {
            var url = getMapConfigUrl(config.mapId)
            BasicViewerHelper.mapInit(url, this.map, URLS.proxy, URLS.token, ()=>{
                this.ready = true
                Events.emit('mapReady' + '_' + this.props.id, this.map, this)
                this.identify()
            })
        }
    }
    changeShowPopup = () => {
        const { showPopup } = this.state
        this.setState({ showPopup: !showPopup })
    }
    nextFeature = () => {
        const { activeFeature } = this.state
        const nextIndex = activeFeature + 1
        this.setState({ activeFeature: nextIndex })
    }
    previousFeature = () => {
        const { activeFeature } = this.state
        const previuosIndex = activeFeature - 1
        this.setState({ activeFeature: previuosIndex })
    }
    resetFeatureCollection = () => {
        this.setState({ features: [], activeFeature: 0, showPopup: false }, () => {
            this.overlay.setElement(undefined)
        })
    }
    componentWillMount() {
        this.update(this.props.config)
    }
    componentDidMount(){
        this.map.setTarget(ReactDOM.findDOMNode(this.mapDiv))
    }
    getPopupProps = () => {
        const { showPopup, activeFeature, features } = this.state
        return {
            showPopup,
            activeFeature,
            features,
            resetFeatureCollection: this.resetFeatureCollection,
            nextFeature: this.nextFeature,
            previousFeature: this.previousFeature,
            map: this.map,
            addOverlay: this.addOverlay,
            changeShowPopup: this.changeShowPopup
        }
    }
    parseStrBool=(boolStr)=>{
        return JSON.parse(boolStr)
    }
    render() {
        const {config}=this.props
        return (<div ref={(node)=>this.mapDiv=node} className='map-ct'>
            {config && config.IdentifyPopup && this.parseStrBool(config.IdentifyPopup) &&<Popup {...this.getPopupProps()} /> }
        </div>)
    }
}

class MapWidgetConfigForm extends FieldSet {
    constructor(props) {
        super(props)
        this.state.maps = []
    }
    getSchema(props) {
        return {
            mapId: {
                type: 'select',
                options: {}
            },
            IdentifyPopup: {
                type: 'select',
                options: [
                {lable:"Yes",value:true},
                {lable:"No",value:false}],
                props:{
                    required:"required",
                    defaultValue:false
                }
            }
        }
    }
    getInitialData(props) {
        return props.widget.getConfig()
    }
    getOptionExtraProps=(option)=>{
        let extProps={

        }
        return extProps
    }
    getSelectOptions(name, config, value) {
        if(name==="mapId"){
            return this.state.maps.map(m => <option value={m.id}>{m.title}</option>)
        }
        return config.options.map((m,index) => <option key={index} {...this.getOptionExtraProps(m)} value={m.value}>{m.lable}</option>)
    }
    componentWillMount() {
        getMapsData().then(res => this.setState({ maps: res.objects }))
    }
}


MapWidget.ConfigForm = MapWidgetConfigForm


Dashboard.registerWidget(MapWidget)
export default MapWidget
class Popup extends React.Component {
    state = {
        currentFeature: null
    }
    resultItem(f) {
        var keys = f.getKeys()
        var geom = f.getGeometryName()
        return <div>
            <h4 className="identify-result-layer-title text-wrap">{f.get('_layerTitle')}</h4>
            <div className="feature-details-table">
                <table className="table" key={f.getId()}>
                    <tbody>
                        {
                            keys.map((key) => {
                                if (key == geom || key == "_layerTitle") return null
                                return <tr><th>{key}</th><td>{f.get(key)}</td></tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    }
    ensureEvents = () => {
        const {
            resetFeatureCollection,
            nextFeature,
            previousFeature,
            features
        } = this.props
        let self = this
        var closer = self.popupCloser
        if (closer.onclick === null) {
            closer.onclick = () => {
                resetFeatureCollection()
                return false
            }
        }
        if (features.length > 0) {
            var nextB = self.nextButton
            var prevB = self.prevButton
            if (nextB.onclick === null) {
                nextB.onclick = () => {
                    nextFeature()
                }
            }
            if (prevB.onclick === null) {
                prevB.onclick = () => {
                    previousFeature()
                }
            }
        }
    }
    componentWillReceiveProps(nextProps) {
        const { addOverlay } = this.props
        const { features, activeFeature } = nextProps
        if (nextProps.showPopup) {
            this.node.style.display = 'block'
            let currentFeature = features.length > 0 ?
                features[activeFeature] : null
            this.setState({ currentFeature }, () => addOverlay(this.node))
            this.ensureEvents()
        } else {
            this.node.style.display = 'none'
        }
    }
    render() {
        let {
            features,
            activeFeature,
            showPopup
        } = this.props
        const nextButtonVisible = (features.length > 0 &&
            activeFeature != features.length - 1)
        // const currentFeature = features[activeFeature]
        return (
            <div className={classNames({ "hidden-popup": !showPopup })} ref={node => this.node = node} id="popup">
                <div className="popup-content">
                    <div className="popup-nav">
                        <button className="btn btn-link btn-xs" ref={(node) => this.popupCloser = node}>
                            <i className="glyphicon glyphicon-remove"></i>
                        </button>
                    </div>
                    {features.length > 0 && <div>
                        <div className="popup-nav">
                            <button className="btn btn-link btn-xs" ref={(node) => this.prevButton = node} disabled={activeFeature == 0}>
                                <i className="glyphicon glyphicon-chevron-left"></i>
                            </button>
                            {activeFeature + 1} / {features.length}
                            <button className="btn btn-link btn-xs" disabled={activeFeature == features.length - 1} ref={(node) => this.prevButton = node}>
                                <i className="glyphicon glyphicon-chevron-right"></i>
                            </button>
                        </div>
                        {this.resultItem(features[activeFeature])}
                    </div>}
                    {features.length == 0 && <div className="popup-nav">
                        <b>{"No Features At this Point"}</b>
                    </div>}
                </div>
            </div>
        )
    }
}
Popup.propTypes = {
    resetFeatureCollection: PropTypes.func.isRequired,
    addOverlay: PropTypes.func.isRequired,
    changeShowPopup: PropTypes.func.isRequired,
    nextFeature: PropTypes.func.isRequired,
    previousFeature: PropTypes.func.isRequired,
    features: PropTypes.array.isRequired,
    showPopup: PropTypes.bool.isRequired,
    activeFeature: PropTypes.number.isRequired,
    map: PropTypes.object.isRequired,
}