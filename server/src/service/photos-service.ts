import Grid from "gridfs-stream";
import { Request } from "express";
class PhotosService {
	public async getPhoto(gfs: Grid.Grid, req: Request) {
		try {
			const file = await gfs.files.findOne({ filename: req.params.filename });
			const readStream = gfs.createReadStream(file?.filename);
			return readStream;
		} catch (e) {
			console.log(e);
		}
	}
}

export default new PhotosService();
