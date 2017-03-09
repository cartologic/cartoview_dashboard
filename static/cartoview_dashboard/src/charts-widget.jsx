import React, { Component } from 'react';
import FieldSet from './components/FieldSet.jsx';
import {Line, Doughnut, Bar} from 'react-chartjs-2';

class BaseChartWidget extends BaseWidget {
  constructor(props) {
    super(props);
    this.wpsClient = new WpsClient({
      geoserverUrl: "/geoserver"
    });
    this.configFieldSetClass = ConfigFieldSet;
  }

  getConfigFormOptions(){
    if(!this.state.config.aggregationAttribute){
      configFormOptions.aggregationAttribute.options = {};
    }
    if(!this.state.config.groupBy){
      configFormOptions.aggregationAttribute.options = {};
    }
    return configFormOptions;
  }

  // componentDidMount()  {
  //   this.update(this.state.config);
  // }
  // shouldComponentUpdate(nextProps, nextState){
  //   if(this.state.config != nextState.config ){
  //     this.update(nextState.config);
  //   }
  //   return true;
  // }
  // update(config){
  //   if(config.typeName){
  //     this.wpsClient.aggregate(config).then((data) => {
  //       this.setData(data);
  //     });
  //   }
  // }
  componentDidMount()  {
    this.context.dataManager.subscribe('extentChange', (extent) => {
      this.update(this.state.config, extent);
    })
    this.update(this.state.config);
  }
  update(config, extent){
    if(config.typeName){
      config = Object.assign({}, config)
      if(extent){
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
  setData(data){
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
  typeName: {
    type: 'select',
    label: "Layer",
    options: {},
    props:{
      onChange: (e) => {
        e.target.fieldSet.updateAttributes();
      }
    }
  },
  aggregationAttribute:{
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
  groupBy:{
    type: 'select',
    label: "Group By Attribute",
    getValue: (data) => {return data.groupBy ? data.groupBy.attributes : null},
    options: {}
  }
};

class ConfigFieldSet extends FieldSet {
  getSchema(){
    return configFormOptions;
  }
  getInitialData(props){
    return props.widget.getConfig();
  }
  constructor(props){
    super(props);
    this.state.layers = [];
    this.state.attributes = [];
  }
  getSelectOptions(name, config, value){
    if(name == "typeName"){
      return this.state.layers.map(m => <option value={m.typename}>{m.title}</option>);
    }
    else if(name=="aggregationAttribute"){
      var isNumber = a => ['xsd:int', 'xsd:long', 'xsd:double'].indexOf(a.attribute_type) != -1;
      return this.state.attributes.filter(a => isNumber(a))
        .map(a => <option value={a.attribute}>{a.attribute_label || a.attribute}</option>);
    }
    else if(name=="groupBy"){
      var isString = a => ['xsd:string'].indexOf(a.attribute_type) != -1;
      return this.state.attributes.filter(a => isString(a) )
      .map(a => <option value={a.attribute}>{a.attribute_label || a.attribute}</option>);
    }
    return super.getSelectOptions(name, config, value);
  }
  updateAttributes(data){
    this.setState({data: data || this.getData()});
    getAttributesData(this.fields.typeName.value).then(res => this.setState({attributes:res.objects}));
  }
  componentDidMount(){
    getLayersData().then(res => {
      this.setLayers(res);
      if(this.state.data.typeName){
        this.updateAttributes(this.state.data);
      }
    });
  }
  setLayers(res){
    this.setState({layers: res.objects});
    //res.objects.map(l => this.layersHash[l.typename] = l);
  }
  getData(){
    const data = super.getData()
    data.groupBy = {
      attributes: data.groupBy
    };
    return data;
  }

}
BaseChartWidget.ConfigForm = ConfigFieldSet;

class BarChartWidget extends BaseChartWidget{
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
        <Bar data={this.state.data}  options={{responsive: true, animationSteps: 100 }} height={500} width={800}/>
      </div> ;
  }
};


class LineChartWidget extends BaseChartWidget {
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
         <Line data={this.state.data} options={{responsive: true, animationSteps: 100 }} height={500} width={800}/>
       </div>
    );
  }
}


class DoughnutChartWidget extends BaseChartWidget {
  constructor(props) {
    super(props);
    this.state.data = {
        labels: [],
        datasets: [{
          data: [],
        }]
      };
  }
  dynamicColor () {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  }
  setData(data){
    var colors = data.AggregationResults.map((item) => this.dynamicColor());
    this.state.data.datasets[0].backgroundColor = colors;
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
         <Doughnut data={this.state.data} options={{ animationEasing: 'easeInSine', showTooltips: true }} height={300} width={400}/>
       </div>
    );
  }
}

Dashboard.registerWidget(LineChartWidget);
Dashboard.registerWidget(DoughnutChartWidget);
Dashboard.registerWidget(BarChartWidget);
