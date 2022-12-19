import { Attendance } from "../models/index.js";

export class AttendanceServices {
  static async findOne(query, projection, lean, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const attendance = await Attendance.findOne(
          { $and: query },
          projection,
          { lean, populate }
        );
        resolve(attendance);
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async find(query, projection, pageSize, pageNum, lean, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const attendance = await Attendance.find({ $and: query }, projection, {
          lean,
          populate,
        })
          .limit(pageNum || 0)
          .skip((pageNum || 0) * (pageSize || 0));
        resolve(attendance);
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async save(topic, class_, lesson, student, teacher, type, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const attendance = new Attendance();
        attendance.topic = topic;
        attendance.class = class_;
        attendance.lesson = lesson;
        attendance.student = student;
        attendance.teacher = teacher;
        attendance.type = type;
        let saved;
        if (populate)
          saved = await (await attendance.save()).populate(populate);
        else saved = await attendance.save();
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
    type,
    populate
  ) {
    try {
      return new Promise(async (resolve, reject) => {
        const saveQuery = {};
        if (topic) saveQuery.topic = topic;
        if (class_) saveQuery.class = class_;
        if (lesson) saveQuery.lesson = lesson;
        if (student) saveQuery.student = student;
        if (teacher) saveQuery.teacher = teacher;
        if (type) saveQuery.type = type;
        const attendance = await Attendance.findOneAndUpdate(
          { $and: query },
          { $set: saveQuery },
          { new: true, populate }
        );
        resolve({
          ...(attendance._doc || {}),
        });
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async findOneAndDelete(query, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const attendance = await Attendance.findOneAndUpdate(
          { $and: query },
          { $set: { status: "deleted" } },
          { new: true, populate }
        );
        resolve({
          ...(attendance._doc || {}),
        });
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
}
