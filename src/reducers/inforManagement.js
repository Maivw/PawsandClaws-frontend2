import axios from "../config/axiosConfig";

const GET_STATES = "GET_STATES";
const GET_BREEDS = "GET_BREEDS ";
const GET_ALL_REQUESTS = "GET_ALL_REQUESTS";
export const loadStates = (states) => ({ type: GET_STATES, states });

export const getAllRequests = (requests) => ({
	type: GET_ALL_REQUESTS,
	requests,
});
export const loadBreeds = (breeds) => ({ type: GET_BREEDS, breeds });
export const showStates = (params) => async (dispatch) => {
	const result = await axios.get("/states", { ...params });

	dispatch(loadStates(result.data.states));
};

export const showBreeds = (params) => async (dispatch) => {
	const result = await axios.get("/breeds", { ...params });

	dispatch(loadBreeds(result.data.breeds));
};
export const sendAdoptionRequest = (params) => async (dispatch) => {
	const result = await axios.post("/adoptionRequests", { ...params }); // shelterId, name, dogID

	dispatch(displayAllReqs(params, params.shelterId));
};
export const displayAllReqs = (params, id) => async (dispatch) => {
	const result = await axios.get(`/adoptionRequests/shelter/${id}`, {
		...params,
	});

	dispatch(getAllRequests(result.data.adoptionRequests));
};
export const displayAllReqsOfAdopters = (params = {}, id) => async (
	dispatch
) => {
	const result = await axios.get(`/adoptionRequests/user/${id}`, {
		...params,
	});

	dispatch(getAllRequests(result.data.adoptionRequests));
};
const inititialState = {
	states: [],
	requests: [],
	breeds: [],
};
export default function reducer(state = inititialState, action) {
	switch (action.type) {
		case GET_STATES: {
			return {
				...state,
				states: action.states,
			};
		}
		case GET_BREEDS: {
			return {
				...state,
				breeds: action.breeds,
			};
		}
		case GET_ALL_REQUESTS: {
			return {
				...state,
				requests: action.requests,
			};
		}

		default:
			return state;
	}
}
