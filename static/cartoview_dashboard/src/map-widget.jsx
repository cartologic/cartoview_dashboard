import Events from './events/Events.jsx';
import FieldSet from './components/FieldSet.jsx';
import MapConfigService from 'boundless-sdk/services/MapConfigService';
import MapConfigTransformService from 'boundless-sdk/services/MapConfigTransformService';
import React from 'react';
import ReactDOM from 'react-dom';
import ol from 'openlayers';

class MapWidget extends BaseWidget {
    constructor(props) {
        super(props);
        this.loaded = false;
        this.map = new ol.Map({
            //controls: [new ol.control.Attribution({collapsible: false}), new ol.control.ScaleLine()],
            layers: [
                new ol.layer.Tile({title: 'OpenStreetMap', source: new ol.source.OSM()})
            ],
            view: new ol.View({center: [0, 0], zoom: 3})
        });
        this.map.on('moveend', () => {
            var extent = this.map.getView().calculateExtent( this.map.getSize() );
            var eventName = 'mapExtentChanged' + '_' + this.props.id;
            Events.emit(eventName, this.map, extent, this);
        });

    }

    shouldComponentUpdate(nextProps, nextState){
      if(this.state.config != nextState.config ){
        this.update(nextState.config);
        return true;
      }
      return false;
    }
    update(config) {
        if (config && config.mapId) {
            var url = getMapConfigUrl(config.mapId);
            fetch(url,{
              method: "GET",
              credentials: 'include'
            }).then((response) => {
                if(response.status == 200) {
                    return response.json();
                }
            }).then((config) => {
                if(config) {
                    MapConfigService.load(MapConfigTransformService.transform(config), this.map,URLS.proxy);
                    this.ready = true;
                    Events.emit('mapReady' + '_' + this.props.id, this.map, this);
                }
            });

        }
    }
    componentWillMount() {
      this.update(this.state.config);
    }
    componentDidMount(){
      this.map.setTarget(ReactDOM.findDOMNode(this.refs.map));
    }
    render() {
        return (<div ref="map" className='map-ct'></div>);
    }
}

MapWidget.displayName = "Map"
class MapWidgetConfigForm extends FieldSet {
  constructor(props){
    super(props)
    this.state.maps = [];
  }
  getSchema(props){
    return {
      mapId: {
        type:'select',
        options: {}
      }
    };
  }
  getInitialData(props){
    return props.widget.getConfig();
  }
  getSelectOptions(name, config, value){
      return this.state.maps.map(m => <option value={m.id}>{m.title}</option>);
  }
  componentWillMount(){
    getMapsData().then(res => this.setState({maps:res.objects}) );
  }
}


MapWidget.ConfigForm = MapWidgetConfigForm;


Dashboard.registerWidget(MapWidget);
export default MapWidget;
