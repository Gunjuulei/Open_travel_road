import React from 'react';
import { Button, Modal } from '../../../atoms';

import '../style.css';

export const ConfirmModal = ({
    handleShow,
    handleCancel,
    deleteFunc,
    show,
    id,
}) => {
    return (
        <div className="confirmModal-contain">
            <Button
                className="announDelete"
                onClick={handleShow}
                style={{ color: 'red' }}
            >
                Устгах
            </Button>
            <Modal
                className="modal"
                title="Тэмдэглэл устгах"
                open={show}
                onOk={() => deleteFunc({ id: id })}
                onCancel={handleCancel}
                okText="Зөвшөөрөх"
                cancelText="Цуцлах"
            >
                <p>Та тэмдэглэл устгах гэж байна!!!</p>
            </Modal>
        </div>
    );
};
