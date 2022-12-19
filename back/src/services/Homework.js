import { Homework } from "../models/index.js";

export class HomeworkServices {
  static async findOne(query, projection, lean, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const homework = await Homework.findOne({ $and: query }, projection, {
          lean,
          populate,
        });
        resolve(homework);
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async find(query, projection, pageSize, pageNum, lean, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const homework = await Homework.find({ $and: query }, projection, {
          lean,
          populate,
        })
          .limit(pageNum || 0)
          .skip((pageNum || 0) * (pageSize || 0));
        resolve(homework);
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async save(
    topic,
    class_,
    lesson,
    student,
    teacher,
    files,
    text,
    populate
  ) {
    try {
      return new Promise(async (resolve, reject) => {
        const homework = new Homework();
        homework.topic = topic;
        homework.class = class_;
        homework.lesson = lesson;
        homework.student = student;
        homework.teacher = teacher;
        homework.files = files;
        homework.text = text;
        let saved;
        if (populate) saved = await (await homework.save()).populate(populate);
        else saved = await homework.save();
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
    topic,
    class_,
    lesson,
    student,
    teacher,
    files,
    text,
    populate
  ) {
    try {
      return new Promise(async (resolve, reject) => {
        const saveQuery = {};
        if (topic) saveQuery.topic = topic;
        if (class_) saveQuery.class_ = class_;
        if (lesson) saveQuery.lesson = lesson;
        if (student) saveQuery.student = student;
        if (teacher) saveQuery.teacher = teacher;
        if (files) saveQuery.files = files;
        if (text) saveQuery.text = text;
        const homework = await Homework.findOneAndUpdate(
          { $and: query },
          { $set: saveQuery },
          { new: true, populate }
        );
        resolve({
          ...(homework._doc || {}),
        });
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async findOneAndDelete(query, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const homework = await Homework.findOneAndUpdate(
          { $and: query },
          { $set: { status: "deleted" } },
          { new: true, populate }
        );
        resolve({
          ...(homework._doc || {}),
        });
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
}
