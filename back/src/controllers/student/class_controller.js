import { LessonFunctions } from "../../functions/index.js";

export class ClassCtrl {
  static async getClassStudents(req, res) {
    try {
      return res.json({
        students: req?.class?.students || [],
        class: req?.class || {},
        success: true,
      });
    } catch (err) {
      return res.json({
        success: false,
        msg: err?.message || err?.msg || err,
      });
    }
  }
  static async getClassTeachers(req, res) {
    try {
      // const homeroom = req?.class?.teacher;
      const teaching = await LessonFunctions.find(
        [{ status: "active", class: req?.class?._id }],
        null,
        0,
        0,
        true,
        [
          {
            path: "teacher",
            select: { password: 0 },
            match: { status: "active" },
          },
        ]
      );
      console.log(teaching);
      const teachers = (teaching || []).map(({ teacher, ...rest }) => ({
        ...(teacher || {}),
        lesson: rest,
      }));
      return res.json({ success: true, teachers });
    } catch (err) {
      return res.json({
        success: false,
        msg: err?.message || err?.msg || err,
      });
    }
  }
}
