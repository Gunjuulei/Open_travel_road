import {
    phoneRegex,
    mailRegex,
    registerRegex,
    isId,
    me,
} from '../utils/util.js';
import { hashSync, compareSync } from 'bcrypt';
import jwt from 'jsonwebtoken';

import { UserFunctions, StudentMetaFunctions } from '../functions/index.js';
import { secret } from '../utils/token.js';

export class AuthCtrl {
    static async Login(req, res) {
        try {
            const trimmed = Object.entries(req.body || {})
                .map(([key, value]) => ({
                    [key]: (value || '').trim(),
                }))
                .reduce((o, temp) => {
                    const [key, value] = Object.entries(temp || {})[0];
                    return Object.assign(o, { [key]: value });
                }, {});
            const { email, password } = trimmed;
            if (!email || !password)
                return res.json({
                    success: false,
                    msg: 'Мэдээлэл буруу байна',
                });
            const user = await UserFunctions.findOne([
                { email: email, status: 'active' },
            ]);
            if (user && compareSync(password, user.password)) {
                const signed = jwt.sign({ _id: user?._id }, secret);
                const { password: a, ...userWithNoPassword } = user._doc || {};
                return res.json({
                    success: true,
                    token: signed,
                    role: user.role,
                    user: userWithNoPassword,
                });
            } else {
                return res.json({
                    success: false,
                    msg: 'Мэдээлэл буруу байна',
                });
            }
        } catch (err) {
            return res.json({
                success: false,
                msg: err?.message || err?.msg || err,
            });
        }
    }

    static async User(req, res) {
        try {
            return res.json({ success: true, user: req.user });
        } catch (err) {
            return res.json({
                success: false,
                msg: err?.message || err?.msg || err,
            });
        }
    }

    static async Register(req, res) {
        try {
            const trimmed = Object.entries(req.body || {})
                .map(([key, value]) => ({
                    [key]: (value || '').trim(),
                }))
                .reduce((o, temp) => {
                    const [key, value] = Object.entries(temp || {})[0];
                    return Object.assign(o, { [key]: value });
                }, {});
            const {
                first_name,
                last_name,
                phone,
                email,
                register_id,
                password,
                gender,
                role,
            } = trimmed;
            if (
                !first_name ||
                !last_name ||
                !phone ||
                !email ||
                !register_id ||
                !password ||
                !gender ||
                !role
            )
                return res.json({
                    success: false,
                    msg: 'Мэдээлэл дутуу байна',
                });
            if (!phoneRegex.test(phone))
                return res.json({ success: false, msg: 'Дугаар буруу байна' });
            if (!mailRegex.test(email))
                return res.json({ success: false, msg: 'Mейл буруу байна' });
            if (!registerRegex.test(register_id))
                return res.json({
                    success: false,
                    msg: 'Регистрийн дугаар буруу байна',
                });
            const sameInfo = await UserFunctions.findOne([
                { status: 'active' },
                {
                    $or: [
                        { email: { $regex: `^(${email})$`, $options: 'i' } },
                        {
                            register_id: {
                                $regex: `^(${register_id})$`,
                                $options: 'i',
                            },
                        },
                    ],
                },
            ]);
            if (sameInfo)
                return res.json({
                    success: false,
                    msg: 'Мэдээлэл давхцаж байна.',
                });
            let student;
            if (role === 'guardian') {
                student = await UserFunctions.findOne(
                    [
                        {
                            status: 'active',
                            role: 'student',
                        },
                    ],
                    { password: 0 },
                    true
                );
                if (!student || !isId(student?._id)) {
                    return res.json({
                        success: false,
                        msg: 'Сурагчийн мэдээлэл олдсонгүй',
                    });
                }
            }
            const transformedPassword = hashSync(password, 12);
            const user = await UserFunctions.save(
                first_name,
                last_name,
                phone,
                email,
                register_id,
                transformedPassword,
                gender,
                role
            );
            if (user && isId(user?._id)) {
                let more = {};
                if (role === 'guardian') {
                    const studentMeta = await StudentMetaFunctions.save(
                        user?._id
                    );
                    if (studentMeta && isId(studentMeta?._id)) {
                        more = studentMeta;
                    }
                }
                return res.json({
                    success: true,
                    sucmod: true,
                    msg: 'Амжилттай бүртгэгдлээ.',
                });
            } else return res.json({ success: false, msg: 'System error!' });
        } catch (error) {
            return res.json({
                success: false,
                msg: error || error?.message || error?.msg,
            });
        }
    }

    static async ChangeBasicInformation(req, res) {
        try {
            const trimmed = Object.entries(req.body || {})
                .map(([key, value]) => ({
                    [key]: (value || '').trim(),
                }))
                .reduce((o, temp) => {
                    const [key, value] = Object.entries(temp || {})[0];
                    return Object.assign(o, { [key]: value });
                }, {});
            const { first_name, last_name, email } = trimmed;
            if (!first_name || !last_name || !email)
                return res.json({
                    success: false,
                    msg: 'Мэдээлэл дутуу байна',
                });
            if (!mailRegex.test(email))
                return res.json({ success: false, msg: 'Mейл буруу байна' });
            const sameInfo = await UserFunctions.findOne([
                { status: 'active' },
                { email: { $regex: `^(${email})$`, $options: 'i' } },
            ]);
            if (sameInfo)
                return res.json({ success: false, msg: 'Mейл давхцаж байна' });
            const user = await UserFunctions.findOneAndUpdate(
                [{ status: 'active', _id: me(req) }],
                first_name,
                last_name,
                null,
                email
            );
            const { password, ...passwordClear } = user;
            if (user && isId(user?._id))
                return res.json({
                    success: true,
                    user: passwordClear,
                });
            else return res.json({ success: false, msg: 'System error!' });
        } catch (error) {
            return res.json({
                success: false,
                msg: error || error?.message || error?.msg,
            });
        }
    }
}
