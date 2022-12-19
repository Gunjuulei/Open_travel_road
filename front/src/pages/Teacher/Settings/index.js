import React from 'react';
import { Container } from '../../../component/Container';
import { Header } from '../../../component/molecules';
import { TeacherSettings } from '../../../component/organisms';

export const TeacherSetting = ({ user }) => {
    return (
        <div style={{ width: '100%', height: 'fit-content' }}>
            <Header title="Тохиргоо" />
            <Container size="full">
                <TeacherSettings user={user} />
            </Container>
        </div>
    );
};
