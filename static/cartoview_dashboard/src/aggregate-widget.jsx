import React, { Component } from 'react';
class AggregateWidgetConfigForm extends React.Component{
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
    var isNumber = a => ['xsd:int', 'xsd:long', 'xsd:double'].indexOf(a.attribute_type) != -1;
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
      aggregationFunction: this._functionInput.value
    };
  }
}

class AggregateWidget extends BaseWidget {
  constructor(props) {
    super(props);
    this.wpsClient = new WpsClient({
      geoserverUrl: "/geoserver"
    });
    this.state.aggregateResult = "NaN";

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

  configInput(){
    return <AggregateWidgetConfigForm config={this.state.config} ref={(m) => this._configForm = m }/>;
  }
  getNewConfig(){
    return this._configForm.getConfig();
  }

}
Dashboard.registerWidget(AggregateWidget);
export default AggregateWidget;
