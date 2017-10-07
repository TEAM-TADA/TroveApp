import axios from 'axios'
// import { push } from 'react-router-redux'

const authUrl = 'https://api.instagram.com/oauth/authorize/?client_id=7c000611357a488ab02d7afc86b47909&redirect_uri=http://localhost:3000/instagram&response_type=token'
const feedUrl = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='

// export const authenticate = () => {
//   return function(dispatch) {
//     dispatch({type: "AUTHENTICATE_IG_FULFILLED", payload: window.location.href});
//   };
// };

export const getFeed = (token) => {
  return function(dispatch) {
    axios.get('api/instagram/feed', {
    // axios.get(feedUrl + token, {
      params: {
        token: token
      }
    })
      .then((response) => {
        console.log('front end response', response);
        dispatch({type: "FETCH_FEED_FULFILLED", payload: response.data.feed.data, token: token});
        // console.log(response.source);
      })
      .catch(err => {
        dispatch({type: "FETCH_FEED_REJECTED", payload: err});
      });
  };
};

export const refresh = (token) => {
  return function(dispatch) {
    axios.get('/api/instagram/refresh', {
      token: token
    })
    .then((response) => {
      dispatch({type: 'REFRESH_FEED_FUFILLED', payload: response.feed});
      console.log(response.source);
    })
    .catch(err => {
      dispatch({type: 'REFRESH_FEED_REJECTED', payload: err});
    })
  }
}

export const searchTag = (tag, token) => {
  axios.get('/api/instagram/search', {
    tag: tag, 
    token: token
  })
    .then(({ data }) => {
      dispatch({type: "SEARCH_TAG_FULFILLED", payload: data});
    })
    .catch(err => {
      dispatch({type: "SEARCH_TAG_REJECTED", payload: err});
    })
}