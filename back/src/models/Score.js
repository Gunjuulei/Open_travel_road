import { STATUS } from "../utils/util.js";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;

const Schema = new mongoose.Schema({
  topic: { type: ObjectId, ref: "Topic", required: true },
  class: { type: ObjectId, ref: "Class", required: true },
  lesson: { type: ObjectId, ref: "Lesson", required: true },
  student: { type: ObjectId, ref: "User", required: true },
  teacher: { type: ObjectId, ref: "User", required: true },
  points: { type: Number, min: 0, max: 100 },

  created: { type: Date, default: Date.now() },
  status: { type: String, enum: STATUS, default: "active" },
});

export default mongoose.model("Score", Schema);
