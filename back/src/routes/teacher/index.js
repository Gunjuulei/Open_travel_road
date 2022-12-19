import express from "express";

import classRouter from "./class_router.js";
import lessonRouter from "./lesson_router.js";
import scheduleRouter from "./schedule_router.js";
import topicRouter from "./topic_router.js";
import scoreRouter from "./score_router.js";
import attendanceRouter from "./attendance_router.js";
import homeworkRouter from "./homework_router.js";
import announcementRouter from "./announcement_router.js";

const router = express.Router();

router.use("/class", classRouter);
router.use("/lesson", lessonRouter);
router.use("/schedule", scheduleRouter);
router.use("/topic", topicRouter);

router.use("/score", scoreRouter);
router.use("/attendance", attendanceRouter);
router.use("/homework", homeworkRouter);

router.use("/announcement", announcementRouter);

export default router;
