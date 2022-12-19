import { Modal } from 'antd';
import React from 'react';
import { Button, Input, Text, Select, Icons } from '../../../atoms';

import '../style.css';

export const AddLessonModal = ({
    handleOk,
    setLessonTitle,
    setLessonClass,
    lessonClass,
    lessonTitle,
    handleCancel,
    showModal,
    isModalOpen,
    classes,
}) => {
    return (
        <div className="addLesson-contain">
            <Button className="addLesson" onClick={showModal}>
                <Icons.PlusIconDark />
                Хичээл нэмэх
            </Button>
            <Modal
                className="modal"
                title="Хичээл нэмэх"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Нэмэх"
                cancelText="Цуцлах"
            >
                <div className="addLesson-contain">
                    <div className="addLesson-item">
                        <Text className="addLesson-item-topic">Анги бүлэг</Text>
                        <Select
                            placeholder="Анги сонгох..."
                            options={(classes || []).map((el) => ({
                                label: `${el.level || ''}${el.group || ''}`,
                                value: el._id || '',
                            }))}
                            setSelectValue={(e) => setLessonClass(e)}
                            defaultValue={lessonClass}
                        />
                    </div>
                    <div className="addLesson-item-2">
                        <Text className="addLesson-item-topic">
                            Хичээлийн нэр
                        </Text>
                        <Input
                            placeholder="Нэр оруулна уу..."
                            setUsername={setLessonTitle}
                            height="34px"
                            value={lessonTitle}
                        />
                    </div>
                </div>
            </Modal>
        </div>
    );
};
