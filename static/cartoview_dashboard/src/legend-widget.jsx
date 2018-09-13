import React, {Component} from 'react';

import Events from './events/Events.jsx'
import FieldSet from './components/FieldSet.jsx'
import Group from 'ol/layer/Group'
import Image from 'ol/layer/Image'
import ImageWMS from 'ol/source/ImageWMS'
import Tile from 'ol/layer/Tile'
import TileWMS from 'ol/source/TileWMS'

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
            if (layer instanceof Group) {
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
                }
            }
        });
        return legends;
    }

    hasLegend(layer) {
        return (layer instanceof Tile && layer.getSource() instanceof ol
            .source.TileWMS) || (layer instanceof Image &&
            layer.getSource() instanceof ImageWMS) || (
            layer instanceof Tile && layer.getSource() instanceof ol
                .source.TileArcGISRest);
    }

    isWMS(layer) {
        return layer.getSource() instanceof TileWMS || layer.getSource() instanceof ImageWMS;
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
                    <span>The map for this Legend widget must be configured.  Click <i
                        className="glyphicon glyphicon-cog" style={{color:'#337ab7'}}></i> icon and select a map within this dashboard.</span>
            }
        </div>;
    }

    setConfig(config) {
        super.setConfig(config);
        this.attachToMapWidget(config.mapWidget)
    }

    componentDidMount() {
        if (this.state.config.mapWidget)
            this.attachToMapWidget(this.state.config.mapWidget);
        super.componentDidMount()
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
        this.state.maps = []
    }

    getSchema(props) {
        return {
            mapWidget: {
                type: 'select',
                lable: 'Map',
                options: {},
                props: {}
            }
        }
    }

    getInitialData(props) {
        return props.widget.getConfig()
    }

    getSelectOptions(name, config, value) {
        var mapWidgets = this.props.widget.context.configManager.getMapWidgets();
        return Object.keys(mapWidgets).filter(widgetId => dash.props.widgets[widgetId].type.name == "MapWidget").map(widgetId =>
            <option value={widgetId}>{mapWidgets[widgetId].title} - {widgetId}</option>);
    }

    // componentWillMount() {
    //     getMapsData().then(res => this.setState({maps: res.objects}));
    // }
}

LegendWidget.ConfigForm = ConfigForm;
Dashboard.registerWidget(LegendWidget);
export default LegendWidget;
