import React from 'react';
import {Router, Route, IndexRoute, Redirect, Link, IndexRedirect, browserHistory} from 'react-router';
import { render } from 'react-dom'
import NavBar from './modules/NavBar'
import Content from './modules/Content'
import Master from './master.js';
var AppRoute = require('./app-router.js');

render((
 <Router history = {browserHistory}>
			{AppRoute}
</Router>
), document.getElementById('app'))
