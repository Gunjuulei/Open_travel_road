import React from 'react';
import { TeacherAttendanceTable } from '../../../../component/organisms/Table/TeacherAttendanceTable';

import '../style.css';

export const TeacherLessonSingleAttendance = ({
    attendance,
    students,
    lessons,
}) => {
    return (
        <div className="lessonSingle-attendance">
            <TeacherAttendanceTable
                attendance={attendance}
                students={students}
                lessons={lessons}
            />
        </div>
    );
};
