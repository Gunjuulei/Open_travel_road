import React from 'react';
import './style.css';

export const TextArea = ({ minHeight, description, placeholder, setValue, value }) => {
    return (
        <div className="textArea">
            <textarea
            value={value}
                style={{ minHeight: `${minHeight}` }}
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
            >
                {description}
            </textarea>
        </div>
    );
};
