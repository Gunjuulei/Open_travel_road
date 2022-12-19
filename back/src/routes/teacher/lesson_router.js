import express from "express";

import { TeacherLessonCtrl } from "../../controllers/teacher/index.js";
import { authTeacher } from "../../utils/auth.js";

const router = express.Router();

router.get(
  "/get",
  (req, res, next) => authTeacher(req, res, next),
  (req, res) => TeacherLessonCtrl.getLessons(req, res)
);
router.post(
  "/submit",
  (req, res, next) => authTeacher(req, res, next),
  (req, res) => TeacherLessonCtrl.submitLesson(req, res)
);
router.post(
  "/delete",
  (req, res, next) => authTeacher(req, res, next),
  (req, res) => TeacherLessonCtrl.deleteLesson(req, res)
);
router.get(
  "/single/get",
  (req, res, next) => authTeacher(req, res, next),
  (req, res) => TeacherLessonCtrl.getLesson(req, res)
);

export default router;
