import axios from 'axios';

export const fetchTrx = (userId) => {
  return function(dispatch) {
    axios.get('/api/renttrx/renter/' + userId)
      .then(({ data }) => {
        dispatch({type: "FETCH_RENT_ITEMS_FULFILLED", payload: data});
      })
      .catch(err => {
        dispatch({type: "FETCH_RENT_ITEMS_REJECTED", payload: err});
      });
  };
};

export const postItem = (item) => {
  return function(dispatch) {
    axios.post('/api', item)
      .then(() => {
        dispatch({type: "POST_ITEM_FULFILLED"});
      })
      .catch(err => {
        dispatch({type: "POST_ITEM_REJECTED", payload: err});
      });
  };
};