import axios from "../config/axiosConfig";

const GET_STATES = "GET_STATES";
const SEND_ADOPTION_REQUEST = "SEND_ADOPTION_REQUEST";
export const loadStates = (states) => ({ type: GET_STATES, states });
export const sendAdoptionReq = (request) => ({
	type: SEND_ADOPTION_REQUEST,
	request,
});

export const showStates = (params) => async (dispatch) => {
	const result = await axios.get("/states", { ...params });

	dispatch(loadStates(result.data.states));
};
export const sendAdoptionRequest = (params) => async (dispatch) => {
	console.log("sendReq", params);
	const result = await axios.post("/adoptionRequests", { ...params });
	console.log("send", result.data.request);
	console.log("request", result.data);

	dispatch(loadStates(result.data));
};
const inititialState = {
	states: [],
	request: [],
};
export default function reducer(state = inititialState, action) {
	switch (action.type) {
		case GET_STATES: {
			return {
				...state,
				states: action.states,
			};
		}

		case SEND_ADOPTION_REQUEST: {
			const newState = [...state.requests];
			const request = newState.find((r) => r.id === action.request.id);
			if (!request) {
				newState.push(request);
			}
			return {
				...state,
				request: [...newState],
			};
		}

		default:
			return state;
	}
}
