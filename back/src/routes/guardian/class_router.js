import express from "express";

import { GuardianClassCtrl } from "../../controllers/guardian/index.js";
import { authGuardian } from "../../utils/auth.js";

const router = express.Router();

router.get(
  "/single/get/students",
  (req, res, next) => authGuardian(req, res, next),
  (req, res) => GuardianClassCtrl.getClassStudents(req, res)
);

router.get(
  "/single/get/teachers",
  (req, res, next) => authGuardian(req, res, next),
  (req, res) => GuardianClassCtrl.getClassTeachers(req, res)
);

export default router;
