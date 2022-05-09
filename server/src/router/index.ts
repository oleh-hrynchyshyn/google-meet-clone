import { Router } from "express";
import upload from "../middleware/upload";
import photosContoller from "../controllers/photos-contoller";
import userController from "../controllers/user-controller";
const routers = Router();

routers.get("/getRandomImage", photosContoller.getRandomImage);

routers.get("/getAllUsers", userController.getAllUsers);

routers.post(
	"/uploadUserPhoto",
	upload("avatar").single(""),
	photosContoller.getPhotoUrl("user"),
);

routers.post(
	"/uploadCatPhoto",
	upload("cats").single(""),
	photosContoller.getPhotoUrl("cat"),
);

routers.get("/file/userPhoto/:filename", photosContoller.getPhoto("avatar"));

routers.get("/file/catPhoto/:filename", photosContoller.getPhoto("cats"));

export default routers;
