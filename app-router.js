import React from 'react';
import {Router, Route, IndexRoute, Redirect, Link, IndexRedirect, browserHistory} from 'react-router';

import Feature from './modules/Feature.js';
import Product from './modules/Product.js';
import User from './modules/User.js';
import Master from './master.js';

var AppRoutes = (
				<Route path='/' component={Master}>
					<Route path='feature' component={Feature}/>
					<Route path='product' component={Product}/>
					<Route path='user' component={User}/>
				</Route>
		)

module.exports = AppRoutes;