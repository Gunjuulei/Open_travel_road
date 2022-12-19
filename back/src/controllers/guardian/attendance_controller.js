import { AttendanceFunctions } from "../../functions/index.js";

export class AttendanceCtrl {
  static async getAttendance(req, res) {
    try {
      const { lesson } = req.query || {};
      if (!lesson)
        return res.json({ success: false, msg: "Мэдээлэл дутуу байна" });
      const attendance = await AttendanceFunctions.find(
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
      return res.json({ success: true, attendance });
    } catch (err) {
      return res.json({
        success: false,
        msg: err?.message || err?.msg || err,
      });
    }
  }
}
