import {ITEMS_GET_SUCCESS} from '../constants/AppConstants';
import { createStore } from 'redux';

const itemsReducer = (state, action) => {
	state = {items: []};
	switch(action.type){
		case ITEMS_GET_SUCCESS:
			state.items = state.items.concat(action.items);
			return state;
			break;
		default:
			return state;
			break;
	}
}

const store = createStore(itemsReducer);
export default store;

