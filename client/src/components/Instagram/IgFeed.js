import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import * as igActions from '../../actions/igActions'

class IgFeed extends Component {
  constructor() {
    super(); 
  }

  componentDidMount() {
    const token = window.location.href.split('=')[1];
    console.log('type of token', typeof token);
    this.props.igActions.getFeed(token);
    console.log('this is feed', this.props.feed);
  }

  render() {
    return (
      <div>
        {this.props.feed.map(image => (
          <img src={image.images.low_resolution.url}/>
        ))}
      </div>
    )
  }
 }

const igState = (store) => {
  return {
    token: store.Instagram.token,
    feed: store.Instagram.feed
  };
};

const igDispatch = (dispatch) => {
  return {
    igActions: bindActionCreators(igActions, dispatch)
  }
}

export default connect(igState, igDispatch)(IgFeed);

