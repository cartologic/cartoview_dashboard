import React, { Component } from 'react';

class AggregateWidget extends BaseWidget {
  constructor(props) {
    super(props);
    this.wpsClient = new WpsClient({
      geoserverUrl: "/geoserver"
    });
    this.state.aggregateResult = "NaN"
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

}
Dashboard.registerWidget(AggregateWidget);
export default AggregateWidget;
