import { model, Schema } from "mongoose";

const UserSchema = new Schema({
	name: { type: String, require },
	avatar: { type: String, require },
});

export default model("user", UserSchema);
