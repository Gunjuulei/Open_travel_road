import { LessonFunctions } from "../../functions/index.js";
import { me } from "../../utils/util.js";

export class LessonCtrl {
  static async getLessons(req, res) {
    try {
      const { pageSize, pageNum } = req.body || {};
      const lessons = await LessonFunctions.find(
        [
          {
            status: "active",
            class: req.class?._id,
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
  static async getLesson(req, res) {
    try {
      const { _id } = req.query || {};
      const lesson = await LessonFunctions.findOne(
        [{ status: "active", _id, class: req.class?._id }],
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
      return res.json({
        success: false,
        msg: err?.message || err?.msg || err,
      });
    }
  }
}
