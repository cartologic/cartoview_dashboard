import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Dashboard from './components/Dashboard.jsx';
import BaseWidget from './components/BaseWidget.jsx';


global.Dashboard  = Dashboard;
global.BaseWidget = BaseWidget;
global.React = React;
global.ReactDOM = ReactDOM;
