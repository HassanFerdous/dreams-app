import { act } from 'react-dom/test-utils';
import teamData from '../../components/team-item/teamData';

const INNITIAL_STATE = teamData;

const teamReducer = (state = INNITIAL_STATE, action) => {
	switch (action.payload) {
		default:
			return state;
	}
};

export default teamReducer;
