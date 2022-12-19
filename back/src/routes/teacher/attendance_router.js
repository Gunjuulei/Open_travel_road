import express from "express";

import { TeacherAttendanceCtrl } from "../../controllers/teacher/index.js";
import { authTeacher } from "../../utils/auth.js";

const router = express.Router();

router.get(
  "/get",
  (req, res, next) => authTeacher(req, res, next),
  (req, res) => TeacherAttendanceCtrl.getAttendance(req, res)
);
router.post(
  "/submit",
  (req, res, next) => authTeacher(req, res, next),
  (req, res) => TeacherAttendanceCtrl.submitAttendance(req, res)
);
router.post(
  "/delete",
  (req, res, next) => authTeacher(req, res, next),
  (req, res) => TeacherAttendanceCtrl.deleteAttendance(req, res)
);

export default router;
