export const messageChange = (messages) => {
  return function(dispatch) {
    console.log('MESSAGE CHANGE DISPATCH: ', messages)
    dispatch({type: 'MESSAGE_CHANGE', payload: messages});
  }
};