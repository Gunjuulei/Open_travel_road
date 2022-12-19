import express from "express";

import { GuardianAnnouncementCtrl } from "../../controllers/guardian/index.js";
import { authGuardian } from "../../utils/auth.js";

const router = express.Router();

router.get(
  "/get",
  (req, res, next) => authGuardian(req, res, next),
  (req, res) => GuardianAnnouncementCtrl.getAnnouncements(req, res)
);

export default router;
