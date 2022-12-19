import { ScheduleFunctions } from "../../functions/index.js";

export class ScheduleCtrl {
  static async getSchedules(req, res) {
    try {
      const { pageSize, pageNum } = req.body || {};
      const schedules = await ScheduleFunctions.find(
        [{ status: "active", class: req.class?._id }],
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
      return res.json({
        success: false,
        msg: err?.message || err?.msg || err,
      });
    }
  }
}
