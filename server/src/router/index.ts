import { Router } from "express";
import upload from "../middleware/upload";
import photosContoller from "../controllers/photos-contoller";
const routers = Router();

routers.get("/getRandomImage", (req, res) => {
	return res.json("hello");
});

routers.get("/getAllUsers", (req, res) => {
	return res.json("hello1");
});

routers.post(
	"/uploadUserPhoto",
	upload("avatar").single(""),
	photosContoller.uploadUserPhoto,
);

routers.post(
	"/uploadCatPhoto",
	upload("cats").single(""),
	photosContoller.uploadCatsPhoto,
);

routers.get("/file/userPhoto/:filename", photosContoller.getUserPhoto);
routers.get("/file/catPhoto/:filename", photosContoller.getCatPhoto);

export default routers;
