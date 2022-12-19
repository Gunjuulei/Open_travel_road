import express from "express";

import { GuardianHomeworkCtrl } from "../../controllers/guardian/index.js";
import { authGuardian } from "../../utils/auth.js";

const router = express.Router();

router.get(
  "/get",
  (req, res, next) => authGuardian(req, res, next),
  (req, res) => GuardianHomeworkCtrl.getHomeworks(req, res)
);
router.get(
  "/single/get",
  (req, res, next) => authGuardian(req, res, next),
  (req, res) => GuardianHomeworkCtrl.getHomework(req, res)
);

export default router;
