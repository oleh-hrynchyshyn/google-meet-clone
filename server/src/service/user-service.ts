import UserModel from "../models/user-model";
import { usersMockList } from "../mock/common";

class UserService {
	public async getAllUsers() {
		const list = new Promise(async (resolve) => {
			await UserModel.find({}, (err, elems) => {
				resolve(elems);
			});
		});
		return list;
	}

	public async createNewUser() {
		const arr = await Promise.all(
			usersMockList.map(async (user) => {
				const newUser = new UserModel({ ...user });
				return await newUser.save();
			}),
		);
		return true;
	}
}

export default new UserService();
