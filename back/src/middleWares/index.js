import { ClassFunctions, StudentMetaFunctions } from "../functions/index.js";

export const studentMiddleWare = async (req, res, next) => {
  const class_ = await ClassFunctions.findOne(
    [{ students: req.user?._id, status: "active" }],
    null,
    true,
    [
      {
        path: "students",
        select: { password: 0 },
        match: { status: "active" },
      },
      {
        path: "teacher",
        select: { password: 0 },
        match: { status: "active" },
      },
    ]
  );
  req.class = class_;
  next();
};

export const guardianMiddleWare = async (req, res, next) => {
  const meta = await StudentMetaFunctions.findOne(
    [{ parent: req.user?._id, status: "active" }],
    null,
    true,
    [
      {
        path: "student",
        select: { password: 0 },
        match: { status: "active" },
      },
    ]
  );
  req.studentMeta = meta;
  const class_ = await ClassFunctions.findOne(
    [{ students: meta?.student?._id, status: "active" }],
    null,
    true,
    [
      {
        path: "students",
        select: { password: 0 },
        match: { status: "active" },
      },
      {
        path: "teacher",
        select: { password: 0 },
        match: { status: "active" },
      },
    ]
  );
  req.class = class_;
  next();
};
