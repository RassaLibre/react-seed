import 'babel-core/polyfill';
import {ITEMS_GET_SUCCESS, ACTIVATE_ITEM} from '../../constants/AppConstants';
import { expect } from 'chai';
import Immutable from 'immutable';
import store from '../ItemsReducer';

describe('ItemsReducer',()=>{

	let initStore = Immutable.fromJS({items: [], activeItem: null});

	it('should handle to ITEMS_GET_SUCCESS', ()=>{
		store.dispatch({
				type: ITEMS_GET_SUCCESS,
				items: [
					{id: 1, label:"item1"},
					{id: 2, label:"item2"},
					{id: 3, label:"item3"},
					{id: 4, label:"item4"}
				]
		});
		expect(store.getState().get('items').size).to.equal(4);
	});

	it('should handle ACTIVATE_ITEM', ()=>{
		store.dispatch({
			type: ACTIVATE_ITEM,
			id: 2
		});
		expect(store.getState().get('activeItem')).to.equal(2);
	});

});

