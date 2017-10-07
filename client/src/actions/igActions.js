import axios from 'axios'

const authUrl = 'https://api.instagram.com/oauth/authorize/?client_id=7c000611357a488ab02d7afc86b47909&redirect_uri=http://localhost:3000/instagram&response_type=token'
const feedUrl = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='

export const getFeed = (token) => {
  return function(dispatch) {
    axios.get('api/instagram/feed', {
      params: {
        token: token
      }
    })
      .then((response) => {
        // console.log('front end response', response);
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
    params: {
      tag: tag, 
      token: token
    }
  })
    .then(({ data }) => {
      dispatch({type: "SEARCH_TAG_FULFILLED", payload: data});
    })
    .catch(err => {
      dispatch({type: "SEARCH_TAG_REJECTED", payload: err});
    })
}

export const submitPhotos = (photos, userId) => {
  axios.post('/api/instgram/photos/' + userId, {
    photos: photos
  })
  .then(({ data }) => {
    dispatch({type: "POST_PHOTOS_FULFILLED", payload: data});
  })
  .catch(err => {
    dispatch({type: "POST_PHOTOS_REJECTED", payload: err});
  })
}

export const getPhotos = (userId) => {
  axios.get('api/instagram/photos/' + userId)
    .then(({ data }) => {
      dispatch({type: "FETCH_PHOTOS_FULFILLED", payload: data});
    })
    .catch(err => {
      dispatch({type: "FETCH_PHOTOS_REJECTED", payload: err});
    })
}