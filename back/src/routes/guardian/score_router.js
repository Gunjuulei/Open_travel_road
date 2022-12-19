import express from "express";

import { GuardianScoreCtrl } from "../../controllers/guardian/index.js";
import { authGuardian } from "../../utils/auth.js";

const router = express.Router();

router.get(
  "/get",
  (req, res, next) => authGuardian(req, res, next),
  (req, res) => GuardianScoreCtrl.getScore(req, res)
);

export default router;
