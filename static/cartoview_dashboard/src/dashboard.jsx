import "@babel/polyfill/noConflict";

import BaseWidget from './components/BaseWidget.jsx';
import Dashboard from './components/Dashboard.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

global.Dashboard  = Dashboard;
global.BaseWidget = BaseWidget;
global.React = React;
global.ReactDOM = ReactDOM;
