import express from "express";

import { StudentTopicCtrl } from "../../controllers/student/index.js";
import { authStudent } from "../../utils/auth.js";

const router = express.Router();

router.get(
  "/single/get",
  (req, res, next) => authStudent(req, res, next),
  (req, res) => StudentTopicCtrl.getTopic(req, res)
);

export default router;
