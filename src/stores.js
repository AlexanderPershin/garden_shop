import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  categMenu,
  loggedReducer,
  cartContent,
  searchReducer,
  productsReducer
} from './reducers';

const reducers = combineReducers({
  categories: categMenu,
  logged: loggedReducer,
  cart: cartContent,
  search: searchReducer,
  products: productsReducer
});

const store = createStore(reducers, composeWithDevTools());

export default store;
