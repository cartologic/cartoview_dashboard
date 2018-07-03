import React from 'react';
import FieldSet from './components/FieldSet.jsx';
import Events from './events/Events.jsx';

class AggregateWidget extends BaseWidget {
    static displayName = "Aggregate Widget";

    constructor(props) {
        super(props);
        this.wpsClient = new WpsClient({
            geoserverUrl: "/geoserver"
        });
        this.state.aggregateResult = "NaN";
        this.configFieldSetClass = ConfigFieldSet;
    }

    setConfig(config) {
        super.setConfig(config);
        this.attachToMapWidget(config)
    }

    componentDidMount() {
        if (this.state.config.mapWidget) {
            this.attachToMapWidget(this.state.config)
        }
        this.update(this.state.config,);
    }

    attachToMapWidget(config) {
        var mapWidget = this.context.configManager.getWidget(config.mapWidget);
        if (mapWidget && mapWidget.ready)
        // update widget once attached to a map, otherwise it will wait to next map change.
            this.update(config, mapWidget.map.getView().calculateExtent())
        var eventName = 'mapExtentChanged' + '_' + config.mapWidget;
        Events.on(eventName, (map, extent) => {
            this.update(this.state.config, extent);
        });
    }

    update(config, extent) {
        if (config.typeName) {
            config = Object.assign({}, config)
            if (extent) {
                config.filters = {
                    minx: extent[0],
                    miny: extent[1],
                    maxx: extent[2],
                    maxy: extent[3],
                }
            }
            this.wpsClient.aggregate(config).then((data) => {
                this.setData(data);
            });
        }
    }

    setData(data) {
        this.setState({
            aggregateResult: data.AggregationResults[0][0]
        });
    }

    render() {
        return (
            <div className="aggregate-widget">
                <h1 className="text-center">{this.state.aggregateResult}</h1>
            </div>
        );
    }
}

class ConfigFieldSet extends FieldSet {
    constructor(props) {
        super(props);
        console.log(props);
        this.state.layers = [];
        this.state.attributes = [];
        this.state.map = null;
    }

    getInitialData(props) {
        return props.widget.getConfig();
    }

    getSchema() {
        return {
            mapWidget: {
                type: 'select',
                label: "Map",
                options: {},
                props: {
                    onChange: (e) => {
                        getMapLayersData(dash.props.widgets[this.fields.mapWidget.value].props.config.mapId).then(res => {
                            this.setState({data: this.getData()});
                            this.setState({layers: res.objects});
                        });
                    }
                }
            },
            typeName: {
                type: 'select',
                label: "Layer",
                options: {},
                props: {
                    onChange: (e) => {
                        e.target.fieldSet.updateAttributes();
                    }
                }
            },
            aggregationAttribute: {
                type: 'select',
                label: "Aggregation Attribute",
                options: {}
            },
            aggregationFunction: {
                type: 'select',
                label: "Aggregation Function",
                defaultValue: "Sum",
                options: {
                    "Sum": "Sum",
                    "Count": "Count",
                    "Average": "Average",
                    "Max": "Max",
                    "Min": "Min",
                    "Median": "Median"
                }
            }
        }
    }

    getSelectOptions(name, config, value) {
        if (name == "mapWidget") {
            var mapWidgets = this.props.widget.context.configManager.getMapWidgets();
            return Object.keys(mapWidgets).filter(widgetId => dash.props.widgets[widgetId].type.name == "MapWidget").map(widgetId =>
                <option value={widgetId}>{mapWidgets[widgetId].title}</option>);
        }
        else if (name == "typeName") {
            return this.state.layers.map(m => <option value={m.name}>{m.layer_params.title}</option>);
        }
        else if (name == "aggregationAttribute") {
            var isNumber = a => ['xsd:int', 'xsd:long', 'xsd:double'].indexOf(a.attribute_type) != -1;
            return this.state.attributes.filter(a => isNumber(a))
                .map(a => <option value={a.attribute}>{a.attribute_label || a.attribute}</option>);
        }
        return super.getSelectOptions(name, config, value);
    }

    updateAttributes(data) {
        //this.state.data.typeName = this.fields.typeName.value;
        this.setState({data: data || this.getData()});
        getAttributesData(this.fields.typeName.value).then(res => this.setState({attributes: res.objects}));
    }

    componentDidMount() {
        if (this.fields.mapWidget.value)
            getMapLayersData(dash.props.widgets[this.fields.mapWidget.value].props.config.mapId).then(res => {
                this.setLayers(res);
                // debugger;
                if (this.state.data.typeName) {
                    // console.log(this.state.data.typeName)
                    this.updateAttributes(this.state.data);
                }
            });
    }

    setLayers(res) {
        this.setState({layers: res.objects});
        //res.objects.map(l => this.layersHash[l.typename] = l);
    }

    // getData( ) {
    //   debugger;
    //   const data = super.getData( )
    //   data.groupBy = {
    //       attributes: data.groupBy
    //   };
    //   return data;
    // }

}

AggregateWidget.ConfigForm = ConfigFieldSet;
Dashboard.registerWidget(AggregateWidget);
export default AggregateWidget;
