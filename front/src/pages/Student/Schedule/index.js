/* eslint-disable react-hooks/exhaustive-deps */
import Cookies from 'js-cookie';
import React from 'react';
import { Message } from '../../../component/atoms';
import { Calendar } from '../../../component/organisms';

export const StudentSchedule = ({ lessons }) => {
    const [schedules, setSchedules] = React.useState([]);
    const [classes, setClasses] = React.useState([]);
    React.useEffect(async () => {
        try {
            const requestSchedules = await fetch(
                'http://localhost:3000/api/student/schedule/get',
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
        } catch {
            setClasses([]);
        }
    }, []);
    return (
        <div className="homeworkContain">
            <Calendar
                schedules={schedules}
                setSchedules={setSchedules}
                lessons={lessons}
                classes={classes}
            />
        </div>
    );
};
