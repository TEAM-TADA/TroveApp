import React, { Component } from 'react';
import { BrowserRouter,Redirect, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../actions/authActions';


class Login extends Component {

  constructor(props) {
    super(props)
    this.login = this.login.bind(this);
  }

    //Add login event
    login() {
      const email = document.getElementById('txtEmail').value;
      const pw = document.getElementById('txtPassword').value;
      // const userData = null;
      // const authDomain = firebase.auth();
      this.props.actions.emailLogin(email, pw)

      document.getElementById('txtEmail').value = '';
      document.getElementById('txtPassword').value = '';
    }
  
    googleLogin() {
      this.props.actions.googleLogin();
    }
  
    //Sign up
    signUp () {
      const newName = document.getElementById('newName').value;
      const newEmail = document.getElementById('newEmail').value;
      const newPw = document.getElementById('newPw').value;
      const confPw = document.getElementById('confPw').value;
  
      if (newPw === confPw) {
        this.props.actions.emailSignup(newEmail, newPw, newName)
        // post username to database?        
      } else {
        alert('Please make sure both passwords match');
      }
    }

  render() {
    // Redirect if authenticated
    if(this.props.authenticated) {
      return <Redirect to='/' />;
    }
    return (
      <div className='signin-section'>
        <div className='container'>
          <div className='log-reg-section'>
            <span>SIGN IN</span>
          </div>
          <div className='row'>
            <div className='col-md-5 signin'>
              <span className='log-reg-title'>Returning Customer</span>
              <br></br>
              <div className='signin-input-area-title'>
                <span className='signin-input-title'>EMAIL ADDRESS*</span>
                <input id="txtEmail" className="form-control signin-input" type="text"></input>
              </div>
              <div className='signin-input-area-title'>
                <span className='signin-input-title'>PASSWORD*</span>
                <input id="txtPassword" className="form-control signin-input" type="password"></input>
              </div>
              <span className='signin-input-title'>Forget your password?</span>
              <br></br>
              <div className='signin-input-area-title'>
                <button id="btnLogin" className="btn signin-btn-color btn-lg btn-block" type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  this.login()}}
                >LOGIN</button>
                <button id="btnLogin" className="btn google-btn-color btn-lg btn-block" type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  this.props.actions.googleLogin()}}
                >LOGIN WITH GOOGLE</button>
              </div>
            </div>
            <div className='col-md-5 register'>
              <span className='log-reg-title'>New Customer</span>
              <br></br>
              <div className='signin-input-area-title'>
                <span className='signin-input-title'>NAME*</span>
                <input id="newName" className="form-control signin-input" type="text"></input>
              </div>
              <div className='signin-input-area-title'>
                <span className='signin-input-title'>EMAIL ADDRESS*</span>
                <input id="newEmail" className="form-control signin-input" type="text"></input>
              </div>
              <div className='signin-input-area-title'>
                <span className='signin-input-title'>PASSWORD*</span>
                <input id="newPw" className="form-control signin-input" type="password"></input>
              </div>
              <div className='signin-input-area-title'>
                <span className='signin-input-title'>CONFIRM PASSWORD*</span>
                <input id="confPw" className="form-control signin-input" type="password"></input>
              </div>
              <span className='signin-input-title'>By registering your details you agree to our Terms and Conditions and privacy and cookie policy</span>
              <br></br>
              <div className='signin-input-area-title'>
                <button 
                onClick={(e) => {
                  e.preventDefault();
                  this.signUp()}}
                className="btn signin-btn-color btn-lg btn-block" type="submit">REGISTER</button>
                <button id="btnLogin" className="btn google-btn-color btn-lg btn-block" type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  this.props.actions.googleSignup()}}
                >SIGNUP WITH GOOGLE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const loginDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
};

export default connect(null, loginDispatch)(Login);