import { Class } from "../models/index.js";

export class ClassServices {
  static async findOne(query, projection, lean, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const class_ = await Class.findOne({ $and: query }, projection, {
          lean,
          populate,
        });
        resolve(class_);
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async find(query, projection, pageSize, pageNum, lean, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const class_ = await Class.find({ $and: query }, projection, {
          lean,
          populate,
        })
          .limit(pageNum || 0)
          .skip((pageNum || 0) * (pageSize || 0));
        resolve(class_);
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async save(level, group, teacher, students, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const class_ = new Class();
        class_.level = level;
        class_.group = group;
        class_.teacher = teacher;
        class_.students = students;
        let saved;
        if (populate) saved = await (await class_.save()).populate(populate);
        else saved = await class_.save();
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
    level,
    group,
    teacher,
    students,
    populate
  ) {
    try {
      return new Promise(async (resolve, reject) => {
        const saveQuery = {};
        if (level) saveQuery.level = level;
        if (group) saveQuery.group = group;
        if (teacher) saveQuery.teacher = teacher;
        if (students) saveQuery.students = students;
        const class_ = await Class.findOneAndUpdate(
          { $and: query },
          { $set: saveQuery },
          { new: true, populate }
        );
        resolve({
          ...(class_._doc || {}),
        });
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async findOneAndDelete(query, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const class_ = await Class.findOneAndUpdate(
          { $and: query },
          { $set: { status: "deleted" } },
          { new: true, populate }
        );
        resolve({
          ...(class_._doc || {}),
        });
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
}
