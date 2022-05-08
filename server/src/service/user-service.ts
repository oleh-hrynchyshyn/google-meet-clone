import UserModel from "../models/user-model";

class UserService {
	public async getAllUsers() {
		const list = new Promise(async (resolve) => {
			await UserModel.find({}, (err, elems) => {
				resolve(elems);
			});
		});
		return list;
	}
}

export default new UserService();
