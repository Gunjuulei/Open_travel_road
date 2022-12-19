import React from 'react';
import { message } from 'antd';
import Cookies from 'js-cookie';
import { compareIds } from '../../../utils/util';

// get homework
export const getHomeworksFetch = async ({
    topicId,
    classId,
    setHomework,
    setHomeworkStu,
}) => {
    const response = await fetch(
        `http://localhost:3000/api/teacher/homework/get?topic=${topicId}&class=${classId}`,
        {
            method: 'GET',
            headers: {
                Authorization: `bearer ${Cookies.get('token')}`,
            },
        }
    );
    const result = await response.json();
    if (result.success === true) {
        const isHome = result.homework || [];
        const isStu = result.students || [];
        setHomework(isHome);
        setHomeworkStu(isStu);
    } else {
        message.warning(result.msg);
    }
};

// get topic
export const getTopicFetch = async ({ _id, setTopic }) => {
    const response = await fetch(
        `http://localhost:3000/api/teacher/topic/single/get?_id=${_id}`,
        {
            method: 'GET',
            headers: {
                Authorization: `bearer ${Cookies.get('token')}`,
            },
        }
    );
    const result = await response.json();
    if (result.success === true) {
        const isScore = result?.topic;
        setTopic(isScore);
    } else {
        message.warning(result.msg);
    }
};

// ---------------------------------------------------------------------------------------------------
// get score
export const getScoreFetch = async ({
    topicId,
    classId,
    setScore,
    setScoreStu,
}) => {
    const responseScore = await fetch(
        `http://localhost:3000/api/teacher/score/get?topic=${topicId}&class=${classId}`,
        {
            method: 'GET',
            headers: {
                Authorization: `bearer ${Cookies.get('token')}`,
            },
        }
    );
    console.log(classId);
    const dataScore = await responseScore.json();
    if (dataScore.success === true) {
        const isScore = dataScore.score || [];
        const isScoreStu = dataScore.students || [];
        setScore(isScore);
        setScoreStu(isScoreStu);
    } else {
        message.warning(dataScore.msg);
    }
};
// submit score
export const submitScoreFetch = async ({
    points,
    topicId,
    classId,
    lessonId,
    studentId,
    teacherId,
}) => {
    const responseScore = await fetch(
        `http://localhost:3000/api/teacher/score/submit`,
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `bearer ${Cookies.get('token')}`,
            },
            body: JSON.stringify({
                topic: topicId,
                class: classId,
                lesson: lessonId,
                student: studentId,
                teacher: teacherId,
                points: points,
            }),
        }
    );
    const dataScore = await responseScore.json();
    if (dataScore.success === true) {
        const isScore = dataScore.score || {};
        setTimeout(() => {
            window.location.reload();
        }, 800);
        message.success('Амжилттай хадгаллаа');
    } else {
        message.warning(dataScore.msg);
    }
};

// ---------------------------------------------------------------------------------------------------
// get attendance
export const getAttendanceFetch = async ({
    topic,
    setAttendance,
    setAttendanceStu,
    classId,
    lesson,
    student,
    teacher,
    type,
}) => {
    const responseScore = await fetch(
        `http://localhost:3000/api/teacher/attendance/get?topic=${topic}&class=${classId}`,
        {
            method: 'GET',
            headers: {
                Authorization: `bearer ${Cookies.get('token')}`,
            },
        }
    );
    const dataAttendance = await responseScore.json();
    if (dataAttendance.success === true) {
        const isAttendance = dataAttendance.attendance || [];
        const isAttendanceStu = dataAttendance.students || [];
        setAttendance(isAttendance);
        setAttendanceStu(isAttendanceStu);
    } else {
        message.warning(dataAttendance.msg);
    }
};

// ---------------------------------------------------------------------------------------------------
// get announcement
export const getAnnouncementFetch = async ({ setAnnouncement }) => {
    const responseAnnouncement = await fetch(
        'http://localhost:3000/api/teacher/announcement/get?pageSize=20&pageNum=0',
        {
            method: 'GET',
            headers: {
                Authorization: `bearer ${Cookies.get('token')}`,
            },
        }
    );
    const dataAnnouncement = await responseAnnouncement.json();
    if (dataAnnouncement.success === true) {
        const isAnnouncement = dataAnnouncement.announcements || [];
        setAnnouncement(isAnnouncement);
    } else {
        setAnnouncement([]);
        message.warning(dataAnnouncement.msg);
    }
};
// submit announcement
export const submitAnnouncementFetch = async ({
    value,
    classId,
    announcement,
    setAnnouncement,
}) => {
    const responseAnnouncement = await fetch(
        `http://localhost:3000/api/teacher/announcement/submit`,
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `bearer ${Cookies.get('token')}`,
            },
            body: JSON.stringify({
                text: value,
                class: classId,
            }),
        }
    );
    const dataAnnouncement = await responseAnnouncement.json();
    if (dataAnnouncement.success === true) {
        const isAnnouncement = dataAnnouncement.announcement || {};
        setAnnouncement((prevAnnoun) => [...prevAnnoun, isAnnouncement]);
        message.success('Хүсэлт амжилттай');
    } else {
        message.warning(dataAnnouncement.msg);
    }
};
// delete announcement
export const deleteAnnouncementFetch = async ({
    id,
    announcement,
    setAnnouncement,
}) => {
    const responseAnnouncementDelete = await fetch(
        `http://localhost:3000/api/teacher/announcement/delete`,
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `bearer ${Cookies.get('token')}`,
            },
            body: JSON.stringify({
                _id: id,
            }),
        }
    );
    const dataAnnouncement = await responseAnnouncementDelete.json();
    if (dataAnnouncement.success === true) {
        setAnnouncement((prevAnnoun) =>
            prevAnnoun.filter((el) => {
                return el?._id !== dataAnnouncement?.announcement?._id;
            })
        );
        message.success('Амжилттай усгалаа');
    } else {
        message.warning(dataAnnouncement.msg);
    }
};

// ---------------------------------------------------------------------------------------------------
// get class
export const getClassFetch = async ({ level, group, setClasses }) => {
    const responseClass = await fetch(
        'http://localhost:3000/api/teacher/class/get?pageSize=20&pageNum=0',
        {
            method: 'GET',
            headers: {
                Authorization: `bearer ${Cookies.get('token')}`,
            },
        }
    );
    const dataClass = await responseClass.json();
    if (dataClass.success === true) {
        const isClass = dataClass.classes || [];
        setClasses(isClass);
    } else {
        message.warning(dataClass.msg);
    }
};
// delete class
export const deleteClassFetch = async ({ _id }) => {
    const response = await fetch(
        'http://localhost:3000/api/teacher/class/delete',
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `bearer ${Cookies.get('token')}`,
            },
            body: JSON.stringify({ _id: _id }),
        }
    );
    const result = await response.json();
    if (result.success === true) {
        message.success('Анги устгагдлаа');
        setTimeout(() => {
            window.location.reload();
        }, 600);
    } else {
        message.warning(result.msg);
    }
};
// submit class
export const submitClassFetch = async ({
    level,
    group,
    handleCancel,
    setClasses,
}) => {
    const responseClass = await fetch(
        `http://localhost:3000/api/teacher/class/submit`,
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `bearer ${Cookies.get('token')}`,
            },
            body: JSON.stringify({
                group: group,
                level: level,
                mine: true,
            }),
        }
    );
    const dataClass = await responseClass.json();
    if (dataClass.success === true) {
        const isClass = dataClass.class || [];
        setClasses((prevClass) => [...prevClass, isClass]);
        handleCancel();
        message.success('Анги үүслээ');
    } else {
        message.warning(dataClass.msg);
    }
};
// edit class
export const submitEditClassFetch = async ({
    level,
    group,
    setShowEditModal,
    setClasses,
    classId,
}) => {
    const responseClass = await fetch(
        `http://localhost:3000/api/teacher/class/submit`,
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `bearer ${Cookies.get('token')}`,
            },
            body: JSON.stringify({
                group: group,
                level: level,
                _id: classId,
                mine: true,
            }),
        }
    );
    const dataClass = await responseClass.json();
    if (dataClass.success === true) {
        const isClass = dataClass?.class || [];
        setClasses((prevClass) =>
            (prevClass || []).map((pe) => {
                if (compareIds(isClass?._id, pe?._id)) {
                    return isClass;
                }
                return pe;
            })
        );
        setShowEditModal(false);
        message.success('Анги засагдлаа');
    } else {
        setShowEditModal(false);
        message.warning(dataClass.msg);
    }
};

// get students
export const getClassStuFetch = async ({
    pageNum,
    pageSize,
    setIsClassStuId,
}) => {
    const responseClass = await fetch(
        `http://localhost:3000/api/teacher/class/student/get?pageSize=${pageSize}&pageNum=${pageNum}`,
        {
            method: 'GET',
            headers: {
                Authorization: `bearer ${Cookies.get('token')}`,
            },
        }
    );
    const response = await responseClass.json();
    if (response.success === true) {
        setIsClassStuId(response?.students);
    } else {
        message.warning(response.msg);
    }
};
export const addClassStuFetch = async ({
    isClassId,
    isStuId,
    setIsModalOpen2,
}) => {
    const responseClass = await fetch(
        `http://localhost:3000/api/teacher/class/single/add/students`,
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `bearer ${Cookies.get('token')}`,
            },
            body: JSON.stringify({
                _id: isClassId,
                student_ids: isStuId,
            }),
        }
    );
    const response = await responseClass.json();
    if (response.success === true) {
        setIsModalOpen2(false);
        message.success('Сурагч нэмэгдлээ');
        setTimeout(() => {
            window.location.reload();
        }, 600);
    } else {
        message.warning(response.msg);
    }
};
// delete lesson
export const deleteLessonFetch = async ({ _id }) => {
    const response = await fetch(
        'http://localhost:3000/api/teacher/lesson/delete',
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `bearer ${Cookies.get('token')}`,
            },
            body: JSON.stringify({ _id: _id }),
        }
    );
    const result = await response.json();
    if (result.success === true) {
        message.success('Хичээл устгагдлаа');
        setTimeout(() => {
            window.location.reload();
        }, 600);
    } else {
        message.warning(result.msg);
    }
};

// ---------------------------------------------------------------------------------------------------
export const submitLessonFetch = async ({
    title,
    classId,
    handleCancel,
    setLessonTitle,
    setLessonClass,
}) => {
    // submit lesson
    const responseLesson = await fetch(
        `http://localhost:3000/api/teacher/lesson/submit`,
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `bearer ${Cookies.get('token')}`,
            },
            body: JSON.stringify({
                class: classId,
                title: title,
            }),
        }
    );
    const dataLesson = await responseLesson.json();
    if (dataLesson.success === true) {
        message.success('Хүсэлт амжилттай');
        setTimeout(() => {
            window.location.reload();
        }, 600);
        handleCancel();
    } else {
        message.warning(dataLesson.msg);
        handleCancel();
        setLessonTitle('');
        setLessonClass('');
    }
};

// ---------------------------------------------------------------------------------------------------
export const submitEditLessonFetch = async ({
    title,
    classId,
    setEditModal,
    setLessonEditClass,
    setLessonEditTitle,
    setClasses,
    lessonEditId
}) => {
    // submit lesson
    const responseLesson = await fetch(
        `http://localhost:3000/api/teacher/lesson/submit`,
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `bearer ${Cookies.get('token')}`,
            },
            body: JSON.stringify({
                class: classId,
                title: title,
                _id: lessonEditId
            }),
        }
    );
    const result = await responseLesson.json();
    if (result.success === true) {
        const isLesson = result?.lesson || [];
        message.success('Амжилттай заслаа');
        setEditModal(false);
        setTimeout(() => {
            window.location.reload();
        }, 600);
        // setClasses((prevClass) =>
        //     (prevClass || []).map((pe) => {
        //         if (compareIds(isLesson?._id, pe?._id)) {
        //             return isLesson;
        //         }
        //         return pe;
        //     })
        // );
    } else {
        message.warning(result.msg);
        setEditModal(false);
    }
};
