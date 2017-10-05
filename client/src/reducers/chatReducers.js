const initialState = {
  log: [],
  error: null,
}

const chatReducer = (state=initialState, action) => {
  switch(action.type) {
    case "MESSAGE_CHANGE": {
      return Object.assign({}, state, {
        log: action.payload,
      })
    }
    default: {
      return state
    }
  }
}

export default chatReducer