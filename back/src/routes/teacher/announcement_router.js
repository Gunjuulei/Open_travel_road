import express from "express";

import { TeacherAnnouncementCtrl } from "../../controllers/teacher/index.js";
import { authTeacher } from "../../utils/auth.js";

const router = express.Router();

router.get(
  "/get",
  (req, res, next) => authTeacher(req, res, next),
  (req, res) => TeacherAnnouncementCtrl.getAnnouncements(req, res)
);
router.post(
  "/submit",
  (req, res, next) => authTeacher(req, res, next),
  (req, res) => TeacherAnnouncementCtrl.submitAnnouncement(req, res)
);
router.post(
  "/delete",
  (req, res, next) => authTeacher(req, res, next),
  (req, res) => TeacherAnnouncementCtrl.deleteAnnouncement(req, res)
);

export default router;
