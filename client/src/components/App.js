import React, { Component } from 'react';
import { HashRouter, Router, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import Men from './Men/Men';
import Women from './Women/Women';
import Login from './Login';
import Footer from './Footer';
import Dashboard from './Dashboard/Dashboard';
import Wardrobe from './Dashboard/Wardrobe';
import firebase, {auth} from '../firebase';
import Item from './Home/Item';
import SearchResult from './Search/SearchResult';
import UserWardrobe from './UserWardrobe/UserWardrobe';
import Chat from './chat/chat';
import Instagram from './Instagram/Instagram'
import IgFeed from './Instagram/IgFeed'

import * as cartActions from '../actions/cartActions';
import * as itemActions from '../actions/itemsAction';
import * as igActions from '../actions/igActions'

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.itemActions.fetchItems();
    auth.onAuthStateChanged((user) => {
      if(!user) {
        console.log('not logged in')
      }
    })
  }



  render() {
    const { itemActions, cartActions, history } = this.props;

    return (
      <Router history={history}>
        <div>
          <div>
            <NavBar />
          </div>
          <div onClick={() => cartActions.hideCart()}>
          <Switch>
            <Route exact path='/' component={() => (
              <Home />)} />
            <Route exact path='/men' component={() => (
              <Men />)} />
            <Route exact path='/women' component={() => (
              <Women />)} />
            <Route exact path='/instagram' component={() => (
              <Instagram/>)} />
            <Route exact path='/igfeed' component={() => (<IgFeed />)} />
            <Route exact path='/account' component={() => (<Dashboard history={history} />)} />
            <Route exact path='/wardrobe' component={() => (<Dashboard history={history} />)} />
            <Route exact path='/archive' component={() => (<Dashboard history={history} />)} />
            <Route exact path='/login' component={() => (<Login />)} />
            <Route exact path='/item/:item_id' component={Item} />
            <Route exact path='/search' component={() => (<SearchResult results={results} addToCart={cartActions.addToCart}/>)} />
            <Route exact path='/userwardrobe' component={() => (<UserWardrobe />)} />
            <Route exact path='/chat' component={() => (<Chat />)} />
            <Route render={function() {
								return (
                  <div className='fourofour-section'>
                    <p className='fourofour-status'>404</p>
                    <p className='fourofour-description'>PAGE NOT FOUND!</p>
                  </div>
                  )
							}} />
          </Switch>
          </div>
          <div onClick={() => cartActions.hideCart()}>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}


const appDispatch = (dispatch) => {
  return {
    itemActions: bindActionCreators(itemActions, dispatch),
    cartActions: bindActionCreators(cartActions, dispatch),
    igActions: bindActionCreators(igActions, dispatch)
  };
};

export default connect(null, appDispatch)(App);