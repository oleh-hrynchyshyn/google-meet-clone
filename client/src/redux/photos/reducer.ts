import { actionTypes } from "../interfaces";

export const initialState = {
	link: "",
	errorMessage: "",
	loading: false,
};

export const photoReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case actionTypes.GET_PHOTO_REQUEST:
			return {
				...state,
				loading: true,
			};

		case actionTypes.GET_PHOTO_SUCCESS:
			return {
				...state,
				loading: false,
				link: action.link,
			};
		case actionTypes.GET_PHOTO_FAIL:
			return {
				...state,
				loading: true,
				link: "http://localhost:5000/api/file/catPhoto/65620375-6b2b57fa5c7189ba4e3841d592bd5fc1-800-640x426.jpg",
			};

		default:
			return state;
	}
};
