import Grid from "gridfs-stream";
import PhotosModel from "../models/photos-model";
import mongoose from "mongoose";

class PhotosService {
	public async getPhoto(gfs: Grid.Grid, filename: string) {
		try {
			if (!filename) filename = "image.jpg";
			const file = await gfs.files.findOne({ filename });
			const readStream = gfs.createReadStream(file.filename);
			return readStream;
		} catch (e) {
			console.log(e);
		}
	}

	public async getRandomImage() {
		try {
			const count = await PhotosModel.count();
			let photoObj: any;
			const getRandomInt = (max: number) => {
				max = Math.floor(max);
				return Math.floor(Math.random() * (max - 1));
			};

			await PhotosModel.find({}, (err, elem) => {
				let index = getRandomInt(count);
				if (index >= count) index = count - 1;
				photoObj = elem[index].toObject();
			});

			let gfs;
			const conn = mongoose.connection;
			gfs = Grid(conn.db, mongoose.mongo);
			gfs.collection("cats");
			return this.getPhoto(gfs, photoObj?.filename);
		} catch (err) {
			console.log(err);
		}
	}
}

export default new PhotosService();
