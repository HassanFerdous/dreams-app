import { combineReducers } from 'redux';
import cardReducer from './card/cardReducer';
import countReducer from './count/countReducer';
import featureReducer from './feature/featureReducer';
import priceReducer from './price/priceReducer';
import teamReducer from './team/teamReducer';

export default combineReducers({
	count: countReducer,
	prices: priceReducer,
	teamMembers: teamReducer,
	features: featureReducer,
	cards: cardReducer,
});
