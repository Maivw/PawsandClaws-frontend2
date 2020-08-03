import axios from "../config/axiosConfig";
const SET_TOKEN = "SET_TOKEN";
const SET_TOKEN_SHELTER = "SET_TOKEN_SHELTER ";
const GET_SHELTER_USER = "GET_SHELTER_USER ";
const GET_ADOPTER = "GET_ADOPTER ";
const REMOVE_TOKEN = "REMOVE_TOKEN";

export const setToken = (token) => ({ type: SET_TOKEN, token });
export const setTokenShelter = (tokenShelter) => ({
	type: SET_TOKEN_SHELTER,
	tokenShelter,
});
export const removeToken = (token) => ({ type: REMOVE_TOKEN });
export const getShelterUser = (user) => ({ type: GET_SHELTER_USER, user });
export const getAdopter = (adopter) => ({ type: GET_ADOPTER, adopter });
export const shelterProfileShowUp = (params) => async (dispatch) => {
	if (params.tokenShelter) {
		const result = await axios.get(
			`http://localhost:8080/shelters/${params.id}`,
			{
				...params,
			}
		);

		return dispatch(getShelterUser(result.data.shelterUser));
	}
};

export const adopterProfileShowUp = ({ token, id }) => async (dispatch) => {
	if (token) {
		const result = await axios.get(`http://localhost:8080/users/${id}`, {
			...token,
			id,
		});
		dispatch(getAdopter(result.data.user));
	}
};

export const loginAdopter = (params) => async (dispatch) => {
	const result = await axios.post("/users/login", params);
	dispatch(setToken(result.data.token));
};

export const loginShelter = (params) => async (dispatch) => {
	const result = await axios.post("/shelters/login", params);
	console.log("fffff", result.data);
	dispatch(setTokenShelter(result.data.tokenShelter));
	dispatch(getShelterUser(result.data.user));
};

export const signupasAnAdopter = (params) => async (dispatch) => {
	const result = await axios.post("/users", { ...params });
	dispatch(setToken(result.data.token));
};

export const signupShelter = (params) => async (dispatch) => {
	const result = await axios.post("/shelters", { ...params });
	dispatch(setTokenShelter(result.data.tokenShelter));
};

export const logout = (params) => async (dispatch) => {
	dispatch(removeToken());
};

export default function reducer(state = {}, action) {
	switch (action.type) {
		case SET_TOKEN: {
			return {
				...state,
				token: action.token,
			};
		}
		case SET_TOKEN_SHELTER: {
			return {
				...state,
				tokenShelter: action.tokenShelter,
			};
		}
		case REMOVE_TOKEN: {
			return {};
		}

		case GET_SHELTER_USER: {
			return {
				...state,
				user: action.user,
			};
		}
		case GET_ADOPTER: {
			return {
				...state,
				adopter: action.adopter,
			};
		}

		default:
			return state;
	}
}
