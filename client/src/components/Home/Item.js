import React, { Component } from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import moment from 'moment'

import * as itemActions from '../../actions/itemsAction';

class Item extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   startDate: null,
    //   endDate: null,
    //   focusedInput: null,
    //   minimumNights: 7,
    //   daySize: 30,
    //   itemInfo: this.props.location.params.itemInfo,
    //   userInfo: this.props.location.params.checkUser,
    //   owner: '',
    //   blockedDates: []
    // }
    // this.fetchUser = this.fetchUser.bind(this);
  }

  componentDidMount() {
    this.props.actions.fetchDates(this.props.itemInfo);
    this.props.actions.fetchUser(this.props.itemInfo);
    this.props.userInfo(this.props.itemInfo.rentee_id);
  }

  // fetchUser() {
  //   axios.get(`/api/user/owner/${this.state.itemInfo.rentee_id}`)
  //   .then(user => {
  //     this.setState({ owner: user.data.userName });
  //   })
  //   .catch(err => {
  //     console.log('User fetch err:', err);
  //   })
  // }
  
  // fetchDates() {
  //   var blockedDates = [];
  //   axios.get(`/api/renttrx/item/${this.state.itemInfo.id}`)
  //   .then(({data}) => data.forEach(item => {
  //   //   console.log('items', item)
  //   // }))
  //     blockedDates.push(item.startDate);
  //     blockedDates.push(item.endDate);
  //   }))
  //   .then(() => {
  //     this.setState({
  //       blockedDates: blockedDates
  //     })
  //   })
  //   .catch(err => {
  //     console.log('an error occured', err);
  //   })
  // }

  render() {
    let allTags = JSON.parse(this.props.itemInfo.tag);
    
    let tags = allTags.map((tag, i) => {
      return (
        <li key={i}><a href="#"> {tag} </a></li>
      )
    });

    let badDates = this.props.blockedDates;
    const isDayBlocked = function(day) {
      for (var i = 0; i < badDates.length; i += 2) {
        if (moment(day).isBetween(badDates[i], badDates[i + 1], 'day', '[]')) {
          return true;
        }
      }
      return false;
    }

    return (
        <div className='row'>
          <div className='col-md-5 item-image-section'>
            <img src={this.props.itemInfo.image} />
          </div>
          <div className='col-md-5 item-info-section'>
            <div className='item-brand'>
              <span> {this.props.itemInfo.brand} </span>
            </div>
            <div className='item-title'>
              <span> {this.props.itemInfo.itemname} </span>
            </div>
            <Link className='item-user' to='/userwardrobe'>
              By: {this.props.owner}
            </Link>
            <hr className="col-md-12"></hr>
            <div className='item-price'>
              <span className='line-through list-price-retail'> ${this.props.itemInfo.price} </span>
              <span> ${Math.floor(this.props.itemInfo.price * 0.07)} </span>
            </div>
            <div className='item-size'>
              <span> {this.props.itemInfo.size} </span>
            </div>
            
            <div className='item-calendar'>
              <DateRangePicker
                isDayBlocked={isDayBlocked}
                daySize={this.props.daySize}
                minimumNights={this.props.minimumNights}
                startDate={this.props.startDate} 
                endDate={this.props.endDate} 
                onDatesChange={this.props.actions.dateChange({startDate, endDate})} 
                focusedInput={this.props.focusedInput} 
                onFocusChange={this.props.actions.focusChange({ focusedInput })}
                />
            </div>
            <ul className='item-tags'>
              {/* make this look pretty */}
              {tags} 
            </ul>
            <div className='item-btn'>
              <button className='btn btn-block item-btn-color' 
                onClick={() => {
                  if(this.props.startDate === null || this.props.endDate === null) {
                    for(let i = 0; i < cart.length; i++) {
                      if(item.id === cart[i].id) {
                        return alert('You already have this item in your cart');
                      }
                    }
                    actions.addToCart(item, this.props.startDate, this.props.endDate);
                  }
                }}
                type="button"
              >Add to Cart</button>
            </div>
          </div>
        </div>
    )
  }
}

const mapState = (store) => {
  return {
    startDate: store.item.startDate,
    endDate: store.item.endDate,
    focusedInput: store.item.focusedInput,
    minimumNights: store.item.minimumNights,
    daySize: store.item.daySize,
    itemInfo: store.item.itemInfo,
    userInfo: store.item.checkUser,
    owner: '',
    blockedDates: []
  }
};

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  }
};


export default connect(mapState, mapDispatch)(Item);