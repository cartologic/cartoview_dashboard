import Modal from './Modal.jsx'
import React from 'react'

class TabConfigDialog extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tabConfiguration: props.tabConfiguration ? props.tabConfiguration : {
                rowIndex: 0,
                columnIndex: 0,
                tabIndex: 0,
                tabTitle: 'Default Tab title',
                layoutNumber: 3,
            },
        };
    }

    handleTabTitleChange = (event) => {
        const updatedTabConfiguration = this.state.tabConfiguration;
        updatedTabConfiguration.tabTitle = event.target.value;
        this.setState({
            tabConfiguration: updatedTabConfiguration,
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            tabConfiguration: nextProps.tabConfiguration ? nextProps.tabConfiguration : {
                rowIndex: nextProps.tabConfiguration.rowIndex,
                columnIndex: nextProps.tabConfiguration.columnIndex,
                tabIndex: nextProps.tabConfiguration.tabIndex,
                tabTitle: nextProps.tabConfiguration.tabTitle,
            }
        });
    }

    handleLayoutSelect = (layoutNumber) => {
        const updatedTabConfiguration = this.state.tabConfiguration;
        updatedTabConfiguration.layoutNumber = layoutNumber;
        this.setState({
            tabConfiguration: updatedTabConfiguration,
        });
    }

    render() {
        const {isOpen, tabConfiguration, saveTabConfigurations, hideTabConfigDialog} = this.props;
        if (!isOpen) return null
        const checkedClassName = "img-thumbnail img-check check";
        const unCheckedClassName = "img-thumbnail img-check";
        return <Modal isOpen={isOpen} title="Configure Tab" close={hideTabConfigDialog}>

            <form className="form-horizontal">
                <fieldset>
                    <div className="form-group">
                        <label className="col-md-2 control-label" htmlFor="tabtitle">Tab Title</label>
                        <div className="col-md-10">
                            <input
                                value={this.state.tabConfiguration.tabTitle}
                                onChange={this.handleTabTitleChange}
                                id="tabtitle" name="tabtitle" type="text" placeholder="Enter Tab Title"
                                   className="form-control input-md"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label" htmlFor="layouts">Layout</label>
                    </div>
                    <div className="form-group">
                        <div className="col-md-3 box">
                            <strong className="center">1:2</strong>
                            <label className="btn btn-light" onClick={() => this.handleLayoutSelect(1)}>
                                <img
                                    src="/static/cartoview_dashboard/img/Layout1.png"
                                    className={tabConfiguration.layoutNumber==1 ? checkedClassName: unCheckedClassName}/>
                                <input type="radio" name="chk1" id="item4" value="val1" className="hidden"
                                       autoComplete="off"/>
                            </label>
                        </div>
                        <div className="col-md-3 box">
                            <strong className="center">2:1</strong>
                            <label className="btn btn-light" onClick={() => this.handleLayoutSelect(2)}>
                                <img
                                    src="/static/cartoview_dashboard/img/Layout2.png"
                                    className={tabConfiguration.layoutNumber==2 ? checkedClassName: unCheckedClassName}/>
                                <input type="radio" name="chk1" id="item4" value="val2" className="hidden"
                                       autoComplete="off"/>
                            </label>
                        </div>
                        <div className="col-md-3 box">
                            <strong className="center">1:3</strong>
                            <label className="btn btn-light" onClick={() => this.handleLayoutSelect(3)}>
                                <img
                                    src="/static/cartoview_dashboard/img/Layout3.png"
                                    className={tabConfiguration.layoutNumber==3 ? checkedClassName: unCheckedClassName}/>
                                <input type="radio" name="chk1" id="item4" value="val3" className="hidden"
                                       autoComplete="off"/>
                            </label>
                        </div>
                        <div className="col-md-3 box">
                            <strong className="center">1:1</strong>
                            <label className="btn btn-light" onClick={() => this.handleLayoutSelect(4)}>
                                <img
                                    src="/static/cartoview_dashboard/img/Layout4.png"
                                    className={tabConfiguration.layoutNumber==4 ? checkedClassName: unCheckedClassName}/>
                                <input type="radio" name="chk1" id="item4" value="val3" className="hidden"
                                       autoComplete="off"/>
                            </label>
                        </div>
                    </div>

                </fieldset>
                <div className="pull-right">
                    <a className="btn btn-primary" type="submit"
                       onClick={(e) => {
                           saveTabConfigurations(this.state.tabConfiguration);
                       }}>
                        <i className="glyphicon glyphicon-ok"></i> {"Apply"}
                    </a>
                    <a className="btn btn-danger"
                       onClick={(e) => {
                            hideTabConfigDialog();
                    }}>
                        <i className="glyphicon glyphicon-remove"></i> {"Cancel"}
                    </a>
                </div>
            </form>
        </Modal>
    }
}

export default TabConfigDialog
