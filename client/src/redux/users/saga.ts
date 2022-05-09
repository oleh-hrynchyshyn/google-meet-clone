import { put, takeEvery } from "redux-saga/effects";
import * as action from "../interfaces";
import axios from "axios";
import { AxiosResponse } from "axios";
import { getUsersFail, getUsersSuccess } from "./actions";
import { ResponseGenerator } from "../interfaces";
function* getUsers() {
	try {
		const res: ResponseGenerator = yield axios.get(
			"http://localhost:5000/api/getAllUsers",
		);
		console.log("ssss");
		yield put(getUsersSuccess(res.data));
	} catch (error) {
		console.error("error: ", error);
		yield put(getUsersFail());
	}
}

export function* getUsersSaga() {
	yield takeEvery(action.actionTypes.GET_USERS_REQUEST, getUsers);
}
