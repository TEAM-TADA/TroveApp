import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import * as igActions from '../../actions/igActions'


class IgImage extends Component {
  constructor() {
    super(); 
    this.state = {
      isSelected: false,
      selected: []
    }
  }

  select() {
    if (!this.state.isSelected) {
      this.setState({isSelected: !this.state.isSelected});
      this.state.selected.push(this.props.src);
    }
    if (this.state.isSelected) {
      this.setState({isSelected: !this.state.isSelected});
      this.state.selected.splice(this.state.selected.indexOf(this.props.src), 1);
    }
    console.log('selected images', this.state.selected);
  }

  handleSubmit() {
    this.props.igActions.submitPhotos(selected);
  }

  render() {
    return (
      <div>
        <img 
          src={this.props.src}
          style={this.state.isSelected ? {border: '1px solid #021a40'} : {border: 'none'}}
          onClick={this.select.bind(this)}
        />
      </div>
    )
  }
 }

// const igState = (store) => {
//   return {
//     token: store.Instagram.token,
//     feed: store.Instagram.feed
//   };
// };
// 
const igDispatch = (dispatch) => {
  return {
    igActions: bindActionCreators(igActions, dispatch)
  }
}

export default connect(null, igDispatch)(IgImage);



