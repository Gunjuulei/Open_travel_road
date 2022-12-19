import { Popconfirm } from 'antd';
import React from 'react';

export const PopConfirm = ({
    title,
    okText,
    cancelText,
    onFinish,
    children,
    cancelButtonProps,
    okButtonProps,
}) => {
    return (
        <Popconfirm
            title={title || ''}
            okText={okText || ''}
            cancelText={cancelText || ''}
            onConfirm={() => onFinish()}
            cancelButtonProps={cancelButtonProps || {}}
            okButtonProps={okButtonProps || {}}
        >
            {children}
        </Popconfirm>
    );
};
