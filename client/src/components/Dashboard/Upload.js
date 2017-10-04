import React, { Component } from 'react';
import { Modal, ModalManager, Effect } from 'react-dynamic-modal';
import { WithContext as ReactTags } from 'react-tag-input';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as dashboardActions from '../../actions/dashboardActions';

class Upload extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const { user, actions } = this.props;

    const modalStyle = {
      overlay: {
        backgroundColor : 'transparent'
      },
      content: {
        margin: '10% auto',
        borderRadius: '6px',
        width: '500px'
      }
    }
    
    // UPDATE USER VALUE AFTER AUTH REDUX
    let itemToPost = {
      rentee_id: user.username,
      itemname: document.getElementById('UploadInputItemName').value,
      image: document.getElementById('UploadInputIMGurl').value,
      brand: document.getElementById('UploadInputBrand').value,
      price: parseFloat(document.getElementById('UploadInputRetailPrice').value).toFixed(2),
      size: '',
      sex: '',
      tag: [],
      status: 'Available'
    }

    const handleDrag = (item, currPos, newPos) => {
      itemToPost.tag.splice(currPos, 1);
      itemToPost.tag.splice(newPos, 0, item);
    };

    const handleAddition = (tag) => {
      itemToPost.tag.push({
          id: tag.length + 1,
          text: tag
      });
    };
    
    const handleDelete = (i) => {
      itemToPost.tag.splice(i, 1);
    };

    return (
       <Modal onRequestClose={onRequestClose} effect={Effect.SlideFromBottom} style={modalStyle} >
         <div className='upload-section'>
          <div className='upload-input'>
            <input className='form-control' type="text" placeholder="Brand" ref="input" id="UploadInputBrand" />
          </div>
          <div className='input-group upload-input'>
            <input className='form-control' type="text" placeholder="Item Name" ref="input" id="UploadInputItemName" />
          </div>
          <div className='input-group upload-input'>
            <input className='form-control' type="text" placeholder="Retail Price" ref="input" id="UploadInputRetailPrice" />
          </div>
          <div className='input-group upload-input'>
            <input className='form-control' type="text" placeholder="Image URL" ref="input" id="UploadInputIMGurl" />
          </div>
          <div className='upload-input'>
            Size:
            <button className="btn btn-secondary btn-sm upload-btn" type="button"
            onClick = { () => {itemToPost.size = 'Small'}}>S</button>
            <button className="btn btn-secondary btn-sm upload-btn" type="button"
            onClick = { () => {itemToPost.size = 'Medium'}}>M</button>
            <button className="btn btn-secondary btn-sm upload-btn" type="button"
            onClick = { () => {itemToPost.size = 'Large'}}>L</button>
          </div>
          <div className='upload-input'>
            Sex:
            <button className="btn btn-secondary btn-sm upload-btn" type="button"
            onClick = { () => {itemToPost.sex = 'M'}}>M</button>
            <button className="btn btn-secondary btn-sm upload-btn" type="button"
            onClick = { () => {itemToPost.sex = 'F'}}>F</button>
          </div>
          <div className='upload-input tag-input'>
            <ReactTags tags={itemToPost.tag}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                handleDrag={handleDrag} />
          </div>
          <button className="btn wardrobe-btn-color"
            onClick={() => { 
              actions.postItem(itemToPost); 
              ModalManager.close(); 
            }}
          >Upload</button>
        </div>
       </Modal>
    );
  }
}

const uploadState = (store) => {
  return {
    user: this.props.user // UPDATE WHEN AUTH REDUX DONE
  };
};

const uploadDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(dashboardActions, dispatch),
  }
}

export default connect(uploadState, uploadDispatch)(Upload);