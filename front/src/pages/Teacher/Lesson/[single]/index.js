import React, { useEffect, useState }from 'react';
import Cookies from 'js-cookie';
import { Link, useParams } from 'react-router-dom';
import { Container } from '../../../../component/Container';
import { HeaderWithBack } from '../../../../component/molecules';
import { ConfirmPlan } from '../../../../component/organisms/Modal';
import { Button, Card, Empty, PopConfirm, Message as message } from '../../../../component/atoms';

import '../style.css';
import { compareIds } from '../../../../utils/util';

export const TeacherLessonSingle = ({ lessons }) => {
    const { lessonId } = useParams();
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [lessonSingle, setLessonSingle] = useState({});
    
    useEffect(() => {
        setLessonSingle((lessons || []).find((el) =>el._id === lessonId));
    }, [lessons, lessonId]);

    const headerTitle = `${lessonSingle?.title || ''} ${
        lessonSingle?.class?.level || ''
    }${lessonSingle?.class?.group || ''} анги`;

    const isShowModal = () => {
        setShow(true);
    };
    const isCancelModal = () => {
        setTitle("");
        setDescription("");
        setTempFile([]);
        setShow(false);
    };
    const onSubmit = async () => {
        const uploadData = new FormData();
        uploadData.append('title', title);
        uploadData.append('description', description);
        uploadData.append('lesson', lessonId);
        uploadData.append('file', tempFile[0]);
        if (title !== '' && description !== '') {
            const response = await fetch(
                `http://localhost:3000/api/teacher/topic/submit`,
                {
                    method: 'POST',
                    headers: {
                        Authorization: `bearer ${Cookies.get('token')}`,
                    },
                    body: uploadData,
                }
            );
            const result = await response.json();
            if (result.success === true) {
                message.success('Хүсэлт амжилттай');
                if(result?._id) {
                    setLessonSingle((less) => ({
                        ...less,
                        topics: (lessonSingle.topics || []).map(topic => {
                            if (compareIds(topic?._id, result?._id)) {
                                return result?.topic;
                            }
                            return topic;
                        })
                    }));
                } else {
                    setLessonSingle((less) => ({
                        ...less,
                        topics: [...(lessonSingle.topics || []), result?.topic]
                    }));
                }
                isCancelModal();
            } else {
                message.warning('Хүсэлт амжилтгүй');
            }
        } 
    };

    const deleteTopic = async (id) => {
        const data = {
            _id: id,
        };
        const response = await fetch(
            `http://localhost:3000/api/teacher/topic/delete`,
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
        if (result.success === true) {
            message.success('Сэдэв амжилттай устгагдлаа');
            setLessonSingle((less) => ({
                ...less,
                topics: (lessonSingle.topics || []).filter(topic => !compareIds(topic?._id, result?._id))
            }));
        } else {
            message.warning('Хүсэлт амжилтгүй');
        }
    };


    const [tempFile, setTempFile] = useState([]);

    console.log(title);
    return (
        <div style={{ width: '100%' }}>
            <Container size="full">
                <HeaderWithBack
                    title={headerTitle}
                    action={
                        <ConfirmPlan
                            tempFile={tempFile}
                            setTempFile={setTempFile}
                            title={title}
                            description={description}
                            setTitle={setTitle}
                            setDescription={setDescription}
                            show={show}
                            openModal={isShowModal}
                            cancelModal={isCancelModal}
                            onSubmit={onSubmit}
                        />
                    }
                />

                <div className="lessonSingle-header">
                    Хичээлийн сэдэвчилсэн төлөвлөгөө
                </div>

                <div className="lessonSingle-card-contain">
                    {lessonSingle && lessonSingle.topics  ? (
                        (lessonSingle?.topics || []).map((el, key) => (
                            <Link to={el._id} key={key}>
                                <Card style={{ width: '100%' }}>
                                    <div className="topic-item-contain">
                                        <div className="">
                                            <div className="lessonSingle-card-header">
                                                {el?.title || ''}
                                            </div>
                                            <div className="lessonSingle-card-content">
                                                {el?.description || ''}
                                            </div>
                                        </div>
                                        <div
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <PopConfirm
                                                title="Та сэдэв устгах гэж байна!!!"
                                                okText="Зөвшөөрөх"
                                                cancelText="Цуцлах"
                                                onFinish={(e) => {
                                                    deleteTopic(el._id);
                                                }}
                                            >
                                                <Button
                                                    className="announDelete"
                                                    style={{ color: 'red' }}
                                                >
                                                    Устгах
                                                </Button>
                                            </PopConfirm>
                                        </div>
                                    </div>
                                </Card>
                            </Link>
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
                </div>
            </Container>
        </div>
    );
};
