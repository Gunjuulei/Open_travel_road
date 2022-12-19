import React from 'react';
import { StudentGradeTable } from '../../../../component/organisms/Table';
import '../style.css';

export const ParentLessonSingleGrade = ({ score }) => {
    return (
        <div className="lessonSingle-attendance">
            <StudentGradeTable score={score} />
        </div>
    );
};
