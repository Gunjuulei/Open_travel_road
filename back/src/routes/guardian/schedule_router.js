import express from "express";

import { GuardianScheduleCtrl } from "../../controllers/guardian/index.js";
import { authGuardian } from "../../utils/auth.js";

const router = express.Router();

router.get(
  "/get",
  (req, res, next) => authGuardian(req, res, next),
  (req, res) => GuardianScheduleCtrl.getSchedules(req, res)
);

export default router;
