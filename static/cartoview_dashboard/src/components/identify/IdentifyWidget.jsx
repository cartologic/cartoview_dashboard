import "./style.css"

import React from 'react';

import Events from '../../events/Events.jsx';
import FieldSet from '../FieldSet.jsx';
import React from 'react';
import WMSService from 'boundless-sdk/services/WMSService';
import ol from 'openlayers';

//application/json
class IdentifyWidget extends BaseWidget {
    static displayName = "Identify";
    constructor(props) {
        super(props)
        this.state = Object.assign(this.state, {
            ready: false,
            busy: false,
            features: [],
            showPopup: false,
            activeFeature: 0
        });
    }

    setConfig(config){
        super.setConfig(config);
        this.attachToMapWidget(config)
    }

    render( ) {
        var { ready, busy, features, activeFeature } = this.state;
        const prev = (e) => {
            if (activeFeature == 0) return;
            activeFeature--;
            this.setState({ activeFeature });
        };
        const next = (e) => {
            if (activeFeature == features.length - 1) return;
            activeFeature++;
            this.setState({ activeFeature });
        };
        return <div>

            {busy && <div className="loading"></div>}
            {!busy && (features.length == 0) && <div className="identify-no-results">No Results, Click the map to identify features.</div>}
            {
                !busy && (features.length > 0) &&
                <div>
                    <div className="pull-right identify-navigate">
                        <button className="btn btn-link btn-xs" onClick={e => prev(e)} disabled={activeFeature == 0}>
                            <i className="glyphicon glyphicon-chevron-left"></i>
                        </button>
                        {activeFeature + 1} / {features.length}
                        <button className="btn btn-link btn-xs" onClick={e => next(e)} disabled={activeFeature == features.length - 1}>
                            <i className="glyphicon glyphicon-chevron-right"></i>
                        </button>
                    </div>
                    {this.resultItem(features[activeFeature])}
                </div>
            }
        </div>;
    }

    componentDidMount() {
        if (this.state.config.mapWidget) {
            this.attachToMapWidget(this.state.config);
        }
        super.componentDidMount()
    }

    attachToMapWidget(config) {
        var mapWidget = this.context.configManager.getWidget(config.mapWidget);
        if (mapWidget && mapWidget.ready) {
            this.init(mapWidget.map);
        } else {
            Events.on('mapReady' + '_' + config.mapWidget, (map) => {
                this.init(map);
            });
        }
    }

    init( map ) {
        this.setState( { ready: true } )
        map.on( 'singleclick', ( e ) => {
            this.getLayers( map.getLayers( ).getArray( ) ).forEach(
                ( layer ) => {
                    this.setState( { busy: true, features: [ ],
                        activeFeature: 0 } )
                    WMSService.getFeatureInfo( layer, e.coordinate,
                        map, 'application/json', ( result ) => {
                            this.state.features = this.state.features.concat( result.features );
                            result.features.forEach( f => f.set( "_layerTitle", result.layer.get('title' ) ) )
                            this.setState( { features: this.state.features, busy: false } );
                        } );
                } )
        } );
    }
    isWMS(layer) {
        return layer.getSource() instanceof ol.source.TileWMS || layer.getSource() instanceof ol
            .source.ImageWMS;
    }
    getLayers(layers) {
        var children = [];
        layers.forEach((layer) => {
            if (layer instanceof ol.layer.Group) {
                children = children.concat(this.getLayers(layer.getLayers()));
            } else if (layer.getVisible() && this.isWMS(layer)) {
                children.push(layer);
            }
        });
        return children;
    }
}
class ConfigForm extends FieldSet {
    constructor(props) {
        super(props)
        this.state.maps = [];
    }

    getSchema(props) {
        return {
            mapWidget: {
                type: 'select',
                lable: 'Map',
                options: {},
                props: {}
            }
        };
    }

    getInitialData(props) {
        return props.widget.getConfig();
    }

    getSelectOptions(name, config, value) {
         var mapWidgets = this.props.widget.context.configManager.getMapWidgets();
         return Object.keys(mapWidgets).filter(widgetId => dash.props.widgets[widgetId].type.name == "MapWidget").
                map(widgetId => <option value={widgetId}>{mapWidgets[widgetId].title} - {widgetId}</option>);
    }

    // componentWillMount() {
    //     getMapsData().then(res => this.setState({maps: res.objects}));
    // }
}
IdentifyWidget.ConfigForm = ConfigForm;
Dashboard.registerWidget(IdentifyWidget);
export default IdentifyWidget;