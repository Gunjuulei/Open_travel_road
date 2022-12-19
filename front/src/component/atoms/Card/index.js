import React from 'react';
import './style.css';

export function Card({ className, children, style }) {
    return (
        <div className={`card-atom ${className}`} style={style}>
            {children}
        </div>
    );
}
