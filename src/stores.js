import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { categMenu, loggedReducer } from './reducers';

const reducers = combineReducers({ categories: categMenu, logged: loggedReducer });

const store = createStore(reducers, composeWithDevTools());

export default store;
