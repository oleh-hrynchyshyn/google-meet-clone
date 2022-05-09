import { model, Schema } from "mongoose";

const UserSchema = new Schema({
	id: { type: String, require },
	name: { type: String, require },
	avatar: { type: String, require },
	cameraOn: { type: Boolean, require },
});

export default model("user", UserSchema);
