import { useEffect, useState } from 'react';
import { Avatar, Card, Empty, Tag } from '../../../component/atoms';
import { Container } from '../../../component/Container';
import { Header } from '../../../component/molecules';
import { Tabbar } from '../../../component/organisms';
import {
    getClassStudentFetch,
    getClassTeacherFetch,
} from '../../GetDataFromApi/Student';
import './style.css';

const StudentClassStudents = ({ classes }) => {
    return classes?.students?.length > 0 ? (
        <div className="lesson-card-contain">
            {classes?.students?.map((el, key) => (
                <Card key={key}>
                    <div className="student-class-card">
                        <Avatar width={45} height={45} />
                        <div className="student-class-card-item">
                            {`${el?.last_name.slice(0, 1) || ''}. ${
                                el?.first_name || ''
                            } анги `}
                            <Tag color="purple" backgroundColor="purple">
                                {`${classes?.level || ''}${
                                    classes?.group || ''
                                } анги `}
                            </Tag>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    ) : (
        <div
            style={{
                margin: '1rem 0',
                width: '100%',
                height: '60vh',
            }}
        >
            <Empty title="Хоосон байна" />
        </div>
    );
};

const StudentClassTeachers = ({ classes }) => {
    return classes?.length > 0 ? (
        <div className="lesson-card-contain">
            {classes?.map((el, key) => (
                <Card key={key}>
                    <div className="student-class-card">
                        <Avatar width={45} height={45} />
                        <div className="student-class-card-item">
                            {`${el?.first_name.slice(0, 1) || ''}. ${
                                el?.last_name || ''
                            } `}
                            <Tag color="purple" backgroundColor="purple">
                                {el?.lesson?.title || ''}
                            </Tag>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    ) : (
        <div
            style={{
                margin: '1rem 0',
                width: '100%',
                height: '60vh',
            }}
        >
            <Empty title="Хоосон байна" />
        </div>
    );
};

export const StudentClass = () => {
    const [studentClasses, setStudentClasses] = useState([]);
    const [teacherClasses, setTeacherClasses] = useState([]);

    useEffect(() => {
        getClassStudentFetch({ setStudentClasses });
        getClassTeacherFetch({ setTeacherClasses });
    }, []);
    return (
        <div style={{ width: '100%', height: 'fit-content' }}>
            <Header title="Анги" />
            <Container size="full" className="clearPadding">
                <Tabbar
                    tabs={[
                        {
                            title: 'Сурагчид',
                            content: (
                                <StudentClassStudents
                                    classes={studentClasses}
                                />
                            ),
                            header: '1',
                        },
                        {
                            title: 'Багшнар',
                            content: (
                                <StudentClassTeachers
                                    classes={teacherClasses}
                                />
                            ),
                            header: '2',
                        },
                    ]}
                />
            </Container>
        </div>
    );
};
