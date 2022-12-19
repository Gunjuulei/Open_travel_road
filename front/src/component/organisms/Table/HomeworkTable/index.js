import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Empty } from '../../../atoms';
import './style.css';

export const HomeworkTable = ({ homework, students, lessons }) => {
    const columns = [
        {
            key: '1',
            name: 'Анги даасан багш',
        },
        {
            key: '2',
            name: 'Илгээсэн эсэх',
        },
    ];

    return (
        <div className="grade-table-contain">
            <div className="grade-table-column">
                <div className="grade-table-column-one">{columns[0].name}</div>
                <div className="grade-table-column-two">
                    {(columns || []).slice(1).map((el, key) => (
                        <div
                            className="grade-table-collumn-two-child"
                            key={key}
                        >
                            {el.name || ''}
                        </div>
                    ))}
                </div>
            </div>
            <div className="grade-table-data">
                {students?.length > 0 ? (
                    (students || []).map((el, key) => (
                        <Link to={el?._id} style={{ width: '100%' }}>
                            <div
                                className="grade-table-data-child"
                                style={
                                    key % 2 === 0
                                        ? { background: 'white' }
                                        : { background: '#f9fafb' }
                                }
                            >
                                <div className="grade-table-data-child-one">
                                    <Avatar />
                                    {`${el?.last_name || ''} ${
                                        el?.first_name || ''
                                    }`}
                                </div>
                                <div className="grade-table-data-child-two">
                                    <div>
                                        {el?.status === 'active' ? (
                                            <div style={{ color: '#039855' }}>
                                                Илгээсэн
                                            </div>
                                        ) : (
                                            <div style={{ color: '#D92D20' }}>
                                                Илгээгээгүй
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div style={{ margin: '1rem 0' }}>
                        <Empty title="Одоогоор сурагч байхгүй байна" />
                    </div>
                )}
            </div>
        </div>
    );
};
