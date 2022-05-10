import * as action from "../interfaces";

export function getPhotoRequest(): action.IGetPhotoRequest {
	return { type: action.actionTypes.GET_PHOTO_REQUEST };
}
export function getPhotoSuccess(link: string): action.IGetPhotoSuccess {
	return { type: action.actionTypes.GET_PHOTO_SUCCESS, link };
}
export function getPhotoFail(): action.IGetPhotoFail {
	return { type: action.actionTypes.GET_PHOTO_FAIL };
}
