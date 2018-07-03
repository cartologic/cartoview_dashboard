import React, {Component} from 'react';

import ArcGISRestService from 'boundless-sdk/services/ArcGISRestService';
import Events from './events/Events.jsx';
import ol from 'openlayers';
import FieldSet from './components/FieldSet.jsx';

class ArcGISLegend extends Component {
    render() {
        if (this.state && this.state.legendInfo) {
            var layers = this.state.legendInfo.layers;
            const style = {width: 'auto', height: 'auto'};
            return <div>
                {
                    layers.map(l => {
                        return l.legend.map(legend => <div>
                            <img style={style} src={'data:' + legend.contentType + ';base64,' + legend.imageData}/>
                            <span>{legend.label}</span>
                        </div>)
                    })
                }
            </div>
        }
        return null
    }

    componentDidMount() {
        var layer = this.props.layer;
        var source = layer.getSource();
        var url = source.getUrls()[0];
        ArcGISRestService.getLegend(url, (legendInfo) => {
            this.setState({legendInfo});
        });
    }
}

class Legend extends Component {
    render() {
        const {map} = this.props;
        const legends = this.getLegends(map.getLayers().getArray())
        return <div>
            {legends}
        </div>
    }

    getLegends(layers) {
        var legends = [];
        layers.forEach((layer) => {
            if (layer instanceof ol.layer.Group) {
                legends = legends.concat(this.getLegends(layer.getLayers()))
            } else if (layer.getVisible() && this.hasLegend(
                layer)) {
                if (this.isWMS(layer)) {
                    var s = layer.getSource(),
                        p = s.getParams();
                    var url = s.getUrls()[0];
                    url += (url.indexOf("?") == -1) ? "?" :
                        "&";
                    url += "layer=" + p.LAYERS;
                    url +=
                        "&request=GetLegendGraphic&format=image%2Fpng&transparent=true&legend_options=fontAntiAliasing:true;fontSize:14;&width=30&height=30"
                    url += "&style=" + (p.STYLES || '')
                    legends.push(
                        <div>
                            <h4>{layer.get('title')}</h4>
                            <img src={url}/>
                        </div>
                    );
                } else if (layer.getSource() instanceof ol.source
                    .TileArcGISRest) {
                    legends.push(
                        <div><h4>{layer.get('title')}</h4> <ArcGISLegend layer={layer}/></div>
                    );
                }
            }
        });
        return legends;
    }

    hasLegend(layer) {
        return (layer instanceof ol.layer.Tile && layer.getSource() instanceof ol
            .source.TileWMS) || (layer instanceof ol.layer.Image &&
            layer.getSource() instanceof ol.source.ImageWMS) || (
            layer instanceof ol.layer.Tile && layer.getSource() instanceof ol
                .source.TileArcGISRest);
    }

    isWMS(layer) {
        return layer.getSource() instanceof ol.source.TileWMS || layer.getSource() instanceof ol
            .source.ImageWMS;
    }
}

class LegendWidget extends BaseWidget {
    static displayName = "Legend";

    render() {
        const style = {
            padding: "10px 20px"
        }
        return <div style={style}>
            {
                this.state && this.state.ready ? <Legend map={this.state.map}/> :
                    <span>You have to add a map to this dashboard to show the legend.</span>
            }
        </div>;
    }

    setConfig(config) {
        super.setConfig(config);
        this.attachToMapWidget(config.mapWidget)
    }

    componentDidMount() {
        if (!this.state.config.mapWidget)
            return;
        this.attachToMapWidget(this.state.config.mapWidget);
    }

    attachToMapWidget(mapWidgetId) {
        var mapWidget = this.context.configManager.getWidget(mapWidgetId);
        if (mapWidget && mapWidget.ready) {
            this.setState({ready: true, map: mapWidget.map})
        } else {
            Events.on('mapReady' + '_' + mapWidgetId, (map) => {
                this.setState({ready: true, map})
            });
        }
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
        return Object.keys(mapWidgets).filter(widgetId => dash.props.widgets[widgetId].type.name == "MapWidget").map(widgetId =>
            <option value={widgetId}>{mapWidgets[widgetId].title}</option>);
    }

    // componentWillMount() {
    //     getMapsData().then(res => this.setState({maps: res.objects}));
    // }
}

LegendWidget.ConfigForm = ConfigForm;
Dashboard.registerWidget(LegendWidget);
export default LegendWidget;
