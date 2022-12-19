import { HomeworkFunctions } from "../../functions/index.js";

export class HomeworkCtrl {
  static async getHomeworks(req, res) {
    try {
      const { lesson } = req.query || {};
      if (!lesson)
        return res.json({ success: false, msg: "Мэдээлэл дутуу байна" });
      const homework = await HomeworkFunctions.find(
        [
          {
            status: "active",
            lesson,
            class: req?.class?._id,
            student: req?.studentMeta?.student?._id,
          },
        ],
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
      return res.json({ success: true, homework });
    } catch (err) {
      return res.json({
        success: false,
        msg: err?.message || err?.msg || err,
      });
    }
  }
  static async getHomework(req, res) {
    try {
      const { _id } = req.query || {};
      console.log(req?.studentMeta?.student?._id);
      if (!_id)
        return res.json({ success: false, msg: "Мэдээлэл дутуу байна" });
      const homework = await HomeworkFunctions.findOne(
        [
          {
            status: "active",
            _id,
            class: req?.class?._id,
            student: req?.studentMeta?.student?._id,
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
      return res.json({ success: true, homework });
    } catch (err) {
      return res.json({
        success: false,
        msg: err?.message || err?.msg || err,
      });
    }
  }
}
