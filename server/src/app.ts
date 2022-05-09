import express from "express";
import routers from "./router/index";
import mongoose from "mongoose";
import cors from "cors";
import errorMiddleware from "./middleware/error-middleware";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use("/api", routers);
app.use(express.json());
app.use(errorMiddleware);

const start = async () => {
	try {
		const connectionParams = {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		};

		await mongoose.connect(process.env.DB, connectionParams);
		console.log("connected to mongoDb");

		app.listen(PORT, () => {
			console.log(`server is running on ${PORT} port`);
		});
	} catch (err) {
		console.log("error", err);
	}
};

start();
