/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingComp from './pages/LandingPage';
import { Sidebar } from './component/organisms';
import Cookies from 'js-cookie';
import { Message as message } from './component/atoms';
import {
    TeacherClass,
    TeacherLesson,
    TeacherLessonSingle,
    TeacherLessonSingleBinary,
    TeacherNote,
    TeacherRequest,
    TeacherSchedule,
    TeacherSetting,
} from './pages/Teacher';
import {
    StudentClass,
    StudentLesson,
    StudentLessonSingle,
    StudentLessonSingleBinary,
    StudentSchedule,
    StudentSetting,
} from './pages/Student';
import {
    ParentClass,
    ParentLesson,
    ParentLessonSingle,
    ParentLessonSingleBinary,
    ParentNote,
    ParentSchedule,
    ParentSetting,
} from './pages/Parent';
import { Register } from './pages/Login&Register/Register';
import Login from './pages/Login&Register/Login';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';
import { StudentHomework } from './pages/Teacher/Lesson/[single]/studentHomework';

// login
export const submitLoginFetch = async (data) => {
    const responseLogin = await fetch(`http://localhost:3000/api/login`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `bearer ${Cookies.get('token')}`,
        },
        body: JSON.stringify(data),
    });
    const dataLogin = await responseLogin.json();
    if (dataLogin.success === true) {
        Cookies.set('token', dataLogin.token);
        message.success('Хүсэлт амжилттай');
        setTimeout(() => {
            window.location.assign(
                `/${dataLogin.role === 'guardian' ? 'parent' : dataLogin.role}`
            );
        }, 700);
    } else {
        message.warning(dataLogin.msg);
    }
};

// register
export const submitRegisterFetch = async (data) => {
    const responseRegister = await fetch(`http://localhost:3000/api/register`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `bearer ${Cookies.get('token')}`,
        },
        body: JSON.stringify(data),
    });
    const dataRegister = await responseRegister.json();
    if (dataRegister.success === true) {
        // message.success('Хүсэлт амжилттай');
        message.success(dataRegister.msg);
        setTimeout(() => {
            window.location.assign('/login');
        }, 700);
    } else {
        message.warning(dataRegister.msg);
    }
};

function App() {
    const [teacherLessons, setTeacherLessons] = useState([]);
    const [lessons, setLessons] = useState([]);
    const [user, setUser] = useState({});
    useEffect(async () => {
        try {
            const responseUser = await fetch('http://localhost:3000/api/user', {
                method: 'GET',
                headers: {
                    Authorization: `bearer ${Cookies.get('token')}`,
                },
            });
            const resultUser = await responseUser.json();
            if (resultUser.success === true) {
                setUser(resultUser?.user);
            } else {
                message.warning(resultUser?.msg);
            }

            if (window.location.href?.includes('teacher')) {
                // get teacher lessons
                const responseTeacherLesson = await fetch(
                    'http://localhost:3000/api/teacher/lesson/get?pageSize=20&pageNum=0',
                    {
                        method: 'GET',
                        headers: {
                            Authorization: `bearer ${Cookies.get('token')}`,
                        },
                    }
                );
                const teacherDataLesson = await responseTeacherLesson.json();
                if (teacherDataLesson.success === true) {
                    const isTeacherLessons = teacherDataLesson.lessons || [];
                    setTeacherLessons(isTeacherLessons);
                } else {
                    setTeacherLessons({});
                    message.warning(teacherDataLesson.msg);
                }
            } else if (window.location.href?.includes('student')) {
                // get student lessons
                const responseStudentLesson = await fetch(
                    'http://localhost:3000/api/student/lesson/get?pageSize=20&pageNum=0',
                    {
                        method: 'GET',
                        headers: {
                            Authorization: `bearer ${Cookies.get('token')}`,
                        },
                    }
                );
                const studentDataLesson = await responseStudentLesson.json();
                if (studentDataLesson.success === true) {
                    const isStudentLessons = studentDataLesson.lessons || [];
                    setLessons(isStudentLessons);
                } else {
                    setLessons({});
                    message.warning(studentDataLesson.msg);
                }
            } else if (window.location.href?.includes('parent')) {
                // get parent lessons
                const responseParentLesson = await fetch(
                    'http://localhost:3000/api/guardian/lesson/get?pageSize=20&pageNum=0',
                    {
                        method: 'GET',
                        headers: {
                            Authorization: `bearer ${Cookies.get('token')}`,
                        },
                    }
                );
                const parentDataLesson = await responseParentLesson.json();
                if (parentDataLesson.success === true) {
                    const isStudentLessons = parentDataLesson.lessons || [];
                    setLessons(isStudentLessons);
                } else {
                    setLessons();
                    message.warning(parentDataLesson.msg);
                }
            }
        } catch {
            setLessons({});
        }
    }, []);

    return (
        <div style={{ display: 'flex' }}>
            <>
                {window.location.pathname.split('/')[1] === 'teacher' ||
                window.location.pathname.split('/')[1] === 'student' ||
                window.location.pathname.split('/')[1] === 'parent' ? (
                    <>
                        <Sidebar user={user} />
                        <div
                            style={{ marginLeft: '250px', overflow: 'auto' }}
                        />
                    </>
                ) : null}
                <Router>
                    <Routes>
                        <Route path="/" element={<LandingComp />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />

                        {/* Teacher Routes*/}
                        <Route
                            path="/teacher"
                            element={
                                <TeacherSchedule lessons={teacherLessons} />
                            }
                        />
                        <Route
                            path="/teacher/class"
                            element={<TeacherClass user={user} />}
                        />
                        <Route
                            path="/teacher/lesson"
                            element={
                                <TeacherLesson
                                    lessons={teacherLessons}
                                    user={user}
                                />
                            }
                        />
                        <Route
                            path="/teacher/lesson/:lessonId"
                            element={
                                <TeacherLessonSingle lessons={teacherLessons} />
                            }
                        />
                        <Route
                            path="/teacher/lesson/:lessonId/:topicId"
                            element={
                                <TeacherLessonSingleBinary
                                    lessons={teacherLessons}
                                />
                            }
                        />
                        <Route
                            path="/teacher/lesson/:lessonId/:topicId/:studentId"
                            element={
                                <StudentHomework
                                    lessons={teacherLessons }
                                />
                            }
                        />

                        <Route
                            path="/teacher/note"
                            element={<TeacherNote user={user} />}
                        />
                        <Route
                            path="/teacher/request"
                            element={<TeacherRequest />}
                        />
                        <Route
                            path="/teacher/settings"
                            element={<TeacherSetting user={user} />}
                        />

                        {/* Student Routes*/}
                        <Route path="/student" element={<StudentSchedule lessons={lessons} />} />
                        <Route
                            path="/student/lesson"
                            element={<StudentLesson lessons={lessons} />}
                        />
                        <Route
                            path="/student/lesson/:lessonId"
                            element={<StudentLessonSingle lessons={lessons} />}
                        />
                        <Route
                            path="/student/lesson/:lessonId/:topicId"
                            element={<StudentLessonSingleBinary />}
                        />
                        <Route
                            path="/student/class"
                            element={<StudentClass />}
                        />
                        <Route
                            path="/student/settings"
                            element={<StudentSetting user={user} />}
                        />

                        {/* Parent Routes */}
                        <Route path="/parent" element={<ParentSchedule lessons={lessons}/>} />
                        <Route
                            path="/parent/lesson"
                            element={<ParentLesson lessons={lessons} />}
                        />
                        <Route
                            path="/parent/lesson/:lessonId"
                            element={<ParentLessonSingle lessons={lessons} />}
                        />
                        <Route
                            path="/parent/lesson/:lessonId/:topicId"
                            element={<ParentLessonSingleBinary />}
                        />
                        <Route path="/parent/class" element={<ParentClass />} />
                        <Route path="/parent/note" element={<ParentNote />} />
                        <Route
                            path="/parent/settings"
                            element={<ParentSetting user={user} />}
                        />
                    </Routes>
                </Router>
            </>
            {/* <Form /> */}
            {/* <Calendar /> */}
        </div>
    );
}
export default App;
