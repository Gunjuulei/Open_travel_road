import express from "express";

import { StudentHomeworkCtrl } from "../../controllers/student/index.js";
import { authStudent } from "../../utils/auth.js";

const router = express.Router();

router.get(
  "/get",
  (req, res, next) => authStudent(req, res, next),
  (req, res) => StudentHomeworkCtrl.getHomeworks(req, res)
);
router.post(
  "/submit",
  (req, res, next) => authStudent(req, res, next),
  (req, res) => StudentHomeworkCtrl.submitHomework(req, res)
);
router.get(
  "/single/get",
  (req, res, next) => authStudent(req, res, next),
  (req, res) => StudentHomeworkCtrl.getHomework(req, res)
);

export default router;
