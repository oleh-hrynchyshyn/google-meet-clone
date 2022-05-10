import { IUser } from "../interfaces/user";

export enum actionTypes {
	GET_USERS_REQUEST = "GET_USERS_REQUEST",
	GET_USERS_SUCCESS = "GET_USERS_SUCCESS",
	GET_USERS_FAIL = "GET_USERS_FAIL",

	GET_PHOTO_REQUEST = "GET_PHOTO_REQUEST",
	GET_PHOTO_SUCCESS = "GET_PHOTO_SUCCESS",
	GET_PHOTO_FAIL = "GET_PHOTO_FAIL",
}
export interface IGetUsersRequest {
	type: actionTypes.GET_USERS_REQUEST;
}

export interface IGetUsersFail {
	type: actionTypes.GET_USERS_FAIL;
}

export interface IGetUsersSuccess {
	type: actionTypes.GET_USERS_SUCCESS;
	data: Array<IUser>;
}

export interface IGetPhotoRequest {
	type: actionTypes.GET_PHOTO_REQUEST;
}

export interface IGetPhotoFail {
	type: actionTypes.GET_PHOTO_FAIL;
}

export interface IGetPhotoSuccess {
	type: actionTypes.GET_PHOTO_SUCCESS;
	link: string;
}
