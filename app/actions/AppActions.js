import store from '../reducers/ItemsReducer';
import WebAPI from '../util/WebAPI';

import {
  ITEMS_GET_SUCCESS,
  ITEMS_GET_ERROR,
  ACTIVATE_ITEM
} from '../constants/AppConstants';

export default {

  getItems() {
    WebAPI.getItems()
    .then((items) => {
      store.dispatch({
        type: ITEMS_GET_SUCCESS,
        items: items
      });
    })
    .catch(() => {
      store.dispatch({
        type: ITEMS_GET_ERROR
      });
    });
  },

  makeActive(id){
    store.dispatch({
      type: ACTIVATE_ITEM,
      id: id
    });
  }

};
