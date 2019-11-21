import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadData } from './actions';
import './scss/style.scss';

import data from './data.json';

import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import RegLog from './components/RegLog';
import ProductsList from './components/ProductsList';
import CategoriesBody from './components/CategoriesBody';
import NotFound from './components/NotFound';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData(data));
  }, [dispatch]);

  //TODO: Recode search mechanism to use url params instead of props for search string

  return (
    <Router>
      <div className='app'>
        <Header />
        <CategoriesBody />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/reglog' component={RegLog} />
          <Route exact path='/reglog/:enter' component={RegLog} />
          <Route exact path='/products' component={ProductsList} />
          <Route exact path='/products/:category' component={ProductsList} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
