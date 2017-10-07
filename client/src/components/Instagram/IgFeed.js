import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import IgImage from './igImage'

import * as igActions from '../../actions/igActions'

class IgFeed extends Component {
  constructor() {
    super(); 
    this.state = {
      selected: [],
    }
  }

  componentDidMount() {
    const token = window.location.href.split('=')[1];
    this.props.igActions.getFeed(token);
  }

  selectPhoto (imgSrc, isSelected) {
    const { selected } = this.state;

    if (isSelected === false) {
      this.setState({
        selected: [...selected, imgSrc]
      })
    }
    if (isSelected === true) {
      this.setState({
        selected: selected.splice(selected.indexOf(imgSrc), 1)
      })
    }
    console.log('selected photos', this.state.selected);
  }

  handleSubmit() {
    this.props.igActions.submitPhotos(this.state.selected);
  }

  render() {
    // console.log('selected photos from store', this.props.selected);
    return (
      <div>
        <h3>Select photos from your feed</h3>
        <div className='col-sm-3'>
          {this.props.feed.map(image => (
            <IgImage 
              src={image.images.low_resolution.url} 
              selectPhoto={this.selectPhoto.bind(this)}
              isSelected={this.state.isSelected}
            />
          ))}
        </div>
        <Link to={'/trovefeed'}>
            <button className='btn btn-block item-btn-color' 
              onClick={() => {this.handleSubmit()}}
              type="button"
            >Submit photos
          </button>
        </Link>
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

