import express from "express";

import { TeacherTopicCtrl } from "../../controllers/teacher/index.js";
import { authTeacher } from "../../utils/auth.js";

const router = express.Router();

router.get(
  "/single/get",
  (req, res, next) => authTeacher(req, res, next),
  (req, res) => TeacherTopicCtrl.getTopic(req, res)
);
router.post(
  "/submit",
  (req, res, next) => authTeacher(req, res, next),
  (req, res) => TeacherTopicCtrl.submitTopic(req, res)
);
router.post(
  "/delete",
  (req, res, next) => authTeacher(req, res, next),
  (req, res) => TeacherTopicCtrl.deleteTopic(req, res)
);

export default router;
