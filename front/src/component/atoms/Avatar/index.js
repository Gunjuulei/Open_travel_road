import { Image } from 'antd';
import React from 'react';
import avatar from '../../../images/avatar.png';
import './style.css';

export const Avatar = ({ width, height }) => {
    return (
        <Image
            src={avatar}
            preview={false}
            width={width || 32}
            height={height || 32}
        />
    );
};
