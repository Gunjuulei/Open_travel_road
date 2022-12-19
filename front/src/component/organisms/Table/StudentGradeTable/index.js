import React, { useState } from 'react';
import { Avatar, Empty, Input } from '../../../atoms';
import './style.css';

export const StudentGradeTable = ({ score, setScore }) => {
    const [editing, setEditing] = useState(false);
    const [change, setChange] = useState('');

    const columns = [
        {
            key: '1',
            name: 'Сэдвийн нэр',
        },
        {
            key: '2',
            name: 'Багшийн нэр',
        },
        {
            key: '3',
            name: 'Дундаж дүн',
        },
    ];

    return (
        <div className="grade-table-contain">
            <div className="grade-table-column">
                <div className="grade-table-column-one">{columns[0].name}</div>
                <div className="grade-table-column-twoo">
                    {(columns || []).slice(1).map((aa, key) => (
                        <div
                            className="grade-table-collumn-two-child"
                            key={key}
                        >
                            {aa?.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className="grade-table-data">
                {score?.length > 0 ? (
                    score?.map((el, key) => (
                        <div
                            className="grade-table-data-childd"
                            style={
                                key % 2 === 0
                                    ? { background: 'white' }
                                    : { background: '#f9fafb' }
                            }
                        >
                            <div className="grade-table-data-child-one">
                                {`${el?.topic?.title || ''}`}
                            </div>
                            <div className="grade-table-data-child-one">
                                <Avatar />
                                {`${el?.teacher?.last_name || ''} ${
                                    el?.teacher?.first_name || ''
                                }`}
                            </div>
                            <div className="grade-table-data-child-two">
                                {editing === false ? (
                                    <div
                                        style={{
                                            marginLeft: '1rem',
                                            marginTop: '8px',
                                        }}
                                    >
                                        {el?.points || 0}
                                    </div>
                                ) : (
                                    <Input
                                        type="text"
                                        width="45px"
                                        height="30px"
                                        setUsername={(e) => {
                                            setChange(e);
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <div style={{ margin: '1rem 0', height: '20vh' }}>
                        <Empty title="Одоогоор дүн байхгүй байна" />
                    </div>
                )}
            </div>
        </div>
    );
};
