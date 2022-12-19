import { STATUS } from "../utils/util.js";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;

const Schema = new mongoose.Schema({
  teacher: { type: ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  files: [{ type: String }],

  created: { type: Date, default: Date.now() },
  status: { type: String, enum: STATUS, default: "active" },
});

export default mongoose.model("Topic", Schema);
