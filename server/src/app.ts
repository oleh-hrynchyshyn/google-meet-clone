import express from "express";
import cors from "cors";

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
	console.log(`server is running on ${PORT} port`);
});
