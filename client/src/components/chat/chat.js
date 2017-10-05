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
    this.socket = io('/')
    this.socket.on('message', message => {
      this.props.actions.messageChange([...this.props.log, message]);
    })
  }

  handleSubmit (event) {
    const text = event.target.value;
    if (event.key == 'Enter' && text) {
      const message = {
        text,
        from: 'Me'
      }
      console.log(this.props);
      this.props.actions.messageChange([...this.props.log, message]);
      this.socket.emit('message', text)
      event.target.value = '';
    }
  }

  render() {
    console.log(this.props.log);
    const messages = this.props.log ? this.props.log.map((message, index) => {
      return (
        <li key={index}><b>{message.from}</b>: {message.text}</li>
      )
    }) : null;
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
  }
};

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(chatActions, dispatch)
  }
};

export default connect(mapState, mapDispatch)(Chat);