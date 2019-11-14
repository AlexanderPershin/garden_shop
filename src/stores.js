import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { categMenu, loggedReducer, cartContent } from './reducers';

const reducers = combineReducers({ categories: categMenu, logged: loggedReducer, cart: cartContent });

const store = createStore(reducers, composeWithDevTools());

export default store;
