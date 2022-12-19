import {
  ScoreFunctions,
  TopicFunctions,
  UserFunctions,
  ClassFunctions,
  LessonFunctions,
} from "../../functions/index.js";
import { isId, me, compareIds } from "../../utils/util.js";

export class ScoreCtrl {
  static async getScore(req, res) {
    try {
      const { topic, class: class_ } = req.query || {};
      if (!topic || !class_)
        return res.json({ success: false, msg: "Мэдээлэл дутуу байна" });
      const score = await ScoreFunctions.find(
        [{ status: "active", topic, class: class_, teacher: me(req) }],
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
      const students = await ClassFunctions.getStudents(
        [{ status: "active", _id: class_ }],
        null,
        true,
        [
          {
            path: "students",
            select: { password: 0 },
            match: { status: "active" },
          },
        ]
      );
      return res.json({ success: true, score, students });
    } catch (err) {
      return res.json({
        success: false,
        msg: err?.message || err?.msg || err,
      });
    }
  }
  static async submitScore(req, res) {
    try {
      const {
        _id,
        topic,
        class: class_,
        lesson,
        student,
        points,
      } = req.body || {};

      const foundTopic = await TopicFunctions.findOne(
        [{ status: "active", _id: topic }],
        null,
        true
      );
      if (!foundTopic || !isId(foundTopic?._id))
        return res.json({ success: false, msg: "Сэдэв олдсонгүй" });

      const foundClass = await ClassFunctions.findOne(
        [{ status: "active", _id: class_ }],
        null,
        true
      );
      if (!foundClass || !isId(foundClass?._id))
        return res.json({ success: false, msg: "Анги олдсонгүй" });

      const foundLesson = await LessonFunctions.findOne(
        [{ status: "active", _id: lesson }],
        null,
        true
      );
      if (!foundLesson || !isId(foundLesson?._id))
        return res.json({ success: false, msg: "Хичээл олдсонгүй" });

      // End hicheel angi sedev zuils ni hamaaraltai esehiig shalgah shaardlagatai

      const foundStudent = await UserFunctions.findOne(
        [{ status: "active", _id: student }],
        null,
        true
      );
      if (!foundStudent || !isId(foundStudent?._id))
        return res.json({ success: false, msg: "Сурагч олдсонгүй" });

      if (points < 0 || points > 100)
        return res.json({
          success: false,
          msg: "Дүн 0-100 хооронд байх шаардлагатай",
        });

      if (_id && isId(_id)) {
        const foundScore = await ScoreFunctions.findOne(
          [{ status: "active", _id }],
          null,
          true
        );
        if (foundScore && isId(foundScore?._id)) {
          if (compareIds(score?.teacher, me(req))) {
            const savedScore = await ScoreFunctions.findOneAndUpdate(
              [{ status: "active", _id }],
              topic,
              class_,
              lesson,
              student,
              me(req),
              points,
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
            if (savedScore && isId(savedScore?._id)) {
              return res.json({ success: true, score: savedScore });
            } else {
              return res.json({ success: false, msg: "System error!" });
            }
          } else {
            return res.json({
              success: false,
              msg: "Зөвхөн өөрийн тавьсан дүнг өөрчлөх боломжтой",
            });
          }
        } else {
          return res.json({
            success: false,
            msg: "Дүн олдсонгүй",
          });
        }
      } else {
        const beforeScore = await ScoreFunctions.findOne(
          [
            {
              status: "active",
              topic,
              class: class_,
              student: student,
              teacher: me(req),
            },
          ],
          null,
          true
        );
        if (beforeScore) {
          const savedScore = await ScoreFunctions.findOneAndUpdate(
            [{ status: "active", _id: beforeScore?._id }],
            topic,
            class_,
            lesson,
            student,
            me(req),
            points,
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
          if (savedScore && isId(savedScore?._id)) {
            return res.json({ success: true, score: savedScore });
          } else {
            return res.json({ success: false, msg: "System error!" });
          }
        } else {
          const savedScore = await ScoreFunctions.save(
            topic,
            class_,
            lesson,
            student,
            me(req),
            points,
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
          if (savedScore && isId(savedScore?._id)) {
            return res.json({ success: true, score: savedScore });
          } else {
            return res.json({ success: false, msg: "System error!" });
          }
        }
      }
    } catch (err) {
      console.log(err);
      return res.json({
        success: false,
        msg: err?.message || err?.msg || err,
      });
    }
  }
  static async deleteScore(req, res) {
    try {
      const { _id } = req.body || {};
      const searchQu = [];
      if (!_id)
        return res.json({ success: false, msg: "Мэдээлэл дутуу байна" });
      else searchQu.push({ _id, status: "active" });
      const foundById = await ScoreFunctions.findOne(searchQu);
      if (foundById) {
        if (compareIds(foundById?.teacher, me(req))) {
          const score = await ScoreFunctions.findOneAndDelete([
            { _id, status: "active" },
          ]);
          if (score && isId(score?._id)) {
            return res.json({ success: true, class: score, _id });
          } else {
            return res.json({ success: false, msg: "System error!" });
          }
        } else {
          return res.json({
            success: false,
            msg: "Зөвхөн өөрийн тавьсан дүнг засах боломжтой",
          });
        }
      } else {
        return res.json({
          success: false,
          msg: "Тавьсан дүн олдсонгүй",
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
