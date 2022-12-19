import React from 'react';
import { StudentAttendanceTable } from '../../../../component/organisms/Table';
import '../style.css';

export const ParentLessonSingleAttendance = ({attendance}) => {
    return (
        <div className="lessonSingle-attendance">
            <StudentAttendanceTable attendance={attendance} />
        </div>
    );
};
