import React, { Component } from 'react';

class WardrobeItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { passItem } = this.props;
    
    return (
      <div className='col-md-3 wow fadeIn animated'>
          <div className='list-section-wrap'>
            <div className='list-section-picture'>
                <img src={passItem.image} ></img>
            </div>
            <div className='list-info'>
              <div>
                {passItem.brand}
              </div>
              <div className='list-item-name'>
                {passItem.itemname}
              </div>
               <div>
                <span className='list-price-retail line-through'> ${passItem.price} </span>
                <span className='list-price-rental'> ${Math.floor(passItem.price * 0.07)} </span>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default WardrobeItem;