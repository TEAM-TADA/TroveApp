import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import Item from './itemsReducer';
import Dashboard from './dashboardReducers';
import Search from './searchReducer';
import Cart from './cartReducers';
import Login from './authReducers';
import Chat from './chatReducers';
import Instagram from './igReducer';

const TroveReducer = combineReducers({
  // NavBar,
  // Home,
  Cart,
  Chat,
  Item,
  Dashboard,
  Login,
  Search,
  // UserWardrobe,
  // Footer,
  Instagram,
  routing: routerReducer,
});

export default TroveReducer;
