class ConfigManager{
  constructor(dashboard){
    this.dashboard = dashboard;
  }
  editWidgetConfig = (widgetId) => {
    this.currentWidgetId = widgetId;
    this.dashboard.showWidgetConfigDialog(widgetId);
  }
  getWidgetInfo = (id) => {
    const widget = this.dashboard.widgets[id];
    const widgetType = this.dashboard.state.widgets[id].type;
    const containerConfig = {
      title: this.dashboard.state.widgets[id].title
    }
    return {containerConfig, widgetType, widget};
  }
  endEditWidgetConfig = (widget, config) => {
    this.dashboard.updateWidget(widget, config);
  }
  save = () => {
    var {widgets, layout} = this.dashboard.state;
    const widgetsConfig = {};
    Object.keys(widgets).map((id) => {
      const {type, title} = widgets[id];
      widgetsConfig[id] = {
        title: widgets[id].title,
        type: widgets[id].type.name,
        config: widgets[id].props.config
      }
    });
    const {title, abstract} = this.dashboard.refs.header.getData();
    const config =  {title, abstract, config:JSON.stringify({widgets:widgetsConfig, layout})};
    saveDashboard(config);
  }

}

export default ConfigManager;
