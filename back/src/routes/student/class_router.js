import express from "express";

import { StudentClassCtrl } from "../../controllers/student/index.js";
import { authStudent } from "../../utils/auth.js";

const router = express.Router();

router.get(
  "/single/get/students",
  (req, res, next) => authStudent(req, res, next),
  (req, res) => StudentClassCtrl.getClassStudents(req, res)
);

router.get(
  "/single/get/teachers",
  (req, res, next) => authStudent(req, res, next),
  (req, res) => StudentClassCtrl.getClassTeachers(req, res)
);

export default router;
