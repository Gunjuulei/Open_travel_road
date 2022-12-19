import express from "express";
import { AuthCtrl } from "../controllers/index.js";

const router = express.Router();

router.get("/user", (req, res) => AuthCtrl.User(req, res));
router.post("/login", (req, res) => AuthCtrl.Login(req, res));
router.post("/register", (req, res) => AuthCtrl.Register(req, res));
router.post("/change/basic/info", (req, res) =>
  AuthCtrl.ChangeBasicInformation(req, res)
);

export default router;
