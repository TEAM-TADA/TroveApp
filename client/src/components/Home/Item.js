import React, { Component } from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import moment from 'moment'
import io from 'socket.io-client';

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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.actions.fetchDates(this.props.location.params.itemInfo);
    this.props.actions.fetchUser(this.props.location.params.itemInfo);
    this.props.userInfo(this.props.location.params.itemInfo.rentee_id);
    console.log('made it to items')
    console.log('ITEM PROPS:', this.props);
  }
  // componentWillMount() {
  //   console.log('ITEM PROPS:', this.props);
  // }
  handleSubmit (event) {
    // event.preventDefault();
    console.log('ROOM ID', this.props.match.params.item_id);
    // this.socket.emit('subscribe', this.props.match.params.item_id.toString());
  }
  // componentWillUpdate() {
  //   console.log(this.props.owner);
  // }

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
    let allTags = this.props.location.params.itemInfo.tag;
    
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
    console.log('PROPS: ', this.props)
    
    return (
      <div className='row'>
          <div className='col-md-5 item-image-section'>
            <img src={this.props.location.params.itemInfo.image} />
          </div>
          <div className='col-md-5 item-info-section'>
            <div className='item-brand'>
              <span> {this.props.location.params.itemInfo.brand} </span>
            </div>
            <div className='item-title'>
              <span> {this.props.location.params.itemInfo.itemname} </span>
            </div>
            <Link className='item-user' to='/userwardrobe' onClick={
              () => {
                // TO DO
              }
            }>
              By: {this.props.location.params.itemInfo.User.userName}
            </Link>
            <Link to={`/chat/${this.props.location.params.itemInfo.id}`}>
              <button onClick={this.handleSubmit}>Message {this.props.location.params.itemInfo.User.userName} about {this.props.location.params.itemInfo.id}</button>
            </Link>
            <hr className="col-md-12"></hr>
            <div className='item-price'>
              <span className='line-through list-price-retail'> ${this.props.location.params.itemInfo.price} </span>
              <span> ${Math.floor(this.props.location.params.itemInfo.price * 0.07)} </span>
            </div>
            <div className='item-size'>
              <span> {this.props.location.params.itemInfo.size} </span>
            </div>
            
            <div className='item-calendar'>
              <DateRangePicker
                isDayBlocked={isDayBlocked}
                daySize={this.props.daySize}
                minimumNights={this.props.minimumNights}
                startDate={this.props.startDate} 
                endDate={this.props.endDate} 
                onDatesChange={({startDate, endDate}) => this.props.actions.dateChange({startDate, endDate})} 
                focusedInput={this.props.focusedInput} 
                onFocusChange={({focusedInput}) => this.props.actions.focusChange({ focusedInput })}
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
    startDate: store.Item.startDate,
    endDate: store.Item.endDate,
    focusedInput: null,
    minimumNights: store.Item.minimumNights,
    daySize: store.Item.daySize,
    itemInfo: store.Item.itemInfo,
    userInfo: store.Item.checkUser,
    user: '',
    owner: store.Item.owner,
    blockedDates: []
  }
};

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  }
};


export default connect(mapState, mapDispatch)(Item);