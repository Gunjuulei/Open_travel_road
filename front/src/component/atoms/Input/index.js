import React from 'react';
import './input.css';
// import styled from "styled-components";

export const Input = ({
    width,
    height,
    minHeight,
    label,
    color,
    placeholder,
    setUsername,
    background,
    labelFor,
    icon,
    type,
    value
}) => {
    return (
        <div className="Input">
            <label for={labelFor ? labelFor : ''}>{label}</label>
            {icon !== '' ? <div className="isIcon">{icon}</div> : null}
            <input
                style={{
                    width: `${width}`,
                    height: `${height}`,
                    minHeight: `${minHeight}`,
                    color: `${color}`,
                    background: `${background}`,
                    padding: `${icon ? '10px 36px' : null}`,
                }}
                placeholder={placeholder}
                onChange={(e) => setUsername(e.target.value)}
                type={type}
                autoComplete='off'
                value={value}
            />
        </div>
    );
};