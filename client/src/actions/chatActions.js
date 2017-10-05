export const messageChange = (messages) => {
  return function(dispatch) {
    dispatch({type: 'MESSAGE_CHANGE', payload: messages});
  }
};