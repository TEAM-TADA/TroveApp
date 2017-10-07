const initialState = {
  fetchedUsers: false,
  fetchedDates: false,
  fetchedItems: false,
  items: [],
  error: null,
  owner: '',
  blockedDates: [],
}

const itemReducer = (state=initialState, action) => {
  switch(action.type) {
    case "FETCH_USER_REJECTED": {
      return Object.assign({}, state, { 
        error: action.payload
      })
    }
    case "FETCH_USER_FULFILLED": {
      return Object.assign({}, state, { 
        fetchedUsers: true,
        owner: action.payload
      })
    }
    case "FETCH_DATES_REJECTED": {
      return Object.assign({}, state, { 
        error: action.payload
      })
    }
    case "FETCH_DATES_FULFILLED": {
      return Object.assign({}, state, { 
        fetchedDates: true,
        blockedDates: action.payload
      })
    }
    case "FETCH_ITEMS_REJECTED": {
      return Object.assign({}, state, {
        error: action.payload
      })
    }
    case "FETCH_ITEMS_FULFILLED": {
      return Object.assign({}, state, {
        fetchedItems: true,
        items: action.payload
      })
    }
    case "DATE_CHANGE": {
      return Object.assign({}, state, {
        startDate: action.payload[0],
        endDate: action.payload[1],
      })
    }
    case "FOCUS_CHANGE": {
      return Object.assign({}, state, {
        focusedInput: action.payload
      })
    }
    default: {
      return state;
    }
  }
}

export default itemReducer;