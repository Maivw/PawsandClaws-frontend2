import axios from "../config/axiosConfig";

const GET_STATES = "GET_STATES";
export const loadStates = (states) => ({ type: GET_STATES, states });

export const showStates = (params) => async (dispatch) => {
	const result = await axios.get("/states", { ...params });

	dispatch(loadStates(result.data.states));
};
const inititialState = {
	states: [],
};
export default function reducer(state = inititialState, action) {
	switch (action.type) {
		case GET_STATES: {
			return {
				...state,
				states: action.states,
			};
		}

		default:
			return state;
	}
}
