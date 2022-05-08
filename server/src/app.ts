import express from "express";
import routers from "./router/index";
import mongoose from "mongoose";

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api", routers);
app.use(express.json());

const start = async () => {
	try {
		const connectionParams = {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		};

		await mongoose.connect(process.env.DB, connectionParams);
		console.log("connected to mongoDb");
	} catch (err) {
		console.log("error", err);
	}

	app.listen(PORT, () => {
		console.log(`server is running on ${PORT} port`);
	});
};

start();
