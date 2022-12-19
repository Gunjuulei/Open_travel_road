import { message } from 'antd';
import Cookies from 'js-cookie';

// get homework
export const getHomeworksFetch = async ({ lesson, setHomework }) => {
    const responseHomework = await fetch(
        `http://localhost:3000/api/guardian/homework/get?lesson=${lesson}`,
        {
            method: 'GET',
            headers: {
                Authorization: `bearer ${Cookies.get('token')}`,
            },
        }
    );
    const dataHomework = await responseHomework.json();
    if (dataHomework.success === true) {
        const isHomeworks = dataHomework?.homework;
        setHomework(isHomeworks);
    } else {
        message.warning(dataHomework.msg);
    }
};


// get topic fetch
export const getTopicFetch = async ({ _id , setTopic}) => {
    const responseTopic = await fetch(
        `http://localhost:3000/api/guardian/topic/single/get?_id=${_id}`,
        {
            method: 'GET',
            headers: {
                Authorization: `bearer ${Cookies.get('token')}`,
            },
        }
    );
    const dataTopic = await responseTopic.json();
    if (dataTopic.success === true) {
        const isHomeworks = dataTopic?.topic;
        setTopic(isHomeworks);
    } else {
        message.warning(dataTopic.msg);
    }
};

// ---------------------------------------------------------------------------------------------------
// get score
export const getScoreFetch = async ({ lesson, setScore }) => {
    const responseScore = await fetch(
        `http://localhost:3000/api/guardian/score/get?lesson=${lesson}`,
        {
            method: 'GET',
            headers: {
                Authorization: `bearer ${Cookies.get('token')}`,
            },
        }
    );
    const dataScore = await responseScore.json();
    if (dataScore.success === true) {
        const isScore = dataScore.score || [];
        setScore(isScore);
    } else {
        message.warning(dataScore.msg);
    }
};

// ---------------------------------------------------------------------------------------------------
// get attendance
export const getAttendanceFetch = async ({
    
    setAttendance,
    lessonId
}) => {
    const responseScore = await fetch(
        `http://localhost:3000/api/guardian/attendance/get?lesson=${lessonId}`,
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
        setAttendance(isAttendance);
    } else {
        message.warning(dataAttendance.msg);
    }
};

// ---------------------------------------------------------------------------------------------------
// get announcement
export const getAnnouncementFetch = async ({ setAnnouncement }) => {
    const responseAnnouncement = await fetch(
        'http://localhost:3000/api/guardian/announcement/get?pageSize=20&pageNum=0',
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

// ---------------------------------------------------------------------------------------------------
// get class
export const getClassStudentFetch = async ({ level, group, setStudentClasses }) => {
    const responseClass = await fetch(
        'http://localhost:3000/api/guardian/class/single/get/students?pageSize=20&pageNum=0',
        {
            method: 'GET',
            headers: {
                Authorization: `bearer ${Cookies.get('token')}`,
            },
        }
    );
    const dataClass = await responseClass.json();
    if (dataClass.success === true) {
        const isClass = dataClass.class || [];
        console.log(isClass);
        setStudentClasses(isClass);
    } else {
        message.warning(dataClass.msg);
    }
};

export const getClassTeacherFetch = async ({ level, group, setTeacherClasses }) => {
    const responseClass = await fetch(
        'http://localhost:3000/api/guardian/class/single/get/teachers?pageSize=20&pageNum=0',
        {
            method: 'GET',
            headers: {
                Authorization: `bearer ${Cookies.get('token')}`,
            },
        }
    );
    const dataClass = await responseClass.json();
    if (dataClass.success === true) {
        const isClass = dataClass.teachers || [];
        console.log(isClass);
        setTeacherClasses(isClass);
    } else {
        message.warning(dataClass.msg);
    }
};

