import React from 'react';
import { Avatar, Card } from '../../../../component/atoms';
import { Arr } from '../../../../utils/util';
import '../style.css';

export const ParentLessonSingleHomework = ({ homework }) => {
    return (
        <div className="lesson-card-contain">
            {(homework || []).map((aa, key) => (
                <Card style={{ width: '100%' }} key={key}>
                    <div className="studentLessonCard">
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <Avatar />
                            Ж.Түвшинжаргал
                        </div>
                        <div className="studentLessonCard-item">
                            {aa?.text || ''}
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
};
