const initialState = {
  token: '',
  error: null,
  feed: [],
  results: [],
}; 

const igReducer = (state=initialState, action) => {
  switch(action.type) {
    case "FETCH_FEED_REJECTED": {
      return Object.assign({}, state, { 
        error: action.payload
      })
    }
    case "FETCH_FEED_FULFILLED": {
      return Object.assign({}, state, { 
        feed: action.payload,
        token: action.token
      })
    }
    case "REFRESH_FEED_REJECTED": {
      return Object.assign({}, state, { 
        error: action.payload
      })
    }
    case "REFRESH_FEED_FULFILLED": {
      return Object.assign({}, state, { 
        feed: action.payload
      })
    }
    case "SEARCH_TAG_REJECTED": {
      return Object.assign({}, state, { 
        error: action.payload
      })
    }
    case "SEARCH_TAG_FULFILLED": {
      return Object.assign({}, state, { 
        results: action.payload
      })
    }
    default: {
      return state
    }
  }
}

export default igReducer; 