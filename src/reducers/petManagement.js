import axios from "../config/axiosConfig";
const GET_ALL_PETS = "GET_ALL_PETS ";
const GET_A_PET = "GET_A_PET ";
const FAVORITE_PET = "FAVORITE_PET";
const DELETE_A_PET = "DELETE_A_PET";

export const getAllPets = (pets) => ({ type: GET_ALL_PETS, pets });
export const getAPet = (pet) => ({ type: GET_A_PET, pet });
export const removeAPet = (pet) => ({ type: DELETE_A_PET, pet });

export const displayAllPets = (params = {}) => async (dispatch) => {
	const result = await axios.get("/pets", { ...params });
	dispatch(getAllPets(result.data.pets));
};

export const displayAPet = (params, id) => async (dispatch) => {
	const result = await axios.get(`/pets/${id}`, { ...params });

	dispatch(getAPet(result.data));
};

export const favoriteAPet = (pet) => (dispatch) => {
	console.log("alllalallalala");
	dispatch({
		type: FAVORITE_PET,
		pet,
	});
};

export const postANewPet = (params = {}) => async (dispatch) => {
	const result = await axios.post(`/pets`, { ...params });

	dispatch(getAllPets());
};
export const deleteAPet = (params, id) => async (dispatch) => {
	const result = await axios.delete(`/pets/${id}`, { ...params });

	dispatch(removeAPet(result.data));
};
const inititialState = {
	pets: [],
	favoritePets: [],
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

		case FAVORITE_PET: {
			let newState = [...state.favoritePets];
			const favPet = newState.find((p) => p.id === action.pet.id);

			if (!favPet) {
				newState.push(action.pet);
			} else {
				newState = newState.filter((p) => p.id !== action.pet.id);
			}

			return {
				...state,
				favoritePets: [...newState],
			};
		}
		case DELETE_A_PET: {
			const newState = [...state.pets];
			const restPets = newState.filter((p) => p.id !== action.pet);
			return {
				...state,
				pets: [...restPets],
			};
		}

		default:
			return state;
	}
}
