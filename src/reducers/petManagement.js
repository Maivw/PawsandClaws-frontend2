import axios from "../config/axiosConfig";
const GET_ALL_PETS = "GET_ALL_PETS ";
const GET_A_PET = "GET_A_PET ";
const FAVORITE_PET = "FAVORITE_PET";
const DELETE_A_PET = "DELETE_A_PET";
const EDIT_A_PET = "EDIT_A_PET ";
const GET_PETS_OF_SHELTERS = "GET_PETS_OF_SHELTERS";

export const getAllPets = (pets) => ({ type: GET_ALL_PETS, pets });
export const getAPet = (pet) => ({ type: GET_A_PET, pet });
export const removeAPet = (pet) => ({ type: DELETE_A_PET, pet });
export const gePetsOfAShelter = (shelterPets) => ({
	type: GET_PETS_OF_SHELTERS,
	shelterPets,
});
export const editAPet = (pet) => ({
	type: EDIT_A_PET,
	pet,
});

export const displayAllPets = (params = {}) => async (dispatch) => {
	const result = await axios.get("/pets", { ...params });
	dispatch(getAllPets(result.data.pets));
};

export const displayAPet = (params) => async (dispatch) => {
	console.log("checkkk3", params);
	const result = await axios.get(`/pets/${params.id}`, { ...params });

	dispatch(getAPet(result.data));
};

export const displayAllPetsShelter = (params) => async (dispatch) => {
	console.log("more", params);
	const result = await axios.get(`/pets/shelters/${params.id}`); // {id: 1}

	dispatch(gePetsOfAShelter(result.data.pets));
};

export const favoriteAPet = (pet) => (dispatch) => {
	dispatch({
		type: FAVORITE_PET,
		pet,
	});
};

export const postANewPet = (params) => async (dispatch) => {
	const result = await axios.post(`/pets`, params);

	dispatch(getAllPets());
};
export const deleteAPet = (params) => async (dispatch) => {
	const result = await axios.delete(`/pets/${params.id}`);
	console.log("cff", result.data.pet.shelterId);
	console.log("ggggg", params.shelterId);

	// dispatch(removeAPet(result.data.pet));

	dispatch(displayAllPetsShelter({ id: params.shelterId }));
};

export const shelterEditAPet = ({ fields, id }) => async (dispatch) => {
	const result = await axios.put(`/pets/${id}`, { ...fields });
	dispatch(editAPet(result.data.pet));
	dispatch(getAllPets());
};
const inititialState = {
	pets: [],
	favoritePets: [],
	shelterPets: [],
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
			const newState = [...state.shelterPets];
			const restPets = newState.filter((p) => p.id !== action.pet);
			return {
				...state,
				shelterPets: [...restPets],
			};
		}
		case GET_PETS_OF_SHELTERS: {
			console.log("actiiiii", action.shelterPets);
			return {
				...state,
				shelterPets: action.shelterPets,
			};
		}

		case EDIT_A_PET: {
			return {
				...state,
				pet: action.pet,
			};
		}
		default:
			return state;
	}
}
