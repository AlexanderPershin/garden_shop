import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  categMenu,
  loggedReducer,
  searchReducer,
  productsReducer
} from './reducers';

const reducers = combineReducers({
  categories: categMenu,
  logged: loggedReducer,
  search: searchReducer,
  products: productsReducer
});

const store = createStore(reducers, composeWithDevTools());

export default store;
