import ReactDOM from 'react-dom'
import React from 'react'

import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { Router } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk';
import { createLogger as logger } from 'redux-logger';
import promise from 'redux-promise-middleware';

import TroveReducer from './reducers'
import App from './components/App'
import 'react-dates/lib/css/_datepicker.css';
import '../style/style.css'

const history = createHistory();
const middleware = applyMiddleware(promise(), thunk, logger(), routerMiddleware(history));
const store = createStore(TroveReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App history={history}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);




