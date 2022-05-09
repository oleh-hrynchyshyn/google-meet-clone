import { actionTypes } from "../interfaces";
// import {usersMockList, currentUserMock} from "../../mock/common";

export const initialState = {
	users: [
		// {
		// 	id: "0",
		// 	name: "Oleh Hrynchyshyn",
		// 	avatar: "http://localhost:5000/api/file/userPhoto/oleh.jpg",
		// 	cameraOn: false,
		// },
		// {
		// 	id: "1",
		// 	name: "Володимир Зеленський",
		// 	avatar: "http://localhost:5000/api/file/userPhoto/zel.png",
		// 	cameraOn: true,
		// },
		// {
		// 	id: "2",
		// 	name: "Inna",
		// 	avatar: "http://localhost:5000/api/file/userPhoto/girl.jpg",
		// 	cameraOn: false,
		// },
		// {
		// 	id: "3",
		// 	name: "Mark Zuckerberg",
		// 	avatar: "http://localhost:5000/api/file/userPhoto/mark.jpg",
		// 	cameraOn: true,
		// },
		// {
		// 	id: "4",
		// 	name: "Han Solo",
		// 	avatar: "http://localhost:5000/api/file/userPhoto/space.jpg",
		// 	cameraOn: true,
		// },
		// {
		// 	id: "5",
		// 	name: "Solomiya",
		// 	avatar: "",
		// 	cameraOn: false,
		// },
		// {
		// 	id: "6",
		// 	name: "Микола",
		// 	avatar: "http://localhost:5000/api/file/userPhoto/gif.gif",
		// 	cameraOn: true,
		// },
		// {
		// 	id: "7",
		// 	name: "string",
		// 	avatar: "Anton",
		// 	cameraOn: false,
		// },
		// {
		// 	id: "8",
		// 	name: "Boris Johnson",
		// 	avatar: "http://localhost:5000/api/file/userPhoto/borya.jpg",
		// 	cameraOn: true,
		// },
		// {
		// 	id: "9",
		// 	name: "Олексій Арестович",
		// 	avatar: "http://localhost:5000/api/file/userPhoto/arest.jpg",
		// 	cameraOn: true,
		// },
		// {
		// 	id: "10",
		// 	name: "Maxim",
		// 	avatar: "",
		// 	cameraOn: false,
		// },
		// {
		// 	id: "11",
		// 	name: "Oleh Hrynyshyn",
		// 	avatar: "http://localhost:5000/api/file/userPhoto/dude.jpg",
		// 	cameraOn: false,
		// },
	],
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
			console.log(action);
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
