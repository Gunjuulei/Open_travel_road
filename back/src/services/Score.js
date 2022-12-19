import { Score } from "../models/index.js";

export class ScoreServices {
  static async findOne(query, projection, lean, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const score = await Score.findOne({ $and: query }, projection, {
          lean,
          populate,
        });
        resolve(score);
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async find(query, projection, pageSize, pageNum, lean, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const score = await Score.find({ $and: query }, projection, {
          lean,
          populate,
        })
          .limit(pageNum || 0)
          .skip((pageNum || 0) * (pageSize || 0));
        resolve(score);
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async save(topic, class_, lesson, student, teacher, points, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const score = new Score();
        score.topic = topic;
        score.class = class_;
        score.lesson = lesson;
        score.student = student;
        score.teacher = teacher;
        score.points = points;
        let saved;
        if (populate) saved = await (await score.save()).populate(populate);
        else saved = await score.save();
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
    points,
    populate
  ) {
    try {
      return new Promise(async (resolve, reject) => {
        const saveQuery = {};
        if (topic) saveQuery.topic = topic;
        if (class_) saveQuery.class = class_;
        if (student) saveQuery.student = student;
        if (points) saveQuery.points = points;
        if (teacher) saveQuery.teacher = teacher;
        if (lesson) saveQuery.lesson = lesson;
        const score = await Score.findOneAndUpdate(
          { $and: query },
          { $set: saveQuery },
          { new: true, populate }
        );
        resolve({
          ...(score._doc || {}),
        });
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async findOneAndDelete(query, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const score = await Score.findOneAndUpdate(
          { $and: query },
          { $set: { status: "deleted" } },
          { new: true, populate }
        );
        resolve({
          ...(score._doc || {}),
        });
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
}
