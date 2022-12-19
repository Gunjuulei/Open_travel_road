import { Topic } from "../models/index.js";

export class TopicServices {
  static async findOne(query, projection, lean, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const topic = await Topic.findOne({ $and: query }, projection, {
          lean,
          populate,
        });
        resolve(topic);
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async find(query, projection, pageSize, pageNum, lean, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const topic = await Topic.find({ $and: query }, projection, {
          lean,
          populate,
        })
          .limit(pageNum || 0)
          .skip((pageNum || 0) * (pageSize || 0));
        resolve(topic);
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async save(teacher, title, description, files, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const topic = new Topic();
        topic.teacher = teacher;
        topic.title = title;
        topic.description = description;
        topic.files = files;
        let saved;
        if (populate) saved = await (await topic.save()).populate(populate);
        else saved = await topic.save();
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
    title,
    description,
    files,
    populate
  ) {
    try {
      return new Promise(async (resolve, reject) => {
        const saveQuery = {};
        if (teacher) saveQuery.teacher = teacher;
        if (title) saveQuery.title = title;
        if (description) saveQuery.description = description;
        if (files) saveQuery.files = files;

        const topic = await Topic.findOneAndUpdate(
          { $and: query },
          { $set: saveQuery },
          { new: true, populate }
        );
        resolve({
          ...(topic._doc || {}),
        });
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
  static async findOneAndDelete(query, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const topic = await Topic.findOneAndUpdate(
          { $and: query },
          { $set: { status: "deleted" } },
          { new: true, populate }
        );
        resolve({
          ...(topic._doc || {}),
        });
      });
    } catch (error) {
      return new Error(error.message || error || "System error!");
    }
  }
}
