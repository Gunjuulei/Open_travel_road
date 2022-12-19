import { Announcement } from "../models/index.js";

export class AnnouncementServices {
  static async findOne(query, projection, lean, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const announcement = await Announcement.findOne(
          { $and: query },
          projection,
          { lean, populate }
        );
        resolve(announcement);
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async find(query, projection, pageSize, pageNum, lean, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const announcement = await Announcement.find(
          { $and: query },
          projection,
          {
            lean,
            populate,
          }
        )
          .limit(pageNum || 0)
          .skip((pageNum || 0) * (pageSize || 0));
        resolve(announcement);
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async save(teacher, class_, text, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const announcement = new Announcement();
        announcement.teacher = teacher;
        announcement.class = class_;
        announcement.text = text;
        let saved;
        if (populate)
          saved = await (await announcement.save()).populate(populate);
        else saved = await announcement.save();
        resolve({
          ...(saved._doc || {}),
        });
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async findOneAndUpdate(query, teacher, class_, text, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const saveQuery = {};
        if (teacher) saveQuery.teacher = teacher;
        if (class_) saveQuery.class = class_;
        if (text) saveQuery.text = text;
        const announcement = await Announcement.findOneAndUpdate(
          { $and: query },
          { $set: saveQuery },
          { new: true, populate }
        );
        resolve({
          ...(announcement._doc || {}),
        });
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async findOneAndDelete(query, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const announcement = await Announcement.findOneAndUpdate(
          { $and: query },
          { $set: { status: "deleted" } },
          { new: true, populate }
        );
        resolve({
          ...(announcement._doc || {}),
        });
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
}
