import { useEffect, useState } from 'react';
import { MoreOutlined } from '@ant-design/icons';
import { Header } from '../../../component/molecules';
import { Container } from '../../../component/Container';
import { ClassTable, Tabbar } from '../../../component/organisms';
import {
    Button,
    Card,
    Empty,
    PopConfirm,
    Popover,
    Tag,
} from '../../../component/atoms';
import {
    AddClassModal,
    AddStudentModal,
    EditClassModal,
} from '../../../component/organisms/Modal';
import { compareIds } from '../../../utils/util';
import {
    addClassStuFetch,
    deleteClassFetch,
    getClassFetch,
    getClassStuFetch,
    submitClassFetch,
    submitEditClassFetch,
} from '../../GetDataFromApi/Teacher';

import './style.css';

const TeacherClassStudents = ({
    classes,
    isDeleteClass,
    setShowEditModal,
    showEditModal,
    openEditModal,
}) => {
    return classes?.length > 0 ? (
        <div className="teacher-class-card-contain">
            {classes?.map((el, key) => (
                <Card className="teacher-class-card" key={key}>
                    <div className="teacher-class-card-first-item">
                        <Popover
                            content={
                                <>
                                    {' '}
                                    <div className="popover-contain">
                                        <Button
                                            type="primary"
                                            onClick={() =>
                                                openEditModal({
                                                    classId: el._id,
                                                    level: el?.level, 
                                                    group: el?.group 
                                                })
                                            }
                                        >
                                            Засах
                                        </Button>
                                        <PopConfirm
                                            title="Анги устгах уу?"
                                            okText="Устгах"
                                            cancelText="Цуцлах"
                                            onFinish={() =>
                                                isDeleteClass({
                                                    _id: el?._id,
                                                })
                                            }
                                            okButtonProps={{
                                                type: 'danger',
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
                    <div className="teacher-class-card-item">
                        {`${el.level || ''}${el.group || ''}`} анги
                        {el?.level > 0 && el?.level < 6 ? (
                            <Tag color="pink" backgroundColor="pink">
                                Бага анги
                            </Tag>
                        ) : el?.level > 5 && el?.level < 10 ? (
                            <Tag color="green" backgroundColor="green">
                                Дунд анги
                            </Tag>
                        ) : el?.level > 9 ? (
                            <Tag color="purple" backgroundColor="purple">
                                Ахлах анги
                            </Tag>
                        ) : (
                            ''
                        )}
                    </div>
                </Card>
            ))}
        </div>
    ) : (
        <div style={{ margin: '1rem 0', height: '50vh' }}>
            <Empty title="Анги байхгүй байна" />
        </div>
    );
};

const TeacherClassTeachers = ({ classes }) => {
    return (
        <div className="teacher-class-table-contain">
            <ClassTable classes={classes} />
        </div>
    );
};

export const TeacherClass = ({ user }) => {
    const [level, setLevel] = useState('');
    const [group, setGroup] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [classes, setClasses] = useState([]);
    const [isClassId, setIsClassId] = useState('');
    const [isStuId, setIsStuId] = useState([]);
    const [isClassStu, setIsClassStuId] = useState('');
    const [showEditModal, setShowEditModal] = useState(false);
    const [editClassId, setEditClassid] = useState('');
    const [editLevel, setEditLevel] = useState('')
    const [editGroup, setEditGroup] = useState('')
    const pageSize = 0;
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const showModal2 = () => {
        setIsModalOpen2(true);
    };

    const handleCancel2 = () => {
        setIsModalOpen2(false);
    };

    const openEditModal = ({ classId, level, group }) => {
        setShowEditModal(true);
        setEditClassid(classId);
        setEditLevel(level)
        setEditGroup(group)
    };

    useEffect(() => {
        getClassFetch({ setClasses }).then(
            () =>
                (classes || []).find((lesson) => {
                    if (compareIds(lesson?._id)) {
                        return true;
                    }
                    return false;
                })?.class?._id
        );
        getClassStuFetch({
            pageNum: 0,
            pageSize: pageSize,
            setIsClassStuId,
        });
    }, []);

    const handleOk = (e) => {
        submitClassFetch({
            level: parseInt(level),
            group: group,
            handleCancel,
            setClasses,
        });
    };
    const handleOkEditModal = (e) => {
        submitEditClassFetch({
            level: parseInt(editLevel),
            group: editGroup,
            classId: editClassId,
            setClasses,
            setShowEditModal
        });
    };
    const AddStudent = () => {
        addClassStuFetch({
            isClassId,
            isStuId,
            setIsModalOpen2,
        });
    };

    const deleteClass = ({ _id }) => {
        deleteClassFetch({ _id });
        console.log(_id);
    };

    return (
        <div style={{ width: '100%', height: 'fit-content' }}>
            <Header
                title="Ангиуд "
                action={
                    <div className="addModalContian">
                        <AddClassModal
                            handleOk={handleOk}
                            setGroup={setGroup}
                            setLevel={setLevel}
                            handleCancel={handleCancel}
                            isModalOpen={isModalOpen}
                            showModal={showModal}
                        />
                        <EditClassModal
                            setGroup={setEditGroup}
                            setLevel={setEditLevel}
                            handleCancel={handleCancel}
                            showEditModal={showEditModal}
                            setShowEditModal={setShowEditModal}
                            openEditModal={openEditModal}
                            handleOk={handleOkEditModal}
                            level={editLevel}
                            group={editGroup}
                        />
                        <AddStudentModal
                            submitOk={AddStudent}
                            setIsClassId={setIsClassId}
                            students={isClassStu}
                            handleCancel={handleCancel2}
                            isModalOpen={isModalOpen2}
                            showModal={showModal2}
                            classes={classes}
                            setIsStuId={setIsStuId}
                        />
                    </div>
                }
            />
            <Container size="full" className="clearPadding">
                <Tabbar
                    tabs={[
                        {
                            title: 'Бүх ангиуд',
                            content: (
                                <TeacherClassStudents
                                    classes={classes}
                                    isDeleteClass={deleteClass}
                                    setShowEditModal={setShowEditModal}
                                    showEditModal={showEditModal}
                                    openEditModal={openEditModal}
                                />
                            ),
                            header: '1',
                        },
                        // {
                        //     title: 'Миний ангиуд',
                        //     content: <TeacherClassTeachers classes={classes} />,
                        //     header: '2',
                        // },
                    ]}
                />
            </Container>
        </div>
    );
};
