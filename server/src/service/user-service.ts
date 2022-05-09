import UserModel from "../models/user-model";
import { usersMockList } from "../mock/common";

class UserService {
	public async getAllUsers() {
		const list = await UserModel.find({}).select("-_id -__v");
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
