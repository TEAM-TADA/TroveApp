// This component will display logged in user's account info
// Will also route to other user-specific pages (wardrobe, history)
import React, { Component } from 'react';
import { Router, NavLink, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Wardrobe from './Wardrobe';
import Archive from './Archive';
import AccountInfo from './AccountInfo';
import Loading from '../Loading';

import * as dashboardActions from '../../actions/dashboardActions'; // DELETE THIS IF NOT USING

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, items, history } = this.props;

    return (
      <Router history={history}>
        <div className='dashboard'>
          <div className='col-md-3'>
            <div className='dashboard-wrap my-account-section'>
              <div className='dashboard-title'>
                <span>MY ACCOUNT</span>
              </div>
              <div> 
                <NavLink exact activeClassName="active" className="dashboard-link" to='/account' >
                  Dashboard
                </NavLink>
                <NavLink exact activeClassName="active" className="dashboard-link" to='/wardrobe' >
                  Wardrobe
                </NavLink>
                <NavLink exact activeClassName="active" className="dashboard-link" to='/archive' >
                  Archive
                </NavLink>
              </div>
            </div>
          </div>
          <div className='col-md-9'>
            <div className='dashboard-wrap'>
              <div className='dashboard-title'>
                <span>MY DASHBOARD</span>
              </div>
              <div>
                {!user ? <Loading /> : <Route exact path='/account' component={() => (<AccountInfo />)} /> }
                {!user || !items ? <Loading /> : <Route path='/wardrobe' component={() => (<Wardrobe />)} />}
                {!user ? <Loading /> : <Route exact path='/archive' component={() => (<Archive />)} /> }                  
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

const dashboardState = (store) => {
  return {
    user: this.props.sqlUser, // UPDATE THIS WHEN AUTH-REDUX IS DONE
    items: store.Item.items
  };
};

export default connect(dashboardState, null)(Dashboard);