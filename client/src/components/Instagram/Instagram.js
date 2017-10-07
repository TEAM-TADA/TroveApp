import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as igActions from '../../actions/igActions'

const authUrl = 'https://api.instagram.com/oauth/authorize/?client_id=7c000611357a488ab02d7afc86b47909&redirect_uri=http://localhost:3000/igfeed&response_type=token'

class Instagram extends Component {
  constructor() {
    super(); 
    this.state = {
      token: ''
    }
  }
  
  render() {
    if (this.state.token === '') {
      return (
        <div className='item-btn'>
          <button className='btn btn-block item-btn-color' 
          onClick={() => {
            window.location.assign(authUrl);
          }}
          type="button"
        >Log into Instagram</button>
      </div>
      )
    } else {
      return (
        <div>
        </div>
      )
    }
  }
}



const igState = (store) => {
  return {
    feed: store.Instagram.token
  }
};

const igDispatch = (dispatch) => {
  return {
    igActions: bindActionCreators(igActions, dispatch)
  }
};

export default connect(igState, igDispatch)(Instagram);

