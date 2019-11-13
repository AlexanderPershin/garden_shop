import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './scss/style.scss';

import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import RegLog from './components/RegLog';
import ProductsList from './components/ProductsList';
import NotFound from './components/NotFound';

const App = () => {
	return (
		<Router>
			<div className='app'>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/cart' component={Cart} />
					<Route exact path='/reglog' component={RegLog} />
					<Route exact path='/products' component={ProductsList} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
