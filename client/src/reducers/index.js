import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import Item from './itemsReducer';
import Dashboard from './dashboardReducers';
import Search from './searchReducer';
import Cart from './cartReducers';
<<<<<<< HEAD
import Login from './authReducers';
import Chat from './chatReducers';
=======
import Instagram from './igReducer'
>>>>>>> Set up redis and ig controller.

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
