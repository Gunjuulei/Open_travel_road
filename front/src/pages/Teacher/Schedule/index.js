/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Cookies from 'js-cookie';
import { Calendar } from '../../../component/organisms';
import { Message } from '../../../component/atoms';

export const TeacherSchedule = ({ lessons }) => {
    const [schedules, setSchedules] = React.useState([]);
    const [classes, setClasses] = React.useState([]);
    React.useEffect(async () => {
        try {
            const requestSchedules = await fetch(
                'http://localhost:3000/api/teacher/schedule/get',
                {
                    method: 'GET',
                    headers: {
                        Authorization: `bearer ${Cookies.get('token')}`,
                    },
                }
            );
            const resultSchedules = await requestSchedules.json();
            if (resultSchedules.success === true) {
                setSchedules(resultSchedules?.schedules);
            } else {
                Message.warning(requestSchedules?.msg);
            }
            const requestClasses = await fetch(
                'http://localhost:3000/api/teacher/class/get',
                {
                    method: 'GET',
                    headers: {
                        Authorization: `bearer ${Cookies.get('token')}`,
                    },
                }
            );
            const resultClasses = await requestClasses.json();
            if (resultClasses.success === true) {
                setClasses(resultClasses?.classes);
            } else {
                Message.warning(resultClasses?.msg);
            }
        } catch {
            setClasses([]);
        }
    }, []);
    return <Calendar schedules={schedules} setSchedules={setSchedules} lessons={lessons} classes={classes} />;
};
