import React, { useEffect, useState } from 'react';
import { Button, Card, Divider, Tag, Text } from '../../../../component/atoms';
import {
    AddFileIcon,
    FileIcon,
    XIcon,
} from '../../../../component/atoms/Icons';
import { Container } from '../../../../component/Container';
import { HeaderWithBack } from '../../../../component/molecules';
import { getHomeworksFetch } from '../../../GetDataFromApi/Student';
import { getTopicFetch } from '../../../GetDataFromApi/Teacher';
import '../style.css';

export const ParentLessonSingleBinary = () => {
    const [topic, setTopic] = useState([]);
    const [homework, setHomework] = useState([]);

    useEffect(() => {
        getTopicFetch({
            _id: '637b7821d658053d3a394612',
            setTopic,
        });
        getHomeworksFetch({
            lesson: '637b567b44e0426f13a930d2',
            setHomework,
        });
    }, []);
    return (
        <div style={{ width: '100%' }}>
            <Container size="full">
                <HeaderWithBack title={topic?.title || ''} />
                <Text className="lessonSingle-binary-header-title">
                    Хичээлийн тухай
                </Text>
                <Text className="lessonSingle-binary-header-content">
                    {topic?.description || ''}
                </Text>

                {/*  */}

                <Divider style={{ marginTop: '100px' }} />

                {/*  */}

                <div className="lessonSingle-material-header">
                    <Text className="lessonSingle-binary-middle-title">
                        Хичээлийн материал
                    </Text>
                    <Button className="lessonSingle-binary-addBtn">
                        <AddFileIcon />
                        Нэмэх
                    </Button>
                </div>
                <div className="lessonSingle-binary-middle-content-contain">
                    <Card className="lessonSingle-binary-card">
                        <div>
                            <Text className="lessonSingle-binary-card-header">
                                <FileIcon />
                                Унших даалгавар.doc
                            </Text>
                            <Text className="lessonSingle-binary-card-content">
                                2MB Document
                            </Text>
                        </div>
                        <XIcon />
                    </Card>
                    <Card className="lessonSingle-binary-card">
                        <div>
                            <Text className="lessonSingle-binary-card-header">
                                <FileIcon />
                                Унших даалгавар.doc
                            </Text>
                            <Text className="lessonSingle-binary-card-content">
                                2MB Document
                            </Text>
                        </div>
                        <XIcon />
                    </Card>
                </div>

                {/*  */}

                <div
                    className="lessonSingle-material-header"
                    style={{ marginTop: '100px' }}
                >
                    <Text className="lessonSingle-binary-middle-title">
                        Гэрийн даалгавар
                    </Text>
                </div>
                {(homework || []).map((el, key) => (
                    <Card
                        key={key}
                        className="lessonSingle-binary-card"
                        style={{ marginTop: '1rem' }}
                    >
                        <div>
                            <Tag color="purple" backgroundColor="purple">
                                {`${el?.class?.level || ''}${
                                    el?.class?.group || ''
                                } анги `}
                            </Tag>
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
                ))}
            </Container>
        </div>
    );
};
