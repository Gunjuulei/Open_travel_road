import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Title, Icons } from '../../atoms';
import './style.css';

export const HeaderWithBack = ({ title, action }) => {
    const navigate = useNavigate();
    return (
        <div className="headerWithBack-contain">
            <div className="headerWithBack">
                <div
                    className="headerWithBack-item"
                    onClick={() => navigate(-1)}
                >
                    <Icons.BackIcon />
                    Буцах
                </div>
                <Title title={title} size="30px" fontWeight="500" />
            </div>
            <div>{action ? action : ''}</div>
        </div>
    );
};
