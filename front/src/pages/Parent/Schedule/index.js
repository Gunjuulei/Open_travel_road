/* eslint-disable react-hooks/exhaustive-deps */
import Cookies from 'js-cookie';
import React from 'react';
import { Message } from '../../../component/atoms';
import { Calendar } from '../../../component/organisms';

export const ParentSchedule = (lessons) => {
    console.log(lessons, 'aa')
    const [schedules, setSchedules] = React.useState([]);
    const [classes, setClasses] = React.useState([]);
    React.useEffect(async () => {
        try {
            const requestSchedules = await fetch(
                'http://localhost:3000/api/guardian/schedule/get',
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
            // const requestClasses = await fetch(
            //     'http://localhost:3000/api/guardian/class/get',
            //     {
            //         method: 'GET',
            //         headers: {
            //             Authorization: `bearer ${Cookies.get('token')}`,
            //         },
            //     }
            // );
            // const resultClasses = await requestClasses.json();
            // if (resultClasses.success === true) {
            //     setClasses(resultClasses?.classes);
            // } else {
            //     Message.warning(resultClasses?.msg);
            // }
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
