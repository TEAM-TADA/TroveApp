export const search = (items, searchInput) => {
  return function(dispatch) {
    const res = []; 
    const split = searchInput.split(' ');
    for (let i = 0; i < items.length; i++) {
      for (let j = 0; j < split.length; j++) {
        let checkThis = split[j].toLowerCase();
        if (items[i].itemname.toLowerCase().includes(checkThis)) {
          res.push(items[i]);
        }
      }
    }
    return res;
  }
  .then(() => {
    dispatch({type: 'SEARCH_ITEMS_FUFILLED', payload: res})
  })
  .catch(err => {
    dispatch({type: 'SEARCH_ITEMS_REJECTED', payload: err})
  })
}

