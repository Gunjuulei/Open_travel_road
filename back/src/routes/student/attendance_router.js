import express from "express";

import { StudentAnnouncementCtrl } from "../../controllers/student/index.js";
import { authStudent } from "../../utils/auth.js";

const router = express.Router();

router.get(
  "/get",
  (req, res, next) => authStudent(req, res, next),
  (req, res) => StudentAnnouncementCtrl.getAnnouncements(req, res)
);

export default router;
