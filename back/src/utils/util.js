import mongoose from "mongoose";

export const GENDERS = ["male", "female"];
export const ROLES = ["teacher", "guardian", "student"];
export const STATUS = ["active", "deleted"];
export const GROUPS = ["а", "б", "в", "г", "д", "е", "ё"];
export const ATTENDANCE_TYPES = ["present", "sick", "absent", "unabsent"];

export const phoneRegex = /^([0-9]{8})$/s;
export const registerRegex = /^([а-яА-ЯӨөҮүЪъЁё]{2})([0-9]{8})$/s;
export const mailRegex =
  /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/s;

export const isId = (string) => mongoose.isValidObjectId(string);
export const me = (req) => req?.user?._id || null;
 
export const compareIds = (a, b) =>
  (a || "a").toString() === (b || "b").toString();
