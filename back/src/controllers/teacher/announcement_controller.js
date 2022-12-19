import {
  ClassFunctions,
  AnnouncementFunctions,
} from "../../functions/index.js";
import { isId, me, compareIds } from "../../utils/util.js";

export class AnnouncementCtrl {
  static async getAnnouncements(req, res) {
    try {
      const { pageSize, pageNum } = req.query || {};
      const announcements = await AnnouncementFunctions.find(
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
  static async submitAnnouncement(req, res) {
    try {
      const { _id, text, class: class_ } = req.body || {};
      console.log(text, class_, req.body);
      if (!class_ || !isId(class_) || !(text || "").trim()) {
        return res.json({ success: false, msg: "Мэдээлэл буруу байна" });
      }
      if (_id) {
        const foundAnnouncement = await AnnouncementFunctions.findOne(
          [{ status: "active", _id }],
          null,
          true
        );
        if (compareIds(foundAnnouncement?.teacher, me(req))) {
          if (foundAnnouncement && isId(foundAnnouncement?._id)) {
            const foundClass = await ClassFunctions.findOne(
              [{ status: "active", _id: class_ }],
              null,
              true
            );
            if (foundClass && isId(foundClass?._id)) {
              const savedAnnouncement =
                await AnnouncementFunctions.findOneAndUpdate(
                  [{ status: "active", _id: _id }],
                  me(req),
                  class_,
                  text,
                  null,
                  ["class", "class.students", "teacher"]
                );
              if (savedAnnouncement && isId(savedAnnouncement?._id)) {
                return res.json({
                  success: true,
                  announcement: savedAnnouncement,
                });
              } else {
                return res.json({ success: false, msg: "System error!" });
              }
            } else {
              return res.json({ success: false, msg: "Анги олдсонгүй" });
            }
          } else {
            return res.json({ success: false, msg: "Зарлал олдсонгүй" });
          }
        } else {
          return res.json({
            success: false,
            msg: "Өөрийн зарлалыг засах боломжтой",
          });
        }
      } else {
        const foundClass = await ClassFunctions.findOne(
          [{ status: "active", _id: class_ }],
          null,
          true
        );
        if (foundClass && isId(foundClass?._id)) {
          const savedAnnouncement = await AnnouncementFunctions.save(
            me(req),
            class_,
            text,
            null,
            ["class", "class.students", "teacher"]
          );
          if (savedAnnouncement && isId(savedAnnouncement?._id)) {
            return res.json({ success: true, announcement: savedAnnouncement });
          } else {
            return res.json({ success: false, msg: "System error!" });
          }
        } else {
          return res.json({ success: false, msg: "Зарлал олдсонгүй" });
        }
      }
    } catch (err) {
      return res.json({
        success: false,
        msg: err?.message || err?.msg || err,
      });
    }
  }
  static async deleteAnnouncement(req, res) {
    try {
      const { _id } = req.body || {};
      const searchQu = [];
      if (!_id)
        return res.json({ success: false, msg: "Мэдээлэл дутуу байна" });
      else searchQu.push({ _id, status: "active" });
      const foundById = await AnnouncementFunctions.findOne(searchQu);
      if (foundById) {
        if (compareIds(foundById?.teacher, me(req))) {
          const announcement = await AnnouncementFunctions.findOneAndDelete([
            { _id, status: "active" },
          ]);
          if (announcement && isId(announcement?._id)) {
            return res.json({ success: true, announcement, _id });
          } else {
            return res.json({ success: false, msg: "System error!" });
          }
        } else {
          return res.json({
            success: false,
            msg: "Зөвхөн өөрийн зарлалыг засах боломжтой",
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
}
