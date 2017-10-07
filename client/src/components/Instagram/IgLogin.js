import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import * as igActions from '../../actions/igActions'

const authUrl = 'https://api.instagram.com/oauth/authorize/?client_id=7c000611357a488ab02d7afc86b47909&redirect_uri=http://localhost:3000/igfeed&response_type=token'

class IgLogin extends Component {
  constructor() {
    super(); 
  }

  componentDidMount() {
    window.location.assign(authUrl);
  }
  
  render() {
    return (
      <div>
    </div>
    )
  }
}



// const igState = (store) => {
//   return {
//     feed: store.Instagram.token
//   }
// };

// const igDispatch = (dispatch) => {
//   return {
//     igActions: bindActionCreators(igActions, dispatch)
//   }
// };

// export default connect(igState, igDispatch)(IgLogin);

export default(IgLogin);

