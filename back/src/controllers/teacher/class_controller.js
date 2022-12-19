import { ClassFunctions, UserFunctions } from '../../functions/index.js';
import { GROUPS, isId, me, compareIds } from '../../utils/util.js';

export class ClassCtrl {
    static async getClasses(req, res) {
        try {
            const { pageSize, pageNum, type } = req.query || {};
            let searchQu = {};
            if (type === 'mine') {
                searchQu = { teacher: me(req) };
            }
            const classes = await ClassFunctions.find(
                [{ status: 'active', ...(searchQu || {}) }],
                null,
                pageSize,
                pageNum,
                true,
                [
                    {
                        path: 'students',
                        select: { password: 0 },
                        match: { status: 'active' },
                    },
                    {
                        path: 'teacher',
                        select: { password: 0 },
                        match: { status: 'active' },
                    },
                ]
            );
            return res.json({ classes, success: true });
        } catch (err) {
            return res.json({
                success: false,
                msg: err?.message || err?.msg || err,
            });
        }
    }
    static async submitClass(req, res) {
        try {
            const { _id, level, group, mine } = req.body || {};
            // console.log(
            // 	GROUPS.every((gr) => {
            // 		return group !== gr;
            // 	})
            // );
            if (!level || level > 12 || level < 0 || !group)
                return res.json({
                    success: false,
                    msg: 'Мэдээлэл алдаатай байна',
                });
            if (_id) {
                const found = await ClassFunctions.findOne([
                    { _id, status: 'active' },
                ]);
                if (found) {
                    if (compareIds(found?.teacher, me(req))) {
                        const searchQu = [{ status: 'active', group, level }];
                        if (_id) searchQu.push({ _id: { $ne: _id } });
                        const foundById = await ClassFunctions.findOne(
                            searchQu
                        );
                        if (foundById)
                            return res.json({
                                success: false,
                                msg: 'Мэдээлэл давхцаж байна',
                            });
                        const class_ = await ClassFunctions.findOneAndUpdate(
                            [{ _id, status: 'active' }],
                            level,
                            group
                        );
                        if (class_ && isId(class_?._id)) {
                            return res.json({
                                success: true,
                                class: class_,
                                _id,
                            });
                        } else {
                            return res.json({
                                success: false,
                                msg: 'System error!',
                            });
                        }
                    } else {
                        return res.json({
                            success: false,
                            msg: 'Зөвхөн өөрийн ангийг засах боломжтой',
                        });
                    }
                } else {
                    return res.json({
                        success: false,
                        msg: 'Анги олдсонгүй',
                    });
                }
            } else {
                const searchQu = [{ status: 'active', group, level }];
                const found = await ClassFunctions.findOne(searchQu);
                if (found)
                    return res.json({
                        success: false,
                        msg: 'Мэдээлэл давхцаж байна',
                    });
                const class_ = await ClassFunctions.save(
                    level,
                    group,
                    mine ? me(req) : null,
                    []
                );
                if (class_ && isId(class_?._id)) {
                    return res.json({ success: true, class: class_ });
                } else {
                    return res.json({ success: false, msg: 'System error!' });
                }
            }
        } catch (err) {
            return res.json({
                success: false,
                msg: err?.message || err?.msg || err,
            });
        }
    }
    static async deleteClass(req, res) {
        try {
            const { _id } = req.body || {};
            const searchQu = [];
            if (!_id)
                return res.json({
                    success: false,
                    msg: 'Мэдээлэл дутуу байна',
                });
            else searchQu.push({ _id, status: 'active' });
            const foundById = await ClassFunctions.findOne(searchQu);
            if (foundById) {
                if (compareIds(foundById?.teacher, me(req))) {
                    const class_ = await ClassFunctions.findOneAndDelete([
                        { _id, status: 'active' },
                    ]);
                    if (class_ && isId(class_?._id)) {
                        return res.json({ success: true, class: class_, _id });
                    } else {
                        return res.json({
                            success: false,
                            msg: 'System error!',
                        });
                    }
                } else {
                    return res.json({
                        success: false,
                        msg: 'Зөвхөн өөрийн ангийг засах боломжтой',
                    });
                }
            } else {
                return res.json({
                    success: false,
                    msg: 'Анги олдсонгүй',
                });
            }
        } catch (err) {
            return res.json({
                success: false,
                msg: err?.message || err?.msg || err,
            });
        }
    }
    static async getClass(req, res) {
        try {
            const { _id } = req.query || {};
            const class_ = await ClassFunctions.getStudentMetasAndScores(
                [{ status: 'active', _id }],
                null,
                true,
                [
                    {
                        path: 'students',
                        select: { password: 0 },
                        match: { status: 'active' },
                    },
                    {
                        path: 'teacher',
                        select: { password: 0 },
                        match: { status: 'active' },
                    },
                ]
            );
            if (class_ && isId(class_?._id)) {
                return res.json({ success: true, class: class_ });
            } else {
                return res.json({ success: false, msg: 'Анги олдсонгүй' });
            }
        } catch (err) {
            return res.json({
                success: false,
                msg: err?.message || err?.msg || err,
            });
        }
    }
    static async addStudent(req, res) {
        try {
            const { _id, student_id } = req.body || {};
            const class_ = await ClassFunctions.findOne(
                [{ status: 'active', _id, teacher: me(req) }],
                null,
                true
            );
            if (class_ && isId(class_?._id)) {
                const student = await UserFunctions.findOne(
                    [{ status: 'active', _id: student_id }],
                    null,
                    true
                );
                if (student && isId(student?._id)) {
                    const savedClass = await ClassFunctions.findOneAndUpdate(
                        [{ status: 'active', _id }],
                        null,
                        null,
                        null,
                        [
                            ...(class_?.students || []).filter(
                                (stud) => !compareIds(stud?._id, student_id)
                            ),
                            student_id,
                        ]
                    );
                    if (savedClass && isId(savedClass?._id)) {
                        return res.json({ success: true, student_id, _id });
                    } else {
                        return res.json({
                            success: false,
                            msg: 'System error!',
                        });
                    }
                } else {
                    return res.json({
                        success: false,
                        msg: 'Сурагч олдсонгүй',
                    });
                }
            } else {
                return res.json({
                    success: false,
                    msg: 'Өөрийн анги дээр сурагч нэмэх боломжтой',
                });
            }
        } catch (err) {
            return res.json({
                success: false,
                msg: err?.message || err?.msg || err,
            });
        }
    }
    static async addStudents(req, res) {
        try {
            const { _id, student_ids } = req.body || {};
            const class_ = await ClassFunctions.findOne(
                [{ status: 'active', _id, teacher: me(req) }],
                null,
                true
            );
            if (class_ && isId(class_?._id)) {
                const students = await UserFunctions.find(
                    [{ status: 'active', _id: { $in: student_ids } }],
                    null,
                    true
                );
                if (students && students?.length) {
                    console.log(students)
                    const savedClass = await ClassFunctions.findOneAndUpdate(
                        [{ status: 'active', _id }],
                        null,
                        null,
                        null,
                        (students || []).map((stu) => stu?._id)
                    );
                    if (savedClass && isId(savedClass?._id)) {
                        return res.json({ success: true, student_ids, _id });
                    } else {
                        return res.json({
                            success: false,
                            msg: 'System error!',
                        });
                    }
                } else {
                    return res.json({
                        success: false,
                        msg: 'Сурагч олдсонгүй',
                    });
                }
            } else {
                return res.json({
                    success: false,
                    msg: 'Өөрийн анги дээр сурагч нэмэх боломжтой',
                });
            }
        } catch (err) {
            return res.json({
                success: false,
                msg: err?.message || err?.msg || err,
            });
        }
    }
    static async addOnlyStudents(req, res) {
        try {
            const { pageNum, pageSize } = req.body || {};
            const students = await UserFunctions.find(
                [{ status: 'active', role: 'student' }],
                null,
                pageSize,
                pageNum,
                true
            );
            return res.json({ success: true, students });
        } catch (err) {
            return res.json({
                success: false,
                msg: err?.message || err?.msg || err,
            });
        }
    }
}
