import { User } from "../models/index.js";

export class UserServices {
  static async findOne(query, projection, lean, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const user = await User.findOne({ $and: query }, projection, {
          lean,
          populate,
        });
        resolve(user);
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async find(query, projection, pageSize, pageNum, lean, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const user = await User.find({ $and: query }, projection, {
          lean,
          populate,
        })
          .limit(pageNum || 0)
          .skip((pageNum || 0) * (pageSize || 0));
        resolve(user);
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async save(
    first_name,
    last_name,
    phone,
    email,
    register_id,
    password,
    gender,
    role,
    populate
  ) {
    try {
      return new Promise(async (resolve, reject) => {
        const user = new User();
        user.first_name = first_name;
        user.last_name = last_name;
        user.phone = phone;
        user.email = email;
        user.register_id = register_id;
        user.password = password;
        user.gender = gender;
        user.role = role;
        let saved;
        if (populate) saved = await (await user.save()).populate(populate);
        else saved = await user.save();
        resolve({
          ...(saved._doc || {}),
        });
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async findOneAndUpdate(
    query,
    first_name,
    last_name,
    phone,
    email,
    register_id,
    password,
    gender,
    role,
    populate
  ) {
    try {
      return new Promise(async (resolve, reject) => {
        const saveQuery = {};
        if (first_name) saveQuery.first_name = first_name;
        if (last_name) saveQuery.last_name = last_name;
        if (phone) saveQuery.phone = phone;
        if (email) saveQuery.email = email;
        if (register_id) saveQuery.register_id = register_id;
        if (password) saveQuery.password = password;
        if (gender) saveQuery.gender = gender;
        if (role) saveQuery.role = role;
        const user = await User.findOneAndUpdate(
          { $and: query },
          { $set: saveQuery },
          { new: true, populate }
        );
        resolve({
          ...(user?._doc || {}),
        });
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async findOneAndDelete(query, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const user = await User.findOneAndUpdate(
          { $and: query },
          { $set: { status: "deleted" } },
          { new: true, populate }
        );
        resolve({
          ...(user._doc || {}),
        });
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
}
