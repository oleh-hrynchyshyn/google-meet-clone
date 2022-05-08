import { Request, Response } from "express";
import userService from "../service/user-service";

class UserController {
	public async getAllUsers(req: Request, res: Response) {
		const responce = await userService.getAllUsers();
		return res.send(responce);
	}
}

export default new UserController();
