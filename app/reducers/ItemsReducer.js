import {ITEMS_GET_SUCCESS, ACTIVATE_ITEM} from '../constants/AppConstants';
import { createStore } from 'redux';
import Immutable from 'immutable';

let initStore = Immutable.fromJS({items: [], activeItem: null});

const itemsReducer = (state = initStore, action) => {
	switch(action.type){
		case ITEMS_GET_SUCCESS:
			let imItems = Immutable.fromJS(action.items);
			return state.set("items", imItems);
			break;
		case ACTIVATE_ITEM:
			return state.set("activeItem", action.id);
			break;
		default:
			return state;
			break;
	}
}

const store = createStore(itemsReducer);
export default store;

