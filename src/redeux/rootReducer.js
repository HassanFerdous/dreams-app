import { combineReducers } from 'redux';
import countReducer from './count/countReducer';

export default combineReducers({
	count: countReducer,
});
