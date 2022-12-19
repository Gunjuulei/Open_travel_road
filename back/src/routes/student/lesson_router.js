import express from "express";

import { StudentLessonCtrl } from "../../controllers/student/index.js";
import { authStudent } from "../../utils/auth.js";

const router = express.Router();

router.get(
  "/get",
  (req, res, next) => authStudent(req, res, next),
  (req, res) => StudentLessonCtrl.getLessons(req, res)
);
router.get(
  "/single/get",
  (req, res, next) => authStudent(req, res, next),
  (req, res) => StudentLessonCtrl.getLesson(req, res)
);

export default router;
