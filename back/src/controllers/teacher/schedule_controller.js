import {
  ClassFunctions,
  LessonFunctions,
  ScheduleFunctions,
} from "../../functions/index.js";
import { GROUPS, isId, me, compareIds } from "../../utils/util.js";

export class ScheduleCtrl {
  static async getSchedules(req, res) {
    try {
      const { pageSize, pageNum } = req.body || {};
      const schedules = await ScheduleFunctions.find(
        [{ status: "active", teacher: me(req) }],
        null,
        pageSize,
        pageNum,
        true,
        [
          { path: "class", match: { status: "active" } },
          {
            path: "class.students",
            select: { password: 0 },
            match: { status: "active" },
          },
          {
            path: "teacher",
            select: { password: 0 },
            match: { status: "active" },
          },
          { path: "lesson", match: { status: "active" } },
          { path: "lesson.topics", match: { status: "active" } },
        ]
      );
      return res.json({ schedules, success: true });
    } catch (err) {
      console.log(err);
      return res.json({
        success: false,
        msg: err?.message || err?.msg || err,
      });
    }
  }
  static async submitSchedule(req, res) {
    try {
      const { _id, class: class_, lesson, day, time } = req.body || {};
      if (
        !class_ ||
        !isId(class_) ||
        !lesson ||
        !isId(lesson) ||
        day < 1 ||
        day > 5 ||
        time < 1 ||
        time > 10
      ) {
        return res.json({ success: false, msg: "Мэдээлэл буруу байна" });
      }
      const lessonFound = await LessonFunctions.findOne(
        [{ status: "active", _id: lesson }],
        null,
        true
      );
      if (!lessonFound || !isId(lessonFound?._id))
        return res.json({ success: false, msg: "Хичээл олдсонгүй" });
      const classFound = await ClassFunctions.findOne(
        [{ status: "active", _id: class_ }],
        null,
        true
      );
      if (!classFound || !isId(classFound?._id))
        return res.json({ success: false, msg: "Анги олдсонгүй" });
      if (_id) {
        const foundSchedule = await ScheduleFunctions.findOne(
          [{ status: "active", _id }],
          null,
          true
        );
        if (foundSchedule && isId(foundSchedule?._id)) {
          if (compareIds(foundSchedule?.teacher, me(req))) {
            const savedSchedule = await ScheduleFunctions.findOneAndUpdate(
              [{ status: "active", _id }],
              me(req),
              class_,
              lesson,
              day,
              time,
              ["class", "class.students", "teacher", "lesson", "lesson.topics"]
            );
            if (savedSchedule && isId(savedSchedule?._id)) {
              return res.json({ success: true, schedule: savedSchedule, _id });
            } else {
              return res.json({ success: false, msg: "System error!" });
            }
          } else {
            return res.json({
              success: false,
              msg: "Өөрийн хуваарийг засах боломжтой",
            });
          }
        } else {
          return res.json({ success: false, msg: "Хуваарь олдсонгүй" });
        }
      } else {
        const savedSchedule = await ScheduleFunctions.save(
          me(req),
          class_,
          lesson,
          day,
          time,
          [
            { path: "class", match: { status: "active" } },
            {
              path: "class.students",
              select: { password: 0 },
              match: { status: "active" },
            },
            {
              path: "teacher",
              select: { password: 0 },
              match: { status: "active" },
            },
            { path: "lesson", match: { status: "active" } },
            { path: "lesson.topics", match: { status: "active" } },
          ]
        );
        if (savedSchedule && isId(savedSchedule?._id)) {
          return res.json({ success: true, schedule: savedSchedule });
        } else {
          return res.json({ success: false, msg: "System error!" });
        }
      }
    } catch (err) {
      return res.json({
        success: false,
        msg: err?.message || err?.msg || err,
      });
    }
  }
  static async deleteSchedule(req, res) {
    try {
      const { _id } = req.body || {};
      const searchQu = [];
      if (!_id)
        return res.json({ success: false, msg: "Мэдээлэл дутуу байна" });
      else searchQu.push({ _id, status: "active" });
      const foundById = await ScheduleFunctions.findOne(searchQu);
      if (foundById) {
        if (compareIds(foundById?.teacher, me(req))) {
          const class_ = await ScheduleFunctions.findOneAndDelete([
            { _id, status: "active" },
          ]);
          if (class_ && isId(class_?._id)) {
            return res.json({ success: true, class: class_, _id });
          } else {
            return res.json({ success: false, msg: "System error!" });
          }
        } else {
          return res.json({
            success: false,
            msg: "Зөвхөн өөрийн хуваарийг засах боломжтой",
          });
        }
      } else {
        return res.json({
          success: false,
          msg: "Хуваарь олдсонгүй",
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
