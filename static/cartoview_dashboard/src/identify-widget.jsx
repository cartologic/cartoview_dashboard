import React, { Component } from 'react';
import FieldSet from './components/FieldSet.jsx';
import ol from 'openlayers';


class IdentifyWidget extends BaseWidget {
  static displayName = "Identify";
  render() {
    const style = {
      padding: "10px 20px"
    }
    const ready = !!(this.state && this.state.ready);
    return <div style={style}>
      {
        ready ? <div>ready</div> :
        <span>You have to add a map to this dashboard to show the legend.</span>
      }
    </div>;
  }
  componentDidMount(){
    var mapWidget = this.context.configManager.getMapWidget();
    if(mapWidget.ready){
        this.initMapEvent(mapWidget.map);
    }
    else{
      Events.on('mapReady', (map)=> {
        this.initMapEvent(map);
      });
    }
  }
  initMapEvent(map){
    map.on('singleclick', (e) => {
      console.log(e);
    });
  }
}
class ConfigForm extends React.Component {
  render(){
		return null
  }
  getData(){
    return {}
  }
}


IdentifyWidget.ConfigForm = ConfigForm;

Dashboard.registerWidget(IdentifyWidget);
export default IdentifyWidget;
