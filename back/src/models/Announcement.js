import { STATUS } from "../utils/util.js";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;

const Schema = new mongoose.Schema({
  teacher: { type: ObjectId, ref: "User", required: true },
  class: { type: ObjectId, ref: "Class", required: true },
  text: { type: String, required: true },

  created: { type: Date, default: Date.now() },
  status: { type: String, enum: STATUS, default: "active" },
});

export default mongoose.model("Announcement", Schema);
