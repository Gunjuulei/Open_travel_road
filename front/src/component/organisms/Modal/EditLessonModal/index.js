import { Modal } from 'antd';
import React from 'react';
import { Button, Input, Text, Select, Icons } from '../../../atoms';

import '../style.css';

export const EditLessonModal = ({
    handleOk,
    setLessonTitle,
    setLessonClass,
    lessonClass,
    lessonTitle,
    showModal,
    setEditModal,
    classes,
}) => {
    return (
        <div className="addLesson-contain">
            <Modal
                className="modal"
                title="Хичээл засах"
                open={showModal}
                onOk={handleOk}
                onCancel={() =>  setEditModal(false)}
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
