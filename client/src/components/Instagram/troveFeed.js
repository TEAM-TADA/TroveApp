import React from 'react'
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

// import * as igActions from '../../actions/igActions'

const TroveFeed = (props) => {
  console.log(props.selected);
  return (
    <div>
      <h3>Your Trove feed</h3>
      <div>
        {props.selected.map(src => {
           return <img src={src}/>
        })}
      </div>
      <Link to={'/igfeed'}>
        <button className='btn btn-block item-btn-color' 
          type="button"
        >Return to Instagram
        </button>
      </Link>
    </div>
  )
}

const igState = (store) => {
  return {
    selected: store.Instagram.selected
  };
};

// const igDispatch = (dispatch) => {
//   return {
//     igActions: bindActionCreators(igActions, dispatch)
//   }
// }

export default connect(igState, null)(TroveFeed);

