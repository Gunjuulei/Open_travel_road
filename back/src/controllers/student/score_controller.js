import { ScoreFunctions } from "../../functions/index.js";
import { me } from "../../utils/util.js";

export class ScoreCtrl {
  static async getScore(req, res) {
    try {
      const { lesson } = req.query || {};
      if (!lesson)
        return res.json({ success: false, msg: "Мэдээлэл дутуу байна" });
      const score = await ScoreFunctions.find(
        [
          {
            status: "active",
            lesson,
            class: req?.class?._id,
            student: me(req),
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
      return res.json({ success: true, score });
    } catch (err) {
      return res.json({
        success: false,
        msg: err?.message || err?.msg || err,
      });
    }
  }
}
