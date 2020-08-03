import axios from "../config/axiosConfig";
const SET_TOKEN = "SET_TOKEN";
const SET_TOKEN_SHELTER = "SET_TOKEN_SHELTER ";
const SET_USER = "SET_USER ";
const REMOVE_TOKEN = "REMOVE_TOKEN";

export const setToken = (token) => ({ type: SET_TOKEN, token });
export const setTokenShelter = (tokenShelter) => ({
	type: SET_TOKEN_SHELTER,
	tokenShelter,
});
export const removeToken = (token) => ({ type: REMOVE_TOKEN });
export const setUser = (user) => ({ type: SET_USER, user });

export const shelterProfileShowUp = (params) => async (dispatch) => {
	const result = await axios.get(`http://localhost:8080/shelters/${params.id}`);

	// return dispatch(setShelterUser(result.data.shelterUser));
};

export const adopterProfileShowUp = ({ token, id }) => async (dispatch) => {
	if (token) {
		const result = await axios.get(`http://localhost:8080/users/${id}`, {
			...token,
			id,
		});
		// dispatch(setAdopter(result.data.user));
	}
};

export const loginAdopter = (params) => async (dispatch) => {
	const result = await axios.post("/users/login", params);
	dispatch(setUser(result.data));
};

export const loginShelter = (params) => async (dispatch) => {
	const result = await axios.post("/shelters/login", params);
	/**
	 * {
    "tokenShelter": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJlbWFpbCI6IkRlbW9ARGVtb1VzZXIuY29tIn0sImlhdCI6MTU5NjQ2OTg3MCwiZXhwIjoxNTk3MDc0NjcwfQ.uGCBOTvuv2WC90mwxl7iTkvPGd8WtdgfUOOr48DXrds",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJlbWFpbCI6IkRlbW9ARGVtb1VzZXIuY29tIn0sImlhdCI6MTU5NjQ2OTg3MCwiZXhwIjoxNTk3MDc0NjcwfQ.uGCBOTvuv2WC90mwxl7iTkvPGd8WtdgfUOOr48DXrds",
    "role": "Adopter",
    "user": {
        "id": 1
    },
    "name": "DemoUser"}
	 */

	dispatch(
		setUser({
			...result.data,
			token: result.data.tokenShelter,
		})
	);
};

export const signupasAnAdopter = (params) => async (dispatch) => {
	console.log("singupParams", params);
	const result = await axios.post("/users", { ...params });
	dispatch(setUser(result.data));
};

export const signupShelter = (params) => async (dispatch) => {
	const result = await axios.post("/shelters", { ...params });
	dispatch(
		setUser({
			...result.data,
			token: result.data.tokenShelter,
		})
	);
};

export const logout = (params) => async (dispatch) => {
	dispatch(removeToken());
};
const initState = {
	user: { token: "" },
};
export default function reducer(state = initState, action) {
	switch (action.type) {
		case SET_TOKEN: {
			return {
				...state,
				token: action.token,
			};
		}

		case REMOVE_TOKEN: {
			return initState;
		}

		case SET_USER: {
			return {
				...state,
				user: action.user,
			};
		}

		default:
			return state;
	}
}
