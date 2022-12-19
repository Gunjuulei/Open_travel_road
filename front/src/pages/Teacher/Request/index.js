import React from 'react';
import { Container } from '../../../component/Container';
import { Header } from '../../../component/molecules';
import { Requests } from '../../../component/organisms';

import './style.css';

export const TeacherRequest = () => {
    return (
        <div style={{ width: '100%', height: 'fit-content' }}>
            <Header title="Хүсэлт гаргах" />
            <Container size="small">
                <Requests />
            </Container>
        </div>
    );
};
