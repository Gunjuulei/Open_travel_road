import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../../component/molecules';
import { Container } from '../../../component/Container';
import {
    AddLessonModal,
    EditLessonModal,
} from '../../../component/organisms/Modal';
import {
    Button,
    Card,
    Empty,
    PopConfirm,
    Popover,
    Tag,
} from '../../../component/atoms';
import {
    submitLessonFetch,
    getClassFetch,
    deleteLessonFetch,
    submitEditLessonFetch,
} from '../../GetDataFromApi/Teacher';
import { MoreOutlined } from '@ant-design/icons';

import './style.css';

export const TeacherLesson = ({ lessons, user }) => {
    const [lessonTitle, setLessonTitle] = useState('');
    const [lessonClass, setLessonClass] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [lessonEditId, setLessonEditId] = useState('');
    const [lessonEditClass, setLessonEditClass] = useState('');
    const [lessonEditTitle, setLessonEditTitle] = useState('');
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        getClassFetch({ setClasses });
    }, []);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleOk = (e) => {
        submitLessonFetch({
            classId: lessonClass,
            title: lessonTitle,
            handleCancel,
            setLessonTitle,
            setLessonClass,
        });
    };

    const showEditModal = ({ lessonId, isClass, isTitle }) => {
        setEditModal(true);
        setLessonEditId(lessonId);
        setLessonEditClass(isClass);
        setLessonEditTitle(isTitle);
    };
    const cancelEditModal = () => {
        setEditModal(false);
    };
    const handleOkEdit = (e) => {
        submitEditLessonFetch({
            classId: lessonEditClass,
            title: lessonEditTitle,
            lessonEditId,
            setEditModal,
            setLessonEditClass,
            setLessonEditTitle,
        });
    };

    const deleteLesson = ({ _id }) => {
        deleteLessonFetch({ _id });
        console.log(_id);
    };

    return (
        <div style={{ width: '100%', height: 'fit-content' }}>
            <Header
                title="Хичээлүүд"
                action={
                    <>
                        <AddLessonModal
                            handleOk={handleOk}
                            setLessonTitle={setLessonTitle}
                            setLessonClass={setLessonClass}
                            handleCancel={handleCancel}
                            isModalOpen={isModalOpen}
                            showModal={showModal}
                            classes={classes}
                            lessonTitle={lessonTitle}
                            lessonClass={lessonClass}
                        />
                        <EditLessonModal
                            handleOk={handleOkEdit}
                            setLessonTitle={setLessonEditTitle}
                            setLessonClass={setLessonEditClass}
                            handleCancel={cancelEditModal}
                            setEditModal={setEditModal}
                            showModal={editModal}
                            classes={classes}
                            lessonTitle={lessonEditTitle}
                            lessonClass={lessonEditClass}
                        />
                    </>
                }
            />
            <Container size="full">
                <div className="lesson-card-contain">
                    {(lessons || []).length > 0 ? (
                        lessons.map((el, key) => (
                            <Link to={el._id} key={key}>
                                <Card
                                    style={{ width: '100%' }}
                                    className="teacher-lesson-card-padding"
                                >
                                    <div
                                        className="teacher-class-card-first-item"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <Popover
                                            content={
                                                <>
                                                    {' '}
                                                    <div className="popover-contain">
                                                        <Button
                                                            type="primary"
                                                            onClick={() =>
                                                                showEditModal({
                                                                    lessonId:
                                                                        el._id,
                                                                    isClass:
                                                                        el
                                                                            ?.class
                                                                            ?._id,
                                                                    isTitle:
                                                                        el?.title,
                                                                })
                                                            }
                                                        >
                                                            Засах
                                                        </Button>
                                                        <PopConfirm
                                                            title="Хичээл устгах уу?"
                                                            okText="Устгах"
                                                            cancelText="Цуцлах"
                                                            onFinish={() =>
                                                                deleteLesson({
                                                                    _id: el?._id,
                                                                })
                                                            }
                                                            okButtonProps={{
                                                                type: 'danger',
                                                            }}
                                                            cancelButtonProps={{
                                                                type: 'primary',
                                                            }}
                                                        >
                                                            <Button type="danger">
                                                                Устгах
                                                            </Button>
                                                        </PopConfirm>
                                                    </div>
                                                </>
                                            }
                                            trigger="click"
                                        >
                                            <MoreOutlined />
                                        </Popover>
                                    </div>
                                    <div className="teacherLessonCard">
                                        {el?.title || ''}
                                        <Tag
                                            color="pink"
                                            backgroundColor="pink"
                                        >
                                            {`${el?.class?.level}${el?.class?.group} анги`}
                                        </Tag>
                                        {/* {el?.class?.level > 0 &&
                                        el?.class?.level < 6 ? (
                                            <Tag
                                                color="pink"
                                                backgroundColor="pink"
                                            >
                                                {`${el?.class?.level}${el?.class?.group}`}{' '}
                                                Бага анги
                                            </Tag>
                                        ) : el?.class?.level > 5 &&
                                          el?.class?.level < 10 ? (
                                            <Tag
                                                color="green"
                                                backgroundColor="green"
                                            >
                                                Дунд анги
                                            </Tag>
                                        ) : el?.class?.level > 9 ? (
                                            <Tag
                                                color="purple"
                                                backgroundColor="purple"
                                            >
                                                Ахлах анги
                                            </Tag>
                                        ) : (
                                            ''
                                        )} */}
                                    </div>
                                </Card>
                            </Link>
                        ))
                    ) : (
                        <div className="empty-item">
                            <Empty title="Хичээл байхгүй байна" />
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
};
