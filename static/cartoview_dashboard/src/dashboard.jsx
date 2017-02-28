import * as React from 'react';
import * as ReactDOM from 'react-dom';
import WidgetContainer from './components/WidgetContainer.jsx'
import BaseWidget from "./components/BaseWidget.jsx"
import Modal from 'react-modal';
var modalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.20)'
  },
  content: {
    outline: 'none'
  }
};

global.BaseWidget = BaseWidget;
global.WidgetContainer = WidgetContainer
global.Modal = Modal;
global.modalStyle = modalStyle;

class Dashboard extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      widgets: props.widgets,
      title: props.title,
      editMode: props.editMode,
      abstract: props.abstract
    }
  }

  render(){
    this.containers = [];
    var header, addWidget;
    if(this.props.editMode){
      header = <div>
        <div className="form-group">
          <label>Title</label>
          <input className="form-control" value={this.state.title}
            onChange={e => this.setState({'title': e.target.value}) }  placeholder="Title" />
        </div>
        <div className="form-group">
          <label>Abstract</label>
          <textarea className="form-control" value={this.state.abstract}
            ref="abstractInput"  placeholder="Abstract" onChange={e => this.setState({'abstract': e.target.value}) } />
        </div>
      </div>;

      addWidget = <div>
        <button className="btn btn-info btn-lg btn-add-widget" onClick={(e)=> this.showAddWidgetDialog(e) }>
          <i className="glyphicon glyphicon-plus"></i>
        </button>
        <Modal className="modal-dialog" isOpen={this.state.addWidgetDialogIsOpen} style={modalStyle}>
          <div className="">
            <div className="panel panel-default">
                <div className="panel-heading">
                  Add Widget
                  <div className="pull-right">
                    <a className="btn btn-link btn-xs" onClick={(e) => this.closeAddWidgetDialog(e)}>
                      <i className="glyphicon glyphicon-remove"></i>
                    </a>
                  </div>
                </div>
                <div className="panel-body widget">
                  <h3>Please choose one of the following</h3>
                    <div className="list-group">
                      {
                        Object.keys(Dashboard.widgetsClasses).map((key) =>
                          <a onClick={(e)=> {e.preventDefault() ; this.addWidget(key);} } className="list-group-item" href="#">
                            {Dashboard.widgetsClasses[key].displayName || Dashboard.widgetsClasses[key].name}
                          </a>)
                      }
                    </div>


                </div>
            </div>
          </div>
        </Modal>
      </div>
      ;
    }
    else{
      header = <div className="dashboard-header">
          <h2>{this.state.title}</h2>
          <p>{this.state.abstract}</p>
       </div>;
    }


    return <div className="dashboard">
      {header}
      { this.state.widgets.map((w, index) => <WidgetContainer index={index} ref={ ct => this.containers.push(ct) } {...w} dashboard={this} />) }
      { addWidget }
    </div>;
  }
  closeAddWidgetDialog(){
    this.setState({
      addWidgetDialogIsOpen: false
    });
  }
  showAddWidgetDialog(){
    this.setState({
      addWidgetDialogIsOpen: true
    });
  }
  addWidget(type){
    this.closeAddWidgetDialog();
    this.state.widgets.push({
      type: type,
      width: 2,
      config: {},
      isNew: true
    });
    this.setState({
      widgets: this.state.widgets
    });
  }
  removeWidget(widget){
    var index = widget.props.container.props.index;
    this.state.widgets.splice(index, 1);
    this.setState({
      widgets: this.state.widgets
    });
  }
  getWidgetsConfig(){
    var configs = [];
    this.containers.map((ct) => {
      if(ct && !(ct.state && ct.state.deleted)) {
        configs.push(ct.getConfig());
      }
    })
    return configs;
  }

}

Dashboard.widgetsClasses = {};
Dashboard.registerWidget = function(type){
  Dashboard.widgetsClasses[type.name] = type;
}

global.Dashboard = Dashboard
