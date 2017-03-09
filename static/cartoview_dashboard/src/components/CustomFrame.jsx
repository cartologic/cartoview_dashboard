import React, { PropTypes } from 'react';
import ConfigManager from '../managers/ConfigManager.jsx';

class CustomFrame extends React.Component{
  // getChildContext() {
  //   var {onRemove, editable, title} = this.props;
  //   return {onRemove, editable, title};
  // }
  render(){
    var {children, onRemove, editable, title} = this.props;
    const editWidgetConfig  = this.context.configManager.editWidgetConfig;
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
            {title}

              {
                editable &&
                <div className="btn-group pull-right">
                  <a onClick={(e) => {e.preventDefault(); editWidgetConfig(children.props.id);}} className="btn btn-link btn-xs">
                    <i className="glyphicon glyphicon-cog"></i>
                  </a>
                  <a onClick={(e) => {e.preventDefault(); onRemove();}} className="btn btn-link btn-xs">
                    <i className="glyphicon glyphicon-trash"></i>
                  </a>
                </div>
              }

        </div>
        <div className="panel-body widget">
            {children}
        </div>
      </div>);
  }
}

CustomFrame.propTypes = {
  children: PropTypes.element,
  onRemove: PropTypes.func,
  editable: PropTypes.bool,
  title: PropTypes.string,
};
CustomFrame.contextTypes = {
  configManager: PropTypes.instanceOf(ConfigManager),
};
// CustomFrame.childContextTypes = {
//   onRemove: PropTypes.func,
//   editable: PropTypes.bool,
//   title: PropTypes.string,
// };
export default CustomFrame;
