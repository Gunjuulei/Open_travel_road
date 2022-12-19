import express from "express";

import { GuardianLessonCtrl } from "../../controllers/guardian/index.js";
import { authGuardian } from "../../utils/auth.js";

const router = express.Router();

router.get(
  "/get",
  (req, res, next) => authGuardian(req, res, next),
  (req, res) => GuardianLessonCtrl.getLessons(req, res)
);
router.get(
  "/single/get",
  (req, res, next) => authGuardian(req, res, next),
  (req, res) => GuardianLessonCtrl.getLesson(req, res)
);

export default router;
