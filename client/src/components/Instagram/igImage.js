import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import * as igActions from '../../actions/igActions'


class IgImage extends Component {
  constructor() {
    super(); 
    this.state = {
      isSelected: false
    }
  }

  render() {
    return (
      <div>
        <img 
          src={this.props.src}
          style={this.state.isSelected ? {border: '1px solid #021a40'} : {border: 'none'}}
          onClick={(e) => {
              e.preventDefault();
              this.props.selectPhoto.call(null, this.props.src, this.state.isSelected);
              this.setState({isSelected: !this.state.isSelected});
            }}
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
// const igDispatch = (dispatch) => {
//   return {
//     igActions: bindActionCreators(igActions, dispatch)
//   }
// }

export default IgImage;



