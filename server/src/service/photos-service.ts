import Grid from "gridfs-stream";
import PhotosModel from "../models/photos-model";
import mongoose from "mongoose";
import { Request } from "express";
import { ApiError } from "../exceptions/api-error";
class PhotosService {
	public getPhotoUrl(req: Request, collection: string) {
		if (req.file === undefined) {
			return "you must select a file";
		}
		const imgUrl = `${process.env.API}/file/${collection}Photo/${req.file.filename}`;
		return imgUrl;
	}

	public async getPhoto(filename: string, collection: string) {
		let gfs: Grid.Grid;
		const conn = mongoose.connection;
		gfs = Grid(conn.db, mongoose.mongo);
		gfs.collection(collection);
		if (!filename) {
			throw ApiError.InternalServerError();
		}
		const file = await gfs.files.findOne({ filename });
		const readStream = gfs.createReadStream(file.filename);
		return readStream;
	}

	private getRandomInt(max: number) {
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - 1));
	}

	public async getRandomImage() {
		const count = await PhotosModel.count();
		let photoObj: any;

		await PhotosModel.find({}, (err, elem) => {
			let index = this.getRandomInt(count);
			if (index >= count) index = count - 1;
			photoObj = elem[index].toObject();
		});

		return this.getPhoto(photoObj.filename, "cats");
	}
}

export default new PhotosService();
