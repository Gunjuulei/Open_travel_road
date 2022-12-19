import { Upload as FromUpload } from 'antd';
import React from 'react';

export const Upload = ({ children, ...rest }) => {
    return <FromUpload accept='.pdf' {...rest}>{children}</FromUpload>;
};
