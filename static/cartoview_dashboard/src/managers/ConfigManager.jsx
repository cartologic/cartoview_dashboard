class ConfigManager {
    constructor( dashboard ) {
        this.dashboard = dashboard
    }
    editWidgetConfig = ( widgetId ) => {
        this.currentWidgetId = widgetId
        this.dashboard.showWidgetConfigDialog( widgetId )
    }
    getWidgetInfo = ( id ) => {
        const widget = this.dashboard.widgets[ id ]
        const widgetType = this.dashboard.state.widgets[ id ].type
        const containerConfig = {
            title: this.dashboard.state.widgets[ id ].title
        }
        return { containerConfig, widgetType, widget }
    }
    endEditWidgetConfig = ( widget, config ) => {
        this.dashboard.updateWidget( widget, config )
    }

    // TODO: remove, it is deprecated , dashboard is not single map.
    getMapWidget( ) {
        var { widgets } = this.dashboard.state
        var mapWidget = null
        Object.keys( widgets ).forEach( ( id ) => {
            if ( widgets[ id ].type.name == "MapWidget" ) {
                mapWidget = this.dashboard.widgets[ id ]
                return false
            }
        } )
        return mapWidget
    }

     getMapWidgets( ) {
        // get widgets form dashboard.state.layout as dashboard.state.widgets is not updated when a widget removed.
        var { layout, widgets } = this.dashboard.state;
        var mapWidgets = {};
        layout.rows.forEach((row, rowIndex) => {
            row.columns.forEach((col, colIndex) => {
                col.widgets.forEach((wId, wIndex) =>  {
                    if(widgets[wId.key].type.name == "MapWidget")
                    {
                        mapWidgets[wId.key] = widgets[wId.key];
                    }
                });
            });
        });
        return mapWidgets;
    }

    getWidget(widgetId ) {
        // get widgets form dashboard.widget instead of dashboard.state.widgets
        // as it has whole widget object not only configuration
        return this.dashboard.widgets[widgetId];
    }
    save = ( ) => {
        var { widgets, layout } = this.dashboard.state
        const widgetsConfig = {}
        Object.keys( widgets ).map( ( id ) => {
            const { type, title } = widgets[ id ]
            widgetsConfig[ id ] = {
                title: widgets[ id ].title,
                type: widgets[ id ].type.name,
                config: widgets[ id ].props.config
            }
        } )
        const { title, abstract } = this.dashboard.refs.header.getData( )
        const config = { title, abstract, config: JSON.stringify( { widgets: widgetsConfig,
                layout } ) }
        saveDashboard( config )
    }
}
export default ConfigManager
