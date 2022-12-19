import React from 'react';

export const Text = ({ className, style, children }) => {
    return (
        <div className={className} style={style ? style : null}>
            {children}
        </div>
    );
};
