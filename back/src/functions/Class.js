import { ClassServices } from "../services/index.js";
import { compareIds, isId } from "../utils/util.js";
import { StudentMetaFunctions } from "./StudentMeta.js";

export class ClassFunctions extends ClassServices {
  static async getStudentMetasAndScores(query, projection, lean, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const class_ = await this.findOne(query, projection, lean, populate);
        const studentMetas = await StudentMetaFunctions.find(
          [
            { student: (class_?.students || []).map((stud) => stud?._id) },
            { status: "active" },
          ],
          null,
          0,
          0,
          true,
          [
            {
              path: "parent",
              select: { password: 0 },
              match: { status: "active" },
            },
          ]
        );
        if (class_ && isId(class_?._id)) {
          console.log(class_)
          class_.students = (class_?.students || []).map((student) => ({
            ...(student || {}),
            guardian: (studentMetas || []).find((meta) =>
              compareIds(meta.student, student?._id)
            )?.parent,
          }));
          resolve(class_);
        } else {
          resolve(null);
        }
      });
    } catch (err) {
      throw new Error(err);
    }
  }
  static async getStudents(query, projection, lean, populate) {
    try {
      return new Promise(async (resolve, reject) => {
        const class_ = await this.findOne(query, projection, lean, populate);
        resolve(class_?.students);
      });
    } catch (err) {
      throw new Error(err);
    }
  }
}
