import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import {
    Empty,
    Avatar,
    Button,
    Tooltip,
    Message,
    InputNumber,
} from '../../../atoms';
import { useParams } from 'react-router-dom';
import { compareIds } from '../../../../utils/util';
import './style.css';

const columns = [
    {
        key: '1',
        name: 'Сурагчийн нэр',
    },
    {
        key: '2',
        name: 'Дүн оруулах',
    },
];
export const TeacherGradeTable = ({ score, students, lessons }) => {
    const { lessonId, topicId } = useParams();
    const [onoo, setOnoo] = useState(0);
    const [editing, setEditing] = useState('');
    const [studentScore, setStudentScore] = useState(
        (students || []).map((stude) => {
            return {
                ...stude,
                points:
                    (
                        (score || []).find((att) =>
                            compareIds(att?.student?._id, stude?._id)
                        ) || {}
                    )?.points || '',
            };
        })
    );

    const class_id = (lessons || []).find((lesson) => {
        if (compareIds(lesson?._id, lessonId)) {
            return true;
        }
        return false;
    })?.class?._id;
    console.log(studentScore);

    const submit = async ({ student_id, onoo }) => {
        const response = await fetch(
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
                    lesson: lessonId,
                    class: class_id,
                    student: student_id,
                    points: onoo || 0,
                }),
            }
        );
        const result = await response.json();
        console.log(result.score);
        if (result.success) {
            setStudentScore((prior) => {
                return (prior || []).map((attne) => {
                    if (!compareIds(attne?._id, result?.score?.student?._id)) {
                        return attne;
                    }
                    return {
                        ...attne,
                        points: result?.score?.points,
                    };
                });
            });
            setEditing('');
            Message.success('Хүсэлт амжилттай');
        } else {
            Message.warning(result.msg);
        }
    };

    return (
        <div className="grade-table-contain">
            <div className="grade-table-header-contain">
                Даалгаварын дүн
                {/* <div className="grade-table-header-btn">
                    {editing === false && (studentScore || []).length > 0 ? (
                        <Button
                            className="btnFix"
                            type="primary"
                            onClick={() => setEditing(!editing)}
                        >
                            Дүн засах
                        </Button>
                    ) : null}
                </div> */}
            </div>
            <div className="grade-table-column">
                <div className="grade-table-column-one">{columns[0].name}</div>
                <div className="grade-table-column-two">
                    {(columns || []).slice(1).map((aa, key) => (
                        <div
                            className="grade-table-collumn-two-child"
                            key={key}
                        >
                            {aa?.name || ''}
                        </div>
                    ))}
                </div>
            </div>
            <div className="grade-table-data">
                {studentScore.length > 0 ? (
                    (studentScore || []).map((el, key) => (
                        <div
                            className="grade-table-data-child"
                            style={
                                key % 2 === 0
                                    ? { background: 'white' }
                                    : { background: '#f9fafb' }
                            }
                        >
                            <div className="grade-table-data-child-one">
                                <Avatar />
                                {`${el?.last_name || ''} ${
                                    el?.first_name || ''
                                }`}
                            </div>
                            <div className="grade-table-data-child-two">
                                <div>
                                    {!compareIds(editing, el?._id) ? (
                                        <div
                                            style={{
                                                marginLeft: '1rem',
                                                marginTop: '8px',
                                            }}
                                        >
                                            {el?.points || 0}
                                        </div>
                                    ) : (
                                        // <Input
                                        //     type="text"
                                        //     value={el.points}
                                        //     width="45px"
                                        //     height="30px"
                                        //     setUsername={(e) =>
                                        //         // onChange({
                                        //         //     point: e,
                                        //         //     student_id: el._id,
                                        //         // })
                                        //         setAaid(e)
                                        //     }
                                        // />
                                        <InputNumber
                                            type="text"
                                            defaultValue={el.points}
                                            min={0}
                                            max={100}
                                            onChange={(e) => setOnoo(e)}
                                        />
                                    )}
                                </div>
                                {compareIds(editing, el?._id) ? (
                                    <div className="checkIconContainer">
                                        {' '}
                                        <Tooltip
                                            placement="top"
                                            title="Цуцлах"
                                            color="red"
                                        >
                                            <div
                                                className="closeicon"
                                                onClick={() => setEditing('')}
                                            >
                                                <CloseCircleOutlined />
                                            </div>
                                        </Tooltip>
                                        <Tooltip
                                            placement="top"
                                            title="Хадгалах"
                                            color="green"
                                        >
                                            <div
                                                className="checkicon"
                                                onClick={() =>
                                                    submit({
                                                        student_id: el._id,
                                                        onoo,
                                                    })
                                                }
                                            >
                                                <CheckCircleOutlined />
                                            </div>
                                        </Tooltip>
                                    </div>
                                ) : (
                                    <Button
                                        className="btnFix"
                                        type="primary"
                                        onClick={() => setEditing(el?._id)}
                                    >
                                        Дүн засах
                                    </Button>
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
