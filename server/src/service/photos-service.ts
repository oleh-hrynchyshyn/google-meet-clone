import Grid from "gridfs-stream";
import PhotosModel from "../models/photos-model";
import mongoose from "mongoose";
import { Request } from "express";
class PhotosService {
	public getPhotoUrl(req: Request, collection: String) {
		if (req.file === undefined) {
			return "you must select a file";
		}
		const imgUrl = `${process.env.API}/file/${collection}Photo/${req.file.filename}`;
		return imgUrl;
	}

	public async getPhoto(filename: string, collection: string) {
		try {
			let gfs: Grid.Grid;
			const conn = mongoose.connection;
			gfs = Grid(conn.db, mongoose.mongo);
			gfs.collection(collection);
			if (!filename) filename = "image.jpg";
			const file = await gfs.files.findOne({ filename });
			const readStream = gfs.createReadStream(file.filename);
			return readStream;
		} catch (e) {
			console.log(e);
		}
	}

	private getRandomInt(max: number) {
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - 1));
	}

	public async getRandomImage() {
		try {
			const count = await PhotosModel.count();
			let photoObj: any;

			await PhotosModel.find({}, (err, elem) => {
				let index = this.getRandomInt(count);
				if (index >= count) index = count - 1;
				photoObj = elem[index].toObject();
			});

			return this.getPhoto(photoObj?.filename, "cats");
		} catch (err) {
			console.log(err);
		}
	}
}

export default new PhotosService();
