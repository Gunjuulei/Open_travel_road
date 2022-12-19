import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { compareIds } from '../../../../utils/util';
import { Button, Text, Icons, Select, Modal, Message } from '../../../atoms';

import '../style.css';

const getWeekdayName = (ind) => {
    switch (ind) {
        case 0:
            return 'Даваа';
        case 1:
            return 'Мягмар';
        case 2:
            return 'Лхагва';
        case 3:
            return 'Пүрэв';
        case 4:
            return 'Баасан';
        default:
            return '';
    }
};

export const AddCallendarModal = ({
    lessons,
    setSchedules,
    tempSchedule,
    setTempSchedule,
    classes,
}) => {
    const [_id, set_id] = useState('');
    const [class_, setClass_] = useState('');
    const [lesson, setLesson] = useState('');
    const [time, setTime] = useState(1);
    const [day, setDay] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOk = async (e) => {
        const requestSchedules = await fetch(
            'http://localhost:3000/api/teacher/schedule/submit',
            {
                method: 'POST',
                body: JSON.stringify({
                    _id,
                    class: class_,
                    lesson,
                    day,
                    time,
                }),
                headers: {
                    Authorization: `bearer ${Cookies.get('token')}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        );
        const resultSchedules = await requestSchedules.json();
        if (resultSchedules.success === true) {
            if (resultSchedules?._id) {
                setSchedules(schedules => (schedules || []).map(schedule => {
                    if (compareIds(schedule?._id, resultSchedules?.schedule?._id)) {
                        return resultSchedules?.schedule;
                    }
                    return schedule;
                }));
            } else {
                setSchedules(schedules => ([...(schedules || []), resultSchedules?.schedule]));
            }
            setTempSchedule({});
            setIsModalOpen(false);
        } else {
            Message.warning(resultSchedules?.msg);
        }
    };
    
    useEffect(() => {
        if (Object.keys(tempSchedule)?.length) {
            setIsModalOpen(true);
            set_id(tempSchedule?._id);
            setClass_(tempSchedule?.class?._id);
            setLesson(tempSchedule?.lesson?._id);
            setTime(tempSchedule?.time);
            setDay(tempSchedule?.day);
        } else {
            set_id('');
            setClass_('');
            setLesson('');
            setTime(1);
            setDay(1);
        }
    }, [tempSchedule]);

    return (
        <div className="confirmModal-contain">
            <Button className="calendar-addScheduleBtn" onClick={() => setIsModalOpen(true)}>
                <Icons.PlusIconDark />
                Хичээлийн хуваарь нэмэх
            </Button>
            <Modal
                className="modal"
                title="Хувиар нэмэх"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={() => {
                    setTempSchedule({});
                    setIsModalOpen(false);
                }}
                okText={<div className="antd-okBtn-style">Нэмэх</div>}
                cancelText="Цуцлах"
            >
                <div className="calendar-contain">
                    <div className="confirmModal-item">
                        <Text className="confirmModal-item-topic">
                            Анги бүлэг
                        </Text>
                        <Select
                            placeholder="10а анги"
                            value={class_ || undefined}
                            options={(classes || []).map((classess) => ({
                                label: `${classess?.level}${classess?.group}`,
                                value: classess?._id,
                            }))}
                            setSelectValue={(e) => {
                                setClass_(e);
                                setLesson(undefined);
                            }}
                        />
                    </div>
                    <div className="confirmModal-item-2">
                        <Text className="confirmModal-item-topic">Хичээл</Text>
                        <Select
                            disabled={!class_}
                            placeholder="Монгол хэл"
                            value={lesson || undefined}
                            options={(lessons || [])
                                .filter((a) =>
                                    compareIds(a?.class?._id, class_)
                                )
                                .map((less) => ({
                                    label: `${less?.title}-${less?.class?.level}${less?.class?.group}`,
                                    value: less?._id,
                                }))}
                            setSelectValue={(e) => setLesson(e)}
                        />
                    </div>
                    <div className="confirmModal-item-2">
                        <Text className="confirmModal-item-topic">Өдөр</Text>
                        <Select
                            placeholder="Даваа"
                            options={Array(5)
                                .fill(0)
                                .map((a, ind) => ({
                                    value: ind + 1,
                                    label: getWeekdayName(ind),
                                }))}
                            value={day}
                            setSelectValue={(e) => setDay(e)}
                        />
                    </div>
                    <div className="confirmModal-item-2">
                        <Text className="confirmModal-item-topic">Цаг</Text>
                        <Select
                            placeholder="1-р цаг"
                            options={Array(10)
                                .fill(0)
                                .map((a, ind) => ({
                                    value: ind + 1,
                                    label: `${ind + 1}-р цаг`,
                                }))}
                            value={time}
                            setSelectValue={(e) => setTime(e)}
                        />
                    </div>
                </div>
            </Modal>
        </div>
    );
};
