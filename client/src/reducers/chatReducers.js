const initialState = {
  messages: [],
  error: null,
}

const chatReducer = (state=initialState, action) => {
  switch(action.type) {
    case "MESSAGE_CHANGE": {
      return Object.assign({}, state, {
        messages: action.payload,
      })
    }
    default: {
      return state
    }
  }
}

export default chatReducer