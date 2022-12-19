import React from 'react';
import { HomeworkTable } from '../../../../component/organisms/Table';

import '../style.css';

export const TeacherLessonSingleHomework = ({
    homework,
    students,
    lessons,
}) => {
    return (
        <div className="lessonSingle-attendance">
            <HomeworkTable
                homework={homework}
                students={students}
                lessons={lessons}
            />
        </div>
    );
};
