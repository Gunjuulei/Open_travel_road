import { GENDERS, ROLES, STATUS } from "../utils/util.js";
import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  register_id: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: { type: String, required: true, enum: GENDERS },
  role: { type: String, required: true, enum: ROLES },

  created: { type: Date, default: Date.now() },
  status: { type: String, enum: STATUS, default: "active" },
});

export default mongoose.model("User", Schema);
