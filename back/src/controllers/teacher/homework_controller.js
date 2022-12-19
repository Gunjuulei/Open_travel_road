import {
  HomeworkFunctions,
  ClassFunctions,
  UserFunctions,
} from "../../functions/index.js";
import { isId, me, compareIds, ATTENDANCE_TYPES } from "../../utils/util.js";

export class HomeworkCtrl {
  static async getHomeworks(req, res) {
    try {
      const { topic, class: class_ } = req.query || {};
      if (!topic || !class_)
        return res.json({ success: false, msg: "Мэдээлэл дутуу байна" });
      const homework = await HomeworkFunctions.find(
        [{ status: "active", topic, class: class_, teacher: me(req) }],
        null,
        0,
        0,
        true,
        [
          {
            path: "student",
            select: { password: 0 },
            match: { status: "active" },
          },
          {
            path: "teacher",
            select: { password: 0 },
            match: { status: "active" },
          },
          { path: "topic", match: { status: "active" } },
          { path: "class", match: { status: "active" } },
        ]
      );
      const students = await ClassFunctions.getStudents(
        [{ status: "active", _id: class_ }],
        null,
        true,
        [
          {
            path: "students",
            select: { password: 0 },
            match: { status: "active" },
          },
        ]
      );
      return res.json({ success: true, homework, students });
    } catch (err) {
      return res.json({
        success: false,
        msg: err?.message || err?.msg || err,
      });
    }
  }
  static async getHomework(req, res) {
    try {
      const { topic, class: class_, student_id } = req.query || {};
      if (!student_id || !topic || !class_)
        return res.json({ success: false, msg: "Мэдээлэл дутуу байна" });
      const homework = await HomeworkFunctions.findOne(
        [
          {
            status: "active",
            topic,
            class: class_,
            teacher: me(req),
            student: student_id,
          },
        ],
        null,
        true,
        [
          {
            path: "student",
            select: { password: 0 },
            match: { status: "active" },
          },
          {
            path: "teacher",
            select: { password: 0 },
            match: { status: "active" },
          },
          { path: "topic", match: { status: "active" } },
          { path: "class", match: { status: "active" } },
        ]
      );
      const student = await UserFunctions.findOne(
        [{ status: "active", _id: student_id }],
        { password: 0 },
        true
      );
      return res.json({ success: true, homework, student });
    } catch (err) {
      console.log(err);

      return res.json({
        success: false,
        msg: err?.message || err?.msg || err,
      });
    }
  }
}
