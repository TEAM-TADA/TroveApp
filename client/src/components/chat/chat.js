import React, { Component } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as chatActions from '../../actions/chatActions';

class Chat extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.socket = io('/');
    this.socket.emit('subscribe', this.props.match.params.value.toString());    
    this.socket.on('message', message => {
      console.log('socket received message', message);
      this.props.actions.messageChange([...this.props.log, message]);
      // this.props.actions.messageChange(Object.assign(log, ));
    })
  }

  handleSubmit (event) {
    event.preventDefault();
    const text = event.target.value;
    if (event.key == 'Enter' && text) {
      console.log('props:', this.props);
      console.log('MESSAGE SUBMITTED: this', this);
      console.log('PROPS USER: ', this.props.user);
      const message = {
        text: text,
        from: this.props.user,
        room: this.props.match.params.value.toString()
      }
      // console.log('PROPS:', this.props);
      this.props.actions.messageChange([...this.props.log, message]);
      console.log('LOGGED:', this.props.log);
      this.socket.emit('message', message);
      event.target.value = '';
    }
  }

  render() {
    const messages = this.props.log ? this.props.log.map((message, index) => {
      return ( 
          <li key={index}><b>{message.from}</b>: {message.text}</li> 
      )
    }) : null;


    // const messages = this.props.log.filter(message => message.room == this.props.match.params.value.toString());
    // console.log(messages);
    // const messages2 = messages.map((message, index) => {
    //   return( <li key={index}><b>{message.from}</b>: {message.text}</li>)
    // })
    // console.log(messages2);
    return (
      <div>
        <input type='text' placeholder='Enter a message...' onKeyUp={this.handleSubmit} />
        {messages}
      </div>
    )
  }

  
}

const mapState = (store) => {
  return {
    log: store.Chat.log,
    user: store.Login.username,
  }
};

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(chatActions, dispatch)
  }
};

export default connect(mapState, mapDispatch)(Chat);