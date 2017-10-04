import firebase, { auth } from '../firebase.js';

export const emailLogin = (email, pw) => {
  return function(dispatch) {    
    auth.signInWithEmailAndPassword(email, pw)
    .then((result) => {
      console.log('logged in')
      axios.get(`/api/user/${email}`)
        .then(({data}) => {
          localStorage.setItem('authenticated', true),
          localStorage.setItem('user', result),
          localStorage.setItem('sqlUser', data)
          // not sure what the payload should actually be here.
          dispatch({type: 'USER_LOGIN_FULFILLED', payload: result.email});
          // what's home?
          dispatch(push('/'));
        })
        .catch(function(error) {
          alert(error.message);        
          dispatch({type: 'USER_LOGIN_REJECTED', payload: error.message});
        });
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

export const emailSignup = (email, pw) => {
  auth.createUserWithEmailAndPassword(newEmail, pw)
  .then((result) => {
    axios.post('/api/user', {
      userName: newName,
      userEmail: newEmail
    })
    .then(({data}) => {
      localStorage.setItem('authenticated', true),
      localStorage.setItem('user', result),
      localStorage.setItem('sqlUser', data)
      alert('Account successfully created!')
      // not sure what the payload should actually be here.
      dispatch({type: 'USER_LOGIN_FULFILLED', payload: result.email});
      // what's home?
      dispatch(push('/'));
    })
    .catch(err => {
      alert(err.message);
      dispatch({type: 'USER_LOGIN_REJECTED', payload: error.message});
    })
  })
  .catch(err => {
    alert(err.message);
    dispatch({type: 'USER_LOGIN_REJECTED', payload: error.message});
  })
}
