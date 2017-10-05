export const chat = (messages) => {
  return function(dispatch) {
    dispatch({type: 'MESSAGE_CHANGE', payload: messages});
  }
};