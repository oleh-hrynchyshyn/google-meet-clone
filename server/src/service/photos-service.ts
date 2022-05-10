import Grid from "gridfs-stream";
import PhotosModel from "../models/photos-model";
import mongoose from "mongoose";
import { ApiError } from "../exceptions/api-error";
import { PhotosMockList } from "../mock/common";
class PhotosService {
	public getPhotoUrl(filename: string, collection: string) {
		const imgUrl = `${process.env.API}/file/${collection}Photo/${filename}`;
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
		return Math.floor(Math.random() * max);
	}

	public async getRandomImage() {
		const count = await PhotosModel.count();
		let photoObj: any;

		await PhotosModel.find({}, (err, elem) => {
			let index = this.getRandomInt(count);
			photoObj = elem[index].toObject();
		});
		let filename = "";
		if (!photoObj) {
			const count = PhotosMockList.length;
			filename = PhotosMockList[this.getRandomInt(count)];
		} else {
			filename = photoObj.filename;
		}
		return this.getPhotoUrl(filename, "cat");
	}
}

export default new PhotosService();
