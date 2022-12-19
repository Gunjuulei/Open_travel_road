import React from 'react';
import { TeacherGradeTable } from '../../../../component/organisms/Table';

import '../style.css';

export const TeacherLessonSingleGrade = ({ score, students, lessons }) => {
    return (
        <div className="lessonSingle-attendance">
            <TeacherGradeTable
                score={score}
                students={students}
                lessons={lessons}
            />
        </div>
    );
};
