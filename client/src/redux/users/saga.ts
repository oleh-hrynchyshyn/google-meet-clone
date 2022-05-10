import { all, call, put, takeLatest } from "redux-saga/effects";
import * as action from "../interfaces";
import axios from "axios";
import { AxiosResponse } from "axios";
import { getUsersFail, getUsersSuccess } from "./actions";

function* getUsers() {
	try {
		const res: AxiosResponse = yield axios.get(
			"http://localhost:5000/api/getAllUsers",
		);

		yield put(getUsersSuccess(res.data));
	} catch (error) {
		console.error("error: ", error);
		yield put(getUsersFail());
	}
}

export function* getUsersSaga() {
	yield takeLatest(action.actionTypes.GET_USERS_REQUEST, getUsers);
}
