import { GROUPS, STATUS } from "../utils/util.js";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;

const Schema = new mongoose.Schema({
  level: { type: Number, min: 1, max: 12 },
  group: { type: String, enum: GROUPS },

  teacher: { type: ObjectId, ref: "User" },
  students: [{ type: ObjectId, ref: "User" }],

  created: { type: Date, default: Date.now() },
  status: { type: String, enum: STATUS, default: "active" },
});

export default mongoose.model("Class", Schema);
