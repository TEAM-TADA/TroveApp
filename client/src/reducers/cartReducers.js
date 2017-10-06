const initialState = {
  cart: [],
  viewCart: false,
};

const cartReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'CART_ADD_FULFILLED': {
      return Object.assign({}, state, {
        cart: state.cart.concat(action.payload)
      })
    }
    case 'CART_ITEM_DELETE_FULFILLED': {
      return Object.assign({}, state, {
        cart: state.cart.filter(item => {
          return item.id === action.payload ? null : item;
        })
      })
    }
    case 'SHOW_CART': {
      return Object.assign({}, state, {
        viewCart: true
      })
    }
    case 'HIDE_CART': {
      return Object.assign({}, state, {
        viewCart: false
      })
    }
    case 'EMPTY_CART': {
      return Object.assign({}, state, {
        cart: []
      })
    }
    default: {
      return state;
    }
  }
}

export default cartReducer;