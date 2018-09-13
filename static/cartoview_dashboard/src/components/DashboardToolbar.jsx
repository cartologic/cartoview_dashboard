import "../css/app.css"

import React, {PropTypes} from 'react'

import ConfigManager from '../managers/ConfigManager.jsx'

class DashboardToolbar extends React.Component {
    constructor(props) {
        super(props)
    }

    saveAll = (e) => {
        e.preventDefault()
        const configManager = this.context.configManager
        configManager.save()
    }
    preview = (e) => {
        let {saved} = this.props
        if (!saved && confirm('You have unsaved changes, click yes to save current state and preview or click cancel to discard')) {
            this.saveAll(e)
        }
        window.location.href = '../view/'
    }

    render() {
        const {editable, isOwner, isNew, saved} = this.props
        if (!editable && !isOwner) return null
        let editBtn =
            <a className="btn btn-danger btn-lg btn-edit-db" href="../edit/" title="Edit Dashboard">
                <i className="glyphicon glyphicon-pencil"></i>
            </a>
        let saveBtn = !saved ?
            <button className="btn btn-danger btn-lg btn-save-db" title="Save Dashboard"
                    onClick={(e) => this.saveAll(e)}>
                <i className="glyphicon glyphicon-floppy-disk"></i>
            </button> :
            <button disabled className="btn btn-danger btn-lg btn-save-db" title="Save Dashboard"
                    onClick={(e) => this.saveAll(e)}>
                <i className="glyphicon glyphicon-floppy-disk"></i>
            </button>
        const viewBtn =
            <button className="btn btn-warning btn-lg btn-tb btn-view-db" title="View Dashboard"
                    onClick={(e) => this.preview(e)}>
                <i className="glyphicon glyphicon-eye-open"></i>
            </button>
        return <div className="db-actions-ct">
            {editable && saveBtn}
            {editable && !isNew && viewBtn}
            {!editable && isOwner && editBtn}
        </div>
    }
}

DashboardToolbar.contextTypes = {
    configManager: PropTypes.instanceOf(ConfigManager),
}
export default DashboardToolbar
