import React, { Component } from 'react';


var Line = require("react-chartjs").Line;
var Doughnut = require("react-chartjs").Doughnut;
var Bar = require("react-chartjs").Bar;

class ChartWidgetConfigForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      layers : [],
      attributes: [],
      config: props.config
    };
    this.layersHash = [];
  }
  render (){
    var initLayerValue = (input) => {
      this._layerInput = input;
      if(input) input.value = this.props.config.typeName;
    };
    var initAttrValue = (input) => {
      this._attrInput = input;
      if(input) input.value = this.props.config.aggregationAttribute;
    };
    var initFunctionValue = (input) => {
      this._functionInput = input;
      if(input) input.value = this.props.config.aggregationFunction;
    };
    var initGroupByValue = (input) => {
      this._groupByInput = input;
      if(input && this.props.config.groupBy) input.value = this.props.config.groupBy.attributes;
    };
    var isNumber = a => ['xsd:int', 'xsd:long', 'xsd:double'].indexOf(a.attribute_type) != -1;
    var isString = a => ['xsd:string'].indexOf(a.attribute_type) != -1;
    return <div>
      <div className="form-group">
        <label>Layer</label>
        <select className="form-control" ref={ initLayerValue } onChange={(e) => this.updateAttributes(e)}>
          {this.state.layers.map(m => <option value={m.typename}>{m.title}</option>) }
        </select>
      </div>
      <div className="form-group">
        <label>Aggregation Attribute</label>
        <select className="form-control" ref={ initAttrValue } >
          {this.state.attributes.filter(a => isNumber(a) ).map(a => <option value={a.attribute}>{a.attribute_label || a.attribute}</option>) }
        </select>
      </div>
      <div className="form-group">
        <label>Aggregation Function</label>
        <select className="form-control" ref={ initFunctionValue }>
          <option value="Sum">Sum</option>
          <option value="Count">Count</option>
          <option value="Average">Average</option>
          <option value="Max">Max</option>
          <option value="Min">Min</option>
          <option value="Median">Median</option>
          <option value="StdDev">StdDev</option>
        </select>
      </div>
      <div className="form-group">
        <label>Group By Attribute</label>
        <select className="form-control" ref={ initGroupByValue } >
          {this.state.attributes.filter(a => isString(a) ).map(a => <option value={a.attribute}>{a.attribute_label || a.attribute}</option>) }
        </select>
      </div>
    </div>
  }
  updateAttributes(){
    this.state.config.typeName = this._layerInput.value;
    this.setState({config:this.state.config});
    getAttributesData(this.layersHash[this._layerInput.value].id).then(res => this.setState({attributes:res.objects}) );
  }
  componentWillMount(){
    getLayersData().then(res => {
      this.setLayers(res);
      if(this.props.config.typeName){
        var layerId = this.layersHash[this.props.config.typeName].id;
        getAttributesData(layerId).then(res => this.setState({attributes:res.objects}) );
      }
    });

  }
  setLayers(res){
    this.setState({layers:res.objects});
    res.objects.map(l => this.layersHash[l.typename] = l);

  }
  getConfig(){
    return {
      typeName: this._layerInput.value,
      aggregationAttribute: this._attrInput.value,
      aggregationFunction: this._functionInput.value,
      groupBy: {
          attributes: this._groupByInput.value
      }
    };
  }
}



class BaseChartWidget extends BaseWidget {
  constructor(props) {
    super(props);
    this.wpsClient = new WpsClient({
      geoserverUrl: "/geoserver"
    });
  }
  componentDidMount()  {
    this.update(this.state.config);
  }
  shouldComponentUpdate(nextProps, nextState){
    if(this.state.config != nextState.config ){
      this.update(nextState.config);
    }
    return true;
  }
  update(config){
    if(config.typeName){
      this.wpsClient.aggregate(config).then((data) => {
        this.setData(data);
      });
    }
  }
  setData(data){
    var labels = data.AggregationResults.map((item) => item[0]);
    var values = data.AggregationResults.map((item) => item[1]);
    // data.AggregationResults.map((item) => {
    //   labels.push(item[0]);
    //   values.push(item[1]);
    // });
    this.state.data.labels = labels;
    this.state.data.datasets[0].data = values;
    this.setState({
      data: this.state.data
    });
  }

  configInput(){
    return <ChartWidgetConfigForm config={this.state.config} ref={(m) => this._configForm = m }/>;
  }
  getNewConfig(){
    return this._configForm.getConfig();
  }

}
class BarChartWidget extends BaseChartWidget{
  constructor(props) {
    super(props);
    this.state.data = {
        labels: [],
        datasets: [
          {
            // label: 'Bar Chart First dataset',
            fillColor: '#0094D6',
            // strokeColor: '#0094D6',
            // highlightFill: 'rgba(220,220,220,0.75)',
            // highlightStroke: 'rgba(220,220,220,1)',
            data: [],
          }
        ]
      };
  }

  render() {
      return <div className="bar-chart-ct">
        <Bar data={this.state.data}  options={{responsive: true, animationSteps: 100 }} height="210" width="800"/>
      </div> ;
  }
};


class LineChartWidget extends BaseChartWidget {
  constructor(props) {
    super(props);

    this.state.data = {
        labels: [],
        datasets: [
          {
            // label: 'Singal',
            fillColor: '#F1E7E5',
            strokeColor: '#E8575A',
            pointColor: '#E8575A',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#ff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data: [],
          },
        ],
    };
  }

  render() {
    return (
      <div className="line-chart-ct">
         <Line data={this.state.data} options={{responsive: true, animationSteps: 100 }} height="210" width="800"/>
       </div>
    );
  }
}


class DoughnutChartWidget extends BaseChartWidget {
  constructor(props) {
    super(props);
    this.state.data = [];
  }
  setData(data){
    var values = [];
    data.AggregationResults.map((item) => {
      values.push({
        label: item[0],
        value:item[1]
      });
    });
    this.state.data = values;
    this.setState({
      data: this.state.data
    });
  }
  render() {
    return (
      <div className="doughnut-chart-ct">
         <Doughnut data={this.state.data} options={{ animationEasing: 'easeInSine', showTooltips: true }} height="200" width="350"/>
       </div>
    );
  }
}

Dashboard.registerWidget(LineChartWidget);
Dashboard.registerWidget(DoughnutChartWidget);
Dashboard.registerWidget(BarChartWidget);
