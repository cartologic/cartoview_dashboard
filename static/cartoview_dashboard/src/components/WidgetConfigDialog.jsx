import ConfigManager from '../managers/ConfigManager.jsx'
import FieldSet from './FieldSet.jsx'
import Modal from './Modal.jsx'
import React from 'react'
import {WidgetContainerConfigSchema} from  '../constants/Constants.jsx'

class WidgetConfigDialog extends React.Component{
    render(){
        const {isOpen, widgetId} = this.props
        if(!isOpen) return null
        const {configManager} = this.context
        const {widget, containerConfig, widgetType} = configManager.getWidgetInfo(widgetId)
        const props = {
            ref: "widgetConfigForm",
            widget
        }

        const widgetConfigForm = React.createElement(widgetType.ConfigForm, props)

        return  <Modal isOpen={isOpen} close={() => configManager.endEditWidgetConfig()} title="Config Widget">
      <FieldSet ref="containerConfigForm" data={containerConfig} schema={WidgetContainerConfigSchema}/>
      {widgetConfigForm}
      <div className="pull-right">
        <a className="btn btn-primary"
          onClick={(e) => { e.preventDefault(); configManager.endEditWidgetConfig(widget, this.getConfig())} }>
          <i className="glyphicon glyphicon-ok"></i> Apply
        </a>
        <a className="btn btn-danger" onClick={(e) =>{e.preventDefault(); configManager.endEditWidgetConfig()}}>
          <i className="glyphicon glyphicon-remove"></i> Cancel
        </a>
      </div>
    </Modal>
    }
    getConfig(){
        var config = this.refs.containerConfigForm.getData()
        config.widgetConfig = this.refs.widgetConfigForm.getData()
        return config
    }
}
WidgetConfigDialog.contextTypes = {
    configManager: React.PropTypes.instanceOf(ConfigManager),
}
export default WidgetConfigDialog
