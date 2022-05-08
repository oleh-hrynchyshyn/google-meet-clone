import { Router } from "express";
import upload from "../middleware/upload";
import photosContoller from "../controllers/photos-contoller";
const routers = Router();

routers.get("/getRandomImage", photosContoller.getRandomImage);

routers.get("/getAllUsers", (req, res) => {
	return res.json("hello1");
});

routers.post("/uploadUserPhoto", upload("avatar").single(""), (req, res) => {
	photosContoller.uploadPhoto(req, res, "user");
});

routers.post("/uploadCatPhoto", upload("cats").single(""), (req, res) => {
	photosContoller.uploadPhoto(req, res, "cat");
});

routers.get("/file/userPhoto/:filename", (req, res) => {
	photosContoller.getPhoto(req, res, "avatar");
});

routers.get("/file/catPhoto/:filename", (req, res) => {
	photosContoller.getPhoto(req, res, "cats");
});

export default routers;
