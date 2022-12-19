import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Button,
    Card,
    Divider,
    Empty,
    Icons,
    Tag,
    Text,
} from '../../../../component/atoms';
import {
    AddFileIcon,
    FileIcon,
    XIcon,
} from '../../../../component/atoms/Icons';
import { Container } from '../../../../component/Container';
import { HeaderWithBack, PDF } from '../../../../component/molecules';
import { getHomeworksFetch } from '../../../GetDataFromApi/Student';
import { getTopicFetch } from '../../../GetDataFromApi/Student';
import '../style.css';

export const StudentLessonSingleBinary = () => {
    const { topicId, lessonId } = useParams();
    const [topic, setTopic] = useState([]);
    const [homework, setHomework] = useState([]);

    useEffect(() => {
        getTopicFetch({
            _id: topicId,
            setTopic,
        });
        getHomeworksFetch({
            lesson: lessonId,
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
                {topic?.description ? (
                    <Text className="lessonSingle-binary-header-content">
                        {topic?.description || ''}
                    </Text>
                ) : (
                    <div style={{ margin: '1rem 0', height: '10vh' }}>
                        <Empty title="Хоосон байна" />
                    </div>
                )}

                {/*  */}

                <Divider style={{ marginTop: '100px' }} />

                {/*  */}

                <div className="lessonSingle-material-header">
                    <Text className="lessonSingle-binary-middle-title">
                        Хичээлийн материал
                    </Text>
                    {/* <Button className="lessonSingle-binary-addBtn">
                        <AddFileIcon />
                        Нэмэх
                    </Button> */}
                </div>
                {/* <div className="lessonSingle-binary-middle-content-contain">
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
                </div> */}
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
                </div>
                {homework?.length > 0 ? (
                    (homework || []).map((el, key) => (
                        <Card
                            className="lessonSingle-binary-card"
                            style={{ marginTop: '1rem' }}
                            key={key}
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
                                    <span>
                                        {el?.created.slice(0, 10) || ''}
                                    </span>
                                </Text>
                            </div>
                        </Card>
                    ))
                ) : (
                    <div style={{ margin: '1rem 0', height: '30vh' }}>
                        <Empty title="Одоогоор даалгавар байхгүй байна" />
                    </div>
                )} */}
            </Container>
        </div>
    );
};
