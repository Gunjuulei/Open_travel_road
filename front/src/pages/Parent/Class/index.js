import { useEffect, useState } from 'react';
import { Avatar, Card, Empty, Tag } from '../../../component/atoms';
import { Container } from '../../../component/Container';
import { Header } from '../../../component/molecules';
import { Tabbar } from '../../../component/organisms';
import {
    getClassStudentFetch,
    getClassTeacherFetch,
} from '../../GetDataFromApi/Parent';
import './style.css';

const ParentClassStudents = ({ classes }) => {
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
                width: '90%',
                height: '60vh',
            }}
        >
            <Empty title="No data" />
        </div>
    );
};

const ParentClassTeachers = ({ classes }) => {
    return classes?.length > 0 ? (
        <div className="lesson-card-contain">
            {classes?.map((el, key) => (
                <Card key={key}>
                    <div className="student-class-card">
                        <Avatar width={45} height={45} />
                        <div className="student-class-card-item">
                            {`${el?.first_name.slice(0, 1) || ''}. ${
                                el?.last_name || ''
                            } анги `}
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
                width: '90%',
                height: '60vh',
            }}
        >
            <Empty title="No data" />
        </div>
    );
};

export const ParentClass = () => {
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
                                <ParentClassStudents classes={studentClasses} />
                            ),
                            header: '1',
                        },
                        {
                            title: 'Багшнар',
                            content: (
                                <ParentClassTeachers classes={teacherClasses} />
                            ),
                            header: '2',
                        },
                    ]}
                />
            </Container>
        </div>
    );
};
