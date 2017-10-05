import React, { Component } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as chatActions from '../../actions/chatActions';

class Chat extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.socket = io('/')
    this.socket.on('message', message => {
      this.props.actions.messageChange({messages: [...this.state.messages, message]});
    })
  }

  handleSubmit (event) {
    const text = event.target.value;
    if (event.key == 'Enter' && text) {
      const message = {
        text,
        from: 'Me'
      }
      this.props.actions.messageChange({messages: [...this.state.messages, message]});
      this.socket.emit('message', text)
      event.target.value = '';
    }
  }

  render() {
    const messages = this.props.messages.map((message, index) => {
      return <li key={index}><b>{message.from}</b>{message.body}</li>
    })
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
    messages: store.Chat.messages,
  }
};

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(chatActions, dispatch)
  }
};

export default connect(mapState, mapDispatch)(Chat);