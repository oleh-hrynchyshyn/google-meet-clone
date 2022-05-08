import { Request, Response } from "express";
import mongoose from "mongoose";
import Grid from "gridfs-stream";
import photosService from "../service/photos-service";

class PhotosController {
	public getPhotoUrl(req: Request, res: Response, collection: String) {
		const responce = photosService.getPhotoUrl(req, collection);
		return res.send(responce);
	}

	public async getPhoto(req: Request, res: Response, collection: string) {
		const responce = await photosService.getPhoto(
			req.params.filename,
			collection,
		);
		responce.pipe(res);
	}

	public async getRandomImage(req: Request, res: Response) {
		const responce = await photosService.getRandomImage();
		responce.pipe(res);
	}
}

export default new PhotosController();
