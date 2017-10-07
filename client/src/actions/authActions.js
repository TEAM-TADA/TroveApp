import firebase, { auth, googleProvider } from '../firebase.js';
import { push } from 'react-router-redux';
import axios from 'axios';

export const emailLogin = (email, pw) => {
  return function(dispatch) {    
    auth.signInWithEmailAndPassword(email, pw)
    .then((result) => {
      console.log('logged in')
      axios.get(`/api/user/${email}`)
        .then(({data}) => {
          localStorage.setItem('authenticated', true);
          localStorage.setItem('user', email);
          localStorage.setItem('sqlUser', data);
          console.log("this is the email: ", email);
          // not sure what the payload should actually be here.
          dispatch({type: 'USER_LOGIN_FULFILLED', payload: email});
          // what's home?
          dispatch(push('/'));
        })
        .catch(function(error) {
          alert('main? ', error.message);        
          dispatch({type: 'USER_LOGIN_REJECTED', payload: error.message});
        });
    });
  };
};

export const googleLogin = () => {
  return function(dispatch) {    
    auth.signInWithPopup(googleProvider)
        .then(data => {
          localStorage.setItem('authenticated', true);
          localStorage.setItem('user', data.user.email);
          // console.log("this is the email: ", localStorage.user);
          dispatch({type: 'USER_LOGIN_FULFILLED', payload: data.user.email});
        })
        .then(() => {
          axios.get(`/api/user/${localStorage.user}`)
        })
        .then(data => {
          localStorage.setItem('sqlUser', data)  
          dispatch(push('/'));
            })
            .catch((error)=> {
              console.log('Axios Error: ', error)
            })
        .catch(function(error) {
          alert('main? ', error.message);        
          dispatch({type: 'USER_LOGIN_REJECTED', payload: error.message});
        });
  };
};

export const googleSignup = () => {
  return function(dispatch) {    
    auth.signInWithPopup(googleProvider)
        .then(data => {
          console.log(data);
          let name = data.user.displayname || data.user.email;
          localStorage.setItem('authenticated', true);
          localStorage.setItem('user', data.user.email);
          localStorage.setItem('name', name);
          // console.log("this is the email: ", email);
          dispatch({type: 'USER_LOGIN_FULFILLED', payload: data.user.email});
        })
        .then(() => {
          axios.post('/api/user', {
            userName: localStorage.name,
            userEmail: localStorage.email
          })          
        })
        .then(data => {
          localStorage.setItem('sqlUser', data) 
          dispatch(push('/'));
              console.log(localStorage);             
            })
            .catch((error)=> {
              console.log('Axios Error: ', error)
            })
        .catch(function(error) {
          alert('main? ', error.message);        
          dispatch({type: 'USER_LOGIN_REJECTED', payload: error.message});
        });
  };
};

export const logout = () => {
    auth.signOut()
      .then(() => {
        console.log('signed out')
        localStorage.removeItem('authenticated')
        localStorage.removeItem('user')
        localStorage.removeItem('sqlUser')
          //cart: localStorage.setItem('cart', JSON.stringify([]))
          dispatch({type: 'USER_LOGOUT_FULFILLED'});
          // where should I go?
          dispatch(push('/'));
          location.reload();
        })
      .catch(function(error) {
        alert(error.message);        
        dispatch({type: 'USER_LOGOUT_REJECTED', payload: error.message});
      });
};

export const emailSignup = (email, pw, name) => {
  console.log('email signup')
  auth.createUserWithEmailAndPassword(email, pw)
  .then((result) => {
    console.log('axios post');
    axios.post('/api/user', {
      userName: name,
      userEmail: newEmail
    })
    .then(({data}) => {
      localStorage.setItem('authenticated', true),
      localStorage.setItem('username', result),
      localStorage.setItem('sqlUser', data)
      alert('Account successfully created!')
      console.log(localStorage);
      // not sure what the payload should actually be here.
      dispatch({type: 'USER_LOGIN_FULFILLED', payload: result.email});
      // what's home?
      dispatch(push('/'));
    })
    .catch(err => {
      alert('axios! ', err.message);
      dispatch({type: 'USER_LOGIN_REJECTED', payload: error.message});
    })
  })
  .catch(err => {
    alert(err.message);
    dispatch({type: 'USER_LOGIN_REJECTED', payload: error.message});
  })
}
