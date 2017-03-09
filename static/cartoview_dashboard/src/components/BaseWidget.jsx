import React, {PropTypes} from 'react';
import FieldSet from './FieldSet.jsx';
import ConfigManager from '../managers/ConfigManager.jsx';
import DataManager from '../managers/DataManager.jsx';

class BaseWidget extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      config: props.config || {}
    }
  }
  getConfig(){
    return this.state.config;
  }
  setConfig(config){
    this.setState({config})
  }
  componentWillReceiveProps(props){
    if(props.config){
      this.setConfig(props.config)
    }
  }
}

class JSONConfigFieldSet extends FieldSet {
  getSchema(props){
    return {
      config: {type:'json'}
    };
  }
  getInitialData(props){
    return {
      config: props.widget.getConfig()
    };
  }
  getData(){
    return super.getData().config;
  }
}
BaseWidget.ConfigForm = JSONConfigFieldSet;
BaseWidget.contextTypes = {
  configManager: PropTypes.instanceOf(ConfigManager),
  dataManager: PropTypes.instanceOf(DataManager),
};
export default BaseWidget;
