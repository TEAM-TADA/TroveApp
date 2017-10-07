const initialState = {
  token: '',
  error: null,
  feed: [],
  results: []
}

const igReducer = (state=initialState, action) => {
  switch(action.type) {
    case "AUTHENTICATE_IG_REJECTED": {
      return Object.assign({}, state, { 
        error: action.payload
      })
    }
    case "AUTHENTICATE_IG_FULFILLED": {
      return Object.assign({}, state, { 
        token: action.payload.split('=')[1]
      })
    }
    case "FETCH_FEED_REJECTED": {
      return Object.assign({}, state, { 
        error: action.payload
      })
    }
    case "FETCH_FEED_FULFILLED": {
      return Object.assign({}, state, { 
        feed: action.payload
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
  }
}

export default igReducer; 