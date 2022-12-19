import { Modal } from 'antd';
import React from 'react';
import { Button,  Text, Icons, Select } from '../../../atoms';

import '../style.css';

export const AddStudentModal = ({
    submitOk,
    handleCancel,
    showModal,
    isModalOpen,
    classes,
    setIsClassId,
    setIsStuId,
    students
}) => {
    console.log(students);
    return (
        <div className="addClass-contain">
            <Button className="addStu" onClick={showModal}>
                <Icons.PlusIconWhite />
                Сурагч нэмэх
            </Button>
            <Modal
                className="addStuModal"
                title="Сурагч нэмэх"
                open={isModalOpen}
                onOk={submitOk}
                onCancel={handleCancel}
                okText={<div className="antd-okBtn-style">Хадгалах</div>}
                cancelText="Цуцлах"
            >
                <div className="addClass-contain">
                    <div className="addClass-item">
                        <Text className="addClass-item-topic">Анги</Text>
                        <Select
                            placeholder="Анги сонгох..."
                            options={(classes || []).map((el) => ({
                                label: `${el.level || ''}${el.group || ''}`,
                                value: el._id || '',
                            }))}
                            setSelectValue={(e) => setIsClassId(e)}
                        />
                    </div>
                    <div className="addClass-item">
                        <Text className="addClass-item-topic">Сурагч</Text>
                        <Select
                            placeholder="Сурагч сонгох..."
                            options={(students || []).map((el) => ({
                                label: `${(el?.last_name || '')?.slice(0, 1)}.${el?.first_name}`,
                                value: el._id || '',
                            }))}
                            setSelectValue={(e) => setIsStuId(e)}
                            mode="multiple"
                        />
                    </div>
                </div>
            </Modal>
        </div>
    );
};
