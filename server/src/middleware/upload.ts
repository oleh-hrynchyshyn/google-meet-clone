import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
require("dotenv").config();

const upload = (collection: string) => {
	const storage = new GridFsStorage({
		url: process.env.DB,
		options: {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
		file: (req, file) => {
			const match = ["image/png", "image/jpeg", "image/gif"];
			if (match.indexOf(file.mimetype) === -1) {
				const filename = `${file.originalname}`;
				return filename;
			}
			return {
				bucketName: collection,
				filename: `${file.originalname}`,
			};
		},
	});

	return multer({ storage });
};

export default upload;
