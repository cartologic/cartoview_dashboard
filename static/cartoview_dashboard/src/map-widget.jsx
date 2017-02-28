import React from 'react';
import ReactDOM from 'react-dom';
// import {addLocaleData, IntlProvider} from 'react-intl';


let enMessages = {};
class MapWidget extends BaseWidget {
    constructor(props) {
        super(props);
        this.map = new ol.Map({
            controls: [new ol.control.Attribution({collapsible: false}), new ol.control.ScaleLine()],
            layers: [
                new ol.layer.Tile({title: 'OpenStreetMap', source: new ol.source.OSM()})
            ],
            view: new ol.View({center: [0, 0], zoom: 3})
        });
    }
    getChildContext() {
        return {
            muiTheme: getMuiTheme()
        };
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
                    MapConfigService.load(MapConfigTransformService.transform(config), this.map);
                }
            });

        }
    }
    componentWillMount() {
      this.update(this.state.config);
    }
    render() {
        return (
            <IntlProvider locale='en' messages={enMessages}>
                <div className='map-ct'>
                    <MapPanel className='map row' map={this.map}/>
                    <div><LayerList allowReordering={true} includeLegend={true} allowRemove={false} tooltipPosition='left' allowStyling={false} map={this.map} /></div>
                    <div className='zoom-buttons'><Zoom tooltipPosition='right' map={this.map} /></div>
                    <div id='popup' className='ol-popup'><InfoPopup toggleGroup='navigation' toolId='nav' infoFormat='application/vnd.ogc.gml' map={this.map} /></div>

                 </div>
            </IntlProvider>
        );
    }
}
MapWidget.displayName = "Map"
MapWidget.childContextTypes = {
  muiTheme: React.PropTypes.object,
  mapId: React.PropTypes.string,
};

Dashboard.registerWidget(MapWidget);
export default MapWidget;