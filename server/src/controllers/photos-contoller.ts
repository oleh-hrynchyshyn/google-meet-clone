import { Request, Response } from "express";
import mongoose from "mongoose";
import Grid from "gridfs-stream";
import photosService from "../service/photos-service";

class PhotosController {
	public uploadPhoto(req: Request, res: Response, collection: String) {
		if (req.file === undefined) return res.send("you must select a file");
		const imgUrl = `${process.env.API}/file/${collection}Photo/${req.file.filename}`;
		return res.send(imgUrl);
	}

	public async getPhoto(req: Request, res: Response, collection: string) {
		let gfs;
		const conn = mongoose.connection;
		gfs = Grid(conn.db, mongoose.mongo);
		gfs.collection(collection);
		const responce = await photosService.getPhoto(gfs, req.params.filename);
		responce.pipe(res);
	}

	public async getRandomImage(req: Request, res: Response) {
		const responce = await photosService.getRandomImage();
		responce.pipe(res);
	}
}

export default new PhotosController();
