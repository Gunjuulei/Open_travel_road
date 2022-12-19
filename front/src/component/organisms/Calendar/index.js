import './Calendar.css';

import {
    getTimeTable,
    __TEST_SCHEDULE_DATA_CREATION__,
    initScheduleData,
    getNthStartingTime,
} from '../../../utils/util';
import { Header } from '../../molecules';
import { AddCallendarModal } from '../Modal/AddCallendarModal';
import { useState } from 'react';
import { useEffect } from 'react';

function CalendarCell({ data, onClick }) {
    return (
        <div
            className="calendar-cell-container"
            onClick={() => onClick?.(data)}
        >
            <div className="calendar-cell-container-header">
                <span>{`${data?.class?.level}${data?.class?.group}`}</span>{' '}
                <span>{data?.lesson?.title}</span>
            </div>
            <span className="calendar-cell-container-body">
                {getNthStartingTime(data?.time)}
            </span>
        </div>
    );
}

export function Calendar({ schedules, setSchedules, lessons, classes }) {
    const weekdays = ['Даваа', 'Мягмар', 'Лхагва', 'Пүрэв', 'Баасан'];
    const times = getTimeTable();

    const twoDimensionalData = initScheduleData(schedules);
    const [tempSchedule, setTempSchedule] = useState({});

    return (
        <div className="calendar">
            <Header
                title="Хуваарь"
                action={
                    window.location.href.includes('teacher') ? (
                        <AddCallendarModal
                            setSchedules={setSchedules}
                            lessons={lessons}
                            tempSchedule={tempSchedule}
                            setTempSchedule={setTempSchedule}
                            classes={classes}
                        />
                    ) : null
                }
            />
            <div className="calendar-container">
                <div className="calendar-times">
                    <div className="calendar-column">
                        <div className="calendar-header border" />
                        {times.map((time, ind) => (
                            <div
                                key={ind}
                                className="calendar-cell-wrapper border"
                            >
                                <div className={`calendar-cell-header`}>
                                    {time}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="calendar-wrapper">
                    {weekdays.map((week, weekIndex) => (
                        <div className="calendar-column" key={weekIndex}>
                            <div className="calendar-header center border">
                                {week}
                            </div>
                            {times.map((time, timeIndex) => (
                                <div
                                    className="calendar-cell-wrapper border"
                                    key={timeIndex}
                                >
                                    <div
                                        className={`calendar-cell-header mobile`}
                                    >
                                        {time}
                                    </div>
                                    <div className="calendar-cell-item">
                                        {twoDimensionalData[weekIndex][
                                            timeIndex
                                        ] ? (
                                            <CalendarCell
                                                onClick={(a) =>
                                                    setTempSchedule(a)
                                                }
                                                data={
                                                    twoDimensionalData[
                                                        weekIndex
                                                    ][timeIndex]
                                                }
                                            />
                                        ) : null}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
