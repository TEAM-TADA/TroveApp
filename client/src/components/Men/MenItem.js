import React, { Component } from 'react';
import Loading from '../../components/Loading';
import { BrowserRouter, Route, Link } from 'react-router-dom';


class MenItem extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.state.previous = this.props.passItem;
    // console.log('Previous:', this.state.previous);
  }

  render() {
    return (
      <div className='col-md-3 wow fadeIn animated'>
        <Link to={{pathname: `/item/${this.props.item.id}`, params: {itemInfo: this.props.item, addToCart: this.props.addToCart, checkUser: this.props.checkUser}}} >
        {/* <Link to={{pathname: `/item/${this.props.item.id}`, params: {itemInfo: this.props.item, addToCart: this.props.addToCart}}} > */}
          <div className='list-section-wrap'>
            <div className='list-section-picture'>
                <img src={this.props.item.image} ></img>
            </div>
            <div className='list-info'>
              <div>
                {this.props.item.brand}
              </div>
              <div className='list-item-name'>
                {this.props.item.itemname}
              </div>
              <div>
                <span className='list-price-retail line-through'> ${this.props.item.price} </span>
                <span className='list-price-rental'> ${Math.floor(this.props.item.price * 0.07)} </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}


export default MenItem;