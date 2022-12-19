import React from 'react';

export const Title = ({ title, size, fontWeight = 400 }) => {
    return (
        <div style={{ fontSize: `${size}`, fontWeight: `${fontWeight}` }}>
            {title}
        </div>
    );
};
