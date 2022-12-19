import React from 'react';
import { Select as IsSelect } from 'antd';
import './style.css';

export const Select = ({ options, defaultValue, setSelectValue, value, placeholder, mode, disabled }) => {
    return (
        <div className="contain-select">
            <IsSelect
                optionFilterProp="children"
                filterOption={(input, option) =>
                    (option?.label ?? '')
                        .toLowerCase()
                        .includes(input.toLowerCase())
                }
                showSearch
                style={{
                    width: 120,
                }}
                options={options}
                onChange={(e) => setSelectValue(e)}
                value={value}
                defaultValue={defaultValue}
                placeholder={placeholder}
                mode={mode || ''}
                disabled={disabled}
            />
        </div>
    );
};
