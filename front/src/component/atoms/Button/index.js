import { Button as AntdButton } from 'antd';
import React from 'react';

export const Button = ({ style, ...props }) => (
    <AntdButton
        style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            ...(style || {})
        }}
        {...props}
    />
);
