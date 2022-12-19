import { TopicFunctions } from "../../functions/index.js";
import { isId } from "../../utils/util.js";

export class TopicCtrl {
  static async getTopic(req, res) {
    try {
      const { _id } = req.query || {};
      if (!_id)
        return res.json({ success: false, msg: "Мэдээлэл дутуу байна" });
      const topic = await TopicFunctions.findOne(
        [{ status: "active", _id }],
        null,
        true,
        [
          {
            path: "teacher",
            select: { password: 0 },
            match: { status: "active" },
          },
        ]
      );
      if (topic && isId(topic?._id)) {
        return res.json({ success: true, topic });
      } else {
        return res.json({ success: false, msg: "Сэдэв олдсонгүй" });
      }
    } catch (err) {
      return res.json({
        success: false,
        msg: err?.message || err?.msg || err,
      });
    }
  }
}
