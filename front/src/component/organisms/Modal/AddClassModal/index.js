import { Modal } from 'antd';
import React from 'react';
import { Button, Input, Text, Icons } from '../../../atoms';

import '../style.css';

export const AddClassModal = ({
    setLevel,
    setGroup,
    handleOk,
    handleCancel,
    showModal,
    isModalOpen,
}) => {
    return (
        <div className="addClass-contain">
            <Button className="addLesson" onClick={showModal}>
                <Icons.PlusIconDark />
                Анги үүсгэх
            </Button>
            <Modal
                className="modalClass"
                title="Даасан анги"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okText={<div className="antd-okBtn-style">Хадгалах</div>}
                cancelText="Цуцлах"
            >
                <div className="addClass-contain">
                    <div className="addClass-item">
                        <Text className="addClass-item-topic">Анги</Text>
                        <Input placeholder="Анги" setUsername={setLevel} />
                    </div>
                    <div className="addClass-item">
                        <Text className="addClass-item-topic">Бүлэг</Text>
                        <Input placeholder="Бүлэг" setUsername={setGroup} />
                    </div>
                </div>
            </Modal>
        </div>
    );
};
