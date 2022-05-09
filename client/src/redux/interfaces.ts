import { IUser } from "../interfaces/user";

export enum actionTypes {
	GET_USERS_REQUEST = "GET_USERS_REQUEST",
	GET_USERS_SUCCESS = "GET_USERS_SUCCESS",
	GET_USERS_FAIL = "GET_USERS_FAIL",
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
export interface ResponseGenerator {
	config?: any;
	data?: any;
	headers?: any;
	request?: any;
	status?: number;
	statusText?: string;
	arrayBuffer(): Promise<ArrayBuffer>;
	blob(): Promise<Blob>;
	formData(): Promise<FormData>;
	json(): Promise<any>;
	text(): Promise<string>;
}
