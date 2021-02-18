import BILLING_DATA from '../../components/price/biling-data';

import '../../components/price/biling-data';
const INNITIAL_STATE = BILLING_DATA;

const priceReducer = (state = INNITIAL_STATE, action) => {
	switch (action.payload) {
		default:
			return state;
	}
};

export default priceReducer;
