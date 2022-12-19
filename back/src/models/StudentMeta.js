import { STATUS } from "../utils/util.js";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;

const Schema = new mongoose.Schema({
  student: { type: ObjectId, ref: "User", required: true },
  parent: { type: ObjectId, ref: "User"},

  created: { type: Date, default: Date.now() },
  status: { type: String, enum: STATUS, default: "active" },
});

export default mongoose.model("StudentMeta", Schema);
