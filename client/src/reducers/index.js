import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import Item from './itemsReducer';
import Dashboard from './dashboardReducers';
import Search from './searchReducer';
import Cart from './cartReducers';
import Login from './authReducers';

const TroveReducer = combineReducers({
  // NavBar,
  // Home,
  Cart,
  Item,
  Dashboard,
  Login,
  Search,
  // UserWardrobe,
  // Footer,
  routing: routerReducer,
});

export default TroveReducer;
