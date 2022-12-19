import React from 'react';
import { Title } from '../../atoms';
import './style.css';

export const Header = ({ title, action }) => {
    return (
        <div className="header-contain">
            <Title title={title} size="30px" fontWeight="500" />
            <div>{action ? action : ''}</div>
        </div>
    );
};
