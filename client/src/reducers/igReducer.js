const initialState = {
  token: '',
  error: null,
  feed: [],
  results: [],
  selected: [],
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
    case "SELECT_PHOTOS_REJECTED": {
      return Object.assign({}, state, { 
        error: action.payload
      })
    }
    case "SELECT_PHOTOS_FULFILLED": {
      return Object.assign({}, state, { 
        selected: action.payload
      })
    }
    case "FETCH_PHOTOS_REJECTED": {
      return Object.assign({}, state, { 
        error: action.payload
      })
    }
    case "FETCH_PHOTOS_FULFILLED": {
      return Object.assign({}, state, { 
        selected: action.payload
      })
    }
    default: {
      return state
    }
  }
}

export default igReducer; 