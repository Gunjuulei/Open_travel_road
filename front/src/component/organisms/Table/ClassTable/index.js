import React from 'react';
import { Avatar } from '../../../atoms';
import './style.css';

export const ClassTable = ({ classes }) => {
    const columns = [
        {
            name: 'Анги даасан багш',
        },
        {
            name: 'Ирц',
        },
        {
            name: 'Голч',
        },
        {
            name: 'Асран хамгаалагч',
        },
    ];

    return (
        <div className="class-table-contain">
            <div className="class-table-column">
                <div className="class-table-column-one">{columns[0].name}</div>
                <div className="class-table-column-two">
                    {(columns || []).slice(1).map((el, key) => (
                        <div
                            className="class-table-collumn-two-child"
                            key={key}
                        >
                            {el.name || ''}
                        </div>
                    ))}
                </div>
            </div>
            <div className="class-table-data">
                {(classes || []).map((aa, key) => (
                    <div
                        className="class-table-data-child"
                        style={
                            key % 2 === 0
                                ? { background: 'white' }
                                : { background: '#f9fafb' }
                        }
                    >
                        <div className="class-table-data-child-one">
                            <Avatar />
                            {`${(aa?.teacher || '')?.first_name || ''} ${
                                (aa?.teacher || '')?.last_name || ''
                            }`}
                        </div>
                        <div className="class-table-data-child-two">
                            <div>{0}</div>
                            <div>{0}</div>
                            <div className="class-table-data-child-two-guardian">
                                <Avatar />
                                {''}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
