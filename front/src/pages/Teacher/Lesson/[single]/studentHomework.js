import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Link, useParams } from 'react-router-dom';
import { Container } from '../../../../component/Container';
import { HeaderWithBack, PDF, PurePDF } from '../../../../component/molecules';
import { ConfirmPlan } from '../../../../component/organisms/Modal';
import {
    Button,
    Card,
    Empty,
    PopConfirm,
    Message as message,
    Text,
    Icons,
} from '../../../../component/atoms';

import '../style.css';
import { compareIds } from '../../../../utils/util';

export const StudentHomework = ({ lessons }) => {
    const { lessonId } = useParams();
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [topic, setTopic] = useState([]);
    const [tempFile, setTempFile] = useState([]);
    const [lessonSingle, setLessonSingle] = useState({});

    useEffect(() => {
        setLessonSingle((lessons || []).find((el) => el._id === lessonId));
    }, [lessons, lessonId]);

    const headerTitle = `${lessonSingle?.title || ''} ${
        lessonSingle?.class?.level || ''
    }${lessonSingle?.class?.group || ''} анги`;

    const onSubmit = async () => {
        const uploadData = new FormData();
        // uploadData.append('class', title);
        // uploadData.append('topic', topic);
        // uploadData.append('student_id', studetn_id);
        if (title !== '' && description !== '') {
            const response = await fetch(
                `http://localhost:3000/api/teacher/homework.single.get`,
                {
                    method: 'GET',
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
            } else {
                message.warning('Хүсэлт амжилтгүй');
            }
        }
    };

    return (
        <div style={{ width: '100%' }}>
            <Container size="full">
                <HeaderWithBack title={headerTitle} />

                <div
                    className="lessonSingle-header"
                    style={{ marginTopL: '3rem', fontSize: '16px', fontWeight: 500 }}
                >
                    Илгээсэн файл
                </div>

                <div className="lessonSingle-binary-middle-content-contain">
                    <PurePDF path={"http://localhost:3000/63941889db828ab9de2bf5ab/1670954406070/sample.pdf"} />
                </div>                
            </Container>
        </div>
    );
};
