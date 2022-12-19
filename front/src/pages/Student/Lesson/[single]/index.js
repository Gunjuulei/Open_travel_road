import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container } from '../../../../component/Container';
import { HeaderWithBack } from '../../../../component/molecules';
import { Tabbar } from '../../../../component/organisms';
import '../style.css';
import { StudentLessonSingleHomework } from './homework';
import { StudentLessonSingleGrade } from './grade';
import { StudentLessonSingleAttendance } from './attendance';
import { Card, Empty } from '../../../../component/atoms';
import {
    getAttendanceFetch,
    getHomeworksFetch,
    getScoreFetch,
} from '../../../GetDataFromApi/Student';

const StudentLessonSingleBinaryContent = ({ topic, lessonSingle }) => {
    return (
        <>
            <div className="lessonSingle-header">
                Хичээлийн сэдэвчилсэн төлөвлөгөө
            </div>
            {lessonSingle[0] && lessonSingle[0].topics ? (
                (lessonSingle[0]?.topics || []).map((el, key) => (
                    <div className="lessonSingle-card-contain">
                        <Link to={el._id}>
                            <Card style={{ width: '70%' }}>
                                <div className="lessonSingle-card-header">
                                    {' '}
                                    {el?.title || ''}
                                </div>
                                <div className="lessonSingle-card-content">
                                    {el?.description || ''}
                                </div>
                            </Card>
                        </Link>
                    </div>
                ))
            ) : (
                <div
                    style={{
                        height: '50vh',
                        display: 'flex',
                        alignItems: 'center',
                        margin: '4rem 0 10px 0',
                    }}
                >
                    <Empty title="Төлөвлөгөө байхгүй байна" />
                </div>
            )}
        </>
    );
};

export const StudentLessonSingle = ({ lessons }) => {
    const { topicId, lessonId } = useParams();
    const [homework, setHomework] = useState([]);
    const [topic, setTopic] = useState([]);
    const [score, setScore] = useState([]);
    const [attendance, setAttendance] = useState([]);

    const lessonSingle = [];
    (lessons || []).map((el) =>
        el._id === lessonId ? lessonSingle.push(el) : null
    );

    const headerTitle = `${lessonSingle[0]?.title || ''}`;

    useEffect(() => {
        getHomeworksFetch({
            lesson: lessonId,
            setHomework,
        });
        getScoreFetch({
            lesson: lessonId,
            setScore,
        });
        getAttendanceFetch({
            lessonId: lessonId,
            setAttendance,
        });
    }, []);
    return (
        <div style={{ width: '100%' }}>
            <Container size="full">
                <HeaderWithBack title={headerTitle} />

                <Tabbar
                    tabs={[
                        {
                            title: 'Сэдвүүд',
                            content: (
                                <StudentLessonSingleBinaryContent
                                    topic={topic}
                                    lessonSingle={lessonSingle}
                                />
                            ),
                        },
                        {
                            title: 'Даалгавар',
                            content: (
                                <StudentLessonSingleHomework
                                    homework={homework}
                                    lessons={lessons}
                                />
                            ),
                        },
                        {
                            title: 'Дүнгүүд',
                            content: <StudentLessonSingleGrade score={score} />,
                        },
                        {
                            title: 'Ирц',
                            content: (
                                <StudentLessonSingleAttendance
                                    attendance={attendance}
                                />
                            ),
                        },
                    ]}
                />
            </Container>
        </div>
    );
};
