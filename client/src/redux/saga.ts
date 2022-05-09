import { all } from "redux-saga/effects";
import { getUsersSaga } from "./users/saga";

export default function* rootSaga() {
	yield all([getUsersSaga()]);
}
