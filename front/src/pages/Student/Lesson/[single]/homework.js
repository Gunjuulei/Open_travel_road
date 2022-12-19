import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, Card, Empty,Message as message } from '../../../../component/atoms';
import { ConfirmPlan } from '../../../../component/organisms/Modal';
import { compareIds } from '../../../../utils/util';

import '../style.css';

export const StudentLessonSingleHomework = ({ homework, lessons }) => {
    const { lessonId } = useParams();
    const [tempFile, setTempFile] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [show, setShow] = useState(false);

    const [lessonSingle, setLessonSingle] = useState({});

    useEffect(() => {
        setLessonSingle((lessons || []).find((el) => el._id === lessonId));
    }, [lessons, lessonId]);

    const isShowModal = () => {
        setShow(true);
    };
    const isCancelModal = () => {
        setTitle('');
        setDescription('');
        setTempFile([]);
        setShow(false);
    };

    const onSubmit = async () => {
        const uploadData = new FormData();
        uploadData.append('topic', title);
        uploadData.append('description', description);
        uploadData.append('_id', lessonId);
        uploadData.append('file', tempFile[0]);
        if (title !== '' && description !== '') {
            const response = await fetch(
                `http://localhost:3000/api/student/homework/submit`,
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
                if (result?._id) {
                    setLessonSingle((less) => ({
                        ...less,
                        topics: (lessonSingle.topics || []).map((topic) => {
                            if (compareIds(topic?._id, result?._id)) {
                                return result?.topic;
                            }
                            return topic;
                        }),
                    }));
                } else {
                    setLessonSingle((less) => ({
                        ...less,
                        topics: [...(lessonSingle.topics || []), result?.topic],
                    }));
                }
                isCancelModal();
            } else {
                message.warning('Хүсэлт амжилтгүй');
            }
        }
    };
    return (
        <>
            <div className='isAddPlanModal'>
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
            </div>
            <div className="-card-contain">
                {homework?.length > 0 ? (
                    homework?.map((aa, key) => (
                        <Card style={{ width: '100%' }} key={key}>
                            <div className="studentLessonCard">
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <Avatar />
                                    {aa?.title || ''}
                                </div>
                                <div className="studentLessonCard-item">
                                    {aa?.text || ''}
                                </div>
                            </div>
                        </Card>
                    ))
                ) : (
                    <div
                        style={{
                            width: '100%',
                            height: '50vh',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Empty title="Даалгавар байхгүй байна" />
                    </div>
                )}
            </div>
        </>
    );
};
