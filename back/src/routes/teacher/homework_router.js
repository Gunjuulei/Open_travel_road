import express from "express";

import { TeacherHomeworkCtrl } from "../../controllers/teacher/index.js";
import { authTeacher } from "../../utils/auth.js";

const router = express.Router();

router.get(
  "/get",
  (req, res, next) => authTeacher(req, res, next),
  (req, res) => TeacherHomeworkCtrl.getHomeworks(req, res)
);
router.get(
  "/single/get",
  (req, res, next) => authTeacher(req, res, next),
  (req, res) => TeacherHomeworkCtrl.getHomework(req, res)
);

export default router;
