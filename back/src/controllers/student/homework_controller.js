import {
  HomeworkFunctions,
  TopicFunctions,
  LessonFunctions,
} from "../../functions/index.js";
import { me, isId, compareIds } from "../../utils/util.js";

import path from "path";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
      return res.json({ success: true, homework });
    } catch (err) {
      return res.json({
        success: false,
        msg: err?.message || err?.msg || err,
      });
    }
  }
  static async submitHomework(req, res) {
    try {
      const { _id, topic, description } = req.body || {};
      const files = req.files;

      if (!(topic || "").trim() || !(description || "").trim()) {
        return res.json({ success: false, msg: "Мэдээлэл буруу байна" });
      }

      const foundTopic = await TopicFunctions.findOne([
        {
          status: "active",
          _id: topic,
        },
      ]);
      const foundLesson = await LessonFunctions.findOne([
        {
          status: "active",
          topics: topic,
        },
      ]);
      if (!foundLesson || !foundTopic)
        return res.json({ success: false, msg: "Мэдээлэл буруу байна" });

      let paths = [];
      if (Object.keys(files || {}).length !== 0) {
        paths = await Promise.all(
          Object.values(files || {}).map((file) => {
            return new Promise((resolve, reject) => {
              const str = Date.now().toString();
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
        );
      }

      if (_id) {
        const foundHomework = await HomeworkFunctions.findOne([
          { status: "active", _id, student: me(req) },
        ]);
        if (foundHomework && isId(foundHomework?._id)) {
          if (compareIds(foundHomework?.student, me(req))) {
            const savedHomework = await HomeworkFunctions.findOneAndUpdate(
              [{ status: "active", _id }],
              topic,
              req?.class?._id,
              foundLesson?._id,
              me(req),
              foundTopic?.teacher,
              paths,
              description,
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
            if (savedHomework && isId(savedHomework?._id)) {
              return res.json({ success: true, homework: savedHomework });
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
        const savedHomework = await HomeworkFunctions.save(
          topic,
          req?.class?._id,
          foundLesson?._id,
          me(req),
          foundTopic?.teacher,
          paths,
          description,
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
        if (savedHomework && isId(savedHomework?._id)) {
          return res.json({ success: true, homework: savedHomework });
        } else {
          return res.json({ success: false, msg: "System error!" });
        }
      }
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
      if (!_id)
        return res.json({ success: false, msg: "Мэдээлэл дутуу байна" });
      const homework = await HomeworkFunctions.findOne(
        [
          {
            status: "active",
            _id,
            class: req?.class?._id,
            student: me(req),
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
