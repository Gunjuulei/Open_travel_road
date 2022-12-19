import {
  AttendanceFunctions,
  TopicFunctions,
  UserFunctions,
  ClassFunctions,
  LessonFunctions,
} from "../../functions/index.js";
import { isId, me, compareIds, ATTENDANCE_TYPES } from "../../utils/util.js";

export class AttendanceCtrl {
  static async getAttendance(req, res) {
    try {
      const { topic, class: class_ } = req.query || {};
      if (!topic || !class_)
        return res.json({ success: false, msg: "Мэдээлэл дутуу байна" });
      const attendance = await AttendanceFunctions.find(
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
      return res.json({ success: true, attendance, students });
    } catch (err) {
      return res.json({
        success: false,
        msg: err?.message || err?.msg || err,
      });
    }
  }
  static async submitAttendance(req, res) {
    try {
      const {
        _id,
        topic,
        class: class_,
        lesson,
        student,
        type,
      } = req.body || {};

      const foundTopic = await TopicFunctions.findOne(
        [{ status: "active", _id: topic }],
        null,
        true
      );
      if (!foundTopic || !isId(foundTopic?._id))
        return res.json({ success: false, msg: "Сэдэв олдсонгүй" });

      const foundClass = await ClassFunctions.findOne(
        [{ status: "active", _id: class_ }],
        null,
        true
      );
      if (!foundClass || !isId(foundClass?._id))
        return res.json({ success: false, msg: "Анги олдсонгүй" });

      const foundLesson = await LessonFunctions.findOne(
        [{ status: "active", _id: lesson }],
        null,
        true
      );
      if (!foundLesson || !isId(foundLesson?._id))
        return res.json({ success: false, msg: "Хичээл олдсонгүй" });

      // End hicheel angi sedev zuils ni hamaaraltai esehiig shalgah shaardlagatai

      const foundStudent = await UserFunctions.findOne(
        [{ status: "active", _id: student }],
        null,
        true
      );
      if (!foundStudent || !isId(foundStudent?._id))
        return res.json({ success: false, msg: "Сурагч олдсонгүй" });

      if (!ATTENDANCE_TYPES.includes(type))
        return res.json({
          success: false,
          msg: "Ирцийн төрөл буруу байна",
        });

      if (_id && isId(_id)) {
        const foundAttendance = await AttendanceFunctions.findOne(
          [{ status: "active", _id }],
          null,
          true
        );
        if (foundAttendance && isId(foundAttendance?._id)) {
          if (compareIds(attendance?.teacher, me(req))) {
            const savedAttendance = await AttendanceFunctions.findOneAndUpdate(
              [{ status: "active", _id }],
              topic,
              class_,
              lesson,
              student,
              me(req),
              type,
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
            if (savedAttendance && isId(savedAttendance?._id)) {
              return res.json({ success: true, attendance: savedAttendance });
              s;
            } else {
              return res.json({ success: false, msg: "System error!" });
            }
          } else {
            return res.json({
              success: false,
              msg: "Зөвхөн өөрийн тавьсан ирцийг өөрчлөх боломжтой",
            });
          }
        } else {
          return res.json({
            success: false,
            msg: "Ирц олдсонгүй",
          });
        }
      } else {
        const beforeAttendance = await AttendanceFunctions.findOne(
          [
            {
              status: "active",
              topic,
              class: class_,
              student: student,
              teacher: me(req),
            },
          ],
          null,
          true
        );
        if (beforeAttendance) {
          const savedAttendance = await AttendanceFunctions.findOneAndUpdate(
            [{ status: "active", _id: beforeAttendance?._id }],
            topic,
            class_,
            lesson,
            student,
            me(req),
            type,
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
          if (savedAttendance && isId(savedAttendance?._id)) {
            return res.json({ success: true, attendance: savedAttendance });
          } else {
            return res.json({ success: false, msg: "System error!" });
          }
        } else {
          const savedAttendance = await AttendanceFunctions.save(
            topic,
            class_,
            lesson,
            student,
            me(req),
            type,
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
          if (savedAttendance && isId(savedAttendance?._id)) {
            return res.json({ success: true, attendance: savedAttendance });
          } else {
            return res.json({ success: false, msg: "System error!" });
          }
        }
      }
    } catch (err) {
      return res.json({
        success: false,
        msg: err?.message || err?.msg || err,
      });
    }
  }
  static async deleteAttendance(req, res) {
    try {
      const { _id } = req.body || {};
      const searchQu = [];
      if (!_id)
        return res.json({ success: false, msg: "Мэдээлэл дутуу байна" });
      else searchQu.push({ _id, status: "active" });
      const foundById = await AttendanceFunctions.findOne(searchQu);
      if (foundById) {
        if (compareIds(foundById?.teacher, me(req))) {
          const attendance = await AttendanceFunctions.findOneAndDelete([
            { _id, status: "active" },
          ]);
          if (attendance && isId(attendance?._id)) {
            return res.json({ success: true, class: attendance, _id });
          } else {
            return res.json({ success: false, msg: "System error!" });
          }
        } else {
          return res.json({
            success: false,
            msg: "Зөвхөн өөрийн тавьсан ирцийг засах боломжтой",
          });
        }
      } else {
        return res.json({
          success: false,
          msg: "Тавьсан ирц олдсонгүй",
        });
      }
    } catch (err) {
      return res.json({
        success: false,
        msg: err?.message || err?.msg || err,
      });
    }
  }
}
