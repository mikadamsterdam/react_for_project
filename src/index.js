import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './stylesheets/app.scss'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

ReactDOM.render(<App className="container" />, document.getElementById('root'));
