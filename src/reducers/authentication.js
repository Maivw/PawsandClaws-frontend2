import axios from "../config/axiosConfig";
const SET_TOKEN = "SET_TOKEN";
const TOKEN_KEY = "TOKEN_KEY";
const REMOVE_TOKEN = "REMOVE_TOKEN";

// export const loadToken = () => async (dispatch) => {
// 	const token = window.localStorage.getItem(TOKEN_KEY);
// 	if (token) {
// 		dispatch(setToken(token));
// 	}
// };
export const setToken = (token) => ({ type: SET_TOKEN, token });
export const removeToken = (token) => ({ type: REMOVE_TOKEN });

export const loginAdopter = (params) => async (dispatch) => {
	const result = await axios.post("/users/login", params);
	dispatch(setToken(result.data.token));
};

export const loginShelter = (params) => async (dispatch) => {
	const result = await axios.post("/shelters/login", params);
	dispatch(setToken(result.data.token));
};

export const signupasAnAdopter = (params) => async (dispatch) => {
	const result = await axios.post("/users", { ...params });
	dispatch(setToken(result.data.token));
};

export const signupShelter = (params) => async (dispatch) => {
	const result = await axios.post("/shelters", { ...params });
	dispatch(setToken(result.data.token));
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
		case REMOVE_TOKEN: {
			return {};
		}

		default:
			return state;
	}
}
