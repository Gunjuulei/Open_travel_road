import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';
import { Avatar, Empty, Checkbox } from '../../../atoms';
import { compareIds } from '../../../../utils/util';

import './style.css';

const columns = [
    {
        name: 'Сурагчын нэр',
    },
    {
        name: 'Ирсэн',
        key: 'irsen',
    },
    {
        name: 'Өвчтэй',
        key: 'owchtei',
    },
    {
        name: 'Чөлөөтэй',
        key: 'cholo',
    },
    {
        name: 'Тасалсан',
        key: 'tas',
    },
];

export const TeacherAttendanceTable = ({ attendance, students, lessons }) => {
    const { lessonId, topicId } = useParams();
    const [studentAttendances, setStudentAttendances] = useState(
        (students || []).map((stude) => {
            return {
                ...stude,
                attendanceType:
                    (
                        (attendance || []).find((att) =>
                            compareIds(att?.student?._id, stude?._id)
                        ) || {}
                    )?.type || '',
            };
        })
    );
    const class_id = (lessons || []).find((lesson) => {
        if (compareIds(lesson?._id, lessonId)) {
            return true;
        }
        return false;
    })?.class?._id;
    console.log(studentAttendances);
    // const [type, setType] = useState('');

    const onSubmit = async ({ type, student_id }) => {
        console.log(student_id);
        const data = {
            topic: topicId,
            lesson: lessonId,
            class: class_id,
            student: student_id,
            type: type,
        };

        const response = await fetch(
            'http://localhost:3000/api/teacher/attendance/submit',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `bearer ${Cookies.get('token')}`,
                },
                body: JSON.stringify(data),
            }
        );
        const result = await response.json();
        setStudentAttendances((prior) => {
            return (prior || []).map((attne) => {
                if (!compareIds(attne?._id, result?.attendance?.student?._id)) {
                    return attne;
                }
                return {
                    ...attne,
                    attendanceType: result?.attendance?.type,
                };
            });
        });
    };

    return (
        <div className="attendance-table-contain">
            <div className="attendance-table-column">
                <div className="attendance-table-column-one">
                    {columns[0].name}
                </div>
                <div className="attendance-table-column-two">
                    {(columns || []).slice(1).map((el, key) => (
                        <div
                            className="attendance-table-collumn-two-child"
                            key={key}
                        >
                            {el.name || ''}
                        </div>
                    ))}
                </div>
            </div>
            <div className="attendance-table-data">
                {studentAttendances.length > 0 ? (
                    studentAttendances.map((el, key) => (
                        <div
                            className="attendance-table-data-child"
                            style={
                                key % 2 === 0
                                    ? { background: 'white' }
                                    : { background: '#f9fafb' }
                            }
                            key={key}
                        >
                            <div className="attendance-table-data-child-one">
                                <Avatar />
                                {`${el?.last_name || ''} ${
                                    el?.first_name || ''
                                }`}
                            </div>

                            <div className="attendance-table-data-child-two">
                                {['present', 'sick', 'absent', 'unabsent'].map(
                                    (ty, ind) => (
                                        <Checkbox
                                            key={ind}
                                            className="isCheckbox"
                                            checked={el?.attendanceType === ty}
                                            onChange={(e) =>
                                                el?.type !== ty
                                                    ? onSubmit({
                                                          type: ty,
                                                          student_id: el._id,
                                                      })
                                                    : null
                                            }
                                        />
                                    )
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <div style={{ margin: '1rem 0' }}>
                        <Empty title="Сурагч байхгүй байна" />
                    </div>
                )}
            </div>
        </div>
    );
};
