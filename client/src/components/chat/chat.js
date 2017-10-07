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
    const messages = this.props.log.filter(message => message.room == this.props.match.params.value.toString());
    console.log(messages);
    const messages2 = messages.map((message, index) => {
      console.log(message.from);
      return( message.from === this.props.user ? <div className="chatSelf" key={index}><b>{message.from}</b>: {message.text}</div> : <div className="chatOther" key={index}><b>{message.from}</b>: {message.text}</div>)
    })
    
    return (
      <div id='bodybox'>
        <div id='container'>
          <h2 id="chatHeader">Chat about item {this.props.match.params.value}</h2>
          <div id='chatborder'>
              <input id="chatbox" type='text' placeholder='Enter a message...' onKeyUp={this.handleSubmit} />
            <div className="chatlog">{messages2} </div>
          </div>
        </div>
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