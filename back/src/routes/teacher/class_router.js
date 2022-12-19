import express from "express";

import { TeacherClassCtrl } from "../../controllers/teacher/index.js";
import { authTeacher } from "../../utils/auth.js";

const router = express.Router();

router.get(
  "/get",
  (req, res, next) => authTeacher(req, res, next),
  (req, res) => TeacherClassCtrl.getClasses(req, res)
);
router.post(
  "/submit",
  (req, res, next) => authTeacher(req, res, next),
  (req, res) => TeacherClassCtrl.submitClass(req, res)
);
router.post(
  "/delete",
  (req, res, next) => authTeacher(req, res, next),
  (req, res) => TeacherClassCtrl.deleteClass(req, res)
);
router.get(
  "/single/get",
  (req, res, next) => authTeacher(req, res, next),
  (req, res) => TeacherClassCtrl.getClass(req, res)
);
router.post(
  "/single/add/student",
  (req, res, next) => authTeacher(req, res, next),
  (req, res) => TeacherClassCtrl.addStudent(req, res)
);
router.post(
  "/single/add/students",
  (req, res, next) => authTeacher(req, res, next),
  (req, res) => TeacherClassCtrl.addStudents(req, res)
);
router.get(
  "/student/get",
  (req, res, next) => authTeacher(req, res, next),
  (req, res) => TeacherClassCtrl.addOnlyStudents(req, res)
);

export default router;
