const initialState = {
  log: [],
  error: null,
}

const chatReducer = (state=initialState, action) => {
  switch(action.type) {
    case "MESSAGE_CHANGE": {
      console.log('chat reducer payload, ', action.payload)
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