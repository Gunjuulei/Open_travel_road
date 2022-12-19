import { STATUS } from "../utils/util.js";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;

const Schema = new mongoose.Schema({
  teacher: { type: ObjectId, ref: "User", required: true },
  class: { type: ObjectId, ref: "Class", required: true },
  lesson: { type: ObjectId, ref: "Lesson", required: true },

  day: { type: Number, min: 1, max: 5, required: true },
  time: { type: Number, min: 1, max: 10, required: true },

  created: { type: Date, default: Date.now() },
  status: { type: String, enum: STATUS, default: "active" },
});

export default mongoose.model("Schedule", Schema);
