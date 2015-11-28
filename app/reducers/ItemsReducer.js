import {ITEMS_GET_SUCCESS, ACTIVATE_ITEM} from '../constants/AppConstants';
import { createStore } from 'redux';

const itemsReducer = (state = {items: [], activeItem: null}, action) => {
	switch(action.type){
		case ITEMS_GET_SUCCESS:
			state.items = state.items.concat(action.items);
			return state;
			break;
		case ACTIVATE_ITEM:
			state.activeItem = action.id;
			return state;
			break;
		default:
			return state;
			break;
	}
}

const store = createStore(itemsReducer);
export default store;

