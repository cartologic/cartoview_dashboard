import { Bar, Doughnut, Line } from 'react-chartjs-2';
import React, { Component } from 'react';

import Events from './events/Events.jsx';
import FieldSet from './components/FieldSet.jsx';

class BaseChartWidget extends BaseWidget {
    constructor(props) {
        super(props);
        this.wpsClient = new WpsClient({
            geoserverUrl: "/geoserver"
        });
        this.configFieldSetClass = ConfigFieldSet;
    }

    getConfigFormOptions() {

        if (!this.state.config.aggregationAttribute) {
            configFormOptions.aggregationAttribute.options = {};
        }
        if (!this.state.config.groupBy) {
            configFormOptions.aggregationAttribute.options = {};
        }
        return configFormOptions;
    }

    setConfig(config) {
        super.setConfig(config);
        this.attachToMapWidget(config)
    }

    componentDidMount() {
        if (this.state.config.mapWidget) {
            this.attachToMapWidget(this.state.config)
        }
        this.update(this.state.config);
        super.componentDidMount()
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
                    geom: this.state.geoAttribute,
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
        var labels = data.AggregationResults.map((item) => item[0]);
        var values = data.AggregationResults.map((item) => item[1]);
        // data.AggregationResults.map((item) => {
        //   labels.push(item[0]);
        //   values.push(item[1]);
        // });
        this.state.data.labels = labels;
        this.state.data.datasets[0].label = this.state.config.aggregationAttribute;
        this.state.data.datasets[0].data = values;
        this.setState({
            data: this.state.data
        });
    }
}
const configFormOptions = {
    mapWidget: {
        type: 'select',
        label: "Map",
        options: {},
        props: {
            onChange: (e) => {
                // console.log(e.target.fieldSet)
                var event = e;
                event.persist()
                getMapLayersData(dash.props.widgets[e.target.fieldSet.fields.mapWidget.value].props.config.mapId).then(res => {
                    e.target.fieldSet.setState({ data: e.target.fieldSet.getData() });
                    e.target.fieldSet.setState({ layers: res.objects });
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
        options: {
            "Sum": "Sum",
            "Count": "Count",
            "Average": "Average",
            "Max": "Max",
            "Min": "Min",
            "Median": "Median"
        }
    },
    groupBy: {
        type: 'select',
        label: "Group By Attribute",
        getValue: (data) => {
            return data.groupBy ? data.groupBy.attributes :
                null
        },
        options: {}
    }
};

class ConfigFieldSet extends FieldSet {
    getSchema() {
        return configFormOptions;
    }
    getInitialData(props) {
        return props.widget.getConfig();
    }
    constructor(props) {
        super(props);
        this.state.layers = [];
        this.state.attributes = [];
    }
    getSelectOptions(name, config, value) {
        if (name == "mapWidget") {
            var mapWidgets = this.props.widget.context.configManager.getMapWidgets();
            return Object.keys(mapWidgets).filter(widgetId => dash.props.widgets[widgetId].type.name == "MapWidget").
                map((widgetId, index) => <option key={index} value={widgetId}>{mapWidgets[widgetId].title} - {widgetId}</option>);
        }
        else if (name == "typeName") {
            return this.state.layers.map(m => <option value={m.name}>{m.layer_params.title}</option>);
        } else if (name == "aggregationAttribute") {
            var isNumber = a => ['xsd:int', 'xsd:long', 'xsd:double'].indexOf(
                a.attribute_type) != -1;
            return this.state.attributes.filter(a => isNumber(a)).map(
                (a, index) =>
                    <option key={index} value={a.attribute}>{a.attribute_label || a.attribute}</option>
            );
        } else if (name == "groupBy") {
            var isString = a => ['xsd:string'].indexOf(a.attribute_type) !=
                -1;
            return this.state.attributes.filter(a => isString(a)).map(
                (a, index) =>
                    <option key={index} value={a.attribute}>{a.attribute_label || a.attribute}</option>
            );
        }
        return super.getSelectOptions(name, config, value);
    }
    updateAttributes(data) {
        this.setState({ data: data || this.getData() });

        getAttributesData(this.fields.typeName.value).then(res => {
            this.setState({ attributes: res.objects })
            // this.setState({ geoAttribute:res.objects.filter(a => a.attribute_type.indexOf('gml:') == 0)[0].attribute })
        });
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
        this.setState({ layers: res.objects });
        //res.objects.map(l => this.layersHash[l.typename] = l);
    }
    getData() {
        const data = super.getData()
        data.groupBy = {
            attributes: data.groupBy
        };
        return data;
    }
}
BaseChartWidget.ConfigForm = ConfigFieldSet;
class BarChartWidget extends BaseChartWidget {
    static displayName = "Bar Chart";
    constructor(props) {
        super(props);
        this.state.data = {
            labels: [],
            datasets: [{
                label: this.state.config.aggregationAttribute,
                //fillColor: '#0094D6',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [],
            }]
        };
    }
    render() {
        return <div className="bar-chart-ct">
            <Bar data={this.state.data} options={{ responsive: true, animationSteps: 100 }} height={500} width={800} />
        </div>;
    }
};
class LineChartWidget extends BaseChartWidget {
    static displayName = "Line Chart";
    constructor(props) {
        super(props);
        this.state.data = {
            labels: [],
            datasets: [{
                label: this.state.config.aggregationAttribute,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [],
            }],
        };
    }
    render() {
        return (
            <div className="line-chart-ct">
                <Line data={this.state.data} options={{ responsive: true, animationSteps: 100 }} height={500} width={800} />
            </div>
        );
    }
}
class DoughnutChartWidget extends BaseChartWidget {
    static displayName = "Doughnut Chart";
    constructor(props) {
        super(props);
        this.state.data = {
            labels: [],
            datasets: [{
                data: [],
            }]
        };
    }
    dynamicColor() {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        return "rgb(" + r + "," + g + "," + b + ")";
    }
    setData(data) {
        if (!this.state.data.datasets[0].backgroundColor) {
            var colors = data.AggregationResults.map((item) => this.dynamicColor());
            this.state.data.datasets[0].backgroundColor = colors;
        }
        super.setData(data);
    }
    // setData(data){
    //   var values = [];
    //   data.AggregationResults.map((item) => {
    //     values.push({
    //       label: item[0],
    //       value:item[1]
    //     });
    //   });
    //   this.state.data = values;
    //   this.setState({
    //     data: this.state.data
    //   });
    // }
    render() {
        return (
            <div className="doughnut-chart-ct">
                <Doughnut data={this.state.data} options={{ animationEasing: 'easeInSine', showTooltips: true }} height={300} width={400} />
            </div>
        );
    }
}
Dashboard.registerWidget(LineChartWidget);
Dashboard.registerWidget(DoughnutChartWidget);
Dashboard.registerWidget(BarChartWidget);
