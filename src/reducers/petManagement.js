import axios from "../config/axiosConfig";
const GET_ALL_PETS = "GET_ALL_PETS ";
const GET_A_PET = "GET_A_PET ";

export const getAllPets = (pets) => ({ type: GET_ALL_PETS, pets });
export const getAPet = (pet) => ({ type: GET_A_PET, pet });

export const displayAllPets = (params) => async (dispatch) => {
	const result = await axios.get("/pets", { ...params });
	dispatch(getAllPets(result.data.pets));
};

export const displayAPet = (params, id) => async (dispatch) => {
	const result = await axios.get(`/pets/${id}`, { ...params });

	console.log("res2", result.data);
	dispatch(getAPet(result.data));
};

const inititialState = {
	pets: [],
};
export default function reducer(state = inititialState, action) {
	switch (action.type) {
		case GET_ALL_PETS: {
			return {
				...state,
				pets: action.pets,
			};
		}
		case GET_A_PET: {
			return {
				...state,
				pet: action.pet,
			};
		}

		default:
			return state;
	}
}
