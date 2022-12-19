import { LessonFunctions, TopicFunctions } from "../../functions/index.js";
import { isId, me, compareIds } from "../../utils/util.js";
import path from "path";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class TopicCtrl {
  static async getTopic(req, res) {
    try {
      const { _id } = req.query || {};
      if (!_id)
        return res.json({ success: false, msg: "Мэдээлэл дутуу байна" });
      const topic = await TopicFunctions.findOne(
        [{ status: "active", _id, teacher: me(req) }],
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
        msg:  err?.message || err?.msg || err,
      });
    }
  }
  static async submitTopic(req, res) {
    try {
      const { _id, lesson, title, description } = req.body || {};
      const files = req.files;

      if (
        !(lesson || "").trim() ||
        !(title || "").trim() ||
        !(description || "").trim()
      ) {
        return res.json({ success: false, msg: "Мэдээлэл буруу байна" });
      }

      let paths = [];
      if (files && Object.keys(files).length !== 0) {
        paths = await Promise.all(
          Object.values(files || {}).map((file) => {
            return new Promise((resolve, reject) => {
              const str = Date.now().toString();
              if (!file.name.includes(".pdf")) {
                throw Error("sad");
              }
              const pathToMove = path.join(
                __dirname,
                "../../",
                "/public",
                me(req).toString(),
                str,
                file.name
              );
              file.mv(pathToMove, function (err) {
                if (err) reject(err);
                resolve(`/${me(req).toString()}/${str}/${file.name}`);
              });
            });
          })
        ).catch(e => {
          return res.json({success: false, msg: "Зөвхөн pdf оруулна уу"})
        });
      }

      if (_id) {
        const foundTopic = await TopicFunctions.findOne([
          { status: "active", _id, teacher: me(req) },
        ]);
        if (foundTopic && isId(foundTopic?._id)) {
          if (compareIds(foundTopic?.teacher, me(req))) {
            const savedTopic = await TopicFunctions.findOneAndUpdate(
              [{ status: "active", _id }],
              me(req),
              title,
              description,
              paths,
              "teacher"
            );
            if (savedTopic && isId(savedTopic?._id)) {
              const foundLesson = await LessonFunctions.findOne(
                [{ _id: lesson, status: "active" }],
                null,
                true
              );
              if (foundLesson && isId(foundLesson?._id)) {
                const savedLesson = await LessonFunctions.findOneAndUpdate(
                  [{ _id: lesson, status: "active" }],
                  null,
                  null,
                  null,
                  [...(foundLesson?.topics || []).filter(a => !compareIds(a, savedTopic?._id)), savedTopic?._id]
                );
                if (savedLesson && isId(savedLesson?._id)) {
                  return res.json({ success: true, topic: savedTopic });
                } else {
                  return res.json({ success: false, msg: "System error!" });
                }
              } else {
                return res.json({ success: false, msg: "Хичээл олдсонгүй" });
              }
            } else {
              return res.json({ success: false, msg: "System error!" });
            }
          } else {
            return res.json({
              success: false,
              msg: "Зөвхөн өөрийн сэдвийг засах боломжтой",
            });
          }
        } else {
          return res.json({ success: false, msg: "Сэдэв олдсонгүй" });
        }
      } else {
        const savedTopic = await TopicFunctions.save(
          me(req),
          title.trim(),
          description.trim(),
          paths,
          [
            {
              path: "teacher",
              select: { password: 0 },
              match: { status: "active" },
            },
          ]
        );
        if (savedTopic && isId(savedTopic?._id)) {
          const foundLesson = await LessonFunctions.findOne(
            [{ _id: lesson, status: "active" }],
            null,
            true
          );
          if (foundLesson && isId(foundLesson?._id)) {
            const savedLesson = await LessonFunctions.findOneAndUpdate(
              [{ _id: lesson, status: "active" }],
              null,
              null,
              null,
              [...(foundLesson?.topics || []).filter(a => !compareIds(a, savedTopic?._id)), savedTopic?._id]
            );
            if (savedLesson && isId(savedLesson?._id)) {
              return res.json({ success: true, topic: savedTopic });
            } else {
              return res.json({ success: false, msg: "System error!" });
            }
          } else {
            return res.json({ success: false, msg: "Хичээл олдсонгүй" });
          }
        } else {
          return res.json({ success: false, msg: "System error!" });
        }
      }
    } catch (err) {
      return res.json({
        success: false,
        msg:  err?.message || err?.msg || err,
      });
    }
  }
  static async deleteTopic(req, res) {
    try {
      const { _id } = req.body || {};
      const searchQu = [];
      if (!_id)
        return res.json({ success: false, msg: "Мэдээлэл дутуу байна" });
      else searchQu.push({ _id, status: "active" });
      const foundById = await TopicFunctions.findOne(searchQu);
      if (foundById) {
        if (compareIds(foundById?.teacher, me(req))) {
          const topic = await TopicFunctions.findOneAndDelete([
            { _id, status: "active" },
          ]);
          if (topic && isId(topic?._id)) {
            return res.json({ success: true, class: topic, _id });
          } else {
            return res.json({ success: false, msg: "System error!" });
          }
        } else {
          return res.json({
            success: false,
            msg: "Зөвхөн өөрийн сэдвийг засах боломжтой",
          });
        }
      } else {
        return res.json({
          success: false,
          msg: "Сэдэв олдсонгүй",
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
