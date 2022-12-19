import { Checkbox } from 'antd';
import React from 'react';
import { Avatar, Empty } from '../../../atoms';

import './style.css';

const columns = [
    {
        name: 'Он сар өдөр',
    },
    {
        name: 'Ирц',
    },
    {
        name: 'Багшын нэр',
    },
];

export const StudentAttendanceTable = ({ attendance }) => {
    return (
        <div className="attendance-table-contain">
            <div className="attendance-table-column">
                <div className="attendance-table-column-one">
                    {columns[0].name}
                </div>
                <div className="attendance-table-column-twoo">
                    {(columns || []).slice(1).map((el, key) => (
                        <div
                            className="attendance-table-collumn-two-child"
                            key={key}
                        >
                            {el.name || ''}
                        </div>
                    ))}
                </div>
            </div>
            <div className="attendance-table-data">
                {attendance?.length > 0 ? (
                    attendance?.map((el, key) => (
                        <div
                            className="attendance-table-data-child"
                            style={
                                key % 2 === 0
                                    ? { background: 'white' }
                                    : { background: '#f9fafb' }
                            }
                            key={key}
                        >
                            <div className="attendance-table-data-child-twoo">
                                {el?.created?.slice(0, 10)}
                            </div>
                            <div className="attendance-table-data-child-twoo">
                                {
                                    el?.homework || ''
                                }
                            </div>
                            <div className="attendance-table-data-child-one">
                                <Avatar />
                                {`${el?.teacher?.last_name || ''} ${
                                    el?.teacher?.first_name || ''
                                }`}
                            </div>
                        </div>
                    ))
                ) : (
                    <div style={{ margin: '1rem 0', height: '20vh' }}>
                        <Empty title="Одоогоор ирц байхгүй байна" />
                    </div>
                )}
            </div>
        </div>
    );
};
