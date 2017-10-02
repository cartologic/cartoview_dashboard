import "../css/app.css"

import React, { PropTypes } from 'react'

import ConfigManager from '../managers/ConfigManager.jsx'
class DashboardToolbar extends React.Component {
    constructor( props ) {
        super( props )
        this.state = {
            saving: false
        }
    }
    saveAll = ( e ) => {
        e.preventDefault( )
        const configManager = this.context.configManager
        let { saving } = this.state
        if ( !saving ) {
            this.setState( { saving: true } )
            configManager.save( )
        }
    }
    render( ) {
        let { saving } = this.state
        const { editable, isOwner, isNew } = this.props
        if ( !editable && !isOwner ) return null
        let editBtn =
            <a className="btn btn-danger btn-lg btn-edit-db" href="../edit/" title="Edit Dashboard">
        <i className="glyphicon glyphicon-pencil"></i>
      </a>
        let saveBtn = !saving ?
            <button className="btn btn-danger btn-lg btn-save-db" title="Save Dashboard"
      onClick={(e) => this.saveAll(e)}>
      <i className="glyphicon glyphicon-floppy-disk"></i>
    </button> :
            <button disabled className="btn btn-danger btn-lg btn-save-db" title="Save Dashboard"
      onClick={(e) => this.saveAll(e)}>
      <i className="glyphicon glyphicon-floppy-disk"></i>
    </button>
        const viewBtn =
            <a className="btn btn-warning btn-lg btn-tb btn-view-db" href="../view/" title="View Dashboard">
      <i className="glyphicon glyphicon-eye-open"></i>
    </a>
        return <div className="db-actions-ct">
      {editable && saveBtn}
      {editable && !isNew && viewBtn}
      {!editable && isOwner && editBtn}
    </div>
    }
}
DashboardToolbar.contextTypes = {
    configManager: PropTypes.instanceOf( ConfigManager ),
}
export default DashboardToolbar
