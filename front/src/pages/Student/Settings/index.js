import React from 'react';
import { Container } from '../../../component/Container';
import { Header } from '../../../component/molecules';
import { Settings } from '../../../component/organisms';

export const StudentSetting = ({user}) => {
    return (
        <div style={{ width: '100%', height: 'fit-content' }}>
            <Header title="Тохиргоо" />
            <Container size="full">
                <Settings user={user}/>
            </Container>
        </div>
    );
};
