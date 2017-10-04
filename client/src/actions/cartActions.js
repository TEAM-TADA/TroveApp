export const addToCart = (item, start, end) => {
  item.startDate = start;
  item.endDate = end;
  dispatch({type: 'CART_ADD_FULFILLED', payload: item});
}

export const removeFromCart = (itemId) => {
  dispatch({type: 'CART_ITEM_DELETE_FULFILLED', payload: itemId});
}

export const showCart = () => {
  return function(dispatch) {
    dispatch({type: 'SHOW_CART'});
  }
}

export const hideCart = () => {
  return function(dispatch) {
    dispatch({type: 'HIDE_CART'});
  }
}

export const emptyCart = () => {
  return function(dispatch) {
    dispatch({type: 'EMPTY_CART'});
  }
}