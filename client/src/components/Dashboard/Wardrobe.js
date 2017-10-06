// This component will display logged user's items for rent
import React, { Component } from 'react';
import { Modal, Effect } from 'react-dynamic-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Upload from './Upload';
import WardrobeItem from './WardrobeItem';

class Wardrobe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, items } = this.props;
    return (
      <div>
        <div className='upload-btn-section'>
          <button 
            className="btn wardrobe-btn-color" 
            type="button" 
            onClick={() => {
              ModalManager.open(
                <Upload onRequestClose={() => true} />
              )
            }}
          > Add to Wardrobe 
          </button> 
        </div>
        <div className='row'>
          {items.map(item => 
            { if(item.rentee_id === user.id) {
              return <WardrobeItem passItem={item} key={item.id} /> }
            }
          ).reverse()}
        </div>
      </div>
    );
  }
}

const wardrobeState = (store) => {
  return {
    user: this.props.user, // UPDATE THIS WHEN AUTH REDUX IS DONE
    items: this.Item.items
  };
};

export default connect(wardrobeState, null)(Wardrobe);