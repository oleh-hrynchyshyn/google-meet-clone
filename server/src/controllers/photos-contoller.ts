import { Request, Response, NextFunction } from "express";
import photosService from "../service/photos-service";

class PhotosController {
	public getPhotoUrl(collection: string) {
		return (req: Request, res: Response, next: NextFunction) => {
			try {
				const responce = photosService.getPhotoUrl(req, collection);
				return res.send(responce);
			} catch (e) {
				next(e);
			}
		};
	}

	public getPhoto(collection: string) {
		return async (req: Request, res: Response, next: NextFunction) => {
			try {
				const responce = await photosService.getPhoto(
					req.params.filename,
					collection,
				);
				responce.pipe(res);
			} catch (e) {
				next(e);
			}
		};
	}

	public async getRandomImage(req: Request, res: Response, next: NextFunction) {
		try {
			const responce = await photosService.getRandomImage();
			responce.pipe(res);
		} catch (e) {
			next(e);
		}
	}
}

export default new PhotosController();
