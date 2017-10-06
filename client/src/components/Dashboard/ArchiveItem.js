import React, { Component } from 'react';
import Loading from '../../components/Loading';
import moment from 'moment';

class ArchiveItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { rentItem } = this.props;
    return (
      <div className='col-md-3 wow fadeIn animated'>
        
          <div className='list-section-wrap'>
            <div className='list-section-picture'>
                <img src={rentItem.image} ></img>
            </div>
            <div className='list-info'>
              <div>
                {rentItem.brand}
              </div>
               <div className='list-item-name'>
                {rentItem.itemname}
              </div>
              <br/>
              <div>
                {moment(rentItem.startDate).format("l")}  -  {moment(rentItem.endDate).format("l")}
              </div>
               <div>
                <span className='list-price-retail line-through'> ${rentItem.price} </span>
                <span className='list-price-rental'> ${Math.floor(rentItem.price * 0.07)} </span>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default ArchiveItem;