import { Schedule } from "../models/index.js";

export class ScheduleServices {
  static async findOne(query, projection, lean, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const schedule = await Schedule.findOne({ $and: query }, projection, {
          lean,
          populate,
        });
        resolve(schedule);
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async find(query, projection, pageSize, pageNum, lean, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const schedule = await Schedule.find({ $and: query }, projection, {
          lean,
          populate,
        })
          .limit(pageNum || 0)
          .skip((pageNum || 0) * (pageSize || 0));
        resolve(schedule);
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async save(teacher, class_, lesson, day, time, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const schedule = new Schedule();
        schedule.teacher = teacher;
        schedule.class = class_;
        schedule.lesson = lesson;
        schedule.day = day;
        schedule.time = time;
        let saved;
        if (populate) saved = await (await schedule.save()).populate(populate);
        else saved = await schedule.save();
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
    teacher,
    class_,
    lesson,
    day,
    time,
    populate
  ) {
    try {
      return new Promise(async (resolve, reject) => {
        const saveQuery = {};
        if (teacher) saveQuery.teacher = teacher;
        if (class_) saveQuery.class = class_;
        if (lesson) saveQuery.lesson = lesson;
        if (day) saveQuery.day = day;
        if (time) saveQuery.time = time;
        const schedule = await Schedule.findOneAndUpdate(
          { $and: query },
          { $set: saveQuery },
          { new: true, populate }
        );
        resolve({
          ...(schedule._doc || {}),
        });
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async findOneAndDelete(query, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const schedule = await Schedule.findOneAndUpdate(
          { $and: query },
          { $set: { status: "deleted" } },
          { new: true, populate }
        );
        resolve({
          ...(schedule._doc || {}),
        });
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
}
