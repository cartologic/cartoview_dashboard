// Default styes of dazzle.
import 'react-dazzle/lib/style/style.css'

import DazzleDashboard, { addWidget, removeWidget } from 'react-dazzle'
import React, { Component, PropTypes } from 'react'

import AddWidgetDialog from './AddWidgetDialog.jsx'
import ConfigManager from '../managers/ConfigManager.jsx'
import Container from './Container.jsx'
import CustomFrame from './CustomFrame.jsx'
// import EditBar from './EditBar.jsx' 
// App components
import Header from './Header.jsx'
import Toolbar from './DashboardToolbar.jsx'
import WidgetConfigDialog from './WidgetConfigDialog.jsx'
import TabConfigDialog from './TabConfigDialog.jsx';

// Our styles
//import '../styles/custom.css'

// import Sweat Alert
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

var widgetId = 0
class Dashboard extends Component {
    constructor( props ) {
        super( props )
        var { widgets,
            layout,
            editable,
            isNew,
            isOwner,
            title,
            abstract } = props
        Object.keys( widgets ).map( ( id ) => {
            const ref = ( w ) => {
                if ( w ) {
                    this.widgets[ id ] = w
                    w.id = id
                }
            }
            const w = widgets[ id ]
            widgets[ id ] = {
                type: Dashboard.widgetsClasses[ w.type ],
                title: w.title,
                props: { config: w.config, id, ref }
            }
        } )
        this.state = {
            widgets,
            layout,
            editable,
            isOwner,
            isNew,
            saved: !isNew,
            title,
            abstract,
            addWidgetDialogOpen: false,
            addWidgetOptions: null,
            showRemoveWidgetAlert: false,
            TabConfigDialogOpen: false,
            tabConfiguration: {}
        }
        this.configManager = new ConfigManager( this )
        this.widgets = {}
    }
    getChildContext( ) {
        return {
            configManager: this.configManager
        }
    }

    onRemoveTab = (rowIndex, columnIndex, tabIndex) => {
        const updatedLayout = this.state.layout;
        const widgetCount = updatedLayout.rows[rowIndex].columns[columnIndex].tabs[tabIndex].widgets.length;
        const hasWidgets = widgetCount ? true : false;
        if (!hasWidgets) {
            updatedLayout.rows[rowIndex].columns[columnIndex].tabs.splice(tabIndex, 1);
            this.setState({
                layout: updatedLayout,
                saved: false,
            });
        } else {
            this.setState({
                showRemoveWidgetAlert: true,
            });
        }
    }

    onAddTab = (rowIndex, columnIndex) => {
        const updatedLayout = this.state.layout;
        const numberOfTabs = updatedLayout.rows[rowIndex].columns[columnIndex].tabs.length;
        const newEmptyTab = {title: "New Tab", widgetSizes: [], widgets: []};
        updatedLayout.rows[rowIndex].columns[columnIndex].tabs.splice(numberOfTabs, 0, newEmptyTab);
            this.setState({
                layout: updatedLayout,
                saved: false,
        });
    }
    onConfigureTab = (rowIndex, columnIndex, tabIndex) => {
        let layoutNumber = 3;
        let widgetSizesLength = this.state.layout.rows[rowIndex].columns[columnIndex].tabs[tabIndex].widgetSizes.length;
        switch (widgetSizesLength) {
            case 0:
                layoutNumber = 3;
                break;
            case 1:
                layoutNumber = 4;
                break;
            case 2:
                if (this.state.layout.rows[rowIndex].columns[columnIndex].tabs[tabIndex].widgetSizes[0].height == '30%')
                    layoutNumber = 1;
                else
                    layoutNumber = 2;
                break;
            default:
                layoutNumber = 3;
        }
        this.setState({
            TabConfigDialogOpen: true,
            tabConfiguration: {
                rowIndex: rowIndex,
                columnIndex: columnIndex,
                tabIndex: tabIndex,
                tabTitle: this.state.layout.rows[rowIndex].columns[columnIndex].tabs[tabIndex].title,
                layoutNumber: layoutNumber,
            }
        });
    }
    showConfigureTab = (rowIndex, columnIndex, tabIndex) => {
        this.setState({
          TabConfigDialogOpen: true,
        });
    }
    saveTabConfigurations = (tabConfiguration) => {
        const rowIndex = tabConfiguration.rowIndex;
        const columnIndex = tabConfiguration.columnIndex;
        const tabIndex = tabConfiguration.tabIndex;
        const tabTitle = tabConfiguration.tabTitle;
        let updatedLayout = this.state.layout;
        updatedLayout.rows[rowIndex].columns[columnIndex].tabs[tabIndex].title = tabTitle;
        switch (tabConfiguration.layoutNumber) {
            case 1:
                updatedLayout.rows[rowIndex].columns[columnIndex].tabs[tabIndex].widgetSizes = [{height: '30%'}, {height: '70%'}];
                while (updatedLayout.rows[rowIndex].columns[columnIndex].tabs[tabIndex].widgets.length > 2) {
                    updatedLayout = removeWidget(updatedLayout, rowIndex, columnIndex, tabIndex, 2);
                }
                break;
            case 2:
                updatedLayout.rows[rowIndex].columns[columnIndex].tabs[tabIndex].widgetSizes = [{height: '70%'}, {height: '30%'}];
                while (updatedLayout.rows[rowIndex].columns[columnIndex].tabs[tabIndex].widgets.length > 2) {
                    updatedLayout = removeWidget(updatedLayout, rowIndex, columnIndex, tabIndex, 2);
                }
                break;
            case 3:
                updatedLayout.rows[rowIndex].columns[columnIndex].tabs[tabIndex].widgetSizes = [];
                while (updatedLayout.rows[rowIndex].columns[columnIndex].tabs[tabIndex].widgets.length > 3) {
                    updatedLayout = removeWidget(updatedLayout, rowIndex, columnIndex, tabIndex, 3);
                }
                break;
            case 4:
                updatedLayout.rows[rowIndex].columns[columnIndex].tabs[tabIndex].widgetSizes = [{height: '100%'}];
                while (updatedLayout.rows[rowIndex].columns[columnIndex].tabs[tabIndex].widgets.length > 1) {
                    updatedLayout = removeWidget(updatedLayout, rowIndex, columnIndex, tabIndex, 1);
                }
                break;
            default:
                updatedLayout.rows[rowIndex].columns[columnIndex].tabs[tabIndex].widgetSizes = [];
        }
        this.setState({
            layout: updatedLayout,
            TabConfigDialogOpen: false,
                saved: false,
        });
        console.log("Saved Tab, ", tabConfiguration);
    }
    hideTabConfigDialog = () => {
        this.setState({
            TabConfigDialogOpen: false
        });
    }
    /**
     * When a widget is removed, the layout should be set again.
     */
    onRemove = ( layout ) => {
        this.setState( {
            layout: layout,
            saved: false,
        } )
    }
    /**
     * Adds new widgget.
     */
    onAdd = ( layout, rowIndex, columnIndex, tabIndex ) => {
        // Open the AddWidget dialog by seting the 'addWidgetDialogOpen' to true.
        // Also preserve the details such as the layout, rowIndex, and columnIndex  in 'addWidgetOptions'.
        //  This will be used later when user picks a widget to add.
        this.setState( {
            saved: false,
            addWidgetDialogOpen: true,
            addWidgetOptions: {
                layout,
                rowIndex,
                columnIndex,
                tabIndex,
            },
        } )
    }
    /**
     * When a widget moved, this will be called. Layout should be given back.
     */
    onMove = ( layout ) => {
        this.setState( {
            saved: false,
            layout: layout,
        } )
    }
    /**
     * This will be called when user tries to close the modal dialog.
     */
    onRequestClose = ( ) => {
        this.setState( {
            addWidgetDialogOpen: false,
        } )
    }
    showWidgetConfigDialog = ( id ) => {
        this.setState( {
            widgetConfigDialogOpen: true,
            configWidgetId: id
        } )
    }
    closeWidgetConfigDialog = ( id, config ) => {
        this.setState( {
            widgetConfigDialogOpen: false
        } )
    }
    updateWidget = ( widget, config ) => {
        const widgets = this.state.widgets
        if ( widget ) {
            widgets[ widget.id ].title = config.title
            widgets[ widget.id ].props.config = config.widgetConfig
        }
        this.setState( {saved: false, widgets, widgetConfigDialogOpen: false } )
    }
    onHeaderChanged = () => {
        this.setState({saved: false})
    }
    render( ) {
        let {
            addWidgetDialogOpen,
            widgets,
            widgetConfigDialogOpen,
            TabConfigDialogOpen,
            configWidgetId,
            editable,
            title,
            abstract,
            isNew,
            saved,
            isOwner,
            layout,
            tabConfiguration,
        } = this.state
        return (
            <Container>
                <SweetAlert
                    show={this.state.showRemoveWidgetAlert}
                    title="Tab Already contains widgets!"
                    text="Please remove all the widgets before you can remove the tab"
                    onConfirm={() => this.setState({ showRemoveWidgetAlert: false })}
                />
        <AddWidgetDialog widgets={widgets} isOpen={addWidgetDialogOpen} onRequestClose={this.onRequestClose} onWidgetSelect={this.handleWidgetSelection} />
        <WidgetConfigDialog isOpen={widgetConfigDialogOpen} widgetId={configWidgetId} />
        <TabConfigDialog isOpen={TabConfigDialogOpen} tabConfiguration={this.state.tabConfiguration} saveTabConfigurations={this.saveTabConfigurations} hideTabConfigDialog={this.hideTabConfigDialog}/>
        <Header editable={editable} title={title} abstract={abstract} ref="header" onChange={this.onHeaderChanged}/>
        <Toolbar isNew={isNew} editable={editable} saved={saved} isOwner={isOwner} />
        <DazzleDashboard
          frameComponent={CustomFrame}
          onRemove={this.onRemove}
          layout={layout}
          widgets={widgets}
          editable={editable}
          onAdd={this.onAdd}
          onMove={this.onMove}
          addWidgetComponentText="Add New Widget"
          onRemoveTab={this.onRemoveTab}
          onAddTab={this.onAddTab}
          onConfigureTab={this.onConfigureTab}
        />

      </Container>
        )
    }

    save =( ) => {
        this.setState({saved: true})
    }
    /**
     * Toggeles edit mode in dashboard.
     */
    toggleEdit = ( ) => {
        this.setState( {
            editable: !this.state.editable,
        } )
    }
    getNewId( ) {
        var newId = "w_" + ( widgetId++ )
        if ( this.state.widgets[ newId ] ) return this.getNewId( )
        return newId
    }
    /**
     * When user selects a widget from the modal dialog, this will be called.
     * By calling the 'addWidget' method, the widget could be added to the previous requested location.
     */
    handleWidgetSelection = ( widgetType ) => {
        var id = this.getNewId( )
        const ref = ( w ) => {
            if ( w ) {
                this.widgets[ id ] = w
                w.id = id
            }
        }
        this.state.widgets[ id ] = {
            title: widgetType.displayName || widgetType.name,
            type: widgetType,
            props: { id, ref, config: {}, isNew: true }
        }
        this.setState( {
            widgets: this.state.widgets
        } )
        const { layout, rowIndex, columnIndex, tabIndex } = this.state.addWidgetOptions
        /**
         * 'AddWidget' method gives you the new layout.
         */
        this.setState( {
            layout: addWidget( layout, rowIndex, columnIndex, tabIndex, id ),
            addWidgetDialogOpen: false,
        } , /*this.configManager.editWidgetConfig(id)*/)
        // Close the dialogbox
        // this.onRequestClose( )
    }
}
Dashboard.childContextTypes = {
    configManager: PropTypes.instanceOf( ConfigManager )
}
Dashboard.widgetsClasses = {}
Dashboard.registerWidget = function ( type ) {
    Dashboard.widgetsClasses[ type.name ] = type
}
export default Dashboard
