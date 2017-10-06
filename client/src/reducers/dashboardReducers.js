const initialState = {
  fetchedRented: false,
  postedItem: false,
  rentedItems: [],
  error: null,
};

const dashboardReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'FETCH_RENT_ITEMS_FULFILLED': {
      return Object.assign({}, state, {
        fetchedRented: true,
        rentedItems: action.payload,
      });
    }
    case 'FETCH_RENT_ITEMS_REJECTED': {
      return Object.assign({}, state, {
        error: action.payload,
      });
    }
    case 'POST_ITEM_FULFILLED': {
      return Object.assign({}, state, {
        postedItem: true,
      });
    }
    case 'POST_ITEM_REJECTED': {
      return Object.assign({}, state, {
        error: action.payload,
      });
    }
    default: {
      return state;
    }
  };
};

export default dashboardReducer;