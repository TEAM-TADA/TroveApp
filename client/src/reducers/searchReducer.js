const initialState = {
  results: [],
  searched: false,
}

const searchReducer = (state=initialState, action) => {
  switch(action.type) {
    case "SEARCH_ITEMS_REJECTED": {
      return Object.assign({}, state, { 
        error: action.payload
      })
    }
    case "SEARCH_ITEMS_FULFILLED": {
      return Object.assign({}, state, { 
        searched: true,
        results: action.payload
      })
    }
    default: {
      return state;
    }
  }
}


export default searchReducer; 
