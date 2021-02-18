import { combineReducers } from 'redux';
import countReducer from './count/countReducer';
import priceReducer from './price/priceReducer';

export default combineReducers({
	count: countReducer,
	prices: priceReducer,
});
