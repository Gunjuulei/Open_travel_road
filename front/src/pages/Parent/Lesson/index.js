import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../../component/Container';
import { Header } from '../../../component/molecules';
import { Card, Empty } from '../../../component/atoms';
import './style.css';

export const ParentLesson = ({ lessons }) => {
    return (
        <div style={{ width: '100%', height: 'fit-content' }}>
            {window.location.href.includes('parent') ? (
                <Header title="Хичээлүүд" />
            ) : (
                <Header title="Миний хичээлүүд" />
            )}
            <Container size="full">
                {lessons?.length ? (
                    <div className="lesson-card-contain">
                        {lessons?.map((el, key) => (
                            <Link to={el._id} key={key}>
                                <Card style={{ width: '100%' }}>
                                    <div className="studentLessonCard">
                                        {el?.title || ''}
                                        <div className="studentLessonCard-item">
                                            {`${
                                                (
                                                    el.teacher || ''
                                                ).first_name.slice(0, 1) || ''
                                            }.${
                                                (el.teacher || '').last_name ||
                                                ''
                                            }`}
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div
                        style={{
                            width: '100%',
                            margin: '1rem 0',
                            height: '60vh',
                        }}
                    >
                        <Empty title="Хичээл байхгүй байна" />
                    </div>
                )}
            </Container>
        </div>
    );
};
