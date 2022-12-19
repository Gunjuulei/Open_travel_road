export const authTeacher = (req, res, next) => {
  if (req.user?.role === "teacher") {
    next();
  } else {
    return res.json({ success: false, msg: "Хандах эрхгүй байна!" });
  }
};
export const authGuardian = (req, res, next) => {
  if (req.user?.role === "guardian") {
    next();
  } else {
    return res.json({ success: false, msg: "Хандах эрхгүй байна!" });
  }
};
export const authStudent = (req, res, next) => {
  if (req.user?.role === "student") {
    next();
  } else {
    return res.json({ success: false, msg: "Хандах эрхгүй байна!" });
  }
};
