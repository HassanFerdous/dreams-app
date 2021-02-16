const INNITIAL_STATE = {
	currentCount: 0,
};

const countReducer = (state = INNITIAL_STATE, action) => {
	switch (action.type) {
		case 'ADD':
			return {
				...state,
				currentCount: state.currentCount + 1,
			};
		default:
			return state;
	}
};

export default countReducer;
