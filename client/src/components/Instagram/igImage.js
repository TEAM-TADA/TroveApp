import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'


class IgImage extends Component {
  constructor() {
    super(); 
    this.state = {
      isSelected: false,
      selected: []
    }
  }

  select() {
    this.setState({isSelected: !this.state.isSelected});
    if (this.state.isSelected) {
      this.state.selected.push(this.props.src);
      console.log('selected images', this.state.selected);
    }
    // if (!this.state.isSelected) {
    //   this.state.selected.splice(indexOf(this.props.src), 1);
    //   console.log('selected images', this.state.selected);
    // }
    
  }

  handleSubmit() {
    this.props.igActions.submitPhoto(selected);
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
// const igDispatch = (dispatch) => {
//   return {
//     igActions: bindActionCreators(igActions, dispatch)
//   }
// }

// export default connect(null, igDispatch)(IgImage);

export default IgImage;

