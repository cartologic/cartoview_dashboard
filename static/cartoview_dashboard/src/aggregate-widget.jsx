import React, { Component } from 'react';
import FieldSet from './components/FieldSet.jsx';

class AggregateWidget extends BaseWidget {
  constructor(props) {
    super(props);
    this.wpsClient = new WpsClient({
      geoserverUrl: "/geoserver"
    });
    this.state.aggregateResult = "NaN";
    this.configFieldSetClass = ConfigFieldSet;
  }

  // getConfigFormOptions(){
  //   if(!this.state.config.aggregationAttribute){
  //     configFormOptions.aggregationAttribute.options = {};
  //   }
  //   return configFormOptions;
  // }


  componentDidMount()  {
    this.context.dataManager.subscribe('extentChange', (extent) => {
      this.update(this.state.config, extent);
    })
    this.update(this.state.config);
  }
  // shouldComponentUpdate(nextProps, nextState){
  //   if(this.state.config != nextState.config ){
  //     this.update(nextState.config);
  //   }
  //   return true;
  // }
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
  constructor(props){
    super(props);
    this.state.layers = [];
    this.state.attributes = [];
  }
  getInitialData(props){
    return props.widget.getConfig();
  }
  getSchema(){
    return {
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
  getSelectOptions(name, config, value){
    if(name == "typeName"){
      return this.state.layers.map(m => <option value={m.typename}>{m.title}</option>);
    }
    else if(name=="aggregationAttribute"){
      var isNumber = a => ['xsd:int', 'xsd:long', 'xsd:double'].indexOf(a.attribute_type) != -1;
      return this.state.attributes.filter(a => isNumber(a))
        .map(a => <option value={a.attribute}>{a.attribute_label || a.attribute}</option>);
    }
    return super.getSelectOptions(name, config, value);
  }
  updateAttributes(data){
    //this.state.data.typeName = this.fields.typeName.value;
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

}
AggregateWidget.ConfigForm = ConfigFieldSet;
Dashboard.registerWidget(AggregateWidget);
export default AggregateWidget;
