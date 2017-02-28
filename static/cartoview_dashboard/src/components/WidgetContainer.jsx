import React, { PropTypes, Component, createElement } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


class WidgetContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {
        tools:[],
        width: parseInt(props.width || "2"),
        title: props.title,
        widgetConfig: props.config || {}
      };
  }
  render() {
    var props = {
      config: this.state.widgetConfig
    };
    props.ref = (w) => {
      if(w){
        this.widget = w;
      }
    };
    props.isNew = this.props.isNew;
    props.dashboard = this.props.dashboard;
    props.container = this;

    let el = createElement(Dashboard.widgetsClasses[this.props.type], props);
    let cls = "widget-ct col-md-" + (this.state.width * 4) ;
    if(this.state.deleted){
      cls += " hide";
    }
    return <div className={cls}>
        <div className="panel panel-default">
            {this.getHeading()}
            <div className="panel-body widget">
                {el}
            </div>
        </div>



        <Modal className="modal-dialog" isOpen={this.state.modalIsOpen} style={modalStyle}>
          <div className="">
            <div className="panel panel-default">
                <div className="panel-heading">
                  {this.state.modalTitle}
                  <div className="pull-right">
                    <a className="btn btn-primary btn-xs"
                      onClick={(e) => {this.widget.applyConfig(); this.closeModal(e);} }>
                      <i className="glyphicon glyphicon-ok"></i> Apply
                    </a>
                    <a className="btn btn-danger btn-xs" onClick={(e) => this.closeModal(e)}>
                      <i className="glyphicon glyphicon-remove"></i> Cancel
                    </a>
                  </div>
                </div>
                <div className="panel-body widget">
                    {this.state.modalContent}
                </div>
            </div>
          </div>
        </Modal>



    </div>;
  }
  componentDidMount(){
    this.setState({
      tools: this.widget ? this.widget.tools() : []
    });
  }

  showModal(title, contnet){
    this.setState({
      modalIsOpen: true,
      modalTitle: title,
      modalContent: contnet
    });
  }
  closeModal(){
    this.setState({
      modalIsOpen: false,
      modalTitle: null,
      modalContent: null
    });
  }
  getHeading(){
    if(this.props.noHeader) return null;
    if(this.props.dashboard.props.editMode){
        var type = Dashboard.widgetsClasses[this.props.type];
        return <div className="panel-heading">
            {this.state.title}
            <i className="label label-info">{type.displayName || type.name}</i>
            <div className="btn-group pull-right">
              {
                  this.state.tools.map(t => <a className="btn btn-link btn-xs" onClick={t.handler}>
                                      <i className={"glyphicon glyphicon-" + t.icon}></i>
                              </a>)
              }
            </div>
        </div>;
    }
    else if (this.props.title){
        return <div className="panel-heading">{this.state.title}</div>;
    }
    return null;
  }
  getConfig(){
    var s = this.state;
    var config = {
      type: this.props.type,
      width: s.width,
      title: s.title,
      config: this.widget.state.config
    };
    return config;
  }
};

export default WidgetContainer;
