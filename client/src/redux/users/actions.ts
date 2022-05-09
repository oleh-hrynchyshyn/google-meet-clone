import * as action from "../interfaces";
import { IUser } from "../../interfaces/user";

export function getUsersRequest(): action.IGetUsersRequest {
	return { type: action.actionTypes.GET_USERS_REQUEST };
}
export function getUsersSuccess(data: Array<IUser>): action.IGetUsersSuccess {
	return { type: action.actionTypes.GET_USERS_SUCCESS, data };
}
export function getUsersFail(): action.IGetUsersFail {
	return { type: action.actionTypes.GET_USERS_FAIL };
}
