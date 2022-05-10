import { combineReducers } from "redux";
import { usersReducer } from "./users/reducer";
import { IUser } from "../interfaces/user";
import { photoReducer } from "./photos/reducer";
interface IUsersState {
	users: Array<IUser>;
	loading: boolean;
}

interface IPhotoState {
	link: string;
}
export interface IRootReducer {
	users: IUsersState;
	photo: IPhotoState;
}

export const rootReducer = combineReducers({
	users: usersReducer,
	photo: photoReducer,
});
