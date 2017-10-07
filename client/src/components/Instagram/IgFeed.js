import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import IgImage from './igImage'

import * as igActions from '../../actions/igActions'

class IgFeed extends Component {
  constructor() {
    super(); 
  }

  componentDidMount() {
    const token = window.location.href.split('=')[1];
    this.props.igActions.getFeed(token);
  }


  render() {
    return (
      <div>
        <h3>Select photos from your feed</h3>
        <div className='col-sm-3'>
          {this.props.feed.map(image => (
            <IgImage src={image.images.low_resolution.url} />
          ))}
        </div>
    </div>
    )
  }
 }

const igState = (store) => {
  return {
    token: store.Instagram.token,
    feed: store.Instagram.feed,
    selected: store.Instagram.selected
  };
};

const igDispatch = (dispatch) => {
  return {
    igActions: bindActionCreators(igActions, dispatch)
  }
}

export default connect(igState, igDispatch)(IgFeed);

