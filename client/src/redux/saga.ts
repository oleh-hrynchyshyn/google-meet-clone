import { all } from "redux-saga/effects";
import { getUsersSaga } from "./users/saga";
import { getPhotoSaga } from "./photos/saga";
export default function* rootSaga() {
	yield all([getUsersSaga(), getPhotoSaga()]);
}
