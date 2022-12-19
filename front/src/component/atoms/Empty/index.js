import React from 'react';
import { Empty as IsEmpty } from 'antd';
import "./style.css"

export const Empty = ({ title }) => {
    return (
        <div className='container-empty'>
            <IsEmpty description={title || 'Хоосон байна'} />
        </div>
    );
};
