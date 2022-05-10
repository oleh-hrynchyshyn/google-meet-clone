import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as action from "../interfaces";
import axios from "axios";
import { AxiosResponse } from "axios";
import { getPhotoFail, getPhotoSuccess } from "./actions";

function* getRandomImage() {
	try {
		const res: AxiosResponse = yield axios.get(
			"http://localhost:5000/api/getRandomImage",
		);
		console.log("res", res.data);
		yield put(getPhotoSuccess(res.data));
	} catch (error) {
		console.error("error: ", error);
		yield put(getPhotoFail());
	}
}

export function* getPhotoSaga() {
	yield takeEvery(action.actionTypes.GET_PHOTO_REQUEST, getRandomImage);
}
