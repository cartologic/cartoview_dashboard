import React, {PropTypes} from 'react';
import ConfigManager from '../managers/ConfigManager.jsx';

class DashboardToolbar extends React.Component{
  render(){
    const {editable, isOwner, isNew} = this.props;
    const configManager = this.context.configManager;
    if(!editable && !isOwner) return null;
    const editBtn =  <a className="btn btn-danger btn-lg btn-edit-db" href="../edit/" title="Edit Dashboard">
      <i className="glyphicon glyphicon-pencil"></i>
    </a>;
    const saveBtn = <button className="btn btn-danger btn-lg btn-save-db" title="Save Dashboard"
      onClick={(e) => {e.preventDefault(); configManager.save(); } }>
      <i className="glyphicon glyphicon-floppy-disk"></i>
    </button>;
    const viewBtn = <a className="btn btn-warning btn-lg btn-tb btn-view-db" href="../view/" title="View Dashboard">
      <i className="glyphicon glyphicon-eye-open"></i>
    </a>;
    return <div className="db-actions-ct">
      {editable && saveBtn}
      {editable && !isNew && viewBtn}
      {!editable && isOwner && editBtn}
    </div>;
  }
}
DashboardToolbar.contextTypes = {
  configManager: PropTypes.instanceOf(ConfigManager),
};
export default DashboardToolbar;
