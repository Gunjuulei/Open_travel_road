import { StudentMeta } from "../models/index.js";

export class StudentMetaServices {
  static async findOne(query, projection, lean, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const studentMeta = await StudentMeta.findOne(
          { $and: query },
          projection,
          {
            lean,
            populate,
          }
        );
        resolve(studentMeta);
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async find(query, projection, pageSize, pageNum, lean, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const studentMeta = await StudentMeta.find(
          { $and: query },
          projection,
          {
            lean,
            populate,
          }
        )
          .limit(pageNum || 0)
          .skip((pageNum || 0) * (pageSize || 0));
        resolve(studentMeta);
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async save(student, parent, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const studentMeta = new StudentMeta();
        studentMeta.student = student;
        studentMeta.parent = parent;
        let saved;
        if (populate)
          saved = await (await studentMeta.save()).populate(populate);
        else saved = await studentMeta.save();
        resolve({
          ...(saved._doc || {}),
        });
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async findOneAndUpdate(query, student, parent, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const saveQuery = {};
        if (student) saveQuery.student = student;
        if (parent) saveQuery.parent = parent;
        const studentMeta = await StudentMeta.findOneAndUpdate(
          { $and: query },
          { $set: saveQuery },
          { new: true, populate }
        );
        resolve({
          ...(studentMeta._doc || {}),
        });
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async findOneAndDelete(query, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const studentMeta = await StudentMeta.findOneAndUpdate(
          { $and: query },
          { $set: { status: "deleted" } },
          { new: true, populate }
        );
        resolve({
          ...(studentMeta._doc || {}),
        });
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
}
