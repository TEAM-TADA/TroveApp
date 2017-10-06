import axios from 'axios'

const authUrl = 'https://api.instagram.com/oauth/authorize/?client_id=7c000611357a488ab02d7afc86b47909&redirect_uri=http://localhost:3000/auth/instagram/callback&response_type=token'
const feedUrl = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='

export const authenticate = () => {
  return function(dispatch) {
    axios.get(authUrl)
      .then((response) => {
        dispatch({type: "AUTHENTICATE_IG_FULFILLED", payload: response.url});
      })
      .catch(err => {
        dispatch({type: "AUTHENTICATE_IG_REJECTED", payload: err});
      });
  };
};

// export const getFeed = (token) => {
//   return function(dispatch) {
//     axios.get(feedUrl + token)
//       .then(({ data }) => {
//         dispatch({type: "FETCH_FEED_FULFILLED", payload: data});
//       })
//       .catch(err => {
//         dispatch({type: "FETCH_FEED_REJECTED", payload: err});
//       });
//   };
// };

// export const searchTag = (tag, token) => {
//   return function(dispatch) {
//     axios.get('https://api.instagram.com/v1/tags/' + tag + '/media/recent?access_token=' + token)
//       .then(({ data }) => {
//         dispatch({type: "SEARCH_TAG_FULFILLED", payload: data});
//       })
//       .catch(err => {
//         dispatch({type: "SEARCH_TAG_REJECTED", payload: err});
//       });
//   };
// }