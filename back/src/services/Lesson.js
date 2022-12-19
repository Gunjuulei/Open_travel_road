import { Lesson } from "../models/index.js";

export class LessonServices {
  static async findOne(query, projection, lean, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const lesson = await Lesson.findOne({ $and: query }, projection, {
          lean,
          populate,
        });
        resolve(lesson);
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async find(query, projection, pageSize, pageNum, lean, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const lesson = await Lesson.find({ $and: query }, projection, {
          lean,
          populate,
        })
          .limit(pageNum || 0)
          .skip((pageNum || 0) * (pageSize || 0));
        resolve(lesson);
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async save(title, teacher, class_, topics, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const lesson = new Lesson();
        lesson.title = title;
        lesson.class = class_;
        lesson.teacher = teacher;
        lesson.topics = topics;
        let saved;
        if (populate) saved = await (await lesson.save()).populate(populate);
        else saved = await lesson.save();
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
    title,
    class_,
    teacher,
    topics,
    populate
  ) {
    try {
      return new Promise(async (resolve, reject) => {
        const saveQuery = {};
        if (title) saveQuery.title = title;
        if (class_) saveQuery.class = class_;
        if (teacher) saveQuery.teacher = teacher;
        if (topics) saveQuery.topics = topics;
        const lesson = await Lesson.findOneAndUpdate(
          { $and: query },
          { $set: saveQuery },
          { new: true, populate }
        );
        resolve({
          ...(lesson._doc || {}),
        });
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async findOneAndDelete(query, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const lesson = await Lesson.findOneAndUpdate(
          { $and: query },
          { $set: { status: "deleted" } },
          { new: true, populate }
        );
        resolve({
          ...(lesson._doc || {}),
        });
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
}
