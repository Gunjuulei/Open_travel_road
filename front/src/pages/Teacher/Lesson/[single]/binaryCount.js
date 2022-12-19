/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tabbar } from '../../../../component/organisms';
import { Container } from '../../../../component/Container';
import { HeaderWithBack, PDF } from '../../../../component/molecules';
import {
    Button,
    Card,
    Divider,
    Empty,
    Text,
    Icons,
} from '../../../../component/atoms';
import { TeacherLessonSingleGrade } from './grade';
import { TeacherLessonSingleAttendance } from './attendance';
import { TeacherLessonSingleHomework } from './homework';
import {
    getAttendanceFetch,
    getHomeworksFetch,
    getScoreFetch,
    getTopicFetch,
} from '../../../GetDataFromApi/Teacher';

import '../style.css';

const TeacherLessonSingleBinaryContent = ({ homework, topic }) => {
    return (
        <>
            <Text className="lessonSingle-binary-header-title">
                Хичээлийн тухай
            </Text>
            <Text className="lessonSingle-binary-header-content">
                {topic.description || (
                    <div style={{ margin: '4rem 0 10px 0' }}>
                        <Empty />
                    </div>
                )}
            </Text>

            {/*  */}

            <Divider style={{ marginTop: '100px' }} />

            {/*  */}

            <div className="lessonSingle-material-header">
                <Text className="lessonSingle->binary-middle-title">
                    Хичээлийн материал
                </Text>
                {/* <Button className="lessonSingle-binary-addBtn">
                    <Icons.AddFileIcon />
                    Нэмэх
                </Button> */}
            </div>
            <div className="lessonSingle-binary-middle-content-contain">
                {topic?.files || topic?.files?.length === 0 ? (
                    topic?.files?.map((tp, ind) => (
                        <PDF key={ind} path={`http://localhost:3000/${tp}`}>
                            <Card className="lessonSingle-binary-card">
                                <div>
                                    <Text className="lessonSingle-binary-card-header">
                                        <Icons.FileIcon />
                                        {
                                            tp?.split('/')[
                                                tp?.split('/')?.length - 1
                                            ]
                                        }
                                    </Text>
                                    {/* <Text className="lessonSingle-binary-card-content">
                                        2MB Document
                                    </Text> */}
                                </div>
                                {/* <span style={{ cursor: 'pointer' }}>
                                    <Icons.XIcon />
                                </span> */}
                            </Card>
                        </PDF>
                    ))
                ) : (
                    <div style={{ margin: '4rem 0 10px 0', width: '90%' }}>
                        <Empty title="Материал байхгүй байна" />
                    </div>
                )}
            </div>

            {/*  */}

            {/* <div
                className="lessonSingle-material-header"
                style={{ marginTop: '100px' }}
            >
                <Text className="lessonSingle-binary-middle-title">
                    Гэрийн даалгавар
                </Text>
                <Button className="lessonSingle-binary-addBtn">
                    <AddFileIcon />
                    Нэмэх
                </Button>
            </div>

            {homework.length > 0 ? (
                (homework || []).map((el, key) => (
                    <Card
                        className="lessonSingle-binary-card"
                        style={{ marginTop: '1rem' }}
                        key={key}
                    >
                        <div>
                            <Tag color="purple" backgroundColor="purple"></Tag>
                            <Text
                                className="lessonSingle-binary-card-header"
                                style={{ marginTop: '10px' }}
                            >
                                {el?.text || ''}
                            </Text>
                            <Text className="lessonSingle-binary-card-content-noMargin">
                                Хураах өдөр:{' '}
                                <span>{el?.created.slice(0, 10) || ''}</span>
                            </Text>
                        </div>
                    </Card>
                ))
            ) : (
                <div style={{ margin: '4rem 0 10px 0' }}>
                    <Empty title="Гэрийн даалгавар байхгүй байна" />
                </div>
            )} */}
        </>
    );
};
export const TeacherLessonSingleBinary = ({ lessons }) => {
    const { topicId, lessonId } = useParams();
    const [topic, setTopic] = useState([]);
    const [homework, setHomework] = useState([]);
    const [homeworkStu, setHomeworkStu] = useState([]);
    const [attendance, setAttendance] = useState([]);
    const [attendanceStu, setAttendanceStu] = useState([]);
    const [score, setScore] = useState([]);
    const [scoreStu, setScoreStu] = useState([]);

    useEffect(() => {
        if (lessons?.length > 0) {
            const isLessonClassId = [];
            (lessons || []).map((el) =>
                el._id === lessonId
                    ? isLessonClassId.push(el.class ? el.class : '')
                    : ''
            );

            const isId = isLessonClassId[0]?._id;

            getTopicFetch({
                _id: topicId,
                setTopic,
            });
            getHomeworksFetch({
                topicId: topicId,
                classId: isId,
                setHomework,
                setHomeworkStu,
            });
            getScoreFetch({
                topicId: topicId,
                classId: isId,
                setScore,
                setScoreStu,
            });
            getAttendanceFetch({
                setAttendanceStu,
                setAttendance,
                topic: topicId,
                classId: isId,
                // lesson: lessonId,
                // student: isStudent,
                // teacher: isTeacher,
                // type: 'present',
            });
        }
    }, [lessons]);
    console.log(homework, homeworkStu, 'aala');

    return (
        <div style={{ width: '100%' }}>
            <Container size="full">
                <HeaderWithBack title={topic?.title || ''} />
                <Tabbar
                    tabs={[
                        {
                            title: 'Сэдэв',
                            content: (
                                <TeacherLessonSingleBinaryContent
                                    homework={homework}
                                    topic={topic}
                                />
                            ),
                        },
                        {
                            title: 'Ирц',
                            content: (
                                <TeacherLessonSingleAttendance
                                    attendance={attendance}
                                    students={attendanceStu}
                                    lessons={lessons}
                                />
                            ),
                        },
                        {
                            title: 'Дүн',
                            content: (
                                <TeacherLessonSingleGrade
                                    score={score}
                                    students={scoreStu}
                                    lessons={lessons}
                                />
                            ),
                        },
                        {
                            title: 'Даалгавар',
                            content: (
                                <TeacherLessonSingleHomework
                                    homework={homework}
                                    students={homeworkStu}
                                    lessons={lessons}
                                />
                            ),
                        },
                    ]}
                />
            </Container>
        </div>
    );
};
