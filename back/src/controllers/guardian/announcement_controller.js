import { AnnouncementFunctions } from "../../functions/index.js";

export class AnnouncementCtrl {
  static async getAnnouncements(req, res) {
    try {
      const { pageSize, pageNum } = req.query || {};
      const announcements = await AnnouncementFunctions.find(
        [{ status: "active", class: req?.class?._id }],
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
        ]
      );
      return res.json({ announcements, success: true });
    } catch (err) {
      return res.json({
        success: false,
        msg: err?.message || err?.msg || err,
      });
    }
  }
}
