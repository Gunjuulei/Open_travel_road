import express from "express";

import { GuardianTopicCtrl } from "../../controllers/guardian/index.js";
import { authGuardian } from "../../utils/auth.js";

const router = express.Router();

router.get(
  "/single/get",
  (req, res, next) => authGuardian(req, res, next),
  (req, res) => GuardianTopicCtrl.getTopic(req, res)
);

export default router;
