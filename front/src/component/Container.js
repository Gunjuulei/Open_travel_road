import React from 'react';
import './Container.css';

export const Container = ({ children, size, className }) => {
    return (
        <div className={`container ${className}`}>
            <div
                className="contain"
                style={{
                    width: `${
                        size === 'full'
                            ? '90%'
                            : size === 'medium'
                            ? '70%'
                            : '45%'
                    }`,
                }}
            >
                {children}
            </div>
        </div>
    );
};
