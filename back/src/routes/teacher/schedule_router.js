import express from "express";

import { TeacherScheduleCtrl } from "../../controllers/teacher/index.js";
import { authTeacher } from "../../utils/auth.js";

const router = express.Router();

router.get(
  "/get",
  (req, res, next) => authTeacher(req, res, next),
  (req, res) => TeacherScheduleCtrl.getSchedules(req, res)
);
router.post(
  "/submit",
  (req, res, next) => authTeacher(req, res, next),
  (req, res) => TeacherScheduleCtrl.submitSchedule(req, res)
);
router.post(
  "/delete",
  (req, res, next) => authTeacher(req, res, next),
  (req, res) => TeacherScheduleCtrl.deleteSchedule(req, res)
);

export default router;
