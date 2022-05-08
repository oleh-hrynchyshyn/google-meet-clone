import { Request, Response } from "express";
import mongoose from "mongoose";
import Grid from "gridfs-stream";
import photosService from "../service/photos-service";

class PhotosController {
	public uploadUserPhoto(req: Request, res: Response) {
		if (req.file === undefined) return res.send("you must select a file");
		const imgUrl = `${process.env.API}/file/userPhoto/${req.file.filename}`;
		return res.send(imgUrl);
	}

	public uploadCatsPhoto(req: Request, res: Response) {
		if (req.file === undefined) return res.send("you must select a file");
		const imgUrl = `${process.env.API}/file/catPhoto/${req.file.filename}`;
		return res.send(imgUrl);
	}

	public async getUserPhoto(req: Request, res: Response) {
		let gfs;
		const conn = mongoose.connection;
		gfs = Grid(conn.db, mongoose.mongo);
		gfs.collection("avatar");
		const responce = await photosService.getPhoto(gfs, req);
		responce.pipe(res);
	}

	public async getCatPhoto(req: Request, res: Response) {
		let gfs;
		const conn = mongoose.connection;
		gfs = Grid(conn.db, mongoose.mongo);
		gfs.collection("cats");
		const responce = await photosService.getPhoto(gfs, req);
		responce.pipe(res);
	}
}

export default new PhotosController();
