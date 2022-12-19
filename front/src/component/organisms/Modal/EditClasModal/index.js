import { Modal } from 'antd';
import React from 'react';
import { Text, Input } from '../../../atoms';

import '../style.css';

export const EditClassModal = ({
    setLevel,
    setGroup,
    handleOk,
    showEditModal,
    setShowEditModal,
    openEditModal,
    level,
    group,
}) => {
    console.log(level.group)
    return (
        <div className="addClass-contain">
            <Modal
                className="modalClass"
                title="Анги засах"
                open={showEditModal}
                onOk={handleOk}
                onCancel={() => setShowEditModal(false)}
                okText={<div className="antd-okBtn-style">Хадгалах</div>}
                cancelText="Цуцлах"
            >
                <div className="addClass-contain">
                    <div className="addClass-item">
                        <Text className="addClass-item-topic">Анги</Text>
                        <Input
                            placeholder="Анги"
                            setUsername={setLevel}
                            value={level}
                        />
                    </div>
                    <div className="addClass-item">
                        <Text className="addClass-item-topic">Бүлэг</Text>
                        <Input
                            placeholder="Бүлэг"
                            setUsername={setGroup}
                            value={group}
                        />
                    </div>
                </div>
            </Modal>
        </div>
    );
};
