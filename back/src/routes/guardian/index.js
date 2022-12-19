import express from "express";

import scheduleRouter from "./schedule_router.js";
import lessonRouter from "./lesson_router.js";
import topicRouter from "./topic_router.js";
import homeworkRouter from "./homework_router.js";
import scoreRouter from "./score_router.js";
import attendanceRouter from "./attendance_router.js";
import classRouter from "./class_router.js";
import announcementRouter from "./announcement_router.js";

import { guardianMiddleWare } from "../../middleWares/index.js";

const router = express.Router();

router.use("*", guardianMiddleWare);
router.use("/schedule", scheduleRouter);
router.use("/lesson", lessonRouter);
router.use("/topic", topicRouter);
router.use("/homework", homeworkRouter);
router.use("/score", scoreRouter);
router.use("/attendance", attendanceRouter);
router.use("/class", classRouter);
router.use("/announcement", announcementRouter);

export default router;
