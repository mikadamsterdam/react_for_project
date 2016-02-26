import './stylesheets/app.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import App from './App';
import Project from './Project';
import ProjectBoard from './ProjectBoard';

ReactDOM.render((

 <Router history={browserHistory}>
 <Route path="/" component={App}>
   <IndexRoute component={ProjectBoard} />
    <Route path="/projects/:projectId" component={Project}/>

 </Route>
</Router>

), document.getElementById('root'));
