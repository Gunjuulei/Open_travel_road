import React, { useState } from 'react';
import {
    Form,
    Modal,
    Button,
    Input,
    Text,
    Icons,
    Upload,
} from '../../../atoms';

import '../style.css';

export const ConfirmPlan = ({
    description,
    setDescription,
    title,
    setTitle,
    openModal,
    tempFile,
    setTempFile,
    cancelModal,
    onSubmit,
    show,
}) => {
    return (
        <div className="confirmModal-contain">
            <Button
                className="addPlan"
                type="primary"
                onClick={() => openModal()}
            >
                <Icons.PlusIcon />
                Төлөвлөгөө нэмэх
            </Button>
            <Modal
                title="Төлөвлөгөө нэмэх"
                onOk={onSubmit}
                onCancel={cancelModal}
                open={show}
                okText="Нэмэх"
                cancelText="Цуцлах"
            >
                <div className="confirmModal-item">
                    <Text className="confirmModal-item-topic">Сэдэв</Text>
                    <Input
                        value={title}
                        placeholder="Сэдэв оруулах..."
                        setUsername={(e) => setTitle(e)}
                    />
                </div>
                <div
                    className="confirmModal-item-2"
                    style={{ marginTop: '1rem' }}
                >
                    <Text className="confirmModal-item-topic">
                        Хичээлийн тухай
                    </Text>
                    <Input
                        value={description}
                        style={{ minHeight: '50px' }}
                        setUsername={(e) => setDescription(e)}
                    />
                </div>
                <div
                    className="confirmModal-item-2"
                    style={{ marginTop: '1rem' }}
                >
                    <Text className="confirmModal-item-topic">Материал</Text>
                    <Upload
                        fileList={tempFile}
                        beforeUpload={(file, fileList) => {
                            setTempFile([file]);
                            return false;
                        }}
                    >
                        <Button icon={<Icons.SendIcon />} type="primary">
                            <Text>Материал хавсаргах</Text>
                        </Button>
                    </Upload>
                </div>
            </Modal>
        </div>
    );
};
