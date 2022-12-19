import React from 'react';

export const Tag = ({ color, backgroundColor, children }) => {
    return (
        <div
            style={{
                color: `${
                    color === 'purple'
                        ? '#5925DC'
                        : color === 'pink'
                        ? '#de1c87'
                        : color === 'blue'
                        ? '#1570EF'
                        : color === 'green'
                        ? '#027A48'
                        : 'white'
                }`,
                backgroundColor: `${
                    backgroundColor === 'purple'
                        ? '#EFF8FF'
                        : backgroundColor === 'pink'
                        ? '#F4F3FF'
                        : backgroundColor === 'blue'
                        ? '#EFF8FF'
                        : backgroundColor === 'green'
                        ? '#ECFDF3'
                        : 'white'
                }`,
                width: 'fit-content',
                padding: '2px 8px',
                borderRadius: '8px',
                fontSize: '12.5px'
            }}
        >
            {children}
        </div>
    );
};
