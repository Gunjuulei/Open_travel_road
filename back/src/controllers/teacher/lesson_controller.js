import { ClassFunctions, LessonFunctions } from "../../functions/index.js";
import { GROUPS, isId, me, compareIds } from "../../utils/util.js";

export class LessonCtrl {
  static async getLessons(req, res) {
    try {
      const { pageSize, pageNum } = req.body || {};
      const activeClasses = await ClassFunctions.find([
        {
          status: "active",
        },
      ]);
      const lessons = await LessonFunctions.find(
        [
          {
            status: "active",
            teacher: me(req),
            class: { $in: (activeClasses || []).map(({ _id }) => _id) },
          },
        ],
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
          {
            path: "topics",
            match: { status: "active" },
          },
        ]
      );
      return res.json({ lessons, success: true });
    } catch (err) {
      return res.json({
        success: false,
        msg: err?.message || err?.msg || err,
      });
    }
  }
  static async submitLesson(req, res) {
    try {
      const { _id, title, class: class_ } = req.body || {};
      if (!class_ || !isId(class_) || !(title || "").trim()) {
        return res.json({ success: false, msg: "Мэдээлэл буруу байна" });
      }
      if (_id) {
        const foundLesson = await LessonFunctions.findOne(
          [{ status: "active", _id }],
          null,
          true
        );
        if (foundLesson && isId(foundLesson?._id)) {
          if (compareIds(foundLesson?.teacher, me(req))) {
            const foundClass = await ClassFunctions.findOne(
              [{ status: "active", _id: class_ }],
              null,
              true
            );
            if (foundClass && isId(foundClass?._id)) {
              const savedLesson = await LessonFunctions.findOneAndUpdate(
                [{ status: "active", _id: _id }],
                title,
                class_,
                me(req),
                null,
                ["class", "class.students", "teacher", "topics"]
              );
              if (savedLesson && isId(savedLesson?._id)) {
                return res.json({ success: true, lesson: savedLesson });
              } else {
                return res.json({ success: false, msg: "System error!" });
              }
            } else {
              return res.json({ success: false, msg: "Анги олдсонгүй" });
            }
          } else {
            return res.json({
              success: false,
              msg: "Өөрийн хичээлийг засах боломжтой",
            });
          }
        } else {
          return res.json({ success: false, msg: "Хичээл олдсонгүй" });
        }
      } else {
        const foundClass = await ClassFunctions.findOne(
          [{ status: "active", _id: class_ }],
          null,
          true
        );
        if (foundClass && isId(foundClass?._id)) {
          const savedLesson = await LessonFunctions.save(
            title,
            me(req),
            class_,
            null,
            ["class", "class.students", "teacher", "topics"]
          );
          if (savedLesson && isId(savedLesson?._id)) {
            return res.json({ success: true, lesson: savedLesson });
          } else {
            return res.json({ success: false, msg: "System error!" });
          }
        } else {
          return res.json({ success: false, msg: "Анги олдсонгүй" });
        }
      }
    } catch (err) {
      return res.json({
        success: false,
        msg: err?.message || err?.msg || err,
      });
    }
  }
  static async deleteLesson(req, res) {
    try {
      const { _id } = req.body || {};
      const searchQu = [];
      if (!_id)
        return res.json({ success: false, msg: "Мэдээлэл дутуу байна" });
      else searchQu.push({ _id, status: "active" });
      const foundById = await LessonFunctions.findOne(searchQu);
      if (foundById) {
        if (compareIds(foundById?.teacher, me(req))) {
          const lesson = await LessonFunctions.findOneAndDelete([
            { _id, status: "active" },
          ]);
          if (lesson && isId(lesson?._id)) {
            return res.json({ success: true, lesson, _id });
          } else {
            return res.json({ success: false, msg: "System error!" });
          }
        } else {
          return res.json({
            success: false,
            msg: "Зөвхөн өөрийн хичээлийг засах боломжтой",
          });
        }
      } else {
        return res.json({
          success: false,
          msg: "Хичээл олдсонгүй",
        });
      }
    } catch (err) {
      return res.json({
        success: false,
        msg: err?.message || err?.msg || err,
      });
    }
  }
  static async getLesson(req, res) {
    try {
      const { _id } = req.query || {};
      const lesson = await LessonFunctions.findOne(
        [{ status: "active", _id, teacher: me(req) }],
        null,
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
          { path: "topics", match: { status: "active" } },
        ]
      );
      return res.json({ lesson, success: true });
    } catch (err) {
      console.log(err);
      return res.json({
        success: false,
        msg: err?.message || err?.msg || err,
      });
    }
  }
}
