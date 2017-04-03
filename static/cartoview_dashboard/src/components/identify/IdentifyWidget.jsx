import React, { Component } from 'react';
import FieldSet from '../FieldSet.jsx';
import ol from 'openlayers';
import WMSService from 'boundless-sdk/services/WMSService';
import Events from '../../events/Events.jsx';
import "./style.css"

//application/json
class IdentifyWidget extends BaseWidget {
  static displayName = "Identify";
  constructor(props){
    super(props)
    this.state =  {
      ready: false,
      busy: false,
      features: [],
      activeFeature: 0
    }
  }
  render() {
    var {ready, busy, features, activeFeature} = this.state;
    const prev = (e) => {
      if (activeFeature == 0) return;
      activeFeature--;
      this.setState({activeFeature});
    };
    const next = (e) => {
      if (activeFeature == features.length - 1) return;
      activeFeature++;
      this.setState({activeFeature});
    };

    return <div>

      {busy && <div className="loading"></div> }
      {!busy && (features.length == 0) && <div className="identify-no-results">No Results, Click the map to identify features.</div>}
      {
        !busy && (features.length > 0) &&
        <div>
          <div className="pull-right identify-navigate">
            <button className="btn btn-link btn-xs" onClick={e=>prev(e)} disabled={activeFeature == 0}>
              <i className="glyphicon glyphicon-chevron-left"></i>
            </button>
            {activeFeature + 1} / {features.length}
            <button className="btn btn-link btn-xs" onClick={e=>next(e)} disabled={activeFeature == features.length - 1}>
              <i className="glyphicon glyphicon-chevron-right"></i>
            </button>
          </div>
          {this.resultItem(features[activeFeature])}
        </div>
      }
    </div>;
  }

  resultItem(f){
    var keys = f.getKeys();
    var geom = f.getGeometryName();
    return <div>
      <h4 className="identify-result-layer-title">{f.get('_layerTitle')}</h4>
      <div className="identify-result-ct">
        <table className="table" key={f.getId()}>
          <tbody>
          {
            keys.map((key) => {
              if(key == geom || key == "_layerTitle") return null;
              return <tr><th>{key}</th><td>{f.get(key)}</td></tr>
            })
          }
          </tbody>
        </table>
      </div>
    </div>;
  }
  componentDidMount(){
    var mapWidget = this.context.configManager.getMapWidget();
    if(mapWidget.ready){
        this.init(mapWidget.map);
    }
    else{
      Events.on('mapReady', (map)=> {
        this.init(map);
      });
    }
  }
  init(map){
    this.setState({ready:true})
    map.on('singleclick', (e) => {
      this.getLayers(map.getLayers().getArray()).forEach((layer) => {
        this.setState({busy: true, features: [], activeFeature: 0})
        WMSService.getFeatureInfo(layer, e.coordinate, map, 'application/json', (result) => {
          this.state.features = this.state.features.concat(result.features);
          result.features.forEach(f => f.set("_layerTitle", result.layer.get('title')))
          this.setState({
            features: this.state.features,
            busy: false
          });
        });
      })
    });
  }

  isWMS(layer){
    return layer.getSource() instanceof ol.source.TileWMS || layer.getSource() instanceof ol.source.ImageWMS;
  }
  getLayers(layers){
    var children = [];
    layers.forEach((layer) => {
      if(layer instanceof ol.layer.Group){
        children = children.concat(this.getLayers(layer.getLayers()));
      }
      else if(layer.getVisible() && this.isWMS(layer)){
        children.push(layer);
      }
    });
    return children;
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
