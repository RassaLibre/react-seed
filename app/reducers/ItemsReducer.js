import {ITEMS_GET_SUCCESS, ACTIVATE_ITEM} from '../constants/AppConstants';
import { createStore } from 'redux';
import Immutable from 'immutable';

const itemsReducer = (state, action) => {
	if(!state)
		state = Immutable.fromJS({items: [], activeItem: null});
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

