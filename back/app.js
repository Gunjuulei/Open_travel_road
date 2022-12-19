import express from "express";
import mongoose from "mongoose";
import jwt_decode from "jwt-decode";
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(cors());
var corsMiddleware = function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*"); //replace localhost with actual host
	res.header("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, PATCH, POST, DELETE");
	res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With, Authorization, Accept, Accept-Encoding");

	next();
};

app.use(corsMiddleware);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("src/public"));
app.use(fileUpload({ createParentPath: true }));
import { UserFunctions } from "./src/functions/User.js";

app.use("*", (req, res, next) => {
	console.log(`[Request started] ${req.originalUrl}`);
	next();
});

app.use("*", async (req, res, next) => {
	const token = (req.headers.authorization?.split(" ") || [])[1];
	if (token && token !== "undefined" && token?.length > 0) {
		const { _id } = jwt_decode(token);
		if (_id) {
			const user = await UserFunctions.findOne(
				[{ _id, status: "active" }],
				{
					password: 0
				},
				true
			);
			req.user = user;
			next();
		} else {
			next();
		}
	} else {
		next();
	}
});


import authRouter from "./src/routes/auth.js";
import teacherRouter from "./src/routes/teacher/index.js";
import guardianRouter from "./src/routes/guardian/index.js";
import studentRouter from "./src/routes/student/index.js";

app.use("/api", authRouter);
app.use("/api/teacher", teacherRouter);
app.use("/api/guardian", guardianRouter);
app.use("/api/student", studentRouter);

app.listen(3000, () => {
	console.log(`Started to listen on 3000`);
	mongoose.connect("mongodb://localhost:27017/diploma").then(
		() => console.log("Successful connection on mongo"),
		(err) => console.log(`Error on connection: ${err}`)
	);
});
