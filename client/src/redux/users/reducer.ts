import { actionTypes } from "../interfaces";
// import {usersMockList, currentUserMock} from "../../mock/common";

export const initialState = {
	users: [],
	errorMessage: "",
	loading: false,
};

export const usersReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case actionTypes.GET_USERS_REQUEST:
			return {
				...state,
				loading: true,
			};

		case actionTypes.GET_USERS_SUCCESS:
			return {
				...state,
				loading: false,
				users: action.data,
			};
		case actionTypes.GET_USERS_FAIL:
			return {
				...state,
				loading: true,
				users: [],
			};

		default:
			return state;
	}
};
