import React, { Component, PropTypes } from 'react';
import DazzleDashboard, { addWidget } from 'react-dazzle';

// App components
import Header from './Header.jsx';
import EditBar from './EditBar.jsx';
import Container from './Container.jsx';
import AddWidgetDialog from './AddWidgetDialog.jsx';
import CustomFrame from './CustomFrame.jsx';
import ConfigManager from '../managers/ConfigManager.jsx';
import DataManager from '../managers/DataManager.jsx';
import Toolbar from './DashboardToolbar.jsx';
import WidgetConfigDialog from './WidgetConfigDialog.jsx';

// Default styes of dazzle.
import 'react-dazzle/lib/style/style.css';
// Our styles
//import '../styles/custom.css';


var widgetId = 0;
class Dashboard extends Component {
  constructor(props) {
    super(props);
    var {widgets, layout, editable, isNew, isOwner, title, abstract} = props;

    Object.keys(widgets).map((id) => {
      const ref = (w) => {
        if(w){
          this.widgets[id] = w;
          w.id = id;
        }

      }
      const w = widgets[id];
      widgets[id] = {
        type:Dashboard.widgetsClasses[w.type],
        title: w.title,
        props: {config: w.config, id, ref}
      }
    });

    this.state = {
      widgets, layout, editable, isOwner, isNew, title, abstract,
      addWidgetDialogOpen: false,
      addWidgetOptions: null,
    };
    console.log(this.state);
    this.configManager = new ConfigManager(this);
    this.dataManager = new DataManager(this);
    this.widgets = {};
  }
  getChildContext() {
    return {
      configManager: this.configManager,
      dataManager: this.dataManager
    }
  }
  /**
   * When a widget is removed, the layout should be set again.
   */
  onRemove = (layout) => {
    this.setState({
      layout: layout,
    });
  }

  /**
   * Adds new widgget.
   */
  onAdd = (layout, rowIndex, columnIndex) => {
    // Open the AddWidget dialog by seting the 'addWidgetDialogOpen' to true.
    // Also preserve the details such as the layout, rowIndex, and columnIndex  in 'addWidgetOptions'.
    //  This will be used later when user picks a widget to add.
    this.setState({
      addWidgetDialogOpen: true,
      addWidgetOptions: {
        layout,
        rowIndex,
        columnIndex,
      },
    });
  }

  /**
   * When a widget moved, this will be called. Layout should be given back.
   */
  onMove = (layout) => {
    this.setState({
      layout: layout,
    });
  }

  /**
   * This will be called when user tries to close the modal dialog.
   */
  onRequestClose = () => {
    this.setState({
      addWidgetDialogOpen: false,
    });
  }
  showWidgetConfigDialog = (id) =>{
    this.setState({
      widgetConfigDialogOpen: true,
      configWidgetId: id
    });

  }
  closeWidgetConfigDialog = (id, config) => {
    this.setState({
      widgetConfigDialogOpen: false
    });
  }
  updateWidget = (widget, config) => {
    const widgets = this.state.widgets;
    if(widget){
      widgets[widget.id].title = config.title;
      widgets[widget.id].props.config = config.widgetConfig;
    }
    this.setState({widgets, widgetConfigDialogOpen: false});
  }

  render() {
    return (
    <Container>
      <AddWidgetDialog widgets={this.state.widgets} isOpen={this.state.addWidgetDialogOpen} onRequestClose={this.onRequestClose} onWidgetSelect={this.handleWidgetSelection}/>
      <WidgetConfigDialog isOpen={this.state.widgetConfigDialogOpen} widgetId={this.state.configWidgetId} />
      <Header editable={this.state.editable} title={this.state.title} abstract={this.state.abstract} ref="header"/>
      <Toolbar isNew={this.state.isNew} editable={this.state.editable} isOwner={this.state.isOwner}/>
      <DazzleDashboard
        frameComponent={CustomFrame}
        onRemove={this.onRemove}
        layout={this.state.layout}
        widgets={this.state.widgets}
        editable={this.state.editable}
        onAdd={this.onAdd}
        onMove={this.onMove}
        addWidgetComponentText="Add New Widget"
        />

    </Container>
    );
  }

  /**
   * Toggeles edit mode in dashboard.
   */
  toggleEdit = () => {
    this.setState({
      editable: !this.state.editable,
    });
  };
  getNewId(){
    var newId = "w_" + (widgetId++);
    if(this.state.widgets[newId])
      return this.getNewId();
    return newId;
  }
  /**
   * When user selects a widget from the modal dialog, this will be called.
   * By calling the 'addWidget' method, the widget could be added to the previous requested location.
   */
  handleWidgetSelection = (widgetType) => {
    var id = this.getNewId();
    console.debug(id);
    const ref = (w) => {
      if(w){
        this.widgets[id] = w;
        w.id = id;
      }
    }
    this.state.widgets[id] = {
      title: widgetType.displayName || widgetType.name,
      type: widgetType,
      props: {id, ref, config: {}}
    }
    this.setState({
      widgets: this.state.widgets
    })
    const {layout, rowIndex, columnIndex} = this.state.addWidgetOptions;

    /**
     * 'AddWidget' method gives you the new layout.
     */
    this.setState({
      layout: addWidget(layout, rowIndex, columnIndex, id),
    });

    // Close the dialogbox
    this.onRequestClose();
  }
}
Dashboard.childContextTypes = {
  configManager: PropTypes.instanceOf(ConfigManager),
  dataManager: PropTypes.instanceOf(DataManager),
};


Dashboard.widgetsClasses = {};
Dashboard.registerWidget = function(type){
  Dashboard.widgetsClasses[type.name] = type;
}
export default Dashboard;
