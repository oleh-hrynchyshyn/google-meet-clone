import { combineReducers } from "redux";
import { usersReducer } from "./users/reducer";
import { IUser } from "../interfaces/user";
interface IUsersState {
	users: Array<IUser>;
	loading: boolean;
}
export interface IRootReducer {
	users: IUsersState;
}

export const rootReducer = combineReducers({
	users: usersReducer,
});
