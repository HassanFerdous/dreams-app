import path from '../../components/path/path';

const INNITIAL_STATE = [
	{
		featureImg: path + '/images/feature/feature-1.png',
		text: 'UNLIMITED CAR SUPPORT',
	},
	{
		featureImg: path + '/images/feature/feature-2.png',
		text: 'UNLIMITED CAR SUPPORT',
	},
	{
		featureImg: path + '/images/feature/feature-3.png',
		text: 'UNLIMITED CAR SUPPORT',
	},
];

const featureReducer = (state = INNITIAL_STATE, action) => {
	switch (action.payload) {
		default:
			return state;
	}
};

export default featureReducer;
