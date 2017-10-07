import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
// import io from 'socket.io-client'

class HomeFeatureItem extends Component {
  constructor(props) {
    super(props);
  }
  // componentDidMount() {
  //   this.socket = io('/')
  // }

  render() {
    const { featureItem } = this.props;
    return (
      <div className='col-md-4 wow fadeIn animated'>
        <Link to={{pathname: `/item/${featureItem.id}`, params: {itemInfo: featureItem}}}>
          <div className='feature-section-wrap'>
            <div className='feature-section-picture'>
              <img src={featureItem.image}></img>
            </div>
            <div className='feature-info'>
              <div>
                {featureItem.brand}
              </div>
              <div>
                {featureItem.itemname}
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default HomeFeatureItem;